import Banner from "./componentes/Banner/index.js";
import Formulario from "./componentes/Formulario/index.js";
import { useState } from "react";
import Time from "./componentes/Time/index.js";
import { theOfficeCharacters} from "./utils"
import Footer from "./componentes/Footer/index.js";

function App() {
  const times = [
    {
      nome: "Gerente Regional",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Assistente do Gerente Regional",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Vendas",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Recepção",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Contabilidade",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Armazém",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
  ];

  const [colaboradores, setColaboradores] = useState(theOfficeCharacters);

  const novoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = () => {
    console.log("por favor aparece")
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarColaborador={(colaborador) =>
          novoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.valorTime === time.nome)}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
