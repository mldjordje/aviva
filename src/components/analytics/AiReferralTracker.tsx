"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

type AiSource = {
  domain: string;
  source: string;
};

const AI_REFERRERS: AiSource[] = [
  { domain: "chatgpt.com", source: "chatgpt" },
  { domain: "openai.com", source: "openai" },
  { domain: "claude.ai", source: "claude" },
  { domain: "perplexity.ai", source: "perplexity" },
  { domain: "gemini.google.com", source: "gemini" },
  { domain: "copilot.microsoft.com", source: "copilot" },
  { domain: "you.com", source: "you" },
];

const AI_HINTS = ["chatgpt", "openai", "claude", "perplexity", "gemini", "copilot", "you"];

function detectSourceFromReferrer(referrer: string): string | null {
  if (!referrer) {
    return null;
  }

  try {
    const host = new URL(referrer).hostname.toLowerCase();
    const match = AI_REFERRERS.find((entry) => host === entry.domain || host.endsWith(`.${entry.domain}`));
    return match?.source ?? null;
  } catch {
    return null;
  }
}

function detectSourceFromParams(params: URLSearchParams): string | null {
  const candidates = [
    params.get("utm_source"),
    params.get("source"),
    params.get("ref"),
    params.get("from"),
  ]
    .filter(Boolean)
    .map((value) => value!.toLowerCase());

  for (const candidate of candidates) {
    const hint = AI_HINTS.find((item) => candidate.includes(item));
    if (hint) {
      return hint;
    }
  }

  return null;
}

export default function AiReferralTracker() {
  useEffect(() => {
    const currentPath = `${window.location.pathname}${window.location.search}`;
    const sessionKey = `ai-visit-tracked:${currentPath}`;

    if (sessionStorage.getItem(sessionKey)) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const sourceFromParams = detectSourceFromParams(params);
    const sourceFromReferrer = detectSourceFromReferrer(document.referrer);
    const utmSource = params.get("utm_source")?.toLowerCase() ?? "";
    const utmMedium = params.get("utm_medium")?.toLowerCase() ?? "";

    const mediumLooksAi = utmMedium.includes("ai") || utmMedium.includes("assistant");
    const source = sourceFromParams ?? sourceFromReferrer ?? (mediumLooksAi ? utmSource || "unknown_ai" : null);

    if (!source) {
      return;
    }

    track("ai_visit", {
      source,
      medium: utmMedium || "referrer",
      landing_path: window.location.pathname,
    });

    sessionStorage.setItem(sessionKey, "1");
  }, []);

  return null;
}
