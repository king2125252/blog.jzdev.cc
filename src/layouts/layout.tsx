import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="bg-red-500">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout