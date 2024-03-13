import classNames from 'classnames';
import React, { Children } from 'react';

const AvatarGroup = ({ children, containerStyle, imageContainerStyle }) => {
    return (
        <div className={classNames('flex flex-row' ,containerStyle)}>
            {Children.map(children, (child, index) => (
                <div className={classNames('relative ml-[-5%] p-1 rounded-full', imageContainerStyle)} style={{zIndex: children.length - index }} key={index}>
                    {child}
                </div>
            ))}
        </div>
    );
}

export default AvatarGroup;
