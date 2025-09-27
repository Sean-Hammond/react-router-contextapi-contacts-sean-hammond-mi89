import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const UpdateContact = () => {
    const { store, dispatch } = useGlobalReducer();
    return(
        <div className="container">
              <h1>Update contact</h1>
        
              {/* Name: */}
              <label for="fullname">Full Name</label>
              <br />
              <input
                value={store.contactToEdit.name}
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
                value={store.contactToEdit.email}
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
                value={store.contactToEdit.phone}
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
                value={store.contactToEdit.address}
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
                    newContactPhone != "" &&
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
    )
}

export default UpdateContact;