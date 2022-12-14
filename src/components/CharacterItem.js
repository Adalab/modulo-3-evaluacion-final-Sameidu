import '../styles/layout/Card.scss'
import { Link } from "react-router-dom";


function CharacterItem(props) {
    return (
        <li className="card">
          <Link to={`/character/${props.character.id}`}>
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
          </div>
          </Link>
        </li>
      );
}
export default CharacterItem;