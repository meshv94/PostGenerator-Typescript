import React, { FormEvent, useState, useRef } from 'react'
import { useDataContext } from '../../globalContext/GlobalContext';
import Todo from '../Todo';
import './form.css'


const Form: React.FC = () => {

    const { handleAddTodo } = useDataContext();

    const inputFile = useRef<any>()

    const [text, setText] = useState<string>("")
    const [id, setId] = useState<number>(0)
    const [image, setImage] = useState<File | null |undefined>()


    const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddTodo(text, image)
        setId(0)
        setText("")
        setImage(undefined)
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        setImage(e.target.files[0])
    }

    return (
        <>
            <form className='container-fluid' onSubmit={handlesubmit}>
                <textarea
                    onChange={(e) => { setText(e.target.value) }}
                    value={text}
                    placeholder='Write your thoughts...'
                    required
                /><br />

                <div className='inputdiv container-fluid'>
                    
                    <div onClick={()=>{inputFile.current.click()}}>
                        <img id="inputimage" src="https://t4.ftcdn.net/jpg/02/17/88/73/240_F_217887350_mDfLv2ootQNeffWXT57VQr8OX7IvZKvB.jpg" alt="Upload Image" />
                        {image?(<img id="inputimage" src={URL.createObjectURL(image)} alt={image.name} />):""}
                        <input
                            type="file"
                            placeholder='Upload Image'
                            onChange={handleImageChange}
                            ref={inputFile}
                            id="hideinput"
                        />
                    </div>
                    <input
                        onChange={(e) => { setId(parseInt(e.target.value)) }}
                        value={id}
                        type="number"
                        placeholder='Enter ID'
                        required
                        style={{display:"none"}}
                    />
                </div>
                <div className='submitbtn'>
                    <button className='btn btn-outline-dark' id='submitBtn' type='submit'>Post</button>
                </div>
            </form>

            <div className="todoitem container-fluid">
                <Todo />
            </div>
        </>
    )
}

export default Form
