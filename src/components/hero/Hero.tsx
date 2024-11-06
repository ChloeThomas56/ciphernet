'use client';

import styles from './hero.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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

    const variants = {
        hidden: { y: "100%" },
        visible: { y: 0 },
    };

    return (
      <section className={styles['hero']}>
        <div ref={hero}>
            <div className={styles['hero__content']}>
                <div className={styles['hero__line-wrapper']}>
                    <motion.h1 
                        ref={title} 
                        initial="hidden" 
                        animate="visible" 
                        variants={variants} 
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        CipherNet
                    </motion.h1>
                </div>
                <div className={styles['hero__line-wrapper']}>
                    <motion.p 
                        ref={adjustableText} 
                        initial="hidden" 
                        animate="visible" 
                        variants={variants} 
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Plongez dans le <span>cyberspace</span>
                    </motion.p>
                </div>
                <div className={styles['hero__line-wrapper']}>
                    <motion.p 
                        ref={text} 
                        initial="hidden" 
                        animate="visible" 
                        variants={variants} 
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        Sécurisez demain
                    </motion.p>
                </div>
            </div>
            <div className={styles['hero__illustration-container']}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5  }} 
                    animate={{ opacity: 0.6, scale: 1, rotate: 0 }} 
                    transition={{ duration: 1.5, delay: 1.4, ease: [0.19, 1, 0.22, 1] }}
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
  