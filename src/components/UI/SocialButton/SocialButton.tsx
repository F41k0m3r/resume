import './SocialButton.scss'
import {FC, Fragment, useState} from 'react';

interface props {
    svgLink:string
    color?:string
    hoverColor?:string
    text:string
    link:string
    size?:number
}
const SocialButton:FC<props> = ({svgLink, text, color='#172dff', link, hoverColor='slateblue', size=40}) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const style = {
        button: {
            'backgroundColor':isHover ? hoverColor : color,
            'transition': 'background-color .3s',
        }
    }
    return (
        <Fragment>
            <a
                href={link}
                className={'button'}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div style={style.button} className={'button__wrap'}>
                    <img
                        width={size}
                        height={size}
                        alt={text}
                        src={svgLink}
                        className={'button__wrap__icon'}></img>
                    <div className={'button__wrap__text'}>{text}</div>
                </div>
            </a>
        </Fragment>
    );
};

export default SocialButton;
