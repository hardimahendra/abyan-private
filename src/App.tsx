import { Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { Home } from './pages/Home';
import { Profil } from './pages/Profil';
import { Galery } from './pages/Galery';
import { DaftarGuru } from './pages/DaftarGuru';
import { Contacts } from './pages/Contacts';

import { Login } from './pages/dashboard/Login';
import { RegisMember } from './pages/dashboard/RegisMember';

import {NotFound} from './pages/notFoundPages/NotFound';
function App() {
  return (
    <>
      <div className="body">
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/galery" element={<Galery/>} />
          <Route path="/daftarguru" element={<DaftarGuru />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regisMember" element={<RegisMember />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
