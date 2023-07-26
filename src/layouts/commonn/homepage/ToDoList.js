import React from 'react'
import SingaleToDoList from '../toDoList/SingaleToDoList'


export default function ToDoList({ toDoListData,isBold }) {
    return (
        <div>
            {
                toDoListData.map((val, key) => {
                    return (
                        <SingaleToDoList key={key} title={val.title} isCompleted={val.isCompleted} isBold={isBold}/>
                    )
                })
            }
        </div>
    )
}
