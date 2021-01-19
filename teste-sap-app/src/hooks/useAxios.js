import axios from 'axios'


export function useAxios(contextUrl, headers) {
    const baseUrl = contextUrl ? `${contextUrl}` : ''

    const instance = axios.create({
        baseURL: 'http://localhost:8100/teste-sap/report',
        headers,
    })

    return instance
}