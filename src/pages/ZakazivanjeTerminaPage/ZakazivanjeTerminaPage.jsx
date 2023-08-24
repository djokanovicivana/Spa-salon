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
    const [selectedDate,setSelectedDate]=useState(null);
    const { control, handleSubmit, formState: { errors } } = useForm();
    useEffect(()=>{
        const fetchData=async()=>{
            const uslugeResponse=await Services.sveUsluge();
            setUsluge(uslugeResponse);
        };
        fetchData();
    },[idKorisnik]);
    const onSubmit=(data)=>{
        console.log(data);
    }
    return(
        <>
        <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text2={<Link to={`/zakazivanjeTermina/${idKorisnik}`}>Zakaži termin</Link>}
        text3={<Link to="/terminiKorisnik">Termini</Link>}
        text4={<Link to={`/profilKorisnik/${idKorisnik}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
           {usluge && <form method="post" onSubmit={handleSubmit(onSubmit)}>
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
      name="selectedDate"
      control={control}
      defaultValue={null}
      render={({ field }) => (
       <div className={styles.item}>
        <p className={styles.label}>Izaberi datum:</p>
        <DatePicker selected={field.value} onChange={date => field.onChange(date)} 
        className={styles.datePicker} 
        calendarClassName={styles.calendar}/>
        </div>
      )}
    />
    <div className={styles.item}>
          <ContainedButton text={<SearchIcon/>} type="submit" module={styles.button}/>
          </div>
          </div>
        </form>}
<div className={styles.box}>
    
        <div className={styles.osoba}>
            <p className={styles.heading}><span>Ivana </span><span>Djokanovic</span></p>
            <div className={styles.termini}>
                <p>14:50<span>{<AddIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
            </div>
        </div>
          <div className={styles.osoba}>
            <p className={styles.heading}><span>Ivana </span><span>Djokanovic</span></p>
            <div className={styles.termini}>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span><span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
                <p>14:50<span>{<CheckIcon/>}</span></p>
                <p>20:25<span>{<CheckIcon/>}</span></p>
                <p>16:50<span>{<CheckIcon/>}</span></p>
            </div>
        </div>
        </div>
        </>
    )
}