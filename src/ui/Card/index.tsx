'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Card.module.css';

interface CardProps {
    title: string,
    description: string,
    links: Array<{
        label: string,
        url: string,
    }>;
    techUsed: Array<{
        name: string,
        tech: string[],
    }>;
}

export default function Card({title, description, techUsed, links }: CardProps) {
    const ICON_SIZE = 32;
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>

            <div className={styles.links}>
                {links.map((link) => (
                    <div key={link.label} className={styles.linkContainer}>
                        <Image
                            src='/icons/github-mark/github-mark.png'
                            alt='link icon'
                            width={ICON_SIZE}
                            height={ICON_SIZE}
                        />
                        <Link
                            href={link.url} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className={styles.link}
                        >
                            {link.label}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}