import React, { FormEvent, useState } from 'react'
import { useDataContext } from '../../globalContext/GlobalContext';
import Todo from '../Todo';
import './form.css'


const Form: React.FC = () => {
    const userData = useDataContext();

    const [text, setText] = useState<string>("")
    const [id, setId] = useState<number | undefined>()


    const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(id)
        console.log(text)
        let dataObj = {
            id: id,
            title: text,
            like: 0,
            dislike: 0
        }
        userData.push(dataObj);
        setId(0)
        setText("")
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <input
                    onChange={(e) => { setText(e.target.value) }}
                    value={text}
                    type="text"
                    placeholder='Enter Title...'
                    required
                /><br />
                <input
                    onChange={(e) => { setId(parseInt(e.target.value)) }}
                    value={id}
                    type="number"
                    placeholder='Enter ID'
                    required
                /><br />
                <button type='submit'>Post</button>

            </form>
            <div className="todoitem">
                <Todo />
            </div>
        </>
    )
}

export default Form
