import React, { useState } from 'react'
import { useDataContext } from '../globalContext/GlobalContext'
import "./Style.css"




const Todo: React.FC = () => {

    const { todos, handleDeleteTodo } = useDataContext();
    const [flag, setFlag] = useState<number>(0);


    function heart(index: number) {
        todos[index].like++
        setFlag(flag + 1)
    }

    function thumbsup(index: number) {
        todos[index].dislike++
        setFlag(flag - 1)
    }

    function deletetodo(index: number) {
        // todos.splice(index, 1); --- directly delete element by this
        if(window.confirm("Wants to delete this post!") === true){
            handleDeleteTodo(index)
            setFlag(flag + 1)
        }
        
    }


    return (
        <>
            {todos && todos.map((Element, index) => {
                return <div className='todo container-fluid' key={index}>
                    <div className='todohead'>
                        <span className='id'>{Element.id.toDateString()+ " ,  " +Element.id.getHours() + ":" + Element.id.getMinutes()+ ":" + Element.id.getSeconds()}</span>
                        <button className='btndelete btn' onClick={() => { deletetodo(index) }}>❌</button>
                    </div>
                    {Element.image ? (<img className="image" src={URL.createObjectURL(Element.image)} alt={Element.image.name} />) : ("")}
                    <h3 className='title'>{Element.title}</h3>
                    <button className='btnreact' onClick={() => { heart(index) }}>❤️{Element.like}</button>
                    <button className='btnreact' onClick={() => { thumbsup(index) }}>👌{Element.dislike}</button>
                </div>
            })}
        </>
    )
}

export default Todo
