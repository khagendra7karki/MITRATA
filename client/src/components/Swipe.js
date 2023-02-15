import React from 'react';
import '../assets/css/swipe.css';
  
// Card component with destructured props
//things we need
//current x and y

// reference x and y => value of x and y cordinate where the drag was first initiated
//this is to calculate the position 

//reference origin ( this will be respect to the frame )
//this is to calculate the angle of rotation


const Swipe = () => {
    const initialValue = {
        currentX: 0,        //with refernce to the center
        currentY: 0,        //with the refernce to the center
        currentAngle: 0,    //with refernce to the initial angle
        reference: {
            x: 0,
            y: 0,
            angle: 0
        },
        center: {
            xo: 0,
            yo: 0
        }
    }
    const [ cordinate, setCordinate ] = React.useState( initialValue )
    
    const style = { height:  '700px',
                    width: '400px',
                    background: 'grey',
                    transformOrigin: `${ cordinate.currentAngle < 0 ? '0' : '100%'} 100%`,
                    transform: `rotate(${-cordinate.currentAngle}deg)`,
                    position: 'relative',
                    left: cordinate.currentX - cordinate.reference.x,
                    bottom: cordinate.currentY - cordinate.reference.y
                }
    
    const handleDragStart = (e) => {
        let x = e.clientX - e.target.offsetLeft 
        let y = -e.clientY + e.target.offsetHeight + e.target.offsetTop
        let evaluatedState = {
            currentX: x,
            currentY: y,
            currentAngle : 0,
            reference: {
                x: x,
                y: y,
                angle: Math.abs( Math.atan( y / x ) * 180 / 3.14)
            },
            center: {
                xo: e.target.offsetLeft,
                yo: e.target.offsetTop + e.target.offsetHeight
            }
        }
        setCordinate(evaluatedState)
    }
    const handleDrag = (e) => {
        e.preventDefault()
        const x = e.clientX - cordinate.center.xo
        const y = -e.clientY + cordinate.center.yo
        let angle = (Math.atan(y/x)) * 180/3.14
        if( angle < 0 )
            angle = 180 + angle
        angle = angle  - cordinate.reference.angle;
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
        console.log( angle,  cordinate.reference.angle)
    }
    const handleDragEnd = (e) => {
        e.preventDefault()
        setCordinate( initialValue )
    }
    return<>
        <div style = {{width: '100vw', height: '100vh', display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
            <div className = 'hello' draggable style = { style }  onDragStart = { handleDragStart } onDrag = { handleDrag }  onDragEnd  = { handleDragEnd }>

            </div>

        </div>
    </>
};
  
export default Swipe