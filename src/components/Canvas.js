import React, { useState,useRef } from "react";
import "./Canvas.css";
import Resizable from "./Resizable"
function Canvas({items}){

    const [position,setPosition]=useState([]);
    const [item,setItem]=useState("");
    const [widgets,setWidgets]=useState(items);
    const [dragging,setDragging]=useState(false);
    const dragItem=useRef();
    const dragNode=useRef();

    
const handleDragStart=(e,itemType)=>{
//console.log("dragstart",itemType);
dragItem.current=itemType;
dragNode.current=e.target;
// console.log(e.clientX,e.clientY);
// console.log();

dragNode.current.addEventListener('dragend',handleDragEnd);
setTimeout(()=>{
    setDragging(true);
},0);
}

const handleelementposition=(e,params)=>{
    let X=e.clientX;
    let Y=e.clientY;
    console.log(Object.values(params));
    setItem(Object.values(params));
    setPosition([X,Y]);
console.log(X);
console.log(Y);
}
const handleDragEnd=()=>{
// console.log("dragend...");
setDragging(false);
dragNode.current.removeEventListener('dragend',handleDragEnd);
dragItem.current=null;
dragNode.current=null;
}
const handleDragEnter=(e,params)=>{
    const currentItem=dragItem.current;

if(e.target !==dragNode.current){

       setWidgets(oldlist=>{
        let list = JSON.parse(JSON.stringify(oldlist));
        // const list = [...oldlist]
        list[params.groupid].item.splice(params.itid,0,list[currentItem.groupid].item.splice(currentItem.itid,1)[0]);
        dragItem.current=params;
        return list;
       })
       



    // list[params.groupid].items.splice(params.itid,0,list[currentItem.groupid].items.splice(currentItem.itemid,1)[0])
    
    // return list;
}
}  
const getStyles=(params)=>{
const currentItem=dragItem.current;
    if(currentItem.groupid===params.groupid && currentItem.itid===params.itid){
        return 'current-dnd-item'
    }
    return 'item';
}
return(  <div>

<div className="dnd">
{    widgets.map((group,groupid)=>(
     <div key={group.title} className="group" onDragEnter={dragging && group.item.length===0?(e)=>handleDragEnter(e,{groupid,itid:0}):null}>
        <div className="group-title">{group.title}</div>
        {group.item.map((it,itid)=>(
            <Resizable direction="vertical"><div className={dragging?getStyles({groupid,itid}):"item"} 
            key={it} 
            draggable 
            onMouseOver={(e)=>handleelementposition(e,{it})}
            onDragStart={(e)=>handleDragStart(e,{groupid,itid})}
            onDragEnter={dragging?(e)=>handleDragEnter(e,{groupid,itid}):null} 
            style={{height:'95%',display:'flex'}}>
            <p>{it}</p>
        </div></Resizable>
        ))}    
     </div>
))
}</div> 
<div>
    <h1>The position of element {item} is : ({position[0]},{position[1]})</h1>
</div>

  

  {
  /* <div className="group">
    
    <div className="item" draggable onDragStart={(e)=>handleOnDrag(e,"Item2")}>
        <p>Item2</p>
    </div>
    <div className="item" draggable onDragStart={(e)=>handleOnDrag(e,"Item3")}>
        <p>Item3</p>
    </div>

    </div>
    <div className="group">
    <div className="item" draggable onDragStart={(e)=>handleOnDrag(e,"Item4")}>
        <p>Item4</p>
    </div>
    <div className="item" draggable onDragStart={(e)=>handleOnDrag(e,"Item5")}>
        <p>Item5</p>
    </div>
    </div>
 */}

</div>);
}

export default Canvas;