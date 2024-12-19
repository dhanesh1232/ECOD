import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "./components/Header";

const App = () => {
  return (
    <div className="page-container fluid-container vh-100">
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-start">
        <h1 className="">Welcome to our React App!</h1>
        <p className="">
          This is a simple example of a React component using Tailwind CSS.
        </p>
        <button className="btn btn-danger">Click me!</button>
      </div>
    </div>
  );
};
export default App;
