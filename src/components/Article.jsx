import { Navigate, useParams } from "react-router-dom";
import useArticle from "../hooks/useArticle";
import Loading from "./Loading";

function Article() {
  const { teamId, articleId } = useParams();
  console.log(teamId, articleId);
  const { loading, response: article } = useArticle({ teamId, articleId });

  if (loading) return <Loading />;

  if (!article) return <Navigate to={`/${teamId}/articles`} />;

  return (
    <div className="panel">
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
}
export default Article;
