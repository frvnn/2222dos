import React from 'react'
import '../Home/Home.css'
import logo from '../assets/Home/logo.svg'

function Home() {
        return (
        <div className="container">
            <h1>holi</h1>
            <div className="overlap-group">
            <img className="logo" src={logo}/>
            <img className="proximamente" src="proximamente.svg" />
            <img className="somos-musica" src="somos-musica.svg" />
            <img className="e-mail" src="e-mail.svg" />
            </div>
        </div>
        );
    }

export default Home