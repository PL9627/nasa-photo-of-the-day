import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [apocData, setApocData] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=xdJ4nVca8IByhfVvIIdXUWQcLMYlcfZG0AxtIW4Q&date=1997-03-17`)
      .then(response => {
        console.log(response.data)

      })
      .catch(error => {
          console.log("err", error)
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
