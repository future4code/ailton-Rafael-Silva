import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import PageEtapa1 from "./components/Etapa1";

const Container = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
`;

class App extends Component {
  state = {
    page: "page1",
    aviso1: "",
    aviso2: "",
    aviso3: "",
    aviso4: "",
    valorInputNome: "",
    valorInputIdade: "",
    valorInputEmail: "",
    valorInputIdade: "",
    valorInputSelect: "",
    valorInputCurso: "",
    valorInputUnidade: "",
  };

    onChangeNome = (event) => {
     console.log(event.target.value);
     this.setState({
        aviso1: "",
       valorinputNome: event.target.value,
      });
    };
  
  onChangeNome = (event) => {
    console.log(event.target.value);
    this.setState({
      aviso2: "",
      valorinputIdade: event.target.value,
    });
  };

  onChangeNome = (event) => {
    console.log(event.target.value);
    this.setState({
      aviso3: "",
      valorinputEmail: event.target.value,
    });
  };

  onChangeNome = (event) => {
    console.log(event.target.value);
    this.setState({
      aviso4: "",
      valorInputSelect: event.target.value,
    })
  }


  render() {
    return (
      <Container>
        {this.state.page === "page1" && (
          <PageEtapa1
            aviso1={this.state.aviso1}
            aviso2={this.state.aviso2}
            aviso3={this.state.aviso3}
            aviso4={this.state.aviso4}
            valorNome={this.state.valorInputNome}
            onChangeNome={this.onChangeNome}
            valorIdade={this.state.valorInputIdade}
            onChangeIdade={this.onChangeIdade}
            valorEmail={this.state.valorInputEmail}
            onChangeEmail={this.onChangeEmail}
            onChangeSelect={this.ChangeSelect}
            onClickNext={this.onClickNextE1}
          />
        )}
        {/* {this.state.page === "page2" && (
          <PageEtapa2
            aviso={this.state.aviso}
            onClickNext={this.onClickNextE1}
          />
        )} */}
      </Container>
    );
  }
}


export default App;

