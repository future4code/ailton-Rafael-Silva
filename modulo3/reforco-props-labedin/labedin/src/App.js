import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://emc.acidadeon.com/dbimagens/tucano_1024x576_25092020113256.webp" 
          nome="Rafael" 
          descricao="Oi, eu sou o Rafael. Sou estudante da Labenu e me formando em SI na Estácio. Amo jogar video-game e ler mangás."
        />

        <CardPequeno
        imagem="https://hzcoworkingspace.com.br/wp-content/uploads/2017/03/endereco-fiscal-dtq.jpg" 
        endereco="Quadra 9 Lote 15 - Ohio - Japão"
      />

        <CardPequeno
        imagem="https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/12/apos-50-anos-por-que-o-e-mail-ainda-e-fundamental-para-a-comunicacao-atual.jpg?resize=800%2C467&ssl=1" 
        email="web@gmail.com"
        />

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn.mos.cms.futurecdn.net/DEn34uMquzsacN6PRH8epF-970-80.jpg.webp" 
          nome="Web-Games" 
          descricao="Informática e Papelaria" 
        />
        
        <CardGrande 
          imagem="https://logo.empregos.com.br/57944_G.jpg" 
          nome="Souza_lima" 
          descricao="AGP - Agente de Portaria." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
