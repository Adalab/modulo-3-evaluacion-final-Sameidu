
const callToApi = () => {
    // Llamamos a la API
    return fetch('https://rickandmortyapi.com/api/character') 
      .then((response) => response.json())
      .then((data) => {
        const cleanCharacter = data.results.map((character) => {
          return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
          episode: character.episode,
          status: character.status,
          origin: character.origin.name,
          };
        });
        return cleanCharacter
      });
  };
  
  export default callToApi;