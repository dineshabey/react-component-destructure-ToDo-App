import React from 'react'
import TopNavigation from './TopNavigation'
import ToDoList from './homepage/ToDoList'
import NewTaskAdd from './homepage/NewTaskAdd'

const toDoListData1 = [
    {
        title: 'First item',
        isCompleted: true,
    },
    {
        title: 'Second item',
        isCompleted: false,
    },
    {
        title: 'Third item',
        isCompleted: false,
    },
]
const toDoListData2 = [
    {
        title: 'AWS',
        isCompleted: true,
    },
    {
        title: 'AZUSE',
        isCompleted: true,
    },
    {
        title: 'DOCKER',
        isCompleted: true,
    },
    {
        title: 'KUBERNET',
        isCompleted: false,
    },
]
const toDoListData3 = [
    {
        title: 'A',
        isCompleted: true,
    },
    {
        title: 'B',
        isCompleted: false,
    },
    {
        title: 'C',
        isCompleted: false,
    },
]
// const toDoListData2 = ["First item", 'Second item', 'Third item', 'Another item']


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
                        <br /><hr />
                        <ToDoList toDoListData={toDoListData3} />
                    </div>
                </div>
            </div>

        </div>
    )
}
