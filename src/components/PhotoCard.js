import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ApodHeaderTitle = styled.h1`
    margin: 2% 0;
`;

const ApodCard = styled.div`
    background: whitesmoke;
@media (max-width: 500px) {
 width: 100%;       
}
`;

const Explain = styled.p`
    width: 80%;
    text-align: center;
    margin-left: 9%;
    @media (max-width: 500px) {
        width: 80%;       
       }
`;

const Pic = styled.img`
       @media (max-width: 500px) {
        width: 80%;
        margin: 2% 0;    
       }
`;

const Subscribe = styled.button`
       background-color: transparent;
       border-radius: 3px;
       border: 2px solid dodgerblue;
       color: dodgerblue;
       margin: 5% 0;
       padding: 4px 16px;
       
       &:hover {
           background-color: dodgerblue;
           color: white;
       }
`;

const PhotoCard = () => {
    const [apodData, setApodData] = useState("");

    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=kbRB6QbcWBa5rLlw4RSlIhyIyYwO3jYvuXVyaUDE&`)
        .then(response => {
          setApodData(response.data);
        })  
    }, []);

    console.log(apodData);

    return(
        <ApodCard>
            <div>
                <ApodHeaderTitle>NASA Astronomy Photo of the Day</ApodHeaderTitle>
            </div>
            <div>
                <Pic className = "img" src = {apodData.url}/>
                <div>
                    <h1>{apodData.title}</h1>
                    <h2>{apodData.date}</h2>
                    <Explain>{apodData.explanation}</Explain>
                    <h3>Credit: {apodData.copyright}</h3>
                </div>
                <div>
                    <Subscribe>Subscribe</Subscribe>
                </div>
            </div>
        </ApodCard>

            // <div>
            //     <img src = 'https://apod.nasa.gov/apod/image/2003/NGC5394n5_gemini_960.jpg'></img>
            //     <div>
            //         <h1>The Slow Dance of Galaxies NGC 5394 and 5395</h1>
            //         <h2>Date: March 4th, 2020</h2>
            //         <p>If you like slow dances, then this may be one for you.  A single turn in this dance takes several hundred million years.  Two galaxies, NGC 5394 and NGC 5395, slowly whirl about each other in a gravitational interaction that sets off a flourish of sparks in the form of new stars.  The featured image, taken with the Gemini North 8-meter telescope on Maunakea, Hawaii, USA, combines four different colors.  Emission from hydrogen gas, colored red, marks stellar nurseries where new stars drive the evolution of the galaxies.  Also visible are dark dust lanes that mark gas that will eventually become stellar nurseries. If you look carefully you will see many more galaxies in the background, some involved in their own slow cosmic dances.</p>
            //         <h3>Credit: Gemini, NSF, OIR Lab, AURA; Text: Ryan Tanner (NASA/USRA)</h3>
            //     </div>
            // </div>
    )
};

export default PhotoCard;