import { useNavigate } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { AppContext } from "../Context/createContext";
import { useContext, useState } from "react";
import RightDrawer from "./Drawer";

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };
    const navigate = useNavigate();
    const { quantity } = useContext(AppContext);

    return (
        <header className="bg-gradient-to-tl from-amber-400 p-4 shadow-lg h-[10vh] w-[100%]">
            <div className="text-3xl flex justify-between">
                <div onClick={() => navigate("/")} className="hover:cursor-pointer" >WebApp</div>
                <nav>
                    <ul className="flex gap-4 text-xl items-center ">
                        <li className="hover:text-blue-500 hover:cursor-pointer" onClick={() => navigate("/")}>Home</li>
                        <li className="hover:text-blue-500 hover:cursor-pointer">About</li>
                        <li className="hover:text-blue-500 hover:cursor-pointer">Contact Us</li>
                        <li className="hover:text-blue-500 hover:cursor-pointer">Sign in</li>
                        <li className="mt-2 flex items-center gap-1 hover:cursor-pointer" onClick={toggleDrawer(true)}><FaCartShopping /> <span>{quantity}</span> </li>
                    </ul>

                </nav>
                <RightDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

            </div>
        </header>

    )
}

export default Header
