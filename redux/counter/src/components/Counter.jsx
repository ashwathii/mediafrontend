import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    //state to hold the input value
    const [range,setRange]=useState("")
    //hook to dispatch a function in action
    const dispatch= useDispatch()
    //component can access state using useSelector hook
    const count=useSelector((state)=>state.counter.value)
    console.log(range);
  return (
   <>
   
   <div className='d-flex align-item-center justify-content-center w-100 mt-5 flex-column'>
        <h1 style={{fontSize:'90px'}}>{count}</h1>
        <div className='mt-5'>
            <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger ms-3 p-3'>Reset</button>
            <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success ms-3 p-3'>Increment</button>
        </div>

    </div>
    <div className='w-100 mt-5'>
        <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control' placeholder='Enter the range' style={{borderColor:'blue'}} />
    </div>
   
   </>
  )
}

export default Counter