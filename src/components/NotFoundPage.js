
import { Link } from "react-router-dom";


function NotFoundPage(){
    return(
        <>
            <Link to="/"> Ir a inicio </Link>
            <h2>Page Not Found</h2>
        </>
    )
};

export default NotFoundPage