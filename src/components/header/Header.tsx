'use client';

import styles from './header.module.scss';
import Image from 'next/image';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CustomLink } from '../CustomLink';
import { useSmoothScrollingControl } from '../SmoothScrolling';

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
                                <CustomLink href={link.href} onClick={() => onClickAnchor(link.href)}>
                                    {link.name}
                                </CustomLink>
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
                                            delay: 0.5
                                        }}
                                    >
                                        <CustomLink 
                                            href={link.href}
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                onClickAnchor(link.href)
                                            }}>
                                            {link.name}
                                        </CustomLink>
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
  