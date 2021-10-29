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
		<div className='title-sm-mobile'>
			<span>E</span>
			<span>P</span>
		</div>
	)

	const mainView = () => (
		<h1 className={style()}>
			<span
				className={
					SM_SCREEN_LAPTOP(width) || DESKTOP(width)
						? 'title-sm-screen-laptop-main-left'
						: ''
				}>
				Elizabeth
			</span>
			<span
				className={
					SM_SCREEN_LAPTOP(width) || DESKTOP(width)
						? 'title-sm-screen-laptop-main-right'
						: ''
				}>
				Parnell
			</span>
		</h1>
	)

	return (
		<div>
			{SM_MOBILE(width) && smMobile()}
			{(TABLET(width) || SM_SCREEN_LAPTOP(width) || DESKTOP(width)) &&
				mainView()}
		</div>
	)
}

export default Title
