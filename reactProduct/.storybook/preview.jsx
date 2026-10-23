import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import { createAppStore } from '../src/store/store.js'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    // Every story gets MUI's reset AND its own fresh Redux store.
    // A story can set starting data with: parameters: { preloadedState: {...} }
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
