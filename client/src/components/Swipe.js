import React from 'react';
import '../assets/css/swipe.css';
import { useEffect } from 'react'
import { ImagesearchRoller } from '@mui/icons-material';
  
// Card component with destructured props
//things we need
//current x and y

// reference x and y => value of x and y cordinate where the drag was first initiated
//this is to calculate the position 

//reference origin ( this will be respect to the frame )
//this is to calculate the angle of rotation
let isDragged = false
const maxDisplacement = 250


const Card = ({ image, handleSwipe }) =>{
    const initialValue = {
        currentX: 0,        //with refernce to the center
        currentY: 0,        //with the refernce to the center
        currentAngle: 0,    //with refernce to the initial angle
        reference: null,
        isDrag: false,
        height: 0,
        width: 0,
        leftSwiped: false,
        rightSwiped: false,
    }
    const [ cordinate, setCordinate ] = React.useState( initialValue )
    

    
    const style = { transform: `rotate(${cordinate.currentAngle}deg)`,
                    left: cordinate.currentX,
                    top: cordinate.currentY,
                }

    const handleDragStart = (e) => {
        isDragged = true
        console.log( isDragged )
        let evaluatedState = {
            currentX: 0,
            currentY: 0,
            currentAngle : 0,
            reference: {
                x: e.clientX,
                y: e.clientY,
            },
            isDrag: true, 
            leftSwiped: false,
            rightSwiped: false,
        }
        setCordinate(evaluatedState)
    
    }
    const handleDrag = (e) => {
        // console.log( cordinate )
        if( isDragged && cordinate.reference){
            e.preventDefault()
            if( !(e.clientX *  e.clientY))
                return
                // const x = e.clientX - cordinate.center.xo
                // const y = -e.clientY + cordinate.center.yo
                const distanceInX = e.clientX - cordinate.reference.x
                const distanceInY  = e.clientY - cordinate.reference.y

            let angle = distanceInX * 0.1 
            
            const evaluated = {
                currentX: distanceInX,
                currentY: distanceInY,
                currentAngle: angle,
            }
            setCordinate((prev) => {
                return ({ ...prev, ...evaluated})
            })

            if( Math.abs( distanceInX )  > maxDisplacement ) {
                isDragged = false
                let rightSwiped = false
                let leftSwiped = false
                if( distanceInX > 0 ){
                    rightSwiped = true
                }
                else{
                    leftSwiped = true 
                }
                handleSwipe(leftSwiped, rightSwiped )
                setCordinate( { ...initialValue,  leftSwiped: leftSwiped,rightSwiped: rightSwiped, isDrag: false} )
            }
            
        }
    }
    const handleDragEnd = (e) => {
        setCordinate( initialValue )
    }

    return<>
            <div className = 'card' draggable style = { {...style } }  onDragStart = { (e) =>{e.preventDefault()} } onMouseMove = { handleDrag }  onMouseUp  = { handleDragEnd } onMouseDown = { handleDragStart }>
                {(() =>{
                        if( image )
                            return <img src = { image }  draggable ={ false }/>
                        return <></>
                        })()}
            </div>

    </>
}

const Swipe = ( { images, handleSwipe } ) => {
    return<>
        <div className = 'swipe-wraper' draggable =  {false} >
            { images.map( (image, index ) =>{
                return <Card image = { image } handleSwipe = { handleSwipe } key = { index }/>
            }) }
        </div>
    </>
};
  
export default Swipe