import React, { useState } from 'react'
import { addDoc } from '../store/docSlice'
import { useDispatch } from 'react-redux';

function Form() {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        progressNote: "",
        plan: "",
        goal: ""
    })
    function handleChange(e) {
        const val = e.target.value
        const id = e.target.id
        setState(prevState => ({
            ...prevState,
            [id]: val
        }))
    }
    function handleClick(e) {
        e.preventDefault()
        dispatch(addDoc({ name: "Hello"}))
    }

    function createProgressNote() {
        return components.map(component => {
            return (
                <>
                    <label for={component} className='block'>{component}</label>
                    <textarea id={component} rows="4" onChange={handleChange} className="
                    block
                    w-full 
                    text-sm
                    "></textarea>
                </>
            )}
        )
    }
    console.log(state)
    const components = ["progressNote", "goals", "plan", "discharge"]
    return (
        <div className='bg-emerald-50'>
            {createProgressNote()}
            <button className='border border-black bg-cyan-500' onClick={handleClick}>Submit</button>
        </div>
    )
}
export default Form