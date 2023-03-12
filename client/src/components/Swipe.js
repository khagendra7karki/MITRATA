import React from 'react';
import '../assets/css/swipe.css';
import { useEffect } from 'react'
  
// Card component with destructured props
//things we need
//current x and y

// reference x and y => value of x and y cordinate where the drag was first initiated
//this is to calculate the position 

//reference origin ( this will be respect to the frame )
//this is to calculate the angle of rotation
const maxDisplacement = 300


function distance( x, y ){
    return Math.sqrt( x * x + y * y )
}
let isDragged = false
const Swipe = ( { image1, image2 , handleSwipe } ) => {
    const initialValue = {
        currentX: 0,        //with refernce to the center
        currentY: 0,        //with the refernce to the center
        currentAngle: 0,    //with refernce to the initial angle
        reference: {
            x: 0,           //with reference to center
            y: 0,           //with refernce to center
        },
        isDrag: false,
        height: 0,
        width: 0,
        isSwiped: false,
        leftSwiped: false,
        rightSwiped: false,
    }
    const [ cordinate, setCordinate ] = React.useState( initialValue )
    
    const style = { transform: `rotate(${cordinate.currentAngle}deg)`,
                    position: 'relative',
                    left: cordinate.currentX,
                    bottom: cordinate.currentY,
                    opacity: 1
                }

    const handleDragStart = (e) => {
        isDragged = true
        console.log( isDragged )
        e.dataTransfer.setDragImage( new Image() , e.clienttX, e.clientY)
        let evaluatedState = {
            currentX: 0,
            currentY: 0,
            currentAngle : 0,
            reference: {
                x: e.clientX,
                y: e.clientY,
            },
            isDrag: true, 
            isSwiped: false,
            // height: e.target.offsetHeight,
            // width: e.target.offsetHeight,
            leftSwiped: false,
            rightSwiped: false,
        }
        setCordinate(evaluatedState)
    
    }
    const handleDrag = (e) => {
        // console.log( cordinate )
        console.log( isDragged)
        if( isDragged ){
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

            if( distance( distanceInX, distanceInY )  > maxDisplacement ) {
                isDragged = false
                let rightSwiped = false
                let leftSwiped = false
                if( distanceInX > 0 ){
                    rightSwiped = true
                }
                else{
                    leftSwiped = true 
                }
                setCordinate( { ...initialValue,  leftSwiped: leftSwiped,rightSwiped: rightSwiped, isDrag: false, isSwiped: true} )
                handleSwipe(leftSwiped, rightSwiped )
            }
            
        }
    }
    const handleDragEnd = (e) => {
        setCordinate( initialValue )
    }

    return<>
        <div style = {{ display: 'flex' , justifyContent: 'center', alignItems: 'center'}} draggable =  {false} >
            <div className = 'user-suggestion-image-wrapper' draggable style = { {...style } }  onDragStart = { handleDragStart } onDrag = { handleDrag }  onDragEnd  = { handleDragEnd }>
                {(() =>{
                        if( !image1 )
                            return <></>
                        return <img src = { image1 }  draggable ={ false }/>
                        })()}
            </div>
            <div className = 'user-suggestion-image-wrapper' style = {{ background: `url(${ image1 })`, position: 'absolute', zIndex : '-1' }}>
                    {(() =>{
                        if( !image2 )
                            return <></>
                        return <img src = { image2 }  draggable ={ false }/>
                        })()}
            </div>
        </div>
    </>
};
  
export default Swipe