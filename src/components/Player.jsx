import { Link, useParams, Navigate } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";
import Loading from "./Loading";

function Player() {
  const { name } = useParams();

  const { loading, response: player } = usePlayer(name);

  if (loading) return <Loading />;

  if (!player) return <Navigate to={`/players`} />;

  return (
    <div className="panel">
      <img
        className="avatar"
        src={player.avatar}
        alt={`Avatar for ${player.name}`}
      />
      <h1 className="medium-header">{player.name}</h1>
      <h3 className="header">#{player.number}</h3>
      <div className="row">
        <ul className="info-list" style={{ marginRight: 80 }}>
          <li>Team</li>
          <div>
            <Link to={`/${player.teamId}`}>
              {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
            </Link>
          </div>
          <li>
            Position<div>{player.position}</div>
          </li>
          <li>
            PPG<div>{player.ppg}</div>
          </li>
        </ul>
        <ul className="info-list">
          <li>
            APG<div>{player.apg}</div>
          </li>
          <li>
            SPG<div>{player.spg}</div>
          </li>
          <li>
            RPG<div>{player.rpg}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Player;
