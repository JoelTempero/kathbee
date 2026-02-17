import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import FunFacts from './pages/FunFacts'
import CommissionASong from './pages/CommissionASong'
import Extras from './pages/Extras'
import OnlineStore from './pages/OnlineStore'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fun-facts" element={<FunFacts />} />
          <Route path="/commission-a-song" element={<CommissionASong />} />
          <Route path="/extras" element={<Extras />} />
          <Route path="/online-store" element={<OnlineStore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
