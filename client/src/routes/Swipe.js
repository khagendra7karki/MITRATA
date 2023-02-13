import React, { useState,useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import linkedList from '../Utilities/linkedList'




function Simple () {
  
  const myList = new linkedList( 10 );
  myList.insertNode( image1 )
  myList.insertNode( image2 )
  myList.insertNode( image3 )
  // console.log(myList.getNextNode().count)
  // console.log(myList.getNextNode().count)
  // console.log(myList.getNextNode().count)
  const [lastDirection, setLastDirection] = useState()
  const [count, setCount] = useState(1);
  const [image, setImage ] = useState(myList.getNextNode().data)
  const swiped = (direction ) => {
    setLastDirection(direction)
    setCount(count + 1)
  }


  return (
    <div>
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {(
          <TinderCard className='swipe' onSwipe={(dir) => { swiped(dir)
            setImage( myList.getNextNode().data)                                                
            }}>
            <div style={{ backgroundImage: `url(${image})` }} className='card1'>
              { 'i am rendered ' + count}
            </div>
          </TinderCard>)}
      </div>
    </div>
  )
}

export default Simple