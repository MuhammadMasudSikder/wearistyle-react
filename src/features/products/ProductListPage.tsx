import { useEffect,useState } from "react"
import { getProducts } from "../../services/productService"
import ProductCard from "../../components/ProductCard"

export default function ProductListPage(){

 const [products,setProducts] = useState([])

 useEffect(()=>{
  getProducts().then(setProducts)
 },[]) // run once after mount

 return(

 <div className="grid grid-cols-4 gap-6">

  {products.map((p:any)=>(
   <div key={p.id}>

    {/* 
       
    <img src={`${axiosClient.defaults.baseURL}${p.imagePath}`}/>
    <h2>{p.name}</h2>
    <p>${p.price}</p> */}

    <ProductCard key={p.id} product={p} />

   </div>
  ))}

 </div>

 )
}