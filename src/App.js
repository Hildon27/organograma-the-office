import Banner from "./componentes/Banner/index.js";
import Formulario from "./componentes/Formulario/index.js";
import { useState } from "react";
import Time from "./componentes/Time/index.js";
import { theOfficeCharacters } from "./utils";
import Footer from "./componentes/Footer/index.js";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Gerente Regional",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Assistente do Gerente Regional",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Vendas",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "Recepção",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Contabilidade",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Armazém",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState(theOfficeCharacters);

  const novoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  function mudarCorTime(novaCor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = novaCor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        cadastrarColaborador={(colaborador) =>
          novoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Time
          aoFavoritar={resolverFavorito}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          id={time.id}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.valorTime === time.nome
          )}
          aoDeletar={deletarColaborador}
          mudarCorSecundariaTime={mudarCorTime}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
