import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

export default function Sketch() {
    
    let gridArrays = []

    const [blackMarker, setBlackMarker] = useState(false)

    const blah = () => {
        
        gridArrays.forEach((gridArray)=>{
            console.log(gridArray)
            gridArray.backgroundColor="black"
        })
    }

    const makeGrids = () => {
        for (let i=0;i<100;i++){
            gridArrays.push(<div className='grids' onMouseOver={blackMarker? blah : blah}  ></div>)
        }
        // console.log(gridArrays)

        let showGrids = gridArrays.map((gridArray)=>{
            return (
                <div>
                    {gridArray}
                </div>
            )
        })
        return showGrids
    }

    const activateBlackMarker = () => {
        console.log('black on', blackMarker)
        setBlackMarker((blackMarker)=> blackMarker = !blackMarker)
    }



    return (
        <div className='sketch-container'>
            <div className='grids-container'>
                {makeGrids()}
            </div>
            <div className="btns-container">
                <Button className='bg-dark' onClick={activateBlackMarker}>Black Marker</Button>
                <Button className='bg-dark'>Eraser</Button>
                <Button className='bg-dark'>Clear</Button>
                <Button className='bg-dark'>Change Grid Size</Button>
            </div>
        </div>
    )
}