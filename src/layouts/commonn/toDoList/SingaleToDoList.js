import React from 'react'

export default function SingaleToDoList({ title, isCompleted, isBold, testColor }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid green',
      borderRadius: '10px',
      margin: '5px',
      padding: '5px',

    }}>
      <input type={'checkbox'} checked={isCompleted} />
      <p style={{ fontWeight: isBold ? 'bold' : '', color:testColor  }}>{title}</p>
      <button>Delete</button>
    </div>
  )
}
