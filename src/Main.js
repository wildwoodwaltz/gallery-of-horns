import React from "react";
import HornedBeast from "./HornedBeast.js";
import Narwhal from "./Narwhal.jpg"
import Rhino from "./rhino.PNG"


class Main extends React.Component {
  render() {
    return (
      <>
      <HornedBeast src = {Narwhal}
      title = "UniWhal" 
      description = "A unicorn and a narwhal nuzzling their horns" keyword = "narwhal"/>
      <HornedBeast src= {Rhino}
      title = "Rhino Binos"
      description = "Parent rhino with two babies"
      keyword = "rhino"
      />
      </>
    )
  }
}
export default Main;