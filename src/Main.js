import React from "react";
import HornedBeast from "./HornedBeast.js";
import './Main.css'


class Main extends React.Component {
  render() {
    let beasts = [];
    this.props.data.forEach((beast, index) => {
      beasts.push(
        <HornedBeast
        key = {index}
        title = {beast.title}
        imgURL = {beast.image_url}
        description = {beast.description}
        horns = {beast.horns}
        keyword = {beast.keyword}
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