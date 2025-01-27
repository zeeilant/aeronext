import Link from "next/link";
import React from "react";
// import "../styles/homepage.scss";
// import { Link } from "react-router-dom";
// import logo from "./public/logo.jpeg"
import Image from "next/image";
interface props {
  home: boolean;
bg?:boolean;
}
const Navbar: React.FC<props> = ({ home,bg }) => {
  return (
    <header>
      <nav  style={{backgroundColor:bg?"#fff":"#fff"}}>
        <span style={{display:"flex",alignItems:"center"}}>
      <Image src='/logo.jpeg' alt="" width={100} height={60} style={{objectFit:"cover"}}/>
       
        <h1>
         
         
          <Link href="/">AeroMingle</Link>
        </h1>
        </span>
        <ul className={home ? "light" : "dark"}>
          <li>
            <Link href="/aboutus">About Us</Link>
          </li>
          <li>
            {" "}
            <Link href="/courses">Courses</Link>
          </li>
          {/* <li>
            {" "}
            <Link to="/virtual-learning-experience">Virtual Learning Experience</Link>
          </li> */}
          <li>
            {" "}
            <Link href="/carrer-support">Career Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
