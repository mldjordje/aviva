"use client"
import { useEffect, useState } from "react";
import CountUp from "react-countup";

interface CountType {
  number: number;
  text?: string;
  add_style?: boolean;
  shouldAnimate?: boolean;
}

const Count = ({ number, text, add_style, shouldAnimate = true }: CountType) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [shouldAnimate, hasAnimated]);

  const startValue = hasAnimated ? 0 : number;
  const duration = hasAnimated ? 2 : 0;

  return (
    <CountUp start={startValue} end={number} duration={duration} preserveValue>
      {({ countUpRef }) => (
        <div className={`d-flex ${add_style ? "align-items-center justify-content-center" : ""} `}>
          <strong ref={countUpRef} />
          {text && <span>{text}</span>}
        </div>
      )}
    </CountUp>
  );
};

export default Count;
