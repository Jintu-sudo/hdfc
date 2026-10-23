import { useContext, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { AuthContext } from '../context/AuthContext.js'
import TaskRow from './TaskRow.jsx'

function Dashboard() {
  const { logout } = useContext(AuthContext)

  const [tasks, setTasks] = useState([
    { id: 1, name: 'learn react' },
    { id: 2, name: 'apply knowledge' },
  ])
  const [newTaskName, setNewTaskName] = useState('')

  function addTask() {
    if (newTaskName.trim() === '') return

    const newId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1
    const newTask = { id: newId, name: newTaskName }
    setTasks([...tasks, newTask])
    setNewTaskName('')
  }

  function deleteTask(idToDelete) {
    const updatedTasks = tasks.filter((task) => task.id !== idToDelete)
    setTasks(updatedTasks)
  }

  function editTask(idToEdit, newName) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === idToEdit) {
        return { ...task, name: newName }
      } else {
        return task
      }
    })
    setTasks(updatedTasks)
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          Hello, welcome to the dashboard
        </Typography>
        <Button variant="outlined" onClick={logout}>
          Log out
        </Button>
      </Box>

      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        Todo list
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          size="small"
          label="Add item"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <Button variant="contained" onClick={addTask}>
          Add
        </Button>
      </Box>

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
              <TaskRow
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onSave={editTask}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Dashboard
