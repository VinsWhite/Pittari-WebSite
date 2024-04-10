import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
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
import Profile from './pages/profile/Profile'
import TangoKaado from './pages/games/TangoKaado'
import WaadoGeemu from './pages/games/WaadoGeemu'
import KuizuGeemu from './pages/games/kuizugeemu/KuizuGeemu'
import AnswerPage from './pages/games/kuizugeemu/AnswerPage'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {

  return (
      <BrowserRouter>
      <NavbarComp />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          {/* GAMES */}
          <Route path="/learn" element={<HomepageG />}></Route>
          <Route path="/learn/単語カード" element={<TangoKaado />}></Route>
          <Route path="/learn/ワードゲーム" element={<WaadoGeemu />}></Route>
          <Route path="/learn/クイズゲーム" element={<KuizuGeemu />}></Route>
          <Route path="/learn/クイズゲーム/answers" element={<AnswerPage />}></Route>
          {/* PROFILE */}
          <Route path="/profile" element={<Profile />}></Route>
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
          {/* PRIVACY POLICY */ }
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        </Routes>
      <FooterComp />
      </BrowserRouter>
  )
}

export default App
