import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import PrijavaPage from './pages/PrijavaPage/PrijavaPage';
import RegistracijaPage from './pages/RegistracijaPage/RegistracijaPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/prijava" element={<PrijavaPage/>}/> 
      <Route path="/registracija" element={<RegistracijaPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
