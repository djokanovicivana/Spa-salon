import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Profile.module.css"
import { Link } from "react-router-dom";
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import EditIcon from '@mui/icons-material/Edit';

export default function Profil(){
    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to="/zaposleniAdmin">Zaposleni</Link>}
        text3={<Link to="/korisniciAdmin">Korisnici</Link>}
        text4={<Link to="/profil">Tvoj profil</Link>}
        text5="Odjavi se"/>
        <div className={styles.box}>
            <div className={styles.info}>
            <h1 className={styles.heading}>Tvoj profil</h1>
            <p>Ime: <span className={styles.item}>Ivana</span></p>
            <p>Prezime: <span className={styles.item}>Ivana</span> </p>
            <p>Korisničko ime: <span className={styles.item}>Ivana</span></p>
            <p>Email: <span className={styles.item}>Ivana</span></p>
            <p>Broj telefona: <span className={styles.item}>Ivana</span></p>
            <p>Adresa: <span className={styles.item}>Ivana</span></p>
            </div>
            <Link to="/izmenaProfila">
            <ContainedButton text={<EditIcon/>} module={styles.button}/>
            </Link>
        </div>
        </>
    )
}