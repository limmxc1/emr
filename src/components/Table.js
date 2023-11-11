import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import randomDocsTest from '../constants/randomDocsTest'


function Table({props}) {
    const state = useSelector(state => state[props][`${props}Notes`])
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
    const headers = ["Date submitted", "Author", "Progress Note"]

    return (
        <div className='text-xs pt-2'>
            <table className='border w-full'>
                <thead>
                    {headers.map(header => <th className='border border-sky-950 border-[3px]'>{header}</th>)}
                </thead>
                <tbody>
                    {records.map((note, index) => {
                        return (
                            <tr key={index} className='cursor-pointer border-sky-950 border-[3px]' onClick={() => console.log("hello")}>
                                <td className='border-sky-950 border-[3px]'>{note.submitDate + ' ' + note.submitTime}</td>
                                <td className='border-sky-950 border-[3px]'>{note.author}</td>
                                <td className='border-sky-950 border-[3px]'>{note.progressNote + "\n" + note.goal + "\n" + note.plan}</td>
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