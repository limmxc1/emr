import React, { useState }from 'react'
import ProgressNote from '../components/ProgressNote'
import Table from '../components/Table'
import { addDocDoc } from '../store/docSlice'
import { addPtDoc } from '../store/ptSlice'

function CurrentView({props}) {
    const [show, setShow] = useState(false)
    function whatIsProps() {
        if (props==="pt") return addPtDoc
        else if (props==="doc") return addDocDoc
    }

    function showNoteOrNot() {
      if (show) {
        return <div><ProgressNote slice={whatIsProps()} setShow={setShow}/></div>
      } else {
        return
      }
    }
    function handleClick(e) {
        const whichButton = e.target.innerText
        if (whichButton === "Create new note") setShow(true)
        else if (whichButton === "Delete note") setShow(false)
    }
    return (
        <div>
            <Table props={props}/>
            <button onClick={handleClick} className='text-xs border p-1 border-transparent bg-cyan-500 rounded hover:bg-[#FF8787] hover:text-white mr-2'>Create new note</button>
            <button onClick={handleClick} className='text-xs border p-1 border-transparent bg-cyan-500 rounded hover:bg-[#FF8787] hover:text-white mr-2'>Delete note</button>
            {show && showNoteOrNot()} {/*Whether which slice it updates should depend on the profession of the user. default = doc*/}
        </div>
    )
}



export default CurrentView