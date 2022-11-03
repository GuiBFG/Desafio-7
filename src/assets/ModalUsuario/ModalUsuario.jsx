import React, { useState, useEffect } from "react";
import { apiFilmes } from '../../services/api'
import "../ModalUsuario/ModalUsuario.css";
import Botão from '../../components/Botão/botão'

const ModalUsuario = (props) => {

  const [nomeUsuario, setNomeUsuario] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [warning, setWarning] = useState(false);

  const Editar = (idUsuario) => {
    if (nomeUsuario !== '' && email !== '' && telefone !== '') {
      apiFilmes.put(`Usuarios/${idUsuario}`, { nome: nomeUsuario, email: email, telefone: telefone })
        .then(() => { window.location.reload() })
    }

    else {
      setWarning(true)
    }
  }

  useEffect(() => {
    if (props.item !== undefined) {

      setNomeUsuario(props.item.nome)
      setEmail(props.item.email)
      setTelefone(props.item.telefone)
    }
  }, [props.item])

  return (
    <>
      <div className={"EditModal " + props.mostrar}>
        <div className="alinhamentoExcluirModal">
          <Botão class={"excluirModal"} action={props.funcao}>X</Botão>
        </div>

        <div className="cardTxt">
          <h1>Modificar Registro</h1>

          <div className="AlinhamentoInputModal">
            <input
              type="text"
              placeholder="Nome"
              className="inputModal"
              value={nomeUsuario}
              onChange={(e) => setNomeUsuario(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="inputModal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              className="inputModal"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            {warning && (
              <p><span className="vermelho">*</span>Coloque um campo válido nesse input!</p>
            )}

            <div className="AlinhamentoModalSalvar">
              <Botão class={"btnSalvarModal"} action={() => Editar(props.id)}>Salvar</Botão>
            </div>
          </div>
        </div>
        <footer className="footerModal"></footer>
      </div>
    </>

  );
};

export default ModalUsuario;
