import { useParams, Link, Navigate } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import Loading from "./Loading";
import TeamLogo from "./TeamLogo";

function Team() {
  const { teamId } = useParams();
  const { loading, response: team } = useTeam(teamId);

  if (loading) return <Loading />;

  if (!team) return <Navigate to={`/teams`} />;

  return (
    <div className="panel">
      <div style={{ width: "100%" }}>
        <TeamLogo className="center" id={team.id} />
        <h1 className="medium-header">{team.name}</h1>
        <ul className="info-list row">
          <li>
            Est.<div>{team.established}</div>
          </li>
          <li>
            Manager<div>{team.manager}</div>
          </li>
          <li>
            Coach<div>{team.coach}</div>
          </li>
        </ul>
        <Link className="center btn-main" to={`/${teamId}`}>
          {team.name} Team Page
        </Link>
      </div>
    </div>
  );
}
export default Team;
