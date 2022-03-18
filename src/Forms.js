import React from "react";
import Form from 'react-bootstrap/Form';



class Forms extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

handleSort = (event) => {
  this.props.handleHorns(parseInt(event.target.value))
}
  render() {
    return(
      <>
  <Form.Group className="sortbyhorns">
    <Form.Label>Sort by Horns</Form.Label>
    <Form.Select onChange={this.handleSort}>
      <option value=''>Display All</option>
      <option value='1'>One Horn</option>
      <option value='2'>Two Horns</option>
      <option value='3'>Three Horns</option>
      <option value='100'>One-Hundred Horns!</option>
    </Form.Select>
  </Form.Group>
      </>
    )
}

}


export default Forms;