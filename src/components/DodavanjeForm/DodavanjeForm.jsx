import React from "react";
import styles from "./DodavanjeForm.module.css"
import { TextField } from "@mui/material";
import ContainedButton from "../ContainedButton/ContainedButton";
import { useForm } from 'react-hook-form';
export default function DodavanjeForm(props){
    const {register, handleSubmit, formState:{errors}}=useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }
    return(
        <><div>
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