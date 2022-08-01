import React from "react";
import DadosPerguntas from "./DadosPerguntas";

class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <DadosPerguntas input={"5. Qual curso?"} />
                <DadosPerguntas input={"6. Qual a unidade de ensino?"} />
            </div>
        )
    }
}
export default Etapa2