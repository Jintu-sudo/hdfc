import { useState } from 'react'
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'

function TaskRow({ task, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState('')

  function startEditing() {
    setIsEditing(true)
    setEditedName(task.name)
  }

  function saveEdit() {
    onSave(task.id, editedName)
    setIsEditing(false)
  }

  return (
    <TableRow>
      <TableCell>{task.id}</TableCell>
      <TableCell>
        {isEditing ? (
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
        <Button color="error" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </TableCell>
      <TableCell>
        {isEditing ? (
          <Button onClick={saveEdit}>Save</Button>
        ) : (
          <Button onClick={startEditing}>Edit</Button>
        )}
      </TableCell>
    </TableRow>
  )
}

export default TaskRow
