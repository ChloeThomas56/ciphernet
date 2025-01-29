'use client';

import styles from './core.module.scss';
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import useWindowSize from '@/hooks/useWindowSize';

export default function Core() {
    const coreSection   = useRef<HTMLDivElement | null>(null);
    const coreTitle     = useRef<HTMLDivElement | null>(null);
    const coreText      = useRef<HTMLDivElement | null>(null);
    const { isDesktop } = useWindowSize();

    useEffect(() => {
        if (coreSection.current && coreTitle.current && coreText.current) {
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(
                coreTitle.current,
                { position: "static" },
                {
                    position: "fixed",
                    scrollTrigger: {
                        trigger: coreSection.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                coreText.current,
                { x: '100%' },
                {
                    x: '0',
                    scrollTrigger: {
                        trigger: coreSection.current,
                        start: 'top top',
                        end: 'center top',
                        scrub: true,
                        onLeave: () => gsap.to(coreText.current, { opacity: 0 }),
                        onEnterBack: () => gsap.to(coreText.current, { opacity: 1 })
                    },
                }
            );

            if (isDesktop) {
                gsap.fromTo(
                    coreSection.current,
                    { backgroundColor: "#0c0c0c" },
                    {
                        backgroundColor: "#faf8f8",
                        scrollTrigger: {
                            trigger: coreSection.current,
                            start: 'center top',
                            end: 'bottom top',
                            scrub: true,
                        },
                    }
                );
            }
        }
    }, [isDesktop]);

    return (
        <section id="core" ref={coreSection} className={styles['core']}>
            <h2 ref={coreTitle} className={styles['core__title']}>
                Sécurité
            </h2>
            <p ref={coreText} className={styles['core__sliding-text']}>
                Sécuriser, Protéger
            </p>
        </section>
    )
}