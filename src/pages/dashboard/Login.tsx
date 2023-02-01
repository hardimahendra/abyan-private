import React from "react";
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export function Login() {
  return (<>
    <Navbar/>
    <div className="container-login">
      <div className="content-login">
        <div>
          <h1>Login</h1>
        </div>
        <div className="login">
          <input type="text" id="username" />
          <input type="password" id="password" />
          <button>
            <a><Link to="/notfound">Lupa Password</Link></a>
          </button>
        </div>
        <div className="back-to-home">
          <a type="button"><Link to="/home">Batal</Link></a>
        </div>
      </div>
    </div>
    <Footer/>
  </>)
}
