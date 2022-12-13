
import { Link } from "react-router-dom";
import "../styles/layout/Info.scss"


function CardDetail(props) {
    
    return(
        <>
            <Link to="/" className="goHomePage"> Ir al inicio </Link>
            <li className="info">
            <div className="info_link" title="character Detail">
                <div className="info_img">
                <img
                    className="info_img-cont"
                    src={props.character.image}
                    alt={`Foto de ${props.character.name}`}
                />
                </div>
        
                <h2 className="info_name">{props.character.name}</h2>
                <p className="info_species">{props.character.species}</p>

                <p className="info_species">Number of chapters: {props.character.episode.length}</p>
                <p className="info_species">Status: {props.character.status}</p>
                <p className="info_species">Origin: {props.character.origin}</p>


            </div>
            </li>
        </>
    )
};

export default CardDetail
