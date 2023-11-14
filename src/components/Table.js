import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDoc } from '../store/showDocSlice'
import { deleteDocDoc } from '../store/docSlice'

function Table({props}) {
    const state = useSelector(state => state[props][`${props}Notes`])
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = state.slice(firstIndex, lastIndex)
    const npage = Math.ceil(state.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    
    function nextPage() {
        if(currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    function prevPage() {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCurrentPage(id) {
        setCurrentPage(id)
    }

    function deleteDoc(e) {
        e.stopPropagation();
        dispatch(deleteDocDoc(e.target.parentElement.parentElement.dataset.key))
    }


    const headers = ["Date submitted", "Author", "Progress Note", "Actions"]

    return (
        <div className='text-xs pt-2'>
            <table className='border w-full'>
                <thead>
                    {headers.map(header => <th className='border-sky-950 border-[3px]'>{header}</th>)}
                </thead>
                <tbody>
                    {records.map((note) => {
                        return (
                            <tr data-key={note.key} className='cursor-pointer border-sky-950 border-[3px]' onClick={() => dispatch(selectDoc(note.key))}>
                                <td className='border-sky-950 border-[3px]'>{note.submitDate + ' ' + note.submitTime}</td>
                                <td className='border-sky-950 border-[3px]'>{note.author}</td>
                                <td className='border-sky-950 border-[3px]'>{note.progressNote + "\n" + note.goal + "\n" + note.plan}</td>
                                <td className='border-sky-950 border-[3px]'>
                                    <button>Edit</button>
                                    <button onClick={deleteDoc}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <nav className="flex justify-center">
                <ul className='flex'>
                    <li className='px-2'>
                        <button onClick={prevPage}>Prev</button>
                    </li>
                    {numbers.map((n, index) => {
                        return (
                            <li key={index} className='px-2 underline'>
                                <a href='#' onClick={() => changeCurrentPage(n)}>{n}</a>
                            </li>
                        )
                    })}
                    <li className='px-2'>
                        <button onClick={nextPage}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Table