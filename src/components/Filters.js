
import NameFilter from "./NameFilter";
import "../styles/layout/Form.scss"

function Filter(props) {
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    return(
        <form className='form' onSubmit={handleSubmit}>
        <NameFilter
            findCharacter={props.findCharacter}
            handleFilterName={props.handleFilterName}
        />
    </form>
    );
    
};


export default Filter