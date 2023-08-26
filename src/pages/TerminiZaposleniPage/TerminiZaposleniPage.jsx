import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from "./TerminiZaposleniPage.module.css"
import { useState } from "react";
import { Services } from "../../services/Services";
import { useEffect } from "react";
import { format } from 'date-fns';
export default function TerminiZaposleniPage(){
    const idZaposleni=Services.uzimanjeSesijeId();
      const [tabValue, setTabValue] = useState(0);
      const [tabValue1, setTabValue1] = useState(0);
      const [usluge,setUsluge]=useState(null);
      const [uslugeIds,setUslugeIds]=useState(null);
      const [zakazaniTermini,setZakazaniTermini]=useState(null);
      const [slobodniTermini, setSlobodniTermini]=useState(null);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
      const handleTabChange1 = (event, newValue) => {
        setTabValue1(newValue);
    };
    useEffect(()=>{
      const fetchData=async()=>{
        const response=await Services.mojeUsluge(idZaposleni);
        console.log(response);
         const fetchedUsluge = response.map(usluga => usluga.ServiceName);
        const fetchedUslugeIds = response.map(usluga => usluga.ServiceID);
          setUsluge(fetchedUsluge);
          setUslugeIds(fetchedUslugeIds);
             if (fetchedUslugeIds.length > 0) {
            const terminiResponses = [];
            const slobodniResponses=[];
            for (const uslugaId of fetchedUslugeIds) {
                const terminiResponse = await Services.zakazaniTermini({
                    'idZaposlenog': idZaposleni,
                    'idUsluge': uslugaId
                });
                terminiResponses.push(terminiResponse);
                const slobodniResponse=await Services.zaposleniSlobodniTermini({'idZaposlenog':idZaposleni,
                 'idUsluge':uslugaId});
                slobodniResponses.push(slobodniResponse);
            }
            console.log(terminiResponses);
            console.log(slobodniResponses);
            setZakazaniTermini(terminiResponses);
            setSlobodniTermini(slobodniResponses);
  
        }
      };
      fetchData();
    },[idZaposleni]);
   
    console.log(zakazaniTermini);
    console.log(slobodniTermini);
    console.log(usluge);
    console.log(uslugeIds);
    return (
        <>
       <Navbar
        logo={<Link to="/">KOZMETIČKI SALON</Link>}
        text3={<Link to={`/terminiZaposleni/${idZaposleni}`}>Termini</Link>}
        text4={<Link to={`/profilZaposleni/${idZaposleni}`}>Tvoj profil</Link>}
        text5="Odjavi se"/>
         <Tabs value={tabValue} onChange={handleTabChange} >
        {usluge && usluge.map((usluga,index)=>(
         <Tab label={usluga} key={index}  className={styles.tabs}/>
       
        ))}
        </Tabs>
         {tabValue>=0 &&
        <>
        <Tabs value={tabValue1} onChange={handleTabChange1}>
          <Tab label="Zakazani termini"  className={styles.tabs}/>
        <Tab label="Slobodni termini" className={styles.tabs}/>
        </Tabs>
       {tabValue1 === 0 && usluge && uslugeIds && zakazaniTermini && (
    <div>
        {zakazaniTermini[tabValue].termini && (
           zakazaniTermini[tabValue].termini.map((termin,index)=>(
           <div key={index}>
            <p>{termin.FirstName} {termin.LastName}</p>
            <p>{format(new Date(termin.AppointmentDateTime), 'dd.MM.yyyy. HH:mm')}</p>
           </div>
           ))
        )}
        {zakazaniTermini[tabValue].poruka && (
          <h3>{zakazaniTermini[tabValue].poruka}</h3>
        )}
    </div>
)}
       {tabValue1===1 && usluge && uslugeIds && slobodniTermini && (
        <div>
           {slobodniTermini[tabValue].termini && (
           slobodniTermini[tabValue].termini.map((termin,index)=>(
           <div key={index}>
            <p>{format(new Date(termin.AppointmentDateTime), 'dd.MM.yyyy. HH:mm')}</p>
           </div>
           ))
        )}
        {!slobodniTermini[tabValue].termini && (
          <h3>Nema slobodnih termina</h3>
        )}
        </div>
       )} 
        </>}
        </>
    )
}