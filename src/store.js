export const initialStore = () => {
  return {
    // fname: "Sean",
    // lname: "Hammond",

    // Variables I made to try to work with editing and updating both on the same CreateContact page. This didn't work, and I'm making separate pages now, but deleting the variables now will likely mess up the code, so I'm leaving them here.
    indexOfContactToEdit: 0,
    nameToEdit: "",
    addressToEdit: "",
    phoneToEdit: "",
    emailToEdit: "",

    // Variable to work with the UpdateContact page:
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

  // Code found from another website just to test out and help me learn:
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "set-contactToChange":
  //       return { ...state, contactToChange: action.payload };
  //     default:
  //       return state;
  //   }
  // };

  // switch(action.type){
  //   case 'add_task':

  //     const { id,  color } = action.payload

  //     return {
  //       ...store,
  //       todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
  //     };
  //   default:
  //     throw Error('Unknown action.');
  // }
}
