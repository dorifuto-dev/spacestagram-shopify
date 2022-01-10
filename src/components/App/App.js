import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import { cleanNasaData } from '../../dataCleaning';
import ImageContainer from '../ImageContainer/ImageContainer';

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
    fetchData("https://api.nasa.gov/planetary/apod?start_date=2021-12-01&end_date=2021-12-27&api_key=gNVAgni9T0aFJiqkENzREtHUzQXk79AchIYNH2lZ")
      .then(data => cleanNasaData(data))
      .then(data => setNasaData(data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <ImageContainer imageData={nasaData} />
      </header>
    </div>
  );
}

export default App;
