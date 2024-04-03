import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFoundpage from './pages/NotFoundpage'
import Contacts from './pages/Contacts'
import HomepageG from './pages/games/HomepageG'
import HomepageF from './pages/forum/HomepageF'
import HomepageA from './pages/articles/HomepageA'
import NavbarComp from './components/NavbarComp'
import FooterComp from './components/FooterComp'
import CreateArticles from './pages/articles/create/CreateArticles'
import DetailArticle from './pages/articles/DetailArticle'
import Registration from './pages/auth/Registration'
import DetailTopic from './pages/forum/DetailTopic'
import Login from './pages/auth/Login'
import CreateTopic from './pages/forum/create/CreateTopic'
import DetailPost from './pages/forum/DetailPost'

function App() {

  return (
      <BrowserRouter>
      <NavbarComp />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          {/* GAMES */}
          <Route path="/games" element={<HomepageG />}></Route>
          {/* FORUM */}
          <Route path="/forum" element={<HomepageF />}></Route>
          <Route path="/forum/topics/:id" element={<DetailTopic />}></Route>
          <Route path="/forum/topics/:id/create" element={<CreateTopic />}></Route>
          <Route path="/forum/topics/:topicId/:postId" element={<DetailPost />}></Route>
          {/* ARTICLE */}
          <Route path="/articles" element={<HomepageA />}></Route>
          <Route path="/articles/create" element={<CreateArticles />}></Route>
          <Route path="/article/:id" element={<DetailArticle />}></Route>
          {/* AUTH */}
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* NOT FOUND PAGE */ }
          <Route path="*" element={<NotFoundpage />}></Route>
        </Routes>
      <FooterComp />
      </BrowserRouter>
  )
}

export default App
