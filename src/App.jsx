import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/pages/itemList/ItemListContainer"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer"
import NavbarContainer from "./components/layout/navbar/NavbarContainer"
import CartContainer from "./components/pages/cart/CartContainer"

function App() {

  return (
   <BrowserRouter>
    <Routes>
      {/* path "/" hace regerencia al Home u element renderiza el componente */}
      <Route element={<NavbarContainer/>}>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
        <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartContainer/>}/>
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1> }/>
            

    </Routes>
   </BrowserRouter>
  )
}

export default App
