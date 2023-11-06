import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import professionsInTeam from '../constants/professionsInTeam'

function SidebarInfo() {
    let medicalInfo = {
        allComponents: ['goals', 'plans', 'discharge', 'precautions'],
        goals: [],
        plans: [],
        discharge: ['Doctor: No', 'Nursing: Yes', 'PT: No', 'OT: Yes'],
        precautions: ['L LL NWB']
    }


    const state = useSelector(state => state)    
    medicalInfo.goals.push('Doctor: ' + state.doc.docNotes.goal)
    medicalInfo.plans.push('Doctor: ' + state.doc.docNotes.plan)
    medicalInfo.goals.push('PT: ' + state.pt.ptNotes.goal)
    medicalInfo.plans.push('PT: ' + state.pt.ptNotes.plan)
   

    return (
        medicalInfo.allComponents.map(component => {
            const cappedComponent = component.charAt(0).toUpperCase() + component.slice(1)
            return (
                <div className='pt-4'>
                    <h1 className='font-bold text-slate-300 inline'>{cappedComponent}</h1>
                    <ol className='list-disc pl-4'>
                        {medicalInfo[component].map(item => {
                            return (
                                <li className='text-slate-300 text-xs'>{item}</li>
                            )
                        })}
                    </ol>
                    <div className='inline text-slate-300 text-[0.6rem] justify-end pr-3'>
                        Last updated: 11/10/23 04:09pm
                    </div>
                </div>
            )
        })
    )
}

export default SidebarInfo