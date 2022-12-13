
import { Link } from "react-router-dom";


function CardDetail(props) {
    
    return(
        <>
            <Link to="/"> Ir a inicio </Link>
            <li className="card">
            <div className="card_link" title="character Detail">
                <div className="card_img">
                <img
                    className="card_img-cont"
                    src={props.character.image}
                    alt={`Foto de ${props.character.name}`}
                />
                </div>
        
                <h2 className="card_name">{props.character.name}</h2>
                <p className="card_species">{props.character.species}</p>

                <p className="card_species">Number of chapters: {props.character.episode.length}</p>
                <p className="card_species">Status: {props.character.status}</p>
                <p className="card_species">Origin: {props.character.origin}</p>


            </div>
            </li>
        </>
    )
};

export default CardDetail
