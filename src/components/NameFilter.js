function NameFilter(props) {

    const nameFunction = (ev) => {
        props.handleFilterName(ev.target.value)
    }

    return(
    <>
        <label htmlFor="" >Name: </label>
        <input
          className='form_input'
          onChange={nameFunction}
          type='text'
          name='name'
          id='name'
          value={props.findCharacter}
        />
    </>
    );
};

export default NameFilter