import { useState } from "react"
import { AppContext } from "./createContext";

export const AppProvider = ({ children }) => {

    const [quantity, setQuantity] = useState(0);
    const [cartItems, setCartItems] = useState(['']);
    const [cartProduct, setCartProducts] = useState([''])

    return <AppContext.Provider value={{ quantity, setQuantity, cartItems, setCartItems, cartProduct, setCartProducts }}>{children}</AppContext.Provider>
}