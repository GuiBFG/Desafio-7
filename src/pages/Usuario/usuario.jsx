import React from "react";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

import "./usuario.css"

let headerUsuario = {
    descricao: "Faça o Cadastro de usuários e  edite, caso necessário",
    subdescricao: "Pronto para cadastrar? "
}

const Usuario = () => {

    return (

        <>
            <Header objeto={headerUsuario} />
            <main>
                <h1 className="tituloUsuario">Cadastro</h1>

                <div className="cadastrar">

                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" className="inputUsuario" />
                    </div>

                    <div>
                        <label htmlFor="">E-mail</label>
                        <input type="email" className="inputUsuario" />
                    </div>


                    <div>
                        <label htmlFor="">Telefone</label>
                        <input type="text" className="inputUsuario" />
                    </div>

                </div>

                <button className="btnUsuario">Cadastrar</button>

                <div className="cardUsuario">

                    <div className="txtColor">
                        <p>Paulo Andre</p>
                        <p className="txtPadding">Marcos Lucio</p>
                        <p >Laura Port</p>
                    </div>

                    <div className="txtColor">
                        <div className="alinhamentoUsuario">
                            <p>paulo@email.com</p>
                            <p className="txtPadding">marcos@email.com</p>
                            <p>laura@email.com</p>
                        </div>
                    </div>

                    <div className="txtColor">
                        <p>3349 6788</p>
                        <p className="txtPadding">3349 6788</p>
                        <p>3349 6788</p>
                    </div>

                    <div>

                        <div className="alinhamentoBtnUsuario">
                            <button className="btnEditar">Editar</button>
                            <button className="btnExcluir">Excluir</button>
                        </div>

                        <div className="btnPadding">
                            <button className="btnEditar">Editar</button>
                            <button className="btnExcluir">Excluir</button>
                        </div>

                        <div className="alinhamentoBtnUsuario2">
                            <button className="btnEditar">Editar</button>
                            <button className="btnExcluir">Excluir</button>
                        </div>

                    </div>

                </div>

            </main>
            <Footer />
        </>

    )

}

export default Usuario