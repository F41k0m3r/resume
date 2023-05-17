import {FC} from 'react';

interface props {
    to:string,
    text:string
}

const Text:FC<props> = ({to, text}) => {
    return (
        <a href={`/#${to}`}>
            <p className={'header-text'}>{text}</p>
        </a>
    );
};

export default Text;
