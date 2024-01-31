import React, { useContext, createContext, useState } from "react";

interface Tchildren {
    children: React.ReactNode
}
interface Tuserdata {
    id: number | undefined,
    title: string,
    like: number,
    dislike: number
}

let userData = [{
    id: 10,
    title: "Sunday",
    like: 0,
    dislike: 0
}]

// const [userData, setUserData] = useState([{
//     id: 10,
//     title: "Sunday",
//     like: 0,
//     dislike: 0
// }]);

const dataContext = createContext<Tuserdata[]>(userData);

export const useDataContext = () => {
    return useContext(dataContext);
}


const GlobalContext: React.FC<Tchildren> = (props) => {
    return (
        <dataContext.Provider value={userData}>
            {props.children}
        </dataContext.Provider>
    )
}

export default GlobalContext
