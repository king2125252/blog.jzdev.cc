import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto px-5">
      <Navbar />
      <div className="p-[2%]">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout