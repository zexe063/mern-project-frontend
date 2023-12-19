


import {boxicons} from "boxicons"
import { useSelector } from "react-redux";



import { Link,NavLink } from "react-router-dom";

function Header() {


    const cart = useSelector((state)=>state.cart.cartitem);


 

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.199643987.1698675769&semt=ais"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                    <Link
                        to="/auth/signup"
                        className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        signup
                    </Link>
                        <Link
                            to="/cart"
                            className="text-white font-medium text-2xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none font-Inter"
                        >
                    
                         <box-icon name='cart-add'></box-icon>
                        </Link>
                        <span className="w-[20px] h-[20px]  bg-slate-950 rounded-full relative right-10 bottom-3 text-white  flex  justify-center items-center font-Inter text-[10px]">{cart.length}</span>
                        <NavLink className=" w-[100px] h-[40px] bg-blue-900 rounded-md flex justify-center items-center text-white font-Inter" to="/myorder">My Order</NavLink>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to=""
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/about"
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    about
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/contact"
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    contact
                                </NavLink>
                            </li>

                           

                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;