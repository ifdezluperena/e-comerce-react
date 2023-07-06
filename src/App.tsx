
import './App.css'
import { Header } from './components/Header/Header'
// import { HomePage } from './pages/HomePage'
import { RouterPaths } from './routes/RoutesPaths.routes'
import { ProductProps } from './types/product'




export function App (props:ProductProps) {
  
  
  return (
    <>
      <Header/>
      <RouterPaths{...props}/>
      
      
    </>
  )
}


