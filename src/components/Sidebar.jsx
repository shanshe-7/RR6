import { Link, useLocation } from "react-router-dom";
import { slugify } from "../utils";

function CustomLink({ to, children }) {
  const location = useLocation();
  const split = location.pathname.split("/");
  const match = split[split.length - 1] === to;

  const styles = match ? { fontWight: 900, color: "var(--white)" } : {};

  return (
    <Link
      style={{ ...styles }}
      to={{
        pathname: to,
        search: location.search,
      }}
    >
      {children}
    </Link>
  );
}

function SideBar({ title, list }) {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => {
          return (
            <CustomLink key={item} to={slugify(item)}>
              {item.toUpperCase()}
            </CustomLink>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
