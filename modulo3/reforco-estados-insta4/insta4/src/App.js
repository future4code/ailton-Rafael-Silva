import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import Post1 from './components/Post1/Post1'
import Post2 from './components/Post2/Post2'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Post1
      nomeUsuario={"Rafael"}
      fotoUsuario={"https://picsum.photos/id/237/200/300"}
      fotoPost={"https://picsum.photos/seed/picsum/200/150"}
      />

      <Post2
      nomeUsuario={"Kézia"}
      fotoUsuario={"https://picsum.photos/200/300?grayscale"}
      fotoPost={"https://picsum.photos/200/150/?blur"}
      />
    </MainContainer>

  );
}

export default App;
