
import NameFilter from "./NameFilter";


function Filter(props) {
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    return(
        <form className='header_form' onSubmit={handleSubmit}>
        <NameFilter
            findCharacter={props.findCharacter}
            handleFilterName={props.handleFilterName}
        />
    </form>
    );
    
};


export default Filter