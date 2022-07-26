import React from "react";
import './CardPequeno.css'

function CardPequeno (props) {
  return (
    <div className="small-container ">
        <img src={props.imagem} />
        <p>{props.endereco}</p>
        <p>{props.email}</p>
    </div>
  )  
}

export default CardPequeno