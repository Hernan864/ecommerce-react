import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  let userRol="admin";
  return (
    <div>
      {
        userRol==="admin"? <Outlet/> : <Navigate to="/" />
      }
    </div>
  )
}

export default ProtectedRoute