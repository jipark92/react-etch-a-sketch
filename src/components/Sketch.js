import {useEffect} from 'react'
import Buttons from './Buttons'

export default function Sketch() {
    
    let gridArrays = []

    const makeGrids = () => {
        for (let i=0;i<100;i++){
            gridArrays.push(<div className='grids'></div>)
        }
        console.log(gridArrays)

        let showGrids = gridArrays.map((gridArray)=>{
            return (
                <div>
                    {gridArray}
                </div>
            )
        })
        return showGrids
    }

    // useEffect(()=>{

    // })
    

    return (
        <div className='sketch-container'>
            <div className='grids-container'>
                {makeGrids()}
            </div>
            <Buttons/>
        </div>
    )
}