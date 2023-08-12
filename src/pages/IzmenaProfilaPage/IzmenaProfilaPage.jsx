import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./IzmenaProfilaPage.module.css"
import { TextField } from "@mui/material";
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import { useForm } from 'react-hook-form';
export default function IzmenaProfilaPage(){
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }
    return(
        <>
         <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to="/zaposleniAdmin">Zaposleni</Link>}
        text3={<Link to="/korisniciAdmin">Korisnici</Link>}
        text4={<Link to="/profil">Tvoj profil</Link>}
        text5="Odjavi se"/>
        <div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}method="post">
                    <div className={styles.row1}>
                        <h1>Izmeni profil</h1>
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
                        <div className={styles.item}>
                            <TextField
                                id="email"
                                label="Email"
                                name="email"
                                variant="outlined"
                                {...register('email',{required:true})} />
                                {errors.email && <p className={styles.error}>Polje je obavezno.</p>} 
                        </div>
                    </div>
                    <div className={styles.row2}>
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
                            <TextField label="Potvrdi lozinku" 
                             id="password_confirmation"
                             name="password_confirmation"
                             variant="outlined"
                             type="password"
                             {...register('password_confirmation',{required:true})} />
                            {errors.password_confirmation && <p className={styles.error}>Polje je obavezno.</p>} 
                        </div>
                        <ContainedButton text="IZMENI" type="submit" module={styles.button}/>
                    </div>
                    </form>     
                </div>
        </>
    )
}