import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFoundpage from './pages/NotFoundpage'
import Contacts from './pages/Contacts'
import HomepageG from './pages/games/HomepageG'
import HomepageF from './pages/forum/HomepageF'
import HomepageA from './pages/articles/HomepageA'
import NavbarComp from './components/NavbarComp'

function App() {

  return (
      <BrowserRouter>
      <NavbarComp />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/games" element={<HomepageG />}></Route>
          <Route path="/forum" element={<HomepageF />}></Route>
          <Route path="/articles" element={<HomepageA />}></Route>
          <Route path="*" element={<NotFoundpage />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
