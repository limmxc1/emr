import React from "react"
import { Link } from "react-router-dom"

function Tabs() {
    const navItems = [
        { header: "Doctor", path: "/doc" },
        { header: "Nursing", path: "/nurse" },
        { header: "PT", path: "/pt" },
        { header: "OT", path: "/ot" },
        { header: "SLT", path: "SLT"}
    ]
    return (
        <nav>
            <ul className='border-transparent rounded'>
                {navItems.map(item => {
                return (
                    <Link to={item.path}>
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
                            {item.header}
                        </button>
                    </Link>
                )
                })}
            </ul>
        </nav>
    )
  }

export default Tabs