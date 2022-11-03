import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/Group 2.png';
import './header.css';
import Botão from '../../components/Botão/botão'

const Header = (props) => {

    return (
        <>
            <div className="header">
                <div className="alinhamentoHeader">

                    <div className="logoHeader">
                        <img className="imgHeader" src={logo} alt="" />

                        <p className="descricao">{props.objeto.descricao}</p>
                        <p className="subdescricao">{props.objeto.subdescricao}</p>
                    </div>
                    <div className="navegar">
                        <Botão class={"btnHeader"}><Link to='/' className="links">Home</Link></Botão>
                        <Botão class={"btnHeader"}><Link to='/usuario' className="links">Usuários</Link></Botão>
                        <Botão class={"btnHeader"}><Link to='/filmes' className="links">Filmes</Link></Botão>
                        <Botão class={"btnHeader"}><Link to='/genero' className="links">Gênero</Link></Botão>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header