// 320px — 480px: Mobile devices
export const SM_MOBILE = (width) => {
    return width >= 320 && width <= 480 
}

export const TABLET = (width) => {
	return width >= 481 && width <= 768
}

export const SM_SCREEN_LAPTOP = (width) => {
    return width >= 769 && width <= 1024
}

export const DESKTOP = (width) => {
    return width >= 1025
}