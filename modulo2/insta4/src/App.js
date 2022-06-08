import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Kézia'}
          fotoUsuario={'https://i.picsum.photos/id/248/200/200.jpg?hmac=36BllTJxy_tU762d2RYKfYaSQ3-RmP74hVxabGP_u3o'}
          fotoPost={'https://i.picsum.photos/id/985/200/200.jpg?hmac=-oC6YfQiGmm3Fyl5kVCag3-Z0VUHT0pRLIziGH1c4KU'}
        />
        <Post
          nomeUsuario={'Rafael'}
          fotoUsuario={'https://i.picsum.photos/id/832/200/200.jpg?hmac=V4CRQyK7KVP2wBYsEhpcpP8wSdwyU5c-yTeMm37uOOo'}
          fotoPost={'https://i.picsum.photos/id/889/200/200.jpg?hmac=mzo0mKfXHC9qb2dLw47jTrXZmlF9g6c6EuUFOWz0T5U'}
        />
      </MainContainer>
    );
  }
}

export default App;

