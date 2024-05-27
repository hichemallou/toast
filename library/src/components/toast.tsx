import { useState, type FC } from 'react';
import type { Position, ToastProps, Variant } from '../types/toast.types';
import '../styles/toast-component.css';

import { Error, Info, Success, Warning } from '../icons';
import { useTimeout } from '../hooks/useTimeout';
import { classNames } from '../utils';

const icons: Record<Variant, FC<React.SVGProps<SVGSVGElement>>> = {
  success: Success,
  error: Error,
  warning: Warning,
  info: Info,
};

interface ToastComponentProps extends ToastProps {
  toastPosition: Position;
  onClose: () => void;
}

const Toast = (props: ToastComponentProps) => {
  const IconComponent = props.variant ? icons[props.variant] : Info;
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const delayDuration = props.delayDuration || 4000;

  const { startTimer, clearTimer } = useTimeout(() => {
    handleCloseToast();
  }, delayDuration);

  const handleCloseToast = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (props.onClose) {
        props.onClose();
      }
    }, 300);
  };

  const handleMouseLeave = () => {
    startTimer();
  };

  const handleMouseEnter = () => {
    clearTimer();
  };

  const ANIMATION_ENTER_MAP: Record<Position, string> = {
    'top-left': 't_slide-top',
    'top-right': 't_slide-top',
    'top-center': 't_slide-top',
    'bottom-left': 't_slide-bottom',
    'bottom-right': 't_slide-bottom',
    'bottom-center': 't_slide-bottom',
  };

  const ANIMATION_EXIT_MAP: Record<Position, string> = {
    'top-left': 't_slide-left',
    'top-right': 't_slide-right',
    'top-center': 't_slide-top-exit',
    'bottom-left': 't_slide-left',
    'bottom-right': 't_slide-right',
    'bottom-center': 't_slide-bottom-exit',
  };

  const animationClass = isExiting
    ? ANIMATION_EXIT_MAP[props.toastPosition]
    : ANIMATION_ENTER_MAP[props.toastPosition];

  return (
    <div
      title={props.text}
      aria-label="notification"
      className={classNames(
        't_global',
        animationClass,
        props.theme === 'dark' ? 't_dark-theme' : '',
        props.theme === 'light' ? 't_light-theme' : '',
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="t_container">
        {props.variant &&
          (props.icon ? (
            <div className="t_icon">{props.icon}</div>
          ) : (
            <IconComponent
              width={props.iconSize || 18}
              height={props.iconSize || 18}
              className="t_icon"
            />
          ))}
        <div className="t_content">
          <p>{props.text}</p>
          {props.description && <p>{props.description}</p>}
        </div>
      </div>
      <div className="t_actions">
        {props.action && (
          <button onClick={props.action} title="Action button">
            Action
          </button>
        )}
        <button onClick={props.onClose} title="Close toast">
          Close
        </button>
      </div>
    </div>
  );
};

export default Toast;
