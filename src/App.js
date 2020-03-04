import React, { useEffect, useState } from "react";
import "./App.css";
import PhotoContainer from "./components/PhotoContainer";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
      <PhotoContainer />
    </div>
  );
}

export default App;
