import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class AddGroup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      titleInput: "title",
      descInput: "desc",
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  onClick = event => {
    let newGroup = {};
    newGroup.id =new Date().getMilliseconds();
    newGroup.title = this.state.titleInput;
    newGroup.desc = this.state.descInput;
    this.props.onAdd(newGroup);
    event.preventDefault();
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add a new group
        </Button>

        <Modal
          animation={false}
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Title>Add a new group</Modal.Title>
          <Modal.Body>
            <form onSubmit={this.onClick}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="titleInput"
                  placeholder="Enter title"
                  onChange={e => this.setState({titleInput: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="descInput"
                  placeholder="Enter Description"
                  onChange={e => this.setState({descInput: e.target.value})}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddGroup;
