import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div>
        <Link to={"/"}>Baz-ar</Link>
      </div>
      <Nav />
    </header>
  );
};
