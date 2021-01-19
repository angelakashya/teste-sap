import React, { useState } from 'react'
import { useReportApi } from '../../../hooks/report.hook'
import { Input } from '../../components/Input/input.component'


export function Report() {
    const api = useReportApi();

    const [report, setReport] = useState("")

    return (
        <>
            <div className="reportSumbit">
                <h1>Report</h1>
                <form onSubmit="handle">
                    <Input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        required
                        value=""
                        handleChange=""
                    >
                    </Input>
                    <br></br>
                    <Input
                        type="text"
                        name="Title"
                        placeholder="Title"
                        required
                        value=""
                        handleChange=""
                    >
                    </Input>
                    <br></br>
                    <Input
                        type="text"
                        name="R"
                        placeholder="Report"
                        required
                        value=""
                        handleChange=""
                    >
                    </Input>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}