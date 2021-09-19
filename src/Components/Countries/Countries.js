import React from 'react';

const Countries = () => {
    const [countrys, setCountrys] = useState([]);
    useEffect(() => {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountrys(data));
    });
  
    
  
    return (
      <div className="container">
        {
          countrys.map(country => <Card flag={country.flag} name={country.name} nativName={country.nativeName} capital={country.capital} population={country.population}></Card>)
        }
      </div>
    );
};

export default Countries;