import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const [isDesktop, setIsDesktop]     = useState(false);
    const [windowSize, setWindowSize]   = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);
            setWindowSize(window.innerWidth)
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isDesktop, windowSize };
};

export default useWindowSize;