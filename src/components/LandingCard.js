import React from 'react'
import './landingCard.css'
import { useViewport } from '../useViewport'
import { DESKTOP } from '../viewPortConst'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import HeroImageSVG from '../HeroImageSVG'

const LandingCard = () => {

	const handleScroll = () => {
		document.getElementById('content').scrollIntoView({ behavior: 'smooth' })
	}

    const { width } = useViewport()

	return (
		<div className='landing-card-container' onClick={() => handleScroll()}>
			<div className='landing-card-hero-image'>
				<HeroImageSVG
					height={DESKTOP(width) ? 400 : 200}
					width={DESKTOP(width) ? 400 : 200}
				/>
				<p>hello!</p>
			</div>
			<FontAwesomeIcon
				icon={faChevronDown}
				size={'3x'}
				className='landing-card-arrow-down'
			/>
		</div>
	)
}

export default LandingCard
