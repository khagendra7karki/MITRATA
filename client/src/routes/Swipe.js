import React, { useState,useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import image from '../assets/images/image1.jpg'



function Simple () {
   

    class LinkedList {
        constructor(head = null) {
            this.head = head
        }
        appendNode(newNode){
            let node = this.head;
            if(node==null){
                //Means it's just empty list
                this.head = newNode;
                return;
            }
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        }
        getNode(index){
            let node = this.head;
        
            if(index==0) {
                return this.head;
            }
            while(index--){
                if(node.next!==null)
                    node = node.next;
                else
                    throw Error("Index Out of Bound");
            }
            return node;
        }
        listSize() {
            let size = 0;
            let node = this.head;
            while (node) {
                size++;
                node = node.next;
            }
            return size;
        }
    }
    class Node {
        constructor(data) {
            this.data = data
            this.next = null                
        }
    }
    let myList = new LinkedList();
    let node = new Node(image);
    
    myList.appendNode(node);
    myList.appendNode(new Node(image));
    myList.appendNode(new Node(image));
    myList.appendNode(new Node(image));
    myList.appendNode(new Node(image));
    myList.appendNode(new Node(image));
 
  const [lastDirection, setLastDirection] = useState()
  const [count, setCount] = useState(1);
  const [mainstate, setMainstate] = useState(true);

  const swiped = (direction,count ) => {
    // setCount = count +1;
    console.log(count)
    setLastDirection(direction)
    setCount(count + 1)
   
    setMainstate(true)
  }

  // const outOfFrame = (name) => {
  //   console.log(name + ' left the screen!')
  // }

  return (
    <div>
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
       
        { mainstate ? (
          <TinderCard className='swipe' key={myList.getNode(count).id} onSwipe={(dir) => swiped(dir, count)} >
            <div style={{ backgroundImage: 'url(' + myList.getNode(count).data + ')' }} className='card1'>
              {/* <h3>{character.name}</h3> */}
            </div>
          </TinderCard>) : (<p>sakiyo</p>)
}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      <h1>
        {count}
      </h1>
    </div>
  )
}

export default Simple