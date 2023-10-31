import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllDocs } from '../store/docSlice';


// Component
function Preview() {
    const allDocs = useSelector(selectAllDocs)
    console.log(allDocs)
    return (
        <div>
            {allDocs.map(doc => <li>{JSON.stringify(doc.name)}</li>)}
        </div>
    )
}

export default Preview