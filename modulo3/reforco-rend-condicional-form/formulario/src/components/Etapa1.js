import React from "react";
import DadosOpcoes from "./DadosOpcoes";
import DadosPerguntas from "./DadosPerguntas";

class Etapa1 extends React.Component {
    render() {
        return (

            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <DadosPerguntas input={"1. Qual o seu nome?"} />
                <DadosPerguntas input={"2. Qual sua idade?"} />
                <DadosPerguntas input={"3. Qual seu email?"} />
                <DadosOpcoes input={"4. Qual a sua escolaridade"}
                    opcoes={[
                        "Ensino Médio Incompleto",
                        "Ensino Médio Completo",
                        "Ensino Superior Incompleto",
                        "Ensino Superior Completo",
                    ]}
                />
            </div>

        )
    }
}
export default Etapa1