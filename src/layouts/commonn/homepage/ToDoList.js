import React from 'react'
import SingaleToDoList from '../toDoList/SingaleToDoList'


export default function ToDoList({toDoListData}) {
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
