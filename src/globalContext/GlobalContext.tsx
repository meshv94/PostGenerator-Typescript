import { type } from "@testing-library/user-event/dist/type";
import React, { useContext, createContext, useState, Dispatch, SetStateAction } from "react";

export type Tchildren = {
    children: React.ReactNode
}
export type Tuserdata = {
    id: number,
    title: string,
    like: number,
    dislike: number
}

export type Tuserdatacontext = {
    todos : Tuserdata[];
    handleAddTodo : (task:string, id:number)=>void
}

const dataContext = createContext<Tuserdatacontext>({
    todos: [],
    handleAddTodo: () => {}
});

export const useDataContext = () => { 
    return useContext(dataContext);
}


const GlobalContext = ({children}:Tchildren) => {

    const [todos , setTodos] = useState<Tuserdata[]>([])

    const handleAddTodo = (task:string, id:number)=>{
        setTodos((prev)=>{
            // const newTodos = [{id:id , title:task, like:0, dislike:0}, ...prev]
            return [...prev, {id:id , title:task, like:0, dislike:0}]
        }) 
        console.log(todos)
    }

    return (
        <dataContext.Provider value={{todos, handleAddTodo }}>
            {children}
        </dataContext.Provider>
    )
}

export default GlobalContext
