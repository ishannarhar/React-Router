import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/quotes">All Quotes</Link>
          </li>
          <li>
            <Link to="/newquotes">New Quotes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
