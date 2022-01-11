import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import { cleanNasaData } from '../../dataCleaning';
import { trackPromise } from 'react-promise-tracker';
import { Route, Routes } from 'react-router-dom';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import ImageContainer from '../ImageContainer/ImageContainer';
import DetailCard from '../DetailCard/DetailCard';

const App = () => {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    fetchNasaData();
  }, [])

  const fetchNasaData = () => {
    trackPromise(
    fetchData("https://api.nasa.gov/planetary/apod?start_date=2021-12-10&end_date=2021-12-25&api_key=gNVAgni9T0aFJiqkENzREtHUzQXk79AchIYNH2lZ")
      .then(data => cleanNasaData(data))
      .then(data => setNasaData(data)))
  }

  const toggleImageLike = (id) => {
    const updatedNasaData = nasaData.map(image => {
      if (id == image.id) {
        image.isLiked = !image.isLiked;
        return image;
      } else {
        return image;
      }
    })
    setNasaData(updatedNasaData)
  }

  return (
    <main className="main-container">
      <header className="main-header">
        <h1 className="spacestagram-logo">Spacestagram</h1>
        <p className="spacestagram-subheading">Brought to you by NASA's Astronomy Picture of the Day API.</p>
        <LoaderSpinner />
        <Routes>
          <Route exact path="/" element={<ImageContainer imageData={nasaData} toggleImageLike={toggleImageLike} />}>
          </Route>
          <Route exact path="/:id" element={<DetailCard imageData={nasaData} toggleImageLike={toggleImageLike} />}>
          </Route>
        </Routes>
      </header>
    </main>
    
  );
}

export default App;
