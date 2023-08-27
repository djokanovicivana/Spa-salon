import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Profil from "../../components/Profil/Profil";
import { useState } from "react";
import { useEffect } from "react";
import { Services } from "../../services/Services";
export default function ZaposleniProfil(){
    const [zaposleni,setZaposleni]=useState([]);
    const idZaposleni=Services.uzimanjeSesijeId();
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await Services.mojProfil(idZaposleni);
            setZaposleni(response);
        };
        fetchData();
    },[idZaposleni]);
    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text3={<Link to={`/terminiZaposleni/${idZaposleni}`}>Termini</Link>}
        text4={<Link to={`/profilZaposleni/${idZaposleni}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        {zaposleni && <Profil ime={zaposleni.FirstName} prezime={zaposleni.LastName} korisnickoIme={zaposleni.Username} email={zaposleni.email} brojTelefona={zaposleni.PhoneNumber} link={`/azuriranjePodatakaZaposleni/${idZaposleni}`}/>
        }
        </>
    )
}