import React, { useState, useEffect } from 'react'
import SocialMediaCard from './SocialMediaCard'
import './home.css'

const Home = ({ homeCard:{ title, subtitle, socialMedia } }) => {
    const [filteredSocialMedia, setFilteredSocialMedia] = useState(null)

    const filterSocialMedia = socialMedia => socialMedia.filter(social => social.url !== '')

    useEffect(() => {
        setFilteredSocialMedia(filterSocialMedia(socialMedia))
    },[socialMedia])

    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {filteredSocialMedia && ( 
                <SocialMediaCard filteredSocialMedia={filteredSocialMedia}/>
            )}
        </>
    )
}

export default Home