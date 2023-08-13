import React from "react";
import ContainedButton from "../ContainedButton/ContainedButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './OsobaCard.module.css';
export default function OsobaCard(props){
    return(
        <>
        <div className={styles.box}>
        <div className={styles.row}>
        <p>Ime: <span>Ivana</span></p>
        <p>Prezime: <span>Ivana</span> </p>
        <p>Korisničko ime: <span>Ivana</span></p>
        </div>
        <div className={styles.row}>
        <p>Email: <span>Ivana</span></p>
        <p>Lozinka: <span>Ivana</span></p>
        <p>Broj telefona: <span>Ivana</span></p>
        </div>
        <div className={styles.row}>
        <p>Adresa: <span >Ivana</span></p>
        </div>
        <div className={styles.row4}>
        <ContainedButton module={styles.button} text={<EditIcon/>}/>
        <ContainedButton module={styles.button} text={<DeleteIcon/>}/>
        </div>
        </div>
        </>
    )
}