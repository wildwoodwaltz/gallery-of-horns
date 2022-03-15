import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import './HornedBeast.css'


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: 0
    }
  }
    handleLikes = () => {
      this.setState({
        liked: this.state.liked + 1
      })
    }
  render() {
    return (
      <>
        <Card>
          <Card.Header>&#10084; {this.state.liked} &#10084;</Card.Header>
          <Card.Img src={this.props.imgURL} alt={this.props.keyword}/>
          <Card.Body>
          <Card.Title className="card-title">{this.props.title}</Card.Title>
          </Card.Body>
          <Card.Body>
          <Card.Text>
          {this.props.description}
          </Card.Text>
          </Card.Body>
          <ListGroup className="beast-horns">
            <ListGroup.Item>Number of Horns: {this.props.horns}</ListGroup.Item>
            <ListGroup.Item onClick={this.handleLikes}>I like this!</ListGroup.Item>
          </ListGroup>
        </Card>
        
      </>
    )
  }
}
export default HornedBeast;