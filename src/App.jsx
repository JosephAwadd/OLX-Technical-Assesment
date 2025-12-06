import { RouterProvider } from 'react-router'
import './App.scss'
import PublicLayout from './layouts/PublicLayout'
import router from './router.jsx'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme.jsx'

function App() {

  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <RouterProvider router={router}>
          <PublicLayout />
        </RouterProvider>
      </MantineProvider>
    </>
  )
}

export default App
