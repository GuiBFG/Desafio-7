import React from "react";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

import imgFilmes from "../../assets/img/cinema 1.png"
import imgCategoria from "../../assets/img/theater.png"

import "./home.css"

let headerHome = {
    descricao: "Conheça nossa coletânea"
}

const Home = () => {

    return (

        <>
            <Header objeto={headerHome} />
            <main>
                <h1 className="tituloH1">Monte sua coletânea de filmes...</h1>



                <div className="alinhamentoTexto">
                    <p className="textoHome">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                    </p>

                    <p className="textoHome2">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                    </p>
                </div>

                <div className="alinhamentoCardFilme">

                    <div>
                        <img src={imgFilmes} alt="Imagem Do Filme" className="imgHomeFilme" />

                        <p className="textoFilme">
                            Filmes
                        </p>

                        <p className="textoFilme2">
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div>
                        <img src={imgCategoria} alt="Imagem Da Categoria" className="imgHomeCategoria" />

                        <p className="textoCategoria">
                            Categorias
                        </p>

                        <p className="textoCategoria2">
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>

    )
}

export default Home