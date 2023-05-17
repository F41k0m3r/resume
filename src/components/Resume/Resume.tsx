import './Resume.scss'
import {tech, tools} from './data';
import ListElement, {listElement} from './ListElement';
const Resume = () => {
    return (
        <div id={'resume'} className={'resume'}>
            <div className="resume__skills">
                <h1 className={'resume__skills__header'}>SKILLS</h1>
                <ul className={'resume__skills__table'}>
                    {tech.map((value:listElement, index:number)=>{
                        return( <li className={'resume__skills__table-element'}>
                                <ListElement key={index} linkToSvg={value.linkToSvg} alt={value.alt}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={'resume__tools'}>
                <h1 className={'resume__tools__header'}>TOOLS</h1>
                <ul className={'resume__tools__table'}>
                    {tools.map((value:listElement, index:number)=>{
                        return( <li className={'resume__tools__table-element'}>
                                <ListElement key={index} linkToSvg={value.linkToSvg} alt={value.alt}/>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    );
};

export default Resume;
