import './App.css';
import styled from "styled-components";
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 500px;

`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1
    };
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };

  irParaProximaEtapa  = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <divContainer>
        {this.renderizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <button onClick={this.irParaProximaEtapa }>Próxima etapa</button>
        )}
      </divContainer>
    );
  }
}
export default App