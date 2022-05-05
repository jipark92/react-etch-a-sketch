import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

export default function Sketch() {
    
    let gridArrays = []

    const [blackMarker, setBlackMarker] = useState(false)
    
    const makeGrids = () => {
        //make # of divs and push it to array
        for (let i=0;i<100;i++){
            gridArrays.push(
                <div 
                    className='grids' 
                    Style="" 
                    onMouseOver={blackMarker? colorBlack: eraser}
                    
                    >
                    {/* */}
                </div>)
        }
        //display grids
        let showGrids = gridArrays.map((gridArray)=>{
            return (
                <>
                    {gridArray}
                </>
            )
        })
        return showGrids
    }


    const colorBlack = (e) => {
        e.target.style.backgroundColor="black"
    }

    const activateBlackMarker = () => {
        setBlackMarker(true)
    }

    const eraser = (e) => {
        e.target.style.backgroundColor="white"
    }

    const activateEraser = () => {
        setBlackMarker(false)
    }

    return (
        <div className='sketch-container'>
            <div className='grids-container'>
                {makeGrids()}
            </div>
            <div className="btns-container">
                <Button className='bg-dark' onClick={activateBlackMarker}>Black Marker</Button>
                <Button className='bg-dark' onClick={activateEraser}>Eraser</Button>
                <Button className='bg-dark' onClick={()=>window.location.reload()}>Clear</Button>
                <Button className='bg-dark'>Change Grid Size</Button>
            </div>
        </div>
    )
}