import React from 'react'
import { addDoc } from '../store/docSlice'
import { useDispatch } from 'react-redux';

export default function Form() {
    const dispatch = useDispatch()
    return (
        <form>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" onChange={() => dispatch(addDoc({ name: "Hello"}))}></input>
            <button onClick={(e) => e.preventDefault()}>button</button>
        </form>
    )
}