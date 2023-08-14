import React from "react";
import UslugaThumbnail from "../../components/UslugaThumbnail/UslugaThumbnail";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import styles from "./UslugePage.module.css";
export default function UslugePage(){
    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text1="O nama"
        text2={<Link to="/usluge">Usluge</Link>}
        text3="Cenovnik"
        text4={<Link to="/prijava">Prijavi se</Link>}
        text5={<Link to="/registracija">Registruj se</Link>}
        className={styles.navbar}/>
        <div className={styles.uslugeGrid}>
        <UslugaThumbnail/>
        <UslugaThumbnail/>
        <UslugaThumbnail/>
        <UslugaThumbnail/>
        <UslugaThumbnail/>
        </div>
        </>
    )
}