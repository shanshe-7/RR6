import { Outlet } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import Loading from "./Loading";
import SideBar from "./Sidebar";

function Teams() {
  const { response: names, loading } = useTeamNames();
  if (loading) return <Loading />;
  return (
    <div className="container two-column">
      <SideBar title="Teams" list={names} />
      <Outlet />
    </div>
  );
}

export default Teams;
