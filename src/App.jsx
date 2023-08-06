import {BrowserRouter} from "react-router-dom"
import AppRouter from "./router/AppRouter"
import CartContextComponet from "./context/CartContext"

function App() {

  return (
   <BrowserRouter>
     <CartContextComponet>
      <AppRouter/>
    </CartContextComponet>
   </BrowserRouter>
  )
}

export default App
