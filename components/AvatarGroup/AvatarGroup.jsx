import React, { Children } from 'react';
import { cn } from '../../lib/utils';

const AvatarGroup = ({ children, containerStyle, imageContainerStyle, overlap = 'reverse' }) => {
    const childCount = Children.count(children);
    const marginLeftValue = `-${100 / (childCount + 10)}%`; // Calculate margin-left based on the number of children

    return (
        <div className={cn('flex flex-row', containerStyle)}>
            {Children.map(children, (child, index) => {
                const zIndexValue = overlap === 'forward' ? index : childCount - index;
                return (
                    <div
                        className={cn('relative p-1 rounded-full', imageContainerStyle)}
                        style={{ zIndex: zIndexValue, marginLeft: index !== 0 ? marginLeftValue : '0%' }}
                        key={index}
                    >
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

export default AvatarGroup;
