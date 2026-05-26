import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

import BlogProvider from './context/BlogContext'
import AuthProvider from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <AuthProvider>

        <BlogProvider>

          <App />

        </BlogProvider>

      </AuthProvider>

    </BrowserRouter>

  </React.StrictMode>,
)