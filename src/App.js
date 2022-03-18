import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    showModal: false,
    beast: {},
    }
  }
  hideModal= () => {
    this.setState({
      showModal: false,
    })
  }
  showModal = (object) => {
    this.setState({
      showModal: true,
      beast: object,
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
          beast = {this.state.beast}
          horns = {this.state.horns}
          />
      </>
    )
  }
}

export default App;