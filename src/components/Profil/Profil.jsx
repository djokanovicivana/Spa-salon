import React from "react";
import styles from "./Profil.module.css"
import ContainedButton from "../../components/ContainedButton/ContainedButton";
import EditIcon from '@mui/icons-material/Edit';
import BasicModal from "../../components/BasicModal/BasicModal";
import IzmenaForm from "../../components/IzmenaForm/IzmenaForm";

export default function Profil(){
    return(
        <>
        <div className={styles.box}>
            <div className={styles.info}>
            <h1 className={styles.heading}>Tvoj profil</h1>
            <p>Ime: <span className={styles.item}>Ivana</span></p>
            <p>Prezime: <span className={styles.item}>Ivana</span> </p>
            <p>Korisničko ime: <span className={styles.item}>Ivana</span></p>
            <p>Email: <span className={styles.item}>Ivana</span></p>
            <p>Lozinka: <span className={styles.item}>Ivana</span></p>
            <p>Broj telefona: <span className={styles.item}>Ivana</span></p>
            <p>Adresa: <span className={styles.item}>Ivana</span></p>
            </div>
            <BasicModal label={<ContainedButton text={<EditIcon/>} module={styles.button}/>}
            child={<IzmenaForm heading="Izmeni profil"/>}
            />
        </div>
        </>
    )
}