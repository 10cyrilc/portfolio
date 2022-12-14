import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaGraduationCap, FaRegFileCode, FaRegFolderOpen, FaMailBulk, FaTimes, FaBars } from "react-icons/fa";
import '../styles/Nav.css'
import Button from 'react-bootstrap/Button';
import Logo from "../images/logo.png"

function Nav() {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="navigation">
                <div className="logo-img">
                    <img src={Logo} alt="logo" />
                </div>
                <ul>
                    <Icons link="/home" icon={<FaHome />} />
                    <Icons link="/about" icon={<FaUserAlt />} />
                    <Icons link="/education" icon={<FaGraduationCap />} />
                    <Icons link="/libraries" icon={<FaRegFileCode />} />
                    <Icons link="/projects" icon={<FaRegFolderOpen />} />
                    <Icons link="/contact" icon={<FaMailBulk />} />
                </ul>
            </div>

            <div className="mob-navigation">
                <h1 data-aos="zoom-in" className={show? "white-text":"black-text"}>
                    Cyril C Thomas
                </h1>
                <Button variant="outline-info" onClick={() => setShow(!show)}>{show ? <FaTimes /> : <FaBars />}</Button>
                {show ? (
                    <ul className={!show ? "inactive text" : "active text"} data-aos="slide-down" data-aos-duration="700">
                        <Text link="/home" text="Home" handle={() => setShow(!show)} />
                        <Text link="/about" text="About" handle={() => setShow(!show)} />
                        <Text link="/education" text="Education" handle={() => setShow(!show)} />
                        <Text link="/libraries" text="Libraries" handle={() => setShow(!show)} />
                        <Text link="/projects" text="Projects & Services" handle={() => setShow(!show)} />
                        <Text link="/contact" text="Contact" handle={() => setShow(!show)} />
                    </ul>
                ) : null}

            </div>
        </>
    )
}

function Icons(props) {
    return (
        <Link to={props.link} >
            <li data-aos="zoom-in" key={props.link}>
                {props.icon}
            </li>
        </Link>
    )
}

function Text(props) {
    return (
        <Link to={props.link} onClick={props.handle}>
            <li key={props.link}>
                {props.text}
            </li>
        </Link>
    )
}

export default Nav