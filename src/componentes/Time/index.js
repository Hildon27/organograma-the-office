import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && <section className="time" style={{ backgroundColor: hexToRgba(props.cor, "0.6")}}>
      <input onChange={evento => props.mudarCorSecundariaTime(evento.target.value, props.id)} value={props.cor}type="color" className="input-cor"/>
      <h3 style={{ borderBlockColor: props.cor }}>{props.nome}</h3>
      <div className="colaboradores"> 
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.valorNome}
            nome={colaborador.valorNome}
            id={colaborador.id}
            cargo={colaborador.valorCargo}
            img={colaborador.valorImg}
            corDeFundo={props.cor}
            aoDeletar={props.aoDeletar}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
