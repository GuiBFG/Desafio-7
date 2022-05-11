import React, { useState } from "react";
import './ModalGenero.css';
import { apiFilmes } from "../../services/api";

const ModalGenero = (props) => {

    const [nomeGenero, setNomeGenero] = useState('');

    const EditarGenero = (id) => {
        apiFilmes.put(`Genero/${id}`, { valorGenero: nomeGenero })

        .then(() => {
            window.location.reload()
        })

    }
    
    return(

        <div className="alinhamentoModalGenero">
            <div className={"corFundoGenero " + props.mostrar}>

            </div>
            <div className={"modalGenero " + props.mostrar}>

                <div className="alinhamentoExcluirModalGenero">

                    <button className="excluirModalGenero" onClick={props.funcao}>X</button>

                </div>

                <div className="cardTxtGenero">

                    <h1>Modificar Gênero</h1>

                    <div className="AlinhamentoInputModal">

                        <input 
                        type="text" 
                        placeholder="Gênero" 
                        className="inputModalGenero" 
                        defaultValue={nomeGenero}
                        onChange={(e) => setNomeGenero(e.target.value)}/>

                        <div className="AlinhamentoModalSalvar">
                            <button className="btnSalvarModalGenero" onClick={() => EditarGenero(props.id)}>Salvar</button>
                        </div>

                    </div>

                </div>


                <footer className="footerModalGenero">

                </footer>
            </div>
        </div>
    )
}

export default ModalGenero