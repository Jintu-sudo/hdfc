import LoginPage from './LoginPage.jsx'
import { AuthProvider } from '../context/AuthProvider.jsx'

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
}

export const Default = {}
