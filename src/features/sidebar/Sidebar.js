import React from 'react'
import Diagnoses from './Diagnoses'
import Biodata from './Biodata'
import Pmhx from './Pmhx'
import Precautions from './Precautions'
import Meds from './Meds'
function Sidebar() {
  return (
      <div className='px-2 pt-4'>
        <Biodata />
        <Diagnoses />
        <Pmhx />
        <Precautions />
        <Meds />
      </div>
  )
}

export default Sidebar