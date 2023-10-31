import React from 'react'

export default function TextAreaContainer ({item, setParentState, parentState}) {
    function handleChange(event) {
        setParentState({[event.target.id]: event.target.value})
        
    }
    return (
        <div className="boxes">
            <label htmlFor={item.id}>{item.label}</label>
            <textarea 
                id={item.id} 
                rows={4}
                cols={60}
                onChange={handleChange}
                value={parentState[item.id]}
            >
                {item.default}
            </textarea>
        </div>
    )
}
