import styles from './cta.module.scss';
import Link, { LinkProps } from "next/link";
import { MdArrowOutward } from "react-icons/md";

interface CtaProps extends LinkProps {
    children: React.ReactNode;
}

export default function Cta({ children, ...props }: CtaProps) {
    return (
        <Link {...props} className={styles['cta']} >
            {children}
            <MdArrowOutward />
        </Link>
    )
}