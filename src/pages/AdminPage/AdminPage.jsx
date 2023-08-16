import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function AdminPage(){
    return(
        <>
         <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to="/zaposleniAdmin">Zaposleni</Link>}
        text3={<Link to="/korisniciAdmin">Korisnici</Link>}
        text4={<Link to="/profil">Tvoj profil</Link>}aW
        text5="Odjavi se"/>
        </>
    )
}