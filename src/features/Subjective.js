import React, { useState } from 'react';
import TextAreaContainer from '../components/TextArea'
import items from '../constants/items'
import { addDoc } from '../store/docSlice'
import { useDispatch } from 'react-redux';


export default function Subjective() {
    const [childData, setChildData] = useState()
    console.log(childData)
    function setChild(value) {
        setChildData(prevChildData => ({
            ...prevChildData,
            ...value
        }))
    }

    const dispatch = useDispatch()
    const subjectiveItems = items.subjective
    return (
        <div id="overall-container">
        <div className="header-subjective">
            <h2>Subjective</h2>
            {subjectiveItems.map(item => <TextAreaContainer item={{...item}} setParentState={setChild} parentState={{...childData}}/>)}
            <button onClick={() => dispatch(addDoc(childData))}>Submit</button>
        </div>
    </div>
    )
}