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
const velocity = 10
const maxDisplacement = 500

function calculateVelocity( object ) {
    distance(object.currentX , object.currentY)
}

function distance( x, y ){
    return Math.sqrt( x * x + y * y )
}
const Swipe = () => {
    const initialValue = {
        currentX: 0,        //with refernce to the center
        currentY: 0,        //with the refernce to the center
        currentAngle: 0,    //with refernce to the initial angle
        reference: {
            x: 0,           //with reference to center
            y: 0,           //with refernce to center
        },
        center: {
            xo: 0,
            yo: 0
        },
        isDrag: false,
        height: 0,
        width: 0,
    }
    const [ cordinate, setCordinate ] = React.useState( initialValue )
    
    const style = { height:  '700px',
                    width: '400px',
                    background: 'grey',
                    transformOrigin: `50% 100%`,
                    transform: `rotate(${cordinate.currentAngle}deg)`,
                    position: 'relative',
                    left: cordinate.currentX - cordinate.reference.x,
                    bottom: cordinate.currentY - cordinate.reference.y,
                }
    
    const handleDragStart = (e) => {
        e.dataTransfer.setDragImage( new Image() , e.clienttX, e.clientY)
        let center =  {
            xo: e.target.offsetLeft + e.target.offsetWidth / 2.0 ,
            yo: e.target.offsetTop + e.target.offsetHeight
        }
        let x = e.clientX - center.xo 
        let y = -e.clientY + center.yo
        let evaluatedState = {
            currentX: x,
            currentY: y,
            currentAngle : 0,
            reference: {
                x: x,
                y: y,
            },
            center: center,
            isDrag: true, 
            isSwiped: false,
            height: e.target.offsetHeight,
            width: e.target.offsetHeight,
        }
        setCordinate(evaluatedState)
    
    }
    const handleDrag = (e) => {
        if( cordinate.isDrag ){
            e.preventDefault()
            const x = e.clientX - cordinate.center.xo
            const y = -e.clientY + cordinate.center.yo
            const distanceInX = x - cordinate.reference.x
            const base = cordinate.height / 2
            let angle = (Math.atan( distanceInX / base )) * 180/3.14
            console.log( angle )
            if( Math.abs( angle ) > 30 ){
                if( angle > 0 ){
                    angle = 30
                }
                else{
                    angle = -30
            }
            }
            
            const evaluated = {
                currentX: x,
                currentY: y,
                currentAngle: angle,
            }
            setCordinate((prev) => {
                return ({ ...prev, ...evaluated})
            })
            const offsetX = Number(window.getComputedStyle( e.target ).getPropertyValue( 'left' ).slice( 0, -2))
            const offsetY = Number(window.getComputedStyle( e.target ).getPropertyValue( 'bottom' ).slice( 0, -2))
            if( distance(offsetX, offsetY )  > maxDisplacement ) {
                setCordinate( initialValue )
            }
        }
    }
    const handleDragEnd = (e) => {
        setCordinate( initialValue )
    }
    return<>
        <div style = {{width: '100vw', height: '100vh', display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
            <div className = 'hello' draggable style = { style }  onDragStart = { handleDragStart } onDrag = { handleDrag }  onDragEnd  = { handleDragEnd }>

            </div>
            <div style = {{ background: 'blue', height: '20px', width: '30px' }}></div>
        </div>
    </>
};
  
export default Swipe