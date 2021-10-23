import React, { useEffect, useState } from 'react'

export const useViewport = () => {
	const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = React.useState(window.innerHeight)

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth)
			// Set the height in state as well as the width
			setHeight(window.innerHeight)
		}

		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	return { width, height }
}