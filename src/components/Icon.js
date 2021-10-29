import React from 'react'
import './icon.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Pdf from './../Elizabeth_Parnell_Resume.pdf'
import { useViewport } from '../useViewport'
import { SM_MOBILE, TABLET } from '../viewPortConst'

const Icon = () => {
	const { width, height } = useViewport()
	const GITHUB = 'https://github.com/ejparnell'
	const LINKEDIN = 'https://www.linkedin.com/in/elizabethjparnell/'

	const isMobileTabletView = () => {
		return SM_MOBILE(width) || TABLET(width)
	}

	const styleCard = () => {
		let style = ''

		if (isMobileTabletView()) {
			style += 'icon-card-small '
		} else {
			style += 'icon-card-main '
		}

		if (isMobileTabletView() && height >= 667) {
			style += 'taller-card'
		}

		return style
	}

	const styleLink = () => {
		let style = ''

		if (isMobileTabletView()) {
			style += 'icon-link-small '
		} else {
			style += 'icon-link-main '
		}

		if (isMobileTabletView() && height >= 667) {
			style += 'taller-link'
		}

		return style
	}

	return (
		<div className={styleCard()}>
			<Link
				to={{ pathname: GITHUB }}
				target='_blank'
				style={{ color: 'black' }}
				className={styleLink()}>
				<FontAwesomeIcon
					icon={faGithub}
					size={'5x'}
					style={{ color: '#a88471'}}
				/>
			</Link>
			<Link
				to={{ pathname: LINKEDIN }}
				target='_blank'
				style={{ color: 'black' }}
				className={styleLink()}>
				<FontAwesomeIcon
					icon={faLinkedin}
					size={'5x'}
					style={{ color: '#a88471' }}
				/>
			</Link>
			<Link
				to={{ pathname: Pdf }}
				target='_blank'
				style={{ color: 'black' }}
				className={styleLink()}>
				<FontAwesomeIcon
					icon={faFilePdf}
					size={'5x'}
					style={{ color: '#a88471' }}
				/>
			</Link>
		</div>
	)
}

export default Icon
