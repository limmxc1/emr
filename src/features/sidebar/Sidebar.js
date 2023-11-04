import React from 'react'
import Biodata from './Biodata'
import SidebarInfo from '../../components/SidebarInfo'
function Sidebar() {
  return (
      <div className='px-2 pt-4'>
        <Biodata />
        <SidebarInfo />
      </div>
  )
}

export default Sidebar