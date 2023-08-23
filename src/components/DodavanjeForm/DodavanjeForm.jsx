import React from "react";
import styles from "./DodavanjeForm.module.css"
import { TextField, Select, MenuItem } from "@mui/material";
import ContainedButton from "../ContainedButton/ContainedButton";
import { useForm, Controller } from 'react-hook-form';
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
    const {register, handleSubmit, control, formState:{errors}}=useForm();
    const [usluge,setUsluge]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await Services.sveUsluge();
            setUsluge(response);
        };
        fetchData();
        },[idAdmin]);

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
        }else if (props.uloga === 'Zaposleni' && usluge) {
  const selectedUslugeIds = data.usluge.reduce((acc, nazivUsluge) => {
  const selectedUsluga = usluge.find((usluga) => usluga.ServiceName === nazivUsluge);
  if (selectedUsluga) {
    acc.push(selectedUsluga.ServiceID);
  }
  return acc;
}, []);
      const response=await Services.dodajKorisnika({'ime':data.ime, 'prezime':data.prezime, 'brojTelefona':data.brojTelefona,'email':data.email, 'korisnickoIme':data.korisnickoIme, 'password':data.password,'rola':2,'usluga':selectedUslugeIds});
        if(response && response.poruka==='Registracija uspešna.'){
          toast.success("Zaposleni je uspešno dodat!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
        setTimeout(() => {
        navigate(`/zaposleniAdmin/${idAdmin}`);
     }, 2000);  
}else{
        toast.success("Dodavanje nije uspelo! Pokušaj ponovo!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });

        }
}}
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
            <h1 className={styles.heading}>{props.heading}</h1>
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
                        </div> 
  <div className={styles.row3}>
        {props.uloga === "Zaposleni" && (
          <div className={styles.item}>
            <Controller
              name="usluge"
              control={control}
              defaultValue={['']}
              render={({ field }) => (
                <Select
                  sx={{width:226}}
                  multiple
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {usluge && usluge.map((usluga, index) => (
                    <MenuItem key={index} value={usluga.ServiceName}>
                      {usluga.ServiceName}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>
        )}
                        <ContainedButton text="POTVRDI" type="submit" module={styles.button}/>
                    </div>
                    </form>     
                </div>
        </>
    )
}