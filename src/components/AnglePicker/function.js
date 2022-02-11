/**
 * Returns a DOM element center offset
 * @param {HTMLElement} el
 * @returns {{ x: Number, y: Number }}
 */
export const centerOffset = (el) => {
  if (!el) return { y: 0, x: 0 };

  const { top, left, height, width } = el.getBoundingClientRect();

  return {
    y: top + height / 2,
    x: left + width / 2
  };
};


/**
 * Bounds an angle into circle degrees
 * @param {Number} angle
 * @returns {Number}
 */
export const clampAngle = (angle) => {
  if (angle < 0) {
    return 360 + angle;
  }

  if (angle > 360) {
    return angle - 360;
  }

  return angle;
};



/**
 * Snaps an angle if needed
 * @param {Number} angle - The angle to snap
 * @param {Number} snap - The snapping to use
 * @returns {Number}
 */
export const snapAngle = (angle, snap = 0) => {
  const module = angle % snap;

  if (module === 0) { return angle; }

  const snappingAddition = module > snap / 2 ? snap - module : (-1 * module);
  return angle + snappingAddition;
};


/**
 * Returns a given point, It's matched angle in degrees from the center
 * @param {Number} pointX - The point X
 * @param {Number} pointY - The point Y
 * @param {Object} center - Represents the center to calculate the point's angle from.
 * @returns {Number}
 */
export const pointDegrees = (pointX, pointY, center) => {
  const y = pointY - center.y;
  const x = pointX - center.x;

  const radians = Math.atan2(y, x);
  return Math.round(radians * (180 / Math.PI)) + 90;
};


export const noop = () => { };