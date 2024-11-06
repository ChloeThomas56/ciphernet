'use client';

import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        {name: "Sécurité", href: "#core"},
        {name: "Services", href: "#services"},
        {name: "L'équipe", href: "#team"},
        {name: "Innovation", href: "#innovation"}
    ];

    const toggleMenu = () => {
        if (isMenuOpen)
            setIsMenuOpen(false);
        else
            setIsMenuOpen(true);
    };

    return (
        <header className={styles['header']}>
            <div className={`logo-container ${styles['header__logo-container']}`}>
                <Image
                    src="/images/logo.svg"
                    alt="Logo CipherNet"
                    width={100}
                    height={100}
                    priority
                />
            </div>
            <div className={styles['header__menu-container']}>
                <nav className={styles['nav--desktop']}>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index} className={styles['nav__item']}>
                                <Link href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <BurgerMenu toggleMenu={toggleMenu} isOpen={isMenuOpen} />
            </div>
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
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ 
                                            duration: 0.5, 
                                            delay: 0.5 + index * 0.25
                                        }}
                                    >
                                        <Link 
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
  