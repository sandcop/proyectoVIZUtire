/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ji = "184";
const on = "", Lt = "srgb", ui = "srgb-linear", di = "linear", tt = "srgb";
const Or = "300 es";
function Ja(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Yi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function pa() {
  const i = Yi("canvas");
  return i.style.display = "block", i;
}
const gs = {};
function Gr(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function ma(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function Pe(...i) {
  i = ma(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function $e(...i) {
  i = ma(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function Zi(...i) {
  const e = i.join(" ");
  e in gs || (gs[e] = !0, Pe(...i));
}
function Qa(i, e, t) {
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
const eo = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
class yn {
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
const At = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Wi = Math.PI / 180, zr = 180 / Math.PI;
function fi() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (At[i & 255] + At[i >> 8 & 255] + At[i >> 16 & 255] + At[i >> 24 & 255] + "-" + At[e & 255] + At[e >> 8 & 255] + "-" + At[e >> 16 & 15 | 64] + At[e >> 24 & 255] + "-" + At[t & 63 | 128] + At[t >> 8 & 255] + "-" + At[t >> 16 & 255] + At[t >> 24 & 255] + At[n & 255] + At[n >> 8 & 255] + At[n >> 16 & 255] + At[n >> 24 & 255]).toLowerCase();
}
function Ye(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function to(i, e) {
  return (i % e + e) % e;
}
function or(i, e, t) {
  return (1 - t) * i + t * e;
}
function ti(i, e) {
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
function Dt(i, e) {
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
const as = class as {
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
as.prototype.isVector2 = !0;
let We = as;
class Dn {
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
    let l = n[r + 0], c = n[r + 1], f = n[r + 2], m = n[r + 3], u = s[a + 0], p = s[a + 1], g = s[a + 2], S = s[a + 3];
    if (m !== S || l !== u || c !== p || f !== g) {
      let h = l * u + c * p + f * g + m * S;
      h < 0 && (u = -u, p = -p, g = -g, S = -S, h = -h);
      let d = 1 - o;
      if (h < 0.9995) {
        const M = Math.acos(h), A = Math.sin(M);
        d = Math.sin(d * M) / A, o = Math.sin(o * M) / A, l = l * d + u * o, c = c * d + p * o, f = f * d + g * o, m = m * d + S * o;
      } else {
        l = l * d + u * o, c = c * d + p * o, f = f * d + g * o, m = m * d + S * o;
        const M = 1 / Math.sqrt(l * l + c * c + f * f + m * m);
        l *= M, c *= M, f *= M, m *= M;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = f, e[t + 3] = m;
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
    const o = n[r], l = n[r + 1], c = n[r + 2], f = n[r + 3], m = s[a], u = s[a + 1], p = s[a + 2], g = s[a + 3];
    return e[t] = o * g + f * m + l * p - c * u, e[t + 1] = l * g + f * u + c * m - o * p, e[t + 2] = c * g + f * p + o * u - l * m, e[t + 3] = f * g - o * m - l * u - c * p, e;
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
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), f = o(r / 2), m = o(s / 2), u = l(n / 2), p = l(r / 2), g = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * f * m + c * p * g, this._y = c * p * m - u * f * g, this._z = c * f * g + u * p * m, this._w = c * f * m - u * p * g;
        break;
      case "YXZ":
        this._x = u * f * m + c * p * g, this._y = c * p * m - u * f * g, this._z = c * f * g - u * p * m, this._w = c * f * m + u * p * g;
        break;
      case "ZXY":
        this._x = u * f * m - c * p * g, this._y = c * p * m + u * f * g, this._z = c * f * g + u * p * m, this._w = c * f * m - u * p * g;
        break;
      case "ZYX":
        this._x = u * f * m - c * p * g, this._y = c * p * m + u * f * g, this._z = c * f * g - u * p * m, this._w = c * f * m + u * p * g;
        break;
      case "YZX":
        this._x = u * f * m + c * p * g, this._y = c * p * m + u * f * g, this._z = c * f * g - u * p * m, this._w = c * f * m - u * p * g;
        break;
      case "XZY":
        this._x = u * f * m - c * p * g, this._y = c * p * m - u * f * g, this._z = c * f * g + u * p * m, this._w = c * f * m + u * p * g;
        break;
      default:
        Pe("Quaternion: .setFromEuler() encountered an unknown order: " + a);
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
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], f = t[6], m = t[10], u = n + o + m;
    if (u > 0) {
      const p = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / p, this._x = (f - l) * p, this._y = (s - c) * p, this._z = (a - r) * p;
    } else if (n > o && n > m) {
      const p = 2 * Math.sqrt(1 + n - o - m);
      this._w = (f - l) / p, this._x = 0.25 * p, this._y = (r + a) / p, this._z = (s + c) / p;
    } else if (o > m) {
      const p = 2 * Math.sqrt(1 + o - n - m);
      this._w = (s - c) / p, this._x = (r + a) / p, this._y = 0.25 * p, this._z = (l + f) / p;
    } else {
      const p = 2 * Math.sqrt(1 + m - n - o);
      this._w = (a - r) / p, this._x = (s + c) / p, this._y = (l + f) / p, this._z = 0.25 * p;
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
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, f = t._w;
    return this._x = n * f + a * o + r * c - s * l, this._y = r * f + a * l + s * o - n * c, this._z = s * f + a * c + n * l - r * o, this._w = a * f - n * o - r * l - s * c, this._onChangeCallback(), this;
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
    let l = 1 - t;
    if (o < 0.9995) {
      const c = Math.acos(o), f = Math.sin(c);
      l = Math.sin(l * c) / f, t = Math.sin(t * c) / f, this._x = this._x * l + n * t, this._y = this._y * l + r * t, this._z = this._z * l + s * t, this._w = this._w * l + a * t, this._onChangeCallback();
    } else
      this._x = this._x * l + n * t, this._y = this._y * l + r * t, this._z = this._z * l + s * t, this._w = this._w * l + a * t, this.normalize();
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
const os = class os {
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
    return this.applyQuaternion(xs.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(xs.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * r - o * n), f = 2 * (o * t - s * r), m = 2 * (s * n - a * t);
    return this.x = t + l * c + a * m - o * f, this.y = n + l * f + o * c - s * m, this.z = r + l * m + s * f - a * c, this;
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
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
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
    return lr.copy(this).projectOnVector(e), this.sub(lr);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(lr.copy(e).multiplyScalar(2 * this.dot(e)));
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
os.prototype.isVector3 = !0;
let O = os;
const lr = /* @__PURE__ */ new O(), xs = /* @__PURE__ */ new Dn(), ls = class ls {
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
  constructor(e, t, n, r, s, a, o, l, c) {
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
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
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
  set(e, t, n, r, s, a, o, l, c) {
    const f = this.elements;
    return f[0] = e, f[1] = r, f[2] = o, f[3] = t, f[4] = s, f[5] = l, f[6] = n, f[7] = a, f[8] = c, this;
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
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], f = n[4], m = n[7], u = n[2], p = n[5], g = n[8], S = r[0], h = r[3], d = r[6], M = r[1], A = r[4], E = r[7], R = r[2], y = r[5], P = r[8];
    return s[0] = a * S + o * M + l * R, s[3] = a * h + o * A + l * y, s[6] = a * d + o * E + l * P, s[1] = c * S + f * M + m * R, s[4] = c * h + f * A + m * y, s[7] = c * d + f * E + m * P, s[2] = u * S + p * M + g * R, s[5] = u * h + p * A + g * y, s[8] = u * d + p * E + g * P, this;
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], f = e[8];
    return t * a * f - t * o * c - n * s * f + n * o * l + r * s * c - r * a * l;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], f = e[8], m = f * a - o * c, u = o * l - f * s, p = c * s - a * l, g = t * m + n * u + r * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / g;
    return e[0] = m * S, e[1] = (r * c - f * n) * S, e[2] = (o * n - r * a) * S, e[3] = u * S, e[4] = (f * t - r * l) * S, e[5] = (r * s - o * t) * S, e[6] = p * S, e[7] = (n * l - c * t) * S, e[8] = (a * t - n * s) * S, this;
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
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -r * c,
      r * l,
      -r * (-c * a + l * o) + o + t,
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
    return this.premultiply(cr.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(cr.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(cr.makeTranslation(e, t)), this;
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
ls.prototype.isMatrix3 = !0;
let Ue = ls;
const cr = /* @__PURE__ */ new Ue(), vs = /* @__PURE__ */ new Ue().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Ms = /* @__PURE__ */ new Ue().set(
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
function no() {
  const i = {
    enabled: !0,
    workingColorSpace: ui,
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
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === tt && (r.r = ln(r.r), r.g = ln(r.g), r.b = ln(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === tt && (r.r = Zn(r.r), r.g = Zn(r.g), r.b = Zn(r.b))), r;
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
      return r === on ? di : this.spaces[r].transfer;
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
      return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [ui]: {
      primaries: e,
      whitePoint: n,
      transfer: di,
      toXYZ: vs,
      fromXYZ: Ms,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: Lt },
      outputColorSpaceConfig: { drawingBufferColorSpace: Lt }
    },
    [Lt]: {
      primaries: e,
      whitePoint: n,
      transfer: tt,
      toXYZ: vs,
      fromXYZ: Ms,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: Lt }
    }
  }), i;
}
const qe = /* @__PURE__ */ no();
function ln(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Zn(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let In;
class _a {
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
      In === void 0 && (In = Yi("canvas")), In.width = e.width, In.height = e.height;
      const r = In.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = In;
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
      const t = Yi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = ln(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(ln(t[n] / 255) * 255) : t[n] = ln(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let io = 0;
class Qi {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: io++ }), this.uuid = fi(), this.data = e, this.dataReady = !0, this.version = 0;
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
          r[a].isDataTexture ? s.push(ur(r[a].image)) : s.push(ur(r[a]));
      } else
        s = ur(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ur(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? _a.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (Pe("Texture: Unable to serialize Texture."), {});
}
let ro = 0;
const dr = /* @__PURE__ */ new O();
class Tt extends yn {
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
  constructor(e = Tt.DEFAULT_IMAGE, t = Tt.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = Tt.DEFAULT_ANISOTROPY, f = on) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ro++ }), this.uuid = fi(), this.name = "", this.source = new Qi(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new We(0, 0), this.repeat = new We(1, 1), this.center = new We(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ue(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = f, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(dr).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(dr).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(dr).z;
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
        Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        Pe(`Texture.setValues(): property '${t}' does not exist.`);
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
Tt.DEFAULT_IMAGE = null;
Tt.DEFAULT_MAPPING = 300;
Tt.DEFAULT_ANISOTROPY = 1;
const cs = class cs {
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
    const l = e.elements, c = l[0], f = l[4], m = l[8], u = l[1], p = l[5], g = l[9], S = l[2], h = l[6], d = l[10];
    if (Math.abs(f - u) < 0.01 && Math.abs(m - S) < 0.01 && Math.abs(g - h) < 0.01) {
      if (Math.abs(f + u) < 0.1 && Math.abs(m + S) < 0.1 && Math.abs(g + h) < 0.1 && Math.abs(c + p + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const A = (c + 1) / 2, E = (p + 1) / 2, R = (d + 1) / 2, y = (f + u) / 4, P = (m + S) / 4, x = (g + h) / 4;
      return A > E && A > R ? A < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(A), r = y / n, s = P / n) : E > R ? E < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(E), n = y / r, s = x / r) : R < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(R), n = P / s, r = x / s), this.set(n, r, s, t), this;
    }
    let M = Math.sqrt((h - g) * (h - g) + (m - S) * (m - S) + (u - f) * (u - f));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (h - g) / M, this.y = (m - S) / M, this.z = (u - f) / M, this.w = Math.acos((c + p + d - 1) / 2), this;
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
cs.prototype.isVector4 = !0;
let dt = cs;
class ga extends yn {
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
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new dt(0, 0, e, t), this.scissorTest = !1, this.viewport = new dt(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, s = new Tt(r), a = n.count;
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
      this.textures[t].source = new Qi(r);
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
class Kt extends ga {
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
class Yr extends Tt {
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
class xa extends Tt {
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
const ji = class ji {
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
  constructor(e, t, n, r, s, a, o, l, c, f, m, u, p, g, S, h) {
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
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, f, m, u, p, g, S, h);
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
  set(e, t, n, r, s, a, o, l, c, f, m, u, p, g, S, h) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = n, d[12] = r, d[1] = s, d[5] = a, d[9] = o, d[13] = l, d[2] = c, d[6] = f, d[10] = m, d[14] = u, d[3] = p, d[7] = g, d[11] = S, d[15] = h, this;
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
    return new ji().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, r = 1 / Un.setFromMatrixColumn(e, 0).length(), s = 1 / Un.setFromMatrixColumn(e, 1).length(), a = 1 / Un.setFromMatrixColumn(e, 2).length();
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
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), f = Math.cos(s), m = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * f, p = a * m, g = o * f, S = o * m;
      t[0] = l * f, t[4] = -l * m, t[8] = c, t[1] = p + g * c, t[5] = u - S * c, t[9] = -o * l, t[2] = S - u * c, t[6] = g + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const u = l * f, p = l * m, g = c * f, S = c * m;
      t[0] = u + S * o, t[4] = g * o - p, t[8] = a * c, t[1] = a * m, t[5] = a * f, t[9] = -o, t[2] = p * o - g, t[6] = S + u * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const u = l * f, p = l * m, g = c * f, S = c * m;
      t[0] = u - S * o, t[4] = -a * m, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * f, t[9] = S - u * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const u = a * f, p = a * m, g = o * f, S = o * m;
      t[0] = l * f, t[4] = g * c - p, t[8] = u * c + S, t[1] = l * m, t[5] = S * c + u, t[9] = p * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const u = a * l, p = a * c, g = o * l, S = o * c;
      t[0] = l * f, t[4] = S - u * m, t[8] = g * m + p, t[1] = m, t[5] = a * f, t[9] = -o * f, t[2] = -c * f, t[6] = p * m + g, t[10] = u - S * m;
    } else if (e.order === "XZY") {
      const u = a * l, p = a * c, g = o * l, S = o * c;
      t[0] = l * f, t[4] = -m, t[8] = c * f, t[1] = u * m + S, t[5] = a * f, t[9] = p * m - g, t[2] = g * m - p, t[6] = o * f, t[10] = S * m + u;
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
    return this.compose(so, e, ao);
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
    return Nt.subVectors(e, t), Nt.lengthSq() === 0 && (Nt.z = 1), Nt.normalize(), pn.crossVectors(n, Nt), pn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Nt.x += 1e-4 : Nt.z += 1e-4, Nt.normalize(), pn.crossVectors(n, Nt)), pn.normalize(), _i.crossVectors(Nt, pn), r[0] = pn.x, r[4] = _i.x, r[8] = Nt.x, r[1] = pn.y, r[5] = _i.y, r[9] = Nt.y, r[2] = pn.z, r[6] = _i.z, r[10] = Nt.z, this;
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
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], f = n[1], m = n[5], u = n[9], p = n[13], g = n[2], S = n[6], h = n[10], d = n[14], M = n[3], A = n[7], E = n[11], R = n[15], y = r[0], P = r[4], x = r[8], b = r[12], L = r[1], C = r[5], B = r[9], k = r[13], W = r[2], I = r[6], z = r[10], q = r[14], te = r[3], ne = r[7], de = r[11], Me = r[15];
    return s[0] = a * y + o * L + l * W + c * te, s[4] = a * P + o * C + l * I + c * ne, s[8] = a * x + o * B + l * z + c * de, s[12] = a * b + o * k + l * q + c * Me, s[1] = f * y + m * L + u * W + p * te, s[5] = f * P + m * C + u * I + p * ne, s[9] = f * x + m * B + u * z + p * de, s[13] = f * b + m * k + u * q + p * Me, s[2] = g * y + S * L + h * W + d * te, s[6] = g * P + S * C + h * I + d * ne, s[10] = g * x + S * B + h * z + d * de, s[14] = g * b + S * k + h * q + d * Me, s[3] = M * y + A * L + E * W + R * te, s[7] = M * P + A * C + E * I + R * ne, s[11] = M * x + A * B + E * z + R * de, s[15] = M * b + A * k + E * q + R * Me, this;
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
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], f = e[2], m = e[6], u = e[10], p = e[14], g = e[3], S = e[7], h = e[11], d = e[15], M = l * p - c * u, A = o * p - c * m, E = o * u - l * m, R = a * p - c * f, y = a * u - l * f, P = a * m - o * f;
    return t * (S * M - h * A + d * E) - n * (g * M - h * R + d * y) + r * (g * A - S * R + d * P) - s * (g * E - S * y + h * P);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], f = e[8], m = e[9], u = e[10], p = e[11], g = e[12], S = e[13], h = e[14], d = e[15], M = t * o - n * a, A = t * l - r * a, E = t * c - s * a, R = n * l - r * o, y = n * c - s * o, P = r * c - s * l, x = f * S - m * g, b = f * h - u * g, L = f * d - p * g, C = m * h - u * S, B = m * d - p * S, k = u * d - p * h, W = M * k - A * B + E * C + R * L - y * b + P * x;
    if (W === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / W;
    return e[0] = (o * k - l * B + c * C) * I, e[1] = (r * B - n * k - s * C) * I, e[2] = (S * P - h * y + d * R) * I, e[3] = (u * y - m * P - p * R) * I, e[4] = (l * L - a * k - c * b) * I, e[5] = (t * k - r * L + s * b) * I, e[6] = (h * E - g * P - d * A) * I, e[7] = (f * P - u * E + p * A) * I, e[8] = (a * B - o * L + c * x) * I, e[9] = (n * L - t * B - s * x) * I, e[10] = (g * y - S * E + d * M) * I, e[11] = (m * E - f * y - p * M) * I, e[12] = (o * b - a * C - l * x) * I, e[13] = (t * C - n * b + r * x) * I, e[14] = (S * A - g * R - h * M) * I, e[15] = (f * R - m * A + u * M) * I, this;
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
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, f = s * o;
    return this.set(
      c * a + n,
      c * o - r * l,
      c * l + r * o,
      0,
      c * o + r * l,
      f * o + n,
      f * l - r * a,
      0,
      c * l - r * o,
      f * l + r * a,
      s * l * l + n,
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
    const r = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, f = a + a, m = o + o, u = s * c, p = s * f, g = s * m, S = a * f, h = a * m, d = o * m, M = l * c, A = l * f, E = l * m, R = n.x, y = n.y, P = n.z;
    return r[0] = (1 - (S + d)) * R, r[1] = (p + E) * R, r[2] = (g - A) * R, r[3] = 0, r[4] = (p - E) * y, r[5] = (1 - (u + d)) * y, r[6] = (h + M) * y, r[7] = 0, r[8] = (g + A) * P, r[9] = (h - M) * P, r[10] = (1 - (u + S)) * P, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
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
    let a = Un.set(r[0], r[1], r[2]).length();
    const o = Un.set(r[4], r[5], r[6]).length(), l = Un.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), Xt.copy(this);
    const c = 1 / a, f = 1 / o, m = 1 / l;
    return Xt.elements[0] *= c, Xt.elements[1] *= c, Xt.elements[2] *= c, Xt.elements[4] *= f, Xt.elements[5] *= f, Xt.elements[6] *= f, Xt.elements[8] *= m, Xt.elements[9] *= m, Xt.elements[10] *= m, t.setFromRotationMatrix(Xt), n.x = a, n.y = o, n.z = l, this;
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
  makePerspective(e, t, n, r, s, a, o = 2e3, l = !1) {
    const c = this.elements, f = 2 * s / (t - e), m = 2 * s / (n - r), u = (t + e) / (t - e), p = (n + r) / (n - r);
    let g, S;
    if (l)
      g = s / (a - s), S = a * s / (a - s);
    else if (o === 2e3)
      g = -(a + s) / (a - s), S = -2 * a * s / (a - s);
    else if (o === 2001)
      g = -a / (a - s), S = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = f, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = m, c[9] = p, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = S, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
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
  makeOrthographic(e, t, n, r, s, a, o = 2e3, l = !1) {
    const c = this.elements, f = 2 / (t - e), m = 2 / (n - r), u = -(t + e) / (t - e), p = -(n + r) / (n - r);
    let g, S;
    if (l)
      g = 1 / (a - s), S = a / (a - s);
    else if (o === 2e3)
      g = -2 / (a - s), S = -(a + s) / (a - s);
    else if (o === 2001)
      g = -1 / (a - s), S = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = f, c[4] = 0, c[8] = 0, c[12] = u, c[1] = 0, c[5] = m, c[9] = 0, c[13] = p, c[2] = 0, c[6] = 0, c[10] = g, c[14] = S, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
ji.prototype.isMatrix4 = !0;
let ut = ji;
const Un = /* @__PURE__ */ new O(), Xt = /* @__PURE__ */ new ut(), so = /* @__PURE__ */ new O(0, 0, 0), ao = /* @__PURE__ */ new O(1, 1, 1), pn = /* @__PURE__ */ new O(), _i = /* @__PURE__ */ new O(), Nt = /* @__PURE__ */ new O(), Ss = /* @__PURE__ */ new ut(), ys = /* @__PURE__ */ new Dn();
class cn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = cn.DEFAULT_ORDER) {
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
    const r = e.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], f = r[9], m = r[2], u = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ye(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-f, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ye(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-m, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ye(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-m, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ye(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(u, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Ye(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-f, c), this._y = Math.atan2(-m, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Ye(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-f, p), this._y = 0);
        break;
      default:
        Pe("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
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
    return Ss.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ss, t, n);
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
    return ys.setFromEuler(this), this.setFromQuaternion(ys, e);
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
cn.DEFAULT_ORDER = "XYZ";
class Zr {
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
let oo = 0;
const Es = /* @__PURE__ */ new O(), Nn = /* @__PURE__ */ new Dn(), tn = /* @__PURE__ */ new ut(), gi = /* @__PURE__ */ new O(), ni = /* @__PURE__ */ new O(), lo = /* @__PURE__ */ new O(), co = /* @__PURE__ */ new Dn(), Ts = /* @__PURE__ */ new O(1, 0, 0), bs = /* @__PURE__ */ new O(0, 1, 0), As = /* @__PURE__ */ new O(0, 0, 1), Rs = { type: "added" }, uo = { type: "removed" }, Bn = { type: "childadded", child: null }, hr = { type: "childremoved", child: null };
class xt extends yn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: oo++ }), this.uuid = fi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = xt.DEFAULT_UP.clone();
    const e = new O(), t = new cn(), n = new Dn(), r = new O(1, 1, 1);
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
        value: new ut()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Ue()
      }
    }), this.matrix = new ut(), this.matrixWorld = new ut(), this.matrixAutoUpdate = xt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Zr(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
    return Nn.setFromAxisAngle(e, t), this.quaternion.multiply(Nn), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return Nn.setFromAxisAngle(e, t), this.quaternion.premultiply(Nn), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Ts, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(bs, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(As, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Es.copy(e).applyQuaternion(this.quaternion), this.position.add(Es.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Ts, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(bs, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(As, e);
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
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(tn.copy(this.matrixWorld).invert());
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
    e.isVector3 ? gi.copy(e) : gi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ni.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? tn.lookAt(ni, gi, this.up) : tn.lookAt(gi, ni, this.up), this.quaternion.setFromRotationMatrix(tn), r && (tn.extractRotation(r.matrixWorld), Nn.setFromRotationMatrix(tn), this.quaternion.premultiply(Nn.invert()));
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
    return e === this ? ($e("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Rs), Bn.child = e, this.dispatchEvent(Bn), Bn.child = null) : $e("Object3D.add: object not an instance of THREE.Object3D.", e), this);
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
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(uo), hr.child = e, this.dispatchEvent(hr), hr.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), tn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), tn.multiply(e.parent.matrixWorld)), e.applyMatrix4(tn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Rs), Bn.child = e, this.dispatchEvent(Bn), Bn.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ni, e, lo), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ni, co, e), e;
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
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, f = l.length; c < f; c++) {
            const m = l[c];
            s(e.shapes, m);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
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
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), f = a(e.images), m = a(e.shapes), u = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), f.length > 0 && (n.images = f), m.length > 0 && (n.shapes = m), u.length > 0 && (n.skeletons = u), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const f = o[c];
        delete f.metadata, l.push(f);
      }
      return l;
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
xt.DEFAULT_UP = /* @__PURE__ */ new O(0, 1, 0);
xt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class wn extends xt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const ho = { type: "move" };
class Xi {
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
    return this._hand === null && (this._hand = new wn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new wn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new O(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new O()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new wn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new O(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new O(), this._grip.eventsEnabled = !1), this._grip;
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
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const S of e.hand.values()) {
          const h = t.getJointPose(S, n), d = this._getHandJoint(c, S);
          h !== null && (d.matrix.fromArray(h.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = h.radius), d.visible = h !== null;
        }
        const f = c.joints["index-finger-tip"], m = c.joints["thumb-tip"], u = f.position.distanceTo(m.position), p = 0.02, g = 5e-3;
        c.inputState.pinching && u > p + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && u <= p - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1, l.eventsEnabled && l.dispatchEvent({
          type: "gripUpdated",
          data: e,
          target: this
        })));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(ho)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
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
      const n = new wn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const va = {
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
}, mn = { h: 0, s: 0, l: 0 }, xi = { h: 0, s: 0, l: 0 };
function fr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class ke {
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
  setHex(e, t = Lt) {
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
    if (e = to(e, 1), t = Ye(t, 0, 1), n = Ye(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = fr(a, s, e + 1 / 3), this.g = fr(a, s, e), this.b = fr(a, s, e - 1 / 3);
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
  setStyle(e, t = Lt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && Pe("Color: Alpha component of " + e + " will be ignored.");
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
          Pe("Color: Unknown color model " + e);
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
      Pe("Color: Invalid hex color " + e);
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
  setColorName(e, t = Lt) {
    const n = va[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Pe("Color: Unknown color " + e), this;
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
    return this.r = ln(e.r), this.g = ln(e.g), this.b = ln(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Zn(e.r), this.g = Zn(e.g), this.b = Zn(e.b), this;
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
  getHex(e = Lt) {
    return qe.workingToColorSpace(Rt.copy(this), e), Math.round(Ye(Rt.r * 255, 0, 255)) * 65536 + Math.round(Ye(Rt.g * 255, 0, 255)) * 256 + Math.round(Ye(Rt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = Lt) {
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
    qe.workingToColorSpace(Rt.copy(this), t);
    const n = Rt.r, r = Rt.g, s = Rt.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const f = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const m = a - o;
      switch (c = f <= 0.5 ? m / (a + o) : m / (2 - a - o), a) {
        case n:
          l = (r - s) / m + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / m + 2;
          break;
        case s:
          l = (n - r) / m + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = f, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = qe.workingColorSpace) {
    return qe.workingToColorSpace(Rt.copy(this), t), e.r = Rt.r, e.g = Rt.g, e.b = Rt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = Lt) {
    qe.workingToColorSpace(Rt.copy(this), e);
    const t = Rt.r, n = Rt.g, r = Rt.b;
    return e !== Lt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
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
    return this.getHSL(mn), this.setHSL(mn.h + e, mn.s + t, mn.l + n);
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
    this.getHSL(mn), e.getHSL(xi);
    const n = or(mn.h, xi.h, t), r = or(mn.s, xi.s, t), s = or(mn.l, xi.l, t);
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
const Rt = /* @__PURE__ */ new ke();
ke.NAMES = va;
class er {
  /**
   * Constructs a new fog.
   *
   * @param {number|Color} color - The fog's color.
   * @param {number} [near=1] - The minimum distance to start applying fog.
   * @param {number} [far=1000] - The maximum distance at which fog stops being calculated and applied.
   */
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new ke(e), this.near = t, this.far = n;
  }
  /**
   * Returns a new fog with copied values from this instance.
   *
   * @return {Fog} A clone of this instance.
   */
  clone() {
    return new er(this.color, this.near, this.far);
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
class Ma extends xt {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new cn(), this.environmentIntensity = 1, this.environmentRotation = new cn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const qt = /* @__PURE__ */ new O(), nn = /* @__PURE__ */ new O(), pr = /* @__PURE__ */ new O(), rn = /* @__PURE__ */ new O(), On = /* @__PURE__ */ new O(), Gn = /* @__PURE__ */ new O(), ws = /* @__PURE__ */ new O(), mr = /* @__PURE__ */ new O(), _r = /* @__PURE__ */ new O(), gr = /* @__PURE__ */ new O(), xr = /* @__PURE__ */ new dt(), vr = /* @__PURE__ */ new dt(), Mr = /* @__PURE__ */ new dt();
class Gt {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new O(), t = new O(), n = new O()) {
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
    r.subVectors(n, t), qt.subVectors(e, t), r.cross(qt);
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
    qt.subVectors(r, t), nn.subVectors(n, t), pr.subVectors(e, t);
    const a = qt.dot(qt), o = qt.dot(nn), l = qt.dot(pr), c = nn.dot(nn), f = nn.dot(pr), m = a * c - o * o;
    if (m === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / m, p = (c * l - o * f) * u, g = (a * f - o * l) * u;
    return s.set(1 - p - g, g, p);
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
    return this.getBarycoord(e, t, n, r, rn) === null ? !1 : rn.x >= 0 && rn.y >= 0 && rn.x + rn.y <= 1;
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
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, rn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, rn.x), l.addScaledVector(a, rn.y), l.addScaledVector(o, rn.z), l);
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
    return xr.setScalar(0), vr.setScalar(0), Mr.setScalar(0), xr.fromBufferAttribute(e, t), vr.fromBufferAttribute(e, n), Mr.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(xr, s.x), a.addScaledVector(vr, s.y), a.addScaledVector(Mr, s.z), a;
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
    return qt.subVectors(n, t), nn.subVectors(e, t), qt.cross(nn).dot(r) < 0;
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
    return qt.subVectors(this.c, this.b), nn.subVectors(this.a, this.b), qt.cross(nn).length() * 0.5;
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
    return Gt.getNormal(this.a, this.b, this.c, e);
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
    return Gt.getBarycoord(e, this.a, this.b, this.c, t);
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
    return Gt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
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
    return Gt.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return Gt.isFrontFacing(this.a, this.b, this.c, e);
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
    On.subVectors(r, n), Gn.subVectors(s, n), mr.subVectors(e, n);
    const l = On.dot(mr), c = Gn.dot(mr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    _r.subVectors(e, r);
    const f = On.dot(_r), m = Gn.dot(_r);
    if (f >= 0 && m <= f)
      return t.copy(r);
    const u = l * m - f * c;
    if (u <= 0 && l >= 0 && f <= 0)
      return a = l / (l - f), t.copy(n).addScaledVector(On, a);
    gr.subVectors(e, s);
    const p = On.dot(gr), g = Gn.dot(gr);
    if (g >= 0 && p <= g)
      return t.copy(s);
    const S = p * c - l * g;
    if (S <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(Gn, o);
    const h = f * g - p * m;
    if (h <= 0 && m - f >= 0 && p - g >= 0)
      return ws.subVectors(s, r), o = (m - f) / (m - f + (p - g)), t.copy(r).addScaledVector(ws, o);
    const d = 1 / (h + S + u);
    return a = S * d, o = u * d, t.copy(n).addScaledVector(On, a).addScaledVector(Gn, o);
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
class $n {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new O(1 / 0, 1 / 0, 1 / 0), t = new O(-1 / 0, -1 / 0, -1 / 0)) {
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
      this.expandByPoint(Yt.fromArray(e, t));
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
      this.expandByPoint(Yt.fromBufferAttribute(e, t));
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
    const n = Yt.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(a, Yt) : Yt.fromBufferAttribute(s, a), Yt.applyMatrix4(e.matrixWorld), this.expandByPoint(Yt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), vi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), vi.copy(n.boundingBox)), vi.applyMatrix4(e.matrixWorld), this.union(vi);
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
    return this.clampPoint(e.center, Yt), Yt.distanceToSquared(e.center) <= e.radius * e.radius;
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
    this.getCenter(ii), Mi.subVectors(this.max, ii), zn.subVectors(e.a, ii), Vn.subVectors(e.b, ii), Hn.subVectors(e.c, ii), _n.subVectors(Vn, zn), gn.subVectors(Hn, Vn), En.subVectors(zn, Hn);
    let t = [
      0,
      -_n.z,
      _n.y,
      0,
      -gn.z,
      gn.y,
      0,
      -En.z,
      En.y,
      _n.z,
      0,
      -_n.x,
      gn.z,
      0,
      -gn.x,
      En.z,
      0,
      -En.x,
      -_n.y,
      _n.x,
      0,
      -gn.y,
      gn.x,
      0,
      -En.y,
      En.x,
      0
    ];
    return !Sr(t, zn, Vn, Hn, Mi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Sr(t, zn, Vn, Hn, Mi)) ? !1 : (Si.crossVectors(_n, gn), t = [Si.x, Si.y, Si.z], Sr(t, zn, Vn, Hn, Mi));
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
    return this.clampPoint(e, Yt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Yt).length() * 0.5), e;
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
    return this.isEmpty() ? this : (sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(sn), this);
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
const sn = [
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O()
], Yt = /* @__PURE__ */ new O(), vi = /* @__PURE__ */ new $n(), zn = /* @__PURE__ */ new O(), Vn = /* @__PURE__ */ new O(), Hn = /* @__PURE__ */ new O(), _n = /* @__PURE__ */ new O(), gn = /* @__PURE__ */ new O(), En = /* @__PURE__ */ new O(), ii = /* @__PURE__ */ new O(), Mi = /* @__PURE__ */ new O(), Si = /* @__PURE__ */ new O(), Tn = /* @__PURE__ */ new O();
function Sr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Tn.fromArray(i, s);
    const o = r.x * Math.abs(Tn.x) + r.y * Math.abs(Tn.y) + r.z * Math.abs(Tn.z), l = e.dot(Tn), c = t.dot(Tn), f = n.dot(Tn);
    if (Math.max(-Math.max(l, c, f), Math.min(l, c, f)) > o)
      return !1;
  }
  return !0;
}
const gt = /* @__PURE__ */ new O(), yi = /* @__PURE__ */ new We();
let fo = 0;
class kt extends yn {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: fo++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
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
        yi.fromBufferAttribute(this, t), yi.applyMatrix3(e), this.setXY(t, yi.x, yi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        gt.fromBufferAttribute(this, t), gt.applyMatrix3(e), this.setXYZ(t, gt.x, gt.y, gt.z);
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
      gt.fromBufferAttribute(this, t), gt.applyMatrix4(e), this.setXYZ(t, gt.x, gt.y, gt.z);
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
      gt.fromBufferAttribute(this, t), gt.applyNormalMatrix(e), this.setXYZ(t, gt.x, gt.y, gt.z);
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
      gt.fromBufferAttribute(this, t), gt.transformDirection(e), this.setXYZ(t, gt.x, gt.y, gt.z);
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
    return this.normalized && (n = ti(n, this.array)), n;
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
    return this.normalized && (n = Dt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ti(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = Dt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ti(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = Dt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ti(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = Dt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ti(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = Dt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
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
    return e *= this.itemSize, this.normalized && (t = Dt(t, this.array), n = Dt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
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
    return e *= this.itemSize, this.normalized && (t = Dt(t, this.array), n = Dt(n, this.array), r = Dt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
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
    return e *= this.itemSize, this.normalized && (t = Dt(t, this.array), n = Dt(n, this.array), r = Dt(r, this.array), s = Dt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
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
class Kr extends kt {
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
class $r extends kt {
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
class ct extends kt {
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
const po = /* @__PURE__ */ new $n(), ri = /* @__PURE__ */ new O(), yr = /* @__PURE__ */ new O();
class jn {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new O(), t = -1) {
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
    t !== void 0 ? n.copy(t) : po.setFromPoints(e).getCenter(n);
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
    ri.subVectors(e, this.center);
    const t = ri.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(ri, r / n), this.radius += r;
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
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (yr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ri.copy(e.center).add(yr)), this.expandByPoint(ri.copy(e.center).sub(yr))), this);
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
let mo = 0;
const Ht = /* @__PURE__ */ new ut(), Er = /* @__PURE__ */ new xt(), kn = /* @__PURE__ */ new O(), Bt = /* @__PURE__ */ new $n(), si = /* @__PURE__ */ new $n(), St = /* @__PURE__ */ new O();
class yt extends yn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: mo++ }), this.uuid = fi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(e) ? this.index = new (Ja(e) ? $r : Kr)(e, 1) : this.index = e, this;
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
      const s = new Ue().getNormalMatrix(e);
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
    return Ht.makeRotationFromQuaternion(e), this.applyMatrix4(Ht), this;
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
    return Ht.makeRotationX(e), this.applyMatrix4(Ht), this;
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
    return Ht.makeRotationY(e), this.applyMatrix4(Ht), this;
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
    return Ht.makeRotationZ(e), this.applyMatrix4(Ht), this;
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
    return Ht.makeTranslation(e, t, n), this.applyMatrix4(Ht), this;
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
    return Ht.makeScale(e, t, n), this.applyMatrix4(Ht), this;
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
    return Er.lookAt(e), Er.updateMatrix(), this.applyMatrix4(Er.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(kn).negate(), this.translate(kn.x, kn.y, kn.z), this;
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
      this.setAttribute("position", new ct(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new $n());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      $e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new O(-1 / 0, -1 / 0, -1 / 0),
        new O(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Bt.setFromBufferAttribute(s), this.morphTargetsRelative ? (St.addVectors(this.boundingBox.min, Bt.min), this.boundingBox.expandByPoint(St), St.addVectors(this.boundingBox.max, Bt.max), this.boundingBox.expandByPoint(St)) : (this.boundingBox.expandByPoint(Bt.min), this.boundingBox.expandByPoint(Bt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && $e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new jn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      $e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new O(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Bt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          si.setFromBufferAttribute(o), this.morphTargetsRelative ? (St.addVectors(Bt.min, si.min), Bt.expandByPoint(St), St.addVectors(Bt.max, si.max), Bt.expandByPoint(St)) : (Bt.expandByPoint(si.min), Bt.expandByPoint(si.max));
        }
      Bt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        St.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(St));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, f = o.count; c < f; c++)
            St.fromBufferAttribute(o, c), l && (kn.fromBufferAttribute(e, c), St.add(kn)), r = Math.max(r, n.distanceToSquared(St));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && $e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
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
      $e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new kt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let x = 0; x < n.count; x++)
      o[x] = new O(), l[x] = new O();
    const c = new O(), f = new O(), m = new O(), u = new We(), p = new We(), g = new We(), S = new O(), h = new O();
    function d(x, b, L) {
      c.fromBufferAttribute(n, x), f.fromBufferAttribute(n, b), m.fromBufferAttribute(n, L), u.fromBufferAttribute(s, x), p.fromBufferAttribute(s, b), g.fromBufferAttribute(s, L), f.sub(c), m.sub(c), p.sub(u), g.sub(u);
      const C = 1 / (p.x * g.y - g.x * p.y);
      isFinite(C) && (S.copy(f).multiplyScalar(g.y).addScaledVector(m, -p.y).multiplyScalar(C), h.copy(m).multiplyScalar(p.x).addScaledVector(f, -g.x).multiplyScalar(C), o[x].add(S), o[b].add(S), o[L].add(S), l[x].add(h), l[b].add(h), l[L].add(h));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: e.count
    }]);
    for (let x = 0, b = M.length; x < b; ++x) {
      const L = M[x], C = L.start, B = L.count;
      for (let k = C, W = C + B; k < W; k += 3)
        d(
          e.getX(k + 0),
          e.getX(k + 1),
          e.getX(k + 2)
        );
    }
    const A = new O(), E = new O(), R = new O(), y = new O();
    function P(x) {
      R.fromBufferAttribute(r, x), y.copy(R);
      const b = o[x];
      A.copy(b), A.sub(R.multiplyScalar(R.dot(b))).normalize(), E.crossVectors(y, b);
      const C = E.dot(l[x]) < 0 ? -1 : 1;
      a.setXYZW(x, A.x, A.y, A.z, C);
    }
    for (let x = 0, b = M.length; x < b; ++x) {
      const L = M[x], C = L.start, B = L.count;
      for (let k = C, W = C + B; k < W; k += 3)
        P(e.getX(k + 0)), P(e.getX(k + 1)), P(e.getX(k + 2));
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
        n = new kt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, p = n.count; u < p; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new O(), s = new O(), a = new O(), o = new O(), l = new O(), c = new O(), f = new O(), m = new O();
      if (e)
        for (let u = 0, p = e.count; u < p; u += 3) {
          const g = e.getX(u + 0), S = e.getX(u + 1), h = e.getX(u + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, S), a.fromBufferAttribute(t, h), f.subVectors(a, s), m.subVectors(r, s), f.cross(m), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, S), c.fromBufferAttribute(n, h), o.add(f), l.add(f), c.add(f), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(S, l.x, l.y, l.z), n.setXYZ(h, c.x, c.y, c.z);
        }
      else
        for (let u = 0, p = t.count; u < p; u += 3)
          r.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), f.subVectors(a, s), m.subVectors(r, s), f.cross(m), n.setXYZ(u + 0, f.x, f.y, f.z), n.setXYZ(u + 1, f.x, f.y, f.z), n.setXYZ(u + 2, f.x, f.y, f.z);
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
      St.fromBufferAttribute(e, t), St.normalize(), e.setXYZ(t, St.x, St.y, St.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, f = o.itemSize, m = o.normalized, u = new c.constructor(l.length * f);
      let p = 0, g = 0;
      for (let S = 0, h = l.length; S < h; S++) {
        o.isInterleavedBufferAttribute ? p = l[S] * o.data.stride + o.offset : p = l[S] * f;
        for (let d = 0; d < f; d++)
          u[g++] = c[p++];
      }
      return new kt(u, f, m);
    }
    if (this.index === null)
      return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new yt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let f = 0, m = c.length; f < m; f++) {
        const u = c[f], p = e(u, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
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
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], f = [];
      for (let m = 0, u = c.length; m < u; m++) {
        const p = c[m];
        f.push(p.toJSON(e.data));
      }
      f.length > 0 && (r[l] = f, s = !0);
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
    for (const c in r) {
      const f = r[c];
      this.setAttribute(c, f.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const f = [], m = s[c];
      for (let u = 0, p = m.length; u < p; u++)
        f.push(m[u].clone(t));
      this.morphAttributes[c] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, f = a.length; c < f; c++) {
      const m = a[c];
      this.addGroup(m.start, m.count, m.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
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
let _o = 0;
class un extends yn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: _o++ }), this.uuid = fi(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ke(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
          Pe(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);
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
        const l = s[o];
        delete l.metadata, a.push(l);
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
const an = /* @__PURE__ */ new O(), Tr = /* @__PURE__ */ new O(), Ei = /* @__PURE__ */ new O(), xn = /* @__PURE__ */ new O(), br = /* @__PURE__ */ new O(), Ti = /* @__PURE__ */ new O(), Ar = /* @__PURE__ */ new O();
class tr {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new O(), t = new O(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, an)), this;
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
    const t = an.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (an.copy(this.origin).addScaledVector(this.direction, t), an.distanceToSquared(e));
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
    Tr.copy(e).add(t).multiplyScalar(0.5), Ei.copy(t).sub(e).normalize(), xn.copy(this.origin).sub(Tr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Ei), o = xn.dot(this.direction), l = -xn.dot(Ei), c = xn.lengthSq(), f = Math.abs(1 - a * a);
    let m, u, p, g;
    if (f > 0)
      if (m = a * l - o, u = a * o - l, g = s * f, m >= 0)
        if (u >= -g)
          if (u <= g) {
            const S = 1 / f;
            m *= S, u *= S, p = m * (m + a * u + 2 * o) + u * (a * m + u + 2 * l) + c;
          } else
            u = s, m = Math.max(0, -(a * u + o)), p = -m * m + u * (u + 2 * l) + c;
        else
          u = -s, m = Math.max(0, -(a * u + o)), p = -m * m + u * (u + 2 * l) + c;
      else
        u <= -g ? (m = Math.max(0, -(-a * s + o)), u = m > 0 ? -s : Math.min(Math.max(-s, -l), s), p = -m * m + u * (u + 2 * l) + c) : u <= g ? (m = 0, u = Math.min(Math.max(-s, -l), s), p = u * (u + 2 * l) + c) : (m = Math.max(0, -(a * s + o)), u = m > 0 ? s : Math.min(Math.max(-s, -l), s), p = -m * m + u * (u + 2 * l) + c);
    else
      u = a > 0 ? -s : s, m = Math.max(0, -(a * u + o)), p = -m * m + u * (u + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, m), r && r.copy(Tr).addScaledVector(Ei, u), p;
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
    an.subVectors(e.center, this.origin);
    const n = an.dot(this.direction), r = an.dot(an) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
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
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, f = 1 / this.direction.y, m = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (e.min.x - u.x) * c, r = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, r = (e.min.x - u.x) * c), f >= 0 ? (s = (e.min.y - u.y) * f, a = (e.max.y - u.y) * f) : (s = (e.max.y - u.y) * f, a = (e.min.y - u.y) * f), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), m >= 0 ? (o = (e.min.z - u.z) * m, l = (e.max.z - u.z) * m) : (o = (e.max.z - u.z) * m, l = (e.min.z - u.z) * m), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, an) !== null;
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
    br.subVectors(t, e), Ti.subVectors(n, e), Ar.crossVectors(br, Ti);
    let a = this.direction.dot(Ar), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    xn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Ti.crossVectors(xn, Ti));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(br.cross(xn));
    if (c < 0 || l + c > a)
      return null;
    const f = -o * xn.dot(Ar);
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
class hi extends un {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ke(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new cn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Cs = /* @__PURE__ */ new ut(), bn = /* @__PURE__ */ new tr(), bi = /* @__PURE__ */ new jn(), Ps = /* @__PURE__ */ new O(), Ai = /* @__PURE__ */ new O(), Ri = /* @__PURE__ */ new O(), wi = /* @__PURE__ */ new O(), Rr = /* @__PURE__ */ new O(), Ci = /* @__PURE__ */ new O(), Ds = /* @__PURE__ */ new O(), Pi = /* @__PURE__ */ new O();
class zt extends xt {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new yt(), t = new hi()) {
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
      Ci.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const f = o[l], m = s[l];
        f !== 0 && (Rr.fromBufferAttribute(m, e), a ? Ci.addScaledVector(Rr, f) : Ci.addScaledVector(Rr.sub(t), f));
      }
      t.add(Ci);
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
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), bi.copy(n.boundingSphere), bi.applyMatrix4(s), bn.copy(e.ray).recast(e.near), !(bi.containsPoint(bn.origin) === !1 && (bn.intersectSphere(bi, Ps) === null || bn.origin.distanceToSquared(Ps) > (e.far - e.near) ** 2)) && (Cs.copy(s).invert(), bn.copy(e.ray).applyMatrix4(Cs), !(n.boundingBox !== null && bn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, bn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, f = s.attributes.uv1, m = s.attributes.normal, u = s.groups, p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, S = u.length; g < S; g++) {
          const h = u[g], d = a[h.materialIndex], M = Math.max(h.start, p.start), A = Math.min(o.count, Math.min(h.start + h.count, p.start + p.count));
          for (let E = M, R = A; E < R; E += 3) {
            const y = o.getX(E), P = o.getX(E + 1), x = o.getX(E + 2);
            r = Di(this, d, e, n, c, f, m, y, P, x), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = h.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), S = Math.min(o.count, p.start + p.count);
        for (let h = g, d = S; h < d; h += 3) {
          const M = o.getX(h), A = o.getX(h + 1), E = o.getX(h + 2);
          r = Di(this, a, e, n, c, f, m, M, A, E), r && (r.faceIndex = Math.floor(h / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, S = u.length; g < S; g++) {
          const h = u[g], d = a[h.materialIndex], M = Math.max(h.start, p.start), A = Math.min(l.count, Math.min(h.start + h.count, p.start + p.count));
          for (let E = M, R = A; E < R; E += 3) {
            const y = E, P = E + 1, x = E + 2;
            r = Di(this, d, e, n, c, f, m, y, P, x), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = h.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), S = Math.min(l.count, p.start + p.count);
        for (let h = g, d = S; h < d; h += 3) {
          const M = h, A = h + 1, E = h + 2;
          r = Di(this, a, e, n, c, f, m, M, A, E), r && (r.faceIndex = Math.floor(h / 3), t.push(r));
        }
      }
  }
}
function go(i, e, t, n, r, s, a, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, e.side === 0, o), l === null) return null;
  Pi.copy(o), Pi.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Pi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Pi.clone(),
    object: i
  };
}
function Di(i, e, t, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, Ai), i.getVertexPosition(l, Ri), i.getVertexPosition(c, wi);
  const f = go(i, e, t, n, Ai, Ri, wi, Ds);
  if (f) {
    const m = new O();
    Gt.getBarycoord(Ds, Ai, Ri, wi, m), r && (f.uv = Gt.getInterpolatedAttribute(r, o, l, c, m, new We())), s && (f.uv1 = Gt.getInterpolatedAttribute(s, o, l, c, m, new We())), a && (f.normal = Gt.getInterpolatedAttribute(a, o, l, c, m, new O()), f.normal.dot(n.direction) > 0 && f.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: l,
      c,
      normal: new O(),
      materialIndex: 0
    };
    Gt.getNormal(Ai, Ri, wi, u.normal), f.face = u, f.barycoord = m;
  }
  return f;
}
class Sa extends Tt {
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
  constructor(e = null, t = 1, n = 1, r, s, a, o, l, c = 1003, f = 1003, m, u) {
    super(null, a, o, l, c, f, r, s, m, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const wr = /* @__PURE__ */ new O(), xo = /* @__PURE__ */ new O(), vo = /* @__PURE__ */ new Ue();
class Mn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new O(1, 0, 0), t = 0) {
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
    const r = wr.subVectors(n, t).cross(xo.subVectors(e, t)).normalize();
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
    const r = e.delta(wr), s = this.normal.dot(r);
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
    const n = t || vo.getNormalMatrix(e), r = this.coplanarPoint(wr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const An = /* @__PURE__ */ new jn(), Mo = /* @__PURE__ */ new We(0.5, 0.5), Li = /* @__PURE__ */ new O();
class nr {
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
  constructor(e = new Mn(), t = new Mn(), n = new Mn(), r = new Mn(), s = new Mn(), a = new Mn()) {
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
    const r = this.planes, s = e.elements, a = s[0], o = s[1], l = s[2], c = s[3], f = s[4], m = s[5], u = s[6], p = s[7], g = s[8], S = s[9], h = s[10], d = s[11], M = s[12], A = s[13], E = s[14], R = s[15];
    if (r[0].setComponents(c - a, p - f, d - g, R - M).normalize(), r[1].setComponents(c + a, p + f, d + g, R + M).normalize(), r[2].setComponents(c + o, p + m, d + S, R + A).normalize(), r[3].setComponents(c - o, p - m, d - S, R - A).normalize(), n)
      r[4].setComponents(l, u, h, E).normalize(), r[5].setComponents(c - l, p - u, d - h, R - E).normalize();
    else if (r[4].setComponents(c - l, p - u, d - h, R - E).normalize(), t === 2e3)
      r[5].setComponents(c + l, p + u, d + h, R + E).normalize();
    else if (t === 2001)
      r[5].setComponents(l, u, h, E).normalize();
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
      e.boundingSphere === null && e.computeBoundingSphere(), An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(An);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    An.center.set(0, 0, 0);
    const t = Mo.distanceTo(e.center);
    return An.radius = 0.7071067811865476 + t, An.applyMatrix4(e.matrixWorld), this.intersectsSphere(An);
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
      if (Li.x = r.normal.x > 0 ? e.max.x : e.min.x, Li.y = r.normal.y > 0 ? e.max.y : e.min.y, Li.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Li) < 0)
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
class ya extends un {
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
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ke(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Ki = /* @__PURE__ */ new O(), $i = /* @__PURE__ */ new O(), Ls = /* @__PURE__ */ new ut(), ai = /* @__PURE__ */ new tr(), Fi = /* @__PURE__ */ new jn(), Cr = /* @__PURE__ */ new O(), Fs = /* @__PURE__ */ new O();
class Ea extends xt {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new yt(), t = new ya()) {
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
        Ki.fromBufferAttribute(t, r - 1), $i.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Ki.distanceTo($i);
      e.setAttribute("lineDistance", new ct(n, 1));
    } else
      Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
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
    if (n.boundingSphere === null && n.computeBoundingSphere(), Fi.copy(n.boundingSphere), Fi.applyMatrix4(r), Fi.radius += s, e.ray.intersectsSphere(Fi) === !1) return;
    Ls.copy(r).invert(), ai.copy(e.ray).applyMatrix4(Ls);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, f = n.index, u = n.attributes.position;
    if (f !== null) {
      const p = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let S = p, h = g - 1; S < h; S += c) {
        const d = f.getX(S), M = f.getX(S + 1), A = Ii(this, e, ai, l, d, M, S);
        A && t.push(A);
      }
      if (this.isLineLoop) {
        const S = f.getX(g - 1), h = f.getX(p), d = Ii(this, e, ai, l, S, h, g - 1);
        d && t.push(d);
      }
    } else {
      const p = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let S = p, h = g - 1; S < h; S += c) {
        const d = Ii(this, e, ai, l, S, S + 1, S);
        d && t.push(d);
      }
      if (this.isLineLoop) {
        const S = Ii(this, e, ai, l, g - 1, p, g - 1);
        S && t.push(S);
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
function Ii(i, e, t, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (Ki.fromBufferAttribute(o, r), $i.fromBufferAttribute(o, s), t.distanceSqToSegment(Ki, $i, Cr, Fs) > n) return;
  Cr.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(Cr);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Fs.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Is = /* @__PURE__ */ new O(), Us = /* @__PURE__ */ new O();
class So extends Ea {
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
        Is.fromBufferAttribute(t, r), Us.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Is.distanceTo(Us);
      e.setAttribute("lineDistance", new ct(n, 1));
    } else
      Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class jr extends un {
  /**
   * Constructs a new points material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ke(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Ns = /* @__PURE__ */ new ut(), Vr = /* @__PURE__ */ new tr(), Ui = /* @__PURE__ */ new jn(), Ni = /* @__PURE__ */ new O();
class Ta extends xt {
  /**
   * Constructs a new point cloud.
   *
   * @param {BufferGeometry} [geometry] - The points geometry.
   * @param {Material|Array<Material>} [material] - The points material.
   */
  constructor(e = new yt(), t = new jr()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Computes intersection points between a casted ray and this point cloud.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ui.copy(n.boundingSphere), Ui.applyMatrix4(r), Ui.radius += s, e.ray.intersectsSphere(Ui) === !1) return;
    Ns.copy(r).invert(), Vr.copy(e.ray).applyMatrix4(Ns);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, m = n.attributes.position;
    if (c !== null) {
      const u = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let g = u, S = p; g < S; g++) {
        const h = c.getX(g);
        Ni.fromBufferAttribute(m, h), Bs(Ni, h, l, r, e, t, this);
      }
    } else {
      const u = Math.max(0, a.start), p = Math.min(m.count, a.start + a.count);
      for (let g = u, S = p; g < S; g++)
        Ni.fromBufferAttribute(m, g), Bs(Ni, g, l, r, e, t, this);
    }
  }
  /**
   * Sets the values of {@link Points#morphTargetDictionary} and {@link Points#morphTargetInfluences}
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
function Bs(i, e, t, n, r, s, a) {
  const o = Vr.distanceSqToPoint(i);
  if (o < t) {
    const l = new O();
    Vr.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class Jr extends Tt {
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
  constructor(e = [], t = 301, n, r, s, a, o, l, c, f) {
    super(e, t, n, r, s, a, o, l, c, f), this.isCubeTexture = !0, this.flipY = !1;
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
class Hr extends Tt {
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
  constructor(e, t, n, r, s, a, o, l, c) {
    super(e, t, n, r, s, a, o, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Cn extends Tt {
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
  constructor(e, t, n = 1014, r, s, a, o = 1003, l = 1003, c, f = 1026, m = 1) {
    if (f !== 1026 && f !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: m };
    super(u, r, s, a, o, l, f, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Qi(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class ba extends Cn {
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
  constructor(e, t = 1014, n = 301, r, s, a = 1003, o = 1003, l, c = 1026) {
    const f = { width: e, height: e, depth: 1 }, m = [f, f, f, f, f, f];
    super(e, e, t, n, r, s, a, o, l, c), this.image = m, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
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
class Qr extends Tt {
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
class Jn extends yt {
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
    const l = [], c = [], f = [], m = [];
    let u = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new ct(c, 3)), this.setAttribute("normal", new ct(f, 3)), this.setAttribute("uv", new ct(m, 2));
    function g(S, h, d, M, A, E, R, y, P, x, b) {
      const L = E / P, C = R / x, B = E / 2, k = R / 2, W = y / 2, I = P + 1, z = x + 1;
      let q = 0, te = 0;
      const ne = new O();
      for (let de = 0; de < z; de++) {
        const Me = de * C - k;
        for (let be = 0; be < I; be++) {
          const Ze = be * L - B;
          ne[S] = Ze * M, ne[h] = Me * A, ne[d] = W, c.push(ne.x, ne.y, ne.z), ne[S] = 0, ne[h] = 0, ne[d] = y > 0 ? 1 : -1, f.push(ne.x, ne.y, ne.z), m.push(be / P), m.push(1 - de / x), q += 1;
        }
      }
      for (let de = 0; de < x; de++)
        for (let Me = 0; Me < P; Me++) {
          const be = u + Me + I * de, Ze = u + Me + I * (de + 1), Ke = u + (Me + 1) + I * (de + 1), Ne = u + (Me + 1) + I * de;
          l.push(be, Ze, Ne), l.push(Ze, Ke, Ne), te += 6;
        }
      o.addGroup(p, te, b), p += te, u += q;
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
    return new Jn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class ir extends yt {
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
    const s = [], a = [], o = [], l = [], c = new O(), f = new We();
    a.push(0, 0, 0), o.push(0, 0, 1), l.push(0.5, 0.5);
    for (let m = 0, u = 3; m <= t; m++, u += 3) {
      const p = n + m / t * r;
      c.x = e * Math.cos(p), c.y = e * Math.sin(p), a.push(c.x, c.y, c.z), o.push(0, 0, 1), f.x = (a[u] / e + 1) / 2, f.y = (a[u + 1] / e + 1) / 2, l.push(f.x, f.y);
    }
    for (let m = 1; m <= t; m++)
      s.push(m, m + 1, 0);
    this.setIndex(s), this.setAttribute("position", new ct(a, 3)), this.setAttribute("normal", new ct(o, 3)), this.setAttribute("uv", new ct(l, 2));
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
    return new ir(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class es extends yt {
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
  constructor(e = 1, t = 1, n = 1, r = 32, s = 1, a = !1, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: r,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: l
    };
    const c = this;
    r = Math.floor(r), s = Math.floor(s);
    const f = [], m = [], u = [], p = [];
    let g = 0;
    const S = [], h = n / 2;
    let d = 0;
    M(), a === !1 && (e > 0 && A(!0), t > 0 && A(!1)), this.setIndex(f), this.setAttribute("position", new ct(m, 3)), this.setAttribute("normal", new ct(u, 3)), this.setAttribute("uv", new ct(p, 2));
    function M() {
      const E = new O(), R = new O();
      let y = 0;
      const P = (t - e) / n;
      for (let x = 0; x <= s; x++) {
        const b = [], L = x / s, C = L * (t - e) + e;
        for (let B = 0; B <= r; B++) {
          const k = B / r, W = k * l + o, I = Math.sin(W), z = Math.cos(W);
          R.x = C * I, R.y = -L * n + h, R.z = C * z, m.push(R.x, R.y, R.z), E.set(I, P, z).normalize(), u.push(E.x, E.y, E.z), p.push(k, 1 - L), b.push(g++);
        }
        S.push(b);
      }
      for (let x = 0; x < r; x++)
        for (let b = 0; b < s; b++) {
          const L = S[b][x], C = S[b + 1][x], B = S[b + 1][x + 1], k = S[b][x + 1];
          (e > 0 || b !== 0) && (f.push(L, C, k), y += 3), (t > 0 || b !== s - 1) && (f.push(C, B, k), y += 3);
        }
      c.addGroup(d, y, 0), d += y;
    }
    function A(E) {
      const R = g, y = new We(), P = new O();
      let x = 0;
      const b = E === !0 ? e : t, L = E === !0 ? 1 : -1;
      for (let B = 1; B <= r; B++)
        m.push(0, h * L, 0), u.push(0, L, 0), p.push(0.5, 0.5), g++;
      const C = g;
      for (let B = 0; B <= r; B++) {
        const W = B / r * l + o, I = Math.cos(W), z = Math.sin(W);
        P.x = b * z, P.y = h * L, P.z = b * I, m.push(P.x, P.y, P.z), u.push(0, L, 0), y.x = I * 0.5 + 0.5, y.y = z * 0.5 * L + 0.5, p.push(y.x, y.y), g++;
      }
      for (let B = 0; B < r; B++) {
        const k = R + B, W = C + B;
        E === !0 ? f.push(W, W + 1, k) : f.push(W + 1, W, k), x += 3;
      }
      c.addGroup(d, x, E === !0 ? 1 : 2), d += x;
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
    return new es(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
const Bi = /* @__PURE__ */ new O(), Oi = /* @__PURE__ */ new O(), Pr = /* @__PURE__ */ new O(), Gi = /* @__PURE__ */ new Gt();
class yo extends yt {
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
      const r = Math.pow(10, 4), s = Math.cos(Wi * t), a = e.getIndex(), o = e.getAttribute("position"), l = a ? a.count : o.count, c = [0, 0, 0], f = ["a", "b", "c"], m = new Array(3), u = {}, p = [];
      for (let g = 0; g < l; g += 3) {
        a ? (c[0] = a.getX(g), c[1] = a.getX(g + 1), c[2] = a.getX(g + 2)) : (c[0] = g, c[1] = g + 1, c[2] = g + 2);
        const { a: S, b: h, c: d } = Gi;
        if (S.fromBufferAttribute(o, c[0]), h.fromBufferAttribute(o, c[1]), d.fromBufferAttribute(o, c[2]), Gi.getNormal(Pr), m[0] = `${Math.round(S.x * r)},${Math.round(S.y * r)},${Math.round(S.z * r)}`, m[1] = `${Math.round(h.x * r)},${Math.round(h.y * r)},${Math.round(h.z * r)}`, m[2] = `${Math.round(d.x * r)},${Math.round(d.y * r)},${Math.round(d.z * r)}`, !(m[0] === m[1] || m[1] === m[2] || m[2] === m[0]))
          for (let M = 0; M < 3; M++) {
            const A = (M + 1) % 3, E = m[M], R = m[A], y = Gi[f[M]], P = Gi[f[A]], x = `${E}_${R}`, b = `${R}_${E}`;
            b in u && u[b] ? (Pr.dot(u[b].normal) <= s && (p.push(y.x, y.y, y.z), p.push(P.x, P.y, P.z)), u[b] = null) : x in u || (u[x] = {
              index0: c[M],
              index1: c[A],
              normal: Pr.clone()
            });
          }
      }
      for (const g in u)
        if (u[g]) {
          const { index0: S, index1: h } = u[g];
          Bi.fromBufferAttribute(o, S), Oi.fromBufferAttribute(o, h), p.push(Bi.x, Bi.y, Bi.z), p.push(Oi.x, Oi.y, Oi.z);
        }
      this.setAttribute("position", new ct(p, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class ts extends yt {
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
  constructor(e = [new We(0, -0.5), new We(0.5, 0), new We(0, 0.5)], t = 12, n = 0, r = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: r
    }, t = Math.floor(t), r = Ye(r, 0, Math.PI * 2);
    const s = [], a = [], o = [], l = [], c = [], f = 1 / t, m = new O(), u = new We(), p = new O(), g = new O(), S = new O();
    let h = 0, d = 0;
    for (let M = 0; M <= e.length - 1; M++)
      switch (M) {
        case 0:
          h = e[M + 1].x - e[M].x, d = e[M + 1].y - e[M].y, p.x = d * 1, p.y = -h, p.z = d * 0, S.copy(p), p.normalize(), l.push(p.x, p.y, p.z);
          break;
        case e.length - 1:
          l.push(S.x, S.y, S.z);
          break;
        default:
          h = e[M + 1].x - e[M].x, d = e[M + 1].y - e[M].y, p.x = d * 1, p.y = -h, p.z = d * 0, g.copy(p), p.x += S.x, p.y += S.y, p.z += S.z, p.normalize(), l.push(p.x, p.y, p.z), S.copy(g);
      }
    for (let M = 0; M <= t; M++) {
      const A = n + M * f * r, E = Math.sin(A), R = Math.cos(A);
      for (let y = 0; y <= e.length - 1; y++) {
        m.x = e[y].x * E, m.y = e[y].y, m.z = e[y].x * R, a.push(m.x, m.y, m.z), u.x = M / t, u.y = y / (e.length - 1), o.push(u.x, u.y);
        const P = l[3 * y + 0] * E, x = l[3 * y + 1], b = l[3 * y + 0] * R;
        c.push(P, x, b);
      }
    }
    for (let M = 0; M < t; M++)
      for (let A = 0; A < e.length - 1; A++) {
        const E = A + M * e.length, R = E, y = E + e.length, P = E + e.length + 1, x = E + 1;
        s.push(R, y, x), s.push(P, x, y);
      }
    this.setIndex(s), this.setAttribute("position", new ct(a, 3)), this.setAttribute("uv", new ct(o, 2)), this.setAttribute("normal", new ct(c, 3));
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
    return new ts(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class Pn extends yt {
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
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, f = l + 1, m = e / o, u = t / l, p = [], g = [], S = [], h = [];
    for (let d = 0; d < f; d++) {
      const M = d * u - a;
      for (let A = 0; A < c; A++) {
        const E = A * m - s;
        g.push(E, -M, 0), S.push(0, 0, 1), h.push(A / o), h.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++)
      for (let M = 0; M < o; M++) {
        const A = M + c * d, E = M + c * (d + 1), R = M + 1 + c * (d + 1), y = M + 1 + c * d;
        p.push(A, E, y), p.push(E, R, y);
      }
    this.setIndex(p), this.setAttribute("position", new ct(g, 3)), this.setAttribute("normal", new ct(S, 3)), this.setAttribute("uv", new ct(h, 2));
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
    return new Pn(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class ns extends yt {
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
    const l = [], c = [], f = [], m = [], u = new O(), p = new O(), g = new O();
    for (let S = 0; S <= n; S++) {
      const h = a + S / n * o;
      for (let d = 0; d <= r; d++) {
        const M = d / r * s;
        p.x = (e + t * Math.cos(h)) * Math.cos(M), p.y = (e + t * Math.cos(h)) * Math.sin(M), p.z = t * Math.sin(h), c.push(p.x, p.y, p.z), u.x = e * Math.cos(M), u.y = e * Math.sin(M), g.subVectors(p, u).normalize(), f.push(g.x, g.y, g.z), m.push(d / r), m.push(S / n);
      }
    }
    for (let S = 1; S <= n; S++)
      for (let h = 1; h <= r; h++) {
        const d = (r + 1) * S + h - 1, M = (r + 1) * (S - 1) + h - 1, A = (r + 1) * (S - 1) + h, E = (r + 1) * S + h;
        l.push(d, M, E), l.push(M, A, E);
      }
    this.setIndex(l), this.setAttribute("position", new ct(c, 3)), this.setAttribute("normal", new ct(f, 3)), this.setAttribute("uv", new ct(m, 2));
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
    return new ns(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Aa extends un {
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
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new ke(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
function Kn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (Os(r))
        r.isRenderTargetTexture ? (Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone();
      else if (Array.isArray(r))
        if (Os(r[0])) {
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
function Pt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Kn(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Os(i) {
  return i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion);
}
function Eo(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Ra(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : qe.workingColorSpace;
}
const wa = { clone: Kn, merge: Pt };
var To = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, bo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class $t extends un {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = To, this.fragmentShader = bo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Kn(e.uniforms), this.uniformsGroups = Eo(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
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
class Ca extends $t {
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
class Ao extends un {
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
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new ke(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ke(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new We(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new cn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Pa extends un {
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
class Da extends un {
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
class is extends xt {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ke(e), this.intensity = t;
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
class La extends is {
  /**
   * Constructs a new hemisphere light.
   *
   * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
   * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(xt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new ke(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const Dr = /* @__PURE__ */ new ut(), Gs = /* @__PURE__ */ new O(), zs = /* @__PURE__ */ new O();
class Ro {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new We(512, 512), this.mapType = 1009, this.map = null, this.mapPass = null, this.matrix = new ut(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new nr(), this._frameExtents = new We(1, 1), this._viewportCount = 1, this._viewports = [
      new dt(0, 0, 1, 1)
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
    Gs.setFromMatrixPosition(e.matrixWorld), t.position.copy(Gs), zs.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(zs), t.updateMatrixWorld(), Dr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Dr, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? n.set(
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
    ), n.multiply(Dr);
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
const zi = /* @__PURE__ */ new O(), Vi = /* @__PURE__ */ new Dn(), Jt = /* @__PURE__ */ new O();
class rs extends xt {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ut(), this.projectionMatrix = new ut(), this.projectionMatrixInverse = new ut(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
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
    super.updateMatrixWorld(e), this.matrixWorld.decompose(zi, Vi, Jt), Jt.x === 1 && Jt.y === 1 && Jt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(zi, Vi, Jt.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorld.decompose(zi, Vi, Jt), Jt.x === 1 && Jt.y === 1 && Jt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(zi, Vi, Jt.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = /* @__PURE__ */ new O(), Vs = /* @__PURE__ */ new We(), Hs = /* @__PURE__ */ new We();
class Ot extends rs {
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
    this.fov = zr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(Wi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return zr * 2 * Math.atan(
      Math.tan(Wi * 0.5 * this.fov) / this.zoom
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
    vn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(vn.x, vn.y).multiplyScalar(-e / vn.z), vn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(vn.x, vn.y).multiplyScalar(-e / vn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Vs, Hs), t.subVectors(Hs, Vs);
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
    let t = e * Math.tan(Wi * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, t -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
class rr extends rs {
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
    let s = n - e, a = n + e, o = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= f * this.view.offsetY, l = o - f * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class wo extends Ro {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new rr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Yn extends is {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(xt.DEFAULT_UP), this.updateMatrix(), this.target = new xt(), this.shadow = new wo();
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
const Wn = -90, Xn = 1;
class Fa extends xt {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Ot(Wn, Xn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Ot(Wn, Xn, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Ot(Wn, Xn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ot(Wn, Xn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Ot(Wn, Xn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Ot(Wn, Xn, e, t);
    c.layers = this.layers, this.add(c);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
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
    const [s, a, o, l, c, f] = this.children, m = e.getRenderTarget(), u = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const S = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let h = !1;
    e.isWebGLRenderer === !0 ? h = e.state.buffers.depth.getReversed() : h = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = S, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, f), e.setRenderTarget(m, u, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Ia extends Ot {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
const us = class us {
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
us.prototype.isMatrix2 = !0;
let kr = us;
function ks(i, e, t, n) {
  const r = Co(n);
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
function Co(i) {
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
  revision: Ji
} }));
typeof window < "u" && (window.__THREE__ ? Pe("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ji);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function Ua() {
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
function Po(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, f = o.usage, m = c.byteLength, u = i.createBuffer();
    i.bindBuffer(l, u), i.bufferData(l, c, f), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array)
      p = i.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array)
      p = i.HALF_FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      p = i.SHORT;
    else if (c instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      p = i.INT;
    else if (c instanceof Int8Array)
      p = i.BYTE;
    else if (c instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: u,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: m
    };
  }
  function n(o, l, c) {
    const f = l.array, m = l.updateRanges;
    if (i.bindBuffer(c, o), m.length === 0)
      i.bufferSubData(c, 0, f);
    else {
      m.sort((p, g) => p.start - g.start);
      let u = 0;
      for (let p = 1; p < m.length; p++) {
        const g = m[u], S = m[p];
        S.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          S.start + S.count - g.start
        ) : (++u, m[u] = S);
      }
      m.length = u + 1;
      for (let p = 0, g = m.length; p < g; p++) {
        const S = m[p];
        i.bufferSubData(
          c,
          S.start * f.BYTES_PER_ELEMENT,
          f,
          S.start,
          S.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
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
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var Do = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Lo = `#ifdef USE_ALPHAHASH
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
#endif`, Fo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Io = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Uo = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, No = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Bo = `#ifdef USE_AOMAP
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
#endif`, Oo = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Go = `#ifdef USE_BATCHING
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
#endif`, zo = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Vo = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Ho = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, ko = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Wo = `#ifdef USE_IRIDESCENCE
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
#endif`, Xo = `#ifdef USE_BUMPMAP
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
#endif`, qo = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Yo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Zo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ko = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, $o = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, jo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, Jo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, Qo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`, el = `#define PI 3.141592653589793
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
} // validated`, tl = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, nl = `vec3 transformedNormal = objectNormal;
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
#endif`, il = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, rl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, sl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, al = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ol = "gl_FragColor = linearToOutputTexel( gl_FragColor );", ll = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, cl = `#ifdef USE_ENVMAP
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
#endif`, ul = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, dl = `#ifdef USE_ENVMAP
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
#endif`, hl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, fl = `#ifdef USE_ENVMAP
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
#endif`, pl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, ml = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, _l = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, gl = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, xl = `#ifdef USE_GRADIENTMAP
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
}`, vl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Ml = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Sl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, yl = `uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`, El = `#ifdef USE_ENVMAP
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
#endif`, Tl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, bl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Al = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Rl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, wl = `PhysicalMaterial material;
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
#endif`, Cl = `uniform sampler2D dfgLUT;
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
}`, Pl = `
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
#endif`, Dl = `#if defined( RE_IndirectDiffuse )
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
#endif`, Ll = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Fl = `#ifdef USE_LIGHT_PROBES_GRID
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
#endif`, Il = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ul = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Nl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Bl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Ol = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Gl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, zl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Vl = `#if defined( USE_POINTS_UV )
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
#endif`, Hl = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, kl = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Wl = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Xl = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, ql = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Yl = `#ifdef USE_MORPHTARGETS
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
#endif`, Zl = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Kl = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, $l = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, jl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Jl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ql = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, ec = `#ifdef USE_NORMALMAP
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
#endif`, tc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, nc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, ic = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, rc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, sc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, ac = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, oc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, lc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, cc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, uc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, dc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, hc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, fc = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, pc = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, mc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, _c = `float getShadowMask() {
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
}`, gc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, xc = `#ifdef USE_SKINNING
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
#endif`, vc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Mc = `#ifdef USE_SKINNING
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
#endif`, Sc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, yc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ec = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Tc = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, bc = `#ifdef USE_TRANSMISSION
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
#endif`, Ac = `#ifdef USE_TRANSMISSION
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
#endif`, Rc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, wc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Cc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Pc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Dc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Lc = `uniform sampler2D t2D;
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
}`, Fc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ic = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Uc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Nc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Bc = `#include <common>
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
}`, Oc = `#if DEPTH_PACKING == 3200
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
}`, Gc = `#define DISTANCE
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
}`, zc = `#define DISTANCE
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
}`, Vc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Hc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, kc = `uniform float scale;
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
}`, Wc = `uniform vec3 diffuse;
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
}`, Xc = `#include <common>
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
}`, qc = `uniform vec3 diffuse;
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
}`, Yc = `#define LAMBERT
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
}`, Zc = `#define LAMBERT
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
}`, Kc = `#define MATCAP
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
}`, $c = `#define MATCAP
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
}`, jc = `#define NORMAL
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
}`, Jc = `#define NORMAL
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
}`, Qc = `#define PHONG
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
}`, eu = `#define PHONG
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
}`, tu = `#define STANDARD
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
}`, nu = `#define STANDARD
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
}`, iu = `#define TOON
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
}`, ru = `#define TOON
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
}`, su = `uniform float size;
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
}`, au = `uniform vec3 diffuse;
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
}`, ou = `#include <common>
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
}`, lu = `uniform vec3 color;
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
}`, cu = `uniform float rotation;
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
}`, uu = `uniform vec3 diffuse;
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
}`, ze = {
  alphahash_fragment: Do,
  alphahash_pars_fragment: Lo,
  alphamap_fragment: Fo,
  alphamap_pars_fragment: Io,
  alphatest_fragment: Uo,
  alphatest_pars_fragment: No,
  aomap_fragment: Bo,
  aomap_pars_fragment: Oo,
  batching_pars_vertex: Go,
  batching_vertex: zo,
  begin_vertex: Vo,
  beginnormal_vertex: Ho,
  bsdfs: ko,
  iridescence_fragment: Wo,
  bumpmap_pars_fragment: Xo,
  clipping_planes_fragment: qo,
  clipping_planes_pars_fragment: Yo,
  clipping_planes_pars_vertex: Zo,
  clipping_planes_vertex: Ko,
  color_fragment: $o,
  color_pars_fragment: jo,
  color_pars_vertex: Jo,
  color_vertex: Qo,
  common: el,
  cube_uv_reflection_fragment: tl,
  defaultnormal_vertex: nl,
  displacementmap_pars_vertex: il,
  displacementmap_vertex: rl,
  emissivemap_fragment: sl,
  emissivemap_pars_fragment: al,
  colorspace_fragment: ol,
  colorspace_pars_fragment: ll,
  envmap_fragment: cl,
  envmap_common_pars_fragment: ul,
  envmap_pars_fragment: dl,
  envmap_pars_vertex: hl,
  envmap_physical_pars_fragment: El,
  envmap_vertex: fl,
  fog_vertex: pl,
  fog_pars_vertex: ml,
  fog_fragment: _l,
  fog_pars_fragment: gl,
  gradientmap_pars_fragment: xl,
  lightmap_pars_fragment: vl,
  lights_lambert_fragment: Ml,
  lights_lambert_pars_fragment: Sl,
  lights_pars_begin: yl,
  lights_toon_fragment: Tl,
  lights_toon_pars_fragment: bl,
  lights_phong_fragment: Al,
  lights_phong_pars_fragment: Rl,
  lights_physical_fragment: wl,
  lights_physical_pars_fragment: Cl,
  lights_fragment_begin: Pl,
  lights_fragment_maps: Dl,
  lights_fragment_end: Ll,
  lightprobes_pars_fragment: Fl,
  logdepthbuf_fragment: Il,
  logdepthbuf_pars_fragment: Ul,
  logdepthbuf_pars_vertex: Nl,
  logdepthbuf_vertex: Bl,
  map_fragment: Ol,
  map_pars_fragment: Gl,
  map_particle_fragment: zl,
  map_particle_pars_fragment: Vl,
  metalnessmap_fragment: Hl,
  metalnessmap_pars_fragment: kl,
  morphinstance_vertex: Wl,
  morphcolor_vertex: Xl,
  morphnormal_vertex: ql,
  morphtarget_pars_vertex: Yl,
  morphtarget_vertex: Zl,
  normal_fragment_begin: Kl,
  normal_fragment_maps: $l,
  normal_pars_fragment: jl,
  normal_pars_vertex: Jl,
  normal_vertex: Ql,
  normalmap_pars_fragment: ec,
  clearcoat_normal_fragment_begin: tc,
  clearcoat_normal_fragment_maps: nc,
  clearcoat_pars_fragment: ic,
  iridescence_pars_fragment: rc,
  opaque_fragment: sc,
  packing: ac,
  premultiplied_alpha_fragment: oc,
  project_vertex: lc,
  dithering_fragment: cc,
  dithering_pars_fragment: uc,
  roughnessmap_fragment: dc,
  roughnessmap_pars_fragment: hc,
  shadowmap_pars_fragment: fc,
  shadowmap_pars_vertex: pc,
  shadowmap_vertex: mc,
  shadowmask_pars_fragment: _c,
  skinbase_vertex: gc,
  skinning_pars_vertex: xc,
  skinning_vertex: vc,
  skinnormal_vertex: Mc,
  specularmap_fragment: Sc,
  specularmap_pars_fragment: yc,
  tonemapping_fragment: Ec,
  tonemapping_pars_fragment: Tc,
  transmission_fragment: bc,
  transmission_pars_fragment: Ac,
  uv_pars_fragment: Rc,
  uv_pars_vertex: wc,
  uv_vertex: Cc,
  worldpos_vertex: Pc,
  background_vert: Dc,
  background_frag: Lc,
  backgroundCube_vert: Fc,
  backgroundCube_frag: Ic,
  cube_vert: Uc,
  cube_frag: Nc,
  depth_vert: Bc,
  depth_frag: Oc,
  distance_vert: Gc,
  distance_frag: zc,
  equirect_vert: Vc,
  equirect_frag: Hc,
  linedashed_vert: kc,
  linedashed_frag: Wc,
  meshbasic_vert: Xc,
  meshbasic_frag: qc,
  meshlambert_vert: Yc,
  meshlambert_frag: Zc,
  meshmatcap_vert: Kc,
  meshmatcap_frag: $c,
  meshnormal_vert: jc,
  meshnormal_frag: Jc,
  meshphong_vert: Qc,
  meshphong_frag: eu,
  meshphysical_vert: tu,
  meshphysical_frag: nu,
  meshtoon_vert: iu,
  meshtoon_frag: ru,
  points_vert: su,
  points_frag: au,
  shadow_vert: ou,
  shadow_frag: lu,
  sprite_vert: cu,
  sprite_frag: uu
}, he = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ue() },
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
    aoMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ue() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ue() },
    normalScale: { value: /* @__PURE__ */ new We(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ue() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ke(16777215) }
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
    probesMin: { value: /* @__PURE__ */ new O() },
    probesMax: { value: /* @__PURE__ */ new O() },
    probesResolution: { value: /* @__PURE__ */ new O() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ue() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new We(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 }
  }
}, Zt = {
  basic: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.fog
    ]),
    vertexShader: ze.meshbasic_vert,
    fragmentShader: ze.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshlambert_vert,
    fragmentShader: ze.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) },
        specular: { value: /* @__PURE__ */ new ke(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshphong_vert,
    fragmentShader: ze.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.roughnessmap,
      he.metalnessmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshphysical_vert,
    fragmentShader: ze.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.gradientmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) }
      }
    ]),
    vertexShader: ze.meshtoon_vert,
    fragmentShader: ze.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ze.meshmatcap_vert,
    fragmentShader: ze.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Pt([
      he.points,
      he.fog
    ]),
    vertexShader: ze.points_vert,
    fragmentShader: ze.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ze.linedashed_vert,
    fragmentShader: ze.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.displacementmap
    ]),
    vertexShader: ze.depth_vert,
    fragmentShader: ze.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshnormal_vert,
    fragmentShader: ze.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Pt([
      he.sprite,
      he.fog
    ]),
    vertexShader: ze.sprite_vert,
    fragmentShader: ze.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ue() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ze.background_vert,
    fragmentShader: ze.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ue() }
    },
    vertexShader: ze.backgroundCube_vert,
    fragmentShader: ze.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: ze.cube_vert,
    fragmentShader: ze.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: ze.equirect_vert,
    fragmentShader: ze.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ Pt([
      he.common,
      he.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new O() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ze.distance_vert,
    fragmentShader: ze.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Pt([
      he.lights,
      he.fog,
      {
        color: { value: /* @__PURE__ */ new ke(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ze.shadow_vert,
    fragmentShader: ze.shadow_frag
  }
};
Zt.physical = {
  uniforms: /* @__PURE__ */ Pt([
    Zt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ue() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ue() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new We(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ue() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ue() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ue() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ke(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ue() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ue() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ue() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new We() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ue() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ke(0) },
      specularColor: { value: /* @__PURE__ */ new ke(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ue() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ue() },
      anisotropyVector: { value: /* @__PURE__ */ new We() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ue() }
    }
  ]),
  vertexShader: ze.meshphysical_vert,
  fragmentShader: ze.meshphysical_frag
};
const Hi = { r: 0, b: 0, g: 0 }, du = /* @__PURE__ */ new ut(), Na = /* @__PURE__ */ new Ue();
Na.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function hu(i, e, t, n, r, s) {
  const a = new ke(0);
  let o = r === !0 ? 0 : 1, l, c, f = null, m = 0, u = null;
  function p(M) {
    let A = M.isScene === !0 ? M.background : null;
    if (A && A.isTexture) {
      const E = M.backgroundBlurriness > 0;
      A = e.get(A, E);
    }
    return A;
  }
  function g(M) {
    let A = !1;
    const E = p(M);
    E === null ? h(a, o) : E && E.isColor && (h(E, 1), A = !0);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, s) : R === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || A) && (t.buffers.depth.setTest(!0), t.buffers.depth.setMask(!0), t.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function S(M, A) {
    const E = p(A);
    E && (E.isCubeTexture || E.mapping === 306) ? (c === void 0 && (c = new zt(
      new Jn(1, 1, 1),
      new $t({
        name: "BackgroundCubeMaterial",
        uniforms: Kn(Zt.backgroundCube.uniforms),
        vertexShader: Zt.backgroundCube.vertexShader,
        fragmentShader: Zt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(R, y, P) {
      this.matrixWorld.copyPosition(P.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(c)), c.material.uniforms.envMap.value = E, c.material.uniforms.backgroundBlurriness.value = A.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = A.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(du.makeRotationFromEuler(A.backgroundRotation)).transpose(), E.isCubeTexture && E.isRenderTargetTexture === !1 && c.material.uniforms.backgroundRotation.value.premultiply(Na), c.material.toneMapped = qe.getTransfer(E.colorSpace) !== tt, (f !== E || m !== E.version || u !== i.toneMapping) && (c.material.needsUpdate = !0, f = E, m = E.version, u = i.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null)) : E && E.isTexture && (l === void 0 && (l = new zt(
      new Pn(2, 2),
      new $t({
        name: "BackgroundMaterial",
        uniforms: Kn(Zt.background.uniforms),
        vertexShader: Zt.background.vertexShader,
        fragmentShader: Zt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(l)), l.material.uniforms.t2D.value = E, l.material.uniforms.backgroundIntensity.value = A.backgroundIntensity, l.material.toneMapped = qe.getTransfer(E.colorSpace) !== tt, E.matrixAutoUpdate === !0 && E.updateMatrix(), l.material.uniforms.uvTransform.value.copy(E.matrix), (f !== E || m !== E.version || u !== i.toneMapping) && (l.material.needsUpdate = !0, f = E, m = E.version, u = i.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function h(M, A) {
    M.getRGB(Hi, Ra(i)), t.buffers.color.setClear(Hi.r, Hi.g, Hi.b, A, s);
  }
  function d() {
    c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(M, A = 1) {
      a.set(M), o = A, h(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(M) {
      o = M, h(a, o);
    },
    render: g,
    addToRenderList: S,
    dispose: d
  };
}
function fu(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, a = !1;
  function o(C, B, k, W, I) {
    let z = !1;
    const q = m(C, W, k, B);
    s !== q && (s = q, c(s.object)), z = p(C, W, k, I), z && g(C, W, k, I), I !== null && e.update(I, i.ELEMENT_ARRAY_BUFFER), (z || a) && (a = !1, E(C, B, k, W), I !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(I).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(C) {
    return i.bindVertexArray(C);
  }
  function f(C) {
    return i.deleteVertexArray(C);
  }
  function m(C, B, k, W) {
    const I = W.wireframe === !0;
    let z = n[B.id];
    z === void 0 && (z = {}, n[B.id] = z);
    const q = C.isInstancedMesh === !0 ? C.id : 0;
    let te = z[q];
    te === void 0 && (te = {}, z[q] = te);
    let ne = te[k.id];
    ne === void 0 && (ne = {}, te[k.id] = ne);
    let de = ne[I];
    return de === void 0 && (de = u(l()), ne[I] = de), de;
  }
  function u(C) {
    const B = [], k = [], W = [];
    for (let I = 0; I < t; I++)
      B[I] = 0, k[I] = 0, W[I] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: k,
      attributeDivisors: W,
      object: C,
      attributes: {},
      index: null
    };
  }
  function p(C, B, k, W) {
    const I = s.attributes, z = B.attributes;
    let q = 0;
    const te = k.getAttributes();
    for (const ne in te)
      if (te[ne].location >= 0) {
        const Me = I[ne];
        let be = z[ne];
        if (be === void 0 && (ne === "instanceMatrix" && C.instanceMatrix && (be = C.instanceMatrix), ne === "instanceColor" && C.instanceColor && (be = C.instanceColor)), Me === void 0 || Me.attribute !== be || be && Me.data !== be.data) return !0;
        q++;
      }
    return s.attributesNum !== q || s.index !== W;
  }
  function g(C, B, k, W) {
    const I = {}, z = B.attributes;
    let q = 0;
    const te = k.getAttributes();
    for (const ne in te)
      if (te[ne].location >= 0) {
        let Me = z[ne];
        Me === void 0 && (ne === "instanceMatrix" && C.instanceMatrix && (Me = C.instanceMatrix), ne === "instanceColor" && C.instanceColor && (Me = C.instanceColor));
        const be = {};
        be.attribute = Me, Me && Me.data && (be.data = Me.data), I[ne] = be, q++;
      }
    s.attributes = I, s.attributesNum = q, s.index = W;
  }
  function S() {
    const C = s.newAttributes;
    for (let B = 0, k = C.length; B < k; B++)
      C[B] = 0;
  }
  function h(C) {
    d(C, 0);
  }
  function d(C, B) {
    const k = s.newAttributes, W = s.enabledAttributes, I = s.attributeDivisors;
    k[C] = 1, W[C] === 0 && (i.enableVertexAttribArray(C), W[C] = 1), I[C] !== B && (i.vertexAttribDivisor(C, B), I[C] = B);
  }
  function M() {
    const C = s.newAttributes, B = s.enabledAttributes;
    for (let k = 0, W = B.length; k < W; k++)
      B[k] !== C[k] && (i.disableVertexAttribArray(k), B[k] = 0);
  }
  function A(C, B, k, W, I, z, q) {
    q === !0 ? i.vertexAttribIPointer(C, B, k, I, z) : i.vertexAttribPointer(C, B, k, W, I, z);
  }
  function E(C, B, k, W) {
    S();
    const I = W.attributes, z = k.getAttributes(), q = B.defaultAttributeValues;
    for (const te in z) {
      const ne = z[te];
      if (ne.location >= 0) {
        let de = I[te];
        if (de === void 0 && (te === "instanceMatrix" && C.instanceMatrix && (de = C.instanceMatrix), te === "instanceColor" && C.instanceColor && (de = C.instanceColor)), de !== void 0) {
          const Me = de.normalized, be = de.itemSize, Ze = e.get(de);
          if (Ze === void 0) continue;
          const Ke = Ze.buffer, Ne = Ze.type, Q = Ze.bytesPerElement, fe = Ne === i.INT || Ne === i.UNSIGNED_INT || de.gpuType === 1013;
          if (de.isInterleavedBufferAttribute) {
            const ie = de.data, we = ie.stride, Fe = de.offset;
            if (ie.isInstancedInterleavedBuffer) {
              for (let Ce = 0; Ce < ne.locationSize; Ce++)
                d(ne.location + Ce, ie.meshPerAttribute);
              C.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else
              for (let Ce = 0; Ce < ne.locationSize; Ce++)
                h(ne.location + Ce);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let Ce = 0; Ce < ne.locationSize; Ce++)
              A(
                ne.location + Ce,
                be / ne.locationSize,
                Ne,
                Me,
                we * Q,
                (Fe + be / ne.locationSize * Ce) * Q,
                fe
              );
          } else {
            if (de.isInstancedBufferAttribute) {
              for (let ie = 0; ie < ne.locationSize; ie++)
                d(ne.location + ie, de.meshPerAttribute);
              C.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = de.meshPerAttribute * de.count);
            } else
              for (let ie = 0; ie < ne.locationSize; ie++)
                h(ne.location + ie);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let ie = 0; ie < ne.locationSize; ie++)
              A(
                ne.location + ie,
                be / ne.locationSize,
                Ne,
                Me,
                be * Q,
                be / ne.locationSize * ie * Q,
                fe
              );
          }
        } else if (q !== void 0) {
          const Me = q[te];
          if (Me !== void 0)
            switch (Me.length) {
              case 2:
                i.vertexAttrib2fv(ne.location, Me);
                break;
              case 3:
                i.vertexAttrib3fv(ne.location, Me);
                break;
              case 4:
                i.vertexAttrib4fv(ne.location, Me);
                break;
              default:
                i.vertexAttrib1fv(ne.location, Me);
            }
        }
      }
    }
    M();
  }
  function R() {
    b();
    for (const C in n) {
      const B = n[C];
      for (const k in B) {
        const W = B[k];
        for (const I in W) {
          const z = W[I];
          for (const q in z)
            f(z[q].object), delete z[q];
          delete W[I];
        }
      }
      delete n[C];
    }
  }
  function y(C) {
    if (n[C.id] === void 0) return;
    const B = n[C.id];
    for (const k in B) {
      const W = B[k];
      for (const I in W) {
        const z = W[I];
        for (const q in z)
          f(z[q].object), delete z[q];
        delete W[I];
      }
    }
    delete n[C.id];
  }
  function P(C) {
    for (const B in n) {
      const k = n[B];
      for (const W in k) {
        const I = k[W];
        if (I[C.id] === void 0) continue;
        const z = I[C.id];
        for (const q in z)
          f(z[q].object), delete z[q];
        delete I[C.id];
      }
    }
  }
  function x(C) {
    for (const B in n) {
      const k = n[B], W = C.isInstancedMesh === !0 ? C.id : 0, I = k[W];
      if (I !== void 0) {
        for (const z in I) {
          const q = I[z];
          for (const te in q)
            f(q[te].object), delete q[te];
          delete I[z];
        }
        delete k[W], Object.keys(k).length === 0 && delete n[B];
      }
    }
  }
  function b() {
    L(), a = !0, s !== r && (s = r, c(s.object));
  }
  function L() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: b,
    resetDefaultState: L,
    dispose: R,
    releaseStatesOfGeometry: y,
    releaseStatesOfObject: x,
    releaseStatesOfProgram: P,
    initAttributes: S,
    enableAttribute: h,
    disableUnusedAttributes: M
  };
}
function pu(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, c) {
    i.drawArrays(n, l, c), t.update(c, n, 1);
  }
  function a(l, c, f) {
    f !== 0 && (i.drawArraysInstanced(n, l, c, f), t.update(c, n, f));
  }
  function o(l, c, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, c, 0, f);
    let u = 0;
    for (let p = 0; p < f; p++)
      u += c[p];
    t.update(u, n, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function mu(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const P = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(P) {
    return !(P !== 1023 && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(P) {
    const x = P === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(P !== 1009 && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    P !== 1015 && !x);
  }
  function l(P) {
    if (P === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      P = "mediump";
    }
    return P === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const f = l(c);
  f !== c && (Pe("WebGLRenderer:", c, "not supported, using", f, "instead."), c = f);
  const m = t.logarithmicDepthBuffer === !0, u = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control");
  t.reversedDepthBuffer === !0 && u === !1 && Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), S = i.getParameter(i.MAX_TEXTURE_SIZE), h = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), M = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), A = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), R = i.getParameter(i.MAX_SAMPLES), y = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: m,
    reversedDepthBuffer: u,
    maxTextures: p,
    maxVertexTextures: g,
    maxTextureSize: S,
    maxCubemapSize: h,
    maxAttributes: d,
    maxVertexUniforms: M,
    maxVaryings: A,
    maxFragmentUniforms: E,
    maxSamples: R,
    samples: y
  };
}
function _u(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new Mn(), o = new Ue(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(m, u) {
    const p = m.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = m.length, p;
  }, this.beginShadows = function() {
    s = !0, f(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(m, u) {
    t = f(m, u, 0);
  }, this.setState = function(m, u, p) {
    const g = m.clippingPlanes, S = m.clipIntersection, h = m.clipShadows, d = i.get(m);
    if (!r || g === null || g.length === 0 || s && !h)
      s ? f(null) : c();
    else {
      const M = s ? 0 : n, A = M * 4;
      let E = d.clippingState || null;
      l.value = E, E = f(g, u, A, p);
      for (let R = 0; R !== A; ++R)
        E[R] = t[R];
      d.clippingState = E, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function f(m, u, p, g) {
    const S = m !== null ? m.length : 0;
    let h = null;
    if (S !== 0) {
      if (h = l.value, g !== !0 || h === null) {
        const d = p + S * 4, M = u.matrixWorldInverse;
        o.getNormalMatrix(M), (h === null || h.length < d) && (h = new Float32Array(d));
        for (let A = 0, E = p; A !== S; ++A, E += 4)
          a.copy(m[A]).applyMatrix4(M, o), a.normal.toArray(h, E), h[E + 3] = a.constant;
      }
      l.value = h, l.needsUpdate = !0;
    }
    return e.numPlanes = S, e.numIntersection = 0, h;
  }
}
const Sn = 4, Ws = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Rn = 20, gu = 256, oi = /* @__PURE__ */ new rr(), Xs = /* @__PURE__ */ new ke();
let Lr = null, Fr = 0, Ir = 0, Ur = !1;
const xu = /* @__PURE__ */ new O();
class Wr {
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
      position: o = xu
    } = s;
    Lr = this._renderer.getRenderTarget(), Fr = this._renderer.getActiveCubeFace(), Ir = this._renderer.getActiveMipmapLevel(), Ur = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = !0, this._sceneToCubeUV(e, n, r, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Zs(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ys(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Lr, Fr, Ir), this._renderer.xr.enabled = Ur, e.scissorTest = !1, qn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Lr = this._renderer.getRenderTarget(), Fr = this._renderer.getActiveCubeFace(), Ir = this._renderer.getActiveMipmapLevel(), Ur = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
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
      colorSpace: ui,
      depthBuffer: !1
    }, r = qs(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = qs(e, t, n);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = vu(s)), this._blurMaterial = Su(s, e, t), this._ggxMaterial = Mu(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new zt(new yt(), e);
    this._renderer.compile(t, oi);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const l = new Ot(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], f = [1, 1, 1, -1, -1, -1], m = this._renderer, u = m.autoClear, p = m.toneMapping;
    m.getClearColor(Xs), m.toneMapping = 0, m.autoClear = !1, m.state.buffers.depth.getReversed() && (m.setRenderTarget(r), m.clearDepth(), m.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new zt(
      new Jn(),
      new hi({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1
      })
    ));
    const S = this._backgroundBox, h = S.material;
    let d = !1;
    const M = e.background;
    M ? M.isColor && (h.color.copy(M), e.background = null, d = !0) : (h.color.copy(Xs), d = !0);
    for (let A = 0; A < 6; A++) {
      const E = A % 3;
      E === 0 ? (l.up.set(0, c[A], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + f[A], s.y, s.z)) : E === 1 ? (l.up.set(0, 0, c[A]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + f[A], s.z)) : (l.up.set(0, c[A], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + f[A]));
      const R = this._cubeSize;
      qn(r, E * R, A > 2 ? R : 0, R, R), m.setRenderTarget(r), d && m.render(S, l), m.render(e, l);
    }
    m.toneMapping = p, m.autoClear = u, e.background = M;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Zs()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ys());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    qn(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, oi);
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
    const l = a.uniforms, c = n / (this._lodMeshes.length - 1), f = t / (this._lodMeshes.length - 1), m = Math.sqrt(c * c - f * f), u = 0 + c * 1.25, p = m * u, { _lodMax: g } = this, S = this._sizeLods[n], h = 3 * S * (n > g - Sn ? n - g + Sn : 0), d = 4 * (this._cubeSize - S);
    l.envMap.value = e.texture, l.roughness.value = p, l.mipInt.value = g - t, qn(s, h, d, 3 * S, 2 * S), r.setRenderTarget(s), r.render(o, oi), l.envMap.value = s.texture, l.roughness.value = 0, l.mipInt.value = g - n, qn(e, h, d, 3 * S, 2 * S), r.setRenderTarget(e), r.render(o, oi);
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
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && $e(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const f = 3, m = this._lodMeshes[r];
    m.material = c;
    const u = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Rn - 1), S = s / g, h = isFinite(s) ? 1 + Math.floor(f * S) : Rn;
    h > Rn && Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Rn}`);
    const d = [];
    let M = 0;
    for (let P = 0; P < Rn; ++P) {
      const x = P / S, b = Math.exp(-x * x / 2);
      d.push(b), P === 0 ? M += b : P < h && (M += 2 * b);
    }
    for (let P = 0; P < d.length; P++)
      d[P] = d[P] / M;
    u.envMap.value = e.texture, u.samples.value = h, u.weights.value = d, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: A } = this;
    u.dTheta.value = g, u.mipInt.value = A - n;
    const E = this._sizeLods[r], R = 3 * E * (r > A - Sn ? r - A + Sn : 0), y = 4 * (this._cubeSize - E);
    qn(t, R, y, 3 * E, 2 * E), l.setRenderTarget(t), l.render(m, oi);
  }
}
function vu(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Sn + 1 + Ws.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let l = 1 / o;
    a > i - Sn ? l = Ws[a - i + Sn - 1] : a === 0 && (l = 0), t.push(l);
    const c = 1 / (o - 2), f = -c, m = 1 + c, u = [f, f, m, f, m, m, f, f, m, m, f, m], p = 6, g = 6, S = 3, h = 2, d = 1, M = new Float32Array(S * g * p), A = new Float32Array(h * g * p), E = new Float32Array(d * g * p);
    for (let y = 0; y < p; y++) {
      const P = y % 3 * 2 / 3 - 1, x = y > 2 ? 0 : -1, b = [
        P,
        x,
        0,
        P + 2 / 3,
        x,
        0,
        P + 2 / 3,
        x + 1,
        0,
        P,
        x,
        0,
        P + 2 / 3,
        x + 1,
        0,
        P,
        x + 1,
        0
      ];
      M.set(b, S * g * y), A.set(u, h * g * y);
      const L = [y, y, y, y, y, y];
      E.set(L, d * g * y);
    }
    const R = new yt();
    R.setAttribute("position", new kt(M, S)), R.setAttribute("uv", new kt(A, h)), R.setAttribute("faceIndex", new kt(E, d)), n.push(new zt(R, null)), r > Sn && r--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function qs(i, e, t) {
  const n = new Kt(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function qn(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Mu(i, e, t) {
  return new $t({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: gu,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: sr(),
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
function Su(i, e, t) {
  const n = new Float32Array(Rn), r = new O(0, 1, 0);
  return new $t({
    name: "SphericalGaussianBlur",
    defines: {
      n: Rn,
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
    vertexShader: sr(),
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
function Ys() {
  return new $t({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: sr(),
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
function Zs() {
  return new $t({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: sr(),
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
function sr() {
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
class ss extends Kt {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Jr(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
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
    }, r = new Jn(5, 5, 5), s = new $t({
      name: "CubemapFromEquirect",
      uniforms: Kn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new zt(r, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new Fa(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
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
function yu(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, p = !1) {
    return u == null ? null : p ? a(u) : s(u);
  }
  function s(u) {
    if (u && u.isTexture) {
      const p = u.mapping;
      if (p === 303 || p === 304)
        if (e.has(u)) {
          const g = e.get(u).texture;
          return o(g, u.mapping);
        } else {
          const g = u.image;
          if (g && g.height > 0) {
            const S = new ss(g.height);
            return S.fromEquirectangularTexture(i, u), e.set(u, S), u.addEventListener("dispose", c), o(S.texture, u.mapping);
          } else
            return null;
        }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const p = u.mapping, g = p === 303 || p === 304, S = p === 301 || p === 302;
      if (g || S) {
        let h = t.get(u);
        const d = h !== void 0 ? h.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== d)
          return n === null && (n = new Wr(i)), h = g ? n.fromEquirectangular(u, h) : n.fromCubemap(u, h), h.texture.pmremVersion = u.pmremVersion, t.set(u, h), h.texture;
        if (h !== void 0)
          return h.texture;
        {
          const M = u.image;
          return g && M && M.height > 0 || S && M && l(M) ? (n === null && (n = new Wr(i)), h = g ? n.fromEquirectangular(u) : n.fromCubemap(u), h.texture.pmremVersion = u.pmremVersion, t.set(u, h), u.addEventListener("dispose", f), h.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, p) {
    return p === 303 ? u.mapping = 301 : p === 304 && (u.mapping = 302), u;
  }
  function l(u) {
    let p = 0;
    const g = 6;
    for (let S = 0; S < g; S++)
      u[S] !== void 0 && p++;
    return p === g;
  }
  function c(u) {
    const p = u.target;
    p.removeEventListener("dispose", c);
    const g = e.get(p);
    g !== void 0 && (e.delete(p), g.dispose());
  }
  function f(u) {
    const p = u.target;
    p.removeEventListener("dispose", f);
    const g = t.get(p);
    g !== void 0 && (t.delete(p), g.dispose());
  }
  function m() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: r,
    dispose: m
  };
}
function Eu(i) {
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
      return r === null && Zi("WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Tu(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(m) {
    const u = m.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes)
      e.remove(u.attributes[g]);
    u.removeEventListener("dispose", a), delete r[u.id];
    const p = s.get(u);
    p && (e.remove(p), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(m, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", a), r[u.id] = !0, t.memory.geometries++), u;
  }
  function l(m) {
    const u = m.attributes;
    for (const p in u)
      e.update(u[p], i.ARRAY_BUFFER);
  }
  function c(m) {
    const u = [], p = m.index, g = m.attributes.position;
    let S = 0;
    if (g === void 0)
      return;
    if (p !== null) {
      const M = p.array;
      S = p.version;
      for (let A = 0, E = M.length; A < E; A += 3) {
        const R = M[A + 0], y = M[A + 1], P = M[A + 2];
        u.push(R, y, y, P, P, R);
      }
    } else {
      const M = g.array;
      S = g.version;
      for (let A = 0, E = M.length / 3 - 1; A < E; A += 3) {
        const R = A + 0, y = A + 1, P = A + 2;
        u.push(R, y, y, P, P, R);
      }
    }
    const h = new (g.count >= 65535 ? $r : Kr)(u, 1);
    h.version = S;
    const d = s.get(m);
    d && e.remove(d), s.set(m, h);
  }
  function f(m) {
    const u = s.get(m);
    if (u) {
      const p = m.index;
      p !== null && u.version < p.version && c(m);
    } else
      c(m);
    return s.get(m);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: f
  };
}
function bu(i, e, t) {
  let n;
  function r(m) {
    n = m;
  }
  let s, a;
  function o(m) {
    s = m.type, a = m.bytesPerElement;
  }
  function l(m, u) {
    i.drawElements(n, u, s, m * a), t.update(u, n, 1);
  }
  function c(m, u, p) {
    p !== 0 && (i.drawElementsInstanced(n, u, s, m * a, p), t.update(u, n, p));
  }
  function f(m, u, p) {
    if (p === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, s, m, 0, p);
    let S = 0;
    for (let h = 0; h < p; h++)
      S += u[h];
    t.update(S, n, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = f;
}
function Au(i) {
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
        $e("WebGLInfo: Unknown draw mode:", a);
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
function Ru(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new dt();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, f = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, m = f !== void 0 ? f.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== m) {
      let b = function() {
        P.dispose(), n.delete(o), o.removeEventListener("dispose", b);
      };
      u !== void 0 && u.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, S = o.morphAttributes.color !== void 0, h = o.morphAttributes.position || [], d = o.morphAttributes.normal || [], M = o.morphAttributes.color || [];
      let A = 0;
      p === !0 && (A = 1), g === !0 && (A = 2), S === !0 && (A = 3);
      let E = o.attributes.position.count * A, R = 1;
      E > e.maxTextureSize && (R = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
      const y = new Float32Array(E * R * 4 * m), P = new Yr(y, E, R, m);
      P.type = 1015, P.needsUpdate = !0;
      const x = A * 4;
      for (let L = 0; L < m; L++) {
        const C = h[L], B = d[L], k = M[L], W = E * R * 4 * L;
        for (let I = 0; I < C.count; I++) {
          const z = I * x;
          p === !0 && (r.fromBufferAttribute(C, I), y[W + z + 0] = r.x, y[W + z + 1] = r.y, y[W + z + 2] = r.z, y[W + z + 3] = 0), g === !0 && (r.fromBufferAttribute(B, I), y[W + z + 4] = r.x, y[W + z + 5] = r.y, y[W + z + 6] = r.z, y[W + z + 7] = 0), S === !0 && (r.fromBufferAttribute(k, I), y[W + z + 8] = r.x, y[W + z + 9] = r.y, y[W + z + 10] = r.z, y[W + z + 11] = k.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: m,
        texture: P,
        size: new We(E, R)
      }, n.set(o, u), o.addEventListener("dispose", b);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let S = 0; S < c.length; S++)
        p += c[S];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", g), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: s
  };
}
function wu(i, e, t, n, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const f = r.render.frame, m = c.geometry, u = e.get(c, m);
    if (s.get(u) !== f && (e.update(u), s.set(u, f)), c.isInstancedMesh && (c.hasEventListener("dispose", l) === !1 && c.addEventListener("dispose", l), s.get(c) !== f && (t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER), s.set(c, f))), c.isSkinnedMesh) {
      const p = c.skeleton;
      s.get(p) !== f && (p.update(), s.set(p, f));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const f = c.target;
    f.removeEventListener("dispose", l), n.releaseStatesOfObject(f), t.remove(f.instanceMatrix), f.instanceColor !== null && t.remove(f.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
const Cu = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function Pu(i, e, t, n, r) {
  const s = new Kt(e, t, {
    type: i,
    depthBuffer: n,
    stencilBuffer: r,
    depthTexture: n ? new Cn(e, t) : void 0
  }), a = new Kt(e, t, {
    type: 1016,
    depthBuffer: !1,
    stencilBuffer: !1
  }), o = new yt();
  o.setAttribute("position", new ct([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new ct([0, 2, 0, 0, 2, 0], 2));
  const l = new Ca({
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
  }), c = new zt(o, l), f = new rr(-1, 1, 1, -1, 0, 1);
  let m = null, u = null, p = !1, g, S = null, h = [], d = !1;
  this.setSize = function(M, A) {
    s.setSize(M, A), a.setSize(M, A);
    for (let E = 0; E < h.length; E++) {
      const R = h[E];
      R.setSize && R.setSize(M, A);
    }
  }, this.setEffects = function(M) {
    h = M, d = h.length > 0 && h[0].isRenderPass === !0;
    const A = s.width, E = s.height;
    for (let R = 0; R < h.length; R++) {
      const y = h[R];
      y.setSize && y.setSize(A, E);
    }
  }, this.begin = function(M, A) {
    if (p || M.toneMapping === 0 && h.length === 0) return !1;
    if (S = A, A !== null) {
      const E = A.width, R = A.height;
      (s.width !== E || s.height !== R) && this.setSize(E, R);
    }
    return d === !1 && M.setRenderTarget(s), g = M.toneMapping, M.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return d;
  }, this.end = function(M, A) {
    M.toneMapping = g, p = !0;
    let E = s, R = a;
    for (let y = 0; y < h.length; y++) {
      const P = h[y];
      if (P.enabled !== !1 && (P.render(M, R, E, A), P.needsSwap !== !1)) {
        const x = E;
        E = R, R = x;
      }
    }
    if (m !== M.outputColorSpace || u !== M.toneMapping) {
      m = M.outputColorSpace, u = M.toneMapping, l.defines = {}, qe.getTransfer(m) === tt && (l.defines.SRGB_TRANSFER = "");
      const y = Cu[u];
      y && (l.defines[y] = ""), l.needsUpdate = !0;
    }
    l.uniforms.tDiffuse.value = E.texture, M.setRenderTarget(S), M.render(c, f), S = null, p = !1;
  }, this.isCompositing = function() {
    return p;
  }, this.dispose = function() {
    s.depthTexture && s.depthTexture.dispose(), s.dispose(), a.dispose(), o.dispose(), l.dispose();
  };
}
const Ba = /* @__PURE__ */ new Tt(), Xr = /* @__PURE__ */ new Cn(1, 1), Oa = /* @__PURE__ */ new Yr(), Ga = /* @__PURE__ */ new xa(), za = /* @__PURE__ */ new Jr(), Ks = [], $s = [], js = new Float32Array(16), Js = new Float32Array(9), Qs = new Float32Array(4);
function Qn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Ks[r];
  if (s === void 0 && (s = new Float32Array(r), Ks[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function vt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function Mt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function ar(i, e) {
  let t = $s[e];
  t === void 0 && (t = new Int32Array(e), $s[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Du(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Lu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (vt(t, e)) return;
    i.uniform2fv(this.addr, e), Mt(t, e);
  }
}
function Fu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (vt(t, e)) return;
    i.uniform3fv(this.addr, e), Mt(t, e);
  }
}
function Iu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (vt(t, e)) return;
    i.uniform4fv(this.addr, e), Mt(t, e);
  }
}
function Uu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (vt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), Mt(t, e);
  } else {
    if (vt(t, n)) return;
    Qs.set(n), i.uniformMatrix2fv(this.addr, !1, Qs), Mt(t, n);
  }
}
function Nu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (vt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), Mt(t, e);
  } else {
    if (vt(t, n)) return;
    Js.set(n), i.uniformMatrix3fv(this.addr, !1, Js), Mt(t, n);
  }
}
function Bu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (vt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), Mt(t, e);
  } else {
    if (vt(t, n)) return;
    js.set(n), i.uniformMatrix4fv(this.addr, !1, js), Mt(t, n);
  }
}
function Ou(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Gu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (vt(t, e)) return;
    i.uniform2iv(this.addr, e), Mt(t, e);
  }
}
function zu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (vt(t, e)) return;
    i.uniform3iv(this.addr, e), Mt(t, e);
  }
}
function Vu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (vt(t, e)) return;
    i.uniform4iv(this.addr, e), Mt(t, e);
  }
}
function Hu(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function ku(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (vt(t, e)) return;
    i.uniform2uiv(this.addr, e), Mt(t, e);
  }
}
function Wu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (vt(t, e)) return;
    i.uniform3uiv(this.addr, e), Mt(t, e);
  }
}
function Xu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (vt(t, e)) return;
    i.uniform4uiv(this.addr, e), Mt(t, e);
  }
}
function qu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (Xr.compareFunction = t.isReversedDepthBuffer() ? 518 : 515, s = Xr) : s = Ba, t.setTexture2D(e || s, r);
}
function Yu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Ga, r);
}
function Zu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || za, r);
}
function Ku(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Oa, r);
}
function $u(i) {
  switch (i) {
    case 5126:
      return Du;
    case 35664:
      return Lu;
    case 35665:
      return Fu;
    case 35666:
      return Iu;
    case 35674:
      return Uu;
    case 35675:
      return Nu;
    case 35676:
      return Bu;
    case 5124:
    case 35670:
      return Ou;
    case 35667:
    case 35671:
      return Gu;
    case 35668:
    case 35672:
      return zu;
    case 35669:
    case 35673:
      return Vu;
    case 5125:
      return Hu;
    case 36294:
      return ku;
    case 36295:
      return Wu;
    case 36296:
      return Xu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return qu;
    case 35679:
    case 36299:
    case 36307:
      return Yu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Zu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ku;
  }
}
function ju(i, e) {
  i.uniform1fv(this.addr, e);
}
function Ju(i, e) {
  const t = Qn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Qu(i, e) {
  const t = Qn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function ed(i, e) {
  const t = Qn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function td(i, e) {
  const t = Qn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function nd(i, e) {
  const t = Qn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function id(i, e) {
  const t = Qn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function rd(i, e) {
  i.uniform1iv(this.addr, e);
}
function sd(i, e) {
  i.uniform2iv(this.addr, e);
}
function ad(i, e) {
  i.uniform3iv(this.addr, e);
}
function od(i, e) {
  i.uniform4iv(this.addr, e);
}
function ld(i, e) {
  i.uniform1uiv(this.addr, e);
}
function cd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function ud(i, e) {
  i.uniform3uiv(this.addr, e);
}
function dd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function hd(i, e, t) {
  const n = this.cache, r = e.length, s = ar(t, r);
  vt(n, s) || (i.uniform1iv(this.addr, s), Mt(n, s));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? a = Xr : a = Ba;
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || a, s[o]);
}
function fd(i, e, t) {
  const n = this.cache, r = e.length, s = ar(t, r);
  vt(n, s) || (i.uniform1iv(this.addr, s), Mt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || Ga, s[a]);
}
function pd(i, e, t) {
  const n = this.cache, r = e.length, s = ar(t, r);
  vt(n, s) || (i.uniform1iv(this.addr, s), Mt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || za, s[a]);
}
function md(i, e, t) {
  const n = this.cache, r = e.length, s = ar(t, r);
  vt(n, s) || (i.uniform1iv(this.addr, s), Mt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || Oa, s[a]);
}
function _d(i) {
  switch (i) {
    case 5126:
      return ju;
    case 35664:
      return Ju;
    case 35665:
      return Qu;
    case 35666:
      return ed;
    case 35674:
      return td;
    case 35675:
      return nd;
    case 35676:
      return id;
    case 5124:
    case 35670:
      return rd;
    case 35667:
    case 35671:
      return sd;
    case 35668:
    case 35672:
      return ad;
    case 35669:
    case 35673:
      return od;
    case 5125:
      return ld;
    case 36294:
      return cd;
    case 36295:
      return ud;
    case 36296:
      return dd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return hd;
    case 35679:
    case 36299:
    case 36307:
      return fd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return pd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return md;
  }
}
class gd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = $u(t.type);
  }
}
class xd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = _d(t.type);
  }
}
class vd {
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
const Nr = /(\w+)(\])?(\[|\.)?/g;
function ea(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Md(i, e, t) {
  const n = i.name, r = n.length;
  for (Nr.lastIndex = 0; ; ) {
    const s = Nr.exec(n), a = Nr.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      ea(t, c === void 0 ? new gd(o, i, e) : new xd(o, i, e));
      break;
    } else {
      let m = t.map[o];
      m === void 0 && (m = new vd(o), ea(t, m)), t = m;
    }
  }
}
class qi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a), l = e.getUniformLocation(t, o.name);
      Md(o, l, this);
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
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
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
function ta(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Sd = 37297;
let yd = 0;
function Ed(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const na = /* @__PURE__ */ new Ue();
function Td(i) {
  qe._getMatrix(na, qe.workingColorSpace, i);
  const e = `mat3( ${na.elements.map((t) => t.toFixed(4))} )`;
  switch (qe.getTransfer(i)) {
    case di:
      return [e, "LinearTransferOETF"];
    case tt:
      return [e, "sRGBTransferOETF"];
    default:
      return Pe("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function ia(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + Ed(i.getShaderSource(e), o);
  } else
    return s;
}
function bd(i, e) {
  const t = Td(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
const Ad = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function Rd(i, e) {
  const t = Ad[e];
  return t === void 0 ? (Pe("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ki = /* @__PURE__ */ new O();
function wd() {
  qe.getLuminanceCoefficients(ki);
  const i = ki.x.toFixed(4), e = ki.y.toFixed(4), t = ki.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Cd(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(ci).join(`
`);
}
function Pd(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Dd(i, e) {
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
function ci(i) {
  return i !== "";
}
function ra(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function sa(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Ld = /^[ \t]*#include +<([\w\d./]+)>/gm;
function qr(i) {
  return i.replace(Ld, Id);
}
const Fd = /* @__PURE__ */ new Map();
function Id(i, e) {
  let t = ze[e];
  if (t === void 0) {
    const n = Fd.get(e);
    if (n !== void 0)
      t = ze[n], Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return qr(t);
}
const Ud = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function aa(i) {
  return i.replace(Ud, Nd);
}
function Nd(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function oa(i) {
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
const Bd = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function Od(i) {
  return Bd[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const Gd = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function zd(i) {
  return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : Gd[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const Vd = {
  302: "ENVMAP_MODE_REFRACTION"
};
function Hd(i) {
  return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Vd[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const kd = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function Wd(i) {
  return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : kd[i.combine] || "ENVMAP_BLENDING_NONE";
}
function Xd(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function qd(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = Od(t), c = zd(t), f = Hd(t), m = Wd(t), u = Xd(t), p = Cd(t), g = Pd(s), S = r.createProgram();
  let h, d, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (h = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ci).join(`
`), h.length > 0 && (h += `
`), d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ci).join(`
`), d.length > 0 && (d += `
`)) : (h = [
    oa(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
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
    t.shadowMapEnabled ? "#define " + l : "",
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
  ].filter(ci).join(`
`), d = [
    oa(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + f : "",
    t.envMap ? "#define " + m : "",
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
    t.shadowMapEnabled ? "#define " + l : "",
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
    t.toneMapping !== 0 ? ze.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? Rd("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    ze.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    bd("linearToOutputTexel", t.outputColorSpace),
    wd(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ci).join(`
`)), a = qr(a), a = ra(a, t), a = sa(a, t), o = qr(o), o = ra(o, t), o = sa(o, t), a = aa(a), o = aa(o), t.isRawShaderMaterial !== !0 && (M = `#version 300 es
`, h = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + h, d = [
    "#define varying in",
    t.glslVersion === Or ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Or ? "" : "#define gl_FragColor pc_fragColor",
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
` + d);
  const A = M + h + a, E = M + d + o, R = ta(r, r.VERTEX_SHADER, A), y = ta(r, r.FRAGMENT_SHADER, E);
  r.attachShader(S, R), r.attachShader(S, y), t.index0AttributeName !== void 0 ? r.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"), r.linkProgram(S);
  function P(C) {
    if (i.debug.checkShaderErrors) {
      const B = r.getProgramInfoLog(S) || "", k = r.getShaderInfoLog(R) || "", W = r.getShaderInfoLog(y) || "", I = B.trim(), z = k.trim(), q = W.trim();
      let te = !0, ne = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (te = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, S, R, y);
        else {
          const de = ia(r, R, "vertex"), Me = ia(r, y, "fragment");
          $e(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(S, r.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + I + `
` + de + `
` + Me
          );
        }
      else I !== "" ? Pe("WebGLProgram: Program Info Log:", I) : (z === "" || q === "") && (ne = !1);
      ne && (C.diagnostics = {
        runnable: te,
        programLog: I,
        vertexShader: {
          log: z,
          prefix: h
        },
        fragmentShader: {
          log: q,
          prefix: d
        }
      });
    }
    r.deleteShader(R), r.deleteShader(y), x = new qi(r, S), b = Dd(r, S);
  }
  let x;
  this.getUniforms = function() {
    return x === void 0 && P(this), x;
  };
  let b;
  this.getAttributes = function() {
    return b === void 0 && P(this), b;
  };
  let L = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return L === !1 && (L = r.getProgramParameter(S, Sd)), L;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(S), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = yd++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = R, this.fragmentShader = y, this;
}
let Yd = 0;
class Zd {
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
    return n === void 0 && (n = new Kd(e), t.set(e, n)), n;
  }
}
class Kd {
  constructor(e) {
    this.id = Yd++, this.code = e, this.usedTimes = 0;
  }
}
function $d(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function jd(i, e, t, n, r, s) {
  const a = new Zr(), o = new Zd(), l = /* @__PURE__ */ new Set(), c = [], f = /* @__PURE__ */ new Map(), m = n.logarithmicDepthBuffer;
  let u = n.precision;
  const p = {
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
  function g(x) {
    return l.add(x), x === 0 ? "uv" : `uv${x}`;
  }
  function S(x, b, L, C, B, k) {
    const W = C.fog, I = B.geometry, z = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? C.environment : null, q = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap, te = e.get(x.envMap || z, q), ne = te && te.mapping === 306 ? te.image.height : null, de = p[x.type];
    x.precision !== null && (u = n.getMaxPrecision(x.precision), u !== x.precision && Pe("WebGLProgram.getParameters:", x.precision, "not supported, using", u, "instead."));
    const Me = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color, be = Me !== void 0 ? Me.length : 0;
    let Ze = 0;
    I.morphAttributes.position !== void 0 && (Ze = 1), I.morphAttributes.normal !== void 0 && (Ze = 2), I.morphAttributes.color !== void 0 && (Ze = 3);
    let Ke, Ne, Q, fe;
    if (de) {
      const J = Zt[de];
      Ke = J.vertexShader, Ne = J.fragmentShader;
    } else
      Ke = x.vertexShader, Ne = x.fragmentShader, o.update(x), Q = o.getVertexShaderID(x), fe = o.getFragmentShaderID(x);
    const ie = i.getRenderTarget(), we = i.state.buffers.depth.getReversed(), Fe = B.isInstancedMesh === !0, Ce = B.isBatchedMesh === !0, at = !!x.map, Ve = !!x.matcap, je = !!te, Qe = !!x.aoMap, De = !!x.lightMap, pt = !!x.bumpMap, $ = !!x.normalMap, wt = !!x.displacementMap, F = !!x.emissiveMap, Oe = !!x.metalnessMap, Be = !!x.roughnessMap, nt = x.anisotropy > 0, le = x.clearcoat > 0, lt = x.dispersion > 0, T = x.iridescence > 0, _ = x.sheen > 0, G = x.transmission > 0, j = nt && !!x.anisotropyMap, ee = le && !!x.clearcoatMap, re = le && !!x.clearcoatNormalMap, se = le && !!x.clearcoatRoughnessMap, Y = T && !!x.iridescenceMap, Z = T && !!x.iridescenceThicknessMap, pe = _ && !!x.sheenColorMap, ge = _ && !!x.sheenRoughnessMap, ce = !!x.specularMap, ae = !!x.specularColorMap, Le = !!x.specularIntensityMap, Ie = G && !!x.transmissionMap, Xe = G && !!x.thicknessMap, D = !!x.gradientMap, oe = !!x.alphaMap, K = x.alphaTest > 0, xe = !!x.alphaHash, ue = !!x.extensions;
    let w = 0;
    x.toneMapped && (ie === null || ie.isXRRenderTarget === !0) && (w = i.toneMapping);
    const U = {
      shaderID: de,
      shaderType: x.type,
      shaderName: x.name,
      vertexShader: Ke,
      fragmentShader: Ne,
      defines: x.defines,
      customVertexShaderID: Q,
      customFragmentShaderID: fe,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: u,
      batching: Ce,
      batchingColor: Ce && B._colorsTexture !== null,
      instancing: Fe,
      instancingColor: Fe && B.instanceColor !== null,
      instancingMorph: Fe && B.morphTexture !== null,
      outputColorSpace: ie === null ? i.outputColorSpace : ie.isXRRenderTarget === !0 ? ie.texture.colorSpace : qe.workingColorSpace,
      alphaToCoverage: !!x.alphaToCoverage,
      map: at,
      matcap: Ve,
      envMap: je,
      envMapMode: je && te.mapping,
      envMapCubeUVHeight: ne,
      aoMap: Qe,
      lightMap: De,
      bumpMap: pt,
      normalMap: $,
      displacementMap: wt,
      emissiveMap: F,
      normalMapObjectSpace: $ && x.normalMapType === 1,
      normalMapTangentSpace: $ && x.normalMapType === 0,
      packedNormalMap: $ && x.normalMapType === 0 && $d(x.normalMap.format),
      metalnessMap: Oe,
      roughnessMap: Be,
      anisotropy: nt,
      anisotropyMap: j,
      clearcoat: le,
      clearcoatMap: ee,
      clearcoatNormalMap: re,
      clearcoatRoughnessMap: se,
      dispersion: lt,
      iridescence: T,
      iridescenceMap: Y,
      iridescenceThicknessMap: Z,
      sheen: _,
      sheenColorMap: pe,
      sheenRoughnessMap: ge,
      specularMap: ce,
      specularColorMap: ae,
      specularIntensityMap: Le,
      transmission: G,
      transmissionMap: Ie,
      thicknessMap: Xe,
      gradientMap: D,
      opaque: x.transparent === !1 && x.blending === 1 && x.alphaToCoverage === !1,
      alphaMap: oe,
      alphaTest: K,
      alphaHash: xe,
      combine: x.combine,
      //
      mapUv: at && g(x.map.channel),
      aoMapUv: Qe && g(x.aoMap.channel),
      lightMapUv: De && g(x.lightMap.channel),
      bumpMapUv: pt && g(x.bumpMap.channel),
      normalMapUv: $ && g(x.normalMap.channel),
      displacementMapUv: wt && g(x.displacementMap.channel),
      emissiveMapUv: F && g(x.emissiveMap.channel),
      metalnessMapUv: Oe && g(x.metalnessMap.channel),
      roughnessMapUv: Be && g(x.roughnessMap.channel),
      anisotropyMapUv: j && g(x.anisotropyMap.channel),
      clearcoatMapUv: ee && g(x.clearcoatMap.channel),
      clearcoatNormalMapUv: re && g(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: se && g(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Y && g(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: Z && g(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: pe && g(x.sheenColorMap.channel),
      sheenRoughnessMapUv: ge && g(x.sheenRoughnessMap.channel),
      specularMapUv: ce && g(x.specularMap.channel),
      specularColorMapUv: ae && g(x.specularColorMap.channel),
      specularIntensityMapUv: Le && g(x.specularIntensityMap.channel),
      transmissionMapUv: Ie && g(x.transmissionMap.channel),
      thicknessMapUv: Xe && g(x.thicknessMap.channel),
      alphaMapUv: oe && g(x.alphaMap.channel),
      //
      vertexTangents: !!I.attributes.tangent && ($ || nt),
      vertexNormals: !!I.attributes.normal,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!I.attributes.uv && (at || oe),
      fog: !!W,
      useFog: x.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: x.wireframe === !1 && (x.flatShading === !0 || I.attributes.normal === void 0 && $ === !1 && (x.isMeshLambertMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isMeshPhysicalMaterial)),
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: m,
      reversedDepthBuffer: we,
      skinning: B.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: be,
      morphTextureStride: Ze,
      numDirLights: b.directional.length,
      numPointLights: b.point.length,
      numSpotLights: b.spot.length,
      numSpotLightMaps: b.spotLightMap.length,
      numRectAreaLights: b.rectArea.length,
      numHemiLights: b.hemi.length,
      numDirLightShadows: b.directionalShadowMap.length,
      numPointLightShadows: b.pointShadowMap.length,
      numSpotLightShadows: b.spotShadowMap.length,
      numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
      numLightProbes: b.numLightProbes,
      numLightProbeGrids: k.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: i.shadowMap.enabled && L.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: w,
      decodeVideoTexture: at && x.map.isVideoTexture === !0 && qe.getTransfer(x.map.colorSpace) === tt,
      decodeVideoTextureEmissive: F && x.emissiveMap.isVideoTexture === !0 && qe.getTransfer(x.emissiveMap.colorSpace) === tt,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === 2,
      flipSided: x.side === 1,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionClipCullDistance: ue && x.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ue && x.extensions.multiDraw === !0 || Ce) && t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
    return U.vertexUv1s = l.has(1), U.vertexUv2s = l.has(2), U.vertexUv3s = l.has(3), l.clear(), U;
  }
  function h(x) {
    const b = [];
    if (x.shaderID ? b.push(x.shaderID) : (b.push(x.customVertexShaderID), b.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const L in x.defines)
        b.push(L), b.push(x.defines[L]);
    return x.isRawShaderMaterial === !1 && (d(b, x), M(b, x), b.push(i.outputColorSpace)), b.push(x.customProgramCacheKey), b.join();
  }
  function d(x, b) {
    x.push(b.precision), x.push(b.outputColorSpace), x.push(b.envMapMode), x.push(b.envMapCubeUVHeight), x.push(b.mapUv), x.push(b.alphaMapUv), x.push(b.lightMapUv), x.push(b.aoMapUv), x.push(b.bumpMapUv), x.push(b.normalMapUv), x.push(b.displacementMapUv), x.push(b.emissiveMapUv), x.push(b.metalnessMapUv), x.push(b.roughnessMapUv), x.push(b.anisotropyMapUv), x.push(b.clearcoatMapUv), x.push(b.clearcoatNormalMapUv), x.push(b.clearcoatRoughnessMapUv), x.push(b.iridescenceMapUv), x.push(b.iridescenceThicknessMapUv), x.push(b.sheenColorMapUv), x.push(b.sheenRoughnessMapUv), x.push(b.specularMapUv), x.push(b.specularColorMapUv), x.push(b.specularIntensityMapUv), x.push(b.transmissionMapUv), x.push(b.thicknessMapUv), x.push(b.combine), x.push(b.fogExp2), x.push(b.sizeAttenuation), x.push(b.morphTargetsCount), x.push(b.morphAttributeCount), x.push(b.numDirLights), x.push(b.numPointLights), x.push(b.numSpotLights), x.push(b.numSpotLightMaps), x.push(b.numHemiLights), x.push(b.numRectAreaLights), x.push(b.numDirLightShadows), x.push(b.numPointLightShadows), x.push(b.numSpotLightShadows), x.push(b.numSpotLightShadowsWithMaps), x.push(b.numLightProbes), x.push(b.shadowMapType), x.push(b.toneMapping), x.push(b.numClippingPlanes), x.push(b.numClipIntersection), x.push(b.depthPacking);
  }
  function M(x, b) {
    a.disableAll(), b.instancing && a.enable(0), b.instancingColor && a.enable(1), b.instancingMorph && a.enable(2), b.matcap && a.enable(3), b.envMap && a.enable(4), b.normalMapObjectSpace && a.enable(5), b.normalMapTangentSpace && a.enable(6), b.clearcoat && a.enable(7), b.iridescence && a.enable(8), b.alphaTest && a.enable(9), b.vertexColors && a.enable(10), b.vertexAlphas && a.enable(11), b.vertexUv1s && a.enable(12), b.vertexUv2s && a.enable(13), b.vertexUv3s && a.enable(14), b.vertexTangents && a.enable(15), b.anisotropy && a.enable(16), b.alphaHash && a.enable(17), b.batching && a.enable(18), b.dispersion && a.enable(19), b.batchingColor && a.enable(20), b.gradientMap && a.enable(21), b.packedNormalMap && a.enable(22), b.vertexNormals && a.enable(23), x.push(a.mask), a.disableAll(), b.fog && a.enable(0), b.useFog && a.enable(1), b.flatShading && a.enable(2), b.logarithmicDepthBuffer && a.enable(3), b.reversedDepthBuffer && a.enable(4), b.skinning && a.enable(5), b.morphTargets && a.enable(6), b.morphNormals && a.enable(7), b.morphColors && a.enable(8), b.premultipliedAlpha && a.enable(9), b.shadowMapEnabled && a.enable(10), b.doubleSided && a.enable(11), b.flipSided && a.enable(12), b.useDepthPacking && a.enable(13), b.dithering && a.enable(14), b.transmission && a.enable(15), b.sheen && a.enable(16), b.opaque && a.enable(17), b.pointsUvs && a.enable(18), b.decodeVideoTexture && a.enable(19), b.decodeVideoTextureEmissive && a.enable(20), b.alphaToCoverage && a.enable(21), b.numLightProbeGrids > 0 && a.enable(22), x.push(a.mask);
  }
  function A(x) {
    const b = p[x.type];
    let L;
    if (b) {
      const C = Zt[b];
      L = wa.clone(C.uniforms);
    } else
      L = x.uniforms;
    return L;
  }
  function E(x, b) {
    let L = f.get(b);
    return L !== void 0 ? ++L.usedTimes : (L = new qd(i, b, x, r), c.push(L), f.set(b, L)), L;
  }
  function R(x) {
    if (--x.usedTimes === 0) {
      const b = c.indexOf(x);
      c[b] = c[c.length - 1], c.pop(), f.delete(x.cacheKey), x.destroy();
    }
  }
  function y(x) {
    o.remove(x);
  }
  function P() {
    o.dispose();
  }
  return {
    getParameters: S,
    getProgramCacheKey: h,
    getUniforms: A,
    acquireProgram: E,
    releaseProgram: R,
    releaseShaderCache: y,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: P
  };
}
function Jd() {
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
  function r(a, o, l) {
    i.get(a)[o] = l;
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
function Qd(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function la(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function ca() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    let p = 0;
    return u.isInstancedMesh && (p += 2), u.isSkinnedMesh && (p += 1), p;
  }
  function o(u, p, g, S, h, d) {
    let M = i[e];
    return M === void 0 ? (M = {
      id: u.id,
      object: u,
      geometry: p,
      material: g,
      materialVariant: a(u),
      groupOrder: S,
      renderOrder: u.renderOrder,
      z: h,
      group: d
    }, i[e] = M) : (M.id = u.id, M.object = u, M.geometry = p, M.material = g, M.materialVariant = a(u), M.groupOrder = S, M.renderOrder = u.renderOrder, M.z = h, M.group = d), e++, M;
  }
  function l(u, p, g, S, h, d) {
    const M = o(u, p, g, S, h, d);
    g.transmission > 0 ? n.push(M) : g.transparent === !0 ? r.push(M) : t.push(M);
  }
  function c(u, p, g, S, h, d) {
    const M = o(u, p, g, S, h, d);
    g.transmission > 0 ? n.unshift(M) : g.transparent === !0 ? r.unshift(M) : t.unshift(M);
  }
  function f(u, p) {
    t.length > 1 && t.sort(u || Qd), n.length > 1 && n.sort(p || la), r.length > 1 && r.sort(p || la);
  }
  function m() {
    for (let u = e, p = i.length; u < p; u++) {
      const g = i[u];
      if (g.id === null) break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: l,
    unshift: c,
    finish: m,
    sort: f
  };
}
function eh() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new ca(), i.set(n, [a])) : r >= s.length ? (a = new ca(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function th() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new O(),
            color: new ke()
          };
          break;
        case "SpotLight":
          t = {
            position: new O(),
            direction: new O(),
            color: new ke(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new O(),
            color: new ke(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new O(),
            skyColor: new ke(),
            groundColor: new ke()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ke(),
            position: new O(),
            halfWidth: new O(),
            halfHeight: new O()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function nh() {
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
            shadowMapSize: new We()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new We()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new We(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let ih = 0;
function rh(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function sh(i) {
  const e = new th(), t = nh(), n = {
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
  for (let c = 0; c < 9; c++) n.probe.push(new O());
  const r = new O(), s = new ut(), a = new ut();
  function o(c) {
    let f = 0, m = 0, u = 0;
    for (let b = 0; b < 9; b++) n.probe[b].set(0, 0, 0);
    let p = 0, g = 0, S = 0, h = 0, d = 0, M = 0, A = 0, E = 0, R = 0, y = 0, P = 0;
    c.sort(rh);
    for (let b = 0, L = c.length; b < L; b++) {
      const C = c[b], B = C.color, k = C.intensity, W = C.distance;
      let I = null;
      if (C.shadow && C.shadow.map && (C.shadow.map.texture.format === 1030 ? I = C.shadow.map.texture : I = C.shadow.map.depthTexture || C.shadow.map.texture), C.isAmbientLight)
        f += B.r * k, m += B.g * k, u += B.b * k;
      else if (C.isLightProbe) {
        for (let z = 0; z < 9; z++)
          n.probe[z].addScaledVector(C.sh.coefficients[z], k);
        P++;
      } else if (C.isDirectionalLight) {
        const z = e.get(C);
        if (z.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const q = C.shadow, te = t.get(C);
          te.shadowIntensity = q.intensity, te.shadowBias = q.bias, te.shadowNormalBias = q.normalBias, te.shadowRadius = q.radius, te.shadowMapSize = q.mapSize, n.directionalShadow[p] = te, n.directionalShadowMap[p] = I, n.directionalShadowMatrix[p] = C.shadow.matrix, M++;
        }
        n.directional[p] = z, p++;
      } else if (C.isSpotLight) {
        const z = e.get(C);
        z.position.setFromMatrixPosition(C.matrixWorld), z.color.copy(B).multiplyScalar(k), z.distance = W, z.coneCos = Math.cos(C.angle), z.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), z.decay = C.decay, n.spot[S] = z;
        const q = C.shadow;
        if (C.map && (n.spotLightMap[R] = C.map, R++, q.updateMatrices(C), C.castShadow && y++), n.spotLightMatrix[S] = q.matrix, C.castShadow) {
          const te = t.get(C);
          te.shadowIntensity = q.intensity, te.shadowBias = q.bias, te.shadowNormalBias = q.normalBias, te.shadowRadius = q.radius, te.shadowMapSize = q.mapSize, n.spotShadow[S] = te, n.spotShadowMap[S] = I, E++;
        }
        S++;
      } else if (C.isRectAreaLight) {
        const z = e.get(C);
        z.color.copy(B).multiplyScalar(k), z.halfWidth.set(C.width * 0.5, 0, 0), z.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[h] = z, h++;
      } else if (C.isPointLight) {
        const z = e.get(C);
        if (z.color.copy(C.color).multiplyScalar(C.intensity), z.distance = C.distance, z.decay = C.decay, C.castShadow) {
          const q = C.shadow, te = t.get(C);
          te.shadowIntensity = q.intensity, te.shadowBias = q.bias, te.shadowNormalBias = q.normalBias, te.shadowRadius = q.radius, te.shadowMapSize = q.mapSize, te.shadowCameraNear = q.camera.near, te.shadowCameraFar = q.camera.far, n.pointShadow[g] = te, n.pointShadowMap[g] = I, n.pointShadowMatrix[g] = C.shadow.matrix, A++;
        }
        n.point[g] = z, g++;
      } else if (C.isHemisphereLight) {
        const z = e.get(C);
        z.skyColor.copy(C.color).multiplyScalar(k), z.groundColor.copy(C.groundColor).multiplyScalar(k), n.hemi[d] = z, d++;
      }
    }
    h > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = he.LTC_FLOAT_1, n.rectAreaLTC2 = he.LTC_FLOAT_2) : (n.rectAreaLTC1 = he.LTC_HALF_1, n.rectAreaLTC2 = he.LTC_HALF_2)), n.ambient[0] = f, n.ambient[1] = m, n.ambient[2] = u;
    const x = n.hash;
    (x.directionalLength !== p || x.pointLength !== g || x.spotLength !== S || x.rectAreaLength !== h || x.hemiLength !== d || x.numDirectionalShadows !== M || x.numPointShadows !== A || x.numSpotShadows !== E || x.numSpotMaps !== R || x.numLightProbes !== P) && (n.directional.length = p, n.spot.length = S, n.rectArea.length = h, n.point.length = g, n.hemi.length = d, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = A, n.pointShadowMap.length = A, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = A, n.spotLightMatrix.length = E + R - y, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = y, n.numLightProbes = P, x.directionalLength = p, x.pointLength = g, x.spotLength = S, x.rectAreaLength = h, x.hemiLength = d, x.numDirectionalShadows = M, x.numPointShadows = A, x.numSpotShadows = E, x.numSpotMaps = R, x.numLightProbes = P, n.version = ih++);
  }
  function l(c, f) {
    let m = 0, u = 0, p = 0, g = 0, S = 0;
    const h = f.matrixWorldInverse;
    for (let d = 0, M = c.length; d < M; d++) {
      const A = c[d];
      if (A.isDirectionalLight) {
        const E = n.directional[m];
        E.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(h), m++;
      } else if (A.isSpotLight) {
        const E = n.spot[p];
        E.position.setFromMatrixPosition(A.matrixWorld), E.position.applyMatrix4(h), E.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(h), p++;
      } else if (A.isRectAreaLight) {
        const E = n.rectArea[g];
        E.position.setFromMatrixPosition(A.matrixWorld), E.position.applyMatrix4(h), a.identity(), s.copy(A.matrixWorld), s.premultiply(h), a.extractRotation(s), E.halfWidth.set(A.width * 0.5, 0, 0), E.halfHeight.set(0, A.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), g++;
      } else if (A.isPointLight) {
        const E = n.point[u];
        E.position.setFromMatrixPosition(A.matrixWorld), E.position.applyMatrix4(h), u++;
      } else if (A.isHemisphereLight) {
        const E = n.hemi[S];
        E.direction.setFromMatrixPosition(A.matrixWorld), E.direction.transformDirection(h), S++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function ua(i) {
  const e = new sh(i), t = [], n = [], r = [];
  function s(u) {
    m.camera = u, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    t.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function l(u) {
    r.push(u);
  }
  function c() {
    e.setup(t);
  }
  function f(u) {
    e.setupView(t, u);
  }
  const m = {
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
    state: m,
    setupLights: c,
    setupLightsView: f,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: l
  };
}
function ah(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new ua(i), e.set(r, [o])) : s >= a.length ? (o = new ua(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const oh = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, lh = `uniform sampler2D shadow_pass;
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
}`, ch = [
  /* @__PURE__ */ new O(1, 0, 0),
  /* @__PURE__ */ new O(-1, 0, 0),
  /* @__PURE__ */ new O(0, 1, 0),
  /* @__PURE__ */ new O(0, -1, 0),
  /* @__PURE__ */ new O(0, 0, 1),
  /* @__PURE__ */ new O(0, 0, -1)
], uh = [
  /* @__PURE__ */ new O(0, -1, 0),
  /* @__PURE__ */ new O(0, -1, 0),
  /* @__PURE__ */ new O(0, 0, 1),
  /* @__PURE__ */ new O(0, 0, -1),
  /* @__PURE__ */ new O(0, -1, 0),
  /* @__PURE__ */ new O(0, -1, 0)
], da = /* @__PURE__ */ new ut(), li = /* @__PURE__ */ new O(), Br = /* @__PURE__ */ new O();
function dh(i, e, t) {
  let n = new nr();
  const r = new We(), s = new We(), a = new dt(), o = new Pa(), l = new Da(), c = {}, f = t.maxTextureSize, m = { 0: 1, 1: 0, 2: 2 }, u = new $t({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new We() },
      radius: { value: 4 }
    },
    vertexShader: oh,
    fragmentShader: lh
  }), p = u.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new yt();
  g.setAttribute(
    "position",
    new kt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const S = new zt(g, u), h = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let d = this.type;
  this.render = function(y, P, x) {
    if (h.enabled === !1 || h.autoUpdate === !1 && h.needsUpdate === !1 || y.length === 0) return;
    this.type === 2 && (Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
    const b = i.getRenderTarget(), L = i.getActiveCubeFace(), C = i.getActiveMipmapLevel(), B = i.state;
    B.setBlending(0), B.buffers.depth.getReversed() === !0 ? B.buffers.color.setClear(0, 0, 0, 0) : B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1);
    const k = d !== this.type;
    k && P.traverse(function(W) {
      W.material && (Array.isArray(W.material) ? W.material.forEach((I) => I.needsUpdate = !0) : W.material.needsUpdate = !0);
    });
    for (let W = 0, I = y.length; W < I; W++) {
      const z = y[W], q = z.shadow;
      if (q === void 0) {
        Pe("WebGLShadowMap:", z, "has no shadow.");
        continue;
      }
      if (q.autoUpdate === !1 && q.needsUpdate === !1) continue;
      r.copy(q.mapSize);
      const te = q.getFrameExtents();
      r.multiply(te), s.copy(q.mapSize), (r.x > f || r.y > f) && (r.x > f && (s.x = Math.floor(f / te.x), r.x = s.x * te.x, q.mapSize.x = s.x), r.y > f && (s.y = Math.floor(f / te.y), r.y = s.y * te.y, q.mapSize.y = s.y));
      const ne = i.state.buffers.depth.getReversed();
      if (q.camera._reversedDepth = ne, q.map === null || k === !0) {
        if (q.map !== null && (q.map.depthTexture !== null && (q.map.depthTexture.dispose(), q.map.depthTexture = null), q.map.dispose()), this.type === 3) {
          if (z.isPointLight) {
            Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          q.map = new Kt(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1
          }), q.map.texture.name = z.name + ".shadowMap", q.map.depthTexture = new Cn(r.x, r.y, 1015), q.map.depthTexture.name = z.name + ".shadowMapDepth", q.map.depthTexture.format = 1026, q.map.depthTexture.compareFunction = null, q.map.depthTexture.minFilter = 1003, q.map.depthTexture.magFilter = 1003;
        } else
          z.isPointLight ? (q.map = new ss(r.x), q.map.depthTexture = new ba(r.x, 1014)) : (q.map = new Kt(r.x, r.y), q.map.depthTexture = new Cn(r.x, r.y, 1014)), q.map.depthTexture.name = z.name + ".shadowMap", q.map.depthTexture.format = 1026, this.type === 1 ? (q.map.depthTexture.compareFunction = ne ? 518 : 515, q.map.depthTexture.minFilter = 1006, q.map.depthTexture.magFilter = 1006) : (q.map.depthTexture.compareFunction = null, q.map.depthTexture.minFilter = 1003, q.map.depthTexture.magFilter = 1003);
        q.camera.updateProjectionMatrix();
      }
      const de = q.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let Me = 0; Me < de; Me++) {
        if (q.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(q.map, Me), i.clear();
        else {
          Me === 0 && (i.setRenderTarget(q.map), i.clear());
          const be = q.getViewport(Me);
          a.set(
            s.x * be.x,
            s.y * be.y,
            s.x * be.z,
            s.y * be.w
          ), B.viewport(a);
        }
        if (z.isPointLight) {
          const be = q.camera, Ze = q.matrix, Ke = z.distance || be.far;
          Ke !== be.far && (be.far = Ke, be.updateProjectionMatrix()), li.setFromMatrixPosition(z.matrixWorld), be.position.copy(li), Br.copy(be.position), Br.add(ch[Me]), be.up.copy(uh[Me]), be.lookAt(Br), be.updateMatrixWorld(), Ze.makeTranslation(-li.x, -li.y, -li.z), da.multiplyMatrices(be.projectionMatrix, be.matrixWorldInverse), q._frustum.setFromProjectionMatrix(da, be.coordinateSystem, be.reversedDepth);
        } else
          q.updateMatrices(z);
        n = q.getFrustum(), E(P, x, q.camera, z, this.type);
      }
      q.isPointLightShadow !== !0 && this.type === 3 && M(q, x), q.needsUpdate = !1;
    }
    d = this.type, h.needsUpdate = !1, i.setRenderTarget(b, L, C);
  };
  function M(y, P) {
    const x = e.update(S);
    u.defines.VSM_SAMPLES !== y.blurSamples && (u.defines.VSM_SAMPLES = y.blurSamples, p.defines.VSM_SAMPLES = y.blurSamples, u.needsUpdate = !0, p.needsUpdate = !0), y.mapPass === null && (y.mapPass = new Kt(r.x, r.y, {
      format: 1030,
      type: 1016
    })), u.uniforms.shadow_pass.value = y.map.depthTexture, u.uniforms.resolution.value = y.mapSize, u.uniforms.radius.value = y.radius, i.setRenderTarget(y.mapPass), i.clear(), i.renderBufferDirect(P, null, x, u, S, null), p.uniforms.shadow_pass.value = y.mapPass.texture, p.uniforms.resolution.value = y.mapSize, p.uniforms.radius.value = y.radius, i.setRenderTarget(y.map), i.clear(), i.renderBufferDirect(P, null, x, p, S, null);
  }
  function A(y, P, x, b) {
    let L = null;
    const C = x.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (C !== void 0)
      L = C;
    else if (L = x.isPointLight === !0 ? l : o, i.localClippingEnabled && P.clipShadows === !0 && Array.isArray(P.clippingPlanes) && P.clippingPlanes.length !== 0 || P.displacementMap && P.displacementScale !== 0 || P.alphaMap && P.alphaTest > 0 || P.map && P.alphaTest > 0 || P.alphaToCoverage === !0) {
      const B = L.uuid, k = P.uuid;
      let W = c[B];
      W === void 0 && (W = {}, c[B] = W);
      let I = W[k];
      I === void 0 && (I = L.clone(), W[k] = I, P.addEventListener("dispose", R)), L = I;
    }
    if (L.visible = P.visible, L.wireframe = P.wireframe, b === 3 ? L.side = P.shadowSide !== null ? P.shadowSide : P.side : L.side = P.shadowSide !== null ? P.shadowSide : m[P.side], L.alphaMap = P.alphaMap, L.alphaTest = P.alphaToCoverage === !0 ? 0.5 : P.alphaTest, L.map = P.map, L.clipShadows = P.clipShadows, L.clippingPlanes = P.clippingPlanes, L.clipIntersection = P.clipIntersection, L.displacementMap = P.displacementMap, L.displacementScale = P.displacementScale, L.displacementBias = P.displacementBias, L.wireframeLinewidth = P.wireframeLinewidth, L.linewidth = P.linewidth, x.isPointLight === !0 && L.isMeshDistanceMaterial === !0) {
      const B = i.properties.get(L);
      B.light = x;
    }
    return L;
  }
  function E(y, P, x, b, L) {
    if (y.visible === !1) return;
    if (y.layers.test(P.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && L === 3) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, y.matrixWorld);
      const k = e.update(y), W = y.material;
      if (Array.isArray(W)) {
        const I = k.groups;
        for (let z = 0, q = I.length; z < q; z++) {
          const te = I[z], ne = W[te.materialIndex];
          if (ne && ne.visible) {
            const de = A(y, ne, b, L);
            y.onBeforeShadow(i, y, P, x, k, de, te), i.renderBufferDirect(x, null, k, de, y, te), y.onAfterShadow(i, y, P, x, k, de, te);
          }
        }
      } else if (W.visible) {
        const I = A(y, W, b, L);
        y.onBeforeShadow(i, y, P, x, k, I, null), i.renderBufferDirect(x, null, k, I, y, null), y.onAfterShadow(i, y, P, x, k, I, null);
      }
    }
    const B = y.children;
    for (let k = 0, W = B.length; k < W; k++)
      E(B[k], P, x, b, L);
  }
  function R(y) {
    y.target.removeEventListener("dispose", R);
    for (const x in c) {
      const b = c[x], L = y.target.uuid;
      L in b && (b[L].dispose(), delete b[L]);
    }
  }
}
function hh(i, e) {
  function t() {
    let D = !1;
    const oe = new dt();
    let K = null;
    const xe = new dt(0, 0, 0, 0);
    return {
      setMask: function(ue) {
        K !== ue && !D && (i.colorMask(ue, ue, ue, ue), K = ue);
      },
      setLocked: function(ue) {
        D = ue;
      },
      setClear: function(ue, w, U, J, ye) {
        ye === !0 && (ue *= J, w *= J, U *= J), oe.set(ue, w, U, J), xe.equals(oe) === !1 && (i.clearColor(ue, w, U, J), xe.copy(oe));
      },
      reset: function() {
        D = !1, K = null, xe.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let D = !1, oe = !1, K = null, xe = null, ue = null;
    return {
      setReversed: function(w) {
        if (oe !== w) {
          const U = e.get("EXT_clip_control");
          w ? U.clipControlEXT(U.LOWER_LEFT_EXT, U.ZERO_TO_ONE_EXT) : U.clipControlEXT(U.LOWER_LEFT_EXT, U.NEGATIVE_ONE_TO_ONE_EXT), oe = w;
          const J = ue;
          ue = null, this.setClear(J);
        }
      },
      getReversed: function() {
        return oe;
      },
      setTest: function(w) {
        w ? ie(i.DEPTH_TEST) : we(i.DEPTH_TEST);
      },
      setMask: function(w) {
        K !== w && !D && (i.depthMask(w), K = w);
      },
      setFunc: function(w) {
        if (oe && (w = eo[w]), xe !== w) {
          switch (w) {
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
          xe = w;
        }
      },
      setLocked: function(w) {
        D = w;
      },
      setClear: function(w) {
        ue !== w && (ue = w, oe && (w = 1 - w), i.clearDepth(w));
      },
      reset: function() {
        D = !1, K = null, xe = null, ue = null, oe = !1;
      }
    };
  }
  function r() {
    let D = !1, oe = null, K = null, xe = null, ue = null, w = null, U = null, J = null, ye = null;
    return {
      setTest: function(Te) {
        D || (Te ? ie(i.STENCIL_TEST) : we(i.STENCIL_TEST));
      },
      setMask: function(Te) {
        oe !== Te && !D && (i.stencilMask(Te), oe = Te);
      },
      setFunc: function(Te, et, ht) {
        (K !== Te || xe !== et || ue !== ht) && (i.stencilFunc(Te, et, ht), K = Te, xe = et, ue = ht);
      },
      setOp: function(Te, et, ht) {
        (w !== Te || U !== et || J !== ht) && (i.stencilOp(Te, et, ht), w = Te, U = et, J = ht);
      },
      setLocked: function(Te) {
        D = Te;
      },
      setClear: function(Te) {
        ye !== Te && (i.clearStencil(Te), ye = Te);
      },
      reset: function() {
        D = !1, oe = null, K = null, xe = null, ue = null, w = null, U = null, J = null, ye = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), g = [], S = null, h = !1, d = null, M = null, A = null, E = null, R = null, y = null, P = null, x = new ke(0, 0, 0), b = 0, L = !1, C = null, B = null, k = null, W = null, I = null;
  const z = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1, te = 0;
  const ne = i.getParameter(i.VERSION);
  ne.indexOf("WebGL") !== -1 ? (te = parseFloat(/^WebGL (\d)/.exec(ne)[1]), q = te >= 1) : ne.indexOf("OpenGL ES") !== -1 && (te = parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]), q = te >= 2);
  let de = null, Me = {};
  const be = i.getParameter(i.SCISSOR_BOX), Ze = i.getParameter(i.VIEWPORT), Ke = new dt().fromArray(be), Ne = new dt().fromArray(Ze);
  function Q(D, oe, K, xe) {
    const ue = new Uint8Array(4), w = i.createTexture();
    i.bindTexture(D, w), i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let U = 0; U < K; U++)
      D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(oe, 0, i.RGBA, 1, 1, xe, 0, i.RGBA, i.UNSIGNED_BYTE, ue) : i.texImage2D(oe + U, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ue);
    return w;
  }
  const fe = {};
  fe[i.TEXTURE_2D] = Q(i.TEXTURE_2D, i.TEXTURE_2D, 1), fe[i.TEXTURE_CUBE_MAP] = Q(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), fe[i.TEXTURE_2D_ARRAY] = Q(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), fe[i.TEXTURE_3D] = Q(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ie(i.DEPTH_TEST), a.setFunc(3), pt(!1), $(1), ie(i.CULL_FACE), Qe(0);
  function ie(D) {
    f[D] !== !0 && (i.enable(D), f[D] = !0);
  }
  function we(D) {
    f[D] !== !1 && (i.disable(D), f[D] = !1);
  }
  function Fe(D, oe) {
    return u[D] !== oe ? (i.bindFramebuffer(D, oe), u[D] = oe, D === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = oe), D === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = oe), !0) : !1;
  }
  function Ce(D, oe) {
    let K = g, xe = !1;
    if (D) {
      K = p.get(oe), K === void 0 && (K = [], p.set(oe, K));
      const ue = D.textures;
      if (K.length !== ue.length || K[0] !== i.COLOR_ATTACHMENT0) {
        for (let w = 0, U = ue.length; w < U; w++)
          K[w] = i.COLOR_ATTACHMENT0 + w;
        K.length = ue.length, xe = !0;
      }
    } else
      K[0] !== i.BACK && (K[0] = i.BACK, xe = !0);
    xe && i.drawBuffers(K);
  }
  function at(D) {
    return S !== D ? (i.useProgram(D), S = D, !0) : !1;
  }
  const Ve = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  Ve[103] = i.MIN, Ve[104] = i.MAX;
  const je = {
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
  function Qe(D, oe, K, xe, ue, w, U, J, ye, Te) {
    if (D === 0) {
      h === !0 && (we(i.BLEND), h = !1);
      return;
    }
    if (h === !1 && (ie(i.BLEND), h = !0), D !== 5) {
      if (D !== d || Te !== L) {
        if ((M !== 100 || R !== 100) && (i.blendEquation(i.FUNC_ADD), M = 100, R = 100), Te)
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
              $e("WebGLState: Invalid blending: ", D);
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
              $e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              $e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              $e("WebGLState: Invalid blending: ", D);
              break;
          }
        A = null, E = null, y = null, P = null, x.set(0, 0, 0), b = 0, d = D, L = Te;
      }
      return;
    }
    ue = ue || oe, w = w || K, U = U || xe, (oe !== M || ue !== R) && (i.blendEquationSeparate(Ve[oe], Ve[ue]), M = oe, R = ue), (K !== A || xe !== E || w !== y || U !== P) && (i.blendFuncSeparate(je[K], je[xe], je[w], je[U]), A = K, E = xe, y = w, P = U), (J.equals(x) === !1 || ye !== b) && (i.blendColor(J.r, J.g, J.b, ye), x.copy(J), b = ye), d = D, L = !1;
  }
  function De(D, oe) {
    D.side === 2 ? we(i.CULL_FACE) : ie(i.CULL_FACE);
    let K = D.side === 1;
    oe && (K = !K), pt(K), D.blending === 1 && D.transparent === !1 ? Qe(0) : Qe(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), s.setMask(D.colorWrite);
    const xe = D.stencilWrite;
    o.setTest(xe), xe && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), F(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? ie(i.SAMPLE_ALPHA_TO_COVERAGE) : we(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function pt(D) {
    C !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), C = D);
  }
  function $(D) {
    D !== 0 ? (ie(i.CULL_FACE), D !== B && (D === 1 ? i.cullFace(i.BACK) : D === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : we(i.CULL_FACE), B = D;
  }
  function wt(D) {
    D !== k && (q && i.lineWidth(D), k = D);
  }
  function F(D, oe, K) {
    D ? (ie(i.POLYGON_OFFSET_FILL), (W !== oe || I !== K) && (W = oe, I = K, a.getReversed() && (oe = -oe), i.polygonOffset(oe, K))) : we(i.POLYGON_OFFSET_FILL);
  }
  function Oe(D) {
    D ? ie(i.SCISSOR_TEST) : we(i.SCISSOR_TEST);
  }
  function Be(D) {
    D === void 0 && (D = i.TEXTURE0 + z - 1), de !== D && (i.activeTexture(D), de = D);
  }
  function nt(D, oe, K) {
    K === void 0 && (de === null ? K = i.TEXTURE0 + z - 1 : K = de);
    let xe = Me[K];
    xe === void 0 && (xe = { type: void 0, texture: void 0 }, Me[K] = xe), (xe.type !== D || xe.texture !== oe) && (de !== K && (i.activeTexture(K), de = K), i.bindTexture(D, oe || fe[D]), xe.type = D, xe.texture = oe);
  }
  function le() {
    const D = Me[de];
    D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function lt() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function T() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function _() {
    try {
      i.texSubImage2D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function G() {
    try {
      i.texSubImage3D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function j() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function ee() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function re() {
    try {
      i.texStorage2D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function se() {
    try {
      i.texStorage3D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function Y() {
    try {
      i.texImage2D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function Z() {
    try {
      i.texImage3D(...arguments);
    } catch (D) {
      $e("WebGLState:", D);
    }
  }
  function pe(D) {
    return m[D] !== void 0 ? m[D] : i.getParameter(D);
  }
  function ge(D, oe) {
    m[D] !== oe && (i.pixelStorei(D, oe), m[D] = oe);
  }
  function ce(D) {
    Ke.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w), Ke.copy(D));
  }
  function ae(D) {
    Ne.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w), Ne.copy(D));
  }
  function Le(D, oe) {
    let K = c.get(oe);
    K === void 0 && (K = /* @__PURE__ */ new WeakMap(), c.set(oe, K));
    let xe = K.get(D);
    xe === void 0 && (xe = i.getUniformBlockIndex(oe, D.name), K.set(D, xe));
  }
  function Ie(D, oe) {
    const xe = c.get(oe).get(D);
    l.get(oe) !== xe && (i.uniformBlockBinding(oe, xe, D.__bindingPointIndex), l.set(oe, xe));
  }
  function Xe() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), i.pixelStorei(i.PACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.BROWSER_DEFAULT_WEBGL), i.pixelStorei(i.PACK_ROW_LENGTH, 0), i.pixelStorei(i.PACK_SKIP_PIXELS, 0), i.pixelStorei(i.PACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_ROW_LENGTH, 0), i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0), i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0), i.pixelStorei(i.UNPACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0), f = {}, m = {}, de = null, Me = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), g = [], S = null, h = !1, d = null, M = null, A = null, E = null, R = null, y = null, P = null, x = new ke(0, 0, 0), b = 0, L = !1, C = null, B = null, k = null, W = null, I = null, Ke.set(0, 0, i.canvas.width, i.canvas.height), Ne.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: ie,
    disable: we,
    bindFramebuffer: Fe,
    drawBuffers: Ce,
    useProgram: at,
    setBlending: Qe,
    setMaterial: De,
    setFlipSided: pt,
    setCullFace: $,
    setLineWidth: wt,
    setPolygonOffset: F,
    setScissorTest: Oe,
    activeTexture: Be,
    bindTexture: nt,
    unbindTexture: le,
    compressedTexImage2D: lt,
    compressedTexImage3D: T,
    texImage2D: Y,
    texImage3D: Z,
    pixelStorei: ge,
    getParameter: pe,
    updateUBOMapping: Le,
    uniformBlockBinding: Ie,
    texStorage2D: re,
    texStorage3D: se,
    texSubImage2D: _,
    texSubImage3D: G,
    compressedTexSubImage2D: j,
    compressedTexSubImage3D: ee,
    scissor: ce,
    viewport: ae,
    reset: Xe
  };
}
function fh(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new We(), f = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new Set();
  let u;
  const p = /* @__PURE__ */ new WeakMap();
  let g = !1;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function S(T, _) {
    return g ? new OffscreenCanvas(T, _) : Yi("canvas");
  }
  function h(T, _, G) {
    let j = 1;
    const ee = lt(T);
    if ((ee.width > G || ee.height > G) && (j = G / Math.max(ee.width, ee.height)), j < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const re = Math.floor(j * ee.width), se = Math.floor(j * ee.height);
        u === void 0 && (u = S(re, se));
        const Y = _ ? S(re, se) : u;
        return Y.width = re, Y.height = se, Y.getContext("2d").drawImage(T, 0, 0, re, se), Pe("WebGLRenderer: Texture has been resized from (" + ee.width + "x" + ee.height + ") to (" + re + "x" + se + ")."), Y;
      } else
        return "data" in T && Pe("WebGLRenderer: Image in DataTexture is too big (" + ee.width + "x" + ee.height + ")."), T;
    return T;
  }
  function d(T) {
    return T.generateMipmaps;
  }
  function M(T) {
    i.generateMipmap(T);
  }
  function A(T) {
    return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function E(T, _, G, j, ee, re = !1) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let se;
    j && (se = e.get("EXT_texture_norm16"), se || Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let Y = _;
    if (_ === i.RED && (G === i.FLOAT && (Y = i.R32F), G === i.HALF_FLOAT && (Y = i.R16F), G === i.UNSIGNED_BYTE && (Y = i.R8), G === i.UNSIGNED_SHORT && se && (Y = se.R16_EXT), G === i.SHORT && se && (Y = se.R16_SNORM_EXT)), _ === i.RED_INTEGER && (G === i.UNSIGNED_BYTE && (Y = i.R8UI), G === i.UNSIGNED_SHORT && (Y = i.R16UI), G === i.UNSIGNED_INT && (Y = i.R32UI), G === i.BYTE && (Y = i.R8I), G === i.SHORT && (Y = i.R16I), G === i.INT && (Y = i.R32I)), _ === i.RG && (G === i.FLOAT && (Y = i.RG32F), G === i.HALF_FLOAT && (Y = i.RG16F), G === i.UNSIGNED_BYTE && (Y = i.RG8), G === i.UNSIGNED_SHORT && se && (Y = se.RG16_EXT), G === i.SHORT && se && (Y = se.RG16_SNORM_EXT)), _ === i.RG_INTEGER && (G === i.UNSIGNED_BYTE && (Y = i.RG8UI), G === i.UNSIGNED_SHORT && (Y = i.RG16UI), G === i.UNSIGNED_INT && (Y = i.RG32UI), G === i.BYTE && (Y = i.RG8I), G === i.SHORT && (Y = i.RG16I), G === i.INT && (Y = i.RG32I)), _ === i.RGB_INTEGER && (G === i.UNSIGNED_BYTE && (Y = i.RGB8UI), G === i.UNSIGNED_SHORT && (Y = i.RGB16UI), G === i.UNSIGNED_INT && (Y = i.RGB32UI), G === i.BYTE && (Y = i.RGB8I), G === i.SHORT && (Y = i.RGB16I), G === i.INT && (Y = i.RGB32I)), _ === i.RGBA_INTEGER && (G === i.UNSIGNED_BYTE && (Y = i.RGBA8UI), G === i.UNSIGNED_SHORT && (Y = i.RGBA16UI), G === i.UNSIGNED_INT && (Y = i.RGBA32UI), G === i.BYTE && (Y = i.RGBA8I), G === i.SHORT && (Y = i.RGBA16I), G === i.INT && (Y = i.RGBA32I)), _ === i.RGB && (G === i.UNSIGNED_SHORT && se && (Y = se.RGB16_EXT), G === i.SHORT && se && (Y = se.RGB16_SNORM_EXT), G === i.UNSIGNED_INT_5_9_9_9_REV && (Y = i.RGB9_E5), G === i.UNSIGNED_INT_10F_11F_11F_REV && (Y = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const Z = re ? di : qe.getTransfer(ee);
      G === i.FLOAT && (Y = i.RGBA32F), G === i.HALF_FLOAT && (Y = i.RGBA16F), G === i.UNSIGNED_BYTE && (Y = Z === tt ? i.SRGB8_ALPHA8 : i.RGBA8), G === i.UNSIGNED_SHORT && se && (Y = se.RGBA16_EXT), G === i.SHORT && se && (Y = se.RGBA16_SNORM_EXT), G === i.UNSIGNED_SHORT_4_4_4_4 && (Y = i.RGBA4), G === i.UNSIGNED_SHORT_5_5_5_1 && (Y = i.RGB5_A1);
    }
    return (Y === i.R16F || Y === i.R32F || Y === i.RG16F || Y === i.RG32F || Y === i.RGBA16F || Y === i.RGBA32F) && e.get("EXT_color_buffer_float"), Y;
  }
  function R(T, _) {
    let G;
    return T ? _ === null || _ === 1014 || _ === 1020 ? G = i.DEPTH24_STENCIL8 : _ === 1015 ? G = i.DEPTH32F_STENCIL8 : _ === 1012 && (G = i.DEPTH24_STENCIL8, Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === 1014 || _ === 1020 ? G = i.DEPTH_COMPONENT24 : _ === 1015 ? G = i.DEPTH_COMPONENT32F : _ === 1012 && (G = i.DEPTH_COMPONENT16), G;
  }
  function y(T, _) {
    return d(T) === !0 || T.isFramebufferTexture && T.minFilter !== 1003 && T.minFilter !== 1006 ? Math.log2(Math.max(_.width, _.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? _.mipmaps.length : 1;
  }
  function P(T) {
    const _ = T.target;
    _.removeEventListener("dispose", P), b(_), _.isVideoTexture && f.delete(_), _.isHTMLTexture && m.delete(_);
  }
  function x(T) {
    const _ = T.target;
    _.removeEventListener("dispose", x), C(_);
  }
  function b(T) {
    const _ = n.get(T);
    if (_.__webglInit === void 0) return;
    const G = T.source, j = p.get(G);
    if (j) {
      const ee = j[_.__cacheKey];
      ee.usedTimes--, ee.usedTimes === 0 && L(T), Object.keys(j).length === 0 && p.delete(G);
    }
    n.remove(T);
  }
  function L(T) {
    const _ = n.get(T);
    i.deleteTexture(_.__webglTexture);
    const G = T.source, j = p.get(G);
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
    const G = T.textures;
    for (let j = 0, ee = G.length; j < ee; j++) {
      const re = n.get(G[j]);
      re.__webglTexture && (i.deleteTexture(re.__webglTexture), a.memory.textures--), n.remove(G[j]);
    }
    n.remove(T);
  }
  let B = 0;
  function k() {
    B = 0;
  }
  function W() {
    return B;
  }
  function I(T) {
    B = T;
  }
  function z() {
    const T = B;
    return T >= r.maxTextures && Pe("WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), B += 1, T;
  }
  function q(T) {
    const _ = [];
    return _.push(T.wrapS), _.push(T.wrapT), _.push(T.wrapR || 0), _.push(T.magFilter), _.push(T.minFilter), _.push(T.anisotropy), _.push(T.internalFormat), _.push(T.format), _.push(T.type), _.push(T.generateMipmaps), _.push(T.premultiplyAlpha), _.push(T.flipY), _.push(T.unpackAlignment), _.push(T.colorSpace), _.join();
  }
  function te(T, _) {
    const G = n.get(T);
    if (T.isVideoTexture && nt(T), T.isRenderTargetTexture === !1 && T.isExternalTexture !== !0 && T.version > 0 && G.__version !== T.version) {
      const j = T.image;
      if (j === null)
        Pe("WebGLRenderer: Texture marked for update but no image data found.");
      else if (j.complete === !1)
        Pe("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        we(G, T, _);
        return;
      }
    } else T.isExternalTexture && (G.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, G.__webglTexture, i.TEXTURE0 + _);
  }
  function ne(T, _) {
    const G = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && G.__version !== T.version) {
      we(G, T, _);
      return;
    } else T.isExternalTexture && (G.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, G.__webglTexture, i.TEXTURE0 + _);
  }
  function de(T, _) {
    const G = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && G.__version !== T.version) {
      we(G, T, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, G.__webglTexture, i.TEXTURE0 + _);
  }
  function Me(T, _) {
    const G = n.get(T);
    if (T.isCubeDepthTexture !== !0 && T.version > 0 && G.__version !== T.version) {
      Fe(G, T, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, G.__webglTexture, i.TEXTURE0 + _);
  }
  const be = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, Ze = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, Ke = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function Ne(T, _) {
    if (_.type === 1015 && e.has("OES_texture_float_linear") === !1 && (_.magFilter === 1006 || _.magFilter === 1007 || _.magFilter === 1005 || _.magFilter === 1008 || _.minFilter === 1006 || _.minFilter === 1007 || _.minFilter === 1005 || _.minFilter === 1008) && Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, be[_.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, be[_.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, be[_.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, Ze[_.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, Ze[_.minFilter]), _.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, Ke[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === 1003 || _.minFilter !== 1005 && _.minFilter !== 1008 || _.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const G = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, G.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Q(T, _) {
    let G = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, _.addEventListener("dispose", P));
    const j = _.source;
    let ee = p.get(j);
    ee === void 0 && (ee = {}, p.set(j, ee));
    const re = q(_);
    if (re !== T.__cacheKey) {
      ee[re] === void 0 && (ee[re] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, G = !0), ee[re].usedTimes++;
      const se = ee[T.__cacheKey];
      se !== void 0 && (ee[T.__cacheKey].usedTimes--, se.usedTimes === 0 && L(_)), T.__cacheKey = re, T.__webglTexture = ee[re].texture;
    }
    return G;
  }
  function fe(T, _, G) {
    return Math.floor(Math.floor(T / G) / _);
  }
  function ie(T, _, G, j) {
    const re = T.updateRanges;
    if (re.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, G, j, _.data);
    else {
      re.sort((ge, ce) => ge.start - ce.start);
      let se = 0;
      for (let ge = 1; ge < re.length; ge++) {
        const ce = re[se], ae = re[ge], Le = ce.start + ce.count, Ie = fe(ae.start, _.width, 4), Xe = fe(ce.start, _.width, 4);
        ae.start <= Le + 1 && Ie === Xe && fe(ae.start + ae.count - 1, _.width, 4) === Ie ? ce.count = Math.max(
          ce.count,
          ae.start + ae.count - ce.start
        ) : (++se, re[se] = ae);
      }
      re.length = se + 1;
      const Y = t.getParameter(i.UNPACK_ROW_LENGTH), Z = t.getParameter(i.UNPACK_SKIP_PIXELS), pe = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let ge = 0, ce = re.length; ge < ce; ge++) {
        const ae = re[ge], Le = Math.floor(ae.start / 4), Ie = Math.ceil(ae.count / 4), Xe = Le % _.width, D = Math.floor(Le / _.width), oe = Ie, K = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, Xe), t.pixelStorei(i.UNPACK_SKIP_ROWS, D), t.texSubImage2D(i.TEXTURE_2D, 0, Xe, D, oe, K, G, j, _.data);
      }
      T.clearUpdateRanges(), t.pixelStorei(i.UNPACK_ROW_LENGTH, Y), t.pixelStorei(i.UNPACK_SKIP_PIXELS, Z), t.pixelStorei(i.UNPACK_SKIP_ROWS, pe);
    }
  }
  function we(T, _, G) {
    let j = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (j = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (j = i.TEXTURE_3D);
    const ee = Q(T, _), re = _.source;
    t.bindTexture(j, T.__webglTexture, i.TEXTURE0 + G);
    const se = n.get(re);
    if (re.version !== se.__version || ee === !0) {
      if (t.activeTexture(i.TEXTURE0 + G), (typeof ImageBitmap < "u" && _.image instanceof ImageBitmap) === !1) {
        const K = qe.getPrimaries(qe.workingColorSpace), xe = _.colorSpace === on ? null : qe.getPrimaries(_.colorSpace), ue = _.colorSpace === on || K === xe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment);
      let Z = h(_.image, !1, r.maxTextureSize);
      Z = le(_, Z);
      const pe = s.convert(_.format, _.colorSpace), ge = s.convert(_.type);
      let ce = E(_.internalFormat, pe, ge, _.normalized, _.colorSpace, _.isVideoTexture);
      Ne(j, _);
      let ae;
      const Le = _.mipmaps, Ie = _.isVideoTexture !== !0, Xe = se.__version === void 0 || ee === !0, D = re.dataReady, oe = y(_, Z);
      if (_.isDepthTexture)
        ce = R(_.format === 1027, _.type), Xe && (Ie ? t.texStorage2D(i.TEXTURE_2D, 1, ce, Z.width, Z.height) : t.texImage2D(i.TEXTURE_2D, 0, ce, Z.width, Z.height, 0, pe, ge, null));
      else if (_.isDataTexture)
        if (Le.length > 0) {
          Ie && Xe && t.texStorage2D(i.TEXTURE_2D, oe, ce, Le[0].width, Le[0].height);
          for (let K = 0, xe = Le.length; K < xe; K++)
            ae = Le[K], Ie ? D && t.texSubImage2D(i.TEXTURE_2D, K, 0, 0, ae.width, ae.height, pe, ge, ae.data) : t.texImage2D(i.TEXTURE_2D, K, ce, ae.width, ae.height, 0, pe, ge, ae.data);
          _.generateMipmaps = !1;
        } else
          Ie ? (Xe && t.texStorage2D(i.TEXTURE_2D, oe, ce, Z.width, Z.height), D && ie(_, Z, pe, ge)) : t.texImage2D(i.TEXTURE_2D, 0, ce, Z.width, Z.height, 0, pe, ge, Z.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Ie && Xe && t.texStorage3D(i.TEXTURE_2D_ARRAY, oe, ce, Le[0].width, Le[0].height, Z.depth);
          for (let K = 0, xe = Le.length; K < xe; K++)
            if (ae = Le[K], _.format !== 1023)
              if (pe !== null)
                if (Ie) {
                  if (D)
                    if (_.layerUpdates.size > 0) {
                      const ue = ks(ae.width, ae.height, _.format, _.type);
                      for (const w of _.layerUpdates) {
                        const U = ae.data.subarray(
                          w * ue / ae.data.BYTES_PER_ELEMENT,
                          (w + 1) * ue / ae.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, K, 0, 0, w, ae.width, ae.height, 1, pe, U);
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, K, 0, 0, 0, ae.width, ae.height, Z.depth, pe, ae.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, K, ce, ae.width, ae.height, Z.depth, 0, ae.data, 0, 0);
              else
                Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Ie ? D && t.texSubImage3D(i.TEXTURE_2D_ARRAY, K, 0, 0, 0, ae.width, ae.height, Z.depth, pe, ge, ae.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, K, ce, ae.width, ae.height, Z.depth, 0, pe, ge, ae.data);
        } else {
          Ie && Xe && t.texStorage2D(i.TEXTURE_2D, oe, ce, Le[0].width, Le[0].height);
          for (let K = 0, xe = Le.length; K < xe; K++)
            ae = Le[K], _.format !== 1023 ? pe !== null ? Ie ? D && t.compressedTexSubImage2D(i.TEXTURE_2D, K, 0, 0, ae.width, ae.height, pe, ae.data) : t.compressedTexImage2D(i.TEXTURE_2D, K, ce, ae.width, ae.height, 0, ae.data) : Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ie ? D && t.texSubImage2D(i.TEXTURE_2D, K, 0, 0, ae.width, ae.height, pe, ge, ae.data) : t.texImage2D(i.TEXTURE_2D, K, ce, ae.width, ae.height, 0, pe, ge, ae.data);
        }
      else if (_.isDataArrayTexture)
        if (Ie) {
          if (Xe && t.texStorage3D(i.TEXTURE_2D_ARRAY, oe, ce, Z.width, Z.height, Z.depth), D)
            if (_.layerUpdates.size > 0) {
              const K = ks(Z.width, Z.height, _.format, _.type);
              for (const xe of _.layerUpdates) {
                const ue = Z.data.subarray(
                  xe * K / Z.data.BYTES_PER_ELEMENT,
                  (xe + 1) * K / Z.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, xe, Z.width, Z.height, 1, pe, ge, ue);
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Z.width, Z.height, Z.depth, pe, ge, Z.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ce, Z.width, Z.height, Z.depth, 0, pe, ge, Z.data);
      else if (_.isData3DTexture)
        Ie ? (Xe && t.texStorage3D(i.TEXTURE_3D, oe, ce, Z.width, Z.height, Z.depth), D && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Z.width, Z.height, Z.depth, pe, ge, Z.data)) : t.texImage3D(i.TEXTURE_3D, 0, ce, Z.width, Z.height, Z.depth, 0, pe, ge, Z.data);
      else if (_.isFramebufferTexture) {
        if (Xe)
          if (Ie)
            t.texStorage2D(i.TEXTURE_2D, oe, ce, Z.width, Z.height);
          else {
            let K = Z.width, xe = Z.height;
            for (let ue = 0; ue < oe; ue++)
              t.texImage2D(i.TEXTURE_2D, ue, ce, K, xe, 0, pe, ge, null), K >>= 1, xe >>= 1;
          }
      } else if (_.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const K = i.canvas;
          if (K.hasAttribute("layoutsubtree") || K.setAttribute("layoutsubtree", "true"), Z.parentNode !== K) {
            K.appendChild(Z), m.add(_), K.onpaint = (J) => {
              const ye = J.changedElements;
              for (const Te of m)
                ye.includes(Te.image) && (Te.needsUpdate = !0);
            }, K.requestPaint();
            return;
          }
          const xe = 0, ue = i.RGBA, w = i.RGBA, U = i.UNSIGNED_BYTE;
          i.texElementImage2D(i.TEXTURE_2D, xe, ue, w, U, Z), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (Le.length > 0) {
        if (Ie && Xe) {
          const K = lt(Le[0]);
          t.texStorage2D(i.TEXTURE_2D, oe, ce, K.width, K.height);
        }
        for (let K = 0, xe = Le.length; K < xe; K++)
          ae = Le[K], Ie ? D && t.texSubImage2D(i.TEXTURE_2D, K, 0, 0, pe, ge, ae) : t.texImage2D(i.TEXTURE_2D, K, ce, pe, ge, ae);
        _.generateMipmaps = !1;
      } else if (Ie) {
        if (Xe) {
          const K = lt(Z);
          t.texStorage2D(i.TEXTURE_2D, oe, ce, K.width, K.height);
        }
        D && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, pe, ge, Z);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, ce, pe, ge, Z);
      d(_) && M(j), se.__version = re.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function Fe(T, _, G) {
    if (_.image.length !== 6) return;
    const j = Q(T, _), ee = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + G);
    const re = n.get(ee);
    if (ee.version !== re.__version || j === !0) {
      t.activeTexture(i.TEXTURE0 + G);
      const se = qe.getPrimaries(qe.workingColorSpace), Y = _.colorSpace === on ? null : qe.getPrimaries(_.colorSpace), Z = _.colorSpace === on || se === Y ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Z);
      const pe = _.isCompressedTexture || _.image[0].isCompressedTexture, ge = _.image[0] && _.image[0].isDataTexture, ce = [];
      for (let w = 0; w < 6; w++)
        !pe && !ge ? ce[w] = h(_.image[w], !0, r.maxCubemapSize) : ce[w] = ge ? _.image[w].image : _.image[w], ce[w] = le(_, ce[w]);
      const ae = ce[0], Le = s.convert(_.format, _.colorSpace), Ie = s.convert(_.type), Xe = E(_.internalFormat, Le, Ie, _.normalized, _.colorSpace), D = _.isVideoTexture !== !0, oe = re.__version === void 0 || j === !0, K = ee.dataReady;
      let xe = y(_, ae);
      Ne(i.TEXTURE_CUBE_MAP, _);
      let ue;
      if (pe) {
        D && oe && t.texStorage2D(i.TEXTURE_CUBE_MAP, xe, Xe, ae.width, ae.height);
        for (let w = 0; w < 6; w++) {
          ue = ce[w].mipmaps;
          for (let U = 0; U < ue.length; U++) {
            const J = ue[U];
            _.format !== 1023 ? Le !== null ? D ? K && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, U, 0, 0, J.width, J.height, Le, J.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, U, Xe, J.width, J.height, 0, J.data) : Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? K && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, U, 0, 0, J.width, J.height, Le, Ie, J.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, U, Xe, J.width, J.height, 0, Le, Ie, J.data);
          }
        }
      } else {
        if (ue = _.mipmaps, D && oe) {
          ue.length > 0 && xe++;
          const w = lt(ce[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, xe, Xe, w.width, w.height);
        }
        for (let w = 0; w < 6; w++)
          if (ge) {
            D ? K && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, 0, 0, 0, ce[w].width, ce[w].height, Le, Ie, ce[w].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, 0, Xe, ce[w].width, ce[w].height, 0, Le, Ie, ce[w].data);
            for (let U = 0; U < ue.length; U++) {
              const ye = ue[U].image[w].image;
              D ? K && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, U + 1, 0, 0, ye.width, ye.height, Le, Ie, ye.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, U + 1, Xe, ye.width, ye.height, 0, Le, Ie, ye.data);
            }
          } else {
            D ? K && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, 0, 0, 0, Le, Ie, ce[w]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, 0, Xe, Le, Ie, ce[w]);
            for (let U = 0; U < ue.length; U++) {
              const J = ue[U];
              D ? K && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, U + 1, 0, 0, Le, Ie, J.image[w]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + w, U + 1, Xe, Le, Ie, J.image[w]);
            }
          }
      }
      d(_) && M(i.TEXTURE_CUBE_MAP), re.__version = ee.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function Ce(T, _, G, j, ee, re) {
    const se = s.convert(G.format, G.colorSpace), Y = s.convert(G.type), Z = E(G.internalFormat, se, Y, G.normalized, G.colorSpace), pe = n.get(_), ge = n.get(G);
    if (ge.__renderTarget = _, !pe.__hasExternalTextures) {
      const ce = Math.max(1, _.width >> re), ae = Math.max(1, _.height >> re);
      ee === i.TEXTURE_3D || ee === i.TEXTURE_2D_ARRAY ? t.texImage3D(ee, re, Z, ce, ae, _.depth, 0, se, Y, null) : t.texImage2D(ee, re, Z, ce, ae, 0, se, Y, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, T), Be(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, j, ee, ge.__webglTexture, 0, Oe(_)) : (ee === i.TEXTURE_2D || ee >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ee <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, j, ee, ge.__webglTexture, re), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function at(T, _, G) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), _.depthBuffer) {
      const j = _.depthTexture, ee = j && j.isDepthTexture ? j.type : null, re = R(_.stencilBuffer, ee), se = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      Be(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Oe(_), re, _.width, _.height) : G ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Oe(_), re, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, re, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, se, i.RENDERBUFFER, T);
    } else {
      const j = _.textures;
      for (let ee = 0; ee < j.length; ee++) {
        const re = j[ee], se = s.convert(re.format, re.colorSpace), Y = s.convert(re.type), Z = E(re.internalFormat, se, Y, re.normalized, re.colorSpace);
        Be(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Oe(_), Z, _.width, _.height) : G ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Oe(_), Z, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, Z, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Ve(T, _, G) {
    const j = _.isWebGLCubeRenderTarget === !0;
    if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const ee = n.get(_.depthTexture);
    if (ee.__renderTarget = _, (!ee.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), j) {
      if (ee.__webglInit === void 0 && (ee.__webglInit = !0, _.depthTexture.addEventListener("dispose", P)), ee.__webglTexture === void 0) {
        ee.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, ee.__webglTexture), Ne(i.TEXTURE_CUBE_MAP, _.depthTexture);
        const pe = s.convert(_.depthTexture.format), ge = s.convert(_.depthTexture.type);
        let ce;
        _.depthTexture.format === 1026 ? ce = i.DEPTH_COMPONENT24 : _.depthTexture.format === 1027 && (ce = i.DEPTH24_STENCIL8);
        for (let ae = 0; ae < 6; ae++)
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0, ce, _.width, _.height, 0, pe, ge, null);
      }
    } else
      te(_.depthTexture, 0);
    const re = ee.__webglTexture, se = Oe(_), Y = j ? i.TEXTURE_CUBE_MAP_POSITIVE_X + G : i.TEXTURE_2D, Z = _.depthTexture.format === 1027 ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (_.depthTexture.format === 1026)
      Be(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Z, Y, re, 0, se) : i.framebufferTexture2D(i.FRAMEBUFFER, Z, Y, re, 0);
    else if (_.depthTexture.format === 1027)
      Be(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Z, Y, re, 0, se) : i.framebufferTexture2D(i.FRAMEBUFFER, Z, Y, re, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function je(T) {
    const _ = n.get(T), G = T.isWebGLCubeRenderTarget === !0;
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
      if (G)
        for (let j = 0; j < 6; j++)
          Ve(_.__webglFramebuffer[j], T, j);
      else {
        const j = T.texture.mipmaps;
        j && j.length > 0 ? Ve(_.__webglFramebuffer[0], T, 0) : Ve(_.__webglFramebuffer, T, 0);
      }
    else if (G) {
      _.__webglDepthbuffer = [];
      for (let j = 0; j < 6; j++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[j]), _.__webglDepthbuffer[j] === void 0)
          _.__webglDepthbuffer[j] = i.createRenderbuffer(), at(_.__webglDepthbuffer[j], T, !1);
        else {
          const ee = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, re = _.__webglDepthbuffer[j];
          i.bindRenderbuffer(i.RENDERBUFFER, re), i.framebufferRenderbuffer(i.FRAMEBUFFER, ee, i.RENDERBUFFER, re);
        }
    } else {
      const j = T.texture.mipmaps;
      if (j && j.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
        _.__webglDepthbuffer = i.createRenderbuffer(), at(_.__webglDepthbuffer, T, !1);
      else {
        const ee = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, re = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, re), i.framebufferRenderbuffer(i.FRAMEBUFFER, ee, i.RENDERBUFFER, re);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Qe(T, _, G) {
    const j = n.get(T);
    _ !== void 0 && Ce(j.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), G !== void 0 && je(T);
  }
  function De(T) {
    const _ = T.texture, G = n.get(T), j = n.get(_);
    T.addEventListener("dispose", x);
    const ee = T.textures, re = T.isWebGLCubeRenderTarget === !0, se = ee.length > 1;
    if (se || (j.__webglTexture === void 0 && (j.__webglTexture = i.createTexture()), j.__version = _.version, a.memory.textures++), re) {
      G.__webglFramebuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          G.__webglFramebuffer[Y] = [];
          for (let Z = 0; Z < _.mipmaps.length; Z++)
            G.__webglFramebuffer[Y][Z] = i.createFramebuffer();
        } else
          G.__webglFramebuffer[Y] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        G.__webglFramebuffer = [];
        for (let Y = 0; Y < _.mipmaps.length; Y++)
          G.__webglFramebuffer[Y] = i.createFramebuffer();
      } else
        G.__webglFramebuffer = i.createFramebuffer();
      if (se)
        for (let Y = 0, Z = ee.length; Y < Z; Y++) {
          const pe = n.get(ee[Y]);
          pe.__webglTexture === void 0 && (pe.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (T.samples > 0 && Be(T) === !1) {
        G.__webglMultisampledFramebuffer = i.createFramebuffer(), G.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, G.__webglMultisampledFramebuffer);
        for (let Y = 0; Y < ee.length; Y++) {
          const Z = ee[Y];
          G.__webglColorRenderbuffer[Y] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, G.__webglColorRenderbuffer[Y]);
          const pe = s.convert(Z.format, Z.colorSpace), ge = s.convert(Z.type), ce = E(Z.internalFormat, pe, ge, Z.normalized, Z.colorSpace, T.isXRRenderTarget === !0), ae = Oe(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, ae, ce, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Y, i.RENDERBUFFER, G.__webglColorRenderbuffer[Y]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (G.__webglDepthRenderbuffer = i.createRenderbuffer(), at(G.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (re) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, j.__webglTexture), Ne(i.TEXTURE_CUBE_MAP, _);
      for (let Y = 0; Y < 6; Y++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let Z = 0; Z < _.mipmaps.length; Z++)
            Ce(G.__webglFramebuffer[Y][Z], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Z);
        else
          Ce(G.__webglFramebuffer[Y], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0);
      d(_) && M(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (se) {
      for (let Y = 0, Z = ee.length; Y < Z; Y++) {
        const pe = ee[Y], ge = n.get(pe);
        let ce = i.TEXTURE_2D;
        (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ce = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ce, ge.__webglTexture), Ne(ce, pe), Ce(G.__webglFramebuffer, T, pe, i.COLOR_ATTACHMENT0 + Y, ce, 0), d(pe) && M(ce);
      }
      t.unbindTexture();
    } else {
      let Y = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (Y = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(Y, j.__webglTexture), Ne(Y, _), _.mipmaps && _.mipmaps.length > 0)
        for (let Z = 0; Z < _.mipmaps.length; Z++)
          Ce(G.__webglFramebuffer[Z], T, _, i.COLOR_ATTACHMENT0, Y, Z);
      else
        Ce(G.__webglFramebuffer, T, _, i.COLOR_ATTACHMENT0, Y, 0);
      d(_) && M(Y), t.unbindTexture();
    }
    T.depthBuffer && je(T);
  }
  function pt(T) {
    const _ = T.textures;
    for (let G = 0, j = _.length; G < j; G++) {
      const ee = _[G];
      if (d(ee)) {
        const re = A(T), se = n.get(ee).__webglTexture;
        t.bindTexture(re, se), M(re), t.unbindTexture();
      }
    }
  }
  const $ = [], wt = [];
  function F(T) {
    if (T.samples > 0) {
      if (Be(T) === !1) {
        const _ = T.textures, G = T.width, j = T.height;
        let ee = i.COLOR_BUFFER_BIT;
        const re = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, se = n.get(T), Y = _.length > 1;
        if (Y)
          for (let pe = 0; pe < _.length; pe++)
            t.bindFramebuffer(i.FRAMEBUFFER, se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
        const Z = T.texture.mipmaps;
        Z && Z.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, se.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, se.__webglFramebuffer);
        for (let pe = 0; pe < _.length; pe++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (ee |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (ee |= i.STENCIL_BUFFER_BIT)), Y) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, se.__webglColorRenderbuffer[pe]);
            const ge = n.get(_[pe]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, ge, 0);
          }
          i.blitFramebuffer(0, 0, G, j, 0, 0, G, j, ee, i.NEAREST), l === !0 && ($.length = 0, wt.length = 0, $.push(i.COLOR_ATTACHMENT0 + pe), T.depthBuffer && T.resolveDepthBuffer === !1 && ($.push(re), wt.push(re), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, wt)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, $));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), Y)
          for (let pe = 0; pe < _.length; pe++) {
            t.bindFramebuffer(i.FRAMEBUFFER, se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.RENDERBUFFER, se.__webglColorRenderbuffer[pe]);
            const ge = n.get(_[pe]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.TEXTURE_2D, ge, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && l) {
        const _ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function Oe(T) {
    return Math.min(r.maxSamples, T.samples);
  }
  function Be(T) {
    const _ = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function nt(T) {
    const _ = a.render.frame;
    f.get(T) !== _ && (f.set(T, _), T.update());
  }
  function le(T, _) {
    const G = T.colorSpace, j = T.format, ee = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || G !== ui && G !== on && (qe.getTransfer(G) === tt ? (j !== 1023 || ee !== 1009) && Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : $e("WebGLTextures: Unsupported texture color space:", G)), _;
  }
  function lt(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = k, this.getTextureUnits = W, this.setTextureUnits = I, this.setTexture2D = te, this.setTexture2DArray = ne, this.setTexture3D = de, this.setTextureCube = Me, this.rebindTextures = Qe, this.setupRenderTarget = De, this.updateRenderTargetMipmap = pt, this.updateMultisampleRenderTarget = F, this.setupDepthRenderbuffer = je, this.setupFrameBufferTexture = Ce, this.useMultisampledRTT = Be, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function Va(i, e) {
  function t(n, r = on) {
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
      if (a === tt)
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
        if (n === 36196 || n === 37492) return a === tt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return s.COMPRESSED_R11_EAC;
        if (n === 37489) return s.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return s.COMPRESSED_RG11_EAC;
        if (n === 37491) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === tt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return a === tt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
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
const ph = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, mh = `
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
class _h {
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
      const n = new Qr(e.texture);
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
      const t = e.cameras[0].viewport, n = new $t({
        vertexShader: ph,
        fragmentShader: mh,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new zt(new Pn(20, 20), n);
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
class gh extends yn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, f = null, m = null, u = null, p = null, g = null;
    const S = typeof XRWebGLBinding < "u", h = new _h(), d = {}, M = t.getContextAttributes();
    let A = null, E = null;
    const R = [], y = [], P = new We();
    let x = null;
    const b = new Ot();
    b.viewport = new dt();
    const L = new Ot();
    L.viewport = new dt();
    const C = [b, L], B = new Ia();
    let k = null, W = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Q) {
      let fe = R[Q];
      return fe === void 0 && (fe = new Xi(), R[Q] = fe), fe.getTargetRaySpace();
    }, this.getControllerGrip = function(Q) {
      let fe = R[Q];
      return fe === void 0 && (fe = new Xi(), R[Q] = fe), fe.getGripSpace();
    }, this.getHand = function(Q) {
      let fe = R[Q];
      return fe === void 0 && (fe = new Xi(), R[Q] = fe), fe.getHandSpace();
    };
    function I(Q) {
      const fe = y.indexOf(Q.inputSource);
      if (fe === -1)
        return;
      const ie = R[fe];
      ie !== void 0 && (ie.update(Q.inputSource, Q.frame, c || a), ie.dispatchEvent({ type: Q.type, data: Q.inputSource }));
    }
    function z() {
      r.removeEventListener("select", I), r.removeEventListener("selectstart", I), r.removeEventListener("selectend", I), r.removeEventListener("squeeze", I), r.removeEventListener("squeezestart", I), r.removeEventListener("squeezeend", I), r.removeEventListener("end", z), r.removeEventListener("inputsourceschange", q);
      for (let Q = 0; Q < R.length; Q++) {
        const fe = y[Q];
        fe !== null && (y[Q] = null, R[Q].disconnect(fe));
      }
      k = null, W = null, h.reset();
      for (const Q in d)
        delete d[Q];
      e.setRenderTarget(A), p = null, u = null, m = null, r = null, E = null, Ne.stop(), n.isPresenting = !1, e.setPixelRatio(x), e.setSize(P.width, P.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Q) {
      s = Q, n.isPresenting === !0 && Pe("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Q) {
      o = Q, n.isPresenting === !0 && Pe("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(Q) {
      c = Q;
    }, this.getBaseLayer = function() {
      return u !== null ? u : p;
    }, this.getBinding = function() {
      return m === null && S && (m = new XRWebGLBinding(r, t)), m;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(Q) {
      if (r = Q, r !== null) {
        if (A = e.getRenderTarget(), r.addEventListener("select", I), r.addEventListener("selectstart", I), r.addEventListener("selectend", I), r.addEventListener("squeeze", I), r.addEventListener("squeezestart", I), r.addEventListener("squeezeend", I), r.addEventListener("end", z), r.addEventListener("inputsourceschange", q), M.xrCompatible !== !0 && await t.makeXRCompatible(), x = e.getPixelRatio(), e.getSize(P), S && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ie = null, we = null, Fe = null;
          M.depth && (Fe = M.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ie = M.stencil ? 1027 : 1026, we = M.stencil ? 1020 : 1014);
          const Ce = {
            colorFormat: t.RGBA8,
            depthFormat: Fe,
            scaleFactor: s
          };
          m = this.getBinding(), u = m.createProjectionLayer(Ce), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), E = new Kt(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Cn(u.textureWidth, u.textureHeight, we, void 0, void 0, void 0, void 0, void 0, void 0, ie),
              stencilBuffer: M.stencil,
              colorSpace: e.outputColorSpace,
              samples: M.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const ie = {
            antialias: M.antialias,
            alpha: !0,
            depth: M.depth,
            stencil: M.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, t, ie), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), E = new Kt(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: M.stencil,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        E.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), Ne.setContext(r), Ne.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return h.getDepthTexture();
    };
    function q(Q) {
      for (let fe = 0; fe < Q.removed.length; fe++) {
        const ie = Q.removed[fe], we = y.indexOf(ie);
        we >= 0 && (y[we] = null, R[we].disconnect(ie));
      }
      for (let fe = 0; fe < Q.added.length; fe++) {
        const ie = Q.added[fe];
        let we = y.indexOf(ie);
        if (we === -1) {
          for (let Ce = 0; Ce < R.length; Ce++)
            if (Ce >= y.length) {
              y.push(ie), we = Ce;
              break;
            } else if (y[Ce] === null) {
              y[Ce] = ie, we = Ce;
              break;
            }
          if (we === -1) break;
        }
        const Fe = R[we];
        Fe && Fe.connect(ie);
      }
    }
    const te = new O(), ne = new O();
    function de(Q, fe, ie) {
      te.setFromMatrixPosition(fe.matrixWorld), ne.setFromMatrixPosition(ie.matrixWorld);
      const we = te.distanceTo(ne), Fe = fe.projectionMatrix.elements, Ce = ie.projectionMatrix.elements, at = Fe[14] / (Fe[10] - 1), Ve = Fe[14] / (Fe[10] + 1), je = (Fe[9] + 1) / Fe[5], Qe = (Fe[9] - 1) / Fe[5], De = (Fe[8] - 1) / Fe[0], pt = (Ce[8] + 1) / Ce[0], $ = at * De, wt = at * pt, F = we / (-De + pt), Oe = F * -De;
      if (fe.matrixWorld.decompose(Q.position, Q.quaternion, Q.scale), Q.translateX(Oe), Q.translateZ(F), Q.matrixWorld.compose(Q.position, Q.quaternion, Q.scale), Q.matrixWorldInverse.copy(Q.matrixWorld).invert(), Fe[10] === -1)
        Q.projectionMatrix.copy(fe.projectionMatrix), Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);
      else {
        const Be = at + F, nt = Ve + F, le = $ - Oe, lt = wt + (we - Oe), T = je * Ve / nt * Be, _ = Qe * Ve / nt * Be;
        Q.projectionMatrix.makePerspective(le, lt, T, _, Be, nt), Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert();
      }
    }
    function Me(Q, fe) {
      fe === null ? Q.matrixWorld.copy(Q.matrix) : Q.matrixWorld.multiplyMatrices(fe.matrixWorld, Q.matrix), Q.matrixWorldInverse.copy(Q.matrixWorld).invert();
    }
    this.updateCamera = function(Q) {
      if (r === null) return;
      let fe = Q.near, ie = Q.far;
      h.texture !== null && (h.depthNear > 0 && (fe = h.depthNear), h.depthFar > 0 && (ie = h.depthFar)), B.near = L.near = b.near = fe, B.far = L.far = b.far = ie, (k !== B.near || W !== B.far) && (r.updateRenderState({
        depthNear: B.near,
        depthFar: B.far
      }), k = B.near, W = B.far), B.layers.mask = Q.layers.mask | 6, b.layers.mask = B.layers.mask & -5, L.layers.mask = B.layers.mask & -3;
      const we = Q.parent, Fe = B.cameras;
      Me(B, we);
      for (let Ce = 0; Ce < Fe.length; Ce++)
        Me(Fe[Ce], we);
      Fe.length === 2 ? de(B, b, L) : B.projectionMatrix.copy(b.projectionMatrix), be(Q, B, we);
    };
    function be(Q, fe, ie) {
      ie === null ? Q.matrix.copy(fe.matrixWorld) : (Q.matrix.copy(ie.matrixWorld), Q.matrix.invert(), Q.matrix.multiply(fe.matrixWorld)), Q.matrix.decompose(Q.position, Q.quaternion, Q.scale), Q.updateMatrixWorld(!0), Q.projectionMatrix.copy(fe.projectionMatrix), Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse), Q.isPerspectiveCamera && (Q.fov = zr * 2 * Math.atan(1 / Q.projectionMatrix.elements[5]), Q.zoom = 1);
    }
    this.getCamera = function() {
      return B;
    }, this.getFoveation = function() {
      if (!(u === null && p === null))
        return l;
    }, this.setFoveation = function(Q) {
      l = Q, u !== null && (u.fixedFoveation = Q), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Q);
    }, this.hasDepthSensing = function() {
      return h.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return h.getMesh(B);
    }, this.getCameraTexture = function(Q) {
      return d[Q];
    };
    let Ze = null;
    function Ke(Q, fe) {
      if (f = fe.getViewerPose(c || a), g = fe, f !== null) {
        const ie = f.views;
        p !== null && (e.setRenderTargetFramebuffer(E, p.framebuffer), e.setRenderTarget(E));
        let we = !1;
        ie.length !== B.cameras.length && (B.cameras.length = 0, we = !0);
        for (let Ve = 0; Ve < ie.length; Ve++) {
          const je = ie[Ve];
          let Qe = null;
          if (p !== null)
            Qe = p.getViewport(je);
          else {
            const pt = m.getViewSubImage(u, je);
            Qe = pt.viewport, Ve === 0 && (e.setRenderTargetTextures(
              E,
              pt.colorTexture,
              pt.depthStencilTexture
            ), e.setRenderTarget(E));
          }
          let De = C[Ve];
          De === void 0 && (De = new Ot(), De.layers.enable(Ve), De.viewport = new dt(), C[Ve] = De), De.matrix.fromArray(je.transform.matrix), De.matrix.decompose(De.position, De.quaternion, De.scale), De.projectionMatrix.fromArray(je.projectionMatrix), De.projectionMatrixInverse.copy(De.projectionMatrix).invert(), De.viewport.set(Qe.x, Qe.y, Qe.width, Qe.height), Ve === 0 && (B.matrix.copy(De.matrix), B.matrix.decompose(B.position, B.quaternion, B.scale)), we === !0 && B.cameras.push(De);
        }
        const Fe = r.enabledFeatures;
        if (Fe && Fe.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && S) {
          m = n.getBinding();
          const Ve = m.getDepthInformation(ie[0]);
          Ve && Ve.isValid && Ve.texture && h.init(Ve, r.renderState);
        }
        if (Fe && Fe.includes("camera-access") && S) {
          e.state.unbindTexture(), m = n.getBinding();
          for (let Ve = 0; Ve < ie.length; Ve++) {
            const je = ie[Ve].camera;
            if (je) {
              let Qe = d[je];
              Qe || (Qe = new Qr(), d[je] = Qe);
              const De = m.getCameraImage(je);
              Qe.sourceTexture = De;
            }
          }
        }
      }
      for (let ie = 0; ie < R.length; ie++) {
        const we = y[ie], Fe = R[ie];
        we !== null && Fe !== void 0 && Fe.update(we, fe, c || a);
      }
      Ze && Ze(Q, fe), fe.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: fe }), g = null;
    }
    const Ne = new Ua();
    Ne.setAnimationLoop(Ke), this.setAnimationLoop = function(Q) {
      Ze = Q;
    }, this.dispose = function() {
    };
  }
}
const xh = /* @__PURE__ */ new ut(), Ha = /* @__PURE__ */ new Ue();
Ha.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function vh(i, e) {
  function t(h, d) {
    h.matrixAutoUpdate === !0 && h.updateMatrix(), d.value.copy(h.matrix);
  }
  function n(h, d) {
    d.color.getRGB(h.fogColor.value, Ra(i)), d.isFog ? (h.fogNear.value = d.near, h.fogFar.value = d.far) : d.isFogExp2 && (h.fogDensity.value = d.density);
  }
  function r(h, d, M, A, E) {
    d.isNodeMaterial ? d.uniformsNeedUpdate = !1 : d.isMeshBasicMaterial ? s(h, d) : d.isMeshLambertMaterial ? (s(h, d), d.envMap && (h.envMapIntensity.value = d.envMapIntensity)) : d.isMeshToonMaterial ? (s(h, d), m(h, d)) : d.isMeshPhongMaterial ? (s(h, d), f(h, d), d.envMap && (h.envMapIntensity.value = d.envMapIntensity)) : d.isMeshStandardMaterial ? (s(h, d), u(h, d), d.isMeshPhysicalMaterial && p(h, d, E)) : d.isMeshMatcapMaterial ? (s(h, d), g(h, d)) : d.isMeshDepthMaterial ? s(h, d) : d.isMeshDistanceMaterial ? (s(h, d), S(h, d)) : d.isMeshNormalMaterial ? s(h, d) : d.isLineBasicMaterial ? (a(h, d), d.isLineDashedMaterial && o(h, d)) : d.isPointsMaterial ? l(h, d, M, A) : d.isSpriteMaterial ? c(h, d) : d.isShadowMaterial ? (h.color.value.copy(d.color), h.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function s(h, d) {
    h.opacity.value = d.opacity, d.color && h.diffuse.value.copy(d.color), d.emissive && h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (h.map.value = d.map, t(d.map, h.mapTransform)), d.alphaMap && (h.alphaMap.value = d.alphaMap, t(d.alphaMap, h.alphaMapTransform)), d.bumpMap && (h.bumpMap.value = d.bumpMap, t(d.bumpMap, h.bumpMapTransform), h.bumpScale.value = d.bumpScale, d.side === 1 && (h.bumpScale.value *= -1)), d.normalMap && (h.normalMap.value = d.normalMap, t(d.normalMap, h.normalMapTransform), h.normalScale.value.copy(d.normalScale), d.side === 1 && h.normalScale.value.negate()), d.displacementMap && (h.displacementMap.value = d.displacementMap, t(d.displacementMap, h.displacementMapTransform), h.displacementScale.value = d.displacementScale, h.displacementBias.value = d.displacementBias), d.emissiveMap && (h.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, h.emissiveMapTransform)), d.specularMap && (h.specularMap.value = d.specularMap, t(d.specularMap, h.specularMapTransform)), d.alphaTest > 0 && (h.alphaTest.value = d.alphaTest);
    const M = e.get(d), A = M.envMap, E = M.envMapRotation;
    A && (h.envMap.value = A, h.envMapRotation.value.setFromMatrix4(xh.makeRotationFromEuler(E)).transpose(), A.isCubeTexture && A.isRenderTargetTexture === !1 && h.envMapRotation.value.premultiply(Ha), h.reflectivity.value = d.reflectivity, h.ior.value = d.ior, h.refractionRatio.value = d.refractionRatio), d.lightMap && (h.lightMap.value = d.lightMap, h.lightMapIntensity.value = d.lightMapIntensity, t(d.lightMap, h.lightMapTransform)), d.aoMap && (h.aoMap.value = d.aoMap, h.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, h.aoMapTransform));
  }
  function a(h, d) {
    h.diffuse.value.copy(d.color), h.opacity.value = d.opacity, d.map && (h.map.value = d.map, t(d.map, h.mapTransform));
  }
  function o(h, d) {
    h.dashSize.value = d.dashSize, h.totalSize.value = d.dashSize + d.gapSize, h.scale.value = d.scale;
  }
  function l(h, d, M, A) {
    h.diffuse.value.copy(d.color), h.opacity.value = d.opacity, h.size.value = d.size * M, h.scale.value = A * 0.5, d.map && (h.map.value = d.map, t(d.map, h.uvTransform)), d.alphaMap && (h.alphaMap.value = d.alphaMap, t(d.alphaMap, h.alphaMapTransform)), d.alphaTest > 0 && (h.alphaTest.value = d.alphaTest);
  }
  function c(h, d) {
    h.diffuse.value.copy(d.color), h.opacity.value = d.opacity, h.rotation.value = d.rotation, d.map && (h.map.value = d.map, t(d.map, h.mapTransform)), d.alphaMap && (h.alphaMap.value = d.alphaMap, t(d.alphaMap, h.alphaMapTransform)), d.alphaTest > 0 && (h.alphaTest.value = d.alphaTest);
  }
  function f(h, d) {
    h.specular.value.copy(d.specular), h.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function m(h, d) {
    d.gradientMap && (h.gradientMap.value = d.gradientMap);
  }
  function u(h, d) {
    h.metalness.value = d.metalness, d.metalnessMap && (h.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, h.metalnessMapTransform)), h.roughness.value = d.roughness, d.roughnessMap && (h.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, h.roughnessMapTransform)), d.envMap && (h.envMapIntensity.value = d.envMapIntensity);
  }
  function p(h, d, M) {
    h.ior.value = d.ior, d.sheen > 0 && (h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), h.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (h.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, h.sheenColorMapTransform)), d.sheenRoughnessMap && (h.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, h.sheenRoughnessMapTransform))), d.clearcoat > 0 && (h.clearcoat.value = d.clearcoat, h.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (h.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, h.clearcoatMapTransform)), d.clearcoatRoughnessMap && (h.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, h.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (h.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, h.clearcoatNormalMapTransform), h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === 1 && h.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (h.dispersion.value = d.dispersion), d.iridescence > 0 && (h.iridescence.value = d.iridescence, h.iridescenceIOR.value = d.iridescenceIOR, h.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], h.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (h.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, h.iridescenceMapTransform)), d.iridescenceThicknessMap && (h.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, h.iridescenceThicknessMapTransform))), d.transmission > 0 && (h.transmission.value = d.transmission, h.transmissionSamplerMap.value = M.texture, h.transmissionSamplerSize.value.set(M.width, M.height), d.transmissionMap && (h.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, h.transmissionMapTransform)), h.thickness.value = d.thickness, d.thicknessMap && (h.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, h.thicknessMapTransform)), h.attenuationDistance.value = d.attenuationDistance, h.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (h.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (h.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, h.anisotropyMapTransform))), h.specularIntensity.value = d.specularIntensity, h.specularColor.value.copy(d.specularColor), d.specularColorMap && (h.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, h.specularColorMapTransform)), d.specularIntensityMap && (h.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, h.specularIntensityMapTransform));
  }
  function g(h, d) {
    d.matcap && (h.matcap.value = d.matcap);
  }
  function S(h, d) {
    const M = e.get(d).light;
    h.referencePosition.value.setFromMatrixPosition(M.matrixWorld), h.nearDistance.value = M.shadow.camera.near, h.farDistance.value = M.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Mh(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(M, A) {
    const E = A.program;
    n.uniformBlockBinding(M, E);
  }
  function c(M, A) {
    let E = r[M.id];
    E === void 0 && (g(M), E = f(M), r[M.id] = E, M.addEventListener("dispose", h));
    const R = A.program;
    n.updateUBOMapping(M, R);
    const y = e.render.frame;
    s[M.id] !== y && (u(M), s[M.id] = y);
  }
  function f(M) {
    const A = m();
    M.__bindingPointIndex = A;
    const E = i.createBuffer(), R = M.__size, y = M.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, R, y), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, A, E), E;
  }
  function m() {
    for (let M = 0; M < o; M++)
      if (a.indexOf(M) === -1)
        return a.push(M), M;
    return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(M) {
    const A = r[M.id], E = M.uniforms, R = M.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, A);
    for (let y = 0, P = E.length; y < P; y++) {
      const x = Array.isArray(E[y]) ? E[y] : [E[y]];
      for (let b = 0, L = x.length; b < L; b++) {
        const C = x[b];
        if (p(C, y, b, R) === !0) {
          const B = C.__offset, k = Array.isArray(C.value) ? C.value : [C.value];
          let W = 0;
          for (let I = 0; I < k.length; I++) {
            const z = k[I], q = S(z);
            typeof z == "number" || typeof z == "boolean" ? (C.__data[0] = z, i.bufferSubData(i.UNIFORM_BUFFER, B + W, C.__data)) : z.isMatrix3 ? (C.__data[0] = z.elements[0], C.__data[1] = z.elements[1], C.__data[2] = z.elements[2], C.__data[3] = 0, C.__data[4] = z.elements[3], C.__data[5] = z.elements[4], C.__data[6] = z.elements[5], C.__data[7] = 0, C.__data[8] = z.elements[6], C.__data[9] = z.elements[7], C.__data[10] = z.elements[8], C.__data[11] = 0) : ArrayBuffer.isView(z) ? C.__data.set(new z.constructor(z.buffer, z.byteOffset, C.__data.length)) : (z.toArray(C.__data, W), W += q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, B, C.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(M, A, E, R) {
    const y = M.value, P = A + "_" + E;
    if (R[P] === void 0)
      return typeof y == "number" || typeof y == "boolean" ? R[P] = y : ArrayBuffer.isView(y) ? R[P] = y.slice() : R[P] = y.clone(), !0;
    {
      const x = R[P];
      if (typeof y == "number" || typeof y == "boolean") {
        if (x !== y)
          return R[P] = y, !0;
      } else {
        if (ArrayBuffer.isView(y))
          return !0;
        if (x.equals(y) === !1)
          return x.copy(y), !0;
      }
    }
    return !1;
  }
  function g(M) {
    const A = M.uniforms;
    let E = 0;
    const R = 16;
    for (let P = 0, x = A.length; P < x; P++) {
      const b = Array.isArray(A[P]) ? A[P] : [A[P]];
      for (let L = 0, C = b.length; L < C; L++) {
        const B = b[L], k = Array.isArray(B.value) ? B.value : [B.value];
        for (let W = 0, I = k.length; W < I; W++) {
          const z = k[W], q = S(z), te = E % R, ne = te % q.boundary, de = te + ne;
          E += ne, de !== 0 && R - de < q.storage && (E += R - de), B.__data = new Float32Array(q.storage / Float32Array.BYTES_PER_ELEMENT), B.__offset = E, E += q.storage;
        }
      }
    }
    const y = E % R;
    return y > 0 && (E += R - y), M.__size = E, M.__cache = {}, this;
  }
  function S(M) {
    const A = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof M == "number" || typeof M == "boolean" ? (A.boundary = 4, A.storage = 4) : M.isVector2 ? (A.boundary = 8, A.storage = 8) : M.isVector3 || M.isColor ? (A.boundary = 16, A.storage = 12) : M.isVector4 ? (A.boundary = 16, A.storage = 16) : M.isMatrix3 ? (A.boundary = 48, A.storage = 48) : M.isMatrix4 ? (A.boundary = 64, A.storage = 64) : M.isTexture ? Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(M) ? (A.boundary = 16, A.storage = M.byteLength) : Pe("WebGLRenderer: Unsupported uniform value type.", M), A;
  }
  function h(M) {
    const A = M.target;
    A.removeEventListener("dispose", h);
    const E = a.indexOf(A.__bindingPointIndex);
    a.splice(E, 1), i.deleteBuffer(r[A.id]), delete r[A.id], delete s[A.id];
  }
  function d() {
    for (const M in r)
      i.deleteBuffer(r[M]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: d
  };
}
const Sh = new Uint16Array([
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
let Qt = null;
function yh() {
  return Qt === null && (Qt = new Sa(Sh, 16, 16, 1030, 1016), Qt.name = "DFG_LUT", Qt.minFilter = 1006, Qt.magFilter = 1006, Qt.wrapS = 1001, Qt.wrapT = 1001, Qt.generateMipmaps = !1, Qt.needsUpdate = !0), Qt;
}
class ka {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = pa(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: f = "default",
      failIfMajorPerformanceCaveat: m = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: p = 1009
    } = e;
    this.isWebGLRenderer = !0;
    let g;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      g = n.getContextAttributes().alpha;
    } else
      g = a;
    const S = p, h = /* @__PURE__ */ new Set([
      1033,
      1031,
      1029
    ]), d = /* @__PURE__ */ new Set([
      1009,
      1014,
      1012,
      1020,
      1017,
      1018
    ]), M = new Uint32Array(4), A = new Int32Array(4), E = new O();
    let R = null, y = null;
    const P = [], x = [];
    let b = null;
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
    const L = this;
    let C = !1, B = null;
    this._outputColorSpace = Lt;
    let k = 0, W = 0, I = null, z = -1, q = null;
    const te = new dt(), ne = new dt();
    let de = null;
    const Me = new ke(0);
    let be = 0, Ze = t.width, Ke = t.height, Ne = 1, Q = null, fe = null;
    const ie = new dt(0, 0, Ze, Ke), we = new dt(0, 0, Ze, Ke);
    let Fe = !1;
    const Ce = new nr();
    let at = !1, Ve = !1;
    const je = new ut(), Qe = new O(), De = new dt(), pt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let $ = !1;
    function wt() {
      return I === null ? Ne : 1;
    }
    let F = n;
    function Oe(v, N) {
      return t.getContext(v, N);
    }
    try {
      const v = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: f,
        failIfMajorPerformanceCaveat: m
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ji}`), t.addEventListener("webglcontextlost", w, !1), t.addEventListener("webglcontextrestored", U, !1), t.addEventListener("webglcontextcreationerror", J, !1), F === null) {
        const N = "webgl2";
        if (F = Oe(N, v), F === null)
          throw Oe(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw $e("WebGLRenderer: " + v.message), v;
    }
    let Be, nt, le, lt, T, _, G, j, ee, re, se, Y, Z, pe, ge, ce, ae, Le, Ie, Xe, D, oe, K;
    function xe() {
      Be = new Eu(F), Be.init(), D = new Va(F, Be), nt = new mu(F, Be, e, D), le = new hh(F, Be), nt.reversedDepthBuffer && u && le.buffers.depth.setReversed(!0), lt = new Au(F), T = new Jd(), _ = new fh(F, Be, le, T, nt, D, lt), G = new yu(L), j = new Po(F), oe = new fu(F, j), ee = new Tu(F, j, lt, oe), re = new wu(F, ee, j, oe, lt), Le = new Ru(F, nt, _), ge = new _u(T), se = new jd(L, G, Be, nt, oe, ge), Y = new vh(L, T), Z = new eh(), pe = new ah(Be), ae = new hu(L, G, le, re, g, l), ce = new dh(L, re, nt), K = new Mh(F, lt, nt, le), Ie = new pu(F, Be, lt), Xe = new bu(F, Be, lt), lt.programs = se.programs, L.capabilities = nt, L.extensions = Be, L.properties = T, L.renderLists = Z, L.shadowMap = ce, L.state = le, L.info = lt;
    }
    xe(), S !== 1009 && (b = new Pu(S, t.width, t.height, r, s));
    const ue = new gh(L, F);
    this.xr = ue, this.getContext = function() {
      return F;
    }, this.getContextAttributes = function() {
      return F.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Be.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Be.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return Ne;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (Ne = v, this.setSize(Ze, Ke, !1));
    }, this.getSize = function(v) {
      return v.set(Ze, Ke);
    }, this.setSize = function(v, N, X = !0) {
      if (ue.isPresenting) {
        Pe("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Ze = v, Ke = N, t.width = Math.floor(v * Ne), t.height = Math.floor(N * Ne), X === !0 && (t.style.width = v + "px", t.style.height = N + "px"), b !== null && b.setSize(t.width, t.height), this.setViewport(0, 0, v, N);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(Ze * Ne, Ke * Ne).floor();
    }, this.setDrawingBufferSize = function(v, N, X) {
      Ze = v, Ke = N, Ne = X, t.width = Math.floor(v * X), t.height = Math.floor(N * X), this.setViewport(0, 0, v, N);
    }, this.setEffects = function(v) {
      if (S === 1009) {
        $e("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (v) {
        for (let N = 0; N < v.length; N++)
          if (v[N].isOutputPass === !0) {
            Pe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
      }
      b.setEffects(v || []);
    }, this.getCurrentViewport = function(v) {
      return v.copy(te);
    }, this.getViewport = function(v) {
      return v.copy(ie);
    }, this.setViewport = function(v, N, X, V) {
      v.isVector4 ? ie.set(v.x, v.y, v.z, v.w) : ie.set(v, N, X, V), le.viewport(te.copy(ie).multiplyScalar(Ne).round());
    }, this.getScissor = function(v) {
      return v.copy(we);
    }, this.setScissor = function(v, N, X, V) {
      v.isVector4 ? we.set(v.x, v.y, v.z, v.w) : we.set(v, N, X, V), le.scissor(ne.copy(we).multiplyScalar(Ne).round());
    }, this.getScissorTest = function() {
      return Fe;
    }, this.setScissorTest = function(v) {
      le.setScissorTest(Fe = v);
    }, this.setOpaqueSort = function(v) {
      Q = v;
    }, this.setTransparentSort = function(v) {
      fe = v;
    }, this.getClearColor = function(v) {
      return v.copy(ae.getClearColor());
    }, this.setClearColor = function() {
      ae.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return ae.getClearAlpha();
    }, this.setClearAlpha = function() {
      ae.setClearAlpha(...arguments);
    }, this.clear = function(v = !0, N = !0, X = !0) {
      let V = 0;
      if (v) {
        let H = !1;
        if (I !== null) {
          const _e = I.texture.format;
          H = h.has(_e);
        }
        if (H) {
          const _e = I.texture.type, Se = d.has(_e), me = ae.getClearColor(), Ee = ae.getClearAlpha(), Ae = me.r, Ge = me.g, He = me.b;
          Se ? (M[0] = Ae, M[1] = Ge, M[2] = He, M[3] = Ee, F.clearBufferuiv(F.COLOR, 0, M)) : (A[0] = Ae, A[1] = Ge, A[2] = He, A[3] = Ee, F.clearBufferiv(F.COLOR, 0, A));
        } else
          V |= F.COLOR_BUFFER_BIT;
      }
      N && (V |= F.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), X && (V |= F.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), V !== 0 && F.clear(V);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(v) {
      v.setRenderer(this), B = v;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", w, !1), t.removeEventListener("webglcontextrestored", U, !1), t.removeEventListener("webglcontextcreationerror", J, !1), ae.dispose(), Z.dispose(), pe.dispose(), T.dispose(), G.dispose(), re.dispose(), oe.dispose(), K.dispose(), se.dispose(), ue.dispose(), ue.removeEventListener("sessionstart", Et), ue.removeEventListener("sessionend", Wt), en.stop();
    };
    function w(v) {
      v.preventDefault(), Gr("WebGLRenderer: Context Lost."), C = !0;
    }
    function U() {
      Gr("WebGLRenderer: Context Restored."), C = !1;
      const v = lt.autoReset, N = ce.enabled, X = ce.autoUpdate, V = ce.needsUpdate, H = ce.type;
      xe(), lt.autoReset = v, ce.enabled = N, ce.autoUpdate = X, ce.needsUpdate = V, ce.type = H;
    }
    function J(v) {
      $e("WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function ye(v) {
      const N = v.target;
      N.removeEventListener("dispose", ye), Te(N);
    }
    function Te(v) {
      et(v), T.remove(v);
    }
    function et(v) {
      const N = T.get(v).programs;
      N !== void 0 && (N.forEach(function(X) {
        se.releaseProgram(X);
      }), v.isShaderMaterial && se.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, N, X, V, H, _e) {
      N === null && (N = pt);
      const Se = H.isMesh && H.matrixWorld.determinant() < 0, me = qa(v, N, X, V, H);
      le.setMaterial(V, Se);
      let Ee = X.index, Ae = 1;
      if (V.wireframe === !0) {
        if (Ee = ee.getWireframeAttribute(X), Ee === void 0) return;
        Ae = 2;
      }
      const Ge = X.drawRange, He = X.attributes.position;
      let Re = Ge.start * Ae, it = (Ge.start + Ge.count) * Ae;
      _e !== null && (Re = Math.max(Re, _e.start * Ae), it = Math.min(it, (_e.start + _e.count) * Ae)), Ee !== null ? (Re = Math.max(Re, 0), it = Math.min(it, Ee.count)) : He != null && (Re = Math.max(Re, 0), it = Math.min(it, He.count));
      const mt = it - Re;
      if (mt < 0 || mt === 1 / 0) return;
      oe.setup(H, V, me, X, Ee);
      let ft, rt = Ie;
      if (Ee !== null && (ft = j.get(Ee), rt = Xe, rt.setIndex(ft)), H.isMesh)
        V.wireframe === !0 ? (le.setLineWidth(V.wireframeLinewidth * wt()), rt.setMode(F.LINES)) : rt.setMode(F.TRIANGLES);
      else if (H.isLine) {
        let bt = V.linewidth;
        bt === void 0 && (bt = 1), le.setLineWidth(bt * wt()), H.isLineSegments ? rt.setMode(F.LINES) : H.isLineLoop ? rt.setMode(F.LINE_LOOP) : rt.setMode(F.LINE_STRIP);
      } else H.isPoints ? rt.setMode(F.POINTS) : H.isSprite && rt.setMode(F.TRIANGLES);
      if (H.isBatchedMesh)
        if (Be.get("WEBGL_multi_draw"))
          rt.renderMultiDraw(H._multiDrawStarts, H._multiDrawCounts, H._multiDrawCount);
        else {
          const bt = H._multiDrawStarts, ve = H._multiDrawCounts, Ut = H._multiDrawCount, Je = Ee ? j.get(Ee).bytesPerElement : 1, Vt = T.get(V).currentProgram.getUniforms();
          for (let jt = 0; jt < Ut; jt++)
            Vt.setValue(F, "_gl_DrawID", jt), rt.render(bt[jt] / Je, ve[jt]);
        }
      else if (H.isInstancedMesh)
        rt.renderInstances(Re, mt, H.count);
      else if (X.isInstancedBufferGeometry) {
        const bt = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0, ve = Math.min(X.instanceCount, bt);
        rt.renderInstances(Re, mt, ve);
      } else
        rt.render(Re, mt);
    };
    function ht(v, N, X) {
      v.transparent === !0 && v.side === 2 && v.forceSinglePass === !1 ? (v.side = 1, v.needsUpdate = !0, mi(v, N, X), v.side = 0, v.needsUpdate = !0, mi(v, N, X), v.side = 2) : mi(v, N, X);
    }
    this.compile = function(v, N, X = null) {
      X === null && (X = v), y = pe.get(X), y.init(N), x.push(y), X.traverseVisible(function(H) {
        H.isLight && H.layers.test(N.layers) && (y.pushLight(H), H.castShadow && y.pushShadow(H));
      }), v !== X && v.traverseVisible(function(H) {
        H.isLight && H.layers.test(N.layers) && (y.pushLight(H), H.castShadow && y.pushShadow(H));
      }), y.setupLights();
      const V = /* @__PURE__ */ new Set();
      return v.traverse(function(H) {
        if (!(H.isMesh || H.isPoints || H.isLine || H.isSprite))
          return;
        const _e = H.material;
        if (_e)
          if (Array.isArray(_e))
            for (let Se = 0; Se < _e.length; Se++) {
              const me = _e[Se];
              ht(me, X, H), V.add(me);
            }
          else
            ht(_e, X, H), V.add(_e);
      }), y = x.pop(), V;
    }, this.compileAsync = function(v, N, X = null) {
      const V = this.compile(v, N, X);
      return new Promise((H) => {
        function _e() {
          if (V.forEach(function(Se) {
            T.get(Se).currentProgram.isReady() && V.delete(Se);
          }), V.size === 0) {
            H(v);
            return;
          }
          setTimeout(_e, 10);
        }
        Be.get("KHR_parallel_shader_compile") !== null ? _e() : setTimeout(_e, 10);
      });
    };
    let Ft = null;
    function It(v) {
      Ft && Ft(v);
    }
    function Et() {
      en.stop();
    }
    function Wt() {
      en.start();
    }
    const en = new Ua();
    en.setAnimationLoop(It), typeof self < "u" && en.setContext(self), this.setAnimationLoop = function(v) {
      Ft = v, ue.setAnimationLoop(v), v === null ? en.stop() : en.start();
    }, ue.addEventListener("sessionstart", Et), ue.addEventListener("sessionend", Wt), this.render = function(v, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        $e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === !0) return;
      B !== null && B.renderStart(v, N);
      const X = ue.enabled === !0 && ue.isPresenting === !0, V = b !== null && (I === null || X) && b.begin(L, I);
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), ue.enabled === !0 && ue.isPresenting === !0 && (b === null || b.isCompositing() === !1) && (ue.cameraAutoUpdate === !0 && ue.updateCamera(N), N = ue.getCamera()), v.isScene === !0 && v.onBeforeRender(L, v, N, I), y = pe.get(v, x.length), y.init(N), y.state.textureUnits = _.getTextureUnits(), x.push(y), je.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), Ce.setFromProjectionMatrix(je, 2e3, N.reversedDepth), Ve = this.localClippingEnabled, at = ge.init(this.clippingPlanes, Ve), R = Z.get(v, P.length), R.init(), P.push(R), ue.enabled === !0 && ue.isPresenting === !0) {
        const Se = L.xr.getDepthSensingMesh();
        Se !== null && ei(Se, N, -1 / 0, L.sortObjects);
      }
      ei(v, N, 0, L.sortObjects), R.finish(), L.sortObjects === !0 && R.sort(Q, fe), $ = ue.enabled === !1 || ue.isPresenting === !1 || ue.hasDepthSensing() === !1, $ && ae.addToRenderList(R, v), this.info.render.frame++, at === !0 && ge.beginShadows();
      const H = y.state.shadowsArray;
      if (ce.render(H, v, N), at === !0 && ge.endShadows(), this.info.autoReset === !0 && this.info.reset(), (V && b.hasRenderPass()) === !1) {
        const Se = R.opaque, me = R.transmissive;
        if (y.setupLights(), N.isArrayCamera) {
          const Ee = N.cameras;
          if (me.length > 0)
            for (let Ae = 0, Ge = Ee.length; Ae < Ge; Ae++) {
              const He = Ee[Ae];
              hs(Se, me, v, He);
            }
          $ && ae.render(v);
          for (let Ae = 0, Ge = Ee.length; Ae < Ge; Ae++) {
            const He = Ee[Ae];
            ds(R, v, He, He.viewport);
          }
        } else
          me.length > 0 && hs(Se, me, v, N), $ && ae.render(v), ds(R, v, N);
      }
      I !== null && W === 0 && (_.updateMultisampleRenderTarget(I), _.updateRenderTargetMipmap(I)), V && b.end(L), v.isScene === !0 && v.onAfterRender(L, v, N), oe.resetDefaultState(), z = -1, q = null, x.pop(), x.length > 0 ? (y = x[x.length - 1], _.setTextureUnits(y.state.textureUnits), at === !0 && ge.setGlobalState(L.clippingPlanes, y.state.camera)) : y = null, P.pop(), P.length > 0 ? R = P[P.length - 1] : R = null, B !== null && B.renderEnd();
    };
    function ei(v, N, X, V) {
      if (v.visible === !1) return;
      if (v.layers.test(N.layers)) {
        if (v.isGroup)
          X = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(N);
        else if (v.isLightProbeGrid)
          y.pushLightProbeGrid(v);
        else if (v.isLight)
          y.pushLight(v), v.castShadow && y.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || Ce.intersectsSprite(v)) {
            V && De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(je);
            const Se = re.update(v), me = v.material;
            me.visible && R.push(v, Se, me, X, De.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || Ce.intersectsObject(v))) {
          const Se = re.update(v), me = v.material;
          if (V && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), De.copy(v.boundingSphere.center)) : (Se.boundingSphere === null && Se.computeBoundingSphere(), De.copy(Se.boundingSphere.center)), De.applyMatrix4(v.matrixWorld).applyMatrix4(je)), Array.isArray(me)) {
            const Ee = Se.groups;
            for (let Ae = 0, Ge = Ee.length; Ae < Ge; Ae++) {
              const He = Ee[Ae], Re = me[He.materialIndex];
              Re && Re.visible && R.push(v, Se, Re, X, De.z, He);
            }
          } else me.visible && R.push(v, Se, me, X, De.z, null);
        }
      }
      const _e = v.children;
      for (let Se = 0, me = _e.length; Se < me; Se++)
        ei(_e[Se], N, X, V);
    }
    function ds(v, N, X, V) {
      const { opaque: H, transmissive: _e, transparent: Se } = v;
      y.setupLightsView(X), at === !0 && ge.setGlobalState(L.clippingPlanes, X), V && le.viewport(te.copy(V)), H.length > 0 && pi(H, N, X), _e.length > 0 && pi(_e, N, X), Se.length > 0 && pi(Se, N, X), le.buffers.depth.setTest(!0), le.buffers.depth.setMask(!0), le.buffers.color.setMask(!0), le.setPolygonOffset(!1);
    }
    function hs(v, N, X, V) {
      if ((X.isScene === !0 ? X.overrideMaterial : null) !== null)
        return;
      if (y.state.transmissionRenderTarget[V.id] === void 0) {
        const Re = Be.has("EXT_color_buffer_half_float") || Be.has("EXT_color_buffer_float");
        y.state.transmissionRenderTarget[V.id] = new Kt(1, 1, {
          generateMipmaps: !0,
          type: Re ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, nt.samples),
          // to avoid feedback loops, the transmission render target requires a resolve, see #26177
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: qe.workingColorSpace
        });
      }
      const _e = y.state.transmissionRenderTarget[V.id], Se = V.viewport || te;
      _e.setSize(Se.z * L.transmissionResolutionScale, Se.w * L.transmissionResolutionScale);
      const me = L.getRenderTarget(), Ee = L.getActiveCubeFace(), Ae = L.getActiveMipmapLevel();
      L.setRenderTarget(_e), L.getClearColor(Me), be = L.getClearAlpha(), be < 1 && L.setClearColor(16777215, 0.5), L.clear(), $ && ae.render(X);
      const Ge = L.toneMapping;
      L.toneMapping = 0;
      const He = V.viewport;
      if (V.viewport !== void 0 && (V.viewport = void 0), y.setupLightsView(V), at === !0 && ge.setGlobalState(L.clippingPlanes, V), pi(v, X, V), _.updateMultisampleRenderTarget(_e), _.updateRenderTargetMipmap(_e), Be.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Re = !1;
        for (let it = 0, mt = N.length; it < mt; it++) {
          const ft = N[it], { object: rt, geometry: bt, material: ve, group: Ut } = ft;
          if (ve.side === 2 && rt.layers.test(V.layers)) {
            const Je = ve.side;
            ve.side = 1, ve.needsUpdate = !0, fs(rt, X, V, bt, ve, Ut), ve.side = Je, ve.needsUpdate = !0, Re = !0;
          }
        }
        Re === !0 && (_.updateMultisampleRenderTarget(_e), _.updateRenderTargetMipmap(_e));
      }
      L.setRenderTarget(me, Ee, Ae), L.setClearColor(Me, be), He !== void 0 && (V.viewport = He), L.toneMapping = Ge;
    }
    function pi(v, N, X) {
      const V = N.isScene === !0 ? N.overrideMaterial : null;
      for (let H = 0, _e = v.length; H < _e; H++) {
        const Se = v[H], { object: me, geometry: Ee, group: Ae } = Se;
        let Ge = Se.material;
        Ge.allowOverride === !0 && V !== null && (Ge = V), me.layers.test(X.layers) && fs(me, N, X, Ee, Ge, Ae);
      }
    }
    function fs(v, N, X, V, H, _e) {
      v.onBeforeRender(L, N, X, V, H, _e), v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), H.onBeforeRender(L, N, X, V, v, _e), H.transparent === !0 && H.side === 2 && H.forceSinglePass === !1 ? (H.side = 1, H.needsUpdate = !0, L.renderBufferDirect(X, N, V, H, v, _e), H.side = 0, H.needsUpdate = !0, L.renderBufferDirect(X, N, V, H, v, _e), H.side = 2) : L.renderBufferDirect(X, N, V, H, v, _e), v.onAfterRender(L, N, X, V, H, _e);
    }
    function mi(v, N, X) {
      N.isScene !== !0 && (N = pt);
      const V = T.get(v), H = y.state.lights, _e = y.state.shadowsArray, Se = H.state.version, me = se.getParameters(v, H.state, _e, N, X, y.state.lightProbeGridArray), Ee = se.getProgramCacheKey(me);
      let Ae = V.programs;
      V.environment = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? N.environment : null, V.fog = N.fog;
      const Ge = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap;
      V.envMap = G.get(v.envMap || V.environment, Ge), V.envMapRotation = V.environment !== null && v.envMap === null ? N.environmentRotation : v.envMapRotation, Ae === void 0 && (v.addEventListener("dispose", ye), Ae = /* @__PURE__ */ new Map(), V.programs = Ae);
      let He = Ae.get(Ee);
      if (He !== void 0) {
        if (V.currentProgram === He && V.lightsStateVersion === Se)
          return ms(v, me), He;
      } else
        me.uniforms = se.getUniforms(v), B !== null && v.isNodeMaterial && B.build(v, X, me), v.onBeforeCompile(me, L), He = se.acquireProgram(me, Ee), Ae.set(Ee, He), V.uniforms = me.uniforms;
      const Re = V.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Re.clippingPlanes = ge.uniform), ms(v, me), V.needsLights = Za(v), V.lightsStateVersion = Se, V.needsLights && (Re.ambientLightColor.value = H.state.ambient, Re.lightProbe.value = H.state.probe, Re.directionalLights.value = H.state.directional, Re.directionalLightShadows.value = H.state.directionalShadow, Re.spotLights.value = H.state.spot, Re.spotLightShadows.value = H.state.spotShadow, Re.rectAreaLights.value = H.state.rectArea, Re.ltc_1.value = H.state.rectAreaLTC1, Re.ltc_2.value = H.state.rectAreaLTC2, Re.pointLights.value = H.state.point, Re.pointLightShadows.value = H.state.pointShadow, Re.hemisphereLights.value = H.state.hemi, Re.directionalShadowMatrix.value = H.state.directionalShadowMatrix, Re.spotLightMatrix.value = H.state.spotLightMatrix, Re.spotLightMap.value = H.state.spotLightMap, Re.pointShadowMatrix.value = H.state.pointShadowMatrix), V.lightProbeGrid = y.state.lightProbeGridArray.length > 0, V.currentProgram = He, V.uniformsList = null, He;
    }
    function ps(v) {
      if (v.uniformsList === null) {
        const N = v.currentProgram.getUniforms();
        v.uniformsList = qi.seqWithValue(N.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function ms(v, N) {
      const X = T.get(v);
      X.outputColorSpace = N.outputColorSpace, X.batching = N.batching, X.batchingColor = N.batchingColor, X.instancing = N.instancing, X.instancingColor = N.instancingColor, X.instancingMorph = N.instancingMorph, X.skinning = N.skinning, X.morphTargets = N.morphTargets, X.morphNormals = N.morphNormals, X.morphColors = N.morphColors, X.morphTargetsCount = N.morphTargetsCount, X.numClippingPlanes = N.numClippingPlanes, X.numIntersection = N.numClipIntersection, X.vertexAlphas = N.vertexAlphas, X.vertexTangents = N.vertexTangents, X.toneMapping = N.toneMapping;
    }
    function Xa(v, N) {
      if (v.length === 0) return null;
      if (v.length === 1)
        return v[0].texture !== null ? v[0] : null;
      E.setFromMatrixPosition(N.matrixWorld);
      for (let X = 0, V = v.length; X < V; X++) {
        const H = v[X];
        if (H.texture !== null && H.boundingBox.containsPoint(E)) return H;
      }
      return null;
    }
    function qa(v, N, X, V, H) {
      N.isScene !== !0 && (N = pt), _.resetTextureUnits();
      const _e = N.fog, Se = V.isMeshStandardMaterial || V.isMeshLambertMaterial || V.isMeshPhongMaterial ? N.environment : null, me = I === null ? L.outputColorSpace : I.isXRRenderTarget === !0 ? I.texture.colorSpace : qe.workingColorSpace, Ee = V.isMeshStandardMaterial || V.isMeshLambertMaterial && !V.envMap || V.isMeshPhongMaterial && !V.envMap, Ae = G.get(V.envMap || Se, Ee), Ge = V.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, He = !!X.attributes.tangent && (!!V.normalMap || V.anisotropy > 0), Re = !!X.morphAttributes.position, it = !!X.morphAttributes.normal, mt = !!X.morphAttributes.color;
      let ft = 0;
      V.toneMapped && (I === null || I.isXRRenderTarget === !0) && (ft = L.toneMapping);
      const rt = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, bt = rt !== void 0 ? rt.length : 0, ve = T.get(V), Ut = y.state.lights;
      if (at === !0 && (Ve === !0 || v !== q)) {
        const ot = v === q && V.id === z;
        ge.setState(V, v, ot);
      }
      let Je = !1;
      V.version === ve.__version ? (ve.needsLights && ve.lightsStateVersion !== Ut.state.version || ve.outputColorSpace !== me || H.isBatchedMesh && ve.batching === !1 || !H.isBatchedMesh && ve.batching === !0 || H.isBatchedMesh && ve.batchingColor === !0 && H.colorTexture === null || H.isBatchedMesh && ve.batchingColor === !1 && H.colorTexture !== null || H.isInstancedMesh && ve.instancing === !1 || !H.isInstancedMesh && ve.instancing === !0 || H.isSkinnedMesh && ve.skinning === !1 || !H.isSkinnedMesh && ve.skinning === !0 || H.isInstancedMesh && ve.instancingColor === !0 && H.instanceColor === null || H.isInstancedMesh && ve.instancingColor === !1 && H.instanceColor !== null || H.isInstancedMesh && ve.instancingMorph === !0 && H.morphTexture === null || H.isInstancedMesh && ve.instancingMorph === !1 && H.morphTexture !== null || ve.envMap !== Ae || V.fog === !0 && ve.fog !== _e || ve.numClippingPlanes !== void 0 && (ve.numClippingPlanes !== ge.numPlanes || ve.numIntersection !== ge.numIntersection) || ve.vertexAlphas !== Ge || ve.vertexTangents !== He || ve.morphTargets !== Re || ve.morphNormals !== it || ve.morphColors !== mt || ve.toneMapping !== ft || ve.morphTargetsCount !== bt || !!ve.lightProbeGrid != y.state.lightProbeGridArray.length > 0) && (Je = !0) : (Je = !0, ve.__version = V.version);
      let Vt = ve.currentProgram;
      Je === !0 && (Vt = mi(V, N, H), B && V.isNodeMaterial && B.onUpdateProgram(V, Vt, ve));
      let jt = !1, dn = !1, Ln = !1;
      const st = Vt.getUniforms(), _t = ve.uniforms;
      if (le.useProgram(Vt.program) && (jt = !0, dn = !0, Ln = !0), V.id !== z && (z = V.id, dn = !0), ve.needsLights) {
        const ot = Xa(y.state.lightProbeGridArray, H);
        ve.lightProbeGrid !== ot && (ve.lightProbeGrid = ot, dn = !0);
      }
      if (jt || q !== v) {
        le.buffers.depth.getReversed() && v.reversedDepth !== !0 && (v._reversedDepth = !0, v.updateProjectionMatrix()), st.setValue(F, "projectionMatrix", v.projectionMatrix), st.setValue(F, "viewMatrix", v.matrixWorldInverse);
        const fn = st.map.cameraPosition;
        fn !== void 0 && fn.setValue(F, Qe.setFromMatrixPosition(v.matrixWorld)), nt.logarithmicDepthBuffer && st.setValue(
          F,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (V.isMeshPhongMaterial || V.isMeshToonMaterial || V.isMeshLambertMaterial || V.isMeshBasicMaterial || V.isMeshStandardMaterial || V.isShaderMaterial) && st.setValue(F, "isOrthographic", v.isOrthographicCamera === !0), q !== v && (q = v, dn = !0, Ln = !0);
      }
      if (ve.needsLights && (Ut.state.directionalShadowMap.length > 0 && st.setValue(F, "directionalShadowMap", Ut.state.directionalShadowMap, _), Ut.state.spotShadowMap.length > 0 && st.setValue(F, "spotShadowMap", Ut.state.spotShadowMap, _), Ut.state.pointShadowMap.length > 0 && st.setValue(F, "pointShadowMap", Ut.state.pointShadowMap, _)), H.isSkinnedMesh) {
        st.setOptional(F, H, "bindMatrix"), st.setOptional(F, H, "bindMatrixInverse");
        const ot = H.skeleton;
        ot && (ot.boneTexture === null && ot.computeBoneTexture(), st.setValue(F, "boneTexture", ot.boneTexture, _));
      }
      H.isBatchedMesh && (st.setOptional(F, H, "batchingTexture"), st.setValue(F, "batchingTexture", H._matricesTexture, _), st.setOptional(F, H, "batchingIdTexture"), st.setValue(F, "batchingIdTexture", H._indirectTexture, _), st.setOptional(F, H, "batchingColorTexture"), H._colorsTexture !== null && st.setValue(F, "batchingColorTexture", H._colorsTexture, _));
      const hn = X.morphAttributes;
      if ((hn.position !== void 0 || hn.normal !== void 0 || hn.color !== void 0) && Le.update(H, X, Vt), (dn || ve.receiveShadow !== H.receiveShadow) && (ve.receiveShadow = H.receiveShadow, st.setValue(F, "receiveShadow", H.receiveShadow)), (V.isMeshStandardMaterial || V.isMeshLambertMaterial || V.isMeshPhongMaterial) && V.envMap === null && N.environment !== null && (_t.envMapIntensity.value = N.environmentIntensity), _t.dfgLUT !== void 0 && (_t.dfgLUT.value = yh()), dn) {
        if (st.setValue(F, "toneMappingExposure", L.toneMappingExposure), ve.needsLights && Ya(_t, Ln), _e && V.fog === !0 && Y.refreshFogUniforms(_t, _e), Y.refreshMaterialUniforms(_t, V, Ne, Ke, y.state.transmissionRenderTarget[v.id]), ve.needsLights && ve.lightProbeGrid) {
          const ot = ve.lightProbeGrid;
          _t.probesSH.value = ot.texture, _t.probesMin.value.copy(ot.boundingBox.min), _t.probesMax.value.copy(ot.boundingBox.max), _t.probesResolution.value.copy(ot.resolution);
        }
        qi.upload(F, ps(ve), _t, _);
      }
      if (V.isShaderMaterial && V.uniformsNeedUpdate === !0 && (qi.upload(F, ps(ve), _t, _), V.uniformsNeedUpdate = !1), V.isSpriteMaterial && st.setValue(F, "center", H.center), st.setValue(F, "modelViewMatrix", H.modelViewMatrix), st.setValue(F, "normalMatrix", H.normalMatrix), st.setValue(F, "modelMatrix", H.matrixWorld), V.uniformsGroups !== void 0) {
        const ot = V.uniformsGroups;
        for (let fn = 0, Fn = ot.length; fn < Fn; fn++) {
          const _s = ot[fn];
          K.update(_s, Vt), K.bind(_s, Vt);
        }
      }
      return Vt;
    }
    function Ya(v, N) {
      v.ambientLightColor.needsUpdate = N, v.lightProbe.needsUpdate = N, v.directionalLights.needsUpdate = N, v.directionalLightShadows.needsUpdate = N, v.pointLights.needsUpdate = N, v.pointLightShadows.needsUpdate = N, v.spotLights.needsUpdate = N, v.spotLightShadows.needsUpdate = N, v.rectAreaLights.needsUpdate = N, v.hemisphereLights.needsUpdate = N;
    }
    function Za(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return k;
    }, this.getActiveMipmapLevel = function() {
      return W;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(v, N, X) {
      const V = T.get(v);
      V.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1, V.__autoAllocateDepthBuffer === !1 && (V.__useRenderToTexture = !1), T.get(v.texture).__webglTexture = N, T.get(v.depthTexture).__webglTexture = V.__autoAllocateDepthBuffer ? void 0 : X, V.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(v, N) {
      const X = T.get(v);
      X.__webglFramebuffer = N, X.__useDefaultFramebuffer = N === void 0;
    };
    const Ka = F.createFramebuffer();
    this.setRenderTarget = function(v, N = 0, X = 0) {
      I = v, k = N, W = X;
      let V = null, H = !1, _e = !1;
      if (v) {
        const me = T.get(v);
        if (me.__useDefaultFramebuffer !== void 0) {
          le.bindFramebuffer(F.FRAMEBUFFER, me.__webglFramebuffer), te.copy(v.viewport), ne.copy(v.scissor), de = v.scissorTest, le.viewport(te), le.scissor(ne), le.setScissorTest(de), z = -1;
          return;
        } else if (me.__webglFramebuffer === void 0)
          _.setupRenderTarget(v);
        else if (me.__hasExternalTextures)
          _.rebindTextures(v, T.get(v.texture).__webglTexture, T.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Ge = v.depthTexture;
          if (me.__boundDepthTexture !== Ge) {
            if (Ge !== null && T.has(Ge) && (v.width !== Ge.image.width || v.height !== Ge.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            _.setupDepthRenderbuffer(v);
          }
        }
        const Ee = v.texture;
        (Ee.isData3DTexture || Ee.isDataArrayTexture || Ee.isCompressedArrayTexture) && (_e = !0);
        const Ae = T.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Ae[N]) ? V = Ae[N][X] : V = Ae[N], H = !0) : v.samples > 0 && _.useMultisampledRTT(v) === !1 ? V = T.get(v).__webglMultisampledFramebuffer : Array.isArray(Ae) ? V = Ae[X] : V = Ae, te.copy(v.viewport), ne.copy(v.scissor), de = v.scissorTest;
      } else
        te.copy(ie).multiplyScalar(Ne).floor(), ne.copy(we).multiplyScalar(Ne).floor(), de = Fe;
      if (X !== 0 && (V = Ka), le.bindFramebuffer(F.FRAMEBUFFER, V) && le.drawBuffers(v, V), le.viewport(te), le.scissor(ne), le.setScissorTest(de), H) {
        const me = T.get(v.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_CUBE_MAP_POSITIVE_X + N, me.__webglTexture, X);
      } else if (_e) {
        const me = N;
        for (let Ee = 0; Ee < v.textures.length; Ee++) {
          const Ae = T.get(v.textures[Ee]);
          F.framebufferTextureLayer(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0 + Ee, Ae.__webglTexture, X, me);
        }
      } else if (v !== null && X !== 0) {
        const me = T.get(v.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, me.__webglTexture, X);
      }
      z = -1;
    }, this.readRenderTargetPixels = function(v, N, X, V, H, _e, Se, me = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        $e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ee = T.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && Se !== void 0 && (Ee = Ee[Se]), Ee) {
        le.bindFramebuffer(F.FRAMEBUFFER, Ee);
        try {
          const Ae = v.textures[me], Ge = Ae.format, He = Ae.type;
          if (v.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + me), !nt.textureFormatReadable(Ge)) {
            $e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!nt.textureTypeReadable(He)) {
            $e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= v.width - V && X >= 0 && X <= v.height - H && F.readPixels(N, X, V, H, D.convert(Ge), D.convert(He), _e);
        } finally {
          const Ae = I !== null ? T.get(I).__webglFramebuffer : null;
          le.bindFramebuffer(F.FRAMEBUFFER, Ae);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, N, X, V, H, _e, Se, me = 0) {
      if (!(v && v.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Ee = T.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && Se !== void 0 && (Ee = Ee[Se]), Ee)
        if (N >= 0 && N <= v.width - V && X >= 0 && X <= v.height - H) {
          le.bindFramebuffer(F.FRAMEBUFFER, Ee);
          const Ae = v.textures[me], Ge = Ae.format, He = Ae.type;
          if (v.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + me), !nt.textureFormatReadable(Ge))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!nt.textureTypeReadable(He))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Re = F.createBuffer();
          F.bindBuffer(F.PIXEL_PACK_BUFFER, Re), F.bufferData(F.PIXEL_PACK_BUFFER, _e.byteLength, F.STREAM_READ), F.readPixels(N, X, V, H, D.convert(Ge), D.convert(He), 0);
          const it = I !== null ? T.get(I).__webglFramebuffer : null;
          le.bindFramebuffer(F.FRAMEBUFFER, it);
          const mt = F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return F.flush(), await Qa(F, mt, 4), F.bindBuffer(F.PIXEL_PACK_BUFFER, Re), F.getBufferSubData(F.PIXEL_PACK_BUFFER, 0, _e), F.deleteBuffer(Re), F.deleteSync(mt), _e;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, N = null, X = 0) {
      const V = Math.pow(2, -X), H = Math.floor(v.image.width * V), _e = Math.floor(v.image.height * V), Se = N !== null ? N.x : 0, me = N !== null ? N.y : 0;
      _.setTexture2D(v, 0), F.copyTexSubImage2D(F.TEXTURE_2D, X, 0, 0, Se, me, H, _e), le.unbindTexture();
    };
    const $a = F.createFramebuffer(), ja = F.createFramebuffer();
    this.copyTextureToTexture = function(v, N, X = null, V = null, H = 0, _e = 0) {
      let Se, me, Ee, Ae, Ge, He, Re, it, mt;
      const ft = v.isCompressedTexture ? v.mipmaps[_e] : v.image;
      if (X !== null)
        Se = X.max.x - X.min.x, me = X.max.y - X.min.y, Ee = X.isBox3 ? X.max.z - X.min.z : 1, Ae = X.min.x, Ge = X.min.y, He = X.isBox3 ? X.min.z : 0;
      else {
        const _t = Math.pow(2, -H);
        Se = Math.floor(ft.width * _t), me = Math.floor(ft.height * _t), v.isDataArrayTexture ? Ee = ft.depth : v.isData3DTexture ? Ee = Math.floor(ft.depth * _t) : Ee = 1, Ae = 0, Ge = 0, He = 0;
      }
      V !== null ? (Re = V.x, it = V.y, mt = V.z) : (Re = 0, it = 0, mt = 0);
      const rt = D.convert(N.format), bt = D.convert(N.type);
      let ve;
      N.isData3DTexture ? (_.setTexture3D(N, 0), ve = F.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (_.setTexture2DArray(N, 0), ve = F.TEXTURE_2D_ARRAY) : (_.setTexture2D(N, 0), ve = F.TEXTURE_2D), le.activeTexture(F.TEXTURE0), le.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, N.flipY), le.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), le.pixelStorei(F.UNPACK_ALIGNMENT, N.unpackAlignment);
      const Ut = le.getParameter(F.UNPACK_ROW_LENGTH), Je = le.getParameter(F.UNPACK_IMAGE_HEIGHT), Vt = le.getParameter(F.UNPACK_SKIP_PIXELS), jt = le.getParameter(F.UNPACK_SKIP_ROWS), dn = le.getParameter(F.UNPACK_SKIP_IMAGES);
      le.pixelStorei(F.UNPACK_ROW_LENGTH, ft.width), le.pixelStorei(F.UNPACK_IMAGE_HEIGHT, ft.height), le.pixelStorei(F.UNPACK_SKIP_PIXELS, Ae), le.pixelStorei(F.UNPACK_SKIP_ROWS, Ge), le.pixelStorei(F.UNPACK_SKIP_IMAGES, He);
      const Ln = v.isDataArrayTexture || v.isData3DTexture, st = N.isDataArrayTexture || N.isData3DTexture;
      if (v.isDepthTexture) {
        const _t = T.get(v), hn = T.get(N), ot = T.get(_t.__renderTarget), fn = T.get(hn.__renderTarget);
        le.bindFramebuffer(F.READ_FRAMEBUFFER, ot.__webglFramebuffer), le.bindFramebuffer(F.DRAW_FRAMEBUFFER, fn.__webglFramebuffer);
        for (let Fn = 0; Fn < Ee; Fn++)
          Ln && (F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, T.get(v).__webglTexture, H, He + Fn), F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, T.get(N).__webglTexture, _e, mt + Fn)), F.blitFramebuffer(Ae, Ge, Se, me, Re, it, Se, me, F.DEPTH_BUFFER_BIT, F.NEAREST);
        le.bindFramebuffer(F.READ_FRAMEBUFFER, null), le.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else if (H !== 0 || v.isRenderTargetTexture || T.has(v)) {
        const _t = T.get(v), hn = T.get(N);
        le.bindFramebuffer(F.READ_FRAMEBUFFER, $a), le.bindFramebuffer(F.DRAW_FRAMEBUFFER, ja);
        for (let ot = 0; ot < Ee; ot++)
          Ln ? F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, _t.__webglTexture, H, He + ot) : F.framebufferTexture2D(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, _t.__webglTexture, H), st ? F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, hn.__webglTexture, _e, mt + ot) : F.framebufferTexture2D(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, hn.__webglTexture, _e), H !== 0 ? F.blitFramebuffer(Ae, Ge, Se, me, Re, it, Se, me, F.COLOR_BUFFER_BIT, F.NEAREST) : st ? F.copyTexSubImage3D(ve, _e, Re, it, mt + ot, Ae, Ge, Se, me) : F.copyTexSubImage2D(ve, _e, Re, it, Ae, Ge, Se, me);
        le.bindFramebuffer(F.READ_FRAMEBUFFER, null), le.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else
        st ? v.isDataTexture || v.isData3DTexture ? F.texSubImage3D(ve, _e, Re, it, mt, Se, me, Ee, rt, bt, ft.data) : N.isCompressedArrayTexture ? F.compressedTexSubImage3D(ve, _e, Re, it, mt, Se, me, Ee, rt, ft.data) : F.texSubImage3D(ve, _e, Re, it, mt, Se, me, Ee, rt, bt, ft) : v.isDataTexture ? F.texSubImage2D(F.TEXTURE_2D, _e, Re, it, Se, me, rt, bt, ft.data) : v.isCompressedTexture ? F.compressedTexSubImage2D(F.TEXTURE_2D, _e, Re, it, ft.width, ft.height, rt, ft.data) : F.texSubImage2D(F.TEXTURE_2D, _e, Re, it, Se, me, rt, bt, ft);
      le.pixelStorei(F.UNPACK_ROW_LENGTH, Ut), le.pixelStorei(F.UNPACK_IMAGE_HEIGHT, Je), le.pixelStorei(F.UNPACK_SKIP_PIXELS, Vt), le.pixelStorei(F.UNPACK_SKIP_ROWS, jt), le.pixelStorei(F.UNPACK_SKIP_IMAGES, dn), _e === 0 && N.generateMipmaps && F.generateMipmap(ve), le.unbindTexture();
    }, this.initRenderTarget = function(v) {
      T.get(v).__webglFramebuffer === void 0 && _.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? _.setTextureCube(v, 0) : v.isData3DTexture ? _.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? _.setTexture2DArray(v, 0) : _.setTexture2D(v, 0), le.unbindTexture();
    }, this.resetState = function() {
      k = 0, W = 0, I = null, le.reset(), oe.reset();
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
const ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  ArrayCamera: Ia,
  BackSide: 1,
  BasicDepthPacking: 3200,
  Box3: $n,
  BoxGeometry: Jn,
  BufferAttribute: kt,
  BufferGeometry: yt,
  ByteType: 1010,
  Camera: rs,
  CanvasTexture: Hr,
  CineonToneMapping: 3,
  CircleGeometry: ir,
  ClampToEdgeWrapping: 1001,
  Color: ke,
  ColorManagement: qe,
  ConstantAlphaFactor: 213,
  ConstantColorFactor: 211,
  CubeCamera: Fa,
  CubeDepthTexture: ba,
  CubeReflectionMapping: 301,
  CubeRefractionMapping: 302,
  CubeTexture: Jr,
  CubeUVReflectionMapping: 306,
  CullFaceBack: 1,
  CullFaceFront: 2,
  CullFaceNone: 0,
  CustomBlending: 5,
  CustomToneMapping: 5,
  CylinderGeometry: es,
  Data3DTexture: xa,
  DataArrayTexture: Yr,
  DataTexture: Sa,
  DepthFormat: 1026,
  DepthStencilFormat: 1027,
  DepthTexture: Cn,
  DirectionalLight: Yn,
  DoubleSide: 2,
  DstAlphaFactor: 206,
  DstColorFactor: 208,
  EdgesGeometry: yo,
  EqualCompare: 514,
  EqualDepth: 4,
  EquirectangularReflectionMapping: 303,
  EquirectangularRefractionMapping: 304,
  Euler: cn,
  EventDispatcher: yn,
  ExternalTexture: Qr,
  Float32BufferAttribute: ct,
  FloatType: 1015,
  Fog: er,
  FrontSide: 0,
  Frustum: nr,
  GLSL3: Or,
  GreaterCompare: 516,
  GreaterDepth: 6,
  GreaterEqualCompare: 518,
  GreaterEqualDepth: 5,
  Group: wn,
  HalfFloatType: 1016,
  HemisphereLight: La,
  ImageUtils: _a,
  IntType: 1013,
  KeepStencilOp: 7680,
  LatheGeometry: ts,
  Layers: Zr,
  LessCompare: 513,
  LessDepth: 2,
  LessEqualCompare: 515,
  LessEqualDepth: 3,
  Light: is,
  Line: Ea,
  LineBasicMaterial: ya,
  LineSegments: So,
  LinearFilter: 1006,
  LinearMipmapLinearFilter: 1008,
  LinearMipmapNearestFilter: 1007,
  LinearSRGBColorSpace: ui,
  LinearToneMapping: 1,
  LinearTransfer: di,
  Material: un,
  Matrix2: kr,
  Matrix3: Ue,
  Matrix4: ut,
  MaxEquation: 104,
  Mesh: zt,
  MeshBasicMaterial: hi,
  MeshDepthMaterial: Pa,
  MeshDistanceMaterial: Da,
  MeshStandardMaterial: Ao,
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
  NoColorSpace: on,
  NoToneMapping: 0,
  NormalBlending: 1,
  NotEqualCompare: 517,
  NotEqualDepth: 7,
  Object3D: xt,
  ObjectSpaceNormalMap: 1,
  OneFactor: 201,
  OneMinusConstantAlphaFactor: 214,
  OneMinusConstantColorFactor: 212,
  OneMinusDstAlphaFactor: 207,
  OneMinusDstColorFactor: 209,
  OneMinusSrcAlphaFactor: 205,
  OneMinusSrcColorFactor: 203,
  OrthographicCamera: rr,
  PCFShadowMap: 1,
  PCFSoftShadowMap: 2,
  PMREMGenerator: Wr,
  PerspectiveCamera: Ot,
  Plane: Mn,
  PlaneGeometry: Pn,
  Points: Ta,
  PointsMaterial: jr,
  Quaternion: Dn,
  R11_EAC_Format: 37488,
  RED_GREEN_RGTC2_Format: 36285,
  RED_RGTC1_Format: 36283,
  REVISION: Ji,
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
  RawShaderMaterial: Ca,
  Ray: tr,
  RedFormat: 1028,
  RedIntegerFormat: 1029,
  ReinhardToneMapping: 2,
  RenderTarget: ga,
  RepeatWrapping: 1e3,
  ReverseSubtractEquation: 102,
  SIGNED_R11_EAC_Format: 37489,
  SIGNED_RED_GREEN_RGTC2_Format: 36286,
  SIGNED_RED_RGTC1_Format: 36284,
  SIGNED_RG11_EAC_Format: 37491,
  SRGBColorSpace: Lt,
  SRGBTransfer: tt,
  Scene: Ma,
  ShaderChunk: ze,
  ShaderLib: Zt,
  ShaderMaterial: $t,
  ShadowMaterial: Aa,
  ShortType: 1011,
  Source: Qi,
  Sphere: jn,
  SrcAlphaFactor: 204,
  SrcAlphaSaturateFactor: 210,
  SrcColorFactor: 202,
  StaticDrawUsage: 35044,
  SubtractEquation: 101,
  SubtractiveBlending: 3,
  TangentSpaceNormalMap: 0,
  Texture: Tt,
  TorusGeometry: ns,
  Triangle: Gt,
  UVMapping: 300,
  Uint16BufferAttribute: Kr,
  Uint32BufferAttribute: $r,
  UniformsLib: he,
  UniformsUtils: wa,
  UnsignedByteType: 1009,
  UnsignedInt101111Type: 35899,
  UnsignedInt248Type: 1020,
  UnsignedInt5999Type: 35902,
  UnsignedIntType: 1014,
  UnsignedShort4444Type: 1017,
  UnsignedShort5551Type: 1018,
  UnsignedShortType: 1012,
  VSMShadowMap: 3,
  Vector2: We,
  Vector3: O,
  Vector4: dt,
  WebGLCoordinateSystem: 2e3,
  WebGLCubeRenderTarget: ss,
  WebGLRenderTarget: Kt,
  WebGLRenderer: ka,
  WebGLUtils: Va,
  WebGPUCoordinateSystem: 2001,
  WebXRController: Xi,
  ZeroFactor: 200,
  createCanvasElement: pa,
  error: $e,
  log: Gr,
  warn: Pe,
  warnOnce: Zi
}, Symbol.toStringTag, { value: "Module" }));
function Eh(i, e, t, n) {
  const r = new Float32Array((t + 1) * (t + 1));
  let s = n;
  const a = () => (s = s * 1103515245 + 12345 & 2147483647) / 2147483647;
  for (let c = 0; c < r.length; c++) r[c] = a();
  const o = (c) => c * c * (3 - 2 * c), l = new Float32Array(i * e);
  for (let c = 0; c < e; c++) {
    const f = c / e * t, m = Math.floor(f), u = o(f - m);
    for (let p = 0; p < i; p++) {
      const g = p / i * t, S = Math.floor(g), h = o(g - S), d = m * (t + 1) + S, M = d + 1, A = d + t + 1, E = A + 1, R = r[d] + (r[M] - r[d]) * h, y = r[A] + (r[E] - r[A]) * h;
      l[c * i + p] = R + (y - R) * u;
    }
  }
  return l;
}
function fa(i, { size: e, octaves: t, grain: n, contrast: r, repeat: s, streak: a = 0, seed: o = 7, aniso: l = 8 }) {
  const c = document.createElement("canvas");
  c.width = c.height = e;
  const f = c.getContext("2d"), m = f.createImageData(e, e), u = [];
  let p = 1, g = 4, S = 0;
  for (let d = 0; d < t; d++)
    u.push({ data: Eh(e, e, g, o + d * 131), amp: p }), S += p, p *= 0.5, g *= 2;
  for (let d = 0; d < e; d++)
    for (let M = 0; M < e; M++) {
      const A = d * e + M;
      let E = 0;
      for (const b of u) E += b.data[A] * b.amp;
      E /= S, a && (E = E * (1 - a) + a * (0.5 + 0.5 * Math.sin(d * 0.19 + E * 3.4)));
      const R = (Math.random() - 0.5) * n, y = 128 + (E - 0.5) * 255 * r + R * 255, P = A * 4, x = Math.max(0, Math.min(255, y));
      m.data[P] = m.data[P + 1] = m.data[P + 2] = x, m.data[P + 3] = 255;
    }
  f.putImageData(m, 0, 0);
  const h = new i.CanvasTexture(c);
  return h.wrapS = h.wrapT = i.RepeatWrapping, h.repeat.set(s[0], s[1]), h.anisotropy = l, h.minFilter = i.LinearMipmapLinearFilter, h.magFilter = i.LinearFilter, h.generateMipmaps = !0, h.needsUpdate = !0, h;
}
function Th(i, e, t, n) {
  const r = (t ? "lo" : "hi") + "_" + n;
  if (e[r]) return e[r];
  const s = t ? 256 : 512, a = {
    tread: fa(i, { size: s, octaves: t ? 3 : 4, grain: 0.14, contrast: 0.62, repeat: [10, 5], seed: 7, aniso: n }),
    sidewall: fa(i, { size: s, octaves: t ? 2 : 3, grain: 0.07, contrast: 0.34, repeat: [16, 3], streak: 0.45, seed: 41, aniso: n })
  };
  return e[r] = a, a;
}
function Wa(i, e = {}) {
  const t = e.detail === !1, n = Th(i, Wa, t, Math.min(e.anisotropy || 8, 16)), r = {
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
    accent: new i.MeshStandardMaterial({ name: "sensor_amber", color: 12595499, roughness: 0.42, metalness: 0.2 })
  }, s = new i.Group();
  s.name = "otr_tire";
  const a = new i.Group();
  a.name = "outer_shell", s.add(a);
  const o = (R, y) => new i.Vector2(R, y), l = [
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
  ], c = new i.Mesh(new i.LatheGeometry(l, 96), r.sidewall);
  c.name = "carcass", a.add(c);
  const f = new i.Mesh(new i.CylinderGeometry(1.655, 1.655, 1.3, 96, 1, !0), r.groove);
  f.name = "crown_band", a.add(f);
  const m = [
    { y: -0.47, tilt: 0.46, r: 1.668, w: 0.225, h: 0.19, d: 0.295 },
    { y: -0.172, tilt: 0.08, r: 1.7, w: 0.235, h: 0.205, d: 0.3 },
    { y: 0.172, tilt: -0.08, r: 1.7, w: 0.235, h: 0.205, d: 0.3 },
    { y: 0.47, tilt: -0.46, r: 1.668, w: 0.225, h: 0.19, d: 0.295 }
  ], u = 40;
  m.forEach((R, y) => {
    const P = new i.BoxGeometry(R.w, R.d, R.h, 1, 1, 1);
    for (let x = 0; x < u; x++) {
      const b = x / u * Math.PI * 2 + (y % 2 ? Math.PI / u : 0), L = new i.Object3D();
      L.rotation.y = b;
      const C = new i.Mesh(P, r.tread);
      C.name = `tread_lug_${y}_${x}`, C.position.set(R.r, R.y, 0), C.rotation.x = R.tilt, C.rotation.z = (y < 2 ? 1 : -1) * 0.04, L.add(C), a.add(L);
    }
  });
  const p = new i.Mesh(new i.TorusGeometry(1.66, 0.035, 8, 96), r.groove);
  p.name = "center_groove", p.rotation.x = Math.PI / 2, a.add(p);
  for (const R of [-1, 1]) {
    [[1.46, 0.03, 0.66], [1.3, 0.026, 0.7], [1.13, 0.022, 0.716]].forEach(([P, x, b], L) => {
      const C = new i.Mesh(new i.TorusGeometry(P, x, 10, 96), r.sidewall);
      C.name = `sidewall_rib_${R > 0 ? "out" : "in"}_${L}`, C.rotation.x = Math.PI / 2, C.position.y = R * b, a.add(C);
    });
    const y = new i.Mesh(new i.TorusGeometry(0.92, 0.062, 12, 80), r.sidewall);
    y.name = `bead_ring_${R > 0 ? "out" : "in"}`, y.rotation.x = Math.PI / 2, y.position.y = R * 0.56, a.add(y);
  }
  const g = new i.Group();
  g.name = "wheel_assembly", s.add(g);
  const S = new i.Mesh(new i.CylinderGeometry(0.86, 0.86, 1.22, 64, 1, !0), r.hub);
  S.name = "rim_barrel", g.add(S);
  for (const R of [-1, 1]) {
    const y = new i.Mesh(new i.TorusGeometry(0.88, 0.055, 12, 64), r.rim);
    y.name = `rim_flange_${R > 0 ? "out" : "in"}`, y.rotation.x = Math.PI / 2, y.position.y = R * 0.58, g.add(y);
  }
  const h = new i.Mesh(new i.CylinderGeometry(0.7, 0.7, 0.3, 56), r.hub);
  h.name = "hub_plate", g.add(h);
  for (const R of [1, -1]) {
    const y = R > 0 ? "out" : "in", P = new i.Mesh(R > 0 ? new i.CylinderGeometry(0.855, 0.7, 0.42, 56, 1, !0) : new i.CylinderGeometry(0.7, 0.855, 0.42, 56, 1, !0), r.hub);
    P.name = `rim_dish_${y}`, P.position.y = R * 0.36, g.add(P);
    const x = new i.Mesh(new i.CylinderGeometry(0.665, 0.665, 0.1, 56), r.rim);
    x.name = `wheel_face_${y}`, x.position.y = R * 0.16, g.add(x);
    const b = 28;
    for (let k = 0; k < b; k++) {
      const W = k / b * Math.PI * 2, I = new i.Mesh(new i.CylinderGeometry(0.036, 0.036, 0.075, 8), r.hub);
      I.name = `wheel_nut_${y}_${k}`, I.position.set(Math.cos(W) * 0.49, R * 0.235, Math.sin(W) * 0.49), g.add(I);
    }
    const L = new i.Mesh(new i.TorusGeometry(0.49, 0.042, 8, 64), r.rim);
    L.name = `stud_ring_${y}`, L.rotation.x = Math.PI / 2, L.position.y = R * 0.215, g.add(L);
    const C = new i.Mesh(new i.CylinderGeometry(0.29, 0.27, 0.09, 40), r.rim);
    C.name = `hub_cap_${y}`, C.position.y = R * 0.245, g.add(C);
    const B = new i.Mesh(new i.CylinderGeometry(0.042, 0.042, 0.04, 20), r.hub);
    B.name = `hub_boss_${y}`, B.position.y = R * 0.3, g.add(B);
  }
  const d = new i.Mesh(new i.CylinderGeometry(0.032, 0.038, 0.22, 20), r.hub);
  d.name = "valve_stem", d.rotation.z = Math.PI / 2, d.position.set(0.4, 0.19, 0), g.add(d);
  const M = new i.Mesh(new i.BoxGeometry(0.16, 0.1, 0.22), r.accent);
  M.name = "sensor_module", M.position.set(0, -0.16, -0.6), g.add(M);
  const A = new i.Mesh(new i.BoxGeometry(0.24, 0.1, 0.1), r.hub);
  A.name = "sensor_bracket", A.position.set(0, -0.16, -0.53), g.add(A);
  const E = new i.Group();
  return E.name = "vizutire_otr_tire", s.rotation.x = Math.PI / 2, E.add(s), E.position.y = 1.78, { root: E, tire: s, outer: a, wheel: g, materials: r };
}
function bh(i) {
  const e = new i.Group();
  e.name = "internal_structure";
  const t = 8, n = new i.Group();
  n.name = "belt_package";
  const r = new i.LineBasicMaterial({ color: 2054261, transparent: !0, opacity: 0, depthWrite: !1 });
  r.name = "belt_lines", [1.68, 1.62, 1.56].forEach((E, R) => {
    const y = new i.CylinderGeometry(E, E, 1.02 - R * 0.1, 44, 1, !0), P = new i.LineSegments(new i.EdgesGeometry(y, 1), r);
    P.name = `belt_ply_${R + 1}`, n.add(P);
  }), e.add(n);
  const s = (E, R) => new i.Vector2(E, R), a = new i.LineBasicMaterial({ color: 4875632, transparent: !0, opacity: 0, depthWrite: !1 });
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
  ], 36), l = new i.LineSegments(new i.EdgesGeometry(o, 1), a);
  l.name = "carcass_ply", e.add(l);
  const c = [
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
  for (let E = 0; E < t; E++) {
    const R = new i.LineBasicMaterial({ color: 2846096, transparent: !0, opacity: 0, depthWrite: !1 });
    R.name = `radial_cord_sector_${E}`, f.push(R);
  }
  const m = 48, u = new i.Group();
  u.name = "radial_cords";
  for (let E = 0; E < m; E++) {
    const R = E / m * Math.PI * 2, y = c.map(([x, b]) => new i.Vector3(Math.cos(R) * x, b, Math.sin(R) * x)), P = new i.Line(new i.BufferGeometry().setFromPoints(y), f[Math.floor(E / m * t)]);
    P.name = `radial_cord_${E}`, u.add(P);
  }
  e.add(u);
  const p = new i.MeshStandardMaterial({ name: "bead_bundle", color: 12595499, roughness: 0.5, metalness: 0.3, transparent: !0, opacity: 0 });
  for (const E of [-1, 1]) {
    const R = new i.Mesh(new i.TorusGeometry(0.93, 0.045, 10, 60), p);
    R.name = `bead_bundle_${E > 0 ? "out" : "in"}`, R.rotation.x = Math.PI / 2, R.position.y = E * 0.47, e.add(R);
  }
  const g = new i.MeshBasicMaterial({ color: 12595499, transparent: !0, opacity: 0, depthWrite: !1 });
  g.name = "deformation_zone";
  const S = new i.Group();
  S.name = "deformation_zones";
  const h = [];
  [
    { r: 1.5, y: 0.4, arc: 0.9, at: -Math.PI / 2 },
    { r: 1.5, y: -0.4, arc: 0.9, at: -Math.PI / 2 },
    { r: 1.66, y: 0, arc: 0.6, at: -Math.PI / 2 }
  ].forEach((E, R) => {
    const y = new i.Mesh(new i.TorusGeometry(E.r, 0.035, 8, 40, E.arc), g);
    y.name = `deformation_zone_${R}`, y.rotation.x = Math.PI / 2, y.rotation.z = -E.at - E.arc / 2, y.position.y = E.y, h.push(y), S.add(y);
  });
  const M = (E, R, y) => Math.max(0, Math.min(1, (E - R) / (y - R)));
  function A(E, R, y) {
    if (e.visible = R > 5e-3, !e.visible) return;
    const P = M(R, 0, 0.45), x = M(R, 0.15, 0.6), b = M(R, 0.35, 0.85), L = M(R, 0.55, 1), C = M(R, 0.7, 1);
    r.opacity = 0.85 * P, a.opacity = 0.5 * x, p.opacity = 0.9 * L;
    for (let k = 0; k < t; k++) {
      const W = (E * 0.09 - k / t) % 1, I = Math.min(W < 0 ? W + 1 : W, 1 - (W < 0 ? W + 1 : W)), z = Math.exp(-Math.pow(I / 0.18, 2));
      f[k].opacity = b * (0.2 + 0.55 * z * (0.25 + 0.75 * y));
    }
    const B = 0.5 + 0.5 * Math.sin(E * 0.55);
    h.forEach((k, W) => {
      const I = 0.5 + 0.5 * Math.sin(E * 0.5 + W * 1.7);
      k.material, k.scale.setScalar(1 + 6e-3 * I * y);
    }), g.opacity = C * (0.25 + 0.45 * B * (0.3 + 0.7 * y)), n.scale.setScalar(1 + 35e-4 * Math.sin(E * 0.7) * y);
  }
  return { group: e, zoneGroup: S, update: A };
}
const Ct = {
  // --- encuadre del neumatico ---
  nominalDolly: 8,
  // distancia de camara de referencia (m)
  fitRatio: 0.78,
  // el neumatico ocupa ~78% del ancho visible
  minFit: 0.3,
  // escala minima en pantallas muy estrechas
  tireDiameter: 3.56,
  // diametro del modelo en metros
  fov: 34,
  // --- ritmo de la narrativa ---
  sectionHeightVh: 150,
  // altura de scroll de cada escena (vh)
  tailHeightVh: 130,
  // colchon final para la frase de cierre
  spinScale: 1,
  // multiplicador global de velocidad de giro
  damping: 1e-3,
  // suavizado del scroll (menor = mas suave)
  // --- breakpoints (deben coincidir con story.css) ---
  breakpoints: { mobile: 820 },
  // --- calidad ---
  quality: {
    motesDesktop: 200,
    motesMobile: 60,
    lowFpsThreshold: 28
    // por debajo de esto se degrada la calidad
  }
}, Ah = `<div id="gl" role="img" aria-label="Neumático OTR en 3D que gira y revela su estructura interna"></div>
<div id="vignette" aria-hidden="true"></div>
<div id="scrim-c" aria-hidden="true"></div>
<div id="scrim-b" aria-hidden="true"></div>
<svg id="wires" aria-hidden="true"></svg>
<noscript><p style="position:relative;z-index:5;max-width:60ch;margin:12vh auto;padding:0 24px;font:300 1.1rem/1.6 Barlow,system-ui,sans-serif;color:#14181a">
Un neumático OTR no solo se desgasta: durante cada ciclo de operación soporta cargas, deformaciones, impactos y variaciones de las condiciones de trabajo, y cada una genera una respuesta en su estructura. Conocer el estado visible de un neumático no necesariamente significa conocer su estado estructural. VIZUtire existe para hacer visible esa dimensión de la operación.</p></noscript>

<div id="overlay" role="region" aria-label="¿Por qué existe VIZUtire?">
  <!-- 0 · INTRO -->
  <div class="beat" data-beat="0">
    <div class="panel">
      <div class="eyebrow veil fx" data-range="-.1,.02,.85,1">VIZUtire · Inteligencia operacional OTR</div>
      <h1 class="veil fx" data-range="-.1,.04,.5,.62">¿Por qué existe VIZUtire?</h1>
      <h2 class="veil fx" data-range="0.45,.6,.9,1">Un neumático OTR no solo se desgasta.</h2>
    </div>
    <div class="bottom hint fx" data-nocenter data-range="-.1,.05,.3,.45">Desplácese para continuar ↓</div>
  </div>

  <!-- 1 · LA OPERACIÓN -->
  <div class="beat" data-beat="1">
    <div class="tag veil fx" data-range="-.04,.04,.17,.22" data-range-m="-.02,.06,.22,.30" style="left:6vw;top:26%">Carga <span class="v" id="v-carga">— t</span></div>
    <div class="tag r veil fx" data-range="0.24,.31,.41,.46" data-range-m="0.26,.34,.46,.54" style="right:6vw;top:36%">Deformación <span class="v" id="v-def">— mm</span></div>
    <div class="tag r veil fx" data-range="0.48,.55,.63,.68" data-range-m="0.50,.58,.70,.78" style="right:9vw;bottom:34%">Impacto <span class="v" id="v-imp">— g</span></div>
    <div class="tag veil fx" data-range="0.70,.77,.93,1" data-range-m="0.74,.82,.93,1" style="left:8vw;bottom:30%">Condiciones de operación <span class="v" id="v-cond">—</span></div>
    <div class="bottom">
      <p class="lead veil fx" data-range="0.05,.18,.82,.96" style="margin:0 auto">Durante cada ciclo de operación soporta cargas, deformaciones, impactos y variaciones de las condiciones de trabajo.</p>
    </div>
  </div>

  <!-- 2 · CADA CICLO -->
  <div class="beat" data-beat="2">
    <div class="bottom" style="display:flex;flex-direction:column;gap:26px">
      <div class="eyebrow veil fx" data-range="-.05,.04,.9,1">Ciclo de operación</div>
      <div class="cycle veil fx" data-range="0.02,.12,.9,1">
        <b data-step="0">Carga</b><span>→</span><b data-step="1">Respuesta</b><span>→</span><b data-step="2">Recuperación</b><span>→</span><b data-step="3">Nuevo ciclo</b>
      </div>
      <div class="accum fx" data-range="0.1,.25,.9,1"><span id="accum-bar"></span></div>
      <h2 class="veil fx" data-range="0.42,.56,.9,1" style="margin:8px auto 0;max-width:24ch">Cada una de ellas genera una respuesta en su estructura.</h2>
    </div>
  </div>

  <!-- 3 · LO QUE PODEMOS EVALUAR -->
  <div class="beat" data-beat="3">
    <div class="tag veil fx" data-wire="163" data-range="-.02,.04,.10,.14" data-range-m="-.02,.05,.10,.15" style="left:5vw;top:24%">Presión <span class="v" id="m-pres">—</span></div>
    <div class="tag veil fx" data-wire="180" data-range="0.16,.21,.26,.30" data-range-m="0.12,.18,.23,.28" style="left:4vw;top:46%">Temperatura <span class="v" id="m-temp">—</span></div>
    <div class="tag veil fx" data-wire="200" data-range="0.32,.37,.42,.46" data-range-m="0.25,.31,.36,.41" style="left:6vw;bottom:30%">Desgaste <span class="v" id="m-des">—</span></div>
    <div class="tag r veil fx" data-wire="17" data-range="0.48,.53,.58,.62" data-range-m="0.38,.44,.49,.54" style="right:5vw;top:24%">Daños visibles <span class="v" id="m-dan">—</span></div>
    <div class="tag r veil fx" data-wire="0" data-range="0.64,.69,.74,.78" data-range-m="0.51,.57,.62,.67" style="right:4vw;top:46%">Horas de operación <span class="v" id="m-hrs">—</span></div>
    <div class="tag r veil fx" data-wire="-20" data-range="0.80,.85,.90,.94" data-range-m="0.64,.70,.75,.80" style="right:6vw;bottom:30%">Condición superficial <span class="v" id="m-sup">—</span></div>
    <div class="bottom">
      <p class="lead veil fx" data-range="0.84,.91,.98,1" data-range-m="0.84,.91,.98,1" style="margin:0 auto">Gran parte de la gestión tradicional del neumático se concentra en lo que podemos evaluar directamente.</p>
    </div>
  </div>

  <!-- 4 · EL LÍMITE DE LO VISIBLE -->
  <div class="beat" data-beat="4">
    <div class="desk-only tag fx" data-wire="163" data-range="-1,-.5,.22,.5" style="left:5vw;top:24%">Presión</div>
    <div class="desk-only tag fx" data-wire="180" data-range="-1,-.5,.26,.54" style="left:4vw;top:46%">Temperatura</div>
    <div class="desk-only tag fx" data-wire="200" data-range="-1,-.5,.30,.58" style="left:6vw;bottom:30%">Desgaste</div>
    <div class="desk-only tag r fx" data-wire="17" data-range="-1,-.5,.34,.62" style="right:5vw;top:24%">Daños visibles</div>
    <div class="desk-only tag r fx" data-wire="0" data-range="-1,-.5,.38,.66" style="right:4vw;top:46%">Horas de operación</div>
    <div class="desk-only tag r fx" data-wire="-20" data-range="-1,-.5,.42,.70" style="right:6vw;bottom:30%">Condición superficial</div>
    <div class="bottom">
      <h2 class="veil fx" data-range="0.14,.30,.80,.94" style="margin:0 auto;max-width:24ch">Pero existe una dimensión que permanece menos visible.</h2>
    </div>
  </div>

  <!-- 5 · COMPARACIÓN -->
  <div class="beat" data-beat="5">
    <div class="col side-l veil fx" data-wire="178" data-wire-r="1.78" data-range="0.04,.16,.78,.92" data-range-m="-.02,.10,.38,.48">
      <h3>Lo que podemos ver</h3>
      <ul><li>Presión</li><li>Temperatura</li><li>Desgaste</li><li>Daños visibles</li><li>Horas de operación</li><li>Condición superficial</li></ul>
    </div>
    <div class="col structural side-r veil fx" data-wire="2" data-wire-r="1.30" data-range="0.24,.38,.78,.92" data-range-m="0.52,.62,.88,.96">
      <h3>Lo que está ocurriendo</h3>
      <ul><li>Respuesta estructural</li><li>Evolución estructural</li><li>Efecto de la operación</li></ul>
    </div>
    <div class="bottom">
      <div class="eyebrow veil fx" data-range="0.46,.60,.80,.94">Superficie · Estructura · Una misma operación</div>
    </div>
  </div>

  <!-- 6 · LA PREGUNTA -->
  <div class="beat" data-beat="6">
    <div class="center">
      <div class="q veil fx" data-range="0.10,.28,.90,1">¿Cómo está evolucionando <span class="mark">estructuralmente</span> el neumático como consecuencia de la operación?</div>
    </div>
  </div>

  <!-- 7 · LA BRECHA -->
  <div class="beat" data-beat="7">
    <div class="stack">
      <div class="lbl veil fx" data-range="0.03,.14,.66,.80">Estado visible</div>
      <div class="hair fx" data-range="0.08,.20,.66,.80"></div>
      <div class="gap-note veil fx" data-range="0.30,.44,.66,.80">no observado</div>
      <div class="hair fx" data-range="0.12,.24,.66,.80"></div>
      <div class="lbl q veil fx" data-range="0.16,.30,.66,.80">Estado estructural</div>
    </div>
    <div class="bottom">
      <h2 class="veil fx" data-range="0.56,.70,.94,1">VIZUtire nace de esa brecha.</h2>
    </div>
  </div>

  <!-- 8 · NO REEMPLAZA -->
  <div class="beat" data-beat="8">
    <div class="stack">
      <div class="lbl veil fx" data-range="0.14,.28,.82,.94">Controles existentes</div>
      <div class="lbl q veil fx" data-range="0.24,.38,.82,.94">Nueva perspectiva</div>
      <div class="hair fx" data-range="0.30,.44,.82,.94"></div>
      <div class="lbl sum veil fx" data-range="0.40,.54,.82,.94">Gestión más completa</div>
    </div>
    <div class="bottom">
      <p class="lead veil fx" data-range="-.02,.10,.30,.44" style="margin:0 auto">No para reemplazar los controles existentes.</p>
      <p class="lead veil fx" data-range="0.56,.68,.88,.98" style="margin:0 auto">Sino para incorporar una nueva perspectiva a la gestión del neumático.</p>
    </div>
  </div>

  <!-- 9 · CIERRE -->
  <div class="beat" data-beat="9">
    <div class="bottom">
      <h2 class="veil fx" data-range="-.02,.10,.42,.56" style="margin:0 auto;max-width:30ch">Porque conocer el estado visible de un neumático no necesariamente significa conocer su estado estructural.</h2>
    </div>
    <div class="center">
      <div class="final veil fx" data-range="0.58,.74,1,1">VIZUtire existe para hacer visible esa dimensión de la operación.</div>
    </div>
  </div>
</div>

<div class="rail" id="rail" aria-hidden="true"></div>`;
function Rh(i) {
  const e = i;
  e.classList.add("vzt-story");
  let t = "";
  for (let w = 0; w < 10; w++) t += '<section class="scroll" data-b="' + w + '"></section>';
  t += '<div style="height:' + Ct.tailHeightVh + 'vh"></div>', e.innerHTML = '<div class="vzt-stage">' + Ah + '</div><div class="vzt-scroller">' + t + "</div>", e.querySelectorAll("section.scroll").forEach((w) => {
    w.style.height = Ct.sectionHeightVh + "vh";
  });
  const n = innerWidth <= Ct.breakpoints.mobile, r = matchMedia("(prefers-reduced-motion: reduce)").matches, s = (w, U = 0, J = 1) => Math.min(J, Math.max(U, w)), a = (w, U, J) => w + (U - w) * J, o = (w) => w * w * (3 - 2 * w), l = (w, U, J) => o(s((w - U) / (J - U || 1e-6))), c = e.querySelector("#gl");
  let f;
  try {
    f = new ka({ antialias: !0, alpha: !1, powerPreference: "high-performance" });
  } catch (w) {
    throw console.warn("WebGL no disponible; se muestra la narrativa sin el modelo 3D.", w), e.classList.add("no-webgl"), e.querySelectorAll("#gl,.vzt-scroller,#wires,#vignette,#scrim-b,#scrim-c,.rail").forEach((U) => U.remove()), new Error("webgl-unavailable");
  }
  f.outputColorSpace = Lt;
  const m = 2;
  f.setPixelRatio(Math.min(devicePixelRatio || 1, m)), f.setSize(innerWidth, innerHeight, !0), f.shadowMap.enabled = !n, f.shadowMap.type = 1, f.toneMapping = 4, f.toneMappingExposure = 1.12, c.appendChild(f.domElement), f.domElement.addEventListener("webglcontextlost", (w) => {
    w.preventDefault(), Z = !1;
  }, !1), f.domElement.addEventListener("webglcontextrestored", () => {
    Ie(), Z || (Z = !0, re = performance.now(), se = requestAnimationFrame(ge));
  }, !1);
  const u = new Ma();
  u.background = new ke(16777215), u.fog = new er(16777215, 14, 30);
  const p = new Ot(Ct.fov, innerWidth / innerHeight, 0.5, 60);
  p.position.set(0, 2.1, 8.6);
  const g = 46, S = 34;
  u.add(new La(16777215, 12564908, 0.85));
  const h = new Yn(16183784, 2.35);
  h.position.set(5.5, 7.8, 6.5), h.castShadow = !n, h.shadow.mapSize.set(n ? 1024 : 2048, n ? 1024 : 2048), h.shadow.radius = n ? 1.6 : 2.2, h.shadow.camera.left = -3.2, h.shadow.camera.right = 3.2, h.shadow.camera.top = 4.2, h.shadow.camera.bottom = -0.4, h.shadow.camera.near = 2, h.shadow.camera.far = 20, h.shadow.bias = -6e-4, h.shadow.normalBias = 0.02, u.add(h);
  const d = new Yn(10337487, 0.8);
  d.position.set(-7.5, 2.6, 3.5), u.add(d);
  const M = new Yn(14674415, 1.5);
  M.position.set(-2.8, 4.2, -7.5), u.add(M);
  const A = new Yn(15789800, 0.7);
  A.position.set(2.8, 1, 8), u.add(A);
  const E = new Yn(14210248, 0.5);
  E.position.set(1, -4, 3), u.add(E);
  const R = new zt(new Pn(60, 60), new Aa({ opacity: 0.11 }));
  R.rotation.x = -Math.PI / 2, R.receiveShadow = !0, u.add(R);
  function y() {
    const w = n ? 512 : 1024, U = document.createElement("canvas");
    U.width = U.height = w;
    const J = U.getContext("2d");
    J.clearRect(0, 0, w, w);
    const ye = w / 2, Te = w * 0.115;
    for (let It = 0; It < 2600; It++) {
      const Et = Math.random() * w, Wt = (Math.random() - 0.5) * w * 0.62, en = ye + Wt, ei = Math.exp(-Math.pow(Wt / (Te * 2.1), 2)) * (0.35 + Math.random() * 0.65);
      J.fillStyle = "rgba(96,84,66," + (ei * 0.3).toFixed(3) + ")", J.fillRect(Et, en, 1 + Math.random() * 3, 1 + Math.random() * 3);
    }
    const et = J.createLinearGradient(0, ye - Te * 1.6, 0, ye + Te * 1.6);
    et.addColorStop(0, "rgba(88,76,58,0)"), et.addColorStop(0.32, "rgba(78,67,51,0.34)"), et.addColorStop(0.5, "rgba(60,51,39,0.52)"), et.addColorStop(0.68, "rgba(78,67,51,0.34)"), et.addColorStop(1, "rgba(88,76,58,0)"), J.fillStyle = et, J.fillRect(0, ye - Te * 1.6, w, Te * 3.2);
    for (let It = 0; It < 46; It++) {
      const Et = It / 46 * w + Math.random() * 4;
      for (const Wt of [-1, 1])
        J.save(), J.translate(Et, ye + Wt * Te * 0.52), J.rotate(Wt * 0.22), J.fillStyle = "rgba(46,38,28," + (0.26 + Math.random() * 0.26).toFixed(3) + ")", J.fillRect(-w * 6e-3, -Te * 0.28, w * 0.012, Te * 0.56), J.restore();
    }
    const ht = J.createRadialGradient(ye, ye, w * 0.1, ye, ye, w * 0.5);
    ht.addColorStop(0, "rgba(0,0,0,1)"), ht.addColorStop(0.62, "rgba(0,0,0,0.55)"), ht.addColorStop(1, "rgba(0,0,0,0)"), J.globalCompositeOperation = "destination-in", J.fillStyle = ht, J.fillRect(0, 0, w, w);
    const Ft = new Hr(U);
    return Ft.anisotropy = Math.min(P, n ? 4 : 16), Ft.minFilter = 1008, Ft.magFilter = 1006, Ft.generateMipmaps = !0, Ft;
  }
  const P = f.capabilities.getMaxAnisotropy(), x = new zt(
    new Pn(17, 17),
    new hi({ map: y(), transparent: !0, opacity: 0.9, depthWrite: !1 })
  );
  x.name = "dirt_track";
  const b = new zt(
    new ir(1.5, 48),
    (() => {
      const U = document.createElement("canvas");
      U.width = U.height = 128;
      const J = U.getContext("2d"), ye = J.createRadialGradient(128 / 2, 128 / 2, 0, 128 / 2, 128 / 2, 128 / 2);
      return ye.addColorStop(0, "rgba(24,22,18,0.62)"), ye.addColorStop(0.45, "rgba(30,27,22,0.30)"), ye.addColorStop(1, "rgba(30,27,22,0)"), J.fillStyle = ye, J.fillRect(0, 0, 128, 128), new hi({ map: new Hr(U), transparent: !0, depthWrite: !1 });
    })()
  );
  b.name = "contact_ao", b.rotation.x = -Math.PI / 2, b.position.y = 6e-3, b.scale.set(1, 0.42, 1), u.add(b), x.rotation.x = -Math.PI / 2, x.position.y = 4e-3, u.add(x);
  const { root: L, tire: C, materials: B } = Wa(ha, { detail: !n, anisotropy: P });
  L.traverse((w) => {
    w.isMesh && (w.castShadow = !0, w.receiveShadow = !0);
  });
  const k = new wn();
  k.add(L), u.add(k);
  const W = bh(ha);
  C.add(W.group);
  const I = new wn();
  if (I.rotation.x = Math.PI / 2, I.add(W.zoneGroup), L.add(I), W.group.visible = !1, n) {
    const w = W.group.getObjectByName("radial_cords");
    w && w.children.forEach((U, J) => {
      J % 2 && (U.visible = !1);
    });
  }
  let z = 1;
  function q() {
    const w = innerWidth / innerHeight, U = 0.611 * Ct.nominalDolly * w;
    z = Math.max(Ct.minFit, Math.min(1, Ct.fitRatio * U / Ct.tireDiameter)), k.scale.setScalar(z);
  }
  q();
  const te = new yt(), ne = n ? Ct.quality.motesMobile : Ct.quality.motesDesktop, de = new Float32Array(ne * 3);
  for (let w = 0; w < ne; w++)
    de[w * 3] = (Math.random() - 0.5) * 14, de[w * 3 + 1] = Math.random() * 6, de[w * 3 + 2] = (Math.random() - 0.5) * 8;
  te.setAttribute("position", new kt(de, 3));
  const Me = new Ta(te, new jr({ color: 7037781, size: 0.02, transparent: !0, opacity: 0.3, depthWrite: !1 }));
  u.add(Me);
  const be = [B.tread, B.sidewall], Ze = [B.rim, B.hub, B.accent], Ke = [...e.querySelectorAll("section.scroll")], Ne = [...e.querySelectorAll(".beat")], Q = (w) => w.split(",").map(Number), fe = [...e.querySelectorAll(".fx")].map((w) => {
    const U = Q(w.dataset.range || "0,0,1,1"), J = w.dataset.rangeM ? Q(w.dataset.rangeM) : U, ye = !("nocenter" in w.dataset) && ["tag", "bottom", "center", "stack", "panel"].some((Te) => w.classList.contains(Te));
    return { el: w, wide: U, narrow: J, centered: ye, beat: +w.closest(".beat").dataset.beat, cur: 0, wire: null };
  });
  let ie = innerWidth <= Ct.breakpoints.mobile;
  const we = e.querySelector("#rail");
  Ke.forEach(() => we.appendChild(document.createElement("i")));
  const Fe = [...we.children], Ce = e.querySelector("#wires"), at = fe.filter((w) => w.el.dataset.wire !== void 0);
  for (const w of at) {
    const U = document.createElementNS("http://www.w3.org/2000/svg", "line");
    Ce.appendChild(U), w.wire = { el: U, ang: +w.el.dataset.wire * Math.PI / 180, r: +(w.el.dataset.wireR || 1.78) };
  }
  const Ve = new O();
  let je = 0, Qe = 0, De = 0;
  function pt() {
    const w = innerHeight;
    if (window.__force != null) {
      const Te = window.__force;
      De = Math.min(Ke.length - 1, Math.floor(Te)), Qe = s(Te - De), je = Te;
      return;
    }
    const U = w * 0.5;
    let J = 0;
    for (let Te = 0; Te < Ke.length; Te++)
      U >= Ke[Te].getBoundingClientRect().top && (J = Te);
    const ye = Ke[J].getBoundingClientRect();
    De = J, Qe = s((U - ye.top) / ye.height), je = J + Qe;
  }
  const $ = { load: 0, oval: 0, transp: 1, inner: 0, camZ: 8.6, camY: 2.1, spin: 0, az: 0, shift: 0, rise: 0, scrimB: 0, scrimC: 0, motion: 0 }, wt = e.querySelector("#scrim-b"), F = e.querySelector("#scrim-c"), Oe = { ...$ };
  let Be = 999, nt = -1;
  const le = (w, U) => {
    const J = e.querySelector("#" + w);
    J && (J.textContent = U);
  }, lt = (w) => {
    const U = (J) => Math.sin(performance.now() / 1400 + J);
    le("m-pres", (6.9 + U(1) * 0.05).toFixed(2) + " bar"), le("m-temp", (78 + U(2) * 3).toFixed(0) + " °C"), le("m-des", (41 + U(3) * 0.3).toFixed(0) + " %"), le("m-dan", "Nivel 1"), le("m-hrs", 4820 + Math.floor(w * 40) + " h"), le("m-sup", "Regular");
  };
  function T(w) {
    const U = ie ? 0.78 : 1, J = Math.max(0, w - 0.12), ye = J * 0.4 * U, Te = ie ? 0.62 : 0.76;
    let et;
    return w < 3 ? et = Math.max(Te, Math.min(1.15, J * 0.62)) : w < 5 ? et = a(1.15, 0.62, (w - 3) / 2) : et = a(0.62, 0.34, s((w - 5) / 5)), { spin: ye, az: et * U };
  }
  function _() {
    const w = De, U = Qe;
    if ($.load = 0, $.oval = 0, $.transp = 1, $.inner = 0, $.spin = 0.14, $.shift = 0, $.camZ = 7.4, $.camY = 2.1, $.rise = -0.3, $.scrimB = 0, $.scrimC = 0, $.motion = 0, w === 0 && ($.camZ = a(ie ? 5.7 : 5.9, ie ? 7.4 : 8.1, l(U, 0.18, 0.95)), $.camY = a(2.35, 2.05, l(U, 0.18, 0.95)), $.shift = 0, $.spin = 0.1, $.rise = a(-0.52, -1.05, l(U, 0.18, 0.95)), $.scrimB = 0.2), w === 1) {
      if ($.camZ = a(ie ? 7.4 : 8.1, 8, U), $.shift = ie ? 0 : 0.9, $.rise = a(-1.05, -0.42, l(U, 0, 0.6)), $.scrimB = 0.5, $.load = l(U, 0.02, 0.12) * (1 - l(U, 0.2, 0.3)), $.oval = l(U, 0.24, 0.34) * (1 - l(U, 0.42, 0.52)) * 0.9, U > 0.48 && U < 0.68) {
        const ye = Math.floor((U - 0.48) / 0.07);
        ye !== nt && (nt = ye, Be = 0);
      }
      $.spin = a(0.14, 0.3, l(U, 0.7, 1)), le("v-carga", (38 + $.load * 22).toFixed(0) + " t"), le("v-def", (6 + $.oval * 14).toFixed(1) + " mm"), le("v-imp", Be < 1.4 ? (2.4 + Math.random() * 1.2).toFixed(1) + " g" : "0.4 g"), le("v-cond", ["Berma", "Rampa", "Curva", "Carguío"][Math.floor(U * 8) % 4]);
    }
    if (w === 2) {
      $.camZ = 9.6, $.rise = -1.15, $.scrimB = 0.55;
      const ye = U * 4 % 1;
      $.load = Math.sin(Math.PI * s(ye / 0.5)) * 0.9, $.oval = Math.sin(Math.PI * s((ye - 0.35) / 0.45, 0, 1)) * 0.35, e.querySelector("#accum-bar").style.width = (s(U) * 100).toFixed(1) + "%";
      const Te = Math.min(3, Math.floor(ye * 4));
      e.querySelectorAll(".cycle b").forEach((et) => et.classList.toggle("on", +et.dataset.step === Te)), $.spin = 0.22;
    }
    w === 3 && ($.camZ = a(7.4, 7.2, U), $.spin = a(0.16, 0.1, U), $.rise = -0.52, $.scrimB = a(0.25, 0.5, l(U, 0.5, 0.72)), lt(U)), w === 4 && ($.camZ = a(7.2, 6.6, l(U, 0.35, 1)), $.rise = a(-0.52, -0.4, l(U, 0.3, 1)), $.spin = a(0.1, 0, l(U, 0, 0.22)), $.spin = a($.spin, 0.05, l(U, 0.55, 1)), $.transp = a(1, 0.2, l(U, 0.42, 0.92)), $.inner = l(U, 0.48, 1) * 0.85, $.motion = l(U, 0.7, 1) * 0.5, $.scrimB = a(0.5, 0.4, l(U, 0.4, 0.8)), lt(U)), w === 5 && ($.camZ = a(6.6, 6.4, U), $.rise = -0.34, $.spin = 0.05, $.transp = 0.18, $.inner = a(0.85, 1, l(U, 0, 0.4)), $.motion = 0.7, $.scrimB = 0.4), w === 6 && ($.camZ = a(6.4, 6, l(U, 0, 0.6)), $.rise = -0.3, $.spin = 0.03, $.transp = 0.14, $.inner = 1, $.motion = 0.9, $.scrimC = l(U, 0.05, 0.3) * 0.6), w === 7 && ($.camZ = a(6, 11, l(U, 0, 0.55)), $.rise = a(-0.3, -1.85, l(U, 0, 0.55)), $.spin = a(0.03, 0, l(U, 0.3, 0.6)), $.transp = 0.16, $.inner = 1, $.motion = 1 - l(U, 0.28, 0.6), $.scrimC = 0.5, $.scrimB = l(U, 0.5, 0.72) * 0.45), w === 8 && ($.camZ = 11, $.rise = -1.85, $.spin = 0.02, $.transp = a(0.16, 0.42, l(U, 0.1, 0.7)), $.inner = a(1, 0.8, l(U, 0.1, 0.7)), $.motion = 0, $.scrimC = 0.5, $.scrimB = 0.5), w === 9 && ($.camZ = a(11, 12.4, l(U, 0.1, 0.85)), $.rise = a(-1.85, -2.15, l(U, 0.1, 0.9)), $.spin = 0.02, $.transp = a(0.42, 1, l(U, 0.35, 0.75)), $.inner = (1 - l(U, 0.3, 0.62)) * 0.8, $.motion = 0, $.scrimB = (1 - l(U, 0.5, 0.68)) * 0.5, $.scrimC = Math.max(0.35, l(U, 0.45, 0.75)) * 0.6);
    const J = T(je);
    $.spin = J.spin, $.az = J.az;
  }
  let G = -1;
  function j() {
    for (const w of fe) {
      let U = 0;
      if (w.beat === De) {
        const [J, ye, Te, et] = ie ? w.narrow : w.wide;
        U = l(Qe, J, ye) * (1 - l(Qe, Te, et));
      }
      if (Math.abs(U - w.cur) > 2e-3) {
        w.cur = U, w.el.style.opacity = U.toFixed(3);
        const J = 1 - U;
        w.el.style.transform = w.centered ? `translateX(-50%) translateY(${(J * 10).toFixed(2)}px) scale(${(1 - J * 0.012).toFixed(4)})` : `translateY(${(J * 10).toFixed(2)}px) scale(${(1 - J * 0.012).toFixed(4)})`;
      }
    }
    De !== G && (G = De, Ne.forEach((w, U) => w.style.opacity = U === De ? 1 : 0), Fe.forEach((w, U) => w.classList.toggle("on", U === De)));
  }
  function ee() {
    for (const w of at) {
      const U = w.wire;
      if (w.beat !== De || w.cur < 0.04) {
        U.el.style.strokeOpacity = 0;
        continue;
      }
      const J = w.el.getBoundingClientRect();
      if (!J.width || !J.height) {
        U.el.style.strokeOpacity = 0;
        continue;
      }
      const ye = w.el.classList.contains("tag"), Te = !w.el.classList.contains("r") && !w.el.classList.contains("side-r"), et = ye ? J.left + J.width / 2 : Te ? J.right + 8 : J.left - 8, ht = ye ? J.bottom + 10 : J.top + J.height / 2;
      Ve.set(Oe.shift + Math.cos(U.ang) * U.r * z, (1.78 + Math.sin(U.ang) * U.r) * z, 0).project(p);
      const Ft = (Ve.x * 0.5 + 0.5) * innerWidth, It = (-Ve.y * 0.5 + 0.5) * innerHeight;
      U.el.setAttribute("x1", et.toFixed(1)), U.el.setAttribute("y1", ht.toFixed(1)), U.el.setAttribute("x2", Ft.toFixed(1)), U.el.setAttribute("y2", It.toFixed(1)), U.el.style.strokeOpacity = (w.cur * 0.34).toFixed(3);
    }
  }
  let re = performance.now(), se = 0, Y = 0, Z = !0, pe = 0;
  function ge(w) {
    if (!Z) return;
    const U = Math.min(0.05, (w - re) / 1e3);
    re = w, pt(), _(), j(), r && ($.spin *= 0.22, $.oval *= 0.25, $.load *= 0.35, $.motion *= 0.5, $.camZ = a(7.9, $.camZ, 0.45));
    const J = 1 - Math.pow(Ct.damping, U);
    for (const Et of Object.keys($)) Oe[Et] = a(Oe[Et], $[Et], J);
    Be += U;
    const ye = Be < 1.6 ? Math.sin(Be * 26) * Math.exp(-Be * 3.6) : 0;
    C.rotation.y = Oe.spin * Ct.spinScale;
    const Te = Oe.oval * 0.03 + ye * 0.012;
    C.scale.set(1 + Te, 1, 1 - Te);
    const et = Oe.load * 0.016 + Math.abs(ye) * 6e-3;
    L.scale.set(1 + et * 0.6, 1 - et, 1), L.position.y = 1.78 * (1 - et), k.position.x = Oe.shift, k.rotation.y = ye * 6e-3;
    const ht = Oe.transp;
    be.forEach((Et) => {
      Et.transparent = ht < 0.99, Et.opacity = ht, Et.depthWrite = ht > 0.75;
    }), Ze.forEach((Et) => {
      const Wt = a(1, 0.35, 1 - ht);
      Et.transparent = Wt < 0.99, Et.opacity = Wt;
    }), W.update(w / 1e3, Oe.inner, Oe.motion);
    const Ft = s((je - 0.15) / 0.85), It = a(g, S, o(Ft));
    Math.abs(p.fov - It) > 0.02 && (p.fov = It, p.updateProjectionMatrix()), p.position.set(Math.sin(Oe.az) * Oe.camZ, Oe.camY * z + (1 - z) * 0.6, Math.cos(Oe.az) * Oe.camZ), p.lookAt(Oe.shift * 0.55, (1.78 - Oe.rise) * z, 0), wt.style.opacity = Oe.scrimB.toFixed(3), F.style.opacity = Oe.scrimC.toFixed(3), Me.rotation.y += U * 8e-3, Me.material.opacity = 0.12 + Oe.inner * 0.12, x.material.opacity = 0.9 * (1 - Oe.inner * 0.72), b.material.opacity = 1 - Oe.inner * 0.8, ee(), f.render(u, p), se = requestAnimationFrame(ge);
  }
  se = requestAnimationFrame(ge);
  function ce(w) {
    w !== Z && (Z = w, w ? (re = performance.now(), se = requestAnimationFrame(ge)) : cancelAnimationFrame(se));
  }
  const ae = new IntersectionObserver((w) => {
    const U = w[w.length - 1];
    if (!U) return;
    const J = !U.isIntersecting && U.rootBounds && U.boundingClientRect.height > 0;
    ce(!J && !document.hidden);
  }, { threshold: 0 });
  ae.observe(c), pe = setInterval(() => {
    !Z && !document.hidden && ce(!0);
  }, 1e3);
  const Le = () => ce(!document.hidden);
  document.addEventListener("visibilitychange", Le);
  function Ie() {
    ie = innerWidth <= Ct.breakpoints.mobile, f.setPixelRatio(Math.min(devicePixelRatio || 1, m)), f.setSize(innerWidth, innerHeight, !0), p.aspect = innerWidth / innerHeight, p.updateProjectionMatrix(), q();
  }
  let Xe = 0;
  const D = () => {
    clearTimeout(Xe), Xe = setTimeout(Ie, 140);
  };
  addEventListener("resize", D);
  const oe = () => setTimeout(Ie, 260);
  addEventListener("orientationchange", oe);
  let K = 0, xe = performance.now();
  (function w() {
    K++;
    const U = performance.now() - xe;
    if (U > 2500) {
      K / (U / 1e3) < Ct.quality.lowFpsThreshold && (f.setPixelRatio(Math.min(devicePixelRatio || 1, 1.25)), f.shadowMap.enabled = !1, h.castShadow = !1, Me.visible = !1, W.group.traverse((J) => {
        J.name.startsWith("radial_cord_") && +J.name.slice(12) % 2 && (J.visible = !1);
      }));
      return;
    }
    Y = requestAnimationFrame(w);
  })();
  function ue() {
    Z = !1, cancelAnimationFrame(se), cancelAnimationFrame(Y), ae.disconnect(), removeEventListener("resize", D), removeEventListener("orientationchange", oe), document.removeEventListener("visibilitychange", Le), clearTimeout(Xe), clearInterval(pe), u.traverse((w) => {
      w.geometry && w.geometry.dispose();
      const U = Array.isArray(w.material) ? w.material : w.material ? [w.material] : [];
      for (const J of U) {
        for (const ye of ["map", "bumpMap", "roughnessMap"]) J[ye] && J[ye].dispose();
        J.dispose();
      }
    }), f.dispose();
  }
  return addEventListener("pagehide", ue, { once: !0 }), { destroy: ue };
}
export {
  Rh as createStructuralStory
};
