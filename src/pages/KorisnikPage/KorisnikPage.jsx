import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Services } from "../../services/Services";
export default function ZaposleniPage(){
    const idKorisnik=Services.uzimanjeSesijeId();
    return(
        <>
       <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zakazivanjeTermina/${idKorisnik}`}>Zakaži termin</Link>}
        text3={<Link to={`/terminiKorisnik/${idKorisnik}`}>Termini</Link>}
        text4={<Link to={`/profilKorisnik/${idKorisnik}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        </>
    )
}