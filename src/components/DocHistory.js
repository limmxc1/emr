import React from 'react'
import { useSelector } from 'react-redux'

function Documentation() {
  const allDocs = useSelector(state => state)
  return (
    <div>
      <div>allDocs.</div>
    </div>
  )
}

export default Documentation