import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function AdminPage(){
    const {idAdmin}=useParams();
    return(
        <>
         <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zaposleniAdmin/${idAdmin}`}>Zaposleni</Link>}
        text3={<Link to={`/korisniciAdmin/${idAdmin}`}>Korisnici</Link>}
        text4={<Link to={`/profilAdmin/${idAdmin}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        </>
    )
}