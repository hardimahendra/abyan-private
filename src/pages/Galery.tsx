import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Galery(){
    return(
    <>
    <Navbar/>
        <div className="container-galeri">
            <div>
                <h3>Dokumentasi</h3>
            </div>
        <div className="galeri-foto">
            <div className="foto">
                <img src="./img/galeri/foto/foto-1.jpg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
            <div className="foto">
                <img src="./img/galeri/foto/foto-2.jpg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
            <div className="foto">
                <img src="./img/galeri/foto/foto-3.jpg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
            <div className="foto">
                <img src="./img/galeri/foto/foto-4.jpg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
            <div className="foto">
                <img src="./img/galeri/foto/foto-5.jpg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
            <div className="foto">
                <img src="./img/galeri/foto/foto-6.jpg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
            <div className="foto">
                <img src="./img/galeri/foto/foto-7.jpg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
            <div className="foto">
                <img src="./img/galeri/foto/foto-8.jpg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
            <div className="foto">
                <img src="./img/galeri/foto/foto-9.jpg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
            <div className="foto">
            <img src="./img/galeri/foto/foto-10.jpg" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsam.</p>
            </div>
        </div>
        <div className="galeri-video">
            <div className="video">
            <img src="./img/galeri/video/vid-1.jpg" alt="vid" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat!</p>
            </div>
            <div className="video">
            <img src="./img/galeri/video/vid-1.jpg" alt="vid" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat!</p>
            </div>
        </div>
        </div>
    <Footer/>
    </>
    )
}