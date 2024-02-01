import React, { useState } from 'react'
import { useDataContext } from '../globalContext/GlobalContext'
import "./Style.css"
// import data from "../globalContext/data/data.js"



const Todo: React.FC = () => {

    const { todos } = useDataContext();
    const [flag, setFlag] = useState<number>(0);


    function heart(index: number) {
        todos[index].like++
        setFlag(flag+1)
    }

    function thumbsup(index: number) {
        todos[index].dislike++
        setFlag(flag-1)
    }


    return (
        <div>
            {todos && todos.map((Element, index) => {
                return <div className='todo' key={index}>
                    <p>{Element.id}</p>
                    <h5>{Element.title}</h5>
                    <button className='btn' onClick={() => { heart(index) }}>❤️{Element.like}</button>
                    <button className='btn' onClick={() => { thumbsup(index) }}>👌{Element.dislike}</button>
                </div>
            })}
        </div>
    )
}

export default Todo
