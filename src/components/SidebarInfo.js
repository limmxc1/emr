import React from 'react'
import { useSelector } from 'react-redux'

function SidebarInfo() {
    let medicalInfo = {
        allComponents: ['goals', 'plans', 'discharge'],
        goals: [],
        plans: [],
        discharge: [],
    }

    const state = useSelector(state => state)    
    medicalInfo.goals.push('Doctor: ' + state.doc.docNotes.goal)
    medicalInfo.plans.push('Doctor: ' + state.doc.docNotes.plan)
    medicalInfo.goals.push('PT: ' + state.pt.ptNotes.goal)
    medicalInfo.plans.push('PT: ' + state.pt.ptNotes.plan)
    medicalInfo.discharge.push('Doctor: ' + state.doc.docNotes.discharge)
    medicalInfo.discharge.push('PT: ' + state.pt.ptNotes.discharge)
   
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