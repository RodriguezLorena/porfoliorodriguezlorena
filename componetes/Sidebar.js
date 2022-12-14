import style from "../styles/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faServicestack, faCcMastercard, faGoogle, faBitcoin, faLinkedin, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faCake, faEnvelope, faFile, faFileCode, faFileLines, faHardDrive, faHouse, faInbox, faUserGear, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import LenguageSelector from "./LenguageSelector";


const Sidebar = () => {
  return (
    <div className={style.container}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link href="/">
            <abbr title="Home">
            <a className={style.a} href="">
            <FontAwesomeIcon
                icon={faHouse}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "rgb(3, 1, 21)",
                  margin: "0.5rem",
                }}/>
            </a>
            </abbr>
          </Link>
        </li>

        <li className={style.li}>
          <Link href="#SobreMi">
          <abbr title="Sobre Mi">
            <a className={style.a}>
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "rgb(3, 1, 21)",
                  margin: "0.5rem",
                }}/>
                </a>
                </abbr>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="#Skill">
          <abbr title="Habilidades">
            <a className={style.a}>
            <FontAwesomeIcon
                icon={faUserGear}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "rgb(3, 1, 21)",
                  margin: "0.5rem",
                }}/>
            </a>
            </abbr>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="#Proyectos">
          <abbr title="Poyectos">
            <a className={style.a}>
            <FontAwesomeIcon
                icon={faFileCode}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "rgb(3, 1, 21)",
                  margin: "0.5rem",
                }}/>
            </a>
            </abbr>
          </Link>
        </li>
        <li className={style.li}>
          <Link href="#Contacto">
          <abbr title="Contactame">
            <a className={style.a}>
            <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "rgb(3, 1, 21)",
                  margin: "0.5rem",
                }}/>
            </a>
            </abbr>
          </Link>
        </li>
        <li>
          {/* <LenguageSelector/> */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
