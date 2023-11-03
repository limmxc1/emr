import React from 'react'

const meds = ['olanzapine', 'lorsartan']

function Meds() {
  return (
    <div>
        <h1 className='font-bold text-slate-300 pt-4'>Medications</h1>
        <div className='flex flex-wrap'>
            {meds.map(med => <div className='bg-[#FF8787] text-xs rounded inline px-1 py-1 mr-2 mt-2'>{med}</div>)}
        </div>
        <div className='inline text-slate-300 text-[0.6rem] justify-end hover:font-bold pr-3'>
          Last updated: 11/10/23 04:09pm
        </div>
    </div>
  )
}

export default Meds