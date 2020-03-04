import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoContainer = () => {
    const [apocData, setApocData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=kbRB6QbcWBa5rLlw4RSlIhyIyYwO3jYvuXVyaUDE&date=2012-03-14"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
          console.log("err", error);
      });
  }, []);
};

export default PhotoContainer;