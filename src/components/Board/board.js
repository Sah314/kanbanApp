import React from 'react'
import Canvas from '../Canvas';
function Board() {

    const items=[
        {title:"Group-1",item:["A","B","C"]},
        {title:"Group-2",item:["D","E"]},
        {title:"Group-3",item:["D","E"]}
    ]
  return (
    <div className="App">
    <Canvas items={items}/>
    </div>
  )
}

export default Board