import React from "react";
import "./usercard.css";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600";
  const name = "Elena Gomez";
  const email = "elenagomez@example.com";
  const phone = "+1 234 567 890";
  const address = "123, Elm Street, Springfield, USA";

  return (
    <div className="usercard-container">
      <div className="usercard-content">
        <img src={profilePhoto} alt="Profile" className="usercard-image" />
        <h2 className="usercard-name">{name}</h2>
        <p className="usercard-email">{email}</p>
        <p className="usercard-phone">{phone}</p>
        <p className="usercard-address">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;