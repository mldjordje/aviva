import team_avatar_1 from "@/assets/aviva-nove-slike/mila.webp";
import team_avatar_2 from "@/assets/aviva-nove-slike/rad-mila-i-vladimir.webp";
import team_avatar_3 from "@/assets/aviva-nove-slike/petra-kordinator-klinike.webp";

import { StaticImageData } from "next/image";

interface DataType {
  id: number;
  img: StaticImageData;
  avatar_name: string;
  designation: string;
  link: string;
}

const team_data: DataType[] = [
  {
    id: 1,
    img: team_avatar_1,
    avatar_name: "Dr Mila Đorđević",
    designation: "specijalizant plastične, rekonstruktivne i estetske hirurgije",
    link: "/nas-tim/Mila",
  },
  {
    id: 2,
    img: team_avatar_2,
    avatar_name: "Dr Vladimir Sokolović",
    designation: "specijalizant plastične, rekonstruktivne i estetske hirurgije",
    link: "/nas-tim/Vladimir",
  },
  {
    id: 3,
    img: team_avatar_3,
    avatar_name: "Petra",
    designation: "kordinatorka klinike",
    link: "/nas-tim/Petra",
  },
];

export default team_data;
