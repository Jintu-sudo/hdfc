import { fn } from 'storybook/test'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TaskRow from './TaskRow.jsx'

export default {
  title: 'Components/TaskRow',
  component: TaskRow,
  decorators: [
    (Story) => (
      <Table>
        <TableBody>
          <Story />
        </TableBody>
      </Table>
    ),
  ],
  args: {
    onDelete: fn(),
    onSave: fn(),
  },
}

export const Default = {
  args: {
    task: { id: 1, name: 'learn react' },
  },
}

export const LongName = {
  args: {
    task: { id: 2, name: 'practice props, state and context until they feel easy' },
  },
}
