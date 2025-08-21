import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header mt-3">
      <nav>
        <ul className="nav d-flex gap-3 align-items-center">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/calendar">Calendar/Plans</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/team">Team work</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/personal">Personal</Link></li>
          <div>
            <button className="btn text-white bg-primary">Sign Up</button>
            <button className="btn text-white bg-secondary">Sign In</button>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
