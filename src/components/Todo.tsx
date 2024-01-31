import React, { useEffect, useState } from 'react'
import { useDataContext } from '../globalContext/GlobalContext'
import "./Style.css"
// import data from "../globalContext/data/data.js"



const Todo: React.FC = () => {

    const data = useDataContext();
    const [count, setCount] = useState(0);


    function heart(index: number) {
        data[index].like++
        setCount(count + 1)
    }

    function thumbsup(index: number) {
        data[index].dislike++
        setCount(count - 1)
    }

    return (
        <div>
            {data && data.map((Element, index) => {
                return <div className='todo' key={Element.id}>
                    <p>{Element.id}</p>
                    <h3>{Element.title}</h3>
                    <button className='btn' onClick={() => { heart(index) }}>❤️{Element.like}</button>
                    <button className='btn' onClick={() => { thumbsup(index) }}>👌{Element.dislike}</button>
                </div>
            })}
        </div>
    )
}

export default Todo
