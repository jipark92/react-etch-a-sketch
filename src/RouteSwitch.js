import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Sketch from './components/Sketch'
import About from './components/About'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Sketch/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}