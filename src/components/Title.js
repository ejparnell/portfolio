import React from 'react'
import './title.css'
import { useViewport } from '../useViewport'
import { SM_MOBILE, TABLET, SM_SCREEN_LAPTOP, DESKTOP } from '../viewPortConst'

const Title = () => {
	const { width } = useViewport()

	const style = () => {
		if (TABLET(width)) {
			return 'title-tablet'
		}
		if (SM_SCREEN_LAPTOP(width)) {
			return 'title-sm-screen-laptop'
		}
		if (DESKTOP(width)) {
			return 'title-desktop'
		}
	}

	const smMobile = () => (
		<h1 className='title-sm-mobile'>
			<span>E</span>
			<span>P</span>
		</h1>
	)

	const mainView = () => (
		<h1 className={style()}>
			<span
				className={
					SM_SCREEN_LAPTOP(width) ? 'title-sm-screen-laptop-main-left' : false
				}>
				Elizabeth
			</span>
			<span
				className={
					SM_SCREEN_LAPTOP(width) ? 'title-sm-screen-laptop-main-right' : false
				}>
				Parnell
			</span>
		</h1>
	)

	return (
		<>
			{SM_MOBILE(width) && smMobile()}
			{(TABLET(width) || SM_SCREEN_LAPTOP(width) || DESKTOP(width)) &&
				mainView()}
		</>
	)
}

export default Title
