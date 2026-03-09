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

  const profilePhotos = ["https://openclipart.org/download/122107/defaultprofile.svg", "https://openclipart.org/download/279689/Button---Happy.svg", "https://openclipart.org/download/242499/1456705995.svg", "https://openclipart.org/download/179156/heartusa.svg"]

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

  useEffect(
    () => {
      createAgenda();
      getContacts();
    },
    [], // the sq.brackets make useEffect triggered every time page loads
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
                  src={profilePhotos[Math.floor(Math.random() * profilePhotos.length)]}
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
    </div>
  );
};
