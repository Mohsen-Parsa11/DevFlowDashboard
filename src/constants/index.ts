import { GoHome } from "react-icons/go";
import { RiUserCommunityLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { TfiBag } from "react-icons/tfi";
import { GoTag } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { BsQuestionSquare } from "react-icons/bs";

export const NavLinks = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: GoHome,
  },
  {
    id: 2,
    label: "Community",
    href: "/community",
    icon: RiUserCommunityLine,
  },
  {
    id: 3,
    label: "Collections",
    href: "/collections",
    icon: FaRegStar,
  },
  {
    id: 3,
    label: "Find Jobs",
    href: "/jobs",
    icon: TfiBag,
  },
  {
    id: 3,
    label: "Tags",
    href: "/tags",
    icon: GoTag,
  },
  {
    id: 3,
    label: "Profile",
    href: "/profile",
    icon: FaRegUser,
  },
  {
    id: 3,
    label: "Ask a Question",
    href: "/ask-question",
    icon: BsQuestionSquare,
  },
];
