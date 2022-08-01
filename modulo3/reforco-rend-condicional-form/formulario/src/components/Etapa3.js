import React from "react";
import DadosOpcoes from "./DadosOpcoes";
import DadosPerguntas from "./DadosPerguntas";

class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <DadosPerguntas input={"5. Por que você não terminou um curso de graduação?"}
                 />
                <DadosOpcoes input={"6. Você fez algum curso complementar?"}
                    opcoes={[
                        "Nenhum",
                        "Curso Técnico",
                        "Curso de Inglês"
                    ]}
                />
            </div>
        )
    }
}
export default Etapa3