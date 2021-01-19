import axios from 'axios'

const reportApi = axios.create({
    baseURL: 'http://localhost:8100/teste-sap/report'
})

export function useReportApi() {

    async function reportList() {
        const result = await reportApi.get()

        return result.data
    }

    async function report(title, text) {
        return await reportApi.post("", report)

    }
}