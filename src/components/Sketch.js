import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

export default function Sketch() {
    //div/grid storage
    let gridArrays = []
    //black marker activate
    const [blackMarker, setBlackMarker] = useState(false)
    const [eraserMarker, setEraserMarker] = useState(false)
    const [rainbowMarker, setRainbowMarker] = useState(false)
    //create grids
    const makeGrids = (rows,cols) => {
        //make # of divs and push it to array
        for (let i=0;i<rows*cols;i++){
            gridArrays.push(
                <div 
                    className='grids' 
                    Style="" 
                    onMouseOver={blackMarker? colorBlack:  eraserMarker? eraser : rainbowMarker? colorRainbow: ""}
                    >
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
        setEraserMarker(false)
        setRainbowMarker(false)
    }
    //eraser functions
    const eraser = (e) => {
        e.target.style.backgroundColor="white"
    }
    const activateEraser = () => {
        setBlackMarker(false)
        setEraserMarker(true)
        setRainbowMarker(false)
    }
    //rainbow button functions
    function randomRainbow() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for(let i=0; i <6; i++){
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }

    const colorRainbow = (e) => {
        e.target.style.backgroundColor=randomRainbow()
    }

    const activateRainbowMarker = () => {
        setRainbowMarker(true)
        setBlackMarker(false)
        setEraserMarker(false)
    }
    //reset function
    const reset = () => {
        const grids = document.querySelectorAll('.grids')
        //turn grid back to white
        grids.forEach(grid=>{
            grid.style.backgroundColor="white"
        })
        //empty array
        gridArrays.splice(0, gridArrays.length)
    }

    return (
        <div className='sketch-container'>
            <div className='grids-container'>
                {makeGrids(10,10)}
            </div>
            <div className="btns-container">
                <Button className='bg-dark' onClick={activateBlackMarker}>Black Marker</Button>
                <Button className='bg-dark' onClick={activateRainbowMarker}>Rainbow Marker</Button>
                <Button className='bg-dark' onClick={activateEraser}>Eraser</Button>
                <Button className='bg-dark' onClick={reset}>Reset</Button>
            </div>
        </div>
    )
}