import classNames from 'classnames';
import React, { Children } from 'react';

const AvatarGroup = ({ children, containerStyle, imageContainerStyle }) => {
    const childCount = Children.count(children);
    const marginLeftValue = `-${100 / (childCount + 10)}%`; // Calculate margin-left based on the number of children

    return (
        <div className={classNames('flex flex-row', containerStyle)}>
            {Children.map(children, (child, index) => (
                <div
                    className={classNames('relative p-1 rounded-full', imageContainerStyle)}
                    style={{ zIndex: childCount - index, marginLeft: index !== 0 ? marginLeftValue : '0%' }}
                    key={index}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default AvatarGroup;
