import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './rotas/ErrorPage'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CadastrarCandidato } from './rotas/CadastrarCandidato'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/cadastrar',
    element: <CadastrarCandidato/>,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
