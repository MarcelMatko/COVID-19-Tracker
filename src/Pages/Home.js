import React from 'react';
import CardList from '../Components/Cards/CardList';
import CountryList from '../Components/Country/CountryList';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div className="App">
       <img src="./covid-logo.png" alt=""></img>
      <CardList></CardList>
      <CountryList></CountryList>
    </div>
  );
}

export default Home;
