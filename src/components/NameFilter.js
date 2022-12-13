function NameFilter(props) {

    const nameFunction = (ev) => {
        props.handleFilterName({
            key: 'name',
            value: ev.target.value,
          });
    }



    return(
    <>
        <label htmlFor="">Nombre del personaje</label>
        <input
          className='form_input-text'
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