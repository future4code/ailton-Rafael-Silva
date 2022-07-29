import { useState } from "react";
import './App.css';
import React from "react";
import { Container, FooterWhats, WhatslabVerde } from "./estilizacao/styled";

export function App() {
  const [nome, setNome] = useState('')
  const [msg, setMsg] = useState([])
  const [msgUser, setMsgUser] = useState('')

  const onChangeUser = (event) => {
    setMsg(event.target.value)
  };

  const onChangeMsgUser = (event) => {
    setMsgUser(event.target.value)
  };

  const newMessenger = {
    nome: nome,
    mensagem: msgUser
  };

  const newList = [...msg, newMessenger]

  const att = () => {
    setMsg(newList)
    setNome('')
    setMsgUser('')
  };

  const renderiza = msg.map((item) => {
    if (item.nome === "eu") {
      return <p key={item.nome}>{item.nome}: {item.mensagem} </p>
    } else {
      return (
        <p> {item.nome} - {item.mensagem}
        </p>)
    }
  });

  return (
    <Container>
      <div >
        <WhatslabVerde>WHATSLAB</WhatslabVerde>

        <div>{renderiza}</div>

        <FooterWhats>
          <input
            placeholder="Usuário"
            value={nome}
            onChange={onChangeUser}
          />
          <input
            placeholder="Mensagem"
            value={msgUser}
            onChange={onChangeMsgUser}
          />
          <button onClick={att}>Enviar</button></FooterWhats>

      </div>
    </Container>
  );
}

