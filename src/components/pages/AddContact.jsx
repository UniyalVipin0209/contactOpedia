import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sucessMessage: undefined,
      sucessMessage: undefined,
    };
  }
  cancelUpdateClick = (e) => {
    this.props.handleCancelUpdate();
  };
  handleAddContactFormSubmit = (e) => {
    e.preventDefault();

    let contactAdded;

    if (this.props.isUpdating) {
      contactAdded = {
        name: e.target.elements.contactname.value.trim(),
        email: e.target.elements.contactemail.value.trim(),
        phone: e.target.elements.contactphone.value.trim(),
        id: e.target.elements.id.value,
      };
    } else {
      contactAdded = {
        name: e.target.elements.contactname.value.trim(),
        email: e.target.elements.contactemail.value.trim(),
        phone: e.target.elements.contactphone.value.trim(),
      };
    }

    let response;
    if (this.props.isUpdating) {
      //check if the values are not changed.
      response = this.props.handleUpdateContact(contactAdded);
    } else {
      response = this.props.handleAddContact(contactAdded);
    }

    if (response.status == "success") {
      this.setState({
        errorMessage: undefined,
        sucessMessage: response.msg,
      });
      //reset form
      document.getElementsByName("contact-form")[0].reset();
    } else {
      this.setState({
        errorMessage: response.msg,
        sucessMessage: undefined,
      });
    }
  };
  render() {
    return (
      <form name="contact-form" onSubmit={this.handleAddContactFormSubmit}>
        <div
          className="border row"
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
          }}
        >
          <div className="col-12 p-1 mt-2 mb-1 text-start">
            <div className="col-12 text-center" style={{ fontWeight: "700" }}>
              {this.props.isUpdating ? "Update Contact" : "Add a New Contact"}
            </div>

            <input
              name="id"
              type="hidden"
              defaultValue={
                this.props.isUpdating ? this.props.selectedContact.id : ""
              }
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control form-control-sm txtbox"
              placeholder="Name..."
              name="contactname"
              defaultValue={
                this.props.isUpdating ? this.props.selectedContact.name : ""
              }
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control  txtbox form-control-sm"
              placeholder="Email..."
              name="contactemail"
              defaultValue={
                this.props.isUpdating ? this.props.selectedContact.email : ""
              }
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              type="text"
              className="form-control txtbox form-control-sm"
              placeholder="Phone..."
              name="contactphone"
              defaultValue={
                this.props.isUpdating ? this.props.selectedContact.phone : ""
              }
            />
          </div>
          {/* Messages -Error */}
          {this.state.errorMessage == undefined ? (
            <></>
          ) : (
            <div className="fluid-container">
              <div className=" align-items-center flex-row">
                <h4 className="text-danger">{this.state.errorMessage}</h4>
              </div>
            </div>
          )}
          {/* Messages -Success */}
          {this.state.sucessMessage == undefined ? (
            <></>
          ) : (
            <div className="fluid-container">
              <div className=" align-items-center flex-row">
                <h4 className="text-success">{this.state.sucessMessage}</h4>
              </div>
            </div>
          )}

          {this.props.isUpdating ? (
            <div className="row">
              <div className="col-4 col-md-4 offset-md-2   p-1 mt-4 mb-2">
                <button className=" btn-format  update-contact btn-sm form-control">
                  Update
                </button>
              </div>
              <div className="col-4 col-md-4   p-1 mt-4 mb-2">
                <button
                  className=" btn-format cancel-contact btn-sm form-control"
                  onClick={this.cancelUpdateClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="col-4 col-md-4 offset-md-2  p-1 mt-4 mb-2">
              <button
                className=" btn-format btn-create
              btn-sm form-control"
              >
                Create
              </button>
            </div>
          )}
        </div>
      </form>
    );
  }
}

export default AddContact;
