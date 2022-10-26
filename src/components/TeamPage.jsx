import { Link, useParams } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import useTeamArticles from "../hooks/useTeamsArticles";
import useTeam from "../hooks/useTeam";
import TeamLogo from "./TeamLogo";
import { slugify } from "../utils";
import Loading from "./Loading";

function useTeamPageData(teamId) {
  const { loading: loadingTeamArticles, response: teamArticles } =
    useTeamArticles(teamId);
  const { loading: loadingTeamNames, response: teamNames } =
    useTeamNames(teamId);
  const { loading: loadingTeam, response: team } = useTeam(teamId);

  return {
    teamArticles,
    teamNames,
    team,
    loading: loadingTeam || loadingTeamArticles || loadingTeamNames,
  };
}

function TeamPage() {
  const { teamId } = useParams();
  const { teamArticles, team, teamNames, loading } = useTeamPageData(teamId);

  if (loading) {
    return <Loading />;
  }

  if (!teamNames.includes(teamId)) {
    return <h1 className="text-center"> The {teamId} is not a valid value</h1>;
  }

  return (
    <div className="panel">
      <TeamLogo id={teamId} />
      <h1 className="medium-header">{team.name}</h1>
      <h4 style={{ margin: 5 }}>
        <Link to={{ pathname: "/players", search: `&teamId=${teamId}` }}>
          View Roster
        </Link>
      </h4>
      <ul className="championships ">
        {team.championships.map((championship) => {
          return <li key={championship}>{championship}</li>;
        })}
      </ul>

      <ul className="info-list row" style={{ width: "100%" }}>
        <li>
          Est.<div>{team.established}</div>
        </li>
        <li>
          Manager<div>{team.manager}</div>
        </li>

        <li>
          Coach<div>{team.coach}</div>
        </li>

        <li>
          record
          <div>
            {team.wins} - {team.losses}
          </div>
        </li>
      </ul>

      <ul className="articles">
        {teamArticles.map((article) => {
          return (
            <li key={article.id}>
              <h4>
                <Link to={`articles/${slugify(article.title)}`}>
                  {article.title}
                </Link>
              </h4>
              <div className="article-date">
                {new Date(article.date).toLocaleDateString()}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeamPage;
