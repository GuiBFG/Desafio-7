import React from "react";

import { Link } from "react-router-dom";

import logo from '../../assets/img/Group 2.png';

import './header.css';

const Header = (props) =>{

    return(
        <>
            <div className="header">
                <div className="alinhamentoHeader">

                    <div className="logoHeader">
                        <img className="imgHeader" src={logo} alt="" />

                        <p className="descricao">{props.objeto.descricao}</p>
                        <p className="subdescricao">{props.objeto.subdescricao}</p>                  
                    </div>
                  

                    <div className="navegar">
                        <button className="btnHeader"><Link to='/' className="links">Home</Link></button>
                        <button className="btnHeader"><Link to='/usuario' className="links">Usuários</Link></button>
                        <button className="btnHeader"><Link to='/filmes' className="links">Filmes</Link></button>
                        <button className="btnHeader"><Link to='/genero' className="links">Gênero</Link></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header