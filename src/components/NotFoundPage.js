
import { Link } from "react-router-dom";
import '../styles/layout/NotFound.scss'

function NotFoundPage(){
    return(
        <>
            <Link to="/" className="goHomePage"> Ir a inicio </Link>
            <h2 className="notFound">Page Not Found</h2>
        </>
    )
};

export default NotFoundPage