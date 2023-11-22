import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createcart } from "./cart/cartslice";



function Image(){

const id = useParams();
const dispatch = useDispatch()

    const product = useSelector((state)=>state.products.item);
  

    
    const productdetail = product.filter((item)=>{
        return item._id === id.id
    })


    return(
    
        <div className=" w-full h-[1000px] md:h-[850px] mt-4">

     {
        productdetail && productdetail.map((item,i)=>{
return <div key={i} className=" flex justify-center items-center flex-col gap-7">

   <div>
       <img src={item.image} alt="product" className=" md:w-[900px] md:h-[400px] object-cover rounded-md"></img>
   </div>

   <div className=" flex justify-center items-center md:gap-[100px] gap-3  object-cover mt-4">
    
    {
       item.images ? item.images.map((items,i)=>{
            return   <div key={i}>
            <img src={items} className=" md:w-[150px] md:h-[150px] w-[300px] h-[100px] object-cover rounded-sm" alt="productimage"></img>
          
            </div>
        }) :null
    }
       </div>


   <div className="flex justify-center items-center gap-3 flex-col">

<h2 className=" font-Inter flex justify-center items-center font-semibold">{item.title}</h2>
<p className=" font-Inter text-md w-[300px]">{item.description}</p>
<h2 className=" font-Inter text-2xl">₹{item.price}</h2>
<button className=" w-[200px] h-[50px] bg-green-600 font-Inter flex justify-center items-center text-white rounded-md" onClick={()=>dispatch(createcart({title:item.title, image:item.image, price:item.price,description:item.description}))}> Add to Cart</button>

   </div>


</div>
        })
     }
    
    
        </div>// paren div

        
    )
}
export default Image;