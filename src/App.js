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


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/prijava" element={<PrijavaPage/>}/> 
      <Route path="/registracija" element={<RegistracijaPage/>}/>
      <Route path="/admin" elemet={<AdminPage/>}/>
      <Route path="/profilZaposleni" element={<ZaposleniProfil/>}/>
      <Route path="/korisniciAdmin" element={<SviKorisniciPage/>}/>
      <Route path="/zaposleniAdmin" element={<SviZaposleniPage/>}/>
      <Route path="/usluge" element={<UslugePage/>}/>
      <Route path="/zaposleni" element={<ZaposleniPage/>}/>
      <Route path="/terminiZaposleni" element={<TerminiZaposleniPage/>}/>
      <Route path="/korisnik" element={<KorisnikPage/>}/>
      <Route path="/profilKorisnik" element={<KorisnikProfil/>}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
