import React from "react";
import styles from "./DodavanjeForm.module.css"
import { TextField } from "@mui/material";
import ContainedButton from "../ContainedButton/ContainedButton";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Services } from "../../services/Services";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { useNavigate } from "react-router-dom";
export default function DodavanjeForm(props){
    const navigate=useNavigate();
    const {idAdmin}=useParams();
    const {register, handleSubmit, formState:{errors}}=useForm();

    const onSubmit=async(data)=>{
        if(props.uloga==='Korisnik'){
            const response=await Services.dodajKorisnika({'ime':data.ime, 'prezime':data.prezime, 'brojTelefona':data.brojTelefona,'email':data.email, 'korisnickoIme':data.korisnickoIme, 'password':data.password,'rola':3});
        if(response && response.poruka==='Registracija uspešna.'){
          toast.success("Korisnik je uspešno dodat!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
        setTimeout(() => {
        navigate(`/korisniciAdmin/${idAdmin}`);
     }, 2000);  
    }else{
        toast.success("Dodavanje nije uspelo! Pokušaj ponovo!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
    }
        }
       
    }
    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zaposleniAdmin/${idAdmin}`}>Zaposleni</Link>}
        text3={<Link to={`/korisniciAdmin/${idAdmin}`}>Korisnici</Link>}
        text4={<Link to={`/profilAdmin/${idAdmin}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
        <ToastContainer/>
            <div className={styles.box}>
            <h1>{props.heading}</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}method="post">
                    <div className={styles.row1}> 
                       <div className={styles.item}>
                            <TextField
                                id="ime"
                                name="ime"
                                label="Ime"
                                variant="outlined"
                                {...register('ime', {required:true})} />
                                {errors.ime && <p className={styles.error}>Polje je obavezno.</p>}
                        </div>
                        <div className={styles.item}>
                            <TextField
                                id="prezime"
                                name="prezime"
                                label="Prezime"
                                variant="outlined"
                                {...register('prezime',{required:true})} />
                                {errors.prezime && <p className={styles.error}>Polje je obavezno.</p>} 
                        </div>
                        <div className={styles.item}>
                            <TextField
                                id="brojTelefona"
                                name="brojTelefona"
                                label="Broj telefona"
                                variant="outlined"
                                {...register('brojTelefona',{required:true})} />
                                {errors.brojTelefona && <p className={styles.error}>Polje je obavezno.</p>} 
                        </div>
                        </div>
                        <div className={styles.row2}>
                        <div className={styles.item}>
                            <TextField
                                id="email"
                                label="Email"
                                name="email"
                                variant="outlined"
                                {...register('email',{required:true})} />
                                {errors.email && <p className={styles.error}>Polje je obavezno.</p>} 
                    </div>
                    
                        <div className={styles.item}>
                            <TextField
                                id="korisnickoIme"
                                name="korisnickoIme"
                                label="Korisničko ime"
                                variant="outlined"
                                {...register('korisnickoIme',{required:true})} />
                                {errors.korisnickoIme && <p className={styles.error}>Polje je obavezno.</p>} 
                        </div>
                        <div className={styles.item}>
                            <TextField label="Lozinka" 
                             id="password"
                             name="password"
                            variant="outlined"
                            type="password"
                            {...register('password',{required:true})} />
                            {errors.password && <p className={styles.error}>Polje je obavezno.</p>} 
                        </div>
                       <div className={styles.item}>
    {props.uloga === 'Zaposleni' && (
        <>
            <TextField
                label="Usluga"
                id="usluga"
                name="usluga"
                variant="outlined"
                type="text"
                {...register('usluga', { required: true })}
            />
            {errors.usluga && <p className={styles.error}>Polje je obavezno.</p>}
        </>
    )}
</div>

                        <ContainedButton text="POTVRDI" type="submit" module={styles.button}/>
                    </div>
                    </form>     
                </div>
        </>
    )
}