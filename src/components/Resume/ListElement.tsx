import {FC, Fragment} from 'react';

export interface listElement  {
    linkToSvg:string
    alt:string
    size?:number
}

const ListElement:FC<listElement> = ({linkToSvg, alt, size=50}) => {
    return (
        <Fragment>
            <img
                src={linkToSvg}
                alt={alt}
                width={size}
                height={size}
            />
        </Fragment>
    );
};

export default ListElement;
