import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import styles from "./RegistracijaPage.module.css";
import { useForm } from 'react-hook-form';
import Navbar from "../../components/Navbar/Navbar";
import { Services } from "../../services/Services";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
export default function RegistracijaPage(){
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit=async(data)=>{
    const response=await Services.registracija({'ime':data.ime,
    'prezime':data.prezime,
'brojTelefona':data.brojTelefona,
'email':data.email,
'korisnickoIme':data.korisnickoIme,
'password':data.password,
'password_confirmation':data.password_confirmation
});
console.log(response);
    }
    return (
        <>
            <Navbar
                logo={<Link to="/">KOZMETIČKI SALON</Link>}
                text1="O nama"
                text2="Usluge"
                text3="Cenovnik"
                text4={<Link to="/prijava">Prijavi se</Link>}
                text5={<Link to="/registracija">Registruj se</Link>} />
                    <form onSubmit={handleSubmit(onSubmit)} method="post" className={styles.form}>
                    <div className={styles.row1}>
                        <h1 className={styles.heading}>Registruj se</h1>
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
                        <ContainedButton text="POTVRDI" type="submit" module={styles.button}/>
                    </div>
                    </form>     
        </>
    )
}