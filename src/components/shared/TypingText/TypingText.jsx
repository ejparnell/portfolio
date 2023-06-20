import Typewriter from 'typewriter-effect'
import PropTypes from 'prop-types'

import './TypingText.css'

export default function TypingText({ typingText }) {
    return (
        <Typewriter
            options={{
                strings: typingText,
                autoStart: true,
                loop: true,
                pauseFor: 2500,
                wrapperClassName: 'typing-text',
                cursorClassName: 'typing-text-cursor'
            }}
        />
    )
}

TypingText.propTypes = {
    typingText: PropTypes.arrayOf(PropTypes.string).isRequired,
}