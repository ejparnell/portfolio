import React from 'react'
import './home.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Icons from './Icon'
import Pdf from './../Elizabeth_Parnell_Resume.pdf'

const TITLE = 'Elizabeth Parnell'
const SUBTITLE = 'Software Engineer | Educator | Crazy Cat Lady'
const GITHUB = 'https://github.com/ejparnell'
const LINKEDIN = 'https://www.linkedin.com/in/elizabethjparnell/'

const Home = () => {
	return (
		<div className='home-card'>
			<h1>{TITLE}</h1>
			<h2>{SUBTITLE}</h2>
			<div className='social-card'>
				<Icons 
					url={GITHUB}
					icon={faGithub}
					size={'4x'}
					name={'GitHub'}
				/>
				<Icons 
					url={LINKEDIN}
					icon={faLinkedin}
					size={'4x'}
					name={'LinkedIn'}
				/>
				<Icons 
					url={Pdf}
					icon={faFilePdf}
					size={'4x'}
					name={'Resume'}
				/>
			</div>
		</div>
	)
}

export default Home
