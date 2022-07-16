import React from 'react'
import useProtectedPage from '../../Hook/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { goToAdminHomePage } from '../../routes/coordenadas'
import useForm from "../../Hook/useForm"
import { createTrip } from "../../components/solicita"
import { Botoes } from "../styled"
import { planets } from '../../constants/planets'

const CreateTripPage = () => {
    useProtectedPage()
    const history = useHistory()
    const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const onClickCreate = (e) => {
        e.preventDefault()
        createTrip(form, clear)
    }

    const today = new Date()
    const stringToday = today.getFullYear() + "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) + "-"
    + ("0" + today.getDate()).substr(-2)

    return (
        <div>
            <h1>Criar Viagem</h1>
            <form onSubmit={onClickCreate}>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                    required
                />
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                    min={stringToday}
                />
                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O nome deve ter no mínimo 30 caracteres"}
                />
                <input
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                    min={50}
                />
                <Botoes>
                    <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
                    <button type={"submit"}>Criar</button>
                </Botoes>
            </form>
        </div>
    )
}

export default CreateTripPage
