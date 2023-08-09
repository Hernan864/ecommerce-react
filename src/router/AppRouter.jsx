import { Routes, Route } from "react-router-dom"
import { routes } from "./menuRoutes"
import Layout from "../components/layout/Layout"
import ProtectedRoute from "./ProtectedRoute"
import Dashboard from "../components/pages/dashboard/Dashboard"

const AppRouter = () => {
 
  return (
    <Routes>
      
        <Route element={<Layout/>}>
          {
            routes.map(({id, path, Element})=><Route key={id} path={path} element={<Element/>} />)
          }
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      <Route path="*" element={<h1>404 Not Found</h1> }/>
    </Routes>
  )
}

export default AppRouter