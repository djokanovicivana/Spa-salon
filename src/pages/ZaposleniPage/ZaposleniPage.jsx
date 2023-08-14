import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
export default function ZaposleniPage(){
    return(
        <>
       <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text3={<Link to="/terminiZaposleni">Termini</Link>}
        text4={<Link to="/profil">Tvoj profil</Link>}
        text5="Odjavi se"/>
        </>
    )
}