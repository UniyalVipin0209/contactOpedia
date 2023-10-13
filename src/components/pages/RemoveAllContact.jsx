import React from "react";

const RemoveAllContact = (props) => {
  return (
    // <div className="col-md-4">
    <div
      className="col-sm-10 col-xs-10
    offset-sm-right-2   col-xs-2 offset-xs-right-2  col-md-4 offset-md-right-2"
    >
      <button
        className="common-btn btn-format  form-control   remove-contact"
        type="button"
        onClick={props.handleDeleteAllContact}
      >
        Remove All Contact
      </button>
    </div>
  );
};

export default RemoveAllContact;
