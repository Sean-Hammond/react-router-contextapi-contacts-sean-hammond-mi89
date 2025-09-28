import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const CreateContact = () => {
  const { store, dispatch } = useGlobalReducer();

  const [newContactFullName, setNewContactFullName] = useState(store.nameToEdit);
  const [newContactEmail, setNewContactEmail] = useState(store.emailToEdit);
  const [newContactPhone, setNewContactPhone] = useState(store.phoneToEdit);
  const [newContactAddress, setNewContactAddress] = useState(store.addressToEdit);

  const createContacts = () => {
    setNewContactFullName("");
    setNewContactEmail("");
    setNewContactPhone("");
    setNewContactAddress("");
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: newContactFullName,
        phone: newContactPhone,
        email: newContactEmail,
        address: newContactAddress,
      }),
    };
    fetch(store.baseURL + "/agendas/sean-hammond/contacts", options)
      .then((resp) => resp.json())
      .then((data) => console.log("Data of Contacts: ", data));
  };

  return (
    <div className="container">
      <h1>Add a new contact</h1>

      {/* Name: */}
      <label for="fullname">Full Name</label>
      <br />
      <input
        value={newContactFullName}
        type="text"
        name="fullname"
        id="fullname"
        placeholder="First and Last Name"
        size="50"
        required
        onChange={(event) => {
          setNewContactFullName(event.target.value);
        }}
      />
      <br />

      {/* Email: */}
      <label for="email">Email</label>
      <br />
      <input
        value={newContactEmail}
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        size="50"
        required
        onChange={(event) => {
          setNewContactEmail(event.target.value);
        }}
      />
      <br />

      {/* Phone: */}
      <label for="phone">Phone</label>
      <br />
      <input
        value={newContactPhone}
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        size="50"
        required
        onChange={(event) => {
          setNewContactPhone(event.target.value);
        }}
      />
      <br />

      {/* Address: */}
      <label for="fullname">Address</label>
      <br />
      <input
        value={newContactAddress}
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Mailing Address"
        size="50"
        required
        onChange={(event) => {
          setNewContactAddress(event.target.value);
        }}
      />
      <br />

      <button
        className="btn btn-primary text-white"
        onClick={() => {
          newContactFullName != "" &&
            newContactEmail != "" &&
            newContactPhone != "" &&
            newContactAddress != "" &&
            createContacts();
        }}
      >
        Save contact
      </button>
      <br />

      <Link to="/">Back to contact list</Link>
    </div>
  );
};
