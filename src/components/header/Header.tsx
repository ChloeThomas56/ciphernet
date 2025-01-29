'use client';

import styles from './header.module.scss';
import { useState } from 'react';
import { useSmoothScrollingControl } from '../SmoothScrolling';
import { AnimatePresence, motion } from 'framer-motion';
import { textReveal } from '@/lib/variants';
import Image from 'next/image';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import Link from 'next/link';
import Cta from '../cta/Cta';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lenis = useSmoothScrollingControl();

    const links = [
        {name: "Sécurité", href: "#core"},
        {name: "Services", href: "#services"},
        {name: "Innovation", href: "#innovation"}
    ];

    const toggleMenu = () => {
        if (isMenuOpen)
            setIsMenuOpen(false);
        else
            setIsMenuOpen(true);
    };

    const onClickAnchor = (target: string) => {
        lenis?.scrollTo(target, { duration: 1.5 });
    };

    return (
        <>
            <header className={styles['header']}>
                <div className={`logo-container ${styles['header__logo-container']}`}>
                    <Link href="/" onClick={() => lenis?.scrollTo(0, { duration: 1.5 })}>
                        <Image
                            src="/images/logo.svg"
                            alt="Logo CipherNet"
                            width={100}
                            height={100}
                            priority
                            className="logo"
                        />
                    </Link>
                </div>
                <div className={styles['header__menu-container']}>
                    <nav className={styles['nav--desktop']}>
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
                    <BurgerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
                </div>
            </header>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        key="menu" 
                        initial={{scale: 0, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0, opacity: 0}}
                        transition={{duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
                        className={styles['nav--mobile']}>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <motion.div
                                        variants={textReveal}
                                        initial="initial"
                                        animate="enter"
                                        custom={{ delay: 0.5 }}
                                    >
                                        <Link 
                                            href={link.href}
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                onClickAnchor(link.href)
                                            }}>
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                            <li>
                                <motion.div
                                    variants={textReveal}
                                    initial="initial"
                                    animate="enter"
                                    custom={{ delay: 0.5 }}
                                >
                                    <Cta href="#">
                                        Contact
                                    </Cta>
                                </motion.div>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}
  