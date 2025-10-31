import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Home (Info ITIL 4)</NavLink>
          </li>
          <li>
            <NavLink to="/formulir">Input Rekapan Layanan</NavLink>
          </li>
          <li>
            {/* TAMBAHKAN LINK INI */}
            <NavLink to="/laporan">Manajemen Rekapan</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav