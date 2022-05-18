import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const MyTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://skill-test-todo-task.herokuapp.com/task/${user.email}`)
            .then(res => res.json()).then(data => setTasks(data));
    }, [user]);


    const handleDeleteTask = id => {
        fetch(`https://skill-test-todo-task.herokuapp.com/task/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            if (data.deletedCount) {
                const remaining = tasks.filter(task => task._id !== id);
                setTasks(remaining);
            }
        });
    };

    const handleCompleteTask = (id, name, description) => {
        fetch(`https://skill-test-todo-task.herokuapp.com/task/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                alert(`Completed: ${name}. Description: ${description}`)
                window.location.reload();
            }
        });
    }

    return (
        <div>
            <Link to='/task'>Back to Add Task</Link>
            <h1>My Tasks:</h1>
            <hr />
            {
                tasks.map(task => <div key={task._id}>
                    <div>
                        <h3>{task.taskName}</h3>
                        <p>{task.taskDescription}</p>
                    </div>
                    <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
                    {!task?.completed && <button onClick={() => handleCompleteTask(task._id, task.taskName, task.taskDescription)}>Complete</button>}
                    <hr />
                </div>)
            }
        </div>
    );
};

export default MyTasks;