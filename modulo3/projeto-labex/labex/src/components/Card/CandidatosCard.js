import React from "react"
import { CardContainer, Botoes } from '../../pages/styled'
import { decideCandidate } from '../../components/solicita'

const CandidateCard = (props) => {
    const { id, applicationText, profession, age, name, country } = props.candidate

    const decide = (decision) => {
        decideCandidate(props.tripId, id, decision, props.getTripDetails)
    }

    return (
        <CardContainer>
            <p><b>Nome:</b> {name}</p>
            <p><b>Profissão:</b> {profession}</p>
            <p><b>Idade:</b> {age}</p>
            <p><b>País:</b> {country}</p>
            <p><b>Texto de Candidatura:</b> {applicationText}</p>
            <Botoes>
                <button onClick={() => decide(true)}>Aprovar</button>
                <button onClick={() => decide(false)}>Reprovar</button>
            </Botoes>

        </CardContainer>
    )
}

export default CandidateCard