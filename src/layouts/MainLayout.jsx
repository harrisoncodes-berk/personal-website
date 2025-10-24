import { Outlet } from 'react-router-dom'
import NavBar from '@/components/navigation/NavBar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import SiteBackground from '@/components/visuals/SiteBackground.jsx'

function MainLayout() {
  return (
    <div className="min-h-dvh bg-transparent text-zinc-900 antialiased dark:text-zinc-100">
      <SiteBackground />
      <NavBar />
      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout


