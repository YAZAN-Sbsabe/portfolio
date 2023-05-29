import { React, useState } from "react";
import "./Nav.css";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BsMessenger } from "react-icons/bs";
// import { BsImages } from "react-icons/bs";
// import { NavLink } from "react-bootstrap";

const Nav = () => {
  const [activeviwo, setactiveviwo] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setactiveviwo("#")}
        className={activeviwo === "#" ? "active" : ""}
        title="الرئيسية"
      >
        <AiFillHome />
      </a>
      <a
        href="#About"
        onClick={() => setactiveviwo("#About")}
        className={activeviwo === "#About" ? "active" : ""}
        title="معلومات عني"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#Experience"
        onClick={() => setactiveviwo("#Experience")}
        className={activeviwo === "#Experience" ? "active" : ""}
        title="الخبرات"
      >
        <BiBook />
      </a>
      <a
        href="#Services"
        onClick={() => setactiveviwo("#Services")}
        className={activeviwo === "#Services" ? "active" : ""}
        title="الخدمات"
      >
        <RiServiceLine />
      </a>
      {/* <a href="#Protofilo" onClick={() => setactiveviwo("#Protofilo")} className={activeviwo === "#Protofilo"} title="معرض الاعمال">
        <BsImages />
      </a> */}
      <a
        href="#Contact"
        onClick={() => setactiveviwo("#Contact")}
        className={activeviwo === "#Contact" ? "active" : ""}
        title="تواصل معنا"
      >
        <BsMessenger />
      </a>
    </nav>
  );
};

export default Nav;
