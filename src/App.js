import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Title from './components/Title'
import TagLine from './components/TagLine'
import Icon from './components/Icon'

function App() {
	return (
		<Router>
			<Title />
			<TagLine />
			<Icon />
		</Router>
	)
}

export default App
