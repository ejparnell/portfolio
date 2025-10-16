import React from 'react';

import Navbar from '@/components/Navbar';
import styles from './layout.module.css';

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
}