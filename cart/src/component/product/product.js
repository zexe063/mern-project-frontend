

import { sortproduct } from "./productslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import { Link, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

// import  { createcart } from "../cart/cartslice";



function Productdata(){



       
    
const dispatch = useDispatch()
// useEffect(()=>{
//     dispatch(getproduct())
// },[])
const product  = useSelector(state=>state.products.item);

function selectvalue(e){
  console.log(e.target.value)
 dispatch(sortproduct(e.target.value));
}

return(

   
<div>

<div>
<img src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-women-shopping-bags_23-2148786754.jpg?size=626&ext=jpg&ga=GA1.1.199643987.1698675769&semt=ais" className=" md:w-full md:h-[500px] "></img>
</div>

{/* here the product start */}


<div className=" bg-another-white w-full  h-auto">

  <div className=" flex justify-end p-2">
    <select className=" font-Inter p-2 rounded-md md:p-3 md:rounded-md" onChange={selectvalue}>
    
    <option>sort</option>
      <option value="price:ascending">decraese</option>
      <option  value="price:descending">Increase</option>
    </select>
  </div>

{/* here  start the map of the product */}

<div className=" w-full h-auto inline-grid md:grid-cols-7 md:grid-rows-5 place-content-center items-center grid-cols-2 gap-5">
{
  product && product.map((item,i)=>{
  return  <NavLink to={`/product/${item._id}`} key={i}>
<div className=" md:w-[190px] md:h-[280px]  bg-white  shadow-2xl flex justify-center items-center flex-col rounded-lg p-2">
  <div>
    <img src={item.image} alt="products" className=" md:w-[100px] md:h-[100px]  object-cover w-[110px] h-[110px]"></img>
  </div>

  <div className=" flex justify-center  items-center flex-col font-Inter">
  <p>{item.title}</p>
  <h3>₹{item.price}</h3>
  </div>
  
</div>
</NavLink>

  
  })
}
</div>



</div>



</div>// parnet



)
 

   
   
}


export default Productdata;