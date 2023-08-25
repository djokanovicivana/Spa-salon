import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Services } from "../../services/Services";
import { Link } from "react-router-dom";
export default function TerminiKorisnikPage(){
    const idKorisnik=Services.uzimanjeSesije();
    return(
        <>
         <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zakazivanjeTermina/${idKorisnik}`}>Zakaži termin</Link>}
        text3={<Link to="/terminiKorisnik">Termini</Link>}
        text4={<Link to={`/profilKorisnik/${idKorisnik}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        </>
    )
}