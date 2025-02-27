import { Route, Routes } from "react-router"
import Layout from "./layouts/layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Tag from "./pages/Tag"
import Aritcle from "./pages/Article"

function App() {
  return (
    <>
      <Layout>
        <div>This is Children</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Aritcle />} />
          <Route path="/tag" element={<Tag />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
