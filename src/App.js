import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './componentes/Menu'
import routes from './defaults/Routes'


const App = () => {
    return (
        <BrowserRouter>
           <Menu/>
           <Routes>
           {
               routes.map(
                   (route) => 
               
                   <Route path={route.path} element={route.element} key={route.key}/>
                   )
            }
            </Routes>
        
           
            
        </BrowserRouter>
    )
}

export default App

