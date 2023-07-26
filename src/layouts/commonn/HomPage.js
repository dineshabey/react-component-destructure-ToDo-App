import React from 'react'
import TopNavigation from './TopNavigation'
import ToDoList from './homepage/ToDoList'
import NewTaskAdd from './homepage/NewTaskAdd'

export default function HomPage() {
    return (
        <div>
            <TopNavigation />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <h2>ToDo List</h2>
                    <NewTaskAdd />
                    <div style={{marginTop:'20px'}}>
                        <ToDoList />
                    </div>
                </div>
            </div>

        </div>
    )
}
