import React from 'react';
import './CardPequeno.css'

export function CardPequeno(props) {
    return (
        <div className="cardpequeno-container">
            <div>
            <p>{ props.email }</p>
            <p>{ props.Endereço }</p>
            </div>
        </div>
    )
}

