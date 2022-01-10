import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';

const App = () => {

  const [nasaData, setNasaData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchNasaData()
  }, [])

  const fetchNasaData = () => {
    fetchData("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=gNVAgni9T0aFJiqkENzREtHUzQXk79AchIYNH2lZ")
      .then(data => setNasaData(data.photos))
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
