import React from 'react';
import {ResizableBox} from 'react-resizable'


interface Resizeableprops {
    direction :string;
    children: any;
}
const Resizeable:React.FC<Resizeableprops>=({direction,children})=>{
    return <ResizableBox height={300} width={300}>children</ResizableBox>;
};

export default Resizeable;