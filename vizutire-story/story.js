/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Mr = "184";
const fn = "", Bt = "srgb", Di = "srgb-linear", Li = "linear", nt = "srgb";
const cs = "300 es";
function fo(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function pr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Fa() {
  const i = pr("canvas");
  return i.style.display = "block", i;
}
const Ns = {};
function Fi(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function Ia(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function Le(...i) {
  i = Ia(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function Ze(...i) {
  i = Ia(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function mr(...i) {
  const e = i.join(" ");
  e in Ns || (Ns[e] = !0, Le(...i));
}
function po(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
const mo = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
class Cn {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const Lt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], hr = Math.PI / 180, us = 180 / Math.PI;
function wn() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Lt[i & 255] + Lt[i >> 8 & 255] + Lt[i >> 16 & 255] + Lt[i >> 24 & 255] + "-" + Lt[e & 255] + Lt[e >> 8 & 255] + "-" + Lt[e >> 16 & 15 | 64] + Lt[e >> 24 & 255] + "-" + Lt[t & 63 | 128] + Lt[t >> 8 & 255] + "-" + Lt[t >> 16 & 255] + Lt[t >> 24 & 255] + Lt[n & 255] + Lt[n >> 8 & 255] + Lt[n >> 16 & 255] + Lt[n >> 24 & 255]).toLowerCase();
}
function Ye(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function _o(i, e) {
  return (i % e + e) % e;
}
function Dr(i, e, t) {
  return (1 - t) * i + t * e;
}
function on(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function st(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Ps = class Ps {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ye(this.x, e.x, t.x), this.y = Ye(this.y, e.y, t.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ye(this.x, e, t), this.y = Ye(this.y, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ye(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ye(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
Ps.prototype.isVector2 = !0;
let Fe = Ps;
class On {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(e, t, n, r, s, a, o) {
    let c = n[r + 0], l = n[r + 1], f = n[r + 2], p = n[r + 3], u = s[a + 0], m = s[a + 1], x = s[a + 2], E = s[a + 3];
    if (p !== E || c !== u || l !== m || f !== x) {
      let d = c * u + l * m + f * x + p * E;
      d < 0 && (u = -u, m = -m, x = -x, E = -E, d = -d);
      let h = 1 - o;
      if (d < 0.9995) {
        const v = Math.acos(d), b = Math.sin(v);
        h = Math.sin(h * v) / b, o = Math.sin(o * v) / b, c = c * h + u * o, l = l * h + m * o, f = f * h + x * o, p = p * h + E * o;
      } else {
        c = c * h + u * o, l = l * h + m * o, f = f * h + x * o, p = p * h + E * o;
        const v = 1 / Math.sqrt(c * c + l * l + f * f + p * p);
        c *= v, l *= v, f *= v, p *= v;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = f, e[t + 3] = p;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], c = n[r + 1], l = n[r + 2], f = n[r + 3], p = s[a], u = s[a + 1], m = s[a + 2], x = s[a + 3];
    return e[t] = o * x + f * p + c * m - l * u, e[t + 1] = c * x + f * u + l * p - o * m, e[t + 2] = l * x + f * m + o * u - c * p, e[t + 3] = f * x - o * p - c * u - l * m, e;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), f = o(r / 2), p = o(s / 2), u = c(n / 2), m = c(r / 2), x = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * f * p + l * m * x, this._y = l * m * p - u * f * x, this._z = l * f * x + u * m * p, this._w = l * f * p - u * m * x;
        break;
      case "YXZ":
        this._x = u * f * p + l * m * x, this._y = l * m * p - u * f * x, this._z = l * f * x - u * m * p, this._w = l * f * p + u * m * x;
        break;
      case "ZXY":
        this._x = u * f * p - l * m * x, this._y = l * m * p + u * f * x, this._z = l * f * x + u * m * p, this._w = l * f * p - u * m * x;
        break;
      case "ZYX":
        this._x = u * f * p - l * m * x, this._y = l * m * p + u * f * x, this._z = l * f * x - u * m * p, this._w = l * f * p + u * m * x;
        break;
      case "YZX":
        this._x = u * f * p + l * m * x, this._y = l * m * p + u * f * x, this._z = l * f * x - u * m * p, this._w = l * f * p - u * m * x;
        break;
      case "XZY":
        this._x = u * f * p - l * m * x, this._y = l * m * p - u * f * x, this._z = l * f * x + u * m * p, this._w = l * f * p + u * m * x;
        break;
      default:
        Le("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], f = t[6], p = t[10], u = n + o + p;
    if (u > 0) {
      const m = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / m, this._x = (f - c) * m, this._y = (s - l) * m, this._z = (a - r) * m;
    } else if (n > o && n > p) {
      const m = 2 * Math.sqrt(1 + n - o - p);
      this._w = (f - c) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + l) / m;
    } else if (o > p) {
      const m = 2 * Math.sqrt(1 + o - n - p);
      this._w = (s - l) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (c + f) / m;
    } else {
      const m = 2 * Math.sqrt(1 + p - n - o);
      this._w = (a - r) / m, this._x = (s + l) / m, this._y = (c + f) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ye(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, f = t._w;
    return this._x = n * f + a * o + r * l - s * c, this._y = r * f + a * c + s * o - n * l, this._z = s * f + a * l + n * c - r * o, this._w = a * f - n * o - r * c - s * l, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between this quaternion and the target quaternion.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    let n = e._x, r = e._y, s = e._z, a = e._w, o = this.dot(e);
    o < 0 && (n = -n, r = -r, s = -s, a = -a, o = -o);
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o), f = Math.sin(l);
      c = Math.sin(c * l) / f, t = Math.sin(t * l) / f, this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + s * t, this._w = this._w * c + a * t, this._onChangeCallback();
    } else
      this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + s * t, this._w = this._w * c + a * t, this.normalize();
    return this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
const Ds = class Ds {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, n = 0) {
    this.x = e, this.y = t, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value.
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value.
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value.
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion(Bs.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Bs.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * n), f = 2 * (o * t - s * r), p = 2 * (s * n - a * t);
    return this.x = t + c * l + a * p - o * f, this.y = n + c * f + o * l - s * p, this.z = r + c * p + s * f - a * l, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ye(this.x, e.x, t.x), this.y = Ye(this.y, e.y, t.y), this.z = Ye(this.z, e.z, t.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ye(this.x, e, t), this.y = Ye(this.y, e, t), this.z = Ye(this.z, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ye(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = r * c - s * o, this.y = s * a - n * c, this.z = n * o - r * a, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return Lr.copy(this).projectOnVector(e), this.sub(Lr);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(Lr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ye(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
Ds.prototype.isVector3 = !0;
let N = Ds;
const Lr = /* @__PURE__ */ new N(), Bs = /* @__PURE__ */ new On(), Ls = class Ls {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(e, t, n, r, s, a, o, c, l) {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(e, t, n, r, s, a, o, c, l) {
    const f = this.elements;
    return f[0] = e, f[1] = r, f[2] = o, f[3] = t, f[4] = s, f[5] = c, f[6] = n, f[7] = a, f[8] = l, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], f = n[4], p = n[7], u = n[2], m = n[5], x = n[8], E = r[0], d = r[3], h = r[6], v = r[1], b = r[4], S = r[7], R = r[2], y = r[5], w = r[8];
    return s[0] = a * E + o * v + c * R, s[3] = a * d + o * b + c * y, s[6] = a * h + o * S + c * w, s[1] = l * E + f * v + p * R, s[4] = l * d + f * b + p * y, s[7] = l * h + f * S + p * w, s[2] = u * E + m * v + x * R, s[5] = u * d + m * b + x * y, s[8] = u * h + m * S + x * w, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8];
    return t * a * f - t * o * l - n * s * f + n * o * c + r * s * l - r * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], p = f * a - o * l, u = o * c - f * s, m = l * s - a * c, x = t * p + n * u + r * m;
    if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const E = 1 / x;
    return e[0] = p * E, e[1] = (r * l - f * n) * E, e[2] = (o * n - r * a) * E, e[3] = u * E, e[4] = (f * t - r * c) * E, e[5] = (r * s - o * t) * E, e[6] = m * E, e[7] = (n * c - l * t) * E, e[8] = (a * t - n * s) * E, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(e, t, n, r, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -r * l,
      r * c,
      -r * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(e, t) {
    return this.premultiply(Fr.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(Fr.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(Fr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
Ls.prototype.isMatrix3 = !0;
let Be = Ls;
const Fr = /* @__PURE__ */ new Be(), Os = /* @__PURE__ */ new Be().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Gs = /* @__PURE__ */ new Be().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function go() {
  const i = {
    enabled: !0,
    workingColorSpace: Di,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === nt && (r.r = pn(r.r), r.g = pn(r.g), r.b = pn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === nt && (r.r = hi(r.r), r.g = hi(r.g), r.b = hi(r.b))), r;
    },
    workingToColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    colorSpaceToWorking: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === fn ? Li : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(r, s) {
      return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [Di]: {
      primaries: e,
      whitePoint: n,
      transfer: Li,
      toXYZ: Os,
      fromXYZ: Gs,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: Bt },
      outputColorSpaceConfig: { drawingBufferColorSpace: Bt }
    },
    [Bt]: {
      primaries: e,
      whitePoint: n,
      transfer: nt,
      toXYZ: Os,
      fromXYZ: Gs,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: Bt }
    }
  }), i;
}
const qe = /* @__PURE__ */ go();
function pn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function hi(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Yn;
class Ua {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let n;
    if (e instanceof HTMLCanvasElement)
      n = e;
    else {
      Yn === void 0 && (Yn = pr("canvas")), Yn.width = e.width, Yn.height = e.height;
      const r = Yn.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = Yn;
    }
    return n.toDataURL(t);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = pr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = pn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(pn(t[n] / 255) * 255) : t[n] = pn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let xo = 0;
class Sr {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: xo++ }), this.uuid = wn(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Ir(r[a].image)) : s.push(Ir(r[a]));
      } else
        s = Ir(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ir(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Ua.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (Le("Texture: Unable to serialize Texture."), {});
}
let vo = 0;
const Ur = /* @__PURE__ */ new N();
class Ct extends Cn {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = Ct.DEFAULT_IMAGE, t = Ct.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, a = 1008, o = 1023, c = 1009, l = Ct.DEFAULT_ANISOTROPY, f = fn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: vo++ }), this.uuid = wn(), this.name = "", this.source = new Sr(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Fe(0, 0), this.repeat = new Fe(1, 1), this.center = new Fe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Be(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = f, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Ur).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Ur).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Ur).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  /**
   * Updates the texture transformation matrix from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        Le(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Ct.DEFAULT_IMAGE = null;
Ct.DEFAULT_MAPPING = 300;
Ct.DEFAULT_ANISOTROPY = 1;
const Fs = class Fs {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.x = e, this.y = t, this.z = n, this.w = r;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const c = e.elements, l = c[0], f = c[4], p = c[8], u = c[1], m = c[5], x = c[9], E = c[2], d = c[6], h = c[10];
    if (Math.abs(f - u) < 0.01 && Math.abs(p - E) < 0.01 && Math.abs(x - d) < 0.01) {
      if (Math.abs(f + u) < 0.1 && Math.abs(p + E) < 0.1 && Math.abs(x + d) < 0.1 && Math.abs(l + m + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, S = (m + 1) / 2, R = (h + 1) / 2, y = (f + u) / 4, w = (p + E) / 4, g = (x + d) / 4;
      return b > S && b > R ? b < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), r = y / n, s = w / n) : S > R ? S < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(S), n = y / r, s = g / r) : R < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(R), n = w / s, r = g / s), this.set(n, r, s, t), this;
    }
    let v = Math.sqrt((d - x) * (d - x) + (p - E) * (p - E) + (u - f) * (u - f));
    return Math.abs(v) < 1e-3 && (v = 1), this.x = (d - x) / v, this.y = (p - E) / v, this.z = (u - f) / v, this.w = Math.acos((l + m + h - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Ye(this.x, e.x, t.x), this.y = Ye(this.y, e.y, t.y), this.z = Ye(this.z, e.z, t.z), this.w = Ye(this.w, e.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Ye(this.x, e, t), this.y = Ye(this.y, e, t), this.z = Ye(this.z, e, t), this.w = Ye(this.w, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ye(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
Fs.prototype.isVector4 = !0;
let _t = Fs;
class Na extends Cn {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
   * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   * @property {number} [depth=1] - The texture depth.
   * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new _t(0, 0, e, t), this.scissorTest = !1, this.viewport = new _t(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, s = new Ct(r), a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: 1006,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Sr(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this.multiview = e.multiview, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class en extends Na {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class gs extends Ct {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ba extends Ct {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const vr = class vr {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(e, t, n, r, s, a, o, c, l, f, p, u, m, x, E, d) {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, f, p, u, m, x, E, d);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(e, t, n, r, s, a, o, c, l, f, p, u, m, x, E, d) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = c, h[2] = l, h[6] = f, h[10] = p, h[14] = u, h[3] = m, h[7] = x, h[11] = E, h[15] = d, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new vr().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(e) {
    if (e.determinant() === 0)
      return this.identity();
    const t = this.elements, n = e.elements, r = 1 / Zn.setFromMatrixColumn(e, 0).length(), s = 1 / Zn.setFromMatrixColumn(e, 1).length(), a = 1 / Zn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), f = Math.cos(s), p = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * f, m = a * p, x = o * f, E = o * p;
      t[0] = c * f, t[4] = -c * p, t[8] = l, t[1] = m + x * l, t[5] = u - E * l, t[9] = -o * c, t[2] = E - u * l, t[6] = x + m * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const u = c * f, m = c * p, x = l * f, E = l * p;
      t[0] = u + E * o, t[4] = x * o - m, t[8] = a * l, t[1] = a * p, t[5] = a * f, t[9] = -o, t[2] = m * o - x, t[6] = E + u * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const u = c * f, m = c * p, x = l * f, E = l * p;
      t[0] = u - E * o, t[4] = -a * p, t[8] = x + m * o, t[1] = m + x * o, t[5] = a * f, t[9] = E - u * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const u = a * f, m = a * p, x = o * f, E = o * p;
      t[0] = c * f, t[4] = x * l - m, t[8] = u * l + E, t[1] = c * p, t[5] = E * l + u, t[9] = m * l - x, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const u = a * c, m = a * l, x = o * c, E = o * l;
      t[0] = c * f, t[4] = E - u * p, t[8] = x * p + m, t[1] = p, t[5] = a * f, t[9] = -o * f, t[2] = -l * f, t[6] = m * p + x, t[10] = u - E * p;
    } else if (e.order === "XZY") {
      const u = a * c, m = a * l, x = o * c, E = o * l;
      t[0] = c * f, t[4] = -p, t[8] = l * f, t[1] = u * p + E, t[5] = a * f, t[9] = m * p - x, t[2] = x * p - m, t[6] = o * f, t[10] = E * p + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(Mo, e, So);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(e, t, n) {
    const r = this.elements;
    return kt.subVectors(e, t), kt.lengthSq() === 0 && (kt.z = 1), kt.normalize(), Mn.crossVectors(n, kt), Mn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? kt.x += 1e-4 : kt.z += 1e-4, kt.normalize(), Mn.crossVectors(n, kt)), Mn.normalize(), Ni.crossVectors(kt, Mn), r[0] = Mn.x, r[4] = Ni.x, r[8] = kt.x, r[1] = Mn.y, r[5] = Ni.y, r[9] = kt.y, r[2] = Mn.z, r[6] = Ni.z, r[10] = kt.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], f = n[1], p = n[5], u = n[9], m = n[13], x = n[2], E = n[6], d = n[10], h = n[14], v = n[3], b = n[7], S = n[11], R = n[15], y = r[0], w = r[4], g = r[8], A = r[12], P = r[1], C = r[5], L = r[9], W = r[13], X = r[2], I = r[6], V = r[10], q = r[14], ne = r[3], re = r[7], de = r[11], ye = r[15];
    return s[0] = a * y + o * P + c * X + l * ne, s[4] = a * w + o * C + c * I + l * re, s[8] = a * g + o * L + c * V + l * de, s[12] = a * A + o * W + c * q + l * ye, s[1] = f * y + p * P + u * X + m * ne, s[5] = f * w + p * C + u * I + m * re, s[9] = f * g + p * L + u * V + m * de, s[13] = f * A + p * W + u * q + m * ye, s[2] = x * y + E * P + d * X + h * ne, s[6] = x * w + E * C + d * I + h * re, s[10] = x * g + E * L + d * V + h * de, s[14] = x * A + E * W + d * q + h * ye, s[3] = v * y + b * P + S * X + R * ne, s[7] = v * w + b * C + S * I + R * re, s[11] = v * g + b * L + S * V + R * de, s[15] = v * A + b * W + S * q + R * ye, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html).
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], f = e[2], p = e[6], u = e[10], m = e[14], x = e[3], E = e[7], d = e[11], h = e[15], v = c * m - l * u, b = o * m - l * p, S = o * u - c * p, R = a * m - l * f, y = a * u - c * f, w = a * p - o * f;
    return t * (E * v - d * b + h * S) - n * (x * v - d * R + h * y) + r * (x * b - E * R + h * w) - s * (x * S - E * y + d * w);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], p = e[9], u = e[10], m = e[11], x = e[12], E = e[13], d = e[14], h = e[15], v = t * o - n * a, b = t * c - r * a, S = t * l - s * a, R = n * c - r * o, y = n * l - s * o, w = r * l - s * c, g = f * E - p * x, A = f * d - u * x, P = f * h - m * x, C = p * d - u * E, L = p * h - m * E, W = u * h - m * d, X = v * W - b * L + S * C + R * P - y * A + w * g;
    if (X === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / X;
    return e[0] = (o * W - c * L + l * C) * I, e[1] = (r * L - n * W - s * C) * I, e[2] = (E * w - d * y + h * R) * I, e[3] = (u * y - p * w - m * R) * I, e[4] = (c * P - a * W - l * A) * I, e[5] = (t * W - r * P + s * A) * I, e[6] = (d * S - x * w - h * b) * I, e[7] = (f * w - u * S + m * b) * I, e[8] = (a * L - o * P + l * g) * I, e[9] = (n * P - t * L - s * g) * I, e[10] = (x * y - E * S + h * v) * I, e[11] = (p * S - f * y - m * v) * I, e[12] = (o * A - a * C - c * g) * I, e[13] = (t * C - n * A + r * g) * I, e[14] = (E * b - x * R - d * v) * I, e[15] = (f * R - p * b + u * v) * I, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here](https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199).
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, f = s * o;
    return this.set(
      l * a + n,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      f * o + n,
      f * c - r * a,
      0,
      l * c - r * o,
      f * c + r * a,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(e, t, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, f = a + a, p = o + o, u = s * l, m = s * f, x = s * p, E = a * f, d = a * p, h = o * p, v = c * l, b = c * f, S = c * p, R = n.x, y = n.y, w = n.z;
    return r[0] = (1 - (E + h)) * R, r[1] = (m + S) * R, r[2] = (x - b) * R, r[3] = 0, r[4] = (m - S) * y, r[5] = (1 - (u + h)) * y, r[6] = (d + v) * y, r[7] = 0, r[8] = (x + b) * w, r[9] = (d - v) * w, r[10] = (1 - (u + E)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(e, t, n) {
    const r = this.elements;
    e.x = r[12], e.y = r[13], e.z = r[14];
    const s = this.determinant();
    if (s === 0)
      return n.set(1, 1, 1), t.identity(), this;
    let a = Zn.set(r[0], r[1], r[2]).length();
    const o = Zn.set(r[4], r[5], r[6]).length(), c = Zn.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), $t.copy(this);
    const l = 1 / a, f = 1 / o, p = 1 / c;
    return $t.elements[0] *= l, $t.elements[1] *= l, $t.elements[2] *= l, $t.elements[4] *= f, $t.elements[5] *= f, $t.elements[6] *= f, $t.elements[8] *= p, $t.elements[9] *= p, $t.elements[10] *= p, t.setFromRotationMatrix($t), n.x = a, n.y = o, n.z = c, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(e, t, n, r, s, a, o = 2e3, c = !1) {
    const l = this.elements, f = 2 * s / (t - e), p = 2 * s / (n - r), u = (t + e) / (t - e), m = (n + r) / (n - r);
    let x, E;
    if (c)
      x = s / (a - s), E = a * s / (a - s);
    else if (o === 2e3)
      x = -(a + s) / (a - s), E = -2 * a * s / (a - s);
    else if (o === 2001)
      x = -a / (a - s), E = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = p, l[9] = m, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = x, l[14] = E, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(e, t, n, r, s, a, o = 2e3, c = !1) {
    const l = this.elements, f = 2 / (t - e), p = 2 / (n - r), u = -(t + e) / (t - e), m = -(n + r) / (n - r);
    let x, E;
    if (c)
      x = 1 / (a - s), E = a / (a - s);
    else if (o === 2e3)
      x = -2 / (a - s), E = -(a + s) / (a - s);
    else if (o === 2001)
      x = -1 / (a - s), E = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = 0, l[12] = u, l[1] = 0, l[5] = p, l[9] = 0, l[13] = m, l[2] = 0, l[6] = 0, l[10] = x, l[14] = E, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
};
vr.prototype.isMatrix4 = !0;
let pt = vr;
const Zn = /* @__PURE__ */ new N(), $t = /* @__PURE__ */ new pt(), Mo = /* @__PURE__ */ new N(0, 0, 0), So = /* @__PURE__ */ new N(1, 1, 1), Mn = /* @__PURE__ */ new N(), Ni = /* @__PURE__ */ new N(), kt = /* @__PURE__ */ new N(), zs = /* @__PURE__ */ new pt(), Vs = /* @__PURE__ */ new On();
class mn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = mn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], f = r[9], p = r[2], u = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ye(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-f, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ye(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-p, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ye(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-p, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ye(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._x = Math.atan2(u, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ye(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-f, l), this._y = Math.atan2(-p, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ye(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-f, m), this._y = 0);
        break;
      default:
        Le("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, n) {
    return zs.makeRotationFromQuaternion(e), this.setFromRotationMatrix(zs, t, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(e) {
    return Vs.setFromEuler(this), this.setFromQuaternion(Vs, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
mn.DEFAULT_ORDER = "XYZ";
class xs {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let yo = 0;
const ks = /* @__PURE__ */ new N(), Kn = /* @__PURE__ */ new On(), ln = /* @__PURE__ */ new pt(), Bi = /* @__PURE__ */ new N(), Mi = /* @__PURE__ */ new N(), Eo = /* @__PURE__ */ new N(), To = /* @__PURE__ */ new On(), Hs = /* @__PURE__ */ new N(1, 0, 0), Ws = /* @__PURE__ */ new N(0, 1, 0), Xs = /* @__PURE__ */ new N(0, 0, 1), qs = { type: "added" }, bo = { type: "removed" }, $n = { type: "childadded", child: null }, Nr = { type: "childremoved", child: null };
class St extends Cn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: yo++ }), this.uuid = wn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = St.DEFAULT_UP.clone();
    const e = new N(), t = new mn(), n = new On(), r = new N(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new pt()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Be()
      }
    }), this.matrix = new pt(), this.matrixWorld = new pt(), this.matrixAutoUpdate = St.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new xs(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return Kn.setFromAxisAngle(e, t), this.quaternion.multiply(Kn), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return Kn.setFromAxisAngle(e, t), this.quaternion.premultiply(Kn), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Hs, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(Ws, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(Xs, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return ks.copy(e).applyQuaternion(this.quaternion), this.position.add(ks.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Hs, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(Ws, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(Xs, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's world space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(ln.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(e, t, n) {
    e.isVector3 ? Bi.copy(e) : Bi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Mi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ln.lookAt(Mi, Bi, this.up) : ln.lookAt(Bi, Mi, this.up), this.quaternion.setFromRotationMatrix(ln), r && (ln.extractRotation(r.matrixWorld), Kn.setFromRotationMatrix(ln), this.quaternion.premultiply(Kn.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (Ze("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(qs), $n.child = e, this.dispatchEvent($n), $n.child = null) : Ze("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(bo), Nr.child = e, this.dispatchEvent(Nr), Nr.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(e) {
    return this.updateWorldMatrix(!0, !1), ln.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), ln.multiply(e.parent.matrixWorld)), e.applyMatrix4(ln), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(qs), $n.child = e, this.dispatchEvent($n), $n.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mi, e, Eo), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mi, To, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const e = this.pivot;
    if (e !== null) {
      const t = e.x, n = e.y, r = e.z, s = this.matrix.elements;
      s[12] += t - s[0] * t - s[4] * n - s[8] * r, s[13] += n - s[1] * t - s[5] * n - s[9] * r, s[14] += r - s[2] * t - s[6] * n - s[10] * r;
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldNeedsUpdate} is `false`.
   */
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, f = c.length; l < f; l++) {
            const p = c[l];
            s(e.shapes, p);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), f = a(e.images), p = a(e.shapes), u = a(e.skeletons), m = a(e.animations), x = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), f.length > 0 && (n.images = f), p.length > 0 && (n.shapes = p), u.length > 0 && (n.skeletons = u), m.length > 0 && (n.animations = m), x.length > 0 && (n.nodes = x);
    }
    return n.object = r, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const f = o[l];
        delete f.metadata, c.push(f);
      }
      return c;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot !== null ? e.pivot.clone() : null, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
St.DEFAULT_UP = /* @__PURE__ */ new N(0, 1, 0);
St.DEFAULT_MATRIX_AUTO_UPDATE = !0;
St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class Nn extends St {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ao = { type: "move" };
class dr {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new Nn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Nn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new N(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new N()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Nn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new N(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new N(), this._grip.eventsEnabled = !1), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const E of e.hand.values()) {
          const d = t.getJointPose(E, n), h = this._getHandJoint(l, E);
          d !== null && (h.matrix.fromArray(d.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = d.radius), h.visible = d !== null;
        }
        const f = l.joints["index-finger-tip"], p = l.joints["thumb-tip"], u = f.position.distanceTo(p.position), m = 0.02, x = 5e-3;
        l.inputState.pinching && u > m + x ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && u <= m - x && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1, c.eventsEnabled && c.dispatchEvent({
          type: "gripUpdated",
          data: e,
          target: this
        })));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ao)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRJointSpace} inputjoint - The hand joint data.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Nn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Oa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Sn = { h: 0, s: 0, l: 0 }, Oi = { h: 0, s: 0, l: 0 };
function Br(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Xe {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = Bt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, qe.colorSpaceToWorking(this, t), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(e, t, n, r = qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, qe.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(e, t, n, r = qe.workingColorSpace) {
    if (e = _o(e, 1), t = Ye(t, 0, 1), n = Ye(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Br(a, s, e + 1 / 3), this.g = Br(a, s, e), this.b = Br(a, s, e - 1 / 3);
    }
    return qe.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(e, t = Bt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && Le("Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          Le("Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      Le("Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(e, t = Bt) {
    const n = Oa[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Le("Color: Unknown color " + e), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = pn(e.r), this.g = pn(e.g), this.b = pn(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = hi(e.r), this.g = hi(e.g), this.b = hi(e.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(e = Bt) {
    return qe.workingToColorSpace(Ft.copy(this), e), Math.round(Ye(Ft.r * 255, 0, 255)) * 65536 + Math.round(Ye(Ft.g * 255, 0, 255)) * 256 + Math.round(Ye(Ft.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = Bt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = qe.workingColorSpace) {
    qe.workingToColorSpace(Ft.copy(this), t);
    const n = Ft.r, r = Ft.g, s = Ft.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let c, l;
    const f = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const p = a - o;
      switch (l = f <= 0.5 ? p / (a + o) : p / (2 - a - o), a) {
        case n:
          c = (r - s) / p + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / p + 2;
          break;
        case s:
          c = (n - r) / p + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = f, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = qe.workingColorSpace) {
    return qe.workingToColorSpace(Ft.copy(this), t), e.r = Ft.r, e.g = Ft.g, e.b = Ft.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = Bt) {
    qe.workingToColorSpace(Ft.copy(this), e);
    const t = Ft.r, n = Ft.g, r = Ft.b;
    return e !== Bt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(e, t, n) {
    return this.getHSL(Sn), this.setHSL(Sn.h + e, Sn.s + t, Sn.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(e, t) {
    this.getHSL(Sn), e.getHSL(Oi);
    const n = Dr(Sn.h, Oi.h, t), r = Dr(Sn.s, Oi.s, t), s = Dr(Sn.l, Oi.l, t);
    return this.setHSL(n, r, s), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ft = /* @__PURE__ */ new Xe();
Xe.NAMES = Oa;
class yr {
  /**
   * Constructs a new fog.
   *
   * @param {number|Color} color - The fog's color.
   * @param {number} [near=1] - The minimum distance to start applying fog.
   * @param {number} [far=1000] - The maximum distance at which fog stops being calculated and applied.
   */
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new Xe(e), this.near = t, this.far = n;
  }
  /**
   * Returns a new fog with copied values from this instance.
   *
   * @return {Fog} A clone of this instance.
   */
  clone() {
    return new yr(this.color, this.near, this.far);
  }
  /**
   * Serializes the fog into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized fog
   */
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class Ga extends St {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new mn(), this.environmentIntensity = 1, this.environmentRotation = new mn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const jt = /* @__PURE__ */ new N(), cn = /* @__PURE__ */ new N(), Or = /* @__PURE__ */ new N(), un = /* @__PURE__ */ new N(), jn = /* @__PURE__ */ new N(), Jn = /* @__PURE__ */ new N(), Ys = /* @__PURE__ */ new N(), Gr = /* @__PURE__ */ new N(), zr = /* @__PURE__ */ new N(), Vr = /* @__PURE__ */ new N(), kr = /* @__PURE__ */ new _t(), Hr = /* @__PURE__ */ new _t(), Wr = /* @__PURE__ */ new _t();
class Ot {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new N(), t = new N(), n = new N()) {
    this.a = e, this.b = t, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), jt.subVectors(e, t), r.cross(jt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(e, t, n, r, s) {
    jt.subVectors(r, t), cn.subVectors(n, t), Or.subVectors(e, t);
    const a = jt.dot(jt), o = jt.dot(cn), c = jt.dot(Or), l = cn.dot(cn), f = cn.dot(Or), p = a * l - o * o;
    if (p === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / p, m = (l * c - o * f) * u, x = (a * f - o * c) * u;
    return s.set(1 - m - x, x, m);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, un) === null ? !1 : un.x >= 0 && un.y >= 0 && un.x + un.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(e, t, n, r, s, a, o, c) {
    return this.getBarycoord(e, t, n, r, un) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, un.x), c.addScaledVector(a, un.y), c.addScaledVector(o, un.z), c);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return kr.setScalar(0), Hr.setScalar(0), Wr.setScalar(0), kr.fromBufferAttribute(e, t), Hr.fromBufferAttribute(e, n), Wr.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(kr, s.x), a.addScaledVector(Hr, s.y), a.addScaledVector(Wr, s.z), a;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(e, t, n, r) {
    return jt.subVectors(n, t), cn.subVectors(e, t), jt.cross(cn).dot(r) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return jt.subVectors(this.c, this.b), cn.subVectors(this.a, this.b), jt.cross(cn).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return Ot.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return Ot.getBarycoord(e, this.a, this.b, this.c, t);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(e, t, n, r, s) {
    return Ot.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return Ot.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return Ot.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    jn.subVectors(r, n), Jn.subVectors(s, n), Gr.subVectors(e, n);
    const c = jn.dot(Gr), l = Jn.dot(Gr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    zr.subVectors(e, r);
    const f = jn.dot(zr), p = Jn.dot(zr);
    if (f >= 0 && p <= f)
      return t.copy(r);
    const u = c * p - f * l;
    if (u <= 0 && c >= 0 && f <= 0)
      return a = c / (c - f), t.copy(n).addScaledVector(jn, a);
    Vr.subVectors(e, s);
    const m = jn.dot(Vr), x = Jn.dot(Vr);
    if (x >= 0 && m <= x)
      return t.copy(s);
    const E = m * l - c * x;
    if (E <= 0 && l >= 0 && x <= 0)
      return o = l / (l - x), t.copy(n).addScaledVector(Jn, o);
    const d = f * x - m * p;
    if (d <= 0 && p - f >= 0 && m - x >= 0)
      return Ys.subVectors(s, r), o = (p - f) / (p - f + (m - x)), t.copy(r).addScaledVector(Ys, o);
    const h = 1 / (d + E + u);
    return a = E * h, o = u * h, t.copy(n).addScaledVector(jn, a).addScaledVector(Jn, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class fi {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new N(1 / 0, 1 / 0, 1 / 0), t = new N(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Jt.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Jt.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(e, t) {
    const n = Jt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Jt) : Jt.fromBufferAttribute(s, a), Jt.applyMatrix4(e.matrixWorld), this.expandByPoint(Jt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Gi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Gi.copy(n.boundingBox)), Gi.applyMatrix4(e.matrixWorld), this.union(Gi);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, Jt), Jt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Si), zi.subVectors(this.max, Si), Qn.subVectors(e.a, Si), ei.subVectors(e.b, Si), ti.subVectors(e.c, Si), yn.subVectors(ei, Qn), En.subVectors(ti, ei), Dn.subVectors(Qn, ti);
    let t = [
      0,
      -yn.z,
      yn.y,
      0,
      -En.z,
      En.y,
      0,
      -Dn.z,
      Dn.y,
      yn.z,
      0,
      -yn.x,
      En.z,
      0,
      -En.x,
      Dn.z,
      0,
      -Dn.x,
      -yn.y,
      yn.x,
      0,
      -En.y,
      En.x,
      0,
      -Dn.y,
      Dn.x,
      0
    ];
    return !Xr(t, Qn, ei, ti, zi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Xr(t, Qn, ei, ti, zi)) ? !1 : (Vi.crossVectors(yn, En), t = [Vi.x, Vi.y, Vi.z], Xr(t, Qn, ei, ti, zi));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, Jt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Jt).length() * 0.5), e;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (hn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), hn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), hn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), hn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), hn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), hn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), hn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), hn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(hn), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const hn = [
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N(),
  /* @__PURE__ */ new N()
], Jt = /* @__PURE__ */ new N(), Gi = /* @__PURE__ */ new fi(), Qn = /* @__PURE__ */ new N(), ei = /* @__PURE__ */ new N(), ti = /* @__PURE__ */ new N(), yn = /* @__PURE__ */ new N(), En = /* @__PURE__ */ new N(), Dn = /* @__PURE__ */ new N(), Si = /* @__PURE__ */ new N(), zi = /* @__PURE__ */ new N(), Vi = /* @__PURE__ */ new N(), Ln = /* @__PURE__ */ new N();
function Xr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Ln.fromArray(i, s);
    const o = r.x * Math.abs(Ln.x) + r.y * Math.abs(Ln.y) + r.z * Math.abs(Ln.z), c = e.dot(Ln), l = t.dot(Ln), f = n.dot(Ln);
    if (Math.max(-Math.max(c, l, f), Math.min(c, l, f)) > o)
      return !1;
  }
  return !0;
}
const Mt = /* @__PURE__ */ new N(), ki = /* @__PURE__ */ new Fe();
let Ro = 0;
class Zt extends Cn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n = !1) {
    if (super(), Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Ro++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(e) {
    return this.array.set(e), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ki.fromBufferAttribute(this, t), ki.applyMatrix3(e), this.setXY(t, ki.x, ki.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Mt.fromBufferAttribute(this, t), Mt.applyMatrix3(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Mt.fromBufferAttribute(this, t), Mt.applyMatrix4(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Mt.fromBufferAttribute(this, t), Mt.applyNormalMatrix(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Mt.fromBufferAttribute(this, t), Mt.transformDirection(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = on(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(e, t, n) {
    return this.normalized && (n = st(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = on(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = on(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = on(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = on(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array), r = st(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array), r = st(r, this.array), s = st(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
  /**
   * Disposes of the buffer attribute. Available only in {@link WebGPURenderer}.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class vs extends Zt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ms extends Zt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class at extends Zt {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
const wo = /* @__PURE__ */ new fi(), yi = /* @__PURE__ */ new N(), qr = /* @__PURE__ */ new N();
class Ui {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new N(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : wo.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    yi.subVectors(e, this.center);
    const t = yi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(yi, r / n), this.radius += r;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (qr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(yi.copy(e.center).add(qr)), this.expandByPoint(yi.copy(e.center).sub(qr))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Sphere} A reference to this bounding sphere.
   */
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
let Co = 0;
const Yt = /* @__PURE__ */ new pt(), Yr = /* @__PURE__ */ new St(), ni = /* @__PURE__ */ new N(), Ht = /* @__PURE__ */ new fi(), Ei = /* @__PURE__ */ new fi(), At = /* @__PURE__ */ new N();
class Rt extends Cn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Co++ }), this.uuid = wn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (fo(e) ? Ms : vs)(e, 1) : this.index = e, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @param {number|Array<number>} [indirectOffset=0] - The offset, in bytes, into the indirect drawing buffer where the value data begins. If an array is provided, multiple indirect draw calls will be made for each offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(e, t = 0) {
    return this.indirect = e, this.indirectOffset = t, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Be().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(e) {
    return Yt.makeRotationFromQuaternion(e), this.applyMatrix4(Yt), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(e) {
    return Yt.makeRotationX(e), this.applyMatrix4(Yt), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(e) {
    return Yt.makeRotationY(e), this.applyMatrix4(Yt), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(e) {
    return Yt.makeRotationZ(e), this.applyMatrix4(Yt), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(e, t, n) {
    return Yt.makeTranslation(e, t, n), this.applyMatrix4(Yt), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(e, t, n) {
    return Yt.makeScale(e, t, n), this.applyMatrix4(Yt), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(e) {
    return Yr.lookAt(e), Yr.updateMatrix(), this.applyMatrix4(Yr.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ni).negate(), this.translate(ni.x, ni.y, ni.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new at(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new fi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new N(-1 / 0, -1 / 0, -1 / 0),
        new N(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Ht.setFromBufferAttribute(s), this.morphTargetsRelative ? (At.addVectors(this.boundingBox.min, Ht.min), this.boundingBox.expandByPoint(At), At.addVectors(this.boundingBox.max, Ht.max), this.boundingBox.expandByPoint(At)) : (this.boundingBox.expandByPoint(Ht.min), this.boundingBox.expandByPoint(Ht.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ui());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Ht.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Ei.setFromBufferAttribute(o), this.morphTargetsRelative ? (At.addVectors(Ht.min, Ei.min), Ht.expandByPoint(At), At.addVectors(Ht.max, Ei.max), Ht.expandByPoint(At)) : (Ht.expandByPoint(Ei.min), Ht.expandByPoint(Ei.max));
        }
      Ht.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        At.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(At));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, f = o.count; l < f; l++)
            At.fromBufferAttribute(o, l), c && (ni.fromBufferAttribute(e, l), At.add(ni)), r = Math.max(r, n.distanceToSquared(At));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Zt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let g = 0; g < n.count; g++)
      o[g] = new N(), c[g] = new N();
    const l = new N(), f = new N(), p = new N(), u = new Fe(), m = new Fe(), x = new Fe(), E = new N(), d = new N();
    function h(g, A, P) {
      l.fromBufferAttribute(n, g), f.fromBufferAttribute(n, A), p.fromBufferAttribute(n, P), u.fromBufferAttribute(s, g), m.fromBufferAttribute(s, A), x.fromBufferAttribute(s, P), f.sub(l), p.sub(l), m.sub(u), x.sub(u);
      const C = 1 / (m.x * x.y - x.x * m.y);
      isFinite(C) && (E.copy(f).multiplyScalar(x.y).addScaledVector(p, -m.y).multiplyScalar(C), d.copy(p).multiplyScalar(m.x).addScaledVector(f, -x.x).multiplyScalar(C), o[g].add(E), o[A].add(E), o[P].add(E), c[g].add(d), c[A].add(d), c[P].add(d));
    }
    let v = this.groups;
    v.length === 0 && (v = [{
      start: 0,
      count: e.count
    }]);
    for (let g = 0, A = v.length; g < A; ++g) {
      const P = v[g], C = P.start, L = P.count;
      for (let W = C, X = C + L; W < X; W += 3)
        h(
          e.getX(W + 0),
          e.getX(W + 1),
          e.getX(W + 2)
        );
    }
    const b = new N(), S = new N(), R = new N(), y = new N();
    function w(g) {
      R.fromBufferAttribute(r, g), y.copy(R);
      const A = o[g];
      b.copy(A), b.sub(R.multiplyScalar(R.dot(A))).normalize(), S.crossVectors(y, A);
      const C = S.dot(c[g]) < 0 ? -1 : 1;
      a.setXYZW(g, b.x, b.y, b.z, C);
    }
    for (let g = 0, A = v.length; g < A; ++g) {
      const P = v[g], C = P.start, L = P.count;
      for (let W = C, X = C + L; W < X; W += 3)
        w(e.getX(W + 0)), w(e.getX(W + 1)), w(e.getX(W + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Zt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, m = n.count; u < m; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new N(), s = new N(), a = new N(), o = new N(), c = new N(), l = new N(), f = new N(), p = new N();
      if (e)
        for (let u = 0, m = e.count; u < m; u += 3) {
          const x = e.getX(u + 0), E = e.getX(u + 1), d = e.getX(u + 2);
          r.fromBufferAttribute(t, x), s.fromBufferAttribute(t, E), a.fromBufferAttribute(t, d), f.subVectors(a, s), p.subVectors(r, s), f.cross(p), o.fromBufferAttribute(n, x), c.fromBufferAttribute(n, E), l.fromBufferAttribute(n, d), o.add(f), c.add(f), l.add(f), n.setXYZ(x, o.x, o.y, o.z), n.setXYZ(E, c.x, c.y, c.z), n.setXYZ(d, l.x, l.y, l.z);
        }
      else
        for (let u = 0, m = t.count; u < m; u += 3)
          r.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), f.subVectors(a, s), p.subVectors(r, s), f.cross(p), n.setXYZ(u + 0, f.x, f.y, f.z), n.setXYZ(u + 1, f.x, f.y, f.z), n.setXYZ(u + 2, f.x, f.y, f.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      At.fromBufferAttribute(e, t), At.normalize(), e.setXYZ(t, At.x, At.y, At.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, f = o.itemSize, p = o.normalized, u = new l.constructor(c.length * f);
      let m = 0, x = 0;
      for (let E = 0, d = c.length; E < d; E++) {
        o.isInterleavedBufferAttribute ? m = c[E] * o.data.stride + o.offset : m = c[E] * f;
        for (let h = 0; h < f; h++)
          u[x++] = l[m++];
      }
      return new Zt(u, f, p);
    }
    if (this.index === null)
      return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Rt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let f = 0, p = l.length; f < p; f++) {
        const u = l[f], m = e(u, n);
        c.push(m);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], f = [];
      for (let p = 0, u = l.length; p < u; p++) {
        const m = l[p];
        f.push(m.toJSON(e.data));
      }
      f.length > 0 && (r[c] = f, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const l in r) {
      const f = r[l];
      this.setAttribute(l, f.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const f = [], p = s[l];
      for (let u = 0, m = p.length; u < m; u++)
        f.push(p[u].clone(t));
      this.morphAttributes[l] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, f = a.length; l < f; l++) {
      const p = a[l];
      this.addGroup(p.start, p.count, p.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class za {
  /**
   * Constructs a new interleaved buffer.
   *
   * @param {TypedArray} array - A typed array with a shared buffer storing attribute data.
   * @param {number} stride - The number of typed-array elements per vertex.
   */
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = wn();
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute array
   * data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this interleaved buffer.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {InterleavedBuffer} A reference to this interleaved buffer.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given interleaved buffer to this instance.
   *
   * @param {InterleavedBuffer} source - The interleaved buffer to copy.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  /**
   * Copies a vector from the given interleaved buffer to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this interleaved buffer.
   * @param {InterleavedBuffer} interleavedBuffer - The interleaved buffer to copy from.
   * @param {number} index2 - The source index into the given interleaved buffer.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  /**
   * Sets the given array data in the interleaved buffer.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this interleaved buffer's array.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns a new interleaved buffer with copied values from this instance.
   *
   * @param {Object} [data] - An object with shared array buffers that allows to retain shared structures.
   * @return {InterleavedBuffer} A clone of this instance.
   */
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = wn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the array data to the GPU. Can be used to perform clean-up operations after
   * the upload when data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Serializes the interleaved buffer into JSON.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized interleaved buffer.
   */
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = wn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const It = /* @__PURE__ */ new N();
class Ii {
  /**
   * Constructs a new interleaved buffer attribute.
   *
   * @param {InterleavedBuffer} interleavedBuffer - The buffer holding the interleaved data.
   * @param {number} itemSize - The item size.
   * @param {number} offset - The attribute offset into the buffer.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
  }
  /**
   * The item count of this buffer attribute.
   *
   * @type {number}
   * @readonly
   */
  get count() {
    return this.data.count;
  }
  /**
   * The array holding the interleaved buffer attribute data.
   *
   * @type {TypedArray}
   */
  get array() {
    return this.data.array;
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      It.fromBufferAttribute(this, t), It.applyMatrix4(e), this.setXYZ(t, It.x, It.y, It.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      It.fromBufferAttribute(this, t), It.applyNormalMatrix(e), this.setXYZ(t, It.x, It.y, It.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      It.fromBufferAttribute(this, t), It.transformDirection(e), this.setXYZ(t, It.x, It.y, It.z);
    return this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = on(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setComponent(e, t, n) {
    return this.normalized && (n = st(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = on(t, this.array)), t;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = on(t, this.array)), t;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = on(t, this.array)), t;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = on(t, this.array)), t;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, n, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array), r = st(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, n, r, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array), r = st(r, this.array), s = st(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = s, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An object with interleaved buffers that allows to retain the interleaved property.
   * @return {BufferAttribute|InterleavedBufferAttribute} A clone of this instance.
   */
  clone(e) {
    if (e === void 0) {
      Fi("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return new Zt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Ii(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON(e) {
    if (e === void 0) {
      Fi("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
let Po = 0;
class _n extends Cn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Po++ }), this.uuid = wn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Xe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          Le(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          Le(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.allowOverride === !1 && (n.allowOverride = !1), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class _r extends _n {
  /**
   * Constructs a new sprite material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Xe(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let ii;
const Ti = /* @__PURE__ */ new N(), ri = /* @__PURE__ */ new N(), si = /* @__PURE__ */ new N(), ai = /* @__PURE__ */ new Fe(), bi = /* @__PURE__ */ new Fe(), Va = /* @__PURE__ */ new pt(), Hi = /* @__PURE__ */ new N(), Ai = /* @__PURE__ */ new N(), Wi = /* @__PURE__ */ new N(), Zs = /* @__PURE__ */ new Fe(), Zr = /* @__PURE__ */ new Fe(), Ks = /* @__PURE__ */ new Fe();
class hs extends St {
  /**
   * Constructs a new sprite.
   *
   * @param {(SpriteMaterial|SpriteNodeMaterial)} [material] - The sprite material.
   */
  constructor(e = new _r()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", ii === void 0) {
      ii = new Rt();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new za(t, 5);
      ii.setIndex([0, 1, 2, 0, 2, 3]), ii.setAttribute("position", new Ii(n, 3, 0, !1)), ii.setAttribute("uv", new Ii(n, 2, 3, !1));
    }
    this.geometry = ii, this.material = e, this.center = new Fe(0.5, 0.5), this.count = 1;
  }
  /**
   * Computes intersection points between a casted ray and this sprite.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    e.camera === null && Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ri.setFromMatrixScale(this.matrixWorld), Va.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), si.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && ri.multiplyScalar(-si.z);
    const n = this.material.rotation;
    let r, s;
    n !== 0 && (s = Math.cos(n), r = Math.sin(n));
    const a = this.center;
    Xi(Hi.set(-0.5, -0.5, 0), si, a, ri, r, s), Xi(Ai.set(0.5, -0.5, 0), si, a, ri, r, s), Xi(Wi.set(0.5, 0.5, 0), si, a, ri, r, s), Zs.set(0, 0), Zr.set(1, 0), Ks.set(1, 1);
    let o = e.ray.intersectTriangle(Hi, Ai, Wi, !1, Ti);
    if (o === null && (Xi(Ai.set(-0.5, 0.5, 0), si, a, ri, r, s), Zr.set(0, 1), o = e.ray.intersectTriangle(Hi, Wi, Ai, !1, Ti), o === null))
      return;
    const c = e.ray.origin.distanceTo(Ti);
    c < e.near || c > e.far || t.push({
      distance: c,
      point: Ti.clone(),
      uv: Ot.getInterpolation(Ti, Hi, Ai, Wi, Zs, Zr, Ks, new Fe()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Xi(i, e, t, n, r, s) {
  ai.subVectors(i, t).addScalar(0.5).multiply(n), r !== void 0 ? (bi.x = s * ai.x - r * ai.y, bi.y = r * ai.x + s * ai.y) : bi.copy(ai), i.copy(e), i.x += bi.x, i.y += bi.y, i.applyMatrix4(Va);
}
const dn = /* @__PURE__ */ new N(), Kr = /* @__PURE__ */ new N(), qi = /* @__PURE__ */ new N(), Tn = /* @__PURE__ */ new N(), $r = /* @__PURE__ */ new N(), Yi = /* @__PURE__ */ new N(), jr = /* @__PURE__ */ new N();
class Ss {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new N(), t = new N(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, dn)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = dn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (dn.copy(this.origin).addScaledVector(this.direction, t), dn.distanceToSquared(e));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(e, t, n, r) {
    Kr.copy(e).add(t).multiplyScalar(0.5), qi.copy(t).sub(e).normalize(), Tn.copy(this.origin).sub(Kr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(qi), o = Tn.dot(this.direction), c = -Tn.dot(qi), l = Tn.lengthSq(), f = Math.abs(1 - a * a);
    let p, u, m, x;
    if (f > 0)
      if (p = a * c - o, u = a * o - c, x = s * f, p >= 0)
        if (u >= -x)
          if (u <= x) {
            const E = 1 / f;
            p *= E, u *= E, m = p * (p + a * u + 2 * o) + u * (a * p + u + 2 * c) + l;
          } else
            u = s, p = Math.max(0, -(a * u + o)), m = -p * p + u * (u + 2 * c) + l;
        else
          u = -s, p = Math.max(0, -(a * u + o)), m = -p * p + u * (u + 2 * c) + l;
      else
        u <= -x ? (p = Math.max(0, -(-a * s + o)), u = p > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -p * p + u * (u + 2 * c) + l) : u <= x ? (p = 0, u = Math.min(Math.max(-s, -c), s), m = u * (u + 2 * c) + l) : (p = Math.max(0, -(a * s + o)), u = p > 0 ? s : Math.min(Math.max(-s, -c), s), m = -p * p + u * (u + 2 * c) + l);
    else
      u = a > 0 ? -s : s, p = Math.max(0, -(a * u + o)), m = -p * p + u * (u + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, p), r && r.copy(Kr).addScaledVector(qi, u), m;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    dn.subVectors(e.center, this.origin);
    const n = dn.dot(this.direction), r = dn.dot(dn) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let n, r, s, a, o, c;
    const l = 1 / this.direction.x, f = 1 / this.direction.y, p = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l), f >= 0 ? (s = (e.min.y - u.y) * f, a = (e.max.y - u.y) * f) : (s = (e.max.y - u.y) * f, a = (e.min.y - u.y) * f), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), p >= 0 ? (o = (e.min.z - u.z) * p, c = (e.max.z - u.z) * p) : (o = (e.max.z - u.z) * p, c = (e.min.z - u.z) * p), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, dn) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(e, t, n, r, s) {
    $r.subVectors(t, e), Yi.subVectors(n, e), jr.crossVectors($r, Yi);
    let a = this.direction.dot(jr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Tn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Yi.crossVectors(Tn, Yi));
    if (c < 0)
      return null;
    const l = o * this.direction.dot($r.cross(Tn));
    if (l < 0 || c + l > a)
      return null;
    const f = -o * Tn.dot(jr);
    return f < 0 ? null : this.at(f / a, s);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Er extends _n {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Xe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new mn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const $s = /* @__PURE__ */ new pt(), Fn = /* @__PURE__ */ new Ss(), Zi = /* @__PURE__ */ new Ui(), js = /* @__PURE__ */ new N(), Ki = /* @__PURE__ */ new N(), $i = /* @__PURE__ */ new N(), ji = /* @__PURE__ */ new N(), Jr = /* @__PURE__ */ new N(), Ji = /* @__PURE__ */ new N(), Js = /* @__PURE__ */ new N(), Qi = /* @__PURE__ */ new N();
class Xt extends St {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new Rt(), t = new Er()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Ji.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const f = o[c], p = s[c];
        f !== 0 && (Jr.fromBufferAttribute(p, e), a ? Ji.addScaledVector(Jr, f) : Ji.addScaledVector(Jr.sub(t), f));
      }
      t.add(Ji);
    }
    return t;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Zi.copy(n.boundingSphere), Zi.applyMatrix4(s), Fn.copy(e.ray).recast(e.near), !(Zi.containsPoint(Fn.origin) === !1 && (Fn.intersectSphere(Zi, js) === null || Fn.origin.distanceToSquared(js) > (e.far - e.near) ** 2)) && ($s.copy(s).invert(), Fn.copy(e.ray).applyMatrix4($s), !(n.boundingBox !== null && Fn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Fn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, f = s.attributes.uv1, p = s.attributes.normal, u = s.groups, m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let x = 0, E = u.length; x < E; x++) {
          const d = u[x], h = a[d.materialIndex], v = Math.max(d.start, m.start), b = Math.min(o.count, Math.min(d.start + d.count, m.start + m.count));
          for (let S = v, R = b; S < R; S += 3) {
            const y = o.getX(S), w = o.getX(S + 1), g = o.getX(S + 2);
            r = er(this, h, e, n, l, f, p, y, w, g), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = d.materialIndex, t.push(r));
          }
        }
      else {
        const x = Math.max(0, m.start), E = Math.min(o.count, m.start + m.count);
        for (let d = x, h = E; d < h; d += 3) {
          const v = o.getX(d), b = o.getX(d + 1), S = o.getX(d + 2);
          r = er(this, a, e, n, l, f, p, v, b, S), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let x = 0, E = u.length; x < E; x++) {
          const d = u[x], h = a[d.materialIndex], v = Math.max(d.start, m.start), b = Math.min(c.count, Math.min(d.start + d.count, m.start + m.count));
          for (let S = v, R = b; S < R; S += 3) {
            const y = S, w = S + 1, g = S + 2;
            r = er(this, h, e, n, l, f, p, y, w, g), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = d.materialIndex, t.push(r));
          }
        }
      else {
        const x = Math.max(0, m.start), E = Math.min(c.count, m.start + m.count);
        for (let d = x, h = E; d < h; d += 3) {
          const v = d, b = d + 1, S = d + 2;
          r = er(this, a, e, n, l, f, p, v, b, S), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
        }
      }
  }
}
function Do(i, e, t, n, r, s, a, o) {
  let c;
  if (e.side === 1 ? c = n.intersectTriangle(a, s, r, !0, o) : c = n.intersectTriangle(r, s, a, e.side === 0, o), c === null) return null;
  Qi.copy(o), Qi.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Qi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Qi.clone(),
    object: i
  };
}
function er(i, e, t, n, r, s, a, o, c, l) {
  i.getVertexPosition(o, Ki), i.getVertexPosition(c, $i), i.getVertexPosition(l, ji);
  const f = Do(i, e, t, n, Ki, $i, ji, Js);
  if (f) {
    const p = new N();
    Ot.getBarycoord(Js, Ki, $i, ji, p), r && (f.uv = Ot.getInterpolatedAttribute(r, o, c, l, p, new Fe())), s && (f.uv1 = Ot.getInterpolatedAttribute(s, o, c, l, p, new Fe())), a && (f.normal = Ot.getInterpolatedAttribute(a, o, c, l, p, new N()), f.normal.dot(n.direction) > 0 && f.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new N(),
      materialIndex: 0
    };
    Ot.getNormal(Ki, $i, ji, u.normal), f.face = u, f.barycoord = p;
  }
  return f;
}
class ka extends Ct {
  /**
   * Constructs a new data texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = null, t = 1, n = 1, r, s, a, o, c, l = 1003, f = 1003, p, u) {
    super(null, a, o, c, l, f, r, s, p, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Qr = /* @__PURE__ */ new N(), Lo = /* @__PURE__ */ new N(), Fo = /* @__PURE__ */ new Be();
class An {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new N(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(e, t, n) {
    const r = Qr.subVectors(n, t).cross(Lo.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @param {boolean} [clampToLine=true] - Whether to clamp the intersection to the line segment.
   * @return {?Vector3} The intersection point. Returns `null` if no intersection is detected.
   */
  intersectLine(e, t, n = !0) {
    const r = e.delta(Qr), s = this.normal.dot(r);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / s;
    return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(e, t) {
    const n = t || Fo.getNormalMatrix(e), r = this.coplanarPoint(Qr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const In = /* @__PURE__ */ new Ui(), Io = /* @__PURE__ */ new Fe(0.5, 0.5), tr = /* @__PURE__ */ new N();
class Tr {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(e = new An(), t = new An(), n = new An(), r = new An(), s = new An(), a = new An()) {
    this.planes = [e, t, n, r, s, a];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(e, t = 2e3, n = !1) {
    const r = this.planes, s = e.elements, a = s[0], o = s[1], c = s[2], l = s[3], f = s[4], p = s[5], u = s[6], m = s[7], x = s[8], E = s[9], d = s[10], h = s[11], v = s[12], b = s[13], S = s[14], R = s[15];
    if (r[0].setComponents(l - a, m - f, h - x, R - v).normalize(), r[1].setComponents(l + a, m + f, h + x, R + v).normalize(), r[2].setComponents(l + o, m + p, h + E, R + b).normalize(), r[3].setComponents(l - o, m - p, h - E, R - b).normalize(), n)
      r[4].setComponents(c, u, d, S).normalize(), r[5].setComponents(l - c, m - u, h - d, R - S).normalize();
    else if (r[4].setComponents(l - c, m - u, h - d, R - S).normalize(), t === 2e3)
      r[5].setComponents(l + c, m + u, h + d, R + S).normalize();
    else if (t === 2001)
      r[5].setComponents(c, u, d, S).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(In);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    In.center.set(0, 0, 0);
    const t = Io.distanceTo(e.center);
    return In.radius = 0.7071067811865476 + t, In.applyMatrix4(e.matrixWorld), this.intersectsSphere(In);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (tr.x = r.normal.x > 0 ? e.max.x : e.min.x, tr.y = r.normal.y > 0 ? e.max.y : e.min.y, tr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(tr) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ha extends _n {
  /**
   * Constructs a new line basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Xe(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const gr = /* @__PURE__ */ new N(), xr = /* @__PURE__ */ new N(), Qs = /* @__PURE__ */ new pt(), Ri = /* @__PURE__ */ new Ss(), nr = /* @__PURE__ */ new Ui(), es = /* @__PURE__ */ new N(), ea = /* @__PURE__ */ new N();
class Wa extends St {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new Rt(), t = new Ha()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Computes an array of distance values which are necessary for rendering dashed lines.
   * For each vertex in the geometry, the method calculates the cumulative length from the
   * current point to the very beginning of the line.
   *
   * @return {Line} A reference to this line.
   */
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        gr.fromBufferAttribute(t, r - 1), xr.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += gr.distanceTo(xr);
      e.setAttribute("lineDistance", new at(n, 1));
    } else
      Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), nr.copy(n.boundingSphere), nr.applyMatrix4(r), nr.radius += s, e.ray.intersectsSphere(nr) === !1) return;
    Qs.copy(r).invert(), Ri.copy(e.ray).applyMatrix4(Qs);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, f = n.index, u = n.attributes.position;
    if (f !== null) {
      const m = Math.max(0, a.start), x = Math.min(f.count, a.start + a.count);
      for (let E = m, d = x - 1; E < d; E += l) {
        const h = f.getX(E), v = f.getX(E + 1), b = ir(this, e, Ri, c, h, v, E);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const E = f.getX(x - 1), d = f.getX(m), h = ir(this, e, Ri, c, E, d, x - 1);
        h && t.push(h);
      }
    } else {
      const m = Math.max(0, a.start), x = Math.min(u.count, a.start + a.count);
      for (let E = m, d = x - 1; E < d; E += l) {
        const h = ir(this, e, Ri, c, E, E + 1, E);
        h && t.push(h);
      }
      if (this.isLineLoop) {
        const E = ir(this, e, Ri, c, x - 1, m, x - 1);
        E && t.push(E);
      }
    }
  }
  /**
   * Sets the values of {@link Line#morphTargetDictionary} and {@link Line#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function ir(i, e, t, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (gr.fromBufferAttribute(o, r), xr.fromBufferAttribute(o, s), t.distanceSqToSegment(gr, xr, es, ea) > n) return;
  es.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(es);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: ea.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const ta = /* @__PURE__ */ new N(), na = /* @__PURE__ */ new N();
class Uo extends Wa {
  /**
   * Constructs a new line segments.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        ta.fromBufferAttribute(t, r), na.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + ta.distanceTo(na);
      e.setAttribute("lineDistance", new at(n, 1));
    } else
      Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class ys extends Ct {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(e = [], t = 301, n, r, s, a, o, c, l, f) {
    super(e, t, n, r, s, a, o, c, l, f), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ds extends Ct {
  /**
   * Constructs a new texture.
   *
   * @param {HTMLCanvasElement} [canvas] - The HTML canvas element.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   */
  constructor(e, t, n, r, s, a, o, c, l) {
    super(e, t, n, r, s, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Bn extends Ct {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e, t, n = 1014, r, s, a, o = 1003, c = 1003, l, f = 1026, p = 1) {
    if (f !== 1026 && f !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: p };
    super(u, r, s, a, o, c, f, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Sr(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Xa extends Bn {
  /**
   * Constructs a new cube depth texture.
   *
   * @param {number} size - The size (width and height) of each cube face.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=NearestFilter] - The mag filter value.
   * @param {number} [minFilter=NearestFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   */
  constructor(e, t = 1014, n = 301, r, s, a = 1003, o = 1003, c, l = 1026) {
    const f = { width: e, height: e, depth: 1 }, p = [f, f, f, f, f, f];
    super(e, e, t, n, r, s, a, o, c, l), this.image = p, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  /**
   * Alias for {@link CubeDepthTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Es extends Ct {
  /**
   * Creates a new raw texture.
   *
   * @param {?(WebGLTexture|GPUTexture)} [sourceTexture=null] - The external texture.
   */
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class pi extends Rt {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], f = [], p = [];
    let u = 0, m = 0;
    x("z", "y", "x", -1, -1, n, t, e, a, s, 0), x("z", "y", "x", 1, -1, n, t, -e, a, s, 1), x("x", "z", "y", 1, 1, e, n, t, r, a, 2), x("x", "z", "y", 1, -1, e, n, -t, r, a, 3), x("x", "y", "z", 1, -1, e, t, n, r, s, 4), x("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new at(l, 3)), this.setAttribute("normal", new at(f, 3)), this.setAttribute("uv", new at(p, 2));
    function x(E, d, h, v, b, S, R, y, w, g, A) {
      const P = S / w, C = R / g, L = S / 2, W = R / 2, X = y / 2, I = w + 1, V = g + 1;
      let q = 0, ne = 0;
      const re = new N();
      for (let de = 0; de < V; de++) {
        const ye = de * C - W;
        for (let be = 0; be < I; be++) {
          const We = be * P - L;
          re[E] = We * v, re[d] = ye * b, re[h] = X, l.push(re.x, re.y, re.z), re[E] = 0, re[d] = 0, re[h] = y > 0 ? 1 : -1, f.push(re.x, re.y, re.z), p.push(be / w), p.push(1 - de / g), q += 1;
        }
      }
      for (let de = 0; de < g; de++)
        for (let ye = 0; ye < w; ye++) {
          const be = u + ye + I * de, We = u + ye + I * (de + 1), et = u + (ye + 1) + I * (de + 1), Oe = u + (ye + 1) + I * de;
          c.push(be, We, Oe), c.push(We, et, Oe), ne += 6;
        }
      o.addGroup(m, ne, A), m += ne, u += q;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new pi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class br extends Rt {
  /**
   * Constructs a new circle geometry.
   *
   * @param {number} [radius=1] - Radius of the circle.
   * @param {number} [segments=32] - Number of segments (triangles), minimum = `3`.
   * @param {number} [thetaStart=0] - Start angle for first segment in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta,
   * of the circular sector in radians. The default value results in a complete circle.
   */
  constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: r
    }, t = Math.max(3, t);
    const s = [], a = [], o = [], c = [], l = new N(), f = new Fe();
    a.push(0, 0, 0), o.push(0, 0, 1), c.push(0.5, 0.5);
    for (let p = 0, u = 3; p <= t; p++, u += 3) {
      const m = n + p / t * r;
      l.x = e * Math.cos(m), l.y = e * Math.sin(m), a.push(l.x, l.y, l.z), o.push(0, 0, 1), f.x = (a[u] / e + 1) / 2, f.y = (a[u + 1] / e + 1) / 2, c.push(f.x, f.y);
    }
    for (let p = 1; p <= t; p++)
      s.push(p, p + 1, 0);
    this.setIndex(s), this.setAttribute("position", new at(a, 3)), this.setAttribute("normal", new at(o, 3)), this.setAttribute("uv", new at(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {CircleGeometry} A new instance.
   */
  static fromJSON(e) {
    return new br(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class Ts extends Rt {
  /**
   * Constructs a new cylinder geometry.
   *
   * @param {number} [radiusTop=1] - Radius of the cylinder at the top.
   * @param {number} [radiusBottom=1] - Radius of the cylinder at the bottom.
   * @param {number} [height=1] - Height of the cylinder.
   * @param {number} [radialSegments=32] - Number of segmented faces around the circumference of the cylinder.
   * @param {number} [heightSegments=1] - Number of rows of faces along the height of the cylinder.
   * @param {boolean} [openEnded=false] - Whether the base of the cylinder is open or capped.
   * @param {number} [thetaStart=0] - Start angle for first segment, in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta, of the circular sector, in radians.
   * The default value results in a complete cylinder.
   */
  constructor(e = 1, t = 1, n = 1, r = 32, s = 1, a = !1, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: r,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: c
    };
    const l = this;
    r = Math.floor(r), s = Math.floor(s);
    const f = [], p = [], u = [], m = [];
    let x = 0;
    const E = [], d = n / 2;
    let h = 0;
    v(), a === !1 && (e > 0 && b(!0), t > 0 && b(!1)), this.setIndex(f), this.setAttribute("position", new at(p, 3)), this.setAttribute("normal", new at(u, 3)), this.setAttribute("uv", new at(m, 2));
    function v() {
      const S = new N(), R = new N();
      let y = 0;
      const w = (t - e) / n;
      for (let g = 0; g <= s; g++) {
        const A = [], P = g / s, C = P * (t - e) + e;
        for (let L = 0; L <= r; L++) {
          const W = L / r, X = W * c + o, I = Math.sin(X), V = Math.cos(X);
          R.x = C * I, R.y = -P * n + d, R.z = C * V, p.push(R.x, R.y, R.z), S.set(I, w, V).normalize(), u.push(S.x, S.y, S.z), m.push(W, 1 - P), A.push(x++);
        }
        E.push(A);
      }
      for (let g = 0; g < r; g++)
        for (let A = 0; A < s; A++) {
          const P = E[A][g], C = E[A + 1][g], L = E[A + 1][g + 1], W = E[A][g + 1];
          (e > 0 || A !== 0) && (f.push(P, C, W), y += 3), (t > 0 || A !== s - 1) && (f.push(C, L, W), y += 3);
        }
      l.addGroup(h, y, 0), h += y;
    }
    function b(S) {
      const R = x, y = new Fe(), w = new N();
      let g = 0;
      const A = S === !0 ? e : t, P = S === !0 ? 1 : -1;
      for (let L = 1; L <= r; L++)
        p.push(0, d * P, 0), u.push(0, P, 0), m.push(0.5, 0.5), x++;
      const C = x;
      for (let L = 0; L <= r; L++) {
        const X = L / r * c + o, I = Math.cos(X), V = Math.sin(X);
        w.x = A * V, w.y = d * P, w.z = A * I, p.push(w.x, w.y, w.z), u.push(0, P, 0), y.x = I * 0.5 + 0.5, y.y = V * 0.5 * P + 0.5, m.push(y.x, y.y), x++;
      }
      for (let L = 0; L < r; L++) {
        const W = R + L, X = C + L;
        S === !0 ? f.push(X, X + 1, W) : f.push(X + 1, X, W), g += 3;
      }
      l.addGroup(h, g, S === !0 ? 1 : 2), h += g;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {CylinderGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Ts(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Ar extends Rt {
  /**
   * Constructs a new polyhedron geometry.
   *
   * @param {Array<number>} [vertices] - A flat array of vertices describing the base shape.
   * @param {Array<number>} [indices] - A flat array of indices describing the base shape.
   * @param {number} [radius=1] - The radius of the shape.
   * @param {number} [detail=0] - How many levels to subdivide the geometry. The more detail, the smoother the shape.
   */
  constructor(e = [], t = [], n = 1, r = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: r
    };
    const s = [], a = [];
    o(r), l(n), f(), this.setAttribute("position", new at(s, 3)), this.setAttribute("normal", new at(s.slice(), 3)), this.setAttribute("uv", new at(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(v) {
      const b = new N(), S = new N(), R = new N();
      for (let y = 0; y < t.length; y += 3)
        m(t[y + 0], b), m(t[y + 1], S), m(t[y + 2], R), c(b, S, R, v);
    }
    function c(v, b, S, R) {
      const y = R + 1, w = [];
      for (let g = 0; g <= y; g++) {
        w[g] = [];
        const A = v.clone().lerp(S, g / y), P = b.clone().lerp(S, g / y), C = y - g;
        for (let L = 0; L <= C; L++)
          L === 0 && g === y ? w[g][L] = A : w[g][L] = A.clone().lerp(P, L / C);
      }
      for (let g = 0; g < y; g++)
        for (let A = 0; A < 2 * (y - g) - 1; A++) {
          const P = Math.floor(A / 2);
          A % 2 === 0 ? (u(w[g][P + 1]), u(w[g + 1][P]), u(w[g][P])) : (u(w[g][P + 1]), u(w[g + 1][P + 1]), u(w[g + 1][P]));
        }
    }
    function l(v) {
      const b = new N();
      for (let S = 0; S < s.length; S += 3)
        b.x = s[S + 0], b.y = s[S + 1], b.z = s[S + 2], b.normalize().multiplyScalar(v), s[S + 0] = b.x, s[S + 1] = b.y, s[S + 2] = b.z;
    }
    function f() {
      const v = new N();
      for (let b = 0; b < s.length; b += 3) {
        v.x = s[b + 0], v.y = s[b + 1], v.z = s[b + 2];
        const S = d(v) / 2 / Math.PI + 0.5, R = h(v) / Math.PI + 0.5;
        a.push(S, 1 - R);
      }
      x(), p();
    }
    function p() {
      for (let v = 0; v < a.length; v += 6) {
        const b = a[v + 0], S = a[v + 2], R = a[v + 4], y = Math.max(b, S, R), w = Math.min(b, S, R);
        y > 0.9 && w < 0.1 && (b < 0.2 && (a[v + 0] += 1), S < 0.2 && (a[v + 2] += 1), R < 0.2 && (a[v + 4] += 1));
      }
    }
    function u(v) {
      s.push(v.x, v.y, v.z);
    }
    function m(v, b) {
      const S = v * 3;
      b.x = e[S + 0], b.y = e[S + 1], b.z = e[S + 2];
    }
    function x() {
      const v = new N(), b = new N(), S = new N(), R = new N(), y = new Fe(), w = new Fe(), g = new Fe();
      for (let A = 0, P = 0; A < s.length; A += 9, P += 6) {
        v.set(s[A + 0], s[A + 1], s[A + 2]), b.set(s[A + 3], s[A + 4], s[A + 5]), S.set(s[A + 6], s[A + 7], s[A + 8]), y.set(a[P + 0], a[P + 1]), w.set(a[P + 2], a[P + 3]), g.set(a[P + 4], a[P + 5]), R.copy(v).add(b).add(S).divideScalar(3);
        const C = d(R);
        E(y, P + 0, v, C), E(w, P + 2, b, C), E(g, P + 4, S, C);
      }
    }
    function E(v, b, S, R) {
      R < 0 && v.x === 1 && (a[b] = v.x - 1), S.x === 0 && S.z === 0 && (a[b] = R / 2 / Math.PI + 0.5);
    }
    function d(v) {
      return Math.atan2(v.z, -v.x);
    }
    function h(v) {
      return Math.atan2(-v.y, Math.sqrt(v.x * v.x + v.z * v.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PolyhedronGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Ar(e.vertices, e.indices, e.radius, e.detail);
  }
}
class Rr extends Ar {
  /**
   * Constructs a new dodecahedron geometry.
   *
   * @param {number} [radius=1] - Radius of the dodecahedron.
   * @param {number} [detail=0] - Setting this to a value greater than `0` adds vertices making it no longer a dodecahedron.
   */
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, r = 1 / n, s = [
      // (±1, ±1, ±1)
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      // (0, ±1/φ, ±φ)
      0,
      -r,
      -n,
      0,
      -r,
      n,
      0,
      r,
      -n,
      0,
      r,
      n,
      // (±1/φ, ±φ, 0)
      -r,
      -n,
      0,
      -r,
      n,
      0,
      r,
      -n,
      0,
      r,
      n,
      0,
      // (±φ, 0, ±1/φ)
      -n,
      0,
      -r,
      n,
      0,
      -r,
      -n,
      0,
      r,
      n,
      0,
      r
    ], a = [
      3,
      11,
      7,
      3,
      7,
      15,
      3,
      15,
      13,
      7,
      19,
      17,
      7,
      17,
      6,
      7,
      6,
      15,
      17,
      4,
      8,
      17,
      8,
      10,
      17,
      10,
      6,
      8,
      0,
      16,
      8,
      16,
      2,
      8,
      2,
      10,
      0,
      12,
      1,
      0,
      1,
      18,
      0,
      18,
      16,
      6,
      10,
      2,
      6,
      2,
      13,
      6,
      13,
      15,
      2,
      16,
      18,
      2,
      18,
      3,
      2,
      3,
      13,
      18,
      1,
      9,
      18,
      9,
      11,
      18,
      11,
      3,
      4,
      14,
      12,
      4,
      12,
      0,
      4,
      0,
      8,
      11,
      9,
      5,
      11,
      5,
      19,
      11,
      19,
      7,
      19,
      5,
      14,
      19,
      14,
      4,
      19,
      4,
      17,
      1,
      12,
      14,
      1,
      14,
      5,
      1,
      5,
      9
    ];
    super(s, a, e, t), this.type = "DodecahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {DodecahedronGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Rr(e.radius, e.detail);
  }
}
const rr = /* @__PURE__ */ new N(), sr = /* @__PURE__ */ new N(), ts = /* @__PURE__ */ new N(), ar = /* @__PURE__ */ new Ot();
class No extends Rt {
  /**
   * Constructs a new edges geometry.
   *
   * @param {?BufferGeometry} [geometry=null] - The geometry.
   * @param {number} [thresholdAngle=1] - An edge is only rendered if the angle (in degrees)
   * between the face normals of the adjoining faces exceeds this value.
   */
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: e,
      thresholdAngle: t
    }, e !== null) {
      const r = Math.pow(10, 4), s = Math.cos(hr * t), a = e.getIndex(), o = e.getAttribute("position"), c = a ? a.count : o.count, l = [0, 0, 0], f = ["a", "b", "c"], p = new Array(3), u = {}, m = [];
      for (let x = 0; x < c; x += 3) {
        a ? (l[0] = a.getX(x), l[1] = a.getX(x + 1), l[2] = a.getX(x + 2)) : (l[0] = x, l[1] = x + 1, l[2] = x + 2);
        const { a: E, b: d, c: h } = ar;
        if (E.fromBufferAttribute(o, l[0]), d.fromBufferAttribute(o, l[1]), h.fromBufferAttribute(o, l[2]), ar.getNormal(ts), p[0] = `${Math.round(E.x * r)},${Math.round(E.y * r)},${Math.round(E.z * r)}`, p[1] = `${Math.round(d.x * r)},${Math.round(d.y * r)},${Math.round(d.z * r)}`, p[2] = `${Math.round(h.x * r)},${Math.round(h.y * r)},${Math.round(h.z * r)}`, !(p[0] === p[1] || p[1] === p[2] || p[2] === p[0]))
          for (let v = 0; v < 3; v++) {
            const b = (v + 1) % 3, S = p[v], R = p[b], y = ar[f[v]], w = ar[f[b]], g = `${S}_${R}`, A = `${R}_${S}`;
            A in u && u[A] ? (ts.dot(u[A].normal) <= s && (m.push(y.x, y.y, y.z), m.push(w.x, w.y, w.z)), u[A] = null) : g in u || (u[g] = {
              index0: l[v],
              index1: l[b],
              normal: ts.clone()
            });
          }
      }
      for (const x in u)
        if (u[x]) {
          const { index0: E, index1: d } = u[x];
          rr.fromBufferAttribute(o, E), sr.fromBufferAttribute(o, d), m.push(rr.x, rr.y, rr.z), m.push(sr.x, sr.y, sr.z);
        }
      this.setAttribute("position", new at(m, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class bs extends Rt {
  /**
   * Constructs a new lathe geometry.
   *
   * @param {Array<Vector2|Vector3>} [points] - An array of points in 2D space. The x-coordinate of each point
   * must be greater than zero.
   * @param {number} [segments=12] - The number of circumference segments to generate.
   * @param {number} [phiStart=0] - The starting angle in radians.
   * @param {number} [phiLength=Math.PI*2] - The radian (0 to 2PI) range of the lathed section 2PI is a
   * closed lathe, less than 2PI is a portion.
   */
  constructor(e = [new Fe(0, -0.5), new Fe(0.5, 0), new Fe(0, 0.5)], t = 12, n = 0, r = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: r
    }, t = Math.floor(t), r = Ye(r, 0, Math.PI * 2);
    const s = [], a = [], o = [], c = [], l = [], f = 1 / t, p = new N(), u = new Fe(), m = new N(), x = new N(), E = new N();
    let d = 0, h = 0;
    for (let v = 0; v <= e.length - 1; v++)
      switch (v) {
        case 0:
          d = e[v + 1].x - e[v].x, h = e[v + 1].y - e[v].y, m.x = h * 1, m.y = -d, m.z = h * 0, E.copy(m), m.normalize(), c.push(m.x, m.y, m.z);
          break;
        case e.length - 1:
          c.push(E.x, E.y, E.z);
          break;
        default:
          d = e[v + 1].x - e[v].x, h = e[v + 1].y - e[v].y, m.x = h * 1, m.y = -d, m.z = h * 0, x.copy(m), m.x += E.x, m.y += E.y, m.z += E.z, m.normalize(), c.push(m.x, m.y, m.z), E.copy(x);
      }
    for (let v = 0; v <= t; v++) {
      const b = n + v * f * r, S = Math.sin(b), R = Math.cos(b);
      for (let y = 0; y <= e.length - 1; y++) {
        p.x = e[y].x * S, p.y = e[y].y, p.z = e[y].x * R, a.push(p.x, p.y, p.z), u.x = v / t, u.y = y / (e.length - 1), o.push(u.x, u.y);
        const w = c[3 * y + 0] * S, g = c[3 * y + 1], A = c[3 * y + 0] * R;
        l.push(w, g, A);
      }
    }
    for (let v = 0; v < t; v++)
      for (let b = 0; b < e.length - 1; b++) {
        const S = b + v * e.length, R = S, y = S + e.length, w = S + e.length + 1, g = S + 1;
        s.push(R, y, g), s.push(w, g, y);
      }
    this.setIndex(s), this.setAttribute("position", new at(a, 3)), this.setAttribute("uv", new at(o, 2)), this.setAttribute("normal", new at(l, 3));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {LatheGeometry} A new instance.
   */
  static fromJSON(e) {
    return new bs(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class mi extends Rt {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, f = c + 1, p = e / o, u = t / c, m = [], x = [], E = [], d = [];
    for (let h = 0; h < f; h++) {
      const v = h * u - a;
      for (let b = 0; b < l; b++) {
        const S = b * p - s;
        x.push(S, -v, 0), E.push(0, 0, 1), d.push(b / o), d.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++)
      for (let v = 0; v < o; v++) {
        const b = v + l * h, S = v + l * (h + 1), R = v + 1 + l * (h + 1), y = v + 1 + l * h;
        m.push(b, S, y), m.push(S, R, y);
      }
    this.setIndex(m), this.setAttribute("position", new at(x, 3)), this.setAttribute("normal", new at(E, 3)), this.setAttribute("uv", new at(d, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new mi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class As extends Rt {
  /**
   * Constructs a new torus geometry.
   *
   * @param {number} [radius=1] - Radius of the torus, from the center of the torus to the center of the tube.
   * @param {number} [tube=0.4] - Radius of the tube. Must be smaller than `radius`.
   * @param {number} [radialSegments=12] - The number of radial segments.
   * @param {number} [tubularSegments=48] - The number of tubular segments.
   * @param {number} [arc=Math.PI*2] - Central angle in radians.
   * @param {number} [thetaStart=0] - Start of the tubular sweep in radians.
   * @param {number} [thetaLength=Math.PI*2] - Length of the tubular sweep in radians.
   */
  constructor(e = 1, t = 0.4, n = 12, r = 48, s = Math.PI * 2, a = 0, o = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: e,
      tube: t,
      radialSegments: n,
      tubularSegments: r,
      arc: s,
      thetaStart: a,
      thetaLength: o
    }, n = Math.floor(n), r = Math.floor(r);
    const c = [], l = [], f = [], p = [], u = new N(), m = new N(), x = new N();
    for (let E = 0; E <= n; E++) {
      const d = a + E / n * o;
      for (let h = 0; h <= r; h++) {
        const v = h / r * s;
        m.x = (e + t * Math.cos(d)) * Math.cos(v), m.y = (e + t * Math.cos(d)) * Math.sin(v), m.z = t * Math.sin(d), l.push(m.x, m.y, m.z), u.x = e * Math.cos(v), u.y = e * Math.sin(v), x.subVectors(m, u).normalize(), f.push(x.x, x.y, x.z), p.push(h / r), p.push(E / n);
      }
    }
    for (let E = 1; E <= n; E++)
      for (let d = 1; d <= r; d++) {
        const h = (r + 1) * E + d - 1, v = (r + 1) * (E - 1) + d - 1, b = (r + 1) * (E - 1) + d, S = (r + 1) * E + d;
        c.push(h, v, S), c.push(v, b, S);
      }
    this.setIndex(c), this.setAttribute("position", new at(l, 3)), this.setAttribute("normal", new at(f, 3)), this.setAttribute("uv", new at(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {TorusGeometry} A new instance.
   */
  static fromJSON(e) {
    return new As(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class qa extends _n {
  /**
   * Constructs a new shadow material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Xe(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
function di(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (ia(r))
        r.isRenderTargetTexture ? (Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone();
      else if (Array.isArray(r))
        if (ia(r[0])) {
          const s = [];
          for (let a = 0, o = r.length; a < o; a++)
            s[a] = r[a].clone();
          e[t][n] = s;
        } else
          e[t][n] = r.slice();
      else
        e[t][n] = r;
    }
  }
  return e;
}
function Ut(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = di(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function ia(i) {
  return i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion);
}
function Bo(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Ya(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : qe.workingColorSpace;
}
const Za = { clone: di, merge: Ut };
var Oo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Go = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class tn extends _n {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Oo, this.fragmentShader = Go, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = di(e.uniforms), this.uniformsGroups = Bo(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ka extends tn {
  /**
   * Constructs a new raw shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class $a extends _n {
  /**
   * Constructs a new mesh standard material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Xe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Xe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new mn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class ja extends _n {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ja extends _n {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class Rs extends St {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Xe(e), this.intensity = t;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}
class Qa extends Rs {
  /**
   * Constructs a new hemisphere light.
   *
   * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
   * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(St.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Xe(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const ns = /* @__PURE__ */ new pt(), ra = /* @__PURE__ */ new N(), sa = /* @__PURE__ */ new N();
class zo {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Fe(512, 512), this.mapType = 1009, this.map = null, this.mapPass = null, this.matrix = new pt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Tr(), this._frameExtents = new Fe(1, 1), this._viewportCount = 1, this._viewports = [
      new _t(0, 0, 1, 1)
    ];
  }
  /**
   * Used internally by the renderer to get the number of viewports that need
   * to be rendered for this shadow.
   *
   * @return {number} The viewport count.
   */
  getViewportCount() {
    return this._viewportCount;
  }
  /**
   * Gets the shadow cameras frustum. Used internally by the renderer to cull objects.
   *
   * @return {Frustum} The shadow camera frustum.
   */
  getFrustum() {
    return this._frustum;
  }
  /**
   * Update the matrices for the camera and shadow, used internally by the renderer.
   *
   * @param {Light} light - The light for which the shadow is being rendered.
   */
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    ra.setFromMatrixPosition(e.matrixWorld), t.position.copy(ra), sa.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(sa), t.updateMatrixWorld(), ns.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ns, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      1,
      0,
      // Identity Z (preserving the correct [0, 1] range from the projection matrix)
      0,
      0,
      0,
      1
    ) : n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(ns);
  }
  /**
   * Returns a viewport definition for the given viewport index.
   *
   * @param {number} viewportIndex - The viewport index.
   * @return {Vector4} The viewport.
   */
  getViewport(e) {
    return this._viewports[e];
  }
  /**
   * Returns the frame extends.
   *
   * @return {Vector2} The frame extends.
   */
  getFrameExtents() {
    return this._frameExtents;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  /**
   * Copies the values of the given light shadow instance to this instance.
   *
   * @param {LightShadow} source - The light shadow to copy.
   * @return {LightShadow} A reference to this light shadow instance.
   */
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
  }
  /**
   * Returns a new light shadow instance with copied values from this instance.
   *
   * @return {LightShadow} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Serializes the light shadow into JSON.
   *
   * @return {Object} A JSON object representing the serialized light shadow.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
const or = /* @__PURE__ */ new N(), lr = /* @__PURE__ */ new On(), sn = /* @__PURE__ */ new N();
class ws extends St {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new pt(), this.projectionMatrix = new pt(), this.projectionMatrixInverse = new pt(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
  }
  /**
   * The flag that indicates whether the camera uses a reversed depth buffer.
   *
   * @type {boolean}
   * @default false
   */
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(or, lr, sn), sn.x === 1 && sn.y === 1 && sn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(or, lr, sn.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorld.decompose(or, lr, sn), sn.x === 1 && sn.y === 1 && sn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(or, lr, sn.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const bn = /* @__PURE__ */ new N(), aa = /* @__PURE__ */ new Fe(), oa = /* @__PURE__ */ new Fe();
class Wt extends ws {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = us * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(hr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return us * 2 * Math.atan(
      Math.tan(hr * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(e, t, n) {
    bn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(bn.x, bn.y).multiplyScalar(-e / bn.z), bn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(bn.x, bn.y).multiplyScalar(-e / bn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, aa, oa), t.subVectors(oa, aa);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(hr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * r / c, t -= a.offsetY * n / l, r *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
class wr extends ws {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= f * this.view.offsetY, c = o - f * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class Vo extends zo {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new wr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ui extends Rs {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(St.DEFAULT_UP), this.updateMatrix(), this.target = new St(), this.shadow = new Vo();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}
const oi = -90, li = 1;
class eo extends St {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Wt(oi, li, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Wt(oi, li, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Wt(oi, li, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Wt(oi, li, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Wt(oi, li, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Wt(oi, li, e, t);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, f] = this.children, p = e.getRenderTarget(), u = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), x = e.xr.enabled;
    e.xr.enabled = !1;
    const E = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let d = !1;
    e.isWebGLRenderer === !0 ? d = e.state.buffers.depth.getReversed() : d = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 1, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(n, 4, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.generateMipmaps = E, e.setRenderTarget(n, 5, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, f), e.setRenderTarget(p, u, m), e.xr.enabled = x, n.texture.needsPMREMUpdate = !0;
  }
}
class to extends Wt {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
const Is = class Is {
  /**
   * Constructs a new 2x2 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   */
  constructor(e, t, n, r) {
    this.elements = [
      1,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r);
  }
  /**
   * Sets this matrix to the 2x2 identity matrix.
   *
   * @return {Matrix2} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix2} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 4; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} n11 - 1-1 matrix element.
   * @param {number} n12 - 1-2 matrix element.
   * @param {number} n21 - 2-1 matrix element.
   * @param {number} n22 - 2-2 matrix element.
   * @return {Matrix2} A reference to this matrix.
   */
  set(e, t, n, r) {
    const s = this.elements;
    return s[0] = e, s[2] = t, s[1] = n, s[3] = r, this;
  }
};
Is.prototype.isMatrix2 = !0;
let fs = Is;
function la(i, e, t, n) {
  const r = ko(n);
  switch (t) {
    case 1021:
      return i * e;
    case 1028:
      return i * e / r.components * r.byteLength;
    case 1029:
      return i * e / r.components * r.byteLength;
    case 1030:
      return i * e * 2 / r.components * r.byteLength;
    case 1031:
      return i * e * 2 / r.components * r.byteLength;
    case 1022:
      return i * e * 3 / r.components * r.byteLength;
    case 1023:
      return i * e * 4 / r.components * r.byteLength;
    case 1033:
      return i * e * 4 / r.components * r.byteLength;
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    case 36196:
    case 37492:
    case 37488:
    case 37489:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
    case 37490:
    case 37491:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function ko(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
    case 35899:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Mr
} }));
typeof window < "u" && (window.__THREE__ ? Le("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Mr);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function no() {
  let i = null, e = !1, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && i !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i !== null && i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function Ho(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, f = o.usage, p = l.byteLength, u = i.createBuffer();
    i.bindBuffer(c, u), i.bufferData(c, l, f), o.onUploadCallback();
    let m;
    if (l instanceof Float32Array)
      m = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      m = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      m = i.SHORT;
    else if (l instanceof Uint32Array)
      m = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      m = i.INT;
    else if (l instanceof Int8Array)
      m = i.BYTE;
    else if (l instanceof Uint8Array)
      m = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      m = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: u,
      type: m,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: p
    };
  }
  function n(o, c, l) {
    const f = c.array, p = c.updateRanges;
    if (i.bindBuffer(l, o), p.length === 0)
      i.bufferSubData(l, 0, f);
    else {
      p.sort((m, x) => m.start - x.start);
      let u = 0;
      for (let m = 1; m < p.length; m++) {
        const x = p[u], E = p[m];
        E.start <= x.start + x.count + 1 ? x.count = Math.max(
          x.count,
          E.start + E.count - x.start
        ) : (++u, p[u] = E);
      }
      p.length = u + 1;
      for (let m = 0, x = p.length; m < x; m++) {
        const E = p[m];
        i.bufferSubData(
          l,
          E.start * f.BYTES_PER_ELEMENT,
          f,
          E.start,
          E.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const f = e.get(o);
      (!f || f.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = e.get(o);
    if (l === void 0)
      e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var Wo = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Xo = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, qo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Yo = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Zo = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Ko = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, $o = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, jo = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Jo = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, Qo = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, el = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, tl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, nl = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, il = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, rl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, sl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, al = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, ol = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ll = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, cl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, ul = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, hl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, dl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, fl = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, pl = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, ml = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, _l = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, gl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, xl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, vl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Ml = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Sl = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, yl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, El = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, Tl = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, bl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Al = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Rl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, wl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Cl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Pl = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Dl = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Ll = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Fl = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Il = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Ul = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`, Nl = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Bl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ol = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Gl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, zl = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Vl = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, kl = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Hl = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Wl = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Xl = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ql = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`, Yl = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Zl = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Kl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, $l = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, jl = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Jl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ql = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, ec = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, tc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, nc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, ic = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, rc = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, sc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, ac = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, oc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, lc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, cc = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, uc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, hc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, dc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, fc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, pc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, mc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, _c = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, gc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, xc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, vc = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, Mc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Sc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, yc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Ec = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Tc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, bc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Ac = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, Rc = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, wc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Cc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Pc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Dc = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Lc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Fc = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Ic = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Uc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Nc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Bc = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Oc = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Gc = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, zc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Vc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, kc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Hc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Wc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Xc = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, qc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Yc = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Zc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Kc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, $c = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, jc = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Jc = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Qc = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, eu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, tu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, nu = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, iu = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, ru = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, su = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, au = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ou = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lu = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, cu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, uu = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, hu = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, du = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fu = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, mu = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _u = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, gu = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, vu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Mu = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Su = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, yu = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Eu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ve = {
  alphahash_fragment: Wo,
  alphahash_pars_fragment: Xo,
  alphamap_fragment: qo,
  alphamap_pars_fragment: Yo,
  alphatest_fragment: Zo,
  alphatest_pars_fragment: Ko,
  aomap_fragment: $o,
  aomap_pars_fragment: jo,
  batching_pars_vertex: Jo,
  batching_vertex: Qo,
  begin_vertex: el,
  beginnormal_vertex: tl,
  bsdfs: nl,
  iridescence_fragment: il,
  bumpmap_pars_fragment: rl,
  clipping_planes_fragment: sl,
  clipping_planes_pars_fragment: al,
  clipping_planes_pars_vertex: ol,
  clipping_planes_vertex: ll,
  color_fragment: cl,
  color_pars_fragment: ul,
  color_pars_vertex: hl,
  color_vertex: dl,
  common: fl,
  cube_uv_reflection_fragment: pl,
  defaultnormal_vertex: ml,
  displacementmap_pars_vertex: _l,
  displacementmap_vertex: gl,
  emissivemap_fragment: xl,
  emissivemap_pars_fragment: vl,
  colorspace_fragment: Ml,
  colorspace_pars_fragment: Sl,
  envmap_fragment: yl,
  envmap_common_pars_fragment: El,
  envmap_pars_fragment: Tl,
  envmap_pars_vertex: bl,
  envmap_physical_pars_fragment: Nl,
  envmap_vertex: Al,
  fog_vertex: Rl,
  fog_pars_vertex: wl,
  fog_fragment: Cl,
  fog_pars_fragment: Pl,
  gradientmap_pars_fragment: Dl,
  lightmap_pars_fragment: Ll,
  lights_lambert_fragment: Fl,
  lights_lambert_pars_fragment: Il,
  lights_pars_begin: Ul,
  lights_toon_fragment: Bl,
  lights_toon_pars_fragment: Ol,
  lights_phong_fragment: Gl,
  lights_phong_pars_fragment: zl,
  lights_physical_fragment: Vl,
  lights_physical_pars_fragment: kl,
  lights_fragment_begin: Hl,
  lights_fragment_maps: Wl,
  lights_fragment_end: Xl,
  lightprobes_pars_fragment: ql,
  logdepthbuf_fragment: Yl,
  logdepthbuf_pars_fragment: Zl,
  logdepthbuf_pars_vertex: Kl,
  logdepthbuf_vertex: $l,
  map_fragment: jl,
  map_pars_fragment: Jl,
  map_particle_fragment: Ql,
  map_particle_pars_fragment: ec,
  metalnessmap_fragment: tc,
  metalnessmap_pars_fragment: nc,
  morphinstance_vertex: ic,
  morphcolor_vertex: rc,
  morphnormal_vertex: sc,
  morphtarget_pars_vertex: ac,
  morphtarget_vertex: oc,
  normal_fragment_begin: lc,
  normal_fragment_maps: cc,
  normal_pars_fragment: uc,
  normal_pars_vertex: hc,
  normal_vertex: dc,
  normalmap_pars_fragment: fc,
  clearcoat_normal_fragment_begin: pc,
  clearcoat_normal_fragment_maps: mc,
  clearcoat_pars_fragment: _c,
  iridescence_pars_fragment: gc,
  opaque_fragment: xc,
  packing: vc,
  premultiplied_alpha_fragment: Mc,
  project_vertex: Sc,
  dithering_fragment: yc,
  dithering_pars_fragment: Ec,
  roughnessmap_fragment: Tc,
  roughnessmap_pars_fragment: bc,
  shadowmap_pars_fragment: Ac,
  shadowmap_pars_vertex: Rc,
  shadowmap_vertex: wc,
  shadowmask_pars_fragment: Cc,
  skinbase_vertex: Pc,
  skinning_pars_vertex: Dc,
  skinning_vertex: Lc,
  skinnormal_vertex: Fc,
  specularmap_fragment: Ic,
  specularmap_pars_fragment: Uc,
  tonemapping_fragment: Nc,
  tonemapping_pars_fragment: Bc,
  transmission_fragment: Oc,
  transmission_pars_fragment: Gc,
  uv_pars_fragment: zc,
  uv_pars_vertex: Vc,
  uv_vertex: kc,
  worldpos_vertex: Hc,
  background_vert: Wc,
  background_frag: Xc,
  backgroundCube_vert: qc,
  backgroundCube_frag: Yc,
  cube_vert: Zc,
  cube_frag: Kc,
  depth_vert: $c,
  depth_frag: jc,
  distance_vert: Jc,
  distance_frag: Qc,
  equirect_vert: eu,
  equirect_frag: tu,
  linedashed_vert: nu,
  linedashed_frag: iu,
  meshbasic_vert: ru,
  meshbasic_frag: su,
  meshlambert_vert: au,
  meshlambert_frag: ou,
  meshmatcap_vert: lu,
  meshmatcap_frag: cu,
  meshnormal_vert: uu,
  meshnormal_frag: hu,
  meshphong_vert: du,
  meshphong_frag: fu,
  meshphysical_vert: pu,
  meshphysical_frag: mu,
  meshtoon_vert: _u,
  meshtoon_frag: gu,
  points_vert: xu,
  points_frag: vu,
  shadow_vert: Mu,
  shadow_frag: Su,
  sprite_vert: yu,
  sprite_frag: Eu
}, _e = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Be() },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 },
    // basic, lambert, phong
    dfgLUT: { value: null }
    // DFG LUT for physically-based rendering
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Be() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Be() },
    normalScale: { value: /* @__PURE__ */ new Fe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Be() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Xe(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null },
    probesSH: { value: null },
    probesMin: { value: /* @__PURE__ */ new N() },
    probesMax: { value: /* @__PURE__ */ new N() },
    probesResolution: { value: /* @__PURE__ */ new N() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Be() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Xe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Fe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  }
}, Qt = {
  basic: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.specularmap,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.fog
    ]),
    vertexShader: Ve.meshbasic_vert,
    fragmentShader: Ve.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.specularmap,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ve.meshlambert_vert,
    fragmentShader: Ve.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.specularmap,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) },
        specular: { value: /* @__PURE__ */ new Xe(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ve.meshphong_vert,
    fragmentShader: Ve.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.envmap,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.roughnessmap,
      _e.metalnessmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ve.meshphysical_vert,
    fragmentShader: Ve.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.aomap,
      _e.lightmap,
      _e.emissivemap,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.gradientmap,
      _e.fog,
      _e.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xe(0) }
      }
    ]),
    vertexShader: Ve.meshtoon_vert,
    fragmentShader: Ve.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      _e.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ve.meshmatcap_vert,
    fragmentShader: Ve.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ut([
      _e.points,
      _e.fog
    ]),
    vertexShader: Ve.points_vert,
    fragmentShader: Ve.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ve.linedashed_vert,
    fragmentShader: Ve.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.displacementmap
    ]),
    vertexShader: Ve.depth_vert,
    fragmentShader: Ve.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.bumpmap,
      _e.normalmap,
      _e.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ve.meshnormal_vert,
    fragmentShader: Ve.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ut([
      _e.sprite,
      _e.fog
    ]),
    vertexShader: Ve.sprite_vert,
    fragmentShader: Ve.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Be() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ve.background_vert,
    fragmentShader: Ve.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Be() }
    },
    vertexShader: Ve.backgroundCube_vert,
    fragmentShader: Ve.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ve.cube_vert,
    fragmentShader: Ve.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ve.equirect_vert,
    fragmentShader: Ve.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ Ut([
      _e.common,
      _e.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new N() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ve.distance_vert,
    fragmentShader: Ve.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Ut([
      _e.lights,
      _e.fog,
      {
        color: { value: /* @__PURE__ */ new Xe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ve.shadow_vert,
    fragmentShader: Ve.shadow_frag
  }
};
Qt.physical = {
  uniforms: /* @__PURE__ */ Ut([
    Qt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Fe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Be() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Xe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Be() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Be() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Fe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Xe(0) },
      specularColor: { value: /* @__PURE__ */ new Xe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Be() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Be() },
      anisotropyVector: { value: /* @__PURE__ */ new Fe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Be() }
    }
  ]),
  vertexShader: Ve.meshphysical_vert,
  fragmentShader: Ve.meshphysical_frag
};
const cr = { r: 0, b: 0, g: 0 }, Tu = /* @__PURE__ */ new pt(), io = /* @__PURE__ */ new Be();
io.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function bu(i, e, t, n, r, s) {
  const a = new Xe(0);
  let o = r === !0 ? 0 : 1, c, l, f = null, p = 0, u = null;
  function m(v) {
    let b = v.isScene === !0 ? v.background : null;
    if (b && b.isTexture) {
      const S = v.backgroundBlurriness > 0;
      b = e.get(b, S);
    }
    return b;
  }
  function x(v) {
    let b = !1;
    const S = m(v);
    S === null ? d(a, o) : S && S.isColor && (d(S, 1), b = !0);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, s) : R === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || b) && (t.buffers.depth.setTest(!0), t.buffers.depth.setMask(!0), t.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function E(v, b) {
    const S = m(b);
    S && (S.isCubeTexture || S.mapping === 306) ? (l === void 0 && (l = new Xt(
      new pi(1, 1, 1),
      new tn({
        name: "BackgroundCubeMaterial",
        uniforms: di(Qt.backgroundCube.uniforms),
        vertexShader: Qt.backgroundCube.vertexShader,
        fragmentShader: Qt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(R, y, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(l)), l.material.uniforms.envMap.value = S, l.material.uniforms.backgroundBlurriness.value = b.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Tu.makeRotationFromEuler(b.backgroundRotation)).transpose(), S.isCubeTexture && S.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(io), l.material.toneMapped = qe.getTransfer(S.colorSpace) !== nt, (f !== S || p !== S.version || u !== i.toneMapping) && (l.material.needsUpdate = !0, f = S, p = S.version, u = i.toneMapping), l.layers.enableAll(), v.unshift(l, l.geometry, l.material, 0, 0, null)) : S && S.isTexture && (c === void 0 && (c = new Xt(
      new mi(2, 2),
      new tn({
        name: "BackgroundMaterial",
        uniforms: di(Qt.background.uniforms),
        vertexShader: Qt.background.vertexShader,
        fragmentShader: Qt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(c)), c.material.uniforms.t2D.value = S, c.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, c.material.toneMapped = qe.getTransfer(S.colorSpace) !== nt, S.matrixAutoUpdate === !0 && S.updateMatrix(), c.material.uniforms.uvTransform.value.copy(S.matrix), (f !== S || p !== S.version || u !== i.toneMapping) && (c.material.needsUpdate = !0, f = S, p = S.version, u = i.toneMapping), c.layers.enableAll(), v.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(v, b) {
    v.getRGB(cr, Ya(i)), t.buffers.color.setClear(cr.r, cr.g, cr.b, b, s);
  }
  function h() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(v, b = 1) {
      a.set(v), o = b, d(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(v) {
      o = v, d(a, o);
    },
    render: x,
    addToRenderList: E,
    dispose: h
  };
}
function Au(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, a = !1;
  function o(C, L, W, X, I) {
    let V = !1;
    const q = p(C, X, W, L);
    s !== q && (s = q, l(s.object)), V = m(C, X, W, I), V && x(C, X, W, I), I !== null && e.update(I, i.ELEMENT_ARRAY_BUFFER), (V || a) && (a = !1, S(C, L, W, X), I !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(I).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(C) {
    return i.bindVertexArray(C);
  }
  function f(C) {
    return i.deleteVertexArray(C);
  }
  function p(C, L, W, X) {
    const I = X.wireframe === !0;
    let V = n[L.id];
    V === void 0 && (V = {}, n[L.id] = V);
    const q = C.isInstancedMesh === !0 ? C.id : 0;
    let ne = V[q];
    ne === void 0 && (ne = {}, V[q] = ne);
    let re = ne[W.id];
    re === void 0 && (re = {}, ne[W.id] = re);
    let de = re[I];
    return de === void 0 && (de = u(c()), re[I] = de), de;
  }
  function u(C) {
    const L = [], W = [], X = [];
    for (let I = 0; I < t; I++)
      L[I] = 0, W[I] = 0, X[I] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: W,
      attributeDivisors: X,
      object: C,
      attributes: {},
      index: null
    };
  }
  function m(C, L, W, X) {
    const I = s.attributes, V = L.attributes;
    let q = 0;
    const ne = W.getAttributes();
    for (const re in ne)
      if (ne[re].location >= 0) {
        const ye = I[re];
        let be = V[re];
        if (be === void 0 && (re === "instanceMatrix" && C.instanceMatrix && (be = C.instanceMatrix), re === "instanceColor" && C.instanceColor && (be = C.instanceColor)), ye === void 0 || ye.attribute !== be || be && ye.data !== be.data) return !0;
        q++;
      }
    return s.attributesNum !== q || s.index !== X;
  }
  function x(C, L, W, X) {
    const I = {}, V = L.attributes;
    let q = 0;
    const ne = W.getAttributes();
    for (const re in ne)
      if (ne[re].location >= 0) {
        let ye = V[re];
        ye === void 0 && (re === "instanceMatrix" && C.instanceMatrix && (ye = C.instanceMatrix), re === "instanceColor" && C.instanceColor && (ye = C.instanceColor));
        const be = {};
        be.attribute = ye, ye && ye.data && (be.data = ye.data), I[re] = be, q++;
      }
    s.attributes = I, s.attributesNum = q, s.index = X;
  }
  function E() {
    const C = s.newAttributes;
    for (let L = 0, W = C.length; L < W; L++)
      C[L] = 0;
  }
  function d(C) {
    h(C, 0);
  }
  function h(C, L) {
    const W = s.newAttributes, X = s.enabledAttributes, I = s.attributeDivisors;
    W[C] = 1, X[C] === 0 && (i.enableVertexAttribArray(C), X[C] = 1), I[C] !== L && (i.vertexAttribDivisor(C, L), I[C] = L);
  }
  function v() {
    const C = s.newAttributes, L = s.enabledAttributes;
    for (let W = 0, X = L.length; W < X; W++)
      L[W] !== C[W] && (i.disableVertexAttribArray(W), L[W] = 0);
  }
  function b(C, L, W, X, I, V, q) {
    q === !0 ? i.vertexAttribIPointer(C, L, W, I, V) : i.vertexAttribPointer(C, L, W, X, I, V);
  }
  function S(C, L, W, X) {
    E();
    const I = X.attributes, V = W.getAttributes(), q = L.defaultAttributeValues;
    for (const ne in V) {
      const re = V[ne];
      if (re.location >= 0) {
        let de = I[ne];
        if (de === void 0 && (ne === "instanceMatrix" && C.instanceMatrix && (de = C.instanceMatrix), ne === "instanceColor" && C.instanceColor && (de = C.instanceColor)), de !== void 0) {
          const ye = de.normalized, be = de.itemSize, We = e.get(de);
          if (We === void 0) continue;
          const et = We.buffer, Oe = We.type, Q = We.bytesPerElement, Y = Oe === i.INT || Oe === i.UNSIGNED_INT || de.gpuType === 1013;
          if (de.isInterleavedBufferAttribute) {
            const K = de.data, ie = K.stride, we = de.offset;
            if (K.isInstancedInterleavedBuffer) {
              for (let Ee = 0; Ee < re.locationSize; Ee++)
                h(re.location + Ee, K.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = K.meshPerAttribute * K.count);
            } else
              for (let Ee = 0; Ee < re.locationSize; Ee++)
                d(re.location + Ee);
            i.bindBuffer(i.ARRAY_BUFFER, et);
            for (let Ee = 0; Ee < re.locationSize; Ee++)
              b(
                re.location + Ee,
                be / re.locationSize,
                Oe,
                ye,
                ie * Q,
                (we + be / re.locationSize * Ee) * Q,
                Y
              );
          } else {
            if (de.isInstancedBufferAttribute) {
              for (let K = 0; K < re.locationSize; K++)
                h(re.location + K, de.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = de.meshPerAttribute * de.count);
            } else
              for (let K = 0; K < re.locationSize; K++)
                d(re.location + K);
            i.bindBuffer(i.ARRAY_BUFFER, et);
            for (let K = 0; K < re.locationSize; K++)
              b(
                re.location + K,
                be / re.locationSize,
                Oe,
                ye,
                be * Q,
                be / re.locationSize * K * Q,
                Y
              );
          }
        } else if (q !== void 0) {
          const ye = q[ne];
          if (ye !== void 0)
            switch (ye.length) {
              case 2:
                i.vertexAttrib2fv(re.location, ye);
                break;
              case 3:
                i.vertexAttrib3fv(re.location, ye);
                break;
              case 4:
                i.vertexAttrib4fv(re.location, ye);
                break;
              default:
                i.vertexAttrib1fv(re.location, ye);
            }
        }
      }
    }
    v();
  }
  function R() {
    A();
    for (const C in n) {
      const L = n[C];
      for (const W in L) {
        const X = L[W];
        for (const I in X) {
          const V = X[I];
          for (const q in V)
            f(V[q].object), delete V[q];
          delete X[I];
        }
      }
      delete n[C];
    }
  }
  function y(C) {
    if (n[C.id] === void 0) return;
    const L = n[C.id];
    for (const W in L) {
      const X = L[W];
      for (const I in X) {
        const V = X[I];
        for (const q in V)
          f(V[q].object), delete V[q];
        delete X[I];
      }
    }
    delete n[C.id];
  }
  function w(C) {
    for (const L in n) {
      const W = n[L];
      for (const X in W) {
        const I = W[X];
        if (I[C.id] === void 0) continue;
        const V = I[C.id];
        for (const q in V)
          f(V[q].object), delete V[q];
        delete I[C.id];
      }
    }
  }
  function g(C) {
    for (const L in n) {
      const W = n[L], X = C.isInstancedMesh === !0 ? C.id : 0, I = W[X];
      if (I !== void 0) {
        for (const V in I) {
          const q = I[V];
          for (const ne in q)
            f(q[ne].object), delete q[ne];
          delete I[V];
        }
        delete W[X], Object.keys(W).length === 0 && delete n[L];
      }
    }
  }
  function A() {
    P(), a = !0, s !== r && (s = r, l(s.object));
  }
  function P() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: A,
    resetDefaultState: P,
    dispose: R,
    releaseStatesOfGeometry: y,
    releaseStatesOfObject: g,
    releaseStatesOfProgram: w,
    initAttributes: E,
    enableAttribute: d,
    disableUnusedAttributes: v
  };
}
function Ru(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, l) {
    i.drawArrays(n, c, l), t.update(l, n, 1);
  }
  function a(c, l, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, l, f), t.update(l, n, f));
  }
  function o(c, l, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, l, 0, f);
    let u = 0;
    for (let m = 0; m < f; m++)
      u += l[m];
    t.update(u, n, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function wu(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(w) {
    return !(w !== 1023 && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const g = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== 1015 && !g);
  }
  function c(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const f = c(l);
  f !== l && (Le("WebGLRenderer:", l, "not supported, using", f, "instead."), l = f);
  const p = t.logarithmicDepthBuffer === !0, u = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control");
  t.reversedDepthBuffer === !0 && u === !1 && Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), E = i.getParameter(i.MAX_TEXTURE_SIZE), d = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), v = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), b = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), R = i.getParameter(i.MAX_SAMPLES), y = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: p,
    reversedDepthBuffer: u,
    maxTextures: m,
    maxVertexTextures: x,
    maxTextureSize: E,
    maxCubemapSize: d,
    maxAttributes: h,
    maxVertexUniforms: v,
    maxVaryings: b,
    maxFragmentUniforms: S,
    maxSamples: R,
    samples: y
  };
}
function Cu(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new An(), o = new Be(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(p, u) {
    const m = p.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = p.length, m;
  }, this.beginShadows = function() {
    s = !0, f(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(p, u) {
    t = f(p, u, 0);
  }, this.setState = function(p, u, m) {
    const x = p.clippingPlanes, E = p.clipIntersection, d = p.clipShadows, h = i.get(p);
    if (!r || x === null || x.length === 0 || s && !d)
      s ? f(null) : l();
    else {
      const v = s ? 0 : n, b = v * 4;
      let S = h.clippingState || null;
      c.value = S, S = f(x, u, b, m);
      for (let R = 0; R !== b; ++R)
        S[R] = t[R];
      h.clippingState = S, this.numIntersection = E ? this.numPlanes : 0, this.numPlanes += v;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function f(p, u, m, x) {
    const E = p !== null ? p.length : 0;
    let d = null;
    if (E !== 0) {
      if (d = c.value, x !== !0 || d === null) {
        const h = m + E * 4, v = u.matrixWorldInverse;
        o.getNormalMatrix(v), (d === null || d.length < h) && (d = new Float32Array(h));
        for (let b = 0, S = m; b !== E; ++b, S += 4)
          a.copy(p[b]).applyMatrix4(v, o), a.normal.toArray(d, S), d[S + 3] = a.constant;
      }
      c.value = d, c.needsUpdate = !0;
    }
    return e.numPlanes = E, e.numIntersection = 0, d;
  }
}
const Rn = 4, ca = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Un = 20, Pu = 256, wi = /* @__PURE__ */ new wr(), ua = /* @__PURE__ */ new Xe();
let is = null, rs = 0, ss = 0, as = !1;
const Du = /* @__PURE__ */ new N();
class ps {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.position=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(e, t = 0, n = 0.1, r = 100, s = {}) {
    const {
      size: a = 256,
      position: o = Du
    } = s;
    is = this._renderer.getRenderTarget(), rs = this._renderer.getActiveCubeFace(), ss = this._renderer.getActiveMipmapLevel(), as = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(e, n, r, c, o), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = fa(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = da(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++)
      this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(is, rs, ss), this._renderer.xr.enabled = as, e.scissorTest = !1, ci(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), is = this._renderer.getRenderTarget(), rs = this._renderer.getActiveCubeFace(), ss = this._renderer.getActiveMipmapLevel(), as = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: Di,
      depthBuffer: !1
    }, r = ha(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ha(e, t, n);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Lu(s)), this._blurMaterial = Iu(s, e, t), this._ggxMaterial = Fu(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Xt(new Rt(), e);
    this._renderer.compile(t, wi);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const c = new Wt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], f = [1, 1, 1, -1, -1, -1], p = this._renderer, u = p.autoClear, m = p.toneMapping;
    p.getClearColor(ua), p.toneMapping = 0, p.autoClear = !1, p.state.buffers.depth.getReversed() && (p.setRenderTarget(r), p.clearDepth(), p.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Xt(
      new pi(),
      new Er({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1
      })
    ));
    const E = this._backgroundBox, d = E.material;
    let h = !1;
    const v = e.background;
    v ? v.isColor && (d.color.copy(v), e.background = null, h = !0) : (d.color.copy(ua), h = !0);
    for (let b = 0; b < 6; b++) {
      const S = b % 3;
      S === 0 ? (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + f[b], s.y, s.z)) : S === 1 ? (c.up.set(0, 0, l[b]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + f[b], s.z)) : (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + f[b]));
      const R = this._cubeSize;
      ci(r, S * R, b > 2 ? R : 0, R, R), p.setRenderTarget(r), h && p.render(E, c), p.render(e, c);
    }
    p.toneMapping = m, p.autoClear = u, e.background = v;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = fa()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = da());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    ci(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, wi);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodMeshes.length;
    for (let s = 1; s < r; s++)
      this._applyGGXFilter(e, s - 1, s);
    t.autoClear = n;
  }
  /**
   * Applies GGX VNDF importance sampling filter to generate a prefiltered environment map.
   * Uses Monte Carlo integration with VNDF importance sampling to accurately represent the
   * GGX BRDF for physically-based rendering. Reads from the previous LOD level and
   * applies incremental roughness filtering to avoid over-blurring.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn - Source LOD level to read from
   * @param {number} lodOut - Target LOD level to write to
   */
  _applyGGXFilter(e, t, n) {
    const r = this._renderer, s = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
    o.material = a;
    const c = a.uniforms, l = n / (this._lodMeshes.length - 1), f = t / (this._lodMeshes.length - 1), p = Math.sqrt(l * l - f * f), u = 0 + l * 1.25, m = p * u, { _lodMax: x } = this, E = this._sizeLods[n], d = 3 * E * (n > x - Rn ? n - x + Rn : 0), h = 4 * (this._cubeSize - E);
    c.envMap.value = e.texture, c.roughness.value = m, c.mipInt.value = x - t, ci(s, d, h, 3 * E, 2 * E), r.setRenderTarget(s), r.render(o, wi), c.envMap.value = s.texture, c.roughness.value = 0, c.mipInt.value = x - n, ci(e, d, h, 3 * E, 2 * E), r.setRenderTarget(e), r.render(o, wi);
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * Used for initial scene blur in fromScene() method when sigma > 0.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && Ze(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const f = 3, p = this._lodMeshes[r];
    p.material = l;
    const u = l.uniforms, m = this._sizeLods[n] - 1, x = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Un - 1), E = s / x, d = isFinite(s) ? 1 + Math.floor(f * E) : Un;
    d > Un && Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Un}`);
    const h = [];
    let v = 0;
    for (let w = 0; w < Un; ++w) {
      const g = w / E, A = Math.exp(-g * g / 2);
      h.push(A), w === 0 ? v += A : w < d && (v += 2 * A);
    }
    for (let w = 0; w < h.length; w++)
      h[w] = h[w] / v;
    u.envMap.value = e.texture, u.samples.value = d, u.weights.value = h, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: b } = this;
    u.dTheta.value = x, u.mipInt.value = b - n;
    const S = this._sizeLods[r], R = 3 * S * (r > b - Rn ? r - b + Rn : 0), y = 4 * (this._cubeSize - S);
    ci(t, R, y, 3 * S, 2 * S), c.setRenderTarget(t), c.render(p, wi);
  }
}
function Lu(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Rn + 1 + ca.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let c = 1 / o;
    a > i - Rn ? c = ca[a - i + Rn - 1] : a === 0 && (c = 0), t.push(c);
    const l = 1 / (o - 2), f = -l, p = 1 + l, u = [f, f, p, f, p, p, f, f, p, p, f, p], m = 6, x = 6, E = 3, d = 2, h = 1, v = new Float32Array(E * x * m), b = new Float32Array(d * x * m), S = new Float32Array(h * x * m);
    for (let y = 0; y < m; y++) {
      const w = y % 3 * 2 / 3 - 1, g = y > 2 ? 0 : -1, A = [
        w,
        g,
        0,
        w + 2 / 3,
        g,
        0,
        w + 2 / 3,
        g + 1,
        0,
        w,
        g,
        0,
        w + 2 / 3,
        g + 1,
        0,
        w,
        g + 1,
        0
      ];
      v.set(A, E * x * y), b.set(u, d * x * y);
      const P = [y, y, y, y, y, y];
      S.set(P, h * x * y);
    }
    const R = new Rt();
    R.setAttribute("position", new Zt(v, E)), R.setAttribute("uv", new Zt(b, d)), R.setAttribute("faceIndex", new Zt(S, h)), n.push(new Xt(R, null)), r > Rn && r--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function ha(i, e, t) {
  const n = new en(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ci(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Fu(i, e, t) {
  return new tn({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: Pu,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: Cr(),
    fragmentShader: (
      /* glsl */
      `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Iu(i, e, t) {
  const n = new Float32Array(Un), r = new N(0, 1, 0);
  return new tn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Un,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Cr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function da() {
  return new tn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Cr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function fa() {
  return new tn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Cr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Cr() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
class Cs extends en {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new ys(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new pi(5, 5, 5), s = new tn({
      name: "CubemapFromEquirect",
      uniforms: di(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new Xt(r, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new eo(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(e, t = !0, n = !0, r = !0) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
function Uu(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, m = !1) {
    return u == null ? null : m ? a(u) : s(u);
  }
  function s(u) {
    if (u && u.isTexture) {
      const m = u.mapping;
      if (m === 303 || m === 304)
        if (e.has(u)) {
          const x = e.get(u).texture;
          return o(x, u.mapping);
        } else {
          const x = u.image;
          if (x && x.height > 0) {
            const E = new Cs(x.height);
            return E.fromEquirectangularTexture(i, u), e.set(u, E), u.addEventListener("dispose", l), o(E.texture, u.mapping);
          } else
            return null;
        }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const m = u.mapping, x = m === 303 || m === 304, E = m === 301 || m === 302;
      if (x || E) {
        let d = t.get(u);
        const h = d !== void 0 ? d.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== h)
          return n === null && (n = new ps(i)), d = x ? n.fromEquirectangular(u, d) : n.fromCubemap(u, d), d.texture.pmremVersion = u.pmremVersion, t.set(u, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const v = u.image;
          return x && v && v.height > 0 || E && v && c(v) ? (n === null && (n = new ps(i)), d = x ? n.fromEquirectangular(u) : n.fromCubemap(u), d.texture.pmremVersion = u.pmremVersion, t.set(u, d), u.addEventListener("dispose", f), d.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, m) {
    return m === 303 ? u.mapping = 301 : m === 304 && (u.mapping = 302), u;
  }
  function c(u) {
    let m = 0;
    const x = 6;
    for (let E = 0; E < x; E++)
      u[E] !== void 0 && m++;
    return m === x;
  }
  function l(u) {
    const m = u.target;
    m.removeEventListener("dispose", l);
    const x = e.get(m);
    x !== void 0 && (e.delete(m), x.dispose());
  }
  function f(u) {
    const m = u.target;
    m.removeEventListener("dispose", f);
    const x = t.get(m);
    x !== void 0 && (t.delete(m), x.dispose());
  }
  function p() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: r,
    dispose: p
  };
}
function Nu(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    const r = i.getExtension(n);
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && mr("WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Bu(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(p) {
    const u = p.target;
    u.index !== null && e.remove(u.index);
    for (const x in u.attributes)
      e.remove(u.attributes[x]);
    u.removeEventListener("dispose", a), delete r[u.id];
    const m = s.get(u);
    m && (e.remove(m), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(p, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", a), r[u.id] = !0, t.memory.geometries++), u;
  }
  function c(p) {
    const u = p.attributes;
    for (const m in u)
      e.update(u[m], i.ARRAY_BUFFER);
  }
  function l(p) {
    const u = [], m = p.index, x = p.attributes.position;
    let E = 0;
    if (x === void 0)
      return;
    if (m !== null) {
      const v = m.array;
      E = m.version;
      for (let b = 0, S = v.length; b < S; b += 3) {
        const R = v[b + 0], y = v[b + 1], w = v[b + 2];
        u.push(R, y, y, w, w, R);
      }
    } else {
      const v = x.array;
      E = x.version;
      for (let b = 0, S = v.length / 3 - 1; b < S; b += 3) {
        const R = b + 0, y = b + 1, w = b + 2;
        u.push(R, y, y, w, w, R);
      }
    }
    const d = new (x.count >= 65535 ? Ms : vs)(u, 1);
    d.version = E;
    const h = s.get(p);
    h && e.remove(h), s.set(p, d);
  }
  function f(p) {
    const u = s.get(p);
    if (u) {
      const m = p.index;
      m !== null && u.version < m.version && l(p);
    } else
      l(p);
    return s.get(p);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: f
  };
}
function Ou(i, e, t) {
  let n;
  function r(p) {
    n = p;
  }
  let s, a;
  function o(p) {
    s = p.type, a = p.bytesPerElement;
  }
  function c(p, u) {
    i.drawElements(n, u, s, p * a), t.update(u, n, 1);
  }
  function l(p, u, m) {
    m !== 0 && (i.drawElementsInstanced(n, u, s, p * a, m), t.update(u, n, m));
  }
  function f(p, u, m) {
    if (m === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, s, p, 0, m);
    let E = 0;
    for (let d = 0; d < m; d++)
      E += u[d];
    t.update(E, n, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = f;
}
function Gu(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        Ze("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function zu(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new _t();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, f = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, p = f !== void 0 ? f.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== p) {
      let A = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", A);
      };
      u !== void 0 && u.texture.dispose();
      const m = o.morphAttributes.position !== void 0, x = o.morphAttributes.normal !== void 0, E = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], v = o.morphAttributes.color || [];
      let b = 0;
      m === !0 && (b = 1), x === !0 && (b = 2), E === !0 && (b = 3);
      let S = o.attributes.position.count * b, R = 1;
      S > e.maxTextureSize && (R = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
      const y = new Float32Array(S * R * 4 * p), w = new gs(y, S, R, p);
      w.type = 1015, w.needsUpdate = !0;
      const g = b * 4;
      for (let P = 0; P < p; P++) {
        const C = d[P], L = h[P], W = v[P], X = S * R * 4 * P;
        for (let I = 0; I < C.count; I++) {
          const V = I * g;
          m === !0 && (r.fromBufferAttribute(C, I), y[X + V + 0] = r.x, y[X + V + 1] = r.y, y[X + V + 2] = r.z, y[X + V + 3] = 0), x === !0 && (r.fromBufferAttribute(L, I), y[X + V + 4] = r.x, y[X + V + 5] = r.y, y[X + V + 6] = r.z, y[X + V + 7] = 0), E === !0 && (r.fromBufferAttribute(W, I), y[X + V + 8] = r.x, y[X + V + 9] = r.y, y[X + V + 10] = r.z, y[X + V + 11] = W.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: p,
        texture: w,
        size: new Fe(S, R)
      }, n.set(o, u), o.addEventListener("dispose", A);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let m = 0;
      for (let E = 0; E < l.length; E++)
        m += l[E];
      const x = o.morphTargetsRelative ? 1 : 1 - m;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", x), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: s
  };
}
function Vu(i, e, t, n, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const f = r.render.frame, p = l.geometry, u = e.get(l, p);
    if (s.get(u) !== f && (e.update(u), s.set(u, f)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === !1 && l.addEventListener("dispose", c), s.get(l) !== f && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, f))), l.isSkinnedMesh) {
      const m = l.skeleton;
      s.get(m) !== f && (m.update(), s.set(m, f));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function c(l) {
    const f = l.target;
    f.removeEventListener("dispose", c), n.releaseStatesOfObject(f), t.remove(f.instanceMatrix), f.instanceColor !== null && t.remove(f.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
const ku = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function Hu(i, e, t, n, r) {
  const s = new en(e, t, {
    type: i,
    depthBuffer: n,
    stencilBuffer: r,
    depthTexture: n ? new Bn(e, t) : void 0
  }), a = new en(e, t, {
    type: 1016,
    depthBuffer: !1,
    stencilBuffer: !1
  }), o = new Rt();
  o.setAttribute("position", new at([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new at([0, 2, 0, 0, 2, 0], 2));
  const c = new Ka({
    uniforms: {
      tDiffuse: { value: null }
    },
    vertexShader: (
      /* glsl */
      `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`
    ),
    fragmentShader: (
      /* glsl */
      `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`
    ),
    depthTest: !1,
    depthWrite: !1
  }), l = new Xt(o, c), f = new wr(-1, 1, 1, -1, 0, 1);
  let p = null, u = null, m = !1, x, E = null, d = [], h = !1;
  this.setSize = function(v, b) {
    s.setSize(v, b), a.setSize(v, b);
    for (let S = 0; S < d.length; S++) {
      const R = d[S];
      R.setSize && R.setSize(v, b);
    }
  }, this.setEffects = function(v) {
    d = v, h = d.length > 0 && d[0].isRenderPass === !0;
    const b = s.width, S = s.height;
    for (let R = 0; R < d.length; R++) {
      const y = d[R];
      y.setSize && y.setSize(b, S);
    }
  }, this.begin = function(v, b) {
    if (m || v.toneMapping === 0 && d.length === 0) return !1;
    if (E = b, b !== null) {
      const S = b.width, R = b.height;
      (s.width !== S || s.height !== R) && this.setSize(S, R);
    }
    return h === !1 && v.setRenderTarget(s), x = v.toneMapping, v.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return h;
  }, this.end = function(v, b) {
    v.toneMapping = x, m = !0;
    let S = s, R = a;
    for (let y = 0; y < d.length; y++) {
      const w = d[y];
      if (w.enabled !== !1 && (w.render(v, R, S, b), w.needsSwap !== !1)) {
        const g = S;
        S = R, R = g;
      }
    }
    if (p !== v.outputColorSpace || u !== v.toneMapping) {
      p = v.outputColorSpace, u = v.toneMapping, c.defines = {}, qe.getTransfer(p) === nt && (c.defines.SRGB_TRANSFER = "");
      const y = ku[u];
      y && (c.defines[y] = ""), c.needsUpdate = !0;
    }
    c.uniforms.tDiffuse.value = S.texture, v.setRenderTarget(E), v.render(l, f), E = null, m = !1;
  }, this.isCompositing = function() {
    return m;
  }, this.dispose = function() {
    s.depthTexture && s.depthTexture.dispose(), s.dispose(), a.dispose(), o.dispose(), c.dispose();
  };
}
const ro = /* @__PURE__ */ new Ct(), ms = /* @__PURE__ */ new Bn(1, 1), so = /* @__PURE__ */ new gs(), ao = /* @__PURE__ */ new Ba(), oo = /* @__PURE__ */ new ys(), pa = [], ma = [], _a = new Float32Array(16), ga = new Float32Array(9), xa = new Float32Array(4);
function _i(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = pa[r];
  if (s === void 0 && (s = new Float32Array(r), pa[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function Tt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function bt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Pr(i, e) {
  let t = ma[e];
  t === void 0 && (t = new Int32Array(e), ma[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Wu(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Xu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Tt(t, e)) return;
    i.uniform2fv(this.addr, e), bt(t, e);
  }
}
function qu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Tt(t, e)) return;
    i.uniform3fv(this.addr, e), bt(t, e);
  }
}
function Yu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Tt(t, e)) return;
    i.uniform4fv(this.addr, e), bt(t, e);
  }
}
function Zu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Tt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), bt(t, e);
  } else {
    if (Tt(t, n)) return;
    xa.set(n), i.uniformMatrix2fv(this.addr, !1, xa), bt(t, n);
  }
}
function Ku(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Tt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), bt(t, e);
  } else {
    if (Tt(t, n)) return;
    ga.set(n), i.uniformMatrix3fv(this.addr, !1, ga), bt(t, n);
  }
}
function $u(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Tt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), bt(t, e);
  } else {
    if (Tt(t, n)) return;
    _a.set(n), i.uniformMatrix4fv(this.addr, !1, _a), bt(t, n);
  }
}
function ju(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Ju(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Tt(t, e)) return;
    i.uniform2iv(this.addr, e), bt(t, e);
  }
}
function Qu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Tt(t, e)) return;
    i.uniform3iv(this.addr, e), bt(t, e);
  }
}
function eh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Tt(t, e)) return;
    i.uniform4iv(this.addr, e), bt(t, e);
  }
}
function th(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function nh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Tt(t, e)) return;
    i.uniform2uiv(this.addr, e), bt(t, e);
  }
}
function ih(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Tt(t, e)) return;
    i.uniform3uiv(this.addr, e), bt(t, e);
  }
}
function rh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Tt(t, e)) return;
    i.uniform4uiv(this.addr, e), bt(t, e);
  }
}
function sh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (ms.compareFunction = t.isReversedDepthBuffer() ? 518 : 515, s = ms) : s = ro, t.setTexture2D(e || s, r);
}
function ah(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || ao, r);
}
function oh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || oo, r);
}
function lh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || so, r);
}
function ch(i) {
  switch (i) {
    case 5126:
      return Wu;
    case 35664:
      return Xu;
    case 35665:
      return qu;
    case 35666:
      return Yu;
    case 35674:
      return Zu;
    case 35675:
      return Ku;
    case 35676:
      return $u;
    case 5124:
    case 35670:
      return ju;
    case 35667:
    case 35671:
      return Ju;
    case 35668:
    case 35672:
      return Qu;
    case 35669:
    case 35673:
      return eh;
    case 5125:
      return th;
    case 36294:
      return nh;
    case 36295:
      return ih;
    case 36296:
      return rh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return sh;
    case 35679:
    case 36299:
    case 36307:
      return ah;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return oh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return lh;
  }
}
function uh(i, e) {
  i.uniform1fv(this.addr, e);
}
function hh(i, e) {
  const t = _i(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function dh(i, e) {
  const t = _i(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function fh(i, e) {
  const t = _i(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function ph(i, e) {
  const t = _i(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function mh(i, e) {
  const t = _i(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function _h(i, e) {
  const t = _i(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function gh(i, e) {
  i.uniform1iv(this.addr, e);
}
function xh(i, e) {
  i.uniform2iv(this.addr, e);
}
function vh(i, e) {
  i.uniform3iv(this.addr, e);
}
function Mh(i, e) {
  i.uniform4iv(this.addr, e);
}
function Sh(i, e) {
  i.uniform1uiv(this.addr, e);
}
function yh(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Eh(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Th(i, e) {
  i.uniform4uiv(this.addr, e);
}
function bh(i, e, t) {
  const n = this.cache, r = e.length, s = Pr(t, r);
  Tt(n, s) || (i.uniform1iv(this.addr, s), bt(n, s));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? a = ms : a = ro;
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || a, s[o]);
}
function Ah(i, e, t) {
  const n = this.cache, r = e.length, s = Pr(t, r);
  Tt(n, s) || (i.uniform1iv(this.addr, s), bt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || ao, s[a]);
}
function Rh(i, e, t) {
  const n = this.cache, r = e.length, s = Pr(t, r);
  Tt(n, s) || (i.uniform1iv(this.addr, s), bt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || oo, s[a]);
}
function wh(i, e, t) {
  const n = this.cache, r = e.length, s = Pr(t, r);
  Tt(n, s) || (i.uniform1iv(this.addr, s), bt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || so, s[a]);
}
function Ch(i) {
  switch (i) {
    case 5126:
      return uh;
    case 35664:
      return hh;
    case 35665:
      return dh;
    case 35666:
      return fh;
    case 35674:
      return ph;
    case 35675:
      return mh;
    case 35676:
      return _h;
    case 5124:
    case 35670:
      return gh;
    case 35667:
    case 35671:
      return xh;
    case 35668:
    case 35672:
      return vh;
    case 35669:
    case 35673:
      return Mh;
    case 5125:
      return Sh;
    case 36294:
      return yh;
    case 36295:
      return Eh;
    case 36296:
      return Th;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return bh;
    case 35679:
    case 36299:
    case 36307:
      return Ah;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Rh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wh;
  }
}
class Ph {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = ch(t.type);
  }
}
class Dh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Ch(t.type);
  }
}
class Lh {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const os = /(\w+)(\])?(\[|\.)?/g;
function va(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Fh(i, e, t) {
  const n = i.name, r = n.length;
  for (os.lastIndex = 0; ; ) {
    const s = os.exec(n), a = os.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      va(t, l === void 0 ? new Ph(o, i, e) : new Dh(o, i, e));
      break;
    } else {
      let p = t.map[o];
      p === void 0 && (p = new Lh(o), va(t, p)), t = p;
    }
  }
}
class fr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a), c = e.getUniformLocation(t, o.name);
      Fh(o, c, this);
    }
    const r = [], s = [];
    for (const a of this.seq)
      a.type === e.SAMPLER_2D_SHADOW || a.type === e.SAMPLER_CUBE_SHADOW || a.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(a) : s.push(a);
    r.length > 0 && (this.seq = r.concat(s));
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Ma(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Ih = 37297;
let Uh = 0;
function Nh(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Sa = /* @__PURE__ */ new Be();
function Bh(i) {
  qe._getMatrix(Sa, qe.workingColorSpace, i);
  const e = `mat3( ${Sa.elements.map((t) => t.toFixed(4))} )`;
  switch (qe.getTransfer(i)) {
    case Li:
      return [e, "LinearTransferOETF"];
    case nt:
      return [e, "sRGBTransferOETF"];
    default:
      return Le("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function ya(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + Nh(i.getShaderSource(e), o);
  } else
    return s;
}
function Oh(i, e) {
  const t = Bh(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
const Gh = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function zh(i, e) {
  const t = Gh[e];
  return t === void 0 ? (Le("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ur = /* @__PURE__ */ new N();
function Vh() {
  qe.getLuminanceCoefficients(ur);
  const i = ur.x.toFixed(4), e = ur.y.toFixed(4), t = ur.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function kh(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Pi).join(`
`);
}
function Hh(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Wh(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: i.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Pi(i) {
  return i !== "";
}
function Ea(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ta(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Xh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function _s(i) {
  return i.replace(Xh, Yh);
}
const qh = /* @__PURE__ */ new Map();
function Yh(i, e) {
  let t = Ve[e];
  if (t === void 0) {
    const n = qh.get(e);
    if (n !== void 0)
      t = Ve[n], Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return _s(t);
}
const Zh = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ba(i) {
  return i.replace(Zh, Kh);
}
function Kh(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Aa(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
const $h = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function jh(i) {
  return $h[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const Jh = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function Qh(i) {
  return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : Jh[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const ed = {
  302: "ENVMAP_MODE_REFRACTION"
};
function td(i) {
  return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : ed[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const nd = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function id(i) {
  return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : nd[i.combine] || "ENVMAP_BLENDING_NONE";
}
function rd(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function sd(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = jh(t), l = Qh(t), f = td(t), p = id(t), u = rd(t), m = kh(t), x = Hh(s), E = r.createProgram();
  let d, h, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x
  ].filter(Pi).join(`
`), d.length > 0 && (d += `
`), h = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x
  ].filter(Pi).join(`
`), h.length > 0 && (h += `
`)) : (d = [
    Aa(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + f : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexNormals ? "#define HAS_NORMAL" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Pi).join(`
`), h = [
    Aa(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    x,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + f : "",
    t.envMap ? "#define " + p : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Ve.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? zh("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ve.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Oh("linearToOutputTexel", t.outputColorSpace),
    Vh(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Pi).join(`
`)), a = _s(a), a = Ea(a, t), a = Ta(a, t), o = _s(o), o = Ea(o, t), o = Ta(o, t), a = ba(a), o = ba(o), t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, d = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + d, h = [
    "#define varying in",
    t.glslVersion === cs ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === cs ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + h);
  const b = v + d + a, S = v + h + o, R = Ma(r, r.VERTEX_SHADER, b), y = Ma(r, r.FRAGMENT_SHADER, S);
  r.attachShader(E, R), r.attachShader(E, y), t.index0AttributeName !== void 0 ? r.bindAttribLocation(E, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(E, 0, "position"), r.linkProgram(E);
  function w(C) {
    if (i.debug.checkShaderErrors) {
      const L = r.getProgramInfoLog(E) || "", W = r.getShaderInfoLog(R) || "", X = r.getShaderInfoLog(y) || "", I = L.trim(), V = W.trim(), q = X.trim();
      let ne = !0, re = !0;
      if (r.getProgramParameter(E, r.LINK_STATUS) === !1)
        if (ne = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, E, R, y);
        else {
          const de = ya(r, R, "vertex"), ye = ya(r, y, "fragment");
          Ze(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(E, r.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + I + `
` + de + `
` + ye
          );
        }
      else I !== "" ? Le("WebGLProgram: Program Info Log:", I) : (V === "" || q === "") && (re = !1);
      re && (C.diagnostics = {
        runnable: ne,
        programLog: I,
        vertexShader: {
          log: V,
          prefix: d
        },
        fragmentShader: {
          log: q,
          prefix: h
        }
      });
    }
    r.deleteShader(R), r.deleteShader(y), g = new fr(r, E), A = Wh(r, E);
  }
  let g;
  this.getUniforms = function() {
    return g === void 0 && w(this), g;
  };
  let A;
  this.getAttributes = function() {
    return A === void 0 && w(this), A;
  };
  let P = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return P === !1 && (P = r.getProgramParameter(E, Ih)), P;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(E), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Uh++, this.cacheKey = e, this.usedTimes = 1, this.program = E, this.vertexShader = R, this.fragmentShader = y, this;
}
let ad = 0;
class od {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new ld(e), t.set(e, n)), n;
  }
}
class ld {
  constructor(e) {
    this.id = ad++, this.code = e, this.usedTimes = 0;
  }
}
function cd(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function ud(i, e, t, n, r, s) {
  const a = new xs(), o = new od(), c = /* @__PURE__ */ new Set(), l = [], f = /* @__PURE__ */ new Map(), p = n.logarithmicDepthBuffer;
  let u = n.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function x(g) {
    return c.add(g), g === 0 ? "uv" : `uv${g}`;
  }
  function E(g, A, P, C, L, W) {
    const X = C.fog, I = L.geometry, V = g.isMeshStandardMaterial || g.isMeshLambertMaterial || g.isMeshPhongMaterial ? C.environment : null, q = g.isMeshStandardMaterial || g.isMeshLambertMaterial && !g.envMap || g.isMeshPhongMaterial && !g.envMap, ne = e.get(g.envMap || V, q), re = ne && ne.mapping === 306 ? ne.image.height : null, de = m[g.type];
    g.precision !== null && (u = n.getMaxPrecision(g.precision), u !== g.precision && Le("WebGLProgram.getParameters:", g.precision, "not supported, using", u, "instead."));
    const ye = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color, be = ye !== void 0 ? ye.length : 0;
    let We = 0;
    I.morphAttributes.position !== void 0 && (We = 1), I.morphAttributes.normal !== void 0 && (We = 2), I.morphAttributes.color !== void 0 && (We = 3);
    let et, Oe, Q, Y;
    if (de) {
      const Ue = Qt[de];
      et = Ue.vertexShader, Oe = Ue.fragmentShader;
    } else
      et = g.vertexShader, Oe = g.fragmentShader, o.update(g), Q = o.getVertexShaderID(g), Y = o.getFragmentShaderID(g);
    const K = i.getRenderTarget(), ie = i.state.buffers.depth.getReversed(), we = L.isInstancedMesh === !0, Ee = L.isBatchedMesh === !0, ct = !!g.map, He = !!g.matcap, Je = !!ne, rt = !!g.aoMap, ze = !!g.lightMap, gt = !!g.bumpMap, dt = !!g.normalMap, Pt = !!g.displacementMap, F = !!g.emissiveMap, xt = !!g.metalnessMap, ke = !!g.roughnessMap, tt = g.anisotropy > 0, he = g.clearcoat > 0, ot = g.dispersion > 0, T = g.iridescence > 0, _ = g.sheen > 0, B = g.transmission > 0, j = tt && !!g.anisotropyMap, ee = he && !!g.clearcoatMap, oe = he && !!g.clearcoatNormalMap, le = he && !!g.clearcoatRoughnessMap, $ = T && !!g.iridescenceMap, J = T && !!g.iridescenceThicknessMap, fe = _ && !!g.sheenColorMap, xe = _ && !!g.sheenRoughnessMap, ce = !!g.specularMap, ae = !!g.specularColorMap, Ie = !!g.specularIntensityMap, Ge = B && !!g.transmissionMap, Ce = B && !!g.thicknessMap, D = !!g.gradientMap, H = !!g.alphaMap, Z = g.alphaTest > 0, ve = !!g.alphaHash, ue = !!g.extensions;
    let te = 0;
    g.toneMapped && (K === null || K.isXRRenderTarget === !0) && (te = i.toneMapping);
    const Te = {
      shaderID: de,
      shaderType: g.type,
      shaderName: g.name,
      vertexShader: et,
      fragmentShader: Oe,
      defines: g.defines,
      customVertexShaderID: Q,
      customFragmentShaderID: Y,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: u,
      batching: Ee,
      batchingColor: Ee && L._colorsTexture !== null,
      instancing: we,
      instancingColor: we && L.instanceColor !== null,
      instancingMorph: we && L.morphTexture !== null,
      outputColorSpace: K === null ? i.outputColorSpace : K.isXRRenderTarget === !0 ? K.texture.colorSpace : qe.workingColorSpace,
      alphaToCoverage: !!g.alphaToCoverage,
      map: ct,
      matcap: He,
      envMap: Je,
      envMapMode: Je && ne.mapping,
      envMapCubeUVHeight: re,
      aoMap: rt,
      lightMap: ze,
      bumpMap: gt,
      normalMap: dt,
      displacementMap: Pt,
      emissiveMap: F,
      normalMapObjectSpace: dt && g.normalMapType === 1,
      normalMapTangentSpace: dt && g.normalMapType === 0,
      packedNormalMap: dt && g.normalMapType === 0 && cd(g.normalMap.format),
      metalnessMap: xt,
      roughnessMap: ke,
      anisotropy: tt,
      anisotropyMap: j,
      clearcoat: he,
      clearcoatMap: ee,
      clearcoatNormalMap: oe,
      clearcoatRoughnessMap: le,
      dispersion: ot,
      iridescence: T,
      iridescenceMap: $,
      iridescenceThicknessMap: J,
      sheen: _,
      sheenColorMap: fe,
      sheenRoughnessMap: xe,
      specularMap: ce,
      specularColorMap: ae,
      specularIntensityMap: Ie,
      transmission: B,
      transmissionMap: Ge,
      thicknessMap: Ce,
      gradientMap: D,
      opaque: g.transparent === !1 && g.blending === 1 && g.alphaToCoverage === !1,
      alphaMap: H,
      alphaTest: Z,
      alphaHash: ve,
      combine: g.combine,
      //
      mapUv: ct && x(g.map.channel),
      aoMapUv: rt && x(g.aoMap.channel),
      lightMapUv: ze && x(g.lightMap.channel),
      bumpMapUv: gt && x(g.bumpMap.channel),
      normalMapUv: dt && x(g.normalMap.channel),
      displacementMapUv: Pt && x(g.displacementMap.channel),
      emissiveMapUv: F && x(g.emissiveMap.channel),
      metalnessMapUv: xt && x(g.metalnessMap.channel),
      roughnessMapUv: ke && x(g.roughnessMap.channel),
      anisotropyMapUv: j && x(g.anisotropyMap.channel),
      clearcoatMapUv: ee && x(g.clearcoatMap.channel),
      clearcoatNormalMapUv: oe && x(g.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: le && x(g.clearcoatRoughnessMap.channel),
      iridescenceMapUv: $ && x(g.iridescenceMap.channel),
      iridescenceThicknessMapUv: J && x(g.iridescenceThicknessMap.channel),
      sheenColorMapUv: fe && x(g.sheenColorMap.channel),
      sheenRoughnessMapUv: xe && x(g.sheenRoughnessMap.channel),
      specularMapUv: ce && x(g.specularMap.channel),
      specularColorMapUv: ae && x(g.specularColorMap.channel),
      specularIntensityMapUv: Ie && x(g.specularIntensityMap.channel),
      transmissionMapUv: Ge && x(g.transmissionMap.channel),
      thicknessMapUv: Ce && x(g.thicknessMap.channel),
      alphaMapUv: H && x(g.alphaMap.channel),
      //
      vertexTangents: !!I.attributes.tangent && (dt || tt),
      vertexNormals: !!I.attributes.normal,
      vertexColors: g.vertexColors,
      vertexAlphas: g.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4,
      pointsUvs: L.isPoints === !0 && !!I.attributes.uv && (ct || H),
      fog: !!X,
      useFog: g.fog === !0,
      fogExp2: !!X && X.isFogExp2,
      flatShading: g.wireframe === !1 && (g.flatShading === !0 || I.attributes.normal === void 0 && dt === !1 && (g.isMeshLambertMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isMeshPhysicalMaterial)),
      sizeAttenuation: g.sizeAttenuation === !0,
      logarithmicDepthBuffer: p,
      reversedDepthBuffer: ie,
      skinning: L.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: be,
      morphTextureStride: We,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numLightProbes: A.numLightProbes,
      numLightProbeGrids: W.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: te,
      decodeVideoTexture: ct && g.map.isVideoTexture === !0 && qe.getTransfer(g.map.colorSpace) === nt,
      decodeVideoTextureEmissive: F && g.emissiveMap.isVideoTexture === !0 && qe.getTransfer(g.emissiveMap.colorSpace) === nt,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === 2,
      flipSided: g.side === 1,
      useDepthPacking: g.depthPacking >= 0,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionClipCullDistance: ue && g.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ue && g.extensions.multiDraw === !0 || Ee) && t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: g.customProgramCacheKey()
    };
    return Te.vertexUv1s = c.has(1), Te.vertexUv2s = c.has(2), Te.vertexUv3s = c.has(3), c.clear(), Te;
  }
  function d(g) {
    const A = [];
    if (g.shaderID ? A.push(g.shaderID) : (A.push(g.customVertexShaderID), A.push(g.customFragmentShaderID)), g.defines !== void 0)
      for (const P in g.defines)
        A.push(P), A.push(g.defines[P]);
    return g.isRawShaderMaterial === !1 && (h(A, g), v(A, g), A.push(i.outputColorSpace)), A.push(g.customProgramCacheKey), A.join();
  }
  function h(g, A) {
    g.push(A.precision), g.push(A.outputColorSpace), g.push(A.envMapMode), g.push(A.envMapCubeUVHeight), g.push(A.mapUv), g.push(A.alphaMapUv), g.push(A.lightMapUv), g.push(A.aoMapUv), g.push(A.bumpMapUv), g.push(A.normalMapUv), g.push(A.displacementMapUv), g.push(A.emissiveMapUv), g.push(A.metalnessMapUv), g.push(A.roughnessMapUv), g.push(A.anisotropyMapUv), g.push(A.clearcoatMapUv), g.push(A.clearcoatNormalMapUv), g.push(A.clearcoatRoughnessMapUv), g.push(A.iridescenceMapUv), g.push(A.iridescenceThicknessMapUv), g.push(A.sheenColorMapUv), g.push(A.sheenRoughnessMapUv), g.push(A.specularMapUv), g.push(A.specularColorMapUv), g.push(A.specularIntensityMapUv), g.push(A.transmissionMapUv), g.push(A.thicknessMapUv), g.push(A.combine), g.push(A.fogExp2), g.push(A.sizeAttenuation), g.push(A.morphTargetsCount), g.push(A.morphAttributeCount), g.push(A.numDirLights), g.push(A.numPointLights), g.push(A.numSpotLights), g.push(A.numSpotLightMaps), g.push(A.numHemiLights), g.push(A.numRectAreaLights), g.push(A.numDirLightShadows), g.push(A.numPointLightShadows), g.push(A.numSpotLightShadows), g.push(A.numSpotLightShadowsWithMaps), g.push(A.numLightProbes), g.push(A.shadowMapType), g.push(A.toneMapping), g.push(A.numClippingPlanes), g.push(A.numClipIntersection), g.push(A.depthPacking);
  }
  function v(g, A) {
    a.disableAll(), A.instancing && a.enable(0), A.instancingColor && a.enable(1), A.instancingMorph && a.enable(2), A.matcap && a.enable(3), A.envMap && a.enable(4), A.normalMapObjectSpace && a.enable(5), A.normalMapTangentSpace && a.enable(6), A.clearcoat && a.enable(7), A.iridescence && a.enable(8), A.alphaTest && a.enable(9), A.vertexColors && a.enable(10), A.vertexAlphas && a.enable(11), A.vertexUv1s && a.enable(12), A.vertexUv2s && a.enable(13), A.vertexUv3s && a.enable(14), A.vertexTangents && a.enable(15), A.anisotropy && a.enable(16), A.alphaHash && a.enable(17), A.batching && a.enable(18), A.dispersion && a.enable(19), A.batchingColor && a.enable(20), A.gradientMap && a.enable(21), A.packedNormalMap && a.enable(22), A.vertexNormals && a.enable(23), g.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.reversedDepthBuffer && a.enable(4), A.skinning && a.enable(5), A.morphTargets && a.enable(6), A.morphNormals && a.enable(7), A.morphColors && a.enable(8), A.premultipliedAlpha && a.enable(9), A.shadowMapEnabled && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.transmission && a.enable(15), A.sheen && a.enable(16), A.opaque && a.enable(17), A.pointsUvs && a.enable(18), A.decodeVideoTexture && a.enable(19), A.decodeVideoTextureEmissive && a.enable(20), A.alphaToCoverage && a.enable(21), A.numLightProbeGrids > 0 && a.enable(22), g.push(a.mask);
  }
  function b(g) {
    const A = m[g.type];
    let P;
    if (A) {
      const C = Qt[A];
      P = Za.clone(C.uniforms);
    } else
      P = g.uniforms;
    return P;
  }
  function S(g, A) {
    let P = f.get(A);
    return P !== void 0 ? ++P.usedTimes : (P = new sd(i, A, g, r), l.push(P), f.set(A, P)), P;
  }
  function R(g) {
    if (--g.usedTimes === 0) {
      const A = l.indexOf(g);
      l[A] = l[l.length - 1], l.pop(), f.delete(g.cacheKey), g.destroy();
    }
  }
  function y(g) {
    o.remove(g);
  }
  function w() {
    o.dispose();
  }
  return {
    getParameters: E,
    getProgramCacheKey: d,
    getUniforms: b,
    acquireProgram: S,
    releaseProgram: R,
    releaseShaderCache: y,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: w
  };
}
function hd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, c) {
    i.get(a)[o] = c;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: s
  };
}
function dd(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Ra(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function wa() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    let m = 0;
    return u.isInstancedMesh && (m += 2), u.isSkinnedMesh && (m += 1), m;
  }
  function o(u, m, x, E, d, h) {
    let v = i[e];
    return v === void 0 ? (v = {
      id: u.id,
      object: u,
      geometry: m,
      material: x,
      materialVariant: a(u),
      groupOrder: E,
      renderOrder: u.renderOrder,
      z: d,
      group: h
    }, i[e] = v) : (v.id = u.id, v.object = u, v.geometry = m, v.material = x, v.materialVariant = a(u), v.groupOrder = E, v.renderOrder = u.renderOrder, v.z = d, v.group = h), e++, v;
  }
  function c(u, m, x, E, d, h) {
    const v = o(u, m, x, E, d, h);
    x.transmission > 0 ? n.push(v) : x.transparent === !0 ? r.push(v) : t.push(v);
  }
  function l(u, m, x, E, d, h) {
    const v = o(u, m, x, E, d, h);
    x.transmission > 0 ? n.unshift(v) : x.transparent === !0 ? r.unshift(v) : t.unshift(v);
  }
  function f(u, m) {
    t.length > 1 && t.sort(u || dd), n.length > 1 && n.sort(m || Ra), r.length > 1 && r.sort(m || Ra);
  }
  function p() {
    for (let u = e, m = i.length; u < m; u++) {
      const x = i[u];
      if (x.id === null) break;
      x.id = null, x.object = null, x.geometry = null, x.material = null, x.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: c,
    unshift: l,
    finish: p,
    sort: f
  };
}
function fd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new wa(), i.set(n, [a])) : r >= s.length ? (a = new wa(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function pd() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new N(),
            color: new Xe()
          };
          break;
        case "SpotLight":
          t = {
            position: new N(),
            direction: new N(),
            color: new Xe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new N(),
            color: new Xe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new N(),
            skyColor: new Xe(),
            groundColor: new Xe()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Xe(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function md() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let _d = 0;
function gd(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function xd(i) {
  const e = new pd(), t = md(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new N());
  const r = new N(), s = new pt(), a = new pt();
  function o(l) {
    let f = 0, p = 0, u = 0;
    for (let A = 0; A < 9; A++) n.probe[A].set(0, 0, 0);
    let m = 0, x = 0, E = 0, d = 0, h = 0, v = 0, b = 0, S = 0, R = 0, y = 0, w = 0;
    l.sort(gd);
    for (let A = 0, P = l.length; A < P; A++) {
      const C = l[A], L = C.color, W = C.intensity, X = C.distance;
      let I = null;
      if (C.shadow && C.shadow.map && (C.shadow.map.texture.format === 1030 ? I = C.shadow.map.texture : I = C.shadow.map.depthTexture || C.shadow.map.texture), C.isAmbientLight)
        f += L.r * W, p += L.g * W, u += L.b * W;
      else if (C.isLightProbe) {
        for (let V = 0; V < 9; V++)
          n.probe[V].addScaledVector(C.sh.coefficients[V], W);
        w++;
      } else if (C.isDirectionalLight) {
        const V = e.get(C);
        if (V.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const q = C.shadow, ne = t.get(C);
          ne.shadowIntensity = q.intensity, ne.shadowBias = q.bias, ne.shadowNormalBias = q.normalBias, ne.shadowRadius = q.radius, ne.shadowMapSize = q.mapSize, n.directionalShadow[m] = ne, n.directionalShadowMap[m] = I, n.directionalShadowMatrix[m] = C.shadow.matrix, v++;
        }
        n.directional[m] = V, m++;
      } else if (C.isSpotLight) {
        const V = e.get(C);
        V.position.setFromMatrixPosition(C.matrixWorld), V.color.copy(L).multiplyScalar(W), V.distance = X, V.coneCos = Math.cos(C.angle), V.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), V.decay = C.decay, n.spot[E] = V;
        const q = C.shadow;
        if (C.map && (n.spotLightMap[R] = C.map, R++, q.updateMatrices(C), C.castShadow && y++), n.spotLightMatrix[E] = q.matrix, C.castShadow) {
          const ne = t.get(C);
          ne.shadowIntensity = q.intensity, ne.shadowBias = q.bias, ne.shadowNormalBias = q.normalBias, ne.shadowRadius = q.radius, ne.shadowMapSize = q.mapSize, n.spotShadow[E] = ne, n.spotShadowMap[E] = I, S++;
        }
        E++;
      } else if (C.isRectAreaLight) {
        const V = e.get(C);
        V.color.copy(L).multiplyScalar(W), V.halfWidth.set(C.width * 0.5, 0, 0), V.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[d] = V, d++;
      } else if (C.isPointLight) {
        const V = e.get(C);
        if (V.color.copy(C.color).multiplyScalar(C.intensity), V.distance = C.distance, V.decay = C.decay, C.castShadow) {
          const q = C.shadow, ne = t.get(C);
          ne.shadowIntensity = q.intensity, ne.shadowBias = q.bias, ne.shadowNormalBias = q.normalBias, ne.shadowRadius = q.radius, ne.shadowMapSize = q.mapSize, ne.shadowCameraNear = q.camera.near, ne.shadowCameraFar = q.camera.far, n.pointShadow[x] = ne, n.pointShadowMap[x] = I, n.pointShadowMatrix[x] = C.shadow.matrix, b++;
        }
        n.point[x] = V, x++;
      } else if (C.isHemisphereLight) {
        const V = e.get(C);
        V.skyColor.copy(C.color).multiplyScalar(W), V.groundColor.copy(C.groundColor).multiplyScalar(W), n.hemi[h] = V, h++;
      }
    }
    d > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = _e.LTC_FLOAT_1, n.rectAreaLTC2 = _e.LTC_FLOAT_2) : (n.rectAreaLTC1 = _e.LTC_HALF_1, n.rectAreaLTC2 = _e.LTC_HALF_2)), n.ambient[0] = f, n.ambient[1] = p, n.ambient[2] = u;
    const g = n.hash;
    (g.directionalLength !== m || g.pointLength !== x || g.spotLength !== E || g.rectAreaLength !== d || g.hemiLength !== h || g.numDirectionalShadows !== v || g.numPointShadows !== b || g.numSpotShadows !== S || g.numSpotMaps !== R || g.numLightProbes !== w) && (n.directional.length = m, n.spot.length = E, n.rectArea.length = d, n.point.length = x, n.hemi.length = h, n.directionalShadow.length = v, n.directionalShadowMap.length = v, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = v, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = S + R - y, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = y, n.numLightProbes = w, g.directionalLength = m, g.pointLength = x, g.spotLength = E, g.rectAreaLength = d, g.hemiLength = h, g.numDirectionalShadows = v, g.numPointShadows = b, g.numSpotShadows = S, g.numSpotMaps = R, g.numLightProbes = w, n.version = _d++);
  }
  function c(l, f) {
    let p = 0, u = 0, m = 0, x = 0, E = 0;
    const d = f.matrixWorldInverse;
    for (let h = 0, v = l.length; h < v; h++) {
      const b = l[h];
      if (b.isDirectionalLight) {
        const S = n.directional[p];
        S.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(d), p++;
      } else if (b.isSpotLight) {
        const S = n.spot[m];
        S.position.setFromMatrixPosition(b.matrixWorld), S.position.applyMatrix4(d), S.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(d), m++;
      } else if (b.isRectAreaLight) {
        const S = n.rectArea[x];
        S.position.setFromMatrixPosition(b.matrixWorld), S.position.applyMatrix4(d), a.identity(), s.copy(b.matrixWorld), s.premultiply(d), a.extractRotation(s), S.halfWidth.set(b.width * 0.5, 0, 0), S.halfHeight.set(0, b.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), x++;
      } else if (b.isPointLight) {
        const S = n.point[u];
        S.position.setFromMatrixPosition(b.matrixWorld), S.position.applyMatrix4(d), u++;
      } else if (b.isHemisphereLight) {
        const S = n.hemi[E];
        S.direction.setFromMatrixPosition(b.matrixWorld), S.direction.transformDirection(d), E++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function Ca(i) {
  const e = new xd(i), t = [], n = [], r = [];
  function s(u) {
    p.camera = u, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    t.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function c(u) {
    r.push(u);
  }
  function l() {
    e.setup(t);
  }
  function f(u) {
    e.setupView(t, u);
  }
  const p = {
    lightsArray: t,
    shadowsArray: n,
    lightProbeGridArray: r,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
    textureUnits: 0
  };
  return {
    init: s,
    state: p,
    setupLights: l,
    setupLightsView: f,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: c
  };
}
function vd(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new Ca(i), e.set(r, [o])) : s >= a.length ? (o = new Ca(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const Md = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Sd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, yd = [
  /* @__PURE__ */ new N(1, 0, 0),
  /* @__PURE__ */ new N(-1, 0, 0),
  /* @__PURE__ */ new N(0, 1, 0),
  /* @__PURE__ */ new N(0, -1, 0),
  /* @__PURE__ */ new N(0, 0, 1),
  /* @__PURE__ */ new N(0, 0, -1)
], Ed = [
  /* @__PURE__ */ new N(0, -1, 0),
  /* @__PURE__ */ new N(0, -1, 0),
  /* @__PURE__ */ new N(0, 0, 1),
  /* @__PURE__ */ new N(0, 0, -1),
  /* @__PURE__ */ new N(0, -1, 0),
  /* @__PURE__ */ new N(0, -1, 0)
], Pa = /* @__PURE__ */ new pt(), Ci = /* @__PURE__ */ new N(), ls = /* @__PURE__ */ new N();
function Td(i, e, t) {
  let n = new Tr();
  const r = new Fe(), s = new Fe(), a = new _t(), o = new ja(), c = new Ja(), l = {}, f = t.maxTextureSize, p = { 0: 1, 1: 0, 2: 2 }, u = new tn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Fe() },
      radius: { value: 4 }
    },
    vertexShader: Md,
    fragmentShader: Sd
  }), m = u.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const x = new Rt();
  x.setAttribute(
    "position",
    new Zt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const E = new Xt(x, u), d = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let h = this.type;
  this.render = function(y, w, g) {
    if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || y.length === 0) return;
    this.type === 2 && (Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
    const A = i.getRenderTarget(), P = i.getActiveCubeFace(), C = i.getActiveMipmapLevel(), L = i.state;
    L.setBlending(0), L.buffers.depth.getReversed() === !0 ? L.buffers.color.setClear(0, 0, 0, 0) : L.buffers.color.setClear(1, 1, 1, 1), L.buffers.depth.setTest(!0), L.setScissorTest(!1);
    const W = h !== this.type;
    W && w.traverse(function(X) {
      X.material && (Array.isArray(X.material) ? X.material.forEach((I) => I.needsUpdate = !0) : X.material.needsUpdate = !0);
    });
    for (let X = 0, I = y.length; X < I; X++) {
      const V = y[X], q = V.shadow;
      if (q === void 0) {
        Le("WebGLShadowMap:", V, "has no shadow.");
        continue;
      }
      if (q.autoUpdate === !1 && q.needsUpdate === !1) continue;
      r.copy(q.mapSize);
      const ne = q.getFrameExtents();
      r.multiply(ne), s.copy(q.mapSize), (r.x > f || r.y > f) && (r.x > f && (s.x = Math.floor(f / ne.x), r.x = s.x * ne.x, q.mapSize.x = s.x), r.y > f && (s.y = Math.floor(f / ne.y), r.y = s.y * ne.y, q.mapSize.y = s.y));
      const re = i.state.buffers.depth.getReversed();
      if (q.camera._reversedDepth = re, q.map === null || W === !0) {
        if (q.map !== null && (q.map.depthTexture !== null && (q.map.depthTexture.dispose(), q.map.depthTexture = null), q.map.dispose()), this.type === 3) {
          if (V.isPointLight) {
            Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          q.map = new en(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1
          }), q.map.texture.name = V.name + ".shadowMap", q.map.depthTexture = new Bn(r.x, r.y, 1015), q.map.depthTexture.name = V.name + ".shadowMapDepth", q.map.depthTexture.format = 1026, q.map.depthTexture.compareFunction = null, q.map.depthTexture.minFilter = 1003, q.map.depthTexture.magFilter = 1003;
        } else
          V.isPointLight ? (q.map = new Cs(r.x), q.map.depthTexture = new Xa(r.x, 1014)) : (q.map = new en(r.x, r.y), q.map.depthTexture = new Bn(r.x, r.y, 1014)), q.map.depthTexture.name = V.name + ".shadowMap", q.map.depthTexture.format = 1026, this.type === 1 ? (q.map.depthTexture.compareFunction = re ? 518 : 515, q.map.depthTexture.minFilter = 1006, q.map.depthTexture.magFilter = 1006) : (q.map.depthTexture.compareFunction = null, q.map.depthTexture.minFilter = 1003, q.map.depthTexture.magFilter = 1003);
        q.camera.updateProjectionMatrix();
      }
      const de = q.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let ye = 0; ye < de; ye++) {
        if (q.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(q.map, ye), i.clear();
        else {
          ye === 0 && (i.setRenderTarget(q.map), i.clear());
          const be = q.getViewport(ye);
          a.set(
            s.x * be.x,
            s.y * be.y,
            s.x * be.z,
            s.y * be.w
          ), L.viewport(a);
        }
        if (V.isPointLight) {
          const be = q.camera, We = q.matrix, et = V.distance || be.far;
          et !== be.far && (be.far = et, be.updateProjectionMatrix()), Ci.setFromMatrixPosition(V.matrixWorld), be.position.copy(Ci), ls.copy(be.position), ls.add(yd[ye]), be.up.copy(Ed[ye]), be.lookAt(ls), be.updateMatrixWorld(), We.makeTranslation(-Ci.x, -Ci.y, -Ci.z), Pa.multiplyMatrices(be.projectionMatrix, be.matrixWorldInverse), q._frustum.setFromProjectionMatrix(Pa, be.coordinateSystem, be.reversedDepth);
        } else
          q.updateMatrices(V);
        n = q.getFrustum(), S(w, g, q.camera, V, this.type);
      }
      q.isPointLightShadow !== !0 && this.type === 3 && v(q, g), q.needsUpdate = !1;
    }
    h = this.type, d.needsUpdate = !1, i.setRenderTarget(A, P, C);
  };
  function v(y, w) {
    const g = e.update(E);
    u.defines.VSM_SAMPLES !== y.blurSamples && (u.defines.VSM_SAMPLES = y.blurSamples, m.defines.VSM_SAMPLES = y.blurSamples, u.needsUpdate = !0, m.needsUpdate = !0), y.mapPass === null && (y.mapPass = new en(r.x, r.y, {
      format: 1030,
      type: 1016
    })), u.uniforms.shadow_pass.value = y.map.depthTexture, u.uniforms.resolution.value = y.mapSize, u.uniforms.radius.value = y.radius, i.setRenderTarget(y.mapPass), i.clear(), i.renderBufferDirect(w, null, g, u, E, null), m.uniforms.shadow_pass.value = y.mapPass.texture, m.uniforms.resolution.value = y.mapSize, m.uniforms.radius.value = y.radius, i.setRenderTarget(y.map), i.clear(), i.renderBufferDirect(w, null, g, m, E, null);
  }
  function b(y, w, g, A) {
    let P = null;
    const C = g.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (C !== void 0)
      P = C;
    else if (P = g.isPointLight === !0 ? c : o, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === !0) {
      const L = P.uuid, W = w.uuid;
      let X = l[L];
      X === void 0 && (X = {}, l[L] = X);
      let I = X[W];
      I === void 0 && (I = P.clone(), X[W] = I, w.addEventListener("dispose", R)), P = I;
    }
    if (P.visible = w.visible, P.wireframe = w.wireframe, A === 3 ? P.side = w.shadowSide !== null ? w.shadowSide : w.side : P.side = w.shadowSide !== null ? w.shadowSide : p[w.side], P.alphaMap = w.alphaMap, P.alphaTest = w.alphaToCoverage === !0 ? 0.5 : w.alphaTest, P.map = w.map, P.clipShadows = w.clipShadows, P.clippingPlanes = w.clippingPlanes, P.clipIntersection = w.clipIntersection, P.displacementMap = w.displacementMap, P.displacementScale = w.displacementScale, P.displacementBias = w.displacementBias, P.wireframeLinewidth = w.wireframeLinewidth, P.linewidth = w.linewidth, g.isPointLight === !0 && P.isMeshDistanceMaterial === !0) {
      const L = i.properties.get(P);
      L.light = g;
    }
    return P;
  }
  function S(y, w, g, A, P) {
    if (y.visible === !1) return;
    if (y.layers.test(w.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && P === 3) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, y.matrixWorld);
      const W = e.update(y), X = y.material;
      if (Array.isArray(X)) {
        const I = W.groups;
        for (let V = 0, q = I.length; V < q; V++) {
          const ne = I[V], re = X[ne.materialIndex];
          if (re && re.visible) {
            const de = b(y, re, A, P);
            y.onBeforeShadow(i, y, w, g, W, de, ne), i.renderBufferDirect(g, null, W, de, y, ne), y.onAfterShadow(i, y, w, g, W, de, ne);
          }
        }
      } else if (X.visible) {
        const I = b(y, X, A, P);
        y.onBeforeShadow(i, y, w, g, W, I, null), i.renderBufferDirect(g, null, W, I, y, null), y.onAfterShadow(i, y, w, g, W, I, null);
      }
    }
    const L = y.children;
    for (let W = 0, X = L.length; W < X; W++)
      S(L[W], w, g, A, P);
  }
  function R(y) {
    y.target.removeEventListener("dispose", R);
    for (const g in l) {
      const A = l[g], P = y.target.uuid;
      P in A && (A[P].dispose(), delete A[P]);
    }
  }
}
function bd(i, e) {
  function t() {
    let D = !1;
    const H = new _t();
    let Z = null;
    const ve = new _t(0, 0, 0, 0);
    return {
      setMask: function(ue) {
        Z !== ue && !D && (i.colorMask(ue, ue, ue, ue), Z = ue);
      },
      setLocked: function(ue) {
        D = ue;
      },
      setClear: function(ue, te, Te, Ue, mt) {
        mt === !0 && (ue *= Ue, te *= Ue, Te *= Ue), H.set(ue, te, Te, Ue), ve.equals(H) === !1 && (i.clearColor(ue, te, Te, Ue), ve.copy(H));
      },
      reset: function() {
        D = !1, Z = null, ve.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let D = !1, H = !1, Z = null, ve = null, ue = null;
    return {
      setReversed: function(te) {
        if (H !== te) {
          const Te = e.get("EXT_clip_control");
          te ? Te.clipControlEXT(Te.LOWER_LEFT_EXT, Te.ZERO_TO_ONE_EXT) : Te.clipControlEXT(Te.LOWER_LEFT_EXT, Te.NEGATIVE_ONE_TO_ONE_EXT), H = te;
          const Ue = ue;
          ue = null, this.setClear(Ue);
        }
      },
      getReversed: function() {
        return H;
      },
      setTest: function(te) {
        te ? K(i.DEPTH_TEST) : ie(i.DEPTH_TEST);
      },
      setMask: function(te) {
        Z !== te && !D && (i.depthMask(te), Z = te);
      },
      setFunc: function(te) {
        if (H && (te = mo[te]), ve !== te) {
          switch (te) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ve = te;
        }
      },
      setLocked: function(te) {
        D = te;
      },
      setClear: function(te) {
        ue !== te && (ue = te, H && (te = 1 - te), i.clearDepth(te));
      },
      reset: function() {
        D = !1, Z = null, ve = null, ue = null, H = !1;
      }
    };
  }
  function r() {
    let D = !1, H = null, Z = null, ve = null, ue = null, te = null, Te = null, Ue = null, mt = null;
    return {
      setTest: function(je) {
        D || (je ? K(i.STENCIL_TEST) : ie(i.STENCIL_TEST));
      },
      setMask: function(je) {
        H !== je && !D && (i.stencilMask(je), H = je);
      },
      setFunc: function(je, Kt, Gt) {
        (Z !== je || ve !== Kt || ue !== Gt) && (i.stencilFunc(je, Kt, Gt), Z = je, ve = Kt, ue = Gt);
      },
      setOp: function(je, Kt, Gt) {
        (te !== je || Te !== Kt || Ue !== Gt) && (i.stencilOp(je, Kt, Gt), te = je, Te = Kt, Ue = Gt);
      },
      setLocked: function(je) {
        D = je;
      },
      setClear: function(je) {
        mt !== je && (i.clearStencil(je), mt = je);
      },
      reset: function() {
        D = !1, H = null, Z = null, ve = null, ue = null, te = null, Te = null, Ue = null, mt = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let f = {}, p = {}, u = {}, m = /* @__PURE__ */ new WeakMap(), x = [], E = null, d = !1, h = null, v = null, b = null, S = null, R = null, y = null, w = null, g = new Xe(0, 0, 0), A = 0, P = !1, C = null, L = null, W = null, X = null, I = null;
  const V = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1, ne = 0;
  const re = i.getParameter(i.VERSION);
  re.indexOf("WebGL") !== -1 ? (ne = parseFloat(/^WebGL (\d)/.exec(re)[1]), q = ne >= 1) : re.indexOf("OpenGL ES") !== -1 && (ne = parseFloat(/^OpenGL ES (\d)/.exec(re)[1]), q = ne >= 2);
  let de = null, ye = {};
  const be = i.getParameter(i.SCISSOR_BOX), We = i.getParameter(i.VIEWPORT), et = new _t().fromArray(be), Oe = new _t().fromArray(We);
  function Q(D, H, Z, ve) {
    const ue = new Uint8Array(4), te = i.createTexture();
    i.bindTexture(D, te), i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Te = 0; Te < Z; Te++)
      D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(H, 0, i.RGBA, 1, 1, ve, 0, i.RGBA, i.UNSIGNED_BYTE, ue) : i.texImage2D(H + Te, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ue);
    return te;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = Q(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = Q(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = Q(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = Q(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), K(i.DEPTH_TEST), a.setFunc(3), gt(!1), dt(1), K(i.CULL_FACE), rt(0);
  function K(D) {
    f[D] !== !0 && (i.enable(D), f[D] = !0);
  }
  function ie(D) {
    f[D] !== !1 && (i.disable(D), f[D] = !1);
  }
  function we(D, H) {
    return u[D] !== H ? (i.bindFramebuffer(D, H), u[D] = H, D === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = H), D === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = H), !0) : !1;
  }
  function Ee(D, H) {
    let Z = x, ve = !1;
    if (D) {
      Z = m.get(H), Z === void 0 && (Z = [], m.set(H, Z));
      const ue = D.textures;
      if (Z.length !== ue.length || Z[0] !== i.COLOR_ATTACHMENT0) {
        for (let te = 0, Te = ue.length; te < Te; te++)
          Z[te] = i.COLOR_ATTACHMENT0 + te;
        Z.length = ue.length, ve = !0;
      }
    } else
      Z[0] !== i.BACK && (Z[0] = i.BACK, ve = !0);
    ve && i.drawBuffers(Z);
  }
  function ct(D) {
    return E !== D ? (i.useProgram(D), E = D, !0) : !1;
  }
  const He = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  He[103] = i.MIN, He[104] = i.MAX;
  const Je = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function rt(D, H, Z, ve, ue, te, Te, Ue, mt, je) {
    if (D === 0) {
      d === !0 && (ie(i.BLEND), d = !1);
      return;
    }
    if (d === !1 && (K(i.BLEND), d = !0), D !== 5) {
      if (D !== h || je !== P) {
        if ((v !== 100 || R !== 100) && (i.blendEquation(i.FUNC_ADD), v = 100, R = 100), je)
          switch (D) {
            case 1:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              Ze("WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              Ze("WebGLState: Invalid blending: ", D);
              break;
          }
        b = null, S = null, y = null, w = null, g.set(0, 0, 0), A = 0, h = D, P = je;
      }
      return;
    }
    ue = ue || H, te = te || Z, Te = Te || ve, (H !== v || ue !== R) && (i.blendEquationSeparate(He[H], He[ue]), v = H, R = ue), (Z !== b || ve !== S || te !== y || Te !== w) && (i.blendFuncSeparate(Je[Z], Je[ve], Je[te], Je[Te]), b = Z, S = ve, y = te, w = Te), (Ue.equals(g) === !1 || mt !== A) && (i.blendColor(Ue.r, Ue.g, Ue.b, mt), g.copy(Ue), A = mt), h = D, P = !1;
  }
  function ze(D, H) {
    D.side === 2 ? ie(i.CULL_FACE) : K(i.CULL_FACE);
    let Z = D.side === 1;
    H && (Z = !Z), gt(Z), D.blending === 1 && D.transparent === !1 ? rt(0) : rt(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), s.setMask(D.colorWrite);
    const ve = D.stencilWrite;
    o.setTest(ve), ve && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), F(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? K(i.SAMPLE_ALPHA_TO_COVERAGE) : ie(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function gt(D) {
    C !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), C = D);
  }
  function dt(D) {
    D !== 0 ? (K(i.CULL_FACE), D !== L && (D === 1 ? i.cullFace(i.BACK) : D === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ie(i.CULL_FACE), L = D;
  }
  function Pt(D) {
    D !== W && (q && i.lineWidth(D), W = D);
  }
  function F(D, H, Z) {
    D ? (K(i.POLYGON_OFFSET_FILL), (X !== H || I !== Z) && (X = H, I = Z, a.getReversed() && (H = -H), i.polygonOffset(H, Z))) : ie(i.POLYGON_OFFSET_FILL);
  }
  function xt(D) {
    D ? K(i.SCISSOR_TEST) : ie(i.SCISSOR_TEST);
  }
  function ke(D) {
    D === void 0 && (D = i.TEXTURE0 + V - 1), de !== D && (i.activeTexture(D), de = D);
  }
  function tt(D, H, Z) {
    Z === void 0 && (de === null ? Z = i.TEXTURE0 + V - 1 : Z = de);
    let ve = ye[Z];
    ve === void 0 && (ve = { type: void 0, texture: void 0 }, ye[Z] = ve), (ve.type !== D || ve.texture !== H) && (de !== Z && (i.activeTexture(Z), de = Z), i.bindTexture(D, H || Y[D]), ve.type = D, ve.texture = H);
  }
  function he() {
    const D = ye[de];
    D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function ot() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function T() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function _() {
    try {
      i.texSubImage2D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function B() {
    try {
      i.texSubImage3D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function j() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function ee() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function oe() {
    try {
      i.texStorage2D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function le() {
    try {
      i.texStorage3D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function $() {
    try {
      i.texImage2D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function J() {
    try {
      i.texImage3D(...arguments);
    } catch (D) {
      Ze("WebGLState:", D);
    }
  }
  function fe(D) {
    return p[D] !== void 0 ? p[D] : i.getParameter(D);
  }
  function xe(D, H) {
    p[D] !== H && (i.pixelStorei(D, H), p[D] = H);
  }
  function ce(D) {
    et.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w), et.copy(D));
  }
  function ae(D) {
    Oe.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w), Oe.copy(D));
  }
  function Ie(D, H) {
    let Z = l.get(H);
    Z === void 0 && (Z = /* @__PURE__ */ new WeakMap(), l.set(H, Z));
    let ve = Z.get(D);
    ve === void 0 && (ve = i.getUniformBlockIndex(H, D.name), Z.set(D, ve));
  }
  function Ge(D, H) {
    const ve = l.get(H).get(D);
    c.get(H) !== ve && (i.uniformBlockBinding(H, ve, D.__bindingPointIndex), c.set(H, ve));
  }
  function Ce() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), i.pixelStorei(i.PACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.BROWSER_DEFAULT_WEBGL), i.pixelStorei(i.PACK_ROW_LENGTH, 0), i.pixelStorei(i.PACK_SKIP_PIXELS, 0), i.pixelStorei(i.PACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_ROW_LENGTH, 0), i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0), i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0), i.pixelStorei(i.UNPACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0), f = {}, p = {}, de = null, ye = {}, u = {}, m = /* @__PURE__ */ new WeakMap(), x = [], E = null, d = !1, h = null, v = null, b = null, S = null, R = null, y = null, w = null, g = new Xe(0, 0, 0), A = 0, P = !1, C = null, L = null, W = null, X = null, I = null, et.set(0, 0, i.canvas.width, i.canvas.height), Oe.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: K,
    disable: ie,
    bindFramebuffer: we,
    drawBuffers: Ee,
    useProgram: ct,
    setBlending: rt,
    setMaterial: ze,
    setFlipSided: gt,
    setCullFace: dt,
    setLineWidth: Pt,
    setPolygonOffset: F,
    setScissorTest: xt,
    activeTexture: ke,
    bindTexture: tt,
    unbindTexture: he,
    compressedTexImage2D: ot,
    compressedTexImage3D: T,
    texImage2D: $,
    texImage3D: J,
    pixelStorei: xe,
    getParameter: fe,
    updateUBOMapping: Ie,
    uniformBlockBinding: Ge,
    texStorage2D: oe,
    texStorage3D: le,
    texSubImage2D: _,
    texSubImage3D: B,
    compressedTexSubImage2D: j,
    compressedTexSubImage3D: ee,
    scissor: ce,
    viewport: ae,
    reset: Ce
  };
}
function Ad(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Fe(), f = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new Set();
  let u;
  const m = /* @__PURE__ */ new WeakMap();
  let x = !1;
  try {
    x = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function E(T, _) {
    return x ? new OffscreenCanvas(T, _) : pr("canvas");
  }
  function d(T, _, B) {
    let j = 1;
    const ee = ot(T);
    if ((ee.width > B || ee.height > B) && (j = B / Math.max(ee.width, ee.height)), j < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const oe = Math.floor(j * ee.width), le = Math.floor(j * ee.height);
        u === void 0 && (u = E(oe, le));
        const $ = _ ? E(oe, le) : u;
        return $.width = oe, $.height = le, $.getContext("2d").drawImage(T, 0, 0, oe, le), Le("WebGLRenderer: Texture has been resized from (" + ee.width + "x" + ee.height + ") to (" + oe + "x" + le + ")."), $;
      } else
        return "data" in T && Le("WebGLRenderer: Image in DataTexture is too big (" + ee.width + "x" + ee.height + ")."), T;
    return T;
  }
  function h(T) {
    return T.generateMipmaps;
  }
  function v(T) {
    i.generateMipmap(T);
  }
  function b(T) {
    return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function S(T, _, B, j, ee, oe = !1) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let le;
    j && (le = e.get("EXT_texture_norm16"), le || Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let $ = _;
    if (_ === i.RED && (B === i.FLOAT && ($ = i.R32F), B === i.HALF_FLOAT && ($ = i.R16F), B === i.UNSIGNED_BYTE && ($ = i.R8), B === i.UNSIGNED_SHORT && le && ($ = le.R16_EXT), B === i.SHORT && le && ($ = le.R16_SNORM_EXT)), _ === i.RED_INTEGER && (B === i.UNSIGNED_BYTE && ($ = i.R8UI), B === i.UNSIGNED_SHORT && ($ = i.R16UI), B === i.UNSIGNED_INT && ($ = i.R32UI), B === i.BYTE && ($ = i.R8I), B === i.SHORT && ($ = i.R16I), B === i.INT && ($ = i.R32I)), _ === i.RG && (B === i.FLOAT && ($ = i.RG32F), B === i.HALF_FLOAT && ($ = i.RG16F), B === i.UNSIGNED_BYTE && ($ = i.RG8), B === i.UNSIGNED_SHORT && le && ($ = le.RG16_EXT), B === i.SHORT && le && ($ = le.RG16_SNORM_EXT)), _ === i.RG_INTEGER && (B === i.UNSIGNED_BYTE && ($ = i.RG8UI), B === i.UNSIGNED_SHORT && ($ = i.RG16UI), B === i.UNSIGNED_INT && ($ = i.RG32UI), B === i.BYTE && ($ = i.RG8I), B === i.SHORT && ($ = i.RG16I), B === i.INT && ($ = i.RG32I)), _ === i.RGB_INTEGER && (B === i.UNSIGNED_BYTE && ($ = i.RGB8UI), B === i.UNSIGNED_SHORT && ($ = i.RGB16UI), B === i.UNSIGNED_INT && ($ = i.RGB32UI), B === i.BYTE && ($ = i.RGB8I), B === i.SHORT && ($ = i.RGB16I), B === i.INT && ($ = i.RGB32I)), _ === i.RGBA_INTEGER && (B === i.UNSIGNED_BYTE && ($ = i.RGBA8UI), B === i.UNSIGNED_SHORT && ($ = i.RGBA16UI), B === i.UNSIGNED_INT && ($ = i.RGBA32UI), B === i.BYTE && ($ = i.RGBA8I), B === i.SHORT && ($ = i.RGBA16I), B === i.INT && ($ = i.RGBA32I)), _ === i.RGB && (B === i.UNSIGNED_SHORT && le && ($ = le.RGB16_EXT), B === i.SHORT && le && ($ = le.RGB16_SNORM_EXT), B === i.UNSIGNED_INT_5_9_9_9_REV && ($ = i.RGB9_E5), B === i.UNSIGNED_INT_10F_11F_11F_REV && ($ = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const J = oe ? Li : qe.getTransfer(ee);
      B === i.FLOAT && ($ = i.RGBA32F), B === i.HALF_FLOAT && ($ = i.RGBA16F), B === i.UNSIGNED_BYTE && ($ = J === nt ? i.SRGB8_ALPHA8 : i.RGBA8), B === i.UNSIGNED_SHORT && le && ($ = le.RGBA16_EXT), B === i.SHORT && le && ($ = le.RGBA16_SNORM_EXT), B === i.UNSIGNED_SHORT_4_4_4_4 && ($ = i.RGBA4), B === i.UNSIGNED_SHORT_5_5_5_1 && ($ = i.RGB5_A1);
    }
    return ($ === i.R16F || $ === i.R32F || $ === i.RG16F || $ === i.RG32F || $ === i.RGBA16F || $ === i.RGBA32F) && e.get("EXT_color_buffer_float"), $;
  }
  function R(T, _) {
    let B;
    return T ? _ === null || _ === 1014 || _ === 1020 ? B = i.DEPTH24_STENCIL8 : _ === 1015 ? B = i.DEPTH32F_STENCIL8 : _ === 1012 && (B = i.DEPTH24_STENCIL8, Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === 1014 || _ === 1020 ? B = i.DEPTH_COMPONENT24 : _ === 1015 ? B = i.DEPTH_COMPONENT32F : _ === 1012 && (B = i.DEPTH_COMPONENT16), B;
  }
  function y(T, _) {
    return h(T) === !0 || T.isFramebufferTexture && T.minFilter !== 1003 && T.minFilter !== 1006 ? Math.log2(Math.max(_.width, _.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? _.mipmaps.length : 1;
  }
  function w(T) {
    const _ = T.target;
    _.removeEventListener("dispose", w), A(_), _.isVideoTexture && f.delete(_), _.isHTMLTexture && p.delete(_);
  }
  function g(T) {
    const _ = T.target;
    _.removeEventListener("dispose", g), C(_);
  }
  function A(T) {
    const _ = n.get(T);
    if (_.__webglInit === void 0) return;
    const B = T.source, j = m.get(B);
    if (j) {
      const ee = j[_.__cacheKey];
      ee.usedTimes--, ee.usedTimes === 0 && P(T), Object.keys(j).length === 0 && m.delete(B);
    }
    n.remove(T);
  }
  function P(T) {
    const _ = n.get(T);
    i.deleteTexture(_.__webglTexture);
    const B = T.source, j = m.get(B);
    delete j[_.__cacheKey], a.memory.textures--;
  }
  function C(T) {
    const _ = n.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget)
      for (let j = 0; j < 6; j++) {
        if (Array.isArray(_.__webglFramebuffer[j]))
          for (let ee = 0; ee < _.__webglFramebuffer[j].length; ee++) i.deleteFramebuffer(_.__webglFramebuffer[j][ee]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[j]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[j]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let j = 0; j < _.__webglFramebuffer.length; j++) i.deleteFramebuffer(_.__webglFramebuffer[j]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let j = 0; j < _.__webglColorRenderbuffer.length; j++)
          _.__webglColorRenderbuffer[j] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const B = T.textures;
    for (let j = 0, ee = B.length; j < ee; j++) {
      const oe = n.get(B[j]);
      oe.__webglTexture && (i.deleteTexture(oe.__webglTexture), a.memory.textures--), n.remove(B[j]);
    }
    n.remove(T);
  }
  let L = 0;
  function W() {
    L = 0;
  }
  function X() {
    return L;
  }
  function I(T) {
    L = T;
  }
  function V() {
    const T = L;
    return T >= r.maxTextures && Le("WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), L += 1, T;
  }
  function q(T) {
    const _ = [];
    return _.push(T.wrapS), _.push(T.wrapT), _.push(T.wrapR || 0), _.push(T.magFilter), _.push(T.minFilter), _.push(T.anisotropy), _.push(T.internalFormat), _.push(T.format), _.push(T.type), _.push(T.generateMipmaps), _.push(T.premultiplyAlpha), _.push(T.flipY), _.push(T.unpackAlignment), _.push(T.colorSpace), _.join();
  }
  function ne(T, _) {
    const B = n.get(T);
    if (T.isVideoTexture && tt(T), T.isRenderTargetTexture === !1 && T.isExternalTexture !== !0 && T.version > 0 && B.__version !== T.version) {
      const j = T.image;
      if (j === null)
        Le("WebGLRenderer: Texture marked for update but no image data found.");
      else if (j.complete === !1)
        Le("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ie(B, T, _);
        return;
      }
    } else T.isExternalTexture && (B.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, B.__webglTexture, i.TEXTURE0 + _);
  }
  function re(T, _) {
    const B = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && B.__version !== T.version) {
      ie(B, T, _);
      return;
    } else T.isExternalTexture && (B.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, B.__webglTexture, i.TEXTURE0 + _);
  }
  function de(T, _) {
    const B = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && B.__version !== T.version) {
      ie(B, T, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, B.__webglTexture, i.TEXTURE0 + _);
  }
  function ye(T, _) {
    const B = n.get(T);
    if (T.isCubeDepthTexture !== !0 && T.version > 0 && B.__version !== T.version) {
      we(B, T, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, B.__webglTexture, i.TEXTURE0 + _);
  }
  const be = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, We = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, et = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function Oe(T, _) {
    if (_.type === 1015 && e.has("OES_texture_float_linear") === !1 && (_.magFilter === 1006 || _.magFilter === 1007 || _.magFilter === 1005 || _.magFilter === 1008 || _.minFilter === 1006 || _.minFilter === 1007 || _.minFilter === 1005 || _.minFilter === 1008) && Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, be[_.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, be[_.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, be[_.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, We[_.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, We[_.minFilter]), _.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, et[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === 1003 || _.minFilter !== 1005 && _.minFilter !== 1008 || _.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const B = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, B.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Q(T, _) {
    let B = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, _.addEventListener("dispose", w));
    const j = _.source;
    let ee = m.get(j);
    ee === void 0 && (ee = {}, m.set(j, ee));
    const oe = q(_);
    if (oe !== T.__cacheKey) {
      ee[oe] === void 0 && (ee[oe] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, B = !0), ee[oe].usedTimes++;
      const le = ee[T.__cacheKey];
      le !== void 0 && (ee[T.__cacheKey].usedTimes--, le.usedTimes === 0 && P(_)), T.__cacheKey = oe, T.__webglTexture = ee[oe].texture;
    }
    return B;
  }
  function Y(T, _, B) {
    return Math.floor(Math.floor(T / B) / _);
  }
  function K(T, _, B, j) {
    const oe = T.updateRanges;
    if (oe.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, B, j, _.data);
    else {
      oe.sort((xe, ce) => xe.start - ce.start);
      let le = 0;
      for (let xe = 1; xe < oe.length; xe++) {
        const ce = oe[le], ae = oe[xe], Ie = ce.start + ce.count, Ge = Y(ae.start, _.width, 4), Ce = Y(ce.start, _.width, 4);
        ae.start <= Ie + 1 && Ge === Ce && Y(ae.start + ae.count - 1, _.width, 4) === Ge ? ce.count = Math.max(
          ce.count,
          ae.start + ae.count - ce.start
        ) : (++le, oe[le] = ae);
      }
      oe.length = le + 1;
      const $ = t.getParameter(i.UNPACK_ROW_LENGTH), J = t.getParameter(i.UNPACK_SKIP_PIXELS), fe = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let xe = 0, ce = oe.length; xe < ce; xe++) {
        const ae = oe[xe], Ie = Math.floor(ae.start / 4), Ge = Math.ceil(ae.count / 4), Ce = Ie % _.width, D = Math.floor(Ie / _.width), H = Ge, Z = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, Ce), t.pixelStorei(i.UNPACK_SKIP_ROWS, D), t.texSubImage2D(i.TEXTURE_2D, 0, Ce, D, H, Z, B, j, _.data);
      }
      T.clearUpdateRanges(), t.pixelStorei(i.UNPACK_ROW_LENGTH, $), t.pixelStorei(i.UNPACK_SKIP_PIXELS, J), t.pixelStorei(i.UNPACK_SKIP_ROWS, fe);
    }
  }
  function ie(T, _, B) {
    let j = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (j = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (j = i.TEXTURE_3D);
    const ee = Q(T, _), oe = _.source;
    t.bindTexture(j, T.__webglTexture, i.TEXTURE0 + B);
    const le = n.get(oe);
    if (oe.version !== le.__version || ee === !0) {
      if (t.activeTexture(i.TEXTURE0 + B), (typeof ImageBitmap < "u" && _.image instanceof ImageBitmap) === !1) {
        const Z = qe.getPrimaries(qe.workingColorSpace), ve = _.colorSpace === fn ? null : qe.getPrimaries(_.colorSpace), ue = _.colorSpace === fn || Z === ve ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment);
      let J = d(_.image, !1, r.maxTextureSize);
      J = he(_, J);
      const fe = s.convert(_.format, _.colorSpace), xe = s.convert(_.type);
      let ce = S(_.internalFormat, fe, xe, _.normalized, _.colorSpace, _.isVideoTexture);
      Oe(j, _);
      let ae;
      const Ie = _.mipmaps, Ge = _.isVideoTexture !== !0, Ce = le.__version === void 0 || ee === !0, D = oe.dataReady, H = y(_, J);
      if (_.isDepthTexture)
        ce = R(_.format === 1027, _.type), Ce && (Ge ? t.texStorage2D(i.TEXTURE_2D, 1, ce, J.width, J.height) : t.texImage2D(i.TEXTURE_2D, 0, ce, J.width, J.height, 0, fe, xe, null));
      else if (_.isDataTexture)
        if (Ie.length > 0) {
          Ge && Ce && t.texStorage2D(i.TEXTURE_2D, H, ce, Ie[0].width, Ie[0].height);
          for (let Z = 0, ve = Ie.length; Z < ve; Z++)
            ae = Ie[Z], Ge ? D && t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, ae.width, ae.height, fe, xe, ae.data) : t.texImage2D(i.TEXTURE_2D, Z, ce, ae.width, ae.height, 0, fe, xe, ae.data);
          _.generateMipmaps = !1;
        } else
          Ge ? (Ce && t.texStorage2D(i.TEXTURE_2D, H, ce, J.width, J.height), D && K(_, J, fe, xe)) : t.texImage2D(i.TEXTURE_2D, 0, ce, J.width, J.height, 0, fe, xe, J.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Ge && Ce && t.texStorage3D(i.TEXTURE_2D_ARRAY, H, ce, Ie[0].width, Ie[0].height, J.depth);
          for (let Z = 0, ve = Ie.length; Z < ve; Z++)
            if (ae = Ie[Z], _.format !== 1023)
              if (fe !== null)
                if (Ge) {
                  if (D)
                    if (_.layerUpdates.size > 0) {
                      const ue = la(ae.width, ae.height, _.format, _.type);
                      for (const te of _.layerUpdates) {
                        const Te = ae.data.subarray(
                          te * ue / ae.data.BYTES_PER_ELEMENT,
                          (te + 1) * ue / ae.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Z, 0, 0, te, ae.width, ae.height, 1, fe, Te);
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Z, 0, 0, 0, ae.width, ae.height, J.depth, fe, ae.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Z, ce, ae.width, ae.height, J.depth, 0, ae.data, 0, 0);
              else
                Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Ge ? D && t.texSubImage3D(i.TEXTURE_2D_ARRAY, Z, 0, 0, 0, ae.width, ae.height, J.depth, fe, xe, ae.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, Z, ce, ae.width, ae.height, J.depth, 0, fe, xe, ae.data);
        } else {
          Ge && Ce && t.texStorage2D(i.TEXTURE_2D, H, ce, Ie[0].width, Ie[0].height);
          for (let Z = 0, ve = Ie.length; Z < ve; Z++)
            ae = Ie[Z], _.format !== 1023 ? fe !== null ? Ge ? D && t.compressedTexSubImage2D(i.TEXTURE_2D, Z, 0, 0, ae.width, ae.height, fe, ae.data) : t.compressedTexImage2D(i.TEXTURE_2D, Z, ce, ae.width, ae.height, 0, ae.data) : Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ge ? D && t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, ae.width, ae.height, fe, xe, ae.data) : t.texImage2D(i.TEXTURE_2D, Z, ce, ae.width, ae.height, 0, fe, xe, ae.data);
        }
      else if (_.isDataArrayTexture)
        if (Ge) {
          if (Ce && t.texStorage3D(i.TEXTURE_2D_ARRAY, H, ce, J.width, J.height, J.depth), D)
            if (_.layerUpdates.size > 0) {
              const Z = la(J.width, J.height, _.format, _.type);
              for (const ve of _.layerUpdates) {
                const ue = J.data.subarray(
                  ve * Z / J.data.BYTES_PER_ELEMENT,
                  (ve + 1) * Z / J.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, ve, J.width, J.height, 1, fe, xe, ue);
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, fe, xe, J.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ce, J.width, J.height, J.depth, 0, fe, xe, J.data);
      else if (_.isData3DTexture)
        Ge ? (Ce && t.texStorage3D(i.TEXTURE_3D, H, ce, J.width, J.height, J.depth), D && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, fe, xe, J.data)) : t.texImage3D(i.TEXTURE_3D, 0, ce, J.width, J.height, J.depth, 0, fe, xe, J.data);
      else if (_.isFramebufferTexture) {
        if (Ce)
          if (Ge)
            t.texStorage2D(i.TEXTURE_2D, H, ce, J.width, J.height);
          else {
            let Z = J.width, ve = J.height;
            for (let ue = 0; ue < H; ue++)
              t.texImage2D(i.TEXTURE_2D, ue, ce, Z, ve, 0, fe, xe, null), Z >>= 1, ve >>= 1;
          }
      } else if (_.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const Z = i.canvas;
          if (Z.hasAttribute("layoutsubtree") || Z.setAttribute("layoutsubtree", "true"), J.parentNode !== Z) {
            Z.appendChild(J), p.add(_), Z.onpaint = (Ue) => {
              const mt = Ue.changedElements;
              for (const je of p)
                mt.includes(je.image) && (je.needsUpdate = !0);
            }, Z.requestPaint();
            return;
          }
          const ve = 0, ue = i.RGBA, te = i.RGBA, Te = i.UNSIGNED_BYTE;
          i.texElementImage2D(i.TEXTURE_2D, ve, ue, te, Te, J), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (Ie.length > 0) {
        if (Ge && Ce) {
          const Z = ot(Ie[0]);
          t.texStorage2D(i.TEXTURE_2D, H, ce, Z.width, Z.height);
        }
        for (let Z = 0, ve = Ie.length; Z < ve; Z++)
          ae = Ie[Z], Ge ? D && t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, fe, xe, ae) : t.texImage2D(i.TEXTURE_2D, Z, ce, fe, xe, ae);
        _.generateMipmaps = !1;
      } else if (Ge) {
        if (Ce) {
          const Z = ot(J);
          t.texStorage2D(i.TEXTURE_2D, H, ce, Z.width, Z.height);
        }
        D && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, fe, xe, J);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, ce, fe, xe, J);
      h(_) && v(j), le.__version = oe.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function we(T, _, B) {
    if (_.image.length !== 6) return;
    const j = Q(T, _), ee = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + B);
    const oe = n.get(ee);
    if (ee.version !== oe.__version || j === !0) {
      t.activeTexture(i.TEXTURE0 + B);
      const le = qe.getPrimaries(qe.workingColorSpace), $ = _.colorSpace === fn ? null : qe.getPrimaries(_.colorSpace), J = _.colorSpace === fn || le === $ ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, J);
      const fe = _.isCompressedTexture || _.image[0].isCompressedTexture, xe = _.image[0] && _.image[0].isDataTexture, ce = [];
      for (let te = 0; te < 6; te++)
        !fe && !xe ? ce[te] = d(_.image[te], !0, r.maxCubemapSize) : ce[te] = xe ? _.image[te].image : _.image[te], ce[te] = he(_, ce[te]);
      const ae = ce[0], Ie = s.convert(_.format, _.colorSpace), Ge = s.convert(_.type), Ce = S(_.internalFormat, Ie, Ge, _.normalized, _.colorSpace), D = _.isVideoTexture !== !0, H = oe.__version === void 0 || j === !0, Z = ee.dataReady;
      let ve = y(_, ae);
      Oe(i.TEXTURE_CUBE_MAP, _);
      let ue;
      if (fe) {
        D && H && t.texStorage2D(i.TEXTURE_CUBE_MAP, ve, Ce, ae.width, ae.height);
        for (let te = 0; te < 6; te++) {
          ue = ce[te].mipmaps;
          for (let Te = 0; Te < ue.length; Te++) {
            const Ue = ue[Te];
            _.format !== 1023 ? Ie !== null ? D ? Z && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Te, 0, 0, Ue.width, Ue.height, Ie, Ue.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Te, Ce, Ue.width, Ue.height, 0, Ue.data) : Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Te, 0, 0, Ue.width, Ue.height, Ie, Ge, Ue.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Te, Ce, Ue.width, Ue.height, 0, Ie, Ge, Ue.data);
          }
        }
      } else {
        if (ue = _.mipmaps, D && H) {
          ue.length > 0 && ve++;
          const te = ot(ce[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ve, Ce, te.width, te.height);
        }
        for (let te = 0; te < 6; te++)
          if (xe) {
            D ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, 0, 0, ce[te].width, ce[te].height, Ie, Ge, ce[te].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, Ce, ce[te].width, ce[te].height, 0, Ie, Ge, ce[te].data);
            for (let Te = 0; Te < ue.length; Te++) {
              const mt = ue[Te].image[te].image;
              D ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Te + 1, 0, 0, mt.width, mt.height, Ie, Ge, mt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Te + 1, Ce, mt.width, mt.height, 0, Ie, Ge, mt.data);
            }
          } else {
            D ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, 0, 0, Ie, Ge, ce[te]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, Ce, Ie, Ge, ce[te]);
            for (let Te = 0; Te < ue.length; Te++) {
              const Ue = ue[Te];
              D ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Te + 1, 0, 0, Ie, Ge, Ue.image[te]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, Te + 1, Ce, Ie, Ge, Ue.image[te]);
            }
          }
      }
      h(_) && v(i.TEXTURE_CUBE_MAP), oe.__version = ee.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function Ee(T, _, B, j, ee, oe) {
    const le = s.convert(B.format, B.colorSpace), $ = s.convert(B.type), J = S(B.internalFormat, le, $, B.normalized, B.colorSpace), fe = n.get(_), xe = n.get(B);
    if (xe.__renderTarget = _, !fe.__hasExternalTextures) {
      const ce = Math.max(1, _.width >> oe), ae = Math.max(1, _.height >> oe);
      ee === i.TEXTURE_3D || ee === i.TEXTURE_2D_ARRAY ? t.texImage3D(ee, oe, J, ce, ae, _.depth, 0, le, $, null) : t.texImage2D(ee, oe, J, ce, ae, 0, le, $, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, T), ke(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, j, ee, xe.__webglTexture, 0, xt(_)) : (ee === i.TEXTURE_2D || ee >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ee <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, j, ee, xe.__webglTexture, oe), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ct(T, _, B) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), _.depthBuffer) {
      const j = _.depthTexture, ee = j && j.isDepthTexture ? j.type : null, oe = R(_.stencilBuffer, ee), le = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      ke(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xt(_), oe, _.width, _.height) : B ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xt(_), oe, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, oe, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, le, i.RENDERBUFFER, T);
    } else {
      const j = _.textures;
      for (let ee = 0; ee < j.length; ee++) {
        const oe = j[ee], le = s.convert(oe.format, oe.colorSpace), $ = s.convert(oe.type), J = S(oe.internalFormat, le, $, oe.normalized, oe.colorSpace);
        ke(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, xt(_), J, _.width, _.height) : B ? i.renderbufferStorageMultisample(i.RENDERBUFFER, xt(_), J, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, J, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function He(T, _, B) {
    const j = _.isWebGLCubeRenderTarget === !0;
    if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const ee = n.get(_.depthTexture);
    if (ee.__renderTarget = _, (!ee.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), j) {
      if (ee.__webglInit === void 0 && (ee.__webglInit = !0, _.depthTexture.addEventListener("dispose", w)), ee.__webglTexture === void 0) {
        ee.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, ee.__webglTexture), Oe(i.TEXTURE_CUBE_MAP, _.depthTexture);
        const fe = s.convert(_.depthTexture.format), xe = s.convert(_.depthTexture.type);
        let ce;
        _.depthTexture.format === 1026 ? ce = i.DEPTH_COMPONENT24 : _.depthTexture.format === 1027 && (ce = i.DEPTH24_STENCIL8);
        for (let ae = 0; ae < 6; ae++)
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0, ce, _.width, _.height, 0, fe, xe, null);
      }
    } else
      ne(_.depthTexture, 0);
    const oe = ee.__webglTexture, le = xt(_), $ = j ? i.TEXTURE_CUBE_MAP_POSITIVE_X + B : i.TEXTURE_2D, J = _.depthTexture.format === 1027 ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (_.depthTexture.format === 1026)
      ke(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, J, $, oe, 0, le) : i.framebufferTexture2D(i.FRAMEBUFFER, J, $, oe, 0);
    else if (_.depthTexture.format === 1027)
      ke(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, J, $, oe, 0, le) : i.framebufferTexture2D(i.FRAMEBUFFER, J, $, oe, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Je(T) {
    const _ = n.get(T), B = T.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== T.depthTexture) {
      const j = T.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), j) {
        const ee = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, j.removeEventListener("dispose", ee);
        };
        j.addEventListener("dispose", ee), _.__depthDisposeCallback = ee;
      }
      _.__boundDepthTexture = j;
    }
    if (T.depthTexture && !_.__autoAllocateDepthBuffer)
      if (B)
        for (let j = 0; j < 6; j++)
          He(_.__webglFramebuffer[j], T, j);
      else {
        const j = T.texture.mipmaps;
        j && j.length > 0 ? He(_.__webglFramebuffer[0], T, 0) : He(_.__webglFramebuffer, T, 0);
      }
    else if (B) {
      _.__webglDepthbuffer = [];
      for (let j = 0; j < 6; j++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[j]), _.__webglDepthbuffer[j] === void 0)
          _.__webglDepthbuffer[j] = i.createRenderbuffer(), ct(_.__webglDepthbuffer[j], T, !1);
        else {
          const ee = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, oe = _.__webglDepthbuffer[j];
          i.bindRenderbuffer(i.RENDERBUFFER, oe), i.framebufferRenderbuffer(i.FRAMEBUFFER, ee, i.RENDERBUFFER, oe);
        }
    } else {
      const j = T.texture.mipmaps;
      if (j && j.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
        _.__webglDepthbuffer = i.createRenderbuffer(), ct(_.__webglDepthbuffer, T, !1);
      else {
        const ee = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, oe = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, oe), i.framebufferRenderbuffer(i.FRAMEBUFFER, ee, i.RENDERBUFFER, oe);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function rt(T, _, B) {
    const j = n.get(T);
    _ !== void 0 && Ee(j.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), B !== void 0 && Je(T);
  }
  function ze(T) {
    const _ = T.texture, B = n.get(T), j = n.get(_);
    T.addEventListener("dispose", g);
    const ee = T.textures, oe = T.isWebGLCubeRenderTarget === !0, le = ee.length > 1;
    if (le || (j.__webglTexture === void 0 && (j.__webglTexture = i.createTexture()), j.__version = _.version, a.memory.textures++), oe) {
      B.__webglFramebuffer = [];
      for (let $ = 0; $ < 6; $++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          B.__webglFramebuffer[$] = [];
          for (let J = 0; J < _.mipmaps.length; J++)
            B.__webglFramebuffer[$][J] = i.createFramebuffer();
        } else
          B.__webglFramebuffer[$] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let $ = 0; $ < _.mipmaps.length; $++)
          B.__webglFramebuffer[$] = i.createFramebuffer();
      } else
        B.__webglFramebuffer = i.createFramebuffer();
      if (le)
        for (let $ = 0, J = ee.length; $ < J; $++) {
          const fe = n.get(ee[$]);
          fe.__webglTexture === void 0 && (fe.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (T.samples > 0 && ke(T) === !1) {
        B.__webglMultisampledFramebuffer = i.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let $ = 0; $ < ee.length; $++) {
          const J = ee[$];
          B.__webglColorRenderbuffer[$] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, B.__webglColorRenderbuffer[$]);
          const fe = s.convert(J.format, J.colorSpace), xe = s.convert(J.type), ce = S(J.internalFormat, fe, xe, J.normalized, J.colorSpace, T.isXRRenderTarget === !0), ae = xt(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, ae, ce, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + $, i.RENDERBUFFER, B.__webglColorRenderbuffer[$]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (B.__webglDepthRenderbuffer = i.createRenderbuffer(), ct(B.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (oe) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, j.__webglTexture), Oe(i.TEXTURE_CUBE_MAP, _);
      for (let $ = 0; $ < 6; $++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let J = 0; J < _.mipmaps.length; J++)
            Ee(B.__webglFramebuffer[$][J], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + $, J);
        else
          Ee(B.__webglFramebuffer[$], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0);
      h(_) && v(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (le) {
      for (let $ = 0, J = ee.length; $ < J; $++) {
        const fe = ee[$], xe = n.get(fe);
        let ce = i.TEXTURE_2D;
        (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ce = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ce, xe.__webglTexture), Oe(ce, fe), Ee(B.__webglFramebuffer, T, fe, i.COLOR_ATTACHMENT0 + $, ce, 0), h(fe) && v(ce);
      }
      t.unbindTexture();
    } else {
      let $ = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && ($ = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture($, j.__webglTexture), Oe($, _), _.mipmaps && _.mipmaps.length > 0)
        for (let J = 0; J < _.mipmaps.length; J++)
          Ee(B.__webglFramebuffer[J], T, _, i.COLOR_ATTACHMENT0, $, J);
      else
        Ee(B.__webglFramebuffer, T, _, i.COLOR_ATTACHMENT0, $, 0);
      h(_) && v($), t.unbindTexture();
    }
    T.depthBuffer && Je(T);
  }
  function gt(T) {
    const _ = T.textures;
    for (let B = 0, j = _.length; B < j; B++) {
      const ee = _[B];
      if (h(ee)) {
        const oe = b(T), le = n.get(ee).__webglTexture;
        t.bindTexture(oe, le), v(oe), t.unbindTexture();
      }
    }
  }
  const dt = [], Pt = [];
  function F(T) {
    if (T.samples > 0) {
      if (ke(T) === !1) {
        const _ = T.textures, B = T.width, j = T.height;
        let ee = i.COLOR_BUFFER_BIT;
        const oe = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, le = n.get(T), $ = _.length > 1;
        if ($)
          for (let fe = 0; fe < _.length; fe++)
            t.bindFramebuffer(i.FRAMEBUFFER, le.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + fe, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, le.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + fe, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, le.__webglMultisampledFramebuffer);
        const J = T.texture.mipmaps;
        J && J.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, le.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, le.__webglFramebuffer);
        for (let fe = 0; fe < _.length; fe++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (ee |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (ee |= i.STENCIL_BUFFER_BIT)), $) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, le.__webglColorRenderbuffer[fe]);
            const xe = n.get(_[fe]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, xe, 0);
          }
          i.blitFramebuffer(0, 0, B, j, 0, 0, B, j, ee, i.NEAREST), c === !0 && (dt.length = 0, Pt.length = 0, dt.push(i.COLOR_ATTACHMENT0 + fe), T.depthBuffer && T.resolveDepthBuffer === !1 && (dt.push(oe), Pt.push(oe), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Pt)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, dt));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), $)
          for (let fe = 0; fe < _.length; fe++) {
            t.bindFramebuffer(i.FRAMEBUFFER, le.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + fe, i.RENDERBUFFER, le.__webglColorRenderbuffer[fe]);
            const xe = n.get(_[fe]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, le.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + fe, i.TEXTURE_2D, xe, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, le.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && c) {
        const _ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function xt(T) {
    return Math.min(r.maxSamples, T.samples);
  }
  function ke(T) {
    const _ = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function tt(T) {
    const _ = a.render.frame;
    f.get(T) !== _ && (f.set(T, _), T.update());
  }
  function he(T, _) {
    const B = T.colorSpace, j = T.format, ee = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || B !== Di && B !== fn && (qe.getTransfer(B) === nt ? (j !== 1023 || ee !== 1009) && Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Ze("WebGLTextures: Unsupported texture color space:", B)), _;
  }
  function ot(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (l.width = T.naturalWidth || T.width, l.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (l.width = T.displayWidth, l.height = T.displayHeight) : (l.width = T.width, l.height = T.height), l;
  }
  this.allocateTextureUnit = V, this.resetTextureUnits = W, this.getTextureUnits = X, this.setTextureUnits = I, this.setTexture2D = ne, this.setTexture2DArray = re, this.setTexture3D = de, this.setTextureCube = ye, this.rebindTextures = rt, this.setupRenderTarget = ze, this.updateRenderTargetMipmap = gt, this.updateMultisampleRenderTarget = F, this.setupDepthRenderbuffer = Je, this.setupFrameBufferTexture = Ee, this.useMultisampledRTT = ke, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function lo(i, e) {
  function t(n, r = fn) {
    let s;
    const a = qe.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === nt)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === 36196 || n === 37492) return a === nt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return s.COMPRESSED_R11_EAC;
        if (n === 37489) return s.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return s.COMPRESSED_RG11_EAC;
        if (n === 37491) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === nt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return a === nt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === 36283) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Rd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, wd = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Cd {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(e, t) {
    if (this.texture === null) {
      const n = new Es(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new tn({
        vertexShader: Rd,
        fragmentShader: wd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Xt(new mi(20, 20), n);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?ExternalTexture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class Pd extends Cn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, f = null, p = null, u = null, m = null, x = null;
    const E = typeof XRWebGLBinding < "u", d = new Cd(), h = {}, v = t.getContextAttributes();
    let b = null, S = null;
    const R = [], y = [], w = new Fe();
    let g = null;
    const A = new Wt();
    A.viewport = new _t();
    const P = new Wt();
    P.viewport = new _t();
    const C = [A, P], L = new to();
    let W = null, X = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Q) {
      let Y = R[Q];
      return Y === void 0 && (Y = new dr(), R[Q] = Y), Y.getTargetRaySpace();
    }, this.getControllerGrip = function(Q) {
      let Y = R[Q];
      return Y === void 0 && (Y = new dr(), R[Q] = Y), Y.getGripSpace();
    }, this.getHand = function(Q) {
      let Y = R[Q];
      return Y === void 0 && (Y = new dr(), R[Q] = Y), Y.getHandSpace();
    };
    function I(Q) {
      const Y = y.indexOf(Q.inputSource);
      if (Y === -1)
        return;
      const K = R[Y];
      K !== void 0 && (K.update(Q.inputSource, Q.frame, l || a), K.dispatchEvent({ type: Q.type, data: Q.inputSource }));
    }
    function V() {
      r.removeEventListener("select", I), r.removeEventListener("selectstart", I), r.removeEventListener("selectend", I), r.removeEventListener("squeeze", I), r.removeEventListener("squeezestart", I), r.removeEventListener("squeezeend", I), r.removeEventListener("end", V), r.removeEventListener("inputsourceschange", q);
      for (let Q = 0; Q < R.length; Q++) {
        const Y = y[Q];
        Y !== null && (y[Q] = null, R[Q].disconnect(Y));
      }
      W = null, X = null, d.reset();
      for (const Q in h)
        delete h[Q];
      e.setRenderTarget(b), m = null, u = null, p = null, r = null, S = null, Oe.stop(), n.isPresenting = !1, e.setPixelRatio(g), e.setSize(w.width, w.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Q) {
      s = Q, n.isPresenting === !0 && Le("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Q) {
      o = Q, n.isPresenting === !0 && Le("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(Q) {
      l = Q;
    }, this.getBaseLayer = function() {
      return u !== null ? u : m;
    }, this.getBinding = function() {
      return p === null && E && (p = new XRWebGLBinding(r, t)), p;
    }, this.getFrame = function() {
      return x;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Q) {
      if (r = Q, r !== null) {
        if (b = e.getRenderTarget(), r.addEventListener("select", I), r.addEventListener("selectstart", I), r.addEventListener("selectend", I), r.addEventListener("squeeze", I), r.addEventListener("squeezestart", I), r.addEventListener("squeezeend", I), r.addEventListener("end", V), r.addEventListener("inputsourceschange", q), v.xrCompatible !== !0 && await t.makeXRCompatible(), g = e.getPixelRatio(), e.getSize(w), E && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let K = null, ie = null, we = null;
          v.depth && (we = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, K = v.stencil ? 1027 : 1026, ie = v.stencil ? 1020 : 1014);
          const Ee = {
            colorFormat: t.RGBA8,
            depthFormat: we,
            scaleFactor: s
          };
          p = this.getBinding(), u = p.createProjectionLayer(Ee), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), S = new en(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Bn(u.textureWidth, u.textureHeight, ie, void 0, void 0, void 0, void 0, void 0, void 0, K),
              stencilBuffer: v.stencil,
              colorSpace: e.outputColorSpace,
              samples: v.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const K = {
            antialias: v.antialias,
            alpha: !0,
            depth: v.depth,
            stencil: v.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, K), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), S = new en(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: v.stencil,
              resolveDepthBuffer: m.ignoreDepthValues === !1,
              resolveStencilBuffer: m.ignoreDepthValues === !1
            }
          );
        }
        S.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), Oe.setContext(r), Oe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return d.getDepthTexture();
    };
    function q(Q) {
      for (let Y = 0; Y < Q.removed.length; Y++) {
        const K = Q.removed[Y], ie = y.indexOf(K);
        ie >= 0 && (y[ie] = null, R[ie].disconnect(K));
      }
      for (let Y = 0; Y < Q.added.length; Y++) {
        const K = Q.added[Y];
        let ie = y.indexOf(K);
        if (ie === -1) {
          for (let Ee = 0; Ee < R.length; Ee++)
            if (Ee >= y.length) {
              y.push(K), ie = Ee;
              break;
            } else if (y[Ee] === null) {
              y[Ee] = K, ie = Ee;
              break;
            }
          if (ie === -1) break;
        }
        const we = R[ie];
        we && we.connect(K);
      }
    }
    const ne = new N(), re = new N();
    function de(Q, Y, K) {
      ne.setFromMatrixPosition(Y.matrixWorld), re.setFromMatrixPosition(K.matrixWorld);
      const ie = ne.distanceTo(re), we = Y.projectionMatrix.elements, Ee = K.projectionMatrix.elements, ct = we[14] / (we[10] - 1), He = we[14] / (we[10] + 1), Je = (we[9] + 1) / we[5], rt = (we[9] - 1) / we[5], ze = (we[8] - 1) / we[0], gt = (Ee[8] + 1) / Ee[0], dt = ct * ze, Pt = ct * gt, F = ie / (-ze + gt), xt = F * -ze;
      if (Y.matrixWorld.decompose(Q.position, Q.quaternion, Q.scale), Q.translateX(xt), Q.translateZ(F), Q.matrixWorld.compose(Q.position, Q.quaternion, Q.scale), Q.matrixWorldInverse.copy(Q.matrixWorld).invert(), we[10] === -1)
        Q.projectionMatrix.copy(Y.projectionMatrix), Q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);
      else {
        const ke = ct + F, tt = He + F, he = dt - xt, ot = Pt + (ie - xt), T = Je * He / tt * ke, _ = rt * He / tt * ke;
        Q.projectionMatrix.makePerspective(he, ot, T, _, ke, tt), Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert();
      }
    }
    function ye(Q, Y) {
      Y === null ? Q.matrixWorld.copy(Q.matrix) : Q.matrixWorld.multiplyMatrices(Y.matrixWorld, Q.matrix), Q.matrixWorldInverse.copy(Q.matrixWorld).invert();
    }
    this.updateCamera = function(Q) {
      if (r === null) return;
      let Y = Q.near, K = Q.far;
      d.texture !== null && (d.depthNear > 0 && (Y = d.depthNear), d.depthFar > 0 && (K = d.depthFar)), L.near = P.near = A.near = Y, L.far = P.far = A.far = K, (W !== L.near || X !== L.far) && (r.updateRenderState({
        depthNear: L.near,
        depthFar: L.far
      }), W = L.near, X = L.far), L.layers.mask = Q.layers.mask | 6, A.layers.mask = L.layers.mask & -5, P.layers.mask = L.layers.mask & -3;
      const ie = Q.parent, we = L.cameras;
      ye(L, ie);
      for (let Ee = 0; Ee < we.length; Ee++)
        ye(we[Ee], ie);
      we.length === 2 ? de(L, A, P) : L.projectionMatrix.copy(A.projectionMatrix), be(Q, L, ie);
    };
    function be(Q, Y, K) {
      K === null ? Q.matrix.copy(Y.matrixWorld) : (Q.matrix.copy(K.matrixWorld), Q.matrix.invert(), Q.matrix.multiply(Y.matrixWorld)), Q.matrix.decompose(Q.position, Q.quaternion, Q.scale), Q.updateMatrixWorld(!0), Q.projectionMatrix.copy(Y.projectionMatrix), Q.projectionMatrixInverse.copy(Y.projectionMatrixInverse), Q.isPerspectiveCamera && (Q.fov = us * 2 * Math.atan(1 / Q.projectionMatrix.elements[5]), Q.zoom = 1);
    }
    this.getCamera = function() {
      return L;
    }, this.getFoveation = function() {
      if (!(u === null && m === null))
        return c;
    }, this.setFoveation = function(Q) {
      c = Q, u !== null && (u.fixedFoveation = Q), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = Q);
    }, this.hasDepthSensing = function() {
      return d.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return d.getMesh(L);
    }, this.getCameraTexture = function(Q) {
      return h[Q];
    };
    let We = null;
    function et(Q, Y) {
      if (f = Y.getViewerPose(l || a), x = Y, f !== null) {
        const K = f.views;
        m !== null && (e.setRenderTargetFramebuffer(S, m.framebuffer), e.setRenderTarget(S));
        let ie = !1;
        K.length !== L.cameras.length && (L.cameras.length = 0, ie = !0);
        for (let He = 0; He < K.length; He++) {
          const Je = K[He];
          let rt = null;
          if (m !== null)
            rt = m.getViewport(Je);
          else {
            const gt = p.getViewSubImage(u, Je);
            rt = gt.viewport, He === 0 && (e.setRenderTargetTextures(
              S,
              gt.colorTexture,
              gt.depthStencilTexture
            ), e.setRenderTarget(S));
          }
          let ze = C[He];
          ze === void 0 && (ze = new Wt(), ze.layers.enable(He), ze.viewport = new _t(), C[He] = ze), ze.matrix.fromArray(Je.transform.matrix), ze.matrix.decompose(ze.position, ze.quaternion, ze.scale), ze.projectionMatrix.fromArray(Je.projectionMatrix), ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(), ze.viewport.set(rt.x, rt.y, rt.width, rt.height), He === 0 && (L.matrix.copy(ze.matrix), L.matrix.decompose(L.position, L.quaternion, L.scale)), ie === !0 && L.cameras.push(ze);
        }
        const we = r.enabledFeatures;
        if (we && we.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && E) {
          p = n.getBinding();
          const He = p.getDepthInformation(K[0]);
          He && He.isValid && He.texture && d.init(He, r.renderState);
        }
        if (we && we.includes("camera-access") && E) {
          e.state.unbindTexture(), p = n.getBinding();
          for (let He = 0; He < K.length; He++) {
            const Je = K[He].camera;
            if (Je) {
              let rt = h[Je];
              rt || (rt = new Es(), h[Je] = rt);
              const ze = p.getCameraImage(Je);
              rt.sourceTexture = ze;
            }
          }
        }
      }
      for (let K = 0; K < R.length; K++) {
        const ie = y[K], we = R[K];
        ie !== null && we !== void 0 && we.update(ie, Y, l || a);
      }
      We && We(Q, Y), Y.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Y }), x = null;
    }
    const Oe = new no();
    Oe.setAnimationLoop(et), this.setAnimationLoop = function(Q) {
      We = Q;
    }, this.dispose = function() {
    };
  }
}
const Dd = /* @__PURE__ */ new pt(), co = /* @__PURE__ */ new Be();
co.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Ld(i, e) {
  function t(d, h) {
    d.matrixAutoUpdate === !0 && d.updateMatrix(), h.value.copy(d.matrix);
  }
  function n(d, h) {
    h.color.getRGB(d.fogColor.value, Ya(i)), h.isFog ? (d.fogNear.value = h.near, d.fogFar.value = h.far) : h.isFogExp2 && (d.fogDensity.value = h.density);
  }
  function r(d, h, v, b, S) {
    h.isNodeMaterial ? h.uniformsNeedUpdate = !1 : h.isMeshBasicMaterial ? s(d, h) : h.isMeshLambertMaterial ? (s(d, h), h.envMap && (d.envMapIntensity.value = h.envMapIntensity)) : h.isMeshToonMaterial ? (s(d, h), p(d, h)) : h.isMeshPhongMaterial ? (s(d, h), f(d, h), h.envMap && (d.envMapIntensity.value = h.envMapIntensity)) : h.isMeshStandardMaterial ? (s(d, h), u(d, h), h.isMeshPhysicalMaterial && m(d, h, S)) : h.isMeshMatcapMaterial ? (s(d, h), x(d, h)) : h.isMeshDepthMaterial ? s(d, h) : h.isMeshDistanceMaterial ? (s(d, h), E(d, h)) : h.isMeshNormalMaterial ? s(d, h) : h.isLineBasicMaterial ? (a(d, h), h.isLineDashedMaterial && o(d, h)) : h.isPointsMaterial ? c(d, h, v, b) : h.isSpriteMaterial ? l(d, h) : h.isShadowMaterial ? (d.color.value.copy(h.color), d.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(d, h) {
    d.opacity.value = h.opacity, h.color && d.diffuse.value.copy(h.color), h.emissive && d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (d.map.value = h.map, t(h.map, d.mapTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, t(h.alphaMap, d.alphaMapTransform)), h.bumpMap && (d.bumpMap.value = h.bumpMap, t(h.bumpMap, d.bumpMapTransform), d.bumpScale.value = h.bumpScale, h.side === 1 && (d.bumpScale.value *= -1)), h.normalMap && (d.normalMap.value = h.normalMap, t(h.normalMap, d.normalMapTransform), d.normalScale.value.copy(h.normalScale), h.side === 1 && d.normalScale.value.negate()), h.displacementMap && (d.displacementMap.value = h.displacementMap, t(h.displacementMap, d.displacementMapTransform), d.displacementScale.value = h.displacementScale, d.displacementBias.value = h.displacementBias), h.emissiveMap && (d.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, d.emissiveMapTransform)), h.specularMap && (d.specularMap.value = h.specularMap, t(h.specularMap, d.specularMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
    const v = e.get(h), b = v.envMap, S = v.envMapRotation;
    b && (d.envMap.value = b, d.envMapRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(S)).transpose(), b.isCubeTexture && b.isRenderTargetTexture === !1 && d.envMapRotation.value.premultiply(co), d.reflectivity.value = h.reflectivity, d.ior.value = h.ior, d.refractionRatio.value = h.refractionRatio), h.lightMap && (d.lightMap.value = h.lightMap, d.lightMapIntensity.value = h.lightMapIntensity, t(h.lightMap, d.lightMapTransform)), h.aoMap && (d.aoMap.value = h.aoMap, d.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, d.aoMapTransform));
  }
  function a(d, h) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, h.map && (d.map.value = h.map, t(h.map, d.mapTransform));
  }
  function o(d, h) {
    d.dashSize.value = h.dashSize, d.totalSize.value = h.dashSize + h.gapSize, d.scale.value = h.scale;
  }
  function c(d, h, v, b) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, d.size.value = h.size * v, d.scale.value = b * 0.5, h.map && (d.map.value = h.map, t(h.map, d.uvTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, t(h.alphaMap, d.alphaMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
  }
  function l(d, h) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, d.rotation.value = h.rotation, h.map && (d.map.value = h.map, t(h.map, d.mapTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, t(h.alphaMap, d.alphaMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
  }
  function f(d, h) {
    d.specular.value.copy(h.specular), d.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function p(d, h) {
    h.gradientMap && (d.gradientMap.value = h.gradientMap);
  }
  function u(d, h) {
    d.metalness.value = h.metalness, h.metalnessMap && (d.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, d.metalnessMapTransform)), d.roughness.value = h.roughness, h.roughnessMap && (d.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, d.roughnessMapTransform)), h.envMap && (d.envMapIntensity.value = h.envMapIntensity);
  }
  function m(d, h, v) {
    d.ior.value = h.ior, h.sheen > 0 && (d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), d.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (d.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, d.sheenColorMapTransform)), h.sheenRoughnessMap && (d.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, d.sheenRoughnessMapTransform))), h.clearcoat > 0 && (d.clearcoat.value = h.clearcoat, d.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (d.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, d.clearcoatMapTransform)), h.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (d.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, d.clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === 1 && d.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (d.dispersion.value = h.dispersion), h.iridescence > 0 && (d.iridescence.value = h.iridescence, d.iridescenceIOR.value = h.iridescenceIOR, d.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (d.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, d.iridescenceMapTransform)), h.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), h.transmission > 0 && (d.transmission.value = h.transmission, d.transmissionSamplerMap.value = v.texture, d.transmissionSamplerSize.value.set(v.width, v.height), h.transmissionMap && (d.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, d.transmissionMapTransform)), d.thickness.value = h.thickness, h.thicknessMap && (d.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, d.thicknessMapTransform)), d.attenuationDistance.value = h.attenuationDistance, d.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (d.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (d.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, d.anisotropyMapTransform))), d.specularIntensity.value = h.specularIntensity, d.specularColor.value.copy(h.specularColor), h.specularColorMap && (d.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, d.specularColorMapTransform)), h.specularIntensityMap && (d.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function x(d, h) {
    h.matcap && (d.matcap.value = h.matcap);
  }
  function E(d, h) {
    const v = e.get(h).light;
    d.referencePosition.value.setFromMatrixPosition(v.matrixWorld), d.nearDistance.value = v.shadow.camera.near, d.farDistance.value = v.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Fd(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(v, b) {
    const S = b.program;
    n.uniformBlockBinding(v, S);
  }
  function l(v, b) {
    let S = r[v.id];
    S === void 0 && (x(v), S = f(v), r[v.id] = S, v.addEventListener("dispose", d));
    const R = b.program;
    n.updateUBOMapping(v, R);
    const y = e.render.frame;
    s[v.id] !== y && (u(v), s[v.id] = y);
  }
  function f(v) {
    const b = p();
    v.__bindingPointIndex = b;
    const S = i.createBuffer(), R = v.__size, y = v.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, S), i.bufferData(i.UNIFORM_BUFFER, R, y), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, b, S), S;
  }
  function p() {
    for (let v = 0; v < o; v++)
      if (a.indexOf(v) === -1)
        return a.push(v), v;
    return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(v) {
    const b = r[v.id], S = v.uniforms, R = v.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let y = 0, w = S.length; y < w; y++) {
      const g = Array.isArray(S[y]) ? S[y] : [S[y]];
      for (let A = 0, P = g.length; A < P; A++) {
        const C = g[A];
        if (m(C, y, A, R) === !0) {
          const L = C.__offset, W = Array.isArray(C.value) ? C.value : [C.value];
          let X = 0;
          for (let I = 0; I < W.length; I++) {
            const V = W[I], q = E(V);
            typeof V == "number" || typeof V == "boolean" ? (C.__data[0] = V, i.bufferSubData(i.UNIFORM_BUFFER, L + X, C.__data)) : V.isMatrix3 ? (C.__data[0] = V.elements[0], C.__data[1] = V.elements[1], C.__data[2] = V.elements[2], C.__data[3] = 0, C.__data[4] = V.elements[3], C.__data[5] = V.elements[4], C.__data[6] = V.elements[5], C.__data[7] = 0, C.__data[8] = V.elements[6], C.__data[9] = V.elements[7], C.__data[10] = V.elements[8], C.__data[11] = 0) : ArrayBuffer.isView(V) ? C.__data.set(new V.constructor(V.buffer, V.byteOffset, C.__data.length)) : (V.toArray(C.__data, X), X += q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, L, C.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(v, b, S, R) {
    const y = v.value, w = b + "_" + S;
    if (R[w] === void 0)
      return typeof y == "number" || typeof y == "boolean" ? R[w] = y : ArrayBuffer.isView(y) ? R[w] = y.slice() : R[w] = y.clone(), !0;
    {
      const g = R[w];
      if (typeof y == "number" || typeof y == "boolean") {
        if (g !== y)
          return R[w] = y, !0;
      } else {
        if (ArrayBuffer.isView(y))
          return !0;
        if (g.equals(y) === !1)
          return g.copy(y), !0;
      }
    }
    return !1;
  }
  function x(v) {
    const b = v.uniforms;
    let S = 0;
    const R = 16;
    for (let w = 0, g = b.length; w < g; w++) {
      const A = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let P = 0, C = A.length; P < C; P++) {
        const L = A[P], W = Array.isArray(L.value) ? L.value : [L.value];
        for (let X = 0, I = W.length; X < I; X++) {
          const V = W[X], q = E(V), ne = S % R, re = ne % q.boundary, de = ne + re;
          S += re, de !== 0 && R - de < q.storage && (S += R - de), L.__data = new Float32Array(q.storage / Float32Array.BYTES_PER_ELEMENT), L.__offset = S, S += q.storage;
        }
      }
    }
    const y = S % R;
    return y > 0 && (S += R - y), v.__size = S, v.__cache = {}, this;
  }
  function E(v) {
    const b = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof v == "number" || typeof v == "boolean" ? (b.boundary = 4, b.storage = 4) : v.isVector2 ? (b.boundary = 8, b.storage = 8) : v.isVector3 || v.isColor ? (b.boundary = 16, b.storage = 12) : v.isVector4 ? (b.boundary = 16, b.storage = 16) : v.isMatrix3 ? (b.boundary = 48, b.storage = 48) : v.isMatrix4 ? (b.boundary = 64, b.storage = 64) : v.isTexture ? Le("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(v) ? (b.boundary = 16, b.storage = v.byteLength) : Le("WebGLRenderer: Unsupported uniform value type.", v), b;
  }
  function d(v) {
    const b = v.target;
    b.removeEventListener("dispose", d);
    const S = a.indexOf(b.__bindingPointIndex);
    a.splice(S, 1), i.deleteBuffer(r[b.id]), delete r[b.id], delete s[b.id];
  }
  function h() {
    for (const v in r)
      i.deleteBuffer(r[v]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: h
  };
}
const Id = new Uint16Array([
  12469,
  15057,
  12620,
  14925,
  13266,
  14620,
  13807,
  14376,
  14323,
  13990,
  14545,
  13625,
  14713,
  13328,
  14840,
  12882,
  14931,
  12528,
  14996,
  12233,
  15039,
  11829,
  15066,
  11525,
  15080,
  11295,
  15085,
  10976,
  15082,
  10705,
  15073,
  10495,
  13880,
  14564,
  13898,
  14542,
  13977,
  14430,
  14158,
  14124,
  14393,
  13732,
  14556,
  13410,
  14702,
  12996,
  14814,
  12596,
  14891,
  12291,
  14937,
  11834,
  14957,
  11489,
  14958,
  11194,
  14943,
  10803,
  14921,
  10506,
  14893,
  10278,
  14858,
  9960,
  14484,
  14039,
  14487,
  14025,
  14499,
  13941,
  14524,
  13740,
  14574,
  13468,
  14654,
  13106,
  14743,
  12678,
  14818,
  12344,
  14867,
  11893,
  14889,
  11509,
  14893,
  11180,
  14881,
  10751,
  14852,
  10428,
  14812,
  10128,
  14765,
  9754,
  14712,
  9466,
  14764,
  13480,
  14764,
  13475,
  14766,
  13440,
  14766,
  13347,
  14769,
  13070,
  14786,
  12713,
  14816,
  12387,
  14844,
  11957,
  14860,
  11549,
  14868,
  11215,
  14855,
  10751,
  14825,
  10403,
  14782,
  10044,
  14729,
  9651,
  14666,
  9352,
  14599,
  9029,
  14967,
  12835,
  14966,
  12831,
  14963,
  12804,
  14954,
  12723,
  14936,
  12564,
  14917,
  12347,
  14900,
  11958,
  14886,
  11569,
  14878,
  11247,
  14859,
  10765,
  14828,
  10401,
  14784,
  10011,
  14727,
  9600,
  14660,
  9289,
  14586,
  8893,
  14508,
  8533,
  15111,
  12234,
  15110,
  12234,
  15104,
  12216,
  15092,
  12156,
  15067,
  12010,
  15028,
  11776,
  14981,
  11500,
  14942,
  11205,
  14902,
  10752,
  14861,
  10393,
  14812,
  9991,
  14752,
  9570,
  14682,
  9252,
  14603,
  8808,
  14519,
  8445,
  14431,
  8145,
  15209,
  11449,
  15208,
  11451,
  15202,
  11451,
  15190,
  11438,
  15163,
  11384,
  15117,
  11274,
  15055,
  10979,
  14994,
  10648,
  14932,
  10343,
  14871,
  9936,
  14803,
  9532,
  14729,
  9218,
  14645,
  8742,
  14556,
  8381,
  14461,
  8020,
  14365,
  7603,
  15273,
  10603,
  15272,
  10607,
  15267,
  10619,
  15256,
  10631,
  15231,
  10614,
  15182,
  10535,
  15118,
  10389,
  15042,
  10167,
  14963,
  9787,
  14883,
  9447,
  14800,
  9115,
  14710,
  8665,
  14615,
  8318,
  14514,
  7911,
  14411,
  7507,
  14279,
  7198,
  15314,
  9675,
  15313,
  9683,
  15309,
  9712,
  15298,
  9759,
  15277,
  9797,
  15229,
  9773,
  15166,
  9668,
  15084,
  9487,
  14995,
  9274,
  14898,
  8910,
  14800,
  8539,
  14697,
  8234,
  14590,
  7790,
  14479,
  7409,
  14367,
  7067,
  14178,
  6621,
  15337,
  8619,
  15337,
  8631,
  15333,
  8677,
  15325,
  8769,
  15305,
  8871,
  15264,
  8940,
  15202,
  8909,
  15119,
  8775,
  15022,
  8565,
  14916,
  8328,
  14804,
  8009,
  14688,
  7614,
  14569,
  7287,
  14448,
  6888,
  14321,
  6483,
  14088,
  6171,
  15350,
  7402,
  15350,
  7419,
  15347,
  7480,
  15340,
  7613,
  15322,
  7804,
  15287,
  7973,
  15229,
  8057,
  15148,
  8012,
  15046,
  7846,
  14933,
  7611,
  14810,
  7357,
  14682,
  7069,
  14552,
  6656,
  14421,
  6316,
  14251,
  5948,
  14007,
  5528,
  15356,
  5942,
  15356,
  5977,
  15353,
  6119,
  15348,
  6294,
  15332,
  6551,
  15302,
  6824,
  15249,
  7044,
  15171,
  7122,
  15070,
  7050,
  14949,
  6861,
  14818,
  6611,
  14679,
  6349,
  14538,
  6067,
  14398,
  5651,
  14189,
  5311,
  13935,
  4958,
  15359,
  4123,
  15359,
  4153,
  15356,
  4296,
  15353,
  4646,
  15338,
  5160,
  15311,
  5508,
  15263,
  5829,
  15188,
  6042,
  15088,
  6094,
  14966,
  6001,
  14826,
  5796,
  14678,
  5543,
  14527,
  5287,
  14377,
  4985,
  14133,
  4586,
  13869,
  4257,
  15360,
  1563,
  15360,
  1642,
  15358,
  2076,
  15354,
  2636,
  15341,
  3350,
  15317,
  4019,
  15273,
  4429,
  15203,
  4732,
  15105,
  4911,
  14981,
  4932,
  14836,
  4818,
  14679,
  4621,
  14517,
  4386,
  14359,
  4156,
  14083,
  3795,
  13808,
  3437,
  15360,
  122,
  15360,
  137,
  15358,
  285,
  15355,
  636,
  15344,
  1274,
  15322,
  2177,
  15281,
  2765,
  15215,
  3223,
  15120,
  3451,
  14995,
  3569,
  14846,
  3567,
  14681,
  3466,
  14511,
  3305,
  14344,
  3121,
  14037,
  2800,
  13753,
  2467,
  15360,
  0,
  15360,
  1,
  15359,
  21,
  15355,
  89,
  15346,
  253,
  15325,
  479,
  15287,
  796,
  15225,
  1148,
  15133,
  1492,
  15008,
  1749,
  14856,
  1882,
  14685,
  1886,
  14506,
  1783,
  14324,
  1608,
  13996,
  1398,
  13702,
  1183
]);
let an = null;
function Ud() {
  return an === null && (an = new ka(Id, 16, 16, 1030, 1016), an.name = "DFG_LUT", an.minFilter = 1006, an.magFilter = 1006, an.wrapS = 1001, an.wrapT = 1001, an.generateMipmaps = !1, an.needsUpdate = !0), an;
}
class uo {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = Fa(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: f = "default",
      failIfMajorPerformanceCaveat: p = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: m = 1009
    } = e;
    this.isWebGLRenderer = !0;
    let x;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      x = n.getContextAttributes().alpha;
    } else
      x = a;
    const E = m, d = /* @__PURE__ */ new Set([
      1033,
      1031,
      1029
    ]), h = /* @__PURE__ */ new Set([
      1009,
      1014,
      1012,
      1020,
      1017,
      1018
    ]), v = new Uint32Array(4), b = new Int32Array(4), S = new N();
    let R = null, y = null;
    const w = [], g = [];
    let A = null;
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const P = this;
    let C = !1, L = null;
    this._outputColorSpace = Bt;
    let W = 0, X = 0, I = null, V = -1, q = null;
    const ne = new _t(), re = new _t();
    let de = null;
    const ye = new Xe(0);
    let be = 0, We = t.width, et = t.height, Oe = 1, Q = null, Y = null;
    const K = new _t(0, 0, We, et), ie = new _t(0, 0, We, et);
    let we = !1;
    const Ee = new Tr();
    let ct = !1, He = !1;
    const Je = new pt(), rt = new N(), ze = new _t(), gt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let dt = !1;
    function Pt() {
      return I === null ? Oe : 1;
    }
    let F = n;
    function xt(M, U) {
      return t.getContext(M, U);
    }
    try {
      const M = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: f,
        failIfMajorPerformanceCaveat: p
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Mr}`), t.addEventListener("webglcontextlost", te, !1), t.addEventListener("webglcontextrestored", Te, !1), t.addEventListener("webglcontextcreationerror", Ue, !1), F === null) {
        const U = "webgl2";
        if (F = xt(U, M), F === null)
          throw xt(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw Ze("WebGLRenderer: " + M.message), M;
    }
    let ke, tt, he, ot, T, _, B, j, ee, oe, le, $, J, fe, xe, ce, ae, Ie, Ge, Ce, D, H, Z;
    function ve() {
      ke = new Nu(F), ke.init(), D = new lo(F, ke), tt = new wu(F, ke, e, D), he = new bd(F, ke), tt.reversedDepthBuffer && u && he.buffers.depth.setReversed(!0), ot = new Gu(F), T = new hd(), _ = new Ad(F, ke, he, T, tt, D, ot), B = new Uu(P), j = new Ho(F), H = new Au(F, j), ee = new Bu(F, j, ot, H), oe = new Vu(F, ee, j, H, ot), Ie = new zu(F, tt, _), xe = new Cu(T), le = new ud(P, B, ke, tt, H, xe), $ = new Ld(P, T), J = new fd(), fe = new vd(ke), ae = new bu(P, B, he, oe, x, c), ce = new Td(P, oe, tt), Z = new Fd(F, ot, tt, he), Ge = new Ru(F, ke, ot), Ce = new Ou(F, ke, ot), ot.programs = le.programs, P.capabilities = tt, P.extensions = ke, P.properties = T, P.renderLists = J, P.shadowMap = ce, P.state = he, P.info = ot;
    }
    ve(), E !== 1009 && (A = new Hu(E, t.width, t.height, r, s));
    const ue = new Pd(P, F);
    this.xr = ue, this.getContext = function() {
      return F;
    }, this.getContextAttributes = function() {
      return F.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = ke.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = ke.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return Oe;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (Oe = M, this.setSize(We, et, !1));
    }, this.getSize = function(M) {
      return M.set(We, et);
    }, this.setSize = function(M, U, k = !0) {
      if (ue.isPresenting) {
        Le("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      We = M, et = U, t.width = Math.floor(M * Oe), t.height = Math.floor(U * Oe), k === !0 && (t.style.width = M + "px", t.style.height = U + "px"), A !== null && A.setSize(t.width, t.height), this.setViewport(0, 0, M, U);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(We * Oe, et * Oe).floor();
    }, this.setDrawingBufferSize = function(M, U, k) {
      We = M, et = U, Oe = k, t.width = Math.floor(M * k), t.height = Math.floor(U * k), this.setViewport(0, 0, M, U);
    }, this.setEffects = function(M) {
      if (E === 1009) {
        Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (M) {
        for (let U = 0; U < M.length; U++)
          if (M[U].isOutputPass === !0) {
            Le("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
      }
      A.setEffects(M || []);
    }, this.getCurrentViewport = function(M) {
      return M.copy(ne);
    }, this.getViewport = function(M) {
      return M.copy(K);
    }, this.setViewport = function(M, U, k, G) {
      M.isVector4 ? K.set(M.x, M.y, M.z, M.w) : K.set(M, U, k, G), he.viewport(ne.copy(K).multiplyScalar(Oe).round());
    }, this.getScissor = function(M) {
      return M.copy(ie);
    }, this.setScissor = function(M, U, k, G) {
      M.isVector4 ? ie.set(M.x, M.y, M.z, M.w) : ie.set(M, U, k, G), he.scissor(re.copy(ie).multiplyScalar(Oe).round());
    }, this.getScissorTest = function() {
      return we;
    }, this.setScissorTest = function(M) {
      he.setScissorTest(we = M);
    }, this.setOpaqueSort = function(M) {
      Q = M;
    }, this.setTransparentSort = function(M) {
      Y = M;
    }, this.getClearColor = function(M) {
      return M.copy(ae.getClearColor());
    }, this.setClearColor = function() {
      ae.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return ae.getClearAlpha();
    }, this.setClearAlpha = function() {
      ae.setClearAlpha(...arguments);
    }, this.clear = function(M = !0, U = !0, k = !0) {
      let G = 0;
      if (M) {
        let z = !1;
        if (I !== null) {
          const me = I.texture.format;
          z = d.has(me);
        }
        if (z) {
          const me = I.texture.type, Se = h.has(me), O = ae.getClearColor(), ge = ae.getClearAlpha(), Ae = O.r, Ne = O.g, De = O.b;
          Se ? (v[0] = Ae, v[1] = Ne, v[2] = De, v[3] = ge, F.clearBufferuiv(F.COLOR, 0, v)) : (b[0] = Ae, b[1] = Ne, b[2] = De, b[3] = ge, F.clearBufferiv(F.COLOR, 0, b));
        } else
          G |= F.COLOR_BUFFER_BIT;
      }
      U && (G |= F.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), k && (G |= F.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), G !== 0 && F.clear(G);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(M) {
      M.setRenderer(this), L = M;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", te, !1), t.removeEventListener("webglcontextrestored", Te, !1), t.removeEventListener("webglcontextcreationerror", Ue, !1), ae.dispose(), J.dispose(), fe.dispose(), T.dispose(), B.dispose(), oe.dispose(), H.dispose(), Z.dispose(), le.dispose(), ue.dispose(), ue.removeEventListener("sessionstart", zn), ue.removeEventListener("sessionend", gi), zt.stop();
    };
    function te(M) {
      M.preventDefault(), Fi("WebGLRenderer: Context Lost."), C = !0;
    }
    function Te() {
      Fi("WebGLRenderer: Context Restored."), C = !1;
      const M = ot.autoReset, U = ce.enabled, k = ce.autoUpdate, G = ce.needsUpdate, z = ce.type;
      ve(), ot.autoReset = M, ce.enabled = U, ce.autoUpdate = k, ce.needsUpdate = G, ce.type = z;
    }
    function Ue(M) {
      Ze("WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function mt(M) {
      const U = M.target;
      U.removeEventListener("dispose", mt), je(U);
    }
    function je(M) {
      Kt(M), T.remove(M);
    }
    function Kt(M) {
      const U = T.get(M).programs;
      U !== void 0 && (U.forEach(function(k) {
        le.releaseProgram(k);
      }), M.isShaderMaterial && le.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, U, k, G, z, me) {
      U === null && (U = gt);
      const Se = z.isMesh && z.matrixWorld.determinant() < 0, O = Pe(M, U, k, G, z);
      he.setMaterial(G, Se);
      let ge = k.index, Ae = 1;
      if (G.wireframe === !0) {
        if (ge = ee.getWireframeAttribute(k), ge === void 0) return;
        Ae = 2;
      }
      const Ne = k.drawRange, De = k.attributes.position;
      let Re = Ne.start * Ae, Qe = (Ne.start + Ne.count) * Ae;
      me !== null && (Re = Math.max(Re, me.start * Ae), Qe = Math.min(Qe, (me.start + me.count) * Ae)), ge !== null ? (Re = Math.max(Re, 0), Qe = Math.min(Qe, ge.count)) : De != null && (Re = Math.max(Re, 0), Qe = Math.min(Qe, De.count));
      const ft = Qe - Re;
      if (ft < 0 || ft === 1 / 0) return;
      H.setup(z, G, O, k, ge);
      let ut, it = Ge;
      if (ge !== null && (ut = j.get(ge), it = Ce, it.setIndex(ut)), z.isMesh)
        G.wireframe === !0 ? (he.setLineWidth(G.wireframeLinewidth * Pt()), it.setMode(F.LINES)) : it.setMode(F.TRIANGLES);
      else if (z.isLine) {
        let Et = G.linewidth;
        Et === void 0 && (Et = 1), he.setLineWidth(Et * Pt()), z.isLineSegments ? it.setMode(F.LINES) : z.isLineLoop ? it.setMode(F.LINE_LOOP) : it.setMode(F.LINE_STRIP);
      } else z.isPoints ? it.setMode(F.POINTS) : z.isSprite && it.setMode(F.TRIANGLES);
      if (z.isBatchedMesh)
        if (ke.get("WEBGL_multi_draw"))
          it.renderMultiDraw(z._multiDrawStarts, z._multiDrawCounts, z._multiDrawCount);
        else {
          const Et = z._multiDrawStarts, Me = z._multiDrawCounts, Dt = z._multiDrawCount, $e = ge ? j.get(ge).bytesPerElement : 1, qt = T.get(G).currentProgram.getUniforms();
          for (let rn = 0; rn < Dt; rn++)
            qt.setValue(F, "_gl_DrawID", rn), it.render(Et[rn] / $e, Me[rn]);
        }
      else if (z.isInstancedMesh)
        it.renderInstances(Re, ft, z.count);
      else if (k.isInstancedBufferGeometry) {
        const Et = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, Me = Math.min(k.instanceCount, Et);
        it.renderInstances(Re, ft, Me);
      } else
        it.render(Re, ft);
    };
    function Gt(M, U, k) {
      M.transparent === !0 && M.side === 2 && M.forceSinglePass === !1 ? (M.side = 1, M.needsUpdate = !0, Wn(M, U, k), M.side = 0, M.needsUpdate = !0, Wn(M, U, k), M.side = 2) : Wn(M, U, k);
    }
    this.compile = function(M, U, k = null) {
      k === null && (k = M), y = fe.get(k), y.init(U), g.push(y), k.traverseVisible(function(z) {
        z.isLight && z.layers.test(U.layers) && (y.pushLight(z), z.castShadow && y.pushShadow(z));
      }), M !== k && M.traverseVisible(function(z) {
        z.isLight && z.layers.test(U.layers) && (y.pushLight(z), z.castShadow && y.pushShadow(z));
      }), y.setupLights();
      const G = /* @__PURE__ */ new Set();
      return M.traverse(function(z) {
        if (!(z.isMesh || z.isPoints || z.isLine || z.isSprite))
          return;
        const me = z.material;
        if (me)
          if (Array.isArray(me))
            for (let Se = 0; Se < me.length; Se++) {
              const O = me[Se];
              Gt(O, k, z), G.add(O);
            }
          else
            Gt(me, k, z), G.add(me);
      }), y = g.pop(), G;
    }, this.compileAsync = function(M, U, k = null) {
      const G = this.compile(M, U, k);
      return new Promise((z) => {
        function me() {
          if (G.forEach(function(Se) {
            T.get(Se).currentProgram.isReady() && G.delete(Se);
          }), G.size === 0) {
            z(M);
            return;
          }
          setTimeout(me, 10);
        }
        ke.get("KHR_parallel_shader_compile") !== null ? me() : setTimeout(me, 10);
      });
    };
    let nn = null;
    function Gn(M) {
      nn && nn(M);
    }
    function zn() {
      zt.stop();
    }
    function gi() {
      zt.start();
    }
    const zt = new no();
    zt.setAnimationLoop(Gn), typeof self < "u" && zt.setContext(self), this.setAnimationLoop = function(M) {
      nn = M, ue.setAnimationLoop(M), M === null ? zt.stop() : zt.start();
    }, ue.addEventListener("sessionstart", zn), ue.addEventListener("sessionend", gi), this.render = function(M, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === !0) return;
      L !== null && L.renderStart(M, U);
      const k = ue.enabled === !0 && ue.isPresenting === !0, G = A !== null && (I === null || k) && A.begin(P, I);
      if (M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), ue.enabled === !0 && ue.isPresenting === !0 && (A === null || A.isCompositing() === !1) && (ue.cameraAutoUpdate === !0 && ue.updateCamera(U), U = ue.getCamera()), M.isScene === !0 && M.onBeforeRender(P, M, U, I), y = fe.get(M, g.length), y.init(U), y.state.textureUnits = _.getTextureUnits(), g.push(y), Je.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), Ee.setFromProjectionMatrix(Je, 2e3, U.reversedDepth), He = this.localClippingEnabled, ct = xe.init(this.clippingPlanes, He), R = J.get(M, w.length), R.init(), w.push(R), ue.enabled === !0 && ue.isPresenting === !0) {
        const Se = P.xr.getDepthSensingMesh();
        Se !== null && Vn(Se, U, -1 / 0, P.sortObjects);
      }
      Vn(M, U, 0, P.sortObjects), R.finish(), P.sortObjects === !0 && R.sort(Q, Y), dt = ue.enabled === !1 || ue.isPresenting === !1 || ue.hasDepthSensing() === !1, dt && ae.addToRenderList(R, M), this.info.render.frame++, ct === !0 && xe.beginShadows();
      const z = y.state.shadowsArray;
      if (ce.render(z, M, U), ct === !0 && xe.endShadows(), this.info.autoReset === !0 && this.info.reset(), (G && A.hasRenderPass()) === !1) {
        const Se = R.opaque, O = R.transmissive;
        if (y.setupLights(), U.isArrayCamera) {
          const ge = U.cameras;
          if (O.length > 0)
            for (let Ae = 0, Ne = ge.length; Ae < Ne; Ae++) {
              const De = ge[Ae];
              Hn(Se, O, M, De);
            }
          dt && ae.render(M);
          for (let Ae = 0, Ne = ge.length; Ae < Ne; Ae++) {
            const De = ge[Ae];
            kn(R, M, De, De.viewport);
          }
        } else
          O.length > 0 && Hn(Se, O, M, U), dt && ae.render(M), kn(R, M, U);
      }
      I !== null && X === 0 && (_.updateMultisampleRenderTarget(I), _.updateRenderTargetMipmap(I)), G && A.end(P), M.isScene === !0 && M.onAfterRender(P, M, U), H.resetDefaultState(), V = -1, q = null, g.pop(), g.length > 0 ? (y = g[g.length - 1], _.setTextureUnits(y.state.textureUnits), ct === !0 && xe.setGlobalState(P.clippingPlanes, y.state.camera)) : y = null, w.pop(), w.length > 0 ? R = w[w.length - 1] : R = null, L !== null && L.renderEnd();
    };
    function Vn(M, U, k, G) {
      if (M.visible === !1) return;
      if (M.layers.test(U.layers)) {
        if (M.isGroup)
          k = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(U);
        else if (M.isLightProbeGrid)
          y.pushLightProbeGrid(M);
        else if (M.isLight)
          y.pushLight(M), M.castShadow && y.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || Ee.intersectsSprite(M)) {
            G && ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Je);
            const Se = oe.update(M), O = M.material;
            O.visible && R.push(M, Se, O, k, ze.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || Ee.intersectsObject(M))) {
          const Se = oe.update(M), O = M.material;
          if (G && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), ze.copy(M.boundingSphere.center)) : (Se.boundingSphere === null && Se.computeBoundingSphere(), ze.copy(Se.boundingSphere.center)), ze.applyMatrix4(M.matrixWorld).applyMatrix4(Je)), Array.isArray(O)) {
            const ge = Se.groups;
            for (let Ae = 0, Ne = ge.length; Ae < Ne; Ae++) {
              const De = ge[Ae], Re = O[De.materialIndex];
              Re && Re.visible && R.push(M, Se, Re, k, ze.z, De);
            }
          } else O.visible && R.push(M, Se, O, k, ze.z, null);
        }
      }
      const me = M.children;
      for (let Se = 0, O = me.length; Se < O; Se++)
        Vn(me[Se], U, k, G);
    }
    function kn(M, U, k, G) {
      const { opaque: z, transmissive: me, transparent: Se } = M;
      y.setupLightsView(k), ct === !0 && xe.setGlobalState(P.clippingPlanes, k), G && he.viewport(ne.copy(G)), z.length > 0 && Pn(z, U, k), me.length > 0 && Pn(me, U, k), Se.length > 0 && Pn(Se, U, k), he.buffers.depth.setTest(!0), he.buffers.depth.setMask(!0), he.buffers.color.setMask(!0), he.setPolygonOffset(!1);
    }
    function Hn(M, U, k, G) {
      if ((k.isScene === !0 ? k.overrideMaterial : null) !== null)
        return;
      if (y.state.transmissionRenderTarget[G.id] === void 0) {
        const Re = ke.has("EXT_color_buffer_half_float") || ke.has("EXT_color_buffer_float");
        y.state.transmissionRenderTarget[G.id] = new en(1, 1, {
          generateMipmaps: !0,
          type: Re ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, tt.samples),
          // to avoid feedback loops, the transmission render target requires a resolve, see #26177
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: qe.workingColorSpace
        });
      }
      const me = y.state.transmissionRenderTarget[G.id], Se = G.viewport || ne;
      me.setSize(Se.z * P.transmissionResolutionScale, Se.w * P.transmissionResolutionScale);
      const O = P.getRenderTarget(), ge = P.getActiveCubeFace(), Ae = P.getActiveMipmapLevel();
      P.setRenderTarget(me), P.getClearColor(ye), be = P.getClearAlpha(), be < 1 && P.setClearColor(16777215, 0.5), P.clear(), dt && ae.render(k);
      const Ne = P.toneMapping;
      P.toneMapping = 0;
      const De = G.viewport;
      if (G.viewport !== void 0 && (G.viewport = void 0), y.setupLightsView(G), ct === !0 && xe.setGlobalState(P.clippingPlanes, G), Pn(M, k, G), _.updateMultisampleRenderTarget(me), _.updateRenderTargetMipmap(me), ke.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Re = !1;
        for (let Qe = 0, ft = U.length; Qe < ft; Qe++) {
          const ut = U[Qe], { object: it, geometry: Et, material: Me, group: Dt } = ut;
          if (Me.side === 2 && it.layers.test(G.layers)) {
            const $e = Me.side;
            Me.side = 1, Me.needsUpdate = !0, xi(it, k, G, Et, Me, Dt), Me.side = $e, Me.needsUpdate = !0, Re = !0;
          }
        }
        Re === !0 && (_.updateMultisampleRenderTarget(me), _.updateRenderTargetMipmap(me));
      }
      P.setRenderTarget(O, ge, Ae), P.setClearColor(ye, be), De !== void 0 && (G.viewport = De), P.toneMapping = Ne;
    }
    function Pn(M, U, k) {
      const G = U.isScene === !0 ? U.overrideMaterial : null;
      for (let z = 0, me = M.length; z < me; z++) {
        const Se = M[z], { object: O, geometry: ge, group: Ae } = Se;
        let Ne = Se.material;
        Ne.allowOverride === !0 && G !== null && (Ne = G), O.layers.test(k.layers) && xi(O, U, k, ge, Ne, Ae);
      }
    }
    function xi(M, U, k, G, z, me) {
      M.onBeforeRender(P, U, k, G, z, me), M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), z.onBeforeRender(P, U, k, G, M, me), z.transparent === !0 && z.side === 2 && z.forceSinglePass === !1 ? (z.side = 1, z.needsUpdate = !0, P.renderBufferDirect(k, U, G, z, M, me), z.side = 0, z.needsUpdate = !0, P.renderBufferDirect(k, U, G, z, M, me), z.side = 2) : P.renderBufferDirect(k, U, G, z, M, me), M.onAfterRender(P, U, k, G, z, me);
    }
    function Wn(M, U, k) {
      U.isScene !== !0 && (U = gt);
      const G = T.get(M), z = y.state.lights, me = y.state.shadowsArray, Se = z.state.version, O = le.getParameters(M, z.state, me, U, k, y.state.lightProbeGridArray), ge = le.getProgramCacheKey(O);
      let Ae = G.programs;
      G.environment = M.isMeshStandardMaterial || M.isMeshLambertMaterial || M.isMeshPhongMaterial ? U.environment : null, G.fog = U.fog;
      const Ne = M.isMeshStandardMaterial || M.isMeshLambertMaterial && !M.envMap || M.isMeshPhongMaterial && !M.envMap;
      G.envMap = B.get(M.envMap || G.environment, Ne), G.envMapRotation = G.environment !== null && M.envMap === null ? U.environmentRotation : M.envMapRotation, Ae === void 0 && (M.addEventListener("dispose", mt), Ae = /* @__PURE__ */ new Map(), G.programs = Ae);
      let De = Ae.get(ge);
      if (De !== void 0) {
        if (G.currentProgram === De && G.lightsStateVersion === Se)
          return pe(M, O), De;
      } else
        O.uniforms = le.getUniforms(M), L !== null && M.isNodeMaterial && L.build(M, k, O), M.onBeforeCompile(O, P), De = le.acquireProgram(O, ge), Ae.set(ge, De), G.uniforms = O.uniforms;
      const Re = G.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Re.clippingPlanes = xe.uniform), pe(M, O), G.needsLights = yt(M), G.lightsStateVersion = Se, G.needsLights && (Re.ambientLightColor.value = z.state.ambient, Re.lightProbe.value = z.state.probe, Re.directionalLights.value = z.state.directional, Re.directionalLightShadows.value = z.state.directionalShadow, Re.spotLights.value = z.state.spot, Re.spotLightShadows.value = z.state.spotShadow, Re.rectAreaLights.value = z.state.rectArea, Re.ltc_1.value = z.state.rectAreaLTC1, Re.ltc_2.value = z.state.rectAreaLTC2, Re.pointLights.value = z.state.point, Re.pointLightShadows.value = z.state.pointShadow, Re.hemisphereLights.value = z.state.hemi, Re.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Re.spotLightMatrix.value = z.state.spotLightMatrix, Re.spotLightMap.value = z.state.spotLightMap, Re.pointShadowMatrix.value = z.state.pointShadowMatrix), G.lightProbeGrid = y.state.lightProbeGridArray.length > 0, G.currentProgram = De, G.uniformsList = null, De;
    }
    function vi(M) {
      if (M.uniformsList === null) {
        const U = M.currentProgram.getUniforms();
        M.uniformsList = fr.seqWithValue(U.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function pe(M, U) {
      const k = T.get(M);
      k.outputColorSpace = U.outputColorSpace, k.batching = U.batching, k.batchingColor = U.batchingColor, k.instancing = U.instancing, k.instancingColor = U.instancingColor, k.instancingMorph = U.instancingMorph, k.skinning = U.skinning, k.morphTargets = U.morphTargets, k.morphNormals = U.morphNormals, k.morphColors = U.morphColors, k.morphTargetsCount = U.morphTargetsCount, k.numClippingPlanes = U.numClippingPlanes, k.numIntersection = U.numClipIntersection, k.vertexAlphas = U.vertexAlphas, k.vertexTangents = U.vertexTangents, k.toneMapping = U.toneMapping;
    }
    function se(M, U) {
      if (M.length === 0) return null;
      if (M.length === 1)
        return M[0].texture !== null ? M[0] : null;
      S.setFromMatrixPosition(U.matrixWorld);
      for (let k = 0, G = M.length; k < G; k++) {
        const z = M[k];
        if (z.texture !== null && z.boundingBox.containsPoint(S)) return z;
      }
      return null;
    }
    function Pe(M, U, k, G, z) {
      U.isScene !== !0 && (U = gt), _.resetTextureUnits();
      const me = U.fog, Se = G.isMeshStandardMaterial || G.isMeshLambertMaterial || G.isMeshPhongMaterial ? U.environment : null, O = I === null ? P.outputColorSpace : I.isXRRenderTarget === !0 ? I.texture.colorSpace : qe.workingColorSpace, ge = G.isMeshStandardMaterial || G.isMeshLambertMaterial && !G.envMap || G.isMeshPhongMaterial && !G.envMap, Ae = B.get(G.envMap || Se, ge), Ne = G.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, De = !!k.attributes.tangent && (!!G.normalMap || G.anisotropy > 0), Re = !!k.morphAttributes.position, Qe = !!k.morphAttributes.normal, ft = !!k.morphAttributes.color;
      let ut = 0;
      G.toneMapped && (I === null || I.isXRRenderTarget === !0) && (ut = P.toneMapping);
      const it = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, Et = it !== void 0 ? it.length : 0, Me = T.get(G), Dt = y.state.lights;
      if (ct === !0 && (He === !0 || M !== q)) {
        const ht = M === q && G.id === V;
        xe.setState(G, M, ht);
      }
      let $e = !1;
      G.version === Me.__version ? (Me.needsLights && Me.lightsStateVersion !== Dt.state.version || Me.outputColorSpace !== O || z.isBatchedMesh && Me.batching === !1 || !z.isBatchedMesh && Me.batching === !0 || z.isBatchedMesh && Me.batchingColor === !0 && z.colorTexture === null || z.isBatchedMesh && Me.batchingColor === !1 && z.colorTexture !== null || z.isInstancedMesh && Me.instancing === !1 || !z.isInstancedMesh && Me.instancing === !0 || z.isSkinnedMesh && Me.skinning === !1 || !z.isSkinnedMesh && Me.skinning === !0 || z.isInstancedMesh && Me.instancingColor === !0 && z.instanceColor === null || z.isInstancedMesh && Me.instancingColor === !1 && z.instanceColor !== null || z.isInstancedMesh && Me.instancingMorph === !0 && z.morphTexture === null || z.isInstancedMesh && Me.instancingMorph === !1 && z.morphTexture !== null || Me.envMap !== Ae || G.fog === !0 && Me.fog !== me || Me.numClippingPlanes !== void 0 && (Me.numClippingPlanes !== xe.numPlanes || Me.numIntersection !== xe.numIntersection) || Me.vertexAlphas !== Ne || Me.vertexTangents !== De || Me.morphTargets !== Re || Me.morphNormals !== Qe || Me.morphColors !== ft || Me.toneMapping !== ut || Me.morphTargetsCount !== Et || !!Me.lightProbeGrid != y.state.lightProbeGridArray.length > 0) && ($e = !0) : ($e = !0, Me.__version = G.version);
      let qt = Me.currentProgram;
      $e === !0 && (qt = Wn(G, U, z), L && G.isNodeMaterial && L.onUpdateProgram(G, qt, Me));
      let rn = !1, gn = !1, Xn = !1;
      const lt = qt.getUniforms(), vt = Me.uniforms;
      if (he.useProgram(qt.program) && (rn = !0, gn = !0, Xn = !0), G.id !== V && (V = G.id, gn = !0), Me.needsLights) {
        const ht = se(y.state.lightProbeGridArray, z);
        Me.lightProbeGrid !== ht && (Me.lightProbeGrid = ht, gn = !0);
      }
      if (rn || q !== M) {
        he.buffers.depth.getReversed() && M.reversedDepth !== !0 && (M._reversedDepth = !0, M.updateProjectionMatrix()), lt.setValue(F, "projectionMatrix", M.projectionMatrix), lt.setValue(F, "viewMatrix", M.matrixWorldInverse);
        const vn = lt.map.cameraPosition;
        vn !== void 0 && vn.setValue(F, rt.setFromMatrixPosition(M.matrixWorld)), tt.logarithmicDepthBuffer && lt.setValue(
          F,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && lt.setValue(F, "isOrthographic", M.isOrthographicCamera === !0), q !== M && (q = M, gn = !0, Xn = !0);
      }
      if (Me.needsLights && (Dt.state.directionalShadowMap.length > 0 && lt.setValue(F, "directionalShadowMap", Dt.state.directionalShadowMap, _), Dt.state.spotShadowMap.length > 0 && lt.setValue(F, "spotShadowMap", Dt.state.spotShadowMap, _), Dt.state.pointShadowMap.length > 0 && lt.setValue(F, "pointShadowMap", Dt.state.pointShadowMap, _)), z.isSkinnedMesh) {
        lt.setOptional(F, z, "bindMatrix"), lt.setOptional(F, z, "bindMatrixInverse");
        const ht = z.skeleton;
        ht && (ht.boneTexture === null && ht.computeBoneTexture(), lt.setValue(F, "boneTexture", ht.boneTexture, _));
      }
      z.isBatchedMesh && (lt.setOptional(F, z, "batchingTexture"), lt.setValue(F, "batchingTexture", z._matricesTexture, _), lt.setOptional(F, z, "batchingIdTexture"), lt.setValue(F, "batchingIdTexture", z._indirectTexture, _), lt.setOptional(F, z, "batchingColorTexture"), z._colorsTexture !== null && lt.setValue(F, "batchingColorTexture", z._colorsTexture, _));
      const xn = k.morphAttributes;
      if ((xn.position !== void 0 || xn.normal !== void 0 || xn.color !== void 0) && Ie.update(z, k, qt), (gn || Me.receiveShadow !== z.receiveShadow) && (Me.receiveShadow = z.receiveShadow, lt.setValue(F, "receiveShadow", z.receiveShadow)), (G.isMeshStandardMaterial || G.isMeshLambertMaterial || G.isMeshPhongMaterial) && G.envMap === null && U.environment !== null && (vt.envMapIntensity.value = U.environmentIntensity), vt.dfgLUT !== void 0 && (vt.dfgLUT.value = Ud()), gn) {
        if (lt.setValue(F, "toneMappingExposure", P.toneMappingExposure), Me.needsLights && Ke(vt, Xn), me && G.fog === !0 && $.refreshFogUniforms(vt, me), $.refreshMaterialUniforms(vt, G, Oe, et, y.state.transmissionRenderTarget[M.id]), Me.needsLights && Me.lightProbeGrid) {
          const ht = Me.lightProbeGrid;
          vt.probesSH.value = ht.texture, vt.probesMin.value.copy(ht.boundingBox.min), vt.probesMax.value.copy(ht.boundingBox.max), vt.probesResolution.value.copy(ht.resolution);
        }
        fr.upload(F, vi(Me), vt, _);
      }
      if (G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (fr.upload(F, vi(Me), vt, _), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && lt.setValue(F, "center", z.center), lt.setValue(F, "modelViewMatrix", z.modelViewMatrix), lt.setValue(F, "normalMatrix", z.normalMatrix), lt.setValue(F, "modelMatrix", z.matrixWorld), G.uniformsGroups !== void 0) {
        const ht = G.uniformsGroups;
        for (let vn = 0, qn = ht.length; vn < qn; vn++) {
          const Us = ht[vn];
          Z.update(Us, qt), Z.bind(Us, qt);
        }
      }
      return qt;
    }
    function Ke(M, U) {
      M.ambientLightColor.needsUpdate = U, M.lightProbe.needsUpdate = U, M.directionalLights.needsUpdate = U, M.directionalLightShadows.needsUpdate = U, M.pointLights.needsUpdate = U, M.pointLightShadows.needsUpdate = U, M.spotLights.needsUpdate = U, M.spotLightShadows.needsUpdate = U, M.rectAreaLights.needsUpdate = U, M.hemisphereLights.needsUpdate = U;
    }
    function yt(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return W;
    }, this.getActiveMipmapLevel = function() {
      return X;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(M, U, k) {
      const G = T.get(M);
      G.__autoAllocateDepthBuffer = M.resolveDepthBuffer === !1, G.__autoAllocateDepthBuffer === !1 && (G.__useRenderToTexture = !1), T.get(M.texture).__webglTexture = U, T.get(M.depthTexture).__webglTexture = G.__autoAllocateDepthBuffer ? void 0 : k, G.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(M, U) {
      const k = T.get(M);
      k.__webglFramebuffer = U, k.__useDefaultFramebuffer = U === void 0;
    };
    const Vt = F.createFramebuffer();
    this.setRenderTarget = function(M, U = 0, k = 0) {
      I = M, W = U, X = k;
      let G = null, z = !1, me = !1;
      if (M) {
        const O = T.get(M);
        if (O.__useDefaultFramebuffer !== void 0) {
          he.bindFramebuffer(F.FRAMEBUFFER, O.__webglFramebuffer), ne.copy(M.viewport), re.copy(M.scissor), de = M.scissorTest, he.viewport(ne), he.scissor(re), he.setScissorTest(de), V = -1;
          return;
        } else if (O.__webglFramebuffer === void 0)
          _.setupRenderTarget(M);
        else if (O.__hasExternalTextures)
          _.rebindTextures(M, T.get(M.texture).__webglTexture, T.get(M.depthTexture).__webglTexture);
        else if (M.depthBuffer) {
          const Ne = M.depthTexture;
          if (O.__boundDepthTexture !== Ne) {
            if (Ne !== null && T.has(Ne) && (M.width !== Ne.image.width || M.height !== Ne.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            _.setupDepthRenderbuffer(M);
          }
        }
        const ge = M.texture;
        (ge.isData3DTexture || ge.isDataArrayTexture || ge.isCompressedArrayTexture) && (me = !0);
        const Ae = T.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(Ae[U]) ? G = Ae[U][k] : G = Ae[U], z = !0) : M.samples > 0 && _.useMultisampledRTT(M) === !1 ? G = T.get(M).__webglMultisampledFramebuffer : Array.isArray(Ae) ? G = Ae[k] : G = Ae, ne.copy(M.viewport), re.copy(M.scissor), de = M.scissorTest;
      } else
        ne.copy(K).multiplyScalar(Oe).floor(), re.copy(ie).multiplyScalar(Oe).floor(), de = we;
      if (k !== 0 && (G = Vt), he.bindFramebuffer(F.FRAMEBUFFER, G) && he.drawBuffers(M, G), he.viewport(ne), he.scissor(re), he.setScissorTest(de), z) {
        const O = T.get(M.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_CUBE_MAP_POSITIVE_X + U, O.__webglTexture, k);
      } else if (me) {
        const O = U;
        for (let ge = 0; ge < M.textures.length; ge++) {
          const Ae = T.get(M.textures[ge]);
          F.framebufferTextureLayer(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0 + ge, Ae.__webglTexture, k, O);
        }
      } else if (M !== null && k !== 0) {
        const O = T.get(M.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, O.__webglTexture, k);
      }
      V = -1;
    }, this.readRenderTargetPixels = function(M, U, k, G, z, me, Se, O = 0) {
      if (!(M && M.isWebGLRenderTarget)) {
        Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ge = T.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && Se !== void 0 && (ge = ge[Se]), ge) {
        he.bindFramebuffer(F.FRAMEBUFFER, ge);
        try {
          const Ae = M.textures[O], Ne = Ae.format, De = Ae.type;
          if (M.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + O), !tt.textureFormatReadable(Ne)) {
            Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!tt.textureTypeReadable(De)) {
            Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= M.width - G && k >= 0 && k <= M.height - z && F.readPixels(U, k, G, z, D.convert(Ne), D.convert(De), me);
        } finally {
          const Ae = I !== null ? T.get(I).__webglFramebuffer : null;
          he.bindFramebuffer(F.FRAMEBUFFER, Ae);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(M, U, k, G, z, me, Se, O = 0) {
      if (!(M && M.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ge = T.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && Se !== void 0 && (ge = ge[Se]), ge)
        if (U >= 0 && U <= M.width - G && k >= 0 && k <= M.height - z) {
          he.bindFramebuffer(F.FRAMEBUFFER, ge);
          const Ae = M.textures[O], Ne = Ae.format, De = Ae.type;
          if (M.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + O), !tt.textureFormatReadable(Ne))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!tt.textureTypeReadable(De))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Re = F.createBuffer();
          F.bindBuffer(F.PIXEL_PACK_BUFFER, Re), F.bufferData(F.PIXEL_PACK_BUFFER, me.byteLength, F.STREAM_READ), F.readPixels(U, k, G, z, D.convert(Ne), D.convert(De), 0);
          const Qe = I !== null ? T.get(I).__webglFramebuffer : null;
          he.bindFramebuffer(F.FRAMEBUFFER, Qe);
          const ft = F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return F.flush(), await po(F, ft, 4), F.bindBuffer(F.PIXEL_PACK_BUFFER, Re), F.getBufferSubData(F.PIXEL_PACK_BUFFER, 0, me), F.deleteBuffer(Re), F.deleteSync(ft), me;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(M, U = null, k = 0) {
      const G = Math.pow(2, -k), z = Math.floor(M.image.width * G), me = Math.floor(M.image.height * G), Se = U !== null ? U.x : 0, O = U !== null ? U.y : 0;
      _.setTexture2D(M, 0), F.copyTexSubImage2D(F.TEXTURE_2D, k, 0, 0, Se, O, z, me), he.unbindTexture();
    };
    const wt = F.createFramebuffer(), Nt = F.createFramebuffer();
    this.copyTextureToTexture = function(M, U, k = null, G = null, z = 0, me = 0) {
      let Se, O, ge, Ae, Ne, De, Re, Qe, ft;
      const ut = M.isCompressedTexture ? M.mipmaps[me] : M.image;
      if (k !== null)
        Se = k.max.x - k.min.x, O = k.max.y - k.min.y, ge = k.isBox3 ? k.max.z - k.min.z : 1, Ae = k.min.x, Ne = k.min.y, De = k.isBox3 ? k.min.z : 0;
      else {
        const vt = Math.pow(2, -z);
        Se = Math.floor(ut.width * vt), O = Math.floor(ut.height * vt), M.isDataArrayTexture ? ge = ut.depth : M.isData3DTexture ? ge = Math.floor(ut.depth * vt) : ge = 1, Ae = 0, Ne = 0, De = 0;
      }
      G !== null ? (Re = G.x, Qe = G.y, ft = G.z) : (Re = 0, Qe = 0, ft = 0);
      const it = D.convert(U.format), Et = D.convert(U.type);
      let Me;
      U.isData3DTexture ? (_.setTexture3D(U, 0), Me = F.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (_.setTexture2DArray(U, 0), Me = F.TEXTURE_2D_ARRAY) : (_.setTexture2D(U, 0), Me = F.TEXTURE_2D), he.activeTexture(F.TEXTURE0), he.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, U.flipY), he.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), he.pixelStorei(F.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Dt = he.getParameter(F.UNPACK_ROW_LENGTH), $e = he.getParameter(F.UNPACK_IMAGE_HEIGHT), qt = he.getParameter(F.UNPACK_SKIP_PIXELS), rn = he.getParameter(F.UNPACK_SKIP_ROWS), gn = he.getParameter(F.UNPACK_SKIP_IMAGES);
      he.pixelStorei(F.UNPACK_ROW_LENGTH, ut.width), he.pixelStorei(F.UNPACK_IMAGE_HEIGHT, ut.height), he.pixelStorei(F.UNPACK_SKIP_PIXELS, Ae), he.pixelStorei(F.UNPACK_SKIP_ROWS, Ne), he.pixelStorei(F.UNPACK_SKIP_IMAGES, De);
      const Xn = M.isDataArrayTexture || M.isData3DTexture, lt = U.isDataArrayTexture || U.isData3DTexture;
      if (M.isDepthTexture) {
        const vt = T.get(M), xn = T.get(U), ht = T.get(vt.__renderTarget), vn = T.get(xn.__renderTarget);
        he.bindFramebuffer(F.READ_FRAMEBUFFER, ht.__webglFramebuffer), he.bindFramebuffer(F.DRAW_FRAMEBUFFER, vn.__webglFramebuffer);
        for (let qn = 0; qn < ge; qn++)
          Xn && (F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, T.get(M).__webglTexture, z, De + qn), F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, T.get(U).__webglTexture, me, ft + qn)), F.blitFramebuffer(Ae, Ne, Se, O, Re, Qe, Se, O, F.DEPTH_BUFFER_BIT, F.NEAREST);
        he.bindFramebuffer(F.READ_FRAMEBUFFER, null), he.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else if (z !== 0 || M.isRenderTargetTexture || T.has(M)) {
        const vt = T.get(M), xn = T.get(U);
        he.bindFramebuffer(F.READ_FRAMEBUFFER, wt), he.bindFramebuffer(F.DRAW_FRAMEBUFFER, Nt);
        for (let ht = 0; ht < ge; ht++)
          Xn ? F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, vt.__webglTexture, z, De + ht) : F.framebufferTexture2D(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, vt.__webglTexture, z), lt ? F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, xn.__webglTexture, me, ft + ht) : F.framebufferTexture2D(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, xn.__webglTexture, me), z !== 0 ? F.blitFramebuffer(Ae, Ne, Se, O, Re, Qe, Se, O, F.COLOR_BUFFER_BIT, F.NEAREST) : lt ? F.copyTexSubImage3D(Me, me, Re, Qe, ft + ht, Ae, Ne, Se, O) : F.copyTexSubImage2D(Me, me, Re, Qe, Ae, Ne, Se, O);
        he.bindFramebuffer(F.READ_FRAMEBUFFER, null), he.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else
        lt ? M.isDataTexture || M.isData3DTexture ? F.texSubImage3D(Me, me, Re, Qe, ft, Se, O, ge, it, Et, ut.data) : U.isCompressedArrayTexture ? F.compressedTexSubImage3D(Me, me, Re, Qe, ft, Se, O, ge, it, ut.data) : F.texSubImage3D(Me, me, Re, Qe, ft, Se, O, ge, it, Et, ut) : M.isDataTexture ? F.texSubImage2D(F.TEXTURE_2D, me, Re, Qe, Se, O, it, Et, ut.data) : M.isCompressedTexture ? F.compressedTexSubImage2D(F.TEXTURE_2D, me, Re, Qe, ut.width, ut.height, it, ut.data) : F.texSubImage2D(F.TEXTURE_2D, me, Re, Qe, Se, O, it, Et, ut);
      he.pixelStorei(F.UNPACK_ROW_LENGTH, Dt), he.pixelStorei(F.UNPACK_IMAGE_HEIGHT, $e), he.pixelStorei(F.UNPACK_SKIP_PIXELS, qt), he.pixelStorei(F.UNPACK_SKIP_ROWS, rn), he.pixelStorei(F.UNPACK_SKIP_IMAGES, gn), me === 0 && U.generateMipmaps && F.generateMipmap(Me), he.unbindTexture();
    }, this.initRenderTarget = function(M) {
      T.get(M).__webglFramebuffer === void 0 && _.setupRenderTarget(M);
    }, this.initTexture = function(M) {
      M.isCubeTexture ? _.setTextureCube(M, 0) : M.isData3DTexture ? _.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? _.setTexture2DArray(M, 0) : _.setTexture2D(M, 0), he.unbindTexture();
    }, this.resetState = function() {
      W = 0, X = 0, I = null, he.reset(), H.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return 2e3;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = qe._getDrawingBufferColorSpace(e), t.unpackColorSpace = qe._getUnpackColorSpace();
  }
}
const Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACESFilmicToneMapping: 4,
  AddEquation: 100,
  AddOperation: 2,
  AdditiveBlending: 2,
  AgXToneMapping: 6,
  AlphaFormat: 1021,
  AlwaysCompare: 519,
  AlwaysDepth: 1,
  AlwaysStencilFunc: 519,
  ArrayCamera: to,
  BackSide: 1,
  BasicDepthPacking: 3200,
  Box3: fi,
  BoxGeometry: pi,
  BufferAttribute: Zt,
  BufferGeometry: Rt,
  ByteType: 1010,
  Camera: ws,
  CanvasTexture: ds,
  CineonToneMapping: 3,
  CircleGeometry: br,
  ClampToEdgeWrapping: 1001,
  Color: Xe,
  ColorManagement: qe,
  ConstantAlphaFactor: 213,
  ConstantColorFactor: 211,
  CubeCamera: eo,
  CubeDepthTexture: Xa,
  CubeReflectionMapping: 301,
  CubeRefractionMapping: 302,
  CubeTexture: ys,
  CubeUVReflectionMapping: 306,
  CullFaceBack: 1,
  CullFaceFront: 2,
  CullFaceNone: 0,
  CustomBlending: 5,
  CustomToneMapping: 5,
  CylinderGeometry: Ts,
  Data3DTexture: Ba,
  DataArrayTexture: gs,
  DataTexture: ka,
  DepthFormat: 1026,
  DepthStencilFormat: 1027,
  DepthTexture: Bn,
  DirectionalLight: ui,
  DodecahedronGeometry: Rr,
  DoubleSide: 2,
  DstAlphaFactor: 206,
  DstColorFactor: 208,
  EdgesGeometry: No,
  EqualCompare: 514,
  EqualDepth: 4,
  EquirectangularReflectionMapping: 303,
  EquirectangularRefractionMapping: 304,
  Euler: mn,
  EventDispatcher: Cn,
  ExternalTexture: Es,
  Float32BufferAttribute: at,
  FloatType: 1015,
  Fog: yr,
  FrontSide: 0,
  Frustum: Tr,
  GLSL3: cs,
  GreaterCompare: 516,
  GreaterDepth: 6,
  GreaterEqualCompare: 518,
  GreaterEqualDepth: 5,
  Group: Nn,
  HalfFloatType: 1016,
  HemisphereLight: Qa,
  ImageUtils: Ua,
  IntType: 1013,
  InterleavedBuffer: za,
  InterleavedBufferAttribute: Ii,
  KeepStencilOp: 7680,
  LatheGeometry: bs,
  Layers: xs,
  LessCompare: 513,
  LessDepth: 2,
  LessEqualCompare: 515,
  LessEqualDepth: 3,
  Light: Rs,
  Line: Wa,
  LineBasicMaterial: Ha,
  LineSegments: Uo,
  LinearFilter: 1006,
  LinearMipmapLinearFilter: 1008,
  LinearMipmapNearestFilter: 1007,
  LinearSRGBColorSpace: Di,
  LinearToneMapping: 1,
  LinearTransfer: Li,
  Material: _n,
  Matrix2: fs,
  Matrix3: Be,
  Matrix4: pt,
  MaxEquation: 104,
  Mesh: Xt,
  MeshBasicMaterial: Er,
  MeshDepthMaterial: ja,
  MeshDistanceMaterial: Ja,
  MeshStandardMaterial: $a,
  MinEquation: 103,
  MirroredRepeatWrapping: 1002,
  MixOperation: 1,
  MultiplyBlending: 4,
  MultiplyOperation: 0,
  NearestFilter: 1003,
  NearestMipmapLinearFilter: 1005,
  NearestMipmapNearestFilter: 1004,
  NeutralToneMapping: 7,
  NeverCompare: 512,
  NeverDepth: 0,
  NoBlending: 0,
  NoColorSpace: fn,
  NoToneMapping: 0,
  NormalBlending: 1,
  NotEqualCompare: 517,
  NotEqualDepth: 7,
  Object3D: St,
  ObjectSpaceNormalMap: 1,
  OneFactor: 201,
  OneMinusConstantAlphaFactor: 214,
  OneMinusConstantColorFactor: 212,
  OneMinusDstAlphaFactor: 207,
  OneMinusDstColorFactor: 209,
  OneMinusSrcAlphaFactor: 205,
  OneMinusSrcColorFactor: 203,
  OrthographicCamera: wr,
  PCFShadowMap: 1,
  PCFSoftShadowMap: 2,
  PMREMGenerator: ps,
  PerspectiveCamera: Wt,
  Plane: An,
  PlaneGeometry: mi,
  PolyhedronGeometry: Ar,
  Quaternion: On,
  R11_EAC_Format: 37488,
  RED_GREEN_RGTC2_Format: 36285,
  RED_RGTC1_Format: 36283,
  REVISION: Mr,
  RG11_EAC_Format: 37490,
  RGBAFormat: 1023,
  RGBAIntegerFormat: 1033,
  RGBA_ASTC_10x10_Format: 37819,
  RGBA_ASTC_10x5_Format: 37816,
  RGBA_ASTC_10x6_Format: 37817,
  RGBA_ASTC_10x8_Format: 37818,
  RGBA_ASTC_12x10_Format: 37820,
  RGBA_ASTC_12x12_Format: 37821,
  RGBA_ASTC_4x4_Format: 37808,
  RGBA_ASTC_5x4_Format: 37809,
  RGBA_ASTC_5x5_Format: 37810,
  RGBA_ASTC_6x5_Format: 37811,
  RGBA_ASTC_6x6_Format: 37812,
  RGBA_ASTC_8x5_Format: 37813,
  RGBA_ASTC_8x6_Format: 37814,
  RGBA_ASTC_8x8_Format: 37815,
  RGBA_BPTC_Format: 36492,
  RGBA_ETC2_EAC_Format: 37496,
  RGBA_PVRTC_2BPPV1_Format: 35843,
  RGBA_PVRTC_4BPPV1_Format: 35842,
  RGBA_S3TC_DXT1_Format: 33777,
  RGBA_S3TC_DXT3_Format: 33778,
  RGBA_S3TC_DXT5_Format: 33779,
  RGBFormat: 1022,
  RGB_BPTC_SIGNED_Format: 36494,
  RGB_BPTC_UNSIGNED_Format: 36495,
  RGB_ETC1_Format: 36196,
  RGB_ETC2_Format: 37492,
  RGB_PVRTC_2BPPV1_Format: 35841,
  RGB_PVRTC_4BPPV1_Format: 35840,
  RGB_S3TC_DXT1_Format: 33776,
  RGFormat: 1030,
  RGIntegerFormat: 1031,
  RawShaderMaterial: Ka,
  Ray: Ss,
  RedFormat: 1028,
  RedIntegerFormat: 1029,
  ReinhardToneMapping: 2,
  RenderTarget: Na,
  RepeatWrapping: 1e3,
  ReverseSubtractEquation: 102,
  SIGNED_R11_EAC_Format: 37489,
  SIGNED_RED_GREEN_RGTC2_Format: 36286,
  SIGNED_RED_RGTC1_Format: 36284,
  SIGNED_RG11_EAC_Format: 37491,
  SRGBColorSpace: Bt,
  SRGBTransfer: nt,
  Scene: Ga,
  ShaderChunk: Ve,
  ShaderLib: Qt,
  ShaderMaterial: tn,
  ShadowMaterial: qa,
  ShortType: 1011,
  Source: Sr,
  Sphere: Ui,
  Sprite: hs,
  SpriteMaterial: _r,
  SrcAlphaFactor: 204,
  SrcAlphaSaturateFactor: 210,
  SrcColorFactor: 202,
  StaticDrawUsage: 35044,
  SubtractEquation: 101,
  SubtractiveBlending: 3,
  TangentSpaceNormalMap: 0,
  Texture: Ct,
  TorusGeometry: As,
  Triangle: Ot,
  UVMapping: 300,
  Uint16BufferAttribute: vs,
  Uint32BufferAttribute: Ms,
  UniformsLib: _e,
  UniformsUtils: Za,
  UnsignedByteType: 1009,
  UnsignedInt101111Type: 35899,
  UnsignedInt248Type: 1020,
  UnsignedInt5999Type: 35902,
  UnsignedIntType: 1014,
  UnsignedShort4444Type: 1017,
  UnsignedShort5551Type: 1018,
  UnsignedShortType: 1012,
  VSMShadowMap: 3,
  Vector2: Fe,
  Vector3: N,
  Vector4: _t,
  WebGLCoordinateSystem: 2e3,
  WebGLCubeRenderTarget: Cs,
  WebGLRenderTarget: en,
  WebGLRenderer: uo,
  WebGLUtils: lo,
  WebGPUCoordinateSystem: 2001,
  WebXRController: dr,
  ZeroFactor: 200,
  createCanvasElement: Fa,
  error: Ze,
  log: Fi,
  warn: Le,
  warnOnce: mr
}, Symbol.toStringTag, { value: "Module" }));
function Nd(i, e, t, n) {
  const r = new Float32Array((t + 1) * (t + 1));
  let s = n;
  const a = () => (s = s * 1103515245 + 12345 & 2147483647) / 2147483647;
  for (let l = 0; l < r.length; l++) r[l] = a();
  const o = (l) => l * l * (3 - 2 * l), c = new Float32Array(i * e);
  for (let l = 0; l < e; l++) {
    const f = l / e * t, p = Math.floor(f), u = o(f - p);
    for (let m = 0; m < i; m++) {
      const x = m / i * t, E = Math.floor(x), d = o(x - E), h = p * (t + 1) + E, v = h + 1, b = h + t + 1, S = b + 1, R = r[h] + (r[v] - r[h]) * d, y = r[b] + (r[S] - r[b]) * d;
      c[l * i + m] = R + (y - R) * u;
    }
  }
  return c;
}
function La(i, { size: e, octaves: t, grain: n, contrast: r, repeat: s, streak: a = 0, seed: o = 7, aniso: c = 8 }) {
  const l = document.createElement("canvas");
  l.width = l.height = e;
  const f = l.getContext("2d"), p = f.createImageData(e, e), u = [];
  let m = 1, x = 4, E = 0;
  for (let h = 0; h < t; h++)
    u.push({ data: Nd(e, e, x, o + h * 131), amp: m }), E += m, m *= 0.5, x *= 2;
  for (let h = 0; h < e; h++)
    for (let v = 0; v < e; v++) {
      const b = h * e + v;
      let S = 0;
      for (const A of u) S += A.data[b] * A.amp;
      S /= E, a && (S = S * (1 - a) + a * (0.5 + 0.5 * Math.sin(h * 0.19 + S * 3.4)));
      const R = (Math.random() - 0.5) * n, y = 128 + (S - 0.5) * 255 * r + R * 255, w = b * 4, g = Math.max(0, Math.min(255, y));
      p.data[w] = p.data[w + 1] = p.data[w + 2] = g, p.data[w + 3] = 255;
    }
  f.putImageData(p, 0, 0);
  const d = new i.CanvasTexture(l);
  return d.wrapS = d.wrapT = i.RepeatWrapping, d.repeat.set(s[0], s[1]), d.anisotropy = c, d.minFilter = i.LinearMipmapLinearFilter, d.magFilter = i.LinearFilter, d.generateMipmaps = !0, d.needsUpdate = !0, d;
}
function Bd(i, e, t, n) {
  const r = (t ? "lo" : "hi") + "_" + n;
  if (e[r]) return e[r];
  const s = t ? 256 : 512, a = {
    tread: La(i, { size: s, octaves: t ? 3 : 4, grain: 0.14, contrast: 0.62, repeat: [10, 5], seed: 7, aniso: n }),
    sidewall: La(i, { size: s, octaves: t ? 2 : 3, grain: 0.07, contrast: 0.34, repeat: [16, 3], streak: 0.45, seed: 41, aniso: n })
  };
  return e[r] = a, a;
}
function ho(i, e = {}) {
  const t = e.detail === !1, n = Bd(i, ho, t, Math.min(e.anisotropy || 8, 16)), r = {
    tread: new i.MeshStandardMaterial({
      name: "rubber_tread",
      color: 1974564,
      roughness: 1,
      metalness: 0,
      roughnessMap: n.tread,
      bumpMap: n.tread,
      bumpScale: t ? 0.01 : 0.017
    }),
    sidewall: new i.MeshStandardMaterial({
      name: "rubber_sidewall",
      color: 2764338,
      roughness: 0.96,
      metalness: 0,
      side: i.DoubleSide,
      roughnessMap: n.sidewall,
      bumpMap: n.sidewall,
      bumpScale: t ? 6e-3 : 0.01
    }),
    // fondo de ranura: mas oscuro, separa visualmente los bloques del tread
    groove: new i.MeshStandardMaterial({
      name: "rubber_groove",
      color: 1185047,
      roughness: 1,
      metalness: 0,
      roughnessMap: n.tread,
      bumpMap: n.tread,
      bumpScale: t ? 8e-3 : 0.014
    }),
    rim: new i.MeshStandardMaterial({
      name: "wheel_paint_ochre",
      color: 11105834,
      roughness: 0.62,
      metalness: 0.28,
      roughnessMap: n.sidewall
    }),
    hub: new i.MeshStandardMaterial({
      name: "wheel_paint_shadow",
      color: 7162908,
      roughness: 0.7,
      metalness: 0.22,
      roughnessMap: n.sidewall,
      side: i.DoubleSide
    }),
    accent: new i.MeshStandardMaterial({ name: "sensor_amber", color: 13208110, roughness: 0.42, metalness: 0.2 })
  }, s = new i.Group();
  s.name = "otr_tire";
  const a = new i.Group();
  a.name = "outer_shell", s.add(a);
  const o = (R, y) => new i.Vector2(R, y), c = [
    o(0.86, -0.62),
    o(1.22, -0.74),
    o(1.5, -0.7),
    o(1.66, -0.6),
    o(1.735, -0.44),
    o(1.755, -0.26),
    o(1.76, 0),
    o(1.755, 0.26),
    o(1.735, 0.44),
    o(1.66, 0.6),
    o(1.5, 0.7),
    o(1.22, 0.74),
    o(0.86, 0.62),
    o(0.86, 0.5),
    o(1.18, 0.58),
    o(1.44, 0.55),
    o(1.58, 0.44),
    o(1.63, 0.24),
    o(1.645, 0),
    o(1.63, -0.24),
    o(1.58, -0.44),
    o(1.44, -0.55),
    o(1.18, -0.58),
    o(0.86, -0.5),
    o(0.86, -0.62)
  ], l = new i.Mesh(new i.LatheGeometry(c, 96), r.sidewall);
  l.name = "carcass", a.add(l);
  const f = new i.Mesh(new i.CylinderGeometry(1.655, 1.655, 1.3, 96, 1, !0), r.groove);
  f.name = "crown_band", a.add(f);
  const p = [
    { y: -0.47, tilt: 0.46, r: 1.668, w: 0.225, h: 0.19, d: 0.295 },
    { y: -0.172, tilt: 0.08, r: 1.7, w: 0.235, h: 0.205, d: 0.3 },
    { y: 0.172, tilt: -0.08, r: 1.7, w: 0.235, h: 0.205, d: 0.3 },
    { y: 0.47, tilt: -0.46, r: 1.668, w: 0.225, h: 0.19, d: 0.295 }
  ], u = 40;
  p.forEach((R, y) => {
    const w = new i.BoxGeometry(R.w, R.d, R.h, 1, 1, 1);
    for (let g = 0; g < u; g++) {
      const A = g / u * Math.PI * 2 + (y % 2 ? Math.PI / u : 0), P = new i.Object3D();
      P.rotation.y = A;
      const C = new i.Mesh(w, r.tread);
      C.name = `tread_lug_${y}_${g}`, C.position.set(R.r, R.y, 0), C.rotation.x = R.tilt, C.rotation.z = (y < 2 ? 1 : -1) * 0.04, P.add(C), a.add(P);
    }
  });
  const m = new i.Mesh(new i.TorusGeometry(1.66, 0.035, 8, 96), r.groove);
  m.name = "center_groove", m.rotation.x = Math.PI / 2, a.add(m);
  for (const R of [-1, 1]) {
    [[1.46, 0.03, 0.66], [1.3, 0.026, 0.7], [1.13, 0.022, 0.716]].forEach(([w, g, A], P) => {
      const C = new i.Mesh(new i.TorusGeometry(w, g, 10, 96), r.sidewall);
      C.name = `sidewall_rib_${R > 0 ? "out" : "in"}_${P}`, C.rotation.x = Math.PI / 2, C.position.y = R * A, a.add(C);
    });
    const y = new i.Mesh(new i.TorusGeometry(0.92, 0.062, 12, 80), r.sidewall);
    y.name = `bead_ring_${R > 0 ? "out" : "in"}`, y.rotation.x = Math.PI / 2, y.position.y = R * 0.56, a.add(y);
  }
  const x = new i.Group();
  x.name = "wheel_assembly", s.add(x);
  const E = new i.Mesh(new i.CylinderGeometry(0.86, 0.86, 1.22, 64, 1, !0), r.hub);
  E.name = "rim_barrel", x.add(E);
  for (const R of [-1, 1]) {
    const y = new i.Mesh(new i.TorusGeometry(0.88, 0.055, 12, 64), r.rim);
    y.name = `rim_flange_${R > 0 ? "out" : "in"}`, y.rotation.x = Math.PI / 2, y.position.y = R * 0.58, x.add(y);
  }
  const d = new i.Mesh(new i.CylinderGeometry(0.7, 0.7, 0.3, 56), r.hub);
  d.name = "hub_plate", x.add(d);
  for (const R of [1, -1]) {
    const y = R > 0 ? "out" : "in", w = new i.Mesh(R > 0 ? new i.CylinderGeometry(0.855, 0.7, 0.42, 56, 1, !0) : new i.CylinderGeometry(0.7, 0.855, 0.42, 56, 1, !0), r.hub);
    w.name = `rim_dish_${y}`, w.position.y = R * 0.36, x.add(w);
    const g = new i.Mesh(new i.CylinderGeometry(0.665, 0.665, 0.1, 56), r.rim);
    g.name = `wheel_face_${y}`, g.position.y = R * 0.16, x.add(g);
    const A = 28;
    for (let W = 0; W < A; W++) {
      const X = W / A * Math.PI * 2, I = new i.Mesh(new i.CylinderGeometry(0.036, 0.036, 0.075, 8), r.hub);
      I.name = `wheel_nut_${y}_${W}`, I.position.set(Math.cos(X) * 0.49, R * 0.235, Math.sin(X) * 0.49), x.add(I);
    }
    const P = new i.Mesh(new i.TorusGeometry(0.49, 0.042, 8, 64), r.rim);
    P.name = `stud_ring_${y}`, P.rotation.x = Math.PI / 2, P.position.y = R * 0.215, x.add(P);
    const C = new i.Mesh(new i.CylinderGeometry(0.29, 0.27, 0.09, 40), r.rim);
    C.name = `hub_cap_${y}`, C.position.y = R * 0.245, x.add(C);
    const L = new i.Mesh(new i.CylinderGeometry(0.042, 0.042, 0.04, 20), r.hub);
    L.name = `hub_boss_${y}`, L.position.y = R * 0.3, x.add(L);
  }
  const h = new i.Mesh(new i.CylinderGeometry(0.032, 0.038, 0.22, 20), r.hub);
  h.name = "valve_stem", h.rotation.z = Math.PI / 2, h.position.set(0.4, 0.19, 0), x.add(h);
  const v = new i.Mesh(new i.BoxGeometry(0.16, 0.1, 0.22), r.accent);
  v.name = "sensor_module", v.position.set(0, -0.16, -0.6), x.add(v);
  const b = new i.Mesh(new i.BoxGeometry(0.24, 0.1, 0.1), r.hub);
  b.name = "sensor_bracket", b.position.set(0, -0.16, -0.53), x.add(b);
  const S = new i.Group();
  return S.name = "vizutire_otr_tire", s.rotation.x = Math.PI / 2, S.add(s), S.position.y = 1.78, { root: S, tire: s, outer: a, wheel: x, materials: r };
}
function Od(i) {
  const e = new i.Group();
  e.name = "internal_structure";
  const t = 8, n = new i.Group();
  n.name = "belt_package";
  const r = new i.LineBasicMaterial({ color: 2054261, transparent: !0, opacity: 0, depthWrite: !1 });
  r.name = "belt_lines", [1.68, 1.62, 1.56].forEach((S, R) => {
    const y = new i.CylinderGeometry(S, S, 1.02 - R * 0.1, 44, 1, !0), w = new i.LineSegments(new i.EdgesGeometry(y, 1), r);
    w.name = `belt_ply_${R + 1}`, n.add(w);
  }), e.add(n);
  const s = (S, R) => new i.Vector2(S, R), a = new i.LineBasicMaterial({ color: 4875632, transparent: !0, opacity: 0, depthWrite: !1 });
  a.name = "ply_lines";
  const o = new i.LatheGeometry([
    s(0.9, -0.5),
    s(1.22, -0.58),
    s(1.48, -0.5),
    s(1.6, -0.32),
    s(1.645, 0),
    s(1.6, 0.32),
    s(1.48, 0.5),
    s(1.22, 0.58),
    s(0.9, 0.5)
  ], 36), c = new i.LineSegments(new i.EdgesGeometry(o, 1), a);
  c.name = "carcass_ply", e.add(c);
  const l = [
    [0.94, -0.47],
    [1.16, -0.55],
    [1.4, -0.51],
    [1.56, -0.34],
    [1.625, -0.12],
    [1.625, 0.12],
    [1.56, 0.34],
    [1.4, 0.51],
    [1.16, 0.55],
    [0.94, 0.47]
  ], f = [];
  for (let S = 0; S < t; S++) {
    const R = new i.LineBasicMaterial({ color: 2846096, transparent: !0, opacity: 0, depthWrite: !1 });
    R.name = `radial_cord_sector_${S}`, f.push(R);
  }
  const p = 48, u = new i.Group();
  u.name = "radial_cords";
  for (let S = 0; S < p; S++) {
    const R = S / p * Math.PI * 2, y = l.map(([g, A]) => new i.Vector3(Math.cos(R) * g, A, Math.sin(R) * g)), w = new i.Line(new i.BufferGeometry().setFromPoints(y), f[Math.floor(S / p * t)]);
    w.name = `radial_cord_${S}`, u.add(w);
  }
  e.add(u);
  const m = new i.MeshStandardMaterial({ name: "bead_bundle", color: 13208110, roughness: 0.5, metalness: 0.3, transparent: !0, opacity: 0 });
  for (const S of [-1, 1]) {
    const R = new i.Mesh(new i.TorusGeometry(0.93, 0.045, 10, 60), m);
    R.name = `bead_bundle_${S > 0 ? "out" : "in"}`, R.rotation.x = Math.PI / 2, R.position.y = S * 0.47, e.add(R);
  }
  const x = new i.MeshBasicMaterial({ color: 11036698, transparent: !0, opacity: 0, depthWrite: !1 });
  x.name = "deformation_zone";
  const E = new i.Group();
  E.name = "deformation_zones";
  const d = [];
  [
    { r: 1.5, y: 0.4, arc: 0.9, at: -Math.PI / 2 },
    { r: 1.5, y: -0.4, arc: 0.9, at: -Math.PI / 2 },
    { r: 1.66, y: 0, arc: 0.6, at: -Math.PI / 2 }
  ].forEach((S, R) => {
    const y = new i.Mesh(new i.TorusGeometry(S.r, 0.035, 8, 40, S.arc), x);
    y.name = `deformation_zone_${R}`, y.rotation.x = Math.PI / 2, y.rotation.z = -S.at - S.arc / 2, y.position.y = S.y, d.push(y), E.add(y);
  });
  const v = (S, R, y) => Math.max(0, Math.min(1, (S - R) / (y - R)));
  function b(S, R, y) {
    if (e.visible = R > 5e-3, !e.visible) return;
    const w = v(R, 0, 0.45), g = v(R, 0.15, 0.6), A = v(R, 0.35, 0.85), P = v(R, 0.55, 1), C = v(R, 0.7, 1);
    r.opacity = 0.85 * w, a.opacity = 0.5 * g, m.opacity = 0.9 * P;
    for (let W = 0; W < t; W++) {
      const X = (S * 0.09 - W / t) % 1, I = Math.min(X < 0 ? X + 1 : X, 1 - (X < 0 ? X + 1 : X)), V = Math.exp(-Math.pow(I / 0.18, 2));
      f[W].opacity = A * (0.2 + 0.55 * V * (0.25 + 0.75 * y));
    }
    const L = 0.5 + 0.5 * Math.sin(S * 0.55);
    d.forEach((W, X) => {
      const I = 0.5 + 0.5 * Math.sin(S * 0.5 + X * 1.7);
      W.material, W.scale.setScalar(1 + 6e-3 * I * y);
    }), x.opacity = C * (0.25 + 0.45 * L * (0.3 + 0.7 * y)), n.scale.setScalar(1 + 35e-4 * Math.sin(S * 0.7) * y);
  }
  return { group: e, zoneGroup: E, update: b };
}
const Gd = `<div id="gl"></div>
  <div id="veil"></div>
  <svg id="wires" aria-hidden="true"></svg>

  <div id="ui">
    <header id="head">
      <h1 class="halo">¿Por qué existe <span class="brand-vizu">VIZU</span>tire?</h1>
      <p class="sub halo" id="sub">Un neumático OTR no solo se desgasta.</p>
    </header>

    <nav id="rail" aria-label="Explorar el neumático"></nav>

    <div id="panel" aria-live="polite">
      <div class="k fade" id="p-k"></div>
      <h2 class="fade" id="p-h"></h2>
      <p class="fade" id="p-b"></p>
      <p class="q fade" id="p-q"></p>
      <div class="list fade" id="p-l"></div>
    </div>

    <div id="marks"></div>

    <div id="gap">
      <div class="pair">
        <div class="col a">
          <h3>Lo que podemos ver</h3>
          <ul><li>Presión</li><li>Temperatura</li><li>Desgaste</li><li>Daños visibles</li><li>Horas de operación</li></ul>
        </div>
        <div class="col b">
          <h3>Lo que está ocurriendo</h3>
          <ul><li>Respuesta estructural</li><li>Evolución estructural</li><li>Efecto de la operación</li></ul>
        </div>
      </div>
      <p class="close">VIZUtire nace de esa brecha.</p>
    </div>

    <div id="hint">Seleccione un concepto · o continúe con scroll</div>
  </div>`;
function zd(i) {
  const e = i;
  e.classList.add("vzt-explorer");
  const t = [];
  let n = !1;
  e.innerHTML = '<div class="vzt-stage">' + Gd + '</div><div class="vzt-scroller" aria-hidden="true"></div>';
  const r = innerWidth <= 900, s = matchMedia("(prefers-reduced-motion: reduce)").matches, a = (Y, K = 0, ie = 1) => Math.min(ie, Math.max(K, Y)), o = (Y, K, ie) => Y + (K - Y) * ie, c = (Y) => Y * Y * (3 - 2 * Y), l = (Y, K, ie) => c(a((Y - K) / (ie - K || 1e-6))), f = [
    {
      id: "inicio",
      cta: "¿Por qué existe VIZUtire?",
      k: "",
      h: "",
      b: "",
      sub: "Un neumático OTR no solo se desgasta."
    },
    {
      id: "carga",
      cta: "Carga",
      k: "",
      h: "Carga",
      b: "Durante cada ciclo de operación, el neumático soporta cargas que generan una respuesta en su estructura."
    },
    {
      id: "deformacion",
      cta: "Deformación",
      k: "",
      h: "Deformación",
      b: "Cada ciclo modifica la respuesta del neumático y contribuye a su evolución estructural."
    },
    {
      id: "impacto",
      cta: "Impacto",
      k: "",
      h: "Impacto",
      b: "Los impactos forman parte de las condiciones a las que el neumático está sometido durante la operación."
    },
    {
      id: "condiciones",
      cta: "Condiciones de operación",
      k: "",
      h: "Condiciones de operación",
      b: "La operación no es una sola variable: es la combinación de todas ellas actuando al mismo tiempo.",
      list: ["Carga", "Velocidad", "Terreno", "Temperatura", "Ciclos"]
    },
    {
      id: "visible",
      cta: "Lo visible",
      k: "Dimensión evaluable",
      h: "Lo visible",
      b: "Gran parte de la gestión tradicional del neumático se concentra en lo que podemos evaluar directamente.",
      marks: !0
    },
    {
      id: "estructural",
      cta: "Lo estructural",
      k: "Dimensión menos visible",
      h: "",
      q: "¿Cómo está evolucionando estructuralmente el neumático como consecuencia de la operación?"
    },
    { id: "brecha", cta: "La brecha", k: "", h: "", gap: !0 },
    {
      id: "cierre",
      cta: "Por qué existe VIZUtire",
      k: "",
      h: "",
      b: "Porque conocer el estado visible de un neumático no necesariamente significa conocer su estado estructural.",
      q: "VIZUtire existe para hacer visible esa dimensión de la operación.",
      sub: ""
    }
  ], p = [
    { l: "Presión", v: () => (6.9 + Math.sin(C / 1600) * 0.05).toFixed(2) + " bar", ang: 163, x: "left:47vw;top:23%", xm: "right:4vw;top:18%" },
    { l: "Temperatura", v: () => (78 + Math.sin(C / 1300) * 3).toFixed(0) + " °C", ang: 184, x: "left:46vw;top:45%", xm: "right:4vw;top:29%" },
    { l: "Desgaste", v: () => "41 %", ang: 203, x: "left:48vw;bottom:26%", xm: "right:4vw;top:40%" },
    { l: "Daños visibles", v: () => "Nivel 1", ang: 17, x: "right:2vw;top:23%", xm: "right:4vw;top:51%", r: !0 },
    { l: "Horas de operación", v: () => "4 820 h", ang: -2, x: "right:1.5vw;top:45%", xm: "right:4vw;top:62%", r: !0 },
    { l: "Condición superficial", v: () => "Regular", ang: -22, x: "right:2vw;bottom:26%", xm: "right:4vw;top:73%", r: !0 }
  ], u = e.querySelector("#rail"), m = e.querySelector("#marks"), x = e.querySelector("#gap"), E = e.querySelector("#sub"), d = e.querySelector("#hint"), h = {
    k: e.querySelector("#p-k"),
    h: e.querySelector("#p-h"),
    b: e.querySelector("#p-b"),
    q: e.querySelector("#p-q"),
    l: e.querySelector("#p-l")
  }, v = e.querySelector("#ui"), b = f.slice(1).map((Y, K) => {
    const ie = document.createElement("button");
    return ie.className = "cta", ie.type = "button", ie.dataset.i = String(K + 1), ie.innerHTML = '<span class="bar"></span><span class="t"></span>', ie.querySelector(".t").textContent = Y.cta, ie.addEventListener("click", () => de(K + 1, !0)), u.appendChild(ie), ie;
  }), S = p.map((Y) => {
    const K = document.createElement("div");
    return K.className = "mark" + (Y.r ? " r" : ""), K.setAttribute("style", r ? Y.xm : Y.x), K.innerHTML = "<span></span><em></em>", m.appendChild(K), K;
  }), R = e.querySelector(".vzt-scroller"), y = f.map((Y, K) => {
    const ie = document.createElement("div");
    return ie.style.height = "100svh", ie.dataset.i = String(K), R.appendChild(ie), ie;
  });
  let w, g = !0;
  try {
    w = new uo({ antialias: !0, alpha: !1, powerPreference: "high-performance" });
  } catch (Y) {
    g = !1, console.warn("WebGL no disponible; se muestra la narrativa sin el modelo 3D.", Y), e.classList.add("no-webgl"), f.forEach((K, ie) => {
      ie && et(K);
    });
  }
  let A = 0, P = !1, C = performance.now(), L = 0, W = -1, X = 0, I = 99, V = -1, q = null, ne = 0;
  if (g) {
    let dt = function() {
      const se = document.createElement("canvas");
      se.width = se.height = 128;
      const Pe = se.getContext("2d"), Ke = Pe.createRadialGradient(128 / 2, 128 / 2, 0, 128 / 2, 128 / 2, 128 / 2);
      Ke.addColorStop(0, "rgba(255,255,255,0.92)"), Ke.addColorStop(0.42, "rgba(255,255,255,0.42)"), Ke.addColorStop(1, "rgba(255,255,255,0)"), Pe.fillStyle = Ke, Pe.fillRect(0, 0, 128, 128);
      const yt = new ds(se);
      return yt.minFilter = 1006, yt.magFilter = 1006, yt;
    }, he = function(pe, se, Pe) {
      const Ke = ke.find((yt) => yt.life <= 0);
      Ke && (Ke.life = 1e-4, Ke.ttl = 0.85 + Math.random() * 0.7, Ke.x = pe + (Math.random() - 0.35) * 1.5, Ke.z = se * 0.35 + 0.72 + Math.random() * 0.62, Ke.y = 0.04, Ke.vx = 0.1 + Math.random() * 0.22, Ke.vz = 0.12 + Math.random() * 0.26, Ke.vy = (0.16 + Math.random() * 0.16) * (0.7 + Pe), Ke.size = 0.22 + Math.random() * 0.26);
    }, ee = function(pe) {
      const se = 1 - c(a((Math.abs(pe.x) - 4.4) / 1.6));
      pe.m.position.set(pe.x * Ce, pe.y * Ce, pe.z * Ce), pe.m.scale.setScalar(pe.size * Ce * se);
    }, oe = function(pe) {
      pe.size = 0.055 + Math.random() * 0.16, pe.z = Math.random() < 0.46 ? (Math.random() * 2 - 1) * 0.46 : (Math.random() * 2 - 1) * 1.9, pe.y = pe.size * 0.62, pe.vx = 0, pe.vy = 0, pe.vz = 0, pe.sink = 0, pe.hit = !1, pe.m.geometry = T[Math.random() * 3 | 0], pe.m.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
    }, D = function() {
      const pe = innerWidth / innerHeight, se = 0.69 * 7.4 * pe;
      Ce = Math.max(0.3, Math.min(1, 0.78 * se / 3.56)), xe.scale.setScalar(Ce);
    }, ue = function() {
      const pe = f[L].id, se = X;
      if (H.camZ = 7.4, H.camY = 2.05, H.az = r ? 0.62 : 0.76, H.rise = -0.3, H.transp = 1, H.inner = 0, H.motion = 0, H.load = 0, H.oval = 0, H.spin = s ? 8e-3 : 0.03, pe === "inicio" && (H.camZ = r ? 6.6 : 6.9, H.rise = -0.34), pe === "carga") {
        const Pe = l(se, 0.05, 0.85) * (1 - l(se, 2.5, 4.4) * 0.72);
        H.load = Pe, H.oval = Pe * 0.22, H.camZ = o(7, 6.5, l(se, 0, 1.1)), H.rise = -0.26, H.motion = Pe * 0.45;
      }
      if (pe === "deformacion") {
        const Pe = l(se, 0.1, 1.2) * (1 - l(se, 4.6, 6.4) * 0.55);
        H.oval = Pe * (0.72 + 0.28 * Math.sin(se * 1.15)), H.load = Pe * 0.28, H.camZ = 6.8, H.rise = -0.28, H.motion = Pe * 0.7, H.spin = s ? 0.01 : 0.05;
      }
      if (pe === "impacto") {
        if (se > 0.35) {
          const Pe = Math.floor((se - 0.35) / 3.2);
          Pe !== V && (V = Pe, I = 0);
        }
        H.camZ = 6.7, H.rise = -0.24, H.load = 0.18 * l(se, 0.1, 1), H.motion = 0.5 * l(se, 0.1, 1);
      }
      if (pe === "condiciones") {
        const Pe = l(se, 0.2, 1.4);
        H.load = Pe * (0.34 + 0.2 * Math.sin(se * 0.85)), H.oval = Pe * (0.24 + 0.16 * Math.sin(se * 0.55 + 1.3)), H.camZ = 7.5, H.rise = -0.3, H.motion = Pe * 0.62, H.spin = s ? 0.012 : 0.07;
      }
      pe === "visible" && (H.camZ = 7.6, H.rise = -0.26, H.transp = 1, H.inner = 0, H.spin = s ? 8e-3 : 0.025), pe === "estructural" && (H.camZ = o(7.2, r ? 6.2 : 5.9, l(se, 0.2, 2.6)), H.rise = -0.24, H.transp = o(1, 0.13, l(se, 0.3, 2.2)), H.inner = l(se, 0.5, 3.2), H.motion = l(se, 1.8, 3.6), H.spin = s ? 6e-3 : 0.018), pe === "brecha" && (H.camZ = r ? 7 : 6.8, H.rise = -0.28, H.transp = 0.34, H.inner = 1, H.motion = 1 - l(se, 1.6, 3.4), H.spin = s ? 4e-3 : 0.012), pe === "cierre" && (H.camZ = o(6.9, 7.6, l(se, 0.4, 3)), H.rise = -0.32, H.transp = o(0.34, 1, l(se, 0.2, 2.4)), H.inner = (1 - l(se, 0.3, 2.6)) * 0.8, H.spin = s ? 4e-3 : 0.014), H.spin = Math.min(s ? H.spin * 4 : H.spin * 12, 0.52);
    }, mt = function() {
      const pe = f[L].marks && innerWidth > 1180;
      for (let se = 0; se < Ue.length; se++) {
        const Pe = Ue[se], Ke = S[se];
        if (!(pe && Ke.classList.contains("on"))) {
          Pe.style.strokeOpacity = 0;
          continue;
        }
        const Vt = Ke.getBoundingClientRect();
        if (!Vt.width) {
          Pe.style.strokeOpacity = 0;
          continue;
        }
        const Nt = !p[se].r ? Vt.right + 9 : Vt.left - 9, M = Vt.top + Vt.height / 2, U = p[se].ang * Math.PI / 180;
        Te.set(Math.cos(U) * 1.78 * Ce, (1.78 + Math.sin(U) * 1.78) * Ce, 0).project(we), Pe.setAttribute("x1", Nt.toFixed(1)), Pe.setAttribute("y1", M.toFixed(1)), Pe.setAttribute("x2", ((Te.x * 0.5 + 0.5) * innerWidth).toFixed(1)), Pe.setAttribute("y2", ((-Te.y * 0.5 + 0.5) * innerHeight).toFixed(1)), Pe.style.strokeOpacity = 0.32;
      }
    }, gi = function(pe) {
      if (!P) return;
      C = pe;
      const se = Math.min(0.05, (pe - zn) / 1e3);
      zn = pe, re(), X += se, ue();
      const Pe = 1 - Math.pow(15e-4, se);
      for (const O of Object.keys(H)) Z[O] = o(Z[O], H[O], Pe);
      I += se;
      const Ke = I < 1.7 && !s ? Math.sin(I * 24) * Math.exp(-I * 3.2) : 0;
      ve += se * Z.spin, J.rotation.y = ve;
      const yt = Z.spin * je * Kt;
      Gt += yt * se, Gn += -nn * 128 * se, Gn *= Math.pow(9e-4, se), nn += Gn * se, nn = Math.max(-0.055, Math.min(0.085, nn));
      const Vt = 3.4, wt = je + nn;
      let Nt = 0;
      for (const O of j) {
        const ge = O.size * 0.62, Ae = Math.abs(O.z) < 0.55, Ne = O.y <= ge - O.sink + 1e-3;
        O.vx += (yt - O.vx) * Math.min(1, se * (Ne ? 7 : 1.4)), O.vy -= Vt * se, O.vz *= Math.pow(4e-3, se), O.x += O.vx * se, O.y += O.vy * se, O.z += O.vz * se;
        let De = 0;
        if (Ae) {
          const Qe = O.x, ft = O.y - wt, ut = Math.hypot(Qe, ft) || 1e-4;
          if (De = je + ge * 0.72 - ut, De > 0) {
            const it = Qe / ut, Et = ft / ut, Me = Math.min(De, ge * 0.55);
            O.x += it * (De - Me * 0.5), O.y += Et * (De - Me * 0.5), O.sink = Math.max(O.sink, Me * 0.7), O.vx += (yt * 1.9 - O.vx) * Math.min(1, De * 9), O.vy += Math.max(0, Et) * De * 5.4 + De * 0.8;
            const Dt = O.z / 0.55;
            O.vz = a(O.vz + Math.sign(Dt || 1) * De * 0.42 * (0.4 + Math.abs(Dt) * 0.6), -0.3, 0.3), Gn += De * (0.2 + O.size * 1.1), Nt = Math.max(Nt, De / (ge + 1e-4)), O.hit || (O.hit = !0, he(O.x, O.z, 1.2 + O.size * 3), he(O.x, O.z, 0.8));
          }
        }
        O.hit && De <= 0 && (O.hit = !1);
        const Re = ge - O.sink;
        O.y < Re && (O.y = Re, O.vy < -0.25 && he(O.x, O.z, 0.5), O.vy = -O.vy * 0.22), O.sink *= Math.pow(0.55, se), O.x > _ / 2 ? (O.x -= _, oe(O)) : O.x < -_ / 2 && (O.x += _, oe(O)), ee(O);
      }
      F.scale.setScalar((1.5 + Nt * 0.7) * Ce), F.position.set(0.06 * Ce, 0.01, 1 * Ce), F.material.opacity = (0.13 + Math.min(0.24, Math.abs(yt) * 0.42) + Nt * 0.2) * (1 - Z.inner * 0.75), tt += se * (0.5 + Math.abs(yt) * 1.6), tt > 0.14 && (tt = 0, he(0.06, (Math.random() - 0.5) * 0.9, 0.5));
      for (const O of ke) {
        if (O.life <= 0) {
          O.sp.visible && (O.sp.visible = !1);
          continue;
        }
        O.life += se;
        const ge = O.life / O.ttl;
        if (ge >= 1) {
          O.life = 0, O.sp.visible = !1;
          continue;
        }
        O.x += (O.vx + yt * 0.35) * se, O.z += O.vz * se, O.vz *= Math.pow(0.25, se), O.y = Math.min(0.5, O.y + O.vy * se), O.vy *= Math.pow(0.12, se), O.sp.visible = !0, O.sp.position.set(O.x * Ce, O.y * Ce, O.z * Ce), O.sp.scale.setScalar((O.size + ge * 0.42) * Ce), O.sp.material.opacity = Math.sin(Math.PI * ge) * 0.34 * (1 - Z.inner * 0.8);
      }
      const M = Z.oval * 0.028 + Ke * 0.011;
      J.scale.set(1 + M, 1, 1 - M);
      const U = Z.load * 0.017 + Math.abs(Ke) * 7e-3;
      $.scale.set(1 + U * 0.6, 1 - U, 1), $.position.y = 1.78 * (1 - U) + nn, xe.rotation.y = Ke * 7e-3, xe.position.x = Ke * 0.02;
      const k = Z.transp;
      Ie.forEach((O) => {
        O.transparent = k < 0.99, O.opacity = k, O.depthWrite = k > 0.75;
      }), Ge.forEach((O) => {
        const ge = o(1, 0.4, 1 - k);
        O.transparent = ge < 0.99, O.opacity = ge;
      }), ce.update(pe / 1e3, Z.inner, Z.motion);
      const G = (r ? 1.15 : 1.72) * Ce, z = -Math.cos(Z.az) * G, me = Math.sin(Z.az) * G, Se = r ? 0.95 * Ce : 0;
      we.fov = r ? 42 : 38, we.position.set(Math.sin(Z.az) * Z.camZ + z, Z.camY * Ce + (1 - Ce) * 0.6, Math.cos(Z.az) * Z.camZ + me), we.lookAt(z, (1.78 - Z.rise) * Ce + Se, me), we.updateProjectionMatrix(), ot.opacity = 1 - Z.inner * 0.72, ot.transparent = ot.opacity < 0.99, le.material.opacity = 1 - Z.inner * 0.8, mt(), w.render(ie, we), A = requestAnimationFrame(gi);
    }, zt = function(pe) {
      pe !== P && (P = pe, pe ? (zn = performance.now(), A = requestAnimationFrame(gi)) : cancelAnimationFrame(A));
    };
    const Y = e.querySelector("#gl"), K = 2;
    w.setPixelRatio(Math.min(devicePixelRatio || 1, K)), w.setSize(innerWidth, innerHeight, !0), w.shadowMap.enabled = !r, w.shadowMap.type = 1, w.toneMapping = 4, w.toneMappingExposure = 1.12, w.outputColorSpace = Bt, Y.appendChild(w.domElement);
    const ie = new Ga();
    ie.background = new Xe(15921646), ie.fog = new yr(15921646, 14, 30);
    const we = new Wt(38, innerWidth / innerHeight, 0.5, 60);
    ie.add(new Qa(16777215, 12564908, 0.85));
    const Ee = new ui(16183784, 2.35);
    Ee.position.set(5.5, 7.8, 6.5), Ee.castShadow = !r, Ee.shadow.mapSize.set(r ? 1024 : 2048, r ? 1024 : 2048), Ee.shadow.radius = r ? 1.6 : 2.2, Ee.shadow.camera.left = -3.2, Ee.shadow.camera.right = 3.2, Ee.shadow.camera.top = 4.2, Ee.shadow.camera.bottom = -0.4, Ee.shadow.camera.near = 2, Ee.shadow.camera.far = 20, Ee.shadow.bias = -6e-4, Ee.shadow.normalBias = 0.02, ie.add(Ee);
    const ct = new ui(10337487, 0.8);
    ct.position.set(-7.5, 2.6, 3.5), ie.add(ct);
    const He = new ui(14674415, 1.5);
    He.position.set(-2.8, 4.2, -7.5), ie.add(He);
    const Je = new ui(15789800, 0.7);
    Je.position.set(2.8, 1, 8), ie.add(Je);
    const rt = new ui(14210248, 0.5);
    rt.position.set(1, -4, 3), ie.add(rt);
    const ze = new Xt(new mi(60, 60), new qa({ opacity: 0.11 }));
    ze.rotation.x = -Math.PI / 2, ze.receiveShadow = !0, ie.add(ze);
    const gt = w.capabilities.getMaxAnisotropy(), Pt = dt(), F = new hs(new _r({
      map: Pt,
      color: 10655100,
      transparent: !0,
      opacity: 0.3,
      depthWrite: !1
    }));
    F.name = "dust_bed", F.center.set(0.5, 0.18), ie.add(F);
    const xt = r ? 8 : 14, ke = [];
    for (let pe = 0; pe < xt; pe++) {
      const se = new hs(new _r({
        map: Pt,
        color: 11576459,
        transparent: !0,
        opacity: 0,
        depthWrite: !1
      }));
      se.name = "dust_puff_" + pe, se.visible = !1, ie.add(se), ke.push({ sp: se, life: 0, ttl: 1, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, size: 0.3 });
    }
    let tt = 0;
    const ot = new $a({
      name: "mine_rock",
      color: 8156779,
      roughness: 0.9,
      metalness: 0,
      flatShading: !0
    }), T = [0, 1, 2].map((pe) => {
      const se = new Rr(1, 0), Pe = se.attributes.position;
      let Ke = 7 + pe * 53;
      const yt = () => (Ke = Ke * 1103515245 + 12345 & 2147483647) / 2147483647, Vt = /* @__PURE__ */ new Map();
      for (let wt = 0; wt < Pe.count; wt++) {
        const Nt = Pe.getX(wt).toFixed(4) + "|" + Pe.getY(wt).toFixed(4) + "|" + Pe.getZ(wt).toFixed(4);
        Vt.has(Nt) || Vt.set(Nt, [0.8 + yt() * 0.34, 0.6 + yt() * 0.3, 0.8 + yt() * 0.34]);
      }
      for (let wt = 0; wt < Pe.count; wt++) {
        const Nt = Pe.getX(wt), M = Pe.getY(wt), U = Pe.getZ(wt), k = Vt.get(Nt.toFixed(4) + "|" + M.toFixed(4) + "|" + U.toFixed(4));
        Pe.setXYZ(wt, Nt * k[0], M * k[1], U * k[2]);
      }
      return Pe.needsUpdate = !0, se.computeVertexNormals(), se;
    }), _ = 11, B = r ? 8 : 12, j = [];
    for (let pe = 0; pe < B; pe++) {
      const se = new Xt(T[pe % 3], ot);
      se.name = "rock_" + pe, se.castShadow = !r, se.receiveShadow = !0;
      const Pe = {
        m: se,
        size: 0.055 + Math.random() * 0.16,
        x: -_ / 2 + (pe + Math.random() * 0.7) * (_ / B),
        y: 0,
        z: Math.random() < 0.46 ? (Math.random() * 2 - 1) * 0.46 : (Math.random() * 2 - 1) * 1.9,
        vx: 0,
        vy: 0,
        vz: 0,
        sink: 0,
        hit: !1
      };
      Pe.y = Pe.size * 0.62, se.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6), j.push(Pe), ie.add(se);
    }
    const le = new Xt(new br(1.5, 48), (() => {
      const se = document.createElement("canvas");
      se.width = se.height = 128;
      const Pe = se.getContext("2d"), Ke = Pe.createRadialGradient(128 / 2, 128 / 2, 0, 128 / 2, 128 / 2, 128 / 2);
      return Ke.addColorStop(0, "rgba(24,22,18,0.62)"), Ke.addColorStop(0.45, "rgba(30,27,22,0.30)"), Ke.addColorStop(1, "rgba(30,27,22,0)"), Pe.fillStyle = Ke, Pe.fillRect(0, 0, 128, 128), new Er({ map: new ds(se), transparent: !0, depthWrite: !1 });
    })());
    le.name = "contact_ao", le.rotation.x = -Math.PI / 2, le.position.y = 6e-3, le.scale.set(1, 0.42, 1), ie.add(le);
    const { root: $, tire: J, materials: fe } = ho(Da, { detail: !r, anisotropy: gt });
    $.traverse((pe) => {
      pe.isMesh && (pe.castShadow = !0, pe.receiveShadow = !0);
    });
    const xe = new Nn();
    xe.add($), ie.add(xe);
    const ce = Od(Da);
    J.add(ce.group);
    const ae = new Nn();
    if (ae.rotation.x = Math.PI / 2, ae.add(ce.zoneGroup), $.add(ae), ce.group.visible = !1, r) {
      const pe = ce.group.getObjectByName("radial_cords");
      pe && pe.children.forEach((se, Pe) => {
        Pe % 2 && (se.visible = !1);
      });
    }
    const Ie = [fe.tread, fe.sidewall, fe.groove], Ge = [fe.rim, fe.hub, fe.accent];
    let Ce = 1;
    D(), j.forEach((pe) => ee(pe));
    const H = { camZ: 7.4, camY: 2.05, az: 0.76, rise: -0.3, transp: 1, inner: 0, motion: 0, spin: 0, load: 0, oval: 0 }, Z = { ...H };
    let ve = 0;
    const te = e.querySelector("#wires"), Te = new N(), Ue = S.map(() => {
      const pe = document.createElementNS("http://www.w3.org/2000/svg", "line");
      return te.appendChild(pe), pe;
    }), je = 1.78, Kt = 1;
    let Gt = 0, nn = 0, Gn = 0, zn = performance.now();
    window.__vztDebug = { rocks: j, tire: J, scene: ie, get travel() {
      return Gt;
    } }, t.push(() => {
      w.dispose(), delete window.__vztDebug;
    }), zt(!0);
    const Vn = () => zt(!document.hidden);
    document.addEventListener("visibilitychange", Vn), t.push(() => {
      zt(!1), document.removeEventListener("visibilitychange", Vn);
    });
    let kn = 0;
    const Hn = () => {
      clearTimeout(kn), kn = setTimeout(() => {
        w.setPixelRatio(Math.min(devicePixelRatio || 1, K)), w.setSize(innerWidth, innerHeight, !0), we.aspect = innerWidth / innerHeight, we.updateProjectionMatrix(), D();
      }, 120);
    }, Pn = () => setTimeout(Hn, 260);
    addEventListener("resize", Hn), addEventListener("orientationchange", Pn), t.push(() => {
      clearTimeout(kn), removeEventListener("resize", Hn), removeEventListener("orientationchange", Pn);
    }), w.domElement.addEventListener("webglcontextlost", (pe) => {
      pe.preventDefault(), zt(!1);
    }), w.domElement.addEventListener("webglcontextrestored", () => zt(!0));
    let xi = 0, Wn = performance.now(), vi = !1;
    (function pe() {
      if (n) return;
      if (!P) return void setTimeout(pe, 400);
      xi++;
      const se = performance.now() - Wn;
      !vi && se > 2600 && (vi = !0, xi / (se / 1e3) < 28 && (w.setPixelRatio(Math.min(devicePixelRatio || 1, 1.25)), w.shadowMap.enabled = !1)), requestAnimationFrame(pe);
    })();
  }
  function re() {
    if (q !== null)
      if (Math.abs(scrollY - q) < 6 || C - ne > 2600) q = null;
      else return;
    const Y = innerHeight * 0.5;
    let K = 0;
    for (let ie = 0; ie < y.length; ie++)
      Y >= y[ie].getBoundingClientRect().top && (K = ie);
    K !== L && de(K, !1);
  }
  function de(Y, K) {
    Y === L && W === L || (L = Y, W = Y, X = 0, I = 99, V = -1, be(f[Y]), K && (q = y[Y].getBoundingClientRect().top + scrollY, ne = performance.now(), scrollTo({ top: q, behavior: s ? "auto" : "smooth" })));
  }
  let ye = [];
  function be(Y) {
    v.dataset.state = Y.id, b.forEach((K) => K.setAttribute("aria-current", String(+K.dataset.i === L))), u.classList.toggle("has-active", L > 0), E.textContent = Y.sub !== void 0 ? Y.sub : "", E.style.opacity = Y.sub ? "1" : "0", We(h.k, Y.k), We(h.h, Y.h), We(h.b, Y.b), We(h.q, Y.q), ye.forEach(clearTimeout), ye = [], h.l.innerHTML = "", h.l.classList.toggle("on", !!Y.list), (Y.list || []).forEach((K, ie) => {
      const we = document.createElement("i");
      we.textContent = K, h.l.appendChild(we), ye.push(setTimeout(() => we.classList.add("on"), s ? 0 : 260 + ie * 240));
    }), S.forEach((K, ie) => {
      K.classList.remove("on"), Y.marks && ye.push(setTimeout(() => K.classList.add("on"), s ? 0 : 220 + ie * 190));
    }), x.classList.toggle("on", !!Y.gap), d.style.opacity = L === 0 ? "1" : "0";
  }
  function We(Y, K) {
    if (!K) {
      Y.classList.remove("on"), Y.textContent = "";
      return;
    }
    Y.textContent = K, Y.classList.remove("on"), requestAnimationFrame(() => Y.classList.add("on"));
  }
  function et(Y) {
    const K = document.createElement("section");
    K.style.cssText = "max-width:66ch;margin:0 0 30px", K.innerHTML = '<h2 style="font-size:1.3rem;margin:0 0 6px;text-transform:uppercase;letter-spacing:.04em">' + (Y.h || Y.cta) + "</h2>" + (Y.b ? '<p style="margin:0 0 6px;line-height:1.6;color:#2f383d">' + Y.b + "</p>" : "") + (Y.q ? '<p style="margin:0;font-size:1.1rem;font-weight:500">' + Y.q + "</p>" : "") + (Y.list ? '<p style="margin:6px 0 0;font-family:monospace;letter-spacing:.12em;text-transform:uppercase;font-size:12px;color:#31434c">' + Y.list.join(" · ") + "</p>" : ""), v.appendChild(K);
  }
  const Oe = setInterval(() => {
    f[L].marks && S.forEach((Y, K) => {
      Y.querySelector("span").textContent = p[K].l, Y.querySelector("em").textContent = p[K].v();
    });
  }, 400);
  S.forEach((Y, K) => {
    Y.querySelector("span").textContent = p[K].l, Y.querySelector("em").textContent = p[K].v();
  });
  const Q = (Y) => {
    Y.key === "ArrowDown" || Y.key === "ArrowRight" ? L < f.length - 1 && (Y.preventDefault(), de(L + 1, !0)) : (Y.key === "ArrowUp" || Y.key === "ArrowLeft") && L > 0 && (Y.preventDefault(), de(L - 1, !0));
  };
  return addEventListener("keydown", Q), be(f[0]), g || (re = () => {
  }), t.push(() => {
    clearInterval(Oe), removeEventListener("keydown", Q);
  }), {
    destroy() {
      n = !0, ye.forEach(clearTimeout), t.forEach((Y) => {
        try {
          Y();
        } catch {
        }
      }), e.innerHTML = "", e.classList.remove("vzt-explorer", "no-webgl");
    }
  };
}
export {
  zd as createTireExplorer
};
