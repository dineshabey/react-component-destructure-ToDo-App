import React from 'react'

export default function SingaleToDoList() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',border:'1px solid green',padding:'10px'}}>
      <input type={'checkbox'} />
      <p>First Item</p>
      <button>Delete</button>


    </div>
  )
}
