import api from "../../api/axiosClient"

export default function CheckoutPage(){

 const placeOrder = async()=>{

  await api.post("/orders",{
   userId:1,
   totalAmount:200
  })

 }

 return(
  <button onClick={placeOrder}>
   Place Order
  </button>
 )
}