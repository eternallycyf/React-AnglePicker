import { number, string, bool, arrayOf, func, shape } from 'prop-types';

export const ANGLE_PICKER_PROP_TYPES = {
  angle: number.isRequired,
  setAngle: func.isRequired,
  size: number,
  snap: number
};

export const EVENTS = {
  MOUSEDOWN: 'mousedown',
  MOUSEMOVE: 'mousemove',
  MOUSEUP: 'mouseup',
  TOUCHSTART: 'touchstart',
  TOUCHMOVE: 'touchmove',
  TOUCHEND: 'touchend'
};