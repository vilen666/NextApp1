import React, { useEffect, useMemo, useState } from 'react';

export const Hooks = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div className='w-full h-screen bg-blue-300 flex items-center justify-center gap-3 text-3xl font-bold'>
            <Counter2/>
        </div>
    );
};

const Counter = ({ count, setCount }) => {
    const [ok, setok] = useState(count);
    useEffect(() => {
        console.log(ok)
        return () => {
            console.log("cleaned")
            setok(count)
        }
    }, [count]);
    return (
        <>
            <button className='h-fit w-fit rounded bg-slate-100 px-3' onClick={() => { setCount(prev => prev - 1) }}>-</button>
            <span className='text-3xl font-bold'>{count}</span>
            <button className='px-3 rounded bg-slate-100' onClick={() => { setCount(prev => prev + 1) }}>+</button>
        </>
    );
};
const Counter2 =()=>
{
    const [count, setCount] = useState(0);
    const [started, setstarted] = useState(useMemo(()=>{console.log("memo");return false},[]));
    console.log("rendered")
    useEffect(() => {
        let b;
        console.log("mounted")
        if(started)
        {
           b=setInterval(()=>{
                setCount((prev)=>{return prev+1})
                console.log(count)
            },1000)
        }
        return ()=>{console.log("cleaned") ;clearInterval(b)};
    }, [started]);
    return (
        <>
            <button className='h-fit w-fit rounded bg-slate-100 px-3' onClick={() => { setstarted(false); console.log(started)}}>stop</button>
            <span className=' font-bold absolute top-5 text-5xl left-1/2 transform -translate-x-1/2'>{count}</span>
            <button className='px-3 rounded bg-slate-100' onClick={() => { setstarted(true)}}>start</button>
            <button className='px-3 rounded bg-slate-100' onClick={() => { setCount(0);setstarted(false)}}>reset</button>
        </>
    ); 
}