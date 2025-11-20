import { TbMoonStars, TbHeartStar, TbPlanet, TbTimeline } from "react-icons/tb";
//import { GiStarsStack } from "react-icons/gi";
//import { FaSun } from "react-icons/fa6";
//import { LuClock } from "react-icons/lu";
import { PiFlowerLotus } from "react-icons/pi";
//import { RiYinYangLine } from "react-icons/ri";

export const servicesData = [
  {
    id: "natal",
    title: "Натальна астрологія",
    description: "Пізнай себе глибше",
    icon: TbMoonStars,
  },
  {
    id: "compatibility",
    title: "Сумісність",
    description: "Розуміння стосунків",
    icon: TbHeartStar, // або GiStarsStack
  },
  {
    id: "career",
    title: "Кар’єра та фінанси",
    description: "Ваш фінансовий потенціал",
    icon: TbPlanet, // або FaSun
  },
  {
    id: "forecast",
    title: "Прогностика",
    description: "Майбутнє під контролем",
    icon: TbTimeline, // або LuClock
  },
  {
    id: "spiritual",
    title: "Кармічна та духовна астрологія",
    description: "Глибинні сенси і минулі досвіди",
    icon: PiFlowerLotus, // або RiYinYangLine
  },
];
