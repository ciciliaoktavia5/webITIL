import React from 'react'
import { Outlet } from 'react-router-dom'

// DIUBAH: Kita panggil file dari 'src/' langsung
import Header from './header.jsx' // <-- diubah
import Nav from './nav.jsx' // <-- diubah
import Footer from './footer.jsx' // <-- diubah

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App