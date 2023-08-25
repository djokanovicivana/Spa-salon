import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import PrijavaPage from './pages/PrijavaPage/PrijavaPage';
import RegistracijaPage from './pages/RegistracijaPage/RegistracijaPage';
import AdminPage from './pages/AdminPage/AdminPage';
import SviKorisniciPage from './pages/SviKorisniciPage/SviKorisniciPage';
import SviZaposleniPage from './pages/SviZaposleniPage/SviZaposleniPage';
import UslugePage from './pages/UslugePage/UslugePage';
import ZaposleniPage from './pages/ZaposleniPage/ZaposleniPage';
import TerminiZaposleniPage from './pages/TerminiZaposleniPage/TerminiZaposleniPage';
import KorisnikPage from "./pages/KorisnikPage/KorisnikPage";
import ZaposleniProfil from './pages/ZaposleniProfil/ZaposleniProfil';
import KorisnikProfil from './pages/KorisnikProfil/KorisnikProfil';
import AdminProfil from './pages/AdminProfil/AdminProfil';
import IzmenaForm from './components/IzmenaForm/IzmenaForm';
import IzmenaAdmin from './pages/IzmenaAdmin/IzmenaAdmin';
import DodavanjeForm from './components/DodavanjeForm/DodavanjeForm';
import ZakazivanjeTerminaPage from './pages/ZakazivanjeTerminaPage/ZakazivanjeTerminaPage';
import TerminiKorisnikPage from './pages/TerminiKorisnikPage/TerminiKorisnikPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/prijava" element={<PrijavaPage/>}/> 
      <Route path="/registracija" element={<RegistracijaPage/>}/>
      <Route path="/admin/:idAdmin" element={<AdminPage/>}/>
      <Route path="/profilZaposleni/:idZaposleni" element={<ZaposleniProfil/>}/>
      <Route path="/korisniciAdmin/:idAdmin" element={<SviKorisniciPage/>}/>
      <Route path="/zaposleniAdmin/:idAdmin" element={<SviZaposleniPage/>}/>
      <Route path="/usluge" element={<UslugePage/>}/>
      <Route path="/zaposleni/:idZaposleni" element={<ZaposleniPage/>}/>
      <Route path="/terminiZaposleni/:idZaposleni" element={<TerminiZaposleniPage/>}/>
      <Route path="/terminiKorisnik/:idKorisnik" element={<TerminiKorisnikPage/>}/>
      <Route path="/korisnik/:idKorisnik" element={<KorisnikPage/>}/>
      <Route path="/profilKorisnik/:idKorisnik" element={<KorisnikProfil/>}/>
      <Route path="/profilAdmin/:idAdmin" element={<AdminProfil/>}/>
      <Route path="/azuriranjePodatakaAdmin/:idAdmin" element={<IzmenaForm uloga="Administrator"/>}/>
      <Route path="/azuriranjePodatakaZaposleni/:idZaposleni" element={<IzmenaForm uloga="Zaposleni"/>}/>
      <Route path="/azuriranjePodatakaKorisnik/:idKorisnik" element={<IzmenaForm uloga="Korisnik"/>}/>
      <Route path="/izmenaKorisnika/:idKorisnik/:idAdmin" element={<IzmenaAdmin/>}/>
      <Route path="/izmenaZaposlenog/:idZaposleni/:idAdmin" element={<IzmenaAdmin/>}/>
      <Route path="/dodavanjeKorisnika/:idAdmin" element={<DodavanjeForm uloga="Korisnik" heading="Dodaj korisnika:"/>}/>
      <Route path="/dodavanjeZaposlenog/:idAdmin" element={<DodavanjeForm uloga="Zaposleni" heading="Dodaj zaposlenog:"/>}/>
      <Route path="/zakazivanjeTermina/:idKorisnik" element={<ZakazivanjeTerminaPage/>}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
