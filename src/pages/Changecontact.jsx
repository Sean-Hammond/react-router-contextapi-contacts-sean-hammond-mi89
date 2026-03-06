import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

const Changecontact = () => {
  const { store, dispatch } = useGlobalReducer();
  const [name, setName] = useState(store.contactToChange.name);
  const [address, setAddress] = useState(store.contactToChange.address);
  const [phone, setPhone] = useState(store.contactToChange.phone);
  const [email, setEmail] = useState(store.contactToChange.email);

  const putContacts = async (contact_id) => {
    const response = await fetch(
      store.baseURL + "/agendas/sean-hammond/contacts/" + contact_id,
      {
        method: "PUT",
        body: JSON.stringify({
          id: contact_id,
          name,
          phone,
          email,
          address,
        }), // the variable dataToSend can be a 'string' or an {object} that comes from somewhere else in our application
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("error: ", response.status, response.statusText);
      /* Handle the error returned by the HTTP request */
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  };

  return (
    <div className="container">
      <h1>Change contact info</h1>

      <label htmlFor="name">Full Name</label>
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

      <label htmlFor="address">Address</label>
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

      <label htmlFor="phone">Phone</label>
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

      <label htmlFor="email">Email</label>
      <br />
      <input
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Edit email"
        value={email}
        size={50}
      />
      <br />

      <button
        className="btn btn-primary text-white"
        onClick={() => {
          // name != "" &&
          //   email != "" &&
          //   phone != "" &&
          //   address != "" &&
          putContacts(store.contactToChange.id);
        }}
      >
        Save contact
      </button>

      <button className="btn btn-info btn">
        <Link to="/">
          <i class="fa-solid fa-hand-point-left"></i> Back to contact list
        </Link>
      </button>
    </div>
  );
};

export default Changecontact;
