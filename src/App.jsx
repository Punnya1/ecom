import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Checkout from "./Pages/Checkout"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App

