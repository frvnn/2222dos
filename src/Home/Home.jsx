import React from 'react'
import '../Home/Home.css'
import LogoPampa from '../assets/LogoPampaWhite.png'
import Logo22 from '../assets/Home/logo.svg'
import proximamente from '../assets/Home/proximamente.svg'
import somosmusica from '../assets/Home/somos-musica.svg'
import 'animate.css';

function Home() {
        return (
        <>
                <div className="container-home">
                                <img className="px-3 px-lg-0 logo img-fluid " src={Logo22}/>
                                <img className="px-3 px-lg-0 proximamente img-fluid" src={proximamente} />
                                <img className="somos-musica img-fluid" src={somosmusica}/>
                                <a href='mailto:info@2222agencia.com' id='mail' target="_blank">info@2222agencia.com</a>
                </div>
                <div className='text-center mb-4'> <a href="https://pampacode.com/" target="_blank"><img src={LogoPampa} width="120" alt="Pampa code" /></a></div>
        </>
        );
        }

export default Home