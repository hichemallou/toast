import type { ReactNode } from 'react';

export type Variant = 'success' | 'error' | 'warning' | 'info' | 'loading';
export type Position =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';
export type Theme = 'light' | 'dark' | 'system';

export interface Action {
  text?: string;
  onClick: () => void | (() => Promise<void>);
}

export type ToastProps = {
  id?: number;
  text: string;
  description?: string;
  icon?: ReactNode;
  delayDuration?: number;
  theme?: Theme;
  action?: Action;
};

export type ToasterProperties = {
  theme?: Theme;
  maxToasts?: number;
  position?: Position;
  toastFont?: string;
};

export interface ToastPropsWithVariant extends ToastProps {
  variant?: Variant;
}
