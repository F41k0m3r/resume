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
                <h2 className={'about__me__header'}>About Me</h2>
                <p>
                    I am a React developer. I own <text className={'about__me-skill'}>React</text>, <text className={'about__me-skill'}>CSS</text>, <text className={'about__me-skill'}>JavaScript</text>, <text className={'about__me-skill'}>SCSS</text>, <text className={'about__me-skill'}>TypeScript</text>, <text className={'about__me-skill'}>MobX</text>, <text className={'about__me-skill'}>Redux</text>, <text className={'about__me-skill'}>Zustand</text>. I work with adaptive, cross-browser and accessible layout. I know how to develop reactive applications.
                </p>
            </div>
            <div className="about__contact">
                <h2 className={'about__contact__header'}>Contact</h2>
                <p className={'about__contact-important'}>Roman</p>
                <p>Russia, Moscow Region</p>
                <p className={'about__contact-important'}>falkomer.contact@gmail.com</p>
            </div>
        </div>
    );
};

export default About;
