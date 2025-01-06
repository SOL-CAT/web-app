import { httpClient } from "."

export const saveUserEmail = async (email: string) => {
    const res = await httpClient('api/users', 'POST', {email})
    if(res) return res
    else return null
}