import React from "react";
import { Select } from "@mui/material";
import {MenuItem} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useForm, Controller } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { Services } from "../../services/Services";
import { useEffect } from "react";
import { useState } from "react";
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import DatePicker from 'react-datepicker';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import 'react-datepicker/dist/react-datepicker.css';
import styles from "./ZakazivanjeTerminaPage.module.css";
export default function ZakazivanjeTerminaPage(){
    const {idKorisnik}=useParams();
    const [usluge,setUsluge]=useState([]);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [termini, setTermini]=useState(null);
    const [error, setError]=useState(null);
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
    }else {
        setError(response);
    }
    
    }}
    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zakazivanjeTermina/${idKorisnik}`}>Zakaži termin</Link>}
        text3={<Link to="/terminiKorisnik">Termini</Link>}
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

    
   
     
{termini? (
  termini.map((termin, index) => (
    <div className={styles.box} key={index}>
      <div className={styles.osoba}>
        <p className={styles.heading}>
          <span>{termin.FirstName} </span>
          <span>{termin.LastName}</span>
          
        </p>
        <div className={styles.termini}>
          
             {termin.appointments.split(',').map((vreme, appIndex) => (
            <p key={appIndex}>
              {vreme}
              <span>{<CheckIcon />}</span>
            </p>
             ))} 
        
        </div>
      </div>
    </div>
  ))
) : error? (<h3 className={styles.error}>Nema slobodnih termina za tvoju pretragu!</h3>):null
          }
</>)}
        
