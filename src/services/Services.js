import { TrySharp } from "@mui/icons-material";
import { apiEndpoints } from "../utils/apiUrls";
import axios from "axios";
const prijava=async({korisnickoIme, lozinka})=>{
    try{
        const response=await axios.post(`${apiEndpoints.endpointPrijava}`,{korisnickoIme,lozinka});
        return response.data.poruka;
    } catch (error) {
        console.error("Greška pri prijavljivanju:", error);
        return null;
    } 
};
const registracija=async({ime,prezime,brojTelefona,email,korisnickoIme,lozinka,potvrdjenaLozinka})=>{
    try{
    const response=await axios.post(`${apiEndpoints.endpointRegistracija}`,{ime,prezime,brojTelefona,email,korisnickoIme,lozinka, potvrdjenaLozinka});
    return response.data.poruka;
    }
    catch (error) {
        console.error("Greška pri registrovanju:", error);
        return null;
    }
}
const dodajKorisnika=async({ime,prezime,brojTelefona,email,korisnickoIme,lozinka})=>{
    try{
        const response=await axios.post(`${apiEndpoints.endpointDodajKorisnika}`,{ime,prezime,brojTelefona,email,korisnickoIme,lozinka});
        return response.data.poruka;
    }
    catch (error) {
        console.log("Greška pri dodavanju:", error);
        return null;
    }
}
const mojProfil=async(idKorisnik)=>{
    try{
    const response=await axios.get(`${apiEndpoints.endpointMojProfil}?idKorisnika=${idKorisnik}`);
    return response.data.podaciOKorisniku;}
    catch(error){
        console.log('error:',error);
    }
}
const sviKorisnici=async()=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointSviKorisnici}`);
        return response.data.korisnici;
    }
    catch(error){
        console.log('error:',error);
    }
}
const sviZaposleni=async()=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointSviZaposleni}`);
        return response.data.zaposleni;
    }
    catch(error){
        console.log('error:',error);
    }
}
const azurirajPodatke=async({idKorisnika,ime,prezime,email,brojTelefona,korisnickoIme,lozinka})=>{
    try{
    const response=await axios.put(`${apiEndpoints.endpointAzurirajPodatke}?idKorisnika=${idKorisnika}`,{ime:ime,
        prezime:prezime,
        email:email,
        brojTelefona:brojTelefona,
        korisnickoIme:korisnickoIme,
        lozinka:lozinka});
    return response.data.poruka;
    }
    catch(error){
        console.log("error:",error);
    }
}
const izmeniKorisnika=async({idKorisnika,ime,prezime,email,brojTelefona,korisnickoIme,lozinka})=>{
    try{
        const response=await axios.put(`${apiEndpoints.endpointIzmeniKorisnika}?idKorisnika=${idKorisnika}`,{
            ime:ime,
            prezime:prezime,
            email:email,
            brojTelefona:brojTelefona,
            korisnickoIme:korisnickoIme,
            lozinka:lozinka
        });
        return response;
    }
    catch(error){
        console.log('error:',error);
    }
}
const zakazaniTermini=async(idZaposlenog)=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointZakazaniTermini}?idZaposlenog=${idZaposlenog}`);
        return response.data.termini;
    }
    catch(error){
        console.log('error:',error);
    }
}
const sveUsluge=async()=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointSveUsluge}`);
        return response.data.usluge;
    }
    catch(error){
        console.log('error:',error);
    }
}
const mojeUsluge=async(idZaposlenog)=>{
try{
    const response=await axios.get(`${apiEndpoints.endpointMojeUsluge}?idZaposlenog=${idZaposlenog}`);
    return response.data.usluge;
}
catch(error){
    console.log('error:',error);
}
}
const podaciOUsluzi=async(idUsluge)=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointPodaciOUsluzi}?idUsluge=${idUsluge}`);
        return response.data.podaciOUsluzi;
    }
    catch(error){
        console.log('error:',error);
    }
}
const korisniciSlobodniTermini=async(idUsluge)=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointKorisniciSlobodniTermini}?idUsluge=${idUsluge}`);
        return response.data.termini;
    }
    catch(error){
        console.log('error:',error);
    }
}
export const Services={
    prijava,
    registracija,
    dodajKorisnika,
    mojProfil,
    sviKorisnici,
    sviZaposleni,
    azurirajPodatke,
    izmeniKorisnika,
    zakazaniTermini,
    sveUsluge,
    mojeUsluge,
    podaciOUsluzi,
    korisniciSlobodniTermini

}
