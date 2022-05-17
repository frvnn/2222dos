import React from 'react'
import '../Home/Home.css'
import logo from '../assets/Home/logo.svg'
import proximamente from '../assets/Home/proximamente.svg'
import somosmusica from '../assets/Home/somos-musica.svg'

function Home() {
        return (
        <div className="container">
            <h1>holi</h1>
            <div className="overlap-group">
                <img className="logo" src={logo}/>
                <img className="proximamente" src={proximamente} />
                <img className="somos-musica" src={somosmusica}/>
                <span id='mail'>info@2222agencia.com</span>
            </div>
        </div>
        );
    }

export default Home