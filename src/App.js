import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather.component';
import { render } from '@testing-library/react';

//api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        city: undefined,
        country: undefined,
    }
    this.getWeather();
  }

  getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`)
    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: response.name, //cityname
      country: response.sys.country, //country name
    }) 
  }

  render(){
    return (
      <div className="App">
          <Weather city= {this.state.city} country= {this.state.country}/>
      </div>
    );
  }
}

export default App;
