import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Contacts() {
  return (
    <>
      <Navbar />
      <div className="container-kontak">
        <div className="info-kontak">
          <div className="contact-us">
            <div className="no">
              <h6>Kontak Kami</h6>
              <p> 0823-1671-6328 (CS 1) </p>
              <p> 0878-0858-8793 (CS 2) </p>
              <p> admin@abyan-private.com</p>
            </div>
            <div className="cs">
              <h6>Costumer Service</h6>
              <p>CS Online Setiap Hari 24 Jam </p>
              <p>Jam Kantor Hari Senin s/d Sabtu </p>
              <p>Minggu dan Tanggal Merah Slow Respond</p>
            </div>
            <div className="social-media">
              <h6>Social Media</h6>
              <a className="instagram" href="https://www.instagram.com/abyanprivate/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="twitter" href="https://api.whatsapp.com/send?phone=%2B6282316716328" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a className="facebook" href="https://web.facebook.com/abyanprivate" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="info-lokasi">
            <div className="info-maps">
              <h4>Serang</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2837241719185!2d106.16501415092175!3d-6.092430461441913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f5d5d90bdaad%3A0x56311c3cccb93298!2sAbyan%20Private%20-%20Les%20Privat%20(Serang)!5e0!3m2!1sen!2sid!4v1664915591153!5m2!1sen!2sid"
                width="400"
                height="300"
                style={{ border: '0' }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="info-maps">
              <h4>Cilegon</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.8863486317205!2d106.03137325092113!3d-6.010340160690494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418f3ce1c5b929%3A0xf61d347c13396ada!2sAbyan%20Private%20-%20Les%20Privat%20(Cilegon)!5e0!3m2!1sen!2sid!4v1664915627335!5m2!1sen!2sid"
                width="400"
                height="300"
                style={{ border: '0' }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="pesan-kontak">
          <h2>Tinggalkan Pesan</h2>
          <p>Silahkan tinggalkan pesan untuk Abyan Private dan akan segera kami tanggapi</p>
          <div className="kirim-pesan">
            <form>
              <div className="d-flex mb-3">
                <div className="kirim-nama" style={{ width: '50%', padding: '5px' }}>
                  <label className="form-label" style={{ color: 'white' }}>
                    Nama Lengkap
                  </label>
                  <input className="form-control" />
                </div>
                <div className="kirim-nomor" style={{ width: '50%', padding: '5px' }}>
                  <label className="form-label" style={{ color: 'white' }}>
                    Nomor WhatsApp
                  </label>
                  <input className="form-control" />
                </div>
              </div>
              <div className="mb-3" style={{ padding: '5px' }}>
                <label className="form-label" style={{ color: 'white' }}>
                  Alamat Email
                </label>
                <input className="form-control" />
              </div>
              <div className="mb-3" style={{ padding: '5px' }}>
                <label className="form-label" style={{ color: 'white' }}>
                  Example textarea
                </label>
                <textarea className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
