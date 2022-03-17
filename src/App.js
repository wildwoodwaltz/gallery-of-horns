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
    showModal: false,
    title: '',
    imgURL: '',
    keyword:'',
    description:'',
    }
  }
  hideModal= () => {
    this.setState({
      showModal: false,
    })
  }
  showModal= (title, imgURL, keyword, description) => {
    this.setState({
      showModal: true,
      title: title,
      imgURL: imgURL,
      keyword: keyword,
      description: description,
      
    })
    console.log(this.state.imgURL)
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
          title={this.state.title}
          imgURL={this.state.imgURL}
          keyword={this.state.keyword}
          description={this.state.description}
          />
      </>
    )
  }
}

export default App;