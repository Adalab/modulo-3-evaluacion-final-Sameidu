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


  useEffect(() => {
    callToApi().then((response) => {
      setCharacter(response);
    });
  }, []);

  const handleFilterName = (data) => {
    if (data.key === "name") {
      setFindCharacter(data.value);
    }
  };


  const filterCharacter = character
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  .filter((character) => {
    return character.name.toLowerCase().includes(findCharacter.toLowerCase());
  });


  const { pathname } = useLocation();

    const characterUrl = matchPath('/character/:characterId', pathname);
    const characterId = characterUrl !== null ? characterUrl.params.characterId : null;
    const cardFound = character.find((char) => char.id === parseInt(characterId))


  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  findCharacter={findCharacter}
                  handleFilterName={handleFilterName}
                />
                {filterCharacter.length > 0 ? (
                  <CharacterList character={filterCharacter} />
                ) : (
                  <h2 className="notFound">Character not found</h2>
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
