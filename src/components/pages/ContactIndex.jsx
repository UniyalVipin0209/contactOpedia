import React, { Component } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import GeneralContacts from "./GeneralContacts";
import FavoriteContacts from "./FavoriteContacts";
import AddContact from "./AddContact";
class ContactIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Akhil Kumar",
          phone: "999-000-897",
          email: "paul@delta1.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Ankita Mishra",
          phone: "999-201-197",
          email: "ankita@delta11.com",
          isFavorite: true,
        },
        {
          id: 31,
          name: "Udham Singh",
          phone: "999-231-896",
          email: "udham@delta1.com",
          isFavorite: true,
        },
        {
          id: 4,
          name: "Vipin Uniyal",
          phone: "881-000-887",
          email: "Vipin0245@delta3.com",
          isFavorite: false,
        },
        {
          id: 5,
          name: "Tarun Kumar",
          phone: "912-231-896",
          email: "tarunk@delta1.com",
          isFavorite: false,
        },
        {
          id: 6,
          name: "Rashmi Pandey",
          phone: "881-000-887",
          email: "rashmi@delta5.com",
          isFavorite: false,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (tempObject) => {
    //Validation
    if (tempObject.name == "") {
      return {
        status: "failure",
        msg: "Please provide a valid name",
      };
    } else if (tempObject.phone == "") {
      return {
        status: "failure",
        msg: "Please provide a valid phone",
      };
    }
    //duplicate
    const duplicateRecord = this.state.contactList.filter((item) => {
      return item.name == tempObject.name || item.phone == tempObject.phone;
    });

    if (duplicateRecord.length > 0) {
      return {
        status: "failure",
        msg: "Duplicate Record either Name or Phone number already exist. ",
      };
    } else {
      const contactAdded = {
        ...tempObject,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };

      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([contactAdded]),
        };
      });
      return { status: "success ", msg: "Contact was added successfully." };
    }
  };
  handleDeleteContact = (contactId) => {
    console.log("HandelDeleteContact ", contactId);
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter(
          (item) => item.id !== contactId
        ),
      };
    });
  };
  handleToggleFavorites = (contact) => {
    // First Way
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return {
              ...obj,
              isFavorite: !obj.isFavorite,
            };
          }
          return obj;
        }),
      };
    });
  };
  handleDeleteAllContact = () => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };
  HandleAddRandomContact = (contactRandom) => {
    console.log("HandleAddRandomContact ", contactRandom);

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([contactRandom]),
      };
    });
  };

  enableCreateUpdateMode = (tempObject) => {
    console.log("UC ", tempObject);
    // 1. Updating the state for toggle
    this.setState((prevState) => {
      return {
        selectedContact: tempObject,
        isUpdating: true,
      };
    });
  };

  handleUpdateContact = (tempObject) => {
    //Validation
    if (tempObject.name == "") {
      return {
        status: "failure",
        msg: "Please provide a valid name",
      };
    } else if (tempObject.phone == "") {
      return {
        status: "failure",
        msg: "Please provide a valid phone",
      };
    }

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((item) => {
          if (item.id == tempObject.id) {
            console.log("-->", item.name, item.isFavorite);
            return {
              ...item,
              name: tempObject.name,
              email: tempObject.email,
              phone: tempObject.phone,
            };
          }
          return item;
        }),
        //to clear the add form fields
        isUpdating: false,
        selectedContact: undefined,
      };
    });
    return { status: "success", msg: "Contact was updated successfully" };
  };

  handleCancelUpdate = () => {
    // 1. Updating the state for toggle
    this.setState((prevState) => {
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };
  render() {
    return (
      <>
        <Header />
        <div
          className="container"
          style={{ minHeight: "90vh", backgroundColor: "#000" }}
        >
          <div className="row py-3 mb-2 display-col">
            <AddRandomContact
              HandleAddRandomContact={this.HandleAddRandomContact}
            />

            <RemoveAllContact
              handleDeleteAllContact={this.handleDeleteAllContact}
            />
          </div>
          <div className="row py-3 mb-2">
            <div className="col-8 offset-2">
              <AddContact
                handleAddContact={this.handleAddContact}
                isUpdating={this.state.isUpdating}
                selectedContact={this.state.selectedContact}
                handleCancelUpdate={this.handleCancelUpdate}
                handleUpdateContact={this.handleUpdateContact}
              />
            </div>
          </div>
          <div className="row py-3 mb-2">
            <div className="col-8 offset-2">
              <FavoriteContacts
                contacts={this.state.contactList.filter(
                  (i) => i.isFavorite === true
                )}
                favoriteClick={this.handleToggleFavorites}
                handleDeleteContact={this.handleDeleteContact}
                enableCreateUpdateMode={this.enableCreateUpdateMode}
              />
            </div>
          </div>
          <div className="row py-3 mb-2">
            <div className="col-8 offset-2">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (i) => i.isFavorite === false
                )}
                favoriteClick={this.handleToggleFavorites}
                handleDeleteContact={this.handleDeleteContact}
                enableCreateUpdateMode={this.enableCreateUpdateMode}
              />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default ContactIndex;
