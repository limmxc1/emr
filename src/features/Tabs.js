import React from "react"
import { Link } from "react-router-dom"
import professionsInTeam from "../constants/professionsInTeam"

function Tabs() {
    return (
        <nav>
            <ul className='border-transparent rounded'>
                {professionsInTeam.map(profession => {
                return (
                    <Link to={'/newDoc/' + profession.abbrev}>
                        <button className='
                            px-3
                            py-1
                            inline 
                            text-xs
                            hover:bg-[#FF8787] 
                            hover:border-transparent
                            hover:rounded
                            hover:text-white
                            target:bg-[#FF8787] 
                            target:border-transparent
                            target:rounded
                            target:text-white
                        '>
                            {profession.header}
                        </button>
                    </Link>
                )
                })}
            </ul>
        </nav>
    )
  }

export default Tabs