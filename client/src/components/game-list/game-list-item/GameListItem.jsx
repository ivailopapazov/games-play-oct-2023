import { Link } from "react-router-dom";

export default function GameListItem({
    _id,
    title,
    category,
    imageUrl,
}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/games/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
