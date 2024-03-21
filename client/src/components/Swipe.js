import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import '../assets/css/swipe.css'
const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://3djakob.github.io/react-tinder-card-demo/img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://3djakob.github.io/react-tinder-card-demo/img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: 'https://3djakob.github.io/react-tinder-card-demo/img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: 'https://3djakob.github.io/react-tinder-card-demo/img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://3djakob.github.io/react-tinder-card-demo/img/dinesh.jpg'
  }
]

function Swipe ({images, handleSwipe}) {

  return (
    <>
      <div className='cardContainer' >
        {images.map((img, idx) =>
          <TinderCard className='swipe' 
                      key={idx} 
                      onSwipe={handleSwipe} 
                    //   onCardLeftScreen={() => outOfFrame(character.name)}
                      preventSwipe = {['up', 'down']}>
            <img src = {img} className='card' draggable = {false} />
          </TinderCard>
        )}
      </div>
    </>
  )
}

export default Swipe