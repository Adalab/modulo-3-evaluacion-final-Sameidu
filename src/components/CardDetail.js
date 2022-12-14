
import { Link } from "react-router-dom";
import "../styles/layout/Info.scss"
import NotFoundPage from "./NotFoundPage";


function CardDetail({character}) {
    if (character === undefined) {
        return <NotFoundPage/>
    } else{    
        return(
        <>
            <Link to="/" className="goHomePage"> Ir al inicio </Link>
            <li className="info">
            <div className="info_link" title="character Detail">
                <div className="info_img">
                <img
                    className="info_img-cont"
                    src={character.image}
                    alt={`Foto de ${character.name}`}
                />
                </div>
        
                <h2 className="info_name">{character.name}</h2>
                <p className="info_species">{character.species}</p>

                <p className="info_species">Number of chapters: {character.episode.length}</p>
                <p className="info_species">Status: {character.status}</p>
                <p className="info_species">Origin: {character.origin}</p>


            </div>
            </li>
        </>
        )
        }
};

export default CardDetail
