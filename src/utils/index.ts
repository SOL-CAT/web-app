const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const isValidEmail = (email: string): boolean => emailRegex.test(email)
