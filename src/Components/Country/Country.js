import React, { useState } from 'react';
import './Country.css'

const Country = props => {
    const [love, setLove] = useState(0);
    const loveCountry = () => {
      setLove(love + 1);
    }
    const { flag, name, nativName, capital, population } = props.country;
    return (
      <div className="country">
        <div className="img">
          <img src={flag} alt="" />
        </div>
        <h2>{name}</h2>
        <p>Native Name : {nativName}</p>
        <h4>Capital : {capital}</h4>
        <p>Population : {population} </p>
        <button onClick={loveCountry} className="loveBtn">Love</button>
        <span className="love">{love}</span>
      </div>
    );
};

export default Country;