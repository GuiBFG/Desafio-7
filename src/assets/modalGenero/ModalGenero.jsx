import React, { useState } from "react";
import './ModalGenero.css';
import { apiFilmes } from "../../services/api";
import Botão from '../../components/Botão/botão'

const ModalGenero = (props) => {

    const [nomeGenero, setNomeGenero] = useState('');
    const [show, setNomeShow] = useState(false)

    const EditarGenero = (id) => {

        if (nomeGenero !== '') {

            apiFilmes.put(`Genero/${id}`, { valorGenero: nomeGenero })

                .then(() => {
                    window.location.reload()
                })
        }

        else {
            setNomeShow(true)
        }

    }

    return (

        <div className="alinhamentoModalGenero">
            <div className={"corFundoGenero " + props.mostrar}>

            </div>
            <div className={"modalGenero " + props.mostrar}>

                <div className="alinhamentoExcluirModalGenero">

                    <Botão class={"excluirModalGenero"} action={props.funcao}>X</Botão>

                </div>

                <div className="cardTxtGenero">

                    <h1>Modificar Gênero</h1>

                    <div className="AlinhamentoInputModal">

                        <input
                            type="text"
                            placeholder="Gênero"
                            className="inputModalGenero"
                            defaultValue={nomeGenero}
                            onChange={(e) => setNomeGenero(e.target.value)} />


                        <div className="AlinhamentoModalSalvar">
                            <Botão class={"btnSalvarModalGenero"} action={() => EditarGenero(props.id)}>Salvar</Botão>
                        </div>

                    </div>

                    <div>
                        {
                            show &&
                            <p className="vermelhoModalGenero">*faça alguma modificação</p>
                        }
                    </div>

                </div>


                <footer className="footerModalGenero">

                </footer>
            </div>
        </div>
    )
}

export default ModalGenero