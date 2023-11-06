import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function Form({slice}) {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        progressNote: "",
        plan: "",
        goal: "",
        discharge: "",
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
    const sections = ["progressNote", "goal", "plan"]
    
    function createProgressNote(sectionsArg) {
        return sectionsArg.map(section => {
            const sectionCapped = section.charAt(0).toUpperCase() + section.slice(1)
            return (
                <div className='mt-2'>
                    <label for={section} className='block text-xs pb-1'>{sectionCapped}</label>
                    <textarea id={section} value={state.section} rows={section==="progressNote" ? "20" : "4"}onChange={handleChange} className="
                    block
                    w-full
                    rounded
                    text-[10px]
                    p-1
                    "></textarea>
                </div>
            )}
        )
    }
    console.log(state)
    return (
        <div className= 'pl-2 pr-2 pt-3'>
            {createProgressNote(sections)}
            <p className='text-xs pt-2'>Discharge?</p>
                <div>
                    <input 
                        type="radio" 
                        id="discharge" 
                        name="dischargeYes" 
                        value="Yes" 
                        checked={state.discharge === "Yes"}
                        onChange={handleChange}
                        className='w-3 h-3'></input>
                    <label htmlFor="dischargeYes" className='text-xs pl-1'>Yes</label>
                </div>
                <div>
                    <input
                        type="radio" 
                        id="discharge" 
                        name="dischargeNo" 
                        value="No" 
                        onChange={handleChange}
                        checked={state.discharge === "No"}
                        className='w-3 h-3'
                    ></input>
                    <label htmlFor="dischargeNo" className='text-xs pl-1'>No</label>
                </div>
            <button className='block border bg-sky-950 text-slate-300 p-1 rounded text-xs mt-2' onClick={handleClick}>Submit</button>
        </div>
    )
}
export default Form