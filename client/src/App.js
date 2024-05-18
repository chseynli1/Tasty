import MainContext from "./context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Wishlist from "./pages/Wishlist/Wishlist";
import Detail from "./pages/Detail/Detail";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import Footer from "./layout/Footer/Footer";
function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [filteredData, setFiltered] = useState([])
  const [wishlistItems, setWishlistItems] = useState(localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [])

  const searchByName = (e) => {
    const searching = e.target.value.trim().toLowerCase()
    if (searching == "") {
      setData([...filteredData])
    } else {
      const search = data.filter(item => item.name?.trim().toLowerCase().includes(searching))
      setData([...search])
    }
  }

  const handleSort = (e) => {
    const sort = e.target.value
    if (sort == "Default") {
      setData([...filteredData])
    } else if (sort == "az") {
      const sortAZ = data.sort((a, b) => a.name?.localeCompare(b.name))
      setData([...sortAZ])
    } else if (sort == "za") {
      const sortZA = data.sort((a, b) => b.name?.localeCompare(a.name))
      setData([...sortZA])
    } else if (sort == "09") {
      const sort09 = data.sort((a, b) => a.price - b.price)
      setData([...sort09])
    } else if (sort == "90") {
      const sort90 = data.sort((a, b) => b.price - a.price)
      setData([...sort90])
    }
  }

  const addToWishlist = (item) => {
    const target = wishlistItems.find(wishlistItem => wishlistItem._id == item._id)
    if (target) {
      alert("Bu item wishlistde var")
    } else {
      setWishlistItems([...wishlistItems, item])
      localStorage.setItem("wishlistItems", JSON.stringify([...wishlistItems, item]))
      toast.success("Item wishliste elave olundu")
    }
  }

  const removeFromWishlistItem = (id) => {
    const target = wishlistItems.find(wishlistItem => wishlistItem._id == id)
    wishlistItems.splice(wishlistItems.indexOf(target), 1)
    setWishlistItems([...wishlistItems])
    localStorage.setItem("wishlistItems", JSON.stringify([...wishlistItems]))
    toast.success("item wishlistden silindi")
  }

  const deleteHandle = (id) => {
    axios.delete(`http://localhost:8080/tasty/${id}`).then(res => {
      const deleteData = data.filter(item => item._id !== id)
      setData(deleteData)
      setFiltered(deleteData)
    })
  }

  const value = {
    data, setData, error, setError, loading, setLoading, filteredData, setFiltered, wishlistItems, setWishlistItems, searchByName, handleSort, addToWishlist, removeFromWishlistItem, deleteHandle
  }

  useEffect(() => {
    axios.get("http://localhost:8080/tasty").then(res => {
      setData(res.data)
      setFiltered(res.data)
    })
  }, [])

  return (
    <div className="App">
      <MainContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/:id" element={<Detail />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        <Toaster />
      </MainContext.Provider>
    </div>
  );
}

export default App;
