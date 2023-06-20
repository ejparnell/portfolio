import './App.css'
import { NAME, TYPING_TEXT, SOCIALS } from './../../../utils/constants'
import TypingText from '../../shared/TypingText/TypingText'
import SocialIcon from '../../shared/SocialIcon/SocialIcon'

export default function App() {

  return (
    <div className='landing-container'>
      <div className='landing-text-container'>
        <h1 className='landing-heading'>{NAME}</h1>
        <TypingText typingText={TYPING_TEXT}/>
        <SocialIcon socials={SOCIALS}/>
      </div>
    </div>
  )
}
