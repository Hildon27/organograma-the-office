import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icones">
        <a href="https://github.com/Hildon27" rel="noopener noreferrer" target="_blank">
          <img src="/imagens/github.png" alt="Icone Github"></img>
        </a>
        <a href="https://www.instagram.com/hildonregisneto/" rel="noopener noreferrer" target="_blank">
          <img src="/imagens/ig.png" alt="Icone Instagram"></img>
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