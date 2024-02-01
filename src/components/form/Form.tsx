import React, { FormEvent, useState } from 'react'
import { useDataContext } from '../../globalContext/GlobalContext';
import Todo from '../Todo';
import './form.css'


const Form: React.FC = () => {

    const { handleAddTodo } = useDataContext();




    const [text, setText] = useState<string>("")
    const [id, setId] = useState<number>(0)
    // const [image, setImage] = useState<File | null>()

    // const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         setImage(e.target.files[0]);
    //     }
    // };


    const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddTodo(text, id)
        setId(0)
        setText("")
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <textarea
                    onChange={(e) => { setText(e.target.value) }}
                    value={text}
                    placeholder='Write your thoughts...'
                    required
                /><br />
                {/* <input
                    type="file"
                    onChange={handleUploadImage}
                /> */}
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
