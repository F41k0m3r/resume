import {FC} from 'react';
import ParticlesBg from 'particles-bg'
import './Home.scss'
import {getCurrentYear} from '../../utils/getCurrentYear';
import SocialButton from '../UI/SocialButton/SocialButton';
import SouthIcon from '@mui/icons-material/South';
const Home:FC = () => {
    const currentYear:number = getCurrentYear()
    return (
        <div id={'home'} className={'home'}>
            <ParticlesBg
                color={'#158484'}
                type="cobweb"
                bg={true}
            />
            <div className={'home__wrap'}>
                <h1 className={'home__wrap__name'}>Falkomer</h1>
                <p className={'home__wrap__description'}>
                    I am a web development engineer and I use React.JS to develop web sites.
                    This project is a mine resume.
                    I have been programming for about {currentYear - 2021.5} year{currentYear - 2022 > 1 ? 's' : ''}.
                </p>
            </div>
            <div className="home__buttonsWrap">
                <div className="home__buttonsWrap__linksWrap">
                    <SocialButton
                        svgLink={'https://img.icons8.com/?size=512&id=lUktdBVdL4Kb&format=svg'}
                        text={'Telegram'}
                        link={'https://t.me/f41kom3r'}
                        size={38}
                    />
                    <SocialButton
                        svgLink={'https://img.icons8.com/?size=512&id=3tC9EQumUAuq&format=svg'}
                        text={'GitHub'}
                        link={'https://github.com/F41k0m3r'}
                    />
                    <SocialButton
                        svgLink={'https://img.icons8.com/?size=512&id=30888&format=svg'}
                        text={'Discord'}
                        link={'https://discordapp.com/users/748299471556706324'}
                    />
                </div>
                <a href="/resume/#about">
                    <span className="home__buttonsWrap__pulse">
                        <SouthIcon
                            className={'home__buttonsWrap__pulse__icon'}
                            fontSize={'medium'}
                        />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Home;
