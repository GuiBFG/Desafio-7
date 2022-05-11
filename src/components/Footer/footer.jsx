import React from 'react';

import logo2 from "../../assets/img/logo2.png";

import './footer.css';

const Footer = () =>
{

    return(

        <div className='footer'>
            
            <div className="logoFooter">
                <img src={logo2} alt="" />
            </div>

            <div className="textoFooter">
                <h2 className="tituloFooter">Filmes</h2>
                <h3 className="subtituloFooter">Collection</h3>   
            </div>

            <div className='borda'></div>

            <p className='rodape'>Company Inc, 8901 Marmora Road, Glasgow, D04 89GR
            <br></br>
            <br></br>
            Call us now toll free: (800)2345-6789
            <br></br>
            <br></br>
            Customer support:support@demolink.org
            <br></br>
            <br></br>
            Skype: sample-username
            </p> 

        </div>

    )
}

export default Footer;