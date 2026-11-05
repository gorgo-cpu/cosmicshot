import type { FC } from 'react';

export interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, unknown>;
  animationTo?: Record<string, unknown>[];
  easing?: string | number[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
  blur?: number;
  distance?: number;
  effect?: 'blur' | 'zoom' | 'tilt' | 'focus' | 'drift';
  staggerFrom?: 'start' | 'end' | 'center' | 'random';
  trigger?: 'view' | 'load' | 'hover' | 'click';
  loop?: boolean;
  loopDelay?: number;
  color?: string;
  fromColor?: string;
  focusOnHover?: boolean;
}

declare const BlurText: FC<BlurTextProps>;
export default BlurText;

