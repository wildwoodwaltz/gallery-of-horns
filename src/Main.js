import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css'


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    showModal: false,
    beastList: this.props.data,
    }
  }
  render() {
    let beasts = this.state.beastList.map((beast, index) => {
      return(
        <HornedBeast
        key = {index}
        title = {beast.title}
        imgURL = {beast.image_url}
        description = {beast.description}
        horns = {beast.horns}
        keyword = {beast.keyword}
        showModal = {this.props.showModal}
        beast = {beast}
        />
      )
    })
    return (
      <main>
        {beasts}
      </main>
    );
  }
}
export default Main;