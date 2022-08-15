import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
// import Post1 from './components/Post1/Post1'
// import Post2 from './components/Post2/Post2'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [posts, setPost] = useState(
    [
      {
        nomeUsuario: "paulinha",
        fotoUsuario:"https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
        fotoPerfil: "https://i.picsum.photos/id/532/200/300.jpg?grayscale&hmac=fFe2Tfy3fpP18cpCP4OQd6imkJNv0VnhT4jubCO13z8"
      },
      {
        nomeUsuario: "Rafael",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPerfil: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Kézia",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPerfil: "https://picsum.photos/200/150"
      },

    ]
  );
    const listaDeComponentes = posts.map((post,index) => {
      return (

        <Post key={index}
        nomeUser={post.nomeUsuario}
        fotoUser={post.fotoUsuario}
        fotoPerfil={post.fotoPerfil}
        />
      );
    });
    
  return (
    <MainContainer>
      {listaDeComponentes}
    </MainContainer>

  );
}

export default App;
