import { Link } from "react-router-dom";
import '../styles/layout/NotFound.scss'

function NotFoundCharacter(props){
    return(
        <>
            <Link to="/" className="goHomePage" onClick={props.handleReset}> Ir al inicio </Link>
            <h2 className="notFound">Wubba Lubba Dub Dub!!</h2>
            <h2 className="notFound">No hay ningún personaje que coincida con {props.findCharacter}</h2>
        </>
    )
};

export default NotFoundCharacter