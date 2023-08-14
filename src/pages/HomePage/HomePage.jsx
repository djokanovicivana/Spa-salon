import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text1="O nama"
        text2={<Link to="/usluge">Usluge</Link>}
        text3="Cenovnik"
        text4={<Link to="/prijava">Prijavi se</Link>}
        text5={<Link to="/registracija">Registruj se</Link>}/>
        </>
    )
}