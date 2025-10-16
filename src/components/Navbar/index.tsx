'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.css';

const NAV_ITEMS = [
    { href: '/', label: 'Home', icon: '/icons/nav-home.png' },
    { href: '/about', label: 'About', icon: '/icons/nav-about.png' },
    { href: '/projects', label: 'Projects', icon: '/icons/nav-projects.png' },
    { href: '/contact', label: 'Contact', icon: '/icons/nav-contact.png' },
    { href: '/learn-code', label: 'Learn Code', icon: '/icons/nav-learn-code.png' },
];
const NAV_ICON_SIZE = 24;

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className={styles.navbar}>
            {/* Desktop Navigation */}
            <ul className={`${styles.navList} ${styles.desktopNav}`}>
                {NAV_ITEMS.map((item) => (
                    <li key={item.href} className={styles.navItem}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
                className={styles.mobileMenuButton}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
            >
                <Image
                    src={isMenuOpen ? '/icons/close.png' : '/icons/menu.png'}
                    alt={isMenuOpen ? 'Close menu' : 'Open menu'}
                    width={24}
                    height={24}
                />
            </button>

            {/* Mobile Drawer */}
            <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ''}`}>
                <ul className={styles.mobileNavList}>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href} className={styles.mobileNavItem}>
                            <Image src={item.icon} alt={`${item.label} icon`} width={NAV_ICON_SIZE} height={NAV_ICON_SIZE} />
                            <Link href={item.href} onClick={closeMenu}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div 
                    className={styles.overlay}
                    onClick={closeMenu}
                    aria-hidden='true'
                />
            )}
        </nav>
    );
}