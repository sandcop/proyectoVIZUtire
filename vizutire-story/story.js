/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const qi = "184";
const tn = "", Lt = "srgb", ri = "srgb-linear", si = "linear", Ze = "srgb";
const Fr = "300 es";
function Ka(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Vi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function ua() {
  const i = Vi("canvas");
  return i.style.display = "block", i;
}
const ps = {};
function Ir(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function da(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function Ce(...i) {
  i = da(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function Xe(...i) {
  i = da(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function Hi(...i) {
  const e = i.join(" ");
  e in ps || (ps[e] = !0, Ce(...i));
}
function Za(i, e, t) {
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
const $a = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
class gn {
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
const yt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Bi = Math.PI / 180, Ur = 180 / Math.PI;
function ai() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (yt[i & 255] + yt[i >> 8 & 255] + yt[i >> 16 & 255] + yt[i >> 24 & 255] + "-" + yt[e & 255] + yt[e >> 8 & 255] + "-" + yt[e >> 16 & 15 | 64] + yt[e >> 24 & 255] + "-" + yt[t & 63 | 128] + yt[t >> 8 & 255] + "-" + yt[t >> 16 & 255] + yt[t >> 24 & 255] + yt[n & 255] + yt[n >> 8 & 255] + yt[n >> 16 & 255] + yt[n >> 24 & 255]).toLowerCase();
}
function ke(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ja(i, e) {
  return (i % e + e) % e;
}
function nr(i, e, t) {
  return (1 - t) * i + t * e;
}
function Zn(i, e) {
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
function Ct(i, e) {
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
const ts = class ts {
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
    return this.x = ke(this.x, e.x, t.x), this.y = ke(this.y, e.y, t.y), this;
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
    return this.x = ke(this.x, e, t), this.y = ke(this.y, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(ke(n, e, t));
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
    return Math.acos(ke(n, -1, 1));
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
ts.prototype.isVector2 = !0;
let Ve = ts;
class An {
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
    let c = n[r + 0], l = n[r + 1], f = n[r + 2], m = n[r + 3], u = s[a + 0], p = s[a + 1], g = s[a + 2], S = s[a + 3];
    if (m !== S || c !== u || l !== p || f !== g) {
      let h = c * u + l * p + f * g + m * S;
      h < 0 && (u = -u, p = -p, g = -g, S = -S, h = -h);
      let d = 1 - o;
      if (h < 0.9995) {
        const M = Math.acos(h), b = Math.sin(M);
        d = Math.sin(d * M) / b, o = Math.sin(o * M) / b, c = c * d + u * o, l = l * d + p * o, f = f * d + g * o, m = m * d + S * o;
      } else {
        c = c * d + u * o, l = l * d + p * o, f = f * d + g * o, m = m * d + S * o;
        const M = 1 / Math.sqrt(c * c + l * l + f * f + m * m);
        c *= M, l *= M, f *= M, m *= M;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = f, e[t + 3] = m;
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
    const o = n[r], c = n[r + 1], l = n[r + 2], f = n[r + 3], m = s[a], u = s[a + 1], p = s[a + 2], g = s[a + 3];
    return e[t] = o * g + f * m + c * p - l * u, e[t + 1] = c * g + f * u + l * m - o * p, e[t + 2] = l * g + f * p + o * u - c * m, e[t + 3] = f * g - o * m - c * u - l * p, e;
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
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), f = o(r / 2), m = o(s / 2), u = c(n / 2), p = c(r / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * f * m + l * p * g, this._y = l * p * m - u * f * g, this._z = l * f * g + u * p * m, this._w = l * f * m - u * p * g;
        break;
      case "YXZ":
        this._x = u * f * m + l * p * g, this._y = l * p * m - u * f * g, this._z = l * f * g - u * p * m, this._w = l * f * m + u * p * g;
        break;
      case "ZXY":
        this._x = u * f * m - l * p * g, this._y = l * p * m + u * f * g, this._z = l * f * g + u * p * m, this._w = l * f * m - u * p * g;
        break;
      case "ZYX":
        this._x = u * f * m - l * p * g, this._y = l * p * m + u * f * g, this._z = l * f * g - u * p * m, this._w = l * f * m + u * p * g;
        break;
      case "YZX":
        this._x = u * f * m + l * p * g, this._y = l * p * m + u * f * g, this._z = l * f * g - u * p * m, this._w = l * f * m - u * p * g;
        break;
      case "XZY":
        this._x = u * f * m - l * p * g, this._y = l * p * m - u * f * g, this._z = l * f * g + u * p * m, this._w = l * f * m + u * p * g;
        break;
      default:
        Ce("Quaternion: .setFromEuler() encountered an unknown order: " + a);
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
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], f = t[6], m = t[10], u = n + o + m;
    if (u > 0) {
      const p = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / p, this._x = (f - c) * p, this._y = (s - l) * p, this._z = (a - r) * p;
    } else if (n > o && n > m) {
      const p = 2 * Math.sqrt(1 + n - o - m);
      this._w = (f - c) / p, this._x = 0.25 * p, this._y = (r + a) / p, this._z = (s + l) / p;
    } else if (o > m) {
      const p = 2 * Math.sqrt(1 + o - n - m);
      this._w = (s - l) / p, this._x = (r + a) / p, this._y = 0.25 * p, this._z = (c + f) / p;
    } else {
      const p = 2 * Math.sqrt(1 + m - n - o);
      this._w = (a - r) / p, this._x = (s + l) / p, this._y = (c + f) / p, this._z = 0.25 * p;
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
    return 2 * Math.acos(Math.abs(ke(this.dot(e), -1, 1)));
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
const ns = class ns {
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
    return this.applyQuaternion(ms.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ms.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * n), f = 2 * (o * t - s * r), m = 2 * (s * n - a * t);
    return this.x = t + c * l + a * m - o * f, this.y = n + c * f + o * l - s * m, this.z = r + c * m + s * f - a * l, this;
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
    return this.x = ke(this.x, e.x, t.x), this.y = ke(this.y, e.y, t.y), this.z = ke(this.z, e.z, t.z), this;
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
    return this.x = ke(this.x, e, t), this.y = ke(this.y, e, t), this.z = ke(this.z, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(ke(n, e, t));
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
    return ir.copy(this).projectOnVector(e), this.sub(ir);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(ir.copy(e).multiplyScalar(2 * this.dot(e)));
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
    return Math.acos(ke(n, -1, 1));
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
ns.prototype.isVector3 = !0;
let B = ns;
const ir = /* @__PURE__ */ new B(), ms = /* @__PURE__ */ new An(), is = class is {
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
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], f = n[4], m = n[7], u = n[2], p = n[5], g = n[8], S = r[0], h = r[3], d = r[6], M = r[1], b = r[4], E = r[7], C = r[2], T = r[5], w = r[8];
    return s[0] = a * S + o * M + c * C, s[3] = a * h + o * b + c * T, s[6] = a * d + o * E + c * w, s[1] = l * S + f * M + m * C, s[4] = l * h + f * b + m * T, s[7] = l * d + f * E + m * w, s[2] = u * S + p * M + g * C, s[5] = u * h + p * b + g * T, s[8] = u * d + p * E + g * w, this;
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], m = f * a - o * l, u = o * c - f * s, p = l * s - a * c, g = t * m + n * u + r * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / g;
    return e[0] = m * S, e[1] = (r * l - f * n) * S, e[2] = (o * n - r * a) * S, e[3] = u * S, e[4] = (f * t - r * c) * S, e[5] = (r * s - o * t) * S, e[6] = p * S, e[7] = (n * c - l * t) * S, e[8] = (a * t - n * s) * S, this;
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
    return this.premultiply(rr.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(rr.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(rr.makeTranslation(e, t)), this;
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
is.prototype.isMatrix3 = !0;
let De = is;
const rr = /* @__PURE__ */ new De(), _s = /* @__PURE__ */ new De().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), gs = /* @__PURE__ */ new De().set(
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
function Ja() {
  const i = {
    enabled: !0,
    workingColorSpace: ri,
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
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === Ze && (r.r = nn(r.r), r.g = nn(r.g), r.b = nn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Ze && (r.r = Hn(r.r), r.g = Hn(r.g), r.b = Hn(r.b))), r;
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
      return r === tn ? si : this.spaces[r].transfer;
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
      return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, s);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [ri]: {
      primaries: e,
      whitePoint: n,
      transfer: si,
      toXYZ: _s,
      fromXYZ: gs,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: Lt },
      outputColorSpaceConfig: { drawingBufferColorSpace: Lt }
    },
    [Lt]: {
      primaries: e,
      whitePoint: n,
      transfer: Ze,
      toXYZ: _s,
      fromXYZ: gs,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: Lt }
    }
  }), i;
}
const He = /* @__PURE__ */ Ja();
function nn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Hn(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let wn;
class ha {
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
      wn === void 0 && (wn = Vi("canvas")), wn.width = e.width, wn.height = e.height;
      const r = wn.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = wn;
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
      const t = Vi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = nn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(nn(t[n] / 255) * 255) : t[n] = nn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Qa = 0;
class Yi {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Qa++ }), this.uuid = ai(), this.data = e, this.dataReady = !0, this.version = 0;
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
          r[a].isDataTexture ? s.push(sr(r[a].image)) : s.push(sr(r[a]));
      } else
        s = sr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function sr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? ha.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (Ce("Texture: Unable to serialize Texture."), {});
}
let eo = 0;
const ar = /* @__PURE__ */ new B();
class bt extends gn {
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
  constructor(e = bt.DEFAULT_IMAGE, t = bt.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, a = 1008, o = 1023, c = 1009, l = bt.DEFAULT_ANISOTROPY, f = tn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: eo++ }), this.uuid = ai(), this.name = "", this.source = new Yi(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ve(0, 0), this.repeat = new Ve(1, 1), this.center = new Ve(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new De(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = f, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(ar).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(ar).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(ar).z;
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
        Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        Ce(`Texture.setValues(): property '${t}' does not exist.`);
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
bt.DEFAULT_IMAGE = null;
bt.DEFAULT_MAPPING = 300;
bt.DEFAULT_ANISOTROPY = 1;
const rs = class rs {
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
    const c = e.elements, l = c[0], f = c[4], m = c[8], u = c[1], p = c[5], g = c[9], S = c[2], h = c[6], d = c[10];
    if (Math.abs(f - u) < 0.01 && Math.abs(m - S) < 0.01 && Math.abs(g - h) < 0.01) {
      if (Math.abs(f + u) < 0.1 && Math.abs(m + S) < 0.1 && Math.abs(g + h) < 0.1 && Math.abs(l + p + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, E = (p + 1) / 2, C = (d + 1) / 2, T = (f + u) / 4, w = (m + S) / 4, x = (g + h) / 4;
      return b > E && b > C ? b < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), r = T / n, s = w / n) : E > C ? E < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(E), n = T / r, s = x / r) : C < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(C), n = w / s, r = x / s), this.set(n, r, s, t), this;
    }
    let M = Math.sqrt((h - g) * (h - g) + (m - S) * (m - S) + (u - f) * (u - f));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (h - g) / M, this.y = (m - S) / M, this.z = (u - f) / M, this.w = Math.acos((l + p + d - 1) / 2), this;
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
    return this.x = ke(this.x, e.x, t.x), this.y = ke(this.y, e.y, t.y), this.z = ke(this.z, e.z, t.z), this.w = ke(this.w, e.w, t.w), this;
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
    return this.x = ke(this.x, e, t), this.y = ke(this.y, e, t), this.z = ke(this.z, e, t), this.w = ke(this.w, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(ke(n, e, t));
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
rs.prototype.isVector4 = !0;
let ot = rs;
class fa extends gn {
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
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new ot(0, 0, e, t), this.scissorTest = !1, this.viewport = new ot(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, s = new bt(r), a = n.count;
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
      this.textures[t].source = new Yi(r);
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
class Ht extends fa {
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
class Vr extends bt {
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
class pa extends bt {
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
const Xi = class Xi {
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
  constructor(e, t, n, r, s, a, o, c, l, f, m, u, p, g, S, h) {
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
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, f, m, u, p, g, S, h);
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
  set(e, t, n, r, s, a, o, c, l, f, m, u, p, g, S, h) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = n, d[12] = r, d[1] = s, d[5] = a, d[9] = o, d[13] = c, d[2] = l, d[6] = f, d[10] = m, d[14] = u, d[3] = p, d[7] = g, d[11] = S, d[15] = h, this;
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
    return new Xi().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, r = 1 / Pn.setFromMatrixColumn(e, 0).length(), s = 1 / Pn.setFromMatrixColumn(e, 1).length(), a = 1 / Pn.setFromMatrixColumn(e, 2).length();
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
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), f = Math.cos(s), m = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * f, p = a * m, g = o * f, S = o * m;
      t[0] = c * f, t[4] = -c * m, t[8] = l, t[1] = p + g * l, t[5] = u - S * l, t[9] = -o * c, t[2] = S - u * l, t[6] = g + p * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const u = c * f, p = c * m, g = l * f, S = l * m;
      t[0] = u + S * o, t[4] = g * o - p, t[8] = a * l, t[1] = a * m, t[5] = a * f, t[9] = -o, t[2] = p * o - g, t[6] = S + u * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const u = c * f, p = c * m, g = l * f, S = l * m;
      t[0] = u - S * o, t[4] = -a * m, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * f, t[9] = S - u * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const u = a * f, p = a * m, g = o * f, S = o * m;
      t[0] = c * f, t[4] = g * l - p, t[8] = u * l + S, t[1] = c * m, t[5] = S * l + u, t[9] = p * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const u = a * c, p = a * l, g = o * c, S = o * l;
      t[0] = c * f, t[4] = S - u * m, t[8] = g * m + p, t[1] = m, t[5] = a * f, t[9] = -o * f, t[2] = -l * f, t[6] = p * m + g, t[10] = u - S * m;
    } else if (e.order === "XZY") {
      const u = a * c, p = a * l, g = o * c, S = o * l;
      t[0] = c * f, t[4] = -m, t[8] = l * f, t[1] = u * m + S, t[5] = a * f, t[9] = p * m - g, t[2] = g * m - p, t[6] = o * f, t[10] = S * m + u;
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
    return this.compose(to, e, no);
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
    return Pt.subVectors(e, t), Pt.lengthSq() === 0 && (Pt.z = 1), Pt.normalize(), cn.crossVectors(n, Pt), cn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pt.x += 1e-4 : Pt.z += 1e-4, Pt.normalize(), cn.crossVectors(n, Pt)), cn.normalize(), ci.crossVectors(Pt, cn), r[0] = cn.x, r[4] = ci.x, r[8] = Pt.x, r[1] = cn.y, r[5] = ci.y, r[9] = Pt.y, r[2] = cn.z, r[6] = ci.z, r[10] = Pt.z, this;
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
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], f = n[1], m = n[5], u = n[9], p = n[13], g = n[2], S = n[6], h = n[10], d = n[14], M = n[3], b = n[7], E = n[11], C = n[15], T = r[0], w = r[4], x = r[8], A = r[12], I = r[1], D = r[5], O = r[9], W = r[13], q = r[2], U = r[6], z = r[10], X = r[14], Q = r[3], ne = r[7], ue = r[11], xe = r[15];
    return s[0] = a * T + o * I + c * q + l * Q, s[4] = a * w + o * D + c * U + l * ne, s[8] = a * x + o * O + c * z + l * ue, s[12] = a * A + o * W + c * X + l * xe, s[1] = f * T + m * I + u * q + p * Q, s[5] = f * w + m * D + u * U + p * ne, s[9] = f * x + m * O + u * z + p * ue, s[13] = f * A + m * W + u * X + p * xe, s[2] = g * T + S * I + h * q + d * Q, s[6] = g * w + S * D + h * U + d * ne, s[10] = g * x + S * O + h * z + d * ue, s[14] = g * A + S * W + h * X + d * xe, s[3] = M * T + b * I + E * q + C * Q, s[7] = M * w + b * D + E * U + C * ne, s[11] = M * x + b * O + E * z + C * ue, s[15] = M * A + b * W + E * X + C * xe, this;
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
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], f = e[2], m = e[6], u = e[10], p = e[14], g = e[3], S = e[7], h = e[11], d = e[15], M = c * p - l * u, b = o * p - l * m, E = o * u - c * m, C = a * p - l * f, T = a * u - c * f, w = a * m - o * f;
    return t * (S * M - h * b + d * E) - n * (g * M - h * C + d * T) + r * (g * b - S * C + d * w) - s * (g * E - S * T + h * w);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], m = e[9], u = e[10], p = e[11], g = e[12], S = e[13], h = e[14], d = e[15], M = t * o - n * a, b = t * c - r * a, E = t * l - s * a, C = n * c - r * o, T = n * l - s * o, w = r * l - s * c, x = f * S - m * g, A = f * h - u * g, I = f * d - p * g, D = m * h - u * S, O = m * d - p * S, W = u * d - p * h, q = M * W - b * O + E * D + C * I - T * A + w * x;
    if (q === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const U = 1 / q;
    return e[0] = (o * W - c * O + l * D) * U, e[1] = (r * O - n * W - s * D) * U, e[2] = (S * w - h * T + d * C) * U, e[3] = (u * T - m * w - p * C) * U, e[4] = (c * I - a * W - l * A) * U, e[5] = (t * W - r * I + s * A) * U, e[6] = (h * E - g * w - d * b) * U, e[7] = (f * w - u * E + p * b) * U, e[8] = (a * O - o * I + l * x) * U, e[9] = (n * I - t * O - s * x) * U, e[10] = (g * T - S * E + d * M) * U, e[11] = (m * E - f * T - p * M) * U, e[12] = (o * A - a * D - c * x) * U, e[13] = (t * D - n * A + r * x) * U, e[14] = (S * b - g * C - h * M) * U, e[15] = (f * C - m * b + u * M) * U, this;
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
    const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, f = a + a, m = o + o, u = s * l, p = s * f, g = s * m, S = a * f, h = a * m, d = o * m, M = c * l, b = c * f, E = c * m, C = n.x, T = n.y, w = n.z;
    return r[0] = (1 - (S + d)) * C, r[1] = (p + E) * C, r[2] = (g - b) * C, r[3] = 0, r[4] = (p - E) * T, r[5] = (1 - (u + d)) * T, r[6] = (h + M) * T, r[7] = 0, r[8] = (g + b) * w, r[9] = (h - M) * w, r[10] = (1 - (u + S)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
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
    let a = Pn.set(r[0], r[1], r[2]).length();
    const o = Pn.set(r[4], r[5], r[6]).length(), c = Pn.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), Ot.copy(this);
    const l = 1 / a, f = 1 / o, m = 1 / c;
    return Ot.elements[0] *= l, Ot.elements[1] *= l, Ot.elements[2] *= l, Ot.elements[4] *= f, Ot.elements[5] *= f, Ot.elements[6] *= f, Ot.elements[8] *= m, Ot.elements[9] *= m, Ot.elements[10] *= m, t.setFromRotationMatrix(Ot), n.x = a, n.y = o, n.z = c, this;
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
    const l = this.elements, f = 2 * s / (t - e), m = 2 * s / (n - r), u = (t + e) / (t - e), p = (n + r) / (n - r);
    let g, S;
    if (c)
      g = s / (a - s), S = a * s / (a - s);
    else if (o === 2e3)
      g = -(a + s) / (a - s), S = -2 * a * s / (a - s);
    else if (o === 2001)
      g = -a / (a - s), S = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = m, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = S, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
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
    const l = this.elements, f = 2 / (t - e), m = 2 / (n - r), u = -(t + e) / (t - e), p = -(n + r) / (n - r);
    let g, S;
    if (c)
      g = 1 / (a - s), S = a / (a - s);
    else if (o === 2e3)
      g = -2 / (a - s), S = -(a + s) / (a - s);
    else if (o === 2001)
      g = -1 / (a - s), S = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = f, l[4] = 0, l[8] = 0, l[12] = u, l[1] = 0, l[5] = m, l[9] = 0, l[13] = p, l[2] = 0, l[6] = 0, l[10] = g, l[14] = S, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
Xi.prototype.isMatrix4 = !0;
let at = Xi;
const Pn = /* @__PURE__ */ new B(), Ot = /* @__PURE__ */ new at(), to = /* @__PURE__ */ new B(0, 0, 0), no = /* @__PURE__ */ new B(1, 1, 1), cn = /* @__PURE__ */ new B(), ci = /* @__PURE__ */ new B(), Pt = /* @__PURE__ */ new B(), xs = /* @__PURE__ */ new at(), vs = /* @__PURE__ */ new An();
class rn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = rn.DEFAULT_ORDER) {
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
    const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], f = r[9], m = r[2], u = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ke(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-f, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ke(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-m, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ke(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-m, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ke(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(u, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(ke(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-f, l), this._y = Math.atan2(-m, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-ke(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-f, p), this._y = 0);
        break;
      default:
        Ce("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
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
    return xs.makeRotationFromQuaternion(e), this.setFromRotationMatrix(xs, t, n);
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
    return vs.setFromEuler(this), this.setFromQuaternion(vs, e);
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
rn.DEFAULT_ORDER = "XYZ";
class Hr {
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
let io = 0;
const Ms = /* @__PURE__ */ new B(), Dn = /* @__PURE__ */ new An(), $t = /* @__PURE__ */ new at(), ui = /* @__PURE__ */ new B(), $n = /* @__PURE__ */ new B(), ro = /* @__PURE__ */ new B(), so = /* @__PURE__ */ new An(), Ss = /* @__PURE__ */ new B(1, 0, 0), Es = /* @__PURE__ */ new B(0, 1, 0), ys = /* @__PURE__ */ new B(0, 0, 1), Ts = { type: "added" }, ao = { type: "removed" }, Ln = { type: "childadded", child: null }, or = { type: "childremoved", child: null };
class _t extends gn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: io++ }), this.uuid = ai(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _t.DEFAULT_UP.clone();
    const e = new B(), t = new rn(), n = new An(), r = new B(1, 1, 1);
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
        value: new at()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new De()
      }
    }), this.matrix = new at(), this.matrixWorld = new at(), this.matrixAutoUpdate = _t.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Hr(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
    return Dn.setFromAxisAngle(e, t), this.quaternion.multiply(Dn), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return Dn.setFromAxisAngle(e, t), this.quaternion.premultiply(Dn), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Ss, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(Es, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(ys, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return Ms.copy(e).applyQuaternion(this.quaternion), this.position.add(Ms.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Ss, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(Es, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(ys, e);
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
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4($t.copy(this.matrixWorld).invert());
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
    e.isVector3 ? ui.copy(e) : ui.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), $n.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? $t.lookAt($n, ui, this.up) : $t.lookAt(ui, $n, this.up), this.quaternion.setFromRotationMatrix($t), r && ($t.extractRotation(r.matrixWorld), Dn.setFromRotationMatrix($t), this.quaternion.premultiply(Dn.invert()));
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
    return e === this ? (Xe("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Ts), Ln.child = e, this.dispatchEvent(Ln), Ln.child = null) : Xe("Object3D.add: object not an instance of THREE.Object3D.", e), this);
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
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ao), or.child = e, this.dispatchEvent(or), or.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), $t.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), $t.multiply(e.parent.matrixWorld)), e.applyMatrix4($t), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Ts), Ln.child = e, this.dispatchEvent(Ln), Ln.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($n, e, ro), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($n, so, e), e;
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
            const m = c[l];
            s(e.shapes, m);
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
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), f = a(e.images), m = a(e.shapes), u = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), f.length > 0 && (n.images = f), m.length > 0 && (n.shapes = m), u.length > 0 && (n.skeletons = u), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
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
_t.DEFAULT_UP = /* @__PURE__ */ new B(0, 1, 0);
_t.DEFAULT_MATRIX_AUTO_UPDATE = !0;
_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class Tn extends _t {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const oo = { type: "move" };
class Oi {
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
    return this._hand === null && (this._hand = new Tn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Tn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Tn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B(), this._grip.eventsEnabled = !1), this._grip;
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
        for (const S of e.hand.values()) {
          const h = t.getJointPose(S, n), d = this._getHandJoint(l, S);
          h !== null && (d.matrix.fromArray(h.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = h.radius), d.visible = h !== null;
        }
        const f = l.joints["index-finger-tip"], m = l.joints["thumb-tip"], u = f.position.distanceTo(m.position), p = 0.02, g = 5e-3;
        l.inputState.pinching && u > p + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && u <= p - g && (l.inputState.pinching = !0, this.dispatchEvent({
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
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(oo)));
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
      const n = new Tn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const ma = {
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
}, un = { h: 0, s: 0, l: 0 }, di = { h: 0, s: 0, l: 0 };
function lr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ge {
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
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, He.colorSpaceToWorking(this, t), this;
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
  setRGB(e, t, n, r = He.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, He.colorSpaceToWorking(this, r), this;
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
  setHSL(e, t, n, r = He.workingColorSpace) {
    if (e = ja(e, 1), t = ke(t, 0, 1), n = ke(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = lr(a, s, e + 1 / 3), this.g = lr(a, s, e), this.b = lr(a, s, e - 1 / 3);
    }
    return He.colorSpaceToWorking(this, r), this;
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
      s !== void 0 && parseFloat(s) < 1 && Ce("Color: Alpha component of " + e + " will be ignored.");
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
          Ce("Color: Unknown color model " + e);
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
      Ce("Color: Invalid hex color " + e);
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
    const n = ma[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Ce("Color: Unknown color " + e), this;
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
    return this.r = nn(e.r), this.g = nn(e.g), this.b = nn(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Hn(e.r), this.g = Hn(e.g), this.b = Hn(e.b), this;
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
    return He.workingToColorSpace(Tt.copy(this), e), Math.round(ke(Tt.r * 255, 0, 255)) * 65536 + Math.round(ke(Tt.g * 255, 0, 255)) * 256 + Math.round(ke(Tt.b * 255, 0, 255));
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
  getHSL(e, t = He.workingColorSpace) {
    He.workingToColorSpace(Tt.copy(this), t);
    const n = Tt.r, r = Tt.g, s = Tt.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let c, l;
    const f = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const m = a - o;
      switch (l = f <= 0.5 ? m / (a + o) : m / (2 - a - o), a) {
        case n:
          c = (r - s) / m + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / m + 2;
          break;
        case s:
          c = (n - r) / m + 4;
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
  getRGB(e, t = He.workingColorSpace) {
    return He.workingToColorSpace(Tt.copy(this), t), e.r = Tt.r, e.g = Tt.g, e.b = Tt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = Lt) {
    He.workingToColorSpace(Tt.copy(this), e);
    const t = Tt.r, n = Tt.g, r = Tt.b;
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
    return this.getHSL(un), this.setHSL(un.h + e, un.s + t, un.l + n);
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
    this.getHSL(un), e.getHSL(di);
    const n = nr(un.h, di.h, t), r = nr(un.s, di.s, t), s = nr(un.l, di.l, t);
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
const Tt = /* @__PURE__ */ new Ge();
Ge.NAMES = ma;
class Ki {
  /**
   * Constructs a new fog.
   *
   * @param {number|Color} color - The fog's color.
   * @param {number} [near=1] - The minimum distance to start applying fog.
   * @param {number} [far=1000] - The maximum distance at which fog stops being calculated and applied.
   */
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new Ge(e), this.near = t, this.far = n;
  }
  /**
   * Returns a new fog with copied values from this instance.
   *
   * @return {Fog} A clone of this instance.
   */
  clone() {
    return new Ki(this.color, this.near, this.far);
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
class _a extends _t {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new rn(), this.environmentIntensity = 1, this.environmentRotation = new rn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const Gt = /* @__PURE__ */ new B(), jt = /* @__PURE__ */ new B(), cr = /* @__PURE__ */ new B(), Jt = /* @__PURE__ */ new B(), Fn = /* @__PURE__ */ new B(), In = /* @__PURE__ */ new B(), bs = /* @__PURE__ */ new B(), ur = /* @__PURE__ */ new B(), dr = /* @__PURE__ */ new B(), hr = /* @__PURE__ */ new B(), fr = /* @__PURE__ */ new ot(), pr = /* @__PURE__ */ new ot(), mr = /* @__PURE__ */ new ot();
class It {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new B(), t = new B(), n = new B()) {
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
    r.subVectors(n, t), Gt.subVectors(e, t), r.cross(Gt);
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
    Gt.subVectors(r, t), jt.subVectors(n, t), cr.subVectors(e, t);
    const a = Gt.dot(Gt), o = Gt.dot(jt), c = Gt.dot(cr), l = jt.dot(jt), f = jt.dot(cr), m = a * l - o * o;
    if (m === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / m, p = (l * c - o * f) * u, g = (a * f - o * c) * u;
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
    return this.getBarycoord(e, t, n, r, Jt) === null ? !1 : Jt.x >= 0 && Jt.y >= 0 && Jt.x + Jt.y <= 1;
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
    return this.getBarycoord(e, t, n, r, Jt) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, Jt.x), c.addScaledVector(a, Jt.y), c.addScaledVector(o, Jt.z), c);
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
    return fr.setScalar(0), pr.setScalar(0), mr.setScalar(0), fr.fromBufferAttribute(e, t), pr.fromBufferAttribute(e, n), mr.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(fr, s.x), a.addScaledVector(pr, s.y), a.addScaledVector(mr, s.z), a;
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
    return Gt.subVectors(n, t), jt.subVectors(e, t), Gt.cross(jt).dot(r) < 0;
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
    return Gt.subVectors(this.c, this.b), jt.subVectors(this.a, this.b), Gt.cross(jt).length() * 0.5;
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
    return It.getNormal(this.a, this.b, this.c, e);
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
    return It.getBarycoord(e, this.a, this.b, this.c, t);
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
    return It.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
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
    return It.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return It.isFrontFacing(this.a, this.b, this.c, e);
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
    Fn.subVectors(r, n), In.subVectors(s, n), ur.subVectors(e, n);
    const c = Fn.dot(ur), l = In.dot(ur);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    dr.subVectors(e, r);
    const f = Fn.dot(dr), m = In.dot(dr);
    if (f >= 0 && m <= f)
      return t.copy(r);
    const u = c * m - f * l;
    if (u <= 0 && c >= 0 && f <= 0)
      return a = c / (c - f), t.copy(n).addScaledVector(Fn, a);
    hr.subVectors(e, s);
    const p = Fn.dot(hr), g = In.dot(hr);
    if (g >= 0 && p <= g)
      return t.copy(s);
    const S = p * l - c * g;
    if (S <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(In, o);
    const h = f * g - p * m;
    if (h <= 0 && m - f >= 0 && p - g >= 0)
      return bs.subVectors(s, r), o = (m - f) / (m - f + (p - g)), t.copy(r).addScaledVector(bs, o);
    const d = 1 / (h + S + u);
    return a = S * d, o = u * d, t.copy(n).addScaledVector(Fn, a).addScaledVector(In, o);
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
class Wn {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new B(1 / 0, 1 / 0, 1 / 0), t = new B(-1 / 0, -1 / 0, -1 / 0)) {
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
      this.expandByPoint(zt.fromArray(e, t));
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
      this.expandByPoint(zt.fromBufferAttribute(e, t));
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
    const n = zt.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(a, zt) : zt.fromBufferAttribute(s, a), zt.applyMatrix4(e.matrixWorld), this.expandByPoint(zt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), hi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), hi.copy(n.boundingBox)), hi.applyMatrix4(e.matrixWorld), this.union(hi);
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
    return this.clampPoint(e.center, zt), zt.distanceToSquared(e.center) <= e.radius * e.radius;
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
    this.getCenter(jn), fi.subVectors(this.max, jn), Un.subVectors(e.a, jn), Nn.subVectors(e.b, jn), Bn.subVectors(e.c, jn), dn.subVectors(Nn, Un), hn.subVectors(Bn, Nn), vn.subVectors(Un, Bn);
    let t = [
      0,
      -dn.z,
      dn.y,
      0,
      -hn.z,
      hn.y,
      0,
      -vn.z,
      vn.y,
      dn.z,
      0,
      -dn.x,
      hn.z,
      0,
      -hn.x,
      vn.z,
      0,
      -vn.x,
      -dn.y,
      dn.x,
      0,
      -hn.y,
      hn.x,
      0,
      -vn.y,
      vn.x,
      0
    ];
    return !_r(t, Un, Nn, Bn, fi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !_r(t, Un, Nn, Bn, fi)) ? !1 : (pi.crossVectors(dn, hn), t = [pi.x, pi.y, pi.z], _r(t, Un, Nn, Bn, fi));
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
    return this.clampPoint(e, zt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(zt).length() * 0.5), e;
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
    return this.isEmpty() ? this : (Qt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Qt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Qt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Qt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Qt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Qt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Qt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Qt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Qt), this);
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
const Qt = [
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B()
], zt = /* @__PURE__ */ new B(), hi = /* @__PURE__ */ new Wn(), Un = /* @__PURE__ */ new B(), Nn = /* @__PURE__ */ new B(), Bn = /* @__PURE__ */ new B(), dn = /* @__PURE__ */ new B(), hn = /* @__PURE__ */ new B(), vn = /* @__PURE__ */ new B(), jn = /* @__PURE__ */ new B(), fi = /* @__PURE__ */ new B(), pi = /* @__PURE__ */ new B(), Mn = /* @__PURE__ */ new B();
function _r(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Mn.fromArray(i, s);
    const o = r.x * Math.abs(Mn.x) + r.y * Math.abs(Mn.y) + r.z * Math.abs(Mn.z), c = e.dot(Mn), l = t.dot(Mn), f = n.dot(Mn);
    if (Math.max(-Math.max(c, l, f), Math.min(c, l, f)) > o)
      return !1;
  }
  return !0;
}
const mt = /* @__PURE__ */ new B(), mi = /* @__PURE__ */ new Ve();
let lo = 0;
class Bt extends gn {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: lo++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
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
        mi.fromBufferAttribute(this, t), mi.applyMatrix3(e), this.setXY(t, mi.x, mi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        mt.fromBufferAttribute(this, t), mt.applyMatrix3(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
      mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
      mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
      mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
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
    return this.normalized && (n = Zn(n, this.array)), n;
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
    return this.normalized && (n = Ct(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Zn(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Zn(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Zn(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Zn(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
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
    return e *= this.itemSize, this.normalized && (t = Ct(t, this.array), n = Ct(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
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
    return e *= this.itemSize, this.normalized && (t = Ct(t, this.array), n = Ct(n, this.array), r = Ct(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
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
    return e *= this.itemSize, this.normalized && (t = Ct(t, this.array), n = Ct(n, this.array), r = Ct(r, this.array), s = Ct(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
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
class kr extends Bt {
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
class Wr extends Bt {
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
class ut extends Bt {
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
const co = /* @__PURE__ */ new Wn(), Jn = /* @__PURE__ */ new B(), gr = /* @__PURE__ */ new B();
class Xn {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new B(), t = -1) {
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
    t !== void 0 ? n.copy(t) : co.setFromPoints(e).getCenter(n);
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
    Jn.subVectors(e, this.center);
    const t = Jn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Jn, r / n), this.radius += r;
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
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (gr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Jn.copy(e.center).add(gr)), this.expandByPoint(Jn.copy(e.center).sub(gr))), this);
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
let uo = 0;
const Nt = /* @__PURE__ */ new at(), xr = /* @__PURE__ */ new _t(), On = /* @__PURE__ */ new B(), Dt = /* @__PURE__ */ new Wn(), Qn = /* @__PURE__ */ new Wn(), vt = /* @__PURE__ */ new B();
class Mt extends gn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: uo++ }), this.uuid = ai(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(e) ? this.index = new (Ka(e) ? Wr : kr)(e, 1) : this.index = e, this;
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
      const s = new De().getNormalMatrix(e);
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
    return Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this;
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
    return Nt.makeRotationX(e), this.applyMatrix4(Nt), this;
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
    return Nt.makeRotationY(e), this.applyMatrix4(Nt), this;
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
    return Nt.makeRotationZ(e), this.applyMatrix4(Nt), this;
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
    return Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this;
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
    return Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this;
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
    return xr.lookAt(e), xr.updateMatrix(), this.applyMatrix4(xr.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(On).negate(), this.translate(On.x, On.y, On.z), this;
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
      this.setAttribute("position", new ut(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Wn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new B(-1 / 0, -1 / 0, -1 / 0),
        new B(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Dt.setFromBufferAttribute(s), this.morphTargetsRelative ? (vt.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(vt), vt.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(vt)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Xn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Qn.setFromBufferAttribute(o), this.morphTargetsRelative ? (vt.addVectors(Dt.min, Qn.min), Dt.expandByPoint(vt), vt.addVectors(Dt.max, Qn.max), Dt.expandByPoint(vt)) : (Dt.expandByPoint(Qn.min), Dt.expandByPoint(Qn.max));
        }
      Dt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        vt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(vt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, f = o.count; l < f; l++)
            vt.fromBufferAttribute(o, l), c && (On.fromBufferAttribute(e, l), vt.add(On)), r = Math.max(r, n.distanceToSquared(vt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
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
      Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Bt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let x = 0; x < n.count; x++)
      o[x] = new B(), c[x] = new B();
    const l = new B(), f = new B(), m = new B(), u = new Ve(), p = new Ve(), g = new Ve(), S = new B(), h = new B();
    function d(x, A, I) {
      l.fromBufferAttribute(n, x), f.fromBufferAttribute(n, A), m.fromBufferAttribute(n, I), u.fromBufferAttribute(s, x), p.fromBufferAttribute(s, A), g.fromBufferAttribute(s, I), f.sub(l), m.sub(l), p.sub(u), g.sub(u);
      const D = 1 / (p.x * g.y - g.x * p.y);
      isFinite(D) && (S.copy(f).multiplyScalar(g.y).addScaledVector(m, -p.y).multiplyScalar(D), h.copy(m).multiplyScalar(p.x).addScaledVector(f, -g.x).multiplyScalar(D), o[x].add(S), o[A].add(S), o[I].add(S), c[x].add(h), c[A].add(h), c[I].add(h));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: e.count
    }]);
    for (let x = 0, A = M.length; x < A; ++x) {
      const I = M[x], D = I.start, O = I.count;
      for (let W = D, q = D + O; W < q; W += 3)
        d(
          e.getX(W + 0),
          e.getX(W + 1),
          e.getX(W + 2)
        );
    }
    const b = new B(), E = new B(), C = new B(), T = new B();
    function w(x) {
      C.fromBufferAttribute(r, x), T.copy(C);
      const A = o[x];
      b.copy(A), b.sub(C.multiplyScalar(C.dot(A))).normalize(), E.crossVectors(T, A);
      const D = E.dot(c[x]) < 0 ? -1 : 1;
      a.setXYZW(x, b.x, b.y, b.z, D);
    }
    for (let x = 0, A = M.length; x < A; ++x) {
      const I = M[x], D = I.start, O = I.count;
      for (let W = D, q = D + O; W < q; W += 3)
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
        n = new Bt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, p = n.count; u < p; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new B(), s = new B(), a = new B(), o = new B(), c = new B(), l = new B(), f = new B(), m = new B();
      if (e)
        for (let u = 0, p = e.count; u < p; u += 3) {
          const g = e.getX(u + 0), S = e.getX(u + 1), h = e.getX(u + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, S), a.fromBufferAttribute(t, h), f.subVectors(a, s), m.subVectors(r, s), f.cross(m), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, S), l.fromBufferAttribute(n, h), o.add(f), c.add(f), l.add(f), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(S, c.x, c.y, c.z), n.setXYZ(h, l.x, l.y, l.z);
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
      vt.fromBufferAttribute(e, t), vt.normalize(), e.setXYZ(t, vt.x, vt.y, vt.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, f = o.itemSize, m = o.normalized, u = new l.constructor(c.length * f);
      let p = 0, g = 0;
      for (let S = 0, h = c.length; S < h; S++) {
        o.isInterleavedBufferAttribute ? p = c[S] * o.data.stride + o.offset : p = c[S] * f;
        for (let d = 0; d < f; d++)
          u[g++] = l[p++];
      }
      return new Bt(u, f, m);
    }
    if (this.index === null)
      return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Mt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let f = 0, m = l.length; f < m; f++) {
        const u = l[f], p = e(u, n);
        c.push(p);
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
      for (let m = 0, u = l.length; m < u; m++) {
        const p = l[m];
        f.push(p.toJSON(e.data));
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
      const f = [], m = s[l];
      for (let u = 0, p = m.length; u < p; u++)
        f.push(m[u].clone(t));
      this.morphAttributes[l] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, f = a.length; l < f; l++) {
      const m = a[l];
      this.addGroup(m.start, m.count, m.materialIndex);
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
let ho = 0;
class sn extends gn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ho++ }), this.uuid = ai(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ge(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
          Ce(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);
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
const en = /* @__PURE__ */ new B(), vr = /* @__PURE__ */ new B(), _i = /* @__PURE__ */ new B(), fn = /* @__PURE__ */ new B(), Mr = /* @__PURE__ */ new B(), gi = /* @__PURE__ */ new B(), Sr = /* @__PURE__ */ new B();
class Zi {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new B(), t = new B(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, en)), this;
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
    const t = en.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (en.copy(this.origin).addScaledVector(this.direction, t), en.distanceToSquared(e));
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
    vr.copy(e).add(t).multiplyScalar(0.5), _i.copy(t).sub(e).normalize(), fn.copy(this.origin).sub(vr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(_i), o = fn.dot(this.direction), c = -fn.dot(_i), l = fn.lengthSq(), f = Math.abs(1 - a * a);
    let m, u, p, g;
    if (f > 0)
      if (m = a * c - o, u = a * o - c, g = s * f, m >= 0)
        if (u >= -g)
          if (u <= g) {
            const S = 1 / f;
            m *= S, u *= S, p = m * (m + a * u + 2 * o) + u * (a * m + u + 2 * c) + l;
          } else
            u = s, m = Math.max(0, -(a * u + o)), p = -m * m + u * (u + 2 * c) + l;
        else
          u = -s, m = Math.max(0, -(a * u + o)), p = -m * m + u * (u + 2 * c) + l;
      else
        u <= -g ? (m = Math.max(0, -(-a * s + o)), u = m > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -m * m + u * (u + 2 * c) + l) : u <= g ? (m = 0, u = Math.min(Math.max(-s, -c), s), p = u * (u + 2 * c) + l) : (m = Math.max(0, -(a * s + o)), u = m > 0 ? s : Math.min(Math.max(-s, -c), s), p = -m * m + u * (u + 2 * c) + l);
    else
      u = a > 0 ? -s : s, m = Math.max(0, -(a * u + o)), p = -m * m + u * (u + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, m), r && r.copy(vr).addScaledVector(_i, u), p;
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
    en.subVectors(e.center, this.origin);
    const n = en.dot(this.direction), r = en.dot(en) - n * n, s = e.radius * e.radius;
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
    const l = 1 / this.direction.x, f = 1 / this.direction.y, m = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l), f >= 0 ? (s = (e.min.y - u.y) * f, a = (e.max.y - u.y) * f) : (s = (e.max.y - u.y) * f, a = (e.min.y - u.y) * f), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), m >= 0 ? (o = (e.min.z - u.z) * m, c = (e.max.z - u.z) * m) : (o = (e.max.z - u.z) * m, c = (e.min.z - u.z) * m), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, en) !== null;
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
    Mr.subVectors(t, e), gi.subVectors(n, e), Sr.crossVectors(Mr, gi);
    let a = this.direction.dot(Sr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    fn.subVectors(this.origin, e);
    const c = o * this.direction.dot(gi.crossVectors(fn, gi));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Mr.cross(fn));
    if (l < 0 || c + l > a)
      return null;
    const f = -o * fn.dot(Sr);
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
class Xr extends sn {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ge(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const As = /* @__PURE__ */ new at(), Sn = /* @__PURE__ */ new Zi(), xi = /* @__PURE__ */ new Xn(), Rs = /* @__PURE__ */ new B(), vi = /* @__PURE__ */ new B(), Mi = /* @__PURE__ */ new B(), Si = /* @__PURE__ */ new B(), Er = /* @__PURE__ */ new B(), Ei = /* @__PURE__ */ new B(), Cs = /* @__PURE__ */ new B(), yi = /* @__PURE__ */ new B();
class kt extends _t {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new Mt(), t = new Xr()) {
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
      Ei.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const f = o[c], m = s[c];
        f !== 0 && (Er.fromBufferAttribute(m, e), a ? Ei.addScaledVector(Er, f) : Ei.addScaledVector(Er.sub(t), f));
      }
      t.add(Ei);
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
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), xi.copy(n.boundingSphere), xi.applyMatrix4(s), Sn.copy(e.ray).recast(e.near), !(xi.containsPoint(Sn.origin) === !1 && (Sn.intersectSphere(xi, Rs) === null || Sn.origin.distanceToSquared(Rs) > (e.far - e.near) ** 2)) && (As.copy(s).invert(), Sn.copy(e.ray).applyMatrix4(As), !(n.boundingBox !== null && Sn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Sn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, f = s.attributes.uv1, m = s.attributes.normal, u = s.groups, p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, S = u.length; g < S; g++) {
          const h = u[g], d = a[h.materialIndex], M = Math.max(h.start, p.start), b = Math.min(o.count, Math.min(h.start + h.count, p.start + p.count));
          for (let E = M, C = b; E < C; E += 3) {
            const T = o.getX(E), w = o.getX(E + 1), x = o.getX(E + 2);
            r = Ti(this, d, e, n, l, f, m, T, w, x), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = h.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), S = Math.min(o.count, p.start + p.count);
        for (let h = g, d = S; h < d; h += 3) {
          const M = o.getX(h), b = o.getX(h + 1), E = o.getX(h + 2);
          r = Ti(this, a, e, n, l, f, m, M, b, E), r && (r.faceIndex = Math.floor(h / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, S = u.length; g < S; g++) {
          const h = u[g], d = a[h.materialIndex], M = Math.max(h.start, p.start), b = Math.min(c.count, Math.min(h.start + h.count, p.start + p.count));
          for (let E = M, C = b; E < C; E += 3) {
            const T = E, w = E + 1, x = E + 2;
            r = Ti(this, d, e, n, l, f, m, T, w, x), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = h.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, p.start), S = Math.min(c.count, p.start + p.count);
        for (let h = g, d = S; h < d; h += 3) {
          const M = h, b = h + 1, E = h + 2;
          r = Ti(this, a, e, n, l, f, m, M, b, E), r && (r.faceIndex = Math.floor(h / 3), t.push(r));
        }
      }
  }
}
function fo(i, e, t, n, r, s, a, o) {
  let c;
  if (e.side === 1 ? c = n.intersectTriangle(a, s, r, !0, o) : c = n.intersectTriangle(r, s, a, e.side === 0, o), c === null) return null;
  yi.copy(o), yi.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(yi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: yi.clone(),
    object: i
  };
}
function Ti(i, e, t, n, r, s, a, o, c, l) {
  i.getVertexPosition(o, vi), i.getVertexPosition(c, Mi), i.getVertexPosition(l, Si);
  const f = fo(i, e, t, n, vi, Mi, Si, Cs);
  if (f) {
    const m = new B();
    It.getBarycoord(Cs, vi, Mi, Si, m), r && (f.uv = It.getInterpolatedAttribute(r, o, c, l, m, new Ve())), s && (f.uv1 = It.getInterpolatedAttribute(s, o, c, l, m, new Ve())), a && (f.normal = It.getInterpolatedAttribute(a, o, c, l, m, new B()), f.normal.dot(n.direction) > 0 && f.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new B(),
      materialIndex: 0
    };
    It.getNormal(vi, Mi, Si, u.normal), f.face = u, f.barycoord = m;
  }
  return f;
}
class ga extends bt {
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
  constructor(e = null, t = 1, n = 1, r, s, a, o, c, l = 1003, f = 1003, m, u) {
    super(null, a, o, c, l, f, r, s, m, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const yr = /* @__PURE__ */ new B(), po = /* @__PURE__ */ new B(), mo = /* @__PURE__ */ new De();
class mn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new B(1, 0, 0), t = 0) {
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
    const r = yr.subVectors(n, t).cross(po.subVectors(e, t)).normalize();
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
    const r = e.delta(yr), s = this.normal.dot(r);
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
    const n = t || mo.getNormalMatrix(e), r = this.coplanarPoint(yr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const En = /* @__PURE__ */ new Xn(), _o = /* @__PURE__ */ new Ve(0.5, 0.5), bi = /* @__PURE__ */ new B();
class $i {
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
  constructor(e = new mn(), t = new mn(), n = new mn(), r = new mn(), s = new mn(), a = new mn()) {
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
    const r = this.planes, s = e.elements, a = s[0], o = s[1], c = s[2], l = s[3], f = s[4], m = s[5], u = s[6], p = s[7], g = s[8], S = s[9], h = s[10], d = s[11], M = s[12], b = s[13], E = s[14], C = s[15];
    if (r[0].setComponents(l - a, p - f, d - g, C - M).normalize(), r[1].setComponents(l + a, p + f, d + g, C + M).normalize(), r[2].setComponents(l + o, p + m, d + S, C + b).normalize(), r[3].setComponents(l - o, p - m, d - S, C - b).normalize(), n)
      r[4].setComponents(c, u, h, E).normalize(), r[5].setComponents(l - c, p - u, d - h, C - E).normalize();
    else if (r[4].setComponents(l - c, p - u, d - h, C - E).normalize(), t === 2e3)
      r[5].setComponents(l + c, p + u, d + h, C + E).normalize();
    else if (t === 2001)
      r[5].setComponents(c, u, h, E).normalize();
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
      e.boundingSphere === null && e.computeBoundingSphere(), En.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), En.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(En);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    En.center.set(0, 0, 0);
    const t = _o.distanceTo(e.center);
    return En.radius = 0.7071067811865476 + t, En.applyMatrix4(e.matrixWorld), this.intersectsSphere(En);
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
      if (bi.x = r.normal.x > 0 ? e.max.x : e.min.x, bi.y = r.normal.y > 0 ? e.max.y : e.min.y, bi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(bi) < 0)
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
class xa extends sn {
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
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ge(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const ki = /* @__PURE__ */ new B(), Wi = /* @__PURE__ */ new B(), ws = /* @__PURE__ */ new at(), ei = /* @__PURE__ */ new Zi(), Ai = /* @__PURE__ */ new Xn(), Tr = /* @__PURE__ */ new B(), Ps = /* @__PURE__ */ new B();
class va extends _t {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new Mt(), t = new xa()) {
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
        ki.fromBufferAttribute(t, r - 1), Wi.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += ki.distanceTo(Wi);
      e.setAttribute("lineDistance", new ut(n, 1));
    } else
      Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
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
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ai.copy(n.boundingSphere), Ai.applyMatrix4(r), Ai.radius += s, e.ray.intersectsSphere(Ai) === !1) return;
    ws.copy(r).invert(), ei.copy(e.ray).applyMatrix4(ws);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, f = n.index, u = n.attributes.position;
    if (f !== null) {
      const p = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let S = p, h = g - 1; S < h; S += l) {
        const d = f.getX(S), M = f.getX(S + 1), b = Ri(this, e, ei, c, d, M, S);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const S = f.getX(g - 1), h = f.getX(p), d = Ri(this, e, ei, c, S, h, g - 1);
        d && t.push(d);
      }
    } else {
      const p = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let S = p, h = g - 1; S < h; S += l) {
        const d = Ri(this, e, ei, c, S, S + 1, S);
        d && t.push(d);
      }
      if (this.isLineLoop) {
        const S = Ri(this, e, ei, c, g - 1, p, g - 1);
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
function Ri(i, e, t, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (ki.fromBufferAttribute(o, r), Wi.fromBufferAttribute(o, s), t.distanceSqToSegment(ki, Wi, Tr, Ps) > n) return;
  Tr.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(Tr);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Ps.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Ds = /* @__PURE__ */ new B(), Ls = /* @__PURE__ */ new B();
class go extends va {
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
        Ds.fromBufferAttribute(t, r), Ls.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Ds.distanceTo(Ls);
      e.setAttribute("lineDistance", new ut(n, 1));
    } else
      Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class qr extends sn {
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
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ge(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Fs = /* @__PURE__ */ new at(), Nr = /* @__PURE__ */ new Zi(), Ci = /* @__PURE__ */ new Xn(), wi = /* @__PURE__ */ new B();
class Ma extends _t {
  /**
   * Constructs a new point cloud.
   *
   * @param {BufferGeometry} [geometry] - The points geometry.
   * @param {Material|Array<Material>} [material] - The points material.
   */
  constructor(e = new Mt(), t = new qr()) {
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
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ci.copy(n.boundingSphere), Ci.applyMatrix4(r), Ci.radius += s, e.ray.intersectsSphere(Ci) === !1) return;
    Fs.copy(r).invert(), Nr.copy(e.ray).applyMatrix4(Fs);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, m = n.attributes.position;
    if (l !== null) {
      const u = Math.max(0, a.start), p = Math.min(l.count, a.start + a.count);
      for (let g = u, S = p; g < S; g++) {
        const h = l.getX(g);
        wi.fromBufferAttribute(m, h), Is(wi, h, c, r, e, t, this);
      }
    } else {
      const u = Math.max(0, a.start), p = Math.min(m.count, a.start + a.count);
      for (let g = u, S = p; g < S; g++)
        wi.fromBufferAttribute(m, g), Is(wi, g, c, r, e, t, this);
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
function Is(i, e, t, n, r, s, a) {
  const o = Nr.distanceSqToPoint(i);
  if (o < t) {
    const c = new B();
    Nr.closestPointToPoint(i, c), c.applyMatrix4(n);
    const l = r.ray.origin.distanceTo(c);
    if (l < r.near || l > r.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class Yr extends bt {
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
class bn extends bt {
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
  constructor(e, t, n = 1014, r, s, a, o = 1003, c = 1003, l, f = 1026, m = 1) {
    if (f !== 1026 && f !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: m };
    super(u, r, s, a, o, c, f, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Yi(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Sa extends bn {
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
    const f = { width: e, height: e, depth: 1 }, m = [f, f, f, f, f, f];
    super(e, e, t, n, r, s, a, o, c, l), this.image = m, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
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
class Kr extends bt {
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
class qn extends Mt {
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
    const c = [], l = [], f = [], m = [];
    let u = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new ut(l, 3)), this.setAttribute("normal", new ut(f, 3)), this.setAttribute("uv", new ut(m, 2));
    function g(S, h, d, M, b, E, C, T, w, x, A) {
      const I = E / w, D = C / x, O = E / 2, W = C / 2, q = T / 2, U = w + 1, z = x + 1;
      let X = 0, Q = 0;
      const ne = new B();
      for (let ue = 0; ue < z; ue++) {
        const xe = ue * D - W;
        for (let Se = 0; Se < U; Se++) {
          const ze = Se * I - O;
          ne[S] = ze * M, ne[h] = xe * b, ne[d] = q, l.push(ne.x, ne.y, ne.z), ne[S] = 0, ne[h] = 0, ne[d] = T > 0 ? 1 : -1, f.push(ne.x, ne.y, ne.z), m.push(Se / w), m.push(1 - ue / x), X += 1;
        }
      }
      for (let ue = 0; ue < x; ue++)
        for (let xe = 0; xe < w; xe++) {
          const Se = u + xe + U * ue, ze = u + xe + U * (ue + 1), We = u + (xe + 1) + U * (ue + 1), Re = u + (xe + 1) + U * ue;
          c.push(Se, ze, Re), c.push(ze, We, Re), Q += 6;
        }
      o.addGroup(p, Q, A), p += Q, u += X;
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
    return new qn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class Zr extends Mt {
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
    const f = [], m = [], u = [], p = [];
    let g = 0;
    const S = [], h = n / 2;
    let d = 0;
    M(), a === !1 && (e > 0 && b(!0), t > 0 && b(!1)), this.setIndex(f), this.setAttribute("position", new ut(m, 3)), this.setAttribute("normal", new ut(u, 3)), this.setAttribute("uv", new ut(p, 2));
    function M() {
      const E = new B(), C = new B();
      let T = 0;
      const w = (t - e) / n;
      for (let x = 0; x <= s; x++) {
        const A = [], I = x / s, D = I * (t - e) + e;
        for (let O = 0; O <= r; O++) {
          const W = O / r, q = W * c + o, U = Math.sin(q), z = Math.cos(q);
          C.x = D * U, C.y = -I * n + h, C.z = D * z, m.push(C.x, C.y, C.z), E.set(U, w, z).normalize(), u.push(E.x, E.y, E.z), p.push(W, 1 - I), A.push(g++);
        }
        S.push(A);
      }
      for (let x = 0; x < r; x++)
        for (let A = 0; A < s; A++) {
          const I = S[A][x], D = S[A + 1][x], O = S[A + 1][x + 1], W = S[A][x + 1];
          (e > 0 || A !== 0) && (f.push(I, D, W), T += 3), (t > 0 || A !== s - 1) && (f.push(D, O, W), T += 3);
        }
      l.addGroup(d, T, 0), d += T;
    }
    function b(E) {
      const C = g, T = new Ve(), w = new B();
      let x = 0;
      const A = E === !0 ? e : t, I = E === !0 ? 1 : -1;
      for (let O = 1; O <= r; O++)
        m.push(0, h * I, 0), u.push(0, I, 0), p.push(0.5, 0.5), g++;
      const D = g;
      for (let O = 0; O <= r; O++) {
        const q = O / r * c + o, U = Math.cos(q), z = Math.sin(q);
        w.x = A * z, w.y = h * I, w.z = A * U, m.push(w.x, w.y, w.z), u.push(0, I, 0), T.x = U * 0.5 + 0.5, T.y = z * 0.5 * I + 0.5, p.push(T.x, T.y), g++;
      }
      for (let O = 0; O < r; O++) {
        const W = C + O, q = D + O;
        E === !0 ? f.push(q, q + 1, W) : f.push(q + 1, q, W), x += 3;
      }
      l.addGroup(d, x, E === !0 ? 1 : 2), d += x;
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
    return new Zr(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
const Pi = /* @__PURE__ */ new B(), Di = /* @__PURE__ */ new B(), br = /* @__PURE__ */ new B(), Li = /* @__PURE__ */ new It();
class xo extends Mt {
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
      const r = Math.pow(10, 4), s = Math.cos(Bi * t), a = e.getIndex(), o = e.getAttribute("position"), c = a ? a.count : o.count, l = [0, 0, 0], f = ["a", "b", "c"], m = new Array(3), u = {}, p = [];
      for (let g = 0; g < c; g += 3) {
        a ? (l[0] = a.getX(g), l[1] = a.getX(g + 1), l[2] = a.getX(g + 2)) : (l[0] = g, l[1] = g + 1, l[2] = g + 2);
        const { a: S, b: h, c: d } = Li;
        if (S.fromBufferAttribute(o, l[0]), h.fromBufferAttribute(o, l[1]), d.fromBufferAttribute(o, l[2]), Li.getNormal(br), m[0] = `${Math.round(S.x * r)},${Math.round(S.y * r)},${Math.round(S.z * r)}`, m[1] = `${Math.round(h.x * r)},${Math.round(h.y * r)},${Math.round(h.z * r)}`, m[2] = `${Math.round(d.x * r)},${Math.round(d.y * r)},${Math.round(d.z * r)}`, !(m[0] === m[1] || m[1] === m[2] || m[2] === m[0]))
          for (let M = 0; M < 3; M++) {
            const b = (M + 1) % 3, E = m[M], C = m[b], T = Li[f[M]], w = Li[f[b]], x = `${E}_${C}`, A = `${C}_${E}`;
            A in u && u[A] ? (br.dot(u[A].normal) <= s && (p.push(T.x, T.y, T.z), p.push(w.x, w.y, w.z)), u[A] = null) : x in u || (u[x] = {
              index0: l[M],
              index1: l[b],
              normal: br.clone()
            });
          }
      }
      for (const g in u)
        if (u[g]) {
          const { index0: S, index1: h } = u[g];
          Pi.fromBufferAttribute(o, S), Di.fromBufferAttribute(o, h), p.push(Pi.x, Pi.y, Pi.z), p.push(Di.x, Di.y, Di.z);
        }
      this.setAttribute("position", new ut(p, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class $r extends Mt {
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
  constructor(e = [new Ve(0, -0.5), new Ve(0.5, 0), new Ve(0, 0.5)], t = 12, n = 0, r = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: r
    }, t = Math.floor(t), r = ke(r, 0, Math.PI * 2);
    const s = [], a = [], o = [], c = [], l = [], f = 1 / t, m = new B(), u = new Ve(), p = new B(), g = new B(), S = new B();
    let h = 0, d = 0;
    for (let M = 0; M <= e.length - 1; M++)
      switch (M) {
        case 0:
          h = e[M + 1].x - e[M].x, d = e[M + 1].y - e[M].y, p.x = d * 1, p.y = -h, p.z = d * 0, S.copy(p), p.normalize(), c.push(p.x, p.y, p.z);
          break;
        case e.length - 1:
          c.push(S.x, S.y, S.z);
          break;
        default:
          h = e[M + 1].x - e[M].x, d = e[M + 1].y - e[M].y, p.x = d * 1, p.y = -h, p.z = d * 0, g.copy(p), p.x += S.x, p.y += S.y, p.z += S.z, p.normalize(), c.push(p.x, p.y, p.z), S.copy(g);
      }
    for (let M = 0; M <= t; M++) {
      const b = n + M * f * r, E = Math.sin(b), C = Math.cos(b);
      for (let T = 0; T <= e.length - 1; T++) {
        m.x = e[T].x * E, m.y = e[T].y, m.z = e[T].x * C, a.push(m.x, m.y, m.z), u.x = M / t, u.y = T / (e.length - 1), o.push(u.x, u.y);
        const w = c[3 * T + 0] * E, x = c[3 * T + 1], A = c[3 * T + 0] * C;
        l.push(w, x, A);
      }
    }
    for (let M = 0; M < t; M++)
      for (let b = 0; b < e.length - 1; b++) {
        const E = b + M * e.length, C = E, T = E + e.length, w = E + e.length + 1, x = E + 1;
        s.push(C, T, x), s.push(w, x, T);
      }
    this.setIndex(s), this.setAttribute("position", new ut(a, 3)), this.setAttribute("uv", new ut(o, 2)), this.setAttribute("normal", new ut(l, 3));
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
    return new $r(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class Yn extends Mt {
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
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, f = c + 1, m = e / o, u = t / c, p = [], g = [], S = [], h = [];
    for (let d = 0; d < f; d++) {
      const M = d * u - a;
      for (let b = 0; b < l; b++) {
        const E = b * m - s;
        g.push(E, -M, 0), S.push(0, 0, 1), h.push(b / o), h.push(1 - d / c);
      }
    }
    for (let d = 0; d < c; d++)
      for (let M = 0; M < o; M++) {
        const b = M + l * d, E = M + l * (d + 1), C = M + 1 + l * (d + 1), T = M + 1 + l * d;
        p.push(b, E, T), p.push(E, C, T);
      }
    this.setIndex(p), this.setAttribute("position", new ut(g, 3)), this.setAttribute("normal", new ut(S, 3)), this.setAttribute("uv", new ut(h, 2));
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
    return new Yn(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class jr extends Mt {
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
    const c = [], l = [], f = [], m = [], u = new B(), p = new B(), g = new B();
    for (let S = 0; S <= n; S++) {
      const h = a + S / n * o;
      for (let d = 0; d <= r; d++) {
        const M = d / r * s;
        p.x = (e + t * Math.cos(h)) * Math.cos(M), p.y = (e + t * Math.cos(h)) * Math.sin(M), p.z = t * Math.sin(h), l.push(p.x, p.y, p.z), u.x = e * Math.cos(M), u.y = e * Math.sin(M), g.subVectors(p, u).normalize(), f.push(g.x, g.y, g.z), m.push(d / r), m.push(S / n);
      }
    }
    for (let S = 1; S <= n; S++)
      for (let h = 1; h <= r; h++) {
        const d = (r + 1) * S + h - 1, M = (r + 1) * (S - 1) + h - 1, b = (r + 1) * (S - 1) + h, E = (r + 1) * S + h;
        c.push(d, M, E), c.push(M, b, E);
      }
    this.setIndex(c), this.setAttribute("position", new ut(l, 3)), this.setAttribute("normal", new ut(f, 3)), this.setAttribute("uv", new ut(m, 2));
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
    return new jr(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Ea extends sn {
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
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Ge(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
function kn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (Us(r))
        r.isRenderTargetTexture ? (Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone();
      else if (Array.isArray(r))
        if (Us(r[0])) {
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
function Rt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = kn(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Us(i) {
  return i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion);
}
function vo(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function ya(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : He.workingColorSpace;
}
const Ta = { clone: kn, merge: Rt };
var Mo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, So = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Wt extends sn {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Mo, this.fragmentShader = So, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = kn(e.uniforms), this.uniformsGroups = vo(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
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
class ba extends Wt {
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
class Eo extends sn {
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
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ge(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ge(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ve(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Aa extends sn {
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
class Ra extends sn {
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
class Jr extends _t {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ge(e), this.intensity = t;
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
class Ca extends Jr {
  /**
   * Constructs a new hemisphere light.
   *
   * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
   * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ge(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const Ar = /* @__PURE__ */ new at(), Ns = /* @__PURE__ */ new B(), Bs = /* @__PURE__ */ new B();
class yo {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ve(512, 512), this.mapType = 1009, this.map = null, this.mapPass = null, this.matrix = new at(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new $i(), this._frameExtents = new Ve(1, 1), this._viewportCount = 1, this._viewports = [
      new ot(0, 0, 1, 1)
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
    Ns.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ns), Bs.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Bs), t.updateMatrixWorld(), Ar.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ar, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? n.set(
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
    ), n.multiply(Ar);
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
const Fi = /* @__PURE__ */ new B(), Ii = /* @__PURE__ */ new An(), Yt = /* @__PURE__ */ new B();
class Qr extends _t {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new at(), this.projectionMatrix = new at(), this.projectionMatrixInverse = new at(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
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
    super.updateMatrixWorld(e), this.matrixWorld.decompose(Fi, Ii, Yt), Yt.x === 1 && Yt.y === 1 && Yt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Fi, Ii, Yt.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorld.decompose(Fi, Ii, Yt), Yt.x === 1 && Yt.y === 1 && Yt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Fi, Ii, Yt.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const pn = /* @__PURE__ */ new B(), Os = /* @__PURE__ */ new Ve(), Gs = /* @__PURE__ */ new Ve();
class Ft extends Qr {
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
    this.fov = Ur * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(Bi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Ur * 2 * Math.atan(
      Math.tan(Bi * 0.5 * this.fov) / this.zoom
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
    pn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(pn.x, pn.y).multiplyScalar(-e / pn.z), pn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(pn.x, pn.y).multiplyScalar(-e / pn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Os, Gs), t.subVectors(Gs, Os);
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
    let t = e * Math.tan(Bi * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
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
class ji extends Qr {
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
class To extends yo {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new ji(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Gi extends Jr {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.shadow = new To();
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
const Gn = -90, zn = 1;
class wa extends _t {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Ft(Gn, zn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Ft(Gn, zn, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Ft(Gn, zn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ft(Gn, zn, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Ft(Gn, zn, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Ft(Gn, zn, e, t);
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
    const [s, a, o, c, l, f] = this.children, m = e.getRenderTarget(), u = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const S = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let h = !1;
    e.isWebGLRenderer === !0 ? h = e.state.buffers.depth.getReversed() : h = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.generateMipmaps = S, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, f), e.setRenderTarget(m, u, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Pa extends Ft {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
const ss = class ss {
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
ss.prototype.isMatrix2 = !0;
let Br = ss;
function zs(i, e, t, n) {
  const r = bo(n);
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
function bo(i) {
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
  revision: qi
} }));
typeof window < "u" && (window.__THREE__ ? Ce("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = qi);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function Da() {
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
function Ao(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, f = o.usage, m = l.byteLength, u = i.createBuffer();
    i.bindBuffer(c, u), i.bufferData(c, l, f), o.onUploadCallback();
    let p;
    if (l instanceof Float32Array)
      p = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      p = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      p = i.SHORT;
    else if (l instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      p = i.INT;
    else if (l instanceof Int8Array)
      p = i.BYTE;
    else if (l instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: u,
      type: p,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: m
    };
  }
  function n(o, c, l) {
    const f = c.array, m = c.updateRanges;
    if (i.bindBuffer(l, o), m.length === 0)
      i.bufferSubData(l, 0, f);
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
          l,
          S.start * f.BYTES_PER_ELEMENT,
          f,
          S.start,
          S.count
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
var Ro = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Co = `#ifdef USE_ALPHAHASH
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
#endif`, wo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Po = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Do = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Lo = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Fo = `#ifdef USE_AOMAP
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
#endif`, Io = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Uo = `#ifdef USE_BATCHING
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
#endif`, No = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Bo = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Oo = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Go = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, zo = `#ifdef USE_IRIDESCENCE
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
#endif`, Vo = `#ifdef USE_BUMPMAP
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
#endif`, Ho = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, ko = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Wo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Xo = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, qo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, Yo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, Ko = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, Zo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`, $o = `#define PI 3.141592653589793
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
} // validated`, jo = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Jo = `vec3 transformedNormal = objectNormal;
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
#endif`, Qo = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, el = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, tl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, nl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, il = "gl_FragColor = linearToOutputTexel( gl_FragColor );", rl = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, sl = `#ifdef USE_ENVMAP
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
#endif`, al = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, ol = `#ifdef USE_ENVMAP
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
#endif`, ll = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, cl = `#ifdef USE_ENVMAP
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
#endif`, ul = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, dl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, hl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, fl = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, pl = `#ifdef USE_GRADIENTMAP
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
}`, ml = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, _l = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, gl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, xl = `uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`, vl = `#ifdef USE_ENVMAP
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
#endif`, Ml = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Sl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, El = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, yl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Tl = `PhysicalMaterial material;
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
#endif`, bl = `uniform sampler2D dfgLUT;
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
}`, Al = `
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
#endif`, Rl = `#if defined( RE_IndirectDiffuse )
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
#endif`, Cl = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, wl = `#ifdef USE_LIGHT_PROBES_GRID
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
#endif`, Pl = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Dl = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Ll = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Fl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Il = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Ul = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Nl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Bl = `#if defined( USE_POINTS_UV )
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
#endif`, Ol = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Gl = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, zl = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Vl = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Hl = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, kl = `#ifdef USE_MORPHTARGETS
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
#endif`, Wl = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Xl = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, ql = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Yl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Kl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Zl = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, $l = `#ifdef USE_NORMALMAP
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
#endif`, jl = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Jl = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ql = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, ec = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, tc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, nc = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, ic = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, rc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, sc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, ac = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, oc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, lc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, cc = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, uc = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, dc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, hc = `float getShadowMask() {
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
}`, fc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, pc = `#ifdef USE_SKINNING
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
#endif`, mc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, _c = `#ifdef USE_SKINNING
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
#endif`, gc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, xc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, vc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Mc = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Sc = `#ifdef USE_TRANSMISSION
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
#endif`, Ec = `#ifdef USE_TRANSMISSION
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
#endif`, yc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Tc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, bc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Ac = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Rc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Cc = `uniform sampler2D t2D;
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
}`, wc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Pc = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Dc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Lc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Fc = `#include <common>
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
}`, Ic = `#if DEPTH_PACKING == 3200
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
}`, Uc = `#define DISTANCE
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
}`, Nc = `#define DISTANCE
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
}`, Bc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Oc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Gc = `uniform float scale;
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
}`, zc = `uniform vec3 diffuse;
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
}`, Vc = `#include <common>
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
}`, Hc = `uniform vec3 diffuse;
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
}`, kc = `#define LAMBERT
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
}`, Wc = `#define LAMBERT
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
}`, Xc = `#define MATCAP
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
}`, qc = `#define MATCAP
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
}`, Yc = `#define NORMAL
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
}`, Kc = `#define NORMAL
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
}`, Zc = `#define PHONG
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
}`, $c = `#define PHONG
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
}`, jc = `#define STANDARD
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
}`, Jc = `#define STANDARD
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
}`, Qc = `#define TOON
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
}`, eu = `#define TOON
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
}`, tu = `uniform float size;
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
}`, nu = `uniform vec3 diffuse;
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
}`, iu = `#include <common>
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
}`, ru = `uniform vec3 color;
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
}`, su = `uniform float rotation;
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
}`, au = `uniform vec3 diffuse;
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
}`, Ue = {
  alphahash_fragment: Ro,
  alphahash_pars_fragment: Co,
  alphamap_fragment: wo,
  alphamap_pars_fragment: Po,
  alphatest_fragment: Do,
  alphatest_pars_fragment: Lo,
  aomap_fragment: Fo,
  aomap_pars_fragment: Io,
  batching_pars_vertex: Uo,
  batching_vertex: No,
  begin_vertex: Bo,
  beginnormal_vertex: Oo,
  bsdfs: Go,
  iridescence_fragment: zo,
  bumpmap_pars_fragment: Vo,
  clipping_planes_fragment: Ho,
  clipping_planes_pars_fragment: ko,
  clipping_planes_pars_vertex: Wo,
  clipping_planes_vertex: Xo,
  color_fragment: qo,
  color_pars_fragment: Yo,
  color_pars_vertex: Ko,
  color_vertex: Zo,
  common: $o,
  cube_uv_reflection_fragment: jo,
  defaultnormal_vertex: Jo,
  displacementmap_pars_vertex: Qo,
  displacementmap_vertex: el,
  emissivemap_fragment: tl,
  emissivemap_pars_fragment: nl,
  colorspace_fragment: il,
  colorspace_pars_fragment: rl,
  envmap_fragment: sl,
  envmap_common_pars_fragment: al,
  envmap_pars_fragment: ol,
  envmap_pars_vertex: ll,
  envmap_physical_pars_fragment: vl,
  envmap_vertex: cl,
  fog_vertex: ul,
  fog_pars_vertex: dl,
  fog_fragment: hl,
  fog_pars_fragment: fl,
  gradientmap_pars_fragment: pl,
  lightmap_pars_fragment: ml,
  lights_lambert_fragment: _l,
  lights_lambert_pars_fragment: gl,
  lights_pars_begin: xl,
  lights_toon_fragment: Ml,
  lights_toon_pars_fragment: Sl,
  lights_phong_fragment: El,
  lights_phong_pars_fragment: yl,
  lights_physical_fragment: Tl,
  lights_physical_pars_fragment: bl,
  lights_fragment_begin: Al,
  lights_fragment_maps: Rl,
  lights_fragment_end: Cl,
  lightprobes_pars_fragment: wl,
  logdepthbuf_fragment: Pl,
  logdepthbuf_pars_fragment: Dl,
  logdepthbuf_pars_vertex: Ll,
  logdepthbuf_vertex: Fl,
  map_fragment: Il,
  map_pars_fragment: Ul,
  map_particle_fragment: Nl,
  map_particle_pars_fragment: Bl,
  metalnessmap_fragment: Ol,
  metalnessmap_pars_fragment: Gl,
  morphinstance_vertex: zl,
  morphcolor_vertex: Vl,
  morphnormal_vertex: Hl,
  morphtarget_pars_vertex: kl,
  morphtarget_vertex: Wl,
  normal_fragment_begin: Xl,
  normal_fragment_maps: ql,
  normal_pars_fragment: Yl,
  normal_pars_vertex: Kl,
  normal_vertex: Zl,
  normalmap_pars_fragment: $l,
  clearcoat_normal_fragment_begin: jl,
  clearcoat_normal_fragment_maps: Jl,
  clearcoat_pars_fragment: Ql,
  iridescence_pars_fragment: ec,
  opaque_fragment: tc,
  packing: nc,
  premultiplied_alpha_fragment: ic,
  project_vertex: rc,
  dithering_fragment: sc,
  dithering_pars_fragment: ac,
  roughnessmap_fragment: oc,
  roughnessmap_pars_fragment: lc,
  shadowmap_pars_fragment: cc,
  shadowmap_pars_vertex: uc,
  shadowmap_vertex: dc,
  shadowmask_pars_fragment: hc,
  skinbase_vertex: fc,
  skinning_pars_vertex: pc,
  skinning_vertex: mc,
  skinnormal_vertex: _c,
  specularmap_fragment: gc,
  specularmap_pars_fragment: xc,
  tonemapping_fragment: vc,
  tonemapping_pars_fragment: Mc,
  transmission_fragment: Sc,
  transmission_pars_fragment: Ec,
  uv_pars_fragment: yc,
  uv_pars_vertex: Tc,
  uv_vertex: bc,
  worldpos_vertex: Ac,
  background_vert: Rc,
  background_frag: Cc,
  backgroundCube_vert: wc,
  backgroundCube_frag: Pc,
  cube_vert: Dc,
  cube_frag: Lc,
  depth_vert: Fc,
  depth_frag: Ic,
  distance_vert: Uc,
  distance_frag: Nc,
  equirect_vert: Bc,
  equirect_frag: Oc,
  linedashed_vert: Gc,
  linedashed_frag: zc,
  meshbasic_vert: Vc,
  meshbasic_frag: Hc,
  meshlambert_vert: kc,
  meshlambert_frag: Wc,
  meshmatcap_vert: Xc,
  meshmatcap_frag: qc,
  meshnormal_vert: Yc,
  meshnormal_frag: Kc,
  meshphong_vert: Zc,
  meshphong_frag: $c,
  meshphysical_vert: jc,
  meshphysical_frag: Jc,
  meshtoon_vert: Qc,
  meshtoon_frag: eu,
  points_vert: tu,
  points_frag: nu,
  shadow_vert: iu,
  shadow_frag: ru,
  sprite_vert: su,
  sprite_frag: au
}, de = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ge(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new De() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new De() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new De() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new De() },
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
    aoMapTransform: { value: /* @__PURE__ */ new De() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new De() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new De() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new De() },
    normalScale: { value: /* @__PURE__ */ new Ve(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new De() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new De() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new De() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new De() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ge(16777215) }
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
    probesMin: { value: /* @__PURE__ */ new B() },
    probesMax: { value: /* @__PURE__ */ new B() },
    probesResolution: { value: /* @__PURE__ */ new B() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ge(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new De() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new De() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ge(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ve(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new De() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new De() },
    alphaTest: { value: 0 }
  }
}, Vt = {
  basic: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.specularmap,
      de.envmap,
      de.aomap,
      de.lightmap,
      de.fog
    ]),
    vertexShader: Ue.meshbasic_vert,
    fragmentShader: Ue.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.specularmap,
      de.envmap,
      de.aomap,
      de.lightmap,
      de.emissivemap,
      de.bumpmap,
      de.normalmap,
      de.displacementmap,
      de.fog,
      de.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ue.meshlambert_vert,
    fragmentShader: Ue.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.specularmap,
      de.envmap,
      de.aomap,
      de.lightmap,
      de.emissivemap,
      de.bumpmap,
      de.normalmap,
      de.displacementmap,
      de.fog,
      de.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) },
        specular: { value: /* @__PURE__ */ new Ge(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ue.meshphong_vert,
    fragmentShader: Ue.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.envmap,
      de.aomap,
      de.lightmap,
      de.emissivemap,
      de.bumpmap,
      de.normalmap,
      de.displacementmap,
      de.roughnessmap,
      de.metalnessmap,
      de.fog,
      de.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ue.meshphysical_vert,
    fragmentShader: Ue.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.aomap,
      de.lightmap,
      de.emissivemap,
      de.bumpmap,
      de.normalmap,
      de.displacementmap,
      de.gradientmap,
      de.fog,
      de.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ge(0) }
      }
    ]),
    vertexShader: Ue.meshtoon_vert,
    fragmentShader: Ue.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.bumpmap,
      de.normalmap,
      de.displacementmap,
      de.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ue.meshmatcap_vert,
    fragmentShader: Ue.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Rt([
      de.points,
      de.fog
    ]),
    vertexShader: Ue.points_vert,
    fragmentShader: Ue.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ue.linedashed_vert,
    fragmentShader: Ue.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.displacementmap
    ]),
    vertexShader: Ue.depth_vert,
    fragmentShader: Ue.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.bumpmap,
      de.normalmap,
      de.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ue.meshnormal_vert,
    fragmentShader: Ue.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Rt([
      de.sprite,
      de.fog
    ]),
    vertexShader: Ue.sprite_vert,
    fragmentShader: Ue.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new De() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ue.background_vert,
    fragmentShader: Ue.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new De() }
    },
    vertexShader: Ue.backgroundCube_vert,
    fragmentShader: Ue.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ue.cube_vert,
    fragmentShader: Ue.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ue.equirect_vert,
    fragmentShader: Ue.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ Rt([
      de.common,
      de.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new B() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ue.distance_vert,
    fragmentShader: Ue.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Rt([
      de.lights,
      de.fog,
      {
        color: { value: /* @__PURE__ */ new Ge(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ue.shadow_vert,
    fragmentShader: Ue.shadow_frag
  }
};
Vt.physical = {
  uniforms: /* @__PURE__ */ Rt([
    Vt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new De() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new De() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ve(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new De() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new De() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new De() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ge(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new De() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new De() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new De() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ve() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new De() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ge(0) },
      specularColor: { value: /* @__PURE__ */ new Ge(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new De() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new De() },
      anisotropyVector: { value: /* @__PURE__ */ new Ve() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new De() }
    }
  ]),
  vertexShader: Ue.meshphysical_vert,
  fragmentShader: Ue.meshphysical_frag
};
const Ui = { r: 0, b: 0, g: 0 }, ou = /* @__PURE__ */ new at(), La = /* @__PURE__ */ new De();
La.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function lu(i, e, t, n, r, s) {
  const a = new Ge(0);
  let o = r === !0 ? 0 : 1, c, l, f = null, m = 0, u = null;
  function p(M) {
    let b = M.isScene === !0 ? M.background : null;
    if (b && b.isTexture) {
      const E = M.backgroundBlurriness > 0;
      b = e.get(b, E);
    }
    return b;
  }
  function g(M) {
    let b = !1;
    const E = p(M);
    E === null ? h(a, o) : E && E.isColor && (h(E, 1), b = !0);
    const C = i.xr.getEnvironmentBlendMode();
    C === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, s) : C === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || b) && (t.buffers.depth.setTest(!0), t.buffers.depth.setMask(!0), t.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function S(M, b) {
    const E = p(b);
    E && (E.isCubeTexture || E.mapping === 306) ? (l === void 0 && (l = new kt(
      new qn(1, 1, 1),
      new Wt({
        name: "BackgroundCubeMaterial",
        uniforms: kn(Vt.backgroundCube.uniforms),
        vertexShader: Vt.backgroundCube.vertexShader,
        fragmentShader: Vt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(C, T, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(l)), l.material.uniforms.envMap.value = E, l.material.uniforms.backgroundBlurriness.value = b.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(ou.makeRotationFromEuler(b.backgroundRotation)).transpose(), E.isCubeTexture && E.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(La), l.material.toneMapped = He.getTransfer(E.colorSpace) !== Ze, (f !== E || m !== E.version || u !== i.toneMapping) && (l.material.needsUpdate = !0, f = E, m = E.version, u = i.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null)) : E && E.isTexture && (c === void 0 && (c = new kt(
      new Yn(2, 2),
      new Wt({
        name: "BackgroundMaterial",
        uniforms: kn(Vt.background.uniforms),
        vertexShader: Vt.background.vertexShader,
        fragmentShader: Vt.background.fragmentShader,
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
    }), n.update(c)), c.material.uniforms.t2D.value = E, c.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, c.material.toneMapped = He.getTransfer(E.colorSpace) !== Ze, E.matrixAutoUpdate === !0 && E.updateMatrix(), c.material.uniforms.uvTransform.value.copy(E.matrix), (f !== E || m !== E.version || u !== i.toneMapping) && (c.material.needsUpdate = !0, f = E, m = E.version, u = i.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(M, b) {
    M.getRGB(Ui, ya(i)), t.buffers.color.setClear(Ui.r, Ui.g, Ui.b, b, s);
  }
  function d() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(M, b = 1) {
      a.set(M), o = b, h(a, o);
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
function cu(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, a = !1;
  function o(D, O, W, q, U) {
    let z = !1;
    const X = m(D, q, W, O);
    s !== X && (s = X, l(s.object)), z = p(D, q, W, U), z && g(D, q, W, U), U !== null && e.update(U, i.ELEMENT_ARRAY_BUFFER), (z || a) && (a = !1, E(D, O, W, q), U !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(U).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(D) {
    return i.bindVertexArray(D);
  }
  function f(D) {
    return i.deleteVertexArray(D);
  }
  function m(D, O, W, q) {
    const U = q.wireframe === !0;
    let z = n[O.id];
    z === void 0 && (z = {}, n[O.id] = z);
    const X = D.isInstancedMesh === !0 ? D.id : 0;
    let Q = z[X];
    Q === void 0 && (Q = {}, z[X] = Q);
    let ne = Q[W.id];
    ne === void 0 && (ne = {}, Q[W.id] = ne);
    let ue = ne[U];
    return ue === void 0 && (ue = u(c()), ne[U] = ue), ue;
  }
  function u(D) {
    const O = [], W = [], q = [];
    for (let U = 0; U < t; U++)
      O[U] = 0, W[U] = 0, q[U] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: O,
      enabledAttributes: W,
      attributeDivisors: q,
      object: D,
      attributes: {},
      index: null
    };
  }
  function p(D, O, W, q) {
    const U = s.attributes, z = O.attributes;
    let X = 0;
    const Q = W.getAttributes();
    for (const ne in Q)
      if (Q[ne].location >= 0) {
        const xe = U[ne];
        let Se = z[ne];
        if (Se === void 0 && (ne === "instanceMatrix" && D.instanceMatrix && (Se = D.instanceMatrix), ne === "instanceColor" && D.instanceColor && (Se = D.instanceColor)), xe === void 0 || xe.attribute !== Se || Se && xe.data !== Se.data) return !0;
        X++;
      }
    return s.attributesNum !== X || s.index !== q;
  }
  function g(D, O, W, q) {
    const U = {}, z = O.attributes;
    let X = 0;
    const Q = W.getAttributes();
    for (const ne in Q)
      if (Q[ne].location >= 0) {
        let xe = z[ne];
        xe === void 0 && (ne === "instanceMatrix" && D.instanceMatrix && (xe = D.instanceMatrix), ne === "instanceColor" && D.instanceColor && (xe = D.instanceColor));
        const Se = {};
        Se.attribute = xe, xe && xe.data && (Se.data = xe.data), U[ne] = Se, X++;
      }
    s.attributes = U, s.attributesNum = X, s.index = q;
  }
  function S() {
    const D = s.newAttributes;
    for (let O = 0, W = D.length; O < W; O++)
      D[O] = 0;
  }
  function h(D) {
    d(D, 0);
  }
  function d(D, O) {
    const W = s.newAttributes, q = s.enabledAttributes, U = s.attributeDivisors;
    W[D] = 1, q[D] === 0 && (i.enableVertexAttribArray(D), q[D] = 1), U[D] !== O && (i.vertexAttribDivisor(D, O), U[D] = O);
  }
  function M() {
    const D = s.newAttributes, O = s.enabledAttributes;
    for (let W = 0, q = O.length; W < q; W++)
      O[W] !== D[W] && (i.disableVertexAttribArray(W), O[W] = 0);
  }
  function b(D, O, W, q, U, z, X) {
    X === !0 ? i.vertexAttribIPointer(D, O, W, U, z) : i.vertexAttribPointer(D, O, W, q, U, z);
  }
  function E(D, O, W, q) {
    S();
    const U = q.attributes, z = W.getAttributes(), X = O.defaultAttributeValues;
    for (const Q in z) {
      const ne = z[Q];
      if (ne.location >= 0) {
        let ue = U[Q];
        if (ue === void 0 && (Q === "instanceMatrix" && D.instanceMatrix && (ue = D.instanceMatrix), Q === "instanceColor" && D.instanceColor && (ue = D.instanceColor)), ue !== void 0) {
          const xe = ue.normalized, Se = ue.itemSize, ze = e.get(ue);
          if (ze === void 0) continue;
          const We = ze.buffer, Re = ze.type, j = ze.bytesPerElement, G = Re === i.INT || Re === i.UNSIGNED_INT || ue.gpuType === 1013;
          if (ue.isInterleavedBufferAttribute) {
            const ae = ue.data, Ae = ae.stride, ve = ue.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let be = 0; be < ne.locationSize; be++)
                d(ne.location + be, ae.meshPerAttribute);
              D.isInstancedMesh !== !0 && q._maxInstanceCount === void 0 && (q._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let be = 0; be < ne.locationSize; be++)
                h(ne.location + be);
            i.bindBuffer(i.ARRAY_BUFFER, We);
            for (let be = 0; be < ne.locationSize; be++)
              b(
                ne.location + be,
                Se / ne.locationSize,
                Re,
                xe,
                Ae * j,
                (ve + Se / ne.locationSize * be) * j,
                G
              );
          } else {
            if (ue.isInstancedBufferAttribute) {
              for (let ae = 0; ae < ne.locationSize; ae++)
                d(ne.location + ae, ue.meshPerAttribute);
              D.isInstancedMesh !== !0 && q._maxInstanceCount === void 0 && (q._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let ae = 0; ae < ne.locationSize; ae++)
                h(ne.location + ae);
            i.bindBuffer(i.ARRAY_BUFFER, We);
            for (let ae = 0; ae < ne.locationSize; ae++)
              b(
                ne.location + ae,
                Se / ne.locationSize,
                Re,
                xe,
                Se * j,
                Se / ne.locationSize * ae * j,
                G
              );
          }
        } else if (X !== void 0) {
          const xe = X[Q];
          if (xe !== void 0)
            switch (xe.length) {
              case 2:
                i.vertexAttrib2fv(ne.location, xe);
                break;
              case 3:
                i.vertexAttrib3fv(ne.location, xe);
                break;
              case 4:
                i.vertexAttrib4fv(ne.location, xe);
                break;
              default:
                i.vertexAttrib1fv(ne.location, xe);
            }
        }
      }
    }
    M();
  }
  function C() {
    A();
    for (const D in n) {
      const O = n[D];
      for (const W in O) {
        const q = O[W];
        for (const U in q) {
          const z = q[U];
          for (const X in z)
            f(z[X].object), delete z[X];
          delete q[U];
        }
      }
      delete n[D];
    }
  }
  function T(D) {
    if (n[D.id] === void 0) return;
    const O = n[D.id];
    for (const W in O) {
      const q = O[W];
      for (const U in q) {
        const z = q[U];
        for (const X in z)
          f(z[X].object), delete z[X];
        delete q[U];
      }
    }
    delete n[D.id];
  }
  function w(D) {
    for (const O in n) {
      const W = n[O];
      for (const q in W) {
        const U = W[q];
        if (U[D.id] === void 0) continue;
        const z = U[D.id];
        for (const X in z)
          f(z[X].object), delete z[X];
        delete U[D.id];
      }
    }
  }
  function x(D) {
    for (const O in n) {
      const W = n[O], q = D.isInstancedMesh === !0 ? D.id : 0, U = W[q];
      if (U !== void 0) {
        for (const z in U) {
          const X = U[z];
          for (const Q in X)
            f(X[Q].object), delete X[Q];
          delete U[z];
        }
        delete W[q], Object.keys(W).length === 0 && delete n[O];
      }
    }
  }
  function A() {
    I(), a = !0, s !== r && (s = r, l(s.object));
  }
  function I() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: A,
    resetDefaultState: I,
    dispose: C,
    releaseStatesOfGeometry: T,
    releaseStatesOfObject: x,
    releaseStatesOfProgram: w,
    initAttributes: S,
    enableAttribute: h,
    disableUnusedAttributes: M
  };
}
function uu(i, e, t) {
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
    for (let p = 0; p < f; p++)
      u += l[p];
    t.update(u, n, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function du(i, e, t, n) {
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
    const x = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== 1015 && !x);
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
  f !== l && (Ce("WebGLRenderer:", l, "not supported, using", f, "instead."), l = f);
  const m = t.logarithmicDepthBuffer === !0, u = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control");
  t.reversedDepthBuffer === !0 && u === !1 && Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), S = i.getParameter(i.MAX_TEXTURE_SIZE), h = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), M = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), b = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), C = i.getParameter(i.MAX_SAMPLES), T = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: m,
    reversedDepthBuffer: u,
    maxTextures: p,
    maxVertexTextures: g,
    maxTextureSize: S,
    maxCubemapSize: h,
    maxAttributes: d,
    maxVertexUniforms: M,
    maxVaryings: b,
    maxFragmentUniforms: E,
    maxSamples: C,
    samples: T
  };
}
function hu(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new mn(), o = new De(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(m, u) {
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
      s ? f(null) : l();
    else {
      const M = s ? 0 : n, b = M * 4;
      let E = d.clippingState || null;
      c.value = E, E = f(g, u, b, p);
      for (let C = 0; C !== b; ++C)
        E[C] = t[C];
      d.clippingState = E, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function f(m, u, p, g) {
    const S = m !== null ? m.length : 0;
    let h = null;
    if (S !== 0) {
      if (h = c.value, g !== !0 || h === null) {
        const d = p + S * 4, M = u.matrixWorldInverse;
        o.getNormalMatrix(M), (h === null || h.length < d) && (h = new Float32Array(d));
        for (let b = 0, E = p; b !== S; ++b, E += 4)
          a.copy(m[b]).applyMatrix4(M, o), a.normal.toArray(h, E), h[E + 3] = a.constant;
      }
      c.value = h, c.needsUpdate = !0;
    }
    return e.numPlanes = S, e.numIntersection = 0, h;
  }
}
const _n = 4, Vs = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], yn = 20, fu = 256, ti = /* @__PURE__ */ new ji(), Hs = /* @__PURE__ */ new Ge();
let Rr = null, Cr = 0, wr = 0, Pr = !1;
const pu = /* @__PURE__ */ new B();
class Or {
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
      position: o = pu
    } = s;
    Rr = this._renderer.getRenderTarget(), Cr = this._renderer.getActiveCubeFace(), wr = this._renderer.getActiveMipmapLevel(), Pr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Xs(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ws(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Rr, Cr, wr), this._renderer.xr.enabled = Pr, e.scissorTest = !1, Vn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Rr = this._renderer.getRenderTarget(), Cr = this._renderer.getActiveCubeFace(), wr = this._renderer.getActiveMipmapLevel(), Pr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
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
      colorSpace: ri,
      depthBuffer: !1
    }, r = ks(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ks(e, t, n);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = mu(s)), this._blurMaterial = gu(s, e, t), this._ggxMaterial = _u(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new kt(new Mt(), e);
    this._renderer.compile(t, ti);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const c = new Ft(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], f = [1, 1, 1, -1, -1, -1], m = this._renderer, u = m.autoClear, p = m.toneMapping;
    m.getClearColor(Hs), m.toneMapping = 0, m.autoClear = !1, m.state.buffers.depth.getReversed() && (m.setRenderTarget(r), m.clearDepth(), m.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new kt(
      new qn(),
      new Xr({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1
      })
    ));
    const S = this._backgroundBox, h = S.material;
    let d = !1;
    const M = e.background;
    M ? M.isColor && (h.color.copy(M), e.background = null, d = !0) : (h.color.copy(Hs), d = !0);
    for (let b = 0; b < 6; b++) {
      const E = b % 3;
      E === 0 ? (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + f[b], s.y, s.z)) : E === 1 ? (c.up.set(0, 0, l[b]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + f[b], s.z)) : (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + f[b]));
      const C = this._cubeSize;
      Vn(r, E * C, b > 2 ? C : 0, C, C), m.setRenderTarget(r), d && m.render(S, c), m.render(e, c);
    }
    m.toneMapping = p, m.autoClear = u, e.background = M;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Xs()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ws());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Vn(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, ti);
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
    const c = a.uniforms, l = n / (this._lodMeshes.length - 1), f = t / (this._lodMeshes.length - 1), m = Math.sqrt(l * l - f * f), u = 0 + l * 1.25, p = m * u, { _lodMax: g } = this, S = this._sizeLods[n], h = 3 * S * (n > g - _n ? n - g + _n : 0), d = 4 * (this._cubeSize - S);
    c.envMap.value = e.texture, c.roughness.value = p, c.mipInt.value = g - t, Vn(s, h, d, 3 * S, 2 * S), r.setRenderTarget(s), r.render(o, ti), c.envMap.value = s.texture, c.roughness.value = 0, c.mipInt.value = g - n, Vn(e, h, d, 3 * S, 2 * S), r.setRenderTarget(e), r.render(o, ti);
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
    a !== "latitudinal" && a !== "longitudinal" && Xe(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const f = 3, m = this._lodMeshes[r];
    m.material = l;
    const u = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * yn - 1), S = s / g, h = isFinite(s) ? 1 + Math.floor(f * S) : yn;
    h > yn && Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${yn}`);
    const d = [];
    let M = 0;
    for (let w = 0; w < yn; ++w) {
      const x = w / S, A = Math.exp(-x * x / 2);
      d.push(A), w === 0 ? M += A : w < h && (M += 2 * A);
    }
    for (let w = 0; w < d.length; w++)
      d[w] = d[w] / M;
    u.envMap.value = e.texture, u.samples.value = h, u.weights.value = d, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: b } = this;
    u.dTheta.value = g, u.mipInt.value = b - n;
    const E = this._sizeLods[r], C = 3 * E * (r > b - _n ? r - b + _n : 0), T = 4 * (this._cubeSize - E);
    Vn(t, C, T, 3 * E, 2 * E), c.setRenderTarget(t), c.render(m, ti);
  }
}
function mu(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - _n + 1 + Vs.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let c = 1 / o;
    a > i - _n ? c = Vs[a - i + _n - 1] : a === 0 && (c = 0), t.push(c);
    const l = 1 / (o - 2), f = -l, m = 1 + l, u = [f, f, m, f, m, m, f, f, m, m, f, m], p = 6, g = 6, S = 3, h = 2, d = 1, M = new Float32Array(S * g * p), b = new Float32Array(h * g * p), E = new Float32Array(d * g * p);
    for (let T = 0; T < p; T++) {
      const w = T % 3 * 2 / 3 - 1, x = T > 2 ? 0 : -1, A = [
        w,
        x,
        0,
        w + 2 / 3,
        x,
        0,
        w + 2 / 3,
        x + 1,
        0,
        w,
        x,
        0,
        w + 2 / 3,
        x + 1,
        0,
        w,
        x + 1,
        0
      ];
      M.set(A, S * g * T), b.set(u, h * g * T);
      const I = [T, T, T, T, T, T];
      E.set(I, d * g * T);
    }
    const C = new Mt();
    C.setAttribute("position", new Bt(M, S)), C.setAttribute("uv", new Bt(b, h)), C.setAttribute("faceIndex", new Bt(E, d)), n.push(new kt(C, null)), r > _n && r--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function ks(i, e, t) {
  const n = new Ht(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Vn(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function _u(i, e, t) {
  return new Wt({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: fu,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: Ji(),
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
function gu(i, e, t) {
  const n = new Float32Array(yn), r = new B(0, 1, 0);
  return new Wt({
    name: "SphericalGaussianBlur",
    defines: {
      n: yn,
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
    vertexShader: Ji(),
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
function Ws() {
  return new Wt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ji(),
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
function Xs() {
  return new Wt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ji(),
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
function Ji() {
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
class es extends Ht {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Yr(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
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
    }, r = new qn(5, 5, 5), s = new Wt({
      name: "CubemapFromEquirect",
      uniforms: kn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new kt(r, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new wa(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
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
function xu(i) {
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
            const S = new es(g.height);
            return S.fromEquirectangularTexture(i, u), e.set(u, S), u.addEventListener("dispose", l), o(S.texture, u.mapping);
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
          return n === null && (n = new Or(i)), h = g ? n.fromEquirectangular(u, h) : n.fromCubemap(u, h), h.texture.pmremVersion = u.pmremVersion, t.set(u, h), h.texture;
        if (h !== void 0)
          return h.texture;
        {
          const M = u.image;
          return g && M && M.height > 0 || S && M && c(M) ? (n === null && (n = new Or(i)), h = g ? n.fromEquirectangular(u) : n.fromCubemap(u), h.texture.pmremVersion = u.pmremVersion, t.set(u, h), u.addEventListener("dispose", f), h.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, p) {
    return p === 303 ? u.mapping = 301 : p === 304 && (u.mapping = 302), u;
  }
  function c(u) {
    let p = 0;
    const g = 6;
    for (let S = 0; S < g; S++)
      u[S] !== void 0 && p++;
    return p === g;
  }
  function l(u) {
    const p = u.target;
    p.removeEventListener("dispose", l);
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
function vu(i) {
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
      return r === null && Hi("WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Mu(i, e, t, n) {
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
  function c(m) {
    const u = m.attributes;
    for (const p in u)
      e.update(u[p], i.ARRAY_BUFFER);
  }
  function l(m) {
    const u = [], p = m.index, g = m.attributes.position;
    let S = 0;
    if (g === void 0)
      return;
    if (p !== null) {
      const M = p.array;
      S = p.version;
      for (let b = 0, E = M.length; b < E; b += 3) {
        const C = M[b + 0], T = M[b + 1], w = M[b + 2];
        u.push(C, T, T, w, w, C);
      }
    } else {
      const M = g.array;
      S = g.version;
      for (let b = 0, E = M.length / 3 - 1; b < E; b += 3) {
        const C = b + 0, T = b + 1, w = b + 2;
        u.push(C, T, T, w, w, C);
      }
    }
    const h = new (g.count >= 65535 ? Wr : kr)(u, 1);
    h.version = S;
    const d = s.get(m);
    d && e.remove(d), s.set(m, h);
  }
  function f(m) {
    const u = s.get(m);
    if (u) {
      const p = m.index;
      p !== null && u.version < p.version && l(m);
    } else
      l(m);
    return s.get(m);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: f
  };
}
function Su(i, e, t) {
  let n;
  function r(m) {
    n = m;
  }
  let s, a;
  function o(m) {
    s = m.type, a = m.bytesPerElement;
  }
  function c(m, u) {
    i.drawElements(n, u, s, m * a), t.update(u, n, 1);
  }
  function l(m, u, p) {
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
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = f;
}
function Eu(i) {
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
        Xe("WebGLInfo: Unknown draw mode:", a);
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
function yu(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new ot();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, f = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, m = f !== void 0 ? f.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== m) {
      let A = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", A);
      };
      u !== void 0 && u.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, S = o.morphAttributes.color !== void 0, h = o.morphAttributes.position || [], d = o.morphAttributes.normal || [], M = o.morphAttributes.color || [];
      let b = 0;
      p === !0 && (b = 1), g === !0 && (b = 2), S === !0 && (b = 3);
      let E = o.attributes.position.count * b, C = 1;
      E > e.maxTextureSize && (C = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
      const T = new Float32Array(E * C * 4 * m), w = new Vr(T, E, C, m);
      w.type = 1015, w.needsUpdate = !0;
      const x = b * 4;
      for (let I = 0; I < m; I++) {
        const D = h[I], O = d[I], W = M[I], q = E * C * 4 * I;
        for (let U = 0; U < D.count; U++) {
          const z = U * x;
          p === !0 && (r.fromBufferAttribute(D, U), T[q + z + 0] = r.x, T[q + z + 1] = r.y, T[q + z + 2] = r.z, T[q + z + 3] = 0), g === !0 && (r.fromBufferAttribute(O, U), T[q + z + 4] = r.x, T[q + z + 5] = r.y, T[q + z + 6] = r.z, T[q + z + 7] = 0), S === !0 && (r.fromBufferAttribute(W, U), T[q + z + 8] = r.x, T[q + z + 9] = r.y, T[q + z + 10] = r.z, T[q + z + 11] = W.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: m,
        texture: w,
        size: new Ve(E, C)
      }, n.set(o, u), o.addEventListener("dispose", A);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let S = 0; S < l.length; S++)
        p += l[S];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", g), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: s
  };
}
function Tu(i, e, t, n, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const f = r.render.frame, m = l.geometry, u = e.get(l, m);
    if (s.get(u) !== f && (e.update(u), s.set(u, f)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === !1 && l.addEventListener("dispose", c), s.get(l) !== f && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, f))), l.isSkinnedMesh) {
      const p = l.skeleton;
      s.get(p) !== f && (p.update(), s.set(p, f));
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
const bu = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function Au(i, e, t, n, r) {
  const s = new Ht(e, t, {
    type: i,
    depthBuffer: n,
    stencilBuffer: r,
    depthTexture: n ? new bn(e, t) : void 0
  }), a = new Ht(e, t, {
    type: 1016,
    depthBuffer: !1,
    stencilBuffer: !1
  }), o = new Mt();
  o.setAttribute("position", new ut([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new ut([0, 2, 0, 0, 2, 0], 2));
  const c = new ba({
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
  }), l = new kt(o, c), f = new ji(-1, 1, 1, -1, 0, 1);
  let m = null, u = null, p = !1, g, S = null, h = [], d = !1;
  this.setSize = function(M, b) {
    s.setSize(M, b), a.setSize(M, b);
    for (let E = 0; E < h.length; E++) {
      const C = h[E];
      C.setSize && C.setSize(M, b);
    }
  }, this.setEffects = function(M) {
    h = M, d = h.length > 0 && h[0].isRenderPass === !0;
    const b = s.width, E = s.height;
    for (let C = 0; C < h.length; C++) {
      const T = h[C];
      T.setSize && T.setSize(b, E);
    }
  }, this.begin = function(M, b) {
    if (p || M.toneMapping === 0 && h.length === 0) return !1;
    if (S = b, b !== null) {
      const E = b.width, C = b.height;
      (s.width !== E || s.height !== C) && this.setSize(E, C);
    }
    return d === !1 && M.setRenderTarget(s), g = M.toneMapping, M.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return d;
  }, this.end = function(M, b) {
    M.toneMapping = g, p = !0;
    let E = s, C = a;
    for (let T = 0; T < h.length; T++) {
      const w = h[T];
      if (w.enabled !== !1 && (w.render(M, C, E, b), w.needsSwap !== !1)) {
        const x = E;
        E = C, C = x;
      }
    }
    if (m !== M.outputColorSpace || u !== M.toneMapping) {
      m = M.outputColorSpace, u = M.toneMapping, c.defines = {}, He.getTransfer(m) === Ze && (c.defines.SRGB_TRANSFER = "");
      const T = bu[u];
      T && (c.defines[T] = ""), c.needsUpdate = !0;
    }
    c.uniforms.tDiffuse.value = E.texture, M.setRenderTarget(S), M.render(l, f), S = null, p = !1;
  }, this.isCompositing = function() {
    return p;
  }, this.dispose = function() {
    s.depthTexture && s.depthTexture.dispose(), s.dispose(), a.dispose(), o.dispose(), c.dispose();
  };
}
const Fa = /* @__PURE__ */ new bt(), Gr = /* @__PURE__ */ new bn(1, 1), Ia = /* @__PURE__ */ new Vr(), Ua = /* @__PURE__ */ new pa(), Na = /* @__PURE__ */ new Yr(), qs = [], Ys = [], Ks = new Float32Array(16), Zs = new Float32Array(9), $s = new Float32Array(4);
function Kn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = qs[r];
  if (s === void 0 && (s = new Float32Array(r), qs[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function gt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function xt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Qi(i, e) {
  let t = Ys[e];
  t === void 0 && (t = new Int32Array(e), Ys[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Ru(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Cu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2fv(this.addr, e), xt(t, e);
  }
}
function wu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (gt(t, e)) return;
    i.uniform3fv(this.addr, e), xt(t, e);
  }
}
function Pu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4fv(this.addr, e), xt(t, e);
  }
}
function Du(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), xt(t, e);
  } else {
    if (gt(t, n)) return;
    $s.set(n), i.uniformMatrix2fv(this.addr, !1, $s), xt(t, n);
  }
}
function Lu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), xt(t, e);
  } else {
    if (gt(t, n)) return;
    Zs.set(n), i.uniformMatrix3fv(this.addr, !1, Zs), xt(t, n);
  }
}
function Fu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), xt(t, e);
  } else {
    if (gt(t, n)) return;
    Ks.set(n), i.uniformMatrix4fv(this.addr, !1, Ks), xt(t, n);
  }
}
function Iu(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Uu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2iv(this.addr, e), xt(t, e);
  }
}
function Nu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    i.uniform3iv(this.addr, e), xt(t, e);
  }
}
function Bu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4iv(this.addr, e), xt(t, e);
  }
}
function Ou(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Gu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (gt(t, e)) return;
    i.uniform2uiv(this.addr, e), xt(t, e);
  }
}
function zu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (gt(t, e)) return;
    i.uniform3uiv(this.addr, e), xt(t, e);
  }
}
function Vu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (gt(t, e)) return;
    i.uniform4uiv(this.addr, e), xt(t, e);
  }
}
function Hu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (Gr.compareFunction = t.isReversedDepthBuffer() ? 518 : 515, s = Gr) : s = Fa, t.setTexture2D(e || s, r);
}
function ku(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Ua, r);
}
function Wu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Na, r);
}
function Xu(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Ia, r);
}
function qu(i) {
  switch (i) {
    case 5126:
      return Ru;
    case 35664:
      return Cu;
    case 35665:
      return wu;
    case 35666:
      return Pu;
    case 35674:
      return Du;
    case 35675:
      return Lu;
    case 35676:
      return Fu;
    case 5124:
    case 35670:
      return Iu;
    case 35667:
    case 35671:
      return Uu;
    case 35668:
    case 35672:
      return Nu;
    case 35669:
    case 35673:
      return Bu;
    case 5125:
      return Ou;
    case 36294:
      return Gu;
    case 36295:
      return zu;
    case 36296:
      return Vu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Hu;
    case 35679:
    case 36299:
    case 36307:
      return ku;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Wu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Xu;
  }
}
function Yu(i, e) {
  i.uniform1fv(this.addr, e);
}
function Ku(i, e) {
  const t = Kn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Zu(i, e) {
  const t = Kn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function $u(i, e) {
  const t = Kn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function ju(i, e) {
  const t = Kn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Ju(i, e) {
  const t = Kn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Qu(i, e) {
  const t = Kn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function ed(i, e) {
  i.uniform1iv(this.addr, e);
}
function td(i, e) {
  i.uniform2iv(this.addr, e);
}
function nd(i, e) {
  i.uniform3iv(this.addr, e);
}
function id(i, e) {
  i.uniform4iv(this.addr, e);
}
function rd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function sd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function ad(i, e) {
  i.uniform3uiv(this.addr, e);
}
function od(i, e) {
  i.uniform4uiv(this.addr, e);
}
function ld(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? a = Gr : a = Fa;
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || a, s[o]);
}
function cd(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || Ua, s[a]);
}
function ud(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || Na, s[a]);
}
function dd(i, e, t) {
  const n = this.cache, r = e.length, s = Qi(t, r);
  gt(n, s) || (i.uniform1iv(this.addr, s), xt(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || Ia, s[a]);
}
function hd(i) {
  switch (i) {
    case 5126:
      return Yu;
    case 35664:
      return Ku;
    case 35665:
      return Zu;
    case 35666:
      return $u;
    case 35674:
      return ju;
    case 35675:
      return Ju;
    case 35676:
      return Qu;
    case 5124:
    case 35670:
      return ed;
    case 35667:
    case 35671:
      return td;
    case 35668:
    case 35672:
      return nd;
    case 35669:
    case 35673:
      return id;
    case 5125:
      return rd;
    case 36294:
      return sd;
    case 36295:
      return ad;
    case 36296:
      return od;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ld;
    case 35679:
    case 36299:
    case 36307:
      return cd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ud;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return dd;
  }
}
class fd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = qu(t.type);
  }
}
class pd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = hd(t.type);
  }
}
class md {
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
const Dr = /(\w+)(\])?(\[|\.)?/g;
function js(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function _d(i, e, t) {
  const n = i.name, r = n.length;
  for (Dr.lastIndex = 0; ; ) {
    const s = Dr.exec(n), a = Dr.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      js(t, l === void 0 ? new fd(o, i, e) : new pd(o, i, e));
      break;
    } else {
      let m = t.map[o];
      m === void 0 && (m = new md(o), js(t, m)), t = m;
    }
  }
}
class zi {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a), c = e.getUniformLocation(t, o.name);
      _d(o, c, this);
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
function Js(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const gd = 37297;
let xd = 0;
function vd(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Qs = /* @__PURE__ */ new De();
function Md(i) {
  He._getMatrix(Qs, He.workingColorSpace, i);
  const e = `mat3( ${Qs.elements.map((t) => t.toFixed(4))} )`;
  switch (He.getTransfer(i)) {
    case si:
      return [e, "LinearTransferOETF"];
    case Ze:
      return [e, "sRGBTransferOETF"];
    default:
      return Ce("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function ea(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + vd(i.getShaderSource(e), o);
  } else
    return s;
}
function Sd(i, e) {
  const t = Md(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
const Ed = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function yd(i, e) {
  const t = Ed[e];
  return t === void 0 ? (Ce("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Ni = /* @__PURE__ */ new B();
function Td() {
  He.getLuminanceCoefficients(Ni);
  const i = Ni.x.toFixed(4), e = Ni.y.toFixed(4), t = Ni.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function bd(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(ii).join(`
`);
}
function Ad(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Rd(i, e) {
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
function ii(i) {
  return i !== "";
}
function ta(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function na(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Cd = /^[ \t]*#include +<([\w\d./]+)>/gm;
function zr(i) {
  return i.replace(Cd, Pd);
}
const wd = /* @__PURE__ */ new Map();
function Pd(i, e) {
  let t = Ue[e];
  if (t === void 0) {
    const n = wd.get(e);
    if (n !== void 0)
      t = Ue[n], Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return zr(t);
}
const Dd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ia(i) {
  return i.replace(Dd, Ld);
}
function Ld(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function ra(i) {
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
const Fd = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function Id(i) {
  return Fd[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const Ud = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function Nd(i) {
  return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : Ud[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const Bd = {
  302: "ENVMAP_MODE_REFRACTION"
};
function Od(i) {
  return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Bd[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const Gd = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function zd(i) {
  return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : Gd[i.combine] || "ENVMAP_BLENDING_NONE";
}
function Vd(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Hd(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = Id(t), l = Nd(t), f = Od(t), m = zd(t), u = Vd(t), p = bd(t), g = Ad(s), S = r.createProgram();
  let h, d, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (h = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ii).join(`
`), h.length > 0 && (h += `
`), d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ii).join(`
`), d.length > 0 && (d += `
`)) : (h = [
    ra(t),
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
  ].filter(ii).join(`
`), d = [
    ra(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
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
    t.toneMapping !== 0 ? Ue.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? yd("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ue.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Sd("linearToOutputTexel", t.outputColorSpace),
    Td(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ii).join(`
`)), a = zr(a), a = ta(a, t), a = na(a, t), o = zr(o), o = ta(o, t), o = na(o, t), a = ia(a), o = ia(o), t.isRawShaderMaterial !== !0 && (M = `#version 300 es
`, h = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + h, d = [
    "#define varying in",
    t.glslVersion === Fr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Fr ? "" : "#define gl_FragColor pc_fragColor",
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
  const b = M + h + a, E = M + d + o, C = Js(r, r.VERTEX_SHADER, b), T = Js(r, r.FRAGMENT_SHADER, E);
  r.attachShader(S, C), r.attachShader(S, T), t.index0AttributeName !== void 0 ? r.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"), r.linkProgram(S);
  function w(D) {
    if (i.debug.checkShaderErrors) {
      const O = r.getProgramInfoLog(S) || "", W = r.getShaderInfoLog(C) || "", q = r.getShaderInfoLog(T) || "", U = O.trim(), z = W.trim(), X = q.trim();
      let Q = !0, ne = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (Q = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, S, C, T);
        else {
          const ue = ea(r, C, "vertex"), xe = ea(r, T, "fragment");
          Xe(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(S, r.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + U + `
` + ue + `
` + xe
          );
        }
      else U !== "" ? Ce("WebGLProgram: Program Info Log:", U) : (z === "" || X === "") && (ne = !1);
      ne && (D.diagnostics = {
        runnable: Q,
        programLog: U,
        vertexShader: {
          log: z,
          prefix: h
        },
        fragmentShader: {
          log: X,
          prefix: d
        }
      });
    }
    r.deleteShader(C), r.deleteShader(T), x = new zi(r, S), A = Rd(r, S);
  }
  let x;
  this.getUniforms = function() {
    return x === void 0 && w(this), x;
  };
  let A;
  this.getAttributes = function() {
    return A === void 0 && w(this), A;
  };
  let I = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return I === !1 && (I = r.getProgramParameter(S, gd)), I;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(S), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = xd++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = C, this.fragmentShader = T, this;
}
let kd = 0;
class Wd {
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
    return n === void 0 && (n = new Xd(e), t.set(e, n)), n;
  }
}
class Xd {
  constructor(e) {
    this.id = kd++, this.code = e, this.usedTimes = 0;
  }
}
function qd(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function Yd(i, e, t, n, r, s) {
  const a = new Hr(), o = new Wd(), c = /* @__PURE__ */ new Set(), l = [], f = /* @__PURE__ */ new Map(), m = n.logarithmicDepthBuffer;
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
    return c.add(x), x === 0 ? "uv" : `uv${x}`;
  }
  function S(x, A, I, D, O, W) {
    const q = D.fog, U = O.geometry, z = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? D.environment : null, X = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap, Q = e.get(x.envMap || z, X), ne = Q && Q.mapping === 306 ? Q.image.height : null, ue = p[x.type];
    x.precision !== null && (u = n.getMaxPrecision(x.precision), u !== x.precision && Ce("WebGLProgram.getParameters:", x.precision, "not supported, using", u, "instead."));
    const xe = U.morphAttributes.position || U.morphAttributes.normal || U.morphAttributes.color, Se = xe !== void 0 ? xe.length : 0;
    let ze = 0;
    U.morphAttributes.position !== void 0 && (ze = 1), U.morphAttributes.normal !== void 0 && (ze = 2), U.morphAttributes.color !== void 0 && (ze = 3);
    let We, Re, j, G;
    if (ue) {
      const Le = Vt[ue];
      We = Le.vertexShader, Re = Le.fragmentShader;
    } else
      We = x.vertexShader, Re = x.fragmentShader, o.update(x), j = o.getVertexShaderID(x), G = o.getFragmentShaderID(x);
    const ae = i.getRenderTarget(), Ae = i.state.buffers.depth.getReversed(), ve = O.isInstancedMesh === !0, be = O.isBatchedMesh === !0, nt = !!x.map, we = !!x.matcap, Ke = !!Q, Qe = !!x.aoMap, Be = !!x.lightMap, dt = !!x.bumpMap, it = !!x.normalMap, St = !!x.displacementMap, F = !!x.emissiveMap, lt = !!x.metalnessMap, Ne = !!x.roughnessMap, $e = x.anisotropy > 0, ce = x.clearcoat > 0, st = x.dispersion > 0, y = x.iridescence > 0, _ = x.sheen > 0, R = x.transmission > 0, P = $e && !!x.anisotropyMap, K = ce && !!x.clearcoatMap, te = ce && !!x.clearcoatNormalMap, ee = ce && !!x.clearcoatRoughnessMap, Y = y && !!x.iridescenceMap, Z = y && !!x.iridescenceThicknessMap, ie = _ && !!x.sheenColorMap, pe = _ && !!x.sheenRoughnessMap, oe = !!x.specularMap, re = !!x.specularColorMap, Pe = !!x.specularIntensityMap, Ie = R && !!x.transmissionMap, Ye = R && !!x.thicknessMap, L = !!x.gradientMap, se = !!x.alphaMap, $ = x.alphaTest > 0, me = !!x.alphaHash, le = !!x.extensions;
    let J = 0;
    x.toneMapped && (ae === null || ae.isXRRenderTarget === !0) && (J = i.toneMapping);
    const Ee = {
      shaderID: ue,
      shaderType: x.type,
      shaderName: x.name,
      vertexShader: We,
      fragmentShader: Re,
      defines: x.defines,
      customVertexShaderID: j,
      customFragmentShaderID: G,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: u,
      batching: be,
      batchingColor: be && O._colorsTexture !== null,
      instancing: ve,
      instancingColor: ve && O.instanceColor !== null,
      instancingMorph: ve && O.morphTexture !== null,
      outputColorSpace: ae === null ? i.outputColorSpace : ae.isXRRenderTarget === !0 ? ae.texture.colorSpace : He.workingColorSpace,
      alphaToCoverage: !!x.alphaToCoverage,
      map: nt,
      matcap: we,
      envMap: Ke,
      envMapMode: Ke && Q.mapping,
      envMapCubeUVHeight: ne,
      aoMap: Qe,
      lightMap: Be,
      bumpMap: dt,
      normalMap: it,
      displacementMap: St,
      emissiveMap: F,
      normalMapObjectSpace: it && x.normalMapType === 1,
      normalMapTangentSpace: it && x.normalMapType === 0,
      packedNormalMap: it && x.normalMapType === 0 && qd(x.normalMap.format),
      metalnessMap: lt,
      roughnessMap: Ne,
      anisotropy: $e,
      anisotropyMap: P,
      clearcoat: ce,
      clearcoatMap: K,
      clearcoatNormalMap: te,
      clearcoatRoughnessMap: ee,
      dispersion: st,
      iridescence: y,
      iridescenceMap: Y,
      iridescenceThicknessMap: Z,
      sheen: _,
      sheenColorMap: ie,
      sheenRoughnessMap: pe,
      specularMap: oe,
      specularColorMap: re,
      specularIntensityMap: Pe,
      transmission: R,
      transmissionMap: Ie,
      thicknessMap: Ye,
      gradientMap: L,
      opaque: x.transparent === !1 && x.blending === 1 && x.alphaToCoverage === !1,
      alphaMap: se,
      alphaTest: $,
      alphaHash: me,
      combine: x.combine,
      //
      mapUv: nt && g(x.map.channel),
      aoMapUv: Qe && g(x.aoMap.channel),
      lightMapUv: Be && g(x.lightMap.channel),
      bumpMapUv: dt && g(x.bumpMap.channel),
      normalMapUv: it && g(x.normalMap.channel),
      displacementMapUv: St && g(x.displacementMap.channel),
      emissiveMapUv: F && g(x.emissiveMap.channel),
      metalnessMapUv: lt && g(x.metalnessMap.channel),
      roughnessMapUv: Ne && g(x.roughnessMap.channel),
      anisotropyMapUv: P && g(x.anisotropyMap.channel),
      clearcoatMapUv: K && g(x.clearcoatMap.channel),
      clearcoatNormalMapUv: te && g(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ee && g(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Y && g(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: Z && g(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: ie && g(x.sheenColorMap.channel),
      sheenRoughnessMapUv: pe && g(x.sheenRoughnessMap.channel),
      specularMapUv: oe && g(x.specularMap.channel),
      specularColorMapUv: re && g(x.specularColorMap.channel),
      specularIntensityMapUv: Pe && g(x.specularIntensityMap.channel),
      transmissionMapUv: Ie && g(x.transmissionMap.channel),
      thicknessMapUv: Ye && g(x.thicknessMap.channel),
      alphaMapUv: se && g(x.alphaMap.channel),
      //
      vertexTangents: !!U.attributes.tangent && (it || $e),
      vertexNormals: !!U.attributes.normal,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!U.attributes.color && U.attributes.color.itemSize === 4,
      pointsUvs: O.isPoints === !0 && !!U.attributes.uv && (nt || se),
      fog: !!q,
      useFog: x.fog === !0,
      fogExp2: !!q && q.isFogExp2,
      flatShading: x.wireframe === !1 && (x.flatShading === !0 || U.attributes.normal === void 0 && it === !1 && (x.isMeshLambertMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isMeshPhysicalMaterial)),
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: m,
      reversedDepthBuffer: Ae,
      skinning: O.isSkinnedMesh === !0,
      morphTargets: U.morphAttributes.position !== void 0,
      morphNormals: U.morphAttributes.normal !== void 0,
      morphColors: U.morphAttributes.color !== void 0,
      morphTargetsCount: Se,
      morphTextureStride: ze,
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
      dithering: x.dithering,
      shadowMapEnabled: i.shadowMap.enabled && I.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: J,
      decodeVideoTexture: nt && x.map.isVideoTexture === !0 && He.getTransfer(x.map.colorSpace) === Ze,
      decodeVideoTextureEmissive: F && x.emissiveMap.isVideoTexture === !0 && He.getTransfer(x.emissiveMap.colorSpace) === Ze,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === 2,
      flipSided: x.side === 1,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionClipCullDistance: le && x.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (le && x.extensions.multiDraw === !0 || be) && t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
    return Ee.vertexUv1s = c.has(1), Ee.vertexUv2s = c.has(2), Ee.vertexUv3s = c.has(3), c.clear(), Ee;
  }
  function h(x) {
    const A = [];
    if (x.shaderID ? A.push(x.shaderID) : (A.push(x.customVertexShaderID), A.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const I in x.defines)
        A.push(I), A.push(x.defines[I]);
    return x.isRawShaderMaterial === !1 && (d(A, x), M(A, x), A.push(i.outputColorSpace)), A.push(x.customProgramCacheKey), A.join();
  }
  function d(x, A) {
    x.push(A.precision), x.push(A.outputColorSpace), x.push(A.envMapMode), x.push(A.envMapCubeUVHeight), x.push(A.mapUv), x.push(A.alphaMapUv), x.push(A.lightMapUv), x.push(A.aoMapUv), x.push(A.bumpMapUv), x.push(A.normalMapUv), x.push(A.displacementMapUv), x.push(A.emissiveMapUv), x.push(A.metalnessMapUv), x.push(A.roughnessMapUv), x.push(A.anisotropyMapUv), x.push(A.clearcoatMapUv), x.push(A.clearcoatNormalMapUv), x.push(A.clearcoatRoughnessMapUv), x.push(A.iridescenceMapUv), x.push(A.iridescenceThicknessMapUv), x.push(A.sheenColorMapUv), x.push(A.sheenRoughnessMapUv), x.push(A.specularMapUv), x.push(A.specularColorMapUv), x.push(A.specularIntensityMapUv), x.push(A.transmissionMapUv), x.push(A.thicknessMapUv), x.push(A.combine), x.push(A.fogExp2), x.push(A.sizeAttenuation), x.push(A.morphTargetsCount), x.push(A.morphAttributeCount), x.push(A.numDirLights), x.push(A.numPointLights), x.push(A.numSpotLights), x.push(A.numSpotLightMaps), x.push(A.numHemiLights), x.push(A.numRectAreaLights), x.push(A.numDirLightShadows), x.push(A.numPointLightShadows), x.push(A.numSpotLightShadows), x.push(A.numSpotLightShadowsWithMaps), x.push(A.numLightProbes), x.push(A.shadowMapType), x.push(A.toneMapping), x.push(A.numClippingPlanes), x.push(A.numClipIntersection), x.push(A.depthPacking);
  }
  function M(x, A) {
    a.disableAll(), A.instancing && a.enable(0), A.instancingColor && a.enable(1), A.instancingMorph && a.enable(2), A.matcap && a.enable(3), A.envMap && a.enable(4), A.normalMapObjectSpace && a.enable(5), A.normalMapTangentSpace && a.enable(6), A.clearcoat && a.enable(7), A.iridescence && a.enable(8), A.alphaTest && a.enable(9), A.vertexColors && a.enable(10), A.vertexAlphas && a.enable(11), A.vertexUv1s && a.enable(12), A.vertexUv2s && a.enable(13), A.vertexUv3s && a.enable(14), A.vertexTangents && a.enable(15), A.anisotropy && a.enable(16), A.alphaHash && a.enable(17), A.batching && a.enable(18), A.dispersion && a.enable(19), A.batchingColor && a.enable(20), A.gradientMap && a.enable(21), A.packedNormalMap && a.enable(22), A.vertexNormals && a.enable(23), x.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.reversedDepthBuffer && a.enable(4), A.skinning && a.enable(5), A.morphTargets && a.enable(6), A.morphNormals && a.enable(7), A.morphColors && a.enable(8), A.premultipliedAlpha && a.enable(9), A.shadowMapEnabled && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.transmission && a.enable(15), A.sheen && a.enable(16), A.opaque && a.enable(17), A.pointsUvs && a.enable(18), A.decodeVideoTexture && a.enable(19), A.decodeVideoTextureEmissive && a.enable(20), A.alphaToCoverage && a.enable(21), A.numLightProbeGrids > 0 && a.enable(22), x.push(a.mask);
  }
  function b(x) {
    const A = p[x.type];
    let I;
    if (A) {
      const D = Vt[A];
      I = Ta.clone(D.uniforms);
    } else
      I = x.uniforms;
    return I;
  }
  function E(x, A) {
    let I = f.get(A);
    return I !== void 0 ? ++I.usedTimes : (I = new Hd(i, A, x, r), l.push(I), f.set(A, I)), I;
  }
  function C(x) {
    if (--x.usedTimes === 0) {
      const A = l.indexOf(x);
      l[A] = l[l.length - 1], l.pop(), f.delete(x.cacheKey), x.destroy();
    }
  }
  function T(x) {
    o.remove(x);
  }
  function w() {
    o.dispose();
  }
  return {
    getParameters: S,
    getProgramCacheKey: h,
    getUniforms: b,
    acquireProgram: E,
    releaseProgram: C,
    releaseShaderCache: T,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: w
  };
}
function Kd() {
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
function Zd(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function sa(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function aa() {
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
  function c(u, p, g, S, h, d) {
    const M = o(u, p, g, S, h, d);
    g.transmission > 0 ? n.push(M) : g.transparent === !0 ? r.push(M) : t.push(M);
  }
  function l(u, p, g, S, h, d) {
    const M = o(u, p, g, S, h, d);
    g.transmission > 0 ? n.unshift(M) : g.transparent === !0 ? r.unshift(M) : t.unshift(M);
  }
  function f(u, p) {
    t.length > 1 && t.sort(u || Zd), n.length > 1 && n.sort(p || sa), r.length > 1 && r.sort(p || sa);
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
    push: c,
    unshift: l,
    finish: m,
    sort: f
  };
}
function $d() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new aa(), i.set(n, [a])) : r >= s.length ? (a = new aa(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function jd() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new B(),
            color: new Ge()
          };
          break;
        case "SpotLight":
          t = {
            position: new B(),
            direction: new B(),
            color: new Ge(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new B(),
            color: new Ge(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new B(),
            skyColor: new Ge(),
            groundColor: new Ge()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ge(),
            position: new B(),
            halfWidth: new B(),
            halfHeight: new B()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Jd() {
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
            shadowMapSize: new Ve()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ve()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ve(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Qd = 0;
function eh(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function th(i) {
  const e = new jd(), t = Jd(), n = {
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
  for (let l = 0; l < 9; l++) n.probe.push(new B());
  const r = new B(), s = new at(), a = new at();
  function o(l) {
    let f = 0, m = 0, u = 0;
    for (let A = 0; A < 9; A++) n.probe[A].set(0, 0, 0);
    let p = 0, g = 0, S = 0, h = 0, d = 0, M = 0, b = 0, E = 0, C = 0, T = 0, w = 0;
    l.sort(eh);
    for (let A = 0, I = l.length; A < I; A++) {
      const D = l[A], O = D.color, W = D.intensity, q = D.distance;
      let U = null;
      if (D.shadow && D.shadow.map && (D.shadow.map.texture.format === 1030 ? U = D.shadow.map.texture : U = D.shadow.map.depthTexture || D.shadow.map.texture), D.isAmbientLight)
        f += O.r * W, m += O.g * W, u += O.b * W;
      else if (D.isLightProbe) {
        for (let z = 0; z < 9; z++)
          n.probe[z].addScaledVector(D.sh.coefficients[z], W);
        w++;
      } else if (D.isDirectionalLight) {
        const z = e.get(D);
        if (z.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
          const X = D.shadow, Q = t.get(D);
          Q.shadowIntensity = X.intensity, Q.shadowBias = X.bias, Q.shadowNormalBias = X.normalBias, Q.shadowRadius = X.radius, Q.shadowMapSize = X.mapSize, n.directionalShadow[p] = Q, n.directionalShadowMap[p] = U, n.directionalShadowMatrix[p] = D.shadow.matrix, M++;
        }
        n.directional[p] = z, p++;
      } else if (D.isSpotLight) {
        const z = e.get(D);
        z.position.setFromMatrixPosition(D.matrixWorld), z.color.copy(O).multiplyScalar(W), z.distance = q, z.coneCos = Math.cos(D.angle), z.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), z.decay = D.decay, n.spot[S] = z;
        const X = D.shadow;
        if (D.map && (n.spotLightMap[C] = D.map, C++, X.updateMatrices(D), D.castShadow && T++), n.spotLightMatrix[S] = X.matrix, D.castShadow) {
          const Q = t.get(D);
          Q.shadowIntensity = X.intensity, Q.shadowBias = X.bias, Q.shadowNormalBias = X.normalBias, Q.shadowRadius = X.radius, Q.shadowMapSize = X.mapSize, n.spotShadow[S] = Q, n.spotShadowMap[S] = U, E++;
        }
        S++;
      } else if (D.isRectAreaLight) {
        const z = e.get(D);
        z.color.copy(O).multiplyScalar(W), z.halfWidth.set(D.width * 0.5, 0, 0), z.halfHeight.set(0, D.height * 0.5, 0), n.rectArea[h] = z, h++;
      } else if (D.isPointLight) {
        const z = e.get(D);
        if (z.color.copy(D.color).multiplyScalar(D.intensity), z.distance = D.distance, z.decay = D.decay, D.castShadow) {
          const X = D.shadow, Q = t.get(D);
          Q.shadowIntensity = X.intensity, Q.shadowBias = X.bias, Q.shadowNormalBias = X.normalBias, Q.shadowRadius = X.radius, Q.shadowMapSize = X.mapSize, Q.shadowCameraNear = X.camera.near, Q.shadowCameraFar = X.camera.far, n.pointShadow[g] = Q, n.pointShadowMap[g] = U, n.pointShadowMatrix[g] = D.shadow.matrix, b++;
        }
        n.point[g] = z, g++;
      } else if (D.isHemisphereLight) {
        const z = e.get(D);
        z.skyColor.copy(D.color).multiplyScalar(W), z.groundColor.copy(D.groundColor).multiplyScalar(W), n.hemi[d] = z, d++;
      }
    }
    h > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = de.LTC_FLOAT_1, n.rectAreaLTC2 = de.LTC_FLOAT_2) : (n.rectAreaLTC1 = de.LTC_HALF_1, n.rectAreaLTC2 = de.LTC_HALF_2)), n.ambient[0] = f, n.ambient[1] = m, n.ambient[2] = u;
    const x = n.hash;
    (x.directionalLength !== p || x.pointLength !== g || x.spotLength !== S || x.rectAreaLength !== h || x.hemiLength !== d || x.numDirectionalShadows !== M || x.numPointShadows !== b || x.numSpotShadows !== E || x.numSpotMaps !== C || x.numLightProbes !== w) && (n.directional.length = p, n.spot.length = S, n.rectArea.length = h, n.point.length = g, n.hemi.length = d, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = E + C - T, n.spotLightMap.length = C, n.numSpotLightShadowsWithMaps = T, n.numLightProbes = w, x.directionalLength = p, x.pointLength = g, x.spotLength = S, x.rectAreaLength = h, x.hemiLength = d, x.numDirectionalShadows = M, x.numPointShadows = b, x.numSpotShadows = E, x.numSpotMaps = C, x.numLightProbes = w, n.version = Qd++);
  }
  function c(l, f) {
    let m = 0, u = 0, p = 0, g = 0, S = 0;
    const h = f.matrixWorldInverse;
    for (let d = 0, M = l.length; d < M; d++) {
      const b = l[d];
      if (b.isDirectionalLight) {
        const E = n.directional[m];
        E.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(h), m++;
      } else if (b.isSpotLight) {
        const E = n.spot[p];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(h), E.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(h), p++;
      } else if (b.isRectAreaLight) {
        const E = n.rectArea[g];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(h), a.identity(), s.copy(b.matrixWorld), s.premultiply(h), a.extractRotation(s), E.halfWidth.set(b.width * 0.5, 0, 0), E.halfHeight.set(0, b.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), g++;
      } else if (b.isPointLight) {
        const E = n.point[u];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(h), u++;
      } else if (b.isHemisphereLight) {
        const E = n.hemi[S];
        E.direction.setFromMatrixPosition(b.matrixWorld), E.direction.transformDirection(h), S++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function oa(i) {
  const e = new th(i), t = [], n = [], r = [];
  function s(u) {
    m.camera = u, t.length = 0, n.length = 0, r.length = 0;
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
    setupLights: l,
    setupLightsView: f,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: c
  };
}
function nh(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new oa(i), e.set(r, [o])) : s >= a.length ? (o = new oa(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const ih = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, rh = `uniform sampler2D shadow_pass;
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
}`, sh = [
  /* @__PURE__ */ new B(1, 0, 0),
  /* @__PURE__ */ new B(-1, 0, 0),
  /* @__PURE__ */ new B(0, 1, 0),
  /* @__PURE__ */ new B(0, -1, 0),
  /* @__PURE__ */ new B(0, 0, 1),
  /* @__PURE__ */ new B(0, 0, -1)
], ah = [
  /* @__PURE__ */ new B(0, -1, 0),
  /* @__PURE__ */ new B(0, -1, 0),
  /* @__PURE__ */ new B(0, 0, 1),
  /* @__PURE__ */ new B(0, 0, -1),
  /* @__PURE__ */ new B(0, -1, 0),
  /* @__PURE__ */ new B(0, -1, 0)
], la = /* @__PURE__ */ new at(), ni = /* @__PURE__ */ new B(), Lr = /* @__PURE__ */ new B();
function oh(i, e, t) {
  let n = new $i();
  const r = new Ve(), s = new Ve(), a = new ot(), o = new Aa(), c = new Ra(), l = {}, f = t.maxTextureSize, m = { 0: 1, 1: 0, 2: 2 }, u = new Wt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ve() },
      radius: { value: 4 }
    },
    vertexShader: ih,
    fragmentShader: rh
  }), p = u.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Mt();
  g.setAttribute(
    "position",
    new Bt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const S = new kt(g, u), h = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let d = this.type;
  this.render = function(T, w, x) {
    if (h.enabled === !1 || h.autoUpdate === !1 && h.needsUpdate === !1 || T.length === 0) return;
    this.type === 2 && (Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
    const A = i.getRenderTarget(), I = i.getActiveCubeFace(), D = i.getActiveMipmapLevel(), O = i.state;
    O.setBlending(0), O.buffers.depth.getReversed() === !0 ? O.buffers.color.setClear(0, 0, 0, 0) : O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const W = d !== this.type;
    W && w.traverse(function(q) {
      q.material && (Array.isArray(q.material) ? q.material.forEach((U) => U.needsUpdate = !0) : q.material.needsUpdate = !0);
    });
    for (let q = 0, U = T.length; q < U; q++) {
      const z = T[q], X = z.shadow;
      if (X === void 0) {
        Ce("WebGLShadowMap:", z, "has no shadow.");
        continue;
      }
      if (X.autoUpdate === !1 && X.needsUpdate === !1) continue;
      r.copy(X.mapSize);
      const Q = X.getFrameExtents();
      r.multiply(Q), s.copy(X.mapSize), (r.x > f || r.y > f) && (r.x > f && (s.x = Math.floor(f / Q.x), r.x = s.x * Q.x, X.mapSize.x = s.x), r.y > f && (s.y = Math.floor(f / Q.y), r.y = s.y * Q.y, X.mapSize.y = s.y));
      const ne = i.state.buffers.depth.getReversed();
      if (X.camera._reversedDepth = ne, X.map === null || W === !0) {
        if (X.map !== null && (X.map.depthTexture !== null && (X.map.depthTexture.dispose(), X.map.depthTexture = null), X.map.dispose()), this.type === 3) {
          if (z.isPointLight) {
            Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          X.map = new Ht(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1
          }), X.map.texture.name = z.name + ".shadowMap", X.map.depthTexture = new bn(r.x, r.y, 1015), X.map.depthTexture.name = z.name + ".shadowMapDepth", X.map.depthTexture.format = 1026, X.map.depthTexture.compareFunction = null, X.map.depthTexture.minFilter = 1003, X.map.depthTexture.magFilter = 1003;
        } else
          z.isPointLight ? (X.map = new es(r.x), X.map.depthTexture = new Sa(r.x, 1014)) : (X.map = new Ht(r.x, r.y), X.map.depthTexture = new bn(r.x, r.y, 1014)), X.map.depthTexture.name = z.name + ".shadowMap", X.map.depthTexture.format = 1026, this.type === 1 ? (X.map.depthTexture.compareFunction = ne ? 518 : 515, X.map.depthTexture.minFilter = 1006, X.map.depthTexture.magFilter = 1006) : (X.map.depthTexture.compareFunction = null, X.map.depthTexture.minFilter = 1003, X.map.depthTexture.magFilter = 1003);
        X.camera.updateProjectionMatrix();
      }
      const ue = X.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let xe = 0; xe < ue; xe++) {
        if (X.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(X.map, xe), i.clear();
        else {
          xe === 0 && (i.setRenderTarget(X.map), i.clear());
          const Se = X.getViewport(xe);
          a.set(
            s.x * Se.x,
            s.y * Se.y,
            s.x * Se.z,
            s.y * Se.w
          ), O.viewport(a);
        }
        if (z.isPointLight) {
          const Se = X.camera, ze = X.matrix, We = z.distance || Se.far;
          We !== Se.far && (Se.far = We, Se.updateProjectionMatrix()), ni.setFromMatrixPosition(z.matrixWorld), Se.position.copy(ni), Lr.copy(Se.position), Lr.add(sh[xe]), Se.up.copy(ah[xe]), Se.lookAt(Lr), Se.updateMatrixWorld(), ze.makeTranslation(-ni.x, -ni.y, -ni.z), la.multiplyMatrices(Se.projectionMatrix, Se.matrixWorldInverse), X._frustum.setFromProjectionMatrix(la, Se.coordinateSystem, Se.reversedDepth);
        } else
          X.updateMatrices(z);
        n = X.getFrustum(), E(w, x, X.camera, z, this.type);
      }
      X.isPointLightShadow !== !0 && this.type === 3 && M(X, x), X.needsUpdate = !1;
    }
    d = this.type, h.needsUpdate = !1, i.setRenderTarget(A, I, D);
  };
  function M(T, w) {
    const x = e.update(S);
    u.defines.VSM_SAMPLES !== T.blurSamples && (u.defines.VSM_SAMPLES = T.blurSamples, p.defines.VSM_SAMPLES = T.blurSamples, u.needsUpdate = !0, p.needsUpdate = !0), T.mapPass === null && (T.mapPass = new Ht(r.x, r.y, {
      format: 1030,
      type: 1016
    })), u.uniforms.shadow_pass.value = T.map.depthTexture, u.uniforms.resolution.value = T.mapSize, u.uniforms.radius.value = T.radius, i.setRenderTarget(T.mapPass), i.clear(), i.renderBufferDirect(w, null, x, u, S, null), p.uniforms.shadow_pass.value = T.mapPass.texture, p.uniforms.resolution.value = T.mapSize, p.uniforms.radius.value = T.radius, i.setRenderTarget(T.map), i.clear(), i.renderBufferDirect(w, null, x, p, S, null);
  }
  function b(T, w, x, A) {
    let I = null;
    const D = x.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial;
    if (D !== void 0)
      I = D;
    else if (I = x.isPointLight === !0 ? c : o, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === !0) {
      const O = I.uuid, W = w.uuid;
      let q = l[O];
      q === void 0 && (q = {}, l[O] = q);
      let U = q[W];
      U === void 0 && (U = I.clone(), q[W] = U, w.addEventListener("dispose", C)), I = U;
    }
    if (I.visible = w.visible, I.wireframe = w.wireframe, A === 3 ? I.side = w.shadowSide !== null ? w.shadowSide : w.side : I.side = w.shadowSide !== null ? w.shadowSide : m[w.side], I.alphaMap = w.alphaMap, I.alphaTest = w.alphaToCoverage === !0 ? 0.5 : w.alphaTest, I.map = w.map, I.clipShadows = w.clipShadows, I.clippingPlanes = w.clippingPlanes, I.clipIntersection = w.clipIntersection, I.displacementMap = w.displacementMap, I.displacementScale = w.displacementScale, I.displacementBias = w.displacementBias, I.wireframeLinewidth = w.wireframeLinewidth, I.linewidth = w.linewidth, x.isPointLight === !0 && I.isMeshDistanceMaterial === !0) {
      const O = i.properties.get(I);
      O.light = x;
    }
    return I;
  }
  function E(T, w, x, A, I) {
    if (T.visible === !1) return;
    if (T.layers.test(w.layers) && (T.isMesh || T.isLine || T.isPoints) && (T.castShadow || T.receiveShadow && I === 3) && (!T.frustumCulled || n.intersectsObject(T))) {
      T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, T.matrixWorld);
      const W = e.update(T), q = T.material;
      if (Array.isArray(q)) {
        const U = W.groups;
        for (let z = 0, X = U.length; z < X; z++) {
          const Q = U[z], ne = q[Q.materialIndex];
          if (ne && ne.visible) {
            const ue = b(T, ne, A, I);
            T.onBeforeShadow(i, T, w, x, W, ue, Q), i.renderBufferDirect(x, null, W, ue, T, Q), T.onAfterShadow(i, T, w, x, W, ue, Q);
          }
        }
      } else if (q.visible) {
        const U = b(T, q, A, I);
        T.onBeforeShadow(i, T, w, x, W, U, null), i.renderBufferDirect(x, null, W, U, T, null), T.onAfterShadow(i, T, w, x, W, U, null);
      }
    }
    const O = T.children;
    for (let W = 0, q = O.length; W < q; W++)
      E(O[W], w, x, A, I);
  }
  function C(T) {
    T.target.removeEventListener("dispose", C);
    for (const x in l) {
      const A = l[x], I = T.target.uuid;
      I in A && (A[I].dispose(), delete A[I]);
    }
  }
}
function lh(i, e) {
  function t() {
    let L = !1;
    const se = new ot();
    let $ = null;
    const me = new ot(0, 0, 0, 0);
    return {
      setMask: function(le) {
        $ !== le && !L && (i.colorMask(le, le, le, le), $ = le);
      },
      setLocked: function(le) {
        L = le;
      },
      setClear: function(le, J, Ee, Le, ht) {
        ht === !0 && (le *= Le, J *= Le, Ee *= Le), se.set(le, J, Ee, Le), me.equals(se) === !1 && (i.clearColor(le, J, Ee, Le), me.copy(se));
      },
      reset: function() {
        L = !1, $ = null, me.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let L = !1, se = !1, $ = null, me = null, le = null;
    return {
      setReversed: function(J) {
        if (se !== J) {
          const Ee = e.get("EXT_clip_control");
          J ? Ee.clipControlEXT(Ee.LOWER_LEFT_EXT, Ee.ZERO_TO_ONE_EXT) : Ee.clipControlEXT(Ee.LOWER_LEFT_EXT, Ee.NEGATIVE_ONE_TO_ONE_EXT), se = J;
          const Le = le;
          le = null, this.setClear(Le);
        }
      },
      getReversed: function() {
        return se;
      },
      setTest: function(J) {
        J ? ae(i.DEPTH_TEST) : Ae(i.DEPTH_TEST);
      },
      setMask: function(J) {
        $ !== J && !L && (i.depthMask(J), $ = J);
      },
      setFunc: function(J) {
        if (se && (J = $a[J]), me !== J) {
          switch (J) {
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
          me = J;
        }
      },
      setLocked: function(J) {
        L = J;
      },
      setClear: function(J) {
        le !== J && (le = J, se && (J = 1 - J), i.clearDepth(J));
      },
      reset: function() {
        L = !1, $ = null, me = null, le = null, se = !1;
      }
    };
  }
  function r() {
    let L = !1, se = null, $ = null, me = null, le = null, J = null, Ee = null, Le = null, ht = null;
    return {
      setTest: function(je) {
        L || (je ? ae(i.STENCIL_TEST) : Ae(i.STENCIL_TEST));
      },
      setMask: function(je) {
        se !== je && !L && (i.stencilMask(je), se = je);
      },
      setFunc: function(je, Zt, Xt) {
        ($ !== je || me !== Zt || le !== Xt) && (i.stencilFunc(je, Zt, Xt), $ = je, me = Zt, le = Xt);
      },
      setOp: function(je, Zt, Xt) {
        (J !== je || Ee !== Zt || Le !== Xt) && (i.stencilOp(je, Zt, Xt), J = je, Ee = Zt, Le = Xt);
      },
      setLocked: function(je) {
        L = je;
      },
      setClear: function(je) {
        ht !== je && (i.clearStencil(je), ht = je);
      },
      reset: function() {
        L = !1, se = null, $ = null, me = null, le = null, J = null, Ee = null, Le = null, ht = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), g = [], S = null, h = !1, d = null, M = null, b = null, E = null, C = null, T = null, w = null, x = new Ge(0, 0, 0), A = 0, I = !1, D = null, O = null, W = null, q = null, U = null;
  const z = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = !1, Q = 0;
  const ne = i.getParameter(i.VERSION);
  ne.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(ne)[1]), X = Q >= 1) : ne.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]), X = Q >= 2);
  let ue = null, xe = {};
  const Se = i.getParameter(i.SCISSOR_BOX), ze = i.getParameter(i.VIEWPORT), We = new ot().fromArray(Se), Re = new ot().fromArray(ze);
  function j(L, se, $, me) {
    const le = new Uint8Array(4), J = i.createTexture();
    i.bindTexture(L, J), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ee = 0; Ee < $; Ee++)
      L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY ? i.texImage3D(se, 0, i.RGBA, 1, 1, me, 0, i.RGBA, i.UNSIGNED_BYTE, le) : i.texImage2D(se + Ee, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, le);
    return J;
  }
  const G = {};
  G[i.TEXTURE_2D] = j(i.TEXTURE_2D, i.TEXTURE_2D, 1), G[i.TEXTURE_CUBE_MAP] = j(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), G[i.TEXTURE_2D_ARRAY] = j(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), G[i.TEXTURE_3D] = j(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ae(i.DEPTH_TEST), a.setFunc(3), dt(!1), it(1), ae(i.CULL_FACE), Qe(0);
  function ae(L) {
    f[L] !== !0 && (i.enable(L), f[L] = !0);
  }
  function Ae(L) {
    f[L] !== !1 && (i.disable(L), f[L] = !1);
  }
  function ve(L, se) {
    return u[L] !== se ? (i.bindFramebuffer(L, se), u[L] = se, L === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = se), L === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = se), !0) : !1;
  }
  function be(L, se) {
    let $ = g, me = !1;
    if (L) {
      $ = p.get(se), $ === void 0 && ($ = [], p.set(se, $));
      const le = L.textures;
      if ($.length !== le.length || $[0] !== i.COLOR_ATTACHMENT0) {
        for (let J = 0, Ee = le.length; J < Ee; J++)
          $[J] = i.COLOR_ATTACHMENT0 + J;
        $.length = le.length, me = !0;
      }
    } else
      $[0] !== i.BACK && ($[0] = i.BACK, me = !0);
    me && i.drawBuffers($);
  }
  function nt(L) {
    return S !== L ? (i.useProgram(L), S = L, !0) : !1;
  }
  const we = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  we[103] = i.MIN, we[104] = i.MAX;
  const Ke = {
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
  function Qe(L, se, $, me, le, J, Ee, Le, ht, je) {
    if (L === 0) {
      h === !0 && (Ae(i.BLEND), h = !1);
      return;
    }
    if (h === !1 && (ae(i.BLEND), h = !0), L !== 5) {
      if (L !== d || je !== I) {
        if ((M !== 100 || C !== 100) && (i.blendEquation(i.FUNC_ADD), M = 100, C = 100), je)
          switch (L) {
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
              Xe("WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              Xe("WebGLState: Invalid blending: ", L);
              break;
          }
        b = null, E = null, T = null, w = null, x.set(0, 0, 0), A = 0, d = L, I = je;
      }
      return;
    }
    le = le || se, J = J || $, Ee = Ee || me, (se !== M || le !== C) && (i.blendEquationSeparate(we[se], we[le]), M = se, C = le), ($ !== b || me !== E || J !== T || Ee !== w) && (i.blendFuncSeparate(Ke[$], Ke[me], Ke[J], Ke[Ee]), b = $, E = me, T = J, w = Ee), (Le.equals(x) === !1 || ht !== A) && (i.blendColor(Le.r, Le.g, Le.b, ht), x.copy(Le), A = ht), d = L, I = !1;
  }
  function Be(L, se) {
    L.side === 2 ? Ae(i.CULL_FACE) : ae(i.CULL_FACE);
    let $ = L.side === 1;
    se && ($ = !$), dt($), L.blending === 1 && L.transparent === !1 ? Qe(0) : Qe(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), a.setFunc(L.depthFunc), a.setTest(L.depthTest), a.setMask(L.depthWrite), s.setMask(L.colorWrite);
    const me = L.stencilWrite;
    o.setTest(me), me && (o.setMask(L.stencilWriteMask), o.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), o.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), F(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? ae(i.SAMPLE_ALPHA_TO_COVERAGE) : Ae(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function dt(L) {
    D !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), D = L);
  }
  function it(L) {
    L !== 0 ? (ae(i.CULL_FACE), L !== O && (L === 1 ? i.cullFace(i.BACK) : L === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Ae(i.CULL_FACE), O = L;
  }
  function St(L) {
    L !== W && (X && i.lineWidth(L), W = L);
  }
  function F(L, se, $) {
    L ? (ae(i.POLYGON_OFFSET_FILL), (q !== se || U !== $) && (q = se, U = $, a.getReversed() && (se = -se), i.polygonOffset(se, $))) : Ae(i.POLYGON_OFFSET_FILL);
  }
  function lt(L) {
    L ? ae(i.SCISSOR_TEST) : Ae(i.SCISSOR_TEST);
  }
  function Ne(L) {
    L === void 0 && (L = i.TEXTURE0 + z - 1), ue !== L && (i.activeTexture(L), ue = L);
  }
  function $e(L, se, $) {
    $ === void 0 && (ue === null ? $ = i.TEXTURE0 + z - 1 : $ = ue);
    let me = xe[$];
    me === void 0 && (me = { type: void 0, texture: void 0 }, xe[$] = me), (me.type !== L || me.texture !== se) && (ue !== $ && (i.activeTexture($), ue = $), i.bindTexture(L, se || G[L]), me.type = L, me.texture = se);
  }
  function ce() {
    const L = xe[ue];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function st() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function y() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function _() {
    try {
      i.texSubImage2D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function R() {
    try {
      i.texSubImage3D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function P() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function K() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function te() {
    try {
      i.texStorage2D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function ee() {
    try {
      i.texStorage3D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function Y() {
    try {
      i.texImage2D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function Z() {
    try {
      i.texImage3D(...arguments);
    } catch (L) {
      Xe("WebGLState:", L);
    }
  }
  function ie(L) {
    return m[L] !== void 0 ? m[L] : i.getParameter(L);
  }
  function pe(L, se) {
    m[L] !== se && (i.pixelStorei(L, se), m[L] = se);
  }
  function oe(L) {
    We.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), We.copy(L));
  }
  function re(L) {
    Re.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), Re.copy(L));
  }
  function Pe(L, se) {
    let $ = l.get(se);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), l.set(se, $));
    let me = $.get(L);
    me === void 0 && (me = i.getUniformBlockIndex(se, L.name), $.set(L, me));
  }
  function Ie(L, se) {
    const me = l.get(se).get(L);
    c.get(se) !== me && (i.uniformBlockBinding(se, me, L.__bindingPointIndex), c.set(se, me));
  }
  function Ye() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), i.pixelStorei(i.PACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.BROWSER_DEFAULT_WEBGL), i.pixelStorei(i.PACK_ROW_LENGTH, 0), i.pixelStorei(i.PACK_SKIP_PIXELS, 0), i.pixelStorei(i.PACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_ROW_LENGTH, 0), i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0), i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0), i.pixelStorei(i.UNPACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0), f = {}, m = {}, ue = null, xe = {}, u = {}, p = /* @__PURE__ */ new WeakMap(), g = [], S = null, h = !1, d = null, M = null, b = null, E = null, C = null, T = null, w = null, x = new Ge(0, 0, 0), A = 0, I = !1, D = null, O = null, W = null, q = null, U = null, We.set(0, 0, i.canvas.width, i.canvas.height), Re.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: ae,
    disable: Ae,
    bindFramebuffer: ve,
    drawBuffers: be,
    useProgram: nt,
    setBlending: Qe,
    setMaterial: Be,
    setFlipSided: dt,
    setCullFace: it,
    setLineWidth: St,
    setPolygonOffset: F,
    setScissorTest: lt,
    activeTexture: Ne,
    bindTexture: $e,
    unbindTexture: ce,
    compressedTexImage2D: st,
    compressedTexImage3D: y,
    texImage2D: Y,
    texImage3D: Z,
    pixelStorei: pe,
    getParameter: ie,
    updateUBOMapping: Pe,
    uniformBlockBinding: Ie,
    texStorage2D: te,
    texStorage3D: ee,
    texSubImage2D: _,
    texSubImage3D: R,
    compressedTexSubImage2D: P,
    compressedTexSubImage3D: K,
    scissor: oe,
    viewport: re,
    reset: Ye
  };
}
function ch(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Ve(), f = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new Set();
  let u;
  const p = /* @__PURE__ */ new WeakMap();
  let g = !1;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function S(y, _) {
    return g ? new OffscreenCanvas(y, _) : Vi("canvas");
  }
  function h(y, _, R) {
    let P = 1;
    const K = st(y);
    if ((K.width > R || K.height > R) && (P = R / Math.max(K.width, K.height)), P < 1)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) {
        const te = Math.floor(P * K.width), ee = Math.floor(P * K.height);
        u === void 0 && (u = S(te, ee));
        const Y = _ ? S(te, ee) : u;
        return Y.width = te, Y.height = ee, Y.getContext("2d").drawImage(y, 0, 0, te, ee), Ce("WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + te + "x" + ee + ")."), Y;
      } else
        return "data" in y && Ce("WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), y;
    return y;
  }
  function d(y) {
    return y.generateMipmaps;
  }
  function M(y) {
    i.generateMipmap(y);
  }
  function b(y) {
    return y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : y.isWebGL3DRenderTarget ? i.TEXTURE_3D : y.isWebGLArrayRenderTarget || y.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function E(y, _, R, P, K, te = !1) {
    if (y !== null) {
      if (i[y] !== void 0) return i[y];
      Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let ee;
    P && (ee = e.get("EXT_texture_norm16"), ee || Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let Y = _;
    if (_ === i.RED && (R === i.FLOAT && (Y = i.R32F), R === i.HALF_FLOAT && (Y = i.R16F), R === i.UNSIGNED_BYTE && (Y = i.R8), R === i.UNSIGNED_SHORT && ee && (Y = ee.R16_EXT), R === i.SHORT && ee && (Y = ee.R16_SNORM_EXT)), _ === i.RED_INTEGER && (R === i.UNSIGNED_BYTE && (Y = i.R8UI), R === i.UNSIGNED_SHORT && (Y = i.R16UI), R === i.UNSIGNED_INT && (Y = i.R32UI), R === i.BYTE && (Y = i.R8I), R === i.SHORT && (Y = i.R16I), R === i.INT && (Y = i.R32I)), _ === i.RG && (R === i.FLOAT && (Y = i.RG32F), R === i.HALF_FLOAT && (Y = i.RG16F), R === i.UNSIGNED_BYTE && (Y = i.RG8), R === i.UNSIGNED_SHORT && ee && (Y = ee.RG16_EXT), R === i.SHORT && ee && (Y = ee.RG16_SNORM_EXT)), _ === i.RG_INTEGER && (R === i.UNSIGNED_BYTE && (Y = i.RG8UI), R === i.UNSIGNED_SHORT && (Y = i.RG16UI), R === i.UNSIGNED_INT && (Y = i.RG32UI), R === i.BYTE && (Y = i.RG8I), R === i.SHORT && (Y = i.RG16I), R === i.INT && (Y = i.RG32I)), _ === i.RGB_INTEGER && (R === i.UNSIGNED_BYTE && (Y = i.RGB8UI), R === i.UNSIGNED_SHORT && (Y = i.RGB16UI), R === i.UNSIGNED_INT && (Y = i.RGB32UI), R === i.BYTE && (Y = i.RGB8I), R === i.SHORT && (Y = i.RGB16I), R === i.INT && (Y = i.RGB32I)), _ === i.RGBA_INTEGER && (R === i.UNSIGNED_BYTE && (Y = i.RGBA8UI), R === i.UNSIGNED_SHORT && (Y = i.RGBA16UI), R === i.UNSIGNED_INT && (Y = i.RGBA32UI), R === i.BYTE && (Y = i.RGBA8I), R === i.SHORT && (Y = i.RGBA16I), R === i.INT && (Y = i.RGBA32I)), _ === i.RGB && (R === i.UNSIGNED_SHORT && ee && (Y = ee.RGB16_EXT), R === i.SHORT && ee && (Y = ee.RGB16_SNORM_EXT), R === i.UNSIGNED_INT_5_9_9_9_REV && (Y = i.RGB9_E5), R === i.UNSIGNED_INT_10F_11F_11F_REV && (Y = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const Z = te ? si : He.getTransfer(K);
      R === i.FLOAT && (Y = i.RGBA32F), R === i.HALF_FLOAT && (Y = i.RGBA16F), R === i.UNSIGNED_BYTE && (Y = Z === Ze ? i.SRGB8_ALPHA8 : i.RGBA8), R === i.UNSIGNED_SHORT && ee && (Y = ee.RGBA16_EXT), R === i.SHORT && ee && (Y = ee.RGBA16_SNORM_EXT), R === i.UNSIGNED_SHORT_4_4_4_4 && (Y = i.RGBA4), R === i.UNSIGNED_SHORT_5_5_5_1 && (Y = i.RGB5_A1);
    }
    return (Y === i.R16F || Y === i.R32F || Y === i.RG16F || Y === i.RG32F || Y === i.RGBA16F || Y === i.RGBA32F) && e.get("EXT_color_buffer_float"), Y;
  }
  function C(y, _) {
    let R;
    return y ? _ === null || _ === 1014 || _ === 1020 ? R = i.DEPTH24_STENCIL8 : _ === 1015 ? R = i.DEPTH32F_STENCIL8 : _ === 1012 && (R = i.DEPTH24_STENCIL8, Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === 1014 || _ === 1020 ? R = i.DEPTH_COMPONENT24 : _ === 1015 ? R = i.DEPTH_COMPONENT32F : _ === 1012 && (R = i.DEPTH_COMPONENT16), R;
  }
  function T(y, _) {
    return d(y) === !0 || y.isFramebufferTexture && y.minFilter !== 1003 && y.minFilter !== 1006 ? Math.log2(Math.max(_.width, _.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? _.mipmaps.length : 1;
  }
  function w(y) {
    const _ = y.target;
    _.removeEventListener("dispose", w), A(_), _.isVideoTexture && f.delete(_), _.isHTMLTexture && m.delete(_);
  }
  function x(y) {
    const _ = y.target;
    _.removeEventListener("dispose", x), D(_);
  }
  function A(y) {
    const _ = n.get(y);
    if (_.__webglInit === void 0) return;
    const R = y.source, P = p.get(R);
    if (P) {
      const K = P[_.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && I(y), Object.keys(P).length === 0 && p.delete(R);
    }
    n.remove(y);
  }
  function I(y) {
    const _ = n.get(y);
    i.deleteTexture(_.__webglTexture);
    const R = y.source, P = p.get(R);
    delete P[_.__cacheKey], a.memory.textures--;
  }
  function D(y) {
    const _ = n.get(y);
    if (y.depthTexture && (y.depthTexture.dispose(), n.remove(y.depthTexture)), y.isWebGLCubeRenderTarget)
      for (let P = 0; P < 6; P++) {
        if (Array.isArray(_.__webglFramebuffer[P]))
          for (let K = 0; K < _.__webglFramebuffer[P].length; K++) i.deleteFramebuffer(_.__webglFramebuffer[P][K]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[P]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[P]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let P = 0; P < _.__webglFramebuffer.length; P++) i.deleteFramebuffer(_.__webglFramebuffer[P]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let P = 0; P < _.__webglColorRenderbuffer.length; P++)
          _.__webglColorRenderbuffer[P] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[P]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const R = y.textures;
    for (let P = 0, K = R.length; P < K; P++) {
      const te = n.get(R[P]);
      te.__webglTexture && (i.deleteTexture(te.__webglTexture), a.memory.textures--), n.remove(R[P]);
    }
    n.remove(y);
  }
  let O = 0;
  function W() {
    O = 0;
  }
  function q() {
    return O;
  }
  function U(y) {
    O = y;
  }
  function z() {
    const y = O;
    return y >= r.maxTextures && Ce("WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + r.maxTextures), O += 1, y;
  }
  function X(y) {
    const _ = [];
    return _.push(y.wrapS), _.push(y.wrapT), _.push(y.wrapR || 0), _.push(y.magFilter), _.push(y.minFilter), _.push(y.anisotropy), _.push(y.internalFormat), _.push(y.format), _.push(y.type), _.push(y.generateMipmaps), _.push(y.premultiplyAlpha), _.push(y.flipY), _.push(y.unpackAlignment), _.push(y.colorSpace), _.join();
  }
  function Q(y, _) {
    const R = n.get(y);
    if (y.isVideoTexture && $e(y), y.isRenderTargetTexture === !1 && y.isExternalTexture !== !0 && y.version > 0 && R.__version !== y.version) {
      const P = y.image;
      if (P === null)
        Ce("WebGLRenderer: Texture marked for update but no image data found.");
      else if (P.complete === !1)
        Ce("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ae(R, y, _);
        return;
      }
    } else y.isExternalTexture && (R.__webglTexture = y.sourceTexture ? y.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, R.__webglTexture, i.TEXTURE0 + _);
  }
  function ne(y, _) {
    const R = n.get(y);
    if (y.isRenderTargetTexture === !1 && y.version > 0 && R.__version !== y.version) {
      Ae(R, y, _);
      return;
    } else y.isExternalTexture && (R.__webglTexture = y.sourceTexture ? y.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, R.__webglTexture, i.TEXTURE0 + _);
  }
  function ue(y, _) {
    const R = n.get(y);
    if (y.isRenderTargetTexture === !1 && y.version > 0 && R.__version !== y.version) {
      Ae(R, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, R.__webglTexture, i.TEXTURE0 + _);
  }
  function xe(y, _) {
    const R = n.get(y);
    if (y.isCubeDepthTexture !== !0 && y.version > 0 && R.__version !== y.version) {
      ve(R, y, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, R.__webglTexture, i.TEXTURE0 + _);
  }
  const Se = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, ze = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, We = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function Re(y, _) {
    if (_.type === 1015 && e.has("OES_texture_float_linear") === !1 && (_.magFilter === 1006 || _.magFilter === 1007 || _.magFilter === 1005 || _.magFilter === 1008 || _.minFilter === 1006 || _.minFilter === 1007 || _.minFilter === 1005 || _.minFilter === 1008) && Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(y, i.TEXTURE_WRAP_S, Se[_.wrapS]), i.texParameteri(y, i.TEXTURE_WRAP_T, Se[_.wrapT]), (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, Se[_.wrapR]), i.texParameteri(y, i.TEXTURE_MAG_FILTER, ze[_.magFilter]), i.texParameteri(y, i.TEXTURE_MIN_FILTER, ze[_.minFilter]), _.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, We[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === 1003 || _.minFilter !== 1005 && _.minFilter !== 1008 || _.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const R = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(y, R.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function j(y, _) {
    let R = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, _.addEventListener("dispose", w));
    const P = _.source;
    let K = p.get(P);
    K === void 0 && (K = {}, p.set(P, K));
    const te = X(_);
    if (te !== y.__cacheKey) {
      K[te] === void 0 && (K[te] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, R = !0), K[te].usedTimes++;
      const ee = K[y.__cacheKey];
      ee !== void 0 && (K[y.__cacheKey].usedTimes--, ee.usedTimes === 0 && I(_)), y.__cacheKey = te, y.__webglTexture = K[te].texture;
    }
    return R;
  }
  function G(y, _, R) {
    return Math.floor(Math.floor(y / R) / _);
  }
  function ae(y, _, R, P) {
    const te = y.updateRanges;
    if (te.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, R, P, _.data);
    else {
      te.sort((pe, oe) => pe.start - oe.start);
      let ee = 0;
      for (let pe = 1; pe < te.length; pe++) {
        const oe = te[ee], re = te[pe], Pe = oe.start + oe.count, Ie = G(re.start, _.width, 4), Ye = G(oe.start, _.width, 4);
        re.start <= Pe + 1 && Ie === Ye && G(re.start + re.count - 1, _.width, 4) === Ie ? oe.count = Math.max(
          oe.count,
          re.start + re.count - oe.start
        ) : (++ee, te[ee] = re);
      }
      te.length = ee + 1;
      const Y = t.getParameter(i.UNPACK_ROW_LENGTH), Z = t.getParameter(i.UNPACK_SKIP_PIXELS), ie = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let pe = 0, oe = te.length; pe < oe; pe++) {
        const re = te[pe], Pe = Math.floor(re.start / 4), Ie = Math.ceil(re.count / 4), Ye = Pe % _.width, L = Math.floor(Pe / _.width), se = Ie, $ = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, Ye), t.pixelStorei(i.UNPACK_SKIP_ROWS, L), t.texSubImage2D(i.TEXTURE_2D, 0, Ye, L, se, $, R, P, _.data);
      }
      y.clearUpdateRanges(), t.pixelStorei(i.UNPACK_ROW_LENGTH, Y), t.pixelStorei(i.UNPACK_SKIP_PIXELS, Z), t.pixelStorei(i.UNPACK_SKIP_ROWS, ie);
    }
  }
  function Ae(y, _, R) {
    let P = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (P = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (P = i.TEXTURE_3D);
    const K = j(y, _), te = _.source;
    t.bindTexture(P, y.__webglTexture, i.TEXTURE0 + R);
    const ee = n.get(te);
    if (te.version !== ee.__version || K === !0) {
      if (t.activeTexture(i.TEXTURE0 + R), (typeof ImageBitmap < "u" && _.image instanceof ImageBitmap) === !1) {
        const $ = He.getPrimaries(He.workingColorSpace), me = _.colorSpace === tn ? null : He.getPrimaries(_.colorSpace), le = _.colorSpace === tn || $ === me ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, le);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment);
      let Z = h(_.image, !1, r.maxTextureSize);
      Z = ce(_, Z);
      const ie = s.convert(_.format, _.colorSpace), pe = s.convert(_.type);
      let oe = E(_.internalFormat, ie, pe, _.normalized, _.colorSpace, _.isVideoTexture);
      Re(P, _);
      let re;
      const Pe = _.mipmaps, Ie = _.isVideoTexture !== !0, Ye = ee.__version === void 0 || K === !0, L = te.dataReady, se = T(_, Z);
      if (_.isDepthTexture)
        oe = C(_.format === 1027, _.type), Ye && (Ie ? t.texStorage2D(i.TEXTURE_2D, 1, oe, Z.width, Z.height) : t.texImage2D(i.TEXTURE_2D, 0, oe, Z.width, Z.height, 0, ie, pe, null));
      else if (_.isDataTexture)
        if (Pe.length > 0) {
          Ie && Ye && t.texStorage2D(i.TEXTURE_2D, se, oe, Pe[0].width, Pe[0].height);
          for (let $ = 0, me = Pe.length; $ < me; $++)
            re = Pe[$], Ie ? L && t.texSubImage2D(i.TEXTURE_2D, $, 0, 0, re.width, re.height, ie, pe, re.data) : t.texImage2D(i.TEXTURE_2D, $, oe, re.width, re.height, 0, ie, pe, re.data);
          _.generateMipmaps = !1;
        } else
          Ie ? (Ye && t.texStorage2D(i.TEXTURE_2D, se, oe, Z.width, Z.height), L && ae(_, Z, ie, pe)) : t.texImage2D(i.TEXTURE_2D, 0, oe, Z.width, Z.height, 0, ie, pe, Z.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Ie && Ye && t.texStorage3D(i.TEXTURE_2D_ARRAY, se, oe, Pe[0].width, Pe[0].height, Z.depth);
          for (let $ = 0, me = Pe.length; $ < me; $++)
            if (re = Pe[$], _.format !== 1023)
              if (ie !== null)
                if (Ie) {
                  if (L)
                    if (_.layerUpdates.size > 0) {
                      const le = zs(re.width, re.height, _.format, _.type);
                      for (const J of _.layerUpdates) {
                        const Ee = re.data.subarray(
                          J * le / re.data.BYTES_PER_ELEMENT,
                          (J + 1) * le / re.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, J, re.width, re.height, 1, ie, Ee);
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, re.width, re.height, Z.depth, ie, re.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, $, oe, re.width, re.height, Z.depth, 0, re.data, 0, 0);
              else
                Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Ie ? L && t.texSubImage3D(i.TEXTURE_2D_ARRAY, $, 0, 0, 0, re.width, re.height, Z.depth, ie, pe, re.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, $, oe, re.width, re.height, Z.depth, 0, ie, pe, re.data);
        } else {
          Ie && Ye && t.texStorage2D(i.TEXTURE_2D, se, oe, Pe[0].width, Pe[0].height);
          for (let $ = 0, me = Pe.length; $ < me; $++)
            re = Pe[$], _.format !== 1023 ? ie !== null ? Ie ? L && t.compressedTexSubImage2D(i.TEXTURE_2D, $, 0, 0, re.width, re.height, ie, re.data) : t.compressedTexImage2D(i.TEXTURE_2D, $, oe, re.width, re.height, 0, re.data) : Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ie ? L && t.texSubImage2D(i.TEXTURE_2D, $, 0, 0, re.width, re.height, ie, pe, re.data) : t.texImage2D(i.TEXTURE_2D, $, oe, re.width, re.height, 0, ie, pe, re.data);
        }
      else if (_.isDataArrayTexture)
        if (Ie) {
          if (Ye && t.texStorage3D(i.TEXTURE_2D_ARRAY, se, oe, Z.width, Z.height, Z.depth), L)
            if (_.layerUpdates.size > 0) {
              const $ = zs(Z.width, Z.height, _.format, _.type);
              for (const me of _.layerUpdates) {
                const le = Z.data.subarray(
                  me * $ / Z.data.BYTES_PER_ELEMENT,
                  (me + 1) * $ / Z.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, me, Z.width, Z.height, 1, ie, pe, le);
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Z.width, Z.height, Z.depth, ie, pe, Z.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, oe, Z.width, Z.height, Z.depth, 0, ie, pe, Z.data);
      else if (_.isData3DTexture)
        Ie ? (Ye && t.texStorage3D(i.TEXTURE_3D, se, oe, Z.width, Z.height, Z.depth), L && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Z.width, Z.height, Z.depth, ie, pe, Z.data)) : t.texImage3D(i.TEXTURE_3D, 0, oe, Z.width, Z.height, Z.depth, 0, ie, pe, Z.data);
      else if (_.isFramebufferTexture) {
        if (Ye)
          if (Ie)
            t.texStorage2D(i.TEXTURE_2D, se, oe, Z.width, Z.height);
          else {
            let $ = Z.width, me = Z.height;
            for (let le = 0; le < se; le++)
              t.texImage2D(i.TEXTURE_2D, le, oe, $, me, 0, ie, pe, null), $ >>= 1, me >>= 1;
          }
      } else if (_.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const $ = i.canvas;
          if ($.hasAttribute("layoutsubtree") || $.setAttribute("layoutsubtree", "true"), Z.parentNode !== $) {
            $.appendChild(Z), m.add(_), $.onpaint = (Le) => {
              const ht = Le.changedElements;
              for (const je of m)
                ht.includes(je.image) && (je.needsUpdate = !0);
            }, $.requestPaint();
            return;
          }
          const me = 0, le = i.RGBA, J = i.RGBA, Ee = i.UNSIGNED_BYTE;
          i.texElementImage2D(i.TEXTURE_2D, me, le, J, Ee, Z), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (Pe.length > 0) {
        if (Ie && Ye) {
          const $ = st(Pe[0]);
          t.texStorage2D(i.TEXTURE_2D, se, oe, $.width, $.height);
        }
        for (let $ = 0, me = Pe.length; $ < me; $++)
          re = Pe[$], Ie ? L && t.texSubImage2D(i.TEXTURE_2D, $, 0, 0, ie, pe, re) : t.texImage2D(i.TEXTURE_2D, $, oe, ie, pe, re);
        _.generateMipmaps = !1;
      } else if (Ie) {
        if (Ye) {
          const $ = st(Z);
          t.texStorage2D(i.TEXTURE_2D, se, oe, $.width, $.height);
        }
        L && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ie, pe, Z);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, oe, ie, pe, Z);
      d(_) && M(P), ee.__version = te.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function ve(y, _, R) {
    if (_.image.length !== 6) return;
    const P = j(y, _), K = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + R);
    const te = n.get(K);
    if (K.version !== te.__version || P === !0) {
      t.activeTexture(i.TEXTURE0 + R);
      const ee = He.getPrimaries(He.workingColorSpace), Y = _.colorSpace === tn ? null : He.getPrimaries(_.colorSpace), Z = _.colorSpace === tn || ee === Y ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Z);
      const ie = _.isCompressedTexture || _.image[0].isCompressedTexture, pe = _.image[0] && _.image[0].isDataTexture, oe = [];
      for (let J = 0; J < 6; J++)
        !ie && !pe ? oe[J] = h(_.image[J], !0, r.maxCubemapSize) : oe[J] = pe ? _.image[J].image : _.image[J], oe[J] = ce(_, oe[J]);
      const re = oe[0], Pe = s.convert(_.format, _.colorSpace), Ie = s.convert(_.type), Ye = E(_.internalFormat, Pe, Ie, _.normalized, _.colorSpace), L = _.isVideoTexture !== !0, se = te.__version === void 0 || P === !0, $ = K.dataReady;
      let me = T(_, re);
      Re(i.TEXTURE_CUBE_MAP, _);
      let le;
      if (ie) {
        L && se && t.texStorage2D(i.TEXTURE_CUBE_MAP, me, Ye, re.width, re.height);
        for (let J = 0; J < 6; J++) {
          le = oe[J].mipmaps;
          for (let Ee = 0; Ee < le.length; Ee++) {
            const Le = le[Ee];
            _.format !== 1023 ? Pe !== null ? L ? $ && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, Ee, 0, 0, Le.width, Le.height, Pe, Le.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, Ee, Ye, Le.width, Le.height, 0, Le.data) : Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, Ee, 0, 0, Le.width, Le.height, Pe, Ie, Le.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, Ee, Ye, Le.width, Le.height, 0, Pe, Ie, Le.data);
          }
        }
      } else {
        if (le = _.mipmaps, L && se) {
          le.length > 0 && me++;
          const J = st(oe[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, me, Ye, J.width, J.height);
        }
        for (let J = 0; J < 6; J++)
          if (pe) {
            L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, oe[J].width, oe[J].height, Pe, Ie, oe[J].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, Ye, oe[J].width, oe[J].height, 0, Pe, Ie, oe[J].data);
            for (let Ee = 0; Ee < le.length; Ee++) {
              const ht = le[Ee].image[J].image;
              L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, Ee + 1, 0, 0, ht.width, ht.height, Pe, Ie, ht.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, Ee + 1, Ye, ht.width, ht.height, 0, Pe, Ie, ht.data);
            }
          } else {
            L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, Pe, Ie, oe[J]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, Ye, Pe, Ie, oe[J]);
            for (let Ee = 0; Ee < le.length; Ee++) {
              const Le = le[Ee];
              L ? $ && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, Ee + 1, 0, 0, Pe, Ie, Le.image[J]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, Ee + 1, Ye, Pe, Ie, Le.image[J]);
            }
          }
      }
      d(_) && M(i.TEXTURE_CUBE_MAP), te.__version = K.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function be(y, _, R, P, K, te) {
    const ee = s.convert(R.format, R.colorSpace), Y = s.convert(R.type), Z = E(R.internalFormat, ee, Y, R.normalized, R.colorSpace), ie = n.get(_), pe = n.get(R);
    if (pe.__renderTarget = _, !ie.__hasExternalTextures) {
      const oe = Math.max(1, _.width >> te), re = Math.max(1, _.height >> te);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? t.texImage3D(K, te, Z, oe, re, _.depth, 0, ee, Y, null) : t.texImage2D(K, te, Z, oe, re, 0, ee, Y, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, y), Ne(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, P, K, pe.__webglTexture, 0, lt(_)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, P, K, pe.__webglTexture, te), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function nt(y, _, R) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, y), _.depthBuffer) {
      const P = _.depthTexture, K = P && P.isDepthTexture ? P.type : null, te = C(_.stencilBuffer, K), ee = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      Ne(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, lt(_), te, _.width, _.height) : R ? i.renderbufferStorageMultisample(i.RENDERBUFFER, lt(_), te, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, te, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, ee, i.RENDERBUFFER, y);
    } else {
      const P = _.textures;
      for (let K = 0; K < P.length; K++) {
        const te = P[K], ee = s.convert(te.format, te.colorSpace), Y = s.convert(te.type), Z = E(te.internalFormat, ee, Y, te.normalized, te.colorSpace);
        Ne(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, lt(_), Z, _.width, _.height) : R ? i.renderbufferStorageMultisample(i.RENDERBUFFER, lt(_), Z, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, Z, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function we(y, _, R) {
    const P = _.isWebGLCubeRenderTarget === !0;
    if (t.bindFramebuffer(i.FRAMEBUFFER, y), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const K = n.get(_.depthTexture);
    if (K.__renderTarget = _, (!K.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), P) {
      if (K.__webglInit === void 0 && (K.__webglInit = !0, _.depthTexture.addEventListener("dispose", w)), K.__webglTexture === void 0) {
        K.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture), Re(i.TEXTURE_CUBE_MAP, _.depthTexture);
        const ie = s.convert(_.depthTexture.format), pe = s.convert(_.depthTexture.type);
        let oe;
        _.depthTexture.format === 1026 ? oe = i.DEPTH_COMPONENT24 : _.depthTexture.format === 1027 && (oe = i.DEPTH24_STENCIL8);
        for (let re = 0; re < 6; re++)
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, oe, _.width, _.height, 0, ie, pe, null);
      }
    } else
      Q(_.depthTexture, 0);
    const te = K.__webglTexture, ee = lt(_), Y = P ? i.TEXTURE_CUBE_MAP_POSITIVE_X + R : i.TEXTURE_2D, Z = _.depthTexture.format === 1027 ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (_.depthTexture.format === 1026)
      Ne(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Z, Y, te, 0, ee) : i.framebufferTexture2D(i.FRAMEBUFFER, Z, Y, te, 0);
    else if (_.depthTexture.format === 1027)
      Ne(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Z, Y, te, 0, ee) : i.framebufferTexture2D(i.FRAMEBUFFER, Z, Y, te, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ke(y) {
    const _ = n.get(y), R = y.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== y.depthTexture) {
      const P = y.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), P) {
        const K = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, P.removeEventListener("dispose", K);
        };
        P.addEventListener("dispose", K), _.__depthDisposeCallback = K;
      }
      _.__boundDepthTexture = P;
    }
    if (y.depthTexture && !_.__autoAllocateDepthBuffer)
      if (R)
        for (let P = 0; P < 6; P++)
          we(_.__webglFramebuffer[P], y, P);
      else {
        const P = y.texture.mipmaps;
        P && P.length > 0 ? we(_.__webglFramebuffer[0], y, 0) : we(_.__webglFramebuffer, y, 0);
      }
    else if (R) {
      _.__webglDepthbuffer = [];
      for (let P = 0; P < 6; P++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[P]), _.__webglDepthbuffer[P] === void 0)
          _.__webglDepthbuffer[P] = i.createRenderbuffer(), nt(_.__webglDepthbuffer[P], y, !1);
        else {
          const K = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, te = _.__webglDepthbuffer[P];
          i.bindRenderbuffer(i.RENDERBUFFER, te), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, te);
        }
    } else {
      const P = y.texture.mipmaps;
      if (P && P.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
        _.__webglDepthbuffer = i.createRenderbuffer(), nt(_.__webglDepthbuffer, y, !1);
      else {
        const K = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, te = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, te), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, te);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Qe(y, _, R) {
    const P = n.get(y);
    _ !== void 0 && be(P.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), R !== void 0 && Ke(y);
  }
  function Be(y) {
    const _ = y.texture, R = n.get(y), P = n.get(_);
    y.addEventListener("dispose", x);
    const K = y.textures, te = y.isWebGLCubeRenderTarget === !0, ee = K.length > 1;
    if (ee || (P.__webglTexture === void 0 && (P.__webglTexture = i.createTexture()), P.__version = _.version, a.memory.textures++), te) {
      R.__webglFramebuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          R.__webglFramebuffer[Y] = [];
          for (let Z = 0; Z < _.mipmaps.length; Z++)
            R.__webglFramebuffer[Y][Z] = i.createFramebuffer();
        } else
          R.__webglFramebuffer[Y] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        R.__webglFramebuffer = [];
        for (let Y = 0; Y < _.mipmaps.length; Y++)
          R.__webglFramebuffer[Y] = i.createFramebuffer();
      } else
        R.__webglFramebuffer = i.createFramebuffer();
      if (ee)
        for (let Y = 0, Z = K.length; Y < Z; Y++) {
          const ie = n.get(K[Y]);
          ie.__webglTexture === void 0 && (ie.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (y.samples > 0 && Ne(y) === !1) {
        R.__webglMultisampledFramebuffer = i.createFramebuffer(), R.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, R.__webglMultisampledFramebuffer);
        for (let Y = 0; Y < K.length; Y++) {
          const Z = K[Y];
          R.__webglColorRenderbuffer[Y] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, R.__webglColorRenderbuffer[Y]);
          const ie = s.convert(Z.format, Z.colorSpace), pe = s.convert(Z.type), oe = E(Z.internalFormat, ie, pe, Z.normalized, Z.colorSpace, y.isXRRenderTarget === !0), re = lt(y);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, re, oe, y.width, y.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Y, i.RENDERBUFFER, R.__webglColorRenderbuffer[Y]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), y.depthBuffer && (R.__webglDepthRenderbuffer = i.createRenderbuffer(), nt(R.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (te) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, P.__webglTexture), Re(i.TEXTURE_CUBE_MAP, _);
      for (let Y = 0; Y < 6; Y++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let Z = 0; Z < _.mipmaps.length; Z++)
            be(R.__webglFramebuffer[Y][Z], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Z);
        else
          be(R.__webglFramebuffer[Y], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0);
      d(_) && M(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ee) {
      for (let Y = 0, Z = K.length; Y < Z; Y++) {
        const ie = K[Y], pe = n.get(ie);
        let oe = i.TEXTURE_2D;
        (y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (oe = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(oe, pe.__webglTexture), Re(oe, ie), be(R.__webglFramebuffer, y, ie, i.COLOR_ATTACHMENT0 + Y, oe, 0), d(ie) && M(oe);
      }
      t.unbindTexture();
    } else {
      let Y = i.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (Y = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(Y, P.__webglTexture), Re(Y, _), _.mipmaps && _.mipmaps.length > 0)
        for (let Z = 0; Z < _.mipmaps.length; Z++)
          be(R.__webglFramebuffer[Z], y, _, i.COLOR_ATTACHMENT0, Y, Z);
      else
        be(R.__webglFramebuffer, y, _, i.COLOR_ATTACHMENT0, Y, 0);
      d(_) && M(Y), t.unbindTexture();
    }
    y.depthBuffer && Ke(y);
  }
  function dt(y) {
    const _ = y.textures;
    for (let R = 0, P = _.length; R < P; R++) {
      const K = _[R];
      if (d(K)) {
        const te = b(y), ee = n.get(K).__webglTexture;
        t.bindTexture(te, ee), M(te), t.unbindTexture();
      }
    }
  }
  const it = [], St = [];
  function F(y) {
    if (y.samples > 0) {
      if (Ne(y) === !1) {
        const _ = y.textures, R = y.width, P = y.height;
        let K = i.COLOR_BUFFER_BIT;
        const te = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ee = n.get(y), Y = _.length > 1;
        if (Y)
          for (let ie = 0; ie < _.length; ie++)
            t.bindFramebuffer(i.FRAMEBUFFER, ee.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ee.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, ee.__webglMultisampledFramebuffer);
        const Z = y.texture.mipmaps;
        Z && Z.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ee.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ee.__webglFramebuffer);
        for (let ie = 0; ie < _.length; ie++) {
          if (y.resolveDepthBuffer && (y.depthBuffer && (K |= i.DEPTH_BUFFER_BIT), y.stencilBuffer && y.resolveStencilBuffer && (K |= i.STENCIL_BUFFER_BIT)), Y) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ee.__webglColorRenderbuffer[ie]);
            const pe = n.get(_[ie]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, pe, 0);
          }
          i.blitFramebuffer(0, 0, R, P, 0, 0, R, P, K, i.NEAREST), c === !0 && (it.length = 0, St.length = 0, it.push(i.COLOR_ATTACHMENT0 + ie), y.depthBuffer && y.resolveDepthBuffer === !1 && (it.push(te), St.push(te), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, St)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, it));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), Y)
          for (let ie = 0; ie < _.length; ie++) {
            t.bindFramebuffer(i.FRAMEBUFFER, ee.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.RENDERBUFFER, ee.__webglColorRenderbuffer[ie]);
            const pe = n.get(_[ie]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, ee.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ie, i.TEXTURE_2D, pe, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ee.__webglMultisampledFramebuffer);
      } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && c) {
        const _ = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function lt(y) {
    return Math.min(r.maxSamples, y.samples);
  }
  function Ne(y) {
    const _ = n.get(y);
    return y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function $e(y) {
    const _ = a.render.frame;
    f.get(y) !== _ && (f.set(y, _), y.update());
  }
  function ce(y, _) {
    const R = y.colorSpace, P = y.format, K = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || R !== ri && R !== tn && (He.getTransfer(R) === Ze ? (P !== 1023 || K !== 1009) && Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Xe("WebGLTextures: Unsupported texture color space:", R)), _;
  }
  function st(y) {
    return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (l.width = y.naturalWidth || y.width, l.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (l.width = y.displayWidth, l.height = y.displayHeight) : (l.width = y.width, l.height = y.height), l;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = W, this.getTextureUnits = q, this.setTextureUnits = U, this.setTexture2D = Q, this.setTexture2DArray = ne, this.setTexture3D = ue, this.setTextureCube = xe, this.rebindTextures = Qe, this.setupRenderTarget = Be, this.updateRenderTargetMipmap = dt, this.updateMultisampleRenderTarget = F, this.setupDepthRenderbuffer = Ke, this.setupFrameBufferTexture = be, this.useMultisampledRTT = Ne, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function Ba(i, e) {
  function t(n, r = tn) {
    let s;
    const a = He.getTransfer(r);
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
      if (a === Ze)
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
        if (n === 36196 || n === 37492) return a === Ze ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return s.COMPRESSED_R11_EAC;
        if (n === 37489) return s.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return s.COMPRESSED_RG11_EAC;
        if (n === 37491) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === Ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return a === Ze ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
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
const uh = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, dh = `
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
class hh {
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
      const n = new Kr(e.texture);
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
      const t = e.cameras[0].viewport, n = new Wt({
        vertexShader: uh,
        fragmentShader: dh,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new kt(new Yn(20, 20), n);
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
class fh extends gn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, f = null, m = null, u = null, p = null, g = null;
    const S = typeof XRWebGLBinding < "u", h = new hh(), d = {}, M = t.getContextAttributes();
    let b = null, E = null;
    const C = [], T = [], w = new Ve();
    let x = null;
    const A = new Ft();
    A.viewport = new ot();
    const I = new Ft();
    I.viewport = new ot();
    const D = [A, I], O = new Pa();
    let W = null, q = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(j) {
      let G = C[j];
      return G === void 0 && (G = new Oi(), C[j] = G), G.getTargetRaySpace();
    }, this.getControllerGrip = function(j) {
      let G = C[j];
      return G === void 0 && (G = new Oi(), C[j] = G), G.getGripSpace();
    }, this.getHand = function(j) {
      let G = C[j];
      return G === void 0 && (G = new Oi(), C[j] = G), G.getHandSpace();
    };
    function U(j) {
      const G = T.indexOf(j.inputSource);
      if (G === -1)
        return;
      const ae = C[G];
      ae !== void 0 && (ae.update(j.inputSource, j.frame, l || a), ae.dispatchEvent({ type: j.type, data: j.inputSource }));
    }
    function z() {
      r.removeEventListener("select", U), r.removeEventListener("selectstart", U), r.removeEventListener("selectend", U), r.removeEventListener("squeeze", U), r.removeEventListener("squeezestart", U), r.removeEventListener("squeezeend", U), r.removeEventListener("end", z), r.removeEventListener("inputsourceschange", X);
      for (let j = 0; j < C.length; j++) {
        const G = T[j];
        G !== null && (T[j] = null, C[j].disconnect(G));
      }
      W = null, q = null, h.reset();
      for (const j in d)
        delete d[j];
      e.setRenderTarget(b), p = null, u = null, m = null, r = null, E = null, Re.stop(), n.isPresenting = !1, e.setPixelRatio(x), e.setSize(w.width, w.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(j) {
      s = j, n.isPresenting === !0 && Ce("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(j) {
      o = j, n.isPresenting === !0 && Ce("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(j) {
      l = j;
    }, this.getBaseLayer = function() {
      return u !== null ? u : p;
    }, this.getBinding = function() {
      return m === null && S && (m = new XRWebGLBinding(r, t)), m;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(j) {
      if (r = j, r !== null) {
        if (b = e.getRenderTarget(), r.addEventListener("select", U), r.addEventListener("selectstart", U), r.addEventListener("selectend", U), r.addEventListener("squeeze", U), r.addEventListener("squeezestart", U), r.addEventListener("squeezeend", U), r.addEventListener("end", z), r.addEventListener("inputsourceschange", X), M.xrCompatible !== !0 && await t.makeXRCompatible(), x = e.getPixelRatio(), e.getSize(w), S && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ae = null, Ae = null, ve = null;
          M.depth && (ve = M.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ae = M.stencil ? 1027 : 1026, Ae = M.stencil ? 1020 : 1014);
          const be = {
            colorFormat: t.RGBA8,
            depthFormat: ve,
            scaleFactor: s
          };
          m = this.getBinding(), u = m.createProjectionLayer(be), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), E = new Ht(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new bn(u.textureWidth, u.textureHeight, Ae, void 0, void 0, void 0, void 0, void 0, void 0, ae),
              stencilBuffer: M.stencil,
              colorSpace: e.outputColorSpace,
              samples: M.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const ae = {
            antialias: M.antialias,
            alpha: !0,
            depth: M.depth,
            stencil: M.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, t, ae), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), E = new Ht(
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
        E.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), Re.setContext(r), Re.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return h.getDepthTexture();
    };
    function X(j) {
      for (let G = 0; G < j.removed.length; G++) {
        const ae = j.removed[G], Ae = T.indexOf(ae);
        Ae >= 0 && (T[Ae] = null, C[Ae].disconnect(ae));
      }
      for (let G = 0; G < j.added.length; G++) {
        const ae = j.added[G];
        let Ae = T.indexOf(ae);
        if (Ae === -1) {
          for (let be = 0; be < C.length; be++)
            if (be >= T.length) {
              T.push(ae), Ae = be;
              break;
            } else if (T[be] === null) {
              T[be] = ae, Ae = be;
              break;
            }
          if (Ae === -1) break;
        }
        const ve = C[Ae];
        ve && ve.connect(ae);
      }
    }
    const Q = new B(), ne = new B();
    function ue(j, G, ae) {
      Q.setFromMatrixPosition(G.matrixWorld), ne.setFromMatrixPosition(ae.matrixWorld);
      const Ae = Q.distanceTo(ne), ve = G.projectionMatrix.elements, be = ae.projectionMatrix.elements, nt = ve[14] / (ve[10] - 1), we = ve[14] / (ve[10] + 1), Ke = (ve[9] + 1) / ve[5], Qe = (ve[9] - 1) / ve[5], Be = (ve[8] - 1) / ve[0], dt = (be[8] + 1) / be[0], it = nt * Be, St = nt * dt, F = Ae / (-Be + dt), lt = F * -Be;
      if (G.matrixWorld.decompose(j.position, j.quaternion, j.scale), j.translateX(lt), j.translateZ(F), j.matrixWorld.compose(j.position, j.quaternion, j.scale), j.matrixWorldInverse.copy(j.matrixWorld).invert(), ve[10] === -1)
        j.projectionMatrix.copy(G.projectionMatrix), j.projectionMatrixInverse.copy(G.projectionMatrixInverse);
      else {
        const Ne = nt + F, $e = we + F, ce = it - lt, st = St + (Ae - lt), y = Ke * we / $e * Ne, _ = Qe * we / $e * Ne;
        j.projectionMatrix.makePerspective(ce, st, y, _, Ne, $e), j.projectionMatrixInverse.copy(j.projectionMatrix).invert();
      }
    }
    function xe(j, G) {
      G === null ? j.matrixWorld.copy(j.matrix) : j.matrixWorld.multiplyMatrices(G.matrixWorld, j.matrix), j.matrixWorldInverse.copy(j.matrixWorld).invert();
    }
    this.updateCamera = function(j) {
      if (r === null) return;
      let G = j.near, ae = j.far;
      h.texture !== null && (h.depthNear > 0 && (G = h.depthNear), h.depthFar > 0 && (ae = h.depthFar)), O.near = I.near = A.near = G, O.far = I.far = A.far = ae, (W !== O.near || q !== O.far) && (r.updateRenderState({
        depthNear: O.near,
        depthFar: O.far
      }), W = O.near, q = O.far), O.layers.mask = j.layers.mask | 6, A.layers.mask = O.layers.mask & -5, I.layers.mask = O.layers.mask & -3;
      const Ae = j.parent, ve = O.cameras;
      xe(O, Ae);
      for (let be = 0; be < ve.length; be++)
        xe(ve[be], Ae);
      ve.length === 2 ? ue(O, A, I) : O.projectionMatrix.copy(A.projectionMatrix), Se(j, O, Ae);
    };
    function Se(j, G, ae) {
      ae === null ? j.matrix.copy(G.matrixWorld) : (j.matrix.copy(ae.matrixWorld), j.matrix.invert(), j.matrix.multiply(G.matrixWorld)), j.matrix.decompose(j.position, j.quaternion, j.scale), j.updateMatrixWorld(!0), j.projectionMatrix.copy(G.projectionMatrix), j.projectionMatrixInverse.copy(G.projectionMatrixInverse), j.isPerspectiveCamera && (j.fov = Ur * 2 * Math.atan(1 / j.projectionMatrix.elements[5]), j.zoom = 1);
    }
    this.getCamera = function() {
      return O;
    }, this.getFoveation = function() {
      if (!(u === null && p === null))
        return c;
    }, this.setFoveation = function(j) {
      c = j, u !== null && (u.fixedFoveation = j), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = j);
    }, this.hasDepthSensing = function() {
      return h.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return h.getMesh(O);
    }, this.getCameraTexture = function(j) {
      return d[j];
    };
    let ze = null;
    function We(j, G) {
      if (f = G.getViewerPose(l || a), g = G, f !== null) {
        const ae = f.views;
        p !== null && (e.setRenderTargetFramebuffer(E, p.framebuffer), e.setRenderTarget(E));
        let Ae = !1;
        ae.length !== O.cameras.length && (O.cameras.length = 0, Ae = !0);
        for (let we = 0; we < ae.length; we++) {
          const Ke = ae[we];
          let Qe = null;
          if (p !== null)
            Qe = p.getViewport(Ke);
          else {
            const dt = m.getViewSubImage(u, Ke);
            Qe = dt.viewport, we === 0 && (e.setRenderTargetTextures(
              E,
              dt.colorTexture,
              dt.depthStencilTexture
            ), e.setRenderTarget(E));
          }
          let Be = D[we];
          Be === void 0 && (Be = new Ft(), Be.layers.enable(we), Be.viewport = new ot(), D[we] = Be), Be.matrix.fromArray(Ke.transform.matrix), Be.matrix.decompose(Be.position, Be.quaternion, Be.scale), Be.projectionMatrix.fromArray(Ke.projectionMatrix), Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(), Be.viewport.set(Qe.x, Qe.y, Qe.width, Qe.height), we === 0 && (O.matrix.copy(Be.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), Ae === !0 && O.cameras.push(Be);
        }
        const ve = r.enabledFeatures;
        if (ve && ve.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && S) {
          m = n.getBinding();
          const we = m.getDepthInformation(ae[0]);
          we && we.isValid && we.texture && h.init(we, r.renderState);
        }
        if (ve && ve.includes("camera-access") && S) {
          e.state.unbindTexture(), m = n.getBinding();
          for (let we = 0; we < ae.length; we++) {
            const Ke = ae[we].camera;
            if (Ke) {
              let Qe = d[Ke];
              Qe || (Qe = new Kr(), d[Ke] = Qe);
              const Be = m.getCameraImage(Ke);
              Qe.sourceTexture = Be;
            }
          }
        }
      }
      for (let ae = 0; ae < C.length; ae++) {
        const Ae = T[ae], ve = C[ae];
        Ae !== null && ve !== void 0 && ve.update(Ae, G, l || a);
      }
      ze && ze(j, G), G.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: G }), g = null;
    }
    const Re = new Da();
    Re.setAnimationLoop(We), this.setAnimationLoop = function(j) {
      ze = j;
    }, this.dispose = function() {
    };
  }
}
const ph = /* @__PURE__ */ new at(), Oa = /* @__PURE__ */ new De();
Oa.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function mh(i, e) {
  function t(h, d) {
    h.matrixAutoUpdate === !0 && h.updateMatrix(), d.value.copy(h.matrix);
  }
  function n(h, d) {
    d.color.getRGB(h.fogColor.value, ya(i)), d.isFog ? (h.fogNear.value = d.near, h.fogFar.value = d.far) : d.isFogExp2 && (h.fogDensity.value = d.density);
  }
  function r(h, d, M, b, E) {
    d.isNodeMaterial ? d.uniformsNeedUpdate = !1 : d.isMeshBasicMaterial ? s(h, d) : d.isMeshLambertMaterial ? (s(h, d), d.envMap && (h.envMapIntensity.value = d.envMapIntensity)) : d.isMeshToonMaterial ? (s(h, d), m(h, d)) : d.isMeshPhongMaterial ? (s(h, d), f(h, d), d.envMap && (h.envMapIntensity.value = d.envMapIntensity)) : d.isMeshStandardMaterial ? (s(h, d), u(h, d), d.isMeshPhysicalMaterial && p(h, d, E)) : d.isMeshMatcapMaterial ? (s(h, d), g(h, d)) : d.isMeshDepthMaterial ? s(h, d) : d.isMeshDistanceMaterial ? (s(h, d), S(h, d)) : d.isMeshNormalMaterial ? s(h, d) : d.isLineBasicMaterial ? (a(h, d), d.isLineDashedMaterial && o(h, d)) : d.isPointsMaterial ? c(h, d, M, b) : d.isSpriteMaterial ? l(h, d) : d.isShadowMaterial ? (h.color.value.copy(d.color), h.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function s(h, d) {
    h.opacity.value = d.opacity, d.color && h.diffuse.value.copy(d.color), d.emissive && h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (h.map.value = d.map, t(d.map, h.mapTransform)), d.alphaMap && (h.alphaMap.value = d.alphaMap, t(d.alphaMap, h.alphaMapTransform)), d.bumpMap && (h.bumpMap.value = d.bumpMap, t(d.bumpMap, h.bumpMapTransform), h.bumpScale.value = d.bumpScale, d.side === 1 && (h.bumpScale.value *= -1)), d.normalMap && (h.normalMap.value = d.normalMap, t(d.normalMap, h.normalMapTransform), h.normalScale.value.copy(d.normalScale), d.side === 1 && h.normalScale.value.negate()), d.displacementMap && (h.displacementMap.value = d.displacementMap, t(d.displacementMap, h.displacementMapTransform), h.displacementScale.value = d.displacementScale, h.displacementBias.value = d.displacementBias), d.emissiveMap && (h.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, h.emissiveMapTransform)), d.specularMap && (h.specularMap.value = d.specularMap, t(d.specularMap, h.specularMapTransform)), d.alphaTest > 0 && (h.alphaTest.value = d.alphaTest);
    const M = e.get(d), b = M.envMap, E = M.envMapRotation;
    b && (h.envMap.value = b, h.envMapRotation.value.setFromMatrix4(ph.makeRotationFromEuler(E)).transpose(), b.isCubeTexture && b.isRenderTargetTexture === !1 && h.envMapRotation.value.premultiply(Oa), h.reflectivity.value = d.reflectivity, h.ior.value = d.ior, h.refractionRatio.value = d.refractionRatio), d.lightMap && (h.lightMap.value = d.lightMap, h.lightMapIntensity.value = d.lightMapIntensity, t(d.lightMap, h.lightMapTransform)), d.aoMap && (h.aoMap.value = d.aoMap, h.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, h.aoMapTransform));
  }
  function a(h, d) {
    h.diffuse.value.copy(d.color), h.opacity.value = d.opacity, d.map && (h.map.value = d.map, t(d.map, h.mapTransform));
  }
  function o(h, d) {
    h.dashSize.value = d.dashSize, h.totalSize.value = d.dashSize + d.gapSize, h.scale.value = d.scale;
  }
  function c(h, d, M, b) {
    h.diffuse.value.copy(d.color), h.opacity.value = d.opacity, h.size.value = d.size * M, h.scale.value = b * 0.5, d.map && (h.map.value = d.map, t(d.map, h.uvTransform)), d.alphaMap && (h.alphaMap.value = d.alphaMap, t(d.alphaMap, h.alphaMapTransform)), d.alphaTest > 0 && (h.alphaTest.value = d.alphaTest);
  }
  function l(h, d) {
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
function _h(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(M, b) {
    const E = b.program;
    n.uniformBlockBinding(M, E);
  }
  function l(M, b) {
    let E = r[M.id];
    E === void 0 && (g(M), E = f(M), r[M.id] = E, M.addEventListener("dispose", h));
    const C = b.program;
    n.updateUBOMapping(M, C);
    const T = e.render.frame;
    s[M.id] !== T && (u(M), s[M.id] = T);
  }
  function f(M) {
    const b = m();
    M.__bindingPointIndex = b;
    const E = i.createBuffer(), C = M.__size, T = M.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, C, T), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, b, E), E;
  }
  function m() {
    for (let M = 0; M < o; M++)
      if (a.indexOf(M) === -1)
        return a.push(M), M;
    return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(M) {
    const b = r[M.id], E = M.uniforms, C = M.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let T = 0, w = E.length; T < w; T++) {
      const x = Array.isArray(E[T]) ? E[T] : [E[T]];
      for (let A = 0, I = x.length; A < I; A++) {
        const D = x[A];
        if (p(D, T, A, C) === !0) {
          const O = D.__offset, W = Array.isArray(D.value) ? D.value : [D.value];
          let q = 0;
          for (let U = 0; U < W.length; U++) {
            const z = W[U], X = S(z);
            typeof z == "number" || typeof z == "boolean" ? (D.__data[0] = z, i.bufferSubData(i.UNIFORM_BUFFER, O + q, D.__data)) : z.isMatrix3 ? (D.__data[0] = z.elements[0], D.__data[1] = z.elements[1], D.__data[2] = z.elements[2], D.__data[3] = 0, D.__data[4] = z.elements[3], D.__data[5] = z.elements[4], D.__data[6] = z.elements[5], D.__data[7] = 0, D.__data[8] = z.elements[6], D.__data[9] = z.elements[7], D.__data[10] = z.elements[8], D.__data[11] = 0) : ArrayBuffer.isView(z) ? D.__data.set(new z.constructor(z.buffer, z.byteOffset, D.__data.length)) : (z.toArray(D.__data, q), q += X.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, O, D.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(M, b, E, C) {
    const T = M.value, w = b + "_" + E;
    if (C[w] === void 0)
      return typeof T == "number" || typeof T == "boolean" ? C[w] = T : ArrayBuffer.isView(T) ? C[w] = T.slice() : C[w] = T.clone(), !0;
    {
      const x = C[w];
      if (typeof T == "number" || typeof T == "boolean") {
        if (x !== T)
          return C[w] = T, !0;
      } else {
        if (ArrayBuffer.isView(T))
          return !0;
        if (x.equals(T) === !1)
          return x.copy(T), !0;
      }
    }
    return !1;
  }
  function g(M) {
    const b = M.uniforms;
    let E = 0;
    const C = 16;
    for (let w = 0, x = b.length; w < x; w++) {
      const A = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let I = 0, D = A.length; I < D; I++) {
        const O = A[I], W = Array.isArray(O.value) ? O.value : [O.value];
        for (let q = 0, U = W.length; q < U; q++) {
          const z = W[q], X = S(z), Q = E % C, ne = Q % X.boundary, ue = Q + ne;
          E += ne, ue !== 0 && C - ue < X.storage && (E += C - ue), O.__data = new Float32Array(X.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = E, E += X.storage;
        }
      }
    }
    const T = E % C;
    return T > 0 && (E += C - T), M.__size = E, M.__cache = {}, this;
  }
  function S(M) {
    const b = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof M == "number" || typeof M == "boolean" ? (b.boundary = 4, b.storage = 4) : M.isVector2 ? (b.boundary = 8, b.storage = 8) : M.isVector3 || M.isColor ? (b.boundary = 16, b.storage = 12) : M.isVector4 ? (b.boundary = 16, b.storage = 16) : M.isMatrix3 ? (b.boundary = 48, b.storage = 48) : M.isMatrix4 ? (b.boundary = 64, b.storage = 64) : M.isTexture ? Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(M) ? (b.boundary = 16, b.storage = M.byteLength) : Ce("WebGLRenderer: Unsupported uniform value type.", M), b;
  }
  function h(M) {
    const b = M.target;
    b.removeEventListener("dispose", h);
    const E = a.indexOf(b.__bindingPointIndex);
    a.splice(E, 1), i.deleteBuffer(r[b.id]), delete r[b.id], delete s[b.id];
  }
  function d() {
    for (const M in r)
      i.deleteBuffer(r[M]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: d
  };
}
const gh = new Uint16Array([
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
let Kt = null;
function xh() {
  return Kt === null && (Kt = new ga(gh, 16, 16, 1030, 1016), Kt.name = "DFG_LUT", Kt.minFilter = 1006, Kt.magFilter = 1006, Kt.wrapS = 1001, Kt.wrapT = 1001, Kt.generateMipmaps = !1, Kt.needsUpdate = !0), Kt;
}
class Ga {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = ua(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
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
    ]), M = new Uint32Array(4), b = new Int32Array(4), E = new B();
    let C = null, T = null;
    const w = [], x = [];
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
    const I = this;
    let D = !1, O = null;
    this._outputColorSpace = Lt;
    let W = 0, q = 0, U = null, z = -1, X = null;
    const Q = new ot(), ne = new ot();
    let ue = null;
    const xe = new Ge(0);
    let Se = 0, ze = t.width, We = t.height, Re = 1, j = null, G = null;
    const ae = new ot(0, 0, ze, We), Ae = new ot(0, 0, ze, We);
    let ve = !1;
    const be = new $i();
    let nt = !1, we = !1;
    const Ke = new at(), Qe = new B(), Be = new ot(), dt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let it = !1;
    function St() {
      return U === null ? Re : 1;
    }
    let F = n;
    function lt(v, N) {
      return t.getContext(v, N);
    }
    try {
      const v = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: f,
        failIfMajorPerformanceCaveat: m
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${qi}`), t.addEventListener("webglcontextlost", J, !1), t.addEventListener("webglcontextrestored", Ee, !1), t.addEventListener("webglcontextcreationerror", Le, !1), F === null) {
        const N = "webgl2";
        if (F = lt(N, v), F === null)
          throw lt(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw Xe("WebGLRenderer: " + v.message), v;
    }
    let Ne, $e, ce, st, y, _, R, P, K, te, ee, Y, Z, ie, pe, oe, re, Pe, Ie, Ye, L, se, $;
    function me() {
      Ne = new vu(F), Ne.init(), L = new Ba(F, Ne), $e = new du(F, Ne, e, L), ce = new lh(F, Ne), $e.reversedDepthBuffer && u && ce.buffers.depth.setReversed(!0), st = new Eu(F), y = new Kd(), _ = new ch(F, Ne, ce, y, $e, L, st), R = new xu(I), P = new Ao(F), se = new cu(F, P), K = new Mu(F, P, st, se), te = new Tu(F, K, P, se, st), Pe = new yu(F, $e, _), pe = new hu(y), ee = new Yd(I, R, Ne, $e, se, pe), Y = new mh(I, y), Z = new $d(), ie = new nh(Ne), re = new lu(I, R, ce, te, g, c), oe = new oh(I, te, $e), $ = new _h(F, st, $e, ce), Ie = new uu(F, Ne, st), Ye = new Su(F, Ne, st), st.programs = ee.programs, I.capabilities = $e, I.extensions = Ne, I.properties = y, I.renderLists = Z, I.shadowMap = oe, I.state = ce, I.info = st;
    }
    me(), S !== 1009 && (A = new Au(S, t.width, t.height, r, s));
    const le = new fh(I, F);
    this.xr = le, this.getContext = function() {
      return F;
    }, this.getContextAttributes = function() {
      return F.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Ne.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Ne.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return Re;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (Re = v, this.setSize(ze, We, !1));
    }, this.getSize = function(v) {
      return v.set(ze, We);
    }, this.setSize = function(v, N, k = !0) {
      if (le.isPresenting) {
        Ce("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      ze = v, We = N, t.width = Math.floor(v * Re), t.height = Math.floor(N * Re), k === !0 && (t.style.width = v + "px", t.style.height = N + "px"), A !== null && A.setSize(t.width, t.height), this.setViewport(0, 0, v, N);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(ze * Re, We * Re).floor();
    }, this.setDrawingBufferSize = function(v, N, k) {
      ze = v, We = N, Re = k, t.width = Math.floor(v * k), t.height = Math.floor(N * k), this.setViewport(0, 0, v, N);
    }, this.setEffects = function(v) {
      if (S === 1009) {
        Xe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (v) {
        for (let N = 0; N < v.length; N++)
          if (v[N].isOutputPass === !0) {
            Ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
      }
      A.setEffects(v || []);
    }, this.getCurrentViewport = function(v) {
      return v.copy(Q);
    }, this.getViewport = function(v) {
      return v.copy(ae);
    }, this.setViewport = function(v, N, k, V) {
      v.isVector4 ? ae.set(v.x, v.y, v.z, v.w) : ae.set(v, N, k, V), ce.viewport(Q.copy(ae).multiplyScalar(Re).round());
    }, this.getScissor = function(v) {
      return v.copy(Ae);
    }, this.setScissor = function(v, N, k, V) {
      v.isVector4 ? Ae.set(v.x, v.y, v.z, v.w) : Ae.set(v, N, k, V), ce.scissor(ne.copy(Ae).multiplyScalar(Re).round());
    }, this.getScissorTest = function() {
      return ve;
    }, this.setScissorTest = function(v) {
      ce.setScissorTest(ve = v);
    }, this.setOpaqueSort = function(v) {
      j = v;
    }, this.setTransparentSort = function(v) {
      G = v;
    }, this.getClearColor = function(v) {
      return v.copy(re.getClearColor());
    }, this.setClearColor = function() {
      re.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return re.getClearAlpha();
    }, this.setClearAlpha = function() {
      re.setClearAlpha(...arguments);
    }, this.clear = function(v = !0, N = !0, k = !0) {
      let V = 0;
      if (v) {
        let H = !1;
        if (U !== null) {
          const fe = U.texture.format;
          H = h.has(fe);
        }
        if (H) {
          const fe = U.texture.type, ge = d.has(fe), he = re.getClearColor(), Me = re.getClearAlpha(), ye = he.r, Fe = he.g, Oe = he.b;
          ge ? (M[0] = ye, M[1] = Fe, M[2] = Oe, M[3] = Me, F.clearBufferuiv(F.COLOR, 0, M)) : (b[0] = ye, b[1] = Fe, b[2] = Oe, b[3] = Me, F.clearBufferiv(F.COLOR, 0, b));
        } else
          V |= F.COLOR_BUFFER_BIT;
      }
      N && (V |= F.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), k && (V |= F.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), V !== 0 && F.clear(V);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(v) {
      v.setRenderer(this), O = v;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", J, !1), t.removeEventListener("webglcontextrestored", Ee, !1), t.removeEventListener("webglcontextcreationerror", Le, !1), re.dispose(), Z.dispose(), ie.dispose(), y.dispose(), R.dispose(), te.dispose(), se.dispose(), $.dispose(), ee.dispose(), le.dispose(), le.removeEventListener("sessionstart", as), le.removeEventListener("sessionend", os), xn.stop();
    };
    function J(v) {
      v.preventDefault(), Ir("WebGLRenderer: Context Lost."), D = !0;
    }
    function Ee() {
      Ir("WebGLRenderer: Context Restored."), D = !1;
      const v = st.autoReset, N = oe.enabled, k = oe.autoUpdate, V = oe.needsUpdate, H = oe.type;
      me(), st.autoReset = v, oe.enabled = N, oe.autoUpdate = k, oe.needsUpdate = V, oe.type = H;
    }
    function Le(v) {
      Xe("WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function ht(v) {
      const N = v.target;
      N.removeEventListener("dispose", ht), je(N);
    }
    function je(v) {
      Zt(v), y.remove(v);
    }
    function Zt(v) {
      const N = y.get(v).programs;
      N !== void 0 && (N.forEach(function(k) {
        ee.releaseProgram(k);
      }), v.isShaderMaterial && ee.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, N, k, V, H, fe) {
      N === null && (N = dt);
      const ge = H.isMesh && H.matrixWorld.determinant() < 0, he = Ha(v, N, k, V, H);
      ce.setMaterial(V, ge);
      let Me = k.index, ye = 1;
      if (V.wireframe === !0) {
        if (Me = K.getWireframeAttribute(k), Me === void 0) return;
        ye = 2;
      }
      const Fe = k.drawRange, Oe = k.attributes.position;
      let Te = Fe.start * ye, Je = (Fe.start + Fe.count) * ye;
      fe !== null && (Te = Math.max(Te, fe.start * ye), Je = Math.min(Je, (fe.start + fe.count) * ye)), Me !== null ? (Te = Math.max(Te, 0), Je = Math.min(Je, Me.count)) : Oe != null && (Te = Math.max(Te, 0), Je = Math.min(Je, Oe.count));
      const ft = Je - Te;
      if (ft < 0 || ft === 1 / 0) return;
      se.setup(H, V, he, k, Me);
      let ct, et = Ie;
      if (Me !== null && (ct = P.get(Me), et = Ye, et.setIndex(ct)), H.isMesh)
        V.wireframe === !0 ? (ce.setLineWidth(V.wireframeLinewidth * St()), et.setMode(F.LINES)) : et.setMode(F.TRIANGLES);
      else if (H.isLine) {
        let Et = V.linewidth;
        Et === void 0 && (Et = 1), ce.setLineWidth(Et * St()), H.isLineSegments ? et.setMode(F.LINES) : H.isLineLoop ? et.setMode(F.LINE_LOOP) : et.setMode(F.LINE_STRIP);
      } else H.isPoints ? et.setMode(F.POINTS) : H.isSprite && et.setMode(F.TRIANGLES);
      if (H.isBatchedMesh)
        if (Ne.get("WEBGL_multi_draw"))
          et.renderMultiDraw(H._multiDrawStarts, H._multiDrawCounts, H._multiDrawCount);
        else {
          const Et = H._multiDrawStarts, _e = H._multiDrawCounts, wt = H._multiDrawCount, qe = Me ? P.get(Me).bytesPerElement : 1, Ut = y.get(V).currentProgram.getUniforms();
          for (let qt = 0; qt < wt; qt++)
            Ut.setValue(F, "_gl_DrawID", qt), et.render(Et[qt] / qe, _e[qt]);
        }
      else if (H.isInstancedMesh)
        et.renderInstances(Te, ft, H.count);
      else if (k.isInstancedBufferGeometry) {
        const Et = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, _e = Math.min(k.instanceCount, Et);
        et.renderInstances(Te, ft, _e);
      } else
        et.render(Te, ft);
    };
    function Xt(v, N, k) {
      v.transparent === !0 && v.side === 2 && v.forceSinglePass === !1 ? (v.side = 1, v.needsUpdate = !0, li(v, N, k), v.side = 0, v.needsUpdate = !0, li(v, N, k), v.side = 2) : li(v, N, k);
    }
    this.compile = function(v, N, k = null) {
      k === null && (k = v), T = ie.get(k), T.init(N), x.push(T), k.traverseVisible(function(H) {
        H.isLight && H.layers.test(N.layers) && (T.pushLight(H), H.castShadow && T.pushShadow(H));
      }), v !== k && v.traverseVisible(function(H) {
        H.isLight && H.layers.test(N.layers) && (T.pushLight(H), H.castShadow && T.pushShadow(H));
      }), T.setupLights();
      const V = /* @__PURE__ */ new Set();
      return v.traverse(function(H) {
        if (!(H.isMesh || H.isPoints || H.isLine || H.isSprite))
          return;
        const fe = H.material;
        if (fe)
          if (Array.isArray(fe))
            for (let ge = 0; ge < fe.length; ge++) {
              const he = fe[ge];
              Xt(he, k, H), V.add(he);
            }
          else
            Xt(fe, k, H), V.add(fe);
      }), T = x.pop(), V;
    }, this.compileAsync = function(v, N, k = null) {
      const V = this.compile(v, N, k);
      return new Promise((H) => {
        function fe() {
          if (V.forEach(function(ge) {
            y.get(ge).currentProgram.isReady() && V.delete(ge);
          }), V.size === 0) {
            H(v);
            return;
          }
          setTimeout(fe, 10);
        }
        Ne.get("KHR_parallel_shader_compile") !== null ? fe() : setTimeout(fe, 10);
      });
    };
    let er = null;
    function za(v) {
      er && er(v);
    }
    function as() {
      xn.stop();
    }
    function os() {
      xn.start();
    }
    const xn = new Da();
    xn.setAnimationLoop(za), typeof self < "u" && xn.setContext(self), this.setAnimationLoop = function(v) {
      er = v, le.setAnimationLoop(v), v === null ? xn.stop() : xn.start();
    }, le.addEventListener("sessionstart", as), le.addEventListener("sessionend", os), this.render = function(v, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (D === !0) return;
      O !== null && O.renderStart(v, N);
      const k = le.enabled === !0 && le.isPresenting === !0, V = A !== null && (U === null || k) && A.begin(I, U);
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), le.enabled === !0 && le.isPresenting === !0 && (A === null || A.isCompositing() === !1) && (le.cameraAutoUpdate === !0 && le.updateCamera(N), N = le.getCamera()), v.isScene === !0 && v.onBeforeRender(I, v, N, U), T = ie.get(v, x.length), T.init(N), T.state.textureUnits = _.getTextureUnits(), x.push(T), Ke.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), be.setFromProjectionMatrix(Ke, 2e3, N.reversedDepth), we = this.localClippingEnabled, nt = pe.init(this.clippingPlanes, we), C = Z.get(v, w.length), C.init(), w.push(C), le.enabled === !0 && le.isPresenting === !0) {
        const ge = I.xr.getDepthSensingMesh();
        ge !== null && tr(ge, N, -1 / 0, I.sortObjects);
      }
      tr(v, N, 0, I.sortObjects), C.finish(), I.sortObjects === !0 && C.sort(j, G), it = le.enabled === !1 || le.isPresenting === !1 || le.hasDepthSensing() === !1, it && re.addToRenderList(C, v), this.info.render.frame++, nt === !0 && pe.beginShadows();
      const H = T.state.shadowsArray;
      if (oe.render(H, v, N), nt === !0 && pe.endShadows(), this.info.autoReset === !0 && this.info.reset(), (V && A.hasRenderPass()) === !1) {
        const ge = C.opaque, he = C.transmissive;
        if (T.setupLights(), N.isArrayCamera) {
          const Me = N.cameras;
          if (he.length > 0)
            for (let ye = 0, Fe = Me.length; ye < Fe; ye++) {
              const Oe = Me[ye];
              cs(ge, he, v, Oe);
            }
          it && re.render(v);
          for (let ye = 0, Fe = Me.length; ye < Fe; ye++) {
            const Oe = Me[ye];
            ls(C, v, Oe, Oe.viewport);
          }
        } else
          he.length > 0 && cs(ge, he, v, N), it && re.render(v), ls(C, v, N);
      }
      U !== null && q === 0 && (_.updateMultisampleRenderTarget(U), _.updateRenderTargetMipmap(U)), V && A.end(I), v.isScene === !0 && v.onAfterRender(I, v, N), se.resetDefaultState(), z = -1, X = null, x.pop(), x.length > 0 ? (T = x[x.length - 1], _.setTextureUnits(T.state.textureUnits), nt === !0 && pe.setGlobalState(I.clippingPlanes, T.state.camera)) : T = null, w.pop(), w.length > 0 ? C = w[w.length - 1] : C = null, O !== null && O.renderEnd();
    };
    function tr(v, N, k, V) {
      if (v.visible === !1) return;
      if (v.layers.test(N.layers)) {
        if (v.isGroup)
          k = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(N);
        else if (v.isLightProbeGrid)
          T.pushLightProbeGrid(v);
        else if (v.isLight)
          T.pushLight(v), v.castShadow && T.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || be.intersectsSprite(v)) {
            V && Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ke);
            const ge = te.update(v), he = v.material;
            he.visible && C.push(v, ge, he, k, Be.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || be.intersectsObject(v))) {
          const ge = te.update(v), he = v.material;
          if (V && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Be.copy(v.boundingSphere.center)) : (ge.boundingSphere === null && ge.computeBoundingSphere(), Be.copy(ge.boundingSphere.center)), Be.applyMatrix4(v.matrixWorld).applyMatrix4(Ke)), Array.isArray(he)) {
            const Me = ge.groups;
            for (let ye = 0, Fe = Me.length; ye < Fe; ye++) {
              const Oe = Me[ye], Te = he[Oe.materialIndex];
              Te && Te.visible && C.push(v, ge, Te, k, Be.z, Oe);
            }
          } else he.visible && C.push(v, ge, he, k, Be.z, null);
        }
      }
      const fe = v.children;
      for (let ge = 0, he = fe.length; ge < he; ge++)
        tr(fe[ge], N, k, V);
    }
    function ls(v, N, k, V) {
      const { opaque: H, transmissive: fe, transparent: ge } = v;
      T.setupLightsView(k), nt === !0 && pe.setGlobalState(I.clippingPlanes, k), V && ce.viewport(Q.copy(V)), H.length > 0 && oi(H, N, k), fe.length > 0 && oi(fe, N, k), ge.length > 0 && oi(ge, N, k), ce.buffers.depth.setTest(!0), ce.buffers.depth.setMask(!0), ce.buffers.color.setMask(!0), ce.setPolygonOffset(!1);
    }
    function cs(v, N, k, V) {
      if ((k.isScene === !0 ? k.overrideMaterial : null) !== null)
        return;
      if (T.state.transmissionRenderTarget[V.id] === void 0) {
        const Te = Ne.has("EXT_color_buffer_half_float") || Ne.has("EXT_color_buffer_float");
        T.state.transmissionRenderTarget[V.id] = new Ht(1, 1, {
          generateMipmaps: !0,
          type: Te ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, $e.samples),
          // to avoid feedback loops, the transmission render target requires a resolve, see #26177
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: He.workingColorSpace
        });
      }
      const fe = T.state.transmissionRenderTarget[V.id], ge = V.viewport || Q;
      fe.setSize(ge.z * I.transmissionResolutionScale, ge.w * I.transmissionResolutionScale);
      const he = I.getRenderTarget(), Me = I.getActiveCubeFace(), ye = I.getActiveMipmapLevel();
      I.setRenderTarget(fe), I.getClearColor(xe), Se = I.getClearAlpha(), Se < 1 && I.setClearColor(16777215, 0.5), I.clear(), it && re.render(k);
      const Fe = I.toneMapping;
      I.toneMapping = 0;
      const Oe = V.viewport;
      if (V.viewport !== void 0 && (V.viewport = void 0), T.setupLightsView(V), nt === !0 && pe.setGlobalState(I.clippingPlanes, V), oi(v, k, V), _.updateMultisampleRenderTarget(fe), _.updateRenderTargetMipmap(fe), Ne.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Te = !1;
        for (let Je = 0, ft = N.length; Je < ft; Je++) {
          const ct = N[Je], { object: et, geometry: Et, material: _e, group: wt } = ct;
          if (_e.side === 2 && et.layers.test(V.layers)) {
            const qe = _e.side;
            _e.side = 1, _e.needsUpdate = !0, us(et, k, V, Et, _e, wt), _e.side = qe, _e.needsUpdate = !0, Te = !0;
          }
        }
        Te === !0 && (_.updateMultisampleRenderTarget(fe), _.updateRenderTargetMipmap(fe));
      }
      I.setRenderTarget(he, Me, ye), I.setClearColor(xe, Se), Oe !== void 0 && (V.viewport = Oe), I.toneMapping = Fe;
    }
    function oi(v, N, k) {
      const V = N.isScene === !0 ? N.overrideMaterial : null;
      for (let H = 0, fe = v.length; H < fe; H++) {
        const ge = v[H], { object: he, geometry: Me, group: ye } = ge;
        let Fe = ge.material;
        Fe.allowOverride === !0 && V !== null && (Fe = V), he.layers.test(k.layers) && us(he, N, k, Me, Fe, ye);
      }
    }
    function us(v, N, k, V, H, fe) {
      v.onBeforeRender(I, N, k, V, H, fe), v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), H.onBeforeRender(I, N, k, V, v, fe), H.transparent === !0 && H.side === 2 && H.forceSinglePass === !1 ? (H.side = 1, H.needsUpdate = !0, I.renderBufferDirect(k, N, V, H, v, fe), H.side = 0, H.needsUpdate = !0, I.renderBufferDirect(k, N, V, H, v, fe), H.side = 2) : I.renderBufferDirect(k, N, V, H, v, fe), v.onAfterRender(I, N, k, V, H, fe);
    }
    function li(v, N, k) {
      N.isScene !== !0 && (N = dt);
      const V = y.get(v), H = T.state.lights, fe = T.state.shadowsArray, ge = H.state.version, he = ee.getParameters(v, H.state, fe, N, k, T.state.lightProbeGridArray), Me = ee.getProgramCacheKey(he);
      let ye = V.programs;
      V.environment = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? N.environment : null, V.fog = N.fog;
      const Fe = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap;
      V.envMap = R.get(v.envMap || V.environment, Fe), V.envMapRotation = V.environment !== null && v.envMap === null ? N.environmentRotation : v.envMapRotation, ye === void 0 && (v.addEventListener("dispose", ht), ye = /* @__PURE__ */ new Map(), V.programs = ye);
      let Oe = ye.get(Me);
      if (Oe !== void 0) {
        if (V.currentProgram === Oe && V.lightsStateVersion === ge)
          return hs(v, he), Oe;
      } else
        he.uniforms = ee.getUniforms(v), O !== null && v.isNodeMaterial && O.build(v, k, he), v.onBeforeCompile(he, I), Oe = ee.acquireProgram(he, Me), ye.set(Me, Oe), V.uniforms = he.uniforms;
      const Te = V.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Te.clippingPlanes = pe.uniform), hs(v, he), V.needsLights = Wa(v), V.lightsStateVersion = ge, V.needsLights && (Te.ambientLightColor.value = H.state.ambient, Te.lightProbe.value = H.state.probe, Te.directionalLights.value = H.state.directional, Te.directionalLightShadows.value = H.state.directionalShadow, Te.spotLights.value = H.state.spot, Te.spotLightShadows.value = H.state.spotShadow, Te.rectAreaLights.value = H.state.rectArea, Te.ltc_1.value = H.state.rectAreaLTC1, Te.ltc_2.value = H.state.rectAreaLTC2, Te.pointLights.value = H.state.point, Te.pointLightShadows.value = H.state.pointShadow, Te.hemisphereLights.value = H.state.hemi, Te.directionalShadowMatrix.value = H.state.directionalShadowMatrix, Te.spotLightMatrix.value = H.state.spotLightMatrix, Te.spotLightMap.value = H.state.spotLightMap, Te.pointShadowMatrix.value = H.state.pointShadowMatrix), V.lightProbeGrid = T.state.lightProbeGridArray.length > 0, V.currentProgram = Oe, V.uniformsList = null, Oe;
    }
    function ds(v) {
      if (v.uniformsList === null) {
        const N = v.currentProgram.getUniforms();
        v.uniformsList = zi.seqWithValue(N.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function hs(v, N) {
      const k = y.get(v);
      k.outputColorSpace = N.outputColorSpace, k.batching = N.batching, k.batchingColor = N.batchingColor, k.instancing = N.instancing, k.instancingColor = N.instancingColor, k.instancingMorph = N.instancingMorph, k.skinning = N.skinning, k.morphTargets = N.morphTargets, k.morphNormals = N.morphNormals, k.morphColors = N.morphColors, k.morphTargetsCount = N.morphTargetsCount, k.numClippingPlanes = N.numClippingPlanes, k.numIntersection = N.numClipIntersection, k.vertexAlphas = N.vertexAlphas, k.vertexTangents = N.vertexTangents, k.toneMapping = N.toneMapping;
    }
    function Va(v, N) {
      if (v.length === 0) return null;
      if (v.length === 1)
        return v[0].texture !== null ? v[0] : null;
      E.setFromMatrixPosition(N.matrixWorld);
      for (let k = 0, V = v.length; k < V; k++) {
        const H = v[k];
        if (H.texture !== null && H.boundingBox.containsPoint(E)) return H;
      }
      return null;
    }
    function Ha(v, N, k, V, H) {
      N.isScene !== !0 && (N = dt), _.resetTextureUnits();
      const fe = N.fog, ge = V.isMeshStandardMaterial || V.isMeshLambertMaterial || V.isMeshPhongMaterial ? N.environment : null, he = U === null ? I.outputColorSpace : U.isXRRenderTarget === !0 ? U.texture.colorSpace : He.workingColorSpace, Me = V.isMeshStandardMaterial || V.isMeshLambertMaterial && !V.envMap || V.isMeshPhongMaterial && !V.envMap, ye = R.get(V.envMap || ge, Me), Fe = V.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, Oe = !!k.attributes.tangent && (!!V.normalMap || V.anisotropy > 0), Te = !!k.morphAttributes.position, Je = !!k.morphAttributes.normal, ft = !!k.morphAttributes.color;
      let ct = 0;
      V.toneMapped && (U === null || U.isXRRenderTarget === !0) && (ct = I.toneMapping);
      const et = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, Et = et !== void 0 ? et.length : 0, _e = y.get(V), wt = T.state.lights;
      if (nt === !0 && (we === !0 || v !== X)) {
        const rt = v === X && V.id === z;
        pe.setState(V, v, rt);
      }
      let qe = !1;
      V.version === _e.__version ? (_e.needsLights && _e.lightsStateVersion !== wt.state.version || _e.outputColorSpace !== he || H.isBatchedMesh && _e.batching === !1 || !H.isBatchedMesh && _e.batching === !0 || H.isBatchedMesh && _e.batchingColor === !0 && H.colorTexture === null || H.isBatchedMesh && _e.batchingColor === !1 && H.colorTexture !== null || H.isInstancedMesh && _e.instancing === !1 || !H.isInstancedMesh && _e.instancing === !0 || H.isSkinnedMesh && _e.skinning === !1 || !H.isSkinnedMesh && _e.skinning === !0 || H.isInstancedMesh && _e.instancingColor === !0 && H.instanceColor === null || H.isInstancedMesh && _e.instancingColor === !1 && H.instanceColor !== null || H.isInstancedMesh && _e.instancingMorph === !0 && H.morphTexture === null || H.isInstancedMesh && _e.instancingMorph === !1 && H.morphTexture !== null || _e.envMap !== ye || V.fog === !0 && _e.fog !== fe || _e.numClippingPlanes !== void 0 && (_e.numClippingPlanes !== pe.numPlanes || _e.numIntersection !== pe.numIntersection) || _e.vertexAlphas !== Fe || _e.vertexTangents !== Oe || _e.morphTargets !== Te || _e.morphNormals !== Je || _e.morphColors !== ft || _e.toneMapping !== ct || _e.morphTargetsCount !== Et || !!_e.lightProbeGrid != T.state.lightProbeGridArray.length > 0) && (qe = !0) : (qe = !0, _e.__version = V.version);
      let Ut = _e.currentProgram;
      qe === !0 && (Ut = li(V, N, H), O && V.isNodeMaterial && O.onUpdateProgram(V, Ut, _e));
      let qt = !1, an = !1, Rn = !1;
      const tt = Ut.getUniforms(), pt = _e.uniforms;
      if (ce.useProgram(Ut.program) && (qt = !0, an = !0, Rn = !0), V.id !== z && (z = V.id, an = !0), _e.needsLights) {
        const rt = Va(T.state.lightProbeGridArray, H);
        _e.lightProbeGrid !== rt && (_e.lightProbeGrid = rt, an = !0);
      }
      if (qt || X !== v) {
        ce.buffers.depth.getReversed() && v.reversedDepth !== !0 && (v._reversedDepth = !0, v.updateProjectionMatrix()), tt.setValue(F, "projectionMatrix", v.projectionMatrix), tt.setValue(F, "viewMatrix", v.matrixWorldInverse);
        const ln = tt.map.cameraPosition;
        ln !== void 0 && ln.setValue(F, Qe.setFromMatrixPosition(v.matrixWorld)), $e.logarithmicDepthBuffer && tt.setValue(
          F,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (V.isMeshPhongMaterial || V.isMeshToonMaterial || V.isMeshLambertMaterial || V.isMeshBasicMaterial || V.isMeshStandardMaterial || V.isShaderMaterial) && tt.setValue(F, "isOrthographic", v.isOrthographicCamera === !0), X !== v && (X = v, an = !0, Rn = !0);
      }
      if (_e.needsLights && (wt.state.directionalShadowMap.length > 0 && tt.setValue(F, "directionalShadowMap", wt.state.directionalShadowMap, _), wt.state.spotShadowMap.length > 0 && tt.setValue(F, "spotShadowMap", wt.state.spotShadowMap, _), wt.state.pointShadowMap.length > 0 && tt.setValue(F, "pointShadowMap", wt.state.pointShadowMap, _)), H.isSkinnedMesh) {
        tt.setOptional(F, H, "bindMatrix"), tt.setOptional(F, H, "bindMatrixInverse");
        const rt = H.skeleton;
        rt && (rt.boneTexture === null && rt.computeBoneTexture(), tt.setValue(F, "boneTexture", rt.boneTexture, _));
      }
      H.isBatchedMesh && (tt.setOptional(F, H, "batchingTexture"), tt.setValue(F, "batchingTexture", H._matricesTexture, _), tt.setOptional(F, H, "batchingIdTexture"), tt.setValue(F, "batchingIdTexture", H._indirectTexture, _), tt.setOptional(F, H, "batchingColorTexture"), H._colorsTexture !== null && tt.setValue(F, "batchingColorTexture", H._colorsTexture, _));
      const on = k.morphAttributes;
      if ((on.position !== void 0 || on.normal !== void 0 || on.color !== void 0) && Pe.update(H, k, Ut), (an || _e.receiveShadow !== H.receiveShadow) && (_e.receiveShadow = H.receiveShadow, tt.setValue(F, "receiveShadow", H.receiveShadow)), (V.isMeshStandardMaterial || V.isMeshLambertMaterial || V.isMeshPhongMaterial) && V.envMap === null && N.environment !== null && (pt.envMapIntensity.value = N.environmentIntensity), pt.dfgLUT !== void 0 && (pt.dfgLUT.value = xh()), an) {
        if (tt.setValue(F, "toneMappingExposure", I.toneMappingExposure), _e.needsLights && ka(pt, Rn), fe && V.fog === !0 && Y.refreshFogUniforms(pt, fe), Y.refreshMaterialUniforms(pt, V, Re, We, T.state.transmissionRenderTarget[v.id]), _e.needsLights && _e.lightProbeGrid) {
          const rt = _e.lightProbeGrid;
          pt.probesSH.value = rt.texture, pt.probesMin.value.copy(rt.boundingBox.min), pt.probesMax.value.copy(rt.boundingBox.max), pt.probesResolution.value.copy(rt.resolution);
        }
        zi.upload(F, ds(_e), pt, _);
      }
      if (V.isShaderMaterial && V.uniformsNeedUpdate === !0 && (zi.upload(F, ds(_e), pt, _), V.uniformsNeedUpdate = !1), V.isSpriteMaterial && tt.setValue(F, "center", H.center), tt.setValue(F, "modelViewMatrix", H.modelViewMatrix), tt.setValue(F, "normalMatrix", H.normalMatrix), tt.setValue(F, "modelMatrix", H.matrixWorld), V.uniformsGroups !== void 0) {
        const rt = V.uniformsGroups;
        for (let ln = 0, Cn = rt.length; ln < Cn; ln++) {
          const fs = rt[ln];
          $.update(fs, Ut), $.bind(fs, Ut);
        }
      }
      return Ut;
    }
    function ka(v, N) {
      v.ambientLightColor.needsUpdate = N, v.lightProbe.needsUpdate = N, v.directionalLights.needsUpdate = N, v.directionalLightShadows.needsUpdate = N, v.pointLights.needsUpdate = N, v.pointLightShadows.needsUpdate = N, v.spotLights.needsUpdate = N, v.spotLightShadows.needsUpdate = N, v.rectAreaLights.needsUpdate = N, v.hemisphereLights.needsUpdate = N;
    }
    function Wa(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return W;
    }, this.getActiveMipmapLevel = function() {
      return q;
    }, this.getRenderTarget = function() {
      return U;
    }, this.setRenderTargetTextures = function(v, N, k) {
      const V = y.get(v);
      V.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1, V.__autoAllocateDepthBuffer === !1 && (V.__useRenderToTexture = !1), y.get(v.texture).__webglTexture = N, y.get(v.depthTexture).__webglTexture = V.__autoAllocateDepthBuffer ? void 0 : k, V.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(v, N) {
      const k = y.get(v);
      k.__webglFramebuffer = N, k.__useDefaultFramebuffer = N === void 0;
    };
    const Xa = F.createFramebuffer();
    this.setRenderTarget = function(v, N = 0, k = 0) {
      U = v, W = N, q = k;
      let V = null, H = !1, fe = !1;
      if (v) {
        const he = y.get(v);
        if (he.__useDefaultFramebuffer !== void 0) {
          ce.bindFramebuffer(F.FRAMEBUFFER, he.__webglFramebuffer), Q.copy(v.viewport), ne.copy(v.scissor), ue = v.scissorTest, ce.viewport(Q), ce.scissor(ne), ce.setScissorTest(ue), z = -1;
          return;
        } else if (he.__webglFramebuffer === void 0)
          _.setupRenderTarget(v);
        else if (he.__hasExternalTextures)
          _.rebindTextures(v, y.get(v.texture).__webglTexture, y.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Fe = v.depthTexture;
          if (he.__boundDepthTexture !== Fe) {
            if (Fe !== null && y.has(Fe) && (v.width !== Fe.image.width || v.height !== Fe.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            _.setupDepthRenderbuffer(v);
          }
        }
        const Me = v.texture;
        (Me.isData3DTexture || Me.isDataArrayTexture || Me.isCompressedArrayTexture) && (fe = !0);
        const ye = y.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(ye[N]) ? V = ye[N][k] : V = ye[N], H = !0) : v.samples > 0 && _.useMultisampledRTT(v) === !1 ? V = y.get(v).__webglMultisampledFramebuffer : Array.isArray(ye) ? V = ye[k] : V = ye, Q.copy(v.viewport), ne.copy(v.scissor), ue = v.scissorTest;
      } else
        Q.copy(ae).multiplyScalar(Re).floor(), ne.copy(Ae).multiplyScalar(Re).floor(), ue = ve;
      if (k !== 0 && (V = Xa), ce.bindFramebuffer(F.FRAMEBUFFER, V) && ce.drawBuffers(v, V), ce.viewport(Q), ce.scissor(ne), ce.setScissorTest(ue), H) {
        const he = y.get(v.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_CUBE_MAP_POSITIVE_X + N, he.__webglTexture, k);
      } else if (fe) {
        const he = N;
        for (let Me = 0; Me < v.textures.length; Me++) {
          const ye = y.get(v.textures[Me]);
          F.framebufferTextureLayer(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0 + Me, ye.__webglTexture, k, he);
        }
      } else if (v !== null && k !== 0) {
        const he = y.get(v.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, he.__webglTexture, k);
      }
      z = -1;
    }, this.readRenderTargetPixels = function(v, N, k, V, H, fe, ge, he = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Me = y.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ge !== void 0 && (Me = Me[ge]), Me) {
        ce.bindFramebuffer(F.FRAMEBUFFER, Me);
        try {
          const ye = v.textures[he], Fe = ye.format, Oe = ye.type;
          if (v.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + he), !$e.textureFormatReadable(Fe)) {
            Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!$e.textureTypeReadable(Oe)) {
            Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= v.width - V && k >= 0 && k <= v.height - H && F.readPixels(N, k, V, H, L.convert(Fe), L.convert(Oe), fe);
        } finally {
          const ye = U !== null ? y.get(U).__webglFramebuffer : null;
          ce.bindFramebuffer(F.FRAMEBUFFER, ye);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, N, k, V, H, fe, ge, he = 0) {
      if (!(v && v.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Me = y.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ge !== void 0 && (Me = Me[ge]), Me)
        if (N >= 0 && N <= v.width - V && k >= 0 && k <= v.height - H) {
          ce.bindFramebuffer(F.FRAMEBUFFER, Me);
          const ye = v.textures[he], Fe = ye.format, Oe = ye.type;
          if (v.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + he), !$e.textureFormatReadable(Fe))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!$e.textureTypeReadable(Oe))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Te = F.createBuffer();
          F.bindBuffer(F.PIXEL_PACK_BUFFER, Te), F.bufferData(F.PIXEL_PACK_BUFFER, fe.byteLength, F.STREAM_READ), F.readPixels(N, k, V, H, L.convert(Fe), L.convert(Oe), 0);
          const Je = U !== null ? y.get(U).__webglFramebuffer : null;
          ce.bindFramebuffer(F.FRAMEBUFFER, Je);
          const ft = F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return F.flush(), await Za(F, ft, 4), F.bindBuffer(F.PIXEL_PACK_BUFFER, Te), F.getBufferSubData(F.PIXEL_PACK_BUFFER, 0, fe), F.deleteBuffer(Te), F.deleteSync(ft), fe;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, N = null, k = 0) {
      const V = Math.pow(2, -k), H = Math.floor(v.image.width * V), fe = Math.floor(v.image.height * V), ge = N !== null ? N.x : 0, he = N !== null ? N.y : 0;
      _.setTexture2D(v, 0), F.copyTexSubImage2D(F.TEXTURE_2D, k, 0, 0, ge, he, H, fe), ce.unbindTexture();
    };
    const qa = F.createFramebuffer(), Ya = F.createFramebuffer();
    this.copyTextureToTexture = function(v, N, k = null, V = null, H = 0, fe = 0) {
      let ge, he, Me, ye, Fe, Oe, Te, Je, ft;
      const ct = v.isCompressedTexture ? v.mipmaps[fe] : v.image;
      if (k !== null)
        ge = k.max.x - k.min.x, he = k.max.y - k.min.y, Me = k.isBox3 ? k.max.z - k.min.z : 1, ye = k.min.x, Fe = k.min.y, Oe = k.isBox3 ? k.min.z : 0;
      else {
        const pt = Math.pow(2, -H);
        ge = Math.floor(ct.width * pt), he = Math.floor(ct.height * pt), v.isDataArrayTexture ? Me = ct.depth : v.isData3DTexture ? Me = Math.floor(ct.depth * pt) : Me = 1, ye = 0, Fe = 0, Oe = 0;
      }
      V !== null ? (Te = V.x, Je = V.y, ft = V.z) : (Te = 0, Je = 0, ft = 0);
      const et = L.convert(N.format), Et = L.convert(N.type);
      let _e;
      N.isData3DTexture ? (_.setTexture3D(N, 0), _e = F.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (_.setTexture2DArray(N, 0), _e = F.TEXTURE_2D_ARRAY) : (_.setTexture2D(N, 0), _e = F.TEXTURE_2D), ce.activeTexture(F.TEXTURE0), ce.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, N.flipY), ce.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), ce.pixelStorei(F.UNPACK_ALIGNMENT, N.unpackAlignment);
      const wt = ce.getParameter(F.UNPACK_ROW_LENGTH), qe = ce.getParameter(F.UNPACK_IMAGE_HEIGHT), Ut = ce.getParameter(F.UNPACK_SKIP_PIXELS), qt = ce.getParameter(F.UNPACK_SKIP_ROWS), an = ce.getParameter(F.UNPACK_SKIP_IMAGES);
      ce.pixelStorei(F.UNPACK_ROW_LENGTH, ct.width), ce.pixelStorei(F.UNPACK_IMAGE_HEIGHT, ct.height), ce.pixelStorei(F.UNPACK_SKIP_PIXELS, ye), ce.pixelStorei(F.UNPACK_SKIP_ROWS, Fe), ce.pixelStorei(F.UNPACK_SKIP_IMAGES, Oe);
      const Rn = v.isDataArrayTexture || v.isData3DTexture, tt = N.isDataArrayTexture || N.isData3DTexture;
      if (v.isDepthTexture) {
        const pt = y.get(v), on = y.get(N), rt = y.get(pt.__renderTarget), ln = y.get(on.__renderTarget);
        ce.bindFramebuffer(F.READ_FRAMEBUFFER, rt.__webglFramebuffer), ce.bindFramebuffer(F.DRAW_FRAMEBUFFER, ln.__webglFramebuffer);
        for (let Cn = 0; Cn < Me; Cn++)
          Rn && (F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, y.get(v).__webglTexture, H, Oe + Cn), F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, y.get(N).__webglTexture, fe, ft + Cn)), F.blitFramebuffer(ye, Fe, ge, he, Te, Je, ge, he, F.DEPTH_BUFFER_BIT, F.NEAREST);
        ce.bindFramebuffer(F.READ_FRAMEBUFFER, null), ce.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else if (H !== 0 || v.isRenderTargetTexture || y.has(v)) {
        const pt = y.get(v), on = y.get(N);
        ce.bindFramebuffer(F.READ_FRAMEBUFFER, qa), ce.bindFramebuffer(F.DRAW_FRAMEBUFFER, Ya);
        for (let rt = 0; rt < Me; rt++)
          Rn ? F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, pt.__webglTexture, H, Oe + rt) : F.framebufferTexture2D(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, pt.__webglTexture, H), tt ? F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, on.__webglTexture, fe, ft + rt) : F.framebufferTexture2D(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, on.__webglTexture, fe), H !== 0 ? F.blitFramebuffer(ye, Fe, ge, he, Te, Je, ge, he, F.COLOR_BUFFER_BIT, F.NEAREST) : tt ? F.copyTexSubImage3D(_e, fe, Te, Je, ft + rt, ye, Fe, ge, he) : F.copyTexSubImage2D(_e, fe, Te, Je, ye, Fe, ge, he);
        ce.bindFramebuffer(F.READ_FRAMEBUFFER, null), ce.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else
        tt ? v.isDataTexture || v.isData3DTexture ? F.texSubImage3D(_e, fe, Te, Je, ft, ge, he, Me, et, Et, ct.data) : N.isCompressedArrayTexture ? F.compressedTexSubImage3D(_e, fe, Te, Je, ft, ge, he, Me, et, ct.data) : F.texSubImage3D(_e, fe, Te, Je, ft, ge, he, Me, et, Et, ct) : v.isDataTexture ? F.texSubImage2D(F.TEXTURE_2D, fe, Te, Je, ge, he, et, Et, ct.data) : v.isCompressedTexture ? F.compressedTexSubImage2D(F.TEXTURE_2D, fe, Te, Je, ct.width, ct.height, et, ct.data) : F.texSubImage2D(F.TEXTURE_2D, fe, Te, Je, ge, he, et, Et, ct);
      ce.pixelStorei(F.UNPACK_ROW_LENGTH, wt), ce.pixelStorei(F.UNPACK_IMAGE_HEIGHT, qe), ce.pixelStorei(F.UNPACK_SKIP_PIXELS, Ut), ce.pixelStorei(F.UNPACK_SKIP_ROWS, qt), ce.pixelStorei(F.UNPACK_SKIP_IMAGES, an), fe === 0 && N.generateMipmaps && F.generateMipmap(_e), ce.unbindTexture();
    }, this.initRenderTarget = function(v) {
      y.get(v).__webglFramebuffer === void 0 && _.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? _.setTextureCube(v, 0) : v.isData3DTexture ? _.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? _.setTexture2DArray(v, 0) : _.setTexture2D(v, 0), ce.unbindTexture();
    }, this.resetState = function() {
      W = 0, q = 0, U = null, ce.reset(), se.reset();
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
    t.drawingBufferColorSpace = He._getDrawingBufferColorSpace(e), t.unpackColorSpace = He._getUnpackColorSpace();
  }
}
const ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  ArrayCamera: Pa,
  BackSide: 1,
  BasicDepthPacking: 3200,
  Box3: Wn,
  BoxGeometry: qn,
  BufferAttribute: Bt,
  BufferGeometry: Mt,
  ByteType: 1010,
  Camera: Qr,
  CineonToneMapping: 3,
  ClampToEdgeWrapping: 1001,
  Color: Ge,
  ColorManagement: He,
  ConstantAlphaFactor: 213,
  ConstantColorFactor: 211,
  CubeCamera: wa,
  CubeDepthTexture: Sa,
  CubeReflectionMapping: 301,
  CubeRefractionMapping: 302,
  CubeTexture: Yr,
  CubeUVReflectionMapping: 306,
  CullFaceBack: 1,
  CullFaceFront: 2,
  CullFaceNone: 0,
  CustomBlending: 5,
  CustomToneMapping: 5,
  CylinderGeometry: Zr,
  Data3DTexture: pa,
  DataArrayTexture: Vr,
  DataTexture: ga,
  DepthFormat: 1026,
  DepthStencilFormat: 1027,
  DepthTexture: bn,
  DirectionalLight: Gi,
  DoubleSide: 2,
  DstAlphaFactor: 206,
  DstColorFactor: 208,
  EdgesGeometry: xo,
  EqualCompare: 514,
  EqualDepth: 4,
  EquirectangularReflectionMapping: 303,
  EquirectangularRefractionMapping: 304,
  Euler: rn,
  EventDispatcher: gn,
  ExternalTexture: Kr,
  Float32BufferAttribute: ut,
  FloatType: 1015,
  Fog: Ki,
  FrontSide: 0,
  Frustum: $i,
  GLSL3: Fr,
  GreaterCompare: 516,
  GreaterDepth: 6,
  GreaterEqualCompare: 518,
  GreaterEqualDepth: 5,
  Group: Tn,
  HalfFloatType: 1016,
  HemisphereLight: Ca,
  ImageUtils: ha,
  IntType: 1013,
  KeepStencilOp: 7680,
  LatheGeometry: $r,
  Layers: Hr,
  LessCompare: 513,
  LessDepth: 2,
  LessEqualCompare: 515,
  LessEqualDepth: 3,
  Light: Jr,
  Line: va,
  LineBasicMaterial: xa,
  LineSegments: go,
  LinearFilter: 1006,
  LinearMipmapLinearFilter: 1008,
  LinearMipmapNearestFilter: 1007,
  LinearSRGBColorSpace: ri,
  LinearToneMapping: 1,
  LinearTransfer: si,
  Material: sn,
  Matrix2: Br,
  Matrix3: De,
  Matrix4: at,
  MaxEquation: 104,
  Mesh: kt,
  MeshBasicMaterial: Xr,
  MeshDepthMaterial: Aa,
  MeshDistanceMaterial: Ra,
  MeshStandardMaterial: Eo,
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
  NoColorSpace: tn,
  NoToneMapping: 0,
  NormalBlending: 1,
  NotEqualCompare: 517,
  NotEqualDepth: 7,
  Object3D: _t,
  ObjectSpaceNormalMap: 1,
  OneFactor: 201,
  OneMinusConstantAlphaFactor: 214,
  OneMinusConstantColorFactor: 212,
  OneMinusDstAlphaFactor: 207,
  OneMinusDstColorFactor: 209,
  OneMinusSrcAlphaFactor: 205,
  OneMinusSrcColorFactor: 203,
  OrthographicCamera: ji,
  PCFShadowMap: 1,
  PCFSoftShadowMap: 2,
  PMREMGenerator: Or,
  PerspectiveCamera: Ft,
  Plane: mn,
  PlaneGeometry: Yn,
  Points: Ma,
  PointsMaterial: qr,
  Quaternion: An,
  R11_EAC_Format: 37488,
  RED_GREEN_RGTC2_Format: 36285,
  RED_RGTC1_Format: 36283,
  REVISION: qi,
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
  RawShaderMaterial: ba,
  Ray: Zi,
  RedFormat: 1028,
  RedIntegerFormat: 1029,
  ReinhardToneMapping: 2,
  RenderTarget: fa,
  RepeatWrapping: 1e3,
  ReverseSubtractEquation: 102,
  SIGNED_R11_EAC_Format: 37489,
  SIGNED_RED_GREEN_RGTC2_Format: 36286,
  SIGNED_RED_RGTC1_Format: 36284,
  SIGNED_RG11_EAC_Format: 37491,
  SRGBColorSpace: Lt,
  SRGBTransfer: Ze,
  Scene: _a,
  ShaderChunk: Ue,
  ShaderLib: Vt,
  ShaderMaterial: Wt,
  ShadowMaterial: Ea,
  ShortType: 1011,
  Source: Yi,
  Sphere: Xn,
  SrcAlphaFactor: 204,
  SrcAlphaSaturateFactor: 210,
  SrcColorFactor: 202,
  StaticDrawUsage: 35044,
  SubtractEquation: 101,
  SubtractiveBlending: 3,
  TangentSpaceNormalMap: 0,
  Texture: bt,
  TorusGeometry: jr,
  Triangle: It,
  UVMapping: 300,
  Uint16BufferAttribute: kr,
  Uint32BufferAttribute: Wr,
  UniformsLib: de,
  UniformsUtils: Ta,
  UnsignedByteType: 1009,
  UnsignedInt101111Type: 35899,
  UnsignedInt248Type: 1020,
  UnsignedInt5999Type: 35902,
  UnsignedIntType: 1014,
  UnsignedShort4444Type: 1017,
  UnsignedShort5551Type: 1018,
  UnsignedShortType: 1012,
  VSMShadowMap: 3,
  Vector2: Ve,
  Vector3: B,
  Vector4: ot,
  WebGLCoordinateSystem: 2e3,
  WebGLCubeRenderTarget: es,
  WebGLRenderTarget: Ht,
  WebGLRenderer: Ga,
  WebGLUtils: Ba,
  WebGPUCoordinateSystem: 2001,
  WebXRController: Oi,
  ZeroFactor: 200,
  createCanvasElement: ua,
  error: Xe,
  log: Ir,
  warn: Ce,
  warnOnce: Hi
}, Symbol.toStringTag, { value: "Module" }));
function vh(i) {
  const e = {
    tread: new i.MeshStandardMaterial({ name: "rubber_tread", color: 2829874, roughness: 0.94, metalness: 0.02 }),
    sidewall: new i.MeshStandardMaterial({ name: "rubber_sidewall", color: 3488061, roughness: 0.86, metalness: 0.02, side: i.DoubleSide }),
    rim: new i.MeshStandardMaterial({ name: "steel_rim", color: 10133928, roughness: 0.42, metalness: 0.38 }),
    hub: new i.MeshStandardMaterial({ name: "steel_hub_dark", color: 6054504, roughness: 0.55, metalness: 0.35 }),
    accent: new i.MeshStandardMaterial({ name: "sensor_amber", color: 12595499, roughness: 0.4, metalness: 0.2 })
  }, t = new i.Group();
  t.name = "otr_tire";
  const n = new i.Group();
  n.name = "outer_shell", t.add(n);
  const r = (b, E) => new i.Vector2(b, E), s = [
    r(0.86, -0.56),
    r(1.24, -0.67),
    r(1.54, -0.6),
    r(1.7, -0.42),
    r(1.765, -0.22),
    r(1.78, 0),
    r(1.765, 0.22),
    r(1.7, 0.42),
    r(1.54, 0.6),
    r(1.24, 0.67),
    r(0.86, 0.56),
    r(0.86, 0.44),
    r(1.2, 0.52),
    r(1.47, 0.46),
    r(1.6, 0.3),
    r(1.63, 0),
    r(1.6, -0.3),
    r(1.47, -0.46),
    r(1.2, -0.52),
    r(0.86, -0.44),
    r(0.86, -0.56)
  ], a = new i.Mesh(new i.LatheGeometry(s, 96), e.sidewall);
  a.name = "carcass", n.add(a);
  const o = new i.Mesh(new i.CylinderGeometry(1.7, 1.7, 1.12, 96, 1, !0), e.tread);
  o.name = "crown_band", n.add(o);
  const c = new i.BoxGeometry(0.2, 0.62, 0.3), l = 30;
  for (let b = 0; b < 2; b++) {
    const E = b ? 1 : -1;
    for (let C = 0; C < l; C++) {
      const T = C / l * Math.PI * 2 + (b ? Math.PI / l : 0), w = new i.Object3D();
      w.rotation.y = T;
      const x = new i.Mesh(c, e.tread);
      x.name = `tread_lug_${b}_${C}`, x.position.set(1.7, E * 0.29, 0), x.rotation.x = E * 0.3, w.add(x), n.add(w);
    }
  }
  for (const b of [-1, 1]) {
    const E = new i.Mesh(new i.TorusGeometry(1.38, 0.028, 12, 96), e.sidewall);
    E.name = `sidewall_rib_${b > 0 ? "out" : "in"}`, E.rotation.x = Math.PI / 2, E.position.y = b * 0.585, n.add(E);
    const C = new i.Mesh(new i.TorusGeometry(0.9, 0.055, 12, 80), e.sidewall);
    C.name = `bead_ring_${b > 0 ? "out" : "in"}`, C.rotation.x = Math.PI / 2, C.position.y = b * 0.5, n.add(C);
  }
  const f = new i.Group();
  f.name = "wheel_assembly", t.add(f);
  const m = new i.Mesh(new i.CylinderGeometry(0.845, 0.845, 1.06, 64), e.rim);
  m.name = "rim_barrel", f.add(m);
  for (const b of [-1, 1]) {
    const E = new i.Mesh(new i.TorusGeometry(0.862, 0.05, 12, 64), e.rim);
    E.name = `rim_flange_${b > 0 ? "out" : "in"}`, E.rotation.x = Math.PI / 2, E.position.y = b * 0.52, f.add(E);
  }
  const u = new i.Mesh(new i.CylinderGeometry(0.56, 0.66, 0.16, 48), e.hub);
  u.name = "hub_plate", u.position.y = 0.4, f.add(u);
  const p = new i.Mesh(new i.CylinderGeometry(0.22, 0.2, 0.22, 40), e.hub);
  p.name = "hub_cap", p.position.y = 0.56, f.add(p);
  for (let b = 0; b < 12; b++) {
    const E = b / 12 * Math.PI * 2, C = new i.Mesh(new i.CylinderGeometry(0.068, 0.068, 0.15, 6), e.rim);
    C.name = `wheel_nut_${b}`, C.position.set(Math.cos(E) * 0.395, 0.53, Math.sin(E) * 0.395), f.add(C);
  }
  const g = new i.Mesh(new i.CylinderGeometry(0.58, 0.58, 0.08, 48), e.hub);
  g.name = "rim_disc_inboard", g.position.y = -0.3, f.add(g);
  const S = new i.Mesh(new i.CylinderGeometry(0.035, 0.04, 0.3, 20), e.rim);
  S.name = "valve_stem", S.rotation.z = Math.PI / 2, S.position.set(0.98, 0.4, 0), f.add(S);
  const h = new i.Mesh(new i.BoxGeometry(0.16, 0.1, 0.22), e.accent);
  h.name = "sensor_module", h.position.set(0, 0.34, -0.855), f.add(h);
  const d = new i.Mesh(new i.BoxGeometry(0.24, 0.1, 0.1), e.hub);
  d.name = "sensor_bracket", d.position.set(0, 0.34, -0.8), f.add(d);
  const M = new i.Group();
  return M.name = "vizutire_otr_tire", t.rotation.x = Math.PI / 2, M.add(t), M.position.y = 1.78, { root: M, tire: t, outer: n, wheel: f, materials: e };
}
function Mh(i) {
  const e = new i.Group();
  e.name = "internal_structure";
  const t = 8, n = new i.Group();
  n.name = "belt_package";
  const r = new i.LineBasicMaterial({ color: 3108756, transparent: !0, opacity: 0, depthWrite: !1 });
  r.name = "belt_lines", [1.68, 1.62, 1.56].forEach((E, C) => {
    const T = new i.CylinderGeometry(E, E, 1.02 - C * 0.1, 44, 1, !0), w = new i.LineSegments(new i.EdgesGeometry(T, 1), r);
    w.name = `belt_ply_${C + 1}`, n.add(w);
  }), e.add(n);
  const s = (E, C) => new i.Vector2(E, C), a = new i.LineBasicMaterial({ color: 8034211, transparent: !0, opacity: 0, depthWrite: !1 });
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
  for (let E = 0; E < t; E++) {
    const C = new i.LineBasicMaterial({ color: 4884139, transparent: !0, opacity: 0, depthWrite: !1 });
    C.name = `radial_cord_sector_${E}`, f.push(C);
  }
  const m = 48, u = new i.Group();
  u.name = "radial_cords";
  for (let E = 0; E < m; E++) {
    const C = E / m * Math.PI * 2, T = l.map(([x, A]) => new i.Vector3(Math.cos(C) * x, A, Math.sin(C) * x)), w = new i.Line(new i.BufferGeometry().setFromPoints(T), f[Math.floor(E / m * t)]);
    w.name = `radial_cord_${E}`, u.add(w);
  }
  e.add(u);
  const p = new i.MeshStandardMaterial({ name: "bead_bundle", color: 12595499, roughness: 0.5, metalness: 0.3, transparent: !0, opacity: 0 });
  for (const E of [-1, 1]) {
    const C = new i.Mesh(new i.TorusGeometry(0.93, 0.045, 10, 60), p);
    C.name = `bead_bundle_${E > 0 ? "out" : "in"}`, C.rotation.x = Math.PI / 2, C.position.y = E * 0.47, e.add(C);
  }
  const g = new i.MeshBasicMaterial({ color: 14698557, transparent: !0, opacity: 0, depthWrite: !1, blending: i.AdditiveBlending });
  g.name = "deformation_zone";
  const S = new i.Group();
  S.name = "deformation_zones";
  const h = [];
  [
    { r: 1.5, y: 0.4, arc: 0.9, at: -Math.PI / 2 },
    { r: 1.5, y: -0.4, arc: 0.9, at: -Math.PI / 2 },
    { r: 1.66, y: 0, arc: 0.6, at: -Math.PI / 2 }
  ].forEach((E, C) => {
    const T = new i.Mesh(new i.TorusGeometry(E.r, 0.035, 8, 40, E.arc), g);
    T.name = `deformation_zone_${C}`, T.rotation.x = Math.PI / 2, T.rotation.z = -E.at - E.arc / 2, T.position.y = E.y, h.push(T), S.add(T);
  });
  const M = (E, C, T) => Math.max(0, Math.min(1, (E - C) / (T - C)));
  function b(E, C, T) {
    if (e.visible = C > 5e-3, !e.visible) return;
    const w = M(C, 0, 0.45), x = M(C, 0.15, 0.6), A = M(C, 0.35, 0.85), I = M(C, 0.55, 1), D = M(C, 0.7, 1);
    r.opacity = 0.85 * w, a.opacity = 0.5 * x, p.opacity = 0.9 * I;
    for (let W = 0; W < t; W++) {
      const q = (E * 0.09 - W / t) % 1, U = Math.min(q < 0 ? q + 1 : q, 1 - (q < 0 ? q + 1 : q)), z = Math.exp(-Math.pow(U / 0.18, 2));
      f[W].opacity = A * (0.2 + 0.55 * z * (0.25 + 0.75 * T));
    }
    const O = 0.5 + 0.5 * Math.sin(E * 0.55);
    h.forEach((W, q) => {
      const U = 0.5 + 0.5 * Math.sin(E * 0.5 + q * 1.7);
      W.material, W.scale.setScalar(1 + 6e-3 * U * T);
    }), g.opacity = D * (0.25 + 0.45 * O * (0.3 + 0.7 * T)), n.scale.setScalar(1 + 35e-4 * Math.sin(E * 0.7) * T);
  }
  return { group: e, zoneGroup: S, update: b };
}
const At = {
  // --- encuadre del neumatico ---
  nominalDolly: 8,
  // distancia de camara de referencia (m)
  fitRatio: 0.64,
  // el neumatico ocupa ~64% del ancho visible (0.55-0.70)
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
    dprDesktop: 2,
    dprMobile: 1.35,
    motesDesktop: 200,
    motesMobile: 60,
    lowFpsThreshold: 28
    // por debajo de esto se degrada la calidad
  }
}, Sh = `<div id="gl"></div>
<div id="vignette"></div>
<div id="scrim-c"></div>
<div id="scrim-b"></div>
<svg id="wires"></svg>

<div id="overlay">
  <!-- 0 · INTRO -->
  <div class="beat" data-beat="0">
    <div class="panel">
      <div class="eyebrow fx" data-range="-.1,.02,.85,1">VIZUtire · Inteligencia operacional OTR</div>
      <h1 class="fx" data-range="-.1,.04,.5,.62">¿Por qué existe VIZUtire?</h1>
      <h2 class="fx" data-range="0.45,.6,.9,1">Un neumático OTR no solo se desgasta.</h2>
    </div>
    <div class="bottom hint fx" data-range="-.1,.05,.3,.45">Desplácese para continuar ↓</div>
  </div>

  <!-- 1 · LA OPERACIÓN -->
  <div class="beat" data-beat="1">
    <div class="tag fx" data-range="-.05,.04,.9,1" data-range-m="-.02,.06,.22,.30" style="left:6vw;top:26%">Carga <span class="v" id="v-carga">— t</span></div>
    <div class="tag r fx" data-range="0.22,.3,.9,1" data-range-m="0.26,.34,.46,.54" style="right:6vw;top:36%">Deformación <span class="v" id="v-def">— mm</span></div>
    <div class="tag r fx" data-range="0.46,.54,.9,1" data-range-m="0.50,.58,.70,.78" style="right:9vw;bottom:34%">Impacto <span class="v" id="v-imp">— g</span></div>
    <div class="tag fx" data-range="0.68,.76,.9,1" data-range-m="0.74,.82,.93,1" style="left:8vw;bottom:30%">Condiciones de operación <span class="v" id="v-cond">—</span></div>
    <div class="bottom">
      <p class="lead fx" data-range="0.05,.18,.82,.96" style="margin:0 auto">Durante cada ciclo de operación soporta cargas, deformaciones, impactos y variaciones de las condiciones de trabajo.</p>
    </div>
  </div>

  <!-- 2 · CADA CICLO -->
  <div class="beat" data-beat="2">
    <div class="bottom" style="display:flex;flex-direction:column;gap:26px">
      <div class="eyebrow fx" data-range="-.05,.04,.9,1">Ciclo de operación</div>
      <div class="cycle fx" data-range="0.02,.12,.9,1">
        <b data-step="0">Carga</b><span>→</span><b data-step="1">Respuesta</b><span>→</span><b data-step="2">Recuperación</b><span>→</span><b data-step="3">Nuevo ciclo</b>
      </div>
      <div class="accum fx" data-range="0.1,.25,.9,1"><span id="accum-bar"></span></div>
      <h2 class="fx" data-range="0.42,.56,.9,1" style="margin:8px auto 0;max-width:24ch">Cada una de ellas genera una respuesta en su estructura.</h2>
    </div>
  </div>

  <!-- 3 · LO QUE PODEMOS EVALUAR -->
  <div class="beat" data-beat="3">
    <div class="tag fx" data-wire="163" data-range="-.02,.06,1,1" data-range-m="-.02,.05,.10,.15" style="left:5vw;top:24%">Presión <span class="v" id="m-pres">—</span></div>
    <div class="tag fx" data-wire="180" data-range="0.10,.18,1,1" data-range-m="0.12,.18,.23,.28" style="left:4vw;top:46%">Temperatura <span class="v" id="m-temp">—</span></div>
    <div class="tag fx" data-wire="200" data-range="0.20,.28,1,1" data-range-m="0.25,.31,.36,.41" style="left:6vw;bottom:30%">Desgaste <span class="v" id="m-des">—</span></div>
    <div class="tag r fx" data-wire="17" data-range="0.30,.38,1,1" data-range-m="0.38,.44,.49,.54" style="right:5vw;top:24%">Daños visibles <span class="v" id="m-dan">—</span></div>
    <div class="tag r fx" data-wire="0" data-range="0.40,.48,1,1" data-range-m="0.51,.57,.62,.67" style="right:4vw;top:46%">Horas de operación <span class="v" id="m-hrs">—</span></div>
    <div class="tag r fx" data-wire="-20" data-range="0.50,.58,1,1" data-range-m="0.64,.70,.75,.80" style="right:6vw;bottom:30%">Condición superficial <span class="v" id="m-sup">—</span></div>
    <div class="bottom">
      <p class="lead fx" data-range="0.60,.72,.92,1" data-range-m="0.82,.90,.96,1" style="margin:0 auto">Gran parte de la gestión tradicional del neumático se concentra en lo que podemos evaluar directamente.</p>
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
      <h2 class="fx" data-range="0.14,.30,.80,.94" style="margin:0 auto;max-width:24ch">Pero existe una dimensión que permanece menos visible.</h2>
    </div>
  </div>

  <!-- 5 · COMPARACIÓN -->
  <div class="beat" data-beat="5">
    <div class="col side-l fx" data-wire="178" data-wire-r="1.78" data-range="0.04,.16,.78,.92" data-range-m="-.02,.10,.38,.48">
      <h3>Lo que podemos ver</h3>
      <ul><li>Presión</li><li>Temperatura</li><li>Desgaste</li><li>Daños visibles</li><li>Horas de operación</li><li>Condición superficial</li></ul>
    </div>
    <div class="col structural side-r fx" data-wire="2" data-wire-r="1.30" data-range="0.24,.38,.78,.92" data-range-m="0.52,.62,.88,.96">
      <h3>Lo que está ocurriendo</h3>
      <ul><li>Respuesta estructural</li><li>Evolución estructural</li><li>Efecto de la operación</li></ul>
    </div>
    <div class="bottom">
      <div class="eyebrow fx" data-range="0.46,.60,.80,.94">Superficie · Estructura · Una misma operación</div>
    </div>
  </div>

  <!-- 6 · LA PREGUNTA -->
  <div class="beat" data-beat="6">
    <div class="center">
      <div class="q fx" data-range="0.10,.28,.90,1">¿Cómo está evolucionando <span class="mark">estructuralmente</span> el neumático como consecuencia de la operación?</div>
    </div>
  </div>

  <!-- 7 · LA BRECHA -->
  <div class="beat" data-beat="7">
    <div class="stack">
      <div class="lbl fx" data-range="0.03,.14,.66,.80">Estado visible</div>
      <div class="hair fx" data-range="0.08,.20,.66,.80"></div>
      <div class="gap-note fx" data-range="0.30,.44,.66,.80">no observado</div>
      <div class="hair fx" data-range="0.12,.24,.66,.80"></div>
      <div class="lbl q fx" data-range="0.16,.30,.66,.80">Estado estructural</div>
    </div>
    <div class="bottom">
      <h2 class="fx" data-range="0.56,.70,.94,1">VIZUtire nace de esa brecha.</h2>
    </div>
  </div>

  <!-- 8 · NO REEMPLAZA -->
  <div class="beat" data-beat="8">
    <div class="stack">
      <div class="lbl fx" data-range="0.14,.28,.82,.94">Controles existentes</div>
      <div class="lbl q fx" data-range="0.24,.38,.82,.94">Nueva perspectiva</div>
      <div class="hair fx" data-range="0.30,.44,.82,.94"></div>
      <div class="lbl sum fx" data-range="0.40,.54,.82,.94">Gestión más completa</div>
    </div>
    <div class="bottom">
      <p class="lead fx" data-range="-.02,.10,.30,.44" style="margin:0 auto">No para reemplazar los controles existentes.</p>
      <p class="lead fx" data-range="0.56,.68,.88,.98" style="margin:0 auto">Sino para incorporar una nueva perspectiva a la gestión del neumático.</p>
    </div>
  </div>

  <!-- 9 · CIERRE -->
  <div class="beat" data-beat="9">
    <div class="bottom">
      <h2 class="fx" data-range="-.02,.10,.42,.56" style="margin:0 auto;max-width:30ch">Porque conocer el estado visible de un neumático no necesariamente significa conocer su estado estructural.</h2>
    </div>
    <div class="center">
      <div class="final fx" data-range="0.58,.74,1,1">VIZUtire existe para hacer visible esa dimensión de la operación.</div>
    </div>
  </div>
</div>

<div class="rail" id="rail"></div>`;
function Eh(i) {
  const e = i;
  e.classList.add("vzt-story");
  const t = 10;
  let n = "";
  for (let R = 0; R < t; R++) n += '<section class="scroll" data-b="' + R + '"></section>';
  n += '<div style="height:' + At.tailHeightVh + 'vh"></div>', e.innerHTML = '<div class="vzt-stage">' + Sh + '</div><div class="vzt-scroller">' + n + "</div>", e.querySelectorAll("section.scroll").forEach((R) => {
    R.style.height = At.sectionHeightVh + "vh";
  });
  const r = innerWidth <= At.breakpoints.mobile, s = matchMedia("(prefers-reduced-motion: reduce)").matches, a = (R, P = 0, K = 1) => Math.min(K, Math.max(P, R)), o = (R, P, K) => R + (P - R) * K, c = (R) => R * R * (3 - 2 * R), l = (R, P, K) => c(a((R - P) / (K - P || 1e-6))), f = e.querySelector("#gl"), m = new Ga({ antialias: !r, alpha: !1 });
  m.setPixelRatio(Math.min(devicePixelRatio, r ? At.quality.dprMobile : At.quality.dprDesktop)), m.setSize(innerWidth, innerHeight), m.shadowMap.enabled = !r, m.shadowMap.type = 1, m.toneMapping = 4, m.toneMappingExposure = 1.05, f.appendChild(m.domElement);
  const u = new _a();
  u.background = new Ge(16777215), u.fog = new Ki(16777215, 12, 26);
  const p = new Ft(At.fov, innerWidth / innerHeight, 0.1, 100);
  p.position.set(0, 2.1, 8.6), u.add(new Ca(11058375, 12567237, 0.55));
  const g = new Gi(15920354, 2.1);
  g.position.set(5.5, 7.5, 6), g.castShadow = !r, g.shadow.mapSize.set(r ? 1024 : 2048, r ? 1024 : 2048), g.shadow.camera.left = -5, g.shadow.camera.right = 5, g.shadow.camera.top = 5, g.shadow.camera.bottom = -5, g.shadow.bias = -12e-4, u.add(g);
  const S = new Gi(9745608, 0.85);
  S.position.set(-7, 3, 2), u.add(S);
  const h = new Gi(14214378, 1.1);
  h.position.set(-2, 2.5, -7), u.add(h);
  const d = new kt(new Yn(60, 60), new Ea({ opacity: 0.42 }));
  d.rotation.x = -Math.PI / 2, d.receiveShadow = !0, u.add(d);
  const { root: M, tire: b, materials: E } = vh(ca);
  M.traverse((R) => {
    R.isMesh && (R.castShadow = !0, R.receiveShadow = !0);
  });
  const C = new Tn();
  C.add(M), u.add(C);
  const T = Mh(ca);
  b.add(T.group);
  const w = new Tn();
  if (w.rotation.x = Math.PI / 2, w.add(T.zoneGroup), M.add(w), T.group.visible = !1, r) {
    const R = T.group.getObjectByName("radial_cords");
    R && R.children.forEach((P, K) => {
      K % 2 && (P.visible = !1);
    });
  }
  let x = 1;
  function A() {
    const R = innerWidth / innerHeight, P = 0.611 * At.nominalDolly * R;
    x = Math.max(At.minFit, Math.min(1, At.fitRatio * P / At.tireDiameter)), C.scale.setScalar(x);
  }
  A();
  const I = new Mt(), D = r ? At.quality.motesMobile : At.quality.motesDesktop, O = new Float32Array(D * 3);
  for (let R = 0; R < D; R++)
    O[R * 3] = (Math.random() - 0.5) * 14, O[R * 3 + 1] = Math.random() * 6, O[R * 3 + 2] = (Math.random() - 0.5) * 8;
  I.setAttribute("position", new Bt(O, 3));
  const W = new Ma(I, new qr({ color: 6056819, size: 0.018, transparent: !0, opacity: 0.35, depthWrite: !1 }));
  u.add(W);
  const q = [E.tread, E.sidewall], U = [E.rim, E.hub, E.accent], z = [...e.querySelectorAll("section.scroll")], X = [...e.querySelectorAll(".beat")], Q = [...e.querySelectorAll(".fx")].map((R) => {
    const P = r && R.dataset.rangeM ? R.dataset.rangeM : R.dataset.range || "0,0,1,1", [K, te, ee, Y] = P.split(",").map(Number);
    return { el: R, a: K, b: te, c: ee, d: Y, beat: +R.closest(".beat").dataset.beat, cur: 0, wire: null };
  }), ne = e.querySelector("#rail");
  z.forEach(() => ne.appendChild(document.createElement("i")));
  const ue = [...ne.children], xe = e.querySelector("#wires"), Se = Q.filter((R) => R.el.dataset.wire !== void 0);
  for (const R of Se) {
    const P = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xe.appendChild(P), R.wire = { el: P, ang: +R.el.dataset.wire * Math.PI / 180, r: +(R.el.dataset.wireR || 1.78) };
  }
  const ze = new B();
  let We = 0, Re = 0;
  function j() {
    const R = innerHeight;
    if (window.__force != null) {
      const ee = window.__force;
      Re = Math.min(z.length - 1, Math.floor(ee)), We = a(ee - Re);
      return;
    }
    const P = R * 0.5;
    let K = 0;
    for (let ee = 0; ee < z.length; ee++)
      P >= z[ee].getBoundingClientRect().top && (K = ee);
    const te = z[K].getBoundingClientRect();
    Re = K, We = a((P - te.top) / te.height);
  }
  const G = { load: 0, oval: 0, transp: 1, inner: 0, camZ: 8.6, camY: 2.1, spin: 0.16, shift: 0, rise: 0, scrimB: 0, scrimC: 0, motion: 0 }, ae = e.querySelector("#scrim-b"), Ae = e.querySelector("#scrim-c"), ve = { ...G };
  let be = 999, nt = -1;
  const we = (R, P) => {
    const K = e.querySelector("#" + R);
    K && (K.textContent = P);
  }, Ke = (R) => {
    const P = (K) => Math.sin(performance.now() / 1400 + K);
    we("m-pres", (6.9 + P(1) * 0.05).toFixed(2) + " bar"), we("m-temp", (78 + P(2) * 3).toFixed(0) + " °C"), we("m-des", (41 + P(3) * 0.3).toFixed(0) + " %"), we("m-dan", "Nivel 1"), we("m-hrs", 4820 + Math.floor(R * 40) + " h"), we("m-sup", "Regular");
  };
  function Qe() {
    const R = Re, P = We;
    if (G.load = 0, G.oval = 0, G.transp = 1, G.inner = 0, G.spin = 0.14, G.shift = 0, G.camZ = 8.6, G.camY = 2.1, G.rise = 0, G.scrimB = 0, G.scrimC = 0, G.motion = 0, R === 0 && (G.camZ = o(9.2, 8.4, P), G.shift = r ? 0 : 0.7, G.spin = 0.1, G.rise = 0.1, G.scrimB = 0.35), R === 1) {
      if (G.camZ = o(8.4, 8, P), G.rise = 0.34, G.scrimB = 0.8, G.load = l(P, 0.02, 0.12) * (1 - l(P, 0.2, 0.3)), G.oval = l(P, 0.24, 0.34) * (1 - l(P, 0.42, 0.52)) * 0.9, P > 0.48 && P < 0.68) {
        const K = Math.floor((P - 0.48) / 0.07);
        K !== nt && (nt = K, be = 0);
      }
      G.spin = o(0.14, 0.3, l(P, 0.7, 1)), we("v-carga", (38 + G.load * 22).toFixed(0) + " t"), we("v-def", (6 + G.oval * 14).toFixed(1) + " mm"), we("v-imp", be < 1.4 ? (2.4 + Math.random() * 1.2).toFixed(1) + " g" : "0.4 g"), we("v-cond", ["Berma", "Rampa", "Curva", "Carguío"][Math.floor(P * 8) % 4]);
    }
    if (R === 2) {
      G.camZ = 8.1, G.rise = 0.52, G.scrimB = 0.9;
      const K = P * 4 % 1;
      G.load = Math.sin(Math.PI * a(K / 0.5)) * 0.9, G.oval = Math.sin(Math.PI * a((K - 0.35) / 0.45, 0, 1)) * 0.35, e.querySelector("#accum-bar").style.width = (a(P) * 100).toFixed(1) + "%";
      const te = Math.min(3, Math.floor(K * 4));
      e.querySelectorAll(".cycle b").forEach((ee) => ee.classList.toggle("on", +ee.dataset.step === te)), G.spin = 0.22;
    }
    R === 3 && (G.camZ = o(8.1, 7.9, P), G.spin = o(0.16, 0.1, P), G.rise = 0.4, G.scrimB = o(0.35, 0.85, l(P, 0.5, 0.72)), Ke(P)), R === 4 && (G.camZ = o(7.9, 7.1, l(P, 0.35, 1)), G.rise = o(0.4, 0.18, l(P, 0.3, 1)), G.spin = o(0.1, 0, l(P, 0, 0.22)), G.spin = o(G.spin, 0.05, l(P, 0.55, 1)), G.transp = o(1, 0.2, l(P, 0.42, 0.92)), G.inner = l(P, 0.48, 1) * 0.85, G.motion = l(P, 0.7, 1) * 0.5, G.scrimB = o(0.85, 0.6, l(P, 0.4, 0.8)), Ke(P)), R === 5 && (G.camZ = o(7.1, 6.8, P), G.rise = 0.14, G.spin = 0.05, G.transp = 0.18, G.inner = o(0.85, 1, l(P, 0, 0.4)), G.motion = 0.7, G.scrimB = 0.35), R === 6 && (G.camZ = o(6.8, 6.2, l(P, 0, 0.6)), G.rise = 0.1, G.spin = 0.03, G.transp = 0.14, G.inner = 1, G.motion = 0.9, G.scrimC = l(P, 0.05, 0.3) * 0.85), R === 7 && (G.camZ = o(6.2, 7.4, l(P, 0, 0.55)), G.rise = 0.16, G.spin = o(0.03, 0, l(P, 0.3, 0.6)), G.transp = 0.16, G.inner = 1, G.motion = 1 - l(P, 0.28, 0.6), G.scrimC = 0.75, G.scrimB = l(P, 0.5, 0.72) * 0.7), R === 8 && (G.camZ = 7.4, G.rise = 0.16, G.spin = 0.02, G.transp = o(0.16, 0.42, l(P, 0.1, 0.7)), G.inner = o(1, 0.8, l(P, 0.1, 0.7)), G.motion = 0, G.scrimC = 0.7, G.scrimB = 0.6), R === 9 && (G.camZ = o(7.4, 8.6, l(P, 0.1, 0.85)), G.rise = o(0.16, 0.04, P), G.spin = 0.02, G.transp = o(0.42, 1, l(P, 0.35, 0.75)), G.inner = (1 - l(P, 0.3, 0.62)) * 0.8, G.motion = 0, G.scrimB = (1 - l(P, 0.5, 0.68)) * 0.7, G.scrimC = l(P, 0.6, 0.82) * 0.9);
  }
  function Be() {
    for (const R of Q) {
      let P = 0;
      R.beat === Re && (P = l(We, R.a, R.b) * (1 - l(We, R.c, R.d))), Math.abs(P - R.cur) > 2e-3 && (R.cur = P, R.el.style.opacity = P.toFixed(3), R.el.style.translate = `0 ${((1 - P) * 14).toFixed(2)}px`);
    }
    X.forEach((R, P) => R.style.opacity = P === Re ? 1 : 0), ue.forEach((R, P) => R.classList.toggle("on", P === Re));
  }
  function dt() {
    for (const R of Se) {
      const P = R.wire;
      if (R.beat !== Re || R.cur < 0.04) {
        P.el.style.strokeOpacity = 0;
        continue;
      }
      const K = R.el.getBoundingClientRect(), ee = !R.el.classList.contains("r") && !R.el.classList.contains("side-r") ? K.right + 8 : K.left - 8, Y = K.top + K.height / 2;
      ze.set(ve.shift + Math.cos(P.ang) * P.r * x, (1.78 + Math.sin(P.ang) * P.r) * x, 0).project(p);
      const Z = (ze.x * 0.5 + 0.5) * innerWidth, ie = (-ze.y * 0.5 + 0.5) * innerHeight;
      P.el.setAttribute("x1", ee.toFixed(1)), P.el.setAttribute("y1", Y.toFixed(1)), P.el.setAttribute("x2", Z.toFixed(1)), P.el.setAttribute("y2", ie.toFixed(1)), P.el.style.strokeOpacity = (R.cur * 0.34).toFixed(3);
    }
  }
  let it = performance.now(), St = 0, F = 0, lt = 0, Ne = !0;
  function $e(R) {
    if (!Ne) return;
    const P = Math.min(0.05, (R - it) / 1e3);
    it = R, j(), Qe(), Be(), s && (G.spin *= 0.22, G.oval *= 0.25, G.load *= 0.35, G.motion *= 0.5, G.camZ = o(7.9, G.camZ, 0.45));
    const K = 1 - Math.pow(At.damping, P);
    for (const ie of Object.keys(G)) ve[ie] = o(ve[ie], G[ie], K);
    be += P;
    const te = be < 1.6 ? Math.sin(be * 26) * Math.exp(-be * 3.6) : 0;
    St += P * ve.spin * At.spinScale, b.rotation.y = St;
    const ee = ve.oval * 0.03 + te * 0.012;
    b.scale.set(1 + ee, 1, 1 - ee);
    const Y = ve.load * 0.016 + Math.abs(te) * 6e-3;
    M.scale.set(1 + Y * 0.6, 1 - Y, 1), M.position.y = 1.78 * (1 - Y), C.position.x = ve.shift, C.rotation.y = te * 6e-3;
    const Z = ve.transp;
    q.forEach((ie) => {
      ie.transparent = Z < 0.99, ie.opacity = Z, ie.depthWrite = Z > 0.75;
    }), U.forEach((ie) => {
      const pe = o(1, 0.35, 1 - Z);
      ie.transparent = pe < 0.99, ie.opacity = pe;
    }), T.update(R / 1e3, ve.inner, ve.motion), p.position.set(0, ve.camY * x + (1 - x) * 0.6, ve.camZ), p.lookAt(ve.shift * 0.55, (1.78 - ve.rise) * x, 0), ae.style.opacity = ve.scrimB.toFixed(3), Ae.style.opacity = ve.scrimC.toFixed(3), W.rotation.y += P * 8e-3, W.material.opacity = 0.18 + ve.inner * 0.18, dt(), m.render(u, p), F = requestAnimationFrame($e);
  }
  F = requestAnimationFrame($e);
  function ce() {
    m.setSize(innerWidth, innerHeight), p.aspect = innerWidth / innerHeight, p.updateProjectionMatrix(), A();
  }
  addEventListener("resize", ce), addEventListener("orientationchange", () => setTimeout(ce, 250));
  let st = 0, y = performance.now(), _ = !1;
  return function R() {
    if (!Ne) return;
    st++;
    const P = performance.now() - y;
    !_ && P > 2500 && (_ = !0, st / (P / 1e3) < At.quality.lowFpsThreshold && (m.setPixelRatio(1), m.shadowMap.enabled = !1, W.visible = !1)), lt = requestAnimationFrame(R);
  }(), {
    destroy() {
      Ne = !1, cancelAnimationFrame(F), cancelAnimationFrame(lt), removeEventListener("resize", ce), m.dispose(), e.innerHTML = "";
    }
  };
}
export {
  Eh as createStructuralStory
};
