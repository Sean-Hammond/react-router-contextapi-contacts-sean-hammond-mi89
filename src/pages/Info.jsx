// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.

export const Info = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <p>
        Project created from{" "}
        <a
          target="_blank"
          href="https://4geeks.com/docs/start/start-react-advanced"
        >
          this template
        </a>{" "}
        <i className="fa-solid fa-file"></i> by Alejandro Sanchez and 4Geeks Academy. Contact list coded by Sean Hammond with help from Alex Castanier, Alexander Ayala-Palacin, and Thomas Brito Bronfield from 4Geeks Acdademy.
      </p>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
