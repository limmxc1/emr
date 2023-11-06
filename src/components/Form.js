import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function Form({slice}) {
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
        dispatch(slice(state))
    }
    const sections = ["progressNote", "goal", "plan", "discharge"]
    
    function createProgressNote(sectionsArg) {
        return sectionsArg.map(section => {
            const sectionCapped = section.charAt(0).toUpperCase() + section.slice(1)
            return (
                <>
                    <label for={section} className='block'>{sectionCapped}</label>
                    <textarea id={section} rows="4" onChange={handleChange} className="
                    block
                    w-full 
                    text-sm
                    "></textarea>
                </>
            )}
        )
    }
    console.log(state)
    return (
        <div className= 'pl-2 pt-3'>
            {createProgressNote(sections)}
            <button className='border border-black bg-cyan-500' onClick={handleClick}>Submit</button>
        </div>
    )
}
export default Form