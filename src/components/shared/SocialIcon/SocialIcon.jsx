import PropTypes from 'prop-types'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function SocialIcon({ socials }) {

    const icons = socials.map((social, index) => {
        return (
            <Link to={social.url} target='_blank' rel='noreferrer' key={index} style={{color: 'black', marginRight: '10px'}}>
                <FontAwesomeIcon icon={social.name === 'github' ? faGithubSquare : faLinkedin } size='3x'/>
            </Link>
        )
    })

    return (
        <div style={{margin: '25px'}}>
            {icons}
        </div>
        
    )
}

SocialIcon.propTypes = {
    socials: PropTypes.arrayOf(PropTypes.object).isRequired,
}
