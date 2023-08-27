import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Services } from "../../services/Services";
export default function ZaposleniPage(){
    const idZaposleni=Services.uzimanjeSesijeId();
    return(
        <>
       <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text3={<Link to={`/terminiZaposleni/${idZaposleni}`}>Termini</Link>}
        text4={<Link to={`/profilZaposleni/${idZaposleni}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        </>
    )
}