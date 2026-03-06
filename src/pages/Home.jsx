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
      name: "Jean-Luc Picard",
      phone: "NCC-1701-D",
      email: "picard@tngmail.federation",
      address: "Paris, France",
      id: 1,
    },
  ]);

  const profilePhotos = ["https://upload.wikimedia.org/wikipedia/commons/7/72/William_Shatner_Star_Trek.JPG", "https://upload.wikimedia.org/wikipedia/en/8/8e/Patrick_Steward_as_Jean-Luc_Picard_in_1996%27s_Star_Trek_First_Contact.jpg", "https://upload.wikimedia.org/wikipedia/en/6/60/Mulder2016.png"]

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
      options,
    )
      .then((response) => response.json())
      .then((data) => {
        setContactList(data.contacts);
        getContacts();
      });
  };

  // const putContacts = () => {
  //   let options = {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({
  //       name: "user5",
  //       phone: "phone5",
  //       email: "email5",
  //       address: "address5",
  //     }),
  //   };
  // };

  useEffect(
    () => {
      createAgenda();
      getContacts();
    },
    [], // the sq.brackets make useEffect is triggered every time page loads
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
            <li key={contactData.id} className="row">
              <div className="col-xl-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/72/William_Shatner_Star_Trek.JPG"
                  alt="image of person for this contact"
                />
              </div>

              <div className="col-xl-10">
                <h2 className="row">
                  <span className="col-10">
                    <i className="fa-regular fa-circle-user"></i>
                    {" " + contactData.name}
                  </span>
                  <span className="col-1">
                    <Link to="/changecontact">
                      <button
                        className="transparentButton"
                        onClick={() => {
                          dispatch({
                            type: "set-contactToChange",
                            payload: contactData,
                          });
                        }}
                      >
                        <i className="fa-solid fa-pencil editIcon"></i>
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
              </div>
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
