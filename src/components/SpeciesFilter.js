import "../styles/layout/Form.scss";


function Species(props) {

    const speciesFunction = (ev) => {
         props.handleSpecies(ev.target.value);
     };

    return(
        <>
            <input
                className='form_checkbox'
                type='radio'
                name='species'
                id='human'
                value='human'
                onChange={speciesFunction}
            />
            <label className='label' htmlFor='human'>
                Human
            </label>
            
            <input
                className='form_checkbox'
                type='radio'
                name='species'
                id='alien'
                value='alien'
                onChange={speciesFunction}
            />
            <label className='label' htmlFor='alien'>
                Alien
            </label>
        </>
    )
};

export default Species