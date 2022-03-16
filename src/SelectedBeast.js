import React from "react";
import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends React.Component {
  render() {
    return (
      <>
      <Modal show={this.props.showModal} onClick={this.props.hideModal}>
       <Modal.Header closeButton>
        <Modal.Body onClick={this.props.hideModal}>
         <img src={this.props.imgURL} alt={this.props.keyword}/>
         {this.props.description} 
        </Modal.Body>
      </Modal.Header>
      </Modal>
      </>
    )
  }
}
export default SelectedBeast;