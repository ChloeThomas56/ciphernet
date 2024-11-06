'use client';

import styles from './innovation.module.scss';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import useWindowSize from '@/hooks/useWindowSize';

export default function Innovation() {
    const innovationSection = useRef<HTMLDivElement | null>(null);
    const wheel             = useRef<HTMLImageElement | null>(null);
    const { isDesktop }     = useWindowSize();
    
    useEffect(() => {
        if (isDesktop && innovationSection.current) {
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(
                `.${styles['innovation__item']}`,
                { y: 700 },
                {
                    y: 0,
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: innovationSection.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                        pin: true,
                    },
                }
            );

            if (wheel.current) {
                gsap.to(wheel.current, {
                    rotation: 360,
                    scrollTrigger: {
                        trigger: innovationSection.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                });
            }
        }
    }, [isDesktop]);

    return (
        <section id="innovation" ref={innovationSection} className={styles['innovation']}>
            <h2>Innovation</h2>
            <ul className={`grid ${styles['innovation__list']}`}>
                <li className={`numbered-item ${styles['innovation__item']}`}>
                    <h3>
                        Des solutions de sécurité quantique pour contrer les cyberattaques de demain.
                    </h3>
                </li>
                <li className={`numbered-item ${styles['innovation__item']}`}>
                    <h3>
                        Une authentification biométrique avancée qui garantit une sécurité sans faille.
                    </h3>
                </li>
                <li className={`numbered-item ${styles['innovation__item']}`}>
                    <h3>
                        Des algorithmes de chiffrement adaptatifs qui évoluent face aux nouvelles menaces.
                    </h3>
                </li>
                <li className={`numbered-item ${styles['innovation__item']}`}>
                    <h3>
                        Une détection basée sur des réseaux neuronaux pour une précision sans précédent.
                    </h3>
                </li>
            </ul>
            <div className={styles['innovation__illustration-container']}>
                <Image 
                    width={101}
                    height={101}
                    ref={wheel}
                    alt="Illustration de roue"
                    src="/images/gear.svg"
                />
            </div>
        </section>
    )
}