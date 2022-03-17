import React from "react";
import HornedBeast from "./HornedBeast.js";
import './Main.css'


class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, index) => {
      return(
        <HornedBeast
        key = {index}
        title = {beast.title}
        imgURL = {beast.image_url}
        description = {beast.description}
        horns = {beast.horns}
        keyword = {beast.keyword}
        showModal = {this.props.showModal}
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