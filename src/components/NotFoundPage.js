
import { Link } from "react-router-dom";
import '../styles/layout/NotFound.scss'

function NotFoundPage(){
    return(
        <>
            <Link to="/" className="goHomePage"> Ir al inicio </Link>
            <h2 className="notFound">Wubba Lubba Dub Dub!!</h2>
            <h2 className="notFound">Page Not Found</h2>
        </>
    )
};

export default NotFoundPage