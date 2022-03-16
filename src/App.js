import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import Modal from 'react-bootstrap'
import data from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    showModal: false,
    img: '',
    }
  }
  hideModal= () => {
    this.setState({
      showModal: false,
    })
  }
  showModal= (img) => {
    this.setState({
      showModal: true,
      img
    })
  }
  render() {
    return (
      <>
        <Header/>
        <Main 
        data={data}
        showModal={this.showModal}/>
        <Footer/>
        <Modal show={this.state.showModal}>
          <Modal.Header closeButton>
          <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    )
  }
}

export default App;