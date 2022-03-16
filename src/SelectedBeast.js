import React from "react";
import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends React.Component {
  render() {
    return (
      <>
      <Modal show={this.props.showModal} onClick={this.props.hideModal}>
       <Modal.Header closeButton>
        <Modal.Body onClick={this.props.hideModal}>
          {this.props.img}
        </Modal.Body>
      </Modal.Header>
      </Modal>
      </>
    )
  }
}
export default SelectedBeast;