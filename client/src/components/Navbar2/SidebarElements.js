import {
  FaAngleLeft,
  FaAngleRight,
  FaEuroSign,
  FaTrash,
  FaLiraSign,
  FaArchive,
  FaQuidditch,
  FaPray,
  FaUsersCog,
  FaWeight,
  FaRegEdit,
  FaWind,
  FaListAlt,
  FaFly
} from "react-icons/fa";
import { IoIosApps,IoIosRadio } from "react-icons/io";
import { GiReceiveMoney, GiPayMoney,GiTakeMyMoney, GiMoneyStack, GiHangGlider,GiAstronautHelmet,GiPresent} from "react-icons/gi";
import {MdOutlineAirlineSeatReclineExtra,MdAssignmentTurnedIn} from "react-icons/md"
export const sidebarElements = [
  {
    path: "/pvt",
    title: "Pilot Genel",
    icon: <FaWeight />,
  },
  {
    path: "#",
    title: "Hesaplar",
    icon: <FaEuroSign />,
    subNav: [
      {
        path: "/hesaplar/genel",
        title: "Genel Bakış",
        icon: <IoIosApps />,
      },
      {
        path: "/hesaplar/isletme",
        title: "İşletme",
        icon: <FaLiraSign />,
      },
      {
        path: "/hesaplar/vakıf",
        title: "Vakıf",
        icon: <GiMoneyStack />,
      },
      {
        path: "/hesaplar/etkinlik",
        title: "Etkinlik",
        icon: <GiReceiveMoney/>,
      },
      {
        path: "/hesaplar/birikim",
        title: "Birikim",
        icon: <GiTakeMyMoney/>,
      },
      {
        path: "/hesaplar/pilot",
        title: "Pilot",
        icon: <GiPayMoney/>,
      },
    ],
  },
  {
    path: "#",
    title: "Malzemeler",
    icon: <FaArchive />,
    subNav: [
      {
        path: "",
        title: "Kanat",
        icon: <GiHangGlider/>,
      },
      {
        path: "",
        title: "Harness",
        icon: <MdOutlineAirlineSeatReclineExtra/>,
      },
      {
        path: "",
        title: "Kask",
        icon: <GiAstronautHelmet/>,
      },
      {
        path: "",
        title: "Yedek",
        icon: <GiPresent/>,
      },
      {
        path: "",
        title: "Telsiz",
        icon: <IoIosRadio/>,
      },
    ],
  },
  {
    path: "#",
    title: "Etkinlikler",
    icon: <FaPray />,
    subNav: [
      {
        path: "",
        title: "Etkinlik Listeleri",
        icon: <FaListAlt/>,
      },
      {
        path: "",
        title: "Etkinlik Başvuruları",
        icon: <MdAssignmentTurnedIn/>,
      },
      {
        path: "",
        title: "Etkinlik Başvurusu",
        icon: <FaWind/>,
      },
    ],
  },
  {
    path: "#",
    title: "Uçuşlar",
    icon: <FaQuidditch />,
    subNav: [
      {
        path: "",
        title: "Tüm Ucuş Kayıtları",
        icon: <FaListAlt/>,
      },
      {
        path: "",
        title: "Ucuş Kayıtlarım",
        icon: <FaFly/>,
      },
      {
        path: "",
        title: "Uçuş Kaydı Gönder",
        icon: <FaRegEdit />,
      },
    ],
  },
];

export const shortcutElements = [
  {
    path: "#",
    title: "Uçuş Kaydı Gönder",
    icon: <FaRegEdit />,
  },
  {
    path: "#",
    title: "Etkinlik Başvurusu",
    icon: <FaWind />,
  },

];
