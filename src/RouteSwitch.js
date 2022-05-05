import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Sketch from './components/Sketch'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Sketch/>}/>
            </Routes>
        </BrowserRouter>
    )
}