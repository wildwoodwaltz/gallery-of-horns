import React from "react";
import HornedBeast from "./HornedBeast.js";

class Main extends React.Component {
  render() {
    return (
      <>
      <HornedBeast image_url="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
    title = "UniWhal" description = "A unicorn and a narwhal nuzzling their horns" keyword = "narwhal"/>
      <HornedBeast/>
      </>
    )
  }
}
export default Main;