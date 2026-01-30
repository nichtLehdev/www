'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import SidebarToggle from './SidebarToggle'
import ThemeToggle from './ThemeToggle'

export default function HeaderWithSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4">
        <SidebarToggle onClick={() => setSidebarOpen(true)} />
        <ThemeToggle />
      </header>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}
