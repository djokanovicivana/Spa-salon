
import { apiEndpoints } from "../utils/apiUrls";
import axios from "axios";
const prijava=async({korisnickoIme, password})=>{
    try{
        const response=await axios.post(`${apiEndpoints.endpointPrijava}.php`,{korisnickoIme,password});
        return response.data;
    } catch (error) {
        console.error("Greška pri prijavljivanju:", error);
        return null;
    } 
};
const registracija=async({ime,prezime,brojTelefona,email,korisnickoIme,password,password_confirmation})=>{
    try{
    const response=await axios.post(`${apiEndpoints.endpointRegistracija}.php`,{ime,prezime,brojTelefona,email,korisnickoIme,password, password_confirmation});
    return response.data.poruka;
    }
    catch (error) {
        console.error("Greška pri registrovanju:", error);
        return null;
    }
}
const dodajKorisnika=async({ime,prezime,brojTelefona,email,korisnickoIme,password,rola})=>{
    try{
        const response=await axios.post(`${apiEndpoints.endpointDodajKorisnika}.php?rola=${rola}`,{ime,prezime,brojTelefona,email,korisnickoIme,password});
        return response.data;
    }
    catch (error) {
        console.log("Greška pri dodavanju:", error);
        return null;
    }
}
const mojProfil=async(idKorisnik)=>{
    try{
    const response=await axios.get(`${apiEndpoints.endpointMojProfil}.php?idKorisnika=${idKorisnik}`);
    return response.data.podaciOKorisniku;}
    catch(error){
        console.log('error:',error);
    }
}
const sviKorisnici=async()=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointSviKorisnici}.php`);
        return response.data.korisnici;
    }
    catch(error){
        return error.response.data;
    }
}
const sviZaposleni=async()=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointSviZaposleni}.php`);
        return response.data.zaposleni;
    }
    catch(error){
        console.log('error:',error);
    }
}
const azurirajPodatke=async({idKorisnika,ime,prezime,email,brojTelefona,korisnickoIme,password,password_confirmation})=>{
    try{
    const response=await axios.put(`${apiEndpoints.endpointAzurirajPodatke}.php?idKorisnika=${idKorisnika}`,{ime:ime,
        prezime:prezime,
        email:email,
        brojTelefona:brojTelefona,
        korisnickoIme:korisnickoIme,
        password:password,
        password_confirmation:password_confirmation});
return response.data;
    }
    catch(error){
        console.log("error:",error);
    }
}
const izmeniKorisnika=async({idKorisnika,ime,prezime,email,brojTelefona,korisnickoIme,lozinka})=>{
    try{
        const response=await axios.put(`${apiEndpoints.endpointIzmeniKorisnika}?idKorisnika=${idKorisnika}.php`,{
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
        const response=await axios.get(`${apiEndpoints.endpointZakazaniTermini}?idZaposlenog=${idZaposlenog}.php`);
        return response.data.termini;
    }
    catch(error){
        console.log('error:',error);
    }
}
const sveUsluge=async()=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointSveUsluge}.php`);
        return response.data.usluge;
    }
    catch(error){
        console.log('error:',error);
    }
}
const mojeUsluge=async(idZaposlenog)=>{
try{
    const response=await axios.get(`${apiEndpoints.endpointMojeUsluge}?idZaposlenog=${idZaposlenog}.php`);
    return response.data.usluge;
}
catch(error){
    console.log('error:',error);
}
}
const podaciOUsluzi=async(idUsluge)=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointPodaciOUsluzi}?idUsluge=${idUsluge}.php`);
        return response.data.podaciOUsluzi;
    }
    catch(error){
        console.log('error:',error);
    }
}
const korisniciSlobodniTermini=async(idUsluge)=>{
    try{
        const response=await axios.get(`${apiEndpoints.endpointKorisniciSlobodniTermini}?idUsluge=${idUsluge}.php`);
        return response.data.termini;
    }
    catch(error){
        console.log('error:',error);
    }
}
const cuvanjeSesije=(idKorisnika,idRole)=>{
    sessionStorage.setItem(idKorisnika,idRole);
}
const brisanjeSesije=()=>{
    sessionStorage.clear();
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
    korisniciSlobodniTermini,
    cuvanjeSesije,
    brisanjeSesije,

}
