import React from 'react';

import Navbar from '@/ui/Navbar';
import styles from './layout.module.css';

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Navbar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    );
}