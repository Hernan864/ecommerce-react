import './App.css'
import NavbarContainer from './components/layout/navbar/NavbarContainer'
import ItemDetailContainer from './components/pages/itemDetail/ItemDetailContainer'
import ItemListContainer from './components/pages/itemList/ItemListContainer'

function App() {

  return (
    <>
      <NavbarContainer />
      <ItemListContainer />
      <ItemDetailContainer/>

    </>
  )
}

export default App
