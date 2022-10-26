import { Outlet, useParams } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Loading from "./Loading";
import SideBar from "./Sidebar";

function Articles() {
  const { teamId } = useParams();
  const { response: articles, loading } = useTeamsArticles(teamId);

  if (loading) return <Loading />;

  return (
    <div className="container two-column">
      <SideBar
        title="Articles"
        list={articles.map((article) => article.title)}
      />
      <Outlet />
    </div>
  );
}

export default Articles;
