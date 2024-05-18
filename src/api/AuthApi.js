import apiClient from "./apiClient"

const ENDPOINT = "auth"

export const login = (data) => {
    return apiClient.post(ENDPOINT, data)
}