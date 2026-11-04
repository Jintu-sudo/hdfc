import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import { addTask, deleteTask, editTask } from '../store/tasksSlice'
import {
    Box, Stack, Typography,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Button, TextField
} from '@mui/material'

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
        <Box sx={{ width: '100%', maxWidth: 700, mx: 'auto', mt: 4 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h5">Welcome to the dashboard</Typography>
                <Button variant="outlined" onClick={() => dispatch(logout())}>Log Out</Button>
            </Stack>

            <Typography variant="h6" sx={{ mt: 3 }}>TODO LIST</Typography>

            <form onSubmit={handleAdd}>
                <Stack direction="row" spacing={2} sx={{ my: 2 }}>
                    <TextField
                        size="small"
                        label="Add item"
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                    />
                    <Button type="submit" variant="contained">Add</Button>
                </Stack>
            </form>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Task</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.id}</TableCell>
                                <TableCell>
                                    {editingTaskId === task.id ? (
                                        <TextField
                                            size="small"
                                            value={editedName}
                                            onChange={(e) => setEditedName(e.target.value)}
                                        />
                                    ) : (
                                        task.name
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Button color="error" onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
                                </TableCell>
                                <TableCell>
                                    {editingTaskId === task.id ? (
                                        <>
                                            <Button onClick={() => handleSave(task.id)}>Save</Button>
                                            <Button onClick={cancelEdit}>Cancel</Button>
                                        </>
                                    ) : (
                                        <Button onClick={() => {
                                            setEditingTaskId(task.id);
                                            setEditedName(task.name);
                                        }}>
                                            Edit
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Dashboard;