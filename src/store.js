export const initialStore = () => {
  return {
    // Variable to work with the UpdateContact page (PAGE NO LONGER IN USE):
    contactToEdit: {
      name: "user5",
      phone: "phone5",
      email: "email5",
      address: "address5",
    },

    //Variable for Changecontact page:
    contactToChange: {
      name: "Sean",
      phone: "999",
      email: "eee",
      address: "aaa",
    },

    baseURL: "https://playground.4geeks.com/contact",
  };
};

export default function storeReducer(store, action = {}) {
  if (action.type == "set-fname") {
    return {
      ...store,
      fname: action.payload,
    };
  }

  if (action.type == "set-lname") {
    return {
      ...store,
      lname: action.payload,
    };
  }

  if (action.type == "set-contactToChange") {
    return {
      ...store,
      contactToChange: action.payload,
    };
  }
}
