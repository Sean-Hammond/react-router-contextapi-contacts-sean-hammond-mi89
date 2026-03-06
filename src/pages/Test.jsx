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