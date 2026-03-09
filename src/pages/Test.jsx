// Code that I removed from other pages/components but might want to save for later:

// Code found from another website just to test out and help me learn, goes at the end of the store:
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

// Goes at the beginning of the store return statement:
    // fname: "Sean",
    // lname: "Hammond",

    // Variables I made to try to work with editing and updating both on the same CreateContact page. This didn't work, and I'm making separate pages now, but deleting the variables now will likely mess up the code, so I'm leaving them here.
    // indexOfContactToEdit: 0,
    // nameToEdit: "",
    // addressToEdit: "",
    // phoneToEdit: "",
    // emailToEdit: "",

// Code moved out of Home.jsx
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

// taken from right before last closing </div> tag in Home.jsx:
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