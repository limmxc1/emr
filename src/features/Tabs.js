import React from "react"

function Tabs() {
    const navItems = ["Doctor", "Nursing", "PT", "OT", "SLT"]
    return (
        <nav>
            <ul className='border-transparent rounded'>
                {navItems.map(item => {
                return (
                    <li className='
                        px-3
                        py-1
                        inline 
                        hover:border-transparent
                        hover:bg-[#FF8787] 
                        hover:rounded
                        hover:text-white
                    '>
                        {item}
                    </li>
                )
                })}
            </ul>
        </nav>
    )
  }

export default Tabs