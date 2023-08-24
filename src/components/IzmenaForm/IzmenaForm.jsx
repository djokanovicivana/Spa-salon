import React from "react";
import styles from "./IzmenaForm.module.css"
import { TextField } from "@mui/material";
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import { useForm } from 'react-hook-form';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Services } from "../../services/Services";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { useNavigate } from "react-router-dom";
export default function IzmenaForm(props){
    const navigate=useNavigate();
    const {idAdmin,idKorisnik,idZaposleni}=useParams();
    const [id,setId]=useState(null);
    const [profil,setProfil]=useState({});
    const [rola,setRola]=useState('');
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    console.log(idAdmin);
    console.log(idKorisnik);
    console.log(idZaposleni);
  useEffect(() => {
  if (idAdmin) {
    setId(idAdmin);
    setRola('Admin');
  } else if (idKorisnik) {
    setId(idKorisnik);
    setRola('Korisnik');
  } else if (idZaposleni) {
    setId(idZaposleni);
    setRola('Zaposleni');
  } else {
    setId(null);
  }
}, [idAdmin, idKorisnik, idZaposleni]);
console.log(id);
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await Services.mojProfil(id);
            console.log(response);
            setProfil(response);
        };
        fetchData();
    },[id]);
    useEffect(() => {
    if (profil) {
        reset({
            ime: profil.FirstName,
            prezime: profil.LastName,
            brojTelefona:profil.PhoneNumber,
            email:profil.email,
            korisnickoIme:profil.Username,
        });
    }
}, [profil]); 
    const onSubmit=async(data)=>{
        console.log(data);
    const response=await Services.azurirajPodatke({'idKorisnika':id,
'ime':data.ime,
'prezime':data.prezime,
'email':data.email,
'brojTelefona':data.brojTelefona,
'korisnickoIme':data.korisnickoIme,
'password':data.password,
'password_confirmation':data.password_confirmation
    })
    if(response && response.poruka==='Uspešno ste izmenili podatke'){
      toast.success("Podaci su uspešno izmenjeni!", {
          position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
        });
        setTimeout(() => {
        navigate(`/profil${rola}/${id}`);
     }, 2000);   


    }else {
        toast.error("Izmena podataka nije uspela! Pokušajte ponovo!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:1500,
        });
    }


        
    }
    return(
        <>
        {props.uloga==='Administrator' ? (<Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zaposleniAdmin/${idAdmin}`}>Zaposleni</Link>}
        text3={<Link to={`/korisniciAdmin/${idAdmin}`}>Korisnici</Link>}
        text4={<Link to={`/profilAdmin/${idAdmin}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>) : props.uloga==='Zaposleni'? (<Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text3={<Link to={`/terminiZaposleni/${idZaposleni}`}>Termini</Link>}
        text4={<Link to={`/profilZaposleni/${idZaposleni}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>) :    <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zakazivanjeTermina/${idKorisnik}`}>Zakaži termin</Link>}
        text3={<Link to="/terminiKorisnik">Termini</Link>}
        text4={<Link to={`/profilKorisnik/${idKorisnik}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>}
        <ToastContainer/>
        <div className={styles.box}>
            <h1 className={styles.heading}>Izmeni podatke:</h1>
                   {profil && <form onSubmit={handleSubmit(onSubmit)} className={styles.form}method="post">
                    <div className={styles.row1}>
                       <div className={styles.item}>
                        <p className={styles.label}>Ime: </p>
                            <TextField
                                id="ime"
                                name="ime"
                                label=""
                                variant="outlined"
                                className={styles.field}
                                {...register('ime')} />
                        </div>
                        <div className={styles.item}>
                            <p className={styles.label}>Prezime: </p>
                            <TextField
                                id="prezime"
                                name="prezime"
                                label=""
                                variant="outlined"
                                className={styles.field}
                                {...register('prezime')} />
                        </div>
                        <div className={styles.item}>
                            <p className={styles.label}>Broj telefona: </p>
                            <TextField
                                id="brojTelefona"
                                name="brojTelefona"
                                label=""
                                variant="outlined"
                                className={styles.field}
                                {...register('brojTelefona')} />
                        </div>
                        <div className={styles.item}>
                            <p className={styles.label}>Email: </p>
                            <TextField
                                id="email"
                                label=""
                                name="email"
                                variant="outlined"
                                className={styles.field}
                                {...register('email')} />
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.item}>
                            <p className={styles.label}>Korisničko ime: </p>
                            <TextField
                                id="korisnickoIme"
                                name="korisnickoIme"
                                label=""
                                variant="outlined"
                                className={styles.field}
                                {...register('korisnickoIme')} />
                        </div>
                        <div className={styles.item}>
                            <p className={styles.label}>Lozinka: </p>
                            <TextField label="Lozinka" 
                             id="password"
                             name="password"
                            variant="outlined"
                            type="password"
                            className={styles.field}
                            {...register('password')} />
                        </div>
                        <div className={styles.item}>
                            <p className={styles.label}>Potvrdi: </p>
                            <TextField label="Potvrdi lozinku" 
                             id="password_confirmation"
                             name="password_confirmation"
                            variant="outlined"
                            type="password"
                            className={styles.field}
                            {...register('password_confirmation')} />
                        </div>
                        <ContainedButton text="IZMENI" type="submit" module={styles.button}/>
                    </div>
                    </form>   }
                    </div>  
        </>
    )
}