
import { useSelector} from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getorder } from "./myoderslice";
import { NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";



function Order(){
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getorder())
    },[])

    const order =  useSelector((state)=>state.order.orderitem);
    
    const Loading =  useSelector((state)=>state.order.Loading)
    



    return(
Loading ? <div className=" flex justify-center items-center w-full h-[600px]"><ClipLoader color="#36d7b7" /> </div> :<div className=" flex flex-col md:gap-5 gap-2 w-full h-auto bg-another-white mt-2 mb-[30px]">

{
    order ? order.map((item,i)=>{
     return<NavLink key={i} to={`/myorder/${item._id}`}> <div className=" bg-white shadow-2xl md:w-[80%] w-full h-[120px] rounded-sm flex md:gap-[200px]  gap-3.5 justify-center items-center md:ml-[240px]" key={i}>
     <div>
         <img src={item.image} alt="orderproduct" className=" w-[90px] h-[80px] object-cover"></img>
     </div>
     <div className=" w-[200px]">
         <h3 className=" font-Inter">{item.title}</h3>
     </div>
     <div>
         <p className=" font-Inter">₹{item.price}</p>
     </div>

     <div className=" flex flex-col  gap-3">
         <p className=" font-Inter">Delivery Excepted by 7 working days</p>
         <h3 className=" font-Inter font-semibold text-[10px]">order_id: {item._id}</h3>
     </div>
 </div>
 </NavLink> 
    }) : null
}

</div>

    )
}

export default Order