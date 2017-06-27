import React, {Component} from 'react';
import './DeleteAmount.css'
import { Glyphicon, Button, Modal } from 'react-bootstrap';

export class DeleteAmount extends Component {
  handleClickDelete(){
    this.props.handleDelete(false)
  }
  handleDeleteItem(id){
    this.props.handleUpdateCart(id)
  }

  render() {
    return (
      <Modal.Dialog className="font">
        <Modal.Header>
          <Modal.Title>Remove Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className='name'>Name: {this.props.name}</div>
            <div className='amount'>Amount: {this.props.amount}</div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleClickDelete.bind(this)}>Close</Button>
          <Button className='btn btn-danger' onClick={this.handleDeleteItem.bind(this,this.props.id)}>Confirm</Button>
        </Modal.Footer>

      </Modal.Dialog>
    )
  }
}
