'use client';

import styles from './coreItems.module.scss';
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import useWindowSize from '@/hooks/useWindowSize';

export default function CoreItems() {
    const coreItemsSection  = useRef<HTMLDivElement | null>(null);
    const { isDesktop }     = useWindowSize();

    useEffect(() => {
        if (isDesktop && coreItemsSection.current) {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to('.core-item', {
                height: '103px',
                stagger: 0.5,
                scrollTrigger: {
                    trigger: coreItemsSection.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });
        }
    }, [isDesktop]);

    return (
        <section ref={coreItemsSection} className={styles['core-items']}>
            <ul>
                <li className="core-item">
                    <article>
                        <h3>Cryptage avancé</h3>
                        <p className="text">
                            Les algorithmes de cryptage avancé transforment vos données en un code inaccessibile aux cybercriminels. Grâce à des techniques telles que l&#39;AES et le RSA, nous repoussons les limites de la sécurité en garantissant que vos informations restent confidentielles. L&#39;innovation constante dans le domaine du cryptage permet d&#39;adapter les solutions aux nouvelles menaces, assurant ainsi une protection robuste et efficace à chaque étape.
                        </p>
                    </article>
                </li>
                <li className="core-item">
                    <article>
                        <h3>Protection des données</h3>
                        <p className="text">
                            Protéger vos données est essentiel dans un monde où les cybermenaces sont omniprésentes. Nous mettons en œuvre des stratégies de sauvegarde et de chiffrement pour garantir que vos informations personnelles et professionnelles restent à l&#39;abri des regards indiscrets. En adoptant des pratiques de gestion des données sécurisées, vous pouvez naviguer en toute confiance, sachant que vos données sont entre de bonnes mains et que des mesures proactives sont prises pour prévenir les violations.
                        </p>
                    </article>
                </li>
                <li className="core-item">
                    <article>
                        <h3>Détection des intrusions</h3>
                        <p className="text">
                            La détection des intrusions est une composante essentielle d&#39;une stratégie de cybersécurité efficace. En surveillant le réseau en temps réel, nous sommes en mesure d&#39;identifier les comportements suspects et de réagir rapidement aux menaces potentielles. Nos systèmes avancés utilisent l&#39;intelligence artificielle pour analyser les schémas de trafic et alerter en cas d&#39;activités anormales, garantissant ainsi une surveillance proactive qui protège vos ressources et réduit les risques d&#39;attaques.
                        </p>
                    </article>
                </li>
            </ul>
            <span>cipherNet</span>
        </section>
    )
}