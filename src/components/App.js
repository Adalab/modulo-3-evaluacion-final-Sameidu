// import monigota from '../images/monigota.png';
import "../styles/App.scss";
import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import callToApi from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filter from "./Filters";
import CardDetail from "./CardDetail";
import NotFoundPage from "./NotFoundPage";
// import Footer from './Footer';

function App() {
  const [character, setCharacter] = useState([]);
  const [findCharacter, setFindCharacter] = useState("");
  const [findSpecies, setFindSpecies] = useState("");


  useEffect(() => {
    callToApi().then((response) => {
      setCharacter(response);
    });
  }, []);

  const handleFilterName = (data) => {
    setFindCharacter(data);
  };

  const handleSpecies = (data) => {
      setFindSpecies(data);
  };

  const handleReset = () => {
    setFindCharacter("");
    setFindSpecies("")
  }

  const filterCharacter = character
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  .filter((character) => {
    return character.name.toLowerCase().includes(findCharacter.toLowerCase());
  })
  .filter((character) => {
    return character.species.toLowerCase().includes(findSpecies.toLowerCase())
  })


  const { pathname } = useLocation();

    const characterUrl = matchPath('/character/:characterId', pathname);
    const characterId = characterUrl !== null ? characterUrl.params.characterId : null;
    const cardFound = character.find((char) => char.id === parseInt(characterId))


  return (
    <>
      <Header></Header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  findCharacter={findCharacter}
                  handleFilterName={handleFilterName}
                  findSpecies={findSpecies}
                  handleSpecies={handleSpecies}
                  handleReset={handleReset}
                />
                {filterCharacter.length > 0 ? (
                  <CharacterList character={filterCharacter} />
                ) : (
                  
                  <h2 className="notFound">No hay ningún personaje que coincida con {findCharacter}</h2>
                )}
              </>
            }
          />

          <Route
            path="/character/:characterId"
            element={<CardDetail character={cardFound}/>}
          ></Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
