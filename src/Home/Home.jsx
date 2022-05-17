import React from 'react'
import '../Home/Home.css'
import logo from '../assets/Home/logo.svg'
import proximamente from '../assets/Home/proximamente.svg'
import somosmusica from '../assets/Home/somos-musica.svg'
import 'animate.css';

function Home() {
        return (
        <>
                <div className="container">
                                <img className="logo img-fluid animate__animated animate__bounce animate__slow animate__delay-2s" src={logo}/>
                                <img className="proximamente img-fluid animate__animated animate__flash animate__slower animate__delay-3s animate__infinite" src={proximamente} />
                                <img className="somos-musica img-fluid animate__animated animate__pulse animate__slower animate__delay-3s" src={somosmusica}/>
                                <span id='mail'>info@2222agencia.com</span>
                </div>
                
        </>
        );
    }

export default Home