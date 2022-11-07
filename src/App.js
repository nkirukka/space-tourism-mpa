import { Routes, Route } from 'react-router-dom';
import { Home, Crew, Destination, Technology } from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/technology' element={<Technology/>} />
      </Routes>
    </div>
  )
}

export default App;