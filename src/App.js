import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from "./SelectedBeast.js";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    showModal: true,
    img: '',
    }
  }
  hideModal= () => {
    this.setState({
      showModal: false,
    })
  }
  showModal= () => {
    this.setState({
      showModal: true,
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
          <SelectedBeast
          hideModal = {this.hideModal}
          showModal={this.state.showModal}

          />
      </>
    )
  }
}

export default App;