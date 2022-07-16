import React from 'react'
import useProtectedPage from '../../Hook/useUnprotectedPage'
import { useHistory } from 'react-router-dom'
import {logout} from "../../components/solicita"
import { goToCreateTripPage, goToHomePage } from '../../routes/coordenadas'
import {Botoes , AdminHomeScreenContainer } from "./styled"
import {useRequestData} from '../../Hook/useRequestData'
import AdminTripCard from "../../components/Card/AdminTripCard"

const AdminHomePage = () => {
    useProtectedPage()
    const history = useHistory()
    const [tripsData, getTrips] = useRequestData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <AdminTripCard key={t.id} name={t.name} id={t.id} getTrips={getTrips} />
    })

    return (
        <AdminHomeScreenContainer>
            <h1>Painel Administrativo</h1>
            <Botoes>
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
                <button onClick={() => logout(history)}>Logout</button>
            </Botoes>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
        </AdminHomeScreenContainer>
    )
}

export default AdminHomePage