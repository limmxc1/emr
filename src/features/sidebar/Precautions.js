import React from 'react'

const precautions = ['L LL NWB', 'high fall risk', 'postural BP']

function Precautions() {
  return (
    <div className='pt-4'>
        <h1 className='font-bold text-slate-300 inline'>Precautions</h1>
        <button className='pl-2 text-slate-300 text-[0.6rem] underline hover:font-bold'>
            Edit
        </button>
        <ol className='list-disc pl-4'>
            {precautions.map(precaution => {
                return (
                    <li className='text-slate-300 text-xs'>{precaution}</li>
                )
            })}
        </ol>
        <div className='inline text-slate-300 text-[0.6rem] justify-end hover:font-bold pr-3'>
          Last updated: 11/10/23 04:09pm
        </div>
    </div>
  )
}

export default Precautions