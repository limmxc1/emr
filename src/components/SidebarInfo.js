import React from 'react'

const medicalInfo = {
    allComponents: ['goals', 'plan', 'discharge', 'precautions'],
    goals: ['Doctor: aim BP < 160/70, discharge with portable O2', 'PT: able to ambulate 30m nil rest with WF in 2 sessions', 'OT: nil active goals'],
    plan: ['Doctor: change losartan OM to BD', 'Nursing: CGT portal O2 to caregiver', 'PT: LL strengthening, kerb training', 'OT: Nil active goals'],
    discharge: ['Doctor: No', 'Nursing: Yes', 'PT: No', 'OT: Yes'],
    precautions: ['L LL NWB']
}

function SidebarInfo() {
    return (
        medicalInfo.allComponents.map(component => {
            const cappedComponent = component.charAt(0).toUpperCase() + component.slice(1)
            return (
                <div className='pt-4'>
                    <h1 className='font-bold text-slate-300 inline'>{cappedComponent}</h1>
                    <button className='pl-2 text-slate-300 text-[0.6rem] underline hover:font-bold'>
                        Edit
                    </button>
                    <ol className='list-disc pl-4'>
                        {medicalInfo[component].map(item => {
                            return (
                                <li className='text-slate-300 text-xs'>{item}</li>
                            )
                        })}
                    </ol>
                    <div className='inline text-slate-300 text-[0.6rem] justify-end hover:font-bold pr-3'>
                        Last updated: 11/10/23 04:09pm
                    </div>
                </div>
            )
        })
    )
}

export default SidebarInfo