import { Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
export function Navbar(){
    return(
        <>
            <div className="header-nav">
                <h3>Abyan Private</h3> 
                </div>
                <nav className="container-navbar">
                <div className="navbar-wrapper">
                    <div className="brand">
                        <a>
                            <Link to="/">
                                <img src="./assets/icons/abyanprivate.png" alt="brand" />
                            </Link>
                        </a>
                    </div>
                    <div className="navbar-left">
                        <a aria-current="page"><Link to="/home">Home</Link></a>
                        <a><Link to="/profil">Profil</Link> </a>
                        <a><Link to="/galery">Galeri</Link> </a>
                        <a><Link to="/daftarGuru">Daftar Guru</Link></a>
                        <a><Link to="/contacts">Kontak</Link></a>
                    </div>
                    <div className="navbar-right">
                        <a type="button"><Link to="/login">Login</Link></a>
                        <a type="button"><Link to="/regisMember">Sign Up</Link></a>
                    </div>
                    <div className="navbar-toggle">
                        <nav id="content-toggle">
                            <a aria-current="page"><Link to="/home">Home</Link></a>
                            <a><Link to="/profil">Profil</Link></a>
                            <a><Link to="/galery">Galeri</Link></a>
                            <a><Link to="/daftarGuru">Daftar Guru </Link></a>
                            <a><Link to="/contacts">Kontak</Link></a>
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle id="dropdown-split-basic"></Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                    <Dropdown.Item className="drop-login">
                                        <Link to="/login">Login</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="drop-regis">
                                        <Link to="/regisMember">Sign Up</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </nav>
                        <span>
                            <i id="open" onClick={() => navOpen()} className="fa-solid fa-bars-staggered"></i>
                            <i id="close" onClick={() => navClose()} className="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
    function navOpen(){
        const navOpen = document.getElementById('open') as HTMLElement;
        const navClose = document.getElementById('close') as HTMLElement;
        const navContent = document.getElementById('content-toggle') as HTMLElement;
        if(navOpen === null){
            return
        }else if(navClose === null){
            return
        }
        navOpen.style.display = 'none'
        navClose.style.display = 'block';
        navContent.style.display = 'flex'
    }
    function navClose(){
        const navOpen = document.getElementById('open') as HTMLElement;
        const navClose = document.getElementById('close') as HTMLElement;
        const navContent = document.getElementById('content-toggle') as HTMLElement;
        if(navOpen === null){
            return
        }else if(navClose === null){
            return
        }
        navOpen.style.display = 'block'
        navClose.style.display = 'none';
        navContent.style.display = 'none'
    }
    
}
