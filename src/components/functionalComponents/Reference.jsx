//import { useState } from "react";
import React, { useEffect } from "react";
import { useRef,useState } from "react"; //useref will corerctly predict the output (its previous character)

const Reference =()=>{ 
    const [batchsize,updateBatchsize] = useState(0)
    const prevBatch = useRef(batchsize);
    useEffect(()=>{
        prevBatch.current = batchsize
    },[batchsize])
    return(
        <div>
            <h1>Example of useref</h1>
            <input type="number" onChange={(event)=>{updateBatchsize(event.target.value)}}></input>
            <h2> The text typed is {batchsize} and its prevoius text is {prevBatch.current}</h2>
        </div>
    )
}
export default Reference;