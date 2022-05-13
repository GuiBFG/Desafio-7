import React, { useEffect, useState } from "react";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

import imgGeneros from '../../assets/img/theater.png';

import Swal from 'sweetalert2'

import "./genero.css";

import { apiFilmes } from "../../services/api";

import ModalGenero from '../../assets/modalGenero/ModalGenero';

let headerGenero = {
    descricao: "Cadastre os gêneros dos filmes"
}

const Genero = (props) => 
{

    // CRUD

    const [generos, setGeneros] = useState([]);

    const ListarGeneros = () => {
        
        apiFilmes.get('Genero')
            .then(resultado => {

                setGeneros(resultado.data)
            })
        
    }

    useEffect(() => {
        ListarGeneros()
    }, [])

    // Excluir

    const Excluir = (id) => {

        apiFilmes.delete(`Genero/${id}`)
            .then(() => {
                window.location.reload()

            })
    }

    // Cadastrar

    const [nomeGenre, setNomeGeneros] = useState('');

    const Cadastrar = () => {
        
        if (nomeGenre !== '') {

            for (let i = 0; i < generos.length; i++) {
                if (generos[i].valorGenero === nomeGenre) {
                    window.alert ('Você não pode colocar dois gêneros iguais')
                    return
                }
            }

            apiFilmes.post(`Genero`, { valorGenero : nomeGenre })

            .then(() => {
                    
             setNomeGeneros('')
                    
            })
        
            .then(() => {
                window.location.reload()
            })

        }

        else{
            Swal.fire({
                title: 'Preencha o campo vazio antes!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#41B8D2',
                cancelButtonColor: '#F6511D',
                confirmButtonText: 'OK'
              })
        }
            
    }

    // Modal

    const [pegarId , setPegarId] = useState(0)
    const [modalGenero, SetModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual , id ) =>
    {
        if(estadoAtual === 'hide')
        {
            SetModal('show')
        }

        else
        {
            SetModal('hide')
        }
        
        setPegarId (id)  
        window.scroll({top: 
        100,left: 0,behavior: 'smooth'});
    }

    // Layout

    return (

        <>
            <Header objeto={headerGenero} />
            <main>
                <h1 className="tituloGenero">Gênero</h1>

                <img src={imgGeneros} alt="Teatro" className="logoGenero"/>

                <div className="cadastroGenero">
                    <div>
                        <label className="labelGenero">Cadastrar Gênero</label>
                        <input type="text" placeholder="Gênero" className="inputGenero" 
                        value={nomeGenre} 
                        onChange={(estadoDoInput) => setNomeGeneros(estadoDoInput.target.value)}
                        maxLength={25}
                        />
                    </div>

                    <div>
                        <button className="btnGenero" onClick={() => Cadastrar()} >Salvar</button>
                    </div>
                </div>

                <ModalGenero mostrar={modalGenero} funcao={AbrirFecharModal} id={pegarId}/>

                {/* MAP */}

                {generos.map((item) => {

                    return (
                        <div className="cardGenero">

                            <div className="txtGenero">
                                <p>{item.valorGenero}</p>
                            </div>

                            <div>

                                <div className="btnPadding">
                                    <button className="btnEditar" onClick={() => AbrirFecharModal(modalGenero , item.id)}>Editar</button>
                                    <button className="btnExcluir" onClick={() => Excluir(item.id)}>Excluir</button>
                                </div>

                            </div>

                        </div>
                    )

                })}

            </main>
            <Footer />
        </>

    )
}

export default Genero