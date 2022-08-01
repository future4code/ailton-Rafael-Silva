import React from "react";

export default function DadosOpcoes(props) {
    return (
        <div>
            <p>{props.input}</p>
            <select>
            {props.opcoes.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
            </select>
        </div>
    )
}