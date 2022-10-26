import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./Loading";
const Navbar = lazy(() => import("./Navbar"));
const Article = lazy(() => import("./Article"));
const Articles = lazy(() => import("./Articles"));
const Home = lazy(() => import("./Home"));
const Instruction = lazy(() => import("./Instruction"));
const Player = lazy(() => import("./Player"));
const Players = lazy(() => import("./Players"));
const Team = lazy(() => import("./Team"));
const TeamPage = lazy(() => import("./TeamPage"));
const Teams = lazy(() => import("./Teams"));

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<div>Page not found</div>} />

            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />}>
              <Route path=":name" element={<Player />} />
              <Route
                path=""
                element={<Instruction>Select a player</Instruction>}
              />
            </Route>
            <Route path="/teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route
                path=""
                element={<Instruction>Select a team</Instruction>}
              />
            </Route>

            <Route path="/:teamId" element={<TeamPage />} />
            <Route path="/:teamId/articles" element={<Articles />}>
              <Route path=":articleId" element={<Article />} />
              <Route
                path=""
                element={<Instruction>Select an article</Instruction>}
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
