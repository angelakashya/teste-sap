import axios from 'axios'
import { useAxios } from './useAxios'



export function useReportApi() {

    const axiosInstance = useAxios()
    async function reportList() {
        const response = axiosInstance.get("")

        console.log(response);
        return response
    }

    async function report(title, text) {
        return await axiosInstance.post("", report)

    }
}