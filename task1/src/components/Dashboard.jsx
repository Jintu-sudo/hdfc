import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import { addTask, deleteTask, editTask } from '../store/tasksSlice'

function Dashboard() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.items);

    const [newTaskName, setNewTaskName] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedName, setEditedName] = useState('');

    function handleAdd(e) {
        e.preventDefault();
        const name = newTaskName.trim();
        if (!name) return;

        dispatch(addTask(name));
        setNewTaskName('');
    }

    function handleSave(id) {
        const name = editedName.trim();
        if (!name) return;

        dispatch(editTask({ id, name }));
        setEditingTaskId(null);
        setEditedName('');
    }

    function cancelEdit() {
        setEditingTaskId(null);
        setEditedName('');
    }

    return (
        <>
            <h1>Hello, welcome to the dashboard</h1>
            <button onClick={() => dispatch(logout())}>Log Out</button>

            <h2>TODO LIST</h2>

            <form onSubmit={handleAdd}>
                <input
                    placeholder="add items"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
                <button type="submit">ADD</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>
                                {editingTaskId === task.id ? (
                                    <input
                                        value={editedName}
                                        onChange={(e) => setEditedName(e.target.value)}
                                    />
                                ) : (
                                    task.name
                                )}
                            </td>
                            <td>
                                <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                            </td>
                            <td>
                                {editingTaskId === task.id ? (
                                    <>
                                        <button onClick={() => handleSave(task.id)}>Save</button>
                                        <button onClick={cancelEdit}>Cancel</button>
                                    </>
                                ) : (
                                    <button onClick={() => {
                                        setEditingTaskId(task.id);
                                        setEditedName(task.name);
                                    }}>
                                        Edit
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Dashboard;