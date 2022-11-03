import React, { useState, useEffect } from "react";
import './ModalFilmes.css';
import { apiFilmes } from "../../services/api";
import Botão from '../../components/Botão/botão'

export const ModalFilmes = (props) => {

    const [select, setSelect] = useState('')
    const [genero, setGeneros] = useState([])

    const listarGeneros = () => {
        apiFilmes.get('Genero')
            .then(result => {
                setGeneros(result.data)
            })
    }

    useEffect(() => {
        listarGeneros()
    }, [])

    const [nomeFilmes, setNomeFilmes] = useState('');
    const [show, setNomeShow] = useState(false)

    const EditarFilmes = (id, idFilmes) => {

        if (nomeFilmes === '' || select === '') {
            setNomeShow(true)
            return
        }

        if (select === '') {
            let armazenarID = props.id

            apiFilmes.put(`Genero/${id}/Filmes/${idFilmes}`, { Filmes: nomeFilmes, id: armazenarID })
        }

        else {
            apiFilmes.put(`Genero/${id}/Filmes/${idFilmes}`, { Filmes: nomeFilmes, id: select })

                .then(() => {
                    window.location.reload()
                })
        }

    }

    return (

        <div className={"modalFilmes " + props.mostrar}>

            <div className="alinhamentoExcluirModalFilmes">

                <Botão class={"excluirModalFilmes"} action={props.funcao}>X</Botão>

            </div>

            <div className="cardTxtFilmes">

                <h1>Modificar Filmes e Gêneros</h1>

                <div className="AlinhamentoInputModalFilmes">

                    <input
                        type="text"
                        placeholder="Filmes"
                        className="inputModalGenero"
                        defaultValue={nomeFilmes}
                        onChange={(e) => setNomeFilmes(e.target.value)} />

                    <div>
                        <select value={select} className="selectModalFilmes" required onChange={(e) => setSelect(e.target.value)}>
                            <option value="" disabled selected>Gênero</option>

                            {genero.map((item) => {
                                return (
                                    <option value={item.id} >{item.valorGenero}</option>
                                )
                            })}


                        </select>
                    </div>

                    <div className="AlinhamentoModalFilmesSalvar">
                        <Botão class={"btnSalvarModalFilmes"} action={() => EditarFilmes(props.id, props.idFilme)}>Salvar</Botão>
                    </div>


                </div>

                <div>
                    {
                        show &&
                        <p className="vermelhoModalFilme">*faça alguma modificação no campo vazio</p>
                    }
                </div>
            </div>


            <footer className="footerModalFilmes">

            </footer>
        </div>
    )
}

export default ModalFilmes