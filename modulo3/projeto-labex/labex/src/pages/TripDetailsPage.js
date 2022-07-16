import React from 'react'
import { useHistory, useParams } from "react-router-dom"
import useProtectedPage from '../Hook/useProtectedPage'
import {useRequestData} from '../Hook/useRequestData'
import { goToAdminHomePage } from '../routes/coordenadas'
import CandidateCard from '../components/Card/CandidatosCard'
import { TripDataContainer, TripScreenContainer } from "./styled"

const TripDetailsPage = () => {
    useProtectedPage()
    const history = useHistory()
    const { id } = useParams()
    const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)

    const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((c) => {
        return <CandidateCard key={c.id} candidate={c} tripId={id} getTripDetails={getTripDetails} />
    })

    const approvedCandidates = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((c) => {
        return <li key={c.id}>{c.name}</li>
    })

    return (
        <TripScreenContainer>

            {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
            {tripDetails && tripDetails.trip && <TripDataContainer>
                <p><b>Nome:</b> {tripDetails.trip.name}</p>
                <p><b>Descrição:</b> {tripDetails.trip.description}</p>
                <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
                <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
                <p><b>Data:</b> {tripDetails.trip.date}</p>
            </TripDataContainer>}
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>

            <h2>Candidatos Pendentes</h2>
            {candidates && candidates.length > 0 ? candidates : <p>Não há candidatos pendentes</p>}

            <h2>Candidatos Aprovados</h2>
            {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados</p>}
        </TripScreenContainer>
    )
}

export default TripDetailsPage