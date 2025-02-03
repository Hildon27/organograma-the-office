import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icones">
        <a href="https://github.com/Hildon27" rel="noopener noreferrer" target="_blank">
          <FaGithub size={30}/>
        </a>
        <a href="https://www.instagram.com/hildonregisneto/" rel="noopener noreferrer" target="_blank">
          <FaInstagram size={30}/>
        </a>
      </div>
      <div className="logo">
        <img src="/imagens/logo.png" alt="Logo Organo"></img>
      </div>
      <div className="footer-text">
        <h5>Desenvolvido por Hildon27</h5>
      </div>
    </footer>
  );
};

export default Footer;