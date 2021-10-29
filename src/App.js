import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Title from './components/Title'
import TagLine from './components/TagLine'
import Icon from './components/Icon'
import LandingCard from './components/LandingCard'

function App() {

	return (
		<Router>
			<LandingCard />
			<div id='content'>
					<Title />
					<TagLine />
					<Icon />
			</div>
		</Router>
	)
}

export default App
