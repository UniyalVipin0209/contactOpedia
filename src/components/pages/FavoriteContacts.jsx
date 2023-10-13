import React from "react";
import Contact from "./Contact";
import DataNotAvailable from "./DataNotAvailable";
const FavoriteContacts = (props) => {
  return (
    <>
      <h2 className="text-center text-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="Red"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg>
        &nbsp; Favorites
      </h2>
      {props.contacts.length > 0 &&
        props.contacts.map((contact, idx) => (
          <Contact
            contact={contact}
            key={idx}
            bgcolor="#342020"
            favoriteClick={props.favoriteClick}
            handleDeleteContact={props.handleDeleteContact}
            enableCreateUpdateMode={props.enableCreateUpdateMode}
          />
        ))}
      {props.contacts?.length == 0 && <DataNotAvailable type="favorite" />}
    </>
  );
};

export default FavoriteContacts;
