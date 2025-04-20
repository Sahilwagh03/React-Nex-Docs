import React from 'react';
import { getAlertTypeStyle, getPositionClasses, getIconComponent } from './utils';
import {cn} from '../../lib/utils';

const Alert = ({
  type = '',
  title,
  message,
  titleStyle = '',
  messageStyle = '',
  alertContainerStyle = '',
  position = '',
  showiIcon = true,
  className=''
}) => {
  const IconComponent = getIconComponent(type); // Get the icon component based on the type

  return (
    <div
      className={cn(
        'rounded-md px-4 py-2 shadow-md min-w-[300px] h-auto flex items-center gap-2 flex-row',
        getAlertTypeStyle(type),
        alertContainerStyle,
        getPositionClasses(position),
        className
      )}
    >
      { showiIcon && 
        IconComponent
      }
      <div className="">
        {title && <h3 className={`font-bold ${titleStyle}`}>{title}</h3>}
        <p className={`text-sm ${messageStyle}`}>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
