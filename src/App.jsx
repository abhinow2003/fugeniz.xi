import { useState } from 'react'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Event from './pages/events/Event'


function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <>
    {
      loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ):(
        <div className='min-h-screen bg-zinc-950'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Event />}/>
      </Routes>
    </div>
      )
    }
    
    </>
  )
}

export default App
