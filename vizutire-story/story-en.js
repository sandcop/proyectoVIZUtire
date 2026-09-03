/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Mr = "184";
const hn = "", It = "srgb", Ci = "srgb-linear", Pi = "linear", tt = "srgb";
const os = "300 es";
function uo(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function pr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function La() {
  const i = pr("canvas");
  return i.style.display = "block", i;
}
const Is = {};
function Di(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function Fa(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace ? i[0] += " " + t.getLocation() : i[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return i;
}
function Pe(...i) {
  i = Fa(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function Ke(...i) {
  i = Fa(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function mr(...i) {
  const e = i.join(" ");
  e in Is || (Is[e] = !0, Pe(...i));
}
function ho(i, e, t) {
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
const fo = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
class wn {
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
const Pt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], hr = Math.PI / 180, ls = 180 / Math.PI;
function Rn() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Pt[i & 255] + Pt[i >> 8 & 255] + Pt[i >> 16 & 255] + Pt[i >> 24 & 255] + "-" + Pt[e & 255] + Pt[e >> 8 & 255] + "-" + Pt[e >> 16 & 15 | 64] + Pt[e >> 24 & 255] + "-" + Pt[t & 63 | 128] + Pt[t >> 8 & 255] + "-" + Pt[t >> 16 & 255] + Pt[t >> 24 & 255] + Pt[n & 255] + Pt[n >> 8 & 255] + Pt[n >> 16 & 255] + Pt[n >> 24 & 255]).toLowerCase();
}
function Ze(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function po(i, e) {
  return (i % e + e) % e;
}
function Cr(i, e, t) {
  return (1 - t) * i + t * e;
}
function rn(i, e) {
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
function rt(i, e) {
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
const ws = class ws {
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
    return this.x = Ze(this.x, e.x, t.x), this.y = Ze(this.y, e.y, t.y), this;
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
    return this.x = Ze(this.x, e, t), this.y = Ze(this.y, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Ze(n, e, t));
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
    return Math.acos(Ze(n, -1, 1));
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
ws.prototype.isVector2 = !0;
let Ue = ws;
class zn {
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
    let c = n[r + 0], l = n[r + 1], p = n[r + 2], m = n[r + 3], u = s[a + 0], f = s[a + 1], g = s[a + 2], S = s[a + 3];
    if (m !== S || c !== u || l !== f || p !== g) {
      let d = c * u + l * f + p * g + m * S;
      d < 0 && (u = -u, f = -f, g = -g, S = -S, d = -d);
      let h = 1 - o;
      if (d < 0.9995) {
        const M = Math.acos(d), b = Math.sin(M);
        h = Math.sin(h * M) / b, o = Math.sin(o * M) / b, c = c * h + u * o, l = l * h + f * o, p = p * h + g * o, m = m * h + S * o;
      } else {
        c = c * h + u * o, l = l * h + f * o, p = p * h + g * o, m = m * h + S * o;
        const M = 1 / Math.sqrt(c * c + l * l + p * p + m * m);
        c *= M, l *= M, p *= M, m *= M;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = p, e[t + 3] = m;
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
    const o = n[r], c = n[r + 1], l = n[r + 2], p = n[r + 3], m = s[a], u = s[a + 1], f = s[a + 2], g = s[a + 3];
    return e[t] = o * g + p * m + c * f - l * u, e[t + 1] = c * g + p * u + l * m - o * f, e[t + 2] = l * g + p * f + o * u - c * m, e[t + 3] = p * g - o * m - c * u - l * f, e;
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
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), p = o(r / 2), m = o(s / 2), u = c(n / 2), f = c(r / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * p * m + l * f * g, this._y = l * f * m - u * p * g, this._z = l * p * g + u * f * m, this._w = l * p * m - u * f * g;
        break;
      case "YXZ":
        this._x = u * p * m + l * f * g, this._y = l * f * m - u * p * g, this._z = l * p * g - u * f * m, this._w = l * p * m + u * f * g;
        break;
      case "ZXY":
        this._x = u * p * m - l * f * g, this._y = l * f * m + u * p * g, this._z = l * p * g + u * f * m, this._w = l * p * m - u * f * g;
        break;
      case "ZYX":
        this._x = u * p * m - l * f * g, this._y = l * f * m + u * p * g, this._z = l * p * g - u * f * m, this._w = l * p * m + u * f * g;
        break;
      case "YZX":
        this._x = u * p * m + l * f * g, this._y = l * f * m + u * p * g, this._z = l * p * g - u * f * m, this._w = l * p * m - u * f * g;
        break;
      case "XZY":
        this._x = u * p * m - l * f * g, this._y = l * f * m - u * p * g, this._z = l * p * g + u * f * m, this._w = l * p * m + u * f * g;
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
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], p = t[6], m = t[10], u = n + o + m;
    if (u > 0) {
      const f = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / f, this._x = (p - c) * f, this._y = (s - l) * f, this._z = (a - r) * f;
    } else if (n > o && n > m) {
      const f = 2 * Math.sqrt(1 + n - o - m);
      this._w = (p - c) / f, this._x = 0.25 * f, this._y = (r + a) / f, this._z = (s + l) / f;
    } else if (o > m) {
      const f = 2 * Math.sqrt(1 + o - n - m);
      this._w = (s - l) / f, this._x = (r + a) / f, this._y = 0.25 * f, this._z = (c + p) / f;
    } else {
      const f = 2 * Math.sqrt(1 + m - n - o);
      this._w = (a - r) / f, this._x = (s + l) / f, this._y = (c + p) / f, this._z = 0.25 * f;
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
    return 2 * Math.acos(Math.abs(Ze(this.dot(e), -1, 1)));
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
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, p = t._w;
    return this._x = n * p + a * o + r * l - s * c, this._y = r * p + a * c + s * o - n * l, this._z = s * p + a * l + n * c - r * o, this._w = a * p - n * o - r * c - s * l, this._onChangeCallback(), this;
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
      const l = Math.acos(o), p = Math.sin(l);
      c = Math.sin(c * l) / p, t = Math.sin(t * l) / p, this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + s * t, this._w = this._w * c + a * t, this._onChangeCallback();
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
const Cs = class Cs {
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
    return this.applyQuaternion(Us.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Us.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * n), p = 2 * (o * t - s * r), m = 2 * (s * n - a * t);
    return this.x = t + c * l + a * m - o * p, this.y = n + c * p + o * l - s * m, this.z = r + c * m + s * p - a * l, this;
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
    return this.x = Ze(this.x, e.x, t.x), this.y = Ze(this.y, e.y, t.y), this.z = Ze(this.z, e.z, t.z), this;
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
    return this.x = Ze(this.x, e, t), this.y = Ze(this.y, e, t), this.z = Ze(this.z, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Ze(n, e, t));
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
    return Pr.copy(this).projectOnVector(e), this.sub(Pr);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(Pr.copy(e).multiplyScalar(2 * this.dot(e)));
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
    return Math.acos(Ze(n, -1, 1));
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
Cs.prototype.isVector3 = !0;
let O = Cs;
const Pr = /* @__PURE__ */ new O(), Us = /* @__PURE__ */ new zn(), Ps = class Ps {
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
    const p = this.elements;
    return p[0] = e, p[1] = r, p[2] = o, p[3] = t, p[4] = s, p[5] = c, p[6] = n, p[7] = a, p[8] = l, this;
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
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], p = n[4], m = n[7], u = n[2], f = n[5], g = n[8], S = r[0], d = r[3], h = r[6], M = r[1], b = r[4], E = r[7], R = r[2], y = r[5], w = r[8];
    return s[0] = a * S + o * M + c * R, s[3] = a * d + o * b + c * y, s[6] = a * h + o * E + c * w, s[1] = l * S + p * M + m * R, s[4] = l * d + p * b + m * y, s[7] = l * h + p * E + m * w, s[2] = u * S + f * M + g * R, s[5] = u * d + f * b + g * y, s[8] = u * h + f * E + g * w, this;
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], p = e[8];
    return t * a * p - t * o * l - n * s * p + n * o * c + r * s * l - r * a * c;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], p = e[8], m = p * a - o * l, u = o * c - p * s, f = l * s - a * c, g = t * m + n * u + r * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / g;
    return e[0] = m * S, e[1] = (r * l - p * n) * S, e[2] = (o * n - r * a) * S, e[3] = u * S, e[4] = (p * t - r * c) * S, e[5] = (r * s - o * t) * S, e[6] = f * S, e[7] = (n * c - l * t) * S, e[8] = (a * t - n * s) * S, this;
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
    return this.premultiply(Dr.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(Dr.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(Dr.makeTranslation(e, t)), this;
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
Ps.prototype.isMatrix3 = !0;
let Ne = Ps;
const Dr = /* @__PURE__ */ new Ne(), Ns = /* @__PURE__ */ new Ne().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Bs = /* @__PURE__ */ new Ne().set(
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
function mo() {
  const i = {
    enabled: !0,
    workingColorSpace: Ci,
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
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === tt && (r.r = dn(r.r), r.g = dn(r.g), r.b = dn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === tt && (r.r = ui(r.r), r.g = ui(r.g), r.b = ui(r.b))), r;
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
      return r === hn ? Pi : this.spaces[r].transfer;
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
    [Ci]: {
      primaries: e,
      whitePoint: n,
      transfer: Pi,
      toXYZ: Ns,
      fromXYZ: Bs,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: It },
      outputColorSpaceConfig: { drawingBufferColorSpace: It }
    },
    [It]: {
      primaries: e,
      whitePoint: n,
      transfer: tt,
      toXYZ: Ns,
      fromXYZ: Bs,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: It }
    }
  }), i;
}
const Ye = /* @__PURE__ */ mo();
function dn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ui(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let qn;
class Ia {
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
      qn === void 0 && (qn = pr("canvas")), qn.width = e.width, qn.height = e.height;
      const r = qn.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = qn;
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
        s[a] = dn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(dn(t[n] / 255) * 255) : t[n] = dn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let _o = 0;
class Sr {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: _o++ }), this.uuid = Rn(), this.data = e, this.dataReady = !0, this.version = 0;
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
          r[a].isDataTexture ? s.push(Lr(r[a].image)) : s.push(Lr(r[a]));
      } else
        s = Lr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Lr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Ia.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (Pe("Texture: Unable to serialize Texture."), {});
}
let go = 0;
const Fr = /* @__PURE__ */ new O();
class At extends wn {
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
  constructor(e = At.DEFAULT_IMAGE, t = At.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, a = 1008, o = 1023, c = 1009, l = At.DEFAULT_ANISOTROPY, p = hn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: go++ }), this.uuid = Rn(), this.name = "", this.source = new Sr(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ue(0, 0), this.repeat = new Ue(1, 1), this.center = new Ue(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ne(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = p, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Fr).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Fr).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Fr).z;
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
At.DEFAULT_IMAGE = null;
At.DEFAULT_MAPPING = 300;
At.DEFAULT_ANISOTROPY = 1;
const Ds = class Ds {
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
    const c = e.elements, l = c[0], p = c[4], m = c[8], u = c[1], f = c[5], g = c[9], S = c[2], d = c[6], h = c[10];
    if (Math.abs(p - u) < 0.01 && Math.abs(m - S) < 0.01 && Math.abs(g - d) < 0.01) {
      if (Math.abs(p + u) < 0.1 && Math.abs(m + S) < 0.1 && Math.abs(g + d) < 0.1 && Math.abs(l + f + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, E = (f + 1) / 2, R = (h + 1) / 2, y = (p + u) / 4, w = (m + S) / 4, x = (g + d) / 4;
      return b > E && b > R ? b < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), r = y / n, s = w / n) : E > R ? E < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(E), n = y / r, s = x / r) : R < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(R), n = w / s, r = x / s), this.set(n, r, s, t), this;
    }
    let M = Math.sqrt((d - g) * (d - g) + (m - S) * (m - S) + (u - p) * (u - p));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (d - g) / M, this.y = (m - S) / M, this.z = (u - p) / M, this.w = Math.acos((l + f + h - 1) / 2), this;
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
    return this.x = Ze(this.x, e.x, t.x), this.y = Ze(this.y, e.y, t.y), this.z = Ze(this.z, e.z, t.z), this.w = Ze(this.w, e.w, t.w), this;
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
    return this.x = Ze(this.x, e, t), this.y = Ze(this.y, e, t), this.z = Ze(this.z, e, t), this.w = Ze(this.w, e, t), this;
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
    return this.divideScalar(n || 1).multiplyScalar(Ze(n, e, t));
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
Ds.prototype.isVector4 = !0;
let mt = Ds;
class Ua extends wn {
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
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new mt(0, 0, e, t), this.scissorTest = !1, this.viewport = new mt(0, 0, e, t), this.textures = [];
    const r = { width: e, height: t, depth: n.depth }, s = new At(r), a = n.count;
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
class $t extends Ua {
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
class ms extends At {
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
class Na extends At {
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
  constructor(e, t, n, r, s, a, o, c, l, p, m, u, f, g, S, d) {
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
    ], e !== void 0 && this.set(e, t, n, r, s, a, o, c, l, p, m, u, f, g, S, d);
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
  set(e, t, n, r, s, a, o, c, l, p, m, u, f, g, S, d) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = c, h[2] = l, h[6] = p, h[10] = m, h[14] = u, h[3] = f, h[7] = g, h[11] = S, h[15] = d, this;
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
    const t = this.elements, n = e.elements, r = 1 / Yn.setFromMatrixColumn(e, 0).length(), s = 1 / Yn.setFromMatrixColumn(e, 1).length(), a = 1 / Yn.setFromMatrixColumn(e, 2).length();
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
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), p = Math.cos(s), m = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * p, f = a * m, g = o * p, S = o * m;
      t[0] = c * p, t[4] = -c * m, t[8] = l, t[1] = f + g * l, t[5] = u - S * l, t[9] = -o * c, t[2] = S - u * l, t[6] = g + f * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const u = c * p, f = c * m, g = l * p, S = l * m;
      t[0] = u + S * o, t[4] = g * o - f, t[8] = a * l, t[1] = a * m, t[5] = a * p, t[9] = -o, t[2] = f * o - g, t[6] = S + u * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const u = c * p, f = c * m, g = l * p, S = l * m;
      t[0] = u - S * o, t[4] = -a * m, t[8] = g + f * o, t[1] = f + g * o, t[5] = a * p, t[9] = S - u * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const u = a * p, f = a * m, g = o * p, S = o * m;
      t[0] = c * p, t[4] = g * l - f, t[8] = u * l + S, t[1] = c * m, t[5] = S * l + u, t[9] = f * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const u = a * c, f = a * l, g = o * c, S = o * l;
      t[0] = c * p, t[4] = S - u * m, t[8] = g * m + f, t[1] = m, t[5] = a * p, t[9] = -o * p, t[2] = -l * p, t[6] = f * m + g, t[10] = u - S * m;
    } else if (e.order === "XZY") {
      const u = a * c, f = a * l, g = o * c, S = o * l;
      t[0] = c * p, t[4] = -m, t[8] = l * p, t[1] = u * m + S, t[5] = a * p, t[9] = f * m - g, t[2] = g * m - f, t[6] = o * p, t[10] = S * m + u;
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
    return this.compose(xo, e, vo);
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
    return Gt.subVectors(e, t), Gt.lengthSq() === 0 && (Gt.z = 1), Gt.normalize(), vn.crossVectors(n, Gt), vn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Gt.x += 1e-4 : Gt.z += 1e-4, Gt.normalize(), vn.crossVectors(n, Gt)), vn.normalize(), Ni.crossVectors(Gt, vn), r[0] = vn.x, r[4] = Ni.x, r[8] = Gt.x, r[1] = vn.y, r[5] = Ni.y, r[9] = Gt.y, r[2] = vn.z, r[6] = Ni.z, r[10] = Gt.z, this;
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
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], p = n[1], m = n[5], u = n[9], f = n[13], g = n[2], S = n[6], d = n[10], h = n[14], M = n[3], b = n[7], E = n[11], R = n[15], y = r[0], w = r[4], x = r[8], A = r[12], L = r[1], C = r[5], U = r[9], W = r[13], X = r[2], I = r[6], V = r[10], q = r[14], J = r[3], ne = r[7], he = r[11], ye = r[15];
    return s[0] = a * y + o * L + c * X + l * J, s[4] = a * w + o * C + c * I + l * ne, s[8] = a * x + o * U + c * V + l * he, s[12] = a * A + o * W + c * q + l * ye, s[1] = p * y + m * L + u * X + f * J, s[5] = p * w + m * C + u * I + f * ne, s[9] = p * x + m * U + u * V + f * he, s[13] = p * A + m * W + u * q + f * ye, s[2] = g * y + S * L + d * X + h * J, s[6] = g * w + S * C + d * I + h * ne, s[10] = g * x + S * U + d * V + h * he, s[14] = g * A + S * W + d * q + h * ye, s[3] = M * y + b * L + E * X + R * J, s[7] = M * w + b * C + E * I + R * ne, s[11] = M * x + b * U + E * V + R * he, s[15] = M * A + b * W + E * q + R * ye, this;
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
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], p = e[2], m = e[6], u = e[10], f = e[14], g = e[3], S = e[7], d = e[11], h = e[15], M = c * f - l * u, b = o * f - l * m, E = o * u - c * m, R = a * f - l * p, y = a * u - c * p, w = a * m - o * p;
    return t * (S * M - d * b + h * E) - n * (g * M - d * R + h * y) + r * (g * b - S * R + h * w) - s * (g * E - S * y + d * w);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], p = e[8], m = e[9], u = e[10], f = e[11], g = e[12], S = e[13], d = e[14], h = e[15], M = t * o - n * a, b = t * c - r * a, E = t * l - s * a, R = n * c - r * o, y = n * l - s * o, w = r * l - s * c, x = p * S - m * g, A = p * d - u * g, L = p * h - f * g, C = m * d - u * S, U = m * h - f * S, W = u * h - f * d, X = M * W - b * U + E * C + R * L - y * A + w * x;
    if (X === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const I = 1 / X;
    return e[0] = (o * W - c * U + l * C) * I, e[1] = (r * U - n * W - s * C) * I, e[2] = (S * w - d * y + h * R) * I, e[3] = (u * y - m * w - f * R) * I, e[4] = (c * L - a * W - l * A) * I, e[5] = (t * W - r * L + s * A) * I, e[6] = (d * E - g * w - h * b) * I, e[7] = (p * w - u * E + f * b) * I, e[8] = (a * U - o * L + l * x) * I, e[9] = (n * L - t * U - s * x) * I, e[10] = (g * y - S * E + h * M) * I, e[11] = (m * E - p * y - f * M) * I, e[12] = (o * A - a * C - c * x) * I, e[13] = (t * C - n * A + r * x) * I, e[14] = (S * b - g * R - d * M) * I, e[15] = (p * R - m * b + u * M) * I, this;
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
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, p = s * o;
    return this.set(
      l * a + n,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      p * o + n,
      p * c - r * a,
      0,
      l * c - r * o,
      p * c + r * a,
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
    const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, p = a + a, m = o + o, u = s * l, f = s * p, g = s * m, S = a * p, d = a * m, h = o * m, M = c * l, b = c * p, E = c * m, R = n.x, y = n.y, w = n.z;
    return r[0] = (1 - (S + h)) * R, r[1] = (f + E) * R, r[2] = (g - b) * R, r[3] = 0, r[4] = (f - E) * y, r[5] = (1 - (u + h)) * y, r[6] = (d + M) * y, r[7] = 0, r[8] = (g + b) * w, r[9] = (d - M) * w, r[10] = (1 - (u + S)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
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
    let a = Yn.set(r[0], r[1], r[2]).length();
    const o = Yn.set(r[4], r[5], r[6]).length(), c = Yn.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), qt.copy(this);
    const l = 1 / a, p = 1 / o, m = 1 / c;
    return qt.elements[0] *= l, qt.elements[1] *= l, qt.elements[2] *= l, qt.elements[4] *= p, qt.elements[5] *= p, qt.elements[6] *= p, qt.elements[8] *= m, qt.elements[9] *= m, qt.elements[10] *= m, t.setFromRotationMatrix(qt), n.x = a, n.y = o, n.z = c, this;
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
    const l = this.elements, p = 2 * s / (t - e), m = 2 * s / (n - r), u = (t + e) / (t - e), f = (n + r) / (n - r);
    let g, S;
    if (c)
      g = s / (a - s), S = a * s / (a - s);
    else if (o === 2e3)
      g = -(a + s) / (a - s), S = -2 * a * s / (a - s);
    else if (o === 2001)
      g = -a / (a - s), S = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = p, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = m, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = S, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
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
    const l = this.elements, p = 2 / (t - e), m = 2 / (n - r), u = -(t + e) / (t - e), f = -(n + r) / (n - r);
    let g, S;
    if (c)
      g = 1 / (a - s), S = a / (a - s);
    else if (o === 2e3)
      g = -2 / (a - s), S = -(a + s) / (a - s);
    else if (o === 2001)
      g = -1 / (a - s), S = -s / (a - s);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = p, l[4] = 0, l[8] = 0, l[12] = u, l[1] = 0, l[5] = m, l[9] = 0, l[13] = f, l[2] = 0, l[6] = 0, l[10] = g, l[14] = S, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
let ft = vr;
const Yn = /* @__PURE__ */ new O(), qt = /* @__PURE__ */ new ft(), xo = /* @__PURE__ */ new O(0, 0, 0), vo = /* @__PURE__ */ new O(1, 1, 1), vn = /* @__PURE__ */ new O(), Ni = /* @__PURE__ */ new O(), Gt = /* @__PURE__ */ new O(), Os = /* @__PURE__ */ new ft(), Gs = /* @__PURE__ */ new zn();
class fn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = fn.DEFAULT_ORDER) {
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
    const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], p = r[9], m = r[2], u = r[6], f = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ze(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-p, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ze(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-m, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ze(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-m, f), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ze(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._x = Math.atan2(u, f), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ze(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-p, l), this._y = Math.atan2(-m, s)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-Ze(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-p, f), this._y = 0);
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
    return Os.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Os, t, n);
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
    return Gs.setFromEuler(this), this.setFromQuaternion(Gs, e);
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
fn.DEFAULT_ORDER = "XYZ";
class _s {
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
let Mo = 0;
const zs = /* @__PURE__ */ new O(), Zn = /* @__PURE__ */ new zn(), an = /* @__PURE__ */ new ft(), Bi = /* @__PURE__ */ new O(), xi = /* @__PURE__ */ new O(), So = /* @__PURE__ */ new O(), yo = /* @__PURE__ */ new zn(), Vs = /* @__PURE__ */ new O(1, 0, 0), ks = /* @__PURE__ */ new O(0, 1, 0), Hs = /* @__PURE__ */ new O(0, 0, 1), Ws = { type: "added" }, Eo = { type: "removed" }, Kn = { type: "childadded", child: null }, Ir = { type: "childremoved", child: null };
class St extends wn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Mo++ }), this.uuid = Rn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = St.DEFAULT_UP.clone();
    const e = new O(), t = new fn(), n = new zn(), r = new O(1, 1, 1);
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
        value: new ft()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Ne()
      }
    }), this.matrix = new ft(), this.matrixWorld = new ft(), this.matrixAutoUpdate = St.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new _s(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
    return Zn.setFromAxisAngle(e, t), this.quaternion.multiply(Zn), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return Zn.setFromAxisAngle(e, t), this.quaternion.premultiply(Zn), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Vs, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(ks, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(Hs, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return zs.copy(e).applyQuaternion(this.quaternion), this.position.add(zs.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Vs, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(ks, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(Hs, e);
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
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(an.copy(this.matrixWorld).invert());
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
    this.updateWorldMatrix(!0, !1), xi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? an.lookAt(xi, Bi, this.up) : an.lookAt(Bi, xi, this.up), this.quaternion.setFromRotationMatrix(an), r && (an.extractRotation(r.matrixWorld), Zn.setFromRotationMatrix(an), this.quaternion.premultiply(Zn.invert()));
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
    return e === this ? (Ke("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Ws), Kn.child = e, this.dispatchEvent(Kn), Kn.child = null) : Ke("Object3D.add: object not an instance of THREE.Object3D.", e), this);
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
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Eo), Ir.child = e, this.dispatchEvent(Ir), Ir.child = null), this;
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
    return this.updateWorldMatrix(!0, !1), an.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), an.multiply(e.parent.matrixWorld)), e.applyMatrix4(an), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Ws), Kn.child = e, this.dispatchEvent(Kn), Kn.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xi, e, So), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xi, yo, e), e;
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
          for (let l = 0, p = c.length; l < p; l++) {
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
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), p = a(e.images), m = a(e.shapes), u = a(e.skeletons), f = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), p.length > 0 && (n.images = p), m.length > 0 && (n.shapes = m), u.length > 0 && (n.skeletons = u), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const p = o[l];
        delete p.metadata, c.push(p);
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
St.DEFAULT_UP = /* @__PURE__ */ new O(0, 1, 0);
St.DEFAULT_MATRIX_AUTO_UPDATE = !0;
St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class On extends St {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const To = { type: "move" };
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
    return this._hand === null && (this._hand = new On(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new On(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new O(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new O()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new On(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new O(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new O(), this._grip.eventsEnabled = !1), this._grip;
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
          const d = t.getJointPose(S, n), h = this._getHandJoint(l, S);
          d !== null && (h.matrix.fromArray(d.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = d.radius), h.visible = d !== null;
        }
        const p = l.joints["index-finger-tip"], m = l.joints["thumb-tip"], u = p.position.distanceTo(m.position), f = 0.02, g = 5e-3;
        l.inputState.pinching && u > f + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && u <= f - g && (l.inputState.pinching = !0, this.dispatchEvent({
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
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(To)));
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
      const n = new On();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Ba = {
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
}, Mn = { h: 0, s: 0, l: 0 }, Oi = { h: 0, s: 0, l: 0 };
function Ur(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class We {
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
  setHex(e, t = It) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ye.colorSpaceToWorking(this, t), this;
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
  setRGB(e, t, n, r = Ye.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ye.colorSpaceToWorking(this, r), this;
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
  setHSL(e, t, n, r = Ye.workingColorSpace) {
    if (e = po(e, 1), t = Ze(t, 0, 1), n = Ze(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Ur(a, s, e + 1 / 3), this.g = Ur(a, s, e), this.b = Ur(a, s, e - 1 / 3);
    }
    return Ye.colorSpaceToWorking(this, r), this;
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
  setStyle(e, t = It) {
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
  setColorName(e, t = It) {
    const n = Ba[e.toLowerCase()];
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
    return this.r = dn(e.r), this.g = dn(e.g), this.b = dn(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = ui(e.r), this.g = ui(e.g), this.b = ui(e.b), this;
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
  getHex(e = It) {
    return Ye.workingToColorSpace(Dt.copy(this), e), Math.round(Ze(Dt.r * 255, 0, 255)) * 65536 + Math.round(Ze(Dt.g * 255, 0, 255)) * 256 + Math.round(Ze(Dt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = It) {
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
  getHSL(e, t = Ye.workingColorSpace) {
    Ye.workingToColorSpace(Dt.copy(this), t);
    const n = Dt.r, r = Dt.g, s = Dt.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let c, l;
    const p = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const m = a - o;
      switch (l = p <= 0.5 ? m / (a + o) : m / (2 - a - o), a) {
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
    return e.h = c, e.s = l, e.l = p, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = Ye.workingColorSpace) {
    return Ye.workingToColorSpace(Dt.copy(this), t), e.r = Dt.r, e.g = Dt.g, e.b = Dt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = It) {
    Ye.workingToColorSpace(Dt.copy(this), e);
    const t = Dt.r, n = Dt.g, r = Dt.b;
    return e !== It ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
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
    return this.getHSL(Mn), this.setHSL(Mn.h + e, Mn.s + t, Mn.l + n);
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
    this.getHSL(Mn), e.getHSL(Oi);
    const n = Cr(Mn.h, Oi.h, t), r = Cr(Mn.s, Oi.s, t), s = Cr(Mn.l, Oi.l, t);
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
const Dt = /* @__PURE__ */ new We();
We.NAMES = Ba;
class yr {
  /**
   * Constructs a new fog.
   *
   * @param {number|Color} color - The fog's color.
   * @param {number} [near=1] - The minimum distance to start applying fog.
   * @param {number} [far=1000] - The maximum distance at which fog stops being calculated and applied.
   */
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new We(e), this.near = t, this.far = n;
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
class Oa extends St {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new fn(), this.environmentIntensity = 1, this.environmentRotation = new fn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const Yt = /* @__PURE__ */ new O(), on = /* @__PURE__ */ new O(), Nr = /* @__PURE__ */ new O(), ln = /* @__PURE__ */ new O(), $n = /* @__PURE__ */ new O(), jn = /* @__PURE__ */ new O(), Xs = /* @__PURE__ */ new O(), Br = /* @__PURE__ */ new O(), Or = /* @__PURE__ */ new O(), Gr = /* @__PURE__ */ new O(), zr = /* @__PURE__ */ new mt(), Vr = /* @__PURE__ */ new mt(), kr = /* @__PURE__ */ new mt();
class Ut {
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
    r.subVectors(n, t), Yt.subVectors(e, t), r.cross(Yt);
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
    Yt.subVectors(r, t), on.subVectors(n, t), Nr.subVectors(e, t);
    const a = Yt.dot(Yt), o = Yt.dot(on), c = Yt.dot(Nr), l = on.dot(on), p = on.dot(Nr), m = a * l - o * o;
    if (m === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / m, f = (l * c - o * p) * u, g = (a * p - o * c) * u;
    return s.set(1 - f - g, g, f);
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
    return this.getBarycoord(e, t, n, r, ln) === null ? !1 : ln.x >= 0 && ln.y >= 0 && ln.x + ln.y <= 1;
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
    return this.getBarycoord(e, t, n, r, ln) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, ln.x), c.addScaledVector(a, ln.y), c.addScaledVector(o, ln.z), c);
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
    return zr.setScalar(0), Vr.setScalar(0), kr.setScalar(0), zr.fromBufferAttribute(e, t), Vr.fromBufferAttribute(e, n), kr.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(zr, s.x), a.addScaledVector(Vr, s.y), a.addScaledVector(kr, s.z), a;
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
    return Yt.subVectors(n, t), on.subVectors(e, t), Yt.cross(on).dot(r) < 0;
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
    return Yt.subVectors(this.c, this.b), on.subVectors(this.a, this.b), Yt.cross(on).length() * 0.5;
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
    return Ut.getNormal(this.a, this.b, this.c, e);
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
    return Ut.getBarycoord(e, this.a, this.b, this.c, t);
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
    return Ut.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
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
    return Ut.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return Ut.isFrontFacing(this.a, this.b, this.c, e);
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
    $n.subVectors(r, n), jn.subVectors(s, n), Br.subVectors(e, n);
    const c = $n.dot(Br), l = jn.dot(Br);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Or.subVectors(e, r);
    const p = $n.dot(Or), m = jn.dot(Or);
    if (p >= 0 && m <= p)
      return t.copy(r);
    const u = c * m - p * l;
    if (u <= 0 && c >= 0 && p <= 0)
      return a = c / (c - p), t.copy(n).addScaledVector($n, a);
    Gr.subVectors(e, s);
    const f = $n.dot(Gr), g = jn.dot(Gr);
    if (g >= 0 && f <= g)
      return t.copy(s);
    const S = f * l - c * g;
    if (S <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(jn, o);
    const d = p * g - f * m;
    if (d <= 0 && m - p >= 0 && f - g >= 0)
      return Xs.subVectors(s, r), o = (m - p) / (m - p + (f - g)), t.copy(r).addScaledVector(Xs, o);
    const h = 1 / (d + S + u);
    return a = S * h, o = u * h, t.copy(n).addScaledVector($n, a).addScaledVector(jn, o);
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
class di {
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
      this.expandByPoint(Zt.fromArray(e, t));
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
      this.expandByPoint(Zt.fromBufferAttribute(e, t));
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
    const n = Zt.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(a, Zt) : Zt.fromBufferAttribute(s, a), Zt.applyMatrix4(e.matrixWorld), this.expandByPoint(Zt);
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
    return this.clampPoint(e.center, Zt), Zt.distanceToSquared(e.center) <= e.radius * e.radius;
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
    this.getCenter(vi), zi.subVectors(this.max, vi), Jn.subVectors(e.a, vi), Qn.subVectors(e.b, vi), ei.subVectors(e.c, vi), Sn.subVectors(Qn, Jn), yn.subVectors(ei, Qn), Fn.subVectors(Jn, ei);
    let t = [
      0,
      -Sn.z,
      Sn.y,
      0,
      -yn.z,
      yn.y,
      0,
      -Fn.z,
      Fn.y,
      Sn.z,
      0,
      -Sn.x,
      yn.z,
      0,
      -yn.x,
      Fn.z,
      0,
      -Fn.x,
      -Sn.y,
      Sn.x,
      0,
      -yn.y,
      yn.x,
      0,
      -Fn.y,
      Fn.x,
      0
    ];
    return !Hr(t, Jn, Qn, ei, zi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Hr(t, Jn, Qn, ei, zi)) ? !1 : (Vi.crossVectors(Sn, yn), t = [Vi.x, Vi.y, Vi.z], Hr(t, Jn, Qn, ei, zi));
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
    return this.clampPoint(e, Zt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Zt).length() * 0.5), e;
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
    return this.isEmpty() ? this : (cn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), cn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), cn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), cn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), cn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), cn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), cn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), cn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(cn), this);
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
const cn = [
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O()
], Zt = /* @__PURE__ */ new O(), Gi = /* @__PURE__ */ new di(), Jn = /* @__PURE__ */ new O(), Qn = /* @__PURE__ */ new O(), ei = /* @__PURE__ */ new O(), Sn = /* @__PURE__ */ new O(), yn = /* @__PURE__ */ new O(), Fn = /* @__PURE__ */ new O(), vi = /* @__PURE__ */ new O(), zi = /* @__PURE__ */ new O(), Vi = /* @__PURE__ */ new O(), In = /* @__PURE__ */ new O();
function Hr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    In.fromArray(i, s);
    const o = r.x * Math.abs(In.x) + r.y * Math.abs(In.y) + r.z * Math.abs(In.z), c = e.dot(In), l = t.dot(In), p = n.dot(In);
    if (Math.max(-Math.max(c, l, p), Math.min(c, l, p)) > o)
      return !1;
  }
  return !0;
}
const Mt = /* @__PURE__ */ new O(), ki = /* @__PURE__ */ new Ue();
let bo = 0;
class Wt extends wn {
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
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: bo++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
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
    return this.normalized && (n = rn(n, this.array)), n;
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
    return this.normalized && (n = rt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = rn(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = rt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = rn(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = rt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = rn(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = rt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = rn(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = rt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
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
    return e *= this.itemSize, this.normalized && (t = rt(t, this.array), n = rt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
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
    return e *= this.itemSize, this.normalized && (t = rt(t, this.array), n = rt(n, this.array), r = rt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
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
    return e *= this.itemSize, this.normalized && (t = rt(t, this.array), n = rt(n, this.array), r = rt(r, this.array), s = rt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
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
class gs extends Wt {
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
class xs extends Wt {
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
class dt extends Wt {
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
const Ao = /* @__PURE__ */ new di(), Mi = /* @__PURE__ */ new O(), Wr = /* @__PURE__ */ new O();
class Fi {
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
    t !== void 0 ? n.copy(t) : Ao.setFromPoints(e).getCenter(n);
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
    Mi.subVectors(e, this.center);
    const t = Mi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Mi, r / n), this.radius += r;
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
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Wr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Mi.copy(e.center).add(Wr)), this.expandByPoint(Mi.copy(e.center).sub(Wr))), this);
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
let Ro = 0;
const Ht = /* @__PURE__ */ new ft(), Xr = /* @__PURE__ */ new St(), ti = /* @__PURE__ */ new O(), zt = /* @__PURE__ */ new di(), Si = /* @__PURE__ */ new di(), Tt = /* @__PURE__ */ new O();
class Rt extends wn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ro++ }), this.uuid = Rn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
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
    return Array.isArray(e) ? this.index = new (uo(e) ? xs : gs)(e, 1) : this.index = e, this;
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
      const s = new Ne().getNormalMatrix(e);
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
    return Xr.lookAt(e), Xr.updateMatrix(), this.applyMatrix4(Xr.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ti).negate(), this.translate(ti.x, ti.y, ti.z), this;
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
      this.setAttribute("position", new dt(n, 3));
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
    this.boundingBox === null && (this.boundingBox = new di());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new O(-1 / 0, -1 / 0, -1 / 0),
        new O(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          zt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Tt.addVectors(this.boundingBox.min, zt.min), this.boundingBox.expandByPoint(Tt), Tt.addVectors(this.boundingBox.max, zt.max), this.boundingBox.expandByPoint(Tt)) : (this.boundingBox.expandByPoint(zt.min), this.boundingBox.expandByPoint(zt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Fi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new O(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (zt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Si.setFromBufferAttribute(o), this.morphTargetsRelative ? (Tt.addVectors(zt.min, Si.min), zt.expandByPoint(Tt), Tt.addVectors(zt.max, Si.max), zt.expandByPoint(Tt)) : (zt.expandByPoint(Si.min), zt.expandByPoint(Si.max));
        }
      zt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        Tt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(Tt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, p = o.count; l < p; l++)
            Tt.fromBufferAttribute(o, l), c && (ti.fromBufferAttribute(e, l), Tt.add(ti)), r = Math.max(r, n.distanceToSquared(Tt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
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
      Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Wt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let x = 0; x < n.count; x++)
      o[x] = new O(), c[x] = new O();
    const l = new O(), p = new O(), m = new O(), u = new Ue(), f = new Ue(), g = new Ue(), S = new O(), d = new O();
    function h(x, A, L) {
      l.fromBufferAttribute(n, x), p.fromBufferAttribute(n, A), m.fromBufferAttribute(n, L), u.fromBufferAttribute(s, x), f.fromBufferAttribute(s, A), g.fromBufferAttribute(s, L), p.sub(l), m.sub(l), f.sub(u), g.sub(u);
      const C = 1 / (f.x * g.y - g.x * f.y);
      isFinite(C) && (S.copy(p).multiplyScalar(g.y).addScaledVector(m, -f.y).multiplyScalar(C), d.copy(m).multiplyScalar(f.x).addScaledVector(p, -g.x).multiplyScalar(C), o[x].add(S), o[A].add(S), o[L].add(S), c[x].add(d), c[A].add(d), c[L].add(d));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: e.count
    }]);
    for (let x = 0, A = M.length; x < A; ++x) {
      const L = M[x], C = L.start, U = L.count;
      for (let W = C, X = C + U; W < X; W += 3)
        h(
          e.getX(W + 0),
          e.getX(W + 1),
          e.getX(W + 2)
        );
    }
    const b = new O(), E = new O(), R = new O(), y = new O();
    function w(x) {
      R.fromBufferAttribute(r, x), y.copy(R);
      const A = o[x];
      b.copy(A), b.sub(R.multiplyScalar(R.dot(A))).normalize(), E.crossVectors(y, A);
      const C = E.dot(c[x]) < 0 ? -1 : 1;
      a.setXYZW(x, b.x, b.y, b.z, C);
    }
    for (let x = 0, A = M.length; x < A; ++x) {
      const L = M[x], C = L.start, U = L.count;
      for (let W = C, X = C + U; W < X; W += 3)
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
        n = new Wt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, f = n.count; u < f; u++)
          n.setXYZ(u, 0, 0, 0);
      const r = new O(), s = new O(), a = new O(), o = new O(), c = new O(), l = new O(), p = new O(), m = new O();
      if (e)
        for (let u = 0, f = e.count; u < f; u += 3) {
          const g = e.getX(u + 0), S = e.getX(u + 1), d = e.getX(u + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, S), a.fromBufferAttribute(t, d), p.subVectors(a, s), m.subVectors(r, s), p.cross(m), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, S), l.fromBufferAttribute(n, d), o.add(p), c.add(p), l.add(p), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(S, c.x, c.y, c.z), n.setXYZ(d, l.x, l.y, l.z);
        }
      else
        for (let u = 0, f = t.count; u < f; u += 3)
          r.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), p.subVectors(a, s), m.subVectors(r, s), p.cross(m), n.setXYZ(u + 0, p.x, p.y, p.z), n.setXYZ(u + 1, p.x, p.y, p.z), n.setXYZ(u + 2, p.x, p.y, p.z);
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
      Tt.fromBufferAttribute(e, t), Tt.normalize(), e.setXYZ(t, Tt.x, Tt.y, Tt.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, p = o.itemSize, m = o.normalized, u = new l.constructor(c.length * p);
      let f = 0, g = 0;
      for (let S = 0, d = c.length; S < d; S++) {
        o.isInterleavedBufferAttribute ? f = c[S] * o.data.stride + o.offset : f = c[S] * p;
        for (let h = 0; h < p; h++)
          u[g++] = l[f++];
      }
      return new Wt(u, p, m);
    }
    if (this.index === null)
      return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Rt(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let p = 0, m = l.length; p < m; p++) {
        const u = l[p], f = e(u, n);
        c.push(f);
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
      const l = this.morphAttributes[c], p = [];
      for (let m = 0, u = l.length; m < u; m++) {
        const f = l[m];
        p.push(f.toJSON(e.data));
      }
      p.length > 0 && (r[c] = p, s = !0);
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
      const p = r[l];
      this.setAttribute(l, p.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const p = [], m = s[l];
      for (let u = 0, f = m.length; u < f; u++)
        p.push(m[u].clone(t));
      this.morphAttributes[l] = p;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, p = a.length; l < p; l++) {
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
class Ga {
  /**
   * Constructs a new interleaved buffer.
   *
   * @param {TypedArray} array - A typed array with a shared buffer storing attribute data.
   * @param {number} stride - The number of typed-array elements per vertex.
   */
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = Rn();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Rn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
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
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Rn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Lt = /* @__PURE__ */ new O();
class Li {
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
      Lt.fromBufferAttribute(this, t), Lt.applyMatrix4(e), this.setXYZ(t, Lt.x, Lt.y, Lt.z);
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
      Lt.fromBufferAttribute(this, t), Lt.applyNormalMatrix(e), this.setXYZ(t, Lt.x, Lt.y, Lt.z);
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
      Lt.fromBufferAttribute(this, t), Lt.transformDirection(e), this.setXYZ(t, Lt.x, Lt.y, Lt.z);
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
    return this.normalized && (n = rn(n, this.array)), n;
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
    return this.normalized && (n = rt(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = rt(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = rt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = rt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = rt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = rn(t, this.array)), t;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = rn(t, this.array)), t;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = rn(t, this.array)), t;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = rn(t, this.array)), t;
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
    return e = e * this.data.stride + this.offset, this.normalized && (t = rt(t, this.array), n = rt(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
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
    return e = e * this.data.stride + this.offset, this.normalized && (t = rt(t, this.array), n = rt(n, this.array), r = rt(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
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
    return e = e * this.data.stride + this.offset, this.normalized && (t = rt(t, this.array), n = rt(n, this.array), r = rt(r, this.array), s = rt(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = s, this;
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
      Di("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return new Wt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Li(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
      Di("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
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
let wo = 0;
class pn extends wn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: wo++ }), this.uuid = Rn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new We(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
class _r extends pn {
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
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new We(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let ni;
const yi = /* @__PURE__ */ new O(), ii = /* @__PURE__ */ new O(), ri = /* @__PURE__ */ new O(), si = /* @__PURE__ */ new Ue(), Ei = /* @__PURE__ */ new Ue(), za = /* @__PURE__ */ new ft(), Hi = /* @__PURE__ */ new O(), Ti = /* @__PURE__ */ new O(), Wi = /* @__PURE__ */ new O(), qs = /* @__PURE__ */ new Ue(), qr = /* @__PURE__ */ new Ue(), Ys = /* @__PURE__ */ new Ue();
class cs extends St {
  /**
   * Constructs a new sprite.
   *
   * @param {(SpriteMaterial|SpriteNodeMaterial)} [material] - The sprite material.
   */
  constructor(e = new _r()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", ni === void 0) {
      ni = new Rt();
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
      ]), n = new Ga(t, 5);
      ni.setIndex([0, 1, 2, 0, 2, 3]), ni.setAttribute("position", new Li(n, 3, 0, !1)), ni.setAttribute("uv", new Li(n, 2, 3, !1));
    }
    this.geometry = ni, this.material = e, this.center = new Ue(0.5, 0.5), this.count = 1;
  }
  /**
   * Computes intersection points between a casted ray and this sprite.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    e.camera === null && Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ii.setFromMatrixScale(this.matrixWorld), za.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), ri.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && ii.multiplyScalar(-ri.z);
    const n = this.material.rotation;
    let r, s;
    n !== 0 && (s = Math.cos(n), r = Math.sin(n));
    const a = this.center;
    Xi(Hi.set(-0.5, -0.5, 0), ri, a, ii, r, s), Xi(Ti.set(0.5, -0.5, 0), ri, a, ii, r, s), Xi(Wi.set(0.5, 0.5, 0), ri, a, ii, r, s), qs.set(0, 0), qr.set(1, 0), Ys.set(1, 1);
    let o = e.ray.intersectTriangle(Hi, Ti, Wi, !1, yi);
    if (o === null && (Xi(Ti.set(-0.5, 0.5, 0), ri, a, ii, r, s), qr.set(0, 1), o = e.ray.intersectTriangle(Hi, Wi, Ti, !1, yi), o === null))
      return;
    const c = e.ray.origin.distanceTo(yi);
    c < e.near || c > e.far || t.push({
      distance: c,
      point: yi.clone(),
      uv: Ut.getInterpolation(yi, Hi, Ti, Wi, qs, qr, Ys, new Ue()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Xi(i, e, t, n, r, s) {
  si.subVectors(i, t).addScalar(0.5).multiply(n), r !== void 0 ? (Ei.x = s * si.x - r * si.y, Ei.y = r * si.x + s * si.y) : Ei.copy(si), i.copy(e), i.x += Ei.x, i.y += Ei.y, i.applyMatrix4(za);
}
const un = /* @__PURE__ */ new O(), Yr = /* @__PURE__ */ new O(), qi = /* @__PURE__ */ new O(), En = /* @__PURE__ */ new O(), Zr = /* @__PURE__ */ new O(), Yi = /* @__PURE__ */ new O(), Kr = /* @__PURE__ */ new O();
class vs {
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
    return this.origin.copy(this.at(e, un)), this;
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
    const t = un.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (un.copy(this.origin).addScaledVector(this.direction, t), un.distanceToSquared(e));
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
    Yr.copy(e).add(t).multiplyScalar(0.5), qi.copy(t).sub(e).normalize(), En.copy(this.origin).sub(Yr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(qi), o = En.dot(this.direction), c = -En.dot(qi), l = En.lengthSq(), p = Math.abs(1 - a * a);
    let m, u, f, g;
    if (p > 0)
      if (m = a * c - o, u = a * o - c, g = s * p, m >= 0)
        if (u >= -g)
          if (u <= g) {
            const S = 1 / p;
            m *= S, u *= S, f = m * (m + a * u + 2 * o) + u * (a * m + u + 2 * c) + l;
          } else
            u = s, m = Math.max(0, -(a * u + o)), f = -m * m + u * (u + 2 * c) + l;
        else
          u = -s, m = Math.max(0, -(a * u + o)), f = -m * m + u * (u + 2 * c) + l;
      else
        u <= -g ? (m = Math.max(0, -(-a * s + o)), u = m > 0 ? -s : Math.min(Math.max(-s, -c), s), f = -m * m + u * (u + 2 * c) + l) : u <= g ? (m = 0, u = Math.min(Math.max(-s, -c), s), f = u * (u + 2 * c) + l) : (m = Math.max(0, -(a * s + o)), u = m > 0 ? s : Math.min(Math.max(-s, -c), s), f = -m * m + u * (u + 2 * c) + l);
    else
      u = a > 0 ? -s : s, m = Math.max(0, -(a * u + o)), f = -m * m + u * (u + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, m), r && r.copy(Yr).addScaledVector(qi, u), f;
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
    un.subVectors(e.center, this.origin);
    const n = un.dot(this.direction), r = un.dot(un) - n * n, s = e.radius * e.radius;
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
    const l = 1 / this.direction.x, p = 1 / this.direction.y, m = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l), p >= 0 ? (s = (e.min.y - u.y) * p, a = (e.max.y - u.y) * p) : (s = (e.max.y - u.y) * p, a = (e.min.y - u.y) * p), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), m >= 0 ? (o = (e.min.z - u.z) * m, c = (e.max.z - u.z) * m) : (o = (e.max.z - u.z) * m, c = (e.min.z - u.z) * m), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, un) !== null;
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
    Zr.subVectors(t, e), Yi.subVectors(n, e), Kr.crossVectors(Zr, Yi);
    let a = this.direction.dot(Kr), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    En.subVectors(this.origin, e);
    const c = o * this.direction.dot(Yi.crossVectors(En, Yi));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Zr.cross(En));
    if (l < 0 || c + l > a)
      return null;
    const p = -o * En.dot(Kr);
    return p < 0 ? null : this.at(p / a, s);
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
class Er extends pn {
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
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new We(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new fn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Zs = /* @__PURE__ */ new ft(), Un = /* @__PURE__ */ new vs(), Zi = /* @__PURE__ */ new Fi(), Ks = /* @__PURE__ */ new O(), Ki = /* @__PURE__ */ new O(), $i = /* @__PURE__ */ new O(), ji = /* @__PURE__ */ new O(), $r = /* @__PURE__ */ new O(), Ji = /* @__PURE__ */ new O(), $s = /* @__PURE__ */ new O(), Qi = /* @__PURE__ */ new O();
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
        const p = o[c], m = s[c];
        p !== 0 && ($r.fromBufferAttribute(m, e), a ? Ji.addScaledVector($r, p) : Ji.addScaledVector($r.sub(t), p));
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
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Zi.copy(n.boundingSphere), Zi.applyMatrix4(s), Un.copy(e.ray).recast(e.near), !(Zi.containsPoint(Un.origin) === !1 && (Un.intersectSphere(Zi, Ks) === null || Un.origin.distanceToSquared(Ks) > (e.far - e.near) ** 2)) && (Zs.copy(s).invert(), Un.copy(e.ray).applyMatrix4(Zs), !(n.boundingBox !== null && Un.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Un)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, p = s.attributes.uv1, m = s.attributes.normal, u = s.groups, f = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, S = u.length; g < S; g++) {
          const d = u[g], h = a[d.materialIndex], M = Math.max(d.start, f.start), b = Math.min(o.count, Math.min(d.start + d.count, f.start + f.count));
          for (let E = M, R = b; E < R; E += 3) {
            const y = o.getX(E), w = o.getX(E + 1), x = o.getX(E + 2);
            r = er(this, h, e, n, l, p, m, y, w, x), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = d.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, f.start), S = Math.min(o.count, f.start + f.count);
        for (let d = g, h = S; d < h; d += 3) {
          const M = o.getX(d), b = o.getX(d + 1), E = o.getX(d + 2);
          r = er(this, a, e, n, l, p, m, M, b, E), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, S = u.length; g < S; g++) {
          const d = u[g], h = a[d.materialIndex], M = Math.max(d.start, f.start), b = Math.min(c.count, Math.min(d.start + d.count, f.start + f.count));
          for (let E = M, R = b; E < R; E += 3) {
            const y = E, w = E + 1, x = E + 2;
            r = er(this, h, e, n, l, p, m, y, w, x), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = d.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, f.start), S = Math.min(c.count, f.start + f.count);
        for (let d = g, h = S; d < h; d += 3) {
          const M = d, b = d + 1, E = d + 2;
          r = er(this, a, e, n, l, p, m, M, b, E), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
        }
      }
  }
}
function Co(i, e, t, n, r, s, a, o) {
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
  const p = Co(i, e, t, n, Ki, $i, ji, $s);
  if (p) {
    const m = new O();
    Ut.getBarycoord($s, Ki, $i, ji, m), r && (p.uv = Ut.getInterpolatedAttribute(r, o, c, l, m, new Ue())), s && (p.uv1 = Ut.getInterpolatedAttribute(s, o, c, l, m, new Ue())), a && (p.normal = Ut.getInterpolatedAttribute(a, o, c, l, m, new O()), p.normal.dot(n.direction) > 0 && p.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new O(),
      materialIndex: 0
    };
    Ut.getNormal(Ki, $i, ji, u.normal), p.face = u, p.barycoord = m;
  }
  return p;
}
class Va extends At {
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
  constructor(e = null, t = 1, n = 1, r, s, a, o, c, l = 1003, p = 1003, m, u) {
    super(null, a, o, c, l, p, r, s, m, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const jr = /* @__PURE__ */ new O(), Po = /* @__PURE__ */ new O(), Do = /* @__PURE__ */ new Ne();
class bn {
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
    const r = jr.subVectors(n, t).cross(Po.subVectors(e, t)).normalize();
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
    const r = e.delta(jr), s = this.normal.dot(r);
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
    const n = t || Do.getNormalMatrix(e), r = this.coplanarPoint(jr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const Nn = /* @__PURE__ */ new Fi(), Lo = /* @__PURE__ */ new Ue(0.5, 0.5), tr = /* @__PURE__ */ new O();
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
  constructor(e = new bn(), t = new bn(), n = new bn(), r = new bn(), s = new bn(), a = new bn()) {
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
    const r = this.planes, s = e.elements, a = s[0], o = s[1], c = s[2], l = s[3], p = s[4], m = s[5], u = s[6], f = s[7], g = s[8], S = s[9], d = s[10], h = s[11], M = s[12], b = s[13], E = s[14], R = s[15];
    if (r[0].setComponents(l - a, f - p, h - g, R - M).normalize(), r[1].setComponents(l + a, f + p, h + g, R + M).normalize(), r[2].setComponents(l + o, f + m, h + S, R + b).normalize(), r[3].setComponents(l - o, f - m, h - S, R - b).normalize(), n)
      r[4].setComponents(c, u, d, E).normalize(), r[5].setComponents(l - c, f - u, h - d, R - E).normalize();
    else if (r[4].setComponents(l - c, f - u, h - d, R - E).normalize(), t === 2e3)
      r[5].setComponents(l + c, f + u, h + d, R + E).normalize();
    else if (t === 2001)
      r[5].setComponents(c, u, d, E).normalize();
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
      e.boundingSphere === null && e.computeBoundingSphere(), Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Nn);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    Nn.center.set(0, 0, 0);
    const t = Lo.distanceTo(e.center);
    return Nn.radius = 0.7071067811865476 + t, Nn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Nn);
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
class ka extends pn {
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
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new We(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const gr = /* @__PURE__ */ new O(), xr = /* @__PURE__ */ new O(), js = /* @__PURE__ */ new ft(), bi = /* @__PURE__ */ new vs(), nr = /* @__PURE__ */ new Fi(), Jr = /* @__PURE__ */ new O(), Js = /* @__PURE__ */ new O();
class Ha extends St {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(e = new Rt(), t = new ka()) {
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
      e.setAttribute("lineDistance", new dt(n, 1));
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
    if (n.boundingSphere === null && n.computeBoundingSphere(), nr.copy(n.boundingSphere), nr.applyMatrix4(r), nr.radius += s, e.ray.intersectsSphere(nr) === !1) return;
    js.copy(r).invert(), bi.copy(e.ray).applyMatrix4(js);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, p = n.index, u = n.attributes.position;
    if (p !== null) {
      const f = Math.max(0, a.start), g = Math.min(p.count, a.start + a.count);
      for (let S = f, d = g - 1; S < d; S += l) {
        const h = p.getX(S), M = p.getX(S + 1), b = ir(this, e, bi, c, h, M, S);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const S = p.getX(g - 1), d = p.getX(f), h = ir(this, e, bi, c, S, d, g - 1);
        h && t.push(h);
      }
    } else {
      const f = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let S = f, d = g - 1; S < d; S += l) {
        const h = ir(this, e, bi, c, S, S + 1, S);
        h && t.push(h);
      }
      if (this.isLineLoop) {
        const S = ir(this, e, bi, c, g - 1, f, g - 1);
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
function ir(i, e, t, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (gr.fromBufferAttribute(o, r), xr.fromBufferAttribute(o, s), t.distanceSqToSegment(gr, xr, Jr, Js) > n) return;
  Jr.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(Jr);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Js.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Qs = /* @__PURE__ */ new O(), ea = /* @__PURE__ */ new O();
class Fo extends Ha {
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
        Qs.fromBufferAttribute(t, r), ea.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Qs.distanceTo(ea);
      e.setAttribute("lineDistance", new dt(n, 1));
    } else
      Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Ms extends At {
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
  constructor(e = [], t = 301, n, r, s, a, o, c, l, p) {
    super(e, t, n, r, s, a, o, c, l, p), this.isCubeTexture = !0, this.flipY = !1;
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
class us extends At {
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
class Gn extends At {
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
  constructor(e, t, n = 1014, r, s, a, o = 1003, c = 1003, l, p = 1026, m = 1) {
    if (p !== 1026 && p !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: m };
    super(u, r, s, a, o, c, p, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Sr(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Wa extends Gn {
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
    const p = { width: e, height: e, depth: 1 }, m = [p, p, p, p, p, p];
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
class Ss extends At {
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
class fi extends Rt {
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
    const c = [], l = [], p = [], m = [];
    let u = 0, f = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, a, 2), g("x", "z", "y", 1, -1, e, n, -t, r, a, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new dt(l, 3)), this.setAttribute("normal", new dt(p, 3)), this.setAttribute("uv", new dt(m, 2));
    function g(S, d, h, M, b, E, R, y, w, x, A) {
      const L = E / w, C = R / x, U = E / 2, W = R / 2, X = y / 2, I = w + 1, V = x + 1;
      let q = 0, J = 0;
      const ne = new O();
      for (let he = 0; he < V; he++) {
        const ye = he * C - W;
        for (let Te = 0; Te < I; Te++) {
          const Xe = Te * L - U;
          ne[S] = Xe * M, ne[d] = ye * b, ne[h] = X, l.push(ne.x, ne.y, ne.z), ne[S] = 0, ne[d] = 0, ne[h] = y > 0 ? 1 : -1, p.push(ne.x, ne.y, ne.z), m.push(Te / w), m.push(1 - he / x), q += 1;
        }
      }
      for (let he = 0; he < x; he++)
        for (let ye = 0; ye < w; ye++) {
          const Te = u + ye + I * he, Xe = u + ye + I * (he + 1), Q = u + (ye + 1) + I * (he + 1), ae = u + (ye + 1) + I * he;
          c.push(Te, Xe, ae), c.push(Xe, Q, ae), J += 6;
        }
      o.addGroup(f, J, A), f += J, u += q;
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
    return new fi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
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
    const s = [], a = [], o = [], c = [], l = new O(), p = new Ue();
    a.push(0, 0, 0), o.push(0, 0, 1), c.push(0.5, 0.5);
    for (let m = 0, u = 3; m <= t; m++, u += 3) {
      const f = n + m / t * r;
      l.x = e * Math.cos(f), l.y = e * Math.sin(f), a.push(l.x, l.y, l.z), o.push(0, 0, 1), p.x = (a[u] / e + 1) / 2, p.y = (a[u + 1] / e + 1) / 2, c.push(p.x, p.y);
    }
    for (let m = 1; m <= t; m++)
      s.push(m, m + 1, 0);
    this.setIndex(s), this.setAttribute("position", new dt(a, 3)), this.setAttribute("normal", new dt(o, 3)), this.setAttribute("uv", new dt(c, 2));
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
class ys extends Rt {
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
    const p = [], m = [], u = [], f = [];
    let g = 0;
    const S = [], d = n / 2;
    let h = 0;
    M(), a === !1 && (e > 0 && b(!0), t > 0 && b(!1)), this.setIndex(p), this.setAttribute("position", new dt(m, 3)), this.setAttribute("normal", new dt(u, 3)), this.setAttribute("uv", new dt(f, 2));
    function M() {
      const E = new O(), R = new O();
      let y = 0;
      const w = (t - e) / n;
      for (let x = 0; x <= s; x++) {
        const A = [], L = x / s, C = L * (t - e) + e;
        for (let U = 0; U <= r; U++) {
          const W = U / r, X = W * c + o, I = Math.sin(X), V = Math.cos(X);
          R.x = C * I, R.y = -L * n + d, R.z = C * V, m.push(R.x, R.y, R.z), E.set(I, w, V).normalize(), u.push(E.x, E.y, E.z), f.push(W, 1 - L), A.push(g++);
        }
        S.push(A);
      }
      for (let x = 0; x < r; x++)
        for (let A = 0; A < s; A++) {
          const L = S[A][x], C = S[A + 1][x], U = S[A + 1][x + 1], W = S[A][x + 1];
          (e > 0 || A !== 0) && (p.push(L, C, W), y += 3), (t > 0 || A !== s - 1) && (p.push(C, U, W), y += 3);
        }
      l.addGroup(h, y, 0), h += y;
    }
    function b(E) {
      const R = g, y = new Ue(), w = new O();
      let x = 0;
      const A = E === !0 ? e : t, L = E === !0 ? 1 : -1;
      for (let U = 1; U <= r; U++)
        m.push(0, d * L, 0), u.push(0, L, 0), f.push(0.5, 0.5), g++;
      const C = g;
      for (let U = 0; U <= r; U++) {
        const X = U / r * c + o, I = Math.cos(X), V = Math.sin(X);
        w.x = A * V, w.y = d * L, w.z = A * I, m.push(w.x, w.y, w.z), u.push(0, L, 0), y.x = I * 0.5 + 0.5, y.y = V * 0.5 * L + 0.5, f.push(y.x, y.y), g++;
      }
      for (let U = 0; U < r; U++) {
        const W = R + U, X = C + U;
        E === !0 ? p.push(X, X + 1, W) : p.push(X + 1, X, W), x += 3;
      }
      l.addGroup(h, x, E === !0 ? 1 : 2), h += x;
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
    return new ys(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
const rr = /* @__PURE__ */ new O(), sr = /* @__PURE__ */ new O(), Qr = /* @__PURE__ */ new O(), ar = /* @__PURE__ */ new Ut();
class Io extends Rt {
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
      const r = Math.pow(10, 4), s = Math.cos(hr * t), a = e.getIndex(), o = e.getAttribute("position"), c = a ? a.count : o.count, l = [0, 0, 0], p = ["a", "b", "c"], m = new Array(3), u = {}, f = [];
      for (let g = 0; g < c; g += 3) {
        a ? (l[0] = a.getX(g), l[1] = a.getX(g + 1), l[2] = a.getX(g + 2)) : (l[0] = g, l[1] = g + 1, l[2] = g + 2);
        const { a: S, b: d, c: h } = ar;
        if (S.fromBufferAttribute(o, l[0]), d.fromBufferAttribute(o, l[1]), h.fromBufferAttribute(o, l[2]), ar.getNormal(Qr), m[0] = `${Math.round(S.x * r)},${Math.round(S.y * r)},${Math.round(S.z * r)}`, m[1] = `${Math.round(d.x * r)},${Math.round(d.y * r)},${Math.round(d.z * r)}`, m[2] = `${Math.round(h.x * r)},${Math.round(h.y * r)},${Math.round(h.z * r)}`, !(m[0] === m[1] || m[1] === m[2] || m[2] === m[0]))
          for (let M = 0; M < 3; M++) {
            const b = (M + 1) % 3, E = m[M], R = m[b], y = ar[p[M]], w = ar[p[b]], x = `${E}_${R}`, A = `${R}_${E}`;
            A in u && u[A] ? (Qr.dot(u[A].normal) <= s && (f.push(y.x, y.y, y.z), f.push(w.x, w.y, w.z)), u[A] = null) : x in u || (u[x] = {
              index0: l[M],
              index1: l[b],
              normal: Qr.clone()
            });
          }
      }
      for (const g in u)
        if (u[g]) {
          const { index0: S, index1: d } = u[g];
          rr.fromBufferAttribute(o, S), sr.fromBufferAttribute(o, d), f.push(rr.x, rr.y, rr.z), f.push(sr.x, sr.y, sr.z);
        }
      this.setAttribute("position", new dt(f, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class Es extends Rt {
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
  constructor(e = [new Ue(0, -0.5), new Ue(0.5, 0), new Ue(0, 0.5)], t = 12, n = 0, r = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: r
    }, t = Math.floor(t), r = Ze(r, 0, Math.PI * 2);
    const s = [], a = [], o = [], c = [], l = [], p = 1 / t, m = new O(), u = new Ue(), f = new O(), g = new O(), S = new O();
    let d = 0, h = 0;
    for (let M = 0; M <= e.length - 1; M++)
      switch (M) {
        case 0:
          d = e[M + 1].x - e[M].x, h = e[M + 1].y - e[M].y, f.x = h * 1, f.y = -d, f.z = h * 0, S.copy(f), f.normalize(), c.push(f.x, f.y, f.z);
          break;
        case e.length - 1:
          c.push(S.x, S.y, S.z);
          break;
        default:
          d = e[M + 1].x - e[M].x, h = e[M + 1].y - e[M].y, f.x = h * 1, f.y = -d, f.z = h * 0, g.copy(f), f.x += S.x, f.y += S.y, f.z += S.z, f.normalize(), c.push(f.x, f.y, f.z), S.copy(g);
      }
    for (let M = 0; M <= t; M++) {
      const b = n + M * p * r, E = Math.sin(b), R = Math.cos(b);
      for (let y = 0; y <= e.length - 1; y++) {
        m.x = e[y].x * E, m.y = e[y].y, m.z = e[y].x * R, a.push(m.x, m.y, m.z), u.x = M / t, u.y = y / (e.length - 1), o.push(u.x, u.y);
        const w = c[3 * y + 0] * E, x = c[3 * y + 1], A = c[3 * y + 0] * R;
        l.push(w, x, A);
      }
    }
    for (let M = 0; M < t; M++)
      for (let b = 0; b < e.length - 1; b++) {
        const E = b + M * e.length, R = E, y = E + e.length, w = E + e.length + 1, x = E + 1;
        s.push(R, y, x), s.push(w, x, y);
      }
    this.setIndex(s), this.setAttribute("position", new dt(a, 3)), this.setAttribute("uv", new dt(o, 2)), this.setAttribute("normal", new dt(l, 3));
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
    return new Es(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class pi extends Rt {
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
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, p = c + 1, m = e / o, u = t / c, f = [], g = [], S = [], d = [];
    for (let h = 0; h < p; h++) {
      const M = h * u - a;
      for (let b = 0; b < l; b++) {
        const E = b * m - s;
        g.push(E, -M, 0), S.push(0, 0, 1), d.push(b / o), d.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++)
      for (let M = 0; M < o; M++) {
        const b = M + l * h, E = M + l * (h + 1), R = M + 1 + l * (h + 1), y = M + 1 + l * h;
        f.push(b, E, y), f.push(E, R, y);
      }
    this.setIndex(f), this.setAttribute("position", new dt(g, 3)), this.setAttribute("normal", new dt(S, 3)), this.setAttribute("uv", new dt(d, 2));
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
    return new pi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Ts extends Rt {
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
    const c = [], l = [], p = [], m = [], u = new O(), f = new O(), g = new O();
    for (let S = 0; S <= n; S++) {
      const d = a + S / n * o;
      for (let h = 0; h <= r; h++) {
        const M = h / r * s;
        f.x = (e + t * Math.cos(d)) * Math.cos(M), f.y = (e + t * Math.cos(d)) * Math.sin(M), f.z = t * Math.sin(d), l.push(f.x, f.y, f.z), u.x = e * Math.cos(M), u.y = e * Math.sin(M), g.subVectors(f, u).normalize(), p.push(g.x, g.y, g.z), m.push(h / r), m.push(S / n);
      }
    }
    for (let S = 1; S <= n; S++)
      for (let d = 1; d <= r; d++) {
        const h = (r + 1) * S + d - 1, M = (r + 1) * (S - 1) + d - 1, b = (r + 1) * (S - 1) + d, E = (r + 1) * S + d;
        c.push(h, M, E), c.push(M, b, E);
      }
    this.setIndex(c), this.setAttribute("position", new dt(l, 3)), this.setAttribute("normal", new dt(p, 3)), this.setAttribute("uv", new dt(m, 2));
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
    return new Ts(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Xa extends pn {
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
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new We(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
function hi(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (ta(r))
        r.isRenderTargetTexture ? (Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone();
      else if (Array.isArray(r))
        if (ta(r[0])) {
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
function Ft(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = hi(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function ta(i) {
  return i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion);
}
function Uo(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function qa(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ye.workingColorSpace;
}
const Ya = { clone: hi, merge: Ft };
var No = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Bo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class jt extends pn {
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
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = No, this.fragmentShader = Bo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = hi(e.uniforms), this.uniformsGroups = Uo(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
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
class Za extends jt {
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
class Oo extends pn {
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
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new We(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new We(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ue(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new fn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Ka extends pn {
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
class $a extends pn {
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
class bs extends St {
  /**
   * Constructs a new light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new We(e), this.intensity = t;
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
class ja extends bs {
  /**
   * Constructs a new hemisphere light.
   *
   * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
   * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(St.DEFAULT_UP), this.updateMatrix(), this.groundColor = new We(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const es = /* @__PURE__ */ new ft(), na = /* @__PURE__ */ new O(), ia = /* @__PURE__ */ new O();
class Go {
  /**
   * Constructs a new light shadow.
   *
   * @param {Camera} camera - The light's view of the world.
   */
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ue(512, 512), this.mapType = 1009, this.map = null, this.mapPass = null, this.matrix = new ft(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Tr(), this._frameExtents = new Ue(1, 1), this._viewportCount = 1, this._viewports = [
      new mt(0, 0, 1, 1)
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
    na.setFromMatrixPosition(e.matrixWorld), t.position.copy(na), ia.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ia), t.updateMatrixWorld(), es.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(es, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? n.set(
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
    ), n.multiply(es);
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
const or = /* @__PURE__ */ new O(), lr = /* @__PURE__ */ new zn(), tn = /* @__PURE__ */ new O();
class As extends St {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ft(), this.projectionMatrix = new ft(), this.projectionMatrixInverse = new ft(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
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
    super.updateMatrixWorld(e), this.matrixWorld.decompose(or, lr, tn), tn.x === 1 && tn.y === 1 && tn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(or, lr, tn.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorld.decompose(or, lr, tn), tn.x === 1 && tn.y === 1 && tn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(or, lr, tn.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Tn = /* @__PURE__ */ new O(), ra = /* @__PURE__ */ new Ue(), sa = /* @__PURE__ */ new Ue();
class Vt extends As {
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
    this.fov = ls * 2 * Math.atan(t), this.updateProjectionMatrix();
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
    return ls * 2 * Math.atan(
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
    Tn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Tn.x, Tn.y).multiplyScalar(-e / Tn.z), Tn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Tn.x, Tn.y).multiplyScalar(-e / Tn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, ra, sa), t.subVectors(sa, ra);
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
class Ar extends As {
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
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, p = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= p * this.view.offsetY, c = o - p * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class zo extends Go {
  /**
   * Constructs a new directional light shadow.
   */
  constructor() {
    super(new Ar(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ci extends bs {
  /**
   * Constructs a new directional light.
   *
   * @param {(number|Color|string)} [color=0xffffff] - The light's color.
   * @param {number} [intensity=1] - The light's strength/intensity.
   */
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(St.DEFAULT_UP), this.updateMatrix(), this.target = new St(), this.shadow = new zo();
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
const ai = -90, oi = 1;
class Ja extends St {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Vt(ai, oi, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Vt(ai, oi, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Vt(ai, oi, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Vt(ai, oi, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Vt(ai, oi, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Vt(ai, oi, e, t);
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
    const [s, a, o, c, l, p] = this.children, m = e.getRenderTarget(), u = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const S = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1;
    let d = !1;
    e.isWebGLRenderer === !0 ? d = e.state.buffers.depth.getReversed() : d = e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 1, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(n, 4, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.generateMipmaps = S, e.setRenderTarget(n, 5, r), d && e.autoClear === !1 && e.clearDepth(), e.render(t, p), e.setRenderTarget(m, u, f), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Qa extends Vt {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
const Ls = class Ls {
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
Ls.prototype.isMatrix2 = !0;
let hs = Ls;
function aa(i, e, t, n) {
  const r = Vo(n);
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
function Vo(i) {
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
typeof window < "u" && (window.__THREE__ ? Pe("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Mr);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function eo() {
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
function ko(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, p = o.usage, m = l.byteLength, u = i.createBuffer();
    i.bindBuffer(c, u), i.bufferData(c, l, p), o.onUploadCallback();
    let f;
    if (l instanceof Float32Array)
      f = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      f = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? f = i.HALF_FLOAT : f = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      f = i.SHORT;
    else if (l instanceof Uint32Array)
      f = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      f = i.INT;
    else if (l instanceof Int8Array)
      f = i.BYTE;
    else if (l instanceof Uint8Array)
      f = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      f = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: u,
      type: f,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: m
    };
  }
  function n(o, c, l) {
    const p = c.array, m = c.updateRanges;
    if (i.bindBuffer(l, o), m.length === 0)
      i.bufferSubData(l, 0, p);
    else {
      m.sort((f, g) => f.start - g.start);
      let u = 0;
      for (let f = 1; f < m.length; f++) {
        const g = m[u], S = m[f];
        S.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          S.start + S.count - g.start
        ) : (++u, m[u] = S);
      }
      m.length = u + 1;
      for (let f = 0, g = m.length; f < g; f++) {
        const S = m[f];
        i.bufferSubData(
          l,
          S.start * p.BYTES_PER_ELEMENT,
          p,
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
      const p = e.get(o);
      (!p || p.version < o.version) && e.set(o, {
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
var Ho = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Wo = `#ifdef USE_ALPHAHASH
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
#endif`, Xo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, qo = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Yo = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Zo = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Ko = `#ifdef USE_AOMAP
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
#endif`, $o = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, jo = `#ifdef USE_BATCHING
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
#endif`, Jo = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Qo = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, el = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, tl = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, nl = `#ifdef USE_IRIDESCENCE
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
#endif`, il = `#ifdef USE_BUMPMAP
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
#endif`, rl = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, sl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, al = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ol = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, ll = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, cl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, ul = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, hl = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`, dl = `#define PI 3.141592653589793
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
} // validated`, fl = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, pl = `vec3 transformedNormal = objectNormal;
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
#endif`, ml = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, _l = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, gl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, xl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, vl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ml = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Sl = `#ifdef USE_ENVMAP
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
#endif`, yl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, El = `#ifdef USE_ENVMAP
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
#endif`, Tl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, bl = `#ifdef USE_ENVMAP
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
#endif`, Al = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Rl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, wl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Cl = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Pl = `#ifdef USE_GRADIENTMAP
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
}`, Dl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Ll = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Fl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Il = `uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`, Ul = `#ifdef USE_ENVMAP
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
#endif`, Nl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Bl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ol = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Gl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, zl = `PhysicalMaterial material;
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
#endif`, Vl = `uniform sampler2D dfgLUT;
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
}`, kl = `
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
#endif`, Hl = `#if defined( RE_IndirectDiffuse )
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
#endif`, Wl = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Xl = `#ifdef USE_LIGHT_PROBES_GRID
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
#endif`, ql = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Yl = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Zl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Kl = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, $l = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, jl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Jl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Ql = `#if defined( USE_POINTS_UV )
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
#endif`, ec = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, tc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, nc = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, ic = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, rc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, sc = `#ifdef USE_MORPHTARGETS
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
#endif`, ac = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, oc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, lc = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, cc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, uc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, hc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, dc = `#ifdef USE_NORMALMAP
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
#endif`, fc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, pc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, mc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, _c = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, gc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, xc = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, vc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Mc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Sc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, yc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Ec = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Tc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, bc = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Ac = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Rc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, wc = `float getShadowMask() {
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
}`, Cc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Pc = `#ifdef USE_SKINNING
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
#endif`, Dc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Lc = `#ifdef USE_SKINNING
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
#endif`, Fc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Ic = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Uc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Nc = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Bc = `#ifdef USE_TRANSMISSION
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
#endif`, Oc = `#ifdef USE_TRANSMISSION
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
#endif`, Gc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, zc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Vc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, kc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Hc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Wc = `uniform sampler2D t2D;
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
}`, Xc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, qc = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Yc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Zc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Kc = `#include <common>
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
}`, $c = `#if DEPTH_PACKING == 3200
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
}`, jc = `#define DISTANCE
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
}`, Jc = `#define DISTANCE
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
}`, Qc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, eu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, tu = `uniform float scale;
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
}`, nu = `uniform vec3 diffuse;
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
}`, iu = `#include <common>
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
}`, ru = `uniform vec3 diffuse;
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
}`, su = `#define LAMBERT
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
}`, au = `#define LAMBERT
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
}`, ou = `#define MATCAP
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
}`, lu = `#define MATCAP
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
}`, cu = `#define NORMAL
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
}`, uu = `#define NORMAL
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
}`, hu = `#define PHONG
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
}`, du = `#define PHONG
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
}`, fu = `#define STANDARD
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
}`, pu = `#define STANDARD
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
}`, mu = `#define TOON
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
}`, _u = `#define TOON
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
}`, gu = `uniform float size;
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
}`, xu = `uniform vec3 diffuse;
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
}`, vu = `#include <common>
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
}`, Mu = `uniform vec3 color;
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
}`, Su = `uniform float rotation;
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
}`, yu = `uniform vec3 diffuse;
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
  alphahash_fragment: Ho,
  alphahash_pars_fragment: Wo,
  alphamap_fragment: Xo,
  alphamap_pars_fragment: qo,
  alphatest_fragment: Yo,
  alphatest_pars_fragment: Zo,
  aomap_fragment: Ko,
  aomap_pars_fragment: $o,
  batching_pars_vertex: jo,
  batching_vertex: Jo,
  begin_vertex: Qo,
  beginnormal_vertex: el,
  bsdfs: tl,
  iridescence_fragment: nl,
  bumpmap_pars_fragment: il,
  clipping_planes_fragment: rl,
  clipping_planes_pars_fragment: sl,
  clipping_planes_pars_vertex: al,
  clipping_planes_vertex: ol,
  color_fragment: ll,
  color_pars_fragment: cl,
  color_pars_vertex: ul,
  color_vertex: hl,
  common: dl,
  cube_uv_reflection_fragment: fl,
  defaultnormal_vertex: pl,
  displacementmap_pars_vertex: ml,
  displacementmap_vertex: _l,
  emissivemap_fragment: gl,
  emissivemap_pars_fragment: xl,
  colorspace_fragment: vl,
  colorspace_pars_fragment: Ml,
  envmap_fragment: Sl,
  envmap_common_pars_fragment: yl,
  envmap_pars_fragment: El,
  envmap_pars_vertex: Tl,
  envmap_physical_pars_fragment: Ul,
  envmap_vertex: bl,
  fog_vertex: Al,
  fog_pars_vertex: Rl,
  fog_fragment: wl,
  fog_pars_fragment: Cl,
  gradientmap_pars_fragment: Pl,
  lightmap_pars_fragment: Dl,
  lights_lambert_fragment: Ll,
  lights_lambert_pars_fragment: Fl,
  lights_pars_begin: Il,
  lights_toon_fragment: Nl,
  lights_toon_pars_fragment: Bl,
  lights_phong_fragment: Ol,
  lights_phong_pars_fragment: Gl,
  lights_physical_fragment: zl,
  lights_physical_pars_fragment: Vl,
  lights_fragment_begin: kl,
  lights_fragment_maps: Hl,
  lights_fragment_end: Wl,
  lightprobes_pars_fragment: Xl,
  logdepthbuf_fragment: ql,
  logdepthbuf_pars_fragment: Yl,
  logdepthbuf_pars_vertex: Zl,
  logdepthbuf_vertex: Kl,
  map_fragment: $l,
  map_pars_fragment: jl,
  map_particle_fragment: Jl,
  map_particle_pars_fragment: Ql,
  metalnessmap_fragment: ec,
  metalnessmap_pars_fragment: tc,
  morphinstance_vertex: nc,
  morphcolor_vertex: ic,
  morphnormal_vertex: rc,
  morphtarget_pars_vertex: sc,
  morphtarget_vertex: ac,
  normal_fragment_begin: oc,
  normal_fragment_maps: lc,
  normal_pars_fragment: cc,
  normal_pars_vertex: uc,
  normal_vertex: hc,
  normalmap_pars_fragment: dc,
  clearcoat_normal_fragment_begin: fc,
  clearcoat_normal_fragment_maps: pc,
  clearcoat_pars_fragment: mc,
  iridescence_pars_fragment: _c,
  opaque_fragment: gc,
  packing: xc,
  premultiplied_alpha_fragment: vc,
  project_vertex: Mc,
  dithering_fragment: Sc,
  dithering_pars_fragment: yc,
  roughnessmap_fragment: Ec,
  roughnessmap_pars_fragment: Tc,
  shadowmap_pars_fragment: bc,
  shadowmap_pars_vertex: Ac,
  shadowmap_vertex: Rc,
  shadowmask_pars_fragment: wc,
  skinbase_vertex: Cc,
  skinning_pars_vertex: Pc,
  skinning_vertex: Dc,
  skinnormal_vertex: Lc,
  specularmap_fragment: Fc,
  specularmap_pars_fragment: Ic,
  tonemapping_fragment: Uc,
  tonemapping_pars_fragment: Nc,
  transmission_fragment: Bc,
  transmission_pars_fragment: Oc,
  uv_pars_fragment: Gc,
  uv_pars_vertex: zc,
  uv_vertex: Vc,
  worldpos_vertex: kc,
  background_vert: Hc,
  background_frag: Wc,
  backgroundCube_vert: Xc,
  backgroundCube_frag: qc,
  cube_vert: Yc,
  cube_frag: Zc,
  depth_vert: Kc,
  depth_frag: $c,
  distance_vert: jc,
  distance_frag: Jc,
  equirect_vert: Qc,
  equirect_frag: eu,
  linedashed_vert: tu,
  linedashed_frag: nu,
  meshbasic_vert: iu,
  meshbasic_frag: ru,
  meshlambert_vert: su,
  meshlambert_frag: au,
  meshmatcap_vert: ou,
  meshmatcap_frag: lu,
  meshnormal_vert: cu,
  meshnormal_frag: uu,
  meshphong_vert: hu,
  meshphong_frag: du,
  meshphysical_vert: fu,
  meshphysical_frag: pu,
  meshtoon_vert: mu,
  meshtoon_frag: _u,
  points_vert: gu,
  points_frag: xu,
  shadow_vert: vu,
  shadow_frag: Mu,
  sprite_vert: Su,
  sprite_frag: yu
}, de = {
  common: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ne() },
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
    aoMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ne() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ne() },
    normalScale: { value: /* @__PURE__ */ new Ue(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ne() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new We(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ne() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ue(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 }
  }
}, Kt = {
  basic: {
    uniforms: /* @__PURE__ */ Ft([
      de.common,
      de.specularmap,
      de.envmap,
      de.aomap,
      de.lightmap,
      de.fog
    ]),
    vertexShader: ze.meshbasic_vert,
    fragmentShader: ze.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ft([
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
        emissive: { value: /* @__PURE__ */ new We(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshlambert_vert,
    fragmentShader: ze.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ft([
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
        emissive: { value: /* @__PURE__ */ new We(0) },
        specular: { value: /* @__PURE__ */ new We(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshphong_vert,
    fragmentShader: ze.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ft([
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
        emissive: { value: /* @__PURE__ */ new We(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshphysical_vert,
    fragmentShader: ze.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ft([
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
        emissive: { value: /* @__PURE__ */ new We(0) }
      }
    ]),
    vertexShader: ze.meshtoon_vert,
    fragmentShader: ze.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ft([
      de.common,
      de.bumpmap,
      de.normalmap,
      de.displacementmap,
      de.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ze.meshmatcap_vert,
    fragmentShader: ze.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ft([
      de.points,
      de.fog
    ]),
    vertexShader: ze.points_vert,
    fragmentShader: ze.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ft([
      de.common,
      de.fog,
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
    uniforms: /* @__PURE__ */ Ft([
      de.common,
      de.displacementmap
    ]),
    vertexShader: ze.depth_vert,
    fragmentShader: ze.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ft([
      de.common,
      de.bumpmap,
      de.normalmap,
      de.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshnormal_vert,
    fragmentShader: ze.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ft([
      de.sprite,
      de.fog
    ]),
    vertexShader: ze.sprite_vert,
    fragmentShader: ze.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ne() },
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
      backgroundRotation: { value: /* @__PURE__ */ new Ne() }
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
    uniforms: /* @__PURE__ */ Ft([
      de.common,
      de.displacementmap,
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
    uniforms: /* @__PURE__ */ Ft([
      de.lights,
      de.fog,
      {
        color: { value: /* @__PURE__ */ new We(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ze.shadow_vert,
    fragmentShader: ze.shadow_frag
  }
};
Kt.physical = {
  uniforms: /* @__PURE__ */ Ft([
    Kt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ne() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ne() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ue(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ne() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ne() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ne() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new We(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ne() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ne() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ne() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ue() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ne() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new We(0) },
      specularColor: { value: /* @__PURE__ */ new We(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ne() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ne() },
      anisotropyVector: { value: /* @__PURE__ */ new Ue() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ne() }
    }
  ]),
  vertexShader: ze.meshphysical_vert,
  fragmentShader: ze.meshphysical_frag
};
const cr = { r: 0, b: 0, g: 0 }, Eu = /* @__PURE__ */ new ft(), to = /* @__PURE__ */ new Ne();
to.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Tu(i, e, t, n, r, s) {
  const a = new We(0);
  let o = r === !0 ? 0 : 1, c, l, p = null, m = 0, u = null;
  function f(M) {
    let b = M.isScene === !0 ? M.background : null;
    if (b && b.isTexture) {
      const E = M.backgroundBlurriness > 0;
      b = e.get(b, E);
    }
    return b;
  }
  function g(M) {
    let b = !1;
    const E = f(M);
    E === null ? d(a, o) : E && E.isColor && (d(E, 1), b = !0);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, s) : R === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || b) && (t.buffers.depth.setTest(!0), t.buffers.depth.setMask(!0), t.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function S(M, b) {
    const E = f(b);
    E && (E.isCubeTexture || E.mapping === 306) ? (l === void 0 && (l = new Xt(
      new fi(1, 1, 1),
      new jt({
        name: "BackgroundCubeMaterial",
        uniforms: hi(Kt.backgroundCube.uniforms),
        vertexShader: Kt.backgroundCube.vertexShader,
        fragmentShader: Kt.backgroundCube.fragmentShader,
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
    }), n.update(l)), l.material.uniforms.envMap.value = E, l.material.uniforms.backgroundBlurriness.value = b.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Eu.makeRotationFromEuler(b.backgroundRotation)).transpose(), E.isCubeTexture && E.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(to), l.material.toneMapped = Ye.getTransfer(E.colorSpace) !== tt, (p !== E || m !== E.version || u !== i.toneMapping) && (l.material.needsUpdate = !0, p = E, m = E.version, u = i.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null)) : E && E.isTexture && (c === void 0 && (c = new Xt(
      new pi(2, 2),
      new jt({
        name: "BackgroundMaterial",
        uniforms: hi(Kt.background.uniforms),
        vertexShader: Kt.background.vertexShader,
        fragmentShader: Kt.background.fragmentShader,
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
    }), n.update(c)), c.material.uniforms.t2D.value = E, c.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, c.material.toneMapped = Ye.getTransfer(E.colorSpace) !== tt, E.matrixAutoUpdate === !0 && E.updateMatrix(), c.material.uniforms.uvTransform.value.copy(E.matrix), (p !== E || m !== E.version || u !== i.toneMapping) && (c.material.needsUpdate = !0, p = E, m = E.version, u = i.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(M, b) {
    M.getRGB(cr, qa(i)), t.buffers.color.setClear(cr.r, cr.g, cr.b, b, s);
  }
  function h() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(M, b = 1) {
      a.set(M), o = b, d(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(M) {
      o = M, d(a, o);
    },
    render: g,
    addToRenderList: S,
    dispose: h
  };
}
function bu(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, a = !1;
  function o(C, U, W, X, I) {
    let V = !1;
    const q = m(C, X, W, U);
    s !== q && (s = q, l(s.object)), V = f(C, X, W, I), V && g(C, X, W, I), I !== null && e.update(I, i.ELEMENT_ARRAY_BUFFER), (V || a) && (a = !1, E(C, U, W, X), I !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(I).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(C) {
    return i.bindVertexArray(C);
  }
  function p(C) {
    return i.deleteVertexArray(C);
  }
  function m(C, U, W, X) {
    const I = X.wireframe === !0;
    let V = n[U.id];
    V === void 0 && (V = {}, n[U.id] = V);
    const q = C.isInstancedMesh === !0 ? C.id : 0;
    let J = V[q];
    J === void 0 && (J = {}, V[q] = J);
    let ne = J[W.id];
    ne === void 0 && (ne = {}, J[W.id] = ne);
    let he = ne[I];
    return he === void 0 && (he = u(c()), ne[I] = he), he;
  }
  function u(C) {
    const U = [], W = [], X = [];
    for (let I = 0; I < t; I++)
      U[I] = 0, W[I] = 0, X[I] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: U,
      enabledAttributes: W,
      attributeDivisors: X,
      object: C,
      attributes: {},
      index: null
    };
  }
  function f(C, U, W, X) {
    const I = s.attributes, V = U.attributes;
    let q = 0;
    const J = W.getAttributes();
    for (const ne in J)
      if (J[ne].location >= 0) {
        const ye = I[ne];
        let Te = V[ne];
        if (Te === void 0 && (ne === "instanceMatrix" && C.instanceMatrix && (Te = C.instanceMatrix), ne === "instanceColor" && C.instanceColor && (Te = C.instanceColor)), ye === void 0 || ye.attribute !== Te || Te && ye.data !== Te.data) return !0;
        q++;
      }
    return s.attributesNum !== q || s.index !== X;
  }
  function g(C, U, W, X) {
    const I = {}, V = U.attributes;
    let q = 0;
    const J = W.getAttributes();
    for (const ne in J)
      if (J[ne].location >= 0) {
        let ye = V[ne];
        ye === void 0 && (ne === "instanceMatrix" && C.instanceMatrix && (ye = C.instanceMatrix), ne === "instanceColor" && C.instanceColor && (ye = C.instanceColor));
        const Te = {};
        Te.attribute = ye, ye && ye.data && (Te.data = ye.data), I[ne] = Te, q++;
      }
    s.attributes = I, s.attributesNum = q, s.index = X;
  }
  function S() {
    const C = s.newAttributes;
    for (let U = 0, W = C.length; U < W; U++)
      C[U] = 0;
  }
  function d(C) {
    h(C, 0);
  }
  function h(C, U) {
    const W = s.newAttributes, X = s.enabledAttributes, I = s.attributeDivisors;
    W[C] = 1, X[C] === 0 && (i.enableVertexAttribArray(C), X[C] = 1), I[C] !== U && (i.vertexAttribDivisor(C, U), I[C] = U);
  }
  function M() {
    const C = s.newAttributes, U = s.enabledAttributes;
    for (let W = 0, X = U.length; W < X; W++)
      U[W] !== C[W] && (i.disableVertexAttribArray(W), U[W] = 0);
  }
  function b(C, U, W, X, I, V, q) {
    q === !0 ? i.vertexAttribIPointer(C, U, W, I, V) : i.vertexAttribPointer(C, U, W, X, I, V);
  }
  function E(C, U, W, X) {
    S();
    const I = X.attributes, V = W.getAttributes(), q = U.defaultAttributeValues;
    for (const J in V) {
      const ne = V[J];
      if (ne.location >= 0) {
        let he = I[J];
        if (he === void 0 && (J === "instanceMatrix" && C.instanceMatrix && (he = C.instanceMatrix), J === "instanceColor" && C.instanceColor && (he = C.instanceColor)), he !== void 0) {
          const ye = he.normalized, Te = he.itemSize, Xe = e.get(he);
          if (Xe === void 0) continue;
          const Q = Xe.buffer, ae = Xe.type, H = Xe.bytesPerElement, oe = ae === i.INT || ae === i.UNSIGNED_INT || he.gpuType === 1013;
          if (he.isInterleavedBufferAttribute) {
            const te = he.data, Re = te.stride, Le = he.offset;
            if (te.isInstancedInterleavedBuffer) {
              for (let Ce = 0; Ce < ne.locationSize; Ce++)
                h(ne.location + Ce, te.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = te.meshPerAttribute * te.count);
            } else
              for (let Ce = 0; Ce < ne.locationSize; Ce++)
                d(ne.location + Ce);
            i.bindBuffer(i.ARRAY_BUFFER, Q);
            for (let Ce = 0; Ce < ne.locationSize; Ce++)
              b(
                ne.location + Ce,
                Te / ne.locationSize,
                ae,
                ye,
                Re * H,
                (Le + Te / ne.locationSize * Ce) * H,
                oe
              );
          } else {
            if (he.isInstancedBufferAttribute) {
              for (let te = 0; te < ne.locationSize; te++)
                h(ne.location + te, he.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = he.meshPerAttribute * he.count);
            } else
              for (let te = 0; te < ne.locationSize; te++)
                d(ne.location + te);
            i.bindBuffer(i.ARRAY_BUFFER, Q);
            for (let te = 0; te < ne.locationSize; te++)
              b(
                ne.location + te,
                Te / ne.locationSize,
                ae,
                ye,
                Te * H,
                Te / ne.locationSize * te * H,
                oe
              );
          }
        } else if (q !== void 0) {
          const ye = q[J];
          if (ye !== void 0)
            switch (ye.length) {
              case 2:
                i.vertexAttrib2fv(ne.location, ye);
                break;
              case 3:
                i.vertexAttrib3fv(ne.location, ye);
                break;
              case 4:
                i.vertexAttrib4fv(ne.location, ye);
                break;
              default:
                i.vertexAttrib1fv(ne.location, ye);
            }
        }
      }
    }
    M();
  }
  function R() {
    A();
    for (const C in n) {
      const U = n[C];
      for (const W in U) {
        const X = U[W];
        for (const I in X) {
          const V = X[I];
          for (const q in V)
            p(V[q].object), delete V[q];
          delete X[I];
        }
      }
      delete n[C];
    }
  }
  function y(C) {
    if (n[C.id] === void 0) return;
    const U = n[C.id];
    for (const W in U) {
      const X = U[W];
      for (const I in X) {
        const V = X[I];
        for (const q in V)
          p(V[q].object), delete V[q];
        delete X[I];
      }
    }
    delete n[C.id];
  }
  function w(C) {
    for (const U in n) {
      const W = n[U];
      for (const X in W) {
        const I = W[X];
        if (I[C.id] === void 0) continue;
        const V = I[C.id];
        for (const q in V)
          p(V[q].object), delete V[q];
        delete I[C.id];
      }
    }
  }
  function x(C) {
    for (const U in n) {
      const W = n[U], X = C.isInstancedMesh === !0 ? C.id : 0, I = W[X];
      if (I !== void 0) {
        for (const V in I) {
          const q = I[V];
          for (const J in q)
            p(q[J].object), delete q[J];
          delete I[V];
        }
        delete W[X], Object.keys(W).length === 0 && delete n[U];
      }
    }
  }
  function A() {
    L(), a = !0, s !== r && (s = r, l(s.object));
  }
  function L() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: A,
    resetDefaultState: L,
    dispose: R,
    releaseStatesOfGeometry: y,
    releaseStatesOfObject: x,
    releaseStatesOfProgram: w,
    initAttributes: S,
    enableAttribute: d,
    disableUnusedAttributes: M
  };
}
function Au(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, l) {
    i.drawArrays(n, c, l), t.update(l, n, 1);
  }
  function a(c, l, p) {
    p !== 0 && (i.drawArraysInstanced(n, c, l, p), t.update(l, n, p));
  }
  function o(c, l, p) {
    if (p === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, l, 0, p);
    let u = 0;
    for (let f = 0; f < p; f++)
      u += l[f];
    t.update(u, n, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function Ru(i, e, t, n) {
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
  const p = c(l);
  p !== l && (Pe("WebGLRenderer:", l, "not supported, using", p, "instead."), l = p);
  const m = t.logarithmicDepthBuffer === !0, u = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control");
  t.reversedDepthBuffer === !0 && u === !1 && Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), S = i.getParameter(i.MAX_TEXTURE_SIZE), d = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), M = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), b = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), R = i.getParameter(i.MAX_SAMPLES), y = i.getParameter(i.SAMPLES);
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
    maxTextures: f,
    maxVertexTextures: g,
    maxTextureSize: S,
    maxCubemapSize: d,
    maxAttributes: h,
    maxVertexUniforms: M,
    maxVaryings: b,
    maxFragmentUniforms: E,
    maxSamples: R,
    samples: y
  };
}
function wu(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const a = new bn(), o = new Ne(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(m, u) {
    const f = m.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = u, n = m.length, f;
  }, this.beginShadows = function() {
    s = !0, p(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(m, u) {
    t = p(m, u, 0);
  }, this.setState = function(m, u, f) {
    const g = m.clippingPlanes, S = m.clipIntersection, d = m.clipShadows, h = i.get(m);
    if (!r || g === null || g.length === 0 || s && !d)
      s ? p(null) : l();
    else {
      const M = s ? 0 : n, b = M * 4;
      let E = h.clippingState || null;
      c.value = E, E = p(g, u, b, f);
      for (let R = 0; R !== b; ++R)
        E[R] = t[R];
      h.clippingState = E, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function p(m, u, f, g) {
    const S = m !== null ? m.length : 0;
    let d = null;
    if (S !== 0) {
      if (d = c.value, g !== !0 || d === null) {
        const h = f + S * 4, M = u.matrixWorldInverse;
        o.getNormalMatrix(M), (d === null || d.length < h) && (d = new Float32Array(h));
        for (let b = 0, E = f; b !== S; ++b, E += 4)
          a.copy(m[b]).applyMatrix4(M, o), a.normal.toArray(d, E), d[E + 3] = a.constant;
      }
      c.value = d, c.needsUpdate = !0;
    }
    return e.numPlanes = S, e.numIntersection = 0, d;
  }
}
const An = 4, oa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Bn = 20, Cu = 256, Ai = /* @__PURE__ */ new Ar(), la = /* @__PURE__ */ new We();
let ts = null, ns = 0, is = 0, rs = !1;
const Pu = /* @__PURE__ */ new O();
class ds {
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
      position: o = Pu
    } = s;
    ts = this._renderer.getRenderTarget(), ns = this._renderer.getActiveCubeFace(), is = this._renderer.getActiveMipmapLevel(), rs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = ha(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ua(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(ts, ns, is), this._renderer.xr.enabled = rs, e.scissorTest = !1, li(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ts = this._renderer.getRenderTarget(), ns = this._renderer.getActiveCubeFace(), is = this._renderer.getActiveMipmapLevel(), rs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
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
      colorSpace: Ci,
      depthBuffer: !1
    }, r = ca(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ca(e, t, n);
      const { _lodMax: s } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Du(s)), this._blurMaterial = Fu(s, e, t), this._ggxMaterial = Lu(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Xt(new Rt(), e);
    this._renderer.compile(t, Ai);
  }
  _sceneToCubeUV(e, t, n, r, s) {
    const c = new Vt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], p = [1, 1, 1, -1, -1, -1], m = this._renderer, u = m.autoClear, f = m.toneMapping;
    m.getClearColor(la), m.toneMapping = 0, m.autoClear = !1, m.state.buffers.depth.getReversed() && (m.setRenderTarget(r), m.clearDepth(), m.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Xt(
      new fi(),
      new Er({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1
      })
    ));
    const S = this._backgroundBox, d = S.material;
    let h = !1;
    const M = e.background;
    M ? M.isColor && (d.color.copy(M), e.background = null, h = !0) : (d.color.copy(la), h = !0);
    for (let b = 0; b < 6; b++) {
      const E = b % 3;
      E === 0 ? (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + p[b], s.y, s.z)) : E === 1 ? (c.up.set(0, 0, l[b]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + p[b], s.z)) : (c.up.set(0, l[b], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + p[b]));
      const R = this._cubeSize;
      li(r, E * R, b > 2 ? R : 0, R, R), m.setRenderTarget(r), h && m.render(S, c), m.render(e, c);
    }
    m.toneMapping = f, m.autoClear = u, e.background = M;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = ha()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ua());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = s;
    const o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    li(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Ai);
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
    const c = a.uniforms, l = n / (this._lodMeshes.length - 1), p = t / (this._lodMeshes.length - 1), m = Math.sqrt(l * l - p * p), u = 0 + l * 1.25, f = m * u, { _lodMax: g } = this, S = this._sizeLods[n], d = 3 * S * (n > g - An ? n - g + An : 0), h = 4 * (this._cubeSize - S);
    c.envMap.value = e.texture, c.roughness.value = f, c.mipInt.value = g - t, li(s, d, h, 3 * S, 2 * S), r.setRenderTarget(s), r.render(o, Ai), c.envMap.value = s.texture, c.roughness.value = 0, c.mipInt.value = g - n, li(e, d, h, 3 * S, 2 * S), r.setRenderTarget(e), r.render(o, Ai);
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
    a !== "latitudinal" && a !== "longitudinal" && Ke(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const p = 3, m = this._lodMeshes[r];
    m.material = l;
    const u = l.uniforms, f = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Bn - 1), S = s / g, d = isFinite(s) ? 1 + Math.floor(p * S) : Bn;
    d > Bn && Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Bn}`);
    const h = [];
    let M = 0;
    for (let w = 0; w < Bn; ++w) {
      const x = w / S, A = Math.exp(-x * x / 2);
      h.push(A), w === 0 ? M += A : w < d && (M += 2 * A);
    }
    for (let w = 0; w < h.length; w++)
      h[w] = h[w] / M;
    u.envMap.value = e.texture, u.samples.value = d, u.weights.value = h, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: b } = this;
    u.dTheta.value = g, u.mipInt.value = b - n;
    const E = this._sizeLods[r], R = 3 * E * (r > b - An ? r - b + An : 0), y = 4 * (this._cubeSize - E);
    li(t, R, y, 3 * E, 2 * E), c.setRenderTarget(t), c.render(m, Ai);
  }
}
function Du(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - An + 1 + oa.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let c = 1 / o;
    a > i - An ? c = oa[a - i + An - 1] : a === 0 && (c = 0), t.push(c);
    const l = 1 / (o - 2), p = -l, m = 1 + l, u = [p, p, m, p, m, m, p, p, m, m, p, m], f = 6, g = 6, S = 3, d = 2, h = 1, M = new Float32Array(S * g * f), b = new Float32Array(d * g * f), E = new Float32Array(h * g * f);
    for (let y = 0; y < f; y++) {
      const w = y % 3 * 2 / 3 - 1, x = y > 2 ? 0 : -1, A = [
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
      M.set(A, S * g * y), b.set(u, d * g * y);
      const L = [y, y, y, y, y, y];
      E.set(L, h * g * y);
    }
    const R = new Rt();
    R.setAttribute("position", new Wt(M, S)), R.setAttribute("uv", new Wt(b, d)), R.setAttribute("faceIndex", new Wt(E, h)), n.push(new Xt(R, null)), r > An && r--;
  }
  return { lodMeshes: n, sizeLods: e, sigmas: t };
}
function ca(i, e, t) {
  const n = new $t(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function li(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Lu(i, e, t) {
  return new jt({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: Cu,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: Rr(),
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
function Fu(i, e, t) {
  const n = new Float32Array(Bn), r = new O(0, 1, 0);
  return new jt({
    name: "SphericalGaussianBlur",
    defines: {
      n: Bn,
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
    vertexShader: Rr(),
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
function ua() {
  return new jt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Rr(),
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
function ha() {
  return new jt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Rr(),
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
function Rr() {
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
class Rs extends $t {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Ms(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
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
    }, r = new fi(5, 5, 5), s = new jt({
      name: "CubemapFromEquirect",
      uniforms: hi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new Xt(r, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new Ja(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
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
function Iu(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, f = !1) {
    return u == null ? null : f ? a(u) : s(u);
  }
  function s(u) {
    if (u && u.isTexture) {
      const f = u.mapping;
      if (f === 303 || f === 304)
        if (e.has(u)) {
          const g = e.get(u).texture;
          return o(g, u.mapping);
        } else {
          const g = u.image;
          if (g && g.height > 0) {
            const S = new Rs(g.height);
            return S.fromEquirectangularTexture(i, u), e.set(u, S), u.addEventListener("dispose", l), o(S.texture, u.mapping);
          } else
            return null;
        }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const f = u.mapping, g = f === 303 || f === 304, S = f === 301 || f === 302;
      if (g || S) {
        let d = t.get(u);
        const h = d !== void 0 ? d.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== h)
          return n === null && (n = new ds(i)), d = g ? n.fromEquirectangular(u, d) : n.fromCubemap(u, d), d.texture.pmremVersion = u.pmremVersion, t.set(u, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const M = u.image;
          return g && M && M.height > 0 || S && M && c(M) ? (n === null && (n = new ds(i)), d = g ? n.fromEquirectangular(u) : n.fromCubemap(u), d.texture.pmremVersion = u.pmremVersion, t.set(u, d), u.addEventListener("dispose", p), d.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, f) {
    return f === 303 ? u.mapping = 301 : f === 304 && (u.mapping = 302), u;
  }
  function c(u) {
    let f = 0;
    const g = 6;
    for (let S = 0; S < g; S++)
      u[S] !== void 0 && f++;
    return f === g;
  }
  function l(u) {
    const f = u.target;
    f.removeEventListener("dispose", l);
    const g = e.get(f);
    g !== void 0 && (e.delete(f), g.dispose());
  }
  function p(u) {
    const f = u.target;
    f.removeEventListener("dispose", p);
    const g = t.get(f);
    g !== void 0 && (t.delete(f), g.dispose());
  }
  function m() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: r,
    dispose: m
  };
}
function Uu(i) {
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
function Nu(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(m) {
    const u = m.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes)
      e.remove(u.attributes[g]);
    u.removeEventListener("dispose", a), delete r[u.id];
    const f = s.get(u);
    f && (e.remove(f), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(m, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", a), r[u.id] = !0, t.memory.geometries++), u;
  }
  function c(m) {
    const u = m.attributes;
    for (const f in u)
      e.update(u[f], i.ARRAY_BUFFER);
  }
  function l(m) {
    const u = [], f = m.index, g = m.attributes.position;
    let S = 0;
    if (g === void 0)
      return;
    if (f !== null) {
      const M = f.array;
      S = f.version;
      for (let b = 0, E = M.length; b < E; b += 3) {
        const R = M[b + 0], y = M[b + 1], w = M[b + 2];
        u.push(R, y, y, w, w, R);
      }
    } else {
      const M = g.array;
      S = g.version;
      for (let b = 0, E = M.length / 3 - 1; b < E; b += 3) {
        const R = b + 0, y = b + 1, w = b + 2;
        u.push(R, y, y, w, w, R);
      }
    }
    const d = new (g.count >= 65535 ? xs : gs)(u, 1);
    d.version = S;
    const h = s.get(m);
    h && e.remove(h), s.set(m, d);
  }
  function p(m) {
    const u = s.get(m);
    if (u) {
      const f = m.index;
      f !== null && u.version < f.version && l(m);
    } else
      l(m);
    return s.get(m);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: p
  };
}
function Bu(i, e, t) {
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
  function l(m, u, f) {
    f !== 0 && (i.drawElementsInstanced(n, u, s, m * a, f), t.update(u, n, f));
  }
  function p(m, u, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, s, m, 0, f);
    let S = 0;
    for (let d = 0; d < f; d++)
      S += u[d];
    t.update(S, n, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = p;
}
function Ou(i) {
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
        Ke("WebGLInfo: Unknown draw mode:", a);
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
function Gu(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new mt();
  function s(a, o, c) {
    const l = a.morphTargetInfluences, p = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, m = p !== void 0 ? p.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== m) {
      let A = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", A);
      };
      u !== void 0 && u.texture.dispose();
      const f = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, S = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], M = o.morphAttributes.color || [];
      let b = 0;
      f === !0 && (b = 1), g === !0 && (b = 2), S === !0 && (b = 3);
      let E = o.attributes.position.count * b, R = 1;
      E > e.maxTextureSize && (R = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
      const y = new Float32Array(E * R * 4 * m), w = new ms(y, E, R, m);
      w.type = 1015, w.needsUpdate = !0;
      const x = b * 4;
      for (let L = 0; L < m; L++) {
        const C = d[L], U = h[L], W = M[L], X = E * R * 4 * L;
        for (let I = 0; I < C.count; I++) {
          const V = I * x;
          f === !0 && (r.fromBufferAttribute(C, I), y[X + V + 0] = r.x, y[X + V + 1] = r.y, y[X + V + 2] = r.z, y[X + V + 3] = 0), g === !0 && (r.fromBufferAttribute(U, I), y[X + V + 4] = r.x, y[X + V + 5] = r.y, y[X + V + 6] = r.z, y[X + V + 7] = 0), S === !0 && (r.fromBufferAttribute(W, I), y[X + V + 8] = r.x, y[X + V + 9] = r.y, y[X + V + 10] = r.z, y[X + V + 11] = W.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: m,
        texture: w,
        size: new Ue(E, R)
      }, n.set(o, u), o.addEventListener("dispose", A);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let f = 0;
      for (let S = 0; S < l.length; S++)
        f += l[S];
      const g = o.morphTargetsRelative ? 1 : 1 - f;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", g), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return {
    update: s
  };
}
function zu(i, e, t, n, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const p = r.render.frame, m = l.geometry, u = e.get(l, m);
    if (s.get(u) !== p && (e.update(u), s.set(u, p)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === !1 && l.addEventListener("dispose", c), s.get(l) !== p && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, p))), l.isSkinnedMesh) {
      const f = l.skeleton;
      s.get(f) !== p && (f.update(), s.set(f, p));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function c(l) {
    const p = l.target;
    p.removeEventListener("dispose", c), n.releaseStatesOfObject(p), t.remove(p.instanceMatrix), p.instanceColor !== null && t.remove(p.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
const Vu = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function ku(i, e, t, n, r) {
  const s = new $t(e, t, {
    type: i,
    depthBuffer: n,
    stencilBuffer: r,
    depthTexture: n ? new Gn(e, t) : void 0
  }), a = new $t(e, t, {
    type: 1016,
    depthBuffer: !1,
    stencilBuffer: !1
  }), o = new Rt();
  o.setAttribute("position", new dt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), o.setAttribute("uv", new dt([0, 2, 0, 0, 2, 0], 2));
  const c = new Za({
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
  }), l = new Xt(o, c), p = new Ar(-1, 1, 1, -1, 0, 1);
  let m = null, u = null, f = !1, g, S = null, d = [], h = !1;
  this.setSize = function(M, b) {
    s.setSize(M, b), a.setSize(M, b);
    for (let E = 0; E < d.length; E++) {
      const R = d[E];
      R.setSize && R.setSize(M, b);
    }
  }, this.setEffects = function(M) {
    d = M, h = d.length > 0 && d[0].isRenderPass === !0;
    const b = s.width, E = s.height;
    for (let R = 0; R < d.length; R++) {
      const y = d[R];
      y.setSize && y.setSize(b, E);
    }
  }, this.begin = function(M, b) {
    if (f || M.toneMapping === 0 && d.length === 0) return !1;
    if (S = b, b !== null) {
      const E = b.width, R = b.height;
      (s.width !== E || s.height !== R) && this.setSize(E, R);
    }
    return h === !1 && M.setRenderTarget(s), g = M.toneMapping, M.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return h;
  }, this.end = function(M, b) {
    M.toneMapping = g, f = !0;
    let E = s, R = a;
    for (let y = 0; y < d.length; y++) {
      const w = d[y];
      if (w.enabled !== !1 && (w.render(M, R, E, b), w.needsSwap !== !1)) {
        const x = E;
        E = R, R = x;
      }
    }
    if (m !== M.outputColorSpace || u !== M.toneMapping) {
      m = M.outputColorSpace, u = M.toneMapping, c.defines = {}, Ye.getTransfer(m) === tt && (c.defines.SRGB_TRANSFER = "");
      const y = Vu[u];
      y && (c.defines[y] = ""), c.needsUpdate = !0;
    }
    c.uniforms.tDiffuse.value = E.texture, M.setRenderTarget(S), M.render(l, p), S = null, f = !1;
  }, this.isCompositing = function() {
    return f;
  }, this.dispose = function() {
    s.depthTexture && s.depthTexture.dispose(), s.dispose(), a.dispose(), o.dispose(), c.dispose();
  };
}
const no = /* @__PURE__ */ new At(), fs = /* @__PURE__ */ new Gn(1, 1), io = /* @__PURE__ */ new ms(), ro = /* @__PURE__ */ new Na(), so = /* @__PURE__ */ new Ms(), da = [], fa = [], pa = new Float32Array(16), ma = new Float32Array(9), _a = new Float32Array(4);
function mi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = da[r];
  if (s === void 0 && (s = new Float32Array(r), da[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(s, o);
  }
  return s;
}
function yt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function Et(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function wr(i, e) {
  let t = fa[e];
  t === void 0 && (t = new Int32Array(e), fa[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Hu(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Wu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (yt(t, e)) return;
    i.uniform2fv(this.addr, e), Et(t, e);
  }
}
function Xu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (yt(t, e)) return;
    i.uniform3fv(this.addr, e), Et(t, e);
  }
}
function qu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (yt(t, e)) return;
    i.uniform4fv(this.addr, e), Et(t, e);
  }
}
function Yu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (yt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), Et(t, e);
  } else {
    if (yt(t, n)) return;
    _a.set(n), i.uniformMatrix2fv(this.addr, !1, _a), Et(t, n);
  }
}
function Zu(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (yt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), Et(t, e);
  } else {
    if (yt(t, n)) return;
    ma.set(n), i.uniformMatrix3fv(this.addr, !1, ma), Et(t, n);
  }
}
function Ku(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (yt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), Et(t, e);
  } else {
    if (yt(t, n)) return;
    pa.set(n), i.uniformMatrix4fv(this.addr, !1, pa), Et(t, n);
  }
}
function $u(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function ju(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (yt(t, e)) return;
    i.uniform2iv(this.addr, e), Et(t, e);
  }
}
function Ju(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (yt(t, e)) return;
    i.uniform3iv(this.addr, e), Et(t, e);
  }
}
function Qu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (yt(t, e)) return;
    i.uniform4iv(this.addr, e), Et(t, e);
  }
}
function eh(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function th(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (yt(t, e)) return;
    i.uniform2uiv(this.addr, e), Et(t, e);
  }
}
function nh(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (yt(t, e)) return;
    i.uniform3uiv(this.addr, e), Et(t, e);
  }
}
function ih(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (yt(t, e)) return;
    i.uniform4uiv(this.addr, e), Et(t, e);
  }
}
function rh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (fs.compareFunction = t.isReversedDepthBuffer() ? 518 : 515, s = fs) : s = no, t.setTexture2D(e || s, r);
}
function sh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || ro, r);
}
function ah(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || so, r);
}
function oh(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || io, r);
}
function lh(i) {
  switch (i) {
    case 5126:
      return Hu;
    case 35664:
      return Wu;
    case 35665:
      return Xu;
    case 35666:
      return qu;
    case 35674:
      return Yu;
    case 35675:
      return Zu;
    case 35676:
      return Ku;
    case 5124:
    case 35670:
      return $u;
    case 35667:
    case 35671:
      return ju;
    case 35668:
    case 35672:
      return Ju;
    case 35669:
    case 35673:
      return Qu;
    case 5125:
      return eh;
    case 36294:
      return th;
    case 36295:
      return nh;
    case 36296:
      return ih;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return rh;
    case 35679:
    case 36299:
    case 36307:
      return sh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ah;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return oh;
  }
}
function ch(i, e) {
  i.uniform1fv(this.addr, e);
}
function uh(i, e) {
  const t = mi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function hh(i, e) {
  const t = mi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function dh(i, e) {
  const t = mi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function fh(i, e) {
  const t = mi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function ph(i, e) {
  const t = mi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function mh(i, e) {
  const t = mi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function _h(i, e) {
  i.uniform1iv(this.addr, e);
}
function gh(i, e) {
  i.uniform2iv(this.addr, e);
}
function xh(i, e) {
  i.uniform3iv(this.addr, e);
}
function vh(i, e) {
  i.uniform4iv(this.addr, e);
}
function Mh(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Sh(i, e) {
  i.uniform2uiv(this.addr, e);
}
function yh(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Eh(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Th(i, e, t) {
  const n = this.cache, r = e.length, s = wr(t, r);
  yt(n, s) || (i.uniform1iv(this.addr, s), Et(n, s));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? a = fs : a = no;
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || a, s[o]);
}
function bh(i, e, t) {
  const n = this.cache, r = e.length, s = wr(t, r);
  yt(n, s) || (i.uniform1iv(this.addr, s), Et(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || ro, s[a]);
}
function Ah(i, e, t) {
  const n = this.cache, r = e.length, s = wr(t, r);
  yt(n, s) || (i.uniform1iv(this.addr, s), Et(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || so, s[a]);
}
function Rh(i, e, t) {
  const n = this.cache, r = e.length, s = wr(t, r);
  yt(n, s) || (i.uniform1iv(this.addr, s), Et(n, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || io, s[a]);
}
function wh(i) {
  switch (i) {
    case 5126:
      return ch;
    case 35664:
      return uh;
    case 35665:
      return hh;
    case 35666:
      return dh;
    case 35674:
      return fh;
    case 35675:
      return ph;
    case 35676:
      return mh;
    case 5124:
    case 35670:
      return _h;
    case 35667:
    case 35671:
      return gh;
    case 35668:
    case 35672:
      return xh;
    case 35669:
    case 35673:
      return vh;
    case 5125:
      return Mh;
    case 36294:
      return Sh;
    case 36295:
      return yh;
    case 36296:
      return Eh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Th;
    case 35679:
    case 36299:
    case 36307:
      return bh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ah;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Rh;
  }
}
class Ch {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = lh(t.type);
  }
}
class Ph {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = wh(t.type);
  }
}
class Dh {
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
const ss = /(\w+)(\])?(\[|\.)?/g;
function ga(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Lh(i, e, t) {
  const n = i.name, r = n.length;
  for (ss.lastIndex = 0; ; ) {
    const s = ss.exec(n), a = ss.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      ga(t, l === void 0 ? new Ch(o, i, e) : new Ph(o, i, e));
      break;
    } else {
      let m = t.map[o];
      m === void 0 && (m = new Dh(o), ga(t, m)), t = m;
    }
  }
}
class fr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      const o = e.getActiveUniform(t, a), c = e.getUniformLocation(t, o.name);
      Lh(o, c, this);
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
function xa(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Fh = 37297;
let Ih = 0;
function Uh(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const va = /* @__PURE__ */ new Ne();
function Nh(i) {
  Ye._getMatrix(va, Ye.workingColorSpace, i);
  const e = `mat3( ${va.elements.map((t) => t.toFixed(4))} )`;
  switch (Ye.getTransfer(i)) {
    case Pi:
      return [e, "LinearTransferOETF"];
    case tt:
      return [e, "sRGBTransferOETF"];
    default:
      return Pe("WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function Ma(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = (i.getShaderInfoLog(e) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + s + `

` + Uh(i.getShaderSource(e), o);
  } else
    return s;
}
function Bh(i, e) {
  const t = Nh(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
const Oh = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function Gh(i, e) {
  const t = Oh[e];
  return t === void 0 ? (Pe("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ur = /* @__PURE__ */ new O();
function zh() {
  Ye.getLuminanceCoefficients(ur);
  const i = ur.x.toFixed(4), e = ur.y.toFixed(4), t = ur.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Vh(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(wi).join(`
`);
}
function kh(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Hh(i, e) {
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
function wi(i) {
  return i !== "";
}
function Sa(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ya(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Wh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ps(i) {
  return i.replace(Wh, qh);
}
const Xh = /* @__PURE__ */ new Map();
function qh(i, e) {
  let t = ze[e];
  if (t === void 0) {
    const n = Xh.get(e);
    if (n !== void 0)
      t = ze[n], Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return ps(t);
}
const Yh = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ea(i) {
  return i.replace(Yh, Zh);
}
function Zh(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ta(i) {
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
const Kh = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function $h(i) {
  return Kh[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const jh = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function Jh(i) {
  return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : jh[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const Qh = {
  302: "ENVMAP_MODE_REFRACTION"
};
function ed(i) {
  return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Qh[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const td = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function nd(i) {
  return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : td[i.combine] || "ENVMAP_BLENDING_NONE";
}
function id(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function rd(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = $h(t), l = Jh(t), p = ed(t), m = nd(t), u = id(t), f = Vh(t), g = kh(s), S = r.createProgram();
  let d, h, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(wi).join(`
`), d.length > 0 && (d += `
`), h = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(wi).join(`
`), h.length > 0 && (h += `
`)) : (d = [
    Ta(t),
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
    t.envMap ? "#define " + p : "",
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
  ].filter(wi).join(`
`), h = [
    Ta(t),
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
    t.envMap ? "#define " + p : "",
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
    t.toneMapping !== 0 ? ze.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? Gh("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    ze.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Bh("linearToOutputTexel", t.outputColorSpace),
    zh(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(wi).join(`
`)), a = ps(a), a = Sa(a, t), a = ya(a, t), o = ps(o), o = Sa(o, t), o = ya(o, t), a = Ea(a), o = Ea(o), t.isRawShaderMaterial !== !0 && (M = `#version 300 es
`, d = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + d, h = [
    "#define varying in",
    t.glslVersion === os ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === os ? "" : "#define gl_FragColor pc_fragColor",
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
  const b = M + d + a, E = M + h + o, R = xa(r, r.VERTEX_SHADER, b), y = xa(r, r.FRAGMENT_SHADER, E);
  r.attachShader(S, R), r.attachShader(S, y), t.index0AttributeName !== void 0 ? r.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"), r.linkProgram(S);
  function w(C) {
    if (i.debug.checkShaderErrors) {
      const U = r.getProgramInfoLog(S) || "", W = r.getShaderInfoLog(R) || "", X = r.getShaderInfoLog(y) || "", I = U.trim(), V = W.trim(), q = X.trim();
      let J = !0, ne = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (J = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, S, R, y);
        else {
          const he = Ma(r, R, "vertex"), ye = Ma(r, y, "fragment");
          Ke(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(S, r.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + I + `
` + he + `
` + ye
          );
        }
      else I !== "" ? Pe("WebGLProgram: Program Info Log:", I) : (V === "" || q === "") && (ne = !1);
      ne && (C.diagnostics = {
        runnable: J,
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
    r.deleteShader(R), r.deleteShader(y), x = new fr(r, S), A = Hh(r, S);
  }
  let x;
  this.getUniforms = function() {
    return x === void 0 && w(this), x;
  };
  let A;
  this.getAttributes = function() {
    return A === void 0 && w(this), A;
  };
  let L = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return L === !1 && (L = r.getProgramParameter(S, Fh)), L;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(S), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Ih++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = R, this.fragmentShader = y, this;
}
let sd = 0;
class ad {
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
    return n === void 0 && (n = new od(e), t.set(e, n)), n;
  }
}
class od {
  constructor(e) {
    this.id = sd++, this.code = e, this.usedTimes = 0;
  }
}
function ld(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function cd(i, e, t, n, r, s) {
  const a = new _s(), o = new ad(), c = /* @__PURE__ */ new Set(), l = [], p = /* @__PURE__ */ new Map(), m = n.logarithmicDepthBuffer;
  let u = n.precision;
  const f = {
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
  function S(x, A, L, C, U, W) {
    const X = C.fog, I = U.geometry, V = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? C.environment : null, q = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap, J = e.get(x.envMap || V, q), ne = J && J.mapping === 306 ? J.image.height : null, he = f[x.type];
    x.precision !== null && (u = n.getMaxPrecision(x.precision), u !== x.precision && Pe("WebGLProgram.getParameters:", x.precision, "not supported, using", u, "instead."));
    const ye = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color, Te = ye !== void 0 ? ye.length : 0;
    let Xe = 0;
    I.morphAttributes.position !== void 0 && (Xe = 1), I.morphAttributes.normal !== void 0 && (Xe = 2), I.morphAttributes.color !== void 0 && (Xe = 3);
    let Q, ae, H, oe;
    if (he) {
      const Fe = Kt[he];
      Q = Fe.vertexShader, ae = Fe.fragmentShader;
    } else
      Q = x.vertexShader, ae = x.fragmentShader, o.update(x), H = o.getVertexShaderID(x), oe = o.getFragmentShaderID(x);
    const te = i.getRenderTarget(), Re = i.state.buffers.depth.getReversed(), Le = U.isInstancedMesh === !0, Ce = U.isBatchedMesh === !0, lt = !!x.map, Ve = !!x.matcap, Qe = !!J, st = !!x.aoMap, ke = !!x.lightMap, ct = !!x.bumpMap, ht = !!x.normalMap, bt = !!x.displacementMap, F = !!x.emissiveMap, _t = !!x.metalnessMap, Be = !!x.roughnessMap, Je = x.anisotropy > 0, ue = x.clearcoat > 0, nt = x.dispersion > 0, T = x.iridescence > 0, _ = x.sheen > 0, G = x.transmission > 0, K = Je && !!x.anisotropyMap, ee = ue && !!x.clearcoatMap, $ = ue && !!x.clearcoatNormalMap, ce = ue && !!x.clearcoatRoughnessMap, D = T && !!x.iridescenceMap, Y = T && !!x.iridescenceThicknessMap, fe = _ && !!x.sheenColorMap, ge = _ && !!x.sheenRoughnessMap, le = !!x.specularMap, re = !!x.specularColorMap, De = !!x.specularIntensityMap, Oe = G && !!x.transmissionMap, $e = G && !!x.thicknessMap, P = !!x.gradientMap, se = !!x.alphaMap, Z = x.alphaTest > 0, pe = !!x.alphaHash, ie = !!x.extensions;
    let j = 0;
    x.toneMapped && (te === null || te.isXRRenderTarget === !0) && (j = i.toneMapping);
    const Me = {
      shaderID: he,
      shaderType: x.type,
      shaderName: x.name,
      vertexShader: Q,
      fragmentShader: ae,
      defines: x.defines,
      customVertexShaderID: H,
      customFragmentShaderID: oe,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: u,
      batching: Ce,
      batchingColor: Ce && U._colorsTexture !== null,
      instancing: Le,
      instancingColor: Le && U.instanceColor !== null,
      instancingMorph: Le && U.morphTexture !== null,
      outputColorSpace: te === null ? i.outputColorSpace : te.isXRRenderTarget === !0 ? te.texture.colorSpace : Ye.workingColorSpace,
      alphaToCoverage: !!x.alphaToCoverage,
      map: lt,
      matcap: Ve,
      envMap: Qe,
      envMapMode: Qe && J.mapping,
      envMapCubeUVHeight: ne,
      aoMap: st,
      lightMap: ke,
      bumpMap: ct,
      normalMap: ht,
      displacementMap: bt,
      emissiveMap: F,
      normalMapObjectSpace: ht && x.normalMapType === 1,
      normalMapTangentSpace: ht && x.normalMapType === 0,
      packedNormalMap: ht && x.normalMapType === 0 && ld(x.normalMap.format),
      metalnessMap: _t,
      roughnessMap: Be,
      anisotropy: Je,
      anisotropyMap: K,
      clearcoat: ue,
      clearcoatMap: ee,
      clearcoatNormalMap: $,
      clearcoatRoughnessMap: ce,
      dispersion: nt,
      iridescence: T,
      iridescenceMap: D,
      iridescenceThicknessMap: Y,
      sheen: _,
      sheenColorMap: fe,
      sheenRoughnessMap: ge,
      specularMap: le,
      specularColorMap: re,
      specularIntensityMap: De,
      transmission: G,
      transmissionMap: Oe,
      thicknessMap: $e,
      gradientMap: P,
      opaque: x.transparent === !1 && x.blending === 1 && x.alphaToCoverage === !1,
      alphaMap: se,
      alphaTest: Z,
      alphaHash: pe,
      combine: x.combine,
      //
      mapUv: lt && g(x.map.channel),
      aoMapUv: st && g(x.aoMap.channel),
      lightMapUv: ke && g(x.lightMap.channel),
      bumpMapUv: ct && g(x.bumpMap.channel),
      normalMapUv: ht && g(x.normalMap.channel),
      displacementMapUv: bt && g(x.displacementMap.channel),
      emissiveMapUv: F && g(x.emissiveMap.channel),
      metalnessMapUv: _t && g(x.metalnessMap.channel),
      roughnessMapUv: Be && g(x.roughnessMap.channel),
      anisotropyMapUv: K && g(x.anisotropyMap.channel),
      clearcoatMapUv: ee && g(x.clearcoatMap.channel),
      clearcoatNormalMapUv: $ && g(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ce && g(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: D && g(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: Y && g(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: fe && g(x.sheenColorMap.channel),
      sheenRoughnessMapUv: ge && g(x.sheenRoughnessMap.channel),
      specularMapUv: le && g(x.specularMap.channel),
      specularColorMapUv: re && g(x.specularColorMap.channel),
      specularIntensityMapUv: De && g(x.specularIntensityMap.channel),
      transmissionMapUv: Oe && g(x.transmissionMap.channel),
      thicknessMapUv: $e && g(x.thicknessMap.channel),
      alphaMapUv: se && g(x.alphaMap.channel),
      //
      vertexTangents: !!I.attributes.tangent && (ht || Je),
      vertexNormals: !!I.attributes.normal,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4,
      pointsUvs: U.isPoints === !0 && !!I.attributes.uv && (lt || se),
      fog: !!X,
      useFog: x.fog === !0,
      fogExp2: !!X && X.isFogExp2,
      flatShading: x.wireframe === !1 && (x.flatShading === !0 || I.attributes.normal === void 0 && ht === !1 && (x.isMeshLambertMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isMeshPhysicalMaterial)),
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: m,
      reversedDepthBuffer: Re,
      skinning: U.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: Te,
      morphTextureStride: Xe,
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
      shadowMapEnabled: i.shadowMap.enabled && L.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: j,
      decodeVideoTexture: lt && x.map.isVideoTexture === !0 && Ye.getTransfer(x.map.colorSpace) === tt,
      decodeVideoTextureEmissive: F && x.emissiveMap.isVideoTexture === !0 && Ye.getTransfer(x.emissiveMap.colorSpace) === tt,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === 2,
      flipSided: x.side === 1,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionClipCullDistance: ie && x.extensions.clipCullDistance === !0 && t.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ie && x.extensions.multiDraw === !0 || Ce) && t.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
    return Me.vertexUv1s = c.has(1), Me.vertexUv2s = c.has(2), Me.vertexUv3s = c.has(3), c.clear(), Me;
  }
  function d(x) {
    const A = [];
    if (x.shaderID ? A.push(x.shaderID) : (A.push(x.customVertexShaderID), A.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const L in x.defines)
        A.push(L), A.push(x.defines[L]);
    return x.isRawShaderMaterial === !1 && (h(A, x), M(A, x), A.push(i.outputColorSpace)), A.push(x.customProgramCacheKey), A.join();
  }
  function h(x, A) {
    x.push(A.precision), x.push(A.outputColorSpace), x.push(A.envMapMode), x.push(A.envMapCubeUVHeight), x.push(A.mapUv), x.push(A.alphaMapUv), x.push(A.lightMapUv), x.push(A.aoMapUv), x.push(A.bumpMapUv), x.push(A.normalMapUv), x.push(A.displacementMapUv), x.push(A.emissiveMapUv), x.push(A.metalnessMapUv), x.push(A.roughnessMapUv), x.push(A.anisotropyMapUv), x.push(A.clearcoatMapUv), x.push(A.clearcoatNormalMapUv), x.push(A.clearcoatRoughnessMapUv), x.push(A.iridescenceMapUv), x.push(A.iridescenceThicknessMapUv), x.push(A.sheenColorMapUv), x.push(A.sheenRoughnessMapUv), x.push(A.specularMapUv), x.push(A.specularColorMapUv), x.push(A.specularIntensityMapUv), x.push(A.transmissionMapUv), x.push(A.thicknessMapUv), x.push(A.combine), x.push(A.fogExp2), x.push(A.sizeAttenuation), x.push(A.morphTargetsCount), x.push(A.morphAttributeCount), x.push(A.numDirLights), x.push(A.numPointLights), x.push(A.numSpotLights), x.push(A.numSpotLightMaps), x.push(A.numHemiLights), x.push(A.numRectAreaLights), x.push(A.numDirLightShadows), x.push(A.numPointLightShadows), x.push(A.numSpotLightShadows), x.push(A.numSpotLightShadowsWithMaps), x.push(A.numLightProbes), x.push(A.shadowMapType), x.push(A.toneMapping), x.push(A.numClippingPlanes), x.push(A.numClipIntersection), x.push(A.depthPacking);
  }
  function M(x, A) {
    a.disableAll(), A.instancing && a.enable(0), A.instancingColor && a.enable(1), A.instancingMorph && a.enable(2), A.matcap && a.enable(3), A.envMap && a.enable(4), A.normalMapObjectSpace && a.enable(5), A.normalMapTangentSpace && a.enable(6), A.clearcoat && a.enable(7), A.iridescence && a.enable(8), A.alphaTest && a.enable(9), A.vertexColors && a.enable(10), A.vertexAlphas && a.enable(11), A.vertexUv1s && a.enable(12), A.vertexUv2s && a.enable(13), A.vertexUv3s && a.enable(14), A.vertexTangents && a.enable(15), A.anisotropy && a.enable(16), A.alphaHash && a.enable(17), A.batching && a.enable(18), A.dispersion && a.enable(19), A.batchingColor && a.enable(20), A.gradientMap && a.enable(21), A.packedNormalMap && a.enable(22), A.vertexNormals && a.enable(23), x.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.reversedDepthBuffer && a.enable(4), A.skinning && a.enable(5), A.morphTargets && a.enable(6), A.morphNormals && a.enable(7), A.morphColors && a.enable(8), A.premultipliedAlpha && a.enable(9), A.shadowMapEnabled && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.transmission && a.enable(15), A.sheen && a.enable(16), A.opaque && a.enable(17), A.pointsUvs && a.enable(18), A.decodeVideoTexture && a.enable(19), A.decodeVideoTextureEmissive && a.enable(20), A.alphaToCoverage && a.enable(21), A.numLightProbeGrids > 0 && a.enable(22), x.push(a.mask);
  }
  function b(x) {
    const A = f[x.type];
    let L;
    if (A) {
      const C = Kt[A];
      L = Ya.clone(C.uniforms);
    } else
      L = x.uniforms;
    return L;
  }
  function E(x, A) {
    let L = p.get(A);
    return L !== void 0 ? ++L.usedTimes : (L = new rd(i, A, x, r), l.push(L), p.set(A, L)), L;
  }
  function R(x) {
    if (--x.usedTimes === 0) {
      const A = l.indexOf(x);
      l[A] = l[l.length - 1], l.pop(), p.delete(x.cacheKey), x.destroy();
    }
  }
  function y(x) {
    o.remove(x);
  }
  function w() {
    o.dispose();
  }
  return {
    getParameters: S,
    getProgramCacheKey: d,
    getUniforms: b,
    acquireProgram: E,
    releaseProgram: R,
    releaseShaderCache: y,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: w
  };
}
function ud() {
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
function hd(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.materialVariant !== e.materialVariant ? i.materialVariant - e.materialVariant : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function ba(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Aa() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    let f = 0;
    return u.isInstancedMesh && (f += 2), u.isSkinnedMesh && (f += 1), f;
  }
  function o(u, f, g, S, d, h) {
    let M = i[e];
    return M === void 0 ? (M = {
      id: u.id,
      object: u,
      geometry: f,
      material: g,
      materialVariant: a(u),
      groupOrder: S,
      renderOrder: u.renderOrder,
      z: d,
      group: h
    }, i[e] = M) : (M.id = u.id, M.object = u, M.geometry = f, M.material = g, M.materialVariant = a(u), M.groupOrder = S, M.renderOrder = u.renderOrder, M.z = d, M.group = h), e++, M;
  }
  function c(u, f, g, S, d, h) {
    const M = o(u, f, g, S, d, h);
    g.transmission > 0 ? n.push(M) : g.transparent === !0 ? r.push(M) : t.push(M);
  }
  function l(u, f, g, S, d, h) {
    const M = o(u, f, g, S, d, h);
    g.transmission > 0 ? n.unshift(M) : g.transparent === !0 ? r.unshift(M) : t.unshift(M);
  }
  function p(u, f) {
    t.length > 1 && t.sort(u || hd), n.length > 1 && n.sort(f || ba), r.length > 1 && r.sort(f || ba);
  }
  function m() {
    for (let u = e, f = i.length; u < f; u++) {
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
    sort: p
  };
}
function dd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new Aa(), i.set(n, [a])) : r >= s.length ? (a = new Aa(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function fd() {
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
            color: new We()
          };
          break;
        case "SpotLight":
          t = {
            position: new O(),
            direction: new O(),
            color: new We(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new O(),
            color: new We(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new O(),
            skyColor: new We(),
            groundColor: new We()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new We(),
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
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let md = 0;
function _d(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function gd(i) {
  const e = new fd(), t = pd(), n = {
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
  for (let l = 0; l < 9; l++) n.probe.push(new O());
  const r = new O(), s = new ft(), a = new ft();
  function o(l) {
    let p = 0, m = 0, u = 0;
    for (let A = 0; A < 9; A++) n.probe[A].set(0, 0, 0);
    let f = 0, g = 0, S = 0, d = 0, h = 0, M = 0, b = 0, E = 0, R = 0, y = 0, w = 0;
    l.sort(_d);
    for (let A = 0, L = l.length; A < L; A++) {
      const C = l[A], U = C.color, W = C.intensity, X = C.distance;
      let I = null;
      if (C.shadow && C.shadow.map && (C.shadow.map.texture.format === 1030 ? I = C.shadow.map.texture : I = C.shadow.map.depthTexture || C.shadow.map.texture), C.isAmbientLight)
        p += U.r * W, m += U.g * W, u += U.b * W;
      else if (C.isLightProbe) {
        for (let V = 0; V < 9; V++)
          n.probe[V].addScaledVector(C.sh.coefficients[V], W);
        w++;
      } else if (C.isDirectionalLight) {
        const V = e.get(C);
        if (V.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const q = C.shadow, J = t.get(C);
          J.shadowIntensity = q.intensity, J.shadowBias = q.bias, J.shadowNormalBias = q.normalBias, J.shadowRadius = q.radius, J.shadowMapSize = q.mapSize, n.directionalShadow[f] = J, n.directionalShadowMap[f] = I, n.directionalShadowMatrix[f] = C.shadow.matrix, M++;
        }
        n.directional[f] = V, f++;
      } else if (C.isSpotLight) {
        const V = e.get(C);
        V.position.setFromMatrixPosition(C.matrixWorld), V.color.copy(U).multiplyScalar(W), V.distance = X, V.coneCos = Math.cos(C.angle), V.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), V.decay = C.decay, n.spot[S] = V;
        const q = C.shadow;
        if (C.map && (n.spotLightMap[R] = C.map, R++, q.updateMatrices(C), C.castShadow && y++), n.spotLightMatrix[S] = q.matrix, C.castShadow) {
          const J = t.get(C);
          J.shadowIntensity = q.intensity, J.shadowBias = q.bias, J.shadowNormalBias = q.normalBias, J.shadowRadius = q.radius, J.shadowMapSize = q.mapSize, n.spotShadow[S] = J, n.spotShadowMap[S] = I, E++;
        }
        S++;
      } else if (C.isRectAreaLight) {
        const V = e.get(C);
        V.color.copy(U).multiplyScalar(W), V.halfWidth.set(C.width * 0.5, 0, 0), V.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[d] = V, d++;
      } else if (C.isPointLight) {
        const V = e.get(C);
        if (V.color.copy(C.color).multiplyScalar(C.intensity), V.distance = C.distance, V.decay = C.decay, C.castShadow) {
          const q = C.shadow, J = t.get(C);
          J.shadowIntensity = q.intensity, J.shadowBias = q.bias, J.shadowNormalBias = q.normalBias, J.shadowRadius = q.radius, J.shadowMapSize = q.mapSize, J.shadowCameraNear = q.camera.near, J.shadowCameraFar = q.camera.far, n.pointShadow[g] = J, n.pointShadowMap[g] = I, n.pointShadowMatrix[g] = C.shadow.matrix, b++;
        }
        n.point[g] = V, g++;
      } else if (C.isHemisphereLight) {
        const V = e.get(C);
        V.skyColor.copy(C.color).multiplyScalar(W), V.groundColor.copy(C.groundColor).multiplyScalar(W), n.hemi[h] = V, h++;
      }
    }
    d > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = de.LTC_FLOAT_1, n.rectAreaLTC2 = de.LTC_FLOAT_2) : (n.rectAreaLTC1 = de.LTC_HALF_1, n.rectAreaLTC2 = de.LTC_HALF_2)), n.ambient[0] = p, n.ambient[1] = m, n.ambient[2] = u;
    const x = n.hash;
    (x.directionalLength !== f || x.pointLength !== g || x.spotLength !== S || x.rectAreaLength !== d || x.hemiLength !== h || x.numDirectionalShadows !== M || x.numPointShadows !== b || x.numSpotShadows !== E || x.numSpotMaps !== R || x.numLightProbes !== w) && (n.directional.length = f, n.spot.length = S, n.rectArea.length = d, n.point.length = g, n.hemi.length = h, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = E + R - y, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = y, n.numLightProbes = w, x.directionalLength = f, x.pointLength = g, x.spotLength = S, x.rectAreaLength = d, x.hemiLength = h, x.numDirectionalShadows = M, x.numPointShadows = b, x.numSpotShadows = E, x.numSpotMaps = R, x.numLightProbes = w, n.version = md++);
  }
  function c(l, p) {
    let m = 0, u = 0, f = 0, g = 0, S = 0;
    const d = p.matrixWorldInverse;
    for (let h = 0, M = l.length; h < M; h++) {
      const b = l[h];
      if (b.isDirectionalLight) {
        const E = n.directional[m];
        E.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(d), m++;
      } else if (b.isSpotLight) {
        const E = n.spot[f];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(d), E.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(d), f++;
      } else if (b.isRectAreaLight) {
        const E = n.rectArea[g];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(d), a.identity(), s.copy(b.matrixWorld), s.premultiply(d), a.extractRotation(s), E.halfWidth.set(b.width * 0.5, 0, 0), E.halfHeight.set(0, b.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), g++;
      } else if (b.isPointLight) {
        const E = n.point[u];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(d), u++;
      } else if (b.isHemisphereLight) {
        const E = n.hemi[S];
        E.direction.setFromMatrixPosition(b.matrixWorld), E.direction.transformDirection(d), S++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function Ra(i) {
  const e = new gd(i), t = [], n = [], r = [];
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
  function p(u) {
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
    setupLightsView: p,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: c
  };
}
function xd(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new Ra(i), e.set(r, [o])) : s >= a.length ? (o = new Ra(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const vd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Md = `uniform sampler2D shadow_pass;
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
}`, Sd = [
  /* @__PURE__ */ new O(1, 0, 0),
  /* @__PURE__ */ new O(-1, 0, 0),
  /* @__PURE__ */ new O(0, 1, 0),
  /* @__PURE__ */ new O(0, -1, 0),
  /* @__PURE__ */ new O(0, 0, 1),
  /* @__PURE__ */ new O(0, 0, -1)
], yd = [
  /* @__PURE__ */ new O(0, -1, 0),
  /* @__PURE__ */ new O(0, -1, 0),
  /* @__PURE__ */ new O(0, 0, 1),
  /* @__PURE__ */ new O(0, 0, -1),
  /* @__PURE__ */ new O(0, -1, 0),
  /* @__PURE__ */ new O(0, -1, 0)
], wa = /* @__PURE__ */ new ft(), Ri = /* @__PURE__ */ new O(), as = /* @__PURE__ */ new O();
function Ed(i, e, t) {
  let n = new Tr();
  const r = new Ue(), s = new Ue(), a = new mt(), o = new Ka(), c = new $a(), l = {}, p = t.maxTextureSize, m = { 0: 1, 1: 0, 2: 2 }, u = new jt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ue() },
      radius: { value: 4 }
    },
    vertexShader: vd,
    fragmentShader: Md
  }), f = u.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new Rt();
  g.setAttribute(
    "position",
    new Wt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const S = new Xt(g, u), d = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let h = this.type;
  this.render = function(y, w, x) {
    if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || y.length === 0) return;
    this.type === 2 && (Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
    const A = i.getRenderTarget(), L = i.getActiveCubeFace(), C = i.getActiveMipmapLevel(), U = i.state;
    U.setBlending(0), U.buffers.depth.getReversed() === !0 ? U.buffers.color.setClear(0, 0, 0, 0) : U.buffers.color.setClear(1, 1, 1, 1), U.buffers.depth.setTest(!0), U.setScissorTest(!1);
    const W = h !== this.type;
    W && w.traverse(function(X) {
      X.material && (Array.isArray(X.material) ? X.material.forEach((I) => I.needsUpdate = !0) : X.material.needsUpdate = !0);
    });
    for (let X = 0, I = y.length; X < I; X++) {
      const V = y[X], q = V.shadow;
      if (q === void 0) {
        Pe("WebGLShadowMap:", V, "has no shadow.");
        continue;
      }
      if (q.autoUpdate === !1 && q.needsUpdate === !1) continue;
      r.copy(q.mapSize);
      const J = q.getFrameExtents();
      r.multiply(J), s.copy(q.mapSize), (r.x > p || r.y > p) && (r.x > p && (s.x = Math.floor(p / J.x), r.x = s.x * J.x, q.mapSize.x = s.x), r.y > p && (s.y = Math.floor(p / J.y), r.y = s.y * J.y, q.mapSize.y = s.y));
      const ne = i.state.buffers.depth.getReversed();
      if (q.camera._reversedDepth = ne, q.map === null || W === !0) {
        if (q.map !== null && (q.map.depthTexture !== null && (q.map.depthTexture.dispose(), q.map.depthTexture = null), q.map.dispose()), this.type === 3) {
          if (V.isPointLight) {
            Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          q.map = new $t(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1
          }), q.map.texture.name = V.name + ".shadowMap", q.map.depthTexture = new Gn(r.x, r.y, 1015), q.map.depthTexture.name = V.name + ".shadowMapDepth", q.map.depthTexture.format = 1026, q.map.depthTexture.compareFunction = null, q.map.depthTexture.minFilter = 1003, q.map.depthTexture.magFilter = 1003;
        } else
          V.isPointLight ? (q.map = new Rs(r.x), q.map.depthTexture = new Wa(r.x, 1014)) : (q.map = new $t(r.x, r.y), q.map.depthTexture = new Gn(r.x, r.y, 1014)), q.map.depthTexture.name = V.name + ".shadowMap", q.map.depthTexture.format = 1026, this.type === 1 ? (q.map.depthTexture.compareFunction = ne ? 518 : 515, q.map.depthTexture.minFilter = 1006, q.map.depthTexture.magFilter = 1006) : (q.map.depthTexture.compareFunction = null, q.map.depthTexture.minFilter = 1003, q.map.depthTexture.magFilter = 1003);
        q.camera.updateProjectionMatrix();
      }
      const he = q.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let ye = 0; ye < he; ye++) {
        if (q.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(q.map, ye), i.clear();
        else {
          ye === 0 && (i.setRenderTarget(q.map), i.clear());
          const Te = q.getViewport(ye);
          a.set(
            s.x * Te.x,
            s.y * Te.y,
            s.x * Te.z,
            s.y * Te.w
          ), U.viewport(a);
        }
        if (V.isPointLight) {
          const Te = q.camera, Xe = q.matrix, Q = V.distance || Te.far;
          Q !== Te.far && (Te.far = Q, Te.updateProjectionMatrix()), Ri.setFromMatrixPosition(V.matrixWorld), Te.position.copy(Ri), as.copy(Te.position), as.add(Sd[ye]), Te.up.copy(yd[ye]), Te.lookAt(as), Te.updateMatrixWorld(), Xe.makeTranslation(-Ri.x, -Ri.y, -Ri.z), wa.multiplyMatrices(Te.projectionMatrix, Te.matrixWorldInverse), q._frustum.setFromProjectionMatrix(wa, Te.coordinateSystem, Te.reversedDepth);
        } else
          q.updateMatrices(V);
        n = q.getFrustum(), E(w, x, q.camera, V, this.type);
      }
      q.isPointLightShadow !== !0 && this.type === 3 && M(q, x), q.needsUpdate = !1;
    }
    h = this.type, d.needsUpdate = !1, i.setRenderTarget(A, L, C);
  };
  function M(y, w) {
    const x = e.update(S);
    u.defines.VSM_SAMPLES !== y.blurSamples && (u.defines.VSM_SAMPLES = y.blurSamples, f.defines.VSM_SAMPLES = y.blurSamples, u.needsUpdate = !0, f.needsUpdate = !0), y.mapPass === null && (y.mapPass = new $t(r.x, r.y, {
      format: 1030,
      type: 1016
    })), u.uniforms.shadow_pass.value = y.map.depthTexture, u.uniforms.resolution.value = y.mapSize, u.uniforms.radius.value = y.radius, i.setRenderTarget(y.mapPass), i.clear(), i.renderBufferDirect(w, null, x, u, S, null), f.uniforms.shadow_pass.value = y.mapPass.texture, f.uniforms.resolution.value = y.mapSize, f.uniforms.radius.value = y.radius, i.setRenderTarget(y.map), i.clear(), i.renderBufferDirect(w, null, x, f, S, null);
  }
  function b(y, w, x, A) {
    let L = null;
    const C = x.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (C !== void 0)
      L = C;
    else if (L = x.isPointLight === !0 ? c : o, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === !0) {
      const U = L.uuid, W = w.uuid;
      let X = l[U];
      X === void 0 && (X = {}, l[U] = X);
      let I = X[W];
      I === void 0 && (I = L.clone(), X[W] = I, w.addEventListener("dispose", R)), L = I;
    }
    if (L.visible = w.visible, L.wireframe = w.wireframe, A === 3 ? L.side = w.shadowSide !== null ? w.shadowSide : w.side : L.side = w.shadowSide !== null ? w.shadowSide : m[w.side], L.alphaMap = w.alphaMap, L.alphaTest = w.alphaToCoverage === !0 ? 0.5 : w.alphaTest, L.map = w.map, L.clipShadows = w.clipShadows, L.clippingPlanes = w.clippingPlanes, L.clipIntersection = w.clipIntersection, L.displacementMap = w.displacementMap, L.displacementScale = w.displacementScale, L.displacementBias = w.displacementBias, L.wireframeLinewidth = w.wireframeLinewidth, L.linewidth = w.linewidth, x.isPointLight === !0 && L.isMeshDistanceMaterial === !0) {
      const U = i.properties.get(L);
      U.light = x;
    }
    return L;
  }
  function E(y, w, x, A, L) {
    if (y.visible === !1) return;
    if (y.layers.test(w.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && L === 3) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse, y.matrixWorld);
      const W = e.update(y), X = y.material;
      if (Array.isArray(X)) {
        const I = W.groups;
        for (let V = 0, q = I.length; V < q; V++) {
          const J = I[V], ne = X[J.materialIndex];
          if (ne && ne.visible) {
            const he = b(y, ne, A, L);
            y.onBeforeShadow(i, y, w, x, W, he, J), i.renderBufferDirect(x, null, W, he, y, J), y.onAfterShadow(i, y, w, x, W, he, J);
          }
        }
      } else if (X.visible) {
        const I = b(y, X, A, L);
        y.onBeforeShadow(i, y, w, x, W, I, null), i.renderBufferDirect(x, null, W, I, y, null), y.onAfterShadow(i, y, w, x, W, I, null);
      }
    }
    const U = y.children;
    for (let W = 0, X = U.length; W < X; W++)
      E(U[W], w, x, A, L);
  }
  function R(y) {
    y.target.removeEventListener("dispose", R);
    for (const x in l) {
      const A = l[x], L = y.target.uuid;
      L in A && (A[L].dispose(), delete A[L]);
    }
  }
}
function Td(i, e) {
  function t() {
    let P = !1;
    const se = new mt();
    let Z = null;
    const pe = new mt(0, 0, 0, 0);
    return {
      setMask: function(ie) {
        Z !== ie && !P && (i.colorMask(ie, ie, ie, ie), Z = ie);
      },
      setLocked: function(ie) {
        P = ie;
      },
      setClear: function(ie, j, Me, Fe, pt) {
        pt === !0 && (ie *= Fe, j *= Fe, Me *= Fe), se.set(ie, j, Me, Fe), pe.equals(se) === !1 && (i.clearColor(ie, j, Me, Fe), pe.copy(se));
      },
      reset: function() {
        P = !1, Z = null, pe.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let P = !1, se = !1, Z = null, pe = null, ie = null;
    return {
      setReversed: function(j) {
        if (se !== j) {
          const Me = e.get("EXT_clip_control");
          j ? Me.clipControlEXT(Me.LOWER_LEFT_EXT, Me.ZERO_TO_ONE_EXT) : Me.clipControlEXT(Me.LOWER_LEFT_EXT, Me.NEGATIVE_ONE_TO_ONE_EXT), se = j;
          const Fe = ie;
          ie = null, this.setClear(Fe);
        }
      },
      getReversed: function() {
        return se;
      },
      setTest: function(j) {
        j ? te(i.DEPTH_TEST) : Re(i.DEPTH_TEST);
      },
      setMask: function(j) {
        Z !== j && !P && (i.depthMask(j), Z = j);
      },
      setFunc: function(j) {
        if (se && (j = fo[j]), pe !== j) {
          switch (j) {
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
          pe = j;
        }
      },
      setLocked: function(j) {
        P = j;
      },
      setClear: function(j) {
        ie !== j && (ie = j, se && (j = 1 - j), i.clearDepth(j));
      },
      reset: function() {
        P = !1, Z = null, pe = null, ie = null, se = !1;
      }
    };
  }
  function r() {
    let P = !1, se = null, Z = null, pe = null, ie = null, j = null, Me = null, Fe = null, pt = null;
    return {
      setTest: function(et) {
        P || (et ? te(i.STENCIL_TEST) : Re(i.STENCIL_TEST));
      },
      setMask: function(et) {
        se !== et && !P && (i.stencilMask(et), se = et);
      },
      setFunc: function(et, Nt, Bt) {
        (Z !== et || pe !== Nt || ie !== Bt) && (i.stencilFunc(et, Nt, Bt), Z = et, pe = Nt, ie = Bt);
      },
      setOp: function(et, Nt, Bt) {
        (j !== et || Me !== Nt || Fe !== Bt) && (i.stencilOp(et, Nt, Bt), j = et, Me = Nt, Fe = Bt);
      },
      setLocked: function(et) {
        P = et;
      },
      setClear: function(et) {
        pt !== et && (i.clearStencil(et), pt = et);
      },
      reset: function() {
        P = !1, se = null, Z = null, pe = null, ie = null, j = null, Me = null, Fe = null, pt = null;
      }
    };
  }
  const s = new t(), a = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let p = {}, m = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), g = [], S = null, d = !1, h = null, M = null, b = null, E = null, R = null, y = null, w = null, x = new We(0, 0, 0), A = 0, L = !1, C = null, U = null, W = null, X = null, I = null;
  const V = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1, J = 0;
  const ne = i.getParameter(i.VERSION);
  ne.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(ne)[1]), q = J >= 1) : ne.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]), q = J >= 2);
  let he = null, ye = {};
  const Te = i.getParameter(i.SCISSOR_BOX), Xe = i.getParameter(i.VIEWPORT), Q = new mt().fromArray(Te), ae = new mt().fromArray(Xe);
  function H(P, se, Z, pe) {
    const ie = new Uint8Array(4), j = i.createTexture();
    i.bindTexture(P, j), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Me = 0; Me < Z; Me++)
      P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(se, 0, i.RGBA, 1, 1, pe, 0, i.RGBA, i.UNSIGNED_BYTE, ie) : i.texImage2D(se + Me, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ie);
    return j;
  }
  const oe = {};
  oe[i.TEXTURE_2D] = H(i.TEXTURE_2D, i.TEXTURE_2D, 1), oe[i.TEXTURE_CUBE_MAP] = H(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), oe[i.TEXTURE_2D_ARRAY] = H(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), oe[i.TEXTURE_3D] = H(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), te(i.DEPTH_TEST), a.setFunc(3), ct(!1), ht(1), te(i.CULL_FACE), st(0);
  function te(P) {
    p[P] !== !0 && (i.enable(P), p[P] = !0);
  }
  function Re(P) {
    p[P] !== !1 && (i.disable(P), p[P] = !1);
  }
  function Le(P, se) {
    return u[P] !== se ? (i.bindFramebuffer(P, se), u[P] = se, P === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = se), P === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = se), !0) : !1;
  }
  function Ce(P, se) {
    let Z = g, pe = !1;
    if (P) {
      Z = f.get(se), Z === void 0 && (Z = [], f.set(se, Z));
      const ie = P.textures;
      if (Z.length !== ie.length || Z[0] !== i.COLOR_ATTACHMENT0) {
        for (let j = 0, Me = ie.length; j < Me; j++)
          Z[j] = i.COLOR_ATTACHMENT0 + j;
        Z.length = ie.length, pe = !0;
      }
    } else
      Z[0] !== i.BACK && (Z[0] = i.BACK, pe = !0);
    pe && i.drawBuffers(Z);
  }
  function lt(P) {
    return S !== P ? (i.useProgram(P), S = P, !0) : !1;
  }
  const Ve = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  Ve[103] = i.MIN, Ve[104] = i.MAX;
  const Qe = {
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
  function st(P, se, Z, pe, ie, j, Me, Fe, pt, et) {
    if (P === 0) {
      d === !0 && (Re(i.BLEND), d = !1);
      return;
    }
    if (d === !1 && (te(i.BLEND), d = !0), P !== 5) {
      if (P !== h || et !== L) {
        if ((M !== 100 || R !== 100) && (i.blendEquation(i.FUNC_ADD), M = 100, R = 100), et)
          switch (P) {
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
              Ke("WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              Ke("WebGLState: Invalid blending: ", P);
              break;
          }
        b = null, E = null, y = null, w = null, x.set(0, 0, 0), A = 0, h = P, L = et;
      }
      return;
    }
    ie = ie || se, j = j || Z, Me = Me || pe, (se !== M || ie !== R) && (i.blendEquationSeparate(Ve[se], Ve[ie]), M = se, R = ie), (Z !== b || pe !== E || j !== y || Me !== w) && (i.blendFuncSeparate(Qe[Z], Qe[pe], Qe[j], Qe[Me]), b = Z, E = pe, y = j, w = Me), (Fe.equals(x) === !1 || pt !== A) && (i.blendColor(Fe.r, Fe.g, Fe.b, pt), x.copy(Fe), A = pt), h = P, L = !1;
  }
  function ke(P, se) {
    P.side === 2 ? Re(i.CULL_FACE) : te(i.CULL_FACE);
    let Z = P.side === 1;
    se && (Z = !Z), ct(Z), P.blending === 1 && P.transparent === !1 ? st(0) : st(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), s.setMask(P.colorWrite);
    const pe = P.stencilWrite;
    o.setTest(pe), pe && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), F(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? te(i.SAMPLE_ALPHA_TO_COVERAGE) : Re(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ct(P) {
    C !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), C = P);
  }
  function ht(P) {
    P !== 0 ? (te(i.CULL_FACE), P !== U && (P === 1 ? i.cullFace(i.BACK) : P === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Re(i.CULL_FACE), U = P;
  }
  function bt(P) {
    P !== W && (q && i.lineWidth(P), W = P);
  }
  function F(P, se, Z) {
    P ? (te(i.POLYGON_OFFSET_FILL), (X !== se || I !== Z) && (X = se, I = Z, a.getReversed() && (se = -se), i.polygonOffset(se, Z))) : Re(i.POLYGON_OFFSET_FILL);
  }
  function _t(P) {
    P ? te(i.SCISSOR_TEST) : Re(i.SCISSOR_TEST);
  }
  function Be(P) {
    P === void 0 && (P = i.TEXTURE0 + V - 1), he !== P && (i.activeTexture(P), he = P);
  }
  function Je(P, se, Z) {
    Z === void 0 && (he === null ? Z = i.TEXTURE0 + V - 1 : Z = he);
    let pe = ye[Z];
    pe === void 0 && (pe = { type: void 0, texture: void 0 }, ye[Z] = pe), (pe.type !== P || pe.texture !== se) && (he !== Z && (i.activeTexture(Z), he = Z), i.bindTexture(P, se || oe[P]), pe.type = P, pe.texture = se);
  }
  function ue() {
    const P = ye[he];
    P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function nt() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function T() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function _() {
    try {
      i.texSubImage2D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function G() {
    try {
      i.texSubImage3D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function K() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function ee() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function $() {
    try {
      i.texStorage2D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function ce() {
    try {
      i.texStorage3D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function D() {
    try {
      i.texImage2D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function Y() {
    try {
      i.texImage3D(...arguments);
    } catch (P) {
      Ke("WebGLState:", P);
    }
  }
  function fe(P) {
    return m[P] !== void 0 ? m[P] : i.getParameter(P);
  }
  function ge(P, se) {
    m[P] !== se && (i.pixelStorei(P, se), m[P] = se);
  }
  function le(P) {
    Q.equals(P) === !1 && (i.scissor(P.x, P.y, P.z, P.w), Q.copy(P));
  }
  function re(P) {
    ae.equals(P) === !1 && (i.viewport(P.x, P.y, P.z, P.w), ae.copy(P));
  }
  function De(P, se) {
    let Z = l.get(se);
    Z === void 0 && (Z = /* @__PURE__ */ new WeakMap(), l.set(se, Z));
    let pe = Z.get(P);
    pe === void 0 && (pe = i.getUniformBlockIndex(se, P.name), Z.set(P, pe));
  }
  function Oe(P, se) {
    const pe = l.get(se).get(P);
    c.get(se) !== pe && (i.uniformBlockBinding(se, pe, P.__bindingPointIndex), c.set(se, pe));
  }
  function $e() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), i.pixelStorei(i.PACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_ALIGNMENT, 4), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.BROWSER_DEFAULT_WEBGL), i.pixelStorei(i.PACK_ROW_LENGTH, 0), i.pixelStorei(i.PACK_SKIP_PIXELS, 0), i.pixelStorei(i.PACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_ROW_LENGTH, 0), i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0), i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0), i.pixelStorei(i.UNPACK_SKIP_ROWS, 0), i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0), p = {}, m = {}, he = null, ye = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), g = [], S = null, d = !1, h = null, M = null, b = null, E = null, R = null, y = null, w = null, x = new We(0, 0, 0), A = 0, L = !1, C = null, U = null, W = null, X = null, I = null, Q.set(0, 0, i.canvas.width, i.canvas.height), ae.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: te,
    disable: Re,
    bindFramebuffer: Le,
    drawBuffers: Ce,
    useProgram: lt,
    setBlending: st,
    setMaterial: ke,
    setFlipSided: ct,
    setCullFace: ht,
    setLineWidth: bt,
    setPolygonOffset: F,
    setScissorTest: _t,
    activeTexture: Be,
    bindTexture: Je,
    unbindTexture: ue,
    compressedTexImage2D: nt,
    compressedTexImage3D: T,
    texImage2D: D,
    texImage3D: Y,
    pixelStorei: ge,
    getParameter: fe,
    updateUBOMapping: De,
    uniformBlockBinding: Oe,
    texStorage2D: $,
    texStorage3D: ce,
    texSubImage2D: _,
    texSubImage3D: G,
    compressedTexSubImage2D: K,
    compressedTexSubImage3D: ee,
    scissor: le,
    viewport: re,
    reset: $e
  };
}
function bd(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Ue(), p = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new Set();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let g = !1;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function S(T, _) {
    return g ? new OffscreenCanvas(T, _) : pr("canvas");
  }
  function d(T, _, G) {
    let K = 1;
    const ee = nt(T);
    if ((ee.width > G || ee.height > G) && (K = G / Math.max(ee.width, ee.height)), K < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const $ = Math.floor(K * ee.width), ce = Math.floor(K * ee.height);
        u === void 0 && (u = S($, ce));
        const D = _ ? S($, ce) : u;
        return D.width = $, D.height = ce, D.getContext("2d").drawImage(T, 0, 0, $, ce), Pe("WebGLRenderer: Texture has been resized from (" + ee.width + "x" + ee.height + ") to (" + $ + "x" + ce + ")."), D;
      } else
        return "data" in T && Pe("WebGLRenderer: Image in DataTexture is too big (" + ee.width + "x" + ee.height + ")."), T;
    return T;
  }
  function h(T) {
    return T.generateMipmaps;
  }
  function M(T) {
    i.generateMipmap(T);
  }
  function b(T) {
    return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function E(T, _, G, K, ee, $ = !1) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let ce;
    K && (ce = e.get("EXT_texture_norm16"), ce || Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let D = _;
    if (_ === i.RED && (G === i.FLOAT && (D = i.R32F), G === i.HALF_FLOAT && (D = i.R16F), G === i.UNSIGNED_BYTE && (D = i.R8), G === i.UNSIGNED_SHORT && ce && (D = ce.R16_EXT), G === i.SHORT && ce && (D = ce.R16_SNORM_EXT)), _ === i.RED_INTEGER && (G === i.UNSIGNED_BYTE && (D = i.R8UI), G === i.UNSIGNED_SHORT && (D = i.R16UI), G === i.UNSIGNED_INT && (D = i.R32UI), G === i.BYTE && (D = i.R8I), G === i.SHORT && (D = i.R16I), G === i.INT && (D = i.R32I)), _ === i.RG && (G === i.FLOAT && (D = i.RG32F), G === i.HALF_FLOAT && (D = i.RG16F), G === i.UNSIGNED_BYTE && (D = i.RG8), G === i.UNSIGNED_SHORT && ce && (D = ce.RG16_EXT), G === i.SHORT && ce && (D = ce.RG16_SNORM_EXT)), _ === i.RG_INTEGER && (G === i.UNSIGNED_BYTE && (D = i.RG8UI), G === i.UNSIGNED_SHORT && (D = i.RG16UI), G === i.UNSIGNED_INT && (D = i.RG32UI), G === i.BYTE && (D = i.RG8I), G === i.SHORT && (D = i.RG16I), G === i.INT && (D = i.RG32I)), _ === i.RGB_INTEGER && (G === i.UNSIGNED_BYTE && (D = i.RGB8UI), G === i.UNSIGNED_SHORT && (D = i.RGB16UI), G === i.UNSIGNED_INT && (D = i.RGB32UI), G === i.BYTE && (D = i.RGB8I), G === i.SHORT && (D = i.RGB16I), G === i.INT && (D = i.RGB32I)), _ === i.RGBA_INTEGER && (G === i.UNSIGNED_BYTE && (D = i.RGBA8UI), G === i.UNSIGNED_SHORT && (D = i.RGBA16UI), G === i.UNSIGNED_INT && (D = i.RGBA32UI), G === i.BYTE && (D = i.RGBA8I), G === i.SHORT && (D = i.RGBA16I), G === i.INT && (D = i.RGBA32I)), _ === i.RGB && (G === i.UNSIGNED_SHORT && ce && (D = ce.RGB16_EXT), G === i.SHORT && ce && (D = ce.RGB16_SNORM_EXT), G === i.UNSIGNED_INT_5_9_9_9_REV && (D = i.RGB9_E5), G === i.UNSIGNED_INT_10F_11F_11F_REV && (D = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const Y = $ ? Pi : Ye.getTransfer(ee);
      G === i.FLOAT && (D = i.RGBA32F), G === i.HALF_FLOAT && (D = i.RGBA16F), G === i.UNSIGNED_BYTE && (D = Y === tt ? i.SRGB8_ALPHA8 : i.RGBA8), G === i.UNSIGNED_SHORT && ce && (D = ce.RGBA16_EXT), G === i.SHORT && ce && (D = ce.RGBA16_SNORM_EXT), G === i.UNSIGNED_SHORT_4_4_4_4 && (D = i.RGBA4), G === i.UNSIGNED_SHORT_5_5_5_1 && (D = i.RGB5_A1);
    }
    return (D === i.R16F || D === i.R32F || D === i.RG16F || D === i.RG32F || D === i.RGBA16F || D === i.RGBA32F) && e.get("EXT_color_buffer_float"), D;
  }
  function R(T, _) {
    let G;
    return T ? _ === null || _ === 1014 || _ === 1020 ? G = i.DEPTH24_STENCIL8 : _ === 1015 ? G = i.DEPTH32F_STENCIL8 : _ === 1012 && (G = i.DEPTH24_STENCIL8, Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === 1014 || _ === 1020 ? G = i.DEPTH_COMPONENT24 : _ === 1015 ? G = i.DEPTH_COMPONENT32F : _ === 1012 && (G = i.DEPTH_COMPONENT16), G;
  }
  function y(T, _) {
    return h(T) === !0 || T.isFramebufferTexture && T.minFilter !== 1003 && T.minFilter !== 1006 ? Math.log2(Math.max(_.width, _.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? _.mipmaps.length : 1;
  }
  function w(T) {
    const _ = T.target;
    _.removeEventListener("dispose", w), A(_), _.isVideoTexture && p.delete(_), _.isHTMLTexture && m.delete(_);
  }
  function x(T) {
    const _ = T.target;
    _.removeEventListener("dispose", x), C(_);
  }
  function A(T) {
    const _ = n.get(T);
    if (_.__webglInit === void 0) return;
    const G = T.source, K = f.get(G);
    if (K) {
      const ee = K[_.__cacheKey];
      ee.usedTimes--, ee.usedTimes === 0 && L(T), Object.keys(K).length === 0 && f.delete(G);
    }
    n.remove(T);
  }
  function L(T) {
    const _ = n.get(T);
    i.deleteTexture(_.__webglTexture);
    const G = T.source, K = f.get(G);
    delete K[_.__cacheKey], a.memory.textures--;
  }
  function C(T) {
    const _ = n.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget)
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(_.__webglFramebuffer[K]))
          for (let ee = 0; ee < _.__webglFramebuffer[K].length; ee++) i.deleteFramebuffer(_.__webglFramebuffer[K][ee]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[K]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let K = 0; K < _.__webglFramebuffer.length; K++) i.deleteFramebuffer(_.__webglFramebuffer[K]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let K = 0; K < _.__webglColorRenderbuffer.length; K++)
          _.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const G = T.textures;
    for (let K = 0, ee = G.length; K < ee; K++) {
      const $ = n.get(G[K]);
      $.__webglTexture && (i.deleteTexture($.__webglTexture), a.memory.textures--), n.remove(G[K]);
    }
    n.remove(T);
  }
  let U = 0;
  function W() {
    U = 0;
  }
  function X() {
    return U;
  }
  function I(T) {
    U = T;
  }
  function V() {
    const T = U;
    return T >= r.maxTextures && Pe("WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), U += 1, T;
  }
  function q(T) {
    const _ = [];
    return _.push(T.wrapS), _.push(T.wrapT), _.push(T.wrapR || 0), _.push(T.magFilter), _.push(T.minFilter), _.push(T.anisotropy), _.push(T.internalFormat), _.push(T.format), _.push(T.type), _.push(T.generateMipmaps), _.push(T.premultiplyAlpha), _.push(T.flipY), _.push(T.unpackAlignment), _.push(T.colorSpace), _.join();
  }
  function J(T, _) {
    const G = n.get(T);
    if (T.isVideoTexture && Je(T), T.isRenderTargetTexture === !1 && T.isExternalTexture !== !0 && T.version > 0 && G.__version !== T.version) {
      const K = T.image;
      if (K === null)
        Pe("WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        Pe("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Re(G, T, _);
        return;
      }
    } else T.isExternalTexture && (G.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, G.__webglTexture, i.TEXTURE0 + _);
  }
  function ne(T, _) {
    const G = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && G.__version !== T.version) {
      Re(G, T, _);
      return;
    } else T.isExternalTexture && (G.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, G.__webglTexture, i.TEXTURE0 + _);
  }
  function he(T, _) {
    const G = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && G.__version !== T.version) {
      Re(G, T, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, G.__webglTexture, i.TEXTURE0 + _);
  }
  function ye(T, _) {
    const G = n.get(T);
    if (T.isCubeDepthTexture !== !0 && T.version > 0 && G.__version !== T.version) {
      Le(G, T, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, G.__webglTexture, i.TEXTURE0 + _);
  }
  const Te = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, Xe = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, Q = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function ae(T, _) {
    if (_.type === 1015 && e.has("OES_texture_float_linear") === !1 && (_.magFilter === 1006 || _.magFilter === 1007 || _.magFilter === 1005 || _.magFilter === 1008 || _.minFilter === 1006 || _.minFilter === 1007 || _.minFilter === 1005 || _.minFilter === 1008) && Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, Te[_.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, Te[_.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, Te[_.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, Xe[_.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, Xe[_.minFilter]), _.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, Q[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === 1003 || _.minFilter !== 1005 && _.minFilter !== 1008 || _.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const G = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, G.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function H(T, _) {
    let G = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, _.addEventListener("dispose", w));
    const K = _.source;
    let ee = f.get(K);
    ee === void 0 && (ee = {}, f.set(K, ee));
    const $ = q(_);
    if ($ !== T.__cacheKey) {
      ee[$] === void 0 && (ee[$] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, G = !0), ee[$].usedTimes++;
      const ce = ee[T.__cacheKey];
      ce !== void 0 && (ee[T.__cacheKey].usedTimes--, ce.usedTimes === 0 && L(_)), T.__cacheKey = $, T.__webglTexture = ee[$].texture;
    }
    return G;
  }
  function oe(T, _, G) {
    return Math.floor(Math.floor(T / G) / _);
  }
  function te(T, _, G, K) {
    const $ = T.updateRanges;
    if ($.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, G, K, _.data);
    else {
      $.sort((ge, le) => ge.start - le.start);
      let ce = 0;
      for (let ge = 1; ge < $.length; ge++) {
        const le = $[ce], re = $[ge], De = le.start + le.count, Oe = oe(re.start, _.width, 4), $e = oe(le.start, _.width, 4);
        re.start <= De + 1 && Oe === $e && oe(re.start + re.count - 1, _.width, 4) === Oe ? le.count = Math.max(
          le.count,
          re.start + re.count - le.start
        ) : (++ce, $[ce] = re);
      }
      $.length = ce + 1;
      const D = t.getParameter(i.UNPACK_ROW_LENGTH), Y = t.getParameter(i.UNPACK_SKIP_PIXELS), fe = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let ge = 0, le = $.length; ge < le; ge++) {
        const re = $[ge], De = Math.floor(re.start / 4), Oe = Math.ceil(re.count / 4), $e = De % _.width, P = Math.floor(De / _.width), se = Oe, Z = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, $e), t.pixelStorei(i.UNPACK_SKIP_ROWS, P), t.texSubImage2D(i.TEXTURE_2D, 0, $e, P, se, Z, G, K, _.data);
      }
      T.clearUpdateRanges(), t.pixelStorei(i.UNPACK_ROW_LENGTH, D), t.pixelStorei(i.UNPACK_SKIP_PIXELS, Y), t.pixelStorei(i.UNPACK_SKIP_ROWS, fe);
    }
  }
  function Re(T, _, G) {
    let K = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (K = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (K = i.TEXTURE_3D);
    const ee = H(T, _), $ = _.source;
    t.bindTexture(K, T.__webglTexture, i.TEXTURE0 + G);
    const ce = n.get($);
    if ($.version !== ce.__version || ee === !0) {
      if (t.activeTexture(i.TEXTURE0 + G), (typeof ImageBitmap < "u" && _.image instanceof ImageBitmap) === !1) {
        const Z = Ye.getPrimaries(Ye.workingColorSpace), pe = _.colorSpace === hn ? null : Ye.getPrimaries(_.colorSpace), ie = _.colorSpace === hn || Z === pe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ie);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment);
      let Y = d(_.image, !1, r.maxTextureSize);
      Y = ue(_, Y);
      const fe = s.convert(_.format, _.colorSpace), ge = s.convert(_.type);
      let le = E(_.internalFormat, fe, ge, _.normalized, _.colorSpace, _.isVideoTexture);
      ae(K, _);
      let re;
      const De = _.mipmaps, Oe = _.isVideoTexture !== !0, $e = ce.__version === void 0 || ee === !0, P = $.dataReady, se = y(_, Y);
      if (_.isDepthTexture)
        le = R(_.format === 1027, _.type), $e && (Oe ? t.texStorage2D(i.TEXTURE_2D, 1, le, Y.width, Y.height) : t.texImage2D(i.TEXTURE_2D, 0, le, Y.width, Y.height, 0, fe, ge, null));
      else if (_.isDataTexture)
        if (De.length > 0) {
          Oe && $e && t.texStorage2D(i.TEXTURE_2D, se, le, De[0].width, De[0].height);
          for (let Z = 0, pe = De.length; Z < pe; Z++)
            re = De[Z], Oe ? P && t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, re.width, re.height, fe, ge, re.data) : t.texImage2D(i.TEXTURE_2D, Z, le, re.width, re.height, 0, fe, ge, re.data);
          _.generateMipmaps = !1;
        } else
          Oe ? ($e && t.texStorage2D(i.TEXTURE_2D, se, le, Y.width, Y.height), P && te(_, Y, fe, ge)) : t.texImage2D(i.TEXTURE_2D, 0, le, Y.width, Y.height, 0, fe, ge, Y.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Oe && $e && t.texStorage3D(i.TEXTURE_2D_ARRAY, se, le, De[0].width, De[0].height, Y.depth);
          for (let Z = 0, pe = De.length; Z < pe; Z++)
            if (re = De[Z], _.format !== 1023)
              if (fe !== null)
                if (Oe) {
                  if (P)
                    if (_.layerUpdates.size > 0) {
                      const ie = aa(re.width, re.height, _.format, _.type);
                      for (const j of _.layerUpdates) {
                        const Me = re.data.subarray(
                          j * ie / re.data.BYTES_PER_ELEMENT,
                          (j + 1) * ie / re.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Z, 0, 0, j, re.width, re.height, 1, fe, Me);
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Z, 0, 0, 0, re.width, re.height, Y.depth, fe, re.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Z, le, re.width, re.height, Y.depth, 0, re.data, 0, 0);
              else
                Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Oe ? P && t.texSubImage3D(i.TEXTURE_2D_ARRAY, Z, 0, 0, 0, re.width, re.height, Y.depth, fe, ge, re.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, Z, le, re.width, re.height, Y.depth, 0, fe, ge, re.data);
        } else {
          Oe && $e && t.texStorage2D(i.TEXTURE_2D, se, le, De[0].width, De[0].height);
          for (let Z = 0, pe = De.length; Z < pe; Z++)
            re = De[Z], _.format !== 1023 ? fe !== null ? Oe ? P && t.compressedTexSubImage2D(i.TEXTURE_2D, Z, 0, 0, re.width, re.height, fe, re.data) : t.compressedTexImage2D(i.TEXTURE_2D, Z, le, re.width, re.height, 0, re.data) : Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Oe ? P && t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, re.width, re.height, fe, ge, re.data) : t.texImage2D(i.TEXTURE_2D, Z, le, re.width, re.height, 0, fe, ge, re.data);
        }
      else if (_.isDataArrayTexture)
        if (Oe) {
          if ($e && t.texStorage3D(i.TEXTURE_2D_ARRAY, se, le, Y.width, Y.height, Y.depth), P)
            if (_.layerUpdates.size > 0) {
              const Z = aa(Y.width, Y.height, _.format, _.type);
              for (const pe of _.layerUpdates) {
                const ie = Y.data.subarray(
                  pe * Z / Y.data.BYTES_PER_ELEMENT,
                  (pe + 1) * Z / Y.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, pe, Y.width, Y.height, 1, fe, ge, ie);
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Y.width, Y.height, Y.depth, fe, ge, Y.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, le, Y.width, Y.height, Y.depth, 0, fe, ge, Y.data);
      else if (_.isData3DTexture)
        Oe ? ($e && t.texStorage3D(i.TEXTURE_3D, se, le, Y.width, Y.height, Y.depth), P && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Y.width, Y.height, Y.depth, fe, ge, Y.data)) : t.texImage3D(i.TEXTURE_3D, 0, le, Y.width, Y.height, Y.depth, 0, fe, ge, Y.data);
      else if (_.isFramebufferTexture) {
        if ($e)
          if (Oe)
            t.texStorage2D(i.TEXTURE_2D, se, le, Y.width, Y.height);
          else {
            let Z = Y.width, pe = Y.height;
            for (let ie = 0; ie < se; ie++)
              t.texImage2D(i.TEXTURE_2D, ie, le, Z, pe, 0, fe, ge, null), Z >>= 1, pe >>= 1;
          }
      } else if (_.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const Z = i.canvas;
          if (Z.hasAttribute("layoutsubtree") || Z.setAttribute("layoutsubtree", "true"), Y.parentNode !== Z) {
            Z.appendChild(Y), m.add(_), Z.onpaint = (Fe) => {
              const pt = Fe.changedElements;
              for (const et of m)
                pt.includes(et.image) && (et.needsUpdate = !0);
            }, Z.requestPaint();
            return;
          }
          const pe = 0, ie = i.RGBA, j = i.RGBA, Me = i.UNSIGNED_BYTE;
          i.texElementImage2D(i.TEXTURE_2D, pe, ie, j, Me, Y), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (De.length > 0) {
        if (Oe && $e) {
          const Z = nt(De[0]);
          t.texStorage2D(i.TEXTURE_2D, se, le, Z.width, Z.height);
        }
        for (let Z = 0, pe = De.length; Z < pe; Z++)
          re = De[Z], Oe ? P && t.texSubImage2D(i.TEXTURE_2D, Z, 0, 0, fe, ge, re) : t.texImage2D(i.TEXTURE_2D, Z, le, fe, ge, re);
        _.generateMipmaps = !1;
      } else if (Oe) {
        if ($e) {
          const Z = nt(Y);
          t.texStorage2D(i.TEXTURE_2D, se, le, Z.width, Z.height);
        }
        P && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, fe, ge, Y);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, le, fe, ge, Y);
      h(_) && M(K), ce.__version = $.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function Le(T, _, G) {
    if (_.image.length !== 6) return;
    const K = H(T, _), ee = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + G);
    const $ = n.get(ee);
    if (ee.version !== $.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + G);
      const ce = Ye.getPrimaries(Ye.workingColorSpace), D = _.colorSpace === hn ? null : Ye.getPrimaries(_.colorSpace), Y = _.colorSpace === hn || ce === D ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Y);
      const fe = _.isCompressedTexture || _.image[0].isCompressedTexture, ge = _.image[0] && _.image[0].isDataTexture, le = [];
      for (let j = 0; j < 6; j++)
        !fe && !ge ? le[j] = d(_.image[j], !0, r.maxCubemapSize) : le[j] = ge ? _.image[j].image : _.image[j], le[j] = ue(_, le[j]);
      const re = le[0], De = s.convert(_.format, _.colorSpace), Oe = s.convert(_.type), $e = E(_.internalFormat, De, Oe, _.normalized, _.colorSpace), P = _.isVideoTexture !== !0, se = $.__version === void 0 || K === !0, Z = ee.dataReady;
      let pe = y(_, re);
      ae(i.TEXTURE_CUBE_MAP, _);
      let ie;
      if (fe) {
        P && se && t.texStorage2D(i.TEXTURE_CUBE_MAP, pe, $e, re.width, re.height);
        for (let j = 0; j < 6; j++) {
          ie = le[j].mipmaps;
          for (let Me = 0; Me < ie.length; Me++) {
            const Fe = ie[Me];
            _.format !== 1023 ? De !== null ? P ? Z && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, Me, 0, 0, Fe.width, Fe.height, De, Fe.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, Me, $e, Fe.width, Fe.height, 0, Fe.data) : Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : P ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, Me, 0, 0, Fe.width, Fe.height, De, Oe, Fe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, Me, $e, Fe.width, Fe.height, 0, De, Oe, Fe.data);
          }
        }
      } else {
        if (ie = _.mipmaps, P && se) {
          ie.length > 0 && pe++;
          const j = nt(le[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, pe, $e, j.width, j.height);
        }
        for (let j = 0; j < 6; j++)
          if (ge) {
            P ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, le[j].width, le[j].height, De, Oe, le[j].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, $e, le[j].width, le[j].height, 0, De, Oe, le[j].data);
            for (let Me = 0; Me < ie.length; Me++) {
              const pt = ie[Me].image[j].image;
              P ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, Me + 1, 0, 0, pt.width, pt.height, De, Oe, pt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, Me + 1, $e, pt.width, pt.height, 0, De, Oe, pt.data);
            }
          } else {
            P ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, De, Oe, le[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, $e, De, Oe, le[j]);
            for (let Me = 0; Me < ie.length; Me++) {
              const Fe = ie[Me];
              P ? Z && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, Me + 1, 0, 0, De, Oe, Fe.image[j]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + j, Me + 1, $e, De, Oe, Fe.image[j]);
            }
          }
      }
      h(_) && M(i.TEXTURE_CUBE_MAP), $.__version = ee.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function Ce(T, _, G, K, ee, $) {
    const ce = s.convert(G.format, G.colorSpace), D = s.convert(G.type), Y = E(G.internalFormat, ce, D, G.normalized, G.colorSpace), fe = n.get(_), ge = n.get(G);
    if (ge.__renderTarget = _, !fe.__hasExternalTextures) {
      const le = Math.max(1, _.width >> $), re = Math.max(1, _.height >> $);
      ee === i.TEXTURE_3D || ee === i.TEXTURE_2D_ARRAY ? t.texImage3D(ee, $, Y, le, re, _.depth, 0, ce, D, null) : t.texImage2D(ee, $, Y, le, re, 0, ce, D, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, T), Be(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, ee, ge.__webglTexture, 0, _t(_)) : (ee === i.TEXTURE_2D || ee >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ee <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, K, ee, ge.__webglTexture, $), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function lt(T, _, G) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), _.depthBuffer) {
      const K = _.depthTexture, ee = K && K.isDepthTexture ? K.type : null, $ = R(_.stencilBuffer, ee), ce = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      Be(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, _t(_), $, _.width, _.height) : G ? i.renderbufferStorageMultisample(i.RENDERBUFFER, _t(_), $, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, $, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, ce, i.RENDERBUFFER, T);
    } else {
      const K = _.textures;
      for (let ee = 0; ee < K.length; ee++) {
        const $ = K[ee], ce = s.convert($.format, $.colorSpace), D = s.convert($.type), Y = E($.internalFormat, ce, D, $.normalized, $.colorSpace);
        Be(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, _t(_), Y, _.width, _.height) : G ? i.renderbufferStorageMultisample(i.RENDERBUFFER, _t(_), Y, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, Y, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Ve(T, _, G) {
    const K = _.isWebGLCubeRenderTarget === !0;
    if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const ee = n.get(_.depthTexture);
    if (ee.__renderTarget = _, (!ee.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), K) {
      if (ee.__webglInit === void 0 && (ee.__webglInit = !0, _.depthTexture.addEventListener("dispose", w)), ee.__webglTexture === void 0) {
        ee.__webglTexture = i.createTexture(), t.bindTexture(i.TEXTURE_CUBE_MAP, ee.__webglTexture), ae(i.TEXTURE_CUBE_MAP, _.depthTexture);
        const fe = s.convert(_.depthTexture.format), ge = s.convert(_.depthTexture.type);
        let le;
        _.depthTexture.format === 1026 ? le = i.DEPTH_COMPONENT24 : _.depthTexture.format === 1027 && (le = i.DEPTH24_STENCIL8);
        for (let re = 0; re < 6; re++)
          i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, le, _.width, _.height, 0, fe, ge, null);
      }
    } else
      J(_.depthTexture, 0);
    const $ = ee.__webglTexture, ce = _t(_), D = K ? i.TEXTURE_CUBE_MAP_POSITIVE_X + G : i.TEXTURE_2D, Y = _.depthTexture.format === 1027 ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
    if (_.depthTexture.format === 1026)
      Be(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, D, $, 0, ce) : i.framebufferTexture2D(i.FRAMEBUFFER, Y, D, $, 0);
    else if (_.depthTexture.format === 1027)
      Be(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Y, D, $, 0, ce) : i.framebufferTexture2D(i.FRAMEBUFFER, Y, D, $, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Qe(T) {
    const _ = n.get(T), G = T.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== T.depthTexture) {
      const K = T.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), K) {
        const ee = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, K.removeEventListener("dispose", ee);
        };
        K.addEventListener("dispose", ee), _.__depthDisposeCallback = ee;
      }
      _.__boundDepthTexture = K;
    }
    if (T.depthTexture && !_.__autoAllocateDepthBuffer)
      if (G)
        for (let K = 0; K < 6; K++)
          Ve(_.__webglFramebuffer[K], T, K);
      else {
        const K = T.texture.mipmaps;
        K && K.length > 0 ? Ve(_.__webglFramebuffer[0], T, 0) : Ve(_.__webglFramebuffer, T, 0);
      }
    else if (G) {
      _.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[K]), _.__webglDepthbuffer[K] === void 0)
          _.__webglDepthbuffer[K] = i.createRenderbuffer(), lt(_.__webglDepthbuffer[K], T, !1);
        else {
          const ee = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, $ = _.__webglDepthbuffer[K];
          i.bindRenderbuffer(i.RENDERBUFFER, $), i.framebufferRenderbuffer(i.FRAMEBUFFER, ee, i.RENDERBUFFER, $);
        }
    } else {
      const K = T.texture.mipmaps;
      if (K && K.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
        _.__webglDepthbuffer = i.createRenderbuffer(), lt(_.__webglDepthbuffer, T, !1);
      else {
        const ee = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, $ = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, $), i.framebufferRenderbuffer(i.FRAMEBUFFER, ee, i.RENDERBUFFER, $);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function st(T, _, G) {
    const K = n.get(T);
    _ !== void 0 && Ce(K.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), G !== void 0 && Qe(T);
  }
  function ke(T) {
    const _ = T.texture, G = n.get(T), K = n.get(_);
    T.addEventListener("dispose", x);
    const ee = T.textures, $ = T.isWebGLCubeRenderTarget === !0, ce = ee.length > 1;
    if (ce || (K.__webglTexture === void 0 && (K.__webglTexture = i.createTexture()), K.__version = _.version, a.memory.textures++), $) {
      G.__webglFramebuffer = [];
      for (let D = 0; D < 6; D++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          G.__webglFramebuffer[D] = [];
          for (let Y = 0; Y < _.mipmaps.length; Y++)
            G.__webglFramebuffer[D][Y] = i.createFramebuffer();
        } else
          G.__webglFramebuffer[D] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        G.__webglFramebuffer = [];
        for (let D = 0; D < _.mipmaps.length; D++)
          G.__webglFramebuffer[D] = i.createFramebuffer();
      } else
        G.__webglFramebuffer = i.createFramebuffer();
      if (ce)
        for (let D = 0, Y = ee.length; D < Y; D++) {
          const fe = n.get(ee[D]);
          fe.__webglTexture === void 0 && (fe.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (T.samples > 0 && Be(T) === !1) {
        G.__webglMultisampledFramebuffer = i.createFramebuffer(), G.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, G.__webglMultisampledFramebuffer);
        for (let D = 0; D < ee.length; D++) {
          const Y = ee[D];
          G.__webglColorRenderbuffer[D] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, G.__webglColorRenderbuffer[D]);
          const fe = s.convert(Y.format, Y.colorSpace), ge = s.convert(Y.type), le = E(Y.internalFormat, fe, ge, Y.normalized, Y.colorSpace, T.isXRRenderTarget === !0), re = _t(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, re, le, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + D, i.RENDERBUFFER, G.__webglColorRenderbuffer[D]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (G.__webglDepthRenderbuffer = i.createRenderbuffer(), lt(G.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if ($) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture), ae(i.TEXTURE_CUBE_MAP, _);
      for (let D = 0; D < 6; D++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let Y = 0; Y < _.mipmaps.length; Y++)
            Ce(G.__webglFramebuffer[D][Y], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + D, Y);
        else
          Ce(G.__webglFramebuffer[D], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + D, 0);
      h(_) && M(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ce) {
      for (let D = 0, Y = ee.length; D < Y; D++) {
        const fe = ee[D], ge = n.get(fe);
        let le = i.TEXTURE_2D;
        (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (le = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(le, ge.__webglTexture), ae(le, fe), Ce(G.__webglFramebuffer, T, fe, i.COLOR_ATTACHMENT0 + D, le, 0), h(fe) && M(le);
      }
      t.unbindTexture();
    } else {
      let D = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (D = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(D, K.__webglTexture), ae(D, _), _.mipmaps && _.mipmaps.length > 0)
        for (let Y = 0; Y < _.mipmaps.length; Y++)
          Ce(G.__webglFramebuffer[Y], T, _, i.COLOR_ATTACHMENT0, D, Y);
      else
        Ce(G.__webglFramebuffer, T, _, i.COLOR_ATTACHMENT0, D, 0);
      h(_) && M(D), t.unbindTexture();
    }
    T.depthBuffer && Qe(T);
  }
  function ct(T) {
    const _ = T.textures;
    for (let G = 0, K = _.length; G < K; G++) {
      const ee = _[G];
      if (h(ee)) {
        const $ = b(T), ce = n.get(ee).__webglTexture;
        t.bindTexture($, ce), M($), t.unbindTexture();
      }
    }
  }
  const ht = [], bt = [];
  function F(T) {
    if (T.samples > 0) {
      if (Be(T) === !1) {
        const _ = T.textures, G = T.width, K = T.height;
        let ee = i.COLOR_BUFFER_BIT;
        const $ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ce = n.get(T), D = _.length > 1;
        if (D)
          for (let fe = 0; fe < _.length; fe++)
            t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + fe, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + fe, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, ce.__webglMultisampledFramebuffer);
        const Y = T.texture.mipmaps;
        Y && Y.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ce.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ce.__webglFramebuffer);
        for (let fe = 0; fe < _.length; fe++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (ee |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (ee |= i.STENCIL_BUFFER_BIT)), D) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ce.__webglColorRenderbuffer[fe]);
            const ge = n.get(_[fe]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, ge, 0);
          }
          i.blitFramebuffer(0, 0, G, K, 0, 0, G, K, ee, i.NEAREST), c === !0 && (ht.length = 0, bt.length = 0, ht.push(i.COLOR_ATTACHMENT0 + fe), T.depthBuffer && T.resolveDepthBuffer === !1 && (ht.push($), bt.push($), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, bt)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ht));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), D)
          for (let fe = 0; fe < _.length; fe++) {
            t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + fe, i.RENDERBUFFER, ce.__webglColorRenderbuffer[fe]);
            const ge = n.get(_[fe]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + fe, i.TEXTURE_2D, ge, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ce.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && c) {
        const _ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function _t(T) {
    return Math.min(r.maxSamples, T.samples);
  }
  function Be(T) {
    const _ = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function Je(T) {
    const _ = a.render.frame;
    p.get(T) !== _ && (p.set(T, _), T.update());
  }
  function ue(T, _) {
    const G = T.colorSpace, K = T.format, ee = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || G !== Ci && G !== hn && (Ye.getTransfer(G) === tt ? (K !== 1023 || ee !== 1009) && Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Ke("WebGLTextures: Unsupported texture color space:", G)), _;
  }
  function nt(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (l.width = T.naturalWidth || T.width, l.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (l.width = T.displayWidth, l.height = T.displayHeight) : (l.width = T.width, l.height = T.height), l;
  }
  this.allocateTextureUnit = V, this.resetTextureUnits = W, this.getTextureUnits = X, this.setTextureUnits = I, this.setTexture2D = J, this.setTexture2DArray = ne, this.setTexture3D = he, this.setTextureCube = ye, this.rebindTextures = st, this.setupRenderTarget = ke, this.updateRenderTargetMipmap = ct, this.updateMultisampleRenderTarget = F, this.setupDepthRenderbuffer = Qe, this.setupFrameBufferTexture = Ce, this.useMultisampledRTT = Be, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function ao(i, e) {
  function t(n, r = hn) {
    let s;
    const a = Ye.getTransfer(r);
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
const Ad = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Rd = `
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
class wd {
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
      const n = new Ss(e.texture);
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
      const t = e.cameras[0].viewport, n = new jt({
        vertexShader: Ad,
        fragmentShader: Rd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Xt(new pi(20, 20), n);
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
class Cd extends wn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, p = null, m = null, u = null, f = null, g = null;
    const S = typeof XRWebGLBinding < "u", d = new wd(), h = {}, M = t.getContextAttributes();
    let b = null, E = null;
    const R = [], y = [], w = new Ue();
    let x = null;
    const A = new Vt();
    A.viewport = new mt();
    const L = new Vt();
    L.viewport = new mt();
    const C = [A, L], U = new Qa();
    let W = null, X = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(H) {
      let oe = R[H];
      return oe === void 0 && (oe = new dr(), R[H] = oe), oe.getTargetRaySpace();
    }, this.getControllerGrip = function(H) {
      let oe = R[H];
      return oe === void 0 && (oe = new dr(), R[H] = oe), oe.getGripSpace();
    }, this.getHand = function(H) {
      let oe = R[H];
      return oe === void 0 && (oe = new dr(), R[H] = oe), oe.getHandSpace();
    };
    function I(H) {
      const oe = y.indexOf(H.inputSource);
      if (oe === -1)
        return;
      const te = R[oe];
      te !== void 0 && (te.update(H.inputSource, H.frame, l || a), te.dispatchEvent({ type: H.type, data: H.inputSource }));
    }
    function V() {
      r.removeEventListener("select", I), r.removeEventListener("selectstart", I), r.removeEventListener("selectend", I), r.removeEventListener("squeeze", I), r.removeEventListener("squeezestart", I), r.removeEventListener("squeezeend", I), r.removeEventListener("end", V), r.removeEventListener("inputsourceschange", q);
      for (let H = 0; H < R.length; H++) {
        const oe = y[H];
        oe !== null && (y[H] = null, R[H].disconnect(oe));
      }
      W = null, X = null, d.reset();
      for (const H in h)
        delete h[H];
      e.setRenderTarget(b), f = null, u = null, m = null, r = null, E = null, ae.stop(), n.isPresenting = !1, e.setPixelRatio(x), e.setSize(w.width, w.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(H) {
      s = H, n.isPresenting === !0 && Pe("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(H) {
      o = H, n.isPresenting === !0 && Pe("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(H) {
      l = H;
    }, this.getBaseLayer = function() {
      return u !== null ? u : f;
    }, this.getBinding = function() {
      return m === null && S && (m = new XRWebGLBinding(r, t)), m;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(H) {
      if (r = H, r !== null) {
        if (b = e.getRenderTarget(), r.addEventListener("select", I), r.addEventListener("selectstart", I), r.addEventListener("selectend", I), r.addEventListener("squeeze", I), r.addEventListener("squeezestart", I), r.addEventListener("squeezeend", I), r.addEventListener("end", V), r.addEventListener("inputsourceschange", q), M.xrCompatible !== !0 && await t.makeXRCompatible(), x = e.getPixelRatio(), e.getSize(w), S && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let te = null, Re = null, Le = null;
          M.depth && (Le = M.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, te = M.stencil ? 1027 : 1026, Re = M.stencil ? 1020 : 1014);
          const Ce = {
            colorFormat: t.RGBA8,
            depthFormat: Le,
            scaleFactor: s
          };
          m = this.getBinding(), u = m.createProjectionLayer(Ce), r.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), E = new $t(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Gn(u.textureWidth, u.textureHeight, Re, void 0, void 0, void 0, void 0, void 0, void 0, te),
              stencilBuffer: M.stencil,
              colorSpace: e.outputColorSpace,
              samples: M.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1,
              resolveStencilBuffer: u.ignoreDepthValues === !1
            }
          );
        } else {
          const te = {
            antialias: M.antialias,
            alpha: !0,
            depth: M.depth,
            stencil: M.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(r, t, te), r.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), E = new $t(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: M.stencil,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        E.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), ae.setContext(r), ae.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return d.getDepthTexture();
    };
    function q(H) {
      for (let oe = 0; oe < H.removed.length; oe++) {
        const te = H.removed[oe], Re = y.indexOf(te);
        Re >= 0 && (y[Re] = null, R[Re].disconnect(te));
      }
      for (let oe = 0; oe < H.added.length; oe++) {
        const te = H.added[oe];
        let Re = y.indexOf(te);
        if (Re === -1) {
          for (let Ce = 0; Ce < R.length; Ce++)
            if (Ce >= y.length) {
              y.push(te), Re = Ce;
              break;
            } else if (y[Ce] === null) {
              y[Ce] = te, Re = Ce;
              break;
            }
          if (Re === -1) break;
        }
        const Le = R[Re];
        Le && Le.connect(te);
      }
    }
    const J = new O(), ne = new O();
    function he(H, oe, te) {
      J.setFromMatrixPosition(oe.matrixWorld), ne.setFromMatrixPosition(te.matrixWorld);
      const Re = J.distanceTo(ne), Le = oe.projectionMatrix.elements, Ce = te.projectionMatrix.elements, lt = Le[14] / (Le[10] - 1), Ve = Le[14] / (Le[10] + 1), Qe = (Le[9] + 1) / Le[5], st = (Le[9] - 1) / Le[5], ke = (Le[8] - 1) / Le[0], ct = (Ce[8] + 1) / Ce[0], ht = lt * ke, bt = lt * ct, F = Re / (-ke + ct), _t = F * -ke;
      if (oe.matrixWorld.decompose(H.position, H.quaternion, H.scale), H.translateX(_t), H.translateZ(F), H.matrixWorld.compose(H.position, H.quaternion, H.scale), H.matrixWorldInverse.copy(H.matrixWorld).invert(), Le[10] === -1)
        H.projectionMatrix.copy(oe.projectionMatrix), H.projectionMatrixInverse.copy(oe.projectionMatrixInverse);
      else {
        const Be = lt + F, Je = Ve + F, ue = ht - _t, nt = bt + (Re - _t), T = Qe * Ve / Je * Be, _ = st * Ve / Je * Be;
        H.projectionMatrix.makePerspective(ue, nt, T, _, Be, Je), H.projectionMatrixInverse.copy(H.projectionMatrix).invert();
      }
    }
    function ye(H, oe) {
      oe === null ? H.matrixWorld.copy(H.matrix) : H.matrixWorld.multiplyMatrices(oe.matrixWorld, H.matrix), H.matrixWorldInverse.copy(H.matrixWorld).invert();
    }
    this.updateCamera = function(H) {
      if (r === null) return;
      let oe = H.near, te = H.far;
      d.texture !== null && (d.depthNear > 0 && (oe = d.depthNear), d.depthFar > 0 && (te = d.depthFar)), U.near = L.near = A.near = oe, U.far = L.far = A.far = te, (W !== U.near || X !== U.far) && (r.updateRenderState({
        depthNear: U.near,
        depthFar: U.far
      }), W = U.near, X = U.far), U.layers.mask = H.layers.mask | 6, A.layers.mask = U.layers.mask & -5, L.layers.mask = U.layers.mask & -3;
      const Re = H.parent, Le = U.cameras;
      ye(U, Re);
      for (let Ce = 0; Ce < Le.length; Ce++)
        ye(Le[Ce], Re);
      Le.length === 2 ? he(U, A, L) : U.projectionMatrix.copy(A.projectionMatrix), Te(H, U, Re);
    };
    function Te(H, oe, te) {
      te === null ? H.matrix.copy(oe.matrixWorld) : (H.matrix.copy(te.matrixWorld), H.matrix.invert(), H.matrix.multiply(oe.matrixWorld)), H.matrix.decompose(H.position, H.quaternion, H.scale), H.updateMatrixWorld(!0), H.projectionMatrix.copy(oe.projectionMatrix), H.projectionMatrixInverse.copy(oe.projectionMatrixInverse), H.isPerspectiveCamera && (H.fov = ls * 2 * Math.atan(1 / H.projectionMatrix.elements[5]), H.zoom = 1);
    }
    this.getCamera = function() {
      return U;
    }, this.getFoveation = function() {
      if (!(u === null && f === null))
        return c;
    }, this.setFoveation = function(H) {
      c = H, u !== null && (u.fixedFoveation = H), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = H);
    }, this.hasDepthSensing = function() {
      return d.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return d.getMesh(U);
    }, this.getCameraTexture = function(H) {
      return h[H];
    };
    let Xe = null;
    function Q(H, oe) {
      if (p = oe.getViewerPose(l || a), g = oe, p !== null) {
        const te = p.views;
        f !== null && (e.setRenderTargetFramebuffer(E, f.framebuffer), e.setRenderTarget(E));
        let Re = !1;
        te.length !== U.cameras.length && (U.cameras.length = 0, Re = !0);
        for (let Ve = 0; Ve < te.length; Ve++) {
          const Qe = te[Ve];
          let st = null;
          if (f !== null)
            st = f.getViewport(Qe);
          else {
            const ct = m.getViewSubImage(u, Qe);
            st = ct.viewport, Ve === 0 && (e.setRenderTargetTextures(
              E,
              ct.colorTexture,
              ct.depthStencilTexture
            ), e.setRenderTarget(E));
          }
          let ke = C[Ve];
          ke === void 0 && (ke = new Vt(), ke.layers.enable(Ve), ke.viewport = new mt(), C[Ve] = ke), ke.matrix.fromArray(Qe.transform.matrix), ke.matrix.decompose(ke.position, ke.quaternion, ke.scale), ke.projectionMatrix.fromArray(Qe.projectionMatrix), ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(), ke.viewport.set(st.x, st.y, st.width, st.height), Ve === 0 && (U.matrix.copy(ke.matrix), U.matrix.decompose(U.position, U.quaternion, U.scale)), Re === !0 && U.cameras.push(ke);
        }
        const Le = r.enabledFeatures;
        if (Le && Le.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && S) {
          m = n.getBinding();
          const Ve = m.getDepthInformation(te[0]);
          Ve && Ve.isValid && Ve.texture && d.init(Ve, r.renderState);
        }
        if (Le && Le.includes("camera-access") && S) {
          e.state.unbindTexture(), m = n.getBinding();
          for (let Ve = 0; Ve < te.length; Ve++) {
            const Qe = te[Ve].camera;
            if (Qe) {
              let st = h[Qe];
              st || (st = new Ss(), h[Qe] = st);
              const ke = m.getCameraImage(Qe);
              st.sourceTexture = ke;
            }
          }
        }
      }
      for (let te = 0; te < R.length; te++) {
        const Re = y[te], Le = R[te];
        Re !== null && Le !== void 0 && Le.update(Re, oe, l || a);
      }
      Xe && Xe(H, oe), oe.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: oe }), g = null;
    }
    const ae = new eo();
    ae.setAnimationLoop(Q), this.setAnimationLoop = function(H) {
      Xe = H;
    }, this.dispose = function() {
    };
  }
}
const Pd = /* @__PURE__ */ new ft(), oo = /* @__PURE__ */ new Ne();
oo.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Dd(i, e) {
  function t(d, h) {
    d.matrixAutoUpdate === !0 && d.updateMatrix(), h.value.copy(d.matrix);
  }
  function n(d, h) {
    h.color.getRGB(d.fogColor.value, qa(i)), h.isFog ? (d.fogNear.value = h.near, d.fogFar.value = h.far) : h.isFogExp2 && (d.fogDensity.value = h.density);
  }
  function r(d, h, M, b, E) {
    h.isNodeMaterial ? h.uniformsNeedUpdate = !1 : h.isMeshBasicMaterial ? s(d, h) : h.isMeshLambertMaterial ? (s(d, h), h.envMap && (d.envMapIntensity.value = h.envMapIntensity)) : h.isMeshToonMaterial ? (s(d, h), m(d, h)) : h.isMeshPhongMaterial ? (s(d, h), p(d, h), h.envMap && (d.envMapIntensity.value = h.envMapIntensity)) : h.isMeshStandardMaterial ? (s(d, h), u(d, h), h.isMeshPhysicalMaterial && f(d, h, E)) : h.isMeshMatcapMaterial ? (s(d, h), g(d, h)) : h.isMeshDepthMaterial ? s(d, h) : h.isMeshDistanceMaterial ? (s(d, h), S(d, h)) : h.isMeshNormalMaterial ? s(d, h) : h.isLineBasicMaterial ? (a(d, h), h.isLineDashedMaterial && o(d, h)) : h.isPointsMaterial ? c(d, h, M, b) : h.isSpriteMaterial ? l(d, h) : h.isShadowMaterial ? (d.color.value.copy(h.color), d.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(d, h) {
    d.opacity.value = h.opacity, h.color && d.diffuse.value.copy(h.color), h.emissive && d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (d.map.value = h.map, t(h.map, d.mapTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, t(h.alphaMap, d.alphaMapTransform)), h.bumpMap && (d.bumpMap.value = h.bumpMap, t(h.bumpMap, d.bumpMapTransform), d.bumpScale.value = h.bumpScale, h.side === 1 && (d.bumpScale.value *= -1)), h.normalMap && (d.normalMap.value = h.normalMap, t(h.normalMap, d.normalMapTransform), d.normalScale.value.copy(h.normalScale), h.side === 1 && d.normalScale.value.negate()), h.displacementMap && (d.displacementMap.value = h.displacementMap, t(h.displacementMap, d.displacementMapTransform), d.displacementScale.value = h.displacementScale, d.displacementBias.value = h.displacementBias), h.emissiveMap && (d.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, d.emissiveMapTransform)), h.specularMap && (d.specularMap.value = h.specularMap, t(h.specularMap, d.specularMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
    const M = e.get(h), b = M.envMap, E = M.envMapRotation;
    b && (d.envMap.value = b, d.envMapRotation.value.setFromMatrix4(Pd.makeRotationFromEuler(E)).transpose(), b.isCubeTexture && b.isRenderTargetTexture === !1 && d.envMapRotation.value.premultiply(oo), d.reflectivity.value = h.reflectivity, d.ior.value = h.ior, d.refractionRatio.value = h.refractionRatio), h.lightMap && (d.lightMap.value = h.lightMap, d.lightMapIntensity.value = h.lightMapIntensity, t(h.lightMap, d.lightMapTransform)), h.aoMap && (d.aoMap.value = h.aoMap, d.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, d.aoMapTransform));
  }
  function a(d, h) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, h.map && (d.map.value = h.map, t(h.map, d.mapTransform));
  }
  function o(d, h) {
    d.dashSize.value = h.dashSize, d.totalSize.value = h.dashSize + h.gapSize, d.scale.value = h.scale;
  }
  function c(d, h, M, b) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, d.size.value = h.size * M, d.scale.value = b * 0.5, h.map && (d.map.value = h.map, t(h.map, d.uvTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, t(h.alphaMap, d.alphaMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
  }
  function l(d, h) {
    d.diffuse.value.copy(h.color), d.opacity.value = h.opacity, d.rotation.value = h.rotation, h.map && (d.map.value = h.map, t(h.map, d.mapTransform)), h.alphaMap && (d.alphaMap.value = h.alphaMap, t(h.alphaMap, d.alphaMapTransform)), h.alphaTest > 0 && (d.alphaTest.value = h.alphaTest);
  }
  function p(d, h) {
    d.specular.value.copy(h.specular), d.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function m(d, h) {
    h.gradientMap && (d.gradientMap.value = h.gradientMap);
  }
  function u(d, h) {
    d.metalness.value = h.metalness, h.metalnessMap && (d.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, d.metalnessMapTransform)), d.roughness.value = h.roughness, h.roughnessMap && (d.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, d.roughnessMapTransform)), h.envMap && (d.envMapIntensity.value = h.envMapIntensity);
  }
  function f(d, h, M) {
    d.ior.value = h.ior, h.sheen > 0 && (d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), d.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (d.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, d.sheenColorMapTransform)), h.sheenRoughnessMap && (d.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, d.sheenRoughnessMapTransform))), h.clearcoat > 0 && (d.clearcoat.value = h.clearcoat, d.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (d.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, d.clearcoatMapTransform)), h.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (d.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, d.clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === 1 && d.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (d.dispersion.value = h.dispersion), h.iridescence > 0 && (d.iridescence.value = h.iridescence, d.iridescenceIOR.value = h.iridescenceIOR, d.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (d.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, d.iridescenceMapTransform)), h.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), h.transmission > 0 && (d.transmission.value = h.transmission, d.transmissionSamplerMap.value = M.texture, d.transmissionSamplerSize.value.set(M.width, M.height), h.transmissionMap && (d.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, d.transmissionMapTransform)), d.thickness.value = h.thickness, h.thicknessMap && (d.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, d.thicknessMapTransform)), d.attenuationDistance.value = h.attenuationDistance, d.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (d.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (d.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, d.anisotropyMapTransform))), d.specularIntensity.value = h.specularIntensity, d.specularColor.value.copy(h.specularColor), h.specularColorMap && (d.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, d.specularColorMapTransform)), h.specularIntensityMap && (d.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function g(d, h) {
    h.matcap && (d.matcap.value = h.matcap);
  }
  function S(d, h) {
    const M = e.get(h).light;
    d.referencePosition.value.setFromMatrixPosition(M.matrixWorld), d.nearDistance.value = M.shadow.camera.near, d.farDistance.value = M.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Ld(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(M, b) {
    const E = b.program;
    n.uniformBlockBinding(M, E);
  }
  function l(M, b) {
    let E = r[M.id];
    E === void 0 && (g(M), E = p(M), r[M.id] = E, M.addEventListener("dispose", d));
    const R = b.program;
    n.updateUBOMapping(M, R);
    const y = e.render.frame;
    s[M.id] !== y && (u(M), s[M.id] = y);
  }
  function p(M) {
    const b = m();
    M.__bindingPointIndex = b;
    const E = i.createBuffer(), R = M.__size, y = M.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, R, y), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, b, E), E;
  }
  function m() {
    for (let M = 0; M < o; M++)
      if (a.indexOf(M) === -1)
        return a.push(M), M;
    return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(M) {
    const b = r[M.id], E = M.uniforms, R = M.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let y = 0, w = E.length; y < w; y++) {
      const x = Array.isArray(E[y]) ? E[y] : [E[y]];
      for (let A = 0, L = x.length; A < L; A++) {
        const C = x[A];
        if (f(C, y, A, R) === !0) {
          const U = C.__offset, W = Array.isArray(C.value) ? C.value : [C.value];
          let X = 0;
          for (let I = 0; I < W.length; I++) {
            const V = W[I], q = S(V);
            typeof V == "number" || typeof V == "boolean" ? (C.__data[0] = V, i.bufferSubData(i.UNIFORM_BUFFER, U + X, C.__data)) : V.isMatrix3 ? (C.__data[0] = V.elements[0], C.__data[1] = V.elements[1], C.__data[2] = V.elements[2], C.__data[3] = 0, C.__data[4] = V.elements[3], C.__data[5] = V.elements[4], C.__data[6] = V.elements[5], C.__data[7] = 0, C.__data[8] = V.elements[6], C.__data[9] = V.elements[7], C.__data[10] = V.elements[8], C.__data[11] = 0) : ArrayBuffer.isView(V) ? C.__data.set(new V.constructor(V.buffer, V.byteOffset, C.__data.length)) : (V.toArray(C.__data, X), X += q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, U, C.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function f(M, b, E, R) {
    const y = M.value, w = b + "_" + E;
    if (R[w] === void 0)
      return typeof y == "number" || typeof y == "boolean" ? R[w] = y : ArrayBuffer.isView(y) ? R[w] = y.slice() : R[w] = y.clone(), !0;
    {
      const x = R[w];
      if (typeof y == "number" || typeof y == "boolean") {
        if (x !== y)
          return R[w] = y, !0;
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
    const b = M.uniforms;
    let E = 0;
    const R = 16;
    for (let w = 0, x = b.length; w < x; w++) {
      const A = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let L = 0, C = A.length; L < C; L++) {
        const U = A[L], W = Array.isArray(U.value) ? U.value : [U.value];
        for (let X = 0, I = W.length; X < I; X++) {
          const V = W[X], q = S(V), J = E % R, ne = J % q.boundary, he = J + ne;
          E += ne, he !== 0 && R - he < q.storage && (E += R - he), U.__data = new Float32Array(q.storage / Float32Array.BYTES_PER_ELEMENT), U.__offset = E, E += q.storage;
        }
      }
    }
    const y = E % R;
    return y > 0 && (E += R - y), M.__size = E, M.__cache = {}, this;
  }
  function S(M) {
    const b = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof M == "number" || typeof M == "boolean" ? (b.boundary = 4, b.storage = 4) : M.isVector2 ? (b.boundary = 8, b.storage = 8) : M.isVector3 || M.isColor ? (b.boundary = 16, b.storage = 12) : M.isVector4 ? (b.boundary = 16, b.storage = 16) : M.isMatrix3 ? (b.boundary = 48, b.storage = 48) : M.isMatrix4 ? (b.boundary = 64, b.storage = 64) : M.isTexture ? Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(M) ? (b.boundary = 16, b.storage = M.byteLength) : Pe("WebGLRenderer: Unsupported uniform value type.", M), b;
  }
  function d(M) {
    const b = M.target;
    b.removeEventListener("dispose", d);
    const E = a.indexOf(b.__bindingPointIndex);
    a.splice(E, 1), i.deleteBuffer(r[b.id]), delete r[b.id], delete s[b.id];
  }
  function h() {
    for (const M in r)
      i.deleteBuffer(r[M]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: h
  };
}
const Fd = new Uint16Array([
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
let nn = null;
function Id() {
  return nn === null && (nn = new Va(Fd, 16, 16, 1030, 1016), nn.name = "DFG_LUT", nn.minFilter = 1006, nn.magFilter = 1006, nn.wrapS = 1001, nn.wrapT = 1001, nn.generateMipmaps = !1, nn.needsUpdate = !0), nn;
}
class lo {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = La(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: p = "default",
      failIfMajorPerformanceCaveat: m = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: f = 1009
    } = e;
    this.isWebGLRenderer = !0;
    let g;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      g = n.getContextAttributes().alpha;
    } else
      g = a;
    const S = f, d = /* @__PURE__ */ new Set([
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
    ]), M = new Uint32Array(4), b = new Int32Array(4), E = new O();
    let R = null, y = null;
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
    const L = this;
    let C = !1, U = null;
    this._outputColorSpace = It;
    let W = 0, X = 0, I = null, V = -1, q = null;
    const J = new mt(), ne = new mt();
    let he = null;
    const ye = new We(0);
    let Te = 0, Xe = t.width, Q = t.height, ae = 1, H = null, oe = null;
    const te = new mt(0, 0, Xe, Q), Re = new mt(0, 0, Xe, Q);
    let Le = !1;
    const Ce = new Tr();
    let lt = !1, Ve = !1;
    const Qe = new ft(), st = new O(), ke = new mt(), ct = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let ht = !1;
    function bt() {
      return I === null ? ae : 1;
    }
    let F = n;
    function _t(v, N) {
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
        powerPreference: p,
        failIfMajorPerformanceCaveat: m
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Mr}`), t.addEventListener("webglcontextlost", j, !1), t.addEventListener("webglcontextrestored", Me, !1), t.addEventListener("webglcontextcreationerror", Fe, !1), F === null) {
        const N = "webgl2";
        if (F = _t(N, v), F === null)
          throw _t(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw Ke("WebGLRenderer: " + v.message), v;
    }
    let Be, Je, ue, nt, T, _, G, K, ee, $, ce, D, Y, fe, ge, le, re, De, Oe, $e, P, se, Z;
    function pe() {
      Be = new Uu(F), Be.init(), P = new ao(F, Be), Je = new Ru(F, Be, e, P), ue = new Td(F, Be), Je.reversedDepthBuffer && u && ue.buffers.depth.setReversed(!0), nt = new Ou(F), T = new ud(), _ = new bd(F, Be, ue, T, Je, P, nt), G = new Iu(L), K = new ko(F), se = new bu(F, K), ee = new Nu(F, K, nt, se), $ = new zu(F, ee, K, se, nt), De = new Gu(F, Je, _), ge = new wu(T), ce = new cd(L, G, Be, Je, se, ge), D = new Dd(L, T), Y = new dd(), fe = new xd(Be), re = new Tu(L, G, ue, $, g, c), le = new Ed(L, $, Je), Z = new Ld(F, nt, Je, ue), Oe = new Au(F, Be, nt), $e = new Bu(F, Be, nt), nt.programs = ce.programs, L.capabilities = Je, L.extensions = Be, L.properties = T, L.renderLists = Y, L.shadowMap = le, L.state = ue, L.info = nt;
    }
    pe(), S !== 1009 && (A = new ku(S, t.width, t.height, r, s));
    const ie = new Cd(L, F);
    this.xr = ie, this.getContext = function() {
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
      return ae;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (ae = v, this.setSize(Xe, Q, !1));
    }, this.getSize = function(v) {
      return v.set(Xe, Q);
    }, this.setSize = function(v, N, B = !0) {
      if (ie.isPresenting) {
        Pe("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Xe = v, Q = N, t.width = Math.floor(v * ae), t.height = Math.floor(N * ae), B === !0 && (t.style.width = v + "px", t.style.height = N + "px"), A !== null && A.setSize(t.width, t.height), this.setViewport(0, 0, v, N);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(Xe * ae, Q * ae).floor();
    }, this.setDrawingBufferSize = function(v, N, B) {
      Xe = v, Q = N, ae = B, t.width = Math.floor(v * B), t.height = Math.floor(N * B), this.setViewport(0, 0, v, N);
    }, this.setEffects = function(v) {
      if (S === 1009) {
        Ke("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (v) {
        for (let N = 0; N < v.length; N++)
          if (v[N].isOutputPass === !0) {
            Pe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
            break;
          }
      }
      A.setEffects(v || []);
    }, this.getCurrentViewport = function(v) {
      return v.copy(J);
    }, this.getViewport = function(v) {
      return v.copy(te);
    }, this.setViewport = function(v, N, B, z) {
      v.isVector4 ? te.set(v.x, v.y, v.z, v.w) : te.set(v, N, B, z), ue.viewport(J.copy(te).multiplyScalar(ae).round());
    }, this.getScissor = function(v) {
      return v.copy(Re);
    }, this.setScissor = function(v, N, B, z) {
      v.isVector4 ? Re.set(v.x, v.y, v.z, v.w) : Re.set(v, N, B, z), ue.scissor(ne.copy(Re).multiplyScalar(ae).round());
    }, this.getScissorTest = function() {
      return Le;
    }, this.setScissorTest = function(v) {
      ue.setScissorTest(Le = v);
    }, this.setOpaqueSort = function(v) {
      H = v;
    }, this.setTransparentSort = function(v) {
      oe = v;
    }, this.getClearColor = function(v) {
      return v.copy(re.getClearColor());
    }, this.setClearColor = function() {
      re.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return re.getClearAlpha();
    }, this.setClearAlpha = function() {
      re.setClearAlpha(...arguments);
    }, this.clear = function(v = !0, N = !0, B = !0) {
      let z = 0;
      if (v) {
        let k = !1;
        if (I !== null) {
          const _e = I.texture.format;
          k = d.has(_e);
        }
        if (k) {
          const _e = I.texture.type, Se = h.has(_e), me = re.getClearColor(), Ee = re.getClearAlpha(), be = me.r, Ge = me.g, He = me.b;
          Se ? (M[0] = be, M[1] = Ge, M[2] = He, M[3] = Ee, F.clearBufferuiv(F.COLOR, 0, M)) : (b[0] = be, b[1] = Ge, b[2] = He, b[3] = Ee, F.clearBufferiv(F.COLOR, 0, b));
        } else
          z |= F.COLOR_BUFFER_BIT;
      }
      N && (z |= F.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), B && (z |= F.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), z !== 0 && F.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(v) {
      v.setRenderer(this), U = v;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", j, !1), t.removeEventListener("webglcontextrestored", Me, !1), t.removeEventListener("webglcontextcreationerror", Fe, !1), re.dispose(), Y.dispose(), fe.dispose(), T.dispose(), G.dispose(), $.dispose(), se.dispose(), Z.dispose(), ce.dispose(), ie.dispose(), ie.removeEventListener("sessionstart", Vn), ie.removeEventListener("sessionend", kn), Jt.stop();
    };
    function j(v) {
      v.preventDefault(), Di("WebGLRenderer: Context Lost."), C = !0;
    }
    function Me() {
      Di("WebGLRenderer: Context Restored."), C = !1;
      const v = nt.autoReset, N = le.enabled, B = le.autoUpdate, z = le.needsUpdate, k = le.type;
      pe(), nt.autoReset = v, le.enabled = N, le.autoUpdate = B, le.needsUpdate = z, le.type = k;
    }
    function Fe(v) {
      Ke("WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function pt(v) {
      const N = v.target;
      N.removeEventListener("dispose", pt), et(N);
    }
    function et(v) {
      Nt(v), T.remove(v);
    }
    function Nt(v) {
      const N = T.get(v).programs;
      N !== void 0 && (N.forEach(function(B) {
        ce.releaseProgram(B);
      }), v.isShaderMaterial && ce.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, N, B, z, k, _e) {
      N === null && (N = ct);
      const Se = k.isMesh && k.matrixWorld.determinant() < 0, me = Qt(v, N, B, z, k);
      ue.setMaterial(z, Se);
      let Ee = B.index, be = 1;
      if (z.wireframe === !0) {
        if (Ee = ee.getWireframeAttribute(B), Ee === void 0) return;
        be = 2;
      }
      const Ge = B.drawRange, He = B.attributes.position;
      let Ae = Ge.start * be, it = (Ge.start + Ge.count) * be;
      _e !== null && (Ae = Math.max(Ae, _e.start * be), it = Math.min(it, (_e.start + _e.count) * be)), Ee !== null ? (Ae = Math.max(Ae, 0), it = Math.min(it, Ee.count)) : He != null && (Ae = Math.max(Ae, 0), it = Math.min(it, He.count));
      const xt = it - Ae;
      if (xt < 0 || xt === 1 / 0) return;
      se.setup(k, z, me, B, Ee);
      let gt, at = Oe;
      if (Ee !== null && (gt = K.get(Ee), at = $e, at.setIndex(gt)), k.isMesh)
        z.wireframe === !0 ? (ue.setLineWidth(z.wireframeLinewidth * bt()), at.setMode(F.LINES)) : at.setMode(F.TRIANGLES);
      else if (k.isLine) {
        let Ct = z.linewidth;
        Ct === void 0 && (Ct = 1), ue.setLineWidth(Ct * bt()), k.isLineSegments ? at.setMode(F.LINES) : k.isLineLoop ? at.setMode(F.LINE_LOOP) : at.setMode(F.LINE_STRIP);
      } else k.isPoints ? at.setMode(F.POINTS) : k.isSprite && at.setMode(F.TRIANGLES);
      if (k.isBatchedMesh)
        if (Be.get("WEBGL_multi_draw"))
          at.renderMultiDraw(k._multiDrawStarts, k._multiDrawCounts, k._multiDrawCount);
        else {
          const Ct = k._multiDrawStarts, ve = k._multiDrawCounts, Ot = k._multiDrawCount, je = Ee ? K.get(Ee).bytesPerElement : 1, kt = T.get(z).currentProgram.getUniforms();
          for (let en = 0; en < Ot; en++)
            kt.setValue(F, "_gl_DrawID", en), at.render(Ct[en] / je, ve[en]);
        }
      else if (k.isInstancedMesh)
        at.renderInstances(Ae, xt, k.count);
      else if (B.isInstancedBufferGeometry) {
        const Ct = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, ve = Math.min(B.instanceCount, Ct);
        at.renderInstances(Ae, xt, ve);
      } else
        at.render(Ae, xt);
    };
    function Bt(v, N, B) {
      v.transparent === !0 && v.side === 2 && v.forceSinglePass === !1 ? (v.side = 1, v.needsUpdate = !0, Ie(v, N, B), v.side = 0, v.needsUpdate = !0, Ie(v, N, B), v.side = 2) : Ie(v, N, B);
    }
    this.compile = function(v, N, B = null) {
      B === null && (B = v), y = fe.get(B), y.init(N), x.push(y), B.traverseVisible(function(k) {
        k.isLight && k.layers.test(N.layers) && (y.pushLight(k), k.castShadow && y.pushShadow(k));
      }), v !== B && v.traverseVisible(function(k) {
        k.isLight && k.layers.test(N.layers) && (y.pushLight(k), k.castShadow && y.pushShadow(k));
      }), y.setupLights();
      const z = /* @__PURE__ */ new Set();
      return v.traverse(function(k) {
        if (!(k.isMesh || k.isPoints || k.isLine || k.isSprite))
          return;
        const _e = k.material;
        if (_e)
          if (Array.isArray(_e))
            for (let Se = 0; Se < _e.length; Se++) {
              const me = _e[Se];
              Bt(me, B, k), z.add(me);
            }
          else
            Bt(_e, B, k), z.add(_e);
      }), y = x.pop(), z;
    }, this.compileAsync = function(v, N, B = null) {
      const z = this.compile(v, N, B);
      return new Promise((k) => {
        function _e() {
          if (z.forEach(function(Se) {
            T.get(Se).currentProgram.isReady() && z.delete(Se);
          }), z.size === 0) {
            k(v);
            return;
          }
          setTimeout(_e, 10);
        }
        Be.get("KHR_parallel_shader_compile") !== null ? _e() : setTimeout(_e, 10);
      });
    };
    let sn = null;
    function Ii(v) {
      sn && sn(v);
    }
    function Vn() {
      Jt.stop();
    }
    function kn() {
      Jt.start();
    }
    const Jt = new eo();
    Jt.setAnimationLoop(Ii), typeof self < "u" && Jt.setContext(self), this.setAnimationLoop = function(v) {
      sn = v, ie.setAnimationLoop(v), v === null ? Jt.stop() : Jt.start();
    }, ie.addEventListener("sessionstart", Vn), ie.addEventListener("sessionend", kn), this.render = function(v, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === !0) return;
      U !== null && U.renderStart(v, N);
      const B = ie.enabled === !0 && ie.isPresenting === !0, z = A !== null && (I === null || B) && A.begin(L, I);
      if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), ie.enabled === !0 && ie.isPresenting === !0 && (A === null || A.isCompositing() === !1) && (ie.cameraAutoUpdate === !0 && ie.updateCamera(N), N = ie.getCamera()), v.isScene === !0 && v.onBeforeRender(L, v, N, I), y = fe.get(v, x.length), y.init(N), y.state.textureUnits = _.getTextureUnits(), x.push(y), Qe.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), Ce.setFromProjectionMatrix(Qe, 2e3, N.reversedDepth), Ve = this.localClippingEnabled, lt = ge.init(this.clippingPlanes, Ve), R = Y.get(v, w.length), R.init(), w.push(R), ie.enabled === !0 && ie.isPresenting === !0) {
        const Se = L.xr.getDepthSensingMesh();
        Se !== null && Cn(Se, N, -1 / 0, L.sortObjects);
      }
      Cn(v, N, 0, L.sortObjects), R.finish(), L.sortObjects === !0 && R.sort(H, oe), ht = ie.enabled === !1 || ie.isPresenting === !1 || ie.hasDepthSensing() === !1, ht && re.addToRenderList(R, v), this.info.render.frame++, lt === !0 && ge.beginShadows();
      const k = y.state.shadowsArray;
      if (le.render(k, v, N), lt === !0 && ge.endShadows(), this.info.autoReset === !0 && this.info.reset(), (z && A.hasRenderPass()) === !1) {
        const Se = R.opaque, me = R.transmissive;
        if (y.setupLights(), N.isArrayCamera) {
          const Ee = N.cameras;
          if (me.length > 0)
            for (let be = 0, Ge = Ee.length; be < Ge; be++) {
              const He = Ee[be];
              Pn(Se, me, v, He);
            }
          ht && re.render(v);
          for (let be = 0, Ge = Ee.length; be < Ge; be++) {
            const He = Ee[be];
            _i(R, v, He, He.viewport);
          }
        } else
          me.length > 0 && Pn(Se, me, v, N), ht && re.render(v), _i(R, v, N);
      }
      I !== null && X === 0 && (_.updateMultisampleRenderTarget(I), _.updateRenderTargetMipmap(I)), z && A.end(L), v.isScene === !0 && v.onAfterRender(L, v, N), se.resetDefaultState(), V = -1, q = null, x.pop(), x.length > 0 ? (y = x[x.length - 1], _.setTextureUnits(y.state.textureUnits), lt === !0 && ge.setGlobalState(L.clippingPlanes, y.state.camera)) : y = null, w.pop(), w.length > 0 ? R = w[w.length - 1] : R = null, U !== null && U.renderEnd();
    };
    function Cn(v, N, B, z) {
      if (v.visible === !1) return;
      if (v.layers.test(N.layers)) {
        if (v.isGroup)
          B = v.renderOrder;
        else if (v.isLOD)
          v.autoUpdate === !0 && v.update(N);
        else if (v.isLightProbeGrid)
          y.pushLightProbeGrid(v);
        else if (v.isLight)
          y.pushLight(v), v.castShadow && y.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || Ce.intersectsSprite(v)) {
            z && ke.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Qe);
            const Se = $.update(v), me = v.material;
            me.visible && R.push(v, Se, me, B, ke.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || Ce.intersectsObject(v))) {
          const Se = $.update(v), me = v.material;
          if (z && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), ke.copy(v.boundingSphere.center)) : (Se.boundingSphere === null && Se.computeBoundingSphere(), ke.copy(Se.boundingSphere.center)), ke.applyMatrix4(v.matrixWorld).applyMatrix4(Qe)), Array.isArray(me)) {
            const Ee = Se.groups;
            for (let be = 0, Ge = Ee.length; be < Ge; be++) {
              const He = Ee[be], Ae = me[He.materialIndex];
              Ae && Ae.visible && R.push(v, Se, Ae, B, ke.z, He);
            }
          } else me.visible && R.push(v, Se, me, B, ke.z, null);
        }
      }
      const _e = v.children;
      for (let Se = 0, me = _e.length; Se < me; Se++)
        Cn(_e[Se], N, B, z);
    }
    function _i(v, N, B, z) {
      const { opaque: k, transmissive: _e, transparent: Se } = v;
      y.setupLightsView(B), lt === !0 && ge.setGlobalState(L.clippingPlanes, B), z && ue.viewport(J.copy(z)), k.length > 0 && we(k, N, B), _e.length > 0 && we(_e, N, B), Se.length > 0 && we(Se, N, B), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
    }
    function Pn(v, N, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      if (y.state.transmissionRenderTarget[z.id] === void 0) {
        const Ae = Be.has("EXT_color_buffer_half_float") || Be.has("EXT_color_buffer_float");
        y.state.transmissionRenderTarget[z.id] = new $t(1, 1, {
          generateMipmaps: !0,
          type: Ae ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, Je.samples),
          // to avoid feedback loops, the transmission render target requires a resolve, see #26177
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Ye.workingColorSpace
        });
      }
      const _e = y.state.transmissionRenderTarget[z.id], Se = z.viewport || J;
      _e.setSize(Se.z * L.transmissionResolutionScale, Se.w * L.transmissionResolutionScale);
      const me = L.getRenderTarget(), Ee = L.getActiveCubeFace(), be = L.getActiveMipmapLevel();
      L.setRenderTarget(_e), L.getClearColor(ye), Te = L.getClearAlpha(), Te < 1 && L.setClearColor(16777215, 0.5), L.clear(), ht && re.render(B);
      const Ge = L.toneMapping;
      L.toneMapping = 0;
      const He = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), y.setupLightsView(z), lt === !0 && ge.setGlobalState(L.clippingPlanes, z), we(v, B, z), _.updateMultisampleRenderTarget(_e), _.updateRenderTargetMipmap(_e), Be.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ae = !1;
        for (let it = 0, xt = N.length; it < xt; it++) {
          const gt = N[it], { object: at, geometry: Ct, material: ve, group: Ot } = gt;
          if (ve.side === 2 && at.layers.test(z.layers)) {
            const je = ve.side;
            ve.side = 1, ve.needsUpdate = !0, xe(at, B, z, Ct, ve, Ot), ve.side = je, ve.needsUpdate = !0, Ae = !0;
          }
        }
        Ae === !0 && (_.updateMultisampleRenderTarget(_e), _.updateRenderTargetMipmap(_e));
      }
      L.setRenderTarget(me, Ee, be), L.setClearColor(ye, Te), He !== void 0 && (z.viewport = He), L.toneMapping = Ge;
    }
    function we(v, N, B) {
      const z = N.isScene === !0 ? N.overrideMaterial : null;
      for (let k = 0, _e = v.length; k < _e; k++) {
        const Se = v[k], { object: me, geometry: Ee, group: be } = Se;
        let Ge = Se.material;
        Ge.allowOverride === !0 && z !== null && (Ge = z), me.layers.test(B.layers) && xe(me, N, B, Ee, Ge, be);
      }
    }
    function xe(v, N, B, z, k, _e) {
      v.onBeforeRender(L, N, B, z, k, _e), v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), k.onBeforeRender(L, N, B, z, v, _e), k.transparent === !0 && k.side === 2 && k.forceSinglePass === !1 ? (k.side = 1, k.needsUpdate = !0, L.renderBufferDirect(B, N, z, k, v, _e), k.side = 0, k.needsUpdate = !0, L.renderBufferDirect(B, N, z, k, v, _e), k.side = 2) : L.renderBufferDirect(B, N, z, k, v, _e), v.onAfterRender(L, N, B, z, k, _e);
    }
    function Ie(v, N, B) {
      N.isScene !== !0 && (N = ct);
      const z = T.get(v), k = y.state.lights, _e = y.state.shadowsArray, Se = k.state.version, me = ce.getParameters(v, k.state, _e, N, B, y.state.lightProbeGridArray), Ee = ce.getProgramCacheKey(me);
      let be = z.programs;
      z.environment = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? N.environment : null, z.fog = N.fog;
      const Ge = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap;
      z.envMap = G.get(v.envMap || z.environment, Ge), z.envMapRotation = z.environment !== null && v.envMap === null ? N.environmentRotation : v.envMapRotation, be === void 0 && (v.addEventListener("dispose", pt), be = /* @__PURE__ */ new Map(), z.programs = be);
      let He = be.get(Ee);
      if (He !== void 0) {
        if (z.currentProgram === He && z.lightsStateVersion === Se)
          return wt(v, me), He;
      } else
        me.uniforms = ce.getUniforms(v), U !== null && v.isNodeMaterial && U.build(v, B, me), v.onBeforeCompile(me, L), He = ce.acquireProgram(me, Ee), be.set(Ee, He), z.uniforms = me.uniforms;
      const Ae = z.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Ae.clippingPlanes = ge.uniform), wt(v, me), z.needsLights = Dn(v), z.lightsStateVersion = Se, z.needsLights && (Ae.ambientLightColor.value = k.state.ambient, Ae.lightProbe.value = k.state.probe, Ae.directionalLights.value = k.state.directional, Ae.directionalLightShadows.value = k.state.directionalShadow, Ae.spotLights.value = k.state.spot, Ae.spotLightShadows.value = k.state.spotShadow, Ae.rectAreaLights.value = k.state.rectArea, Ae.ltc_1.value = k.state.rectAreaLTC1, Ae.ltc_2.value = k.state.rectAreaLTC2, Ae.pointLights.value = k.state.point, Ae.pointLightShadows.value = k.state.pointShadow, Ae.hemisphereLights.value = k.state.hemi, Ae.directionalShadowMatrix.value = k.state.directionalShadowMatrix, Ae.spotLightMatrix.value = k.state.spotLightMatrix, Ae.spotLightMap.value = k.state.spotLightMap, Ae.pointShadowMatrix.value = k.state.pointShadowMatrix), z.lightProbeGrid = y.state.lightProbeGridArray.length > 0, z.currentProgram = He, z.uniformsList = null, He;
    }
    function qe(v) {
      if (v.uniformsList === null) {
        const N = v.currentProgram.getUniforms();
        v.uniformsList = fr.seqWithValue(N.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function wt(v, N) {
      const B = T.get(v);
      B.outputColorSpace = N.outputColorSpace, B.batching = N.batching, B.batchingColor = N.batchingColor, B.instancing = N.instancing, B.instancingColor = N.instancingColor, B.instancingMorph = N.instancingMorph, B.skinning = N.skinning, B.morphTargets = N.morphTargets, B.morphNormals = N.morphNormals, B.morphColors = N.morphColors, B.morphTargetsCount = N.morphTargetsCount, B.numClippingPlanes = N.numClippingPlanes, B.numIntersection = N.numClipIntersection, B.vertexAlphas = N.vertexAlphas, B.vertexTangents = N.vertexTangents, B.toneMapping = N.toneMapping;
    }
    function Hn(v, N) {
      if (v.length === 0) return null;
      if (v.length === 1)
        return v[0].texture !== null ? v[0] : null;
      E.setFromMatrixPosition(N.matrixWorld);
      for (let B = 0, z = v.length; B < z; B++) {
        const k = v[B];
        if (k.texture !== null && k.boundingBox.containsPoint(E)) return k;
      }
      return null;
    }
    function Qt(v, N, B, z, k) {
      N.isScene !== !0 && (N = ct), _.resetTextureUnits();
      const _e = N.fog, Se = z.isMeshStandardMaterial || z.isMeshLambertMaterial || z.isMeshPhongMaterial ? N.environment : null, me = I === null ? L.outputColorSpace : I.isXRRenderTarget === !0 ? I.texture.colorSpace : Ye.workingColorSpace, Ee = z.isMeshStandardMaterial || z.isMeshLambertMaterial && !z.envMap || z.isMeshPhongMaterial && !z.envMap, be = G.get(z.envMap || Se, Ee), Ge = z.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, He = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Ae = !!B.morphAttributes.position, it = !!B.morphAttributes.normal, xt = !!B.morphAttributes.color;
      let gt = 0;
      z.toneMapped && (I === null || I.isXRRenderTarget === !0) && (gt = L.toneMapping);
      const at = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Ct = at !== void 0 ? at.length : 0, ve = T.get(z), Ot = y.state.lights;
      if (lt === !0 && (Ve === !0 || v !== q)) {
        const ut = v === q && z.id === V;
        ge.setState(z, v, ut);
      }
      let je = !1;
      z.version === ve.__version ? (ve.needsLights && ve.lightsStateVersion !== Ot.state.version || ve.outputColorSpace !== me || k.isBatchedMesh && ve.batching === !1 || !k.isBatchedMesh && ve.batching === !0 || k.isBatchedMesh && ve.batchingColor === !0 && k.colorTexture === null || k.isBatchedMesh && ve.batchingColor === !1 && k.colorTexture !== null || k.isInstancedMesh && ve.instancing === !1 || !k.isInstancedMesh && ve.instancing === !0 || k.isSkinnedMesh && ve.skinning === !1 || !k.isSkinnedMesh && ve.skinning === !0 || k.isInstancedMesh && ve.instancingColor === !0 && k.instanceColor === null || k.isInstancedMesh && ve.instancingColor === !1 && k.instanceColor !== null || k.isInstancedMesh && ve.instancingMorph === !0 && k.morphTexture === null || k.isInstancedMesh && ve.instancingMorph === !1 && k.morphTexture !== null || ve.envMap !== be || z.fog === !0 && ve.fog !== _e || ve.numClippingPlanes !== void 0 && (ve.numClippingPlanes !== ge.numPlanes || ve.numIntersection !== ge.numIntersection) || ve.vertexAlphas !== Ge || ve.vertexTangents !== He || ve.morphTargets !== Ae || ve.morphNormals !== it || ve.morphColors !== xt || ve.toneMapping !== gt || ve.morphTargetsCount !== Ct || !!ve.lightProbeGrid != y.state.lightProbeGridArray.length > 0) && (je = !0) : (je = !0, ve.__version = z.version);
      let kt = ve.currentProgram;
      je === !0 && (kt = Ie(z, N, k), U && z.isNodeMaterial && U.onUpdateProgram(z, kt, ve));
      let en = !1, _n = !1, Wn = !1;
      const ot = kt.getUniforms(), vt = ve.uniforms;
      if (ue.useProgram(kt.program) && (en = !0, _n = !0, Wn = !0), z.id !== V && (V = z.id, _n = !0), ve.needsLights) {
        const ut = Hn(y.state.lightProbeGridArray, k);
        ve.lightProbeGrid !== ut && (ve.lightProbeGrid = ut, _n = !0);
      }
      if (en || q !== v) {
        ue.buffers.depth.getReversed() && v.reversedDepth !== !0 && (v._reversedDepth = !0, v.updateProjectionMatrix()), ot.setValue(F, "projectionMatrix", v.projectionMatrix), ot.setValue(F, "viewMatrix", v.matrixWorldInverse);
        const xn = ot.map.cameraPosition;
        xn !== void 0 && xn.setValue(F, st.setFromMatrixPosition(v.matrixWorld)), Je.logarithmicDepthBuffer && ot.setValue(
          F,
          "logDepthBufFC",
          2 / (Math.log(v.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && ot.setValue(F, "isOrthographic", v.isOrthographicCamera === !0), q !== v && (q = v, _n = !0, Wn = !0);
      }
      if (ve.needsLights && (Ot.state.directionalShadowMap.length > 0 && ot.setValue(F, "directionalShadowMap", Ot.state.directionalShadowMap, _), Ot.state.spotShadowMap.length > 0 && ot.setValue(F, "spotShadowMap", Ot.state.spotShadowMap, _), Ot.state.pointShadowMap.length > 0 && ot.setValue(F, "pointShadowMap", Ot.state.pointShadowMap, _)), k.isSkinnedMesh) {
        ot.setOptional(F, k, "bindMatrix"), ot.setOptional(F, k, "bindMatrixInverse");
        const ut = k.skeleton;
        ut && (ut.boneTexture === null && ut.computeBoneTexture(), ot.setValue(F, "boneTexture", ut.boneTexture, _));
      }
      k.isBatchedMesh && (ot.setOptional(F, k, "batchingTexture"), ot.setValue(F, "batchingTexture", k._matricesTexture, _), ot.setOptional(F, k, "batchingIdTexture"), ot.setValue(F, "batchingIdTexture", k._indirectTexture, _), ot.setOptional(F, k, "batchingColorTexture"), k._colorsTexture !== null && ot.setValue(F, "batchingColorTexture", k._colorsTexture, _));
      const gn = B.morphAttributes;
      if ((gn.position !== void 0 || gn.normal !== void 0 || gn.color !== void 0) && De.update(k, B, kt), (_n || ve.receiveShadow !== k.receiveShadow) && (ve.receiveShadow = k.receiveShadow, ot.setValue(F, "receiveShadow", k.receiveShadow)), (z.isMeshStandardMaterial || z.isMeshLambertMaterial || z.isMeshPhongMaterial) && z.envMap === null && N.environment !== null && (vt.envMapIntensity.value = N.environmentIntensity), vt.dfgLUT !== void 0 && (vt.dfgLUT.value = Id()), _n) {
        if (ot.setValue(F, "toneMappingExposure", L.toneMappingExposure), ve.needsLights && gi(vt, Wn), _e && z.fog === !0 && D.refreshFogUniforms(vt, _e), D.refreshMaterialUniforms(vt, z, ae, Q, y.state.transmissionRenderTarget[v.id]), ve.needsLights && ve.lightProbeGrid) {
          const ut = ve.lightProbeGrid;
          vt.probesSH.value = ut.texture, vt.probesMin.value.copy(ut.boundingBox.min), vt.probesMax.value.copy(ut.boundingBox.max), vt.probesResolution.value.copy(ut.resolution);
        }
        fr.upload(F, qe(ve), vt, _);
      }
      if (z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (fr.upload(F, qe(ve), vt, _), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && ot.setValue(F, "center", k.center), ot.setValue(F, "modelViewMatrix", k.modelViewMatrix), ot.setValue(F, "normalMatrix", k.normalMatrix), ot.setValue(F, "modelMatrix", k.matrixWorld), z.uniformsGroups !== void 0) {
        const ut = z.uniformsGroups;
        for (let xn = 0, Xn = ut.length; xn < Xn; xn++) {
          const Fs = ut[xn];
          Z.update(Fs, kt), Z.bind(Fs, kt);
        }
      }
      return kt;
    }
    function gi(v, N) {
      v.ambientLightColor.needsUpdate = N, v.lightProbe.needsUpdate = N, v.directionalLights.needsUpdate = N, v.directionalLightShadows.needsUpdate = N, v.pointLights.needsUpdate = N, v.pointLightShadows.needsUpdate = N, v.spotLights.needsUpdate = N, v.spotLightShadows.needsUpdate = N, v.rectAreaLights.needsUpdate = N, v.hemisphereLights.needsUpdate = N;
    }
    function Dn(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return W;
    }, this.getActiveMipmapLevel = function() {
      return X;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(v, N, B) {
      const z = T.get(v);
      z.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1, z.__autoAllocateDepthBuffer === !1 && (z.__useRenderToTexture = !1), T.get(v.texture).__webglTexture = N, T.get(v.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : B, z.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(v, N) {
      const B = T.get(v);
      B.__webglFramebuffer = N, B.__useDefaultFramebuffer = N === void 0;
    };
    const mn = F.createFramebuffer();
    this.setRenderTarget = function(v, N = 0, B = 0) {
      I = v, W = N, X = B;
      let z = null, k = !1, _e = !1;
      if (v) {
        const me = T.get(v);
        if (me.__useDefaultFramebuffer !== void 0) {
          ue.bindFramebuffer(F.FRAMEBUFFER, me.__webglFramebuffer), J.copy(v.viewport), ne.copy(v.scissor), he = v.scissorTest, ue.viewport(J), ue.scissor(ne), ue.setScissorTest(he), V = -1;
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
        const be = T.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(be[N]) ? z = be[N][B] : z = be[N], k = !0) : v.samples > 0 && _.useMultisampledRTT(v) === !1 ? z = T.get(v).__webglMultisampledFramebuffer : Array.isArray(be) ? z = be[B] : z = be, J.copy(v.viewport), ne.copy(v.scissor), he = v.scissorTest;
      } else
        J.copy(te).multiplyScalar(ae).floor(), ne.copy(Re).multiplyScalar(ae).floor(), he = Le;
      if (B !== 0 && (z = mn), ue.bindFramebuffer(F.FRAMEBUFFER, z) && ue.drawBuffers(v, z), ue.viewport(J), ue.scissor(ne), ue.setScissorTest(he), k) {
        const me = T.get(v.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_CUBE_MAP_POSITIVE_X + N, me.__webglTexture, B);
      } else if (_e) {
        const me = N;
        for (let Ee = 0; Ee < v.textures.length; Ee++) {
          const be = T.get(v.textures[Ee]);
          F.framebufferTextureLayer(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0 + Ee, be.__webglTexture, B, me);
        }
      } else if (v !== null && B !== 0) {
        const me = T.get(v.texture);
        F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, me.__webglTexture, B);
      }
      V = -1;
    }, this.readRenderTargetPixels = function(v, N, B, z, k, _e, Se, me = 0) {
      if (!(v && v.isWebGLRenderTarget)) {
        Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ee = T.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && Se !== void 0 && (Ee = Ee[Se]), Ee) {
        ue.bindFramebuffer(F.FRAMEBUFFER, Ee);
        try {
          const be = v.textures[me], Ge = be.format, He = be.type;
          if (v.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + me), !Je.textureFormatReadable(Ge)) {
            Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Je.textureTypeReadable(He)) {
            Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= v.width - z && B >= 0 && B <= v.height - k && F.readPixels(N, B, z, k, P.convert(Ge), P.convert(He), _e);
        } finally {
          const be = I !== null ? T.get(I).__webglFramebuffer : null;
          ue.bindFramebuffer(F.FRAMEBUFFER, be);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, N, B, z, k, _e, Se, me = 0) {
      if (!(v && v.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Ee = T.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && Se !== void 0 && (Ee = Ee[Se]), Ee)
        if (N >= 0 && N <= v.width - z && B >= 0 && B <= v.height - k) {
          ue.bindFramebuffer(F.FRAMEBUFFER, Ee);
          const be = v.textures[me], Ge = be.format, He = be.type;
          if (v.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + me), !Je.textureFormatReadable(Ge))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Je.textureTypeReadable(He))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Ae = F.createBuffer();
          F.bindBuffer(F.PIXEL_PACK_BUFFER, Ae), F.bufferData(F.PIXEL_PACK_BUFFER, _e.byteLength, F.STREAM_READ), F.readPixels(N, B, z, k, P.convert(Ge), P.convert(He), 0);
          const it = I !== null ? T.get(I).__webglFramebuffer : null;
          ue.bindFramebuffer(F.FRAMEBUFFER, it);
          const xt = F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return F.flush(), await ho(F, xt, 4), F.bindBuffer(F.PIXEL_PACK_BUFFER, Ae), F.getBufferSubData(F.PIXEL_PACK_BUFFER, 0, _e), F.deleteBuffer(Ae), F.deleteSync(xt), _e;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(v, N = null, B = 0) {
      const z = Math.pow(2, -B), k = Math.floor(v.image.width * z), _e = Math.floor(v.image.height * z), Se = N !== null ? N.x : 0, me = N !== null ? N.y : 0;
      _.setTexture2D(v, 0), F.copyTexSubImage2D(F.TEXTURE_2D, B, 0, 0, Se, me, k, _e), ue.unbindTexture();
    };
    const Ln = F.createFramebuffer(), Ui = F.createFramebuffer();
    this.copyTextureToTexture = function(v, N, B = null, z = null, k = 0, _e = 0) {
      let Se, me, Ee, be, Ge, He, Ae, it, xt;
      const gt = v.isCompressedTexture ? v.mipmaps[_e] : v.image;
      if (B !== null)
        Se = B.max.x - B.min.x, me = B.max.y - B.min.y, Ee = B.isBox3 ? B.max.z - B.min.z : 1, be = B.min.x, Ge = B.min.y, He = B.isBox3 ? B.min.z : 0;
      else {
        const vt = Math.pow(2, -k);
        Se = Math.floor(gt.width * vt), me = Math.floor(gt.height * vt), v.isDataArrayTexture ? Ee = gt.depth : v.isData3DTexture ? Ee = Math.floor(gt.depth * vt) : Ee = 1, be = 0, Ge = 0, He = 0;
      }
      z !== null ? (Ae = z.x, it = z.y, xt = z.z) : (Ae = 0, it = 0, xt = 0);
      const at = P.convert(N.format), Ct = P.convert(N.type);
      let ve;
      N.isData3DTexture ? (_.setTexture3D(N, 0), ve = F.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (_.setTexture2DArray(N, 0), ve = F.TEXTURE_2D_ARRAY) : (_.setTexture2D(N, 0), ve = F.TEXTURE_2D), ue.activeTexture(F.TEXTURE0), ue.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, N.flipY), ue.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), ue.pixelStorei(F.UNPACK_ALIGNMENT, N.unpackAlignment);
      const Ot = ue.getParameter(F.UNPACK_ROW_LENGTH), je = ue.getParameter(F.UNPACK_IMAGE_HEIGHT), kt = ue.getParameter(F.UNPACK_SKIP_PIXELS), en = ue.getParameter(F.UNPACK_SKIP_ROWS), _n = ue.getParameter(F.UNPACK_SKIP_IMAGES);
      ue.pixelStorei(F.UNPACK_ROW_LENGTH, gt.width), ue.pixelStorei(F.UNPACK_IMAGE_HEIGHT, gt.height), ue.pixelStorei(F.UNPACK_SKIP_PIXELS, be), ue.pixelStorei(F.UNPACK_SKIP_ROWS, Ge), ue.pixelStorei(F.UNPACK_SKIP_IMAGES, He);
      const Wn = v.isDataArrayTexture || v.isData3DTexture, ot = N.isDataArrayTexture || N.isData3DTexture;
      if (v.isDepthTexture) {
        const vt = T.get(v), gn = T.get(N), ut = T.get(vt.__renderTarget), xn = T.get(gn.__renderTarget);
        ue.bindFramebuffer(F.READ_FRAMEBUFFER, ut.__webglFramebuffer), ue.bindFramebuffer(F.DRAW_FRAMEBUFFER, xn.__webglFramebuffer);
        for (let Xn = 0; Xn < Ee; Xn++)
          Wn && (F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, T.get(v).__webglTexture, k, He + Xn), F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, T.get(N).__webglTexture, _e, xt + Xn)), F.blitFramebuffer(be, Ge, Se, me, Ae, it, Se, me, F.DEPTH_BUFFER_BIT, F.NEAREST);
        ue.bindFramebuffer(F.READ_FRAMEBUFFER, null), ue.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else if (k !== 0 || v.isRenderTargetTexture || T.has(v)) {
        const vt = T.get(v), gn = T.get(N);
        ue.bindFramebuffer(F.READ_FRAMEBUFFER, Ln), ue.bindFramebuffer(F.DRAW_FRAMEBUFFER, Ui);
        for (let ut = 0; ut < Ee; ut++)
          Wn ? F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, vt.__webglTexture, k, He + ut) : F.framebufferTexture2D(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, vt.__webglTexture, k), ot ? F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, gn.__webglTexture, _e, xt + ut) : F.framebufferTexture2D(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, gn.__webglTexture, _e), k !== 0 ? F.blitFramebuffer(be, Ge, Se, me, Ae, it, Se, me, F.COLOR_BUFFER_BIT, F.NEAREST) : ot ? F.copyTexSubImage3D(ve, _e, Ae, it, xt + ut, be, Ge, Se, me) : F.copyTexSubImage2D(ve, _e, Ae, it, be, Ge, Se, me);
        ue.bindFramebuffer(F.READ_FRAMEBUFFER, null), ue.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else
        ot ? v.isDataTexture || v.isData3DTexture ? F.texSubImage3D(ve, _e, Ae, it, xt, Se, me, Ee, at, Ct, gt.data) : N.isCompressedArrayTexture ? F.compressedTexSubImage3D(ve, _e, Ae, it, xt, Se, me, Ee, at, gt.data) : F.texSubImage3D(ve, _e, Ae, it, xt, Se, me, Ee, at, Ct, gt) : v.isDataTexture ? F.texSubImage2D(F.TEXTURE_2D, _e, Ae, it, Se, me, at, Ct, gt.data) : v.isCompressedTexture ? F.compressedTexSubImage2D(F.TEXTURE_2D, _e, Ae, it, gt.width, gt.height, at, gt.data) : F.texSubImage2D(F.TEXTURE_2D, _e, Ae, it, Se, me, at, Ct, gt);
      ue.pixelStorei(F.UNPACK_ROW_LENGTH, Ot), ue.pixelStorei(F.UNPACK_IMAGE_HEIGHT, je), ue.pixelStorei(F.UNPACK_SKIP_PIXELS, kt), ue.pixelStorei(F.UNPACK_SKIP_ROWS, en), ue.pixelStorei(F.UNPACK_SKIP_IMAGES, _n), _e === 0 && N.generateMipmaps && F.generateMipmap(ve), ue.unbindTexture();
    }, this.initRenderTarget = function(v) {
      T.get(v).__webglFramebuffer === void 0 && _.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? _.setTextureCube(v, 0) : v.isData3DTexture ? _.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? _.setTexture2DArray(v, 0) : _.setTexture2D(v, 0), ue.unbindTexture();
    }, this.resetState = function() {
      W = 0, X = 0, I = null, ue.reset(), se.reset();
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
    t.drawingBufferColorSpace = Ye._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ye._getUnpackColorSpace();
  }
}
const Ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  ArrayCamera: Qa,
  BackSide: 1,
  BasicDepthPacking: 3200,
  Box3: di,
  BoxGeometry: fi,
  BufferAttribute: Wt,
  BufferGeometry: Rt,
  ByteType: 1010,
  Camera: As,
  CanvasTexture: us,
  CineonToneMapping: 3,
  CircleGeometry: br,
  ClampToEdgeWrapping: 1001,
  Color: We,
  ColorManagement: Ye,
  ConstantAlphaFactor: 213,
  ConstantColorFactor: 211,
  CubeCamera: Ja,
  CubeDepthTexture: Wa,
  CubeReflectionMapping: 301,
  CubeRefractionMapping: 302,
  CubeTexture: Ms,
  CubeUVReflectionMapping: 306,
  CullFaceBack: 1,
  CullFaceFront: 2,
  CullFaceNone: 0,
  CustomBlending: 5,
  CustomToneMapping: 5,
  CylinderGeometry: ys,
  Data3DTexture: Na,
  DataArrayTexture: ms,
  DataTexture: Va,
  DepthFormat: 1026,
  DepthStencilFormat: 1027,
  DepthTexture: Gn,
  DirectionalLight: ci,
  DoubleSide: 2,
  DstAlphaFactor: 206,
  DstColorFactor: 208,
  EdgesGeometry: Io,
  EqualCompare: 514,
  EqualDepth: 4,
  EquirectangularReflectionMapping: 303,
  EquirectangularRefractionMapping: 304,
  Euler: fn,
  EventDispatcher: wn,
  ExternalTexture: Ss,
  Float32BufferAttribute: dt,
  FloatType: 1015,
  Fog: yr,
  FrontSide: 0,
  Frustum: Tr,
  GLSL3: os,
  GreaterCompare: 516,
  GreaterDepth: 6,
  GreaterEqualCompare: 518,
  GreaterEqualDepth: 5,
  Group: On,
  HalfFloatType: 1016,
  HemisphereLight: ja,
  ImageUtils: Ia,
  IntType: 1013,
  InterleavedBuffer: Ga,
  InterleavedBufferAttribute: Li,
  KeepStencilOp: 7680,
  LatheGeometry: Es,
  Layers: _s,
  LessCompare: 513,
  LessDepth: 2,
  LessEqualCompare: 515,
  LessEqualDepth: 3,
  Light: bs,
  Line: Ha,
  LineBasicMaterial: ka,
  LineSegments: Fo,
  LinearFilter: 1006,
  LinearMipmapLinearFilter: 1008,
  LinearMipmapNearestFilter: 1007,
  LinearSRGBColorSpace: Ci,
  LinearToneMapping: 1,
  LinearTransfer: Pi,
  Material: pn,
  Matrix2: hs,
  Matrix3: Ne,
  Matrix4: ft,
  MaxEquation: 104,
  Mesh: Xt,
  MeshBasicMaterial: Er,
  MeshDepthMaterial: Ka,
  MeshDistanceMaterial: $a,
  MeshStandardMaterial: Oo,
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
  NoColorSpace: hn,
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
  OrthographicCamera: Ar,
  PCFShadowMap: 1,
  PCFSoftShadowMap: 2,
  PMREMGenerator: ds,
  PerspectiveCamera: Vt,
  Plane: bn,
  PlaneGeometry: pi,
  Quaternion: zn,
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
  RawShaderMaterial: Za,
  Ray: vs,
  RedFormat: 1028,
  RedIntegerFormat: 1029,
  ReinhardToneMapping: 2,
  RenderTarget: Ua,
  RepeatWrapping: 1e3,
  ReverseSubtractEquation: 102,
  SIGNED_R11_EAC_Format: 37489,
  SIGNED_RED_GREEN_RGTC2_Format: 36286,
  SIGNED_RED_RGTC1_Format: 36284,
  SIGNED_RG11_EAC_Format: 37491,
  SRGBColorSpace: It,
  SRGBTransfer: tt,
  Scene: Oa,
  ShaderChunk: ze,
  ShaderLib: Kt,
  ShaderMaterial: jt,
  ShadowMaterial: Xa,
  ShortType: 1011,
  Source: Sr,
  Sphere: Fi,
  Sprite: cs,
  SpriteMaterial: _r,
  SrcAlphaFactor: 204,
  SrcAlphaSaturateFactor: 210,
  SrcColorFactor: 202,
  StaticDrawUsage: 35044,
  SubtractEquation: 101,
  SubtractiveBlending: 3,
  TangentSpaceNormalMap: 0,
  Texture: At,
  TorusGeometry: Ts,
  Triangle: Ut,
  UVMapping: 300,
  Uint16BufferAttribute: gs,
  Uint32BufferAttribute: xs,
  UniformsLib: de,
  UniformsUtils: Ya,
  UnsignedByteType: 1009,
  UnsignedInt101111Type: 35899,
  UnsignedInt248Type: 1020,
  UnsignedInt5999Type: 35902,
  UnsignedIntType: 1014,
  UnsignedShort4444Type: 1017,
  UnsignedShort5551Type: 1018,
  UnsignedShortType: 1012,
  VSMShadowMap: 3,
  Vector2: Ue,
  Vector3: O,
  Vector4: mt,
  WebGLCoordinateSystem: 2e3,
  WebGLCubeRenderTarget: Rs,
  WebGLRenderTarget: $t,
  WebGLRenderer: lo,
  WebGLUtils: ao,
  WebGPUCoordinateSystem: 2001,
  WebXRController: dr,
  ZeroFactor: 200,
  createCanvasElement: La,
  error: Ke,
  log: Di,
  warn: Pe,
  warnOnce: mr
}, Symbol.toStringTag, { value: "Module" }));
function Ud(i, e, t, n) {
  const r = new Float32Array((t + 1) * (t + 1));
  let s = n;
  const a = () => (s = s * 1103515245 + 12345 & 2147483647) / 2147483647;
  for (let l = 0; l < r.length; l++) r[l] = a();
  const o = (l) => l * l * (3 - 2 * l), c = new Float32Array(i * e);
  for (let l = 0; l < e; l++) {
    const p = l / e * t, m = Math.floor(p), u = o(p - m);
    for (let f = 0; f < i; f++) {
      const g = f / i * t, S = Math.floor(g), d = o(g - S), h = m * (t + 1) + S, M = h + 1, b = h + t + 1, E = b + 1, R = r[h] + (r[M] - r[h]) * d, y = r[b] + (r[E] - r[b]) * d;
      c[l * i + f] = R + (y - R) * u;
    }
  }
  return c;
}
function Pa(i, { size: e, octaves: t, grain: n, contrast: r, repeat: s, streak: a = 0, seed: o = 7, aniso: c = 8 }) {
  const l = document.createElement("canvas");
  l.width = l.height = e;
  const p = l.getContext("2d"), m = p.createImageData(e, e), u = [];
  let f = 1, g = 4, S = 0;
  for (let h = 0; h < t; h++)
    u.push({ data: Ud(e, e, g, o + h * 131), amp: f }), S += f, f *= 0.5, g *= 2;
  for (let h = 0; h < e; h++)
    for (let M = 0; M < e; M++) {
      const b = h * e + M;
      let E = 0;
      for (const A of u) E += A.data[b] * A.amp;
      E /= S, a && (E = E * (1 - a) + a * (0.5 + 0.5 * Math.sin(h * 0.19 + E * 3.4)));
      const R = (Math.random() - 0.5) * n, y = 128 + (E - 0.5) * 255 * r + R * 255, w = b * 4, x = Math.max(0, Math.min(255, y));
      m.data[w] = m.data[w + 1] = m.data[w + 2] = x, m.data[w + 3] = 255;
    }
  p.putImageData(m, 0, 0);
  const d = new i.CanvasTexture(l);
  return d.wrapS = d.wrapT = i.RepeatWrapping, d.repeat.set(s[0], s[1]), d.anisotropy = c, d.minFilter = i.LinearMipmapLinearFilter, d.magFilter = i.LinearFilter, d.generateMipmaps = !0, d.needsUpdate = !0, d;
}
function Nd(i, e, t, n) {
  const r = (t ? "lo" : "hi") + "_" + n;
  if (e[r]) return e[r];
  const s = t ? 256 : 512, a = {
    tread: Pa(i, { size: s, octaves: t ? 3 : 4, grain: 0.14, contrast: 0.62, repeat: [10, 5], seed: 7, aniso: n }),
    sidewall: Pa(i, { size: s, octaves: t ? 2 : 3, grain: 0.07, contrast: 0.34, repeat: [16, 3], streak: 0.45, seed: 41, aniso: n })
  };
  return e[r] = a, a;
}
function co(i, e = {}) {
  const t = e.detail === !1, n = Nd(i, co, t, Math.min(e.anisotropy || 8, 16)), r = {
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
  const p = new i.Mesh(new i.CylinderGeometry(1.655, 1.655, 1.3, 96, 1, !0), r.groove);
  p.name = "crown_band", a.add(p);
  const m = [
    { y: -0.47, tilt: 0.46, r: 1.668, w: 0.225, h: 0.19, d: 0.295 },
    { y: -0.172, tilt: 0.08, r: 1.7, w: 0.235, h: 0.205, d: 0.3 },
    { y: 0.172, tilt: -0.08, r: 1.7, w: 0.235, h: 0.205, d: 0.3 },
    { y: 0.47, tilt: -0.46, r: 1.668, w: 0.225, h: 0.19, d: 0.295 }
  ], u = 40;
  m.forEach((R, y) => {
    const w = new i.BoxGeometry(R.w, R.d, R.h, 1, 1, 1);
    for (let x = 0; x < u; x++) {
      const A = x / u * Math.PI * 2 + (y % 2 ? Math.PI / u : 0), L = new i.Object3D();
      L.rotation.y = A;
      const C = new i.Mesh(w, r.tread);
      C.name = `tread_lug_${y}_${x}`, C.position.set(R.r, R.y, 0), C.rotation.x = R.tilt, C.rotation.z = (y < 2 ? 1 : -1) * 0.04, L.add(C), a.add(L);
    }
  });
  const f = new i.Mesh(new i.TorusGeometry(1.66, 0.035, 8, 96), r.groove);
  f.name = "center_groove", f.rotation.x = Math.PI / 2, a.add(f);
  for (const R of [-1, 1]) {
    [[1.46, 0.03, 0.66], [1.3, 0.026, 0.7], [1.13, 0.022, 0.716]].forEach(([w, x, A], L) => {
      const C = new i.Mesh(new i.TorusGeometry(w, x, 10, 96), r.sidewall);
      C.name = `sidewall_rib_${R > 0 ? "out" : "in"}_${L}`, C.rotation.x = Math.PI / 2, C.position.y = R * A, a.add(C);
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
  const d = new i.Mesh(new i.CylinderGeometry(0.7, 0.7, 0.3, 56), r.hub);
  d.name = "hub_plate", g.add(d);
  for (const R of [1, -1]) {
    const y = R > 0 ? "out" : "in", w = new i.Mesh(R > 0 ? new i.CylinderGeometry(0.855, 0.7, 0.42, 56, 1, !0) : new i.CylinderGeometry(0.7, 0.855, 0.42, 56, 1, !0), r.hub);
    w.name = `rim_dish_${y}`, w.position.y = R * 0.36, g.add(w);
    const x = new i.Mesh(new i.CylinderGeometry(0.665, 0.665, 0.1, 56), r.rim);
    x.name = `wheel_face_${y}`, x.position.y = R * 0.16, g.add(x);
    const A = 28;
    for (let W = 0; W < A; W++) {
      const X = W / A * Math.PI * 2, I = new i.Mesh(new i.CylinderGeometry(0.036, 0.036, 0.075, 8), r.hub);
      I.name = `wheel_nut_${y}_${W}`, I.position.set(Math.cos(X) * 0.49, R * 0.235, Math.sin(X) * 0.49), g.add(I);
    }
    const L = new i.Mesh(new i.TorusGeometry(0.49, 0.042, 8, 64), r.rim);
    L.name = `stud_ring_${y}`, L.rotation.x = Math.PI / 2, L.position.y = R * 0.215, g.add(L);
    const C = new i.Mesh(new i.CylinderGeometry(0.29, 0.27, 0.09, 40), r.rim);
    C.name = `hub_cap_${y}`, C.position.y = R * 0.245, g.add(C);
    const U = new i.Mesh(new i.CylinderGeometry(0.042, 0.042, 0.04, 20), r.hub);
    U.name = `hub_boss_${y}`, U.position.y = R * 0.3, g.add(U);
  }
  const h = new i.Mesh(new i.CylinderGeometry(0.032, 0.038, 0.22, 20), r.hub);
  h.name = "valve_stem", h.rotation.z = Math.PI / 2, h.position.set(0.4, 0.19, 0), g.add(h);
  const M = new i.Mesh(new i.BoxGeometry(0.16, 0.1, 0.22), r.accent);
  M.name = "sensor_module", M.position.set(0, -0.16, -0.6), g.add(M);
  const b = new i.Mesh(new i.BoxGeometry(0.24, 0.1, 0.1), r.hub);
  b.name = "sensor_bracket", b.position.set(0, -0.16, -0.53), g.add(b);
  const E = new i.Group();
  return E.name = "vizutire_otr_tire", s.rotation.x = Math.PI / 2, E.add(s), E.position.y = 1.78, { root: E, tire: s, outer: a, wheel: g, materials: r };
}
function Bd(i) {
  const e = new i.Group();
  e.name = "internal_structure";
  const t = 8, n = new i.Group();
  n.name = "belt_package";
  const r = new i.LineBasicMaterial({ color: 2054261, transparent: !0, opacity: 0, depthWrite: !1 });
  r.name = "belt_lines", [1.68, 1.62, 1.56].forEach((E, R) => {
    const y = new i.CylinderGeometry(E, E, 1.02 - R * 0.1, 44, 1, !0), w = new i.LineSegments(new i.EdgesGeometry(y, 1), r);
    w.name = `belt_ply_${R + 1}`, n.add(w);
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
  ], p = [];
  for (let E = 0; E < t; E++) {
    const R = new i.LineBasicMaterial({ color: 2846096, transparent: !0, opacity: 0, depthWrite: !1 });
    R.name = `radial_cord_sector_${E}`, p.push(R);
  }
  const m = 48, u = new i.Group();
  u.name = "radial_cords";
  for (let E = 0; E < m; E++) {
    const R = E / m * Math.PI * 2, y = l.map(([x, A]) => new i.Vector3(Math.cos(R) * x, A, Math.sin(R) * x)), w = new i.Line(new i.BufferGeometry().setFromPoints(y), p[Math.floor(E / m * t)]);
    w.name = `radial_cord_${E}`, u.add(w);
  }
  e.add(u);
  const f = new i.MeshStandardMaterial({ name: "bead_bundle", color: 13208110, roughness: 0.5, metalness: 0.3, transparent: !0, opacity: 0 });
  for (const E of [-1, 1]) {
    const R = new i.Mesh(new i.TorusGeometry(0.93, 0.045, 10, 60), f);
    R.name = `bead_bundle_${E > 0 ? "out" : "in"}`, R.rotation.x = Math.PI / 2, R.position.y = E * 0.47, e.add(R);
  }
  const g = new i.MeshBasicMaterial({ color: 11036698, transparent: !0, opacity: 0, depthWrite: !1 });
  g.name = "deformation_zone";
  const S = new i.Group();
  S.name = "deformation_zones";
  const d = [];
  [
    { r: 1.5, y: 0.4, arc: 0.9, at: -Math.PI / 2 },
    { r: 1.5, y: -0.4, arc: 0.9, at: -Math.PI / 2 },
    { r: 1.66, y: 0, arc: 0.6, at: -Math.PI / 2 }
  ].forEach((E, R) => {
    const y = new i.Mesh(new i.TorusGeometry(E.r, 0.035, 8, 40, E.arc), g);
    y.name = `deformation_zone_${R}`, y.rotation.x = Math.PI / 2, y.rotation.z = -E.at - E.arc / 2, y.position.y = E.y, d.push(y), S.add(y);
  });
  const M = (E, R, y) => Math.max(0, Math.min(1, (E - R) / (y - R)));
  function b(E, R, y) {
    if (e.visible = R > 5e-3, !e.visible) return;
    const w = M(R, 0, 0.45), x = M(R, 0.15, 0.6), A = M(R, 0.35, 0.85), L = M(R, 0.55, 1), C = M(R, 0.7, 1);
    r.opacity = 0.85 * w, a.opacity = 0.5 * x, f.opacity = 0.9 * L;
    for (let W = 0; W < t; W++) {
      const X = (E * 0.09 - W / t) % 1, I = Math.min(X < 0 ? X + 1 : X, 1 - (X < 0 ? X + 1 : X)), V = Math.exp(-Math.pow(I / 0.18, 2));
      p[W].opacity = A * (0.2 + 0.55 * V * (0.25 + 0.75 * y));
    }
    const U = 0.5 + 0.5 * Math.sin(E * 0.55);
    d.forEach((W, X) => {
      const I = 0.5 + 0.5 * Math.sin(E * 0.5 + X * 1.7);
      W.material, W.scale.setScalar(1 + 6e-3 * I * y);
    }), g.opacity = C * (0.25 + 0.45 * U * (0.3 + 0.7 * y)), n.scale.setScalar(1 + 35e-4 * Math.sin(E * 0.7) * y);
  }
  return { group: e, zoneGroup: S, update: b };
}
const Od = `<h1 class="halo">Why does <span class="brand-vizu">VIZU</span>tire exist?</h1>
      <p class="sub halo" id="sub">An OTR tire doesn't just wear out.</p>`, Gd = `<div id="gl"></div>
  <div id="veil"></div>
  <svg id="wires" aria-hidden="true"></svg>

  <div id="ui">
    <nav id="rail" aria-label="Explore the tire"></nav>

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
          <h3>What we can see</h3>
          <ul><li>Pressure</li><li>Temperature</li><li>Wear</li><li>Visible damage</li><li>Operating hours</li></ul>
        </div>
        <div class="col b">
          <h3>What's actually happening</h3>
          <ul><li>Structural response</li><li>Structural evolution</li><li>Effect of the operation</li></ul>
        </div>
      </div>
      <p class="close">VIZUtire was born from that gap.</p>
    </div>
  </div>`;
function Da(i) {
  const e = i;
  e.classList.add("vzt-explorer");
  const t = [];
  let n = !1;
  const r = innerWidth <= 900, s = (navigator.hardwareConcurrency || 4) <= 4 || (navigator.deviceMemory || 4) <= 4, a = innerWidth <= 1300, o = a ? "" : '<header id="head">' + Od + "</header>";
  e.innerHTML = '<div class="vzt-stage">' + o + Gd + "</div>";
  const c = matchMedia("(prefers-reduced-motion: reduce)").matches, l = (Q, ae = 0, H = 1) => Math.min(H, Math.max(ae, Q)), p = (Q, ae, H) => Q + (ae - Q) * H, m = (Q) => Q * Q * (3 - 2 * Q), u = (Q, ae, H) => m(l((Q - ae) / (H - ae || 1e-6))), f = [
    // Hasta 1300px (mobile Y tablet — ver unstickHead más abajo) el título vive
    // fuera de .vzt-stage y se pierde de vista apenas arranca el scroll, mucho
    // antes de que el usuario llegue a interactuar — a diferencia de escritorio,
    // donde ese título es parte de la escena fija y queda visible todo el
    // recorrido. Por eso acá, en ese mismo rango, se repite dentro del panel
    // (mismo criterio que el cierre más abajo): así el estado inicial sigue
    // mostrando "Why does VIZUtire exist?" aunque el título de flujo ya haya
    // scrolleado fuera de pantalla.
    {
      id: "inicio",
      cta: "Why does VIZUtire exist?",
      k: "",
      h: a ? "Why does VIZUtire exist?" : "",
      b: a ? "An OTR tire doesn't just wear out." : "",
      sub: "An OTR tire doesn't just wear out."
    },
    {
      id: "carga",
      cta: "Load",
      k: "",
      h: "Load",
      b: "With every operating cycle, the tire withstands loads that trigger a response in its structure."
    },
    {
      id: "deformacion",
      cta: "Deformation",
      k: "",
      h: "Deformation",
      b: "Each cycle alters the tire's response and contributes to its structural evolution."
    },
    {
      id: "impacto",
      cta: "Impact",
      k: "",
      h: "Impact",
      b: "Impacts are part of the conditions the tire is subjected to during operation."
    },
    {
      id: "condiciones",
      cta: "Operating conditions",
      k: "",
      h: "Operating conditions",
      b: "Operation is not a single variable: it's the combination of all of them acting at the same time.",
      list: ["Load", "Speed", "Terrain", "Temperature", "Cycles"]
    },
    {
      id: "visible",
      cta: "The measurable",
      k: "Measurable dimension",
      h: "The measurable",
      b: "Much of traditional tire management focuses on what we can evaluate directly.",
      marks: !0,
      // En mobile los indicadores flotantes sobre el neumático se reemplazan por esta
      // lista en flujo debajo del párrafo (igual tratamiento que "Operating conditions"
      // — ver #p-l/.list más abajo); en desktop/tablet sigue mandando "marks" (chips
      // ancladas + líneas conectoras sobre el modelo).
      list: r ? ["Pressure", "Temperature", "Wear", "Visible damage", "Operating hours", "Surface condition"] : void 0
    },
    {
      id: "estructural",
      cta: "The structural",
      k: "Less visible dimension",
      h: "",
      q: "How is the tire evolving structurally as a result of the operation?"
    },
    { id: "brecha", cta: "The gap", k: "", h: "", gap: !0 },
    {
      id: "cierre",
      cta: "Why VIZUtire exists",
      k: "",
      // Solo hasta 1300px (ver comentario en 'inicio'): en escritorio el título de
      // flujo nunca se pierde de vista, así que repetirlo acá sería duplicado (se
      // ve dos veces en pantalla a la vez, arriba a la izquierda y en el panel).
      h: a ? "Why does VIZUtire exist?" : "",
      b: "Because knowing a tire's visible condition doesn't necessarily mean knowing its structural condition.",
      q: "VIZUtire exists to make that dimension of the operation visible.",
      sub: ""
    }
  ], g = [
    { l: "Pressure", v: () => (6.9 + Math.sin(C / 1600) * 0.05).toFixed(2) + " bar", ang: 163, x: "left:47vw;top:23%", xm: "right:4vw;top:18%" },
    { l: "Temperature", v: () => (78 + Math.sin(C / 1300) * 3).toFixed(0) + " °C", ang: 184, x: "left:46vw;top:45%", xm: "right:4vw;top:29%" },
    { l: "Wear", v: () => "41 %", ang: 203, x: "left:48vw;bottom:26%", xm: "right:4vw;top:40%" },
    { l: "Visible damage", v: () => "Level 1", ang: 17, x: "right:2vw;top:23%", xm: "right:4vw;top:51%", r: !0 },
    { l: "Operating hours", v: () => "4,820 h", ang: -2, x: "right:1.5vw;top:45%", xm: "right:4vw;top:62%", r: !0 },
    { l: "Surface condition", v: () => "Fair", ang: -22, x: "right:2vw;bottom:26%", xm: "right:4vw;top:73%", r: !0 }
  ], S = e.querySelector("#rail"), d = e.querySelector("#marks");
  e.querySelector("#panel");
  const h = e.querySelector("#gap"), M = e.querySelector("#sub"), b = {
    k: e.querySelector("#p-k"),
    h: e.querySelector("#p-h"),
    b: e.querySelector("#p-b"),
    q: e.querySelector("#p-q"),
    l: e.querySelector("#p-l")
  }, E = e.querySelector("#ui");
  if (r) {
    const Q = document.createElement("div");
    Q.className = "concept-pager", Q.innerHTML = '<button type="button" class="concept-pager-btn" data-dir="-1" aria-label="Previous concept"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button><button type="button" class="concept-pager-btn" data-dir="1" aria-label="Next concept"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>', Q.querySelectorAll(".concept-pager-btn").forEach((ae) => {
      ae.addEventListener("click", () => {
        const H = l(U + Number(ae.dataset.dir), 0, f.length - 1);
        H !== U && q(H);
      });
    }), E.appendChild(Q);
  }
  const R = f.slice(1).map((Q, ae) => {
    const H = document.createElement("button");
    return H.className = "cta", H.type = "button", H.dataset.i = String(ae + 1), H.innerHTML = '<span class="bar"></span><span class="t"></span>', H.querySelector(".t").textContent = Q.cta, H.addEventListener("click", () => q(ae + 1)), S.appendChild(H), H;
  }), y = g.map((Q) => {
    const ae = document.createElement("div");
    return ae.className = "mark" + (Q.r ? " r" : ""), ae.setAttribute("style", r ? Q.xm : Q.x), ae.innerHTML = "<span></span><em></em>", d.appendChild(ae), ae;
  });
  let w, x = !0;
  try {
    w = new lo({ antialias: !s, alpha: !1, powerPreference: "high-performance" });
  } catch (Q) {
    x = !1, console.warn("WebGL no disponible; se muestra la narrativa sin el modelo 3D.", Q), e.classList.add("no-webgl"), f.forEach((ae, H) => {
      H && ye(ae);
    });
  }
  let A = 0, L = !1, C = performance.now(), U = 0, W = -1, X = 0, I = 99, V = -1;
  if (x) {
    let st = function() {
      const xe = document.createElement("canvas");
      xe.width = xe.height = 128;
      const Ie = xe.getContext("2d"), qe = Ie.createRadialGradient(128 / 2, 128 / 2, 0, 128 / 2, 128 / 2, 128 / 2);
      qe.addColorStop(0, "rgba(255,255,255,0.92)"), qe.addColorStop(0.42, "rgba(255,255,255,0.42)"), qe.addColorStop(1, "rgba(255,255,255,0)"), Ie.fillStyle = qe, Ie.fillRect(0, 0, 128, 128);
      const wt = new us(xe);
      return wt.minFilter = 1006, wt.magFilter = 1006, wt;
    }, _t = function(we, xe, Ie) {
      const qe = bt.find((wt) => wt.life <= 0);
      qe && (qe.life = 1e-4, qe.ttl = 0.85 + Math.random() * 0.7, qe.x = we + (Math.random() - 0.35) * 1.5, qe.z = xe * 0.35 + 0.72 + Math.random() * 0.62, qe.y = 0.04, qe.vx = 0.1 + Math.random() * 0.22, qe.vz = 0.12 + Math.random() * 0.26, qe.vy = (0.16 + Math.random() * 0.16) * (0.7 + Ie), qe.size = 0.22 + Math.random() * 0.26);
    }, ce = function() {
      const we = innerWidth / innerHeight, xe = 0.69 * 7.4 * we;
      $ = Math.max(0.3, Math.min(1, 0.78 * xe / 3.56));
      const Ie = Math.max(0.6, Math.min(1, innerHeight / 700));
      $ = Math.min($, Ie), r && ($ = Math.min($, 0.62)), T.scale.setScalar($);
    }, ge = function() {
      const we = f[U].id, xe = X;
      if (D.camZ = 7.4, D.camY = 2.05, D.az = r ? 0.62 : 0.76, D.rise = -0.3, D.transp = 1, D.inner = 0, D.motion = 0, D.load = 0, D.oval = 0, D.spin = c ? 8e-3 : 0.03, D.flex = 1, we === "inicio" && (D.camZ = r ? 6.6 : 6.9, D.rise = -0.34), we === "carga") {
        const Ie = u(xe, 0.05, 0.85) * (1 - u(xe, 2.5, 4.4) * 0.72);
        D.load = Ie, D.oval = Ie * 0.22, D.camZ = p(7, 6.5, u(xe, 0, 1.1)), D.rise = -0.26, D.motion = Ie * 0.45, D.flex = 0.45;
      }
      if (we === "deformacion") {
        const Ie = u(xe, 0.1, 1.2) * (1 - u(xe, 4.6, 6.4) * 0.55);
        D.oval = Ie * (0.72 + 0.28 * Math.sin(xe * 1.15)), D.load = Ie * 0.28, D.camZ = 6.8, D.rise = -0.28, D.motion = Ie * 0.7, D.spin = c ? 0.01 : 0.05, D.flex = 0.45;
      }
      if (we === "impacto") {
        if (xe > 0.35) {
          const Ie = Math.floor((xe - 0.35) / 3.2);
          Ie !== V && (V = Ie, I = 0);
        }
        D.camZ = 6.7, D.rise = -0.24, D.load = 0.18 * u(xe, 0.1, 1), D.motion = 0.5 * u(xe, 0.1, 1);
      }
      if (we === "condiciones") {
        const Ie = u(xe, 0.2, 1.4);
        D.load = Ie * (0.34 + 0.2 * Math.sin(xe * 0.85)), D.oval = Ie * (0.24 + 0.16 * Math.sin(xe * 0.55 + 1.3)), D.camZ = 7.5, D.rise = -0.3, D.motion = Ie * 0.62, D.spin = c ? 0.012 : 0.07, D.flex = 0.5;
      }
      we === "visible" && (D.camZ = 7.6, D.rise = -0.26, D.transp = 1, D.inner = 0, D.spin = c ? 8e-3 : 0.025), we === "estructural" && (D.camZ = p(7.2, r ? 6.2 : 5.9, u(xe, 0.2, 2.6)), D.rise = -0.24, D.transp = p(1, 0.13, u(xe, 0.3, 2.2)), D.inner = u(xe, 0.5, 3.2), D.motion = u(xe, 1.8, 3.6), D.spin = c ? 6e-3 : 0.018, D.flex = 0.4), we === "brecha" && (D.camZ = r ? 7 : 6.8, D.rise = -0.28, D.transp = 0.34, D.inner = 1, D.motion = 1 - u(xe, 1.6, 3.4), D.spin = c ? 4e-3 : 0.012, D.flex = 0), we === "cierre" && (D.camZ = p(6.9, 7.6, u(xe, 0.4, 3)), D.rise = -0.32, D.transp = p(0.34, 1, u(xe, 0.2, 2.4)), D.inner = (1 - u(xe, 0.3, 2.6)) * 0.8, D.spin = c ? 4e-3 : 0.014, D.flex = 0.45), D.spin = Math.min(c ? D.spin * 4 : D.spin * 12, 0.52);
    }, Oe = function() {
      const we = f[U].marks && innerWidth > 1180, xe = le.getBoundingClientRect();
      for (let Ie = 0; Ie < De.length; Ie++) {
        const qe = De[Ie], wt = y[Ie];
        if (!(we && wt.classList.contains("on"))) {
          qe.style.strokeOpacity = 0;
          continue;
        }
        const Qt = wt.getBoundingClientRect();
        if (!Qt.width) {
          qe.style.strokeOpacity = 0;
          continue;
        }
        const Dn = (!g[Ie].r ? Qt.right + 9 : Qt.left - 9) - xe.left, mn = Qt.top + Qt.height / 2 - xe.top, Ln = g[Ie].ang * Math.PI / 180;
        re.set(Math.cos(Ln) * 1.78 * $, (1.78 + Math.sin(Ln) * 1.78) * $, 0).project(oe), qe.setAttribute("x1", Dn.toFixed(1)), qe.setAttribute("y1", mn.toFixed(1)), qe.setAttribute("x2", ((re.x * 0.5 + 0.5) * innerWidth).toFixed(1)), qe.setAttribute("y2", ((-re.y * 0.5 + 0.5) * innerHeight).toFixed(1)), qe.style.strokeOpacity = 0.32;
      }
    }, et = function(we) {
      if (c) return 0;
      if (ie += we, Me === 0) {
        if (ie < j) return 0;
        ie = 0, Me = 0.55 + Math.random() * 0.7, Fe = Math.random() < 0.45 ? 0.55 + Math.random() * 0.55 : 0.1 + Math.random() * 0.15, j = 2 + Math.random() * 3.4, pe += Me * 0.3, _t(0.05, (Math.random() - 0.5) * 0.8, 0.9 + Me);
      }
      return ie > pt ? (Me = 0, ie = 0, 0) : Me * Math.exp(-ie * 2.3) * Math.sin(ie * 6.4);
    }, Bt = function(we) {
      if (!L) return;
      C = we;
      const xe = Math.min(0.05, (we - Nt) / 1e3);
      Nt = we, X += xe, ge();
      const Ie = 1 - Math.pow(15e-4, xe);
      for (const B of Object.keys(D)) Y[B] = p(Y[B], D[B], Ie);
      I += xe;
      const qe = I < 1.7 && !c ? Math.sin(I * 24) * Math.exp(-I * 3.2) : 0;
      fe += xe * Y.spin, ue.rotation.y = fe;
      const wt = Y.spin * $e * P;
      se += wt * xe;
      const Hn = et(xe) * Y.flex, Qt = Math.min(1, Math.abs(Hn));
      pe += -Z * 128 * xe, pe *= Math.pow(9e-4, xe), Z += pe * xe, Z = Math.max(-0.055, Math.min(0.085, Z)), ct.scale.setScalar((1.5 + Qt * 0.7) * $), ct.position.set(0.06 * $, 0.01, 1 * $), ct.material.opacity = (0.13 + Math.min(0.24, Math.abs(wt) * 0.42) + Qt * 0.2) * (1 - Y.inner * 0.75), F += xe * (0.5 + Math.abs(wt) * 1.6), F > 0.14 && (F = 0, _t(0.06, (Math.random() - 0.5) * 0.9, 0.5));
      for (const B of bt) {
        if (B.life <= 0) {
          B.sp.visible && (B.sp.visible = !1);
          continue;
        }
        B.life += xe;
        const z = B.life / B.ttl;
        if (z >= 1) {
          B.life = 0, B.sp.visible = !1;
          continue;
        }
        B.x += (B.vx + wt * 0.35) * xe, B.z += B.vz * xe, B.vz *= Math.pow(0.25, xe), B.y = Math.min(0.5, B.y + B.vy * xe), B.vy *= Math.pow(0.12, xe), B.sp.visible = !0, B.sp.position.set(B.x * $, B.y * $, B.z * $), B.sp.scale.setScalar((B.size + z * 0.42) * $), B.sp.material.opacity = Math.sin(Math.PI * z) * 0.34 * (1 - Y.inner * 0.8);
      }
      const gi = Y.oval * 0.028 + qe * 0.011 + Hn * Fe * 0.026;
      ue.scale.set(1 + gi, 1, 1 - gi);
      const Dn = Y.load * 0.017 + Math.abs(qe) * 7e-3 + Hn * 0.016;
      Je.scale.set(1 + Dn * 0.6, 1 - Dn, 1), Je.position.y = 1.78 * (1 - Dn) + Z, T.rotation.y = qe * 7e-3, T.position.x = qe * 0.02;
      const mn = Y.transp;
      K.forEach((B) => {
        B.transparent = mn < 0.99, B.opacity = mn, B.depthWrite = mn > 0.75;
      }), ee.forEach((B) => {
        const z = p(1, 0.4, 1 - mn);
        B.transparent = z < 0.99, B.opacity = z;
      }), _.update(we / 1e3, Y.inner, Y.motion);
      const Ln = (r ? 1.15 : 1.72) * $, Ui = -Math.cos(Y.az) * Ln, v = Math.sin(Y.az) * Ln, N = r ? 0.95 * $ : 0;
      oe.fov = r ? 42 : 38, oe.position.set(Math.sin(Y.az) * Y.camZ + Ui, Y.camY * $ + (1 - $) * 0.6, Math.cos(Y.az) * Y.camZ + v), oe.lookAt(Ui, (1.78 - Y.rise) * $ + N, v), oe.updateProjectionMatrix(), Be.material.opacity = 1 - Y.inner * 0.8, Oe(), w.render(H, oe), A = requestAnimationFrame(Bt);
    }, sn = function(we) {
      we !== L && (L = we, we ? (Nt = performance.now(), A = requestAnimationFrame(Bt)) : cancelAnimationFrame(A));
    };
    const Q = e.querySelector("#gl"), ae = s ? 1.25 : 2;
    w.setPixelRatio(Math.min(devicePixelRatio || 1, ae)), w.setSize(innerWidth, innerHeight, !0), w.shadowMap.enabled = !r && !s, w.shadowMap.type = 1, w.toneMapping = 4, w.toneMappingExposure = 1.12, w.outputColorSpace = It, Q.appendChild(w.domElement);
    const H = new Oa();
    H.background = new We(16777215), H.fog = new yr(16777215, 14, 30);
    const oe = new Vt(38, innerWidth / innerHeight, 0.5, 60);
    H.add(new ja(16777215, 12564908, 0.85));
    const te = new ci(16183784, 2.35);
    te.position.set(5.5, 7.8, 6.5), te.castShadow = !r && !s, te.shadow.mapSize.set(r || s ? 1024 : 2048, r || s ? 1024 : 2048), te.shadow.radius = r || s ? 1.6 : 2.2, te.shadow.camera.left = -3.2, te.shadow.camera.right = 3.2, te.shadow.camera.top = 4.2, te.shadow.camera.bottom = -0.4, te.shadow.camera.near = 2, te.shadow.camera.far = 20, te.shadow.bias = -6e-4, te.shadow.normalBias = 0.02, H.add(te);
    const Re = new ci(10337487, 0.8);
    Re.position.set(-7.5, 2.6, 3.5), H.add(Re);
    const Le = new ci(14674415, 1.5);
    Le.position.set(-2.8, 4.2, -7.5), H.add(Le);
    const Ce = new ci(15789800, 0.7);
    Ce.position.set(2.8, 1, 8), H.add(Ce);
    const lt = new ci(14210248, 0.5);
    lt.position.set(1, -4, 3), H.add(lt);
    const Ve = new Xt(new pi(60, 60), new Xa({ opacity: 0.11 }));
    Ve.rotation.x = -Math.PI / 2, Ve.receiveShadow = !0, H.add(Ve);
    const Qe = w.capabilities.getMaxAnisotropy(), ke = st(), ct = new cs(new _r({
      map: ke,
      color: 10655100,
      transparent: !0,
      opacity: 0.3,
      depthWrite: !1
    }));
    ct.name = "dust_bed", ct.center.set(0.5, 0.18), H.add(ct);
    const ht = r || s ? 8 : 14, bt = [];
    for (let we = 0; we < ht; we++) {
      const xe = new cs(new _r({
        map: ke,
        color: 11576459,
        transparent: !0,
        opacity: 0,
        depthWrite: !1
      }));
      xe.name = "dust_puff_" + we, xe.visible = !1, H.add(xe), bt.push({ sp: xe, life: 0, ttl: 1, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, size: 0.3 });
    }
    let F = 0;
    const Be = new Xt(new br(1.5, 48), (() => {
      const xe = document.createElement("canvas");
      xe.width = xe.height = 128;
      const Ie = xe.getContext("2d"), qe = Ie.createRadialGradient(128 / 2, 128 / 2, 0, 128 / 2, 128 / 2, 128 / 2);
      return qe.addColorStop(0, "rgba(24,22,18,0.62)"), qe.addColorStop(0.45, "rgba(30,27,22,0.30)"), qe.addColorStop(1, "rgba(30,27,22,0)"), Ie.fillStyle = qe, Ie.fillRect(0, 0, 128, 128), new Er({ map: new us(xe), transparent: !0, depthWrite: !1 });
    })());
    Be.name = "contact_ao", Be.rotation.x = -Math.PI / 2, Be.position.y = 6e-3, Be.scale.set(1, 0.42, 1), H.add(Be);
    const { root: Je, tire: ue, materials: nt } = co(Ca, { detail: !r && !s, anisotropy: Qe });
    Je.traverse((we) => {
      we.isMesh && (we.castShadow = !0, we.receiveShadow = !0);
    });
    const T = new On();
    T.add(Je), H.add(T);
    const _ = Bd(Ca);
    ue.add(_.group);
    const G = new On();
    if (G.rotation.x = Math.PI / 2, G.add(_.zoneGroup), Je.add(G), _.group.visible = !1, r || s) {
      const we = _.group.getObjectByName("radial_cords");
      we && we.children.forEach((xe, Ie) => {
        Ie % 2 && (xe.visible = !1);
      });
    }
    const K = [nt.tread, nt.sidewall, nt.groove], ee = [nt.rim, nt.hub, nt.accent];
    let $ = 1;
    ce();
    const D = { camZ: 7.4, camY: 2.05, az: 0.76, rise: -0.3, transp: 1, inner: 0, motion: 0, spin: 0, load: 0, oval: 0, flex: 1 }, Y = { ...D };
    let fe = 0;
    const le = e.querySelector("#wires"), re = new O(), De = y.map(() => {
      const we = document.createElementNS("http://www.w3.org/2000/svg", "line");
      return le.appendChild(we), we;
    }), $e = 1.78, P = 1;
    let se = 0, Z = 0, pe = 0, ie = 0, j = 1.6 + Math.random() * 2.4, Me = 0, Fe = 0;
    const pt = 2.2;
    let Nt = performance.now();
    window.__vztDebug = { tire: ue, scene: H, get travel() {
      return se;
    }, get flex() {
      return Me;
    } }, t.push(() => {
      w.dispose(), delete window.__vztDebug;
    }), sn(!0);
    const Ii = () => sn(!document.hidden);
    document.addEventListener("visibilitychange", Ii), t.push(() => {
      sn(!1), document.removeEventListener("visibilitychange", Ii);
    });
    let Vn = 0;
    const kn = () => {
      clearTimeout(Vn), Vn = setTimeout(() => {
        w.setPixelRatio(Math.min(devicePixelRatio || 1, ae)), w.setSize(innerWidth, innerHeight, !0), oe.aspect = innerWidth / innerHeight, oe.updateProjectionMatrix(), ce();
      }, 120);
    }, Jt = () => setTimeout(kn, 260);
    addEventListener("resize", kn), addEventListener("orientationchange", Jt), t.push(() => {
      clearTimeout(Vn), removeEventListener("resize", kn), removeEventListener("orientationchange", Jt);
    }), w.domElement.addEventListener("webglcontextlost", (we) => {
      we.preventDefault(), sn(!1);
    }), w.domElement.addEventListener("webglcontextrestored", () => sn(!0));
    let Cn = 0, _i = performance.now(), Pn = s ? 1 : 0;
    (function we() {
      if (n) return;
      if (!L) return void setTimeout(we, 400);
      Cn++;
      const xe = performance.now() - _i;
      if (xe > 2600) {
        const Ie = Cn / (xe / 1e3);
        Ie < 28 && Pn < 1 ? (Pn = 1, w.setPixelRatio(Math.min(devicePixelRatio || 1, 1.25)), w.shadowMap.enabled = !1) : Ie < 20 && Pn < 2 && (Pn = 2, w.setPixelRatio(1)), Cn = 0, _i = performance.now();
      }
      requestAnimationFrame(we);
    })();
  }
  function q(Q) {
    Q === U && W === U || (U = Q, W = Q, X = 0, I = 99, V = -1, ne(f[Q]));
  }
  let J = [];
  function ne(Q) {
    E.dataset.state = Q.id, R.forEach((ae) => ae.setAttribute("aria-current", String(+ae.dataset.i === U))), S.classList.toggle("has-active", U > 0), M && (M.textContent = Q.sub !== void 0 ? Q.sub : "", M.style.opacity = Q.sub ? "1" : "0"), he(b.k, Q.k), he(b.h, Q.h), he(b.b, Q.b), he(b.q, Q.q), J.forEach(clearTimeout), J = [], b.l.innerHTML = "", b.l.classList.toggle("on", !!Q.list), (Q.list || []).forEach((ae, H) => {
      const oe = document.createElement("i");
      oe.textContent = ae, b.l.appendChild(oe), J.push(setTimeout(() => oe.classList.add("on"), c ? 0 : 260 + H * 240));
    }), y.forEach((ae, H) => {
      ae.classList.remove("on"), Q.marks && J.push(setTimeout(() => ae.classList.add("on"), c ? 0 : 220 + H * 190));
    }), h.classList.toggle("on", !!Q.gap);
  }
  function he(Q, ae) {
    if (!ae) {
      Q.classList.remove("on"), Q.textContent = "";
      return;
    }
    Q.textContent = ae, Q.classList.remove("on"), requestAnimationFrame(() => Q.classList.add("on"));
  }
  function ye(Q) {
    const ae = document.createElement("section");
    ae.style.cssText = "max-width:66ch;margin:0 0 30px", ae.innerHTML = '<h2 style="font-size:1.3rem;margin:0 0 6px;text-transform:uppercase;letter-spacing:.04em">' + (Q.h || Q.cta) + "</h2>" + (Q.b ? '<p style="margin:0 0 6px;line-height:1.6;color:#2f383d">' + Q.b + "</p>" : "") + (Q.q ? '<p style="margin:0;font-size:1.1rem;font-weight:500">' + Q.q + "</p>" : "") + (Q.list ? '<p style="margin:6px 0 0;font-family:monospace;letter-spacing:.12em;text-transform:uppercase;font-size:12px;color:#31434c">' + Q.list.join(" · ") + "</p>" : ""), E.appendChild(ae);
  }
  const Te = setInterval(() => {
    f[U].marks && y.forEach((Q, ae) => {
      Q.querySelector("span").textContent = g[ae].l, Q.querySelector("em").textContent = g[ae].v();
    });
  }, 400);
  y.forEach((Q, ae) => {
    Q.querySelector("span").textContent = g[ae].l, Q.querySelector("em").textContent = g[ae].v();
  });
  const Xe = (Q) => {
    Q.key === "ArrowDown" || Q.key === "ArrowRight" ? U < f.length - 1 && (Q.preventDefault(), q(U + 1)) : (Q.key === "ArrowUp" || Q.key === "ArrowLeft") && U > 0 && (Q.preventDefault(), q(U - 1));
  };
  return addEventListener("keydown", Xe), ne(f[0]), t.push(() => {
    clearInterval(Te), removeEventListener("keydown", Xe);
  }), {
    mobile: r,
    unstickHead: a,
    destroy() {
      n = !0, J.forEach(clearTimeout), t.forEach((Q) => {
        try {
          Q();
        } catch {
        }
      }), e.innerHTML = "", e.classList.remove("vzt-explorer", "no-webgl");
    }
  };
}
function zd(i) {
  let e = Da(i), t = null;
  const n = () => {
    clearTimeout(t), t = setTimeout(() => {
      const r = innerWidth <= 900, s = innerWidth <= 1300;
      r === e.mobile && s === e.unstickHead || (e.destroy(), e = Da(i));
    }, 200);
  };
  return addEventListener("resize", n), {
    destroy() {
      clearTimeout(t), removeEventListener("resize", n), e.destroy();
    }
  };
}
export {
  zd as createTireExplorer
};
