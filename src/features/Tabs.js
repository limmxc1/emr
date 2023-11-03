import React from "react"

function Tabs() {
    const navItems = ["Dashboard", "Progress Notes"]
    return (
        <nav>
            <ul className='border-transparent rounded'>
                {navItems.map(item => {
                return (
                    <li className='
                        px-3
                        py-3
                        inline 
                        hover:border-transparent
                        hover:bg-[#FF8787] 
                        hover:rounded
                        hover:text-white
                        ease-in duration-300
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