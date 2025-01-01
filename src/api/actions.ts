import { httpClient } from "."

export const saveUserEmail = async (email: string) => {
    const res = await httpClient('api/users', 'POST', {email})
    if(res && res.success && res.data) return res.data.id
    else return null
}