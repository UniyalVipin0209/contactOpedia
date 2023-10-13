import React from "react";

const DataNotAvailable = (props) => {
  return (
    <div className="fluid-container">
      <div
        className=" align-items-center flex-row"
        style={{
          borderRadius: "10px",
          height: "65px",
          margin: "auto",
          paddingTop: "10px",
          backgroundColor: "#292626",
        }}
      >
        <p className="text-danger" style={{ paddingLeft: "5px" }}>
          Data not available in {props.type} contacts.
        </p>
      </div>
    </div>
  );
};

export default DataNotAvailable;
