import styled from "styled-components";
import './App.css';
import React from 'react';

//const Container = styled.div`
//display: flex,
//flex-firection: column,
//align-item: center`;

const ZapContainer = styled.div`
display: flex;
width: 40rem;
height: 100vh;
border: solid black;
align-items: center
`

const WhatslabVerde = styled.h3`
color: green

`;

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
      <WhatslabVerde>Whatslab</WhatslabVerde>
      <div>
        <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />

        <input
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder={"mensagem"}
        />
        <button onClick={this.addPessoa}>Enviar</button>
      </div>
      <div>{totalMensagens}</div>
    </ZapContainer>
   );
  }
}


export default App;
