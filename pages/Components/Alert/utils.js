import { MdErrorOutline ,MdInfoOutline ,MdCheckCircleOutline ,MdWarningAmber  } from "react-icons/md";
export let alertClasses = '';

export const getAlertTypeStyle = (type) => {
    switch (type) {
        case 'info':
            alertClasses = 'bg-blue-100 text-black ';
            return alertClasses;
        case 'success':
            alertClasses = 'bg-green-100 text-black ';
            return alertClasses;
        case 'error':
            alertClasses = 'bg-red-100 text-black ';
            return alertClasses;
        case 'warning':
            alertClasses = 'bg-yellow-100 text-black ';
            return alertClasses;
        default:
            alertClasses = 'bg-white border-1 border-[#61DAFB] ';
            return alertClasses;
    }
};

export const getIconComponent = (type, color = '') => {
    switch (type) {
        case 'info':
            return <MdInfoOutline color={color || '#000000'} className="text-2xl"/>;
        case 'success':
            return <MdCheckCircleOutline color={color || '#00FF00'} className="text-2xl" />;
        case 'error':
            return <MdErrorOutline color={color || '#FF0000'} className="text-2xl"/>;
        case 'warning':
            return <MdWarningAmber color={color || '#FFA500'} className="text-2xl"/>;
        default:
            return <MdInfoOutline color={color || '#000000'} className="text-2xl"/>;
    }
};

export const getPositionClasses = (position) => {
    switch (position) {
        case 'top-left':
            return 'top-2 left-2';
        case 'top-right':
            return 'top-2 right-2';
        case 'bottom-left':
            return 'bottom-2 left-2';
        case 'bottom-right':
            return 'bottom-2 right-2';
         case 'top-center':
            return 'top-2 left-1/2 transform -translate-x-1/2'; // Center horizontally
        case 'bottom-center':
            return 'bottom-2 left-1/2 transform -translate-x-1/2'; // Center horizontally
        default:
            return 'top-[50%] left-[50%]';
    }
};
