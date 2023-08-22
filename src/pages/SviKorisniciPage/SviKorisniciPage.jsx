import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import KorisniciCard from "../../components/KorisniciCard/KorisniciCard";
import AddIcon from '@mui/icons-material/Add';
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import styles from "./SviKorisniciPage.module.css"
import BasicModal from "../../components/BasicModal/BasicModal";
import DodavanjeForm from "../../components/DodavanjeForm/DodavanjeForm";
import { useEffect } from "react";
import { useState } from "react";
import { Services } from "../../services/Services";
import { useParams } from "react-router-dom";
export default function SviKorisniciPage(){
    const {idAdmin}=useParams();
    const [korisnici,setKorisnici]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await Services.sviKorisnici();
            setKorisnici(response);
        };
        fetchData();
    },[]);
    return(
        <>
         <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zaposleniAdmin/${idAdmin}`}>Zaposleni</Link>}
        text3={<Link to={`/korisniciAdmin/${idAdmin}`}>Korisnici</Link>}
        text4={<Link to={`/profilAdmin/${idAdmin}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        <div  className={styles.heading}>
        <h1>Svi korisnici</h1>
        <BasicModal child={<DodavanjeForm heading="Dodaj korisnika"/>} label={<ContainedButton module={styles.button} text={<AddIcon/>}/>}/>
        
        </div>
        {korisnici && <div>
        {korisnici.map((korisnik,index)=>(
        <div key={index} className={styles.item}>
        <KorisniciCard formHeading="Izmeni korisnika" ime={korisnik.FirstName} prezime={korisnik.LastName} korisnickoIme={korisnik.Username} email={korisnik.email} brojTelefona={korisnik.PhoneNumber}/>
        </div>
        ))}
        </div>
}
       
        </>
        
    )
}