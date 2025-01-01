import { BASE_API_URL } from "./constants";

type HttpMethod = 'GET' | 'POST'

interface FetchOptions {
    headers?: Record<string, string>
    //add any other option here that may be needed in the future
}

export const httpClient = async (
    url: string,
    method: HttpMethod = 'GET',
    body?: object,
    options: FetchOptions = {}
) => {
    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...options.headers
        }

        const fetchUrl = BASE_API_URL + url

        const fetchOptions: RequestInit = {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        }

        const response = await fetch(fetchUrl, fetchOptions)
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data

    } catch (e) {
        console.log("An error occured while making the api call: ", e)
        return null
    }
}