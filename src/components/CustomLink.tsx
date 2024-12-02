import Link, { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function CustomLink({ children, className, onClick, ...props }: CustomLinkProps) {
    return (
        <Link 
            {...props}
            className={`link ${className}`} 
            onClick={onClick}>
            {children}
        </Link>
    );
}