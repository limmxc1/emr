import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import randomDocsTest from '../constants/randomDocs'

function Table() {
    const state = useSelector(state => state)
    const [currentPage, setCurrentPage] = useState(1)
    // const allDocs = state.doc.docNotes
    const recordsPerPage = 5
    // const lastIndex = currentPage * recordsPerPage
    // const firstIndex = lastIndex - recordsPerPage
    const records = randomDocsTest.slice(firstIndex, lastIndex)
    const npage = Math.ceil(randomDocsTest.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    console.log(...Array(npage+1).keys())

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
    const headers = ["Goal", "Plan", "Discharge"]
    return (
        <div className='text-xs'>
            <table className='border border-black w-full'>
                <thead className='border border-black'>
                    {headers.map(header => <th className='border border-black'>{header}</th>)}
                </thead>
                <tbody>
                    {records.map((note, index) => {
                        return (
                            <tr key={index} className='cursor-pointer' onClick={() => console.log("hello")}>
                                <td className='border border-black'>{note.goal}</td>
                                <td className='border border-black'>{note.plan}</td>
                                <td className='border border-black'>{note.discharge}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <nav className="flex justify-center">
                <ul className='flex'>
                    <li className='px-2'>
                        <a href='#' onClick={prevPage}>Prev</a>
                    </li>
                    {numbers.map((n, index) => {
                        return (
                            <li key={index} className='px-2 underline'>
                                <a href='#' onClick={() => changeCurrentPage(n)}>{n}</a>
                            </li>
                        )
                    })}
                    <li className='px-2'>
                        <a href='#' onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Table