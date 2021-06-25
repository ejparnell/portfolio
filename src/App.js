import './App.css'
import { homeCard } from './portfolio_constants'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Router>
    <Home 
      homeCard={homeCard}
    />
    </Router>
  )
}

export default App
