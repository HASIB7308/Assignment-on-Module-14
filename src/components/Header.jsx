
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="My Website Logo" className="logo" />

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;