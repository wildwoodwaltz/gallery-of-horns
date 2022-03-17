import React from 'react';
import Modal from 'react-bootstrap/Modal'
import './SelectedBeast.css'




class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onClick={this.props.hideModal}
        >
          <Modal.Header closeButton>{this.props.beast.title}</Modal.Header>
          <Modal.Body
            onClick={this.props.hideModal}
            containerclassname='modal'
          >
            <img src={this.props.beast.image_url} alt={this.props.beast.keyword} />
            <p>{this.props.beast.description}</p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}
export default SelectedBeast;