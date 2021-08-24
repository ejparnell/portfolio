import React from 'react'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const TITLE = 'Elizabeth Parnell'
const SUBTITLE = 'Software Engineer | Educator | Crazy Cat Lady'

const Home = () => {
	return (
		<div className='home-card'>
			<h1>{TITLE}</h1>
			<h2>{SUBTITLE}</h2>
			<button onClick={() => console.log('i was clicked woot!')}>
				<FontAwesomeIcon icon={faChevronDown} size='4x' />
			</button>
		</div>
	)
}

export default Home
