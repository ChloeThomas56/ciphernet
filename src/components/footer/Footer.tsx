import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const links = [
        {name: "Sécurité", href: "#core"},
        {name: "Services", href: "#services"},
        {name: "Innovation", href: "#innovation"}
    ];

    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__content']}>
                <div>
                    <div className={`logo-container ${styles['footer__logo-container']}`}>
                        <Image
                            src="/images/logo.svg"
                            alt="Logo CipherNet"
                            width={100}
                            height={100}
                        />
                    </div>
                    <Link href="#" className={styles['footer__contact-link']}>
                        Contactez-nous
                    </Link>
                </div>
                <nav className={styles['footer__nav']}>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index} className={styles['footer__nav__item']}>
                                <Link href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={styles['footer__copyright']}>
                CipherNet © 2024
            </div>
        </footer>
    )
}