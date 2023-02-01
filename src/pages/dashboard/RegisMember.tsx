import React from "react";
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export function RegisMember() {
  return (
    <>
      <Navbar />
      <div className="container-regisMember">
        <div className="content-regisMember">
          <div>
            <h1>Pilih Jenis Pendaftaran</h1>
          </div>
          <div className="opsi-regis">
            <a><Link to="/notfound">Daftar Jadi Siswa</Link></a>
            <a><Link to="/notfound">Daftar Jadi Guru</Link></a>
            <a><Link to="/notfound">Daftar Jadi Staff</Link></a>
          </div>
          <div className="back-to-home">
            <a type="button">
              <Link to="/home">Batal</Link>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
