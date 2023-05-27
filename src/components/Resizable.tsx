import React from 'react';
import {ResizableBox} from 'react-resizable'
import "./resizeable.css"

interface Resizeableprops {
    direction :string;
    children: any;
}
const Resizeable:React.FC<Resizeableprops>=({direction,children})=>{
    return <ResizableBox height={120} width={285} resizeHandles={['s','sw','se']}>{children}</ResizableBox>;
};

export default Resizeable;