import CharacterItem from './CharacterItem';
import '../styles/layout/List.scss'

const CharacterList = ({ character }) => {
  const characterElement = character.map((character) => {
    return <CharacterItem character={character} />;
  });

  return (
    <section>
      <ul className='list'>{characterElement}</ul>
    </section>
  );
};

export default CharacterList