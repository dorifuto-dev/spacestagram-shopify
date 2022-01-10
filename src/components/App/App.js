import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import { cleanNasaData } from '../../dataCleaning';

const App = () => {

  const [nasaData, setNasaData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    startApp();
  }, [])

  const startApp = async () => {
    await setIsLoading(true);
    await fetchNasaData();
    setIsLoading(false);
  }

  const fetchNasaData = () => {
    fetchData("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=gNVAgni9T0aFJiqkENzREtHUzQXk79AchIYNH2lZ")
      .then(data => cleanNasaData(data))
      .then(data => setNasaData(data))
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
