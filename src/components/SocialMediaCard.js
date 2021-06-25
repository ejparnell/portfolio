import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMediaCard = ({ filteredSocialMedia }) => (
    <>
    {console.log(filteredSocialMedia)}
    <p>social media card rendered</p>
    {filteredSocialMedia.map(social => (
        <>
            <p>{social.name}</p>
            <FontAwesomeIcon icon={social.logo} />
        </>
    ))}
    </>
)

export default SocialMediaCard