import React from "react";

import Contact from "./Contact";
import DataNotAvailable from "./DataNotAvailable";
const GeneralContacts = (props) => {
  return (
    <>
      <h2 className="text-center text-danger">Other Contacts</h2>
      {props.contacts?.length > 0 &&
        props.contacts.map((contact, idx) => (
          <Contact
            contact={contact}
            key={idx}
            bgcolor="#828787"
            favoriteClick={props.favoriteClick}
            handleDeleteContact={props.handleDeleteContact}
            enableCreateUpdateMode={props.enableCreateUpdateMode}
          />
        ))}
      {props.contacts?.length == 0 && <DataNotAvailable type="general" />}
    </>
  );
};

export default GeneralContacts;
