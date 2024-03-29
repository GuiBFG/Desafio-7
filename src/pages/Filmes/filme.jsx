import React, { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import imgFilmes from "../../assets/img/cinema 1.png"
import "./filme.css";
import Swal from 'sweetalert2'
import { apiFilmes } from "../../services/api";
import ModalFilmes from "../../assets/modalFilmes/ModalFilmes";
import Botão from '../../components/Botão/botão'

let headerFilme = {
    descricao: "Cadastre os filmes de sua preferência "
}

const Filmes = () => {

    // CRUD

    const [generos, setGeneros] = useState([]);
    const [filmes, setFilmes] = useState([]);

    const listarGeneros = () => {

        apiFilmes.get('Genero')
            .then(resultado => {
                setGeneros(resultado.data)
            })

    }

    useEffect(() => {
        listarGeneros()

    }, [])

    useEffect(() => {
        let quantidadeElementos = generos.length

        for (let index = 0; index < quantidadeElementos; index++) {
            apiFilmes.get(`Genero/${index + 1}/Filmes`)
                .then(resultadoFilmes => {
                    setFilmes(filmes => filmes.concat(resultadoFilmes.data))
                })
        }
    }, [generos.length])

    useEffect(() => {
    }, [filmes.length])

    // Excluir

    const ExcluirFilmes = (id, idFilmes) => {
        apiFilmes.delete(`Genero/${id}/Filmes/${idFilmes}`)
            .then(() => {
                window.location.reload()
            })
    }

    // Cadastrar

    const [nomeGenre, setNomeFilmes] = useState('');
    const [select, setSelect] = useState(0)

    const Cadastrar = (id) => {

        if (nomeGenre !== '' && select !== 0) {

            apiFilmes.post(`Genero/${id}/Filmes`, { Filmes: nomeGenre })

                .then(() => {

                    setNomeFilmes('')

                })

                .then(() => {
                    window.location.reload()
                })
        }

        else {
            Swal.fire({
                title: 'Preencha os campos vazios!',
                icon: 'warning',
                confirmButtonColor: '#41B8D2',
                confirmButtonText: 'OK'
            })
        }

    }

    // Modal

    const [pegarId, setPegarId] = useState(0)
    const [filmeID, setPegarFilmeID] = useState(0)
    const [modalFilmes, SetModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual, id, idFilmes) => {

        if (estadoAtual === 'hide') {
            SetModal('show')
        }

        else {
            SetModal('hide')
        }

        setPegarId(id)
        setPegarFilmeID(idFilmes)
        window.scroll({
            top:
                100, left: 0, behavior: 'smooth'
        });

    }

    // Layout

    return (

        <>
            <Header objeto={headerFilme} />
            <main>
                <h1 className="tituloFilme">Filmes</h1>

                <img src={imgFilmes} alt="" className="logoFilme" />

                <div className="cadastroFilme">

                    <div>
                        <label>Cadastrar Filmes</label>
                        <input
                            type="text"
                            placeholder="Título do Filme"
                            className="inputFilme"
                            value={nomeGenre}
                            onChange={(estadoDoInput) => setNomeFilmes(estadoDoInput.target.value)}
                            maxLength={25} />
                    </div>

                    <ModalFilmes mostrar={modalFilmes} funcao={AbrirFecharModal} id={pegarId} idFilme={filmeID} />

                    <div>
                        <select required onChange={(e) => setSelect(Number(e.target.value))}>
                            <option value="" disabled selected>Gênero</option>

                            {generos.map((item) => {
                                return (
                                    <option value={item.id} >{item.valorGenero}</option>
                                )
                            })}


                        </select>
                    </div>

                    <div>
                        <Botão class={"btnFilme"} action={() => { Cadastrar(select) }}>Salvar</Botão>
                    </div>

                </div>

                {filmes.map((item) => {

                    return (

                        <div className="cardFilmes">

                            <div className="txtColor">
                                <p></p>
                                <p className="txtPaddingFilme">{item.Filmes}</p>
                                <p></p>
                            </div>

                            <div className="txtColor">

                                <div className="alinhamentoFilme">
                                    <p></p>
                                    <p className="txtPadding" >{item.Genre.valorGenero}</p>
                                    <p className="txtPaddingFilme2"></p>
                                </div>

                            </div>

                            <div>

                                <div className="alinhamentoBtnCard">
                                    <Botão class={"btnEditarFilmes"} action={() => AbrirFecharModal(modalFilmes, item.idGenero, item.idFilmes)}>Editar</Botão>
                                    <Botão class={"btnExcluirFilmes"} action={() => ExcluirFilmes(item.Genre.id, item.idFilmes)}>Excluir</Botão>
                                </div>

                            </div>

                        </div>

                    )

                })}
                <div className={"corFundoModalFilmes " + modalFilmes}></div>
            </main>
            <Footer />
        </>

    )
}

export default Filmes