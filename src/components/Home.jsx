import { Link, useLocation } from "react-router-dom";
import TeamLogo from "./TeamLogo";
import useTeamNames from "../hooks/useTeamNames";
import Loading from "./Loading";

function Home() {
  const location = useLocation();

  console.log(location);

  const { loading, response: teamNames } = useTeamNames();

  if (loading) return <Loading />;

  return (
    <div className="container">
      <h1 className="large-header">Hash History Basketball League</h1>
      <h3 className="header text-center">Select a team</h3>

      <div className="home-grid">
        {teamNames.map((id) => {
          return (
            <Link key={id} to={`/${id}`}>
              <TeamLogo id={id} width="125px" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
