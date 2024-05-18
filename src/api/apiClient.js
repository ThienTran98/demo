import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
})

apiClient.interceptors.request.use((config) => {

})

apiClient.interceptors.response.use((response) => {

})

export default apiClient