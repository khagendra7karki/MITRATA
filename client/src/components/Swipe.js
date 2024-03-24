import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import '../assets/css/swipe.css'

function Swipe ({images, handleSwipe}) {
  
  return (
    <>
      <div className='cardContainer' >
        {images.map((img, idx) =>
          <TinderCard className='swipe' 
                      key={img.slice(30)} 
                      onSwipe={handleSwipe} 
                      swipeRequirementType='position'
                      swipeThreshold={200}
                      preventSwipe = {['up', 'down']}>
            <img src = {img} className='card' draggable = {false} />
          </TinderCard>
        )}
      </div>
    </>
  )
}

export default Swipe