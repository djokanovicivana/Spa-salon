import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Profil from "../../components/Profil/Profil";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Services } from "../../services/Services";
export default function AdminProfil(){
    const [korisnik,setKorisnik]=useState([]);
     const {idAdmin}=useParams();
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await Services.mojProfil(idAdmin);
            setKorisnik(response);
            console.log(response);
        };
        fetchData();
    },[idAdmin]);
   
    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zaposleniAdmin/${idAdmin}`}>Zaposleni</Link>}
        text3={<Link to={`/korisniciAdmin/${idAdmin}`}>Korisnici</Link>}
        text4={<Link to={`/profilAdmin/${idAdmin}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        {korisnik &&
        <Profil idKorisnik={idAdmin} ime={korisnik.FirstName} prezime={korisnik.LastName} korisnickoIme={korisnik.Username} email={korisnik.email} brojTelefona={korisnik.PhoneNumber}/>
}
        </>
    )
}