import React from "react";
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export function RegisMember() {
  return (
    <>
      <Navbar/>
      <div className="container-regisMember">
        <div className="content-regisMember">
          <div>
            <h1>Pilih Jenis Pendaftaran</h1>
          </div>
          <div className="opsi-regis">
            <Link to="/notfound">Daftar Jadi Siswa</Link>
            <Link to="/notfound">Daftar Jadi Guru</Link>
            <Link to="/notfound">Daftar Jadi Staff</Link>
          </div>
          <div className="back-to-home">
              <Link to="/home">Batal</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
