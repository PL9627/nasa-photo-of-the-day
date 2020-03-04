 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import PhotoCard from './PhotoCard';

 const PhotoContainer = (props) => {
    const [apocData, setApocData] = useState("");

    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=kbRB6QbcWBa5rLlw4RSlIhyIyYwO3jYvuXVyaUDE&`)
        .then(response => {
          setApocData(response.data);
  
        })
        .catch(error => {
            console.log("err", error)
        });
    }, []);

    return(
        <section className = 'nasaPic'>
            <PhotoCard />
        </section>
    );
 };

 export default PhotoContainer;