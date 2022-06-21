import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';


class App extends React.Component {
state = {
imputName: '',
imputEmail: '',
};

onChangeInput = (event) => {
  this.setState({imputName: event.target.value});
};
onChangeInput = (event) => {
  this.setState({imputEmail:event.target.value});
};

componentDidMount (event) {
  this.setState({imputName: event.target.value});
};
componentDidMount (event) {
  this.setState({imputEmail: event.target.value});
};

getAllusers = () => {
axios.post ( "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
body,
{
  headers: {
    Authorization: "rafael-barbosa-aitlon"
  }
})
  render () {

    
  }
}

export default App;
