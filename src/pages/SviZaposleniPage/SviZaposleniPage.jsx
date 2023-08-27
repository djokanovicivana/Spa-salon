import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import ZaposleniCard from "../../components/ZaposleniCard/ZaposleniCard";
import AddIcon from '@mui/icons-material/Add';
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import styles from "./SviZaposleniPage.module.css"

import { Services } from "../../services/Services";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
export default function SviZaposleniPage(){
    const {idAdmin}=useParams();
    const [zaposleni,setZaposleni]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await Services.sviZaposleni();
            setZaposleni(response);
        };
        fetchData();
    },[zaposleni]);

    return(
        <>
          <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zaposleniAdmin/${idAdmin}`}>Zaposleni</Link>}
        text3={<Link to={`/korisniciAdmin/${idAdmin}`}>Korisnici</Link>}
        text4={<Link to={`/profilAdmin/${idAdmin}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        <div  className={styles.heading}>
        <h1>Svi zaposleni</h1>
        <Link to={`/dodavanjeZaposlenog/${idAdmin}`}><ContainedButton module={styles.button} text={<AddIcon/>}/></Link>
        
        </div>
      {zaposleni && <div>
        {zaposleni.map((item,index)=>(
        <div key={index} className={styles.item}>
        <ZaposleniCard  formHeading="Izmeni zaposlenog" ime={item.FirstName} prezime={item.LastName} korisnickoIme={item.Username} email={item.email} brojTelefona={item.PhoneNumber} idZaposleni={item.UserID} idAdmin={idAdmin}/>
        </div>
        ))}
        </div>}
        </>
        
    )
}