import React from 'react'
import '../Home/Home.css'
import logo from '../assets/Home/logo.svg'
import proximamente from '../assets/Home/proximamente.svg'
import somosmusica from '../assets/Home/somos-musica.svg'

function Home() {
        return (
        <>
                <div className="container">
                                <img className="logo img-fluid" src={logo}/>
                                <img className="proximamente img-fluid" src={proximamente} />
                                <img className="somos-musica img-fluid" src={somosmusica}/>
                                <span id='mail'>info@2222agencia.com</span>
                </div>
                
        </>
        );
    }

export default Home