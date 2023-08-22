import React from "react";
import ContainedButton from "../ContainedButton/ContainedButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './KorisniciCard.module.css';
import BasicModal from "../BasicModal/BasicModal";
import IzmenaForm from "../IzmenaForm/IzmenaForm";
export default function KorisniciCard(props){
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
        <ContainedButton module={styles.button} text={<BasicModal label={<EditIcon/>} child={<IzmenaForm heading={props.formHeading}/>}/>}/>
        <ContainedButton module={styles.button} text={<DeleteIcon/>}/>
        </div>
        </div>
        </>
    )
}