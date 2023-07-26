import React from 'react'
import TopNavigation from './TopNavigation'
import ToDoList from './homepage/ToDoList'
import NewTaskAdd from './homepage/NewTaskAdd'

const toDoListData1 = ["First item", 'Second item', 'Third item']
const toDoListData2 = ["First item", 'Second item', 'Third item', 'Another item']


export default function HomPage() {
    return (
        <div>
            <TopNavigation />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <h2>ToDo List</h2>
                    <NewTaskAdd />
                    <div style={{ marginTop: '20px' }}>
                        <ToDoList toDoListData={toDoListData1} />
                        <br /><hr />
                        <ToDoList toDoListData={toDoListData2} />
                    </div>
                </div>
            </div>

        </div>
    )
}
