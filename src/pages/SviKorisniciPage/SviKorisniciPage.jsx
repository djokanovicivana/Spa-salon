import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import OsobaCard from "../../components/OsobaCard/OsobaCard";
import AddIcon from '@mui/icons-material/Add';
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import styles from "./SviKorisniciPage.module.css"
import BasicModal from "../../components/BasicModal/BasicModal";
import DodavanjeForm from "../../components/DodavanjeForm/DodavanjeForm";
export default function SviKorisniciPage(){
    return(
        <>
         <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to="/zaposleniAdmin">Zaposleni</Link>}
        text3={<Link to="/korisniciAdmin">Korisnici</Link>}
        text4={<Link to="/profil">Tvoj profil</Link>}
        text5="Odjavi se"/>
        <div  className={styles.heading}>
        <h1>Svi korisnici</h1>
        <BasicModal child={<DodavanjeForm heading="Dodaj korisnika"/>} label={<ContainedButton module={styles.button} text={<AddIcon/>}/>}/>
        
        </div>
        <div className={styles.item}>
        <OsobaCard formHeading="Izmeni korisnika"/>
        </div>
        <OsobaCard/>
        </>
        
    )
}