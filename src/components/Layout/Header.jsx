import React from "react";
import headerImg from "../../assets/topheader.png";

const Header = () => {
  return (
    <header>
      <div
        className="row py-4 px-5 pl-2"
        style={{ borderBottom: "1px solid #777" }}
      >
        <div className="col-2 offset-md-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="#fff"
            className="bi bi-phone-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
          </svg>
        </div>
        <div className="col-4 text-center align-middle">
          <span className="h2 pt-4 m-2 text-white">ContactOpedia</span>
        </div>
        <div className="col-4"></div>
      </div>
    </header>
  );
};

export default Header;
