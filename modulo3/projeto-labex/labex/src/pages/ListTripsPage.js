import React from "react"
import TripCard from "./tripCard"
import useRequestData from "../useRequest/useRequestData"
import {goToHomePage, goToApplicationFormPage} from '../routes/coordenadas'
import { useHistory } from "react-router-dom";
import {Botoes,  ListScreenContainer} from "./styled"

const ListTripsPage = () => {
    const [tripsData] = useRequestData("/trips",{})
    const history = useHistory()

    const tripsList = tripsData.trips &&  tripsData.trips.map((t) => {
        return <TripCard key={t.id} trip={t} />
    })

        return (
            <ListScreenContainer>
                <Botoes>
                    <button onClick={() => goToHomePage(history)}>Voltar</button>
                    <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>         
                </Botoes>
                <h2>Lista de Viagens</h2>
                {tripsList && tripsList.length > 0 ? tripsList : <p>Loading...</p>}
         </ListScreenContainer>



        )
    
}
export default ListTripsPage