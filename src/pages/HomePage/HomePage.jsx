import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Flickity from 'react-flickity-component';

import './HomePage.module.css';


export default function HomePage(){
    const flickityOptions = {
        initialIndex: 1,
        autoPlay: 1000,
        contain: true
      }
    

    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text1="O nama"
        text2={<Link to="/usluge">Usluge</Link>}
        text3="Cenovnik"
        text4={<Link to="/prijava">Prijavi se</Link>}
        text5={<Link to="/registracija">Registruj se</Link>}/>


<div className="home">
    <h2>Najkvalitetnija usluga ceka na vas</h2>
    <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
          >
          <img src="/public/img/1.jpg" alt="" />
          <img src="/public/img/3.jpg" alt="" />
          <img src="/public/img/4.jpg" alt="" />
          <img src="/public/img/5.jpg" alt="" />
          <img src="/public/img/2.jpg" alt="" />
          <img src="/public/img/6.jpg" alt="" />
          <img src="/public/img/7.jpg" alt="" />
          <img src="/public/img/10.jpg" alt="" />
          <img src="/public/img/9.jpg" alt="" />
          <img src="/public/img/8.jpg" alt="" />
          <img src="/public/img/11.jpg" alt="" />
          <img src="/public/img/12.jpg" alt="" />
          <img src="/public/img/13.jpg" alt="" />
          <img src="/public/img/14.jpg" alt="" />
          </Flickity>
</div>

<Footer></Footer>
        </>
    )
}