import React from "react";
import ContainedButton from "../ContainedButton/ContainedButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './ZaposleniCard.module.css';
import { Link } from "react-router-dom";
export default function ZaposleniCard(props){
    return(
        <>
        <div className={styles.box}>
        <div className={styles.row}>
        <p>Ime: <span>{props.ime}</span></p>
        <p>Prezime: <span>{props.prezime}</span> </p>
        <p>Korisničko ime: <span>{props.korisnickoIme}</span></p>
        </div>
        <div className={styles.row}>
        <p>Email: <span>{props.email}</span></p>
        <p>Broj telefona: <span>{props.brojTelefona}</span></p>
        </div>
        <div className={styles.row4}>
        <Link to={`/izmenaZaposlenog/${props.idZaposleni}/${props.idAdmin}`}><ContainedButton module={styles.button} text={<EditIcon/>}/></Link> 
        <ContainedButton module={styles.button} text={<DeleteIcon/>}/>
        </div>
        </div>
        </>
    )
}