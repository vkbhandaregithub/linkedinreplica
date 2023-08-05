import {
  FaBell,
  FaCameraRetro,
  FaHome,
  FaPlus,
  FaSearch,
  FaStar,
  FaTv,
  FaUser,
} from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { MdBusinessCenter } from "react-icons/md";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
const menu = [
  { name: "home", icon: FaHome },
  { name: "my network", icon: HiMiniUsers },
  { name: "jobs", icon: MdBusinessCenter },
  { name: "messaging", icon: BiSolidMessageRoundedDots },
  { name: "notifications", icon: FaBell },
  { name: "me", icon: RxAvatar },
];

export default menu;
