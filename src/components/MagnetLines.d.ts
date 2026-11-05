import type { CSSProperties, FC } from 'react';

export interface MagnetLinesProps {
  spacing?: number;
  rows?: number;
  columns?: number;
  containerSize?: number | string;
  lineColor?: string;
  accentColor?: string;
  lineWidth?: number;
  lineHeight?: number;
  baseAngle?: number;
  mode?: 'orbit' | 'attract' | 'spiral' | 'dipole';
  shape?: 'line' | 'arrow' | 'needle';
  rainbow?: boolean;
  radius?: number;
  fade?: number;
  edgeFade?: number;
  stretch?: number;
  reach?: number;
  scatter?: number;
  inertia?: number;
  bounce?: number;
  ripple?: number;
  clickPulse?: boolean;
  intro?: boolean;
  idle?: boolean;
  tiltX?: number;
  tiltY?: number;
  maxDevicePixelRatio?: number;
  className?: string;
  style?: CSSProperties;
}

declare const MagnetLines: FC<MagnetLinesProps>;
export default MagnetLines;

