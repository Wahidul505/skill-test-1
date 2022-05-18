import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './Task.css';

const Task = () => {
    const [user] = useAuthState(auth);
    const handleAddTask = e => {
        e.preventDefault();
        const taskInfo = {
            email: user.email,
            taskName: e.target.name.value,
            taskDescription: e.target.description.value
        }
        console.log(taskInfo)
        fetch('https://skill-test-todo-task.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskInfo)
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                alert('Task Added');
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleAddTask} className='task-form'>
                <input type="text" name='name' placeholder='Task Name' autoComplete='off' />
                <input type="text" name='description' placeholder='Task Description' autoComplete='off' />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default Task;