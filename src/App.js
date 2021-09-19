import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountrys></LoadCountrys>
    </div>
  );
};



function LoadCountrys() {

};


function Card(props) {
  const [love, setLove] = useState(0);
  const loveCountry = () => {
    setLove(love + 1);
  }
  return (
    <div className="card">
      <div className="img">
        <img src={props.flag} alt="" />
      </div>
      <h2>{props.name}</h2>
      <p>Native Name : {props.nativName}</p>
      <h4>Capital : {props.capital}</h4>
      <p>Population : {props.population} </p>
      <button onClick={loveCountry} className="loveBtn">Love</button>
      <span className="love">{love}</span>
    </div>
  );
};


export default App;
