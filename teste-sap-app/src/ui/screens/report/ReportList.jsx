import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'
import { useReportApi } from '../../../hooks/report.hook'
import { Card } from '../../components/card/Report-card.component'
import { Link } from 'react-router-dom'


export function ReportList() {
    const api = useReportApi()
    const [report, setReport] = useState("")

    useEffect(() => {
        async function getReports() {
            const response = await api.reportList()
            console.log(response);
            let result = response.data
            setReport(result)
        }
        getReports()
    }, [])

    return (
        <>
            <Link to="/report">
                <button>REPORT</button>
            </Link>
            <div className="table">
                {(report || []).map((report, index) =>
                    <Card title={report.title} >
                        <p>{report.text}</p>
                    </Card>
                )}
            </div>
        </>
    )
}