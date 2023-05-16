import {FC} from 'react';
import ParticlesBg from 'particles-bg'
import './Home.scss'
import {getCurrentYear} from '../../assets/functions';
const Home:FC = () => {
    const currentYear:number = getCurrentYear()
    return (
        <div className={'home'}>
            <ParticlesBg
                color={'#158484'}
                type="cobweb"
                bg={true}/>
            <div className={'home__wrap'}>
                <h1 className={'home__wrap__name'}>Falkomer</h1>
                <p className={'home__wrap__description'}>
                    I am a web development engineer and I use React.JS to develop web sites.
                    This project is a mine resume.
                    I have been programming for about {currentYear - 2022} year{currentYear - 2022 > 1 ? 's' : ''}.
                </p>
            </div>
        </div>
    );
};

export default Home;
