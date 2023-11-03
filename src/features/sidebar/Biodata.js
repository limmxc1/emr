import React from 'react'

function Biodata() {
    const biodata = {
        name: 'John Doe',
        id: 'S9752405G',
        gender: 'Male',
        dob: '10/12/23',
        age: 32,
        languages: ["mandarin", "english"],
        caseNum: 1023914
    }
    const { name, id, gender, dob, age, languages, caseNum } = biodata
    function isLastLanguage(array) {
        const cappedLanguages = array.map(language => language.charAt(0).toUpperCase() + language.slice(1))
        return cappedLanguages.map(language => {
            if (language === cappedLanguages[array.length - 1]) {
                return language
            } else {
                return `${language}, `
            }
        })
    }
    return (
        <div>
            <div>
                <p className='text-slate-300 text-xs'>Name: {name}</p>
                <p className='text-slate-300 text-xs inline'>{id}</p>
                <p className='text-slate-300 text-xs inline'> | {gender}</p>
                <p className='text-slate-300 text-xs inline'> | {dob}</p>
                <p className='text-slate-300 text-xs inline'> | {age}</p>
                <p className='text-slate-300 text-xs'>{isLastLanguage(languages)}</p>
                <p className='text-slate-300 text-xs inline'>Case {caseNum.toString()}</p>
            </div>
        </div>
    )
}

export default Biodata