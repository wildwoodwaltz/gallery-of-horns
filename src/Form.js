import React from "react";

class Form extends React.Component {

constructor(props){
  super(props);
  this.state = {
    arr: []
  }

  }

handleSearch = (element) => {
  this.setState({
    searchValue: element.target.value
  });
  }



  render() {
    return(
      <>
  <Form.Group className="mb-3">
    <Form.Label>Sort</Form.Label>
    <Form.Select>
      <option>Alphabetically a-z</option>
      <option>Alphabetically z-a</option>
      <option>Number of horns ascending</option>
    </Form.Select>
  </Form.Group>
      </>
    )
}

}


export default Form;