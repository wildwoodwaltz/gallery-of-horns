import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css'
import Forms from './Forms.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastList: this.props.data,
      horns: 0,
    }
  }
  handleHorns = (value) => {
    console.log(value)
   let newData = this.props.data.filter(beast => beast.horns === value)
   console.log(newData)
    this.setState({
      beastList: newData
    })
  }

  render() {
    let beasts = this.state.beastList.map((beast, index) => {
      return (
        <HornedBeast
          key={index}
          title={beast.title}
          imgURL={beast.image_url}
          description={beast.description}
          horns={beast.horns}
          keyword={beast.keyword}
          showModal={this.props.showModal}
          beast={beast}
        />
      )
    })
    return (
      <>
        <Forms
          handleHorns={this.handleHorns}
        />
        <main>
          {beasts}
        </main>
      </>
    );
  }
}
export default Main;