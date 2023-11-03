import React from 'react'

const diagnoses = ['hypertension', 'hyperlipidemia', 'diabetes mellitus']

function PMHx() {
  return (
    <div className='pt-4'>
        <h1 className='font-bold text-slate-300 inline'>PMHx</h1>
        <button className='pl-2 text-slate-300 text-[0.6rem] underline hover:font-bold'>
            Edit
        </button>
        <div className='flex flex-wrap'>
            {diagnoses.map(diagnosis => <div className='bg-[#FF8787] text-xs rounded inline px-1 py-1 mr-2 mt-2'>{diagnosis}</div>)}
        </div>
        <div className='inline text-slate-300 text-[0.6rem] justify-end hover:font-bold pr-3'>
          Last updated: 11/10/23 04:09pm
        </div>
    </div>
    
  )
}

export default PMHx