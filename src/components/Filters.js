import NameFilter from "./NameFilter";
import Species from "./SpeciesFilter";
import Reset from "./Reset";
import "../styles/layout/Form.scss";

function Filter(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <NameFilter
        findCharacter={props.findCharacter}
        handleFilterName={props.handleFilterName}
      />
      <Species
        findSpecies={props.findSpecies}
        handleSpecies={props.handleSpecies}
      />
      <Reset handleReset={props.handleReset}/>
    </form>
  );
}

export default Filter;
