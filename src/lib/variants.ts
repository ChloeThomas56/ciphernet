import { Variants } from 'framer-motion';

export const textReveal: Variants = {
    initial: { y: "100%" },
    enter: (custom) => ({
        y: 0, 
        transition: { duration: 0.8, delay: custom?.delay || 0.3, ease: [0.2, 1, 0.66, 1] }
    })
}

export const illustrationScaleUp: Variants = {
    initial: { 
        opacity: 0, 
        scale: 0.9, 
        rotate: -5
    },
    enter: {
        opacity: 0.6, 
        scale: 1, 
        rotate: 0,
        transition: { duration: 1.5, delay: 1.4, ease: [0.19, 1, 0.22, 1] }
    }
}