import React from 'react'

function Filter({text, handleChange }) {
  return (
    <div>
        <form>
            <input type="text" placeholder='Recherche...' value={text} onChange={(e)=>handleChange(e.target.value)} />
        </form>
    </div>
  )
}

export default Filter