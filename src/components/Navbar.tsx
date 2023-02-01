import { Dropdown } from "react-bootstrap";

export function Navbar(){
    return(
        <>
            <div className="header-nav">
                <h3>Abyan Private</h3> 
                </div>
                <nav className="container-navbar">
                <div className="navbar-wrapper">
                    <div className="brand">
                    <a href="/">
                        <img src="./assets/icons/abyanprivate.png" alt="brand" />
                    </a>
                    </div>
                    <div className="navbar-left">
                        <a aria-current="page" href="/home">Home</a>
                        <a href="/profil">Profil </a>
                        <a href="/galery">Galeri </a>
                        <a href="/daftarGuru">Daftar Guru</a>
                        <a href="/contacts">Kontak </a>
                    </div>
                    <div className="navbar-right">
                        <a type="button" href="/login"> Login </a>
                        <a type="button" href="/regisMember"> Sign Up </a>
                    </div>
                    <div className="navbar-toggle">
                        <nav id="content-toggle">
                            <a aria-current="page" href="/home">Home</a>
                            <a href="/profil">Profil </a>
                            <a href="/galery">Galeri </a>
                            <a href="/daftarGuru">Daftar Guru </a>
                            <a href="/contacts">Kontak </a>
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle id="dropdown-split-basic"></Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                    <Dropdown.Item href="/login" className="drop-login">Login</Dropdown.Item>
                                    <Dropdown.Item href="/regisMember" className="drop-regis">Sign Up</Dropdown.Item>
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