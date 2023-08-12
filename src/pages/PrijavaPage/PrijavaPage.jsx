import React from "react";
import { TextField } from "@mui/material";
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./PrijavaPage.module.css";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

export default function PrijavaPage(){
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit=(data)=>{
    console.log(data);
   }
    return(
        <>
     <Navbar 
    logo={<Link to="/">KOZMETIČKI SALON</Link>}
    text1="O nama"
    text2="Usluge"
    text3="Cenovnik" 
    text4={<Link to="/prijava">Prijavi se</Link>}
    text5={<Link to="/registracija">Registruj se</Link>}/>
  <div className={styles.parent}>
        <div className={styles.form}>
            <div className={styles.formItems}>
            <h1 className={styles.heading}>Prijavi se</h1>  
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
                <TextField
                    id="korisnickoIme"
                    label="Korisničko ime"
                    variant="outlined"
                    name="korisnickoIme"
                    className={styles.field}
                    {...register('korisnickoIme', { required: true })}/>
                     {errors.korisnickoIme && <p className={styles.error}>Korisničko ime je obavezno.</p>}
            </div>
            <div className={styles.item}>
                <TextField
                    id="password"
                    name="password"
                    label="Lozinka"
                    variant="outlined"
                    className={styles.field}
                    type="password"
                {...register('password',{required:true})} />
                {errors.password && <p className={styles.error}>Lozinka je obavezna!</p>}
                
            </div>
            <ContainedButton text="POTVRDI" module={styles.button} type="submit" />
            </form>
            <div className={styles.link}>
                        <p>Nemaš nalog? <Link style={{ color: '#fb6f92' }} to="/registracija">REGISTRUJ SE!</Link></p>
            </div> 
                </div>


        </div>
            </div>
        </>
    
    )
}
