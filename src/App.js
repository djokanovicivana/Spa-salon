import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import PrijavaPage from './pages/PrijavaPage/PrijavaPage';
import RegistracijaPage from './pages/RegistracijaPage/RegistracijaPage';
import AdminPage from './pages/AdminPage/AdminPage';
import Profil from './pages/Profil/Profil';
import IzmenaProfilaPage from './pages/IzmenaProfilaPage/IzmenaProfilaPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/prijava" element={<PrijavaPage/>}/> 
      <Route path="/registracija" element={<RegistracijaPage/>}/>
      <Route path="/admin" elemet={<AdminPage/>}/>
      <Route path="/profil" element={<Profil/>}/>
      <Route path="/izmenaProfila" element={<IzmenaProfilaPage/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
