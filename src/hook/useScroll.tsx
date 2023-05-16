import {useEffect, useState} from 'react';

interface exportType {
    windowHeight:number,
    scrollValue:number
}
export function useScroll():exportType {
    const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
    const [scrollValue, setScrollValue] = useState<number>(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollValue(window.scrollY);
        };

        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return {
        windowHeight,
        scrollValue
    }
}