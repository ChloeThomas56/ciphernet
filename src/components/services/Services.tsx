'use client';

import styles from './services.module.scss';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import useWindowSize from '@/hooks/useWindowSize';
import Cta from '../cta/Cta';

export default function Services() {
    const servicesSection   = useRef<HTMLDivElement | null>(null);
    const { isDesktop }     = useWindowSize();

    const items = [
        {
            title: "Analyse des données en temps réel",
            text: "Notre système capte et traite chaque donnée instantanément, repérant toute activité suspecte pour une réaction rapide. Vous pouvez ainsi transformer les données en insights stratégiques qui permettent de mieux anticiper les menaces."
        },
        {
            title: "Intégrité des systèmes",
            text: "En blindant chaque maillon de votre infrastructure, nos solutions assurent une intégrité continue des systèmes. Même en cas de tentatives d'intrusion, vos opérations restent stables et protégées."
        },
        {
            title: "Surveillance proactive",
            text: "Nos outils de surveillance détectent les risques potentiels avant qu'ils ne se concrétisent, grâce à des analyses prédictives. Cette approche proactive réduit les failles de sécurité et améliore la protection continue."
        },
        {
            title: "IA et Machine learning",
            text: "Grâce à l'intelligence artificielle et au machine learning, notre solution s'adapte aux nouvelles menaces en apprenant constamment. Cette capacité d'évolution garantit une défense active face aux attaques toujours plus complexes."
        }
    ];

    useEffect(() => {
        const items = document.querySelectorAll('.services__item');

        if (isDesktop && items.length > 0) {
            gsap.registerPlugin(ScrollTrigger);

            items.forEach((item) => {
                const title = item.querySelector(`.${styles['services__item__title']}`);

                if (title) {
                    gsap.to(title, {
                        scrollTrigger: {
                            trigger: item,
                            start: "center center",
                            end: "bottom center",
                            toggleActions: "play none none reverse",
                            pin: title,
                            pinSpacing: false,
                            onLeave: () => gsap.to(title, { opacity: 0 }), // Fade out on leave
                            onEnterBack: () => gsap.to(title, { opacity: 1 }) // Fade in on enter back
                        }
                    });
                }
            });
        }
    }, [isDesktop]);

    return (
        <section id="services" ref={servicesSection} className={styles['services']}>
            <h2>
                Services
            </h2>
            <ul className={styles['services__list']}>
                {items.map((item, index) => (
                    <li className={`${styles['services__item']} services__item`} key={index}>
                        <h3 className={`numbered-item ${styles['services__item__title']}`}>
                            {item.title}
                        </h3>
                        <div className={styles['services__item__details']}>
                            <p className="text">
                                {item.text}
                            </p>
                            <Cta href="#services">
                                En savoir plus
                            </Cta>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}