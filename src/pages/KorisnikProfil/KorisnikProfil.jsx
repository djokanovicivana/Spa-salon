import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Profil from "../../components/Profil/Profil";

export default function KorisnikProfil(){
    return(
        <>
         <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text3={<Link to="/terminiKorisnik">Termini</Link>}
        text4={<Link to="/profilKorisnik">Tvoj profil</Link>}
        text5="Odjavi se"/>
        <Profil/>
        </>
    )
}