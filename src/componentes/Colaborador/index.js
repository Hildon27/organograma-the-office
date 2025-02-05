import "./Colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Colaborador = (props) => {
  function favoritar() {
    props.aoFavoritar(props.id);
  }

  return (
    <div className="colaborador">
      <IoIosCloseCircle
        size={25}
        className="deletar"
        onClick={() => props.aoDeletar(props.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src={props.img} alt={props.nome} />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
        <div className="favoritar">
          {props.favorito ? (
            <GoHeartFill size={20} onClick={favoritar} color="#FF0000"/>
          ) : (
            <GoHeart size={20} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
