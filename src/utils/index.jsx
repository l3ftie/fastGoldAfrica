import { FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

export const links = [
  {
    id: 1,
    title: "Home",
    to: "home",
  },
  {
    id: 2,
    title: "About",
    to: "about",
  },
  {
    id: 3,
    title: "How it Works",
    to: "howItWorks",
  },
  {
    id: 4,
    title: "Contact Us",
    to: "contact",
  },
];

export const socialMedia = [
  {
    id: 1,
    socialTitle: "Facebook",
    socialIcon: <FaSquareFacebook size={34} color="white" />,
    socialLink: "",
  },
  {
    id: 2,
    socialTitle: "LinkedIn",
    socialIcon: <FaLinkedin size={34} color="white" />,
    socialLink: "",
  },
  {
    id: 3,
    socialTitle: "X",
    socialIcon: <FaSquareXTwitter size={34} color="white" />,
    socialLink: "",
  },
];
