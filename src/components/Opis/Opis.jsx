import React from "react";
import styles from "./Opis.module.css";

export default function Opis() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2 className={styles.heading}>Naziv Usluge</h2>
                <p className={styles.detail}>Trajanje: X minuta</p>
                <p className={styles.detail}>Cena: Y dinara</p>
                <p className={styles.detail}>Materijal: Materijal 1, Materijal 2, ...</p>
                <p className={styles.description}>
                    Ovde ide opis usluge. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className={styles.button}>
                    <a href="/">Nazad na sve usluge</a>
                </div>
            </div>
        </div>
    );
}