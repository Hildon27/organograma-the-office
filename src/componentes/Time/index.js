import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderBlockColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores"> 
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.valorNome}
            nome={colaborador.valorNome}
            cargo={colaborador.valorCargo}
            img={colaborador.valorImg}
            corDeFundo={props.corPrimaria}
            aoDeletar={props.aoDeletar}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
