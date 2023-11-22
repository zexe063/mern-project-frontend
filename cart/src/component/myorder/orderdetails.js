import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetcher, useParams } from "react-router-dom";
import { deleteorder, getorder } from "./myoderslice";





function Orderdetails(){
const id = useParams();


const dispatch = useDispatch()
useEffect(()=>{
     dispatch(getorder())
},[])
const order = useSelector((state)=>state.order.orderitem);


const data = order.filter((item)=>{
return item._id === id.id;

})







    return(
      
        <div className=" w-full h-[500px] bg-another-white flex items-center justify-center flex-col">
        
        {
            data.map((item, i)=>{
                return <div className=" md:w-[90%] w-[98%] h-auto   flex flex-col bg-white" key={i}> 

                    <div key={i} className="flex w-full h-auto rounded-sm relative top-1 items-center md:gap-[40px] md:justify-around">

                <div className=" flex flex-col gap-1">
                    <h3 className=" font-Inter text-[10px] font-semibold text-another-blue"> order_id:{item._id}</h3>
                     <img src={item.image} alt="orderdetailimage" className=" md:w-[150px] md:h-[150px] object-cover md:mt-2 w-[70px] h-[70px]"></img>
                   
                </div>

                <div className=" md:w-[400px] h-auto flex md:flex-col gap-1 relative right-[100px]">
                    <p className=" font-Inter">{item.title}</p>
                    <p className=" font-Inter text-[11px] hidden md:block">{item.description}</p>
                </div>
        
                <div className=" relative right-[80px]">
                    <h3 className=" font-Inter">₹{item.price}</h3>
                </div>
                
                <div className=" flex justify-center items-center gap-2 relative right-[60px]">
                  <div className=" w-[30px]  h-[30px] rounded-md bg-another-blue flex justify-center  items-center">
                 <div className=" w-[20px] h-[20px]  bg-white rounded-full flex justify-center items-center">
                 <box-icon name='x' className=" w-[10px] h-[10px] bg-white text-[10px]" ></box-icon>
                    </div>
                    </div>

                    <button className=" font-Inter text-another-blue" onClick={()=>dispatch(deleteorder(item._id))}>Cancel</button>
                    </div>
                 </div>
{/* here end of the order action */}

<div className=" w-full h-[200px]">
            <div className="flex justify-center items-center w-full h-[100px]">
                <div className="w-[50px] h-[3px] md:w-[180px] md:h-[3px] bg-blue-900 rounded-tl-lg rounded-bl-lg"></div>
               <h2 className=" font-Inter bg-green-700 w-[30px]  h-[30px] rounded-full text-white text-center flex items-center justify-center ml-2 ">1</h2>
               <div className=" w-[100px] h-[3px] md:w-[300px] md:h-[3px] bg-black rounded-tl-lg rounded-bl-lg ml-3"></div>
               <h2 className=" font-Inter ml-2 bg-slate-300 w-[30px]  h-[30px] rounded-full text-white text-center flex items-center justify-center">2</h2>
               <div className="md:w-[300px] md:h-[3px] w-[100px] h-[3px] bg-black rounded-tl-lg rounded-bl-lg ml-3"></div>
               <h2 className=" font-Inter bg-slate-300 w-[30px]  h-[30px] rounded-full text-white text-center flex items-center justify-center md:w-[30px] ml-3">3</h2>
            
            </div>

            <div className=" flex justify-center items-center gap-[85px] md:gap-[190px]">
                <p className=" font-Inter text-[11px] font-semibold relative left-[5px] md:text-[14px] text-green-800">Order Confirmed</p>
                <p className=" font-Inter  text-[11px] font-semibold relative left-7 md:text-[14px] md:relative md:left-[80px]">Dispatch</p>
                <p className=" font-Inter  text-[11px] font-semibold md:text-[14px] md:relative md:left-[170px]">Completed</p>
            </div>
            </div>

            <div className=" ml-10 mb-10">
                <p className=" font-Inter text-[14px] text-green-900">*Your oder Completed in next 15 working days</p>
                </div>
          
                 </div>

                
            })
        }

     
        
          

        </div>// orderdetails parents
    )
}
export default Orderdetails;