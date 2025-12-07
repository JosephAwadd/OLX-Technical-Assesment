import { RouterProvider } from 'react-router'
import './App.scss'
import PublicLayout from './layouts/PublicLayout'
import router from './router.jsx'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme.jsx'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

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
