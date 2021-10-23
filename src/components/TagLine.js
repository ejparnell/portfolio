import React from 'react'
import './tagLine.css'
import { useViewport } from '../useViewport'
import { SM_MOBILE, TABLET, SM_SCREEN_LAPTOP, DESKTOP } from '../viewPortConst'

const TagLine = () => {
	const { width } = useViewport()

	const smMobileTablet = () => (
		<h1 className='tag-line-sm-mobile-tablet'>
			<span>Software Engineer</span>
			<span>Educator</span>
			<span>Crazy Cat Lady</span>
		</h1>
	)

	const mainView = () => (
		<h1 className='tag-line-sm-screen-laptop'>
			Software Engineer | Educator | Crazy Cat Lady
		</h1>
	)

	return (
		<>
			{(SM_MOBILE(width) || TABLET(width)) && smMobileTablet()}
			{(SM_SCREEN_LAPTOP(width) || DESKTOP(width)) && mainView()}
		</>
	)
}

export default TagLine
