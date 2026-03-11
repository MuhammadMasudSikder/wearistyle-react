import axios from "axios"

const axiosClient  = axios.create({
 baseURL: "https://localhost:7224",
 headers: {
    "Content-Type": "application/json"
  }
})

/* Request Interceptor */
axiosClient.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosClient