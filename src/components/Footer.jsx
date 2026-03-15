import "./Footer.css";

function Footer({ name }) {
  return (
    <footer className="footer">
      <p>
        Designed & Built by <span className="footer-name">{name}</span>
      </p>
      <p className="footer-year">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
