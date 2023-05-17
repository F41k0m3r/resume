import './Resume.scss'
import {tech, tools} from './data';
import ListElement, {listElement} from './ListElement';
const Resume = () => {
    return (
        <div id={'resume'} className={'resume'}>
            <h1 className={'resume__header'}>SKILLS</h1>
            <ul className={'resume__table'}>
                {tech.map((value:listElement, index:number)=>{
                    return( <li className={'resume__table-element'}>
                                <ListElement key={index} linkToSvg={value.linkToSvg} alt={value.alt}/>
                            </li>
                    )
                })}
            </ul>
            <h1 className={'resume__header'}>TOOLS</h1>
            <ul className={'resume__table'}>
                {tools.map((value:listElement, index:number)=>{
                    return( <li className={'resume__table-element'}>
                            <ListElement key={index} linkToSvg={value.linkToSvg} alt={value.alt}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Resume;
