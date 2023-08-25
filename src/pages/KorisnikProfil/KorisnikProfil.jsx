import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Profil from "../../components/Profil/Profil";
import { useState } from "react";
import { useEffect } from "react";
import { Services } from "../../services/Services";
export default function KorisnikProfil(){
    const idKorisnik=Services.uzimanjeSesije();
    const [korisnik,setKorisnik]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await Services.mojProfil(idKorisnik);
            setKorisnik(response);
        };
        fetchData();
    },[idKorisnik]);
    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zakazivanjeTermina/${idKorisnik}`}>Zakaži termin</Link>}
        text3={<Link to={`/terminiKorisnik/${idKorisnik}`}>Termini</Link>}
        text4={<Link to={`/profilKorisnik/${idKorisnik}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        {korisnik &&
        <Profil ime={korisnik.FirstName} prezime={korisnik.LastName} korisnickoIme={korisnik.Username} email={korisnik.email} brojTelefona={korisnik.PhoneNumber} link={`/azuriranjePodatakaKorisnik/${idKorisnik}`}/>}
        </>
    )
}