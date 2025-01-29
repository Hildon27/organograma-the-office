import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {


  const [valorNome, setNome] = useState("");
  const [valorCargo, setCargo] = useState("");
  const [valorImg, setImg] = useState("");
  const [valorTime, setTime] = useState("");

  const times = props.times;

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.cadastrarColaborador(
      {
        valorNome,
        valorCargo,
        valorImg,
        valorTime
      }
    )
    setNome("")
    setCargo("")
    setImg("")
    setTime("")
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto valor={valorNome} aoAlterar={valor => setNome(valor)}obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto valor={valorCargo} aoAlterar={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto valor={valorImg} aoAlterar={valor => setImg(valor)} label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa valor={valorTime} aoAlterar={valor => setTime(valor)} obrigatorio={true} label="Time" itens={times}/>
        <Botao texto="Criar card" />
      </form>
    </section>
  );
};

export default Formulario;
