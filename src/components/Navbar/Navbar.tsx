import {FC, useEffect, useState} from 'react';
import './Navbar.scss'
import {useScroll} from '../../hook/useScroll';
import Text from './Text';
const Navbar:FC = () => {
    const {windowHeight, scrollValue} = useScroll();
    const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
    const [isTransparent, setIsTransparent] = useState<boolean>(true);

    useEffect(() => {
        if (scrollValue > 150 && scrollValue < windowHeight) {
            setIsHeaderVisible(false)
        }else if (scrollValue > windowHeight) {
            setIsHeaderVisible(true)
            setIsTransparent(false)
        }else if (scrollValue < 150) {
            setIsHeaderVisible(true)
            setIsTransparent(true)
        }
    }, [scrollValue, windowHeight]);
    return (
        <div className={isHeaderVisible ? isTransparent? 'header' : 'header notTransparent' : 'header hidden'}>
            <Text to={'home'} text={'Home'}/>
            <Text to={'about'} text={'About'}/>
            <Text to={'resume'} text={'Resume'}/>
        </div>
    );
};

export default Navbar;
