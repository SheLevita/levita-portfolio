
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="header">
        <h2 className="logo">Shereena's Portfolio</h2>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 Shereena's Portfolio</p>
      </footer>
    </>
  );
}

export default Layout;
