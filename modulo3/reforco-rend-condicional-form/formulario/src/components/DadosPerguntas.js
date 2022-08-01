import React from "react";

export default function DadosPerguntas(props) {
  return (
    <div>
      <p>{props.input}</p>
      <input onChange={props.onChange} value={props.value} />
    </div>
  );
}
