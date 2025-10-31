import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './home.jsx' 
import Formulir from './formulir.jsx' 
import Laporan from './laporan.jsx' // <-- 1. IMPORT FILE BARU
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="formulir" element={<Formulir />} />
          <Route path="laporan" element={<Laporan />} /> {/* <-- 2. TAMBAHKAN ROUTE INI */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)