import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import "./usuario.css";
import { apiFilmes } from "../../services/api";
import Botão from '../../components/Botão/botão'
import ModalUsuario from "../../assets/ModalUsuario/ModalUsuario";

let headerUsuario = {
    descricao: "Faça o Cadastro de usuários e  edite, caso necessário",
    subdescricao: "Pronto para cadastrar? ",
};

const Usuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [modalUsuario, setModalUsuario] = useState('hide')
    const [item, setItem] = useState()
    const [getIdUsuario, setGetIdUsuario] = useState(0)

    const ListarUsuarios = () => {
        apiFilmes.get('Usuarios')
            .then(result => {
                setUsuarios(result.data)
            })
    }

    useEffect(() => {
        ListarUsuarios();
    }, []);

    const ExcluirUsuario = (idUsuario) => {
        apiFilmes.delete(`Usuarios/${idUsuario}`)

            .then(() => {
                window.location.reload();
            });
    };

    const Register = () => {
        if (nomeUsuario !== '' && email !== '' && telefone !== '') {
            apiFilmes.post(`Usuarios`, { nome: nomeUsuario, email: email, telefone: telefone })
                .then(() => { window.location.reload() })
        }
    }

    const ShowModalUsuario = (estadoAtual, idUsuario, item) => {
        if (estadoAtual === 'hide') {
            setModalUsuario('show')
        }
        else {
            setModalUsuario('hide')
        }

        setItem(item)
        setGetIdUsuario(idUsuario)
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <>
            <Header objeto={headerUsuario} />
            <main>
                <h1 className="tituloUsuario">Cadastro</h1>

                <div className="cadastrar">
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" className="inputUsuario"
                            value={nomeUsuario}
                            onChange={(estado) => setNomeUsuario(estado.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="">E-mail</label>
                        <input type="email" className="inputUsuario"
                            value={email}
                            onChange={(estado) => setEmail(estado.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="">Telefone</label>
                        <input type="text" className="inputUsuario"
                            value={telefone}
                            onChange={(estado) => setTelefone(estado.target.value)} />
                    </div>
                </div>

                <div>
                    <Botão class={"btnUsuario"} action={() => Register()}>Cadastrar</Botão>
                </div>

                <ModalUsuario item={item} mostrar={modalUsuario} funcao={ShowModalUsuario} id={getIdUsuario} />

                {usuarios.map((item) => {
                    return (
                        <div className="cardUsuario" key={item.idUsuario}>
                            <div className="txtGenero">
                                <p>{item.nome}</p>
                            </div>
                            <div className="txtGenero">
                                <p>{item.email}</p>
                            </div>
                            <div className="txtGenero">
                                <p>{item.telefone}</p>
                            </div>

                            <div>
                                <div className="btnPadding">
                                    <Botão class={"btnEditar"} action={() => ShowModalUsuario(modalUsuario, item.idUsuario, item)}>Editar</Botão>
                                    <Botão class={"btnExcluir"} action={() => ExcluirUsuario(item.idUsuario)}>Excluir</Botão>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </main>
            <Footer />
        </>
    );
};

export default Usuario;
