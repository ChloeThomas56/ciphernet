'use client';

import styles from './footer.module.scss';
import { useSmoothScrollingControl } from '../SmoothScrolling';
import Image from 'next/image';
import Cta from '../cta/Cta';
import Link from 'next/link';

export default function Footer() {
    const lenis = useSmoothScrollingControl();

    const onClickAnchor = (target: string) => {
        lenis?.scrollTo(target, { duration: 1.5 });
    };

    const links = [
        {name: "Sécurité", href: "#core"},
        {name: "Services", href: "#services"},
        {name: "Innovation", href: "#innovation"}
    ];

    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__content']}>
                <div className={styles['footer__logo-container']}>
                    <Image
                        src="/images/logo.svg"
                        alt="Logo CipherNet"
                        width={100}
                        height={100}
                        className="logo"
                    />
                </div>
                <nav className={styles['footer__nav']}>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <Link href={link.href} onClick={() => onClickAnchor(link.href)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Cta href="#">
                                Contact
                            </Cta>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles['footer__copyright']}>
                CipherNet © 2024
            </div>
        </footer>
    )
}