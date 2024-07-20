import './App.css'
// import BodyContent from './components/pages/BodyContent'
import LandingPage from './components/pages/LandingPage'
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      {/* <LandingPage />  */}
      <Outlet />
      
    </div>
  )
}

export default App
