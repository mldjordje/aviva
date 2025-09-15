import team_avatar_1 from "@/assets/img1/mila1.png";
import team_avatar_2 from "@/assets/img/teamsimg2.jpg";
import team_avatar_3 from "@/assets/img/teamsimg3.jpg";
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
    img: team_avatar_2,
    avatar_name: "Dr Kristina Stojanović",
    designation: "Estetski hirurg",
    link: "/nas-tim/Kristina",
  },
  {
    id: 3,
    img: team_avatar_3,
    avatar_name: "Dr Nikola Igić",
    designation: "Estetski hirurg",
    link: "/nas-tim/Nikola",
  },
  {
    id: 4,
    img: team_avatar_4,
    avatar_name: "Dr Marša Leone Papović",
    designation: "Estetski hirurg",
    link: "/nas-tim/Marsa",
  },
];

export default team_data;
