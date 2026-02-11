import team_avatar_1 from "@/assets/img1/mila1.png";
import team_avatar_4 from "@/assets/img/teamsimg4.jpg";

import { StaticImageData } from "next/image";

interface DataType {
  id: number;
  img: StaticImageData;
  avatar_name: string;
  designation: string;
  link: string; // link ka stranici doktora
}

const team_data: DataType[] = [
  {
    id: 1,
    img: team_avatar_1,
    avatar_name: "Dr Mila Đorđević",
    designation: "Estetski hirurg",
    link: "/nas-tim/Mila",
  },
  {
    id: 2,
    img: team_avatar_4,
    avatar_name: "Dr Marša Leone Papović",
    designation: "Estetski hirurg",
    link: "/nas-tim/Marsa",
  },
];

export default team_data;
