import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

export default function Sketch() {
    //div/grid storage
    let gridArrays = []
    //black marker activate
    const [blackMarker, setBlackMarker] = useState(false)
    //create grids
    const makeGrids = (rows,cols) => {
        //make # of divs and push it to array
        for (let i=0;i<rows*cols;i++){
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
    //black marker functions
    const colorBlack = (e) => {
        e.target.style.backgroundColor="black"
    }
    const activateBlackMarker = () => {
        setBlackMarker(true)
    }
    //eraser functions
    const eraser = (e) => {
        e.target.style.backgroundColor="white"
    }
    const activateEraser = () => {
        setBlackMarker(false)
    }
    //reset function
    const reset = () => {
        const grids = document.querySelectorAll('.grids')
        grids.forEach(grid=>{
            grid.style.backgroundColor="white"
        })
    }
    //change grid size function
    const changeGridSize = () => {

        // let rows = prompt("Number of rows?")
        // let cols = prompt("Number of columns?")

        // makeGrids(rows,cols)

        // console.log(grids)
        // grids.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        // grids.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    }

    return (
        <div className='sketch-container'>
            <div className='grids-container'>
                {makeGrids(10,10)||changeGridSize}
            </div>
            <div className="btns-container">
                <Button className='bg-dark' onClick={activateBlackMarker}>Black Marker</Button>
                <Button className='bg-dark' onClick={activateEraser}>Eraser</Button>
                <Button className='bg-dark' onClick={reset}>Reset</Button>
                <Button className='bg-dark' onClick={changeGridSize}>Change Grid Size</Button>
            </div>
        </div>
    )
}