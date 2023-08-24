import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ZaposleniPage(){
    const {idKorisnik}=useParams();
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