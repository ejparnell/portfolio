'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Navbar.module.css';

const NAV_ITEMS = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const pathname = usePathname();

    const isActiveLink = (href: string) => {
        return pathname === href;
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                {NAV_ITEMS.map((item) => (
                    <li key={item.href} className={styles.navItem}>
                        <Link 
                            href={item.href}
                            className={isActiveLink(item.href) ? styles.activeLink : ''}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}