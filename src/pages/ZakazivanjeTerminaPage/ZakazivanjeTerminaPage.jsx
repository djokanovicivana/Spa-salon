import React from "react";
import { Select } from "@mui/material";
import {MenuItem} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useForm, Controller } from 'react-hook-form';
import { Services } from "../../services/Services";
import { useEffect } from "react";
import { useState } from "react";
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import DatePicker from 'react-datepicker';
import SearchIcon from '@mui/icons-material/Search';
import BasicModal from "../../components/BasicModal/BasicModal";
import 'react-datepicker/dist/react-datepicker.css';
import styles from "./ZakazivanjeTerminaPage.module.css";
export default function ZakazivanjeTerminaPage(){
    const idKorisnik=Services.uzimanjeSesije();
    const [usluge,setUsluge]=useState([]);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [termini, setTermini]=useState(null);
    const [error, setError]=useState(null);
    const[terminiIds,setTerminiIds]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            const uslugeResponse=await Services.sveUsluge();
            setUsluge(uslugeResponse);
        };
        fetchData();
    },[idKorisnik]);
    const onSubmit=async(data)=>{
        setTermini(null);
    const nazivUsluge = data.usluga;
const selectedUsluga = usluge.find((usluga) => usluga.ServiceName === nazivUsluge);

if (selectedUsluga) {
    const selectedUslugaId = selectedUsluga.ServiceID;
    console.log(selectedUslugaId);
    console.log(data.datum);
    const response=await Services.korisniciSlobodniTermini({
        'idUsluge':selectedUslugaId,
        'datum':data.datum,
    });
    
    if(response!=='Nema slobodnih termina za Vašu pretragu'){
        setTermini(response.termini);
        console.log(response.termini);
        const terminiIds=response.termini.map((termin)=>(
           termin.appointment_ids.split(',')
        ))
        console.log(terminiIds);
        setTerminiIds(terminiIds);
    }else {
        setError(response);
    }
    
    }}


    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zakazivanjeTermina/${idKorisnik}`}>Zakaži termin</Link>}
        text3={<Link to={`/terminiKorisnik/${idKorisnik}`}>Termini</Link>}
        text4={<Link to={`/profilKorisnik/${idKorisnik}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
           {usluge && <form method="get" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.searchBox}>
            
           <Controller
              name="usluga"
              control={control}
              defaultValue={['']}
              render={({ field }) => (
               <div className={styles.item}>
                <p className={styles.label}>Izaberi uslugu:</p>
                <Select
                  sx={{width:226}}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  {usluge && usluge.map((usluga, index) => (
                    <MenuItem key={index} value={usluga.ServiceName}>
                      {usluga.ServiceName}
                    </MenuItem>
                  ))}
                </Select>
                </div>  
              )}
            />
            
            <Controller
      name="datum"
      control={control}
      defaultValue={null}
      render={({ field }) => (
       <div className={styles.item}>
        <p className={styles.label}>Izaberi datum:</p>
        <DatePicker selected={field.value} onChange={date => field.onChange(date)} 
        className={styles.datePicker} />
        </div>
      )}
    />
    <div className={styles.item}>
          <ContainedButton text={<SearchIcon/>} type="submit" module={styles.button}/>
          </div>
          </div>
        </form>}
      <div className={styles.box}>
{termini? (
  termini.map((termin, index) => (
      <div className={styles.osoba}  key={index}>
        <p className={styles.heading}>
          <span>{termin.FirstName} </span>
          <span>{termin.LastName}</span>
        </p>
        <div className={styles.termini}>
             {termin.appointments.split(',').map((vreme, appIndex)=> (
              <BasicModal label={<p key={appIndex}>{vreme}</p>} text={
                <p className={styles.modalText}>Da li ste sigurni da želite da zakažete termin u {vreme}?</p>} onConfirm={async()=>{
                  const response=await Services.zakaziTermin({'idKorisnika': idKorisnik,
                'idTermina':terminiIds[index][appIndex]});
                console.log(terminiIds[index][appIndex]);
                console.log(index);
                console.log(appIndex);
  

             }}/>
             ))} 
        
        </div>
      </div>
    
  ))
) : error? (<h3 className={styles.error}>Nema slobodnih termina za tvoju pretragu!</h3>):null
          }
          </div>
</>)}
        
