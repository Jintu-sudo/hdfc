import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import { createAppStore } from '../src/store/store.js'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story, context) => (
      <Provider store={createAppStore(context.parameters.preloadedState)}>
        <CssBaseline />
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
