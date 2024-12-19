import React from "react";
import "./index.css";
const App = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500">
        Welcome to our React App!
      </h1>
      <p className="mt-4 text-lg">
        This is a simple example of a React component using Tailwind CSS.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Click me!
      </button>
    </div>
  </div>
);
export default App;
