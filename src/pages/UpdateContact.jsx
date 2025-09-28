import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const UpdateContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const [name, setName] = useState(store.contactToEdit.name);
  const [email, setEmail] = useState(store.contactToEdit.email);
  const [phone, setPhone] = useState(store.contactToEdit.phone);
  const [address, setAddress] = useState(store.contactToEdit.address);

  const putContacts = () => {
    let options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: "user5",
        phone: "phone5",
        email: "email5",
        address: "address5",
      }),
    };
  };

  return (
    <div className="container">
      <h1>Update contact</h1>

      {/* Name: */}
      <label for="fullname">Full Name</label>
      <br />
      <input
        value={name}
        type="text"
        name="fullname"
        id="fullname"
        placeholder="First and Last Name"
        size="50"
        required
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br />

      {/* Email: */}
      <label for="email">Email</label>
      <br />
      <input
        value={email}
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        size="50"
        required
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <br />

      {/* Phone: */}
      <label for="phone">Phone</label>
      <br />
      <input
        value={phone}
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        size="50"
        required
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />
      <br />

      {/* Address: */}
      <label for="fullname">Address</label>
      <br />
      <input
        value={address}
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Mailing Address"
        size="50"
        required
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <br />

      <button
        className="btn btn-primary text-white"
        onClick={() => {
          name != "" &&
            newContactPhone != "" &&
            newContactEmail != "" &&
            newContactAddress != "" &&
            putContacts();
        }}
      >
        Save contact
      </button>
      <br />

      <Link to="/">Back to contact list</Link>
    </div>
  );
};
