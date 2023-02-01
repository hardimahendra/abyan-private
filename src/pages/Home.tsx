import { EffectCards } from 'swiper';
import {Swiper, SwiperSlide,  } from 'swiper/react';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Home(){
    return (
      <>
        <Navbar />
        <div className="container-home">
          <div className="left-content">
            <div className="layanan">
              <div className="content-layanan">
                <div className="belajar-rumah">
                  <span>
                    <img src="./assets/icons/home-icon.png" />
                  </span>
                  <div className="text-content">
                    <h6>Belajar Dari Rumah</h6>
                    <p>Siswa dapat bejalar dengan fokus, aman, terarah & hemat ongkok. biar guru ke rumah siswa. tersedia les privat onlie juga</p>
                  </div>
                </div>
                <div className="guru-les">
                  <span>
                    <img src="./assets/icons/topi-toga-icon.png" />
                  </span>
                  <div className="text-content">
                    <h6>Guru Les Pilihan</h6>
                    <p>Demi memberikan pelayanan dan kualitas dalam mengajar siswa, Abyan Private menjamin kualitas guru les privat dengan proses seleksi yang kompetitif</p>
                  </div>
                </div>
                <div className="waktu-flexibel">
                  <span>
                    <img src="./assets/icons/time-flexibel-icon.png" />
                  </span>
                  <div className="text-content">
                    <h6>Waktu Fleksibel</h6>
                    <p>Orang tua dan siswa bebas menentukan kapan dan dimanapun ingin belajar bersama guru les privat</p>
                  </div>
                </div>
                <div className="report-siswa">
                  <span>
                    <img src="./assets/icons/report-icon.png" />
                  </span>
                  <div className="text-content">
                    <h6>Raport Untuk Siswa</h6>
                    <p>Kami memberikam raport gratis untuk siswa les privat. karena dengan data, orang tua dapat melihat keberhasilan dan mencari sulusi terbaik.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="report-record">
              <div className="report-siswa-record">
                <h6>Siswa</h6>
                {/* <p>335</p> */}
                <p></p>
              </div>
              <div className="report-guru-record">
                <h6>Guru</h6>
                <p></p>
                {/* <p>86</p> */}
              </div>
              <div className="report-mp-record">
                <h6>Mata Pelajaran</h6>
                {/* <p>29</p> */}
                <p></p>
              </div>
              <div className="report-wilayah-record">
                <h6>Wilayah</h6>
                {/* <p>8</p> */}
                <p></p>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="opsi-les">
              <div className="les-tk">
                <h6>Les Privat TK</h6>
                <span>
                  <img src="./img/opsi-1.jpg" alt="opsi-image" />
                </span>
              </div>
              <div className="les-sd">
                <h6>Les Privat SD</h6>
                <span>
                  <img src="./img/opsi-2.jpg" alt="opsi-image" />
                </span>
              </div>
              <div className="les-smp">
                <h6>Les Privat SMP</h6>
                <span>
                  <img src="./img/opsi-3.jpg" alt="opsi-image" />
                </span>
              </div>
              <div className="les-sma">
                <h6>Les Privat SMA</h6>
                <span>
                  <img src="./img/opsi-4.jpg" alt="opsi-image" />
                </span>
              </div>
            </div>
            <div className="cerita-sukses">
              <div className="judul-cerita">
                <h6>Cerita Sukses Siswa</h6>
              </div>
              <Swiper modules={[EffectCards]} effect={'cards'} grabCursor={true} className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <h6>Judul</h6>
                    <span>
                      <img src="./img/users/1.jpg" />
                    </span>
                    <h6>Nama Lengkap</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <h6>Judul</h6>
                    <span>
                      <img src="./img/users/2.jpg" />
                    </span>
                    <h6>Nama Lengkap</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <h6>Judul</h6>
                    <span>
                      <img src="./img/users/3.jpg" />
                    </span>
                    <h6>Nama Lengkap</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <h6>Judul</h6>
                    <span>
                      <img src="./img/users/4.jpg" />
                    </span>
                    <h6>Nama Lengkap</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <h6>Judul</h6>
                    <span>
                      <img src="./img/users/5.jpg" />
                    </span>
                    <h6>Nama Lengkap</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <h6>Judul</h6>
                    <span>
                      <img src="./img/users/6.jpg" />
                    </span>
                    <h6>Nama Lengkap</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <h6>Judul</h6>
                    <span>
                      <img src="./img/users/7.jpg" />
                    </span>
                    <h6>Nama Lengkap</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <h6>Judul</h6>
                    <span>
                      <img src="./img/users/8.jpg" />
                    </span>
                    <h6>Nama Lengkap</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <h6>Judul</h6>
                    <span>
                      <img src="./img/users/user.jpg" />
                    </span>
                    <h6>Nama Lengkap</h6>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="content-bottom">
            <div className="judul-content-bottom">
              <h6>Kenapa Memilih Les Privat di Abyan Private</h6>
            </div>
            <div className="isi-content-bottom">
              <span>
                <h6>Guru Les Terdekat</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Guru Datang Ke rumah</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Belajar Via Online</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Guru Berkualitas dan Terjamin</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Pelayanan Berkualitas</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Harga Terjangkau</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Waktu dan Tempat Fleksibel</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Belajar Lebih Fokus</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Tujuan Belajar Tercapai</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Dipinjamkan Whiteboard</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Gratis Raport Belajar Siswa</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Gratis Tes Diagnostik</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
              <span>
                <h6>Gratis Konsultasi Kapanpun</h6>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}