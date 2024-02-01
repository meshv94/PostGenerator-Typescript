import React, { useContext, createContext, useState } from "react";

export type Tchildren = {
    children: React.ReactNode
}
export type Tuserdata = {
    id: Date,
    title: string,
    image:File|null|undefined
    like: number,
    dislike: number
}

export type Tuserdatacontext = {
    todos : Tuserdata[];
    handleAddTodo : (task:string, image:File|null|undefined)=>void
    handleDeleteTodo : (index:number) => void
}

const dataContext = createContext<Tuserdatacontext>({
    todos: [],
    handleAddTodo: () => {},
    handleDeleteTodo : () => {}
});

export const useDataContext = () => { 
    return useContext(dataContext);
}


const GlobalContext = ({children}:Tchildren) => {

    const [todos , setTodos] = useState<Tuserdata[]>([])

    const handleAddTodo = (task:string, image:File|null|undefined)=>{
        let date = new Date();
        console.log(date)
        setTodos((prev)=>{
            // const newTodos = [{id:id , title:task, like:0, dislike:0}, ...prev]
            return [...prev, {id:date , title:task, image:image, like:0, dislike:0}]
        });
        console.log(todos) 
    }

    const handleDeleteTodo = (index:number)=>{
            todos.splice(index , 1)
    }

    return (
        <dataContext.Provider value={{todos, handleAddTodo , handleDeleteTodo}}>
            {children}
        </dataContext.Provider>
    )
}

export default GlobalContext
