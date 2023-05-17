import './About.scss'
import {FC} from 'react';

const About:FC = () => {
    return (
        <div id={'about'} className={'about'}>
            <img
                draggable={false}
                width={80}
                height={80}
                className={'about__img'}
                src="https://pic.onlinewebfonts.com/svg/img_506739.svg"
                alt=""
            />
            <div className="about__me">
                <h2>About Me</h2>
                <p>
                    I'm a Junior+ React Developer from Russia. Also i can code on pure JS. Sometimes I use different state managers(for React), like Zustand, MobX, Redux TK. Sometimes i use CSS Modules, or SCSS Modules.
                </p>
            </div>
            <div className="about__contact">
                <h2>Contact</h2>
                <p>Roman</p>
                <p>Russia, Moscow Region</p>
                <p>falkomer.contact@gmail.com</p>
            </div>
        </div>
    );
};

export default About;
