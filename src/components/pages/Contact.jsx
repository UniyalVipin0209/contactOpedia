import React from "react";

const Contact = (props) => {
  const { bgcolor, contact } = props;

  return (
    <div
      className="row row-formatting"
      style={{
        backgroundColor: bgcolor,
      }}
    >
      <div
        className="col-2 col-md-1
      m-auto
      pt-2 pt-md-1"
      >
        <img
          src={`https://ui-avatars.com/api/?name=${contact.name}`}
          alt=""
          className="img-name"
        />
      </div>
      <div
        className="col-5  col-md-5 
        
        pt-0 text-warning "
      >
        <div className="p-2 second-box  m-auto">
          <span className="bold-text h4">{contact.name}</span>
          <br />
          <div className="text-white subtext">{contact.email}</div>

          <div className="text-white subtext">{contact.phone}</div>
        </div>
      </div>
      <div
        className="col-5 col-md-6
        pt-md-3 disp-flex  m-auto"
      >
        <button
          className={`btn btn-md btn-size m-2 ${
            contact.isFavorite ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => props.favoriteClick(props.contact)}
        >
          <i className="bi bi-star icon"></i>
        </button>
        <button
          className="btn btn-md  btn-size btn-primary   m-2"
          onClick={() => props.enableCreateUpdateMode(props.contact)}
        >
          <i className="bi bi-pencil-square icon"></i>
        </button>
        <button
          className="btn btn-danger btn-size btn-md btn-sm m-2 btn-xs"
          onClick={() => props.handleDeleteContact(props.contact.id)}
        >
          <i className="bi bi-trash-fill icon"></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
