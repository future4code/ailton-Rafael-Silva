import React from "react";
import {goToListTripsPage, goToLoginPage} from '../../routes/coordenadas';
import {useHistory} from 'react-router-dom';
import {Botoes} from './styled';

const HomePage = () => {
    const history = useHistory()
    return (
        <>
        <h1>LABEX</h1>
        <Botoes>
            <button onClick={() => goToListTripsPage(history)}>Ver Viagens</button>
            <button onClick={() => goToLoginPage(history)}>Área Admin</button>
        </Botoes>
        </>
    )
}

export default HomePage