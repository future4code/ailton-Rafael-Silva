import React from 'react'
import CreatPlaylistPage from './pages/CreatListMusicPage/CreatPlaylistPage';
import AllPlaylistPage from './pages/AllPlaylistPage/AllPlaylistPage';

export default class App extends React.Component {
  state = {
    currentScreen: 'creat'
  }

  selectPage = () => {
    switch (this.state.currentScreen) {
      case 'creat' :
      return <CreatPlaylistPage />
      case 'AllPlay':
        return <AllPlaylistPage />
        default: 
        return <CreatPlaylistPage />
    }
  }

  render() {
    return (
      <div>
        {this.selectPage()}
      </div>
    );
  }
}
