import LoginPage from './LoginPage.jsx'
import { AuthProvider } from '../context/AuthProvider.jsx'

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  // LoginPage reads from AuthContext, so it needs the provider around it
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
}

// Try username "user" and password "hello" for a successful login
export const Default = {}
