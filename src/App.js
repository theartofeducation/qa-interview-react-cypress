import React, { useState } from "react";
import "./App.css";

const mockArtistData = {
  name: "Vincent van Gogh",
  birthYear: 1853,
  deathYear: 1890,
  famousWorks: [
    {
      title: "The Starry Night",
      year: 1889,
      description:
        "An oil on canvas painting of a view from the east-facing window of his asylum room at Saint-Rémy-de-Provence.",
    },
    {
      title: "Sunflowers",
      year: 1888,
      description: "A series of still life paintings of sunflowers in a vase.",
    },
    {
      title: "Café Terrace at Night",
      year: 1888,
      description: "A colored oil painting of the exterior of a café at night.",
    },
  ],
};

function App() {
  const [artistDetails, setArtistDetails] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);
  const [isLoadingArtist, setIsLoadingArtist] = useState(false);
  const [isLoadingWork, setIsLoadingWork] = useState(false);

  const loadArtistDetails = async () => {
    setIsLoadingArtist(true);
    setTimeout(() => {
      setArtistDetails(mockArtistData);
      setIsLoadingArtist(false);
    }, 1000); // Simulating network delay
  };

  const showWorkDetails = (work) => {
    setIsLoadingWork(true);
    setTimeout(() => {
      setSelectedWork(work);
      setIsLoadingWork(false);
    }, 500); // Simulating network delay
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vincent van Gogh</h1>
      </header>
      <div className="ArtistDetails">
        <div className="ArtistDetails__img">
          <img
            style={{ width: "200px" }}
            alt="vincent van gogh portrait"
            src="https://static01.nyt.com/images/2013/10/17/arts/international/17iht-rartvangogh17b/17iht-rartvangogh17b-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
          />
        </div>
        <div className="ArtistDetails__content">
          {!artistDetails && (
            <button onClick={loadArtistDetails}>
              {isLoadingArtist ? "Loading..." : "Load Artist Details"}
            </button>
          )}
          {artistDetails && (
            <div>
              <h2>Artist Information:</h2>
              <p>Name: {artistDetails.name}</p>
              <p>Birth Year: {artistDetails.birthYear}</p>
              <p>Death Year: {artistDetails.deathYear}</p>
              <h3>Famous Works:</h3>
              <ul>
                {artistDetails.famousWorks.map((work, index) => (
                  <button
                    style={{ display: "block", marginBottom: "8px" }}
                    key={index}
                    onClick={() => showWorkDetails(work)}
                  >
                    {work.title}
                  </button>
                ))}
              </ul>
            </div>
          )}
          {isLoadingWork && <p>Loading work details...</p>}
          {!isLoadingWork && selectedWork && (
            <div>
              <h3>Details of {selectedWork.title}:</h3>
              <p>Year: {selectedWork.year}</p>
              <p>Description: {selectedWork.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
