import Image from 'next/image';

import styles from './page.module.css';

const contactLinks = [
    {
        id: 1,
        name: 'GitHub',
        url: 'https://github.com/ejparnell',
        icon: '/icons/github-mark/github-mark.png'
    },
    {
        id: 2,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/elizabethjparnell/',
        icon: '/icons/in-logo/LI-In-Bug.png'
    }
]

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.saturnVisualContainer}>
                <div className={styles.saturnVisualPlanet} />
                <div className={styles.saturnVisualRing} />
                <div className={styles.saturnVisualCircle} />
                <div className={styles.saturnVisualTriangle} />
                <div className={styles.saturnVisualLines} />
            </div>

            <div className={styles.circlesContainer}>
                <div className={styles.circleLines}>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className={styles.circleLine} />
                    ))}
                </div>
                <div className={styles.circleTransparent} />
                <div className={styles.circleAccent} />
            </div>

            <div className={styles.header}>
                <h1 className={styles.heading}>Beth Parnell</h1>
                <p className={styles.subheading}>
                    Software Engineer | Educator
                </p>
            </div>
            <p className={styles.description}>
                Welcome to my portfolio! I&apos;m Beth Parnell, a passionate
                software engineer and educator dedicated to crafting
                innovative solutions and sharing knowledge. Explore my
                projects, skills, and experiences as you navigate through my
                professional journey.
            </p>

            <div className={styles.contactLinks}>
                {contactLinks.map(link => (
                    <a
                        key={link.id}
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.contactLink}
                    >
                        <Image
                            src={link.icon}
                            alt={`${link.name} icon`}
                            width={32}
                            height={32}
                        />
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
