import { Outlet, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import Loading from "./Loading";
import SideBar from "./Sidebar";

function Players() {
  const [searchParams] = useSearchParams();

  const team = searchParams.get("teamId");

  const { response: playerNames, loading } = usePlayerNames(team);

  if (loading) return <Loading />;
  return (
    <div className="container two-column">
      <SideBar title="Players" list={playerNames} />
      <Outlet />
    </div>
  );
}

export default Players;
