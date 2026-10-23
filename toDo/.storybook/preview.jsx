import CssBaseline from '@mui/material/CssBaseline'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    // Same global reset we use in main.jsx, so stories look like the real app
    (Story) => (
      <>
        <CssBaseline />
        <Story />
      </>
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
