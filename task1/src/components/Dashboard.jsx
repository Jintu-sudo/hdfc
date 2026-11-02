import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'

function Dashboard() {
    const dispatch = useDispatch();

    const [tasks, setTasks] = useState([
        { id: 1, name: 'learn react' },
        { id: 2, name: 'apply knowledge' }
    ]);
    const [newTaskName, setNewTaskName] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedName, setEditedName] = useState('');

    function addTask(e) {
        e.preventDefault();
        const name = newTaskName.trim();
        if (!name) return;

        const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
        setTasks([...tasks, { id: newId, name }]);
        setNewTaskName('');
    }

    function deleteTask(idToDelete) {
        setTasks(tasks.filter((task) => task.id !== idToDelete));
    }

    function editTask(idToEdit, newName) {
        const name = newName.trim();
        if (!name) return;

        setTasks(tasks.map((task) =>
            task.id === idToEdit ? { ...task, name } : task
        ));
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

            <form onSubmit={addTask}>
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
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </td>
                            <td>
                                {editingTaskId === task.id ? (
                                    <>
                                        <button onClick={() => editTask(task.id, editedName)}>Save</button>
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