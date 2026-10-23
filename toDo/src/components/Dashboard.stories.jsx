import Dashboard from './Dashboard.jsx'
import { AuthProvider } from '../context/AuthProvider.jsx'

export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
}

export const Default = {}
