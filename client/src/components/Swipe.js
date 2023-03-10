import React from 'react';
import '../assets/css/swipe.css';
import { useEffect } from 'react'
  
    // private properties
    #startPoint;
    #offsetX;
    #offsetY;
  
    // #isTouchDevice = () => {
    //   return (('ontouchstart' in window) ||
    //     (navigator.maxTouchPoints > 0) ||
    //     (navigator.msMaxTouchPoints > 0));
    // }
  
    #init = () => {
      const card = document.createElement('div');
      card.classList.add('card');
      const img = document.createElement('img');
      img.src = this.imageUrl;
      card.append(img);
      this.element = card;
        this.#listenToMouseEvents();
    }
  
  
    #listenToMouseEvents = () => {
      this.element.addEventListener('mousedown', (e) => {
        const { clientX, clientY } = e;
        this.#startPoint = { x: clientX, y: clientY }
        document.addEventListener('mousemove', this.#handleMouseMove);
        this.element.style.transition = 'transform 0s';
      });
  
      document.addEventListener('mouseup', this.#handleMoveUp);
  
      this.element.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });
    }
    const [ cordinate, setCordinate ] = React.useState( initialValue )
    
    const style = { transform: `rotate(${cordinate.currentAngle}deg)`,
                    position: 'relative',
                    left: cordinate.currentX - cordinate.reference.x,
                    bottom: cordinate.currentY - cordinate.reference.y,
                    opacity: 1
                }

    const handleDragStart = (e) => {
        isDragged = true
        console.log( isDragged )
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
                const x = e.clientX - cordinate.center.xo
                const y = -e.clientY + cordinate.center.yo
                const distanceInX = x - cordinate.reference.x
                const distanceInY  = y - cordinate.reference.y
            const base = cordinate.height / 2
            let angle = (Math.atan( distanceInX / base )) * 60/3.14
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