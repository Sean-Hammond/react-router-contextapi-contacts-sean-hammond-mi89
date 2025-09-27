// Prettier extension adds trailing commas in objects. I did not add these deliberately.

import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  // const [user, setUser] = useState("Sean");
  const [contactList, setContactList] = useState([
    {
      name: "Sean Hammond",
      phone: "123-456-7980",
      email: "e@mail.com",
      address: "1600 Penn Road",
      id: 1,
    },
  ]);

  const createAgenda = () => {
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        slug: "sean-hammond",
        id: 0,
      }),
    };
    fetch(store.baseURL + "/agendas/sean-hammond", options)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data.detail);
        console.log("createAgenda data :".data);
      });
  };

  const createDemoContacts = () => {
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: "Your name",
        phone: "Your phone",
        email: "Your email",
        address: "Your address",
      }),
    };
    fetch(store.baseURL + "/agendas/sean-hammond/contacts", options)
      .then((resp) => resp.json())
      .then((data) => console.log("Data of Contacts: ", data));
  };

  const getContacts = () => {
    fetch(store.baseURL + "/agendas/sean-hammond/contacts")
      .then((resp) => resp.json())
      .then((data) => {
        setContactList(data.contacts);
      });
  };

  const deleteContact = (contactId) => {
    const options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    };
    fetch(
      store.baseURL + "/agendas/sean-hammond/contacts/" + contactId,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setContactList(data.contacts);
        getContacts();
      });
  };

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

  useEffect(
    () => {
      createAgenda();
      getContacts();
    },
    [] // the sq.brackets make useEffect is triggered every time page loads
  );

  return (
    <div className="text-center mt-5">
      <h1>My Contacts</h1>
      {/* {user} */}
      <button className="btn btn-success text-white">
        <Link to="/createcontact">Create new contact</Link>
      </button>

      <ul>
        {contactList.map((contactData) => {
          return (
            <li key={contactData.id}>
              <h2 className="row">
                <span className="col-10">
                  <i className="fa-regular fa-circle-user"></i>
                  {" " + contactData.name}
                </span>
                <span className="col-1">
                  <Link to="/updateContact">
                  <button className="transparentButton">
                    <i
                    className="fa-solid fa-pencil editIcon"
                    onClick={() => {
                      dispatch({
                        type: "set-indexOfContactToEdit",
                        payload: contactList.length - 1,
                      });
                      dispatch({
                        type: "nameToEdit",
                        payload: contactData.name,
                      });
                      dispatch({
                        type: "addressToEdit",
                        payload: contactData.address,
                      });
                      dispatch({
                        type: "phoneToEdit",
                        payload: contactData.phone,
                      });
                      dispatch({
                        type: "emailToEdit",
                        payload: contactData.email,
                      });
                    }}
                  ></i>
                  </button>
                  </Link>
                </span>
                <span className="col-1">
                  <button className="transparentButton">
                    <i
                    className="fa-solid fa-trash-can editIcon"
                    onClick={() => {
                      contactList.length == 1 && createDemoContacts();
                      deleteContact(contactData.id);
                      window.location.reload();
                    }}
                  ></i>
                  </button>
                </span>
              </h2>
              <h3>
                <i className="fa-solid fa-location-dot"></i>
                {" " + contactData.address}
              </h3>
              <h3>
                <i className="fa-solid fa-phone"></i>
                {" " + contactData.phone}
              </h3>
              <h3>
                <i className="fa-solid fa-envelope"></i>
                {" " + contactData.email}
              </h3>
            </li>
          );
        })}
      </ul>

      {/* Tutorial on dispatch function: */}
      {/* <div className="m-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "set-fname",
              payload: "Alex",
            });
          }}
        >
          {store.fname}
        </button>
      </div>

      <div className="m-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "set-lname",
              payload: "Ayala",
            });
          }}
        >
          {store.lname}
        </button>
      </div> */}
    </div>
  );
};
