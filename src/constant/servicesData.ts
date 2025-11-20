import { TbCrystalBall } from "react-icons/tb";
import { PiFlowerLotus } from "react-icons/pi";
import { GiLifeInTheBalance, GiLovers, GiSemiClosedEye } from "react-icons/gi";
import { MdHistoryToggleOff } from "react-icons/md";
import { LuCalendarHeart } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { BsStars } from "react-icons/bs";

export const servicesData = [
  {
    id: "astro1",
    title: "Натальна астрологія",
    description: "Повний розбір дитячої та дорослої натальної карти",
    icon: BsStars,
  },
  {
    id: "astro2",
    title: "Фінансова, бізнес астрологія",
    description:
      "Де мої гроші, як заробляти багато і з задоволенням, накопичувати або витрачати. Профорієнтація",
    icon: GrMoney,
  },
  {
    id: "astro3",
    title: "Сфера відносин, кохання",
    description: "Особисте життя. Пошук ідеального партнера",
    icon: GiLovers,
  },
  {
    id: "astro4",
    title: "Кармічна астрологія",
    description: "Формула душі, фігури Джонса, Ліліт та Селена",
    icon: GiSemiClosedEye,
  },
  {
    id: "astro5",
    title: "Здоров'я",
    description: "Ризики та кризи у житті.  Психосоматика. Здорове харчування.",
    icon: PiFlowerLotus,
  },
  {
    id: "astro6",
    title: "Релокація",
    description: "Підбір країни для проживання",
    icon: GiLifeInTheBalance,
  },
  {
    id: "astro7",
    title: "Прогнози - зазирни в майбутнє",
    description: "Прогнози на місяць,рік. Лунар. Соляр.",
    icon: TbCrystalBall,
  },
  {
    id: "astro8",
    title: "Електив",
    description:
      "Підбір дати під важливу подію (операція, весілля, відкриття бізнесу, тощо)",
    icon: LuCalendarHeart,
  },
  {
    id: "astro9",
    title: "Ректифікація",
    description: "Розрахунок точного часу народження.",
    icon: MdHistoryToggleOff,
  },
];
