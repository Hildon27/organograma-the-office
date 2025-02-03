import Banner from "./componentes/Banner/index.js";
import Formulario from "./componentes/Formulario/index.js";
import { useState } from "react";
import Time from "./componentes/Time/index.js";
import { theOfficeCharacters} from "./utils"
import Footer from "./componentes/Footer/index.js";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Gerente Regional",
      cor: "#57C278",
    },
    {
      nome: "Assistente do Gerente Regional",
      cor: "#82CFFA",
    },
    {
      nome: "Vendas",
      cor: "#E06B69",
    },
    {
      nome: "Recepção",
      cor: "#DB6EBF",
    },
    {
      nome: "Contabilidade",
      cor: "#FFBA05",
    },
    {
      nome: "Armazém",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState(theOfficeCharacters);

  const novoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = () => {
    console.log("por favor aparece")
  }

  function mudarCorTime(novaCor, nomeTime) {
    setTimes(times.map(time => {
        if(time.nome=== nomeTime) {
            time.cor = novaCor;
        }
        return time;
    }));
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
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.valorTime === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCorSecundariaTime={mudarCorTime}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
