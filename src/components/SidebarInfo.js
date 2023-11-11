import React from 'react'
import { useSelector } from 'react-redux'
import professionsInTeam from '../constants/professionsInTeam'

function SidebarInfo() {
    let medicalInfo = {
        allComponents: ['goals', 'plans', 'discharge'],
        goals: [],
        plans: [],
        discharge: [],
    }

    const state = useSelector(state => state)
    function updateMedicalInfo() {
        professionsInTeam.map(profession => {
            const arrLength = state[profession.abbrev][`${profession.abbrev}Notes`].length-1
            medicalInfo.goals.push(profession.header + ': ' + state[profession.abbrev][`${profession.abbrev}Notes`][0].goal)
            medicalInfo.plans.push(profession.header + ': ' + state[profession.abbrev][`${profession.abbrev}Notes`][0].plan)
            medicalInfo.discharge.push(profession.header + ': ' + state[profession.abbrev][`${profession.abbrev}Notes`][0].discharge)
        })
    }
    updateMedicalInfo()
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
                        Last updated: {state.doc.docNotes[0].submitDate + " " + state.doc.docNotes[0].submitTime}
                    </div>
                </div>
            )
        })
    )
}

export default SidebarInfo