import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Changecontact = () => {
  const { store, dispatch } = useGlobalReducer();
  const [name, setName] = useState(store.contactToChange.name);
  const [address, setAddress] = useState(store.contactToChange.address);
  const [phone, setPhone] = useState(store.contactToChange.phone);
  const [email, setEmail] = useState(store.contactToChange.email);
  return (
    <div className="container">
      <h1>Change contact info</h1>

      <label for="name">Full Name</label>
      <br />
      <input
        id="name"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Edit name"
        value={name}
        size={50}
      />
      <br />

      <label for="name">Address</label>
      <br />
      <input
        id="address"
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        placeholder="Edit address"
        value={address}
        size={50}
      />
      <br />

      <label for="name">Phone</label>
      <br />
      <input
        id="phone"
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        placeholder="Edit phone"
        value={phone}
        size={50}
      />
      <br />

      <label for="name">Email</label>
      <br />
      <input
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Edit email"
        value={email}
        size={50}
      />
    </div>
  );
};

export default Changecontact;
