import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import randomDocsTest from '../constants/randomDocs'


function Table({props}) {
    //const state = useSelector(state => state)
    //const allDocs = state.doc.docNotes
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = randomDocsTest[props].slice(firstIndex, lastIndex)
    const npage = Math.ceil(randomDocsTest[props].length / recordsPerPage)
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
        <div className='text-xs'>
            <table className='border border-black w-full'>
                <thead className='border border-black'>
                    {headers.map(header => <th className='border border-black'>{header}</th>)}
                </thead>
                <tbody>
                    {records.map((note, index) => {
                        return (
                            <tr key={index} className='cursor-pointer' onClick={() => console.log("hello")}>
                                <td className='border border-black'>{note.submitTime + ' ' + note.submitDate}</td>
                                <td className='border border-black'>{note.author}</td>
                                <td className='border border-black'>{note.progressNote + "\n" + note.goal + "\n" + note.plan}</td>
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