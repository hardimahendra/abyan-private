import React from "react";
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

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
            <a href="/notfound">Daftar Jadi Siswa</a>
            <a href="/notfound">Daftar Jadi Guru</a>
            <a href="/notfound">Daftar Jadi Staff</a>
          </div>
          <div className="back-to-home">
            <a type="button" href="/home">
              Batal
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
