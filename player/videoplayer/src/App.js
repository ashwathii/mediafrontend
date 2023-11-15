
import './App.css';
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import { Route, Routes } from 'react-router-dom';
import Head from './components/Head'
import Foot from './components/Foot'

function App() {
  return (
    <div>
     <Head/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={ <Home/>} />
        <Route path='/watch-history' element={<WatchHistory/>} />

      </Routes>
      <Foot/>
     
      
    </div>
  );
}

export default App;
