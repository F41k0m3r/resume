import {FC, useEffect, useState} from 'react';
import './Header.scss'
import {useScroll} from '../../hook/useScroll';
const MyComponent:FC = () => {
    const {windowHeight, scrollValue} = useScroll()
    const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
    const [isTransparent, setIsTransparent] = useState<boolean>(true)
    useEffect(() => {
        if (scrollValue > 400 && scrollValue < windowHeight) {
            setIsHeaderVisible(false)
        }else if (scrollValue > windowHeight) {
            setIsHeaderVisible(true)
            setIsTransparent(false)
        }else if (scrollValue < 400) {
            setIsHeaderVisible(true)
            setIsTransparent(true)
        }
    }, [scrollValue, windowHeight]);
    return (
        <div className={isHeaderVisible ? isTransparent? 'header' : 'header notTransparent' : 'header hidden'}>
            <p className={'header-text'}>Home</p>
            <p className={'header-text'}>About</p>
            <p className={'header-text'}>Resume</p>
            <p className={'header-text'}>Projects</p>
            <p className={'header-text'}>Contact</p>
        </div>
    );
};

export default MyComponent;
