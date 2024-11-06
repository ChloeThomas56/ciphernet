import clsx from 'clsx';
import styles from './burgerMenu.module.scss';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
    return (
        <button
            className={clsx(styles['burger-menu'], {[styles['burger-menu--open']]: isOpen})}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="menu"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
                <span className={`${styles['burger-menu__line']} ${styles['burger-menu__line1']}`} />
                <span className={`${styles['burger-menu__line']} ${styles['burger-menu__line2']}`} />
        </button>
    );
}