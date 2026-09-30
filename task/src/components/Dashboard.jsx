import { useState } from 'react'

function Dashboard({ setIsLoggedIn, setUsername, setPassword }) {

    const [tasks, setTasks] = useState([{ id: 1, name: 'learn react' }, { id: 2, name: 'apply knwoledge' }]);
    const [newTaskName, setTaskName] = useState('')
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedName, setEditedName] = useState('');

    function addTask() {
        const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
        // const newId = tasks.length + 1;
        const newTask = { id: newId, name: newTaskName };
        setTasks([...tasks, newTask]);
        setTaskName('');
    }

    function deleteTask(idToDelete) {
        const updatedTasks = tasks.filter((task) => task.id !== idToDelete);
        setTasks(updatedTasks);
    }

    function editTask(idToEdit, newName) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === idToEdit) {
                return { ...task, name: newName };
            } else {
                return task;
            }
        });
        setTasks(updatedTasks);
        setEditingTaskId(null);
        setEditedName('');
    }

    return (
        <>
            <h1>Hello welocme to dashboard</h1>
            <button
                onClick={() => {
                    setIsLoggedIn(false);
                    setUsername('');
                    setPassword('');
                }}>
                Log Out
            </button><br />

            <h2>TODO LIST</h2>

            <input placeholder="add items"
                value={newTaskName}
                onChange={(e) => setTaskName(e.target.value)}
            /><br />

            <button onClick={addTask}>
                ADD
            </button>

            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
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
                            <td><button onClick={() => deleteTask(task.id)}>Delete</button></td>
                            <td>
                                {editingTaskId === task.id ? (
                                    <button onClick={() => editTask(task.id, editedName)}>Save</button>
                                ) : (
                                    <button onClick={() => { setEditingTaskId(task.id); setEditedName(task.name); }}>Edit</button>
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