import React, { Children, createContext, useContext, useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import {cn} from '../../lib/utils';
const StepContextProvider = createContext()

const Step = ({ children, className }) => {
  const stepContext = useContext(StepContextProvider);
  const { status, index  } = stepContext;
  return (
    <div className={cn('flex items-center flex-shrink-0' , status === 'active' ? 'text-blue-500' : 'text-gray-500' , className)}>
      <div className="flex items-center">
        <div className={cn("h-10 w-10 rounded-full flex items-center justify-center", status !='complete' && 'border-2' )}>
          {status === 'complete' ? <StepIcon /> : <span className='text-black dark:text-white'>{index}</span>}
        </div>
        <div className="ml-4">
          {children}
        </div>
      </div>
    </div>
  );
};


// StepIcon Component
const StepIcon = ({className}) => {
  return (
    <div className={cn("h-10 w-10 rounded-full flex items-center justify-center bg-green-500 text-white",className)}>
      <BiCheck className='w-6 h-6'/>
    </div>
  );
};


// StepSeparator Component
const StepSeparator = ({className}) => {
  const stepContext = useContext(StepContextProvider);
  const { isLast, orientation ,status } = stepContext;
  if (isLast) return null;
  return (
    <div className={cn("flex-auto  border-gray-300 flex-shrink-0 ", status=='complete' && 'border-green-400 bg-green-400' , orientation =='vertical' ?  'min-h-[200px] w-[0.125rem] ml-5' : 'h-0 min-w-[150px] border-t-2' , className)}></div>
  );
};

// StepStatus Component
const StepStatus = ({ status ,className }) => {
  const statusClass = status === 'complete' ? 'text-green-500' : 'text-gray-500';
  return (
    <div className={cn(text-sm , statusClass , className)}>
      {status}
    </div>
  );
};


// StepTitle Component
const StepTitle = ({ children , className }) => {
  const stepContext = useContext(StepContextProvider);
  const { status } = stepContext;
  return (
    <div className={cn('text-xl font-semibold text-black dark:text-white' , status === 'complete' && '!text-green-400' ,className)}>
      {children}
    </div>
  );
};

//StepDescription Component
const StepDescription = ({children,className}) =>{
  return(
    <p className={cn('text-sm text-gray-400',className)}>{children}</p>
  )
}


// Stepper Component
const Stepper = ({ children, index, orientation = 'horizontal' }) => {

  function getStatus(step) {
    if (step <= index) return 'complete';
    if (step > index) return 'incomplete';
    else
      return 'active';
  }

  const stepElements = Children.toArray(children)
  return (
    <>
      <div className={cn("flex  gap-5" , orientation === 'vertical' ? 'flex-col' : 'flex-row items-center')}>
        {
          stepElements.map((child, index) => (

            <StepContextProvider.Provider value={{
              status: getStatus(index + 1),
              count: children.length,
              index: index + 1,
              orientation: orientation,
              isLast: index === children.length - 1,
              isFirst: index === 0,
              showLastSeparator: false,
            }}>
              {child}
            </StepContextProvider.Provider>

          ))
        }
      </div>
    </>
  );
};

// useSteps Hook
const useSteps = (props) => {
  const { index, count } = props;

  const [activeStep, setActiveStep] = useState(index);
  const maxStep = typeof count === 'number' ? count - 1 : 0;
  const activeStepPercent = activeStep / maxStep;

  return {
    activeStep,
    setActiveStep,
    activeStepPercent,
    isActiveStep(step) {
      return step === activeStep;
    },
    isCompleteStep(step) {
      return step < activeStep;
    },
    isIncompleteStep(step) {
      return step > activeStep;
    },
    getStatus(step) {
      if (step < activeStep) return 'complete';
      if (step > activeStep) return 'incomplete';
      return 'active';
    },
    goToNext() {
      setActiveStep((step) => {
        // console.log(step)
        return typeof count === 'number' ? Math.min(count, step + 1) : step + 1;
      });
    },
    goToPrevious() {
      setActiveStep((step) => Math.max(1, step - 1));
    },
  };
};

export {
  Step,
  StepIcon,
  StepSeparator,
  StepStatus,
  StepTitle,
  StepDescription,
  Stepper,
  useSteps
};
