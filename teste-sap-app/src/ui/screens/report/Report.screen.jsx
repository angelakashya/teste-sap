import React, { useState } from 'react'
import { useReportApi } from '../../../hooks/report.hook'
import { Input } from '../../components/Input/input.component'
import { useGlobalUser } from '../../../context/index'
import { useHistory } from 'react-router-dom'


export function Report() {
    const api = useReportApi();

    const { _, setUsuario } = useGlobalUser()

    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const [error, setError] = useState()
    let hist = useHistory()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const report = {
                person: {
                    name: name,
                },
                title: title,
                text: text
            }
            const response = await api.report(title, text)
            setUsuario(response)
            hist.push('/report')
        } catch (error) {
            setError('Something went wrong')
        }
    }
    return (
        <>
            <div className="reportSumbit">
                <h1>Report</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        required
                        value={name}
                        handleChange={setName}
                    >
                    </Input>
                    <br></br>
                    <Input
                        type="text"
                        name="Title"
                        placeholder="Title"
                        required
                        value={title}
                        handleChange={setTitle}
                    >
                    </Input>
                    <br></br>
                    <Input
                        type="text"
                        name="R"
                        placeholder="Report"
                        required
                        value={text}
                        handleChange={setText}
                    >
                    </Input>
                    <button>Submit</button>
                    {error && <div className="erro">{error}</div>}
                </form>
            </div>
        </>
    )
}