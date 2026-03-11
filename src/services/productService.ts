import axiosClient  from "../api/axiosClient"

export const getProducts = async () => {
 const res = await axiosClient .get("/api/product")
 return res.data
}

export const getProduct = async (id:number) => {
 const res = await axiosClient .get(`/api/product/${id}`)
 return res.data
}