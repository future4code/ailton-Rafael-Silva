import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import rosto from './img/rosto.png';
import setabaixo from './img/seta-baixo.png';
//import email from './img/email.jpg';
//import endereco from './img/endereco.png';
import {Corpo, VerMais} from "./App.styled";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <Corpo>
        <CardGrande 
          imagem={rosto}
          nome="Rafael" 
          descricao="Oi, eu sou o Rafael. Atualmente sou aluno da Labenu. Gosto muito de estudar nela, onde têm professores muito bem qualificados ."
        />
        </Corpo>
        <VerMais>
        <ImagemButton 
          imagem={setabaixo}
          texto="Ver mais"
        />
        </VerMais>
      </div>

      <div className= 'page-section-container'>
        <Corpo>
        <CardPequeno
        imagem="https://thumbs.dreamstime.com/b/email-abrir-%C3%ADcone-novo-bonito-meticulosamente-projetado-aberto-e-mail-vetor-bem-organizado-totalmente-edit%C3%A1vel-158557376.jpg"
        email='Email: farofa@gmail.com'
        //imagem1={endereco}
        Endereço='Endereço: quadra 9 lote 15'
        />
        </Corpo>
      </div>

      <div className="page-section-container">
      <Corpo>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="WebGames" 
          descricao="Papelaria e Informática" 
        />
        </Corpo>
        <Corpo>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="FBento Celulares" 
          descricao="Balconista." 
        />
        </Corpo>
      </div>

      <div className="page-section-container">
      <VerMais>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        
        
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
        </VerMais>
      </div>
    </div>
  );
}

export default App;

