import React from "react";

const DataNotAvailable = (props) => {
  return (
    <div
      className="row p-md-2 mb-2"
      style={{
        borderRadius: "10px",
        backgroundColor: "#292626",
      }}
    >
      <div className="col-6 col-md-5  pt-0 text-center text-white-50 offset-md-1  ">
        Data not available in {props.type} contacts.
      </div>
    </div>
  );
};

export default DataNotAvailable;
