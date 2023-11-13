import React, { useState }from 'react'
import ProgressNote from '../components/ProgressNote'
import Table from '../components/Table'
import { addDocDoc } from '../store/docSlice'
import { addPtDoc } from '../store/ptSlice'
import { useSelector, useDispatch } from 'react-redux'

function CurrentView({props}) {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    function whatIsProps() {
        if (props==="pt") return addPtDoc
        else if (props==="doc") return addDocDoc
    }

    function showNoteOrNot() {
      if (show) {
        return <ProgressNote slice={whatIsProps()} setShow={setShow} className="pl-2"/>
      } else {
        return
      }
    }
    function handleClick(e) {
        const whichButton = e.target.innerText
        if (whichButton === "Create new note") setShow(true)
        else if (whichButton === "Delete note") setShow(false)
    }
    function showDocOrNot(e) {
        if (state.showDoc.selectedDoc) {
            const selected = state.doc.docNotes.filter(note => note.key===state.showDoc.selectedDoc)[0]
            return <div className='text-black text-xs'>
                <p>{selected.author}</p>
                <p>{selected.submitDate + " " + selected.submitTime}</p>
                <p>{selected.progressNote}</p>
                <p>{selected.goal}</p>
                <p>{selected.plan}</p>
            </div>
        }

        else if (!state.showDoc.selectedDoc) return
    }

    return (
        <div>
            <Table props={props}/>
            <button onClick={handleClick} className='text-xs border p-1 border-transparent bg-cyan-500 rounded hover:bg-[#FF8787] hover:text-white mr-2'>Create new note</button>
            <button onClick={handleClick} className='text-xs border p-1 border-transparent bg-cyan-500 rounded hover:bg-[#FF8787] hover:text-white mr-2'>Delete note</button>
            <div className='grid grid-cols-2 h-screen pt-3'>
                {showDocOrNot()}
                {show && showNoteOrNot()} {/*Whether which slice it updates should depend on the profession of the user. default = doc*/}
            </div>
        </div>
    )
}



export default CurrentView