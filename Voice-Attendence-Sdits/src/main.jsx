
import { createRoot } from 'react-dom/client'
import {BrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { router } from './router.jsx'


createRoot(document.getElementById('root')).render(
  <RouterProvider router= {router}>
    <App/>
  </RouterProvider>
)
