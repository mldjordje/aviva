interface DataType {
  id: number;
  img: string;
  avatar_name: string;
  designation: string;
  link: string;
}

const team_data: DataType[] = [
  {
    id: 1,
    img: "/assets/aviva-nove-slike2/mila.webp",
    avatar_name: "Dr Mila Đorđević",
    designation: "specijalizant plastične, rekonstruktivne i estetske hirurgije",
    link: "/nas-tim/Mila",
  },
  {
    id: 2,
    img: "/assets/aviva-nove-slike2/vlada-main-photo.webp",
    avatar_name: "Dr Vladimir Sokolović",
    designation: "specijalizant plastične, rekonstruktivne i estetske hirurgije",
    link: "/nas-tim/Vladimir",
  },
  {
    id: 3,
    img: "/assets/aviva-nove-slike/petra-kordinator-klinike.webp",
    avatar_name: "Petra",
    designation: "kordinatorka klinike",
    link: "/nas-tim/Petra",
  },
];

export default team_data;
