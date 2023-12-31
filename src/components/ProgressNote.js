import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { generateKey } from '../constants/randomDocsTest';

function ProgressNote({slice, setShow, handleClick}) {
    const d = new Date()
    const dispatch = useDispatch()

    const [state, setState] = useState({})
    

    function handleChange(e) {
        const val = e.target.value
        const id = e.target.id
        setState(prevState => ({
            ...prevState,
            [id]: val,
        }))
    }
// Adds time and date to local state before dispatching to Redux store
    function addTimeDateKey() {
        setState(prevState => ({
            ...prevState,
            submitDate: d.toLocaleDateString(),
            submitTime: d.toLocaleTimeString(),
            author: "newUser",
            key: generateKey(10)
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setShow(false)
        dispatch(slice(state))
    }

    const sections = ["progressNote", "goal", "plan"]
    
    function createProgressNote(sectionsArg) {
        return sectionsArg.map(section => {
            const sectionCapped = section.charAt(0).toUpperCase() + section.slice(1)
            return (
                <div>
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
    return (
        <div>
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
                <button className='block border bg-sky-950 text-slate-300 p-1 rounded text-xs mt-2 mr-2 inline' onMouseUp={addTimeDateKey} onClick={handleSubmit}>Submit</button>
                <button onClick={handleClick} className='block border bg-sky-950 text-slate-300 p-1 rounded inline text-xs mt-2'>Delete note</button>

        </div>
    )
}
export default ProgressNote