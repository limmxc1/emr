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
        return <div><ProgressNote slice={whatIsProps()}/></div>
      } else {
        return
      }
    }
    function handleClick() {
      setShow(true)
    }
    return (
        <div>
            <Table props={props}/>
            <button onClick={handleClick}>Create new note</button>
            {show && showNoteOrNot()} {/*Whether which slice it updates should depend on the profession of the user. default = doc*/}
        </div>
    )
}



export default CurrentView