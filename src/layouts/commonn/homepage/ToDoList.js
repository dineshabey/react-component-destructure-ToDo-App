import React from 'react'
import SingaleToDoList from '../toDoList/SingaleToDoList'

const toDoListData = ["First item", 'Second item', 'Third item']

export default function ToDoList() {
    return (
        <div>
            {
                toDoListData.map((val, key) => {
                    return (
                        <SingaleToDoList key={key} title={val} />
                    )
                })
            }
        </div>
    )
}
