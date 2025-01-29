'use client';

import styles from './hero.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { textReveal, illustrationScaleUp } from '@/lib/variants';
import Image from 'next/image';

export default function Hero() {
    const { windowSize, isDesktop } = useWindowSize();
    const hero                      = useRef<HTMLDivElement | null>(null);
    const title                     = useRef<HTMLDivElement | null>(null);
    const adjustableText            = useRef<HTMLDivElement | null>(null);
    const text                      = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isDesktop && hero.current && title.current && adjustableText.current && text.current) {
            const heroWidth = hero.current.offsetWidth;
            const textWidth = adjustableText.current.offsetWidth;
            const fontSize = (heroWidth / textWidth) * parseFloat(window.getComputedStyle(adjustableText.current).fontSize);

            adjustableText.current.style.fontSize = `${fontSize}px`;
            title.current.style.fontSize = `${fontSize}px`;
            text.current.style.fontSize = `${fontSize}px`;
        }

    }, [windowSize, isDesktop]);

    return (
      <section className={styles['hero']}>
        <div ref={hero}>
            <div className={styles['hero__content']}>
                <div className={styles['hero__line-wrapper']}>
                    <motion.h1 
                        ref={title} 
                        initial="initial" 
                        animate="enter" 
                        variants={textReveal}
                        custom={{ delay: 0.3 }}
                    >
                        CipherNet
                    </motion.h1>
                </div>
                <div className={styles['hero__line-wrapper']}>
                    <motion.p 
                        ref={adjustableText} 
                        initial="initial" 
                        animate="enter" 
                        variants={textReveal} 
                        custom={{ delay: 0.6 }}
                    >
                        Plongez dans le <span>cyberspace</span>
                    </motion.p>
                </div>
                <div className={styles['hero__line-wrapper']}>
                    <motion.p 
                        ref={text} 
                        initial="initial" 
                        animate="enter" 
                        variants={textReveal} 
                        custom={{ delay: 0.9 }}
                    >
                        Sécurisez demain
                    </motion.p>
                </div>
            </div>
            <div className={styles['hero__illustration-container']}>
                <motion.div
                    variants={illustrationScaleUp}
                    initial="initial"
                    animate="enter"
                    style={{height: '100%'}}
                >
                    <Image 
                        width={2620}
                        height={1490}
                        alt="Carte du monde"
                        src="/images/cartography.svg"
                    />
                </motion.div>
            </div>
        </div>
      </section>
    );
  }
  