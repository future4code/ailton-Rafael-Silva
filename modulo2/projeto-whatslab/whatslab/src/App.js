import styled from "styled-components";
import './App.css';
import React from 'react';


//const Container = styled.div`
//display: flex,
//flex-firection: column,
//align-item: center`;

const ZapContainer = styled.div`
display: flex;
//flex: 1 1 0%;
width: 40rem;
height: 95vh;
border: solid black;
align-items: stretch;
display: flex;
flex-direction: column;
padding: 20px;
background-color: #DDF7C8
`

const FooterWhats = styled.footer`
position: fixed;
width: 40rem;
bottom: 0;
padding: 20px;
`

const WhatslabVerde = styled.h1`
color: green;
text-align: center

`
const MensagemInput = styled.input`
width: 100vh;
`

class App extends React.Component {
  state = {
    whats: [
      {
        nome: "",
        mensagem: ""
      },
    ],

    valorInputNome: "",
    valorInputMensagem: "",
  }

  addPessoa = () => {
    const novaPessoa = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };

    const novasMensagens = [...this.state.whats, novaPessoa];
    this.setState({ whats: novasMensagens })
  };

 
  onChangeInputNome = (event) => {
  this.setState({ valorInputNome: event.target.value });

  };

  onChangeInputMensagem = (event) => {
  this.setState({ valorInputMensagem: event.target.value });

  };

  render() {
  const totalMensagens = this.state.whats.map((sms) => {
    return (
      <p>
        {sms.nome} - {sms.mensagem}
      </p>
    );
  });


  return (

    <ZapContainer>
      <WhatslabVerde>WhatsLab</WhatslabVerde>
      <div>
      
      <FooterWhats>
      <div>{totalMensagens}</div>
      <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Usuário"}
        />
        
        <input 
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder={"mensagem"}
        />

        <button onClick={this.addPessoa}>Enviar</button></FooterWhats>
      </div>

    </ZapContainer>

   );
  }
}


export default App;
