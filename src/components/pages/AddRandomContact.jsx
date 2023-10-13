import React from "react";
import { getRandomUser } from "../../services/api";
const GetRandomContact = async (props) => {
  const apiResonse = await getRandomUser();
  const randomUser = {
    id: apiResonse.data.id,
    name: apiResonse.data.first_name + " " + apiResonse.data.last_name,
    email: apiResonse.data.email,
    phone: apiResonse.data.phone_number,
    isFavorite: false,
  };
  console.log("RU ", props);
  return props.HandleAddRandomContact(randomUser);
};
const AddRandomContact = (props) => {
  return (
    <div className="col-sm-10 col-xs-10 offset-sm-2   col-xs-2 offset-xs-2  col-md-4 offset-md-2">
      <button
        type="button"
        className="add-random  common-btn form-control add-contact"
        onClick={() => GetRandomContact(props)}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomContact;
