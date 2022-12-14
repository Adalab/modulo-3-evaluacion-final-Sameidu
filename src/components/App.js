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
import NotFoundCharacter from "./NotFoundCharacter";
import ls from "../services/LocalStorage";
// import Footer from './Footer';

function App() {
  const [character, setCharacter] = useState(ls.get('character', []));
  const [findCharacter, setFindCharacter] = useState(ls.get('findCharacter',''));
  const [findSpecies, setFindSpecies] = useState(ls.get('findSpecies',''));


  useEffect(() => {
    if (character.length === 0) {
    callToApi().then((response) => {
      setCharacter(response);
    });
  }
  }, [character, findCharacter, findSpecies]);

  useEffect(() => {
    ls.set('character', character);
    ls.set('findCharacter', findCharacter);
    ls.set('findSpecies', findSpecies);
  }, [character, findCharacter, findSpecies]);

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
    const cardFound = character.find((char) => char.id === parseInt(characterId));


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
                  <NotFoundCharacter findCharacter={findCharacter} handleReset={handleReset}/>
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
