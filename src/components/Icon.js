import React from 'react'
import './icon.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = ({url, icon, size, name }) => {
    return (
			<div className='icon-card'>
				<Link to={{ pathname: url }} target='_blank' style={{color: 'black'}}>
					<FontAwesomeIcon icon={icon} size={size} />
				</Link>
                <p>{name}</p>
			</div>
		)
}

export default Icons