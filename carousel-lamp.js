var Un = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2
}, Nn = {
  ROTATE: 0,
  PAN: 1,
  DOLLY_PAN: 2,
  DOLLY_ROTATE: 3
};
var cs = 1e3, Ai = 1001, la = 1002, Vt = 1003, xc = 1004, Sc = 1005, Jt = 1006, Ec = 1007, ya = 1008, Hi = 1009, bc = 1010, Tc = 1011, al = 1012, wc = 1013, ji = 1014, Mr = 1015, en = 1016, ol = 1017, ll = 1018, cl = 1020, Ac = 35902, Rc = 35899, Cc = 1021, Pc = 1022, fr = 1023, pr = 1026, hl = 1027, ul = 1028, dl = 1029, hs = 1030, fl = 1031, pl = 1033, Lc = 33776, Ic = 33777, Dc = 33778, Nc = 33779, Uc = 35840, Oc = 35841, Fc = 35842, Bc = 35843, zc = 36196, Vc = 37492, Gc = 37496, Hc = 37488, kc = 37489, Wc = 37490, Xc = 37491, Yc = 37808, qc = 37809, Zc = 37810, Kc = 37811, Jc = 37812, $c = 37813, Qc = 37814, jc = 37815, eh = 37816, th = 37817, ih = 37818, nh = 37819, rh = 37820, sh = 37821, ah = 36492, oh = 36494, lh = 36495, ch = 36283, hh = 36284, uh = 36285, dh = 36286, us = 2300, ca = 2301, Es = 2302, Na = 2303, Ua = 2400, Oa = 2401, Fa = 2402, fh = 3200;
var Kt = "srgb", ha = "srgb-linear", ds = "linear", fs = "srgb", bs = 7680;
var ml = 35044;
var zn = 2e3;
function ph(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function mh(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function mr(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function gh() {
  const e = mr("canvas");
  return e.style.display = "block", e;
}
var Ba = {}, Vn = null;
function ps(...e) {
  const t = "THREE." + e.shift();
  Vn ? Vn("log", t, ...e) : console.log(t, ...e);
}
function gl(e) {
  const t = e[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    const i = e[1];
    i && i.isStackTrace ? e[0] += " " + i.getLocation() : e[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return e;
}
function Ge(...e) {
  e = gl(e);
  const t = "THREE." + e.shift();
  if (Vn) Vn("warn", t, ...e);
  else {
    const i = e[0];
    i && i.isStackTrace ? console.warn(i.getError(t)) : console.warn(t, ...e);
  }
}
function ke(...e) {
  e = gl(e);
  const t = "THREE." + e.shift();
  if (Vn) Vn("error", t, ...e);
  else {
    const i = e[0];
    i && i.isStackTrace ? console.error(i.getError(t)) : console.error(t, ...e);
  }
}
function On(...e) {
  const t = e.join(" ");
  t in Ba || (Ba[t] = !0, Ge(...e));
}
function vh(e, t, i) {
  return new Promise(function(n, r) {
    function s() {
      switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e.WAIT_FAILED:
          r();
          break;
        case e.TIMEOUT_EXPIRED:
          setTimeout(s, i);
          break;
        default:
          n();
      }
    }
    setTimeout(s, i);
  });
}
var _h = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
}, ki = class {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    const i = this._listeners;
    return i === void 0 ? !1 : i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const i = this._listeners;
    if (i === void 0) return;
    const n = i[e];
    if (n !== void 0) {
      const r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      const n = i.slice(0);
      for (let r = 0, s = n.length; r < s; r++) n[r].call(this, e);
      e.target = null;
    }
  }
}, Ut = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff"
], za = 1234567, cr = Math.PI / 180, Gn = 180 / Math.PI;
function vi() {
  const e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ut[e & 255] + Ut[e >> 8 & 255] + Ut[e >> 16 & 255] + Ut[e >> 24 & 255] + "-" + Ut[t & 255] + Ut[t >> 8 & 255] + "-" + Ut[t >> 16 & 15 | 64] + Ut[t >> 24 & 255] + "-" + Ut[i & 63 | 128] + Ut[i >> 8 & 255] + "-" + Ut[i >> 16 & 255] + Ut[i >> 24 & 255] + Ut[n & 255] + Ut[n >> 8 & 255] + Ut[n >> 16 & 255] + Ut[n >> 24 & 255]).toLowerCase();
}
function je(e, t, i) {
  return Math.max(t, Math.min(i, e));
}
function xa(e, t) {
  return (e % t + t) % t;
}
function Mh(e, t, i, n, r) {
  return n + (e - t) * (r - n) / (i - t);
}
function yh(e, t, i) {
  return e !== t ? (i - e) / (t - e) : 0;
}
function hr(e, t, i) {
  return (1 - i) * e + i * t;
}
function xh(e, t, i, n) {
  return hr(e, t, 1 - Math.exp(-i * n));
}
function Sh(e, t = 1) {
  return t - Math.abs(xa(e, t * 2) - t);
}
function Eh(e, t, i) {
  return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t), e * e * (3 - 2 * e));
}
function bh(e, t, i) {
  return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function Th(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function wh(e, t) {
  return e + Math.random() * (t - e);
}
function Ah(e) {
  return e * (0.5 - Math.random());
}
function Rh(e) {
  e !== void 0 && (za = e);
  let t = za += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Ch(e) {
  return e * cr;
}
function Ph(e) {
  return e * Gn;
}
function Lh(e) {
  return (e & e - 1) === 0 && e !== 0;
}
function Ih(e) {
  return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
}
function Dh(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}
function Nh(e, t, i, n, r) {
  const s = Math.cos, a = Math.sin, o = s(i / 2), l = a(i / 2), c = s((t + n) / 2), h = a((t + n) / 2), d = s((t - n) / 2), u = a((t - n) / 2), f = s((n - t) / 2), _ = a((n - t) / 2);
  switch (r) {
    case "XYX":
      e.set(o * h, l * d, l * u, o * c);
      break;
    case "YZY":
      e.set(l * u, o * h, l * d, o * c);
      break;
    case "ZXZ":
      e.set(l * d, l * u, o * h, o * c);
      break;
    case "XZX":
      e.set(o * h, l * _, l * f, o * c);
      break;
    case "YXY":
      e.set(l * f, o * h, l * _, o * c);
      break;
    case "ZYZ":
      e.set(l * _, l * f, o * h, o * c);
      break;
    default:
      Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function hi(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 4294967295;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int32Array:
      return Math.max(e / 2147483647, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
function ut(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(e * 4294967295);
    case Uint16Array:
      return Math.round(e * 65535);
    case Uint8Array:
      return Math.round(e * 255);
    case Int32Array:
      return Math.round(e * 2147483647);
    case Int16Array:
      return Math.round(e * 32767);
    case Int8Array:
      return Math.round(e * 127);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
var Qi = {
  DEG2RAD: cr,
  RAD2DEG: Gn,
  generateUUID: vi,
  clamp: je,
  euclideanModulo: xa,
  mapLinear: Mh,
  inverseLerp: yh,
  lerp: hr,
  damp: xh,
  pingpong: Sh,
  smoothstep: Eh,
  smootherstep: bh,
  randInt: Th,
  randFloat: wh,
  randFloatSpread: Ah,
  seededRandom: Rh,
  degToRad: Ch,
  radToDeg: Ph,
  isPowerOfTwo: Lh,
  ceilPowerOfTwo: Ih,
  floorPowerOfTwo: Dh,
  setQuaternionFromProperEuler: Nh,
  normalize: ut,
  denormalize: hi
}, ee = class vl {
  static {
    vl.prototype.isVector2 = !0;
  }
  constructor(t = 0, i = 0) {
    this.x = t, this.y = i;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, i) {
    return this.x = t, this.y = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this;
  }
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const i = this.x, n = this.y, r = t.elements;
    return this.x = r[0] * i + r[3] * n + r[6], this.y = r[1] * i + r[4] * n + r[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, i) {
    return this.x = je(this.x, t.x, i.x), this.y = je(this.y, t.y, i.y), this;
  }
  clampScalar(t, i) {
    return this.x = je(this.x, t, i), this.y = je(this.y, t, i), this;
  }
  clampLength(t, i) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(je(n, t, i));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const i = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (i === 0) return Math.PI / 2;
    const n = this.dot(t) / i;
    return Math.acos(je(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const i = this.x - t.x, n = this.y - t.y;
    return i * i + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this;
  }
  lerpVectors(t, i, n) {
    return this.x = t.x + (i.x - t.x) * n, this.y = t.y + (i.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t;
  }
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this;
  }
  rotateAround(t, i) {
    const n = Math.cos(i), r = Math.sin(i), s = this.x - t.x, a = this.y - t.y;
    return this.x = s * n - a * r + t.x, this.y = s * r + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}, Ci = class {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = n;
  }
  static slerpFlat(e, t, i, n, r, s, a) {
    let o = i[n + 0], l = i[n + 1], c = i[n + 2], h = i[n + 3], d = r[s + 0], u = r[s + 1], f = r[s + 2], _ = r[s + 3];
    if (h !== _ || o !== d || l !== u || c !== f) {
      let M = o * d + l * u + c * f + h * _;
      M < 0 && (d = -d, u = -u, f = -f, _ = -_, M = -M);
      let m = 1 - a;
      if (M < 0.9995) {
        const p = Math.acos(M), T = Math.sin(p);
        m = Math.sin(m * p) / T, a = Math.sin(a * p) / T, o = o * m + d * a, l = l * m + u * a, c = c * m + f * a, h = h * m + _ * a;
      } else {
        o = o * m + d * a, l = l * m + u * a, c = c * m + f * a, h = h * m + _ * a;
        const p = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
        o *= p, l *= p, c *= p, h *= p;
      }
    }
    e[t] = o, e[t + 1] = l, e[t + 2] = c, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, i, n, r, s) {
    const a = i[n], o = i[n + 1], l = i[n + 2], c = i[n + 3], h = r[s], d = r[s + 1], u = r[s + 2], f = r[s + 3];
    return e[t] = a * f + c * h + o * u - l * d, e[t + 1] = o * f + c * d + l * h - a * u, e[t + 2] = l * f + c * u + a * d - o * h, e[t + 3] = c * f - a * h - o * d - l * u, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, i, n) {
    return this._x = e, this._y = t, this._z = i, this._w = n, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const i = e._x, n = e._y, r = e._z, s = e._order, a = Math.cos, o = Math.sin, l = a(i / 2), c = a(n / 2), h = a(r / 2), d = o(i / 2), u = o(n / 2), f = o(r / 2);
    switch (s) {
      case "XYZ":
        this._x = d * c * h + l * u * f, this._y = l * u * h - d * c * f, this._z = l * c * f + d * u * h, this._w = l * c * h - d * u * f;
        break;
      case "YXZ":
        this._x = d * c * h + l * u * f, this._y = l * u * h - d * c * f, this._z = l * c * f - d * u * h, this._w = l * c * h + d * u * f;
        break;
      case "ZXY":
        this._x = d * c * h - l * u * f, this._y = l * u * h + d * c * f, this._z = l * c * f + d * u * h, this._w = l * c * h - d * u * f;
        break;
      case "ZYX":
        this._x = d * c * h - l * u * f, this._y = l * u * h + d * c * f, this._z = l * c * f - d * u * h, this._w = l * c * h + d * u * f;
        break;
      case "YZX":
        this._x = d * c * h + l * u * f, this._y = l * u * h + d * c * f, this._z = l * c * f - d * u * h, this._w = l * c * h - d * u * f;
        break;
      case "XZY":
        this._x = d * c * h - l * u * f, this._y = l * u * h - d * c * f, this._z = l * c * f + d * u * h, this._w = l * c * h + d * u * f;
        break;
      default:
        Ge("Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, n = Math.sin(i);
    return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], n = t[4], r = t[8], s = t[1], a = t[5], o = t[9], l = t[2], c = t[6], h = t[10], d = i + a + h;
    if (d > 0) {
      const u = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / u, this._x = (c - o) * u, this._y = (r - l) * u, this._z = (s - n) * u;
    } else if (i > a && i > h) {
      const u = 2 * Math.sqrt(1 + i - a - h);
      this._w = (c - o) / u, this._x = 0.25 * u, this._y = (n + s) / u, this._z = (r + l) / u;
    } else if (a > h) {
      const u = 2 * Math.sqrt(1 + a - i - h);
      this._w = (r - l) / u, this._x = (n + s) / u, this._y = 0.25 * u, this._z = (o + c) / u;
    } else {
      const u = 2 * Math.sqrt(1 + h - i - a);
      this._w = (s - n) / u, this._x = (r + l) / u, this._y = (o + c) / u, this._z = 0.25 * u;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(je(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const n = Math.min(1, t / i);
    return this.slerp(e, n), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x, n = e._y, r = e._z, s = e._w, a = t._x, o = t._y, l = t._z, c = t._w;
    return this._x = i * c + s * a + n * l - r * o, this._y = n * c + s * o + r * a - i * l, this._z = r * c + s * l + i * o - n * a, this._w = s * c - i * a - n * o - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    let i = e._x, n = e._y, r = e._z, s = e._w, a = this.dot(e);
    a < 0 && (i = -i, n = -n, r = -r, s = -s, a = -a);
    let o = 1 - t;
    if (a < 0.9995) {
      const l = Math.acos(a), c = Math.sin(l);
      o = Math.sin(o * l) / c, t = Math.sin(t * l) / c, this._x = this._x * o + i * t, this._y = this._y * o + n * t, this._z = this._z * o + r * t, this._w = this._w * o + s * t, this._onChangeCallback();
    } else
      this._x = this._x * o + i * t, this._y = this._y * o + n * t, this._z = this._z * o + r * t, this._w = this._w * o + s * t, this.normalize();
    return this;
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), n = Math.sqrt(1 - i), r = Math.sqrt(i);
    return this.set(n * Math.sin(e), n * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
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
}, P = class _l {
  static {
    _l.prototype.isVector3 = !0;
  }
  constructor(t = 0, i = 0, n = 0) {
    this.x = t, this.y = i, this.z = n;
  }
  set(t, i, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = i, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      case 2:
        this.z = i;
        break;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this;
  }
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, i) {
    return this.x = t.x * i.x, this.y = t.y * i.y, this.z = t.z * i.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(Va.setFromEuler(t));
  }
  applyAxisAngle(t, i) {
    return this.applyQuaternion(Va.setFromAxisAngle(t, i));
  }
  applyMatrix3(t) {
    const i = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * i + s[3] * n + s[6] * r, this.y = s[1] * i + s[4] * n + s[7] * r, this.z = s[2] * i + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const i = this.x, n = this.y, r = this.z, s = t.elements, a = 1 / (s[3] * i + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * i + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * i + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * i + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(t) {
    const i = this.x, n = this.y, r = this.z, s = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * r - o * n), h = 2 * (o * i - s * r), d = 2 * (s * n - a * i);
    return this.x = i + l * c + a * d - o * h, this.y = n + l * h + o * c - s * d, this.z = r + l * d + s * h - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const i = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * i + s[4] * n + s[8] * r, this.y = s[1] * i + s[5] * n + s[9] * r, this.z = s[2] * i + s[6] * n + s[10] * r, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, i) {
    return this.x = je(this.x, t.x, i.x), this.y = je(this.y, t.y, i.y), this.z = je(this.z, t.z, i.z), this;
  }
  clampScalar(t, i) {
    return this.x = je(this.x, t, i), this.y = je(this.y, t, i), this.z = je(this.z, t, i), this;
  }
  clampLength(t, i) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(je(n, t, i));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this.z += (t.z - this.z) * i, this;
  }
  lerpVectors(t, i, n) {
    return this.x = t.x + (i.x - t.x) * n, this.y = t.y + (i.y - t.y) * n, this.z = t.z + (i.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, i) {
    const n = t.x, r = t.y, s = t.z, a = i.x, o = i.y, l = i.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  projectOnVector(t) {
    const i = t.lengthSq();
    if (i === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / i;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Ts.copy(this).projectOnVector(t), this.sub(Ts);
  }
  reflect(t) {
    return this.sub(Ts.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const i = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (i === 0) return Math.PI / 2;
    const n = this.dot(t) / i;
    return Math.acos(je(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const i = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
    return i * i + n * n + r * r;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, i, n) {
    const r = Math.sin(i) * t;
    return this.x = r * Math.sin(n), this.y = Math.cos(i) * t, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, i, n) {
    return this.x = t * Math.sin(i), this.y = n, this.z = t * Math.cos(i), this;
  }
  setFromMatrixPosition(t) {
    const i = t.elements;
    return this.x = i[12], this.y = i[13], this.z = i[14], this;
  }
  setFromMatrixScale(t) {
    const i = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length();
    return this.x = i, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(t, i) {
    return this.fromArray(t.elements, i * 4);
  }
  setFromMatrix3Column(t, i) {
    return this.fromArray(t.elements, i * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t;
  }
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this.z = t.getZ(i), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, i = Math.random() * 2 - 1, n = Math.sqrt(1 - i * i);
    return this.x = n * Math.cos(t), this.y = i, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}, Ts = /* @__PURE__ */ new P(), Va = /* @__PURE__ */ new Ci(), Qe = class Ml {
  static {
    Ml.prototype.isMatrix3 = !0;
  }
  constructor(t, i, n, r, s, a, o, l, c) {
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
    ], t !== void 0 && this.set(t, i, n, r, s, a, o, l, c);
  }
  set(t, i, n, r, s, a, o, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = r, h[2] = o, h[3] = i, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const i = this.elements, n = t.elements;
    return i[0] = n[0], i[1] = n[1], i[2] = n[2], i[3] = n[3], i[4] = n[4], i[5] = n[5], i[6] = n[6], i[7] = n[7], i[8] = n[8], this;
  }
  extractBasis(t, i, n) {
    return t.setFromMatrix3Column(this, 0), i.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const i = t.elements;
    return this.set(i[0], i[4], i[8], i[1], i[5], i[9], i[2], i[6], i[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, i) {
    const n = t.elements, r = i.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], d = n[7], u = n[2], f = n[5], _ = n[8], M = r[0], m = r[3], p = r[6], T = r[1], S = r[4], v = r[7], A = r[2], w = r[5], C = r[8];
    return s[0] = a * M + o * T + l * A, s[3] = a * m + o * S + l * w, s[6] = a * p + o * v + l * C, s[1] = c * M + h * T + d * A, s[4] = c * m + h * S + d * w, s[7] = c * p + h * v + d * C, s[2] = u * M + f * T + _ * A, s[5] = u * m + f * S + _ * w, s[8] = u * p + f * v + _ * C, this;
  }
  multiplyScalar(t) {
    const i = this.elements;
    return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= t, i[4] *= t, i[7] *= t, i[2] *= t, i[5] *= t, i[8] *= t, this;
  }
  determinant() {
    const t = this.elements, i = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8];
    return i * a * h - i * o * c - n * s * h + n * o * l + r * s * c - r * a * l;
  }
  invert() {
    const t = this.elements, i = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], d = h * a - o * c, u = o * l - h * s, f = c * s - a * l, _ = i * d + n * u + r * f;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / _;
    return t[0] = d * M, t[1] = (r * c - h * n) * M, t[2] = (o * n - r * a) * M, t[3] = u * M, t[4] = (h * i - r * l) * M, t[5] = (r * s - o * i) * M, t[6] = f * M, t[7] = (n * l - c * i) * M, t[8] = (a * i - n * s) * M, this;
  }
  transpose() {
    let t;
    const i = this.elements;
    return t = i[1], i[1] = i[3], i[3] = t, t = i[2], i[2] = i[6], i[6] = t, t = i[5], i[5] = i[7], i[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const i = this.elements;
    return t[0] = i[0], t[1] = i[3], t[2] = i[6], t[3] = i[1], t[4] = i[4], t[5] = i[7], t[6] = i[2], t[7] = i[5], t[8] = i[8], this;
  }
  setUvTransform(t, i, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + t, -r * c, r * l, -r * (-c * a + l * o) + o + i, 0, 0, 1), this;
  }
  scale(t, i) {
    return On("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(ws.makeScale(t, i)), this;
  }
  rotate(t) {
    return On("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(ws.makeRotation(-t)), this;
  }
  translate(t, i) {
    return On("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(ws.makeTranslation(t, i)), this;
  }
  makeTranslation(t, i) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, i, 0, 0, 1), this;
  }
  makeRotation(t) {
    const i = Math.cos(t), n = Math.sin(t);
    return this.set(i, -n, 0, n, i, 0, 0, 0, 1), this;
  }
  makeScale(t, i) {
    return this.set(t, 0, 0, 0, i, 0, 0, 0, 1), this;
  }
  equals(t) {
    const i = this.elements, n = t.elements;
    for (let r = 0; r < 9; r++) if (i[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(t, i = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + i];
    return this;
  }
  toArray(t = [], i = 0) {
    const n = this.elements;
    return t[i] = n[0], t[i + 1] = n[1], t[i + 2] = n[2], t[i + 3] = n[3], t[i + 4] = n[4], t[i + 5] = n[5], t[i + 6] = n[6], t[i + 7] = n[7], t[i + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}, ws = /* @__PURE__ */ new Qe(), Ga = /* @__PURE__ */ new Qe().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Ha = /* @__PURE__ */ new Qe().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Uh() {
  const e = {
    enabled: !0,
    workingColorSpace: ha,
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === "srgb" && (r.r = Ri(r.r), r.g = Ri(r.g), r.b = Ri(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === "srgb" && (r.r = Fn(r.r), r.g = Fn(r.g), r.b = Fn(r.b))), r;
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
      return r === "" ? ds : this.spaces[r].transfer;
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
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    fromWorkingColorSpace: function(r, s) {
      return On("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(r, s);
    },
    toWorkingColorSpace: function(r, s) {
      return On("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(r, s);
    }
  }, t = [
    0.64,
    0.33,
    0.3,
    0.6,
    0.15,
    0.06
  ], i = [
    0.2126,
    0.7152,
    0.0722
  ], n = [0.3127, 0.329];
  return e.define({
    [ha]: {
      primaries: t,
      whitePoint: n,
      transfer: ds,
      toXYZ: Ga,
      fromXYZ: Ha,
      luminanceCoefficients: i,
      workingColorSpaceConfig: { unpackColorSpace: Kt },
      outputColorSpaceConfig: { drawingBufferColorSpace: Kt }
    },
    [Kt]: {
      primaries: t,
      whitePoint: n,
      transfer: fs,
      toXYZ: Ga,
      fromXYZ: Ha,
      luminanceCoefficients: i,
      outputColorSpaceConfig: { drawingBufferColorSpace: Kt }
    }
  }), e;
}
var ot = /* @__PURE__ */ Uh();
function Ri(e) {
  return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function Fn(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
var hn, Oh = class {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let i;
    if (e instanceof HTMLCanvasElement) i = e;
    else {
      hn === void 0 && (hn = mr("canvas")), hn.width = e.width, hn.height = e.height;
      const n = hn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), i = hn;
    }
    return i.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = mr("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const n = i.getImageData(0, 0, e.width, e.height), r = n.data;
      for (let s = 0; s < r.length; s++) r[s] = Ri(r[s] / 255) * 255;
      return i.putImageData(n, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(Ri(t[i] / 255) * 255) : t[i] = Ri(t[i]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}, Fh = 0, Sa = class {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Fh++ }), this.uuid = vi(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = {
      uuid: this.uuid,
      url: ""
    }, n = this.data;
    if (n !== null) {
      let r;
      if (Array.isArray(n)) {
        r = [];
        for (let s = 0, a = n.length; s < a; s++) n[s].isDataTexture ? r.push(As(n[s].image)) : r.push(As(n[s]));
      } else r = As(n);
      i.url = r;
    }
    return t || (e.images[this.uuid] = i), i;
  }
};
function As(e) {
  return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? Oh.getDataURL(e) : e.data ? {
    data: Array.from(e.data),
    width: e.width,
    height: e.height,
    type: e.data.constructor.name
  } : (Ge("Texture: Unable to serialize Texture."), {});
}
var Bh = 0, Rs = /* @__PURE__ */ new P(), Qt = class as extends ki {
  constructor(t = as.DEFAULT_IMAGE, i = as.DEFAULT_MAPPING, n = Ai, r = Ai, s = Jt, a = ya, o = fr, l = Hi, c = as.DEFAULT_ANISOTROPY, h = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Bh++ }), this.uuid = vi(), this.name = "", this.source = new Sa(t), this.mipmaps = [], this.mapping = i, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new ee(0, 0), this.repeat = new ee(1, 1), this.center = new ee(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Qe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
  }
  get width() {
    return this.source.getSize(Rs).x;
  }
  get height() {
    return this.source.getSize(Rs).y;
  }
  get depth() {
    return this.source.getSize(Rs).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(t, i) {
    this.updateRanges.push({
      start: t,
      count: i
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.normalized = t.normalized, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  setValues(t) {
    for (const i in t) {
      const n = t[i];
      if (n === void 0) {
        Ge(`Texture.setValues(): parameter '${i}' has value of undefined.`);
        continue;
      }
      const r = this[i];
      if (r === void 0) {
        Ge(`Texture.setValues(): property '${i}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[i] = n;
    }
  }
  toJSON(t) {
    const i = t === void 0 || typeof t == "string";
    if (!i && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
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
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), i || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case cs:
        t.x = t.x - Math.floor(t.x);
        break;
      case Ai:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case la:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case cs:
        t.y = t.y - Math.floor(t.y);
        break;
      case Ai:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case la:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
};
Qt.DEFAULT_IMAGE = null;
Qt.DEFAULT_MAPPING = 300;
Qt.DEFAULT_ANISOTROPY = 1;
var Et = class yl {
  static {
    yl.prototype.isVector4 = !0;
  }
  constructor(t = 0, i = 0, n = 0, r = 1) {
    this.x = t, this.y = i, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, i, n, r) {
    return this.x = t, this.y = i, this.z = n, this.w = r, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, i) {
    switch (t) {
      case 0:
        this.x = i;
        break;
      case 1:
        this.y = i;
        break;
      case 2:
        this.z = i;
        break;
      case 3:
        this.w = i;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, i) {
    return this.x = t.x + i.x, this.y = t.y + i.y, this.z = t.z + i.z, this.w = t.w + i.w, this;
  }
  addScaledVector(t, i) {
    return this.x += t.x * i, this.y += t.y * i, this.z += t.z * i, this.w += t.w * i, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, i) {
    return this.x = t.x - i.x, this.y = t.y - i.y, this.z = t.z - i.z, this.w = t.w - i.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const i = this.x, n = this.y, r = this.z, s = this.w, a = t.elements;
    return this.x = a[0] * i + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * i + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * i + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * i + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const i = Math.sqrt(1 - t.w * t.w);
    return i < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / i, this.y = t.y / i, this.z = t.z / i), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let i, n, r, s;
    const l = t.elements, c = l[0], h = l[4], d = l[8], u = l[1], f = l[5], _ = l[9], M = l[2], m = l[6], p = l[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(d - M) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(d + M) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      i = Math.PI;
      const S = (c + 1) / 2, v = (f + 1) / 2, A = (p + 1) / 2, w = (h + u) / 4, C = (d + M) / 4, g = (_ + m) / 4;
      return S > v && S > A ? S < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(S), r = w / n, s = C / n) : v > A ? v < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(v), n = w / r, s = g / r) : A < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(A), n = C / s, r = g / s), this.set(n, r, s, i), this;
    }
    let T = Math.sqrt((m - _) * (m - _) + (d - M) * (d - M) + (u - h) * (u - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (m - _) / T, this.y = (d - M) / T, this.z = (u - h) / T, this.w = Math.acos((c + f + p - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const i = t.elements;
    return this.x = i[12], this.y = i[13], this.z = i[14], this.w = i[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, i) {
    return this.x = je(this.x, t.x, i.x), this.y = je(this.y, t.y, i.y), this.z = je(this.z, t.z, i.z), this.w = je(this.w, t.w, i.w), this;
  }
  clampScalar(t, i) {
    return this.x = je(this.x, t, i), this.y = je(this.y, t, i), this.z = je(this.z, t, i), this.w = je(this.w, t, i), this;
  }
  clampLength(t, i) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(je(n, t, i));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, i) {
    return this.x += (t.x - this.x) * i, this.y += (t.y - this.y) * i, this.z += (t.z - this.z) * i, this.w += (t.w - this.w) * i, this;
  }
  lerpVectors(t, i, n) {
    return this.x = t.x + (i.x - t.x) * n, this.y = t.y + (i.y - t.y) * n, this.z = t.z + (i.z - t.z) * n, this.w = t.w + (i.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, i = 0) {
    return this.x = t[i], this.y = t[i + 1], this.z = t[i + 2], this.w = t[i + 3], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this.x, t[i + 1] = this.y, t[i + 2] = this.z, t[i + 3] = this.w, t;
  }
  fromBufferAttribute(t, i) {
    return this.x = t.getX(i), this.y = t.getY(i), this.z = t.getZ(i), this.w = t.getW(i), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}, zh = class extends ki {
  constructor(e = 1, t = 1, i = {}) {
    super(), i = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Jt,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1,
      useArrayDepthTexture: !1
    }, i), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = i.depth, this.scissor = new Et(0, 0, e, t), this.scissorTest = !1, this.viewport = new Et(0, 0, e, t), this.textures = [];
    const n = new Qt({
      width: e,
      height: t,
      depth: i.depth
    }), r = i.count;
    for (let s = 0; s < r; s++)
      this.textures[s] = n.clone(), this.textures[s].isRenderTargetTexture = !0, this.textures[s].renderTarget = this;
    this._setTextureOptions(i), this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples, this.multiview = i.multiview, this.useArrayDepthTexture = i.useArrayDepthTexture;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: Jt,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let i = 0; i < this.textures.length; i++) this.textures[i].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let n = 0, r = this.textures.length; n < r; n++)
        this.textures[n].image.width = e, this.textures[n].image.height = t, this.textures[n].image.depth = i, this.textures[n].isData3DTexture !== !0 && (this.textures[n].isArrayTexture = this.textures[n].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, i = e.textures.length; t < i; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const n = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Sa(n);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, _i = class extends zh {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = !0;
  }
}, xl = class extends Qt {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = {
      data: e,
      width: t,
      height: i,
      depth: n
    }, this.magFilter = Vt, this.minFilter = Vt, this.wrapR = Ai, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}, Vh = class extends Qt {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null), this.isData3DTexture = !0, this.image = {
      data: e,
      width: t,
      height: i,
      depth: n
    }, this.magFilter = Vt, this.minFilter = Vt, this.wrapR = Ai, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}, dt = class ua {
  static {
    ua.prototype.isMatrix4 = !0;
  }
  constructor(t, i, n, r, s, a, o, l, c, h, d, u, f, _, M, m) {
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
    ], t !== void 0 && this.set(t, i, n, r, s, a, o, l, c, h, d, u, f, _, M, m);
  }
  set(t, i, n, r, s, a, o, l, c, h, d, u, f, _, M, m) {
    const p = this.elements;
    return p[0] = t, p[4] = i, p[8] = n, p[12] = r, p[1] = s, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = d, p[14] = u, p[3] = f, p[7] = _, p[11] = M, p[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ua().fromArray(this.elements);
  }
  copy(t) {
    const i = this.elements, n = t.elements;
    return i[0] = n[0], i[1] = n[1], i[2] = n[2], i[3] = n[3], i[4] = n[4], i[5] = n[5], i[6] = n[6], i[7] = n[7], i[8] = n[8], i[9] = n[9], i[10] = n[10], i[11] = n[11], i[12] = n[12], i[13] = n[13], i[14] = n[14], i[15] = n[15], this;
  }
  copyPosition(t) {
    const i = this.elements, n = t.elements;
    return i[12] = n[12], i[13] = n[13], i[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const i = t.elements;
    return this.set(i[0], i[3], i[6], 0, i[1], i[4], i[7], 0, i[2], i[5], i[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, i, n) {
    return this.determinantAffine() === 0 ? (t.set(1, 0, 0), i.set(0, 1, 0), n.set(0, 0, 1), this) : (t.setFromMatrixColumn(this, 0), i.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(t, i, n) {
    return this.set(t.x, i.x, n.x, 0, t.y, i.y, n.y, 0, t.z, i.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    if (t.determinantAffine() === 0) return this.identity();
    const i = this.elements, n = t.elements, r = 1 / un.setFromMatrixColumn(t, 0).length(), s = 1 / un.setFromMatrixColumn(t, 1).length(), a = 1 / un.setFromMatrixColumn(t, 2).length();
    return i[0] = n[0] * r, i[1] = n[1] * r, i[2] = n[2] * r, i[3] = 0, i[4] = n[4] * s, i[5] = n[5] * s, i[6] = n[6] * s, i[7] = 0, i[8] = n[8] * a, i[9] = n[9] * a, i[10] = n[10] * a, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const i = this.elements, n = t.x, r = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), d = Math.sin(s);
    if (t.order === "XYZ") {
      const u = a * h, f = a * d, _ = o * h, M = o * d;
      i[0] = l * h, i[4] = -l * d, i[8] = c, i[1] = f + _ * c, i[5] = u - M * c, i[9] = -o * l, i[2] = M - u * c, i[6] = _ + f * c, i[10] = a * l;
    } else if (t.order === "YXZ") {
      const u = l * h, f = l * d, _ = c * h, M = c * d;
      i[0] = u + M * o, i[4] = _ * o - f, i[8] = a * c, i[1] = a * d, i[5] = a * h, i[9] = -o, i[2] = f * o - _, i[6] = M + u * o, i[10] = a * l;
    } else if (t.order === "ZXY") {
      const u = l * h, f = l * d, _ = c * h, M = c * d;
      i[0] = u - M * o, i[4] = -a * d, i[8] = _ + f * o, i[1] = f + _ * o, i[5] = a * h, i[9] = M - u * o, i[2] = -a * c, i[6] = o, i[10] = a * l;
    } else if (t.order === "ZYX") {
      const u = a * h, f = a * d, _ = o * h, M = o * d;
      i[0] = l * h, i[4] = _ * c - f, i[8] = u * c + M, i[1] = l * d, i[5] = M * c + u, i[9] = f * c - _, i[2] = -c, i[6] = o * l, i[10] = a * l;
    } else if (t.order === "YZX") {
      const u = a * l, f = a * c, _ = o * l, M = o * c;
      i[0] = l * h, i[4] = M - u * d, i[8] = _ * d + f, i[1] = d, i[5] = a * h, i[9] = -o * h, i[2] = -c * h, i[6] = f * d + _, i[10] = u - M * d;
    } else if (t.order === "XZY") {
      const u = a * l, f = a * c, _ = o * l, M = o * c;
      i[0] = l * h, i[4] = -d, i[8] = c * h, i[1] = u * d + M, i[5] = a * h, i[9] = f * d - _, i[2] = _ * d - f, i[6] = o * h, i[10] = M * d + u;
    }
    return i[3] = 0, i[7] = 0, i[11] = 0, i[12] = 0, i[13] = 0, i[14] = 0, i[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Gh, t, Hh);
  }
  lookAt(t, i, n) {
    const r = this.elements;
    return qt.subVectors(t, i), qt.lengthSq() === 0 && (qt.z = 1), qt.normalize(), Ni.crossVectors(n, qt), Ni.lengthSq() === 0 && (Math.abs(n.z) === 1 ? qt.x += 1e-4 : qt.z += 1e-4, qt.normalize(), Ni.crossVectors(n, qt)), Ni.normalize(), wr.crossVectors(qt, Ni), r[0] = Ni.x, r[4] = wr.x, r[8] = qt.x, r[1] = Ni.y, r[5] = wr.y, r[9] = qt.y, r[2] = Ni.z, r[6] = wr.z, r[10] = qt.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, i) {
    const n = t.elements, r = i.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], d = n[5], u = n[9], f = n[13], _ = n[2], M = n[6], m = n[10], p = n[14], T = n[3], S = n[7], v = n[11], A = n[15], w = r[0], C = r[4], g = r[8], E = r[12], F = r[1], R = r[5], V = r[9], Z = r[13], G = r[2], X = r[6], H = r[10], B = r[14], ae = r[3], ie = r[7], oe = r[11], de = r[15];
    return s[0] = a * w + o * F + l * G + c * ae, s[4] = a * C + o * R + l * X + c * ie, s[8] = a * g + o * V + l * H + c * oe, s[12] = a * E + o * Z + l * B + c * de, s[1] = h * w + d * F + u * G + f * ae, s[5] = h * C + d * R + u * X + f * ie, s[9] = h * g + d * V + u * H + f * oe, s[13] = h * E + d * Z + u * B + f * de, s[2] = _ * w + M * F + m * G + p * ae, s[6] = _ * C + M * R + m * X + p * ie, s[10] = _ * g + M * V + m * H + p * oe, s[14] = _ * E + M * Z + m * B + p * de, s[3] = T * w + S * F + v * G + A * ae, s[7] = T * C + S * R + v * X + A * ie, s[11] = T * g + S * V + v * H + A * oe, s[15] = T * E + S * Z + v * B + A * de, this;
  }
  multiplyScalar(t) {
    const i = this.elements;
    return i[0] *= t, i[4] *= t, i[8] *= t, i[12] *= t, i[1] *= t, i[5] *= t, i[9] *= t, i[13] *= t, i[2] *= t, i[6] *= t, i[10] *= t, i[14] *= t, i[3] *= t, i[7] *= t, i[11] *= t, i[15] *= t, this;
  }
  determinant() {
    const t = this.elements, i = t[0], n = t[4], r = t[8], s = t[12], a = t[1], o = t[5], l = t[9], c = t[13], h = t[2], d = t[6], u = t[10], f = t[14], _ = t[3], M = t[7], m = t[11], p = t[15], T = l * f - c * u, S = o * f - c * d, v = o * u - l * d, A = a * f - c * h, w = a * u - l * h, C = a * d - o * h;
    return i * (M * T - m * S + p * v) - n * (_ * T - m * A + p * w) + r * (_ * S - M * A + p * C) - s * (_ * v - M * w + m * C);
  }
  determinantAffine() {
    const t = this.elements, i = t[0], n = t[4], r = t[8], s = t[1], a = t[5], o = t[9], l = t[2], c = t[6], h = t[10];
    return i * (a * h - o * c) - n * (s * h - o * l) + r * (s * c - a * l);
  }
  transpose() {
    const t = this.elements;
    let i;
    return i = t[1], t[1] = t[4], t[4] = i, i = t[2], t[2] = t[8], t[8] = i, i = t[6], t[6] = t[9], t[9] = i, i = t[3], t[3] = t[12], t[12] = i, i = t[7], t[7] = t[13], t[13] = i, i = t[11], t[11] = t[14], t[14] = i, this;
  }
  setPosition(t, i, n) {
    const r = this.elements;
    return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = i, r[14] = n), this;
  }
  invert() {
    const t = this.elements, i = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], d = t[9], u = t[10], f = t[11], _ = t[12], M = t[13], m = t[14], p = t[15], T = i * o - n * a, S = i * l - r * a, v = i * c - s * a, A = n * l - r * o, w = n * c - s * o, C = r * c - s * l, g = h * M - d * _, E = h * m - u * _, F = h * p - f * _, R = d * m - u * M, V = d * p - f * M, Z = u * p - f * m, G = T * Z - S * V + v * R + A * F - w * E + C * g;
    if (G === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const X = 1 / G;
    return t[0] = (o * Z - l * V + c * R) * X, t[1] = (r * V - n * Z - s * R) * X, t[2] = (M * C - m * w + p * A) * X, t[3] = (u * w - d * C - f * A) * X, t[4] = (l * F - a * Z - c * E) * X, t[5] = (i * Z - r * F + s * E) * X, t[6] = (m * v - _ * C - p * S) * X, t[7] = (h * C - u * v + f * S) * X, t[8] = (a * V - o * F + c * g) * X, t[9] = (n * F - i * V - s * g) * X, t[10] = (_ * w - M * v + p * T) * X, t[11] = (d * v - h * w - f * T) * X, t[12] = (o * E - a * R - l * g) * X, t[13] = (i * R - n * E + r * g) * X, t[14] = (M * S - _ * A - m * T) * X, t[15] = (h * A - d * S + u * T) * X, this;
  }
  scale(t) {
    const i = this.elements, n = t.x, r = t.y, s = t.z;
    return i[0] *= n, i[4] *= r, i[8] *= s, i[1] *= n, i[5] *= r, i[9] *= s, i[2] *= n, i[6] *= r, i[10] *= s, i[3] *= n, i[7] *= r, i[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, i = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(i, n, r));
  }
  makeTranslation(t, i, n) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, i, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const i = Math.cos(t), n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, i, -n, 0, 0, n, i, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const i = Math.cos(t), n = Math.sin(t);
    return this.set(i, 0, n, 0, 0, 1, 0, 0, -n, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const i = Math.cos(t), n = Math.sin(t);
    return this.set(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, i) {
    const n = Math.cos(i), r = Math.sin(i), s = 1 - n, a = t.x, o = t.y, l = t.z, c = s * a, h = s * o;
    return this.set(c * a + n, c * o - r * l, c * l + r * o, 0, c * o + r * l, h * o + n, h * l - r * a, 0, c * l - r * o, h * l + r * a, s * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, i, n) {
    return this.set(t, 0, 0, 0, 0, i, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, i, n, r, s, a) {
    return this.set(1, n, s, 0, t, 1, a, 0, i, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, i, n) {
    const r = this.elements, s = i._x, a = i._y, o = i._z, l = i._w, c = s + s, h = a + a, d = o + o, u = s * c, f = s * h, _ = s * d, M = a * h, m = a * d, p = o * d, T = l * c, S = l * h, v = l * d, A = n.x, w = n.y, C = n.z;
    return r[0] = (1 - (M + p)) * A, r[1] = (f + v) * A, r[2] = (_ - S) * A, r[3] = 0, r[4] = (f - v) * w, r[5] = (1 - (u + p)) * w, r[6] = (m + T) * w, r[7] = 0, r[8] = (_ + S) * C, r[9] = (m - T) * C, r[10] = (1 - (u + M)) * C, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, i, n) {
    const r = this.elements;
    t.x = r[12], t.y = r[13], t.z = r[14];
    const s = this.determinantAffine();
    if (s === 0)
      return n.set(1, 1, 1), i.identity(), this;
    let a = un.set(r[0], r[1], r[2]).length();
    const o = un.set(r[4], r[5], r[6]).length(), l = un.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), ai.copy(this);
    const c = 1 / a, h = 1 / o, d = 1 / l;
    return ai.elements[0] *= c, ai.elements[1] *= c, ai.elements[2] *= c, ai.elements[4] *= h, ai.elements[5] *= h, ai.elements[6] *= h, ai.elements[8] *= d, ai.elements[9] *= d, ai.elements[10] *= d, i.setFromRotationMatrix(ai), n.x = a, n.y = o, n.z = l, this;
  }
  makePerspective(t, i, n, r, s, a, o = zn, l = !1) {
    const c = this.elements, h = 2 * s / (i - t), d = 2 * s / (n - r), u = (i + t) / (i - t), f = (n + r) / (n - r);
    let _, M;
    if (l)
      _ = s / (a - s), M = a * s / (a - s);
    else if (o === 2e3)
      _ = -(a + s) / (a - s), M = -2 * a * s / (a - s);
    else if (o === 2001)
      _ = -a / (a - s), M = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = d, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = _, c[14] = M, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(t, i, n, r, s, a, o = zn, l = !1) {
    const c = this.elements, h = 2 / (i - t), d = 2 / (n - r), u = -(i + t) / (i - t), f = -(n + r) / (n - r);
    let _, M;
    if (l)
      _ = 1 / (a - s), M = a / (a - s);
    else if (o === 2e3)
      _ = -2 / (a - s), M = -(a + s) / (a - s);
    else if (o === 2001)
      _ = -1 / (a - s), M = -s / (a - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = 0, c[12] = u, c[1] = 0, c[5] = d, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = _, c[14] = M, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(t) {
    const i = this.elements, n = t.elements;
    for (let r = 0; r < 16; r++) if (i[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(t, i = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + i];
    return this;
  }
  toArray(t = [], i = 0) {
    const n = this.elements;
    return t[i] = n[0], t[i + 1] = n[1], t[i + 2] = n[2], t[i + 3] = n[3], t[i + 4] = n[4], t[i + 5] = n[5], t[i + 6] = n[6], t[i + 7] = n[7], t[i + 8] = n[8], t[i + 9] = n[9], t[i + 10] = n[10], t[i + 11] = n[11], t[i + 12] = n[12], t[i + 13] = n[13], t[i + 14] = n[14], t[i + 15] = n[15], t;
  }
}, un = /* @__PURE__ */ new P(), ai = /* @__PURE__ */ new dt(), Gh = /* @__PURE__ */ new P(0, 0, 0), Hh = /* @__PURE__ */ new P(1, 1, 1), Ni = /* @__PURE__ */ new P(), wr = /* @__PURE__ */ new P(), qt = /* @__PURE__ */ new P(), ka = /* @__PURE__ */ new dt(), Wa = /* @__PURE__ */ new Ci(), tn = class Sl {
  constructor(t = 0, i = 0, n = 0, r = Sl.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = i, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, i, n, r = this._order) {
    return this._x = t, this._y = i, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, i = this._order, n = !0) {
    const r = t.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], h = r[9], d = r[2], u = r[6], f = r[10];
    switch (i) {
      case "XYZ":
        this._y = Math.asin(je(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-je(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(je(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-je(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(u, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(je(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-je(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        Ge("Euler: .setFromRotationMatrix() encountered an unknown order: " + i);
    }
    return this._order = i, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, i, n) {
    return ka.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ka, i, n);
  }
  setFromVector3(t, i = this._order) {
    return this.set(t.x, t.y, t.z, i);
  }
  reorder(t) {
    return Wa.setFromEuler(this), this.setFromQuaternion(Wa, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this._x, t[i + 1] = this._y, t[i + 2] = this._z, t[i + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
};
tn.DEFAULT_ORDER = "XYZ";
var Ea = class {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}, kh = 0, Xa = /* @__PURE__ */ new P(), dn = /* @__PURE__ */ new Ci(), Si = /* @__PURE__ */ new dt(), Ar = /* @__PURE__ */ new P(), Kn = /* @__PURE__ */ new P(), Wh = /* @__PURE__ */ new P(), Xh = /* @__PURE__ */ new Ci(), Ya = /* @__PURE__ */ new P(1, 0, 0), qa = /* @__PURE__ */ new P(0, 1, 0), Za = /* @__PURE__ */ new P(0, 0, 1), Ka = { type: "added" }, Yh = { type: "removed" }, fn = {
  type: "childadded",
  child: null
}, Cs = {
  type: "childremoved",
  child: null
}, Rt = class os extends ki {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: kh++ }), this.uuid = vi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = os.DEFAULT_UP.clone();
    const t = new P(), i = new tn(), n = new Ci(), r = new P(1, 1, 1);
    function s() {
      n.setFromEuler(i, !1);
    }
    function a() {
      i.setFromQuaternion(n, void 0, !1);
    }
    i._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: { value: new dt() },
      normalMatrix: { value: new Qe() }
    }), this.matrix = new dt(), this.matrixWorld = new dt(), this.matrixAutoUpdate = os.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = os.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ea(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, i) {
    this.quaternion.setFromAxisAngle(t, i);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, i) {
    return dn.setFromAxisAngle(t, i), this.quaternion.multiply(dn), this;
  }
  rotateOnWorldAxis(t, i) {
    return dn.setFromAxisAngle(t, i), this.quaternion.premultiply(dn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ya, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(qa, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Za, t);
  }
  translateOnAxis(t, i) {
    return Xa.copy(t).applyQuaternion(this.quaternion), this.position.add(Xa.multiplyScalar(i)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Ya, t);
  }
  translateY(t) {
    return this.translateOnAxis(qa, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Za, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Si.copy(this.matrixWorld).invert());
  }
  lookAt(t, i, n) {
    t.isVector3 ? Ar.copy(t) : Ar.set(t, i, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Kn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Si.lookAt(Kn, Ar, this.up) : Si.lookAt(Ar, Kn, this.up), this.quaternion.setFromRotationMatrix(Si), r && (Si.extractRotation(r.matrixWorld), dn.setFromRotationMatrix(Si), this.quaternion.premultiply(dn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.add(arguments[i]);
      return this;
    }
    return t === this ? (ke("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Ka), fn.child = t, this.dispatchEvent(fn), fn.child = null) : ke("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const i = this.children.indexOf(t);
    return i !== -1 && (t.parent = null, this.children.splice(i, 1), t.dispatchEvent(Yh), Cs.child = t, this.dispatchEvent(Cs), Cs.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), Si.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Si.multiply(t.parent.matrixWorld)), t.applyMatrix4(Si), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Ka), fn.child = t, this.dispatchEvent(fn), fn.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, i) {
    if (this[t] === i) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const s = this.children[n].getObjectByProperty(t, i);
      if (s !== void 0) return s;
    }
  }
  getObjectsByProperty(t, i, n = []) {
    this[t] === i && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++) r[s].getObjectsByProperty(t, i, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Kn, t, Wh), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Kn, Xh, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const i = this.matrixWorld.elements;
    return t.set(i[8], i[9], i[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const i = this.children;
    for (let n = 0, r = i.length; n < r; n++) i[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const i = this.children;
    for (let n = 0, r = i.length; n < r; n++) i[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const i = this.parent;
    i !== null && (t(i), i.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const t = this.pivot;
    if (t !== null) {
      const i = t.x, n = t.y, r = t.z, s = this.matrix.elements;
      s[12] += i - s[0] * i - s[4] * n - s[8] * r, s[13] += n - s[1] * i - s[5] * n - s[9] * r, s[14] += r - s[2] * i - s[6] * n - s[10] * r;
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const i = this.children;
    for (let n = 0, r = i.length; n < r; n++) i[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, i, n = !1) {
    const r = this.parent;
    if (t === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), i === !0) {
      const s = this.children;
      for (let a = 0, o = s.length; a < o; a++) s[a].updateWorldMatrix(!1, !0, n);
    }
  }
  toJSON(t) {
    const i = t === void 0 || typeof t == "string", n = {};
    i && (t = {
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
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(t), r.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const d = l[c];
          s(t.shapes, d);
        }
        else s(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(s(t.materials, this.material[l]));
      r.material = o;
    } else r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(t.animations, l));
      }
    }
    if (i) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), h = a(t.images), d = a(t.shapes), u = a(t.skeletons), f = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), u.length > 0 && (n.skeletons = u), f.length > 0 && (n.animations = f), _.length > 0 && (n.nodes = _);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, i = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.pivot = t.pivot !== null ? t.pivot.clone() : null, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.static = t.static, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), i === !0) for (let n = 0; n < t.children.length; n++) {
      const r = t.children[n];
      this.add(r.clone());
    }
    return this;
  }
};
Rt.DEFAULT_UP = /* @__PURE__ */ new P(0, 1, 0);
Rt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var ri = class extends Rt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}, qh = { type: "move" }, Ps = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ri(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ri(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ri(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P(), this._grip.eventsEnabled = !1), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const i of e.hand.values()) this._getHandJoint(t, i);
    }
    return this.dispatchEvent({
      type: "connected",
      data: e
    }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({
      type: "disconnected",
      data: e
    }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, i) {
    let n = null, r = null, s = null;
    const a = this._targetRay, o = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        s = !0;
        for (const _ of e.hand.values()) {
          const M = t.getJointPose(_, i), m = this._getHandJoint(l, _);
          M !== null && (m.matrix.fromArray(M.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = !0, m.jointRadius = M.radius), m.visible = M !== null;
        }
        const c = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], d = c.position.distanceTo(h.position), u = 0.02, f = 5e-3;
        l.inputState.pinching && d > u + f ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= u - f && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else o !== null && e.gripSpace && (r = t.getPose(e.gripSpace, i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, o.eventsEnabled && o.dispatchEvent({
        type: "gripUpdated",
        data: e,
        target: this
      })));
      a !== null && (n = t.getPose(e.targetRaySpace, i), n === null && r !== null && (n = r), n !== null && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, n.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(n.linearVelocity)) : a.hasLinearVelocity = !1, n.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(n.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(qh)));
    }
    return a !== null && (a.visible = n !== null), o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new ri();
      i.matrixAutoUpdate = !1, i.visible = !1, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}, El = {
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
}, Ui = {
  h: 0,
  s: 0,
  l: 0
}, Rr = {
  h: 0,
  s: 0,
  l: 0
};
function Ls(e, t, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (t - e) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - i) : e;
}
var $e = class {
  constructor(e, t, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const n = e;
      n && n.isColor ? this.copy(n) : typeof n == "number" ? this.setHex(n) : typeof n == "string" && this.setStyle(n);
    } else this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Kt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ot.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, i, n = ot.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, ot.colorSpaceToWorking(this, n), this;
  }
  setHSL(e, t, i, n = ot.workingColorSpace) {
    if (e = xa(e, 1), t = je(t, 0, 1), i = je(i, 0, 1), t === 0) this.r = this.g = this.b = i;
    else {
      const r = i <= 0.5 ? i * (1 + t) : i + t - i * t, s = 2 * i - r;
      this.r = Ls(s, r, e + 1 / 3), this.g = Ls(s, r, e), this.b = Ls(s, r, e - 1 / 3);
    }
    return ot.colorSpaceToWorking(this, n), this;
  }
  setStyle(e, t = Kt) {
    function i(r) {
      r !== void 0 && parseFloat(r) < 1 && Ge("Color: Alpha component of " + e + " will be ignored.");
    }
    let n;
    if (n = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const s = n[1], a = n[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return i(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return i(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return i(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          Ge("Color: Unknown color model " + e);
      }
    } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = n[1], s = r.length;
      if (s === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (s === 6) return this.setHex(parseInt(r, 16), t);
      Ge("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Kt) {
    const i = El[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : Ge("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Ri(e.r), this.g = Ri(e.g), this.b = Ri(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Fn(e.r), this.g = Fn(e.g), this.b = Fn(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Kt) {
    return ot.workingToColorSpace(Ot.copy(this), e), Math.round(je(Ot.r * 255, 0, 255)) * 65536 + Math.round(je(Ot.g * 255, 0, 255)) * 256 + Math.round(je(Ot.b * 255, 0, 255));
  }
  getHexString(e = Kt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ot.workingColorSpace) {
    ot.workingToColorSpace(Ot.copy(this), t);
    const i = Ot.r, n = Ot.g, r = Ot.b, s = Math.max(i, n, r), a = Math.min(i, n, r);
    let o, l;
    const c = (a + s) / 2;
    if (a === s)
      o = 0, l = 0;
    else {
      const h = s - a;
      switch (l = c <= 0.5 ? h / (s + a) : h / (2 - s - a), s) {
        case i:
          o = (n - r) / h + (n < r ? 6 : 0);
          break;
        case n:
          o = (r - i) / h + 2;
          break;
        case r:
          o = (i - n) / h + 4;
          break;
      }
      o /= 6;
    }
    return e.h = o, e.s = l, e.l = c, e;
  }
  getRGB(e, t = ot.workingColorSpace) {
    return ot.workingToColorSpace(Ot.copy(this), t), e.r = Ot.r, e.g = Ot.g, e.b = Ot.b, e;
  }
  getStyle(e = Kt) {
    ot.workingToColorSpace(Ot.copy(this), e);
    const t = Ot.r, i = Ot.g, n = Ot.b;
    return e !== "srgb" ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(n * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(Ui), this.setHSL(Ui.h + e, Ui.s + t, Ui.l + i);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Ui), e.getHSL(Rr);
    const i = hr(Ui.h, Rr.h, t), n = hr(Ui.s, Rr.s, t), r = hr(Ui.l, Rr.l, t);
    return this.setHSL(i, n, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, i = this.g, n = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * i + r[6] * n, this.g = r[1] * t + r[4] * i + r[7] * n, this.b = r[2] * t + r[5] * i + r[8] * n, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}, Ot = /* @__PURE__ */ new $e();
$e.NAMES = El;
var bl = class extends Rt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new tn(), this.environmentIntensity = 1, this.environmentRotation = new tn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}, oi = /* @__PURE__ */ new P(), Ei = /* @__PURE__ */ new P(), Is = /* @__PURE__ */ new P(), bi = /* @__PURE__ */ new P(), pn = /* @__PURE__ */ new P(), mn = /* @__PURE__ */ new P(), Ja = /* @__PURE__ */ new P(), Ds = /* @__PURE__ */ new P(), Ns = /* @__PURE__ */ new P(), Us = /* @__PURE__ */ new P(), Os = /* @__PURE__ */ new Et(), Fs = /* @__PURE__ */ new Et(), Bs = /* @__PURE__ */ new Et(), Ln = class In {
  constructor(t = new P(), i = new P(), n = new P()) {
    this.a = t, this.b = i, this.c = n;
  }
  static getNormal(t, i, n, r) {
    r.subVectors(n, i), oi.subVectors(t, i), r.cross(oi);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(t, i, n, r, s) {
    oi.subVectors(r, i), Ei.subVectors(n, i), Is.subVectors(t, i);
    const a = oi.dot(oi), o = oi.dot(Ei), l = oi.dot(Is), c = Ei.dot(Ei), h = Ei.dot(Is), d = a * c - o * o;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / d, f = (c * l - o * h) * u, _ = (a * h - o * l) * u;
    return s.set(1 - f - _, _, f);
  }
  static containsPoint(t, i, n, r) {
    return this.getBarycoord(t, i, n, r, bi) === null ? !1 : bi.x >= 0 && bi.y >= 0 && bi.x + bi.y <= 1;
  }
  static getInterpolation(t, i, n, r, s, a, o, l) {
    return this.getBarycoord(t, i, n, r, bi) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, bi.x), l.addScaledVector(a, bi.y), l.addScaledVector(o, bi.z), l);
  }
  static getInterpolatedAttribute(t, i, n, r, s, a) {
    return Os.setScalar(0), Fs.setScalar(0), Bs.setScalar(0), Os.fromBufferAttribute(t, i), Fs.fromBufferAttribute(t, n), Bs.fromBufferAttribute(t, r), a.setScalar(0), a.addScaledVector(Os, s.x), a.addScaledVector(Fs, s.y), a.addScaledVector(Bs, s.z), a;
  }
  static isFrontFacing(t, i, n, r) {
    return oi.subVectors(n, i), Ei.subVectors(t, i), oi.cross(Ei).dot(r) < 0;
  }
  set(t, i, n) {
    return this.a.copy(t), this.b.copy(i), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, i, n, r) {
    return this.a.copy(t[i]), this.b.copy(t[n]), this.c.copy(t[r]), this;
  }
  setFromAttributeAndIndices(t, i, n, r) {
    return this.a.fromBufferAttribute(t, i), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return oi.subVectors(this.c, this.b), Ei.subVectors(this.a, this.b), oi.cross(Ei).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return In.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, i) {
    return In.getBarycoord(t, this.a, this.b, this.c, i);
  }
  getInterpolation(t, i, n, r, s) {
    return In.getInterpolation(t, this.a, this.b, this.c, i, n, r, s);
  }
  containsPoint(t) {
    return In.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return In.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, i) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    pn.subVectors(r, n), mn.subVectors(s, n), Ds.subVectors(t, n);
    const l = pn.dot(Ds), c = mn.dot(Ds);
    if (l <= 0 && c <= 0) return i.copy(n);
    Ns.subVectors(t, r);
    const h = pn.dot(Ns), d = mn.dot(Ns);
    if (h >= 0 && d <= h) return i.copy(r);
    const u = l * d - h * c;
    if (u <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), i.copy(n).addScaledVector(pn, a);
    Us.subVectors(t, s);
    const f = pn.dot(Us), _ = mn.dot(Us);
    if (_ >= 0 && f <= _) return i.copy(s);
    const M = f * c - l * _;
    if (M <= 0 && c >= 0 && _ <= 0)
      return o = c / (c - _), i.copy(n).addScaledVector(mn, o);
    const m = h * _ - f * d;
    if (m <= 0 && d - h >= 0 && f - _ >= 0)
      return Ja.subVectors(s, r), o = (d - h) / (d - h + (f - _)), i.copy(r).addScaledVector(Ja, o);
    const p = 1 / (m + M + u);
    return a = M * p, o = u * p, i.copy(n).addScaledVector(pn, a).addScaledVector(mn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}, rn = class {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3) this.expandByPoint(li.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++) this.expandByPoint(li.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = li.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0) {
      const r = i.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let s = 0, a = r.count; s < a; s++)
        e.isMesh === !0 ? e.getVertexPosition(s, li) : li.fromBufferAttribute(r, s), li.applyMatrix4(e.matrixWorld), this.expandByPoint(li);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Cr.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), Cr.copy(i.boundingBox)), Cr.applyMatrix4(e.matrixWorld), this.union(Cr);
    }
    const n = e.children;
    for (let r = 0, s = n.length; r < s; r++) this.expandByObject(n[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, li), li.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Jn), Pr.subVectors(this.max, Jn), gn.subVectors(e.a, Jn), vn.subVectors(e.b, Jn), _n.subVectors(e.c, Jn), Oi.subVectors(vn, gn), Fi.subVectors(_n, vn), Yi.subVectors(gn, _n);
    let t = [
      0,
      -Oi.z,
      Oi.y,
      0,
      -Fi.z,
      Fi.y,
      0,
      -Yi.z,
      Yi.y,
      Oi.z,
      0,
      -Oi.x,
      Fi.z,
      0,
      -Fi.x,
      Yi.z,
      0,
      -Yi.x,
      -Oi.y,
      Oi.x,
      0,
      -Fi.y,
      Fi.x,
      0,
      -Yi.y,
      Yi.x,
      0
    ];
    return !zs(t, gn, vn, _n, Pr) || (t = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], !zs(t, gn, vn, _n, Pr)) ? !1 : (Lr.crossVectors(Oi, Fi), t = [
      Lr.x,
      Lr.y,
      Lr.z
    ], zs(t, gn, vn, _n, Pr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, li).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(li).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Ti[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Ti[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ti[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ti[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ti[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ti[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ti[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ti[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ti), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}, Ti = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], li = /* @__PURE__ */ new P(), Cr = /* @__PURE__ */ new rn(), gn = /* @__PURE__ */ new P(), vn = /* @__PURE__ */ new P(), _n = /* @__PURE__ */ new P(), Oi = /* @__PURE__ */ new P(), Fi = /* @__PURE__ */ new P(), Yi = /* @__PURE__ */ new P(), Jn = /* @__PURE__ */ new P(), Pr = /* @__PURE__ */ new P(), Lr = /* @__PURE__ */ new P(), qi = /* @__PURE__ */ new P();
function zs(e, t, i, n, r) {
  for (let s = 0, a = e.length - 3; s <= a; s += 3) {
    qi.fromArray(e, s);
    const o = r.x * Math.abs(qi.x) + r.y * Math.abs(qi.y) + r.z * Math.abs(qi.z), l = t.dot(qi), c = i.dot(qi), h = n.dot(qi);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1;
  }
  return !0;
}
var Tt = /* @__PURE__ */ new P(), Ir = /* @__PURE__ */ new ee(), Zh = 0, $t = class extends ki {
  constructor(e, t, i = !1) {
    if (super(), Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Zh++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = ml, this.updateRanges = [], this.gpuType = Mr, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let n = 0, r = this.itemSize; n < r; n++) this.array[e + n] = t.array[i + n];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, i = this.count; t < i; t++)
      Ir.fromBufferAttribute(this, t), Ir.applyMatrix3(e), this.setXY(t, Ir.x, Ir.y);
    else if (this.itemSize === 3) for (let t = 0, i = this.count; t < i; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyMatrix3(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyMatrix4(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyNormalMatrix(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Tt.fromBufferAttribute(this, t), Tt.transformDirection(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = hi(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = ut(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = hi(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = ut(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = ut(t, this.array), i = ut(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, n) {
    return e *= this.itemSize, this.normalized && (t = ut(t, this.array), i = ut(i, this.array), n = ut(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this;
  }
  setXYZW(e, t, i, n, r) {
    return e *= this.itemSize, this.normalized && (t = ut(t, this.array), i = ut(i, this.array), n = ut(n, this.array), r = ut(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, Tl = class extends $t {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}, wl = class extends $t {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}, lt = class extends $t {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}, Kh = /* @__PURE__ */ new rn(), $n = /* @__PURE__ */ new P(), Vs = /* @__PURE__ */ new P(), sn = class {
  constructor(e = new P(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : Kh.setFromPoints(e).getCenter(i);
    let n = 0;
    for (let r = 0, s = e.length; r < s; r++) n = Math.max(n, i.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(n), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    $n.subVectors(e, this.center);
    const t = $n.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), n = (i - this.radius) * 0.5;
      this.center.addScaledVector($n, n / i), this.radius += n;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Vs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint($n.copy(e.center).add(Vs)), this.expandByPoint($n.copy(e.center).sub(Vs))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}, Jh = 0, ni = /* @__PURE__ */ new dt(), Gs = /* @__PURE__ */ new Rt(), Mn = /* @__PURE__ */ new P(), Zt = /* @__PURE__ */ new rn(), Qn = /* @__PURE__ */ new rn(), It = /* @__PURE__ */ new P(), bt = class Al extends ki {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Jh++ }), this.uuid = vi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}, this._transformed = !1;
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (ph(t) ? wl : Tl)(t, 1) : this.index = t, this;
  }
  setIndirect(t, i = 0) {
    return this.indirect = t, this.indirectOffset = i, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, i) {
    return this.attributes[t] = i, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, i, n = 0) {
    this.groups.push({
      start: t,
      count: i,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, i) {
    this.drawRange.start = t, this.drawRange.count = i;
  }
  applyMatrix4(t) {
    const i = this.attributes.position;
    i !== void 0 && (i.applyMatrix4(t), i.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Qe().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
  }
  applyQuaternion(t) {
    return ni.makeRotationFromQuaternion(t), this.applyMatrix4(ni), this;
  }
  rotateX(t) {
    return ni.makeRotationX(t), this.applyMatrix4(ni), this;
  }
  rotateY(t) {
    return ni.makeRotationY(t), this.applyMatrix4(ni), this;
  }
  rotateZ(t) {
    return ni.makeRotationZ(t), this.applyMatrix4(ni), this;
  }
  translate(t, i, n) {
    return ni.makeTranslation(t, i, n), this.applyMatrix4(ni), this;
  }
  scale(t, i, n) {
    return ni.makeScale(t, i, n), this.applyMatrix4(ni), this;
  }
  lookAt(t) {
    return Gs.lookAt(t), Gs.updateMatrix(), this.applyMatrix4(Gs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Mn).negate(), this.translate(Mn.x, Mn.y, Mn.z), this;
  }
  setFromPoints(t) {
    const i = this.getAttribute("position");
    if (i === void 0) {
      const n = [];
      for (let r = 0, s = t.length; r < s; r++) {
        const a = t[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new lt(n, 3));
    } else {
      const n = Math.min(t.length, i.count);
      for (let r = 0; r < n; r++) {
        const s = t[r];
        i.setXYZ(r, s.x, s.y, s.z || 0);
      }
      t.length > i.count && Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), i.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new rn());
    const t = this.attributes.position, i = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new P(-1 / 0, -1 / 0, -1 / 0), new P(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), i) for (let n = 0, r = i.length; n < r; n++) {
        const s = i[n];
        Zt.setFromBufferAttribute(s), this.morphTargetsRelative ? (It.addVectors(this.boundingBox.min, Zt.min), this.boundingBox.expandByPoint(It), It.addVectors(this.boundingBox.max, Zt.max), this.boundingBox.expandByPoint(It)) : (this.boundingBox.expandByPoint(Zt.min), this.boundingBox.expandByPoint(Zt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new sn());
    const t = this.attributes.position, i = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Zt.setFromBufferAttribute(t), i) for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        Qn.setFromBufferAttribute(o), this.morphTargetsRelative ? (It.addVectors(Zt.min, Qn.min), Zt.expandByPoint(It), It.addVectors(Zt.max, Qn.max), Zt.expandByPoint(It)) : (Zt.expandByPoint(Qn.min), Zt.expandByPoint(Qn.max));
      }
      Zt.getCenter(n);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        It.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(It));
      if (i) for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++)
          It.fromBufferAttribute(o, c), l && (Mn.fromBufferAttribute(t, c), It.add(Mn)), r = Math.max(r, n.distanceToSquared(It));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, i = this.attributes;
    if (t === null || i.position === void 0 || i.normal === void 0 || i.uv === void 0) {
      ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = i.position, r = i.normal, s = i.uv;
    let a = this.getAttribute("tangent");
    (a === void 0 || a.count !== n.count) && (a = new $t(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", a));
    const o = [], l = [];
    for (let g = 0; g < n.count; g++)
      o[g] = new P(), l[g] = new P();
    const c = new P(), h = new P(), d = new P(), u = new ee(), f = new ee(), _ = new ee(), M = new P(), m = new P();
    function p(g, E, F) {
      c.fromBufferAttribute(n, g), h.fromBufferAttribute(n, E), d.fromBufferAttribute(n, F), u.fromBufferAttribute(s, g), f.fromBufferAttribute(s, E), _.fromBufferAttribute(s, F), h.sub(c), d.sub(c), f.sub(u), _.sub(u);
      const R = 1 / (f.x * _.y - _.x * f.y);
      isFinite(R) && (M.copy(h).multiplyScalar(_.y).addScaledVector(d, -f.y).multiplyScalar(R), m.copy(d).multiplyScalar(f.x).addScaledVector(h, -_.x).multiplyScalar(R), o[g].add(M), o[E].add(M), o[F].add(M), l[g].add(m), l[E].add(m), l[F].add(m));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: t.count
    }]);
    for (let g = 0, E = T.length; g < E; ++g) {
      const F = T[g], R = F.start, V = F.count;
      for (let Z = R, G = R + V; Z < G; Z += 3) p(t.getX(Z + 0), t.getX(Z + 1), t.getX(Z + 2));
    }
    const S = new P(), v = new P(), A = new P(), w = new P();
    function C(g) {
      A.fromBufferAttribute(r, g), w.copy(A);
      const E = o[g];
      S.copy(E), S.sub(A.multiplyScalar(A.dot(E))).normalize(), v.crossVectors(w, E);
      const F = v.dot(l[g]) < 0 ? -1 : 1;
      a.setXYZW(g, S.x, S.y, S.z, F);
    }
    for (let g = 0, E = T.length; g < E; ++g) {
      const F = T[g], R = F.start, V = F.count;
      for (let Z = R, G = R + V; Z < G; Z += 3)
        C(t.getX(Z + 0)), C(t.getX(Z + 1)), C(t.getX(Z + 2));
    }
    this._transformed = !0;
  }
  computeVertexNormals() {
    const t = this.index, i = this.getAttribute("position");
    if (i !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0 || n.count !== i.count)
        n = new $t(new Float32Array(i.count * 3), 3), this.setAttribute("normal", n);
      else for (let u = 0, f = n.count; u < f; u++) n.setXYZ(u, 0, 0, 0);
      const r = new P(), s = new P(), a = new P(), o = new P(), l = new P(), c = new P(), h = new P(), d = new P();
      if (t) for (let u = 0, f = t.count; u < f; u += 3) {
        const _ = t.getX(u + 0), M = t.getX(u + 1), m = t.getX(u + 2);
        r.fromBufferAttribute(i, _), s.fromBufferAttribute(i, M), a.fromBufferAttribute(i, m), h.subVectors(a, s), d.subVectors(r, s), h.cross(d), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, M), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(M, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let u = 0, f = i.count; u < f; u += 3)
        r.fromBufferAttribute(i, u + 0), s.fromBufferAttribute(i, u + 1), a.fromBufferAttribute(i, u + 2), h.subVectors(a, s), d.subVectors(r, s), h.cross(d), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let i = 0, n = t.count; i < n; i++)
      It.fromBufferAttribute(t, i), It.normalize(), t.setXYZ(i, It.x, It.y, It.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, h = o.itemSize, d = o.normalized, u = new c.constructor(l.length * h);
      let f = 0, _ = 0;
      for (let M = 0, m = l.length; M < m; M++) {
        o.isInterleavedBufferAttribute ? f = l[M] * o.data.stride + o.offset : f = l[M] * h;
        for (let p = 0; p < h; p++) u[_++] = c[f++];
      }
      return new $t(u, h, d);
    }
    if (this.index === null)
      return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const i = new Al(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = t(l, n);
      i.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, d = c.length; h < d; h++) {
        const u = c[h], f = t(u, n);
        l.push(f);
      }
      i.morphAttributes[o] = l;
    }
    i.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      i.addGroup(c.start, c.count, c.materialIndex);
    }
    return i;
  }
  toJSON() {
    const t = { metadata: {
      version: 4.7,
      type: "BufferGeometry",
      generator: "BufferGeometry.toJSON"
    } };
    if (t.uuid = this.uuid, t.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const i = this.index;
    i !== null && (t.data.index = {
      type: i.array.constructor.name,
      array: Array.prototype.slice.call(i.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let d = 0, u = c.length; d < u; d++) {
        const f = c[d];
        h.push(f.toJSON(t.data));
      }
      h.length > 0 && (r[l] = h, s = !0);
    }
    s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = o.toJSON()), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const i = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone());
    const r = t.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(i));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const h = [], d = s[c];
      for (let u = 0, f = d.length; u < f; u++) h.push(d[u].clone(i));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this._transformed = t._transformed, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, $h = class {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = ml, this.updateRanges = [], this.version = 0, this.uuid = vi();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, i) {
    e *= this.stride, i *= t.stride;
    for (let n = 0, r = this.stride; n < r; n++) this.array[e + n] = t.array[i + n];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = vi()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(t, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = vi()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}, Bt = /* @__PURE__ */ new P(), $a = class Rl {
  constructor(t, i, n, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = i, this.offset = n, this.normalized = r;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let i = 0, n = this.data.count; i < n; i++)
      Bt.fromBufferAttribute(this, i), Bt.applyMatrix4(t), this.setXYZ(i, Bt.x, Bt.y, Bt.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let i = 0, n = this.count; i < n; i++)
      Bt.fromBufferAttribute(this, i), Bt.applyNormalMatrix(t), this.setXYZ(i, Bt.x, Bt.y, Bt.z);
    return this;
  }
  transformDirection(t) {
    for (let i = 0, n = this.count; i < n; i++)
      Bt.fromBufferAttribute(this, i), Bt.transformDirection(t), this.setXYZ(i, Bt.x, Bt.y, Bt.z);
    return this;
  }
  getComponent(t, i) {
    let n = this.array[t * this.data.stride + this.offset + i];
    return this.normalized && (n = hi(n, this.array)), n;
  }
  setComponent(t, i, n) {
    return this.normalized && (n = ut(n, this.array)), this.data.array[t * this.data.stride + this.offset + i] = n, this;
  }
  setX(t, i) {
    return this.normalized && (i = ut(i, this.array)), this.data.array[t * this.data.stride + this.offset] = i, this;
  }
  setY(t, i) {
    return this.normalized && (i = ut(i, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = i, this;
  }
  setZ(t, i) {
    return this.normalized && (i = ut(i, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = i, this;
  }
  setW(t, i) {
    return this.normalized && (i = ut(i, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = i, this;
  }
  getX(t) {
    let i = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (i = hi(i, this.array)), i;
  }
  getY(t) {
    let i = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (i = hi(i, this.array)), i;
  }
  getZ(t) {
    let i = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (i = hi(i, this.array)), i;
  }
  getW(t) {
    let i = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (i = hi(i, this.array)), i;
  }
  setXY(t, i, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (i = ut(i, this.array), n = ut(n, this.array)), this.data.array[t + 0] = i, this.data.array[t + 1] = n, this;
  }
  setXYZ(t, i, n, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (i = ut(i, this.array), n = ut(n, this.array), r = ut(r, this.array)), this.data.array[t + 0] = i, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this;
  }
  setXYZW(t, i, n, r, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (i = ut(i, this.array), n = ut(n, this.array), r = ut(r, this.array), s = ut(s, this.array)), this.data.array[t + 0] = i, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this.data.array[t + 3] = s, this;
  }
  clone(t) {
    if (t === void 0) {
      ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const i = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) i.push(this.data.array[r + s]);
      }
      return new $t(new this.array.constructor(i), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Rl(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const i = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) i.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: i,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}, Qh = 0, Pi = class extends ki {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Qh++ }), this.uuid = vi(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new $e(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = bs, this.stencilZFail = bs, this.stencilZPass = bs, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const i = e[t];
        if (i === void 0) {
          Ge(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const n = this[t];
        if (n === void 0) {
          Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        n && n.isColor ? n.set(i) : n && n.isVector2 && i && i.isVector2 || n && n.isEuler && i && i.isEuler || n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const i = { metadata: {
      version: 4.7,
      type: "Material",
      generator: "Material.toJSON"
    } };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (i.blending = this.blending), this.side !== 0 && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== 204 && (i.blendSrc = this.blendSrc), this.blendDst !== 205 && (i.blendDst = this.blendDst), this.blendEquation !== 100 && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (i.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.allowOverride === !1 && (i.allowOverride = !1), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function n(r) {
      const s = [];
      for (const a in r) {
        const o = r[a];
        delete o.metadata, s.push(o);
      }
      return s;
    }
    if (t) {
      const r = n(e.textures), s = n(e.images);
      r.length > 0 && (i.textures = r), s.length > 0 && (i.images = s);
    }
    return i;
  }
  fromJSON(e, t) {
    if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new $e().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let i = e.normalScale;
      Array.isArray(i) === !1 && (i = [i, i]), this.normalScale = new ee().fromArray(i);
    }
    return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new ee().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const n = t.length;
      i = new Array(n);
      for (let r = 0; r !== n; ++r) i[r] = t[r].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}, da = class extends Pi {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new $e(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}, yn, jn = /* @__PURE__ */ new P(), xn = /* @__PURE__ */ new P(), Sn = /* @__PURE__ */ new P(), En = /* @__PURE__ */ new ee(), er = /* @__PURE__ */ new ee(), Cl = /* @__PURE__ */ new dt(), Dr = /* @__PURE__ */ new P(), tr = /* @__PURE__ */ new P(), Nr = /* @__PURE__ */ new P(), Qa = /* @__PURE__ */ new ee(), Hs = /* @__PURE__ */ new ee(), ja = /* @__PURE__ */ new ee(), eo = class extends Rt {
  constructor(e = new da()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", yn === void 0) {
      yn = new bt();
      const t = new $h(new Float32Array([
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
      ]), 5);
      yn.setIndex([
        0,
        1,
        2,
        0,
        2,
        3
      ]), yn.setAttribute("position", new $a(t, 3, 0, !1)), yn.setAttribute("uv", new $a(t, 2, 3, !1));
    }
    this.geometry = yn, this.material = e, this.center = new ee(0.5, 0.5), this.count = 1;
  }
  raycast(e, t) {
    e.camera === null && ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), xn.setFromMatrixScale(this.matrixWorld), Cl.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Sn.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && xn.multiplyScalar(-Sn.z);
    const i = this.material.rotation;
    let n, r;
    i !== 0 && (r = Math.cos(i), n = Math.sin(i));
    const s = this.center;
    Ur(Dr.set(-0.5, -0.5, 0), Sn, s, xn, n, r), Ur(tr.set(0.5, -0.5, 0), Sn, s, xn, n, r), Ur(Nr.set(0.5, 0.5, 0), Sn, s, xn, n, r), Qa.set(0, 0), Hs.set(1, 0), ja.set(1, 1);
    let a = e.ray.intersectTriangle(Dr, tr, Nr, !1, jn);
    if (a === null && (Ur(tr.set(-0.5, 0.5, 0), Sn, s, xn, n, r), Hs.set(0, 1), a = e.ray.intersectTriangle(Dr, Nr, tr, !1, jn), a === null))
      return;
    const o = e.ray.origin.distanceTo(jn);
    o < e.near || o > e.far || t.push({
      distance: o,
      point: jn.clone(),
      uv: Ln.getInterpolation(jn, Dr, tr, Nr, Qa, Hs, ja, new ee()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
};
function Ur(e, t, i, n, r, s) {
  En.subVectors(e, i).addScalar(0.5).multiply(n), r !== void 0 ? (er.x = s * En.x - r * En.y, er.y = r * En.x + s * En.y) : er.copy(En), e.copy(t), e.x += er.x, e.y += er.y, e.applyMatrix4(Cl);
}
var wi = /* @__PURE__ */ new P(), ks = /* @__PURE__ */ new P(), Or = /* @__PURE__ */ new P(), Bi = /* @__PURE__ */ new P(), Ws = /* @__PURE__ */ new P(), Fr = /* @__PURE__ */ new P(), Xs = /* @__PURE__ */ new P(), yr = class {
  constructor(e = new P(), t = new P(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, wi)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = wi.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (wi.copy(this.origin).addScaledVector(this.direction, t), wi.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, n) {
    ks.copy(e).add(t).multiplyScalar(0.5), Or.copy(t).sub(e).normalize(), Bi.copy(this.origin).sub(ks);
    const r = e.distanceTo(t) * 0.5, s = -this.direction.dot(Or), a = Bi.dot(this.direction), o = -Bi.dot(Or), l = Bi.lengthSq(), c = Math.abs(1 - s * s);
    let h, d, u, f;
    if (c > 0)
      if (h = s * o - a, d = s * a - o, f = r * c, h >= 0) if (d >= -f) if (d <= f) {
        const _ = 1 / c;
        h *= _, d *= _, u = h * (h + s * d + 2 * a) + d * (s * h + d + 2 * o) + l;
      } else
        d = r, h = Math.max(0, -(s * d + a)), u = -h * h + d * (d + 2 * o) + l;
      else
        d = -r, h = Math.max(0, -(s * d + a)), u = -h * h + d * (d + 2 * o) + l;
      else d <= -f ? (h = Math.max(0, -(-s * r + a)), d = h > 0 ? -r : Math.min(Math.max(-r, -o), r), u = -h * h + d * (d + 2 * o) + l) : d <= f ? (h = 0, d = Math.min(Math.max(-r, -o), r), u = d * (d + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), d = h > 0 ? r : Math.min(Math.max(-r, -o), r), u = -h * h + d * (d + 2 * o) + l);
    else
      d = s > 0 ? -r : r, h = Math.max(0, -(s * d + a)), u = -h * h + d * (d + 2 * o) + l;
    return i && i.copy(this.origin).addScaledVector(this.direction, h), n && n.copy(ks).addScaledVector(Or, d), u;
  }
  intersectSphere(e, t) {
    wi.subVectors(e.center, this.origin);
    const i = wi.dot(this.direction), n = wi.dot(wi) - i * i, r = e.radius * e.radius;
    if (n > r) return null;
    const s = Math.sqrt(r - n), a = i - s, o = i + s;
    return o < 0 ? null : a < 0 ? this.at(o, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, n, r, s, a, o;
    const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (i = (e.min.x - d.x) * l, n = (e.max.x - d.x) * l) : (i = (e.max.x - d.x) * l, n = (e.min.x - d.x) * l), c >= 0 ? (r = (e.min.y - d.y) * c, s = (e.max.y - d.y) * c) : (r = (e.max.y - d.y) * c, s = (e.min.y - d.y) * c), i > s || r > n || ((r > i || isNaN(i)) && (i = r), (s < n || isNaN(n)) && (n = s), h >= 0 ? (a = (e.min.z - d.z) * h, o = (e.max.z - d.z) * h) : (a = (e.max.z - d.z) * h, o = (e.min.z - d.z) * h), i > o || a > n) || ((a > i || i !== i) && (i = a), (o < n || n !== n) && (n = o), n < 0) ? null : this.at(i >= 0 ? i : n, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, wi) !== null;
  }
  intersectTriangle(e, t, i, n, r) {
    Ws.subVectors(t, e), Fr.subVectors(i, e), Xs.crossVectors(Ws, Fr);
    let s = this.direction.dot(Xs), a;
    if (s > 0) {
      if (n) return null;
      a = 1;
    } else if (s < 0)
      a = -1, s = -s;
    else return null;
    Bi.subVectors(this.origin, e);
    const o = a * this.direction.dot(Fr.crossVectors(Bi, Fr));
    if (o < 0) return null;
    const l = a * this.direction.dot(Ws.cross(Bi));
    if (l < 0 || o + l > s) return null;
    const c = -a * Bi.dot(Xs);
    return c < 0 ? null : this.at(c / s, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Pl = class extends Pi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new $e(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new tn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}, to = /* @__PURE__ */ new dt(), Zi = /* @__PURE__ */ new yr(), Br = /* @__PURE__ */ new sn(), io = /* @__PURE__ */ new P(), zr = /* @__PURE__ */ new P(), Vr = /* @__PURE__ */ new P(), Gr = /* @__PURE__ */ new P(), Ys = /* @__PURE__ */ new P(), Hr = /* @__PURE__ */ new P(), no = /* @__PURE__ */ new P(), kr = /* @__PURE__ */ new P(), St = class extends Rt {
  constructor(e = new bt(), t = new Pl()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const i = e[t[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, r = i.length; n < r; n++) {
          const s = i[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = n;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry, n = i.attributes.position, r = i.morphAttributes.position, s = i.morphTargetsRelative;
    t.fromBufferAttribute(n, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      Hr.set(0, 0, 0);
      for (let o = 0, l = r.length; o < l; o++) {
        const c = a[o], h = r[o];
        c !== 0 && (Ys.fromBufferAttribute(h, e), s ? Hr.addScaledVector(Ys, c) : Hr.addScaledVector(Ys.sub(t), c));
      }
      t.add(Hr);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry, n = this.material, r = this.matrixWorld;
    n !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Br.copy(i.boundingSphere), Br.applyMatrix4(r), Zi.copy(e.ray).recast(e.near), !(Br.containsPoint(Zi.origin) === !1 && (Zi.intersectSphere(Br, io) === null || Zi.origin.distanceToSquared(io) > (e.far - e.near) ** 2)) && (to.copy(r).invert(), Zi.copy(e.ray).applyMatrix4(to), !(i.boundingBox !== null && Zi.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(e, t, Zi)));
  }
  _computeIntersections(e, t, i) {
    let n;
    const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, l = r.attributes.uv, c = r.attributes.uv1, h = r.attributes.normal, d = r.groups, u = r.drawRange;
    if (a !== null) if (Array.isArray(s)) for (let f = 0, _ = d.length; f < _; f++) {
      const M = d[f], m = s[M.materialIndex], p = Math.max(M.start, u.start), T = Math.min(a.count, Math.min(M.start + M.count, u.start + u.count));
      for (let S = p, v = T; S < v; S += 3) {
        const A = a.getX(S), w = a.getX(S + 1), C = a.getX(S + 2);
        n = Wr(this, m, e, i, l, c, h, A, w, C), n && (n.faceIndex = Math.floor(S / 3), n.face.materialIndex = M.materialIndex, t.push(n));
      }
    }
    else {
      const f = Math.max(0, u.start), _ = Math.min(a.count, u.start + u.count);
      for (let M = f, m = _; M < m; M += 3) {
        const p = a.getX(M), T = a.getX(M + 1), S = a.getX(M + 2);
        n = Wr(this, s, e, i, l, c, h, p, T, S), n && (n.faceIndex = Math.floor(M / 3), t.push(n));
      }
    }
    else if (o !== void 0) if (Array.isArray(s)) for (let f = 0, _ = d.length; f < _; f++) {
      const M = d[f], m = s[M.materialIndex], p = Math.max(M.start, u.start), T = Math.min(o.count, Math.min(M.start + M.count, u.start + u.count));
      for (let S = p, v = T; S < v; S += 3) {
        const A = S, w = S + 1, C = S + 2;
        n = Wr(this, m, e, i, l, c, h, A, w, C), n && (n.faceIndex = Math.floor(S / 3), n.face.materialIndex = M.materialIndex, t.push(n));
      }
    }
    else {
      const f = Math.max(0, u.start), _ = Math.min(o.count, u.start + u.count);
      for (let M = f, m = _; M < m; M += 3) {
        const p = M, T = M + 1, S = M + 2;
        n = Wr(this, s, e, i, l, c, h, p, T, S), n && (n.faceIndex = Math.floor(M / 3), t.push(n));
      }
    }
  }
};
function jh(e, t, i, n, r, s, a, o) {
  let l;
  if (t.side === 1 ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, t.side === 0, o), l === null) return null;
  kr.copy(o), kr.applyMatrix4(e.matrixWorld);
  const c = i.ray.origin.distanceTo(kr);
  return c < i.near || c > i.far ? null : {
    distance: c,
    point: kr.clone(),
    object: e
  };
}
function Wr(e, t, i, n, r, s, a, o, l, c) {
  e.getVertexPosition(o, zr), e.getVertexPosition(l, Vr), e.getVertexPosition(c, Gr);
  const h = jh(e, t, i, n, zr, Vr, Gr, no);
  if (h) {
    const d = new P();
    Ln.getBarycoord(no, zr, Vr, Gr, d), r && (h.uv = Ln.getInterpolatedAttribute(r, o, l, c, d, new ee())), s && (h.uv1 = Ln.getInterpolatedAttribute(s, o, l, c, d, new ee())), a && (h.normal = Ln.getInterpolatedAttribute(a, o, l, c, d, new P()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: l,
      c,
      normal: new P(),
      materialIndex: 0
    };
    Ln.getNormal(zr, Vr, Gr, u.normal), h.face = u, h.barycoord = d;
  }
  return h;
}
var Ll = class extends Qt {
  constructor(e = null, t = 1, i = 1, n, r, s, a, o, l = Vt, c = Vt, h, d) {
    super(null, s, a, o, l, c, n, r, h, d), this.isDataTexture = !0, this.image = {
      data: e,
      width: t,
      height: i
    }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}, ro = class extends $t {
  constructor(e, t, i, n = 1) {
    super(e, t, i), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = n;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}, bn = /* @__PURE__ */ new dt(), so = /* @__PURE__ */ new dt(), Xr = [], ao = /* @__PURE__ */ new rn(), eu = /* @__PURE__ */ new dt(), ir = /* @__PURE__ */ new St(), nr = /* @__PURE__ */ new sn(), tu = class extends St {
  constructor(e, t, i) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ro(new Float32Array(i * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = i, this.boundingBox = null, this.boundingSphere = null;
    for (let n = 0; n < i; n++) this.setMatrixAt(n, eu);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new rn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let i = 0; i < t; i++)
      this.getMatrixAt(i, bn), ao.copy(e.boundingBox).applyMatrix4(bn), this.boundingBox.union(ao);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new sn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let i = 0; i < t; i++)
      this.getMatrixAt(i, bn), nr.copy(e.boundingSphere).applyMatrix4(bn), this.boundingSphere.union(nr);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    return t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const i = t.morphTargetInfluences, n = this.morphTexture.source.data.data, r = e * (i.length + 1) + 1;
    for (let s = 0; s < i.length; s++) i[s] = n[r + s];
  }
  raycast(e, t) {
    const i = this.matrixWorld, n = this.count;
    if (ir.geometry = this.geometry, ir.material = this.material, ir.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), nr.copy(this.boundingSphere), nr.applyMatrix4(i), e.ray.intersectsSphere(nr) !== !1))
      for (let r = 0; r < n; r++) {
        this.getMatrixAt(r, bn), so.multiplyMatrices(i, bn), ir.matrixWorld = so, ir.raycast(e, Xr);
        for (let s = 0, a = Xr.length; s < a; s++) {
          const o = Xr[s];
          o.instanceId = r, o.object = this, t.push(o);
        }
        Xr.length = 0;
      }
  }
  setColorAt(e, t) {
    return this.instanceColor === null && (this.instanceColor = new ro(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
  }
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  setMorphAt(e, t) {
    const i = t.morphTargetInfluences, n = i.length + 1;
    this.morphTexture === null && (this.morphTexture = new Ll(new Float32Array(n * this.count), n, this.count, ul, Mr));
    const r = this.morphTexture.source.data.data;
    let s = 0;
    for (let l = 0; l < i.length; l++) s += i[l];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - s, o = n * e;
    return r[o] = a, r.set(i, o + 1), this;
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}, qs = /* @__PURE__ */ new P(), iu = /* @__PURE__ */ new P(), nu = /* @__PURE__ */ new Qe(), Vi = class {
  constructor(e = new P(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, i, n) {
    return this.normal.set(e, t, i), this.constant = n, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const n = qs.subVectors(i, t).cross(iu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(n, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t, i = !0) {
    const n = e.delta(qs), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return i === !0 && (s < 0 || s > 1) ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || nu.getNormalMatrix(e), n = this.coplanarPoint(qs).applyMatrix4(e), r = this.normal.applyMatrix3(i).normalize();
    return this.constant = -n.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Ki = /* @__PURE__ */ new sn(), ru = /* @__PURE__ */ new ee(0.5, 0.5), Yr = /* @__PURE__ */ new P(), ba = class {
  constructor(e = new Vi(), t = new Vi(), i = new Vi(), n = new Vi(), r = new Vi(), s = new Vi()) {
    this.planes = [
      e,
      t,
      i,
      n,
      r,
      s
    ];
  }
  set(e, t, i, n, r, s) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(i), a[3].copy(n), a[4].copy(r), a[5].copy(s), this;
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = zn, i = !1) {
    const n = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], h = r[5], d = r[6], u = r[7], f = r[8], _ = r[9], M = r[10], m = r[11], p = r[12], T = r[13], S = r[14], v = r[15];
    if (n[0].setComponents(l - s, u - c, m - f, v - p).normalize(), n[1].setComponents(l + s, u + c, m + f, v + p).normalize(), n[2].setComponents(l + a, u + h, m + _, v + T).normalize(), n[3].setComponents(l - a, u - h, m - _, v - T).normalize(), i)
      n[4].setComponents(o, d, M, S).normalize(), n[5].setComponents(l - o, u - d, m - M, v - S).normalize();
    else if (n[4].setComponents(l - o, u - d, m - M, v - S).normalize(), t === 2e3) n[5].setComponents(l + o, u + d, m + M, v + S).normalize();
    else if (t === 2001) n[5].setComponents(o, d, M, S).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Ki);
  }
  intersectsSprite(e) {
    return Ki.center.set(0, 0, 0), Ki.radius = 0.7071067811865476 + ru.distanceTo(e.center), Ki.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ki);
  }
  intersectsSphere(e) {
    const t = this.planes, i = e.center, n = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(i) < n) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const n = t[i];
      if (Yr.x = n.normal.x > 0 ? e.max.x : e.min.x, Yr.y = n.normal.y > 0 ? e.max.y : e.min.y, Yr.z = n.normal.z > 0 ? e.max.z : e.min.z, n.distanceToPoint(Yr) < 0) return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Il = class extends Pi {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new $e(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}, ms = /* @__PURE__ */ new P(), gs = /* @__PURE__ */ new P(), oo = /* @__PURE__ */ new dt(), rr = /* @__PURE__ */ new yr(), qr = /* @__PURE__ */ new sn(), Zs = /* @__PURE__ */ new P(), lo = /* @__PURE__ */ new P(), su = class extends Rt {
  constructor(e = new bt(), t = new Il()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [0];
      for (let n = 1, r = t.count; n < r; n++)
        ms.fromBufferAttribute(t, n - 1), gs.fromBufferAttribute(t, n), i[n] = i[n - 1], i[n] += ms.distanceTo(gs);
      e.setAttribute("lineDistance", new lt(i, 1));
    } else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const i = this.geometry, n = this.matrixWorld, r = e.params.Line.threshold, s = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), qr.copy(i.boundingSphere), qr.applyMatrix4(n), qr.radius += r, e.ray.intersectsSphere(qr) === !1) return;
    oo.copy(n).invert(), rr.copy(e.ray).applyMatrix4(oo);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = this.isLineSegments ? 2 : 1, c = i.index, h = i.attributes.position;
    if (c !== null) {
      const d = Math.max(0, s.start), u = Math.min(c.count, s.start + s.count);
      for (let f = d, _ = u - 1; f < _; f += l) {
        const M = c.getX(f), m = c.getX(f + 1), p = Zr(this, e, rr, o, M, m, f);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const f = c.getX(u - 1), _ = c.getX(d), M = Zr(this, e, rr, o, f, _, u - 1);
        M && t.push(M);
      }
    } else {
      const d = Math.max(0, s.start), u = Math.min(h.count, s.start + s.count);
      for (let f = d, _ = u - 1; f < _; f += l) {
        const M = Zr(this, e, rr, o, f, f + 1, f);
        M && t.push(M);
      }
      if (this.isLineLoop) {
        const f = Zr(this, e, rr, o, u - 1, d, u - 1);
        f && t.push(f);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const i = e[t[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, r = i.length; n < r; n++) {
          const s = i[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = n;
        }
      }
    }
  }
};
function Zr(e, t, i, n, r, s, a) {
  const o = e.geometry.attributes.position;
  if (ms.fromBufferAttribute(o, r), gs.fromBufferAttribute(o, s), i.distanceSqToSegment(ms, gs, Zs, lo) > n) return;
  Zs.applyMatrix4(e.matrixWorld);
  const l = t.ray.origin.distanceTo(Zs);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      point: lo.clone().applyMatrix4(e.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: e
    };
}
var au = class extends su {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}, ou = class extends Pi {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new $e(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}, co = /* @__PURE__ */ new dt(), fa = /* @__PURE__ */ new yr(), Kr = /* @__PURE__ */ new sn(), Jr = /* @__PURE__ */ new P(), lu = class extends Rt {
  constructor(e = new bt(), t = new ou()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const i = this.geometry, n = this.matrixWorld, r = e.params.Points.threshold, s = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Kr.copy(i.boundingSphere), Kr.applyMatrix4(n), Kr.radius += r, e.ray.intersectsSphere(Kr) === !1) return;
    co.copy(n).invert(), fa.copy(e.ray).applyMatrix4(co);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = i.index, c = i.attributes.position;
    if (l !== null) {
      const h = Math.max(0, s.start), d = Math.min(l.count, s.start + s.count);
      for (let u = h, f = d; u < f; u++) {
        const _ = l.getX(u);
        Jr.fromBufferAttribute(c, _), ho(Jr, _, o, n, e, t, this);
      }
    } else {
      const h = Math.max(0, s.start), d = Math.min(c.count, s.start + s.count);
      for (let u = h, f = d; u < f; u++)
        Jr.fromBufferAttribute(c, u), ho(Jr, u, o, n, e, t, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const i = e[t[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, r = i.length; n < r; n++) {
          const s = i[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = n;
        }
      }
    }
  }
};
function ho(e, t, i, n, r, s, a) {
  const o = fa.distanceSqToPoint(e);
  if (o < i) {
    const l = new P();
    fa.closestPointToPoint(e, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
var Dl = class extends Qt {
  constructor(e = [], t = 301, i, n, r, s, a, o, l, c) {
    super(e, t, i, n, r, s, a, o, l, c), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, uo = class extends Qt {
  constructor(e, t, i, n, r, s, a, o, l) {
    super(e, t, i, n, r, s, a, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}, Hn = class extends Qt {
  constructor(e, t, i = ji, n, r, s, a = Vt, o = Vt, l, c = pr, h = 1) {
    if (c !== 1026 && c !== 1027) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super({
      width: e,
      height: t,
      depth: h
    }, n, r, s, a, o, c, i, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Sa(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}, cu = class extends Hn {
  constructor(e, t = ji, i = 301, n, r, s = Vt, a = Vt, o, l = pr) {
    const c = {
      width: e,
      height: e,
      depth: 1
    }, h = [
      c,
      c,
      c,
      c,
      c,
      c
    ];
    super(e, e, t, i, n, r, s, a, o, l), this.image = h, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, Nl = class extends Qt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}, kn = class Ul extends bt {
  constructor(t = 1, i = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: i,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], d = [];
    let u = 0, f = 0;
    _("z", "y", "x", -1, -1, n, i, t, a, s, 0), _("z", "y", "x", 1, -1, n, i, -t, a, s, 1), _("x", "z", "y", 1, 1, t, n, i, r, a, 2), _("x", "z", "y", 1, -1, t, n, -i, r, a, 3), _("x", "y", "z", 1, -1, t, i, n, r, s, 4), _("x", "y", "z", -1, -1, t, i, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new lt(c, 3)), this.setAttribute("normal", new lt(h, 3)), this.setAttribute("uv", new lt(d, 2));
    function _(M, m, p, T, S, v, A, w, C, g, E) {
      const F = v / C, R = A / g, V = v / 2, Z = A / 2, G = w / 2, X = C + 1, H = g + 1;
      let B = 0, ae = 0;
      const ie = new P();
      for (let oe = 0; oe < H; oe++) {
        const de = oe * R - Z;
        for (let Re = 0; Re < X; Re++)
          ie[M] = (Re * F - V) * T, ie[m] = de * S, ie[p] = G, c.push(ie.x, ie.y, ie.z), ie[M] = 0, ie[m] = 0, ie[p] = w > 0 ? 1 : -1, h.push(ie.x, ie.y, ie.z), d.push(Re / C), d.push(1 - oe / g), B += 1;
      }
      for (let oe = 0; oe < g; oe++) for (let de = 0; de < C; de++) {
        const Re = u + de + X * oe, rt = u + de + X * (oe + 1), We = u + (de + 1) + X * (oe + 1), J = u + (de + 1) + X * oe;
        l.push(Re, rt, J), l.push(rt, We, J), ae += 6;
      }
      o.addGroup(f, ae, E), f += ae, u += B;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ul(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}, Ft = class Ol extends bt {
  constructor(t = 1, i = 1, n = 1, r = 32, s = 1, a = !1, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: i,
      height: n,
      radialSegments: r,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: l
    };
    const c = this;
    r = Math.floor(r), s = Math.floor(s);
    const h = [], d = [], u = [], f = [];
    let _ = 0;
    const M = [], m = n / 2;
    let p = 0;
    T(), a === !1 && (t > 0 && S(!0), i > 0 && S(!1)), this.setIndex(h), this.setAttribute("position", new lt(d, 3)), this.setAttribute("normal", new lt(u, 3)), this.setAttribute("uv", new lt(f, 2));
    function T() {
      const v = new P(), A = new P();
      let w = 0;
      const C = (i - t) / n;
      for (let g = 0; g <= s; g++) {
        const E = [], F = g / s, R = F * (i - t) + t;
        for (let V = 0; V <= r; V++) {
          const Z = V / r, G = Z * l + o, X = Math.sin(G), H = Math.cos(G);
          A.x = R * X, A.y = -F * n + m, A.z = R * H, d.push(A.x, A.y, A.z), v.set(X, C, H).normalize(), u.push(v.x, v.y, v.z), f.push(Z, 1 - F), E.push(_++);
        }
        M.push(E);
      }
      for (let g = 0; g < r; g++) for (let E = 0; E < s; E++) {
        const F = M[E][g], R = M[E + 1][g], V = M[E + 1][g + 1], Z = M[E][g + 1];
        (t > 0 || E !== 0) && (h.push(F, R, Z), w += 3), (i > 0 || E !== s - 1) && (h.push(R, V, Z), w += 3);
      }
      c.addGroup(p, w, 0), p += w;
    }
    function S(v) {
      const A = _, w = new ee(), C = new P();
      let g = 0;
      const E = v === !0 ? t : i, F = v === !0 ? 1 : -1;
      for (let V = 1; V <= r; V++)
        d.push(0, m * F, 0), u.push(0, F, 0), f.push(0.5, 0.5), _++;
      const R = _;
      for (let V = 0; V <= r; V++) {
        const Z = V / r * l + o, G = Math.cos(Z), X = Math.sin(Z);
        C.x = E * X, C.y = m * F, C.z = E * G, d.push(C.x, C.y, C.z), u.push(0, F, 0), w.x = G * 0.5 + 0.5, w.y = X * 0.5 * F + 0.5, f.push(w.x, w.y), _++;
      }
      for (let V = 0; V < r; V++) {
        const Z = A + V, G = R + V;
        v === !0 ? h.push(G, G + 1, Z) : h.push(G + 1, G, Z), g += 3;
      }
      c.addGroup(p, g, v === !0 ? 1 : 2), p += g;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ol(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, hu = class Fl extends Ft {
  constructor(t = 1, i = 1, n = 32, r = 1, s = !1, a = 0, o = Math.PI * 2) {
    super(0, t, i, n, r, s, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: i,
      radialSegments: n,
      heightSegments: r,
      openEnded: s,
      thetaStart: a,
      thetaLength: o
    };
  }
  static fromJSON(t) {
    return new Fl(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, uu = class Bl extends bt {
  constructor(t = [], i = [], n = 1, r = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: t,
      indices: i,
      radius: n,
      detail: r
    };
    const s = [], a = [];
    o(r), c(n), h(), this.setAttribute("position", new lt(s, 3)), this.setAttribute("normal", new lt(s.slice(), 3)), this.setAttribute("uv", new lt(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(T) {
      const S = new P(), v = new P(), A = new P();
      for (let w = 0; w < i.length; w += 3)
        f(i[w + 0], S), f(i[w + 1], v), f(i[w + 2], A), l(S, v, A, T);
    }
    function l(T, S, v, A) {
      const w = A + 1, C = [];
      for (let g = 0; g <= w; g++) {
        C[g] = [];
        const E = T.clone().lerp(v, g / w), F = S.clone().lerp(v, g / w), R = w - g;
        for (let V = 0; V <= R; V++) V === 0 && g === w ? C[g][V] = E : C[g][V] = E.clone().lerp(F, V / R);
      }
      for (let g = 0; g < w; g++) for (let E = 0; E < 2 * (w - g) - 1; E++) {
        const F = Math.floor(E / 2);
        E % 2 === 0 ? (u(C[g][F + 1]), u(C[g + 1][F]), u(C[g][F])) : (u(C[g][F + 1]), u(C[g + 1][F + 1]), u(C[g + 1][F]));
      }
    }
    function c(T) {
      const S = new P();
      for (let v = 0; v < s.length; v += 3)
        S.x = s[v + 0], S.y = s[v + 1], S.z = s[v + 2], S.normalize().multiplyScalar(T), s[v + 0] = S.x, s[v + 1] = S.y, s[v + 2] = S.z;
    }
    function h() {
      const T = new P();
      for (let S = 0; S < s.length; S += 3) {
        T.x = s[S + 0], T.y = s[S + 1], T.z = s[S + 2];
        const v = m(T) / 2 / Math.PI + 0.5, A = p(T) / Math.PI + 0.5;
        a.push(v, 1 - A);
      }
      _(), d();
    }
    function d() {
      for (let T = 0; T < a.length; T += 6) {
        const S = a[T + 0], v = a[T + 2], A = a[T + 4];
        Math.max(S, v, A) > 0.9 && Math.min(S, v, A) < 0.1 && (S < 0.2 && (a[T + 0] += 1), v < 0.2 && (a[T + 2] += 1), A < 0.2 && (a[T + 4] += 1));
      }
    }
    function u(T) {
      s.push(T.x, T.y, T.z);
    }
    function f(T, S) {
      const v = T * 3;
      S.x = t[v + 0], S.y = t[v + 1], S.z = t[v + 2];
    }
    function _() {
      const T = new P(), S = new P(), v = new P(), A = new P(), w = new ee(), C = new ee(), g = new ee();
      for (let E = 0, F = 0; E < s.length; E += 9, F += 6) {
        T.set(s[E + 0], s[E + 1], s[E + 2]), S.set(s[E + 3], s[E + 4], s[E + 5]), v.set(s[E + 6], s[E + 7], s[E + 8]), w.set(a[F + 0], a[F + 1]), C.set(a[F + 2], a[F + 3]), g.set(a[F + 4], a[F + 5]), A.copy(T).add(S).add(v).divideScalar(3);
        const R = m(A);
        M(w, F + 0, T, R), M(C, F + 2, S, R), M(g, F + 4, v, R);
      }
    }
    function M(T, S, v, A) {
      A < 0 && T.x === 1 && (a[S] = T.x - 1), v.x === 0 && v.z === 0 && (a[S] = A / 2 / Math.PI + 0.5);
    }
    function m(T) {
      return Math.atan2(T.z, -T.x);
    }
    function p(T) {
      return Math.atan2(-T.y, Math.sqrt(T.x * T.x + T.z * T.z));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Bl(t.vertices, t.indices, t.radius, t.detail);
  }
}, Mi = class {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
  }
  getPoint() {
    Ge("Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getPoint(i, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let i, n = this.getPoint(0), r = 0;
    t.push(0);
    for (let s = 1; s <= e; s++)
      i = this.getPoint(s / e), r += i.distanceTo(n), t.push(r), n = i;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const i = this.getLengths();
    let n = 0;
    const r = i.length;
    let s;
    t ? s = t : s = e * i[r - 1];
    let a = 0, o = r - 1, l;
    for (; a <= o; )
      if (n = Math.floor(a + (o - a) / 2), l = i[n] - s, l < 0) a = n + 1;
      else if (l > 0) o = n - 1;
      else {
        o = n;
        break;
      }
    if (n = o, i[n] === s) return n / (r - 1);
    const c = i[n], h = i[n + 1] - c, d = (s - c) / h;
    return (n + d) / (r - 1);
  }
  getTangent(e, t) {
    let n = e - 1e-4, r = e + 1e-4;
    n < 0 && (n = 0), r > 1 && (r = 1);
    const s = this.getPoint(n), a = this.getPoint(r), o = t || (s.isVector2 ? new ee() : new P());
    return o.copy(a).sub(s).normalize(), o;
  }
  getTangentAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getTangent(i, t);
  }
  computeFrenetFrames(e, t = !1) {
    const i = new P(), n = [], r = [], s = [], a = new P(), o = new dt();
    for (let u = 0; u <= e; u++) {
      const f = u / e;
      n[u] = this.getTangentAt(f, new P());
    }
    r[0] = new P(), s[0] = new P();
    let l = Number.MAX_VALUE;
    const c = Math.abs(n[0].x), h = Math.abs(n[0].y), d = Math.abs(n[0].z);
    c <= l && (l = c, i.set(1, 0, 0)), h <= l && (l = h, i.set(0, 1, 0)), d <= l && i.set(0, 0, 1), a.crossVectors(n[0], i).normalize(), r[0].crossVectors(n[0], a), s[0].crossVectors(n[0], r[0]);
    for (let u = 1; u <= e; u++) {
      if (r[u] = r[u - 1].clone(), s[u] = s[u - 1].clone(), a.crossVectors(n[u - 1], n[u]), a.length() > Number.EPSILON) {
        a.normalize();
        const f = Math.acos(je(n[u - 1].dot(n[u]), -1, 1));
        r[u].applyMatrix4(o.makeRotationAxis(a, f));
      }
      s[u].crossVectors(n[u], r[u]);
    }
    if (t === !0) {
      let u = Math.acos(je(r[0].dot(r[e]), -1, 1));
      u /= e, n[0].dot(a.crossVectors(r[0], r[e])) > 0 && (u = -u);
      for (let f = 1; f <= e; f++)
        r[f].applyMatrix4(o.makeRotationAxis(n[f], u * f)), s[f].crossVectors(n[f], r[f]);
    }
    return {
      tangents: n,
      normals: r,
      binormals: s
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = { metadata: {
      version: 4.7,
      type: "Curve",
      generator: "Curve.toJSON"
    } };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}, Ta = class extends Mi {
  constructor(e = 0, t = 0, i = 1, n = 1, r = 0, s = Math.PI * 2, a = !1, o = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
  }
  getPoint(e, t = new ee()) {
    const i = t, n = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const s = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += n;
    for (; r > n; ) r -= n;
    r < Number.EPSILON && (s ? r = 0 : r = n), this.aClockwise === !0 && !s && (r === n ? r = -n : r = r - n);
    const a = this.aStartAngle + e * r;
    let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const c = Math.cos(this.aRotation), h = Math.sin(this.aRotation), d = o - this.aX, u = l - this.aY;
      o = d * c - u * h + this.aX, l = d * h + u * c + this.aY;
    }
    return i.set(o, l);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}, du = class extends Ta {
  constructor(e, t, i, n, r, s) {
    super(e, t, i, i, n, r, s), this.isArcCurve = !0, this.type = "ArcCurve";
  }
};
function wa() {
  let e = 0, t = 0, i = 0, n = 0;
  function r(s, a, o, l) {
    e = s, t = o, i = -3 * s + 3 * a - 2 * o - l, n = 2 * s - 2 * a + o + l;
  }
  return {
    initCatmullRom: function(s, a, o, l, c) {
      r(a, o, c * (o - s), c * (l - a));
    },
    initNonuniformCatmullRom: function(s, a, o, l, c, h, d) {
      let u = (a - s) / c - (o - s) / (c + h) + (o - a) / h, f = (o - a) / h - (l - a) / (h + d) + (l - o) / d;
      u *= h, f *= h, r(a, o, u, f);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return e + t * s + i * a + n * o;
    }
  };
}
var fo = /* @__PURE__ */ new P(), po = /* @__PURE__ */ new P(), Ks = /* @__PURE__ */ new wa(), Js = /* @__PURE__ */ new wa(), $s = /* @__PURE__ */ new wa(), Ms = class extends Mi {
  constructor(e = [], t = !1, i = "centripetal", n = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = i, this.tension = n;
  }
  getPoint(e, t = new P()) {
    const i = t, n = this.points, r = n.length, s = (r - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(s), o = s - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : o === 0 && a === r - 1 && (a = r - 2, o = 1);
    let l, c;
    this.closed || a > 0 ? l = n[(a - 1) % r] : (po.subVectors(n[0], n[1]).add(n[0]), l = po);
    const h = n[a % r], d = n[(a + 1) % r];
    if (this.closed || a + 2 < r ? c = n[(a + 2) % r] : (fo.subVectors(n[r - 1], n[r - 2]).add(n[r - 1]), c = fo), this.curveType === "centripetal" || this.curveType === "chordal") {
      const u = this.curveType === "chordal" ? 0.5 : 0.25;
      let f = Math.pow(l.distanceToSquared(h), u), _ = Math.pow(h.distanceToSquared(d), u), M = Math.pow(d.distanceToSquared(c), u);
      _ < 1e-4 && (_ = 1), f < 1e-4 && (f = _), M < 1e-4 && (M = _), Ks.initNonuniformCatmullRom(l.x, h.x, d.x, c.x, f, _, M), Js.initNonuniformCatmullRom(l.y, h.y, d.y, c.y, f, _, M), $s.initNonuniformCatmullRom(l.z, h.z, d.z, c.z, f, _, M);
    } else this.curveType === "catmullrom" && (Ks.initCatmullRom(l.x, h.x, d.x, c.x, this.tension), Js.initCatmullRom(l.y, h.y, d.y, c.y, this.tension), $s.initCatmullRom(l.z, h.z, d.z, c.z, this.tension));
    return i.set(Ks.calc(o), Js.calc(o), $s.calc(o)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const n = e.points[t];
      this.points.push(n.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const n = this.points[t];
      e.points.push(n.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const n = e.points[t];
      this.points.push(new P().fromArray(n));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
};
function mo(e, t, i, n, r) {
  const s = (n - t) * 0.5, a = (r - i) * 0.5, o = e * e, l = e * o;
  return (2 * i - 2 * n + s + a) * l + (-3 * i + 3 * n - 2 * s - a) * o + s * e + i;
}
function fu(e, t) {
  const i = 1 - e;
  return i * i * t;
}
function pu(e, t) {
  return 2 * (1 - e) * e * t;
}
function mu(e, t) {
  return e * e * t;
}
function ur(e, t, i, n) {
  return fu(e, t) + pu(e, i) + mu(e, n);
}
function gu(e, t) {
  const i = 1 - e;
  return i * i * i * t;
}
function vu(e, t) {
  const i = 1 - e;
  return 3 * i * i * e * t;
}
function _u(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function Mu(e, t) {
  return e * e * e * t;
}
function dr(e, t, i, n, r) {
  return gu(e, t) + vu(e, i) + _u(e, n) + Mu(e, r);
}
var zl = class extends Mi {
  constructor(e = new ee(), t = new ee(), i = new ee(), n = new ee()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = n;
  }
  getPoint(e, t = new ee()) {
    const i = t, n = this.v0, r = this.v1, s = this.v2, a = this.v3;
    return i.set(dr(e, n.x, r.x, s.x, a.x), dr(e, n.y, r.y, s.y, a.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}, yu = class extends Mi {
  constructor(e = new P(), t = new P(), i = new P(), n = new P()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = n;
  }
  getPoint(e, t = new P()) {
    const i = t, n = this.v0, r = this.v1, s = this.v2, a = this.v3;
    return i.set(dr(e, n.x, r.x, s.x, a.x), dr(e, n.y, r.y, s.y, a.y), dr(e, n.z, r.z, s.z, a.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}, Vl = class extends Mi {
  constructor(e = new ee(), t = new ee()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new ee()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new ee()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}, xu = class extends Mi {
  constructor(e = new P(), t = new P()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new P()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new P()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}, Gl = class extends Mi {
  constructor(e = new ee(), t = new ee(), i = new ee()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new ee()) {
    const i = t, n = this.v0, r = this.v1, s = this.v2;
    return i.set(ur(e, n.x, r.x, s.x), ur(e, n.y, r.y, s.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}, Hl = class extends Mi {
  constructor(e = new P(), t = new P(), i = new P()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new P()) {
    const i = t, n = this.v0, r = this.v1, s = this.v2;
    return i.set(ur(e, n.x, r.x, s.x), ur(e, n.y, r.y, s.y), ur(e, n.z, r.z, s.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}, kl = class extends Mi {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new ee()) {
    const i = t, n = this.points, r = (n.length - 1) * e, s = Math.floor(r), a = r - s, o = n[s === 0 ? s : s - 1], l = n[s], c = n[s > n.length - 2 ? n.length - 1 : s + 1], h = n[s > n.length - 3 ? n.length - 1 : s + 2];
    return i.set(mo(a, o.x, l.x, c.x, h.x), mo(a, o.y, l.y, c.y, h.y)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const n = e.points[t];
      this.points.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const n = this.points[t];
      e.points.push(n.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const n = e.points[t];
      this.points.push(new ee().fromArray(n));
    }
    return this;
  }
}, vs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: du,
  CatmullRomCurve3: Ms,
  CubicBezierCurve: zl,
  CubicBezierCurve3: yu,
  EllipseCurve: Ta,
  LineCurve: Vl,
  LineCurve3: xu,
  QuadraticBezierCurve: Gl,
  QuadraticBezierCurve3: Hl,
  SplineCurve: kl
}), Su = class extends Mi {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const i = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new vs[i](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const i = e * this.getLength(), n = this.getCurveLengths();
    let r = 0;
    for (; r < n.length; ) {
      if (n[r] >= i) {
        const s = n[r] - i, a = this.curves[r], o = a.getLength(), l = o === 0 ? 0 : 1 - s / o;
        return a.getPointAt(l, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let i = 0, n = this.curves.length; i < n; i++)
      t += this.curves[i].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let i;
    for (let n = 0, r = this.curves; n < r.length; n++) {
      const s = r[n], a = s.isEllipseCurve ? e * 2 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? e * s.points.length : e, o = s.getPoints(a);
      for (let l = 0; l < o.length; l++) {
        const c = o[l];
        i && i.equals(c) || (t.push(c), i = c);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const n = e.curves[t];
      this.curves.push(n.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, i = this.curves.length; t < i; t++) {
      const n = this.curves[t];
      e.curves.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const n = e.curves[t];
      this.curves.push(new vs[n.type]().fromJSON(n));
    }
    return this;
  }
}, go = class extends Su {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new ee(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const i = new Vl(this.currentPoint.clone(), new ee(e, t));
    return this.curves.push(i), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, i, n) {
    const r = new Gl(this.currentPoint.clone(), new ee(e, t), new ee(i, n));
    return this.curves.push(r), this.currentPoint.set(i, n), this;
  }
  bezierCurveTo(e, t, i, n, r, s) {
    const a = new zl(this.currentPoint.clone(), new ee(e, t), new ee(i, n), new ee(r, s));
    return this.curves.push(a), this.currentPoint.set(r, s), this;
  }
  splineThru(e) {
    const t = new kl([this.currentPoint.clone()].concat(e));
    return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, i, n, r, s) {
    const a = this.currentPoint.x, o = this.currentPoint.y;
    return this.absarc(e + a, t + o, i, n, r, s), this;
  }
  absarc(e, t, i, n, r, s) {
    return this.absellipse(e, t, i, i, n, r, s), this;
  }
  ellipse(e, t, i, n, r, s, a, o) {
    const l = this.currentPoint.x, c = this.currentPoint.y;
    return this.absellipse(e + l, t + c, i, n, r, s, a, o), this;
  }
  absellipse(e, t, i, n, r, s, a, o) {
    const l = new Ta(e, t, i, n, r, s, a, o);
    if (this.curves.length > 0) {
      const h = l.getPoint(0);
      h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
    }
    this.curves.push(l);
    const c = l.getPoint(1);
    return this.currentPoint.copy(c), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}, Wl = class extends go {
  constructor(e) {
    super(e), this.uuid = vi(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let i = 0, n = this.holes.length; i < n; i++) t[i] = this.holes[i].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const n = e.holes[t];
      this.holes.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, i = this.holes.length; t < i; t++) {
      const n = this.holes[t];
      e.holes.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const n = e.holes[t];
      this.holes.push(new go().fromJSON(n));
    }
    return this;
  }
};
function Eu(e, t, i = 2) {
  const n = t && t.length, r = n ? t[0] * i : e.length;
  let s = Xl(e, 0, r, i, !0);
  const a = [];
  if (!s || s.next === s.prev) return a;
  let o, l, c;
  if (n && (s = Ru(e, t, s, i)), e.length > 80 * i) {
    o = e[0], l = e[1];
    let h = o, d = l;
    for (let u = i; u < r; u += i) {
      const f = e[u], _ = e[u + 1];
      f < o && (o = f), _ < l && (l = _), f > h && (h = f), _ > d && (d = _);
    }
    c = Math.max(h - o, d - l), c = c !== 0 ? 32767 / c : 0;
  }
  return gr(s, a, i, o, l, c, 0), a;
}
function Xl(e, t, i, n, r) {
  let s;
  if (r === zu(e, t, i, n) > 0) for (let a = t; a < i; a += n) s = vo(a / n | 0, e[a], e[a + 1], s);
  else for (let a = i - n; a >= t; a -= n) s = vo(a / n | 0, e[a], e[a + 1], s);
  return s && Wn(s, s.next) && (_r(s), s = s.next), s;
}
function nn(e, t) {
  if (!e) return e;
  t || (t = e);
  let i = e, n;
  do
    if (n = !1, !i.steiner && (Wn(i, i.next) || Mt(i.prev, i, i.next) === 0)) {
      if (_r(i), i = t = i.prev, i === i.next) break;
      n = !0;
    } else i = i.next;
  while (n || i !== t);
  return t;
}
function gr(e, t, i, n, r, s, a) {
  if (!e) return;
  !a && s && Du(e, n, r, s);
  let o = e;
  for (; e.prev !== e.next; ) {
    const l = e.prev, c = e.next;
    if (s ? Tu(e, n, r, s) : bu(e)) {
      t.push(l.i, e.i, c.i), _r(e), e = c.next, o = c.next;
      continue;
    }
    if (e = c, e === o) {
      a ? a === 1 ? (e = wu(nn(e), t), gr(e, t, i, n, r, s, 2)) : a === 2 && Au(e, t, i, n, r, s) : gr(nn(e), t, i, n, r, s, 1);
      break;
    }
  }
}
function bu(e) {
  const t = e.prev, i = e, n = e.next;
  if (Mt(t, i, n) >= 0) return !1;
  const r = t.x, s = i.x, a = n.x, o = t.y, l = i.y, c = n.y, h = Math.min(r, s, a), d = Math.min(o, l, c), u = Math.max(r, s, a), f = Math.max(o, l, c);
  let _ = n.next;
  for (; _ !== t; ) {
    if (_.x >= h && _.x <= u && _.y >= d && _.y <= f && or(r, o, s, l, a, c, _.x, _.y) && Mt(_.prev, _, _.next) >= 0) return !1;
    _ = _.next;
  }
  return !0;
}
function Tu(e, t, i, n) {
  const r = e.prev, s = e, a = e.next;
  if (Mt(r, s, a) >= 0) return !1;
  const o = r.x, l = s.x, c = a.x, h = r.y, d = s.y, u = a.y, f = Math.min(o, l, c), _ = Math.min(h, d, u), M = Math.max(o, l, c), m = Math.max(h, d, u), p = pa(f, _, t, i, n), T = pa(M, m, t, i, n);
  let S = e.prevZ, v = e.nextZ;
  for (; S && S.z >= p && v && v.z <= T; ) {
    if (S.x >= f && S.x <= M && S.y >= _ && S.y <= m && S !== r && S !== a && or(o, h, l, d, c, u, S.x, S.y) && Mt(S.prev, S, S.next) >= 0 || (S = S.prevZ, v.x >= f && v.x <= M && v.y >= _ && v.y <= m && v !== r && v !== a && or(o, h, l, d, c, u, v.x, v.y) && Mt(v.prev, v, v.next) >= 0)) return !1;
    v = v.nextZ;
  }
  for (; S && S.z >= p; ) {
    if (S.x >= f && S.x <= M && S.y >= _ && S.y <= m && S !== r && S !== a && or(o, h, l, d, c, u, S.x, S.y) && Mt(S.prev, S, S.next) >= 0) return !1;
    S = S.prevZ;
  }
  for (; v && v.z <= T; ) {
    if (v.x >= f && v.x <= M && v.y >= _ && v.y <= m && v !== r && v !== a && or(o, h, l, d, c, u, v.x, v.y) && Mt(v.prev, v, v.next) >= 0) return !1;
    v = v.nextZ;
  }
  return !0;
}
function wu(e, t) {
  let i = e;
  do {
    const n = i.prev, r = i.next.next;
    !Wn(n, r) && ql(n, i, i.next, r) && vr(n, r) && vr(r, n) && (t.push(n.i, i.i, r.i), _r(i), _r(i.next), i = e = r), i = i.next;
  } while (i !== e);
  return nn(i);
}
function Au(e, t, i, n, r, s) {
  let a = e;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && Ou(a, o)) {
        let l = Zl(a, o);
        a = nn(a, a.next), l = nn(l, l.next), gr(a, t, i, n, r, s, 0), gr(l, t, i, n, r, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== e);
}
function Ru(e, t, i, n) {
  const r = [];
  for (let s = 0, a = t.length; s < a; s++) {
    const o = Xl(e, t[s] * n, s < a - 1 ? t[s + 1] * n : e.length, n, !1);
    o === o.next && (o.steiner = !0), r.push(Uu(o));
  }
  r.sort(Cu);
  for (let s = 0; s < r.length; s++) i = Pu(r[s], i);
  return i;
}
function Cu(e, t) {
  let i = e.x - t.x;
  return i === 0 && (i = e.y - t.y, i === 0 && (i = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))), i;
}
function Pu(e, t) {
  const i = Lu(e, t);
  if (!i) return t;
  const n = Zl(i, e);
  return nn(n, n.next), nn(i, i.next);
}
function Lu(e, t) {
  let i = t;
  const n = e.x, r = e.y;
  let s = -1 / 0, a;
  if (Wn(e, i)) return i;
  do {
    if (Wn(e, i.next)) return i.next;
    if (r <= i.y && r >= i.next.y && i.next.y !== i.y) {
      const d = i.x + (r - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
      if (d <= n && d > s && (s = d, a = i.x < i.next.x ? i : i.next, d === n))
        return a;
    }
    i = i.next;
  } while (i !== t);
  if (!a) return null;
  const o = a, l = a.x, c = a.y;
  let h = 1 / 0;
  i = a;
  do {
    if (n >= i.x && i.x >= l && n !== i.x && Yl(r < c ? n : s, r, l, c, r < c ? s : n, r, i.x, i.y)) {
      const d = Math.abs(r - i.y) / (n - i.x);
      vr(i, e) && (d < h || d === h && (i.x > a.x || i.x === a.x && Iu(a, i))) && (a = i, h = d);
    }
    i = i.next;
  } while (i !== o);
  return a;
}
function Iu(e, t) {
  return Mt(e.prev, e, t.prev) < 0 && Mt(t.next, e, e.next) < 0;
}
function Du(e, t, i, n) {
  let r = e;
  do
    r.z === 0 && (r.z = pa(r.x, r.y, t, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== e);
  r.prevZ.nextZ = null, r.prevZ = null, Nu(r);
}
function Nu(e) {
  let t, i = 1;
  do {
    let n = e, r;
    e = null;
    let s = null;
    for (t = 0; n; ) {
      t++;
      let a = n, o = 0;
      for (let c = 0; c < i && (o++, a = a.nextZ, !!a); c++)
        ;
      let l = i;
      for (; o > 0 || l > 0 && a; )
        o !== 0 && (l === 0 || !a || n.z <= a.z) ? (r = n, n = n.nextZ, o--) : (r = a, a = a.nextZ, l--), s ? s.nextZ = r : e = r, r.prevZ = s, s = r;
      n = a;
    }
    s.nextZ = null, i *= 2;
  } while (t > 1);
  return e;
}
function pa(e, t, i, n, r) {
  return e = (e - i) * r | 0, t = (t - n) * r | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function Uu(e) {
  let t = e, i = e;
  do
    (t.x < i.x || t.x === i.x && t.y < i.y) && (i = t), t = t.next;
  while (t !== e);
  return i;
}
function Yl(e, t, i, n, r, s, a, o) {
  return (r - a) * (t - o) >= (e - a) * (s - o) && (e - a) * (n - o) >= (i - a) * (t - o) && (i - a) * (s - o) >= (r - a) * (n - o);
}
function or(e, t, i, n, r, s, a, o) {
  return !(e === a && t === o) && Yl(e, t, i, n, r, s, a, o);
}
function Ou(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !Fu(e, t) && (vr(e, t) && vr(t, e) && Bu(e, t) && (Mt(e.prev, e, t.prev) || Mt(e, t.prev, t)) || Wn(e, t) && Mt(e.prev, e, e.next) > 0 && Mt(t.prev, t, t.next) > 0);
}
function Mt(e, t, i) {
  return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y);
}
function Wn(e, t) {
  return e.x === t.x && e.y === t.y;
}
function ql(e, t, i, n) {
  const r = Qr(Mt(e, t, i)), s = Qr(Mt(e, t, n)), a = Qr(Mt(i, n, e)), o = Qr(Mt(i, n, t));
  return !!(r !== s && a !== o || r === 0 && $r(e, i, t) || s === 0 && $r(e, n, t) || a === 0 && $r(i, e, n) || o === 0 && $r(i, t, n));
}
function $r(e, t, i) {
  return t.x <= Math.max(e.x, i.x) && t.x >= Math.min(e.x, i.x) && t.y <= Math.max(e.y, i.y) && t.y >= Math.min(e.y, i.y);
}
function Qr(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Fu(e, t) {
  let i = e;
  do {
    if (i.i !== e.i && i.next.i !== e.i && i.i !== t.i && i.next.i !== t.i && ql(i, i.next, e, t)) return !0;
    i = i.next;
  } while (i !== e);
  return !1;
}
function vr(e, t) {
  return Mt(e.prev, e, e.next) < 0 ? Mt(e, t, e.next) >= 0 && Mt(e, e.prev, t) >= 0 : Mt(e, t, e.prev) < 0 || Mt(e, e.next, t) < 0;
}
function Bu(e, t) {
  let i = e, n = !1;
  const r = (e.x + t.x) / 2, s = (e.y + t.y) / 2;
  do
    i.y > s != i.next.y > s && i.next.y !== i.y && r < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next;
  while (i !== e);
  return n;
}
function Zl(e, t) {
  const i = ma(e.i, e.x, e.y), n = ma(t.i, t.x, t.y), r = e.next, s = t.prev;
  return e.next = t, t.prev = e, i.next = r, r.prev = i, n.next = i, i.prev = n, s.next = n, n.prev = s, n;
}
function vo(e, t, i, n) {
  const r = ma(e, t, i);
  return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r;
}
function _r(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function ma(e, t, i) {
  return {
    i: e,
    x: t,
    y: i,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: !1
  };
}
function zu(e, t, i, n) {
  let r = 0;
  for (let s = t, a = i - n; s < i; s += n)
    r += (e[a] - e[s]) * (e[s + 1] + e[a + 1]), a = s;
  return r;
}
var Vu = class {
  static triangulate(e, t, i = 2) {
    return Eu(e, t, i);
  }
}, jr = class Kl {
  static area(t) {
    const i = t.length;
    let n = 0;
    for (let r = i - 1, s = 0; s < i; r = s++) n += t[r].x * t[s].y - t[s].x * t[r].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return Kl.area(t) < 0;
  }
  static triangulateShape(t, i) {
    const n = [], r = [], s = [];
    _o(t), Mo(n, t);
    let a = t.length;
    i.forEach(_o);
    for (let l = 0; l < i.length; l++)
      r.push(a), a += i[l].length, Mo(n, i[l]);
    const o = Vu.triangulate(n, r);
    for (let l = 0; l < o.length; l += 3) s.push(o.slice(l, l + 3));
    return s;
  }
};
function _o(e) {
  const t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function Mo(e, t) {
  for (let i = 0; i < t.length; i++)
    e.push(t[i].x), e.push(t[i].y);
}
var Gu = class Jl extends bt {
  constructor(t = new Wl([
    new ee(0.5, 0.5),
    new ee(-0.5, 0.5),
    new ee(-0.5, -0.5),
    new ee(0.5, -0.5)
  ]), i = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: i
    }, t = Array.isArray(t) ? t : [t];
    const n = this, r = [], s = [];
    for (let o = 0, l = t.length; o < l; o++) {
      const c = t[o];
      a(c);
    }
    this.setAttribute("position", new lt(r, 3)), this.setAttribute("uv", new lt(s, 2)), this.computeVertexNormals();
    function a(o) {
      const l = [], c = i.curveSegments !== void 0 ? i.curveSegments : 12, h = i.steps !== void 0 ? i.steps : 1, d = i.depth !== void 0 ? i.depth : 1;
      let u = i.bevelEnabled !== void 0 ? i.bevelEnabled : !0, f = i.bevelThickness !== void 0 ? i.bevelThickness : 0.2, _ = i.bevelSize !== void 0 ? i.bevelSize : f - 0.1, M = i.bevelOffset !== void 0 ? i.bevelOffset : 0, m = i.bevelSegments !== void 0 ? i.bevelSegments : 3;
      const p = i.extrudePath, T = i.UVGenerator !== void 0 ? i.UVGenerator : Hu;
      let S, v = !1, A, w, C, g;
      if (p) {
        S = p.getSpacedPoints(h), v = !0, u = !1;
        const Q = p.isCatmullRomCurve3 ? p.closed : !1;
        A = p.computeFrenetFrames(h, Q), w = new P(), C = new P(), g = new P();
      }
      u || (m = 0, f = 0, _ = 0, M = 0);
      const E = o.extractPoints(c);
      let F = E.shape;
      const R = E.holes;
      if (!jr.isClockWise(F)) {
        F = F.reverse();
        for (let Q = 0, le = R.length; Q < le; Q++) {
          const pe = R[Q];
          jr.isClockWise(pe) && (R[Q] = pe.reverse());
        }
      }
      function V(Q) {
        const pe = 10000000000000001e-36;
        let Ee = Q[0];
        for (let Te = 1; Te <= Q.length; Te++) {
          const De = Te % Q.length, Ue = Q[De], Xe = Ue.x - Ee.x, Ze = Ue.y - Ee.y, I = Xe * Xe + Ze * Ze, mt = Math.max(Math.abs(Ue.x), Math.abs(Ue.y), Math.abs(Ee.x), Math.abs(Ee.y));
          if (I <= pe * mt * mt) {
            Q.splice(De, 1), Te--;
            continue;
          }
          Ee = Ue;
        }
      }
      V(F), R.forEach(V);
      const Z = R.length, G = F;
      for (let Q = 0; Q < Z; Q++) {
        const le = R[Q];
        F = F.concat(le);
      }
      function X(Q, le, pe) {
        return le || ke("ExtrudeGeometry: vec does not exist"), Q.clone().addScaledVector(le, pe);
      }
      const H = F.length;
      function B(Q, le, pe) {
        let Ee, Te, De;
        const Ue = Q.x - le.x, Xe = Q.y - le.y, Ze = pe.x - Q.x, I = pe.y - Q.y, mt = Ue * Ue + Xe * Xe, it = Ue * I - Xe * Ze;
        if (Math.abs(it) > Number.EPSILON) {
          const et = Math.sqrt(mt), b = Math.sqrt(Ze * Ze + I * I), y = le.x - Xe / et, D = le.y + Ue / et, Y = pe.x - I / b, j = pe.y + Ze / b, ce = ((Y - y) * I - (j - D) * Ze) / (Ue * I - Xe * Ze);
          Ee = y + Ue * ce - Q.x, Te = D + Xe * ce - Q.y;
          const ge = Ee * Ee + Te * Te;
          if (ge <= 2) return new ee(Ee, Te);
          De = Math.sqrt(ge / 2);
        } else {
          let et = !1;
          Ue > Number.EPSILON ? Ze > Number.EPSILON && (et = !0) : Ue < -Number.EPSILON ? Ze < -Number.EPSILON && (et = !0) : Math.sign(Xe) === Math.sign(I) && (et = !0), et ? (Ee = -Xe, Te = Ue, De = Math.sqrt(mt)) : (Ee = Ue, Te = Xe, De = Math.sqrt(mt / 2));
        }
        return new ee(Ee / De, Te / De);
      }
      const ae = [];
      for (let Q = 0, le = G.length, pe = le - 1, Ee = Q + 1; Q < le; Q++, pe++, Ee++)
        pe === le && (pe = 0), Ee === le && (Ee = 0), ae[Q] = B(G[Q], G[pe], G[Ee]);
      const ie = [];
      let oe, de = ae.concat();
      for (let Q = 0, le = Z; Q < le; Q++) {
        const pe = R[Q];
        oe = [];
        for (let Ee = 0, Te = pe.length, De = Te - 1, Ue = Ee + 1; Ee < Te; Ee++, De++, Ue++)
          De === Te && (De = 0), Ue === Te && (Ue = 0), oe[Ee] = B(pe[Ee], pe[De], pe[Ue]);
        ie.push(oe), de = de.concat(oe);
      }
      let Re;
      if (m === 0) Re = jr.triangulateShape(G, R);
      else {
        const Q = [], le = [];
        for (let pe = 0; pe < m; pe++) {
          const Ee = pe / m, Te = f * Math.cos(Ee * Math.PI / 2), De = _ * Math.sin(Ee * Math.PI / 2) + M;
          for (let Ue = 0, Xe = G.length; Ue < Xe; Ue++) {
            const Ze = X(G[Ue], ae[Ue], De);
            me(Ze.x, Ze.y, -Te), Ee === 0 && Q.push(Ze);
          }
          for (let Ue = 0, Xe = Z; Ue < Xe; Ue++) {
            const Ze = R[Ue];
            oe = ie[Ue];
            const I = [];
            for (let mt = 0, it = Ze.length; mt < it; mt++) {
              const et = X(Ze[mt], oe[mt], De);
              me(et.x, et.y, -Te), Ee === 0 && I.push(et);
            }
            Ee === 0 && le.push(I);
          }
        }
        Re = jr.triangulateShape(Q, le);
      }
      const rt = Re.length, We = _ + M;
      for (let Q = 0; Q < H; Q++) {
        const le = u ? X(F[Q], de[Q], We) : F[Q];
        v ? (C.copy(A.normals[0]).multiplyScalar(le.x), w.copy(A.binormals[0]).multiplyScalar(le.y), g.copy(S[0]).add(C).add(w), me(g.x, g.y, g.z)) : me(le.x, le.y, 0);
      }
      for (let Q = 1; Q <= h; Q++) for (let le = 0; le < H; le++) {
        const pe = u ? X(F[le], de[le], We) : F[le];
        v ? (C.copy(A.normals[Q]).multiplyScalar(pe.x), w.copy(A.binormals[Q]).multiplyScalar(pe.y), g.copy(S[Q]).add(C).add(w), me(g.x, g.y, g.z)) : me(pe.x, pe.y, d / h * Q);
      }
      for (let Q = m - 1; Q >= 0; Q--) {
        const le = Q / m, pe = f * Math.cos(le * Math.PI / 2), Ee = _ * Math.sin(le * Math.PI / 2) + M;
        for (let Te = 0, De = G.length; Te < De; Te++) {
          const Ue = X(G[Te], ae[Te], Ee);
          me(Ue.x, Ue.y, d + pe);
        }
        for (let Te = 0, De = R.length; Te < De; Te++) {
          const Ue = R[Te];
          oe = ie[Te];
          for (let Xe = 0, Ze = Ue.length; Xe < Ze; Xe++) {
            const I = X(Ue[Xe], oe[Xe], Ee);
            v ? me(I.x, I.y + S[h - 1].y, S[h - 1].x + pe) : me(I.x, I.y, d + pe);
          }
        }
      }
      J(), ue();
      function J() {
        const Q = r.length / 3;
        if (u) {
          let le = 0, pe = H * le;
          for (let Ee = 0; Ee < rt; Ee++) {
            const Te = Re[Ee];
            Oe(Te[2] + pe, Te[1] + pe, Te[0] + pe);
          }
          le = h + m * 2, pe = H * le;
          for (let Ee = 0; Ee < rt; Ee++) {
            const Te = Re[Ee];
            Oe(Te[0] + pe, Te[1] + pe, Te[2] + pe);
          }
        } else {
          for (let le = 0; le < rt; le++) {
            const pe = Re[le];
            Oe(pe[2], pe[1], pe[0]);
          }
          for (let le = 0; le < rt; le++) {
            const pe = Re[le];
            Oe(pe[0] + H * h, pe[1] + H * h, pe[2] + H * h);
          }
        }
        n.addGroup(Q, r.length / 3 - Q, 0);
      }
      function ue() {
        const Q = r.length / 3;
        let le = 0;
        Me(G, le), le += G.length;
        for (let pe = 0, Ee = R.length; pe < Ee; pe++) {
          const Te = R[pe];
          Me(Te, le), le += Te.length;
        }
        n.addGroup(Q, r.length / 3 - Q, 1);
      }
      function Me(Q, le) {
        let pe = Q.length;
        for (; --pe >= 0; ) {
          const Ee = pe;
          let Te = pe - 1;
          Te < 0 && (Te = Q.length - 1);
          for (let De = 0, Ue = h + m * 2; De < Ue; De++) {
            const Xe = H * De, Ze = H * (De + 1);
            ze(le + Ee + Xe, le + Te + Xe, le + Te + Ze, le + Ee + Ze);
          }
        }
      }
      function me(Q, le, pe) {
        l.push(Q), l.push(le), l.push(pe);
      }
      function Oe(Q, le, pe) {
        Ne(Q), Ne(le), Ne(pe);
        const Ee = r.length / 3, Te = T.generateTopUV(n, r, Ee - 3, Ee - 2, Ee - 1);
        qe(Te[0]), qe(Te[1]), qe(Te[2]);
      }
      function ze(Q, le, pe, Ee) {
        Ne(Q), Ne(le), Ne(Ee), Ne(le), Ne(pe), Ne(Ee);
        const Te = r.length / 3, De = T.generateSideWallUV(n, r, Te - 6, Te - 3, Te - 2, Te - 1);
        qe(De[0]), qe(De[1]), qe(De[3]), qe(De[1]), qe(De[2]), qe(De[3]);
      }
      function Ne(Q) {
        r.push(l[Q * 3 + 0]), r.push(l[Q * 3 + 1]), r.push(l[Q * 3 + 2]);
      }
      function qe(Q) {
        s.push(Q.x), s.push(Q.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), i = this.parameters.shapes, n = this.parameters.options;
    return ku(i, n, t);
  }
  static fromJSON(t, i) {
    const n = [];
    for (let s = 0, a = t.shapes.length; s < a; s++) {
      const o = i[t.shapes[s]];
      n.push(o);
    }
    const r = t.options.extrudePath;
    return r !== void 0 && (t.options.extrudePath = new vs[r.type]().fromJSON(r)), new Jl(n, t.options);
  }
}, Hu = {
  generateTopUV: function(e, t, i, n, r) {
    const s = t[i * 3], a = t[i * 3 + 1], o = t[n * 3], l = t[n * 3 + 1], c = t[r * 3], h = t[r * 3 + 1];
    return [
      new ee(s, a),
      new ee(o, l),
      new ee(c, h)
    ];
  },
  generateSideWallUV: function(e, t, i, n, r, s) {
    const a = t[i * 3], o = t[i * 3 + 1], l = t[i * 3 + 2], c = t[n * 3], h = t[n * 3 + 1], d = t[n * 3 + 2], u = t[r * 3], f = t[r * 3 + 1], _ = t[r * 3 + 2], M = t[s * 3], m = t[s * 3 + 1], p = t[s * 3 + 2];
    return Math.abs(o - h) < Math.abs(a - c) ? [
      new ee(a, 1 - l),
      new ee(c, 1 - d),
      new ee(u, 1 - _),
      new ee(M, 1 - p)
    ] : [
      new ee(o, 1 - l),
      new ee(h, 1 - d),
      new ee(f, 1 - _),
      new ee(m, 1 - p)
    ];
  }
};
function ku(e, t, i) {
  if (i.shapes = [], Array.isArray(e)) for (let n = 0, r = e.length; n < r; n++) {
    const s = e[n];
    i.shapes.push(s.uuid);
  }
  else i.shapes.push(e.uuid);
  return i.options = Object.assign({}, t), t.extrudePath !== void 0 && (i.options.extrudePath = t.extrudePath.toJSON()), i;
}
var Wu = class $l extends uu {
  constructor(t = 1, i = 0) {
    const n = (1 + Math.sqrt(5)) / 2, r = [
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      0,
      0,
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      n,
      0,
      -1,
      n,
      0,
      1,
      -n,
      0,
      -1,
      -n,
      0,
      1
    ];
    super(r, [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ], t, i), this.type = "IcosahedronGeometry", this.parameters = {
      radius: t,
      detail: i
    };
  }
  static fromJSON(t) {
    return new $l(t.radius, t.detail);
  }
}, yo = class Ql extends bt {
  constructor(t = [
    new ee(0, -0.5),
    new ee(0.5, 0),
    new ee(0, 0.5)
  ], i = 12, n = 0, r = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: i,
      phiStart: n,
      phiLength: r
    }, i = Math.floor(i), r = je(r, 0, Math.PI * 2);
    const s = [], a = [], o = [], l = [], c = [], h = 1 / i, d = new P(), u = new ee(), f = new P(), _ = new P(), M = new P();
    let m = 0, p = 0;
    for (let T = 0; T <= t.length - 1; T++) switch (T) {
      case 0:
        m = t[T + 1].x - t[T].x, p = t[T + 1].y - t[T].y, f.x = p * 1, f.y = -m, f.z = p * 0, M.copy(f), f.normalize(), l.push(f.x, f.y, f.z);
        break;
      case t.length - 1:
        l.push(M.x, M.y, M.z);
        break;
      default:
        m = t[T + 1].x - t[T].x, p = t[T + 1].y - t[T].y, f.x = p * 1, f.y = -m, f.z = p * 0, _.copy(f), f.x += M.x, f.y += M.y, f.z += M.z, f.normalize(), l.push(f.x, f.y, f.z), M.copy(_);
    }
    for (let T = 0; T <= i; T++) {
      const S = n + T * h * r, v = Math.sin(S), A = Math.cos(S);
      for (let w = 0; w <= t.length - 1; w++) {
        d.x = t[w].x * v, d.y = t[w].y, d.z = t[w].x * A, a.push(d.x, d.y, d.z), u.x = T / i, u.y = w / (t.length - 1), o.push(u.x, u.y);
        const C = l[3 * w + 0] * v, g = l[3 * w + 1], E = l[3 * w + 0] * A;
        c.push(C, g, E);
      }
    }
    for (let T = 0; T < i; T++) for (let S = 0; S < t.length - 1; S++) {
      const v = S + T * t.length, A = v, w = v + t.length, C = v + t.length + 1, g = v + 1;
      s.push(A, w, g), s.push(C, g, w);
    }
    this.setIndex(s), this.setAttribute("position", new lt(a, 3)), this.setAttribute("uv", new lt(o, 2)), this.setAttribute("normal", new lt(c, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ql(t.points, t.segments, t.phiStart, t.phiLength);
  }
}, _s = class jl extends bt {
  constructor(t = 1, i = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: i,
      widthSegments: n,
      heightSegments: r
    };
    const s = t / 2, a = i / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, h = l + 1, d = t / o, u = i / l, f = [], _ = [], M = [], m = [];
    for (let p = 0; p < h; p++) {
      const T = p * u - a;
      for (let S = 0; S < c; S++) {
        const v = S * d - s;
        _.push(v, -T, 0), M.push(0, 0, 1), m.push(S / o), m.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let T = 0; T < o; T++) {
      const S = T + c * p, v = T + c * (p + 1), A = T + 1 + c * (p + 1), w = T + 1 + c * p;
      f.push(S, v, w), f.push(v, A, w);
    }
    this.setIndex(f), this.setAttribute("position", new lt(_, 3)), this.setAttribute("normal", new lt(M, 3)), this.setAttribute("uv", new lt(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new jl(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}, Bn = class ec extends bt {
  constructor(t = 1, i = 32, n = 16, r = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: i,
      heightSegments: n,
      phiStart: r,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, i = Math.max(3, Math.floor(i)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [], d = new P(), u = new P(), f = [], _ = [], M = [], m = [];
    for (let p = 0; p <= n; p++) {
      const T = [], S = p / n, v = a + S * o, A = t * Math.cos(v), w = Math.sqrt(t * t - A * A);
      let C = 0;
      p === 0 && a === 0 ? C = 0.5 / i : p === n && l === Math.PI && (C = -0.5 / i);
      for (let g = 0; g <= i; g++) {
        const E = g / i, F = r + E * s;
        d.x = -w * Math.cos(F), d.y = A, d.z = w * Math.sin(F), _.push(d.x, d.y, d.z), u.copy(d).normalize(), M.push(u.x, u.y, u.z), m.push(E + C, 1 - S), T.push(c++);
      }
      h.push(T);
    }
    for (let p = 0; p < n; p++) for (let T = 0; T < i; T++) {
      const S = h[p][T + 1], v = h[p][T], A = h[p + 1][T], w = h[p + 1][T + 1];
      (p !== 0 || a > 0) && f.push(S, v, w), (p !== n - 1 || l < Math.PI) && f.push(v, A, w);
    }
    this.setIndex(f), this.setAttribute("position", new lt(_, 3)), this.setAttribute("normal", new lt(M, 3)), this.setAttribute("uv", new lt(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ec(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}, tc = class ic extends bt {
  constructor(t = 1, i = 0.4, n = 12, r = 48, s = Math.PI * 2, a = 0, o = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: i,
      radialSegments: n,
      tubularSegments: r,
      arc: s,
      thetaStart: a,
      thetaLength: o
    }, n = Math.floor(n), r = Math.floor(r);
    const l = [], c = [], h = [], d = [], u = new P(), f = new P(), _ = new P();
    for (let M = 0; M <= n; M++) {
      const m = a + M / n * o;
      for (let p = 0; p <= r; p++) {
        const T = p / r * s;
        f.x = (t + i * Math.cos(m)) * Math.cos(T), f.y = (t + i * Math.cos(m)) * Math.sin(T), f.z = i * Math.sin(m), c.push(f.x, f.y, f.z), u.x = t * Math.cos(T), u.y = t * Math.sin(T), _.subVectors(f, u).normalize(), h.push(_.x, _.y, _.z), d.push(p / r), d.push(M / n);
      }
    }
    for (let M = 1; M <= n; M++) for (let m = 1; m <= r; m++) {
      const p = (r + 1) * M + m - 1, T = (r + 1) * (M - 1) + m - 1, S = (r + 1) * (M - 1) + m, v = (r + 1) * M + m;
      l.push(p, T, v), l.push(T, S, v);
    }
    this.setIndex(l), this.setAttribute("position", new lt(c, 3)), this.setAttribute("normal", new lt(h, 3)), this.setAttribute("uv", new lt(d, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ic(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}, nc = class rc extends bt {
  constructor(t = new Hl(new P(-1, -1, 0), new P(-1, 1, 0), new P(1, 1, 0)), i = 64, n = 1, r = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: i,
      radius: n,
      radialSegments: r,
      closed: s
    };
    const a = t.computeFrenetFrames(i, s);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    const o = new P(), l = new P(), c = new ee();
    let h = new P();
    const d = [], u = [], f = [], _ = [];
    M(), this.setIndex(_), this.setAttribute("position", new lt(d, 3)), this.setAttribute("normal", new lt(u, 3)), this.setAttribute("uv", new lt(f, 2));
    function M() {
      for (let S = 0; S < i; S++) m(S);
      m(s === !1 ? i : 0), T(), p();
    }
    function m(S) {
      h = t.getPointAt(S / i, h);
      const v = a.normals[S], A = a.binormals[S];
      for (let w = 0; w <= r; w++) {
        const C = w / r * Math.PI * 2, g = Math.sin(C), E = -Math.cos(C);
        l.x = E * v.x + g * A.x, l.y = E * v.y + g * A.y, l.z = E * v.z + g * A.z, l.normalize(), u.push(l.x, l.y, l.z), o.x = h.x + n * l.x, o.y = h.y + n * l.y, o.z = h.z + n * l.z, d.push(o.x, o.y, o.z);
      }
    }
    function p() {
      for (let S = 1; S <= i; S++) for (let v = 1; v <= r; v++) {
        const A = (r + 1) * (S - 1) + (v - 1), w = (r + 1) * S + (v - 1), C = (r + 1) * S + v, g = (r + 1) * (S - 1) + v;
        _.push(A, w, g), _.push(w, C, g);
      }
    }
    function T() {
      for (let S = 0; S <= i; S++) for (let v = 0; v <= r; v++)
        c.x = S / i, c.y = v / r, f.push(c.x, c.y);
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.path = this.parameters.path.toJSON(), t;
  }
  static fromJSON(t) {
    return new rc(new vs[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
  }
};
function Xn(e) {
  const t = {};
  for (const i in e) {
    t[i] = {};
    for (const n in e[i]) {
      const r = e[i][n];
      if (xo(r)) r.isRenderTargetTexture ? (Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[i][n] = null) : t[i][n] = r.clone();
      else if (Array.isArray(r)) if (xo(r[0])) {
        const s = [];
        for (let a = 0, o = r.length; a < o; a++) s[a] = r[a].clone();
        t[i][n] = s;
      } else t[i][n] = r.slice();
      else t[i][n] = r;
    }
  }
  return t;
}
function zt(e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = Xn(e[i]);
    for (const r in n) t[r] = n[r];
  }
  return t;
}
function xo(e) {
  return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function Xu(e) {
  const t = [];
  for (let i = 0; i < e.length; i++) t.push(e[i].clone());
  return t;
}
function sc(e) {
  const t = e.getRenderTarget();
  return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : ot.workingColorSpace;
}
var Yu = {
  clone: Xn,
  merge: zt
}, qu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Zu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, si = class extends Pi {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = qu, this.fragmentShader = Zu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      multiDraw: !1
    }, this.defaultAttributeValues = {
      color: [
        1,
        1,
        1
      ],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Xn(e.uniforms), this.uniformsGroups = Xu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const n in this.uniforms) {
      const r = this.uniforms[n].value;
      r && r.isTexture ? t.uniforms[n] = {
        type: "t",
        value: r.toJSON(e).uuid
      } : r && r.isColor ? t.uniforms[n] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? t.uniforms[n] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? t.uniforms[n] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? t.uniforms[n] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? t.uniforms[n] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? t.uniforms[n] = {
        type: "m4",
        value: r.toArray()
      } : t.uniforms[n] = { value: r };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const n in this.extensions) this.extensions[n] === !0 && (i[n] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
  fromJSON(e, t) {
    if (super.fromJSON(e, t), e.uniforms !== void 0) for (const i in e.uniforms) {
      const n = e.uniforms[i];
      switch (this.uniforms[i] = {}, n.type) {
        case "t":
          this.uniforms[i].value = t[n.value] || null;
          break;
        case "c":
          this.uniforms[i].value = new $e().setHex(n.value);
          break;
        case "v2":
          this.uniforms[i].value = new ee().fromArray(n.value);
          break;
        case "v3":
          this.uniforms[i].value = new P().fromArray(n.value);
          break;
        case "v4":
          this.uniforms[i].value = new Et().fromArray(n.value);
          break;
        case "m3":
          this.uniforms[i].value = new Qe().fromArray(n.value);
          break;
        case "m4":
          this.uniforms[i].value = new dt().fromArray(n.value);
          break;
        default:
          this.uniforms[i].value = n.value;
      }
    }
    if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (const i in e.extensions) this.extensions[i] = e.extensions[i];
    return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
  }
}, Ku = class extends si {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}, ci = class extends Pi {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new $e(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new $e(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ee(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new tn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}, So = class extends ci {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ee(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return je(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new $e(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new $e(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new $e(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}, Ju = class extends Pi {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new $e(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new $e(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ee(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new tn(), this.combine = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}, $u = class extends Pi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = fh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}, Qu = class extends Pi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
};
function es(e, t) {
  return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
var xr = class {
  constructor(e, t, i, n) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = n !== void 0 ? n : new t.constructor(i), this.sampleValues = t, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let i = this._cachedIndex, n = t[i], r = t[i - 1];
    i: {
      e: {
        let s;
        t: {
          n: if (!(e < n)) {
            for (let a = i + 2; ; ) {
              if (n === void 0) {
                if (e < r) break n;
                return i = t.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
              }
              if (i === a) break;
              if (r = n, n = t[++i], e < n) break e;
            }
            s = t.length;
            break t;
          }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (i = 2, r = a);
            for (let o = i - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (i === o) break;
              if (n = r, r = t[--i - 1], e >= r) break e;
            }
            s = i, i = 0;
            break t;
          }
          break i;
        }
        for (; i < s; ) {
          const a = i + s >>> 1;
          e < t[a] ? s = a : i = a + 1;
        }
        if (n = t[i], r = t[i - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (n === void 0)
          return i = t.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
      }
      this._cachedIndex = i, this.intervalChanged_(i, r, n);
    }
    return this.interpolate_(i, r, e, n);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = e * n;
    for (let s = 0; s !== n; ++s) t[s] = i[r + s];
    return t;
  }
  interpolate_() {
    throw new Error("THREE.Interpolant: Call to abstract method.");
  }
  intervalChanged_() {
  }
}, ju = class extends xr {
  constructor(e, t, i, n) {
    super(e, t, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Ua,
      endingEnd: Ua
    };
  }
  intervalChanged_(e, t, i) {
    const n = this.parameterPositions;
    let r = e - 2, s = e + 1, a = n[r], o = n[s];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case Oa:
        r = e, a = 2 * t - i;
        break;
      case Fa:
        r = n.length - 2, a = t + n[r] - n[r + 1];
        break;
      default:
        r = e, a = i;
    }
    if (o === void 0) switch (this.getSettings_().endingEnd) {
      case Oa:
        s = e, o = 2 * i - t;
        break;
      case Fa:
        s = 1, o = i + n[1] - n[0];
        break;
      default:
        s = e - 1, o = t;
    }
    const l = (i - t) * 0.5, c = this.valueSize;
    this._weightPrev = l / (t - a), this._weightNext = l / (o - i), this._offsetPrev = r * c, this._offsetNext = s * c;
  }
  interpolate_(e, t, i, n) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, u = this._weightNext, f = (i - t) / (n - t), _ = f * f, M = _ * f, m = -d * M + 2 * d * _ - d * f, p = (1 + d) * M + (-1.5 - 2 * d) * _ + (-0.5 + d) * f + 1, T = (-1 - u) * M + (1.5 + u) * _ + 0.5 * f, S = u * M - u * _;
    for (let v = 0; v !== a; ++v) r[v] = m * s[c + v] + p * s[l + v] + T * s[o + v] + S * s[h + v];
    return r;
  }
}, ed = class extends xr {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e, t, i, n) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = (i - t) / (n - t), h = 1 - c;
    for (let d = 0; d !== a; ++d) r[d] = s[l + d] * h + s[o + d] * c;
    return r;
  }
}, td = class extends xr {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}, id = class extends xr {
  interpolate_(e, t, i, n) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = this.inTangents, h = this.outTangents;
    if (!c || !h) {
      const f = (i - t) / (n - t), _ = 1 - f;
      for (let M = 0; M !== a; ++M) r[M] = s[l + M] * _ + s[o + M] * f;
      return r;
    }
    const d = a * 2, u = e - 1;
    for (let f = 0; f !== a; ++f) {
      const _ = s[l + f], M = s[o + f], m = u * d + f * 2, p = h[m], T = h[m + 1], S = e * d + f * 2, v = c[S], A = c[S + 1];
      let w = (i - t) / (n - t), C, g, E, F, R;
      for (let V = 0; V < 8; V++) {
        C = w * w, g = C * w, E = 1 - w, F = E * E, R = F * E;
        const Z = R * t + 3 * F * w * p + 3 * E * C * v + g * n - i;
        if (Math.abs(Z) < 1e-10) break;
        const G = 3 * F * (p - t) + 6 * E * w * (v - p) + 3 * C * (n - v);
        if (Math.abs(G) < 1e-10) break;
        w = w - Z / G, w = Math.max(0, Math.min(1, w));
      }
      r[f] = R * _ + 3 * F * w * T + 3 * E * C * A + g * M;
    }
    return r;
  }
}, yi = class {
  constructor(e, t, i, n) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = es(t, this.TimeBufferType), this.values = es(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let i;
    if (t.toJSON !== this.toJSON) i = t.toJSON(e);
    else {
      i = {
        name: e.name,
        times: es(e.times, Array),
        values: es(e.values, Array)
      };
      const n = e.getInterpolation();
      n !== e.DefaultInterpolation && (i.interpolation = n);
    }
    return i.type = e.ValueTypeName, i;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new td(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new ed(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new ju(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    const t = new id(this.times, this.values, this.getValueSize(), e);
    return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case us:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case ca:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Es:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case Na:
        t = this.InterpolantFactoryMethodBezier;
        break;
    }
    if (t === void 0) {
      const i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(i);
      return Ge("KeyframeTrack:", i), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return us;
      case this.InterpolantFactoryMethodLinear:
        return ca;
      case this.InterpolantFactoryMethodSmooth:
        return Es;
      case this.InterpolantFactoryMethodBezier:
        return Na;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let i = 0, n = t.length; i !== n; ++i) t[i] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let i = 0, n = t.length; i !== n; ++i) t[i] *= e;
    }
    return this;
  }
  trim(e, t) {
    const i = this.times, n = i.length;
    let r = 0, s = n - 1;
    for (; r !== n && i[r] < e; ) ++r;
    for (; s !== -1 && i[s] > t; ) --s;
    if (++s, r !== 0 || s !== n) {
      r >= s && (s = Math.max(s, 1), r = s - 1);
      const a = this.getValueSize();
      this.times = i.slice(r, s), this.values = this.values.slice(r * a, s * a);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (ke("KeyframeTrack: Invalid value size in track.", this), e = !1);
    const i = this.times, n = this.values, r = i.length;
    r === 0 && (ke("KeyframeTrack: Track is empty.", this), e = !1);
    let s = null;
    for (let a = 0; a !== r; a++) {
      const o = i[a];
      if (typeof o == "number" && isNaN(o)) {
        ke("KeyframeTrack: Time is not a valid number.", this, a, o), e = !1;
        break;
      }
      if (s !== null && s > o) {
        ke("KeyframeTrack: Out of order keys.", this, a, o, s), e = !1;
        break;
      }
      s = o;
    }
    if (n !== void 0 && mh(n))
      for (let a = 0, o = n.length; a !== o; ++a) {
        const l = n[a];
        if (isNaN(l)) {
          ke("KeyframeTrack: Value is not a valid number.", this, a, l), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), i = this.getValueSize(), n = this.getInterpolation() === Es, r = e.length - 1;
    let s = 1;
    for (let a = 1; a < r; ++a) {
      let o = !1;
      const l = e[a];
      if (l !== e[a + 1] && (a !== 1 || l !== e[0])) if (n)
        o = !0;
      else {
        const c = a * i, h = c - i, d = c + i;
        for (let u = 0; u !== i; ++u) {
          const f = t[c + u];
          if (f !== t[h + u] || f !== t[d + u]) {
            o = !0;
            break;
          }
        }
      }
      if (o) {
        if (a !== s) {
          e[s] = e[a];
          const c = a * i, h = s * i;
          for (let d = 0; d !== i; ++d) t[h + d] = t[c + d];
        }
        ++s;
      }
    }
    if (r > 0) {
      e[s] = e[r];
      for (let a = r * i, o = s * i, l = 0; l !== i; ++l) t[o + l] = t[a + l];
      ++s;
    }
    return s !== e.length ? (this.times = e.slice(0, s), this.values = t.slice(0, s * i)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), i = this.constructor, n = new i(this.name, e, t);
    return n.createInterpolant = this.createInterpolant, n;
  }
};
yi.prototype.ValueTypeName = "";
yi.prototype.TimeBufferType = Float32Array;
yi.prototype.ValueBufferType = Float32Array;
yi.prototype.DefaultInterpolation = ca;
var Sr = class extends yi {
  constructor(e, t, i) {
    super(e, t, i);
  }
};
Sr.prototype.ValueTypeName = "bool";
Sr.prototype.ValueBufferType = Array;
Sr.prototype.DefaultInterpolation = us;
Sr.prototype.InterpolantFactoryMethodLinear = void 0;
Sr.prototype.InterpolantFactoryMethodSmooth = void 0;
var nd = class extends yi {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
};
nd.prototype.ValueTypeName = "color";
var rd = class extends yi {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
};
rd.prototype.ValueTypeName = "number";
var sd = class extends xr {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  interpolate_(e, t, i, n) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (i - t) / (n - t);
    let l = e * a;
    for (let c = l + a; l !== c; l += 4) Ci.slerpFlat(r, 0, s, l - a, s, l, o);
    return r;
  }
}, ac = class extends yi {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
  InterpolantFactoryMethodLinear(e) {
    return new sd(this.times, this.values, this.getValueSize(), e);
  }
};
ac.prototype.ValueTypeName = "quaternion";
ac.prototype.InterpolantFactoryMethodSmooth = void 0;
var Er = class extends yi {
  constructor(e, t, i) {
    super(e, t, i);
  }
};
Er.prototype.ValueTypeName = "string";
Er.prototype.ValueBufferType = Array;
Er.prototype.DefaultInterpolation = us;
Er.prototype.InterpolantFactoryMethodLinear = void 0;
Er.prototype.InterpolantFactoryMethodSmooth = void 0;
var ad = class extends yi {
  constructor(e, t, i, n) {
    super(e, t, i, n);
  }
};
ad.prototype.ValueTypeName = "vector";
var Qs = {
  enabled: !1,
  files: {},
  add: function(e, t) {
    this.enabled !== !1 && (Eo(e) || (this.files[e] = t));
  },
  get: function(e) {
    if (this.enabled !== !1 && !Eo(e))
      return this.files[e];
  },
  remove: function(e) {
    delete this.files[e];
  },
  clear: function() {
    this.files = {};
  }
};
function Eo(e) {
  try {
    const t = e.slice(e.indexOf(":") + 1);
    return new URL(t).protocol === "blob:";
  } catch {
    return !1;
  }
}
var od = class {
  constructor(e, t, i) {
    const n = this;
    let r = !1, s = 0, a = 0, o;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this._abortController = null, this.itemStart = function(c) {
      a++, r === !1 && n.onStart !== void 0 && n.onStart(c, s, a), r = !0;
    }, this.itemEnd = function(c) {
      s++, n.onProgress !== void 0 && n.onProgress(c, s, a), s === a && (r = !1, n.onLoad !== void 0 && n.onLoad());
    }, this.itemError = function(c) {
      n.onError !== void 0 && n.onError(c);
    }, this.resolveURL = function(c) {
      return c = c.normalize("NFC"), o ? o(c) : c;
    }, this.setURLModifier = function(c) {
      return o = c, this;
    }, this.addHandler = function(c, h) {
      return l.push(c, h), this;
    }, this.removeHandler = function(c) {
      const h = l.indexOf(c);
      return h !== -1 && l.splice(h, 2), this;
    }, this.getHandler = function(c) {
      for (let h = 0, d = l.length; h < d; h += 2) {
        const u = l[h], f = l[h + 1];
        if (u.global && (u.lastIndex = 0), u.test(c)) return f;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}, ld = /* @__PURE__ */ new od(), Aa = class {
  constructor(e) {
    this.manager = e !== void 0 ? e : ld, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  load() {
  }
  loadAsync(e, t) {
    const i = this;
    return new Promise(function(n, r) {
      i.load(e, n, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  abort() {
    return this;
  }
};
Aa.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Tn = /* @__PURE__ */ new WeakMap(), cd = class extends Aa {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = Qs.get(`image:${e}`);
    if (s !== void 0) {
      if (s.complete === !0)
        r.manager.itemStart(e), setTimeout(function() {
          t && t(s), r.manager.itemEnd(e);
        }, 0);
      else {
        let h = Tn.get(s);
        h === void 0 && (h = [], Tn.set(s, h)), h.push({
          onLoad: t,
          onError: n
        });
      }
      return s;
    }
    const a = mr("img");
    function o() {
      c(), t && t(this);
      const h = Tn.get(this) || [];
      for (let d = 0; d < h.length; d++) {
        const u = h[d];
        u.onLoad && u.onLoad(this);
      }
      Tn.delete(this), r.manager.itemEnd(e);
    }
    function l(h) {
      c(), n && n(h), Qs.remove(`image:${e}`);
      const d = Tn.get(this) || [];
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        f.onError && f.onError(h);
      }
      Tn.delete(this), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function c() {
      a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), Qs.add(`image:${e}`, a), r.manager.itemStart(e), a.src = e, a;
  }
}, hd = class extends Aa {
  constructor(e) {
    super(e);
  }
  load(e, t, i, n) {
    const r = new Qt(), s = new cd(this.manager);
    return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, i, n), r;
  }
}, ys = class extends Rt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new $e(e), this.intensity = t;
  }
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
}, ud = class extends ys {
  constructor(e, t, i) {
    super(e, i), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Rt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new $e(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}, js = /* @__PURE__ */ new dt(), bo = /* @__PURE__ */ new P(), To = /* @__PURE__ */ new P(), Ra = class {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ee(512, 512), this.mapType = Hi, this.map = null, this.mapPass = null, this.matrix = new dt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ba(), this._frameExtents = new ee(1, 1), this._viewportCount = 1, this._viewports = [new Et(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, i = this.matrix;
    bo.setFromMatrixPosition(e.matrixWorld), t.position.copy(bo), To.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(To), t.updateMatrixWorld(), js.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(js, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i.multiply(js);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}, ts = /* @__PURE__ */ new P(), is = /* @__PURE__ */ new Ci(), pi = /* @__PURE__ */ new P(), oc = class extends Rt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new dt(), this.projectionMatrix = new dt(), this.projectionMatrixInverse = new dt(), this.coordinateSystem = zn, this._reversedDepth = !1;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(ts, is, pi), pi.x === 1 && pi.y === 1 && pi.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(ts, is, pi.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, i = !1) {
    super.updateWorldMatrix(e, t, i), this.matrixWorld.decompose(ts, is, pi), pi.x === 1 && pi.y === 1 && pi.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(ts, is, pi.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, zi = /* @__PURE__ */ new P(), wo = /* @__PURE__ */ new ee(), Ao = /* @__PURE__ */ new ee(), kt = class extends oc {
  constructor(e = 50, t = 1, i = 0.1, n = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Gn * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(cr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Gn * 2 * Math.atan(Math.tan(cr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    zi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(zi.x, zi.y).multiplyScalar(-e / zi.z), zi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(zi.x, zi.y).multiplyScalar(-e / zi.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, wo, Ao), t.subVectors(Ao, wo);
  }
  setViewOffset(e, t, i, n, r, s) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(cr * 0.5 * this.fov) / this.zoom, i = 2 * t, n = this.aspect * i, r = -0.5 * n;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const o = s.fullWidth, l = s.fullHeight;
      r += s.offsetX * n / o, t -= s.offsetY * i / l, n *= s.width / o, i *= s.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, t, t - i, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}, dd = class extends Ra {
  constructor() {
    super(new kt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1, this.aspect = 1;
  }
  updateMatrices(e) {
    const t = this.camera, i = Gn * 2 * e.angle * this.focus, n = this.mapSize.width / this.mapSize.height * this.aspect, r = e.distance || t.far;
    (i !== t.fov || n !== t.aspect || r !== t.far) && (t.fov = i, t.aspect = n, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}, Ro = class extends ys {
  constructor(e, t, i = 0, n = Math.PI / 3, r = 0, s = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Rt.DEFAULT_UP), this.updateMatrix(), this.target = new Rt(), this.distance = i, this.angle = n, this.penumbra = r, this.decay = s, this.map = null, this.shadow = new dd();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.map = e.map, this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.distance = this.distance, t.object.angle = this.angle, t.object.decay = this.decay, t.object.penumbra = this.penumbra, t.object.target = this.target.uuid, this.map && this.map.isTexture && (t.object.map = this.map.toJSON(e).uuid), t.object.shadow = this.shadow.toJSON(), t;
  }
}, fd = class extends Ra {
  constructor() {
    super(new kt(90, 1, 0.5, 500)), this.isPointLightShadow = !0;
  }
}, lc = class extends ys {
  constructor(e, t, i = 0, n = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new fd();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
  }
}, Ca = class extends oc {
  constructor(e = -1, t = 1, i = 1, n = -1, r = 0.1, s = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = n, this.near = r, this.far = s, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, i, n, r, s) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2;
    let r = i - e, s = i + e, a = n + t, o = n - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, c = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, s = r + l * this.view.width, a -= c * this.view.offsetY, o = a - c * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}, pd = class extends Ra {
  constructor() {
    super(new Ca(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}, ea = class extends ys {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Rt.DEFAULT_UP), this.updateMatrix(), this.target = new Rt(), this.shadow = new pd();
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
}, wn = -90, An = 1, md = class extends Rt {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const n = new kt(wn, An, e, t);
    n.layers = this.layers, this.add(n);
    const r = new kt(wn, An, e, t);
    r.layers = this.layers, this.add(r);
    const s = new kt(wn, An, e, t);
    s.layers = this.layers, this.add(s);
    const a = new kt(wn, An, e, t);
    a.layers = this.layers, this.add(a);
    const o = new kt(wn, An, e, t);
    o.layers = this.layers, this.add(o);
    const l = new kt(wn, An, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, n, r, s, a, o] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      i.up.set(0, 1, 0), i.lookAt(1, 0, 0), n.up.set(0, 1, 0), n.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
    else if (e === 2001)
      i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), n.up.set(0, -1, 0), n.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: n } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, s, a, o, l, c] = this.children, h = e.getRenderTarget(), d = e.getActiveCubeFace(), u = e.getActiveMipmapLevel(), f = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1;
    let M = !1;
    e.isWebGLRenderer === !0 ? M = e.state.buffers.depth.getReversed() : M = e.reversedDepthBuffer, e.setRenderTarget(i, 0, n), M && e.autoClear === !1 && e.clearDepth(), e.render(t, r), e.setRenderTarget(i, 1, n), M && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(i, 2, n), M && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(i, 3, n), M && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(i, 4, n), M && e.autoClear === !1 && e.clearDepth(), e.render(t, l), i.texture.generateMipmaps = _, e.setRenderTarget(i, 5, n), M && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(h, d, u), e.xr.enabled = f, i.texture.needsPMREMUpdate = !0;
  }
}, gd = class extends kt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}, vd = class {
  constructor() {
    this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this._elapsed = 0, this._timescale = 1, this._document = null, this._pageVisibilityHandler = null;
  }
  connect(e) {
    this._document = e, e.hidden !== void 0 && (this._pageVisibilityHandler = _d.bind(this), e.addEventListener("visibilitychange", this._pageVisibilityHandler, !1));
  }
  disconnect() {
    this._pageVisibilityHandler !== null && (this._document.removeEventListener("visibilitychange", this._pageVisibilityHandler), this._pageVisibilityHandler = null), this._document = null;
  }
  getDelta() {
    return this._delta / 1e3;
  }
  getElapsed() {
    return this._elapsed / 1e3;
  }
  getTimescale() {
    return this._timescale;
  }
  setTimescale(e) {
    return this._timescale = e, this;
  }
  reset() {
    return this._currentTime = performance.now() - this._startTime, this;
  }
  dispose() {
    this.disconnect();
  }
  update(e) {
    return this._pageVisibilityHandler !== null && this._document.hidden === !0 ? this._delta = 0 : (this._previousTime = this._currentTime, this._currentTime = (e !== void 0 ? e : performance.now()) - this._startTime, this._delta = (this._currentTime - this._previousTime) * this._timescale, this._elapsed += this._delta), this;
  }
};
function _d() {
  this._document.hidden === !1 && this.reset();
}
var Pa = "\\[\\]\\.:\\/", Md = new RegExp("[" + Pa + "]", "g"), La = "[^" + Pa + "]", yd = "[^" + Pa.replace("\\.", "") + "]", xd = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", La), Sd = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", yd), Ed = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", La), bd = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", La), Td = new RegExp("^" + xd + Sd + Ed + bd + "$"), wd = [
  "material",
  "materials",
  "bones",
  "map"
], Ad = class {
  constructor(e, t, i) {
    const n = i || xt.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, n);
  }
  getValue(e, t) {
    this.bind();
    const i = this._targetGroup.nCachedObjects_, n = this._bindings[i];
    n !== void 0 && n.getValue(e, t);
  }
  setValue(e, t) {
    const i = this._bindings;
    for (let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].unbind();
  }
}, xt = class Dn {
  constructor(t, i, n) {
    this.path = i, this.parsedPath = n || Dn.parseTrackName(i), this.node = Dn.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, i, n) {
    return t && t.isAnimationObjectGroup ? new Dn.Composite(t, i, n) : new Dn(t, i, n);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(Md, "");
  }
  static parseTrackName(t) {
    const i = Td.exec(t);
    if (i === null) throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + t);
    const n = {
      nodeName: i[2],
      objectName: i[3],
      objectIndex: i[4],
      propertyName: i[5],
      propertyIndex: i[6]
    }, r = n.nodeName && n.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      const s = n.nodeName.substring(r + 1);
      wd.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0) throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + t);
    return n;
  }
  static findNode(t, i) {
    if (i === void 0 || i === "" || i === "." || i === -1 || i === t.name || i === t.uuid) return t;
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(i);
      if (n !== void 0) return n;
    }
    if (t.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === i || o.uuid === i) return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, r = n(t.children);
      if (r) return r;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(t, i) {
    t[i] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, i) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r) t[i++] = n[r];
  }
  _getValue_arrayElement(t, i) {
    t[i] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, i) {
    this.resolvedProperty.toArray(t, i);
  }
  _setValue_direct(t, i) {
    this.targetObject[this.propertyName] = t[i];
  }
  _setValue_direct_setNeedsUpdate(t, i) {
    this.targetObject[this.propertyName] = t[i], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, i) {
    this.targetObject[this.propertyName] = t[i], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(t, i) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r) n[r] = t[i++];
  }
  _setValue_array_setNeedsUpdate(t, i) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r) n[r] = t[i++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, i) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r) n[r] = t[i++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(t, i) {
    this.resolvedProperty[this.propertyIndex] = t[i];
  }
  _setValue_arrayElement_setNeedsUpdate(t, i) {
    this.resolvedProperty[this.propertyIndex] = t[i], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, i) {
    this.resolvedProperty[this.propertyIndex] = t[i], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(t, i) {
    this.resolvedProperty.fromArray(t, i);
  }
  _setValue_fromArray_setNeedsUpdate(t, i) {
    this.resolvedProperty.fromArray(t, i), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, i) {
    this.resolvedProperty.fromArray(t, i), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(t, i) {
    this.bind(), this.getValue(t, i);
  }
  _setValue_unbound(t, i) {
    this.bind(), this.setValue(t, i);
  }
  bind() {
    let t = this.node;
    const i = this.parsedPath, n = i.objectName, r = i.propertyName;
    let s = i.propertyIndex;
    if (t || (t = Dn.findNode(this.rootNode, i.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      Ge("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = i.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material) {
            ke("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let h = 0; h < t.length; h++) if (t[h].name === c) {
            c = h;
            break;
          }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            ke("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.map) {
            ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[n] === void 0) {
            ke("PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[n];
      }
      if (c !== void 0) {
        if (t[c] === void 0) {
          ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[c];
      }
    }
    const a = t[r];
    if (a === void 0) {
      const c = i.nodeName;
      ke("PropertyBinding: Trying to update property for track: " + c + "." + r + " but it wasn't found.", t);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = t, t.isMaterial === !0 ? o = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!t.geometry) {
          ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        t.morphTargetDictionary[s] !== void 0 && (s = t.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
};
xt.Composite = Ad;
xt.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
xt.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
xt.prototype.GetterByBindingType = [
  xt.prototype._getValue_direct,
  xt.prototype._getValue_array,
  xt.prototype._getValue_arrayElement,
  xt.prototype._getValue_toArray
];
xt.prototype.SetterByBindingTypeAndVersioning = [
  [
    xt.prototype._setValue_direct,
    xt.prototype._setValue_direct_setNeedsUpdate,
    xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    xt.prototype._setValue_array,
    xt.prototype._setValue_array_setNeedsUpdate,
    xt.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    xt.prototype._setValue_arrayElement,
    xt.prototype._setValue_arrayElement_setNeedsUpdate,
    xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    xt.prototype._setValue_fromArray,
    xt.prototype._setValue_fromArray_setNeedsUpdate,
    xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
var Co = /* @__PURE__ */ new dt(), Rd = class {
  constructor(e, t, i = 0, n = 1 / 0) {
    this.ray = new yr(e, t), this.near = i, this.far = n, this.camera = null, this.layers = new Ea(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, t.projectionMatrix.elements[14]).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : ke("Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Co.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Co), this;
  }
  intersectObject(e, t = !0, i = []) {
    return ga(e, this, i, t), i.sort(Po), i;
  }
  intersectObjects(e, t = !0, i = []) {
    for (let n = 0, r = e.length; n < r; n++) ga(e[n], this, i, t);
    return i.sort(Po), i;
  }
};
function Po(e, t) {
  return e.distance - t.distance;
}
function ga(e, t, i, n) {
  let r = !0;
  if (e.layers.test(t.layers) && e.raycast(t, i) === !1 && (r = !1), r === !0 && n === !0) {
    const s = e.children;
    for (let a = 0, o = s.length; a < o; a++) ga(s[a], t, i, !0);
  }
}
var Lo = class {
  constructor(e = 1, t = 0, i = 0) {
    this.radius = e, this.phi = t, this.theta = i;
  }
  set(e, t, i) {
    return this.radius = e, this.phi = t, this.theta = i, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = je(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, i) {
    return this.radius = Math.sqrt(e * e + t * t + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(je(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, xm = class cc {
  static {
    cc.prototype.isMatrix2 = !0;
  }
  constructor(t, i, n, r) {
    this.elements = [
      1,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, i, n, r);
  }
  identity() {
    return this.set(1, 0, 0, 1), this;
  }
  fromArray(t, i = 0) {
    for (let n = 0; n < 4; n++) this.elements[n] = t[n + i];
    return this;
  }
  set(t, i, n, r) {
    const s = this.elements;
    return s[0] = t, s[2] = i, s[1] = n, s[3] = r, this;
  }
}, Cd = class extends ki {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = {
      LEFT: null,
      MIDDLE: null,
      RIGHT: null
    }, this.touches = {
      ONE: null,
      TWO: null
    };
  }
  connect(e) {
    if (e === void 0) {
      Ge("Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
};
function Io(e, t, i, n) {
  const r = Pd(n);
  switch (i) {
    case Cc:
      return e * t;
    case ul:
      return e * t / r.components * r.byteLength;
    case dl:
      return e * t / r.components * r.byteLength;
    case hs:
      return e * t * 2 / r.components * r.byteLength;
    case fl:
      return e * t * 2 / r.components * r.byteLength;
    case Pc:
      return e * t * 3 / r.components * r.byteLength;
    case fr:
      return e * t * 4 / r.components * r.byteLength;
    case pl:
      return e * t * 4 / r.components * r.byteLength;
    case Lc:
    case Ic:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Dc:
    case Nc:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Oc:
    case Bc:
      return Math.max(e, 16) * Math.max(t, 8) / 4;
    case Uc:
    case Fc:
      return Math.max(e, 8) * Math.max(t, 8) / 2;
    case zc:
    case Vc:
    case Hc:
    case kc:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Gc:
    case Wc:
    case Xc:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Yc:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case qc:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Zc:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Kc:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Jc:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case $c:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Qc:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case jc:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case eh:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case th:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case ih:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case nh:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case rh:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case sh:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case ah:
    case oh:
    case lh:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case ch:
    case hh:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case uh:
    case dh:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${i} format.`);
}
function Pd(e) {
  switch (e) {
    case Hi:
    case bc:
      return {
        byteLength: 1,
        components: 1
      };
    case al:
    case Tc:
    case en:
      return {
        byteLength: 2,
        components: 1
      };
    case ol:
    case ll:
      return {
        byteLength: 2,
        components: 4
      };
    case ji:
    case wc:
    case Mr:
      return {
        byteLength: 4,
        components: 1
      };
    case Ac:
    case Rc:
      return {
        byteLength: 4,
        components: 3
      };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "185" } }));
typeof window < "u" && (window.__THREE__ ? Ge("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "185");
function hc() {
  let e = null, t = !1, i = null, n = null;
  function r(s, a) {
    i(s, a), n = e.requestAnimationFrame(r);
  }
  return {
    start: function() {
      t !== !0 && i !== null && e !== null && (n = e.requestAnimationFrame(r), t = !0);
    },
    stop: function() {
      e !== null && e.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(s) {
      i = s;
    },
    setContext: function(s) {
      e = s;
    }
  };
}
function Ld(e) {
  const t = /* @__PURE__ */ new WeakMap();
  function i(o, l) {
    const c = o.array, h = o.usage, d = c.byteLength, u = e.createBuffer();
    e.bindBuffer(l, u), e.bufferData(l, c, h), o.onUploadCallback();
    let f;
    if (c instanceof Float32Array) f = e.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) f = e.HALF_FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? f = e.HALF_FLOAT : f = e.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) f = e.SHORT;
    else if (c instanceof Uint32Array) f = e.UNSIGNED_INT;
    else if (c instanceof Int32Array) f = e.INT;
    else if (c instanceof Int8Array) f = e.BYTE;
    else if (c instanceof Uint8Array) f = e.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) f = e.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: u,
      type: f,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: d
    };
  }
  function n(o, l, c) {
    const h = l.array, d = l.updateRanges;
    if (e.bindBuffer(c, o), d.length === 0) e.bufferSubData(c, 0, h);
    else {
      d.sort((f, _) => f.start - _.start);
      let u = 0;
      for (let f = 1; f < d.length; f++) {
        const _ = d[u], M = d[f];
        M.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, M.start + M.count - _.start) : (++u, d[u] = M);
      }
      d.length = u + 1;
      for (let f = 0, _ = d.length; f < _; f++) {
        const M = d[f];
        e.bufferSubData(c, M.start * h.BYTES_PER_ELEMENT, h, M.start, M.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (e.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = t.get(o);
    if (c === void 0) t.set(o, i(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var tt = {
  alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
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
#endif`,
  alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  aomap_fragment: `#ifdef USE_AOMAP
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
#endif`,
  aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  batching_pars_vertex: `#ifdef USE_BATCHING
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
#endif`,
  batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  bsdfs: `float G_BlinnPhong_Implicit( ) {
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
} // validated`,
  iridescence_fragment: `#ifdef USE_IRIDESCENCE
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
#endif`,
  bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
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
#endif`,
  clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
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
#endif`,
  clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  color_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
  color_pars_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
  color_pars_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
  color_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,
  common: `#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,
  cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,
  defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
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
#endif`,
  displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,
  envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
  envmap_pars_fragment: `#ifdef USE_ENVMAP
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
#endif`,
  envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,
  envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
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
}`,
  lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  lights_lambert_pars_fragment: `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  lights_pars_begin: `uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,
  lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  lights_toon_pars_fragment: `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  lights_phong_pars_fragment: `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  lights_physical_fragment: `PhysicalMaterial material;
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
#endif`,
  lights_physical_pars_fragment: `uniform sampler2D dfgLUT;
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
}`,
  lights_fragment_begin: `
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
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
#endif`,
  lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  lightprobes_pars_fragment: `#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,
  logdepthbuf_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  logdepthbuf_pars_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_pars_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,
  map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
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
#endif`,
  metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
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
#endif`,
  morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,
  normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
  normalmap_pars_fragment: `#ifdef USE_NORMALMAP
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
#endif`,
  clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  packing: `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,
  premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,
  shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,
  shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
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
#endif`,
  shadowmask_pars_fragment: `float getShadowMask() {
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
}`,
  skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  skinning_pars_vertex: `#ifdef USE_SKINNING
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
#endif`,
  skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  skinnormal_vertex: `#ifdef USE_SKINNING
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
#endif`,
  specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  tonemapping_pars_fragment: `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  transmission_fragment: `#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  transmission_pars_fragment: `#ifdef USE_TRANSMISSION
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
#endif`,
  uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
  background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  background_frag: `uniform sampler2D t2D;
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
}`,
  backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
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
}`,
  cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  depth_vert: `#include <common>
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
}`,
  depth_frag: `#if DEPTH_PACKING == 3200
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
}`,
  distance_vert: `#define DISTANCE
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
}`,
  distance_frag: `#define DISTANCE
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
void main() {
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
}`,
  equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  linedashed_vert: `uniform float scale;
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
}`,
  linedashed_frag: `uniform vec3 diffuse;
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
}`,
  meshbasic_vert: `#include <common>
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
}`,
  meshbasic_frag: `uniform vec3 diffuse;
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
}`,
  meshlambert_vert: `#define LAMBERT
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
}`,
  meshlambert_frag: `#define LAMBERT
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
}`,
  meshmatcap_vert: `#define MATCAP
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
}`,
  meshmatcap_frag: `#define MATCAP
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
}`,
  meshnormal_vert: `#define NORMAL
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
}`,
  meshnormal_frag: `#define NORMAL
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
}`,
  meshphong_vert: `#define PHONG
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
}`,
  meshphong_frag: `#define PHONG
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
}`,
  meshphysical_vert: `#define STANDARD
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
}`,
  meshphysical_frag: `#define STANDARD
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
}`,
  meshtoon_vert: `#define TOON
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
}`,
  meshtoon_frag: `#define TOON
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
}`,
  points_vert: `uniform float size;
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
}`,
  points_frag: `uniform vec3 diffuse;
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
}`,
  shadow_vert: `#include <common>
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
}`,
  shadow_frag: `uniform vec3 color;
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
}`,
  sprite_vert: `uniform float rotation;
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
}`,
  sprite_frag: `uniform vec3 diffuse;
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
}`
}, xe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new $e(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Qe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Qe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Qe() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Qe() },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 },
    dfgLUT: { value: null }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Qe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Qe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Qe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Qe() },
    normalScale: { value: /* @__PURE__ */ new ee(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Qe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Qe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Qe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Qe() }
  },
  gradientmap: { gradientMap: { value: null } },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new $e(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMatrix: { value: [] },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMatrix: { value: [] },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: { value: null },
    ltc_2: { value: null },
    probesSH: { value: null },
    probesMin: { value: /* @__PURE__ */ new P() },
    probesMax: { value: /* @__PURE__ */ new P() },
    probesResolution: { value: /* @__PURE__ */ new P() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new $e(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Qe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Qe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new $e(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ee(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Qe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Qe() },
    alphaTest: { value: 0 }
  }
}, gi = {
  basic: {
    uniforms: /* @__PURE__ */ zt([
      xe.common,
      xe.specularmap,
      xe.envmap,
      xe.aomap,
      xe.lightmap,
      xe.fog
    ]),
    vertexShader: tt.meshbasic_vert,
    fragmentShader: tt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ zt([
      xe.common,
      xe.specularmap,
      xe.envmap,
      xe.aomap,
      xe.lightmap,
      xe.emissivemap,
      xe.bumpmap,
      xe.normalmap,
      xe.displacementmap,
      xe.fog,
      xe.lights,
      {
        emissive: { value: /* @__PURE__ */ new $e(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: tt.meshlambert_vert,
    fragmentShader: tt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ zt([
      xe.common,
      xe.specularmap,
      xe.envmap,
      xe.aomap,
      xe.lightmap,
      xe.emissivemap,
      xe.bumpmap,
      xe.normalmap,
      xe.displacementmap,
      xe.fog,
      xe.lights,
      {
        emissive: { value: /* @__PURE__ */ new $e(0) },
        specular: { value: /* @__PURE__ */ new $e(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: tt.meshphong_vert,
    fragmentShader: tt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ zt([
      xe.common,
      xe.envmap,
      xe.aomap,
      xe.lightmap,
      xe.emissivemap,
      xe.bumpmap,
      xe.normalmap,
      xe.displacementmap,
      xe.roughnessmap,
      xe.metalnessmap,
      xe.fog,
      xe.lights,
      {
        emissive: { value: /* @__PURE__ */ new $e(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: tt.meshphysical_vert,
    fragmentShader: tt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ zt([
      xe.common,
      xe.aomap,
      xe.lightmap,
      xe.emissivemap,
      xe.bumpmap,
      xe.normalmap,
      xe.displacementmap,
      xe.gradientmap,
      xe.fog,
      xe.lights,
      { emissive: { value: /* @__PURE__ */ new $e(0) } }
    ]),
    vertexShader: tt.meshtoon_vert,
    fragmentShader: tt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ zt([
      xe.common,
      xe.bumpmap,
      xe.normalmap,
      xe.displacementmap,
      xe.fog,
      { matcap: { value: null } }
    ]),
    vertexShader: tt.meshmatcap_vert,
    fragmentShader: tt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ zt([xe.points, xe.fog]),
    vertexShader: tt.points_vert,
    fragmentShader: tt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ zt([
      xe.common,
      xe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: tt.linedashed_vert,
    fragmentShader: tt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ zt([xe.common, xe.displacementmap]),
    vertexShader: tt.depth_vert,
    fragmentShader: tt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ zt([
      xe.common,
      xe.bumpmap,
      xe.normalmap,
      xe.displacementmap,
      { opacity: { value: 1 } }
    ]),
    vertexShader: tt.meshnormal_vert,
    fragmentShader: tt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ zt([xe.sprite, xe.fog]),
    vertexShader: tt.sprite_vert,
    fragmentShader: tt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Qe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: tt.background_vert,
    fragmentShader: tt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Qe() }
    },
    vertexShader: tt.backgroundCube_vert,
    fragmentShader: tt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: tt.cube_vert,
    fragmentShader: tt.cube_frag
  },
  equirect: {
    uniforms: { tEquirect: { value: null } },
    vertexShader: tt.equirect_vert,
    fragmentShader: tt.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ zt([
      xe.common,
      xe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: tt.distance_vert,
    fragmentShader: tt.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ zt([
      xe.lights,
      xe.fog,
      {
        color: { value: /* @__PURE__ */ new $e(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: tt.shadow_vert,
    fragmentShader: tt.shadow_frag
  }
};
gi.physical = {
  uniforms: /* @__PURE__ */ zt([gi.standard.uniforms, {
    clearcoat: { value: 0 },
    clearcoatMap: { value: null },
    clearcoatMapTransform: { value: /* @__PURE__ */ new Qe() },
    clearcoatNormalMap: { value: null },
    clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Qe() },
    clearcoatNormalScale: { value: /* @__PURE__ */ new ee(1, 1) },
    clearcoatRoughness: { value: 0 },
    clearcoatRoughnessMap: { value: null },
    clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Qe() },
    dispersion: { value: 0 },
    iridescence: { value: 0 },
    iridescenceMap: { value: null },
    iridescenceMapTransform: { value: /* @__PURE__ */ new Qe() },
    iridescenceIOR: { value: 1.3 },
    iridescenceThicknessMinimum: { value: 100 },
    iridescenceThicknessMaximum: { value: 400 },
    iridescenceThicknessMap: { value: null },
    iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Qe() },
    sheen: { value: 0 },
    sheenColor: { value: /* @__PURE__ */ new $e(0) },
    sheenColorMap: { value: null },
    sheenColorMapTransform: { value: /* @__PURE__ */ new Qe() },
    sheenRoughness: { value: 1 },
    sheenRoughnessMap: { value: null },
    sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Qe() },
    transmission: { value: 0 },
    transmissionMap: { value: null },
    transmissionMapTransform: { value: /* @__PURE__ */ new Qe() },
    transmissionSamplerSize: { value: /* @__PURE__ */ new ee() },
    transmissionSamplerMap: { value: null },
    thickness: { value: 0 },
    thicknessMap: { value: null },
    thicknessMapTransform: { value: /* @__PURE__ */ new Qe() },
    attenuationDistance: { value: 0 },
    attenuationColor: { value: /* @__PURE__ */ new $e(0) },
    specularColor: { value: /* @__PURE__ */ new $e(1, 1, 1) },
    specularColorMap: { value: null },
    specularColorMapTransform: { value: /* @__PURE__ */ new Qe() },
    specularIntensity: { value: 1 },
    specularIntensityMap: { value: null },
    specularIntensityMapTransform: { value: /* @__PURE__ */ new Qe() },
    anisotropyVector: { value: /* @__PURE__ */ new ee() },
    anisotropyMap: { value: null },
    anisotropyMapTransform: { value: /* @__PURE__ */ new Qe() }
  }]),
  vertexShader: tt.meshphysical_vert,
  fragmentShader: tt.meshphysical_frag
};
var ns = {
  r: 0,
  b: 0,
  g: 0
}, Id = /* @__PURE__ */ new dt(), uc = /* @__PURE__ */ new Qe();
uc.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Dd(e, t, i, n, r, s) {
  const a = new $e(0);
  let o = r === !0 ? 0 : 1, l, c, h = null, d = 0, u = null;
  function f(T) {
    let S = T.isScene === !0 ? T.background : null;
    if (S && S.isTexture) {
      const v = T.backgroundBlurriness > 0;
      S = t.get(S, v);
    }
    return S;
  }
  function _(T) {
    let S = !1;
    const v = f(T);
    v === null ? m(a, o) : v && v.isColor && (m(v, 1), S = !0);
    const A = e.xr.getEnvironmentBlendMode();
    A === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, s) : A === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, s), (e.autoClear || S) && (i.buffers.depth.setTest(!0), i.buffers.depth.setMask(!0), i.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
  }
  function M(T, S) {
    const v = f(S);
    v && (v.isCubeTexture || v.mapping === 306) ? (c === void 0 && (c = new St(new kn(1, 1, 1), new si({
      name: "BackgroundCubeMaterial",
      uniforms: Xn(gi.backgroundCube.uniforms),
      vertexShader: gi.backgroundCube.vertexShader,
      fragmentShader: gi.backgroundCube.fragmentShader,
      side: 1,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(A, w, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), n.update(c)), c.material.uniforms.envMap.value = v, c.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(Id.makeRotationFromEuler(S.backgroundRotation)).transpose(), v.isCubeTexture && v.isRenderTargetTexture === !1 && c.material.uniforms.backgroundRotation.value.premultiply(uc), c.material.toneMapped = ot.getTransfer(v.colorSpace) !== fs, (h !== v || d !== v.version || u !== e.toneMapping) && (c.material.needsUpdate = !0, h = v, d = v.version, u = e.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new St(new _s(2, 2), new si({
      name: "BackgroundMaterial",
      uniforms: Xn(gi.background.uniforms),
      vertexShader: gi.background.vertexShader,
      fragmentShader: gi.background.fragmentShader,
      side: 0,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), n.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, l.material.toneMapped = ot.getTransfer(v.colorSpace) !== fs, v.matrixAutoUpdate === !0 && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (h !== v || d !== v.version || u !== e.toneMapping) && (l.material.needsUpdate = !0, h = v, d = v.version, u = e.toneMapping), l.layers.enableAll(), T.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function m(T, S) {
    T.getRGB(ns, sc(e)), i.buffers.color.setClear(ns.r, ns.g, ns.b, S, s);
  }
  function p() {
    c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(T, S = 1) {
      a.set(T), o = S, m(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(T) {
      o = T, m(a, o);
    },
    render: _,
    addToRenderList: M,
    dispose: p
  };
}
function Nd(e, t) {
  const i = e.getParameter(e.MAX_VERTEX_ATTRIBS), n = {}, r = u(null);
  let s = r, a = !1;
  function o(R, V, Z, G, X) {
    let H = !1;
    const B = d(R, G, Z, V);
    s !== B && (s = B, c(s.object)), H = f(R, G, Z, X), H && _(R, G, Z, X), X !== null && t.update(X, e.ELEMENT_ARRAY_BUFFER), (H || a) && (a = !1, v(R, V, Z, G), X !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(X).buffer));
  }
  function l() {
    return e.createVertexArray();
  }
  function c(R) {
    return e.bindVertexArray(R);
  }
  function h(R) {
    return e.deleteVertexArray(R);
  }
  function d(R, V, Z, G) {
    const X = G.wireframe === !0;
    let H = n[V.id];
    H === void 0 && (H = {}, n[V.id] = H);
    const B = R.isInstancedMesh === !0 ? R.id : 0;
    let ae = H[B];
    ae === void 0 && (ae = {}, H[B] = ae);
    let ie = ae[Z.id];
    ie === void 0 && (ie = {}, ae[Z.id] = ie);
    let oe = ie[X];
    return oe === void 0 && (oe = u(l()), ie[X] = oe), oe;
  }
  function u(R) {
    const V = [], Z = [], G = [];
    for (let X = 0; X < i; X++)
      V[X] = 0, Z[X] = 0, G[X] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: V,
      enabledAttributes: Z,
      attributeDivisors: G,
      object: R,
      attributes: {},
      index: null
    };
  }
  function f(R, V, Z, G) {
    const X = s.attributes, H = V.attributes;
    let B = 0;
    const ae = Z.getAttributes();
    for (const ie in ae) if (ae[ie].location >= 0) {
      const oe = X[ie];
      let de = H[ie];
      if (de === void 0 && (ie === "instanceMatrix" && R.instanceMatrix && (de = R.instanceMatrix), ie === "instanceColor" && R.instanceColor && (de = R.instanceColor)), oe === void 0 || oe.attribute !== de || de && oe.data !== de.data) return !0;
      B++;
    }
    return s.attributesNum !== B || s.index !== G;
  }
  function _(R, V, Z, G) {
    const X = {}, H = V.attributes;
    let B = 0;
    const ae = Z.getAttributes();
    for (const ie in ae) if (ae[ie].location >= 0) {
      let oe = H[ie];
      oe === void 0 && (ie === "instanceMatrix" && R.instanceMatrix && (oe = R.instanceMatrix), ie === "instanceColor" && R.instanceColor && (oe = R.instanceColor));
      const de = {};
      de.attribute = oe, oe && oe.data && (de.data = oe.data), X[ie] = de, B++;
    }
    s.attributes = X, s.attributesNum = B, s.index = G;
  }
  function M() {
    const R = s.newAttributes;
    for (let V = 0, Z = R.length; V < Z; V++) R[V] = 0;
  }
  function m(R) {
    p(R, 0);
  }
  function p(R, V) {
    const Z = s.newAttributes, G = s.enabledAttributes, X = s.attributeDivisors;
    Z[R] = 1, G[R] === 0 && (e.enableVertexAttribArray(R), G[R] = 1), X[R] !== V && (e.vertexAttribDivisor(R, V), X[R] = V);
  }
  function T() {
    const R = s.newAttributes, V = s.enabledAttributes;
    for (let Z = 0, G = V.length; Z < G; Z++) V[Z] !== R[Z] && (e.disableVertexAttribArray(Z), V[Z] = 0);
  }
  function S(R, V, Z, G, X, H, B) {
    B === !0 ? e.vertexAttribIPointer(R, V, Z, X, H) : e.vertexAttribPointer(R, V, Z, G, X, H);
  }
  function v(R, V, Z, G) {
    M();
    const X = G.attributes, H = Z.getAttributes(), B = V.defaultAttributeValues;
    for (const ae in H) {
      const ie = H[ae];
      if (ie.location >= 0) {
        let oe = X[ae];
        if (oe === void 0 && (ae === "instanceMatrix" && R.instanceMatrix && (oe = R.instanceMatrix), ae === "instanceColor" && R.instanceColor && (oe = R.instanceColor)), oe !== void 0) {
          const de = oe.normalized, Re = oe.itemSize, rt = t.get(oe);
          if (rt === void 0) continue;
          const We = rt.buffer, J = rt.type, ue = rt.bytesPerElement, Me = J === e.INT || J === e.UNSIGNED_INT || oe.gpuType === 1013;
          if (oe.isInterleavedBufferAttribute) {
            const me = oe.data, Oe = me.stride, ze = oe.offset;
            if (me.isInstancedInterleavedBuffer) {
              for (let Ne = 0; Ne < ie.locationSize; Ne++) p(ie.location + Ne, me.meshPerAttribute);
              R.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = me.meshPerAttribute * me.count);
            } else for (let Ne = 0; Ne < ie.locationSize; Ne++) m(ie.location + Ne);
            e.bindBuffer(e.ARRAY_BUFFER, We);
            for (let Ne = 0; Ne < ie.locationSize; Ne++) S(ie.location + Ne, Re / ie.locationSize, J, de, Oe * ue, (ze + Re / ie.locationSize * Ne) * ue, Me);
          } else {
            if (oe.isInstancedBufferAttribute) {
              for (let me = 0; me < ie.locationSize; me++) p(ie.location + me, oe.meshPerAttribute);
              R.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else for (let me = 0; me < ie.locationSize; me++) m(ie.location + me);
            e.bindBuffer(e.ARRAY_BUFFER, We);
            for (let me = 0; me < ie.locationSize; me++) S(ie.location + me, Re / ie.locationSize, J, de, Re * ue, Re / ie.locationSize * me * ue, Me);
          }
        } else if (B !== void 0) {
          const de = B[ae];
          if (de !== void 0) switch (de.length) {
            case 2:
              e.vertexAttrib2fv(ie.location, de);
              break;
            case 3:
              e.vertexAttrib3fv(ie.location, de);
              break;
            case 4:
              e.vertexAttrib4fv(ie.location, de);
              break;
            default:
              e.vertexAttrib1fv(ie.location, de);
          }
        }
      }
    }
    T();
  }
  function A() {
    E();
    for (const R in n) {
      const V = n[R];
      for (const Z in V) {
        const G = V[Z];
        for (const X in G) {
          const H = G[X];
          for (const B in H)
            h(H[B].object), delete H[B];
          delete G[X];
        }
      }
      delete n[R];
    }
  }
  function w(R) {
    if (n[R.id] === void 0) return;
    const V = n[R.id];
    for (const Z in V) {
      const G = V[Z];
      for (const X in G) {
        const H = G[X];
        for (const B in H)
          h(H[B].object), delete H[B];
        delete G[X];
      }
    }
    delete n[R.id];
  }
  function C(R) {
    for (const V in n) {
      const Z = n[V];
      for (const G in Z) {
        const X = Z[G];
        if (X[R.id] === void 0) continue;
        const H = X[R.id];
        for (const B in H)
          h(H[B].object), delete H[B];
        delete X[R.id];
      }
    }
  }
  function g(R) {
    for (const V in n) {
      const Z = n[V], G = R.isInstancedMesh === !0 ? R.id : 0, X = Z[G];
      if (X !== void 0) {
        for (const H in X) {
          const B = X[H];
          for (const ae in B)
            h(B[ae].object), delete B[ae];
          delete X[H];
        }
        delete Z[G], Object.keys(Z).length === 0 && delete n[V];
      }
    }
  }
  function E() {
    F(), a = !0, s !== r && (s = r, c(s.object));
  }
  function F() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: E,
    resetDefaultState: F,
    dispose: A,
    releaseStatesOfGeometry: w,
    releaseStatesOfObject: g,
    releaseStatesOfProgram: C,
    initAttributes: M,
    enableAttribute: m,
    disableUnusedAttributes: T
  };
}
function Ud(e, t, i) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, c) {
    e.drawArrays(n, l, c), i.update(c, n, 1);
  }
  function a(l, c, h) {
    h !== 0 && (e.drawArraysInstanced(n, l, c, h), i.update(c, n, h));
  }
  function o(l, c, h) {
    if (h === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, c, 0, h);
    let d = 0;
    for (let u = 0; u < h; u++) d += c[u];
    i.update(d, n, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function Od(e, t, i, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const C = t.get("EXT_texture_filter_anisotropic");
      r = e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(C) {
    return !(C !== 1023 && n.convert(C) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const g = C === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(C !== 1009 && n.convert(C) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && C !== 1015 && !g);
  }
  function l(C) {
    if (C === "highp") {
      if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = i.precision !== void 0 ? i.precision : "highp";
  const h = l(c);
  h !== c && (Ge("WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const d = i.logarithmicDepthBuffer === !0, u = i.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
  i.reversedDepthBuffer === !0 && u === !1 && Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const f = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), _ = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = e.getParameter(e.MAX_TEXTURE_SIZE), m = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), p = e.getParameter(e.MAX_VERTEX_ATTRIBS), T = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), S = e.getParameter(e.MAX_VARYING_VECTORS), v = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), A = e.getParameter(e.MAX_SAMPLES), w = e.getParameter(e.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: _,
    maxTextureSize: M,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: T,
    maxVaryings: S,
    maxFragmentUniforms: v,
    maxSamples: A,
    samples: w
  };
}
function Fd(e) {
  const t = this;
  let i = null, n = 0, r = !1, s = !1;
  const a = new Vi(), o = new Qe(), l = {
    value: null,
    needsUpdate: !1
  };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, u) {
    const f = d.length !== 0 || u || n !== 0 || r;
    return r = u, n = d.length, f;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, u) {
    i = h(d, u, 0);
  }, this.setState = function(d, u, f) {
    const _ = d.clippingPlanes, M = d.clipIntersection, m = d.clipShadows, p = e.get(d);
    if (!r || _ === null || _.length === 0 || s && !m) s ? h(null) : c();
    else {
      const T = s ? 0 : n, S = T * 4;
      let v = p.clippingState || null;
      l.value = v, v = h(_, u, S, f);
      for (let A = 0; A !== S; ++A) v[A] = i[A];
      p.clippingState = v, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== i && (l.value = i, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(d, u, f, _) {
    const M = d !== null ? d.length : 0;
    let m = null;
    if (M !== 0) {
      if (m = l.value, _ !== !0 || m === null) {
        const p = f + M * 4, T = u.matrixWorldInverse;
        o.getNormalMatrix(T), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let S = 0, v = f; S !== M; ++S, v += 4)
          a.copy(d[S]).applyMatrix4(T, o), a.normal.toArray(m, v), m[v + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return t.numPlanes = M, t.numIntersection = 0, m;
  }
}
var Gi = 4, Do = [
  0.125,
  0.215,
  0.35,
  0.446,
  0.526,
  0.582
], $i = 20, Bd = 256, sr = /* @__PURE__ */ new Ca(), No = /* @__PURE__ */ new $e(), ta = null, ia = 0, na = 0, ra = !1, zd = /* @__PURE__ */ new P(), va = class {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(e, t = 0, i = 0.1, n = 100, r = {}) {
    const { size: s = 256, position: a = zd } = r;
    ta = this._renderer.getRenderTarget(), ia = this._renderer.getActiveCubeFace(), na = this._renderer.getActiveMipmapLevel(), ra = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(s);
    const o = this._allocateTargets();
    return o.depthBuffer = !0, this._sceneToCubeUV(e, i, n, o, a), t > 0 && this._blur(o, 0, 0, t), this._applyPMREM(o), this._cleanup(o), o;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Fo(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Oo(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ta, ia, na), this._renderer.xr.enabled = ra, e.scissorTest = !1, Rn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ta = this._renderer.getRenderTarget(), ia = this._renderer.getActiveCubeFace(), na = this._renderer.getActiveMipmapLevel(), ra = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = {
      magFilter: Jt,
      minFilter: Jt,
      generateMipmaps: !1,
      type: en,
      format: fr,
      colorSpace: ha,
      depthBuffer: !1
    }, n = Uo(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Uo(e, t, i);
      const { _lodMax: r } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Vd(r)), this._blurMaterial = Hd(r, e, t), this._ggxMaterial = Gd(r, e, t);
    }
    return n;
  }
  _compileMaterial(e) {
    const t = new St(new bt(), e);
    this._renderer.compile(t, sr);
  }
  _sceneToCubeUV(e, t, i, n, r) {
    const s = new kt(90, 1, t, i), a = [
      1,
      -1,
      1,
      1,
      1,
      1
    ], o = [
      1,
      1,
      1,
      -1,
      -1,
      -1
    ], l = this._renderer, c = l.autoClear, h = l.toneMapping;
    l.getClearColor(No), l.toneMapping = 0, l.autoClear = !1, l.state.buffers.depth.getReversed() && (l.setRenderTarget(n), l.clearDepth(), l.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new St(new kn(), new Pl({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    })));
    const d = this._backgroundBox, u = d.material;
    let f = !1;
    const _ = e.background;
    _ ? _.isColor && (u.color.copy(_), e.background = null, f = !0) : (u.color.copy(No), f = !0);
    for (let M = 0; M < 6; M++) {
      const m = M % 3;
      m === 0 ? (s.up.set(0, a[M], 0), s.position.set(r.x, r.y, r.z), s.lookAt(r.x + o[M], r.y, r.z)) : m === 1 ? (s.up.set(0, 0, a[M]), s.position.set(r.x, r.y, r.z), s.lookAt(r.x, r.y + o[M], r.z)) : (s.up.set(0, a[M], 0), s.position.set(r.x, r.y, r.z), s.lookAt(r.x, r.y, r.z + o[M]));
      const p = this._cubeSize;
      Rn(n, m * p, M > 2 ? p : 0, p, p), l.setRenderTarget(n), f && l.render(d, s), l.render(e, s);
    }
    l.toneMapping = h, l.autoClear = c, e.background = _;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, n = e.mapping === 301 || e.mapping === 302;
    n ? (this._cubemapMaterial === null && (this._cubemapMaterial = Fo()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Oo());
    const r = n ? this._cubemapMaterial : this._equirectMaterial, s = this._lodMeshes[0];
    s.material = r;
    const a = r.uniforms;
    a.envMap.value = e;
    const o = this._cubeSize;
    Rn(t, 0, 0, 3 * o, 2 * o), i.setRenderTarget(t), i.render(s, sr);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = !1;
    const n = this._lodMeshes.length;
    for (let r = 1; r < n; r++) this._applyGGXFilter(e, r - 1, r);
    t.autoClear = i;
  }
  _applyGGXFilter(e, t, i) {
    const n = this._renderer, r = this._pingPongRenderTarget, s = this._ggxMaterial, a = this._lodMeshes[i];
    a.material = s;
    const o = s.uniforms, l = i / (this._lodMeshes.length - 1), c = t / (this._lodMeshes.length - 1), h = Math.sqrt(l * l - c * c) * (0 + l * 1.25), { _lodMax: d } = this, u = this._sizeLods[i], f = 3 * u * (i > d - Gi ? i - d + Gi : 0), _ = 4 * (this._cubeSize - u);
    o.envMap.value = e.texture, o.roughness.value = h, o.mipInt.value = d - t, Rn(r, f, _, 3 * u, 2 * u), n.setRenderTarget(r), n.render(a, sr), o.envMap.value = r.texture, o.roughness.value = 0, o.mipInt.value = d - i, Rn(e, f, _, 3 * u, 2 * u), n.setRenderTarget(e), n.render(a, sr);
  }
  _blur(e, t, i, n, r) {
    const s = this._pingPongRenderTarget;
    this._halfBlur(e, s, t, i, n, "latitudinal", r), this._halfBlur(s, e, i, i, n, "longitudinal", r);
  }
  _halfBlur(e, t, i, n, r, s, a) {
    const o = this._renderer, l = this._blurMaterial;
    s !== "latitudinal" && s !== "longitudinal" && ke("blur direction must be either latitudinal or longitudinal!");
    const c = 3, h = this._lodMeshes[n];
    h.material = l;
    const d = l.uniforms, u = this._sizeLods[i] - 1, f = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / (2 * $i - 1), _ = r / f, M = isFinite(r) ? 1 + Math.floor(c * _) : $i;
    M > $i && Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${$i}`);
    const m = [];
    let p = 0;
    for (let v = 0; v < $i; ++v) {
      const A = v / _, w = Math.exp(-A * A / 2);
      m.push(w), v === 0 ? p += w : v < M && (p += 2 * w);
    }
    for (let v = 0; v < m.length; v++) m[v] = m[v] / p;
    d.envMap.value = e.texture, d.samples.value = M, d.weights.value = m, d.latitudinal.value = s === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: T } = this;
    d.dTheta.value = f, d.mipInt.value = T - i;
    const S = this._sizeLods[n];
    Rn(t, 3 * S * (n > T - Gi ? n - T + Gi : 0), 4 * (this._cubeSize - S), 3 * S, 2 * S), o.setRenderTarget(t), o.render(h, sr);
  }
};
function Vd(e) {
  const t = [], i = [], n = [];
  let r = e;
  const s = e - Gi + 1 + Do.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > e - Gi ? l = Do[a - e + Gi - 1] : a === 0 && (l = 0), i.push(l);
    const c = 1 / (o - 2), h = -c, d = 1 + c, u = [
      h,
      h,
      d,
      h,
      d,
      d,
      h,
      h,
      d,
      d,
      h,
      d
    ], f = 6, _ = 6, M = 3, m = 2, p = 1, T = new Float32Array(M * _ * f), S = new Float32Array(m * _ * f), v = new Float32Array(p * _ * f);
    for (let w = 0; w < f; w++) {
      const C = w % 3 * 2 / 3 - 1, g = w > 2 ? 0 : -1, E = [
        C,
        g,
        0,
        C + 2 / 3,
        g,
        0,
        C + 2 / 3,
        g + 1,
        0,
        C,
        g,
        0,
        C + 2 / 3,
        g + 1,
        0,
        C,
        g + 1,
        0
      ];
      T.set(E, M * _ * w), S.set(u, m * _ * w);
      const F = [
        w,
        w,
        w,
        w,
        w,
        w
      ];
      v.set(F, p * _ * w);
    }
    const A = new bt();
    A.setAttribute("position", new $t(T, M)), A.setAttribute("uv", new $t(S, m)), A.setAttribute("faceIndex", new $t(v, p)), n.push(new St(A, null)), r > Gi && r--;
  }
  return {
    lodMeshes: n,
    sizeLods: t,
    sigmas: i
  };
}
function Uo(e, t, i) {
  const n = new _i(e, t, i);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Rn(e, t, i, n, r) {
  e.viewport.set(t, i, n, r), e.scissor.set(t, i, n, r);
}
function Gd(e, t, i) {
  return new si({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: Bd,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / i,
      CUBEUV_MAX_MIP: `${e}.0`
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 }
    },
    vertexShader: xs(),
    fragmentShader: `

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
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Hd(e, t, i) {
  const n = new Float32Array($i), r = new P(0, 1, 0);
  return new si({
    name: "SphericalGaussianBlur",
    defines: {
      n: $i,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / i,
      CUBEUV_MAX_MIP: `${e}.0`
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
    vertexShader: xs(),
    fragmentShader: `

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
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Oo() {
  return new si({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: xs(),
    fragmentShader: `

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
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Fo() {
  return new si({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: xs(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function xs() {
  return `

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
	`;
}
var dc = class extends _i {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const i = {
      width: e,
      height: e,
      depth: 1
    }, n = [
      i,
      i,
      i,
      i,
      i,
      i
    ];
    this.texture = new Dl(n), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = {
      uniforms: { tEquirect: { value: null } },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, n = new kn(5, 5, 5), r = new si({
      name: "CubemapFromEquirect",
      uniforms: Xn(i.uniforms),
      vertexShader: i.vertexShader,
      fragmentShader: i.fragmentShader,
      side: 1,
      blending: 0
    });
    r.uniforms.tEquirect.value = t;
    const s = new St(n, r), a = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = Jt), new md(1, 10, this).update(e, s), t.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
  }
  clear(e, t = !0, i = !0, n = !0) {
    const r = e.getRenderTarget();
    for (let s = 0; s < 6; s++)
      e.setRenderTarget(this, s), e.clear(t, i, n);
    e.setRenderTarget(r);
  }
};
function kd(e) {
  let t = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), n = null;
  function r(u, f = !1) {
    return u == null ? null : f ? a(u) : s(u);
  }
  function s(u) {
    if (u && u.isTexture) {
      const f = u.mapping;
      if (f === 303 || f === 304) if (t.has(u)) {
        const _ = t.get(u).texture;
        return o(_, u.mapping);
      } else {
        const _ = u.image;
        if (_ && _.height > 0) {
          const M = new dc(_.height);
          return M.fromEquirectangularTexture(e, u), t.set(u, M), u.addEventListener("dispose", c), o(M.texture, u.mapping);
        } else return null;
      }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const f = u.mapping, _ = f === 303 || f === 304, M = f === 301 || f === 302;
      if (_ || M) {
        let m = i.get(u);
        const p = m !== void 0 ? m.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== p)
          return n === null && (n = new va(e)), m = _ ? n.fromEquirectangular(u, m) : n.fromCubemap(u, m), m.texture.pmremVersion = u.pmremVersion, i.set(u, m), m.texture;
        if (m !== void 0) return m.texture;
        {
          const T = u.image;
          return _ && T && T.height > 0 || M && T && l(T) ? (n === null && (n = new va(e)), m = _ ? n.fromEquirectangular(u) : n.fromCubemap(u), m.texture.pmremVersion = u.pmremVersion, i.set(u, m), u.addEventListener("dispose", h), m.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, f) {
    return f === 303 ? u.mapping = 301 : f === 304 && (u.mapping = 302), u;
  }
  function l(u) {
    let f = 0;
    const _ = 6;
    for (let M = 0; M < _; M++) u[M] !== void 0 && f++;
    return f === _;
  }
  function c(u) {
    const f = u.target;
    f.removeEventListener("dispose", c);
    const _ = t.get(f);
    _ !== void 0 && (t.delete(f), _.dispose());
  }
  function h(u) {
    const f = u.target;
    f.removeEventListener("dispose", h);
    const _ = i.get(f);
    _ !== void 0 && (i.delete(f), _.dispose());
  }
  function d() {
    t = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), n !== null && (n.dispose(), n = null);
  }
  return {
    get: r,
    dispose: d
  };
}
function Wd(e) {
  const t = {};
  function i(n) {
    if (t[n] !== void 0) return t[n];
    const r = e.getExtension(n);
    return t[n] = r, r;
  }
  return {
    has: function(n) {
      return i(n) !== null;
    },
    init: function() {
      i("EXT_color_buffer_float"), i("WEBGL_clip_cull_distance"), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float"), i("WEBGL_multisampled_render_to_texture"), i("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = i(n);
      return r === null && On("WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Xd(e, t, i, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const u = d.target;
    u.index !== null && t.remove(u.index);
    for (const _ in u.attributes) t.remove(u.attributes[_]);
    u.removeEventListener("dispose", a), delete r[u.id];
    const f = s.get(u);
    f && (t.remove(f), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, i.memory.geometries--;
  }
  function o(d, u) {
    return r[u.id] === !0 || (u.addEventListener("dispose", a), r[u.id] = !0, i.memory.geometries++), u;
  }
  function l(d) {
    const u = d.attributes;
    for (const f in u) t.update(u[f], e.ARRAY_BUFFER);
  }
  function c(d) {
    const u = [], f = d.index, _ = d.attributes.position;
    let M = 0;
    if (_ === void 0) return;
    if (f !== null) {
      const T = f.array;
      M = f.version;
      for (let S = 0, v = T.length; S < v; S += 3) {
        const A = T[S + 0], w = T[S + 1], C = T[S + 2];
        u.push(A, w, w, C, C, A);
      }
    } else {
      const T = _.array;
      M = _.version;
      for (let S = 0, v = T.length / 3 - 1; S < v; S += 3) {
        const A = S + 0, w = S + 1, C = S + 2;
        u.push(A, w, w, C, C, A);
      }
    }
    const m = new (_.count >= 65535 ? wl : Tl)(u, 1);
    m.version = M;
    const p = s.get(d);
    p && t.remove(p), s.set(d, m);
  }
  function h(d) {
    const u = s.get(d);
    if (u) {
      const f = d.index;
      f !== null && u.version < f.version && c(d);
    } else c(d);
    return s.get(d);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function Yd(e, t, i) {
  let n;
  function r(d) {
    n = d;
  }
  let s, a;
  function o(d) {
    s = d.type, a = d.bytesPerElement;
  }
  function l(d, u) {
    e.drawElements(n, u, s, d * a), i.update(u, n, 1);
  }
  function c(d, u, f) {
    f !== 0 && (e.drawElementsInstanced(n, u, s, d * a, f), i.update(u, n, f));
  }
  function h(d, u, f) {
    if (f === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, s, d, 0, f);
    let _ = 0;
    for (let M = 0; M < f; M++) _ += u[M];
    i.update(_, n, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h;
}
function qd(e) {
  const t = {
    geometries: 0,
    textures: 0
  }, i = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (i.calls++, a) {
      case e.TRIANGLES:
        i.triangles += o * (s / 3);
        break;
      case e.LINES:
        i.lines += o * (s / 2);
        break;
      case e.LINE_STRIP:
        i.lines += o * (s - 1);
        break;
      case e.LINE_LOOP:
        i.lines += o * s;
        break;
      case e.POINTS:
        i.points += o * s;
        break;
      default:
        ke("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    i.calls = 0, i.triangles = 0, i.points = 0, i.lines = 0;
  }
  return {
    memory: t,
    render: i,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function Zd(e, t, i) {
  const n = /* @__PURE__ */ new WeakMap(), r = new Et();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = h !== void 0 ? h.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== d) {
      let E = function() {
        C.dispose(), n.delete(o), o.removeEventListener("dispose", E);
      };
      u !== void 0 && u.texture.dispose();
      const f = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, M = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], T = o.morphAttributes.color || [];
      let S = 0;
      f === !0 && (S = 1), _ === !0 && (S = 2), M === !0 && (S = 3);
      let v = o.attributes.position.count * S, A = 1;
      v > t.maxTextureSize && (A = Math.ceil(v / t.maxTextureSize), v = t.maxTextureSize);
      const w = new Float32Array(v * A * 4 * d), C = new xl(w, v, A, d);
      C.type = Mr, C.needsUpdate = !0;
      const g = S * 4;
      for (let F = 0; F < d; F++) {
        const R = m[F], V = p[F], Z = T[F], G = v * A * 4 * F;
        for (let X = 0; X < R.count; X++) {
          const H = X * g;
          f === !0 && (r.fromBufferAttribute(R, X), w[G + H + 0] = r.x, w[G + H + 1] = r.y, w[G + H + 2] = r.z, w[G + H + 3] = 0), _ === !0 && (r.fromBufferAttribute(V, X), w[G + H + 4] = r.x, w[G + H + 5] = r.y, w[G + H + 6] = r.z, w[G + H + 7] = 0), M === !0 && (r.fromBufferAttribute(Z, X), w[G + H + 8] = r.x, w[G + H + 9] = r.y, w[G + H + 10] = r.z, w[G + H + 11] = Z.itemSize === 4 ? r.w : 1);
        }
      }
      u = {
        count: d,
        texture: C,
        size: new ee(v, A)
      }, n.set(o, u), o.addEventListener("dispose", E);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null) l.getUniforms().setValue(e, "morphTexture", a.morphTexture, i);
    else {
      let f = 0;
      for (let M = 0; M < c.length; M++) f += c[M];
      const _ = o.morphTargetsRelative ? 1 : 1 - f;
      l.getUniforms().setValue(e, "morphTargetBaseInfluence", _), l.getUniforms().setValue(e, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(e, "morphTargetsTexture", u.texture, i), l.getUniforms().setValue(e, "morphTargetsTextureSize", u.size);
  }
  return { update: s };
}
function Kd(e, t, i, n, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const h = r.render.frame, d = c.geometry, u = t.get(c, d);
    if (s.get(u) !== h && (t.update(u), s.set(u, h)), c.isInstancedMesh && (c.hasEventListener("dispose", l) === !1 && c.addEventListener("dispose", l), s.get(c) !== h && (i.update(c.instanceMatrix, e.ARRAY_BUFFER), c.instanceColor !== null && i.update(c.instanceColor, e.ARRAY_BUFFER), s.set(c, h))), c.isSkinnedMesh) {
      const f = c.skeleton;
      s.get(f) !== h && (f.update(), s.set(f, h));
    }
    return u;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const h = c.target;
    h.removeEventListener("dispose", l), n.releaseStatesOfObject(h), i.remove(h.instanceMatrix), h.instanceColor !== null && i.remove(h.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
var Jd = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function $d(e, t, i, n, r, s) {
  const a = new _i(t, i, {
    type: e,
    depthBuffer: r,
    stencilBuffer: s,
    samples: n ? 4 : 0,
    depthTexture: r ? new Hn(t, i) : void 0
  }), o = new _i(t, i, {
    type: en,
    depthBuffer: !1,
    stencilBuffer: !1
  }), l = new bt();
  l.setAttribute("position", new lt([
    -1,
    3,
    0,
    -1,
    -1,
    0,
    3,
    -1,
    0
  ], 3)), l.setAttribute("uv", new lt([
    0,
    2,
    0,
    0,
    2,
    0
  ], 2));
  const c = new Ku({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
    fragmentShader: `
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
			}`,
    depthTest: !1,
    depthWrite: !1
  }), h = new St(l, c), d = new Ca(-1, 1, 1, -1, 0, 1);
  let u = null, f = null, _ = !1, M, m = null, p = [], T = !1;
  this.setSize = function(S, v) {
    a.setSize(S, v), o.setSize(S, v);
    for (let A = 0; A < p.length; A++) {
      const w = p[A];
      w.setSize && w.setSize(S, v);
    }
  }, this.setEffects = function(S) {
    p = S, T = p.length > 0 && p[0].isRenderPass === !0;
    const v = a.width, A = a.height;
    for (let w = 0; w < p.length; w++) {
      const C = p[w];
      C.setSize && C.setSize(v, A);
    }
  }, this.begin = function(S, v) {
    if (_ || S.toneMapping === 0 && p.length === 0) return !1;
    if (m = v, v !== null) {
      const A = v.width, w = v.height;
      (a.width !== A || a.height !== w) && this.setSize(A, w);
    }
    return T === !1 && S.setRenderTarget(a), M = S.toneMapping, S.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return T;
  }, this.end = function(S, v) {
    S.toneMapping = M, _ = !0;
    let A = a, w = o;
    for (let C = 0; C < p.length; C++) {
      const g = p[C];
      if (g.enabled !== !1 && (g.render(S, w, A, v), g.needsSwap !== !1)) {
        const E = A;
        A = w, w = E;
      }
    }
    if (u !== S.outputColorSpace || f !== S.toneMapping) {
      u = S.outputColorSpace, f = S.toneMapping, c.defines = {}, ot.getTransfer(u) === "srgb" && (c.defines.SRGB_TRANSFER = "");
      const C = Jd[f];
      C && (c.defines[C] = ""), c.needsUpdate = !0;
    }
    c.uniforms.tDiffuse.value = A.texture, S.setRenderTarget(m), S.render(h, d), m = null, _ = !1;
  }, this.isCompositing = function() {
    return _;
  }, this.dispose = function() {
    a.depthTexture && a.depthTexture.dispose(), a.dispose(), o.dispose(), l.dispose(), c.dispose();
  };
}
var fc = /* @__PURE__ */ new Qt(), _a = /* @__PURE__ */ new Hn(1, 1), pc = /* @__PURE__ */ new xl(), mc = /* @__PURE__ */ new Vh(), gc = /* @__PURE__ */ new Dl(), Bo = [], zo = [], Vo = new Float32Array(16), Go = new Float32Array(9), Ho = new Float32Array(4);
function Yn(e, t, i) {
  const n = e[0];
  if (n <= 0 || n > 0) return e;
  const r = t * i;
  let s = Bo[r];
  if (s === void 0 && (s = new Float32Array(r), Bo[r] = s), t !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += i, e[a].toArray(s, o);
  }
  return s;
}
function Ct(e, t) {
  if (e.length !== t.length) return !1;
  for (let i = 0, n = e.length; i < n; i++) if (e[i] !== t[i]) return !1;
  return !0;
}
function Pt(e, t) {
  for (let i = 0, n = t.length; i < n; i++) e[i] = t[i];
}
function Ss(e, t) {
  let i = zo[t];
  i === void 0 && (i = new Int32Array(t), zo[t] = i);
  for (let n = 0; n !== t; ++n) i[n] = e.allocateTextureUnit();
  return i;
}
function Qd(e, t) {
  const i = this.cache;
  i[0] !== t && (e.uniform1f(this.addr, t), i[0] = t);
}
function jd(e, t) {
  const i = this.cache;
  if (t.x !== void 0)
    (i[0] !== t.x || i[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), i[0] = t.x, i[1] = t.y);
  else {
    if (Ct(i, t)) return;
    e.uniform2fv(this.addr, t), Pt(i, t);
  }
}
function ef(e, t) {
  const i = this.cache;
  if (t.x !== void 0)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), i[0] = t.x, i[1] = t.y, i[2] = t.z);
  else if (t.r !== void 0)
    (i[0] !== t.r || i[1] !== t.g || i[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), i[0] = t.r, i[1] = t.g, i[2] = t.b);
  else {
    if (Ct(i, t)) return;
    e.uniform3fv(this.addr, t), Pt(i, t);
  }
}
function tf(e, t) {
  const i = this.cache;
  if (t.x !== void 0)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.w);
  else {
    if (Ct(i, t)) return;
    e.uniform4fv(this.addr, t), Pt(i, t);
  }
}
function nf(e, t) {
  const i = this.cache, n = t.elements;
  if (n === void 0) {
    if (Ct(i, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), Pt(i, t);
  } else {
    if (Ct(i, n)) return;
    Ho.set(n), e.uniformMatrix2fv(this.addr, !1, Ho), Pt(i, n);
  }
}
function rf(e, t) {
  const i = this.cache, n = t.elements;
  if (n === void 0) {
    if (Ct(i, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), Pt(i, t);
  } else {
    if (Ct(i, n)) return;
    Go.set(n), e.uniformMatrix3fv(this.addr, !1, Go), Pt(i, n);
  }
}
function sf(e, t) {
  const i = this.cache, n = t.elements;
  if (n === void 0) {
    if (Ct(i, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), Pt(i, t);
  } else {
    if (Ct(i, n)) return;
    Vo.set(n), e.uniformMatrix4fv(this.addr, !1, Vo), Pt(i, n);
  }
}
function af(e, t) {
  const i = this.cache;
  i[0] !== t && (e.uniform1i(this.addr, t), i[0] = t);
}
function of(e, t) {
  const i = this.cache;
  if (t.x !== void 0)
    (i[0] !== t.x || i[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), i[0] = t.x, i[1] = t.y);
  else {
    if (Ct(i, t)) return;
    e.uniform2iv(this.addr, t), Pt(i, t);
  }
}
function lf(e, t) {
  const i = this.cache;
  if (t.x !== void 0)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), i[0] = t.x, i[1] = t.y, i[2] = t.z);
  else {
    if (Ct(i, t)) return;
    e.uniform3iv(this.addr, t), Pt(i, t);
  }
}
function cf(e, t) {
  const i = this.cache;
  if (t.x !== void 0)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.w);
  else {
    if (Ct(i, t)) return;
    e.uniform4iv(this.addr, t), Pt(i, t);
  }
}
function hf(e, t) {
  const i = this.cache;
  i[0] !== t && (e.uniform1ui(this.addr, t), i[0] = t);
}
function uf(e, t) {
  const i = this.cache;
  if (t.x !== void 0)
    (i[0] !== t.x || i[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), i[0] = t.x, i[1] = t.y);
  else {
    if (Ct(i, t)) return;
    e.uniform2uiv(this.addr, t), Pt(i, t);
  }
}
function df(e, t) {
  const i = this.cache;
  if (t.x !== void 0)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), i[0] = t.x, i[1] = t.y, i[2] = t.z);
  else {
    if (Ct(i, t)) return;
    e.uniform3uiv(this.addr, t), Pt(i, t);
  }
}
function ff(e, t) {
  const i = this.cache;
  if (t.x !== void 0)
    (i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.w);
  else {
    if (Ct(i, t)) return;
    e.uniform4uiv(this.addr, t), Pt(i, t);
  }
}
function pf(e, t, i) {
  const n = this.cache, r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === e.SAMPLER_2D_SHADOW ? (_a.compareFunction = i.isReversedDepthBuffer() ? 518 : 515, s = _a) : s = fc, i.setTexture2D(t || s, r);
}
function mf(e, t, i) {
  const n = this.cache, r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(t || mc, r);
}
function gf(e, t, i) {
  const n = this.cache, r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(t || gc, r);
}
function vf(e, t, i) {
  const n = this.cache, r = i.allocateTextureUnit();
  n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(t || pc, r);
}
function _f(e) {
  switch (e) {
    case 5126:
      return Qd;
    case 35664:
      return jd;
    case 35665:
      return ef;
    case 35666:
      return tf;
    case 35674:
      return nf;
    case 35675:
      return rf;
    case 35676:
      return sf;
    case 5124:
    case 35670:
      return af;
    case 35667:
    case 35671:
      return of;
    case 35668:
    case 35672:
      return lf;
    case 35669:
    case 35673:
      return cf;
    case 5125:
      return hf;
    case 36294:
      return uf;
    case 36295:
      return df;
    case 36296:
      return ff;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return pf;
    case 35679:
    case 36299:
    case 36307:
      return mf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return gf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return vf;
  }
}
function Mf(e, t) {
  e.uniform1fv(this.addr, t);
}
function yf(e, t) {
  const i = Yn(t, this.size, 2);
  e.uniform2fv(this.addr, i);
}
function xf(e, t) {
  const i = Yn(t, this.size, 3);
  e.uniform3fv(this.addr, i);
}
function Sf(e, t) {
  const i = Yn(t, this.size, 4);
  e.uniform4fv(this.addr, i);
}
function Ef(e, t) {
  const i = Yn(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, i);
}
function bf(e, t) {
  const i = Yn(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, i);
}
function Tf(e, t) {
  const i = Yn(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, i);
}
function wf(e, t) {
  e.uniform1iv(this.addr, t);
}
function Af(e, t) {
  e.uniform2iv(this.addr, t);
}
function Rf(e, t) {
  e.uniform3iv(this.addr, t);
}
function Cf(e, t) {
  e.uniform4iv(this.addr, t);
}
function Pf(e, t) {
  e.uniform1uiv(this.addr, t);
}
function Lf(e, t) {
  e.uniform2uiv(this.addr, t);
}
function If(e, t) {
  e.uniform3uiv(this.addr, t);
}
function Df(e, t) {
  e.uniform4uiv(this.addr, t);
}
function Nf(e, t, i) {
  const n = this.cache, r = t.length, s = Ss(i, r);
  Ct(n, s) || (e.uniform1iv(this.addr, s), Pt(n, s));
  let a;
  this.type === e.SAMPLER_2D_SHADOW ? a = _a : a = fc;
  for (let o = 0; o !== r; ++o) i.setTexture2D(t[o] || a, s[o]);
}
function Uf(e, t, i) {
  const n = this.cache, r = t.length, s = Ss(i, r);
  Ct(n, s) || (e.uniform1iv(this.addr, s), Pt(n, s));
  for (let a = 0; a !== r; ++a) i.setTexture3D(t[a] || mc, s[a]);
}
function Of(e, t, i) {
  const n = this.cache, r = t.length, s = Ss(i, r);
  Ct(n, s) || (e.uniform1iv(this.addr, s), Pt(n, s));
  for (let a = 0; a !== r; ++a) i.setTextureCube(t[a] || gc, s[a]);
}
function Ff(e, t, i) {
  const n = this.cache, r = t.length, s = Ss(i, r);
  Ct(n, s) || (e.uniform1iv(this.addr, s), Pt(n, s));
  for (let a = 0; a !== r; ++a) i.setTexture2DArray(t[a] || pc, s[a]);
}
function Bf(e) {
  switch (e) {
    case 5126:
      return Mf;
    case 35664:
      return yf;
    case 35665:
      return xf;
    case 35666:
      return Sf;
    case 35674:
      return Ef;
    case 35675:
      return bf;
    case 35676:
      return Tf;
    case 5124:
    case 35670:
      return wf;
    case 35667:
    case 35671:
      return Af;
    case 35668:
    case 35672:
      return Rf;
    case 35669:
    case 35673:
      return Cf;
    case 5125:
      return Pf;
    case 36294:
      return Lf;
    case 36295:
      return If;
    case 36296:
      return Df;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Nf;
    case 35679:
    case 36299:
    case 36307:
      return Uf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Of;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ff;
  }
}
var zf = class {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = _f(t.type);
  }
}, Vf = class {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Bf(t.type);
  }
}, Gf = class {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const n = this.seq;
    for (let r = 0, s = n.length; r !== s; ++r) {
      const a = n[r];
      a.setValue(e, t[a.id], i);
    }
  }
}, sa = /(\w+)(\])?(\[|\.)?/g;
function ko(e, t) {
  e.seq.push(t), e.map[t.id] = t;
}
function Hf(e, t, i) {
  const n = e.name, r = n.length;
  for (sa.lastIndex = 0; ; ) {
    const s = sa.exec(n), a = sa.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      ko(i, c === void 0 ? new zf(o, e, t) : new Vf(o, e, t));
      break;
    } else {
      let h = i.map[o];
      h === void 0 && (h = new Gf(o), ko(i, h)), i = h;
    }
  }
}
var ls = class {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < i; ++s) {
      const a = e.getActiveUniform(t, s);
      Hf(a, e.getUniformLocation(t, a.name), this);
    }
    const n = [], r = [];
    for (const s of this.seq) s.type === e.SAMPLER_2D_SHADOW || s.type === e.SAMPLER_CUBE_SHADOW || s.type === e.SAMPLER_2D_ARRAY_SHADOW ? n.push(s) : r.push(s);
    n.length > 0 && (this.seq = n.concat(r));
  }
  setValue(e, t, i, n) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, i, n);
  }
  setOptional(e, t, i) {
    const n = t[i];
    n !== void 0 && this.setValue(e, i, n);
  }
  static upload(e, t, i, n) {
    for (let r = 0, s = t.length; r !== s; ++r) {
      const a = t[r], o = i[a.id];
      o.needsUpdate !== !1 && a.setValue(e, o.value, n);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let n = 0, r = e.length; n !== r; ++n) {
      const s = e[n];
      s.id in t && i.push(s);
    }
    return i;
  }
};
function Wo(e, t, i) {
  const n = e.createShader(t);
  return e.shaderSource(n, i), e.compileShader(n), n;
}
var kf = 37297, Wf = 0;
function Xf(e, t) {
  const i = e.split(`
`), n = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, i.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${i[a]}`);
  }
  return n.join(`
`);
}
var Xo = /* @__PURE__ */ new Qe();
function Yf(e) {
  ot._getMatrix(Xo, ot.workingColorSpace, e);
  const t = `mat3( ${Xo.elements.map((i) => i.toFixed(4))} )`;
  switch (ot.getTransfer(e)) {
    case ds:
      return [t, "LinearTransferOETF"];
    case fs:
      return [t, "sRGBTransferOETF"];
    default:
      return Ge("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
  }
}
function Yo(e, t, i) {
  const n = e.getShaderParameter(t, e.COMPILE_STATUS), r = (e.getShaderInfoLog(t) || "").trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return i.toUpperCase() + `

` + r + `

` + Xf(e.getShaderSource(t), a);
  } else return r;
}
function qf(e, t) {
  const i = Yf(t);
  return [
    `vec4 ${e}( vec4 value ) {`,
    `	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
var Zf = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function Kf(e, t) {
  const i = Zf[t];
  return i === void 0 ? (Ge("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }";
}
var rs = /* @__PURE__ */ new P();
function Jf() {
  return ot.getLuminanceCoefficients(rs), [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${rs.x.toFixed(4)}, ${rs.y.toFixed(4)}, ${rs.z.toFixed(4)} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function $f(e) {
  return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(lr).join(`
`);
}
function Qf(e) {
  const t = [];
  for (const i in e) {
    const n = e[i];
    n !== !1 && t.push("#define " + i + " " + n);
  }
  return t.join(`
`);
}
function jf(e, t) {
  const i = {}, n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = e.getActiveAttrib(t, r), a = s.name;
    let o = 1;
    s.type === e.FLOAT_MAT2 && (o = 2), s.type === e.FLOAT_MAT3 && (o = 3), s.type === e.FLOAT_MAT4 && (o = 4), i[a] = {
      type: s.type,
      location: e.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return i;
}
function lr(e) {
  return e !== "";
}
function qo(e, t) {
  const i = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, i).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Zo(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var ep = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ma(e) {
  return e.replace(ep, ip);
}
var tp = /* @__PURE__ */ new Map();
function ip(e, t) {
  let i = tt[t];
  if (i === void 0) {
    const n = tp.get(t);
    if (n !== void 0)
      i = tt[n], Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else throw new Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
  }
  return Ma(i);
}
var np = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ko(e) {
  return e.replace(np, rp);
}
function rp(e, t, i, n) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(i); s++) r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Jo(e) {
  let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
  return e.precision === "highp" ? t += `
#define HIGH_PRECISION` : e.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : e.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
var sp = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function ap(e) {
  return sp[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var op = {
  301: "ENVMAP_TYPE_CUBE",
  302: "ENVMAP_TYPE_CUBE",
  306: "ENVMAP_TYPE_CUBE_UV"
};
function lp(e) {
  return e.envMap === !1 ? "ENVMAP_TYPE_CUBE" : op[e.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var cp = { 302: "ENVMAP_MODE_REFRACTION" };
function hp(e) {
  return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : cp[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var up = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function dp(e) {
  return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : up[e.combine] || "ENVMAP_BLENDING_NONE";
}
function fp(e) {
  const t = e.envMapCubeUVHeight;
  if (t === null) return null;
  const i = Math.log2(t) - 2, n = 1 / t;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)),
    texelHeight: n,
    maxMip: i
  };
}
function pp(e, t, i, n) {
  const r = e.getContext(), s = i.defines;
  let a = i.vertexShader, o = i.fragmentShader;
  const l = ap(i), c = lp(i), h = hp(i), d = dp(i), u = fp(i), f = $f(i), _ = Qf(s), M = r.createProgram();
  let m, p, T = i.glslVersion ? "#version " + i.glslVersion + `
` : "";
  i.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + i.shaderType,
    "#define SHADER_NAME " + i.shaderName,
    _
  ].filter(lr).join(`
`), m.length > 0 && (m += `
`), p = [
    "#define SHADER_TYPE " + i.shaderType,
    "#define SHADER_NAME " + i.shaderName,
    _
  ].filter(lr).join(`
`), p.length > 0 && (p += `
`)) : (m = [
    Jo(i),
    "#define SHADER_TYPE " + i.shaderType,
    "#define SHADER_NAME " + i.shaderName,
    _,
    i.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    i.batching ? "#define USE_BATCHING" : "",
    i.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    i.instancing ? "#define USE_INSTANCING" : "",
    i.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    i.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    i.useFog && i.fog ? "#define USE_FOG" : "",
    i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "",
    i.map ? "#define USE_MAP" : "",
    i.envMap ? "#define USE_ENVMAP" : "",
    i.envMap ? "#define " + h : "",
    i.lightMap ? "#define USE_LIGHTMAP" : "",
    i.aoMap ? "#define USE_AOMAP" : "",
    i.bumpMap ? "#define USE_BUMPMAP" : "",
    i.normalMap ? "#define USE_NORMALMAP" : "",
    i.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    i.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    i.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    i.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    i.anisotropy ? "#define USE_ANISOTROPY" : "",
    i.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    i.specularMap ? "#define USE_SPECULARMAP" : "",
    i.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    i.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    i.metalnessMap ? "#define USE_METALNESSMAP" : "",
    i.alphaMap ? "#define USE_ALPHAMAP" : "",
    i.alphaHash ? "#define USE_ALPHAHASH" : "",
    i.transmission ? "#define USE_TRANSMISSION" : "",
    i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    i.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    i.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    i.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    i.mapUv ? "#define MAP_UV " + i.mapUv : "",
    i.alphaMapUv ? "#define ALPHAMAP_UV " + i.alphaMapUv : "",
    i.lightMapUv ? "#define LIGHTMAP_UV " + i.lightMapUv : "",
    i.aoMapUv ? "#define AOMAP_UV " + i.aoMapUv : "",
    i.emissiveMapUv ? "#define EMISSIVEMAP_UV " + i.emissiveMapUv : "",
    i.bumpMapUv ? "#define BUMPMAP_UV " + i.bumpMapUv : "",
    i.normalMapUv ? "#define NORMALMAP_UV " + i.normalMapUv : "",
    i.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + i.displacementMapUv : "",
    i.metalnessMapUv ? "#define METALNESSMAP_UV " + i.metalnessMapUv : "",
    i.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + i.roughnessMapUv : "",
    i.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + i.anisotropyMapUv : "",
    i.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + i.clearcoatMapUv : "",
    i.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + i.clearcoatNormalMapUv : "",
    i.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + i.clearcoatRoughnessMapUv : "",
    i.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + i.iridescenceMapUv : "",
    i.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + i.iridescenceThicknessMapUv : "",
    i.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + i.sheenColorMapUv : "",
    i.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + i.sheenRoughnessMapUv : "",
    i.specularMapUv ? "#define SPECULARMAP_UV " + i.specularMapUv : "",
    i.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + i.specularColorMapUv : "",
    i.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + i.specularIntensityMapUv : "",
    i.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + i.transmissionMapUv : "",
    i.thicknessMapUv ? "#define THICKNESSMAP_UV " + i.thicknessMapUv : "",
    i.vertexTangents && i.flatShading === !1 ? "#define USE_TANGENT" : "",
    i.vertexNormals ? "#define HAS_NORMAL" : "",
    i.vertexColors ? "#define USE_COLOR" : "",
    i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    i.vertexUv1s ? "#define USE_UV1" : "",
    i.vertexUv2s ? "#define USE_UV2" : "",
    i.vertexUv3s ? "#define USE_UV3" : "",
    i.pointsUvs ? "#define USE_POINTS_UV" : "",
    i.flatShading ? "#define FLAT_SHADED" : "",
    i.skinning ? "#define USE_SKINNING" : "",
    i.morphTargets ? "#define USE_MORPHTARGETS" : "",
    i.morphNormals && i.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    i.morphColors ? "#define USE_MORPHCOLORS" : "",
    i.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride : "",
    i.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount : "",
    i.doubleSided ? "#define DOUBLE_SIDED" : "",
    i.flipSided ? "#define FLIP_SIDED" : "",
    i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    i.shadowMapEnabled ? "#define " + l : "",
    i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    i.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    i.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    i.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
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
  ].filter(lr).join(`
`), p = [
    Jo(i),
    "#define SHADER_TYPE " + i.shaderType,
    "#define SHADER_NAME " + i.shaderName,
    _,
    i.useFog && i.fog ? "#define USE_FOG" : "",
    i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "",
    i.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    i.map ? "#define USE_MAP" : "",
    i.matcap ? "#define USE_MATCAP" : "",
    i.envMap ? "#define USE_ENVMAP" : "",
    i.envMap ? "#define " + c : "",
    i.envMap ? "#define " + h : "",
    i.envMap ? "#define " + d : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
    i.lightMap ? "#define USE_LIGHTMAP" : "",
    i.aoMap ? "#define USE_AOMAP" : "",
    i.bumpMap ? "#define USE_BUMPMAP" : "",
    i.normalMap ? "#define USE_NORMALMAP" : "",
    i.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    i.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    i.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
    i.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    i.anisotropy ? "#define USE_ANISOTROPY" : "",
    i.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    i.clearcoat ? "#define USE_CLEARCOAT" : "",
    i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    i.dispersion ? "#define USE_DISPERSION" : "",
    i.iridescence ? "#define USE_IRIDESCENCE" : "",
    i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    i.specularMap ? "#define USE_SPECULARMAP" : "",
    i.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    i.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    i.metalnessMap ? "#define USE_METALNESSMAP" : "",
    i.alphaMap ? "#define USE_ALPHAMAP" : "",
    i.alphaTest ? "#define USE_ALPHATEST" : "",
    i.alphaHash ? "#define USE_ALPHAHASH" : "",
    i.sheen ? "#define USE_SHEEN" : "",
    i.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    i.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    i.transmission ? "#define USE_TRANSMISSION" : "",
    i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    i.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    i.vertexTangents && i.flatShading === !1 ? "#define USE_TANGENT" : "",
    i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "",
    i.vertexAlphas || i.batchingColor ? "#define USE_COLOR_ALPHA" : "",
    i.vertexUv1s ? "#define USE_UV1" : "",
    i.vertexUv2s ? "#define USE_UV2" : "",
    i.vertexUv3s ? "#define USE_UV3" : "",
    i.pointsUvs ? "#define USE_POINTS_UV" : "",
    i.gradientMap ? "#define USE_GRADIENTMAP" : "",
    i.flatShading ? "#define FLAT_SHADED" : "",
    i.doubleSided ? "#define DOUBLE_SIDED" : "",
    i.flipSided ? "#define FLIP_SIDED" : "",
    i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    i.shadowMapEnabled ? "#define " + l : "",
    i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    i.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    i.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
    i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    i.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    i.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    i.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    i.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    i.toneMapping !== 0 ? tt.tonemapping_pars_fragment : "",
    i.toneMapping !== 0 ? Kf("toneMapping", i.toneMapping) : "",
    i.dithering ? "#define DITHERING" : "",
    i.opaque ? "#define OPAQUE" : "",
    tt.colorspace_pars_fragment,
    qf("linearToOutputTexel", i.outputColorSpace),
    Jf(),
    i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "",
    `
`
  ].filter(lr).join(`
`)), a = Ma(a), a = qo(a, i), a = Zo(a, i), o = Ma(o), o = qo(o, i), o = Zo(o, i), a = Ko(a), o = Ko(o), i.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, m = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, p = [
    "#define varying in",
    i.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    i.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
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
` + p);
  const S = T + m + a, v = T + p + o, A = Wo(r, r.VERTEX_SHADER, S), w = Wo(r, r.FRAGMENT_SHADER, v);
  r.attachShader(M, A), r.attachShader(M, w), i.index0AttributeName !== void 0 ? r.bindAttribLocation(M, 0, i.index0AttributeName) : i.hasPositionAttribute === !0 && r.bindAttribLocation(M, 0, "position"), r.linkProgram(M);
  function C(R) {
    if (e.debug.checkShaderErrors) {
      const V = r.getProgramInfoLog(M) || "", Z = r.getShaderInfoLog(A) || "", G = r.getShaderInfoLog(w) || "", X = V.trim(), H = Z.trim(), B = G.trim();
      let ae = !0, ie = !0;
      if (r.getProgramParameter(M, r.LINK_STATUS) === !1)
        if (ae = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(r, M, A, w);
        else {
          const oe = Yo(r, A, "vertex"), de = Yo(r, w, "fragment");
          ke("WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(M, r.VALIDATE_STATUS) + `

Material Name: ` + R.name + `
Material Type: ` + R.type + `

Program Info Log: ` + X + `
` + oe + `
` + de);
        }
      else X !== "" ? Ge("WebGLProgram: Program Info Log:", X) : (H === "" || B === "") && (ie = !1);
      ie && (R.diagnostics = {
        runnable: ae,
        programLog: X,
        vertexShader: {
          log: H,
          prefix: m
        },
        fragmentShader: {
          log: B,
          prefix: p
        }
      });
    }
    r.deleteShader(A), r.deleteShader(w), g = new ls(r, M), E = jf(r, M);
  }
  let g;
  this.getUniforms = function() {
    return g === void 0 && C(this), g;
  };
  let E;
  this.getAttributes = function() {
    return E === void 0 && C(this), E;
  };
  let F = i.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return F === !1 && (F = r.getProgramParameter(M, kf)), F;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(M), this.program = void 0;
  }, this.type = i.shaderType, this.name = i.shaderName, this.id = Wf++, this.cacheKey = t, this.usedTimes = 1, this.program = M, this.vertexShader = A, this.fragmentShader = w, this;
}
var mp = 0, gp = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e, t, i) {
    const n = this._getShaderCacheForMaterial(e);
    return n.has(t) === !1 && (n.add(t), t.usedTimes++), n.has(i) === !1 && (n.add(i), i.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderStage(e) {
    return this._getShaderStage(e.vertexShader);
  }
  getFragmentShaderStage(e) {
    return this._getShaderStage(e.fragmentShader);
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new vp(e), t.set(e, i)), i;
  }
}, vp = class {
  constructor(e) {
    this.id = mp++, this.code = e, this.usedTimes = 0;
  }
};
function _p(e) {
  return e === 1030 || e === 37490 || e === 36285;
}
function Mp(e, t, i, n, r, s) {
  const a = new Ea(), o = new gp(), l = /* @__PURE__ */ new Set(), c = [], h = /* @__PURE__ */ new Map(), d = n.logarithmicDepthBuffer;
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
  function _(g) {
    return l.add(g), g === 0 ? "uv" : `uv${g}`;
  }
  function M(g, E, F, R, V, Z) {
    const G = R.fog, X = V.geometry, H = g.isMeshStandardMaterial || g.isMeshLambertMaterial || g.isMeshPhongMaterial ? R.environment : null, B = g.isMeshStandardMaterial || g.isMeshLambertMaterial && !g.envMap || g.isMeshPhongMaterial && !g.envMap, ae = t.get(g.envMap || H, B), ie = ae && ae.mapping === 306 ? ae.image.height : null, oe = f[g.type];
    g.precision !== null && (u = n.getMaxPrecision(g.precision), u !== g.precision && Ge("WebGLProgram.getParameters:", g.precision, "not supported, using", u, "instead."));
    const de = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, Re = de !== void 0 ? de.length : 0;
    let rt = 0;
    X.morphAttributes.position !== void 0 && (rt = 1), X.morphAttributes.normal !== void 0 && (rt = 2), X.morphAttributes.color !== void 0 && (rt = 3);
    let We, J, ue, Me;
    if (oe) {
      const Ve = gi[oe];
      We = Ve.vertexShader, J = Ve.fragmentShader;
    } else {
      We = g.vertexShader, J = g.fragmentShader;
      const Ve = o.getVertexShaderStage(g), wt = o.getFragmentShaderStage(g);
      o.update(g, Ve, wt), ue = Ve.id, Me = wt.id;
    }
    const me = e.getRenderTarget(), Oe = e.state.buffers.depth.getReversed(), ze = V.isInstancedMesh === !0, Ne = V.isBatchedMesh === !0, qe = !!g.map, Q = !!g.matcap, le = !!ae, pe = !!g.aoMap, Ee = !!g.lightMap, Te = !!g.bumpMap && g.wireframe === !1, De = !!g.normalMap, Ue = !!g.displacementMap, Xe = !!g.emissiveMap, Ze = !!g.metalnessMap, I = !!g.roughnessMap, mt = g.anisotropy > 0, it = g.clearcoat > 0, et = g.dispersion > 0, b = g.iridescence > 0, y = g.sheen > 0, D = g.transmission > 0, Y = mt && !!g.anisotropyMap, j = it && !!g.clearcoatMap, ce = it && !!g.clearcoatNormalMap, ge = it && !!g.clearcoatRoughnessMap, N = b && !!g.iridescenceMap, he = b && !!g.iridescenceThicknessMap, be = y && !!g.sheenColorMap, Le = y && !!g.sheenRoughnessMap, se = !!g.specularMap, Ie = !!g.specularColorMap, Fe = !!g.specularIntensityMap, Ye = D && !!g.transmissionMap, nt = D && !!g.thicknessMap, U = !!g.gradientMap, $ = !!g.alphaMap, ne = g.alphaTest > 0, we = !!g.alphaHash, Ae = !!g.extensions;
    let te = 0;
    g.toneMapped && (me === null || me.isXRRenderTarget === !0) && (te = e.toneMapping);
    const ye = {
      shaderID: oe,
      shaderType: g.type,
      shaderName: g.name,
      vertexShader: We,
      fragmentShader: J,
      defines: g.defines,
      customVertexShaderID: ue,
      customFragmentShaderID: Me,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: u,
      batching: Ne,
      batchingColor: Ne && V._colorsTexture !== null,
      instancing: ze,
      instancingColor: ze && V.instanceColor !== null,
      instancingMorph: ze && V.morphTexture !== null,
      outputColorSpace: me === null ? e.outputColorSpace : me.isXRRenderTarget === !0 ? me.texture.colorSpace : ot.workingColorSpace,
      alphaToCoverage: !!g.alphaToCoverage,
      map: qe,
      matcap: Q,
      envMap: le,
      envMapMode: le && ae.mapping,
      envMapCubeUVHeight: ie,
      aoMap: pe,
      lightMap: Ee,
      bumpMap: Te,
      normalMap: De,
      displacementMap: Ue,
      emissiveMap: Xe,
      normalMapObjectSpace: De && g.normalMapType === 1,
      normalMapTangentSpace: De && g.normalMapType === 0,
      packedNormalMap: De && g.normalMapType === 0 && _p(g.normalMap.format),
      metalnessMap: Ze,
      roughnessMap: I,
      anisotropy: mt,
      anisotropyMap: Y,
      clearcoat: it,
      clearcoatMap: j,
      clearcoatNormalMap: ce,
      clearcoatRoughnessMap: ge,
      dispersion: et,
      iridescence: b,
      iridescenceMap: N,
      iridescenceThicknessMap: he,
      sheen: y,
      sheenColorMap: be,
      sheenRoughnessMap: Le,
      specularMap: se,
      specularColorMap: Ie,
      specularIntensityMap: Fe,
      transmission: D,
      transmissionMap: Ye,
      thicknessMap: nt,
      gradientMap: U,
      opaque: g.transparent === !1 && g.blending === 1 && g.alphaToCoverage === !1,
      alphaMap: $,
      alphaTest: ne,
      alphaHash: we,
      combine: g.combine,
      mapUv: qe && _(g.map.channel),
      aoMapUv: pe && _(g.aoMap.channel),
      lightMapUv: Ee && _(g.lightMap.channel),
      bumpMapUv: Te && _(g.bumpMap.channel),
      normalMapUv: De && _(g.normalMap.channel),
      displacementMapUv: Ue && _(g.displacementMap.channel),
      emissiveMapUv: Xe && _(g.emissiveMap.channel),
      metalnessMapUv: Ze && _(g.metalnessMap.channel),
      roughnessMapUv: I && _(g.roughnessMap.channel),
      anisotropyMapUv: Y && _(g.anisotropyMap.channel),
      clearcoatMapUv: j && _(g.clearcoatMap.channel),
      clearcoatNormalMapUv: ce && _(g.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ge && _(g.clearcoatRoughnessMap.channel),
      iridescenceMapUv: N && _(g.iridescenceMap.channel),
      iridescenceThicknessMapUv: he && _(g.iridescenceThicknessMap.channel),
      sheenColorMapUv: be && _(g.sheenColorMap.channel),
      sheenRoughnessMapUv: Le && _(g.sheenRoughnessMap.channel),
      specularMapUv: se && _(g.specularMap.channel),
      specularColorMapUv: Ie && _(g.specularColorMap.channel),
      specularIntensityMapUv: Fe && _(g.specularIntensityMap.channel),
      transmissionMapUv: Ye && _(g.transmissionMap.channel),
      thicknessMapUv: nt && _(g.thicknessMap.channel),
      alphaMapUv: $ && _(g.alphaMap.channel),
      vertexTangents: !!X.attributes.tangent && (De || mt),
      vertexNormals: !!X.attributes.normal,
      vertexColors: g.vertexColors,
      vertexAlphas: g.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4,
      pointsUvs: V.isPoints === !0 && !!X.attributes.uv && (qe || $),
      fog: !!G,
      useFog: g.fog === !0,
      fogExp2: !!G && G.isFogExp2,
      flatShading: g.wireframe === !1 && (g.flatShading === !0 || X.attributes.normal === void 0 && De === !1 && (g.isMeshLambertMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isMeshPhysicalMaterial)),
      sizeAttenuation: g.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: Oe,
      skinning: V.isSkinnedMesh === !0,
      hasPositionAttribute: X.attributes.position !== void 0,
      morphTargets: X.morphAttributes.position !== void 0,
      morphNormals: X.morphAttributes.normal !== void 0,
      morphColors: X.morphAttributes.color !== void 0,
      morphTargetsCount: Re,
      morphTextureStride: rt,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numLightProbes: E.numLightProbes,
      numLightProbeGrids: Z.length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: e.shadowMap.enabled && F.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: te,
      decodeVideoTexture: qe && g.map.isVideoTexture === !0 && ot.getTransfer(g.map.colorSpace) === "srgb",
      decodeVideoTextureEmissive: Xe && g.emissiveMap.isVideoTexture === !0 && ot.getTransfer(g.emissiveMap.colorSpace) === "srgb",
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === 2,
      flipSided: g.side === 1,
      useDepthPacking: g.depthPacking >= 0,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionClipCullDistance: Ae && g.extensions.clipCullDistance === !0 && i.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Ae && g.extensions.multiDraw === !0 || Ne) && i.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: g.customProgramCacheKey()
    };
    return ye.vertexUv1s = l.has(1), ye.vertexUv2s = l.has(2), ye.vertexUv3s = l.has(3), l.clear(), ye;
  }
  function m(g) {
    const E = [];
    if (g.shaderID ? E.push(g.shaderID) : (E.push(g.customVertexShaderID), E.push(g.customFragmentShaderID)), g.defines !== void 0) for (const F in g.defines)
      E.push(F), E.push(g.defines[F]);
    return g.isRawShaderMaterial === !1 && (p(E, g), T(E, g), E.push(e.outputColorSpace)), E.push(g.customProgramCacheKey), E.join();
  }
  function p(g, E) {
    g.push(E.precision), g.push(E.outputColorSpace), g.push(E.envMapMode), g.push(E.envMapCubeUVHeight), g.push(E.mapUv), g.push(E.alphaMapUv), g.push(E.lightMapUv), g.push(E.aoMapUv), g.push(E.bumpMapUv), g.push(E.normalMapUv), g.push(E.displacementMapUv), g.push(E.emissiveMapUv), g.push(E.metalnessMapUv), g.push(E.roughnessMapUv), g.push(E.anisotropyMapUv), g.push(E.clearcoatMapUv), g.push(E.clearcoatNormalMapUv), g.push(E.clearcoatRoughnessMapUv), g.push(E.iridescenceMapUv), g.push(E.iridescenceThicknessMapUv), g.push(E.sheenColorMapUv), g.push(E.sheenRoughnessMapUv), g.push(E.specularMapUv), g.push(E.specularColorMapUv), g.push(E.specularIntensityMapUv), g.push(E.transmissionMapUv), g.push(E.thicknessMapUv), g.push(E.combine), g.push(E.fogExp2), g.push(E.sizeAttenuation), g.push(E.morphTargetsCount), g.push(E.morphAttributeCount), g.push(E.numDirLights), g.push(E.numPointLights), g.push(E.numSpotLights), g.push(E.numSpotLightMaps), g.push(E.numHemiLights), g.push(E.numRectAreaLights), g.push(E.numDirLightShadows), g.push(E.numPointLightShadows), g.push(E.numSpotLightShadows), g.push(E.numSpotLightShadowsWithMaps), g.push(E.numLightProbes), g.push(E.shadowMapType), g.push(E.toneMapping), g.push(E.numClippingPlanes), g.push(E.numClipIntersection), g.push(E.depthPacking);
  }
  function T(g, E) {
    a.disableAll(), E.instancing && a.enable(0), E.instancingColor && a.enable(1), E.instancingMorph && a.enable(2), E.matcap && a.enable(3), E.envMap && a.enable(4), E.normalMapObjectSpace && a.enable(5), E.normalMapTangentSpace && a.enable(6), E.clearcoat && a.enable(7), E.iridescence && a.enable(8), E.alphaTest && a.enable(9), E.vertexColors && a.enable(10), E.vertexAlphas && a.enable(11), E.vertexUv1s && a.enable(12), E.vertexUv2s && a.enable(13), E.vertexUv3s && a.enable(14), E.vertexTangents && a.enable(15), E.anisotropy && a.enable(16), E.alphaHash && a.enable(17), E.batching && a.enable(18), E.dispersion && a.enable(19), E.batchingColor && a.enable(20), E.gradientMap && a.enable(21), E.packedNormalMap && a.enable(22), E.vertexNormals && a.enable(23), g.push(a.mask), a.disableAll(), E.fog && a.enable(0), E.useFog && a.enable(1), E.flatShading && a.enable(2), E.logarithmicDepthBuffer && a.enable(3), E.reversedDepthBuffer && a.enable(4), E.skinning && a.enable(5), E.morphTargets && a.enable(6), E.morphNormals && a.enable(7), E.morphColors && a.enable(8), E.premultipliedAlpha && a.enable(9), E.shadowMapEnabled && a.enable(10), E.doubleSided && a.enable(11), E.flipSided && a.enable(12), E.useDepthPacking && a.enable(13), E.dithering && a.enable(14), E.transmission && a.enable(15), E.sheen && a.enable(16), E.opaque && a.enable(17), E.pointsUvs && a.enable(18), E.decodeVideoTexture && a.enable(19), E.decodeVideoTextureEmissive && a.enable(20), E.alphaToCoverage && a.enable(21), E.numLightProbeGrids > 0 && a.enable(22), E.hasPositionAttribute && a.enable(23), g.push(a.mask);
  }
  function S(g) {
    const E = f[g.type];
    let F;
    if (E) {
      const R = gi[E];
      F = Yu.clone(R.uniforms);
    } else F = g.uniforms;
    return F;
  }
  function v(g, E) {
    let F = h.get(E);
    return F !== void 0 ? ++F.usedTimes : (F = new pp(e, E, g, r), c.push(F), h.set(E, F)), F;
  }
  function A(g) {
    if (--g.usedTimes === 0) {
      const E = c.indexOf(g);
      c[E] = c[c.length - 1], c.pop(), h.delete(g.cacheKey), g.destroy();
    }
  }
  function w(g) {
    o.remove(g);
  }
  function C() {
    o.dispose();
  }
  return {
    getParameters: M,
    getProgramCacheKey: m,
    getUniforms: S,
    acquireProgram: v,
    releaseProgram: A,
    releaseShaderCache: w,
    programs: c,
    dispose: C
  };
}
function yp() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return e.has(a);
  }
  function i(a) {
    let o = e.get(a);
    return o === void 0 && (o = {}, e.set(a, o)), o;
  }
  function n(a) {
    e.delete(a);
  }
  function r(a, o, l) {
    e.get(a)[o] = l;
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: i,
    remove: n,
    update: r,
    dispose: s
  };
}
function xp(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.materialVariant !== t.materialVariant ? e.materialVariant - t.materialVariant : e.z !== t.z ? e.z - t.z : e.id - t.id;
}
function $o(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
}
function Qo() {
  const e = [];
  let t = 0;
  const i = [], n = [], r = [];
  function s() {
    t = 0, i.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    let f = 0;
    return u.isInstancedMesh && (f += 2), u.isSkinnedMesh && (f += 1), f;
  }
  function o(u, f, _, M, m, p) {
    let T = e[t];
    return T === void 0 ? (T = {
      id: u.id,
      object: u,
      geometry: f,
      material: _,
      materialVariant: a(u),
      groupOrder: M,
      renderOrder: u.renderOrder,
      z: m,
      group: p
    }, e[t] = T) : (T.id = u.id, T.object = u, T.geometry = f, T.material = _, T.materialVariant = a(u), T.groupOrder = M, T.renderOrder = u.renderOrder, T.z = m, T.group = p), t++, T;
  }
  function l(u, f, _, M, m, p) {
    const T = o(u, f, _, M, m, p);
    _.transmission > 0 ? n.push(T) : _.transparent === !0 ? r.push(T) : i.push(T);
  }
  function c(u, f, _, M, m, p) {
    const T = o(u, f, _, M, m, p);
    _.transmission > 0 ? n.unshift(T) : _.transparent === !0 ? r.unshift(T) : i.unshift(T);
  }
  function h(u, f, _) {
    i.length > 1 && i.sort(u || xp), n.length > 1 && n.sort(f || $o), r.length > 1 && r.sort(f || $o), _ && (i.reverse(), n.reverse(), r.reverse());
  }
  function d() {
    for (let u = t, f = e.length; u < f; u++) {
      const _ = e[u];
      if (_.id === null) break;
      _.id = null, _.object = null, _.geometry = null, _.material = null, _.group = null;
    }
  }
  return {
    opaque: i,
    transmissive: n,
    transparent: r,
    init: s,
    push: l,
    unshift: c,
    finish: d,
    sort: h
  };
}
function Sp() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(n, r) {
    const s = e.get(n);
    let a;
    return s === void 0 ? (a = new Qo(), e.set(n, [a])) : r >= s.length ? (a = new Qo(), s.push(a)) : a = s[r], a;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: i
  };
}
function Ep() {
  const e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let i;
    switch (t.type) {
      case "DirectionalLight":
        i = {
          direction: new P(),
          color: new $e()
        };
        break;
      case "SpotLight":
        i = {
          position: new P(),
          direction: new P(),
          color: new $e(),
          distance: 0,
          coneCos: 0,
          penumbraCos: 0,
          decay: 0
        };
        break;
      case "PointLight":
        i = {
          position: new P(),
          color: new $e(),
          distance: 0,
          decay: 0
        };
        break;
      case "HemisphereLight":
        i = {
          direction: new P(),
          skyColor: new $e(),
          groundColor: new $e()
        };
        break;
      case "RectAreaLight":
        i = {
          color: new $e(),
          position: new P(),
          halfWidth: new P(),
          halfHeight: new P()
        };
        break;
    }
    return e[t.id] = i, i;
  } };
}
function bp() {
  const e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let i;
    switch (t.type) {
      case "DirectionalLight":
        i = {
          shadowIntensity: 1,
          shadowBias: 0,
          shadowNormalBias: 0,
          shadowRadius: 1,
          shadowMapSize: new ee()
        };
        break;
      case "SpotLight":
        i = {
          shadowIntensity: 1,
          shadowBias: 0,
          shadowNormalBias: 0,
          shadowRadius: 1,
          shadowMapSize: new ee()
        };
        break;
      case "PointLight":
        i = {
          shadowIntensity: 1,
          shadowBias: 0,
          shadowNormalBias: 0,
          shadowRadius: 1,
          shadowMapSize: new ee(),
          shadowCameraNear: 1,
          shadowCameraFar: 1e3
        };
        break;
    }
    return e[t.id] = i, i;
  } };
}
var Tp = 0;
function wp(e, t) {
  return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0);
}
function Ap(e) {
  const t = new Ep(), i = bp(), n = {
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
    ambient: [
      0,
      0,
      0
    ],
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
  for (let c = 0; c < 9; c++) n.probe.push(new P());
  const r = new P(), s = new dt(), a = new dt();
  function o(c) {
    let h = 0, d = 0, u = 0;
    for (let E = 0; E < 9; E++) n.probe[E].set(0, 0, 0);
    let f = 0, _ = 0, M = 0, m = 0, p = 0, T = 0, S = 0, v = 0, A = 0, w = 0, C = 0;
    c.sort(wp);
    for (let E = 0, F = c.length; E < F; E++) {
      const R = c[E], V = R.color, Z = R.intensity, G = R.distance;
      let X = null;
      if (R.shadow && R.shadow.map && (R.shadow.map.texture.format === 1030 ? X = R.shadow.map.texture : X = R.shadow.map.depthTexture || R.shadow.map.texture), R.isAmbientLight)
        h += V.r * Z, d += V.g * Z, u += V.b * Z;
      else if (R.isLightProbe) {
        for (let H = 0; H < 9; H++) n.probe[H].addScaledVector(R.sh.coefficients[H], Z);
        C++;
      } else if (R.isDirectionalLight) {
        const H = t.get(R);
        if (H.color.copy(R.color).multiplyScalar(R.intensity), R.castShadow) {
          const B = R.shadow, ae = i.get(R);
          ae.shadowIntensity = B.intensity, ae.shadowBias = B.bias, ae.shadowNormalBias = B.normalBias, ae.shadowRadius = B.radius, ae.shadowMapSize = B.mapSize, n.directionalShadow[f] = ae, n.directionalShadowMap[f] = X, n.directionalShadowMatrix[f] = R.shadow.matrix, T++;
        }
        n.directional[f] = H, f++;
      } else if (R.isSpotLight) {
        const H = t.get(R);
        H.position.setFromMatrixPosition(R.matrixWorld), H.color.copy(V).multiplyScalar(Z), H.distance = G, H.coneCos = Math.cos(R.angle), H.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)), H.decay = R.decay, n.spot[M] = H;
        const B = R.shadow;
        if (R.map && (n.spotLightMap[A] = R.map, A++, B.updateMatrices(R), R.castShadow && w++), n.spotLightMatrix[M] = B.matrix, R.castShadow) {
          const ae = i.get(R);
          ae.shadowIntensity = B.intensity, ae.shadowBias = B.bias, ae.shadowNormalBias = B.normalBias, ae.shadowRadius = B.radius, ae.shadowMapSize = B.mapSize, n.spotShadow[M] = ae, n.spotShadowMap[M] = X, v++;
        }
        M++;
      } else if (R.isRectAreaLight) {
        const H = t.get(R);
        H.color.copy(V).multiplyScalar(Z), H.halfWidth.set(R.width * 0.5, 0, 0), H.halfHeight.set(0, R.height * 0.5, 0), n.rectArea[m] = H, m++;
      } else if (R.isPointLight) {
        const H = t.get(R);
        if (H.color.copy(R.color).multiplyScalar(R.intensity), H.distance = R.distance, H.decay = R.decay, R.castShadow) {
          const B = R.shadow, ae = i.get(R);
          ae.shadowIntensity = B.intensity, ae.shadowBias = B.bias, ae.shadowNormalBias = B.normalBias, ae.shadowRadius = B.radius, ae.shadowMapSize = B.mapSize, ae.shadowCameraNear = B.camera.near, ae.shadowCameraFar = B.camera.far, n.pointShadow[_] = ae, n.pointShadowMap[_] = X, n.pointShadowMatrix[_] = R.shadow.matrix, S++;
        }
        n.point[_] = H, _++;
      } else if (R.isHemisphereLight) {
        const H = t.get(R);
        H.skyColor.copy(R.color).multiplyScalar(Z), H.groundColor.copy(R.groundColor).multiplyScalar(Z), n.hemi[p] = H, p++;
      }
    }
    m > 0 && (e.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = xe.LTC_FLOAT_1, n.rectAreaLTC2 = xe.LTC_FLOAT_2) : (n.rectAreaLTC1 = xe.LTC_HALF_1, n.rectAreaLTC2 = xe.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = d, n.ambient[2] = u;
    const g = n.hash;
    (g.directionalLength !== f || g.pointLength !== _ || g.spotLength !== M || g.rectAreaLength !== m || g.hemiLength !== p || g.numDirectionalShadows !== T || g.numPointShadows !== S || g.numSpotShadows !== v || g.numSpotMaps !== A || g.numLightProbes !== C) && (n.directional.length = f, n.spot.length = M, n.rectArea.length = m, n.point.length = _, n.hemi.length = p, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = S, n.pointShadowMap.length = S, n.spotShadow.length = v, n.spotShadowMap.length = v, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = S, n.spotLightMatrix.length = v + A - w, n.spotLightMap.length = A, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = C, g.directionalLength = f, g.pointLength = _, g.spotLength = M, g.rectAreaLength = m, g.hemiLength = p, g.numDirectionalShadows = T, g.numPointShadows = S, g.numSpotShadows = v, g.numSpotMaps = A, g.numLightProbes = C, n.version = Tp++);
  }
  function l(c, h) {
    let d = 0, u = 0, f = 0, _ = 0, M = 0;
    const m = h.matrixWorldInverse;
    for (let p = 0, T = c.length; p < T; p++) {
      const S = c[p];
      if (S.isDirectionalLight) {
        const v = n.directional[d];
        v.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), v.direction.sub(r), v.direction.transformDirection(m), d++;
      } else if (S.isSpotLight) {
        const v = n.spot[f];
        v.position.setFromMatrixPosition(S.matrixWorld), v.position.applyMatrix4(m), v.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), v.direction.sub(r), v.direction.transformDirection(m), f++;
      } else if (S.isRectAreaLight) {
        const v = n.rectArea[_];
        v.position.setFromMatrixPosition(S.matrixWorld), v.position.applyMatrix4(m), a.identity(), s.copy(S.matrixWorld), s.premultiply(m), a.extractRotation(s), v.halfWidth.set(S.width * 0.5, 0, 0), v.halfHeight.set(0, S.height * 0.5, 0), v.halfWidth.applyMatrix4(a), v.halfHeight.applyMatrix4(a), _++;
      } else if (S.isPointLight) {
        const v = n.point[u];
        v.position.setFromMatrixPosition(S.matrixWorld), v.position.applyMatrix4(m), u++;
      } else if (S.isHemisphereLight) {
        const v = n.hemi[M];
        v.direction.setFromMatrixPosition(S.matrixWorld), v.direction.transformDirection(m), M++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function jo(e) {
  const t = new Ap(e), i = [], n = [], r = [];
  function s(u) {
    d.camera = u, i.length = 0, n.length = 0, r.length = 0;
  }
  function a(u) {
    i.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function l(u) {
    r.push(u);
  }
  function c() {
    t.setup(i);
  }
  function h(u) {
    t.setupView(i, u);
  }
  const d = {
    lightsArray: i,
    shadowsArray: n,
    lightProbeGridArray: r,
    camera: null,
    lights: t,
    transmissionRenderTarget: {},
    textureUnits: 0
  };
  return {
    init: s,
    state: d,
    setupLights: c,
    setupLightsView: h,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: l
  };
}
function Rp(e) {
  let t = /* @__PURE__ */ new WeakMap();
  function i(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new jo(e), t.set(r, [o])) : s >= a.length ? (o = new jo(e), a.push(o)) : o = a[s], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: n
  };
}
var Cp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Pp = `uniform sampler2D shadow_pass;
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
}`, Lp = [
  /* @__PURE__ */ new P(1, 0, 0),
  /* @__PURE__ */ new P(-1, 0, 0),
  /* @__PURE__ */ new P(0, 1, 0),
  /* @__PURE__ */ new P(0, -1, 0),
  /* @__PURE__ */ new P(0, 0, 1),
  /* @__PURE__ */ new P(0, 0, -1)
], Ip = [
  /* @__PURE__ */ new P(0, -1, 0),
  /* @__PURE__ */ new P(0, -1, 0),
  /* @__PURE__ */ new P(0, 0, 1),
  /* @__PURE__ */ new P(0, 0, -1),
  /* @__PURE__ */ new P(0, -1, 0),
  /* @__PURE__ */ new P(0, -1, 0)
], el = /* @__PURE__ */ new dt(), ar = /* @__PURE__ */ new P(), aa = /* @__PURE__ */ new P();
function Dp(e, t, i) {
  let n = new ba();
  const r = new ee(), s = new ee(), a = new Et(), o = new $u(), l = new Qu(), c = {}, h = i.maxTextureSize, d = {
    0: 1,
    1: 0,
    2: 2
  }, u = new si({
    defines: { VSM_SAMPLES: 8 },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ee() },
      radius: { value: 4 }
    },
    vertexShader: Cp,
    fragmentShader: Pp
  }), f = u.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const _ = new bt();
  _.setAttribute("position", new $t(new Float32Array([
    -1,
    -1,
    0.5,
    3,
    -1,
    0.5,
    -1,
    3,
    0.5
  ]), 3));
  const M = new St(_, u), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let p = this.type;
  this.render = function(w, C, g) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || w.length === 0) return;
    this.type === 2 && (Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
    const E = e.getRenderTarget(), F = e.getActiveCubeFace(), R = e.getActiveMipmapLevel(), V = e.state;
    V.setBlending(0), V.buffers.depth.getReversed() === !0 ? V.buffers.color.setClear(0, 0, 0, 0) : V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(!0), V.setScissorTest(!1);
    const Z = p !== this.type;
    Z && C.traverse(function(G) {
      G.material && (Array.isArray(G.material) ? G.material.forEach((X) => X.needsUpdate = !0) : G.material.needsUpdate = !0);
    });
    for (let G = 0, X = w.length; G < X; G++) {
      const H = w[G], B = H.shadow;
      if (B === void 0) {
        Ge("WebGLShadowMap:", H, "has no shadow.");
        continue;
      }
      if (B.autoUpdate === !1 && B.needsUpdate === !1) continue;
      r.copy(B.mapSize);
      const ae = B.getFrameExtents();
      r.multiply(ae), s.copy(B.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / ae.x), r.x = s.x * ae.x, B.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / ae.y), r.y = s.y * ae.y, B.mapSize.y = s.y));
      const ie = e.state.buffers.depth.getReversed();
      if (B.camera._reversedDepth = ie, B.map === null || Z === !0) {
        if (B.map !== null && (B.map.depthTexture !== null && (B.map.depthTexture.dispose(), B.map.depthTexture = null), B.map.dispose()), this.type === 3) {
          if (H.isPointLight) {
            Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          B.map = new _i(r.x, r.y, {
            format: hs,
            type: en,
            minFilter: Jt,
            magFilter: Jt,
            generateMipmaps: !1
          }), B.map.texture.name = H.name + ".shadowMap", B.map.depthTexture = new Hn(r.x, r.y, Mr), B.map.depthTexture.name = H.name + ".shadowMapDepth", B.map.depthTexture.format = pr, B.map.depthTexture.compareFunction = null, B.map.depthTexture.minFilter = Vt, B.map.depthTexture.magFilter = Vt;
        } else
          H.isPointLight ? (B.map = new dc(r.x), B.map.depthTexture = new cu(r.x, ji)) : (B.map = new _i(r.x, r.y), B.map.depthTexture = new Hn(r.x, r.y, ji)), B.map.depthTexture.name = H.name + ".shadowMap", B.map.depthTexture.format = pr, this.type === 1 ? (B.map.depthTexture.compareFunction = ie ? 518 : 515, B.map.depthTexture.minFilter = Jt, B.map.depthTexture.magFilter = Jt) : (B.map.depthTexture.compareFunction = null, B.map.depthTexture.minFilter = Vt, B.map.depthTexture.magFilter = Vt);
        B.camera.updateProjectionMatrix();
      }
      const oe = B.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let de = 0; de < oe; de++) {
        if (B.map.isWebGLCubeRenderTarget)
          e.setRenderTarget(B.map, de), e.clear();
        else {
          de === 0 && (e.setRenderTarget(B.map), e.clear());
          const Re = B.getViewport(de);
          a.set(s.x * Re.x, s.y * Re.y, s.x * Re.z, s.y * Re.w), V.viewport(a);
        }
        if (H.isPointLight) {
          const Re = B.camera, rt = B.matrix, We = H.distance || Re.far;
          We !== Re.far && (Re.far = We, Re.updateProjectionMatrix()), ar.setFromMatrixPosition(H.matrixWorld), Re.position.copy(ar), aa.copy(Re.position), aa.add(Lp[de]), Re.up.copy(Ip[de]), Re.lookAt(aa), Re.updateMatrixWorld(), rt.makeTranslation(-ar.x, -ar.y, -ar.z), el.multiplyMatrices(Re.projectionMatrix, Re.matrixWorldInverse), B._frustum.setFromProjectionMatrix(el, Re.coordinateSystem, Re.reversedDepth);
        } else B.updateMatrices(H);
        n = B.getFrustum(), v(C, g, B.camera, H, this.type);
      }
      B.isPointLightShadow !== !0 && this.type === 3 && T(B, g), B.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, e.setRenderTarget(E, F, R);
  };
  function T(w, C) {
    const g = t.update(M);
    u.defines.VSM_SAMPLES !== w.blurSamples && (u.defines.VSM_SAMPLES = w.blurSamples, f.defines.VSM_SAMPLES = w.blurSamples, u.needsUpdate = !0, f.needsUpdate = !0), w.mapPass === null && (w.mapPass = new _i(r.x, r.y, {
      format: hs,
      type: en
    })), u.uniforms.shadow_pass.value = w.map.depthTexture, u.uniforms.resolution.value = w.mapSize, u.uniforms.radius.value = w.radius, e.setRenderTarget(w.mapPass), e.clear(), e.renderBufferDirect(C, null, g, u, M, null), f.uniforms.shadow_pass.value = w.mapPass.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, e.setRenderTarget(w.map), e.clear(), e.renderBufferDirect(C, null, g, f, M, null);
  }
  function S(w, C, g, E) {
    let F = null;
    const R = g.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (R !== void 0) F = R;
    else if (F = g.isPointLight === !0 ? l : o, e.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === !0) {
      const V = F.uuid, Z = C.uuid;
      let G = c[V];
      G === void 0 && (G = {}, c[V] = G);
      let X = G[Z];
      X === void 0 && (X = F.clone(), G[Z] = X, C.addEventListener("dispose", A)), F = X;
    }
    if (F.visible = C.visible, F.wireframe = C.wireframe, E === 3 ? F.side = C.shadowSide !== null ? C.shadowSide : C.side : F.side = C.shadowSide !== null ? C.shadowSide : d[C.side], F.alphaMap = C.alphaMap, F.alphaTest = C.alphaToCoverage === !0 ? 0.5 : C.alphaTest, F.map = C.map, F.clipShadows = C.clipShadows, F.clippingPlanes = C.clippingPlanes, F.clipIntersection = C.clipIntersection, F.displacementMap = C.displacementMap, F.displacementScale = C.displacementScale, F.displacementBias = C.displacementBias, F.wireframeLinewidth = C.wireframeLinewidth, F.linewidth = C.linewidth, g.isPointLight === !0 && F.isMeshDistanceMaterial === !0) {
      const V = e.properties.get(F);
      V.light = g;
    }
    return F;
  }
  function v(w, C, g, E, F) {
    if (w.visible === !1) return;
    if (w.layers.test(C.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && F === 3) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, w.matrixWorld);
      const V = t.update(w), Z = w.material;
      if (Array.isArray(Z)) {
        const G = V.groups;
        for (let X = 0, H = G.length; X < H; X++) {
          const B = G[X], ae = Z[B.materialIndex];
          if (ae && ae.visible) {
            const ie = S(w, ae, E, F);
            w.onBeforeShadow(e, w, C, g, V, ie, B), e.renderBufferDirect(g, null, V, ie, w, B), w.onAfterShadow(e, w, C, g, V, ie, B);
          }
        }
      } else if (Z.visible) {
        const G = S(w, Z, E, F);
        w.onBeforeShadow(e, w, C, g, V, G, null), e.renderBufferDirect(g, null, V, G, w, null), w.onAfterShadow(e, w, C, g, V, G, null);
      }
    }
    const R = w.children;
    for (let V = 0, Z = R.length; V < Z; V++) v(R[V], C, g, E, F);
  }
  function A(w) {
    w.target.removeEventListener("dispose", A);
    for (const C in c) {
      const g = c[C], E = w.target.uuid;
      E in g && (g[E].dispose(), delete g[E]);
    }
  }
}
function Np(e, t) {
  function i() {
    let U = !1;
    const $ = new Et();
    let ne = null;
    const we = new Et(0, 0, 0, 0);
    return {
      setMask: function(Ae) {
        ne !== Ae && !U && (e.colorMask(Ae, Ae, Ae, Ae), ne = Ae);
      },
      setLocked: function(Ae) {
        U = Ae;
      },
      setClear: function(Ae, te, ye, Ve, wt) {
        wt === !0 && (Ae *= Ve, te *= Ve, ye *= Ve), $.set(Ae, te, ye, Ve), we.equals($) === !1 && (e.clearColor(Ae, te, ye, Ve), we.copy($));
      },
      reset: function() {
        U = !1, ne = null, we.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let U = !1, $ = !1, ne = null, we = null, Ae = null;
    return {
      setReversed: function(te) {
        if ($ !== te) {
          const ye = t.get("EXT_clip_control");
          te ? ye.clipControlEXT(ye.LOWER_LEFT_EXT, ye.ZERO_TO_ONE_EXT) : ye.clipControlEXT(ye.LOWER_LEFT_EXT, ye.NEGATIVE_ONE_TO_ONE_EXT), $ = te;
          const Ve = Ae;
          Ae = null, this.setClear(Ve);
        }
      },
      getReversed: function() {
        return $;
      },
      setTest: function(te) {
        te ? me(e.DEPTH_TEST) : Oe(e.DEPTH_TEST);
      },
      setMask: function(te) {
        ne !== te && !U && (e.depthMask(te), ne = te);
      },
      setFunc: function(te) {
        if ($ && (te = _h[te]), we !== te) {
          switch (te) {
            case 0:
              e.depthFunc(e.NEVER);
              break;
            case 1:
              e.depthFunc(e.ALWAYS);
              break;
            case 2:
              e.depthFunc(e.LESS);
              break;
            case 3:
              e.depthFunc(e.LEQUAL);
              break;
            case 4:
              e.depthFunc(e.EQUAL);
              break;
            case 5:
              e.depthFunc(e.GEQUAL);
              break;
            case 6:
              e.depthFunc(e.GREATER);
              break;
            case 7:
              e.depthFunc(e.NOTEQUAL);
              break;
            default:
              e.depthFunc(e.LEQUAL);
          }
          we = te;
        }
      },
      setLocked: function(te) {
        U = te;
      },
      setClear: function(te) {
        Ae !== te && (Ae = te, $ && (te = 1 - te), e.clearDepth(te));
      },
      reset: function() {
        U = !1, ne = null, we = null, Ae = null, $ = !1;
      }
    };
  }
  function r() {
    let U = !1, $ = null, ne = null, we = null, Ae = null, te = null, ye = null, Ve = null, wt = null;
    return {
      setTest: function(ct) {
        U || (ct ? me(e.STENCIL_TEST) : Oe(e.STENCIL_TEST));
      },
      setMask: function(ct) {
        $ !== ct && !U && (e.stencilMask(ct), $ = ct);
      },
      setFunc: function(ct, Wt, Xt) {
        (ne !== ct || we !== Wt || Ae !== Xt) && (e.stencilFunc(ct, Wt, Xt), ne = ct, we = Wt, Ae = Xt);
      },
      setOp: function(ct, Wt, Xt) {
        (te !== ct || ye !== Wt || Ve !== Xt) && (e.stencilOp(ct, Wt, Xt), te = ct, ye = Wt, Ve = Xt);
      },
      setLocked: function(ct) {
        U = ct;
      },
      setClear: function(ct) {
        wt !== ct && (e.clearStencil(ct), wt = ct);
      },
      reset: function() {
        U = !1, $ = null, ne = null, we = null, Ae = null, te = null, ye = null, Ve = null, wt = null;
      }
    };
  }
  const s = new i(), a = new n(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, d = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), _ = [], M = null, m = !1, p = null, T = null, S = null, v = null, A = null, w = null, C = null, g = new $e(0, 0, 0), E = 0, F = !1, R = null, V = null, Z = null, G = null, X = null;
  const H = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let B = !1, ae = 0;
  const ie = e.getParameter(e.VERSION);
  ie.indexOf("WebGL") !== -1 ? (ae = parseFloat(/^WebGL (\d)/.exec(ie)[1]), B = ae >= 1) : ie.indexOf("OpenGL ES") !== -1 && (ae = parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]), B = ae >= 2);
  let oe = null, de = {};
  const Re = e.getParameter(e.SCISSOR_BOX), rt = e.getParameter(e.VIEWPORT), We = new Et().fromArray(Re), J = new Et().fromArray(rt);
  function ue(U, $, ne, we) {
    const Ae = new Uint8Array(4), te = e.createTexture();
    e.bindTexture(U, te), e.texParameteri(U, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(U, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let ye = 0; ye < ne; ye++) U === e.TEXTURE_3D || U === e.TEXTURE_2D_ARRAY ? e.texImage3D($, 0, e.RGBA, 1, 1, we, 0, e.RGBA, e.UNSIGNED_BYTE, Ae) : e.texImage2D($ + ye, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, Ae);
    return te;
  }
  const Me = {};
  Me[e.TEXTURE_2D] = ue(e.TEXTURE_2D, e.TEXTURE_2D, 1), Me[e.TEXTURE_CUBE_MAP] = ue(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Me[e.TEXTURE_2D_ARRAY] = ue(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), Me[e.TEXTURE_3D] = ue(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), me(e.DEPTH_TEST), a.setFunc(3), Te(!1), De(1), me(e.CULL_FACE), pe(0);
  function me(U) {
    h[U] !== !0 && (e.enable(U), h[U] = !0);
  }
  function Oe(U) {
    h[U] !== !1 && (e.disable(U), h[U] = !1);
  }
  function ze(U, $) {
    return u[U] !== $ ? (e.bindFramebuffer(U, $), u[U] = $, U === e.DRAW_FRAMEBUFFER && (u[e.FRAMEBUFFER] = $), U === e.FRAMEBUFFER && (u[e.DRAW_FRAMEBUFFER] = $), !0) : !1;
  }
  function Ne(U, $) {
    let ne = _, we = !1;
    if (U) {
      ne = f.get($), ne === void 0 && (ne = [], f.set($, ne));
      const Ae = U.textures;
      if (ne.length !== Ae.length || ne[0] !== e.COLOR_ATTACHMENT0) {
        for (let te = 0, ye = Ae.length; te < ye; te++) ne[te] = e.COLOR_ATTACHMENT0 + te;
        ne.length = Ae.length, we = !0;
      }
    } else ne[0] !== e.BACK && (ne[0] = e.BACK, we = !0);
    we && e.drawBuffers(ne);
  }
  function qe(U) {
    return M !== U ? (e.useProgram(U), M = U, !0) : !1;
  }
  const Q = {
    100: e.FUNC_ADD,
    101: e.FUNC_SUBTRACT,
    102: e.FUNC_REVERSE_SUBTRACT
  };
  Q[103] = e.MIN, Q[104] = e.MAX;
  const le = {
    200: e.ZERO,
    201: e.ONE,
    202: e.SRC_COLOR,
    204: e.SRC_ALPHA,
    210: e.SRC_ALPHA_SATURATE,
    208: e.DST_COLOR,
    206: e.DST_ALPHA,
    203: e.ONE_MINUS_SRC_COLOR,
    205: e.ONE_MINUS_SRC_ALPHA,
    209: e.ONE_MINUS_DST_COLOR,
    207: e.ONE_MINUS_DST_ALPHA,
    211: e.CONSTANT_COLOR,
    212: e.ONE_MINUS_CONSTANT_COLOR,
    213: e.CONSTANT_ALPHA,
    214: e.ONE_MINUS_CONSTANT_ALPHA
  };
  function pe(U, $, ne, we, Ae, te, ye, Ve, wt, ct) {
    if (U === 0) {
      m === !0 && (Oe(e.BLEND), m = !1);
      return;
    }
    if (m === !1 && (me(e.BLEND), m = !0), U !== 5) {
      if (U !== p || ct !== F) {
        if ((T !== 100 || A !== 100) && (e.blendEquation(e.FUNC_ADD), T = 100, A = 100), ct) switch (U) {
          case 1:
            e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e.blendFunc(e.ONE, e.ONE);
            break;
          case 3:
            e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
            break;
          case 4:
            e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
            break;
          default:
            ke("WebGLState: Invalid blending: ", U);
            break;
        }
        else switch (U) {
          case 1:
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
            break;
          case 3:
            ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case 4:
            ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            ke("WebGLState: Invalid blending: ", U);
            break;
        }
        S = null, v = null, w = null, C = null, g.set(0, 0, 0), E = 0, p = U, F = ct;
      }
      return;
    }
    Ae = Ae || $, te = te || ne, ye = ye || we, ($ !== T || Ae !== A) && (e.blendEquationSeparate(Q[$], Q[Ae]), T = $, A = Ae), (ne !== S || we !== v || te !== w || ye !== C) && (e.blendFuncSeparate(le[ne], le[we], le[te], le[ye]), S = ne, v = we, w = te, C = ye), (Ve.equals(g) === !1 || wt !== E) && (e.blendColor(Ve.r, Ve.g, Ve.b, wt), g.copy(Ve), E = wt), p = U, F = !1;
  }
  function Ee(U, $) {
    U.side === 2 ? Oe(e.CULL_FACE) : me(e.CULL_FACE);
    let ne = U.side === 1;
    $ && (ne = !ne), Te(ne), U.blending === 1 && U.transparent === !1 ? pe(0) : pe(U.blending, U.blendEquation, U.blendSrc, U.blendDst, U.blendEquationAlpha, U.blendSrcAlpha, U.blendDstAlpha, U.blendColor, U.blendAlpha, U.premultipliedAlpha), a.setFunc(U.depthFunc), a.setTest(U.depthTest), a.setMask(U.depthWrite), s.setMask(U.colorWrite);
    const we = U.stencilWrite;
    o.setTest(we), we && (o.setMask(U.stencilWriteMask), o.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask), o.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)), Xe(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits), U.alphaToCoverage === !0 ? me(e.SAMPLE_ALPHA_TO_COVERAGE) : Oe(e.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Te(U) {
    R !== U && (U ? e.frontFace(e.CW) : e.frontFace(e.CCW), R = U);
  }
  function De(U) {
    U !== 0 ? (me(e.CULL_FACE), U !== V && (U === 1 ? e.cullFace(e.BACK) : U === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : Oe(e.CULL_FACE), V = U;
  }
  function Ue(U) {
    U !== Z && (B && e.lineWidth(U), Z = U);
  }
  function Xe(U, $, ne) {
    U ? (me(e.POLYGON_OFFSET_FILL), (G !== $ || X !== ne) && (G = $, X = ne, a.getReversed() && ($ = -$), e.polygonOffset($, ne))) : Oe(e.POLYGON_OFFSET_FILL);
  }
  function Ze(U) {
    U ? me(e.SCISSOR_TEST) : Oe(e.SCISSOR_TEST);
  }
  function I(U) {
    U === void 0 && (U = e.TEXTURE0 + H - 1), oe !== U && (e.activeTexture(U), oe = U);
  }
  function mt(U, $, ne) {
    ne === void 0 && (oe === null ? ne = e.TEXTURE0 + H - 1 : ne = oe);
    let we = de[ne];
    we === void 0 && (we = {
      type: void 0,
      texture: void 0
    }, de[ne] = we), (we.type !== U || we.texture !== $) && (oe !== ne && (e.activeTexture(ne), oe = ne), e.bindTexture(U, $ || Me[U]), we.type = U, we.texture = $);
  }
  function it() {
    const U = de[oe];
    U !== void 0 && U.type !== void 0 && (e.bindTexture(U.type, null), U.type = void 0, U.texture = void 0);
  }
  function et() {
    try {
      e.compressedTexImage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function b() {
    try {
      e.compressedTexImage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function y() {
    try {
      e.texSubImage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function D() {
    try {
      e.texSubImage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function Y() {
    try {
      e.compressedTexSubImage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function j() {
    try {
      e.compressedTexSubImage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function ce() {
    try {
      e.texStorage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function ge() {
    try {
      e.texStorage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function N() {
    try {
      e.texImage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function he() {
    try {
      e.texImage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function be(U) {
    return d[U] !== void 0 ? d[U] : e.getParameter(U);
  }
  function Le(U, $) {
    d[U] !== $ && (e.pixelStorei(U, $), d[U] = $);
  }
  function se(U) {
    We.equals(U) === !1 && (e.scissor(U.x, U.y, U.z, U.w), We.copy(U));
  }
  function Ie(U) {
    J.equals(U) === !1 && (e.viewport(U.x, U.y, U.z, U.w), J.copy(U));
  }
  function Fe(U, $) {
    let ne = c.get($);
    ne === void 0 && (ne = /* @__PURE__ */ new WeakMap(), c.set($, ne));
    let we = ne.get(U);
    we === void 0 && (we = e.getUniformBlockIndex($, U.name), ne.set(U, we));
  }
  function Ye(U, $) {
    const ne = c.get($).get(U);
    l.get($) !== ne && (e.uniformBlockBinding($, ne, U.__bindingPointIndex), l.set($, ne));
  }
  function nt() {
    e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), a.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), h = {}, d = {}, oe = null, de = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), _ = [], M = null, m = !1, p = null, T = null, S = null, v = null, A = null, w = null, C = null, g = new $e(0, 0, 0), E = 0, F = !1, R = null, V = null, Z = null, G = null, X = null, We.set(0, 0, e.canvas.width, e.canvas.height), J.set(0, 0, e.canvas.width, e.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: me,
    disable: Oe,
    bindFramebuffer: ze,
    drawBuffers: Ne,
    useProgram: qe,
    setBlending: pe,
    setMaterial: Ee,
    setFlipSided: Te,
    setCullFace: De,
    setLineWidth: Ue,
    setPolygonOffset: Xe,
    setScissorTest: Ze,
    activeTexture: I,
    bindTexture: mt,
    unbindTexture: it,
    compressedTexImage2D: et,
    compressedTexImage3D: b,
    texImage2D: N,
    texImage3D: he,
    pixelStorei: Le,
    getParameter: be,
    updateUBOMapping: Fe,
    uniformBlockBinding: Ye,
    texStorage2D: ce,
    texStorage3D: ge,
    texSubImage2D: y,
    texSubImage3D: D,
    compressedTexSubImage2D: Y,
    compressedTexSubImage3D: j,
    scissor: se,
    viewport: Ie,
    reset: nt
  };
}
function Up(e, t, i, n, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new ee(), h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new Set();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function M(b, y) {
    return _ ? new OffscreenCanvas(b, y) : mr("canvas");
  }
  function m(b, y, D) {
    let Y = 1;
    const j = et(b);
    if ((j.width > D || j.height > D) && (Y = D / Math.max(j.width, j.height)), Y < 1) if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
      const ce = Math.floor(Y * j.width), ge = Math.floor(Y * j.height);
      u === void 0 && (u = M(ce, ge));
      const N = y ? M(ce, ge) : u;
      return N.width = ce, N.height = ge, N.getContext("2d").drawImage(b, 0, 0, ce, ge), Ge("WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + ce + "x" + ge + ")."), N;
    } else
      return "data" in b && Ge("WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), b;
    return b;
  }
  function p(b) {
    return b.generateMipmaps;
  }
  function T(b) {
    e.generateMipmap(b);
  }
  function S(b) {
    return b.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? e.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
  }
  function v(b, y, D, Y, j, ce = !1) {
    if (b !== null) {
      if (e[b] !== void 0) return e[b];
      Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let ge;
    Y && (ge = t.get("EXT_texture_norm16"), ge || Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let N = y;
    if (y === e.RED && (D === e.FLOAT && (N = e.R32F), D === e.HALF_FLOAT && (N = e.R16F), D === e.UNSIGNED_BYTE && (N = e.R8), D === e.UNSIGNED_SHORT && ge && (N = ge.R16_EXT), D === e.SHORT && ge && (N = ge.R16_SNORM_EXT)), y === e.RED_INTEGER && (D === e.UNSIGNED_BYTE && (N = e.R8UI), D === e.UNSIGNED_SHORT && (N = e.R16UI), D === e.UNSIGNED_INT && (N = e.R32UI), D === e.BYTE && (N = e.R8I), D === e.SHORT && (N = e.R16I), D === e.INT && (N = e.R32I)), y === e.RG && (D === e.FLOAT && (N = e.RG32F), D === e.HALF_FLOAT && (N = e.RG16F), D === e.UNSIGNED_BYTE && (N = e.RG8), D === e.UNSIGNED_SHORT && ge && (N = ge.RG16_EXT), D === e.SHORT && ge && (N = ge.RG16_SNORM_EXT)), y === e.RG_INTEGER && (D === e.UNSIGNED_BYTE && (N = e.RG8UI), D === e.UNSIGNED_SHORT && (N = e.RG16UI), D === e.UNSIGNED_INT && (N = e.RG32UI), D === e.BYTE && (N = e.RG8I), D === e.SHORT && (N = e.RG16I), D === e.INT && (N = e.RG32I)), y === e.RGB_INTEGER && (D === e.UNSIGNED_BYTE && (N = e.RGB8UI), D === e.UNSIGNED_SHORT && (N = e.RGB16UI), D === e.UNSIGNED_INT && (N = e.RGB32UI), D === e.BYTE && (N = e.RGB8I), D === e.SHORT && (N = e.RGB16I), D === e.INT && (N = e.RGB32I)), y === e.RGBA_INTEGER && (D === e.UNSIGNED_BYTE && (N = e.RGBA8UI), D === e.UNSIGNED_SHORT && (N = e.RGBA16UI), D === e.UNSIGNED_INT && (N = e.RGBA32UI), D === e.BYTE && (N = e.RGBA8I), D === e.SHORT && (N = e.RGBA16I), D === e.INT && (N = e.RGBA32I)), y === e.RGB && (D === e.UNSIGNED_SHORT && ge && (N = ge.RGB16_EXT), D === e.SHORT && ge && (N = ge.RGB16_SNORM_EXT), D === e.UNSIGNED_INT_5_9_9_9_REV && (N = e.RGB9_E5), D === e.UNSIGNED_INT_10F_11F_11F_REV && (N = e.R11F_G11F_B10F)), y === e.RGBA) {
      const he = ce ? ds : ot.getTransfer(j);
      D === e.FLOAT && (N = e.RGBA32F), D === e.HALF_FLOAT && (N = e.RGBA16F), D === e.UNSIGNED_BYTE && (N = he === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), D === e.UNSIGNED_SHORT && ge && (N = ge.RGBA16_EXT), D === e.SHORT && ge && (N = ge.RGBA16_SNORM_EXT), D === e.UNSIGNED_SHORT_4_4_4_4 && (N = e.RGBA4), D === e.UNSIGNED_SHORT_5_5_5_1 && (N = e.RGB5_A1);
    }
    return (N === e.R16F || N === e.R32F || N === e.RG16F || N === e.RG32F || N === e.RGBA16F || N === e.RGBA32F) && t.get("EXT_color_buffer_float"), N;
  }
  function A(b, y) {
    let D;
    return b ? y === null || y === 1014 || y === 1020 ? D = e.DEPTH24_STENCIL8 : y === 1015 ? D = e.DEPTH32F_STENCIL8 : y === 1012 && (D = e.DEPTH24_STENCIL8, Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : y === null || y === 1014 || y === 1020 ? D = e.DEPTH_COMPONENT24 : y === 1015 ? D = e.DEPTH_COMPONENT32F : y === 1012 && (D = e.DEPTH_COMPONENT16), D;
  }
  function w(b, y) {
    return p(b) === !0 || b.isFramebufferTexture && b.minFilter !== 1003 && b.minFilter !== 1006 ? Math.log2(Math.max(y.width, y.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? y.mipmaps.length : 1;
  }
  function C(b) {
    const y = b.target;
    y.removeEventListener("dispose", C), E(y), y.isVideoTexture && h.delete(y), y.isHTMLTexture && d.delete(y);
  }
  function g(b) {
    const y = b.target;
    y.removeEventListener("dispose", g), R(y);
  }
  function E(b) {
    const y = n.get(b);
    if (y.__webglInit === void 0) return;
    const D = b.source, Y = f.get(D);
    if (Y) {
      const j = Y[y.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && F(b), Object.keys(Y).length === 0 && f.delete(D);
    }
    n.remove(b);
  }
  function F(b) {
    const y = n.get(b);
    e.deleteTexture(y.__webglTexture);
    const D = b.source, Y = f.get(D);
    delete Y[y.__cacheKey], a.memory.textures--;
  }
  function R(b) {
    const y = n.get(b);
    if (b.depthTexture && (b.depthTexture.dispose(), n.remove(b.depthTexture)), b.isWebGLCubeRenderTarget) for (let Y = 0; Y < 6; Y++) {
      if (Array.isArray(y.__webglFramebuffer[Y])) for (let j = 0; j < y.__webglFramebuffer[Y].length; j++) e.deleteFramebuffer(y.__webglFramebuffer[Y][j]);
      else e.deleteFramebuffer(y.__webglFramebuffer[Y]);
      y.__webglDepthbuffer && e.deleteRenderbuffer(y.__webglDepthbuffer[Y]);
    }
    else {
      if (Array.isArray(y.__webglFramebuffer)) for (let Y = 0; Y < y.__webglFramebuffer.length; Y++) e.deleteFramebuffer(y.__webglFramebuffer[Y]);
      else e.deleteFramebuffer(y.__webglFramebuffer);
      if (y.__webglDepthbuffer && e.deleteRenderbuffer(y.__webglDepthbuffer), y.__webglMultisampledFramebuffer && e.deleteFramebuffer(y.__webglMultisampledFramebuffer), y.__webglColorRenderbuffer)
        for (let Y = 0; Y < y.__webglColorRenderbuffer.length; Y++) y.__webglColorRenderbuffer[Y] && e.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);
      y.__webglDepthRenderbuffer && e.deleteRenderbuffer(y.__webglDepthRenderbuffer);
    }
    const D = b.textures;
    for (let Y = 0, j = D.length; Y < j; Y++) {
      const ce = n.get(D[Y]);
      ce.__webglTexture && (e.deleteTexture(ce.__webglTexture), a.memory.textures--), n.remove(D[Y]);
    }
    n.remove(b);
  }
  let V = 0;
  function Z() {
    V = 0;
  }
  function G() {
    return V;
  }
  function X(b) {
    V = b;
  }
  function H() {
    const b = V;
    return b >= r.maxTextures && Ge("WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + r.maxTextures), V += 1, b;
  }
  function B(b) {
    const y = [];
    return y.push(b.wrapS), y.push(b.wrapT), y.push(b.wrapR || 0), y.push(b.magFilter), y.push(b.minFilter), y.push(b.anisotropy), y.push(b.internalFormat), y.push(b.format), y.push(b.type), y.push(b.generateMipmaps), y.push(b.premultiplyAlpha), y.push(b.flipY), y.push(b.unpackAlignment), y.push(b.colorSpace), y.join();
  }
  function ae(b, y) {
    const D = n.get(b);
    if (b.isVideoTexture && mt(b), b.isRenderTargetTexture === !1 && b.isExternalTexture !== !0 && b.version > 0 && D.__version !== b.version) {
      const Y = b.image;
      if (Y === null) Ge("WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1) Ge("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Oe(D, b, y);
        return;
      }
    } else b.isExternalTexture && (D.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    i.bindTexture(e.TEXTURE_2D, D.__webglTexture, e.TEXTURE0 + y);
  }
  function ie(b, y) {
    const D = n.get(b);
    if (b.isRenderTargetTexture === !1 && b.version > 0 && D.__version !== b.version) {
      Oe(D, b, y);
      return;
    } else b.isExternalTexture && (D.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    i.bindTexture(e.TEXTURE_2D_ARRAY, D.__webglTexture, e.TEXTURE0 + y);
  }
  function oe(b, y) {
    const D = n.get(b);
    if (b.isRenderTargetTexture === !1 && b.version > 0 && D.__version !== b.version) {
      Oe(D, b, y);
      return;
    }
    i.bindTexture(e.TEXTURE_3D, D.__webglTexture, e.TEXTURE0 + y);
  }
  function de(b, y) {
    const D = n.get(b);
    if (b.isCubeDepthTexture !== !0 && b.version > 0 && D.__version !== b.version) {
      ze(D, b, y);
      return;
    }
    i.bindTexture(e.TEXTURE_CUBE_MAP, D.__webglTexture, e.TEXTURE0 + y);
  }
  const Re = {
    [cs]: e.REPEAT,
    [Ai]: e.CLAMP_TO_EDGE,
    [la]: e.MIRRORED_REPEAT
  }, rt = {
    [Vt]: e.NEAREST,
    [xc]: e.NEAREST_MIPMAP_NEAREST,
    [Sc]: e.NEAREST_MIPMAP_LINEAR,
    [Jt]: e.LINEAR,
    [Ec]: e.LINEAR_MIPMAP_NEAREST,
    [ya]: e.LINEAR_MIPMAP_LINEAR
  }, We = {
    512: e.NEVER,
    519: e.ALWAYS,
    513: e.LESS,
    515: e.LEQUAL,
    514: e.EQUAL,
    518: e.GEQUAL,
    516: e.GREATER,
    517: e.NOTEQUAL
  };
  function J(b, y) {
    if (y.type === 1015 && t.has("OES_texture_float_linear") === !1 && (y.magFilter === 1006 || y.magFilter === 1007 || y.magFilter === 1005 || y.magFilter === 1008 || y.minFilter === 1006 || y.minFilter === 1007 || y.minFilter === 1005 || y.minFilter === 1008) && Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(b, e.TEXTURE_WRAP_S, Re[y.wrapS]), e.texParameteri(b, e.TEXTURE_WRAP_T, Re[y.wrapT]), (b === e.TEXTURE_3D || b === e.TEXTURE_2D_ARRAY) && e.texParameteri(b, e.TEXTURE_WRAP_R, Re[y.wrapR]), e.texParameteri(b, e.TEXTURE_MAG_FILTER, rt[y.magFilter]), e.texParameteri(b, e.TEXTURE_MIN_FILTER, rt[y.minFilter]), y.compareFunction && (e.texParameteri(b, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(b, e.TEXTURE_COMPARE_FUNC, We[y.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (y.magFilter === 1003 || y.minFilter !== 1005 && y.minFilter !== 1008 || y.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
      if (y.anisotropy > 1 || n.get(y).__currentAnisotropy) {
        const D = t.get("EXT_texture_filter_anisotropic");
        e.texParameterf(b, D.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, r.getMaxAnisotropy())), n.get(y).__currentAnisotropy = y.anisotropy;
      }
    }
  }
  function ue(b, y) {
    let D = !1;
    b.__webglInit === void 0 && (b.__webglInit = !0, y.addEventListener("dispose", C));
    const Y = y.source;
    let j = f.get(Y);
    j === void 0 && (j = {}, f.set(Y, j));
    const ce = B(y);
    if (ce !== b.__cacheKey) {
      j[ce] === void 0 && (j[ce] = {
        texture: e.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, D = !0), j[ce].usedTimes++;
      const ge = j[b.__cacheKey];
      ge !== void 0 && (j[b.__cacheKey].usedTimes--, ge.usedTimes === 0 && F(y)), b.__cacheKey = ce, b.__webglTexture = j[ce].texture;
    }
    return D;
  }
  function Me(b, y, D) {
    return Math.floor(Math.floor(b / D) / y);
  }
  function me(b, y, D, Y) {
    const ce = b.updateRanges;
    if (ce.length === 0) i.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, y.width, y.height, D, Y, y.data);
    else {
      ce.sort((Le, se) => Le.start - se.start);
      let ge = 0;
      for (let Le = 1; Le < ce.length; Le++) {
        const se = ce[ge], Ie = ce[Le], Fe = se.start + se.count, Ye = Me(Ie.start, y.width, 4), nt = Me(se.start, y.width, 4);
        Ie.start <= Fe + 1 && Ye === nt && Me(Ie.start + Ie.count - 1, y.width, 4) === Ye ? se.count = Math.max(se.count, Ie.start + Ie.count - se.start) : (++ge, ce[ge] = Ie);
      }
      ce.length = ge + 1;
      const N = i.getParameter(e.UNPACK_ROW_LENGTH), he = i.getParameter(e.UNPACK_SKIP_PIXELS), be = i.getParameter(e.UNPACK_SKIP_ROWS);
      i.pixelStorei(e.UNPACK_ROW_LENGTH, y.width);
      for (let Le = 0, se = ce.length; Le < se; Le++) {
        const Ie = ce[Le], Fe = Math.floor(Ie.start / 4), Ye = Math.ceil(Ie.count / 4), nt = Fe % y.width, U = Math.floor(Fe / y.width), $ = Ye, ne = 1;
        i.pixelStorei(e.UNPACK_SKIP_PIXELS, nt), i.pixelStorei(e.UNPACK_SKIP_ROWS, U), i.texSubImage2D(e.TEXTURE_2D, 0, nt, U, $, ne, D, Y, y.data);
      }
      b.clearUpdateRanges(), i.pixelStorei(e.UNPACK_ROW_LENGTH, N), i.pixelStorei(e.UNPACK_SKIP_PIXELS, he), i.pixelStorei(e.UNPACK_SKIP_ROWS, be);
    }
  }
  function Oe(b, y, D) {
    let Y = e.TEXTURE_2D;
    (y.isDataArrayTexture || y.isCompressedArrayTexture) && (Y = e.TEXTURE_2D_ARRAY), y.isData3DTexture && (Y = e.TEXTURE_3D);
    const j = ue(b, y), ce = y.source;
    i.bindTexture(Y, b.__webglTexture, e.TEXTURE0 + D);
    const ge = n.get(ce);
    if (ce.version !== ge.__version || j === !0) {
      if (i.activeTexture(e.TEXTURE0 + D), !(typeof ImageBitmap < "u" && y.image instanceof ImageBitmap)) {
        const $ = ot.getPrimaries(ot.workingColorSpace), ne = y.colorSpace === "" ? null : ot.getPrimaries(y.colorSpace), we = y.colorSpace === "" || $ === ne ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
        i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, y.flipY), i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, we);
      }
      i.pixelStorei(e.UNPACK_ALIGNMENT, y.unpackAlignment);
      let N = m(y.image, !1, r.maxTextureSize);
      N = it(y, N);
      const he = s.convert(y.format, y.colorSpace), be = s.convert(y.type);
      let Le = v(y.internalFormat, he, be, y.normalized, y.colorSpace, y.isVideoTexture);
      J(Y, y);
      let se;
      const Ie = y.mipmaps, Fe = y.isVideoTexture !== !0, Ye = ge.__version === void 0 || j === !0, nt = ce.dataReady, U = w(y, N);
      if (y.isDepthTexture)
        Le = A(y.format === hl, y.type), Ye && (Fe ? i.texStorage2D(e.TEXTURE_2D, 1, Le, N.width, N.height) : i.texImage2D(e.TEXTURE_2D, 0, Le, N.width, N.height, 0, he, be, null));
      else if (y.isDataTexture) if (Ie.length > 0) {
        Fe && Ye && i.texStorage2D(e.TEXTURE_2D, U, Le, Ie[0].width, Ie[0].height);
        for (let $ = 0, ne = Ie.length; $ < ne; $++)
          se = Ie[$], Fe ? nt && i.texSubImage2D(e.TEXTURE_2D, $, 0, 0, se.width, se.height, he, be, se.data) : i.texImage2D(e.TEXTURE_2D, $, Le, se.width, se.height, 0, he, be, se.data);
        y.generateMipmaps = !1;
      } else Fe ? (Ye && i.texStorage2D(e.TEXTURE_2D, U, Le, N.width, N.height), nt && me(y, N, he, be)) : i.texImage2D(e.TEXTURE_2D, 0, Le, N.width, N.height, 0, he, be, N.data);
      else if (y.isCompressedTexture) if (y.isCompressedArrayTexture) {
        Fe && Ye && i.texStorage3D(e.TEXTURE_2D_ARRAY, U, Le, Ie[0].width, Ie[0].height, N.depth);
        for (let $ = 0, ne = Ie.length; $ < ne; $++)
          if (se = Ie[$], y.format !== 1023) if (he !== null) if (Fe) {
            if (nt) if (y.layerUpdates.size > 0) {
              const we = Io(se.width, se.height, y.format, y.type);
              for (const Ae of y.layerUpdates) {
                const te = se.data.subarray(Ae * we / se.data.BYTES_PER_ELEMENT, (Ae + 1) * we / se.data.BYTES_PER_ELEMENT);
                i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, $, 0, 0, Ae, se.width, se.height, 1, he, te);
              }
              y.clearLayerUpdates();
            } else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, $, 0, 0, 0, se.width, se.height, N.depth, he, se.data);
          } else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY, $, Le, se.width, se.height, N.depth, 0, se.data, 0, 0);
          else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else Fe ? nt && i.texSubImage3D(e.TEXTURE_2D_ARRAY, $, 0, 0, 0, se.width, se.height, N.depth, he, be, se.data) : i.texImage3D(e.TEXTURE_2D_ARRAY, $, Le, se.width, se.height, N.depth, 0, he, be, se.data);
      } else {
        Fe && Ye && i.texStorage2D(e.TEXTURE_2D, U, Le, Ie[0].width, Ie[0].height);
        for (let $ = 0, ne = Ie.length; $ < ne; $++)
          se = Ie[$], y.format !== 1023 ? he !== null ? Fe ? nt && i.compressedTexSubImage2D(e.TEXTURE_2D, $, 0, 0, se.width, se.height, he, se.data) : i.compressedTexImage2D(e.TEXTURE_2D, $, Le, se.width, se.height, 0, se.data) : Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Fe ? nt && i.texSubImage2D(e.TEXTURE_2D, $, 0, 0, se.width, se.height, he, be, se.data) : i.texImage2D(e.TEXTURE_2D, $, Le, se.width, se.height, 0, he, be, se.data);
      }
      else if (y.isDataArrayTexture) if (Fe) {
        if (Ye && i.texStorage3D(e.TEXTURE_2D_ARRAY, U, Le, N.width, N.height, N.depth), nt) if (y.layerUpdates.size > 0) {
          const $ = Io(N.width, N.height, y.format, y.type);
          for (const ne of y.layerUpdates) {
            const we = N.data.subarray(ne * $ / N.data.BYTES_PER_ELEMENT, (ne + 1) * $ / N.data.BYTES_PER_ELEMENT);
            i.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, ne, N.width, N.height, 1, he, be, we);
          }
          y.clearLayerUpdates();
        } else i.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, N.width, N.height, N.depth, he, be, N.data);
      } else i.texImage3D(e.TEXTURE_2D_ARRAY, 0, Le, N.width, N.height, N.depth, 0, he, be, N.data);
      else if (y.isData3DTexture) Fe ? (Ye && i.texStorage3D(e.TEXTURE_3D, U, Le, N.width, N.height, N.depth), nt && i.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, N.width, N.height, N.depth, he, be, N.data)) : i.texImage3D(e.TEXTURE_3D, 0, Le, N.width, N.height, N.depth, 0, he, be, N.data);
      else if (y.isFramebufferTexture) {
        if (Ye) if (Fe) i.texStorage2D(e.TEXTURE_2D, U, Le, N.width, N.height);
        else {
          let $ = N.width, ne = N.height;
          for (let we = 0; we < U; we++)
            i.texImage2D(e.TEXTURE_2D, we, Le, $, ne, 0, he, be, null), $ >>= 1, ne >>= 1;
        }
      } else if (y.isHTMLTexture) {
        if ("texElementImage2D" in e) {
          const $ = e.canvas;
          if ($.hasAttribute("layoutsubtree") || $.setAttribute("layoutsubtree", "true"), N.parentNode !== $) {
            $.appendChild(N), d.add(y), $.onpaint = (ne) => {
              const we = ne.changedElements;
              for (const Ae of d) we.includes(Ae.image) && (Ae.needsUpdate = !0);
            }, $.requestPaint();
            return;
          }
          if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, N);
          else {
            const we = e.RGBA, Ae = e.RGBA, te = e.UNSIGNED_BYTE;
            e.texElementImage2D(e.TEXTURE_2D, 0, we, Ae, te, N);
          }
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        }
      } else if (Ie.length > 0) {
        if (Fe && Ye) {
          const $ = et(Ie[0]);
          i.texStorage2D(e.TEXTURE_2D, U, Le, $.width, $.height);
        }
        for (let $ = 0, ne = Ie.length; $ < ne; $++)
          se = Ie[$], Fe ? nt && i.texSubImage2D(e.TEXTURE_2D, $, 0, 0, he, be, se) : i.texImage2D(e.TEXTURE_2D, $, Le, he, be, se);
        y.generateMipmaps = !1;
      } else if (Fe) {
        if (Ye) {
          const $ = et(N);
          i.texStorage2D(e.TEXTURE_2D, U, Le, $.width, $.height);
        }
        nt && i.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, he, be, N);
      } else i.texImage2D(e.TEXTURE_2D, 0, Le, he, be, N);
      p(y) && T(Y), ge.__version = ce.version, y.onUpdate && y.onUpdate(y);
    }
    b.__version = y.version;
  }
  function ze(b, y, D) {
    if (y.image.length !== 6) return;
    const Y = ue(b, y), j = y.source;
    i.bindTexture(e.TEXTURE_CUBE_MAP, b.__webglTexture, e.TEXTURE0 + D);
    const ce = n.get(j);
    if (j.version !== ce.__version || Y === !0) {
      i.activeTexture(e.TEXTURE0 + D);
      const ge = ot.getPrimaries(ot.workingColorSpace), N = y.colorSpace === "" ? null : ot.getPrimaries(y.colorSpace), he = y.colorSpace === "" || ge === N ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, y.flipY), i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), i.pixelStorei(e.UNPACK_ALIGNMENT, y.unpackAlignment), i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, he);
      const be = y.isCompressedTexture || y.image[0].isCompressedTexture, Le = y.image[0] && y.image[0].isDataTexture, se = [];
      for (let te = 0; te < 6; te++)
        !be && !Le ? se[te] = m(y.image[te], !0, r.maxCubemapSize) : se[te] = Le ? y.image[te].image : y.image[te], se[te] = it(y, se[te]);
      const Ie = se[0], Fe = s.convert(y.format, y.colorSpace), Ye = s.convert(y.type), nt = v(y.internalFormat, Fe, Ye, y.normalized, y.colorSpace), U = y.isVideoTexture !== !0, $ = ce.__version === void 0 || Y === !0, ne = j.dataReady;
      let we = w(y, Ie);
      J(e.TEXTURE_CUBE_MAP, y);
      let Ae;
      if (be) {
        U && $ && i.texStorage2D(e.TEXTURE_CUBE_MAP, we, nt, Ie.width, Ie.height);
        for (let te = 0; te < 6; te++) {
          Ae = se[te].mipmaps;
          for (let ye = 0; ye < Ae.length; ye++) {
            const Ve = Ae[ye];
            y.format !== 1023 ? Fe !== null ? U ? ne && i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, ye, 0, 0, Ve.width, Ve.height, Fe, Ve.data) : i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, ye, nt, Ve.width, Ve.height, 0, Ve.data) : Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : U ? ne && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, ye, 0, 0, Ve.width, Ve.height, Fe, Ye, Ve.data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, ye, nt, Ve.width, Ve.height, 0, Fe, Ye, Ve.data);
          }
        }
      } else {
        if (Ae = y.mipmaps, U && $) {
          Ae.length > 0 && we++;
          const te = et(se[0]);
          i.texStorage2D(e.TEXTURE_CUBE_MAP, we, nt, te.width, te.height);
        }
        for (let te = 0; te < 6; te++) if (Le) {
          U ? ne && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, 0, 0, se[te].width, se[te].height, Fe, Ye, se[te].data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, nt, se[te].width, se[te].height, 0, Fe, Ye, se[te].data);
          for (let ye = 0; ye < Ae.length; ye++) {
            const Ve = Ae[ye].image[te].image;
            U ? ne && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, ye + 1, 0, 0, Ve.width, Ve.height, Fe, Ye, Ve.data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, ye + 1, nt, Ve.width, Ve.height, 0, Fe, Ye, Ve.data);
          }
        } else {
          U ? ne && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, 0, 0, Fe, Ye, se[te]) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, nt, Fe, Ye, se[te]);
          for (let ye = 0; ye < Ae.length; ye++) {
            const Ve = Ae[ye];
            U ? ne && i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, ye + 1, 0, 0, Fe, Ye, Ve.image[te]) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + te, ye + 1, nt, Fe, Ye, Ve.image[te]);
          }
        }
      }
      p(y) && T(e.TEXTURE_CUBE_MAP), ce.__version = j.version, y.onUpdate && y.onUpdate(y);
    }
    b.__version = y.version;
  }
  function Ne(b, y, D, Y, j, ce) {
    const ge = s.convert(D.format, D.colorSpace), N = s.convert(D.type), he = v(D.internalFormat, ge, N, D.normalized, D.colorSpace), be = n.get(y), Le = n.get(D);
    if (Le.__renderTarget = y, !be.__hasExternalTextures) {
      const se = Math.max(1, y.width >> ce), Ie = Math.max(1, y.height >> ce);
      j === e.TEXTURE_3D || j === e.TEXTURE_2D_ARRAY ? i.texImage3D(j, ce, he, se, Ie, y.depth, 0, ge, N, null) : i.texImage2D(j, ce, he, se, Ie, 0, ge, N, null);
    }
    i.bindFramebuffer(e.FRAMEBUFFER, b), I(y) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, Y, j, Le.__webglTexture, 0, Ze(y)) : (j === e.TEXTURE_2D || j >= e.TEXTURE_CUBE_MAP_POSITIVE_X && j <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, Y, j, Le.__webglTexture, ce), i.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function qe(b, y, D) {
    if (e.bindRenderbuffer(e.RENDERBUFFER, b), y.depthBuffer) {
      const Y = y.depthTexture, j = Y && Y.isDepthTexture ? Y.type : null, ce = A(y.stencilBuffer, j), ge = y.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
      I(y) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Ze(y), ce, y.width, y.height) : D ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Ze(y), ce, y.width, y.height) : e.renderbufferStorage(e.RENDERBUFFER, ce, y.width, y.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, ge, e.RENDERBUFFER, b);
    } else {
      const Y = y.textures;
      for (let j = 0; j < Y.length; j++) {
        const ce = Y[j], ge = s.convert(ce.format, ce.colorSpace), N = s.convert(ce.type), he = v(ce.internalFormat, ge, N, ce.normalized, ce.colorSpace);
        I(y) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Ze(y), he, y.width, y.height) : D ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Ze(y), he, y.width, y.height) : e.renderbufferStorage(e.RENDERBUFFER, he, y.width, y.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function Q(b, y, D) {
    const Y = y.isWebGLCubeRenderTarget === !0;
    if (i.bindFramebuffer(e.FRAMEBUFFER, b), !(y.depthTexture && y.depthTexture.isDepthTexture)) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    const j = n.get(y.depthTexture);
    if (j.__renderTarget = y, (!j.__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && (y.depthTexture.image.width = y.width, y.depthTexture.image.height = y.height, y.depthTexture.needsUpdate = !0), Y) {
      if (j.__webglInit === void 0 && (j.__webglInit = !0, y.depthTexture.addEventListener("dispose", C)), j.__webglTexture === void 0) {
        j.__webglTexture = e.createTexture(), i.bindTexture(e.TEXTURE_CUBE_MAP, j.__webglTexture), J(e.TEXTURE_CUBE_MAP, y.depthTexture);
        const be = s.convert(y.depthTexture.format), Le = s.convert(y.depthTexture.type);
        let se;
        y.depthTexture.format === 1026 ? se = e.DEPTH_COMPONENT24 : y.depthTexture.format === 1027 && (se = e.DEPTH24_STENCIL8);
        for (let Ie = 0; Ie < 6; Ie++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + Ie, 0, se, y.width, y.height, 0, be, Le, null);
      }
    } else ae(y.depthTexture, 0);
    const ce = j.__webglTexture, ge = Ze(y), N = Y ? e.TEXTURE_CUBE_MAP_POSITIVE_X + D : e.TEXTURE_2D, he = y.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
    if (y.depthTexture.format === 1026) I(y) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, he, N, ce, 0, ge) : e.framebufferTexture2D(e.FRAMEBUFFER, he, N, ce, 0);
    else if (y.depthTexture.format === 1027) I(y) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, he, N, ce, 0, ge) : e.framebufferTexture2D(e.FRAMEBUFFER, he, N, ce, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function le(b) {
    const y = n.get(b), D = b.isWebGLCubeRenderTarget === !0;
    if (y.__boundDepthTexture !== b.depthTexture) {
      const Y = b.depthTexture;
      if (y.__depthDisposeCallback && y.__depthDisposeCallback(), Y) {
        const j = () => {
          delete y.__boundDepthTexture, delete y.__depthDisposeCallback, Y.removeEventListener("dispose", j);
        };
        Y.addEventListener("dispose", j), y.__depthDisposeCallback = j;
      }
      y.__boundDepthTexture = Y;
    }
    if (b.depthTexture && !y.__autoAllocateDepthBuffer) if (D) for (let Y = 0; Y < 6; Y++) Q(y.__webglFramebuffer[Y], b, Y);
    else {
      const Y = b.texture.mipmaps;
      Y && Y.length > 0 ? Q(y.__webglFramebuffer[0], b, 0) : Q(y.__webglFramebuffer, b, 0);
    }
    else if (D) {
      y.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (i.bindFramebuffer(e.FRAMEBUFFER, y.__webglFramebuffer[Y]), y.__webglDepthbuffer[Y] === void 0)
          y.__webglDepthbuffer[Y] = e.createRenderbuffer(), qe(y.__webglDepthbuffer[Y], b, !1);
        else {
          const j = b.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, ce = y.__webglDepthbuffer[Y];
          e.bindRenderbuffer(e.RENDERBUFFER, ce), e.framebufferRenderbuffer(e.FRAMEBUFFER, j, e.RENDERBUFFER, ce);
        }
    } else {
      const Y = b.texture.mipmaps;
      if (Y && Y.length > 0 ? i.bindFramebuffer(e.FRAMEBUFFER, y.__webglFramebuffer[0]) : i.bindFramebuffer(e.FRAMEBUFFER, y.__webglFramebuffer), y.__webglDepthbuffer === void 0)
        y.__webglDepthbuffer = e.createRenderbuffer(), qe(y.__webglDepthbuffer, b, !1);
      else {
        const j = b.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, ce = y.__webglDepthbuffer;
        e.bindRenderbuffer(e.RENDERBUFFER, ce), e.framebufferRenderbuffer(e.FRAMEBUFFER, j, e.RENDERBUFFER, ce);
      }
    }
    i.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function pe(b, y, D) {
    const Y = n.get(b);
    y !== void 0 && Ne(Y.__webglFramebuffer, b, b.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), D !== void 0 && le(b);
  }
  function Ee(b) {
    const y = b.texture, D = n.get(b), Y = n.get(y);
    b.addEventListener("dispose", g);
    const j = b.textures, ce = b.isWebGLCubeRenderTarget === !0, ge = j.length > 1;
    if (ge || (Y.__webglTexture === void 0 && (Y.__webglTexture = e.createTexture()), Y.__version = y.version, a.memory.textures++), ce) {
      D.__webglFramebuffer = [];
      for (let N = 0; N < 6; N++) if (y.mipmaps && y.mipmaps.length > 0) {
        D.__webglFramebuffer[N] = [];
        for (let he = 0; he < y.mipmaps.length; he++) D.__webglFramebuffer[N][he] = e.createFramebuffer();
      } else D.__webglFramebuffer[N] = e.createFramebuffer();
    } else {
      if (y.mipmaps && y.mipmaps.length > 0) {
        D.__webglFramebuffer = [];
        for (let N = 0; N < y.mipmaps.length; N++) D.__webglFramebuffer[N] = e.createFramebuffer();
      } else D.__webglFramebuffer = e.createFramebuffer();
      if (ge) for (let N = 0, he = j.length; N < he; N++) {
        const be = n.get(j[N]);
        be.__webglTexture === void 0 && (be.__webglTexture = e.createTexture(), a.memory.textures++);
      }
      if (b.samples > 0 && I(b) === !1) {
        D.__webglMultisampledFramebuffer = e.createFramebuffer(), D.__webglColorRenderbuffer = [], i.bindFramebuffer(e.FRAMEBUFFER, D.__webglMultisampledFramebuffer);
        for (let N = 0; N < j.length; N++) {
          const he = j[N];
          D.__webglColorRenderbuffer[N] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, D.__webglColorRenderbuffer[N]);
          const be = s.convert(he.format, he.colorSpace), Le = s.convert(he.type), se = v(he.internalFormat, be, Le, he.normalized, he.colorSpace, b.isXRRenderTarget === !0), Ie = Ze(b);
          e.renderbufferStorageMultisample(e.RENDERBUFFER, Ie, se, b.width, b.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + N, e.RENDERBUFFER, D.__webglColorRenderbuffer[N]);
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null), b.depthBuffer && (D.__webglDepthRenderbuffer = e.createRenderbuffer(), qe(D.__webglDepthRenderbuffer, b, !0)), i.bindFramebuffer(e.FRAMEBUFFER, null);
      }
    }
    if (ce) {
      i.bindTexture(e.TEXTURE_CUBE_MAP, Y.__webglTexture), J(e.TEXTURE_CUBE_MAP, y);
      for (let N = 0; N < 6; N++) if (y.mipmaps && y.mipmaps.length > 0) for (let he = 0; he < y.mipmaps.length; he++) Ne(D.__webglFramebuffer[N][he], b, y, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + N, he);
      else Ne(D.__webglFramebuffer[N], b, y, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + N, 0);
      p(y) && T(e.TEXTURE_CUBE_MAP), i.unbindTexture();
    } else if (ge) {
      for (let N = 0, he = j.length; N < he; N++) {
        const be = j[N], Le = n.get(be);
        let se = e.TEXTURE_2D;
        (b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (se = b.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), i.bindTexture(se, Le.__webglTexture), J(se, be), Ne(D.__webglFramebuffer, b, be, e.COLOR_ATTACHMENT0 + N, se, 0), p(be) && T(se);
      }
      i.unbindTexture();
    } else {
      let N = e.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (N = b.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), i.bindTexture(N, Y.__webglTexture), J(N, y), y.mipmaps && y.mipmaps.length > 0) for (let he = 0; he < y.mipmaps.length; he++) Ne(D.__webglFramebuffer[he], b, y, e.COLOR_ATTACHMENT0, N, he);
      else Ne(D.__webglFramebuffer, b, y, e.COLOR_ATTACHMENT0, N, 0);
      p(y) && T(N), i.unbindTexture();
    }
    b.depthBuffer && le(b);
  }
  function Te(b) {
    const y = b.textures;
    for (let D = 0, Y = y.length; D < Y; D++) {
      const j = y[D];
      if (p(j)) {
        const ce = S(b), ge = n.get(j).__webglTexture;
        i.bindTexture(ce, ge), T(ce), i.unbindTexture();
      }
    }
  }
  const De = [], Ue = [];
  function Xe(b) {
    if (b.samples > 0) {
      if (I(b) === !1) {
        const y = b.textures, D = b.width, Y = b.height;
        let j = e.COLOR_BUFFER_BIT;
        const ce = b.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, ge = n.get(b), N = y.length > 1;
        if (N) for (let be = 0; be < y.length; be++)
          i.bindFramebuffer(e.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + be, e.RENDERBUFFER, null), i.bindFramebuffer(e.FRAMEBUFFER, ge.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + be, e.TEXTURE_2D, null, 0);
        i.bindFramebuffer(e.READ_FRAMEBUFFER, ge.__webglMultisampledFramebuffer);
        const he = b.texture.mipmaps;
        he && he.length > 0 ? i.bindFramebuffer(e.DRAW_FRAMEBUFFER, ge.__webglFramebuffer[0]) : i.bindFramebuffer(e.DRAW_FRAMEBUFFER, ge.__webglFramebuffer);
        for (let be = 0; be < y.length; be++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && (j |= e.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && (j |= e.STENCIL_BUFFER_BIT)), N) {
            e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, ge.__webglColorRenderbuffer[be]);
            const Le = n.get(y[be]).__webglTexture;
            e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, Le, 0);
          }
          e.blitFramebuffer(0, 0, D, Y, 0, 0, D, Y, j, e.NEAREST), l === !0 && (De.length = 0, Ue.length = 0, De.push(e.COLOR_ATTACHMENT0 + be), b.depthBuffer && b.resolveDepthBuffer === !1 && (De.push(ce), Ue.push(ce), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, Ue)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, De));
        }
        if (i.bindFramebuffer(e.READ_FRAMEBUFFER, null), i.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), N) for (let be = 0; be < y.length; be++) {
          i.bindFramebuffer(e.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + be, e.RENDERBUFFER, ge.__webglColorRenderbuffer[be]);
          const Le = n.get(y[be]).__webglTexture;
          i.bindFramebuffer(e.FRAMEBUFFER, ge.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + be, e.TEXTURE_2D, Le, 0);
        }
        i.bindFramebuffer(e.DRAW_FRAMEBUFFER, ge.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && l) {
        const y = b.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [y]);
      }
    }
  }
  function Ze(b) {
    return Math.min(r.maxSamples, b.samples);
  }
  function I(b) {
    const y = n.get(b);
    return b.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && y.__useRenderToTexture !== !1;
  }
  function mt(b) {
    const y = a.render.frame;
    h.get(b) !== y && (h.set(b, y), b.update());
  }
  function it(b, y) {
    const D = b.colorSpace, Y = b.format, j = b.type;
    return b.isCompressedTexture === !0 || b.isVideoTexture === !0 || D !== "srgb-linear" && D !== "" && (ot.getTransfer(D) === "srgb" ? (Y !== 1023 || j !== 1009) && Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : ke("WebGLTextures: Unsupported texture color space:", D)), y;
  }
  function et(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (c.width = b.naturalWidth || b.width, c.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (c.width = b.displayWidth, c.height = b.displayHeight) : (c.width = b.width, c.height = b.height), c;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = Z, this.getTextureUnits = G, this.setTextureUnits = X, this.setTexture2D = ae, this.setTexture2DArray = ie, this.setTexture3D = oe, this.setTextureCube = de, this.rebindTextures = pe, this.setupRenderTarget = Ee, this.updateRenderTargetMipmap = Te, this.updateMultisampleRenderTarget = Xe, this.setupDepthRenderbuffer = le, this.setupFrameBufferTexture = Ne, this.useMultisampledRTT = I, this.isReversedDepthBuffer = function() {
    return i.buffers.depth.getReversed();
  };
}
function Op(e, t) {
  function i(n, r = "") {
    let s;
    const a = ot.getTransfer(r);
    if (n === 1009) return e.UNSIGNED_BYTE;
    if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return e.BYTE;
    if (n === 1011) return e.SHORT;
    if (n === 1012) return e.UNSIGNED_SHORT;
    if (n === 1013) return e.INT;
    if (n === 1014) return e.UNSIGNED_INT;
    if (n === 1015) return e.FLOAT;
    if (n === 1016) return e.HALF_FLOAT;
    if (n === 1021) return e.ALPHA;
    if (n === 1022) return e.RGB;
    if (n === 1023) return e.RGBA;
    if (n === 1026) return e.DEPTH_COMPONENT;
    if (n === 1027) return e.DEPTH_STENCIL;
    if (n === 1028) return e.RED;
    if (n === 1029) return e.RED_INTEGER;
    if (n === 1030) return e.RG;
    if (n === 1031) return e.RG_INTEGER;
    if (n === 1033) return e.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779) if (a === "srgb")
      if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
        if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else return null;
    else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === 36196 || n === 37492) return a === "srgb" ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return s.COMPRESSED_R11_EAC;
        if (n === 37489) return s.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return s.COMPRESSED_RG11_EAC;
        if (n === 37491) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return a === "srgb" ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === 36283) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] !== void 0 ? e[n] : null;
  }
  return { convert: i };
}
var Fp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Bp = `
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

}`, zp = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const i = new Nl(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, i = new si({
        vertexShader: Fp,
        fragmentShader: Bp,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new St(new _s(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}, Vp = class extends ki {
  constructor(e, t) {
    super();
    const i = this;
    let n = null, r = 1, s = null, a = "local-floor", o = 1, l = null, c = null, h = null, d = null, u = null, f = null;
    const _ = typeof XRWebGLBinding < "u", M = new zp(), m = {}, p = t.getContextAttributes();
    let T = null, S = null;
    const v = [], A = [], w = new ee();
    let C = null;
    const g = new kt();
    g.viewport = new Et();
    const E = new kt();
    E.viewport = new Et();
    const F = [g, E], R = new gd();
    let V = null, Z = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(J) {
      let ue = v[J];
      return ue === void 0 && (ue = new Ps(), v[J] = ue), ue.getTargetRaySpace();
    }, this.getControllerGrip = function(J) {
      let ue = v[J];
      return ue === void 0 && (ue = new Ps(), v[J] = ue), ue.getGripSpace();
    }, this.getHand = function(J) {
      let ue = v[J];
      return ue === void 0 && (ue = new Ps(), v[J] = ue), ue.getHandSpace();
    };
    function G(J) {
      const ue = A.indexOf(J.inputSource);
      if (ue === -1) return;
      const Me = v[ue];
      Me !== void 0 && (Me.update(J.inputSource, J.frame, l || s), Me.dispatchEvent({
        type: J.type,
        data: J.inputSource
      }));
    }
    function X() {
      n.removeEventListener("select", G), n.removeEventListener("selectstart", G), n.removeEventListener("selectend", G), n.removeEventListener("squeeze", G), n.removeEventListener("squeezestart", G), n.removeEventListener("squeezeend", G), n.removeEventListener("end", X), n.removeEventListener("inputsourceschange", H);
      for (let J = 0; J < v.length; J++) {
        const ue = A[J];
        ue !== null && (A[J] = null, v[J].disconnect(ue));
      }
      V = null, Z = null, M.reset();
      for (const J in m) delete m[J];
      e.setRenderTarget(T), u = null, d = null, h = null, n = null, S = null, We.stop(), i.isPresenting = !1, e.setPixelRatio(C), e.setSize(w.width, w.height, !1), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(J) {
      r = J, i.isPresenting === !0 && Ge("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(J) {
      a = J, i.isPresenting === !0 && Ge("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || s;
    }, this.setReferenceSpace = function(J) {
      l = J;
    }, this.getBaseLayer = function() {
      return d !== null ? d : u;
    }, this.getBinding = function() {
      return h === null && _ && (h = new XRWebGLBinding(n, t)), h;
    }, this.getFrame = function() {
      return f;
    }, this.getSession = function() {
      return n;
    }, this.setSession = async function(J) {
      if (n = J, n !== null) {
        if (T = e.getRenderTarget(), n.addEventListener("select", G), n.addEventListener("selectstart", G), n.addEventListener("selectend", G), n.addEventListener("squeeze", G), n.addEventListener("squeezestart", G), n.addEventListener("squeezeend", G), n.addEventListener("end", X), n.addEventListener("inputsourceschange", H), p.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(w), _ && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ue = null, Me = null, me = null;
          p.depth && (me = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ue = p.stencil ? hl : pr, Me = p.stencil ? cl : ji);
          const Oe = {
            colorFormat: t.RGBA8,
            depthFormat: me,
            scaleFactor: r
          };
          h = this.getBinding(), d = h.createProjectionLayer(Oe), n.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), S = new _i(d.textureWidth, d.textureHeight, {
            format: fr,
            type: Hi,
            depthTexture: new Hn(d.textureWidth, d.textureHeight, Me, void 0, void 0, void 0, void 0, void 0, void 0, ue),
            stencilBuffer: p.stencil,
            colorSpace: e.outputColorSpace,
            samples: p.antialias ? 4 : 0,
            resolveDepthBuffer: d.ignoreDepthValues === !1,
            resolveStencilBuffer: d.ignoreDepthValues === !1
          });
        } else {
          const ue = {
            antialias: p.antialias,
            alpha: !0,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: r
          };
          u = new XRWebGLLayer(n, t, ue), n.updateRenderState({ baseLayer: u }), e.setPixelRatio(1), e.setSize(u.framebufferWidth, u.framebufferHeight, !1), S = new _i(u.framebufferWidth, u.framebufferHeight, {
            format: fr,
            type: Hi,
            colorSpace: e.outputColorSpace,
            stencilBuffer: p.stencil,
            resolveDepthBuffer: u.ignoreDepthValues === !1,
            resolveStencilBuffer: u.ignoreDepthValues === !1
          });
        }
        S.isXRRenderTarget = !0, this.setFoveation(o), l = null, s = await n.requestReferenceSpace(a), We.setContext(n), We.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (n !== null) return n.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return M.getDepthTexture();
    };
    function H(J) {
      for (let ue = 0; ue < J.removed.length; ue++) {
        const Me = J.removed[ue], me = A.indexOf(Me);
        me >= 0 && (A[me] = null, v[me].disconnect(Me));
      }
      for (let ue = 0; ue < J.added.length; ue++) {
        const Me = J.added[ue];
        let me = A.indexOf(Me);
        if (me === -1) {
          for (let ze = 0; ze < v.length; ze++) if (ze >= A.length) {
            A.push(Me), me = ze;
            break;
          } else if (A[ze] === null) {
            A[ze] = Me, me = ze;
            break;
          }
          if (me === -1) break;
        }
        const Oe = v[me];
        Oe && Oe.connect(Me);
      }
    }
    const B = new P(), ae = new P();
    function ie(J, ue, Me) {
      B.setFromMatrixPosition(ue.matrixWorld), ae.setFromMatrixPosition(Me.matrixWorld);
      const me = B.distanceTo(ae), Oe = ue.projectionMatrix.elements, ze = Me.projectionMatrix.elements, Ne = Oe[14] / (Oe[10] - 1), qe = Oe[14] / (Oe[10] + 1), Q = (Oe[9] + 1) / Oe[5], le = (Oe[9] - 1) / Oe[5], pe = (Oe[8] - 1) / Oe[0], Ee = (ze[8] + 1) / ze[0], Te = Ne * pe, De = Ne * Ee, Ue = me / (-pe + Ee), Xe = Ue * -pe;
      if (ue.matrixWorld.decompose(J.position, J.quaternion, J.scale), J.translateX(Xe), J.translateZ(Ue), J.matrixWorld.compose(J.position, J.quaternion, J.scale), J.matrixWorldInverse.copy(J.matrixWorld).invert(), Oe[10] === -1)
        J.projectionMatrix.copy(ue.projectionMatrix), J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);
      else {
        const Ze = Ne + Ue, I = qe + Ue, mt = Te - Xe, it = De + (me - Xe), et = Q * qe / I * Ze, b = le * qe / I * Ze;
        J.projectionMatrix.makePerspective(mt, it, et, b, Ze, I), J.projectionMatrixInverse.copy(J.projectionMatrix).invert();
      }
    }
    function oe(J, ue) {
      ue === null ? J.matrixWorld.copy(J.matrix) : J.matrixWorld.multiplyMatrices(ue.matrixWorld, J.matrix), J.matrixWorldInverse.copy(J.matrixWorld).invert();
    }
    this.updateCamera = function(J) {
      if (n === null) return;
      let ue = J.near, Me = J.far;
      M.texture !== null && (M.depthNear > 0 && (ue = M.depthNear), M.depthFar > 0 && (Me = M.depthFar)), R.near = E.near = g.near = ue, R.far = E.far = g.far = Me, (V !== R.near || Z !== R.far) && (n.updateRenderState({
        depthNear: R.near,
        depthFar: R.far
      }), V = R.near, Z = R.far), R.layers.mask = J.layers.mask | 6, g.layers.mask = R.layers.mask & -5, E.layers.mask = R.layers.mask & -3;
      const me = J.parent, Oe = R.cameras;
      oe(R, me);
      for (let ze = 0; ze < Oe.length; ze++) oe(Oe[ze], me);
      Oe.length === 2 ? ie(R, g, E) : R.projectionMatrix.copy(g.projectionMatrix), de(J, R, me);
    };
    function de(J, ue, Me) {
      Me === null ? J.matrix.copy(ue.matrixWorld) : (J.matrix.copy(Me.matrixWorld), J.matrix.invert(), J.matrix.multiply(ue.matrixWorld)), J.matrix.decompose(J.position, J.quaternion, J.scale), J.updateMatrixWorld(!0), J.projectionMatrix.copy(ue.projectionMatrix), J.projectionMatrixInverse.copy(ue.projectionMatrixInverse), J.isPerspectiveCamera && (J.fov = Gn * 2 * Math.atan(1 / J.projectionMatrix.elements[5]), J.zoom = 1);
    }
    this.getCamera = function() {
      return R;
    }, this.getFoveation = function() {
      if (!(d === null && u === null))
        return o;
    }, this.setFoveation = function(J) {
      o = J, d !== null && (d.fixedFoveation = J), u !== null && u.fixedFoveation !== void 0 && (u.fixedFoveation = J);
    }, this.hasDepthSensing = function() {
      return M.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return M.getMesh(R);
    }, this.getCameraTexture = function(J) {
      return m[J];
    };
    let Re = null;
    function rt(J, ue) {
      if (c = ue.getViewerPose(l || s), f = ue, c !== null) {
        const Me = c.views;
        u !== null && (e.setRenderTargetFramebuffer(S, u.framebuffer), e.setRenderTarget(S));
        let me = !1;
        Me.length !== R.cameras.length && (R.cameras.length = 0, me = !0);
        for (let ze = 0; ze < Me.length; ze++) {
          const Ne = Me[ze];
          let qe = null;
          if (u !== null) qe = u.getViewport(Ne);
          else {
            const le = h.getViewSubImage(d, Ne);
            qe = le.viewport, ze === 0 && (e.setRenderTargetTextures(S, le.colorTexture, le.depthStencilTexture), e.setRenderTarget(S));
          }
          let Q = F[ze];
          Q === void 0 && (Q = new kt(), Q.layers.enable(ze), Q.viewport = new Et(), F[ze] = Q), Q.matrix.fromArray(Ne.transform.matrix), Q.matrix.decompose(Q.position, Q.quaternion, Q.scale), Q.projectionMatrix.fromArray(Ne.projectionMatrix), Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(), Q.viewport.set(qe.x, qe.y, qe.width, qe.height), ze === 0 && (R.matrix.copy(Q.matrix), R.matrix.decompose(R.position, R.quaternion, R.scale)), me === !0 && R.cameras.push(Q);
        }
        const Oe = n.enabledFeatures;
        if (Oe && Oe.includes("depth-sensing") && n.depthUsage == "gpu-optimized" && _) {
          h = i.getBinding();
          const ze = h.getDepthInformation(Me[0]);
          ze && ze.isValid && ze.texture && M.init(ze, n.renderState);
        }
        if (Oe && Oe.includes("camera-access") && _) {
          e.state.unbindTexture(), h = i.getBinding();
          for (let ze = 0; ze < Me.length; ze++) {
            const Ne = Me[ze].camera;
            if (Ne) {
              let qe = m[Ne];
              qe || (qe = new Nl(), m[Ne] = qe);
              const Q = h.getCameraImage(Ne);
              qe.sourceTexture = Q;
            }
          }
        }
      }
      for (let Me = 0; Me < v.length; Me++) {
        const me = A[Me], Oe = v[Me];
        me !== null && Oe !== void 0 && Oe.update(me, ue, l || s);
      }
      Re && Re(J, ue), ue.detectedPlanes && i.dispatchEvent({
        type: "planesdetected",
        data: ue
      }), f = null;
    }
    const We = new hc();
    We.setAnimationLoop(rt), this.setAnimationLoop = function(J) {
      Re = J;
    }, this.dispose = function() {
    };
  }
}, Gp = /* @__PURE__ */ new dt(), vc = /* @__PURE__ */ new Qe();
vc.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Hp(e, t) {
  function i(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, sc(e)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function r(m, p, T, S, v) {
    p.isNodeMaterial ? p.uniformsNeedUpdate = !1 : p.isMeshBasicMaterial ? s(m, p) : p.isMeshLambertMaterial ? (s(m, p), p.envMap && (m.envMapIntensity.value = p.envMapIntensity)) : p.isMeshToonMaterial ? (s(m, p), d(m, p)) : p.isMeshPhongMaterial ? (s(m, p), h(m, p), p.envMap && (m.envMapIntensity.value = p.envMapIntensity)) : p.isMeshStandardMaterial ? (s(m, p), u(m, p), p.isMeshPhysicalMaterial && f(m, p, v)) : p.isMeshMatcapMaterial ? (s(m, p), _(m, p)) : p.isMeshDepthMaterial ? s(m, p) : p.isMeshDistanceMaterial ? (s(m, p), M(m, p)) : p.isMeshNormalMaterial ? s(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? l(m, p, T, S) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, i(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, i(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, i(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === 1 && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, i(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === 1 && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, i(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, i(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, i(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const T = t.get(p), S = T.envMap, v = T.envMapRotation;
    S && (m.envMap.value = S, m.envMapRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(v)).transpose(), S.isCubeTexture && S.isRenderTargetTexture === !1 && m.envMapRotation.value.premultiply(vc), m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, i(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, i(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, i(p.map, m.mapTransform));
  }
  function o(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function l(m, p, T, S) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * T, m.scale.value = S * 0.5, p.map && (m.map.value = p.map, i(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, i(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function c(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, i(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, i(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function d(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function u(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, i(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, i(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function f(m, p, T) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, i(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, i(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, i(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, i(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, i(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === 1 && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, i(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, i(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, i(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, i(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, i(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, i(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, i(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function M(m, p) {
    const T = t.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(T.matrixWorld), m.nearDistance.value = T.shadow.camera.near, m.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function kp(e, t, i, n) {
  let r = {}, s = {}, a = [];
  const o = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(v, A) {
    const w = A.program;
    n.uniformBlockBinding(v, w);
  }
  function c(v, A) {
    let w = r[v.id];
    w === void 0 && (m(v), w = h(v), r[v.id] = w, v.addEventListener("dispose", T));
    const C = A.program;
    n.updateUBOMapping(v, C);
    const g = t.render.frame;
    s[v.id] !== g && (u(v), s[v.id] = g);
  }
  function h(v) {
    const A = d();
    v.__bindingPointIndex = A;
    const w = e.createBuffer(), C = v.__size, g = v.usage;
    return e.bindBuffer(e.UNIFORM_BUFFER, w), e.bufferData(e.UNIFORM_BUFFER, C, g), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, A, w), w;
  }
  function d() {
    for (let v = 0; v < o; v++) if (a.indexOf(v) === -1)
      return a.push(v), v;
    return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(v) {
    const A = r[v.id], w = v.uniforms, C = v.__cache;
    e.bindBuffer(e.UNIFORM_BUFFER, A);
    for (let g = 0, E = w.length; g < E; g++) {
      const F = w[g];
      if (Array.isArray(F)) for (let R = 0, V = F.length; R < V; R++) f(F[R], g, R, C);
      else f(F, g, 0, C);
    }
    e.bindBuffer(e.UNIFORM_BUFFER, null);
  }
  function f(v, A, w, C) {
    if (M(v, A, w, C) === !0) {
      const g = v.__offset, E = v.value;
      if (Array.isArray(E)) {
        let F = 0;
        for (let R = 0; R < E.length; R++) {
          const V = E[R], Z = p(V);
          _(V, v.__data, F), typeof V != "number" && typeof V != "boolean" && !V.isMatrix3 && !ArrayBuffer.isView(V) && (F += Z.storage / Float32Array.BYTES_PER_ELEMENT);
        }
      } else _(E, v.__data, 0);
      e.bufferSubData(e.UNIFORM_BUFFER, g, v.__data);
    }
  }
  function _(v, A, w) {
    typeof v == "number" || typeof v == "boolean" ? A[0] = v : v.isMatrix3 ? (A[0] = v.elements[0], A[1] = v.elements[1], A[2] = v.elements[2], A[3] = 0, A[4] = v.elements[3], A[5] = v.elements[4], A[6] = v.elements[5], A[7] = 0, A[8] = v.elements[6], A[9] = v.elements[7], A[10] = v.elements[8], A[11] = 0) : ArrayBuffer.isView(v) ? A.set(new v.constructor(v.buffer, v.byteOffset, A.length)) : v.toArray(A, w);
  }
  function M(v, A, w, C) {
    const g = v.value, E = A + "_" + w;
    if (C[E] === void 0)
      return typeof g == "number" || typeof g == "boolean" ? C[E] = g : ArrayBuffer.isView(g) ? C[E] = g.slice() : C[E] = g.clone(), !0;
    {
      const F = C[E];
      if (typeof g == "number" || typeof g == "boolean") {
        if (F !== g)
          return C[E] = g, !0;
      } else {
        if (ArrayBuffer.isView(g)) return !0;
        if (F.equals(g) === !1)
          return F.copy(g), !0;
      }
    }
    return !1;
  }
  function m(v) {
    const A = v.uniforms;
    let w = 0;
    const C = 16;
    for (let E = 0, F = A.length; E < F; E++) {
      const R = Array.isArray(A[E]) ? A[E] : [A[E]];
      for (let V = 0, Z = R.length; V < Z; V++) {
        const G = R[V], X = Array.isArray(G.value) ? G.value : [G.value];
        for (let H = 0, B = X.length; H < B; H++) {
          const ae = X[H], ie = p(ae), oe = w % C, de = oe % ie.boundary, Re = oe + de;
          w += de, Re !== 0 && C - Re < ie.storage && (w += C - Re), G.__data = new Float32Array(ie.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = w, w += ie.storage;
        }
      }
    }
    const g = w % C;
    return g > 0 && (w += C - g), v.__size = w, v.__cache = {}, this;
  }
  function p(v) {
    const A = {
      boundary: 0,
      storage: 0
    };
    return typeof v == "number" || typeof v == "boolean" ? (A.boundary = 4, A.storage = 4) : v.isVector2 ? (A.boundary = 8, A.storage = 8) : v.isVector3 || v.isColor ? (A.boundary = 16, A.storage = 12) : v.isVector4 ? (A.boundary = 16, A.storage = 16) : v.isMatrix3 ? (A.boundary = 48, A.storage = 48) : v.isMatrix4 ? (A.boundary = 64, A.storage = 64) : v.isTexture ? Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(v) ? (A.boundary = 16, A.storage = v.byteLength) : Ge("WebGLRenderer: Unsupported uniform value type.", v), A;
  }
  function T(v) {
    const A = v.target;
    A.removeEventListener("dispose", T);
    const w = a.indexOf(A.__bindingPointIndex);
    a.splice(w, 1), e.deleteBuffer(r[A.id]), delete r[A.id], delete s[A.id];
  }
  function S() {
    for (const v in r) e.deleteBuffer(r[v]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: S
  };
}
var Wp = new Uint16Array([
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
]), mi = null;
function Xp() {
  return mi === null && (mi = new Ll(Wp, 16, 16, hs, en), mi.name = "DFG_LUT", mi.minFilter = Jt, mi.magFilter = Jt, mi.wrapS = Ai, mi.wrapT = Ai, mi.generateMipmaps = !1, mi.needsUpdate = !0), mi;
}
var Yp = class {
  constructor(e = {}) {
    const { canvas: t = gh(), context: i = null, depth: n = !0, stencil: r = !1, alpha: s = !1, antialias: a = !1, premultipliedAlpha: o = !0, preserveDrawingBuffer: l = !1, powerPreference: c = "default", failIfMajorPerformanceCaveat: h = !1, reversedDepthBuffer: d = !1, outputBufferType: u = Hi } = e;
    this.isWebGLRenderer = !0;
    let f;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = i.getContextAttributes().alpha;
    } else f = s;
    const _ = u, M = /* @__PURE__ */ new Set([
      pl,
      fl,
      dl
    ]), m = /* @__PURE__ */ new Set([
      Hi,
      ji,
      al,
      cl,
      ol,
      ll
    ]), p = new Uint32Array(4), T = new Int32Array(4), S = new P();
    let v = null, A = null;
    const w = [], C = [];
    let g = null;
    this.domElement = t, this.debug = {
      checkShaderErrors: !0,
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const E = this;
    let F = !1, R = null, V = null, Z = null, G = null;
    this._outputColorSpace = Kt;
    let X = 0, H = 0, B = null, ae = -1, ie = null;
    const oe = new Et(), de = new Et();
    let Re = null;
    const rt = new $e(0);
    let We = 0, J = t.width, ue = t.height, Me = 1, me = null, Oe = null;
    const ze = new Et(0, 0, J, ue), Ne = new Et(0, 0, J, ue);
    let qe = !1;
    const Q = new ba();
    let le = !1, pe = !1;
    const Ee = new dt(), Te = new P(), De = new Et(), Ue = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };
    let Xe = !1;
    function Ze() {
      return B === null ? Me : 1;
    }
    let I = i;
    function mt(x, O) {
      return t.getContext(x, O);
    }
    try {
      const x = {
        alpha: !0,
        depth: n,
        stencil: r,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: l,
        powerPreference: c,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r185"), t.addEventListener("webglcontextlost", Ve, !1), t.addEventListener("webglcontextrestored", wt, !1), t.addEventListener("webglcontextcreationerror", ct, !1), I === null) {
        const O = "webgl2";
        if (I = mt(O, x), I === null) throw mt(O) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
    } catch (x) {
      throw ke("WebGLRenderer: " + x.message), x;
    }
    let it, et, b, y, D, Y, j, ce, ge, N, he, be, Le, se, Ie, Fe, Ye, nt, U, $, ne, we, Ae;
    function te() {
      it = new Wd(I), it.init(), ne = new Op(I, it), et = new Od(I, it, e, ne), b = new Np(I, it), et.reversedDepthBuffer && d && b.buffers.depth.setReversed(!0), V = I.createFramebuffer(), Z = I.createFramebuffer(), G = I.createFramebuffer(), y = new qd(I), D = new yp(), Y = new Up(I, it, b, D, et, ne, y), j = new kd(E), ce = new Ld(I), we = new Nd(I, ce), ge = new Xd(I, ce, y, we), N = new Kd(I, ge, ce, we, y), nt = new Zd(I, et, Y), Ie = new Fd(D), he = new Mp(E, j, it, et, we, Ie), be = new Hp(E, D), Le = new Sp(), se = new Rp(it), Ye = new Dd(E, j, b, N, f, o), Fe = new Dp(E, N, et), Ae = new kp(I, y, et, b), U = new Ud(I, it, y), $ = new Yd(I, it, y), y.programs = he.programs, E.capabilities = et, E.extensions = it, E.properties = D, E.renderLists = Le, E.shadowMap = Fe, E.state = b, E.info = y;
    }
    te(), _ !== 1009 && (g = new $d(_, t.width, t.height, a, n, r));
    const ye = new Vp(E, I);
    this.xr = ye, this.getContext = function() {
      return I;
    }, this.getContextAttributes = function() {
      return I.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = it.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = it.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return Me;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (Me = x, this.setSize(J, ue, !1));
    }, this.getSize = function(x) {
      return x.set(J, ue);
    }, this.setSize = function(x, O, q = !0) {
      if (ye.isPresenting) {
        Ge("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      J = x, ue = O, t.width = Math.floor(x * Me), t.height = Math.floor(O * Me), q === !0 && (t.style.width = x + "px", t.style.height = O + "px"), g !== null && g.setSize(t.width, t.height), this.setViewport(0, 0, x, O);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(J * Me, ue * Me).floor();
    }, this.setDrawingBufferSize = function(x, O, q) {
      J = x, ue = O, Me = q, t.width = Math.floor(x * q), t.height = Math.floor(O * q), this.setViewport(0, 0, x, O);
    }, this.setEffects = function(x) {
      if (_ === 1009) {
        ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (x) {
        for (let O = 0; O < x.length; O++) if (x[O].isOutputPass === !0) {
          Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      g.setEffects(x || []);
    }, this.getCurrentViewport = function(x) {
      return x.copy(oe);
    }, this.getViewport = function(x) {
      return x.copy(ze);
    }, this.setViewport = function(x, O, q, k) {
      x.isVector4 ? ze.set(x.x, x.y, x.z, x.w) : ze.set(x, O, q, k), b.viewport(oe.copy(ze).multiplyScalar(Me).round());
    }, this.getScissor = function(x) {
      return x.copy(Ne);
    }, this.setScissor = function(x, O, q, k) {
      x.isVector4 ? Ne.set(x.x, x.y, x.z, x.w) : Ne.set(x, O, q, k), b.scissor(de.copy(Ne).multiplyScalar(Me).round());
    }, this.getScissorTest = function() {
      return qe;
    }, this.setScissorTest = function(x) {
      b.setScissorTest(qe = x);
    }, this.setOpaqueSort = function(x) {
      me = x;
    }, this.setTransparentSort = function(x) {
      Oe = x;
    }, this.getClearColor = function(x) {
      return x.copy(Ye.getClearColor());
    }, this.setClearColor = function() {
      Ye.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Ye.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ye.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, O = !0, q = !0) {
      let k = 0;
      if (x) {
        let z = !1;
        if (B !== null) {
          const fe = B.texture.format;
          z = M.has(fe);
        }
        if (z) {
          const fe = B.texture.type, ve = m.has(fe), Ce = Ye.getClearColor(), Pe = Ye.getClearAlpha(), He = Ce.r, Ke = Ce.g, Je = Ce.b;
          ve ? (p[0] = He, p[1] = Ke, p[2] = Je, p[3] = Pe, I.clearBufferuiv(I.COLOR, 0, p)) : (T[0] = He, T[1] = Ke, T[2] = Je, T[3] = Pe, I.clearBufferiv(I.COLOR, 0, T));
        } else k |= I.COLOR_BUFFER_BIT;
      }
      O && (k |= I.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), q && (k |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), k !== 0 && I.clear(k);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(x) {
      x.setRenderer(this), R = x;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Ve, !1), t.removeEventListener("webglcontextrestored", wt, !1), t.removeEventListener("webglcontextcreationerror", ct, !1), Ye.dispose(), Le.dispose(), se.dispose(), D.dispose(), j.dispose(), N.dispose(), we.dispose(), Ae.dispose(), he.dispose(), ye.dispose(), ye.removeEventListener("sessionstart", an), ye.removeEventListener("sessionend", Tr), di.stop();
    };
    function Ve(x) {
      x.preventDefault(), ps("WebGLRenderer: Context Lost."), F = !0;
    }
    function wt() {
      ps("WebGLRenderer: Context Restored."), F = !1;
      const x = y.autoReset, O = Fe.enabled, q = Fe.autoUpdate, k = Fe.needsUpdate, z = Fe.type;
      te(), y.autoReset = x, Fe.enabled = O, Fe.autoUpdate = q, Fe.needsUpdate = k, Fe.type = z;
    }
    function ct(x) {
      ke("WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Wt(x) {
      const O = x.target;
      O.removeEventListener("dispose", Wt), Xt(O);
    }
    function Xt(x) {
      jt(x), D.remove(x);
    }
    function jt(x) {
      const O = D.get(x).programs;
      O !== void 0 && (O.forEach(function(q) {
        he.releaseProgram(q);
      }), x.isShaderMaterial && he.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, O, q, k, z, fe) {
      O === null && (O = Ue);
      const ve = z.isMesh && z.matrixWorld.determinantAffine() < 0, Ce = fi(x, O, q, k, z);
      b.setMaterial(k, ve);
      let Pe = q.index, He = 1;
      if (k.wireframe === !0) {
        if (Pe = ge.getWireframeAttribute(q), Pe === void 0) return;
        He = 2;
      }
      const Ke = q.drawRange, Je = q.attributes.position;
      let Be = Ke.start * He, ht = (Ke.start + Ke.count) * He;
      fe !== null && (Be = Math.max(Be, fe.start * He), ht = Math.min(ht, (fe.start + fe.count) * He)), Pe !== null ? (Be = Math.max(Be, 0), ht = Math.min(ht, Pe.count)) : Je != null && (Be = Math.max(Be, 0), ht = Math.min(ht, Je.count));
      const gt = ht - Be;
      if (gt < 0 || gt === 1 / 0) return;
      we.setup(z, k, Ce, q, Pe);
      let L, W = U;
      if (Pe !== null && (L = ce.get(Pe), W = $, W.setIndex(L)), z.isMesh) k.wireframe === !0 ? (b.setLineWidth(k.wireframeLinewidth * Ze()), W.setMode(I.LINES)) : W.setMode(I.TRIANGLES);
      else if (z.isLine) {
        let re = k.linewidth;
        re === void 0 && (re = 1), b.setLineWidth(re * Ze()), z.isLineSegments ? W.setMode(I.LINES) : z.isLineLoop ? W.setMode(I.LINE_LOOP) : W.setMode(I.LINE_STRIP);
      } else z.isPoints ? W.setMode(I.POINTS) : z.isSprite && W.setMode(I.TRIANGLES);
      if (z.isBatchedMesh) if (it.get("WEBGL_multi_draw"))
        W.renderMultiDraw(z._multiDrawStarts, z._multiDrawCounts, z._multiDrawCount);
      else {
        const re = z._multiDrawStarts, K = z._multiDrawCounts, Se = z._multiDrawCount, _e = Pe ? ce.get(Pe).bytesPerElement : 1, st = D.get(k).currentProgram.getUniforms();
        for (let yt = 0; yt < Se; yt++)
          st.setValue(I, "_gl_DrawID", yt), W.render(re[yt] / _e, K[yt]);
      }
      else if (z.isInstancedMesh) W.renderInstances(Be, gt, z.count);
      else if (q.isInstancedBufferGeometry) {
        const re = q._maxInstanceCount !== void 0 ? q._maxInstanceCount : 1 / 0, K = Math.min(q.instanceCount, re);
        W.renderInstances(Be, gt, K);
      } else W.render(Be, gt);
    };
    function qn(x, O, q) {
      x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1 ? (x.side = 1, x.needsUpdate = !0, Gt(x, O, q), x.side = 0, x.needsUpdate = !0, Gt(x, O, q), x.side = 2) : Gt(x, O, q);
    }
    this.compile = function(x, O, q = null) {
      q === null && (q = x), A = se.get(q), A.init(O), C.push(A), q.traverseVisible(function(z) {
        z.isLight && z.layers.test(O.layers) && (A.pushLight(z), z.castShadow && A.pushShadow(z));
      }), x !== q && x.traverseVisible(function(z) {
        z.isLight && z.layers.test(O.layers) && (A.pushLight(z), z.castShadow && A.pushShadow(z));
      }), A.setupLights();
      const k = /* @__PURE__ */ new Set();
      return x.traverse(function(z) {
        if (!(z.isMesh || z.isPoints || z.isLine || z.isSprite)) return;
        const fe = z.material;
        if (fe) if (Array.isArray(fe)) for (let ve = 0; ve < fe.length; ve++) {
          const Ce = fe[ve];
          qn(Ce, q, z), k.add(Ce);
        }
        else
          qn(fe, q, z), k.add(fe);
      }), A = C.pop(), k;
    }, this.compileAsync = function(x, O, q = null) {
      const k = this.compile(x, O, q);
      return new Promise((z) => {
        function fe() {
          if (k.forEach(function(ve) {
            D.get(ve).currentProgram.isReady() && k.delete(ve);
          }), k.size === 0) {
            z(x);
            return;
          }
          setTimeout(fe, 10);
        }
        it.get("KHR_parallel_shader_compile") !== null ? fe() : setTimeout(fe, 10);
      });
    };
    let Li = null;
    function br(x) {
      Li && Li(x);
    }
    function an() {
      di.stop();
    }
    function Tr() {
      di.start();
    }
    const di = new hc();
    di.setAnimationLoop(br), typeof self < "u" && di.setContext(self), this.setAnimationLoop = function(x) {
      Li = x, ye.setAnimationLoop(x), x === null ? di.stop() : di.start();
    }, ye.addEventListener("sessionstart", an), ye.addEventListener("sessionend", Tr), this.render = function(x, O) {
      if (O !== void 0 && O.isCamera !== !0) {
        ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (F === !0) return;
      R !== null && R.renderStart(x, O);
      const q = ye.enabled === !0 && ye.isPresenting === !0, k = g !== null && (B === null || q) && g.begin(E, B);
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), O.parent === null && O.matrixWorldAutoUpdate === !0 && O.updateMatrixWorld(), ye.enabled === !0 && ye.isPresenting === !0 && (g === null || g.isCompositing() === !1) && (ye.cameraAutoUpdate === !0 && ye.updateCamera(O), O = ye.getCamera()), x.isScene === !0 && x.onBeforeRender(E, x, O, B), A = se.get(x, C.length), A.init(O), A.state.textureUnits = Y.getTextureUnits(), C.push(A), Ee.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse), Q.setFromProjectionMatrix(Ee, zn, O.reversedDepth), pe = this.localClippingEnabled, le = Ie.init(this.clippingPlanes, pe), v = Le.get(x, w.length), v.init(), w.push(v), ye.enabled === !0 && ye.isPresenting === !0) {
        const fe = E.xr.getDepthSensingMesh();
        fe !== null && on(fe, O, -1 / 0, E.sortObjects);
      }
      on(x, O, 0, E.sortObjects), v.finish(), E.sortObjects === !0 && v.sort(me, Oe, O.reversedDepth), Xe = ye.enabled === !1 || ye.isPresenting === !1 || ye.hasDepthSensing() === !1, Xe && Ye.addToRenderList(v, x), this.info.render.frame++, this.info.autoReset === !0 && this.info.reset(), le === !0 && Ie.beginShadows();
      const z = A.state.shadowsArray;
      if (Fe.render(z, x, O), le === !0 && Ie.endShadows(), (k && g.hasRenderPass()) === !1) {
        const fe = v.opaque, ve = v.transmissive;
        if (A.setupLights(), O.isArrayCamera) {
          const Ce = O.cameras;
          if (ve.length > 0) for (let Pe = 0, He = Ce.length; Pe < He; Pe++) {
            const Ke = Ce[Pe];
            Xi(fe, ve, x, Ke);
          }
          Xe && Ye.render(x);
          for (let Pe = 0, He = Ce.length; Pe < He; Pe++) {
            const Ke = Ce[Pe];
            Wi(v, x, Ke, Ke.viewport);
          }
        } else
          ve.length > 0 && Xi(fe, ve, x, O), Xe && Ye.render(x), Wi(v, x, O);
      }
      B !== null && H === 0 && (Y.updateMultisampleRenderTarget(B), Y.updateRenderTargetMipmap(B)), k && g.end(E), x.isScene === !0 && x.onAfterRender(E, x, O), we.resetDefaultState(), ae = -1, ie = null, C.pop(), C.length > 0 ? (A = C[C.length - 1], Y.setTextureUnits(A.state.textureUnits), le === !0 && Ie.setGlobalState(E.clippingPlanes, A.state.camera)) : A = null, w.pop(), w.length > 0 ? v = w[w.length - 1] : v = null, R !== null && R.renderEnd();
    };
    function on(x, O, q, k) {
      if (x.visible === !1) return;
      if (x.layers.test(O.layers)) {
        if (x.isGroup) q = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(O);
        else if (x.isLightProbeGrid) A.pushLightProbeGrid(x);
        else if (x.isLight)
          A.pushLight(x), x.castShadow && A.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || Q.intersectsSprite(x)) {
            k && De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ee);
            const fe = N.update(x), ve = x.material;
            ve.visible && v.push(x, fe, ve, q, De.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || Q.intersectsObject(x))) {
          const fe = N.update(x), ve = x.material;
          if (k && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), De.copy(x.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), De.copy(fe.boundingSphere.center)), De.applyMatrix4(x.matrixWorld).applyMatrix4(Ee)), Array.isArray(ve)) {
            const Ce = fe.groups;
            for (let Pe = 0, He = Ce.length; Pe < He; Pe++) {
              const Ke = Ce[Pe], Je = ve[Ke.materialIndex];
              Je && Je.visible && v.push(x, fe, Je, q, De.z, Ke);
            }
          } else ve.visible && v.push(x, fe, ve, q, De.z, null);
        }
      }
      const z = x.children;
      for (let fe = 0, ve = z.length; fe < ve; fe++) on(z[fe], O, q, k);
    }
    function Wi(x, O, q, k) {
      const { opaque: z, transmissive: fe, transparent: ve } = x;
      A.setupLightsView(q), le === !0 && Ie.setGlobalState(E.clippingPlanes, q), k && b.viewport(oe.copy(k)), z.length > 0 && _t(z, O, q), fe.length > 0 && _t(fe, O, q), ve.length > 0 && _t(ve, O, q), b.buffers.depth.setTest(!0), b.buffers.depth.setMask(!0), b.buffers.color.setMask(!0), b.setPolygonOffset(!1);
    }
    function Xi(x, O, q, k) {
      if ((q.isScene === !0 ? q.overrideMaterial : null) !== null) return;
      if (A.state.transmissionRenderTarget[k.id] === void 0) {
        const Je = it.has("EXT_color_buffer_half_float") || it.has("EXT_color_buffer_float");
        A.state.transmissionRenderTarget[k.id] = new _i(1, 1, {
          generateMipmaps: !0,
          type: Je ? en : Hi,
          minFilter: ya,
          samples: Math.max(4, et.samples),
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: ot.workingColorSpace
        });
      }
      const z = A.state.transmissionRenderTarget[k.id], fe = k.viewport || oe;
      z.setSize(fe.z * E.transmissionResolutionScale, fe.w * E.transmissionResolutionScale);
      const ve = E.getRenderTarget(), Ce = E.getActiveCubeFace(), Pe = E.getActiveMipmapLevel();
      E.setRenderTarget(z), E.getClearColor(rt), We = E.getClearAlpha(), We < 1 && E.setClearColor(16777215, 0.5), E.clear(), Xe && Ye.render(q);
      const He = E.toneMapping;
      E.toneMapping = 0;
      const Ke = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), A.setupLightsView(k), le === !0 && Ie.setGlobalState(E.clippingPlanes, k), _t(x, q, k), Y.updateMultisampleRenderTarget(z), Y.updateRenderTargetMipmap(z), it.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Je = !1;
        for (let Be = 0, ht = O.length; Be < ht; Be++) {
          const { object: gt, geometry: L, material: W, group: re } = O[Be];
          if (W.side === 2 && gt.layers.test(k.layers)) {
            const K = W.side;
            W.side = 1, W.needsUpdate = !0, xi(gt, q, k, L, W, re), W.side = K, W.needsUpdate = !0, Je = !0;
          }
        }
        Je === !0 && (Y.updateMultisampleRenderTarget(z), Y.updateRenderTargetMipmap(z));
      }
      E.setRenderTarget(ve, Ce, Pe), E.setClearColor(rt, We), Ke !== void 0 && (k.viewport = Ke), E.toneMapping = He;
    }
    function _t(x, O, q) {
      const k = O.isScene === !0 ? O.overrideMaterial : null;
      for (let z = 0, fe = x.length; z < fe; z++) {
        const ve = x[z], { object: Ce, geometry: Pe, group: He } = ve;
        let Ke = ve.material;
        Ke.allowOverride === !0 && k !== null && (Ke = k), Ce.layers.test(q.layers) && xi(Ce, O, q, Pe, Ke, He);
      }
    }
    function xi(x, O, q, k, z, fe) {
      x.onBeforeRender(E, O, q, k, z, fe), x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), z.onBeforeRender(E, O, q, k, x, fe), z.transparent === !0 && z.side === 2 && z.forceSinglePass === !1 ? (z.side = 1, z.needsUpdate = !0, E.renderBufferDirect(q, O, k, z, x, fe), z.side = 0, z.needsUpdate = !0, E.renderBufferDirect(q, O, k, z, x, fe), z.side = 2) : E.renderBufferDirect(q, O, k, z, x, fe), x.onAfterRender(E, O, q, k, z, fe);
    }
    function Gt(x, O, q) {
      O.isScene !== !0 && (O = Ue);
      const k = D.get(x), z = A.state.lights, fe = A.state.shadowsArray, ve = z.state.version, Ce = he.getParameters(x, z.state, fe, O, q, A.state.lightProbeGridArray), Pe = he.getProgramCacheKey(Ce);
      let He = k.programs;
      k.environment = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? O.environment : null, k.fog = O.fog;
      const Ke = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap;
      k.envMap = j.get(x.envMap || k.environment, Ke), k.envMapRotation = k.environment !== null && x.envMap === null ? O.environmentRotation : x.envMapRotation, He === void 0 && (x.addEventListener("dispose", Wt), He = /* @__PURE__ */ new Map(), k.programs = He);
      let Je = He.get(Pe);
      if (Je !== void 0) {
        if (k.currentProgram === Je && k.lightsStateVersion === ve)
          return Ii(x, Ce), Je;
      } else
        Ce.uniforms = he.getUniforms(x), R !== null && x.isNodeMaterial && R.build(x, q, Ce), x.onBeforeCompile(Ce, E), Je = he.acquireProgram(Ce, Pe), He.set(Pe, Je), k.uniforms = Ce.uniforms;
      const Be = k.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Be.clippingPlanes = Ie.uniform), Ii(x, Ce), k.needsLights = Yt(x), k.lightsStateVersion = ve, k.needsLights && (Be.ambientLightColor.value = z.state.ambient, Be.lightProbe.value = z.state.probe, Be.directionalLights.value = z.state.directional, Be.directionalLightShadows.value = z.state.directionalShadow, Be.spotLights.value = z.state.spot, Be.spotLightShadows.value = z.state.spotShadow, Be.rectAreaLights.value = z.state.rectArea, Be.ltc_1.value = z.state.rectAreaLTC1, Be.ltc_2.value = z.state.rectAreaLTC2, Be.pointLights.value = z.state.point, Be.pointLightShadows.value = z.state.pointShadow, Be.hemisphereLights.value = z.state.hemi, Be.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Be.spotLightMatrix.value = z.state.spotLightMatrix, Be.spotLightMap.value = z.state.spotLightMap, Be.pointShadowMatrix.value = z.state.pointShadowMatrix), k.lightProbeGrid = A.state.lightProbeGridArray.length > 0, k.currentProgram = Je, k.uniformsList = null, Je;
    }
    function ei(x) {
      if (x.uniformsList === null) {
        const O = x.currentProgram.getUniforms();
        x.uniformsList = ls.seqWithValue(O.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function Ii(x, O) {
      const q = D.get(x);
      q.outputColorSpace = O.outputColorSpace, q.batching = O.batching, q.batchingColor = O.batchingColor, q.instancing = O.instancing, q.instancingColor = O.instancingColor, q.instancingMorph = O.instancingMorph, q.skinning = O.skinning, q.morphTargets = O.morphTargets, q.morphNormals = O.morphNormals, q.morphColors = O.morphColors, q.morphTargetsCount = O.morphTargetsCount, q.numClippingPlanes = O.numClippingPlanes, q.numIntersection = O.numClipIntersection, q.vertexAlphas = O.vertexAlphas, q.vertexTangents = O.vertexTangents, q.toneMapping = O.toneMapping;
    }
    function ti(x, O) {
      if (x.length === 0) return null;
      if (x.length === 1) return x[0].texture !== null ? x[0] : null;
      S.setFromMatrixPosition(O.matrixWorld);
      for (let q = 0, k = x.length; q < k; q++) {
        const z = x[q];
        if (z.texture !== null && z.boundingBox.containsPoint(S)) return z;
      }
      return null;
    }
    function fi(x, O, q, k, z) {
      O.isScene !== !0 && (O = Ue), Y.resetTextureUnits();
      const fe = O.fog, ve = k.isMeshStandardMaterial || k.isMeshLambertMaterial || k.isMeshPhongMaterial ? O.environment : null, Ce = B === null ? E.outputColorSpace : B.isXRRenderTarget === !0 ? B.texture.colorSpace : ot.workingColorSpace, Pe = k.isMeshStandardMaterial || k.isMeshLambertMaterial && !k.envMap || k.isMeshPhongMaterial && !k.envMap, He = j.get(k.envMap || ve, Pe), Ke = k.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4, Je = !!q.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Be = !!q.morphAttributes.position, ht = !!q.morphAttributes.normal, gt = !!q.morphAttributes.color;
      let L = 0;
      k.toneMapped && (B === null || B.isXRRenderTarget === !0) && (L = E.toneMapping);
      const W = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, re = W !== void 0 ? W.length : 0, K = D.get(k), Se = A.state.lights;
      if (le === !0 && (pe === !0 || x !== ie)) {
        const ft = x === ie && k.id === ae;
        Ie.setState(k, x, ft);
      }
      let _e = !1;
      k.version === K.__version ? (K.needsLights && K.lightsStateVersion !== Se.state.version || K.outputColorSpace !== Ce || z.isBatchedMesh && K.batching === !1 || !z.isBatchedMesh && K.batching === !0 || z.isBatchedMesh && K.batchingColor === !0 && z.colorTexture === null || z.isBatchedMesh && K.batchingColor === !1 && z.colorTexture !== null || z.isInstancedMesh && K.instancing === !1 || !z.isInstancedMesh && K.instancing === !0 || z.isSkinnedMesh && K.skinning === !1 || !z.isSkinnedMesh && K.skinning === !0 || z.isInstancedMesh && K.instancingColor === !0 && z.instanceColor === null || z.isInstancedMesh && K.instancingColor === !1 && z.instanceColor !== null || z.isInstancedMesh && K.instancingMorph === !0 && z.morphTexture === null || z.isInstancedMesh && K.instancingMorph === !1 && z.morphTexture !== null || K.envMap !== He || k.fog === !0 && K.fog !== fe || K.numClippingPlanes !== void 0 && (K.numClippingPlanes !== Ie.numPlanes || K.numIntersection !== Ie.numIntersection) || K.vertexAlphas !== Ke || K.vertexTangents !== Je || K.morphTargets !== Be || K.morphNormals !== ht || K.morphColors !== gt || K.toneMapping !== L || K.morphTargetsCount !== re || !!K.lightProbeGrid != A.state.lightProbeGridArray.length > 0) && (_e = !0) : (_e = !0, K.__version = k.version);
      let st = K.currentProgram;
      _e === !0 && (st = Gt(k, O, z), R && k.isNodeMaterial && R.onUpdateProgram(k, st, K));
      let yt = !1, Lt = !1, ii = !1;
      const at = st.getUniforms(), vt = K.uniforms;
      if (b.useProgram(st.program) && (yt = !0, Lt = !0, ii = !0), k.id !== ae && (ae = k.id, Lt = !0), K.needsLights) {
        const ft = ti(A.state.lightProbeGridArray, z);
        K.lightProbeGrid !== ft && (K.lightProbeGrid = ft, Lt = !0);
      }
      if (yt || ie !== x) {
        b.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0, x.updateProjectionMatrix()), at.setValue(I, "projectionMatrix", x.projectionMatrix), at.setValue(I, "viewMatrix", x.matrixWorldInverse);
        const ft = at.map.cameraPosition;
        ft !== void 0 && ft.setValue(I, Te.setFromMatrixPosition(x.matrixWorld)), et.logarithmicDepthBuffer && at.setValue(I, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && at.setValue(I, "isOrthographic", x.isOrthographicCamera === !0), ie !== x && (ie = x, Lt = !0, ii = !0);
      }
      if (K.needsLights && (Se.state.directionalShadowMap.length > 0 && at.setValue(I, "directionalShadowMap", Se.state.directionalShadowMap, Y), Se.state.spotShadowMap.length > 0 && at.setValue(I, "spotShadowMap", Se.state.spotShadowMap, Y), Se.state.pointShadowMap.length > 0 && at.setValue(I, "pointShadowMap", Se.state.pointShadowMap, Y)), z.isSkinnedMesh) {
        at.setOptional(I, z, "bindMatrix"), at.setOptional(I, z, "bindMatrixInverse");
        const ft = z.skeleton;
        ft && (ft.boneTexture === null && ft.computeBoneTexture(), at.setValue(I, "boneTexture", ft.boneTexture, Y));
      }
      z.isBatchedMesh && (at.setOptional(I, z, "batchingTexture"), at.setValue(I, "batchingTexture", z._matricesTexture, Y), at.setOptional(I, z, "batchingIdTexture"), at.setValue(I, "batchingIdTexture", z._indirectTexture, Y), at.setOptional(I, z, "batchingColorTexture"), z._colorsTexture !== null && at.setValue(I, "batchingColorTexture", z._colorsTexture, Y));
      const Di = q.morphAttributes;
      if ((Di.position !== void 0 || Di.normal !== void 0 || Di.color !== void 0) && nt.update(z, q, st), (Lt || K.receiveShadow !== z.receiveShadow) && (K.receiveShadow = z.receiveShadow, at.setValue(I, "receiveShadow", z.receiveShadow)), (k.isMeshStandardMaterial || k.isMeshLambertMaterial || k.isMeshPhongMaterial) && k.envMap === null && O.environment !== null && (vt.envMapIntensity.value = O.environmentIntensity), vt.dfgLUT !== void 0 && (vt.dfgLUT.value = Xp()), Lt) {
        if (at.setValue(I, "toneMappingExposure", E.toneMappingExposure), K.needsLights && ln(vt, ii), fe && k.fog === !0 && be.refreshFogUniforms(vt, fe), be.refreshMaterialUniforms(vt, k, Me, ue, A.state.transmissionRenderTarget[x.id]), K.needsLights && K.lightProbeGrid) {
          const ft = K.lightProbeGrid;
          vt.probesSH.value = ft.texture, vt.probesMin.value.copy(ft.boundingBox.min), vt.probesMax.value.copy(ft.boundingBox.max), vt.probesResolution.value.copy(ft.resolution);
        }
        ls.upload(I, ei(K), vt, Y);
      }
      if (k.isShaderMaterial && k.uniformsNeedUpdate === !0 && (ls.upload(I, ei(K), vt, Y), k.uniformsNeedUpdate = !1), k.isSpriteMaterial && at.setValue(I, "center", z.center), at.setValue(I, "modelViewMatrix", z.modelViewMatrix), at.setValue(I, "normalMatrix", z.normalMatrix), at.setValue(I, "modelMatrix", z.matrixWorld), k.uniformsGroups !== void 0) {
        const ft = k.uniformsGroups;
        for (let Zn = 0, cn = ft.length; Zn < cn; Zn++) {
          const Da = ft[Zn];
          Ae.update(Da, st), Ae.bind(Da, st);
        }
      }
      return st;
    }
    function ln(x, O) {
      x.ambientLightColor.needsUpdate = O, x.lightProbe.needsUpdate = O, x.directionalLights.needsUpdate = O, x.directionalLightShadows.needsUpdate = O, x.pointLights.needsUpdate = O, x.pointLightShadows.needsUpdate = O, x.spotLights.needsUpdate = O, x.spotLightShadows.needsUpdate = O, x.rectAreaLights.needsUpdate = O, x.hemisphereLights.needsUpdate = O;
    }
    function Yt(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return X;
    }, this.getActiveMipmapLevel = function() {
      return H;
    }, this.getRenderTarget = function() {
      return B;
    }, this.setRenderTargetTextures = function(x, O, q) {
      const k = D.get(x);
      k.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, k.__autoAllocateDepthBuffer === !1 && (k.__useRenderToTexture = !1), D.get(x.texture).__webglTexture = O, D.get(x.depthTexture).__webglTexture = k.__autoAllocateDepthBuffer ? void 0 : q, k.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, O) {
      const q = D.get(x);
      q.__webglFramebuffer = O, q.__useDefaultFramebuffer = O === void 0;
    }, this.setRenderTarget = function(x, O = 0, q = 0) {
      B = x, X = O, H = q;
      let k = null, z = !1, fe = !1;
      if (x) {
        const ve = D.get(x);
        if (ve.__useDefaultFramebuffer !== void 0) {
          b.bindFramebuffer(I.FRAMEBUFFER, ve.__webglFramebuffer), oe.copy(x.viewport), de.copy(x.scissor), Re = x.scissorTest, b.viewport(oe), b.scissor(de), b.setScissorTest(Re), ae = -1;
          return;
        } else if (ve.__webglFramebuffer === void 0) Y.setupRenderTarget(x);
        else if (ve.__hasExternalTextures) Y.rebindTextures(x, D.get(x.texture).__webglTexture, D.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const He = x.depthTexture;
          if (ve.__boundDepthTexture !== He) {
            if (He !== null && D.has(He) && (x.width !== He.image.width || x.height !== He.image.height)) throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
            Y.setupDepthRenderbuffer(x);
          }
        }
        const Ce = x.texture;
        (Ce.isData3DTexture || Ce.isDataArrayTexture || Ce.isCompressedArrayTexture) && (fe = !0);
        const Pe = D.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Pe[O]) ? k = Pe[O][q] : k = Pe[O], z = !0) : x.samples > 0 && Y.useMultisampledRTT(x) === !1 ? k = D.get(x).__webglMultisampledFramebuffer : Array.isArray(Pe) ? k = Pe[q] : k = Pe, oe.copy(x.viewport), de.copy(x.scissor), Re = x.scissorTest;
      } else
        oe.copy(ze).multiplyScalar(Me).floor(), de.copy(Ne).multiplyScalar(Me).floor(), Re = qe;
      if (q !== 0 && (k = V), b.bindFramebuffer(I.FRAMEBUFFER, k) && b.drawBuffers(x, k), b.viewport(oe), b.scissor(de), b.setScissorTest(Re), z) {
        const ve = D.get(x.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + O, ve.__webglTexture, q);
      } else if (fe) {
        const ve = O;
        for (let Ce = 0; Ce < x.textures.length; Ce++) {
          const Pe = D.get(x.textures[Ce]);
          I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0 + Ce, Pe.__webglTexture, q, ve);
        }
      } else if (x !== null && q !== 0) {
        const ve = D.get(x.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, ve.__webglTexture, q);
      }
      ae = -1;
    }, this.readRenderTargetPixels = function(x, O, q, k, z, fe, ve, Ce = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Pe = D.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ve !== void 0 && (Pe = Pe[ve]), Pe) {
        b.bindFramebuffer(I.FRAMEBUFFER, Pe);
        try {
          const He = x.textures[Ce], Ke = He.format, Je = He.type;
          if (x.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + Ce), !et.textureFormatReadable(Ke)) {
            ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!et.textureTypeReadable(Je)) {
            ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          O >= 0 && O <= x.width - k && q >= 0 && q <= x.height - z && I.readPixels(O, q, k, z, ne.convert(Ke), ne.convert(Je), fe);
        } finally {
          const He = B !== null ? D.get(B).__webglFramebuffer : null;
          b.bindFramebuffer(I.FRAMEBUFFER, He);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, O, q, k, z, fe, ve, Ce = 0) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Pe = D.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && ve !== void 0 && (Pe = Pe[ve]), Pe) if (O >= 0 && O <= x.width - k && q >= 0 && q <= x.height - z) {
        b.bindFramebuffer(I.FRAMEBUFFER, Pe);
        const He = x.textures[Ce], Ke = He.format, Je = He.type;
        if (x.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + Ce), !et.textureFormatReadable(Ke)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!et.textureTypeReadable(Je)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Be = I.createBuffer();
        I.bindBuffer(I.PIXEL_PACK_BUFFER, Be), I.bufferData(I.PIXEL_PACK_BUFFER, fe.byteLength, I.STREAM_READ), I.readPixels(O, q, k, z, ne.convert(Ke), ne.convert(Je), 0);
        const ht = B !== null ? D.get(B).__webglFramebuffer : null;
        b.bindFramebuffer(I.FRAMEBUFFER, ht);
        const gt = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return I.flush(), await vh(I, gt, 4), I.bindBuffer(I.PIXEL_PACK_BUFFER, Be), I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, fe), I.deleteBuffer(Be), I.deleteSync(gt), fe;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, O = null, q = 0) {
      const k = Math.pow(2, -q), z = Math.floor(x.image.width * k), fe = Math.floor(x.image.height * k), ve = O !== null ? O.x : 0, Ce = O !== null ? O.y : 0;
      Y.setTexture2D(x, 0), I.copyTexSubImage2D(I.TEXTURE_2D, q, 0, 0, ve, Ce, z, fe), b.unbindTexture();
    }, this.copyTextureToTexture = function(x, O, q = null, k = null, z = 0, fe = 0) {
      let ve, Ce, Pe, He, Ke, Je, Be, ht, gt;
      const L = x.isCompressedTexture ? x.mipmaps[fe] : x.image;
      if (q !== null)
        ve = q.max.x - q.min.x, Ce = q.max.y - q.min.y, Pe = q.isBox3 ? q.max.z - q.min.z : 1, He = q.min.x, Ke = q.min.y, Je = q.isBox3 ? q.min.z : 0;
      else {
        const vt = Math.pow(2, -z);
        ve = Math.floor(L.width * vt), Ce = Math.floor(L.height * vt), x.isDataArrayTexture ? Pe = L.depth : x.isData3DTexture ? Pe = Math.floor(L.depth * vt) : Pe = 1, He = 0, Ke = 0, Je = 0;
      }
      k !== null ? (Be = k.x, ht = k.y, gt = k.z) : (Be = 0, ht = 0, gt = 0);
      const W = ne.convert(O.format), re = ne.convert(O.type);
      let K;
      O.isData3DTexture ? (Y.setTexture3D(O, 0), K = I.TEXTURE_3D) : O.isDataArrayTexture || O.isCompressedArrayTexture ? (Y.setTexture2DArray(O, 0), K = I.TEXTURE_2D_ARRAY) : (Y.setTexture2D(O, 0), K = I.TEXTURE_2D), b.activeTexture(I.TEXTURE0), b.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, O.flipY), b.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), b.pixelStorei(I.UNPACK_ALIGNMENT, O.unpackAlignment);
      const Se = b.getParameter(I.UNPACK_ROW_LENGTH), _e = b.getParameter(I.UNPACK_IMAGE_HEIGHT), st = b.getParameter(I.UNPACK_SKIP_PIXELS), yt = b.getParameter(I.UNPACK_SKIP_ROWS), Lt = b.getParameter(I.UNPACK_SKIP_IMAGES);
      b.pixelStorei(I.UNPACK_ROW_LENGTH, L.width), b.pixelStorei(I.UNPACK_IMAGE_HEIGHT, L.height), b.pixelStorei(I.UNPACK_SKIP_PIXELS, He), b.pixelStorei(I.UNPACK_SKIP_ROWS, Ke), b.pixelStorei(I.UNPACK_SKIP_IMAGES, Je);
      const ii = x.isDataArrayTexture || x.isData3DTexture, at = O.isDataArrayTexture || O.isData3DTexture;
      if (x.isDepthTexture) {
        const vt = D.get(x), Di = D.get(O), ft = D.get(vt.__renderTarget), Zn = D.get(Di.__renderTarget);
        b.bindFramebuffer(I.READ_FRAMEBUFFER, ft.__webglFramebuffer), b.bindFramebuffer(I.DRAW_FRAMEBUFFER, Zn.__webglFramebuffer);
        for (let cn = 0; cn < Pe; cn++)
          ii && (I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, D.get(x).__webglTexture, z, Je + cn), I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, D.get(O).__webglTexture, fe, gt + cn)), I.blitFramebuffer(He, Ke, ve, Ce, Be, ht, ve, Ce, I.DEPTH_BUFFER_BIT, I.NEAREST);
        b.bindFramebuffer(I.READ_FRAMEBUFFER, null), b.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
      } else if (z !== 0 || x.isRenderTargetTexture || D.has(x)) {
        const vt = D.get(x), Di = D.get(O);
        b.bindFramebuffer(I.READ_FRAMEBUFFER, Z), b.bindFramebuffer(I.DRAW_FRAMEBUFFER, G);
        for (let ft = 0; ft < Pe; ft++)
          ii ? I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, vt.__webglTexture, z, Je + ft) : I.framebufferTexture2D(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, vt.__webglTexture, z), at ? I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, Di.__webglTexture, fe, gt + ft) : I.framebufferTexture2D(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, Di.__webglTexture, fe), z !== 0 ? I.blitFramebuffer(He, Ke, ve, Ce, Be, ht, ve, Ce, I.COLOR_BUFFER_BIT, I.NEAREST) : at ? I.copyTexSubImage3D(K, fe, Be, ht, gt + ft, He, Ke, ve, Ce) : I.copyTexSubImage2D(K, fe, Be, ht, He, Ke, ve, Ce);
        b.bindFramebuffer(I.READ_FRAMEBUFFER, null), b.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
      } else at ? x.isDataTexture || x.isData3DTexture ? I.texSubImage3D(K, fe, Be, ht, gt, ve, Ce, Pe, W, re, L.data) : O.isCompressedArrayTexture ? I.compressedTexSubImage3D(K, fe, Be, ht, gt, ve, Ce, Pe, W, L.data) : I.texSubImage3D(K, fe, Be, ht, gt, ve, Ce, Pe, W, re, L) : x.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, fe, Be, ht, ve, Ce, W, re, L.data) : x.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, fe, Be, ht, L.width, L.height, W, L.data) : I.texSubImage2D(I.TEXTURE_2D, fe, Be, ht, ve, Ce, W, re, L);
      b.pixelStorei(I.UNPACK_ROW_LENGTH, Se), b.pixelStorei(I.UNPACK_IMAGE_HEIGHT, _e), b.pixelStorei(I.UNPACK_SKIP_PIXELS, st), b.pixelStorei(I.UNPACK_SKIP_ROWS, yt), b.pixelStorei(I.UNPACK_SKIP_IMAGES, Lt), fe === 0 && O.generateMipmaps && I.generateMipmap(K), b.unbindTexture();
    }, this.initRenderTarget = function(x) {
      D.get(x).__webglFramebuffer === void 0 && Y.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? Y.setTextureCube(x, 0) : x.isData3DTexture ? Y.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? Y.setTexture2DArray(x, 0) : Y.setTexture2D(x, 0), b.unbindTexture();
    }, this.resetState = function() {
      X = 0, H = 0, B = null, b.reset(), we.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return zn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = ot._getDrawingBufferColorSpace(e), t.unpackColorSpace = ot._getUnpackColorSpace();
  }
}, qp = "carousel-lamp-view-v1";
function Zp() {
  try {
    const e = JSON.parse(localStorage.getItem("carousel-lamp-view-v1") ?? "null"), t = (n) => Array.isArray(n) && n.length === 3 && n.every((r) => typeof r == "number" && Number.isFinite(r) && Math.abs(r) < 100);
    if (!e || typeof e.night != "boolean" || typeof e.spinning != "boolean" || !t(e.position) || !t(e.target) || !Number.isFinite(e.angle)) return;
    const i = Math.hypot(...e.position.map((n, r) => n - e.target[r]));
    return i < 1 || i > 50 ? void 0 : e;
  } catch {
    return;
  }
}
function Kp(e) {
  localStorage.setItem(qp, JSON.stringify(e));
}
var tl = { type: "change" }, Ia = { type: "start" }, _c = { type: "end" }, ss = new yr(), il = new Vi(), Jp = Math.cos(70 * Qi.DEG2RAD), At = new P(), Ht = 2 * Math.PI, pt = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, oa = 1e-6, $p = class extends Cd {
  constructor(e, t = null) {
    super(e, t), this.state = pt.NONE, this.target = new P(), this.cursor = new P(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
      LEFT: "ArrowLeft",
      UP: "ArrowUp",
      RIGHT: "ArrowRight",
      BOTTOM: "ArrowDown"
    }, this.mouseButtons = {
      LEFT: Un.ROTATE,
      MIDDLE: Un.DOLLY,
      RIGHT: Un.PAN
    }, this.touches = {
      ONE: Nn.ROTATE,
      TWO: Nn.DOLLY_PAN
    }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new P(), this._lastQuaternion = new Ci(), this._lastTargetPosition = new P(), this._quat = new Ci().setFromUnitVectors(e.up, new P(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Lo(), this._sphericalDelta = new Lo(), this._scale = 1, this._panOffset = new P(), this._rotateStart = new ee(), this._rotateEnd = new ee(), this._rotateDelta = new ee(), this._panStart = new ee(), this._panEnd = new ee(), this._panDelta = new ee(), this._dollyStart = new ee(), this._dollyEnd = new ee(), this._dollyDelta = new ee(), this._dollyDirection = new P(), this._mouse = new ee(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = jp.bind(this), this._onPointerDown = Qp.bind(this), this._onPointerUp = em.bind(this), this._onContextMenu = om.bind(this), this._onMouseWheel = nm.bind(this), this._onKeyDown = rm.bind(this), this._onTouchStart = sm.bind(this), this._onTouchMove = am.bind(this), this._onMouseDown = tm.bind(this), this._onMouseMove = im.bind(this), this._interceptControlDown = lm.bind(this), this._interceptControlUp = cm.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  set cursorStyle(e) {
    this._cursorStyle = e, e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
  }
  get cursorStyle() {
    return this._cursorStyle;
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
      passive: !0,
      capture: !0
    }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(tl), this.update(), this.state = pt.NONE;
  }
  pan(e, t) {
    this._pan(e, t), this.update();
  }
  dollyIn(e) {
    this._dollyIn(e), this.update();
  }
  dollyOut(e) {
    this._dollyOut(e), this.update();
  }
  rotateLeft(e) {
    this._rotateLeft(e), this.update();
  }
  rotateUp(e) {
    this._rotateUp(e), this.update();
  }
  update(e = null) {
    const t = this.object.position;
    At.copy(t).sub(this.target), At.applyQuaternion(this._quat), this._spherical.setFromVector3(At), this.autoRotate && this.state === pt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let i = this.minAzimuthAngle, n = this.maxAzimuthAngle;
    isFinite(i) && isFinite(n) && (i < -Math.PI ? i += Ht : i > Math.PI && (i -= Ht), n < -Math.PI ? n += Ht : n > Math.PI && (n -= Ht), i <= n ? this._spherical.theta = Math.max(i, Math.min(n, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + n) / 2 ? Math.max(i, this._spherical.theta) : Math.min(n, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const s = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = s != this._spherical.radius;
    }
    if (At.setFromSpherical(this._spherical), At.applyQuaternion(this._quatInverse), t.copy(this.target).add(At), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let s = null;
      if (this.object.isPerspectiveCamera) {
        const a = At.length();
        s = this._clampDistance(a * this._scale);
        const o = a - s;
        this.object.position.addScaledVector(this._dollyDirection, o), this.object.updateMatrixWorld(), r = !!o;
      } else if (this.object.isOrthographicCamera) {
        const a = new P(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const o = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = o !== this.object.zoom;
        const l = new P(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(a), this.object.updateMatrixWorld(), s = At.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      s !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position) : (ss.origin.copy(this.object.position), ss.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(ss.direction)) < Jp ? this.object.lookAt(this.target) : (il.setFromNormalAndCoplanarPoint(this.object.up, this.target), ss.intersectPlane(il, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const s = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), s !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > oa || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > oa || this._lastTargetPosition.distanceToSquared(this.target) > oa ? (this.dispatchEvent(tl), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Ht / 60 * this.autoRotateSpeed * e : Ht / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    At.setFromMatrixColumn(t, 0), At.multiplyScalar(-e), this._panOffset.add(At);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? At.setFromMatrixColumn(t, 1) : (At.setFromMatrixColumn(t, 0), At.crossVectors(this.object.up, At)), At.multiplyScalar(e), this._panOffset.add(At);
  }
  _pan(e, t) {
    const i = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const n = this.object.position;
      At.copy(n).sub(this.target);
      let r = At.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / i.clientHeight, this.object.matrix), this._panUp(2 * t * r / i.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / i.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / i.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = !0;
    const i = this.domElement.getBoundingClientRect(), n = e - i.left, r = t - i.top, s = i.width, a = i.height;
    this._mouse.x = n / s * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Ht * this._rotateDelta.x / t.clientHeight), this._rotateUp(Ht * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Ht * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Ht * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Ht * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Ht * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + t.x), n = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(i, n);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + t.x), n = 0.5 * (e.pageY + t.y);
      this._panStart.set(i, n);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), i = e.pageX - t.x, n = e.pageY - t.y, r = Math.sqrt(i * i + n * n);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const i = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + i.x), r = 0.5 * (e.pageY + i.y);
      this._rotateEnd.set(n, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Ht * this._rotateDelta.x / t.clientHeight), this._rotateUp(Ht * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + t.x), n = 0.5 * (e.pageY + t.y);
      this._panEnd.set(i, n);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), i = e.pageX - t.x, n = e.pageY - t.y, r = Math.sqrt(i * i + n * n);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const s = (e.pageX + t.x) * 0.5, a = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(s, a);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
      this._pointers.splice(t, 1);
      return;
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new ee(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode, i = {
      clientX: e.clientX,
      clientY: e.clientY,
      deltaY: e.deltaY
    };
    switch (t) {
      case 1:
        i.deltaY *= 16;
        break;
      case 2:
        i.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (i.deltaY *= 10), i;
  }
};
function Qp(e) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(e) && (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function jp(e) {
  this.enabled !== !1 && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function em(e) {
  switch (this._removePointer(e), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(e.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(_c), this.state = pt.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
      break;
    case 1:
      const t = this._pointers[0], i = this._pointerPositions[t];
      this._onTouchStart({
        pointerId: t,
        pageX: i.x,
        pageY: i.y
      });
      break;
  }
}
function tm(e) {
  let t;
  switch (e.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case Un.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(e), this.state = pt.DOLLY;
      break;
    case Un.ROTATE:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(e), this.state = pt.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(e), this.state = pt.ROTATE;
      }
      break;
    case Un.PAN:
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(e), this.state = pt.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(e), this.state = pt.PAN;
      }
      break;
    default:
      this.state = pt.NONE;
  }
  this.state !== pt.NONE && this.dispatchEvent(Ia);
}
function im(e) {
  switch (this.state) {
    case pt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(e);
      break;
    case pt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(e);
      break;
    case pt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(e);
      break;
  }
}
function nm(e) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== pt.NONE || (e.preventDefault(), this.dispatchEvent(Ia), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(_c));
}
function rm(e) {
  this.enabled !== !1 && this._handleKeyDown(e);
}
function sm(e) {
  switch (this._trackPointer(e), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Nn.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(e), this.state = pt.TOUCH_ROTATE;
          break;
        case Nn.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(e), this.state = pt.TOUCH_PAN;
          break;
        default:
          this.state = pt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Nn.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(e), this.state = pt.TOUCH_DOLLY_PAN;
          break;
        case Nn.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(e), this.state = pt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = pt.NONE;
      }
      break;
    default:
      this.state = pt.NONE;
  }
  this.state !== pt.NONE && this.dispatchEvent(Ia);
}
function am(e) {
  switch (this._trackPointer(e), this.state) {
    case pt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(e), this.update();
      break;
    case pt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(e), this.update();
      break;
    case pt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(e), this.update();
      break;
    case pt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(e), this.update();
      break;
    default:
      this.state = pt.NONE;
  }
}
function om(e) {
  this.enabled !== !1 && e.preventDefault();
}
function lm(e) {
  e.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
    passive: !0,
    capture: !0
  }));
}
function cm(e) {
  e.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
    passive: !0,
    capture: !0
  }));
}
var hm = class extends bl {
  constructor() {
    super(), this.name = "RoomEnvironment", this.position.y = -3.5;
    const e = new kn();
    e.deleteAttribute("uv");
    const t = new ci({ side: 1 }), i = new ci(), n = new lc(16777215, 900, 28, 2);
    n.position.set(0.418, 16.199, 0.3), this.add(n);
    const r = new St(e, t);
    r.position.set(-0.757, 13.219, 0.717), r.scale.set(31.713, 28.305, 28.591), this.add(r);
    const s = new tu(e, i, 6), a = new Rt();
    a.position.set(-10.906, 2.009, 1.846), a.rotation.set(0, -0.195, 0), a.scale.set(2.328, 7.905, 4.651), a.updateMatrix(), s.setMatrixAt(0, a.matrix), a.position.set(-5.607, -0.754, -0.758), a.rotation.set(0, 0.994, 0), a.scale.set(1.97, 1.534, 3.955), a.updateMatrix(), s.setMatrixAt(1, a.matrix), a.position.set(6.167, 0.857, 7.803), a.rotation.set(0, 0.561, 0), a.scale.set(3.927, 6.285, 3.687), a.updateMatrix(), s.setMatrixAt(2, a.matrix), a.position.set(-2.017, 0.018, 6.124), a.rotation.set(0, 0.333, 0), a.scale.set(2.002, 4.566, 2.064), a.updateMatrix(), s.setMatrixAt(3, a.matrix), a.position.set(2.291, -0.756, -2.621), a.rotation.set(0, -0.286, 0), a.scale.set(1.546, 1.552, 1.496), a.updateMatrix(), s.setMatrixAt(4, a.matrix), a.position.set(-2.193, -0.369, -5.547), a.rotation.set(0, 0.516, 0), a.scale.set(3.875, 3.487, 2.986), a.updateMatrix(), s.setMatrixAt(5, a.matrix), this.add(s);
    const o = new St(e, Cn(50));
    o.position.set(-16.116, 14.37, 8.208), o.scale.set(0.1, 2.428, 2.739), this.add(o);
    const l = new St(e, Cn(50));
    l.position.set(-16.109, 18.021, -8.207), l.scale.set(0.1, 2.425, 2.751), this.add(l);
    const c = new St(e, Cn(17));
    c.position.set(14.904, 12.198, -1.832), c.scale.set(0.15, 4.265, 6.331), this.add(c);
    const h = new St(e, Cn(43));
    h.position.set(-0.462, 8.89, 14.52), h.scale.set(4.38, 5.441, 0.088), this.add(h);
    const d = new St(e, Cn(20));
    d.position.set(3.235, 11.486, -12.541), d.scale.set(2.5, 2, 0.1), this.add(d);
    const u = new St(e, Cn(100));
    u.position.set(0, 20, 0), u.scale.set(1, 0.1, 1), this.add(u);
  }
  dispose() {
    const e = /* @__PURE__ */ new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (const t of e) t.dispose();
  }
};
function Cn(e) {
  return new Ju({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: e
  });
}
function um() {
  let e = !1, t = 0, i = 0;
  return {
    restore(n) {
      Number.isFinite(n) && (i = n);
    },
    play(n) {
      e = n;
    },
    update(n, r, s) {
      const a = Math.max(0, Math.min(n, 0.05)), o = e && !r ? -(Math.PI * 2) / (s ? 48 : 28) : 0;
      return r && (t = 0), t += (o - t) * (1 - Math.exp(-a * 2.5)), Math.abs(t) < 1e-5 && (t = 0), i += t * a, {
        angle: i,
        heights: [
          0,
          1,
          2
        ].map((l) => 1.4 + (s ? 0.045 : 0.1) * Math.sin(i * 4 + l * Math.PI * 2 / 3)),
        speed: t
      };
    }
  };
}
var Ji = (e) => {
  const t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
  return t - Math.floor(t);
};
function dm(e, t) {
  const i = new ri();
  i.name = "night-prismatic-stars", e.add(i);
  const n = [
    "#ffbc69",
    "#73acff",
    "#f57ed3",
    "#b19aff",
    "#65e3dd"
  ], r = [];
  function s(a, o, l, c) {
    const h = [], d = [], u = [], f = [];
    for (let p = 0; p < a; p++) {
      const T = p + o * 1e3, S = Ji(T + 300) * Math.PI * 2, v = 1.8 + Ji(T + 600) * 2.15 + Math.sin(S * 3) * 0.22, A = o === 3 ? 0.55 + Ji(T + 41) * 6.2 : o === 2 ? 0.04 + Ji(T + 42) * 0.2 : 0.025, w = o === 3 ? 2.35 + Ji(T + 55) * 0.8 : v;
      h.push(Math.sin(S) * w, A, Math.cos(S) * w);
      const C = new $e(n[p % n.length]);
      d.push(C.r, C.g, C.b), u.push(Ji(T + 22) * Math.PI * 2), f.push(l + Ji(T + 90) ** 2 * (c - l));
    }
    const _ = new bt();
    _.setAttribute("position", new lt(h, 3)), _.setAttribute("color", new lt(d, 3)), _.setAttribute("phase", new lt(u, 1)), _.setAttribute("size", new lt(f, 1));
    const M = new si({
      uniforms: {
        strength: { value: 0 },
        time: { value: 0 },
        pixelRatio: { value: t },
        kind: { value: o }
      },
      transparent: !0,
      toneMapped: !1,
      depthWrite: !1,
      blending: 2,
      vertexShader: `
        attribute vec3 color; attribute float phase; attribute float size;
        uniform float time; uniform float pixelRatio; uniform float kind;
        varying vec3 tint; varying float pulse;
        void main(){
          tint=color;
          pulse=(.35+.65*pow(.5+.5*sin(time*(.35+.12*sin(phase))+phase),2.0))*(.55+.45*fract(phase));
          vec3 local=position;
          if(kind>2.5){local.x+=sin(time*.18+phase)*.07;local.y+=sin(time*.24+phase)*.08;}
          vec4 p=modelViewMatrix*vec4(local,1.0);
          gl_Position=projectionMatrix*p;
          gl_PointSize=clamp(size*pixelRatio*12.0/max(1.0,-p.z),1.0,96.0*pixelRatio);
        }`,
      fragmentShader: `
        uniform float strength; uniform float kind;
        varying vec3 tint; varying float pulse;
        void main(){
          vec2 p=(gl_PointCoord-.5)*2.0;
          float r2=dot(p,p);
          float edge=1.0-smoothstep(.72,1.0,length(p));
          float core=exp(-r2*110.0);
          float halo=exp(-r2*5.5)*.22;
          float rays=exp(-abs(p.x)*65.0-abs(p.y)*5.0)+exp(-abs(p.y)*65.0-abs(p.x)*5.0);
          float shape;
          if(kind<.5){shape=exp(-r2*8.0);}
          else if(kind>1.5 && kind<2.5){shape=exp(-r2*3.8)*.2;core=0.0;}
          else{shape=core+halo+rays*.45;}
          vec3 light=tint*1.55+vec3(1.0,.88,.74)*core*.75;
          gl_FragColor=vec4(light,clamp(shape*edge*strength*pulse,0.0,1.0));
          #include <colorspace_fragment>
        }`
    }), m = new lu(_, M);
    m.name = [
      "ground-fine-sparkles",
      "ground-luminous-glints",
      "soft-colored-bokeh",
      "airborne-glints"
    ][o], i.add(m), r.push(m);
  }
  return s(560, 0, 1.5, 4.5), s(48, 1, 14, 30), s(42, 2, 20, 48), s(26, 3, 10, 23), {
    update(a, o, l, c = 0, h = 0) {
      i.visible = a > 0.01;
      const d = Qi.smoothstep(a, 0.15, 0.9);
      i.rotation.y = l ? 0 : Math.sin(o * 0.4) * c * 0.015 + Math.sin(h) * 0.018, r.forEach((u, f) => {
        u.material.uniforms.strength.value = d * [
          0.9,
          1.4,
          0.8,
          0.95
        ][f], u.material.uniforms.time.value = l ? 0 : o;
      });
    },
    dispose() {
      e.remove(i), r.forEach((a) => {
        a.geometry.dispose(), a.material.dispose();
      });
    }
  };
}
function fm(e, t = !1) {
  const i = e[0].index !== null, n = new Set(Object.keys(e[0].attributes)), r = new Set(Object.keys(e[0].morphAttributes)), s = {}, a = {}, o = e[0].morphTargetsRelative, l = new bt();
  let c = 0;
  for (let h = 0; h < e.length; ++h) {
    const d = e[h];
    let u = 0;
    if (i !== (d.index !== null))
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
    for (const f in d.attributes) {
      if (!n.has(f))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + '. All geometries must have compatible attributes; make sure "' + f + '" attribute exists among all geometries, or in none of them.'), null;
      s[f] === void 0 && (s[f] = []), s[f].push(d.attributes[f]), u++;
    }
    if (u !== n.size)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". Make sure all geometries have the same number of attributes."), null;
    if (o !== d.morphTargetsRelative)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
    for (const f in d.morphAttributes) {
      if (!r.has(f))
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ".  .morphAttributes must be consistent throughout all geometries."), null;
      a[f] === void 0 && (a[f] = []), a[f].push(d.morphAttributes[f]);
    }
    if (t) {
      let f;
      if (i) f = d.index.count;
      else if (d.attributes.position !== void 0) f = d.attributes.position.count;
      else
        return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". The geometry must have either an index or a position attribute"), null;
      l.addGroup(c, f, h), c += f;
    }
  }
  if (i) {
    let h = 0;
    const d = [];
    for (let u = 0; u < e.length; ++u) {
      const f = e[u].index;
      for (let _ = 0; _ < f.count; ++_) d.push(f.getX(_) + h);
      h += e[u].attributes.position.count;
    }
    l.setIndex(d);
  }
  for (const h in s) {
    const d = nl(s[h]);
    if (!d)
      return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " attribute."), null;
    l.setAttribute(h, d);
  }
  for (const h in a) {
    const d = a[h][0].length;
    if (d !== 0) {
      l.morphAttributes = l.morphAttributes || {}, l.morphAttributes[h] = [];
      for (let u = 0; u < d; ++u) {
        const f = [];
        for (let M = 0; M < a[h].length; ++M) f.push(a[h][M][u]);
        const _ = nl(f);
        if (!_)
          return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " morphAttribute."), null;
        l.morphAttributes[h].push(_);
      }
    }
  }
  return l;
}
function nl(e) {
  let t, i, n, r = -1, s = 0;
  for (let c = 0; c < e.length; ++c) {
    const h = e[c];
    if (t === void 0 && (t = h.array.constructor), t !== h.array.constructor)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
    if (i === void 0 && (i = h.itemSize), i !== h.itemSize)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
    if (n === void 0 && (n = h.normalized), n !== h.normalized)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
    if (r === -1 && (r = h.gpuType), r !== h.gpuType)
      return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
    s += h.count * i;
  }
  const a = new t(s), o = new $t(a, i, n);
  let l = 0;
  for (let c = 0; c < e.length; ++c) {
    const h = e[c];
    if (h.isInterleavedBufferAttribute) {
      const d = l / i;
      for (let u = 0, f = h.count; u < f; u++) for (let _ = 0; _ < i; _++) {
        const M = h.getComponent(u, _);
        o.setComponent(u + d, _, M);
      }
    } else a.set(h.array, l);
    l += h.count * i;
  }
  return r !== void 0 && (o.gpuType = r), o;
}
var Nt = (e, t = 0.04) => new ci({
  color: e,
  roughness: 0.54,
  metalness: t
}), rl = Nt("#b58b3b", 0.64);
function Mc(e) {
  e.updateWorldMatrix(!0, !0);
  const t = e.matrixWorld.clone().invert(), i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  e.traverse((r) => {
    if (!(r instanceof St) || Array.isArray(r.material)) return;
    const s = r.geometry.clone();
    s.deleteAttribute("uv"), s.applyMatrix4(new dt().multiplyMatrices(t, r.matrixWorld));
    const a = i.get(r.material) ?? [];
    a.push(s), i.set(r.material, a), n.add(r.geometry);
  }), e.clear();
  for (const [r, s] of i) {
    const a = fm(s, !1);
    if (!a) throw new Error("Unable to combine carousel ornament geometry");
    ui(e, a, r), s.forEach((o) => o.dispose());
  }
  n.forEach((r) => r.dispose());
}
function ui(e, t, i, n = [
  0,
  0,
  0
]) {
  const r = new St(t, i);
  return r.position.set(n[0], n[1], n[2]), r.castShadow = !0, r.receiveShadow = !0, e.add(r), r;
}
function Dt(e, t, i, n) {
  const r = ui(e, new Bn(1, 24, 16), t, i);
  return r.scale.set(n[0], n[1], n[2]), r;
}
function Pn(e, t, i, n) {
  const r = new Ms(i.map((s) => new P(...s)));
  return ui(e, new nc(r, 24, n, 8, !1), t);
}
function sl(e, t, i, n, r) {
  const s = new Ms(i.map((u) => new P(...u))), a = 24, o = 14, l = s.computeFrenetFrames(a, !1), c = [], h = [];
  for (let u = 0; u <= a; u++) {
    const f = u / a, _ = s.getPointAt(f), M = f * (n.length - 1), m = Math.min(n.length - 2, Math.floor(M)), p = M - m, T = Qi.lerp(n[m], n[m + 1], p), S = Qi.lerp(r[m], r[m + 1], p);
    for (let v = 0; v <= o; v++) {
      const A = v / o * Math.PI * 2, w = _.clone().addScaledVector(l.normals[u], Math.cos(A) * T).addScaledVector(l.binormals[u], Math.sin(A) * S);
      if (c.push(w.x, w.y, w.z), u < a && v < o) {
        const C = u * (o + 1) + v, g = C + o + 1;
        h.push(C, C + 1, g, g, C + 1, g + 1);
      }
    }
  }
  for (const u of [0, a]) {
    const f = s.getPointAt(u / a), _ = c.length / 3;
    c.push(f.x, f.y, f.z);
    for (let M = 0; M < o; M++) {
      const m = u * (o + 1) + M;
      u === 0 ? h.push(_, m + 1, m) : h.push(_, m, m + 1);
    }
  }
  const d = new bt();
  return d.setAttribute("position", new lt(c, 3)), d.setIndex(h), d.computeVertexNormals(), ui(e, d, t);
}
function pm(e) {
  const t = new ri();
  t.name = `solid-carousel-horse-${e + 1}`;
  const i = Nt([
    "#e5d6b4",
    "#d7c19a",
    "#e9ddd0"
  ][e % 3]), n = Nt([
    "#b78b43",
    "#8a5740",
    "#cfb479"
  ][e % 3]), r = Nt([
    "#496f8a",
    "#a35349",
    "#788453"
  ][e % 3]), s = Nt("#d4ad62", 0.35), a = Nt("#745646"), o = Nt("#25262b");
  Dt(t, i, [
    0,
    0,
    0
  ], [
    0.4,
    0.205,
    0.15
  ]), Dt(t, i, [
    -0.235,
    0.015,
    0
  ], [
    0.19,
    0.215,
    0.155
  ]), Dt(t, i, [
    0.24,
    -0.015,
    0
  ], [
    0.2,
    0.19,
    0.16
  ]), sl(t, i, [
    [
      -0.23,
      0.06,
      0
    ],
    [
      -0.3,
      0.27,
      0
    ],
    [
      -0.4,
      0.47,
      0
    ],
    [
      -0.46,
      0.49,
      0
    ]
  ], [
    0.17,
    0.145,
    0.1,
    0.1
  ], [
    0.135,
    0.11,
    0.085,
    0.08
  ]);
  const l = Dt(t, i, [
    -0.485,
    0.475,
    0
  ], [
    0.155,
    0.13,
    0.09
  ]);
  l.rotation.z = -0.48;
  const c = Dt(t, i, [
    -0.62,
    0.39,
    0
  ], [
    0.125,
    0.077,
    0.081
  ]);
  c.rotation.z = -0.45;
  for (const h of [-0.06, 0.06]) {
    const d = Dt(t, i, [
      -0.41,
      0.635,
      h
    ], [
      0.037,
      0.11,
      0.028
    ]);
    d.rotation.z = -0.17;
    const u = Dt(t, Nt("#b78f7f"), [
      -0.425,
      0.65,
      h
    ], [
      0.019,
      0.06,
      0.029
    ]);
    u.rotation.z = -0.17;
  }
  for (const h of [-1, 1]) {
    Dt(t, o, [
      -0.52,
      0.505,
      h * 0.081
    ], [
      0.018,
      0.021,
      0.012
    ]), Dt(t, s, [
      -0.58,
      0.405,
      h * 0.08
    ], [
      0.031,
      0.025,
      9e-3
    ]), Dt(t, a, [
      -0.68,
      0.386,
      h * 0.061
    ], [
      0.016,
      0.01,
      8e-3
    ]);
    const d = h === 1 ? [
      [
        -0.24,
        -0.11,
        h * 0.11
      ],
      [
        -0.35,
        -0.285,
        h * 0.125
      ],
      [
        -0.48,
        -0.35,
        h * 0.12
      ],
      [
        -0.49,
        -0.44,
        h * 0.12
      ]
    ] : [
      [
        -0.23,
        -0.11,
        h * 0.11
      ],
      [
        -0.3,
        -0.31,
        h * 0.12
      ],
      [
        -0.18,
        -0.4,
        h * 0.12
      ],
      [
        -0.16,
        -0.49,
        h * 0.12
      ]
    ], u = h === 1 ? [
      [
        0.23,
        -0.1,
        h * 0.11
      ],
      [
        0.39,
        -0.26,
        h * 0.125
      ],
      [
        0.3,
        -0.37,
        h * 0.13
      ],
      [
        0.39,
        -0.45,
        h * 0.13
      ]
    ] : [
      [
        0.24,
        -0.1,
        h * 0.11
      ],
      [
        0.38,
        -0.29,
        h * 0.12
      ],
      [
        0.51,
        -0.33,
        h * 0.12
      ],
      [
        0.55,
        -0.42,
        h * 0.12
      ]
    ];
    for (const f of [d, u]) {
      sl(t, i, f, [
        0.073,
        0.057,
        0.037,
        0.032
      ], [
        0.06,
        0.049,
        0.034,
        0.032
      ]);
      const _ = f[3], M = Dt(t, a, [
        _[0] - 0.01,
        _[1] - 0.025,
        _[2]
      ], [
        0.063,
        0.037,
        0.046
      ]);
      M.rotation.z = -0.16;
    }
    Pn(t, s, [
      [
        -0.425,
        0.57,
        h * 0.084
      ],
      [
        -0.5,
        0.5,
        h * 0.09
      ],
      [
        -0.56,
        0.36,
        h * 0.075
      ]
    ], 9e-3), Pn(t, r, [
      [
        -0.67,
        0.435,
        h * 0.07
      ],
      [
        -0.625,
        0.39,
        h * 0.082
      ],
      [
        -0.59,
        0.35,
        h * 0.06
      ]
    ], 0.012), Pn(t, s, [
      [
        -0.57,
        0.37,
        h * 0.09
      ],
      [
        -0.36,
        0.19,
        h * 0.175
      ],
      [
        -0.04,
        0.19,
        h * 0.172
      ]
    ], 6e-3);
  }
  Dt(t, s, [
    0.01,
    0.07,
    0
  ], [
    0.235,
    0.163,
    0.174
  ]), Dt(t, r, [
    0.01,
    0.083,
    0
  ], [
    0.215,
    0.155,
    0.182
  ]), Dt(t, n, [
    0.03,
    0.207,
    0
  ], [
    0.15,
    0.045,
    0.105
  ]);
  for (const h of [-1, 1]) {
    Dt(t, s, [
      0.02,
      0.085,
      h * 0.179
    ], [
      0.036,
      0.037,
      0.012
    ]);
    for (let u = 0; u < 5; u++) {
      const f = u * Math.PI * 2 / 5;
      Dt(t, i, [
        0.02 + Math.sin(f) * 0.046,
        0.085 + Math.cos(f) * 0.046,
        h * 0.179
      ], [
        0.02,
        0.023,
        0.012
      ]);
    }
    const d = ui(t, new tc(0.047, 9e-3, 7, 20), s, [
      0.1,
      -0.1,
      h * 0.17
    ]);
    d.scale.y = 1.3, Pn(t, n, [
      [
        0.1,
        0.13,
        h * 0.177
      ],
      [
        0.1,
        0.01,
        h * 0.19
      ],
      [
        0.1,
        -0.1,
        h * 0.17
      ]
    ], 0.012);
  }
  for (let h = 0; h < 7; h++) {
    const d = 0.54 - h * 0.047, u = -0.35 + h * 0.022;
    Pn(t, n, [
      [
        u,
        d,
        -0.018
      ],
      [
        u + 0.08,
        d - 0.015,
        0.012
      ],
      [
        u + 0.09,
        d - 0.095,
        0.018
      ]
    ], 0.032 - h * 15e-4);
  }
  for (let h = 0; h < 5; h++) {
    const d = (h - 2) * 0.025;
    Pn(t, n, [
      [
        0.35,
        0.06,
        d
      ],
      [
        0.53,
        0.08,
        d
      ],
      [
        0.61,
        -0.12,
        d
      ],
      [
        0.53,
        -0.31,
        d
      ],
      [
        0.58,
        -0.35,
        d
      ]
    ], 0.027);
  }
  return Mc(t), t;
}
function mm(e) {
  const t = [
    Nt("#637747"),
    Nt("#899653"),
    Nt("#a1a96d")
  ], i = [
    Nt("#d99b98"),
    Nt("#e5cf9d"),
    Nt("#b47665"),
    Nt("#d8d9be")
  ], n = Nt("#b78b3f"), r = new ri();
  r.name = "miniature-garden", e.add(r);
  const s = new Bn(1, 10, 7), a = new Bn(1, 10, 7);
  for (let o = 0; o < 9; o++) {
    const l = o * Math.PI * 2 / 9 + 0.2, c = o % 3 === 0 ? 0.6 : 1.18, h = Math.sin(l) * c, d = Math.cos(l) * c;
    for (let u = 0; u < 6; u++) {
      const f = l + u * 2.4, _ = 0.09 + u % 3 * 0.045, M = ui(r, s, t[u % 3], [
        h + Math.sin(f) * 0.09,
        0.79 + _ / 2,
        d + Math.cos(f) * 0.09
      ]);
      M.scale.set(0.028, _, 0.052), M.rotation.set(Math.cos(f) * 0.7, f, Math.sin(f) * 0.7);
    }
    for (let u = 0; u < 3; u++) {
      const f = l + u * 2.1, _ = h + Math.sin(f) * 0.1, M = d + Math.cos(f) * 0.1, m = 0.9 + u % 2 * 0.11, p = ui(r, new Ft(6e-3, 9e-3, m - 0.75, 5), t[0], [
        _,
        (m + 0.75) / 2,
        M
      ]);
      p.castShadow = !1;
      const T = new ri();
      T.position.set(_, m, M), T.rotation.set(0.25 * Math.sin(f), f, 0.22 * Math.cos(f)), r.add(T);
      for (let S = 0; S < 6; S++) {
        const v = S * Math.PI * 2 / 6, A = ui(T, a, i[(o + u) % 4], [
          Math.sin(v) * 0.038,
          0,
          Math.cos(v) * 0.038
        ]);
        A.scale.set(0.032, 0.016, 0.047), A.rotation.y = v;
      }
      Dt(T, n, [
        0,
        0.012,
        0
      ], [
        0.023,
        0.018,
        0.023
      ]);
    }
  }
  Mc(r);
}
function gm(e, t, i, n) {
  const s = ui(e, new Ft(0.018, 0.021, n - 0.75, 12), Nt("#ddc9a1", 0.24), [
    t,
    (n + 0.75) / 2,
    i
  ]);
  s.name = "connected-carousel-pole";
  for (const l of [0.75 + 0.025, n - 0.035]) ui(e, new Ft(0.058, 0.067, 0.065, 16), rl, [
    t,
    l,
    i
  ]);
  const a = [];
  for (let l = 0; l <= 220; l++) {
    const c = l / 220, h = c * Math.PI * 2 * 12;
    a.push(new P(t + Math.sin(h) * 0.023, 0.75 + 0.08 + c * (n - 0.75 - 0.16), i + Math.cos(h) * 0.023));
  }
  const o = new Ms(a);
  ui(e, new nc(o, 220, 4e-3, 4, !1), rl);
}
var Sm = 16, Em = {
  zoom: 1,
  x: 0,
  y: 0
};
function vm(e, t, i) {
  const n = Math.max(440 / e, 520 / t) * Math.max(1, Math.min(3, i.zoom)), r = 440 / n, s = 520 / n;
  return {
    x: (e - r) * (Math.max(-1, Math.min(1, i.x)) + 1) / 2,
    y: (t - s) * (Math.max(-1, Math.min(1, i.y)) + 1) / 2,
    w: r,
    h: s
  };
}
function bm(e, t, i) {
  e.width = 440, e.height = 520;
  const n = e.getContext("2d");
  if (!n) throw new Error("无法生成相片预览，请重试。");
  const r = vm(t.naturalWidth, t.naturalHeight, i);
  n.drawImage(t, r.x, r.y, r.w, r.h, 0, 0, 440, 520);
}
function _m(e) {
  return new Promise((t, i) => {
    const n = new Image();
    n.onload = () => t(n), n.onerror = () => i(/* @__PURE__ */ new Error("这张相片无法解码，可能格式不受支持或文件已损坏。请重新导出为 JPG 或 PNG 后再试。")), n.src = e;
  });
}
function Tm(e, t, i, n, r = () => {
}) {
  const s = Zp(), a = new Yp({
    antialias: !0,
    alpha: !0
  });
  a.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)), a.shadowMap.enabled = !0, a.shadowMap.type = 2, a.toneMapping = 4, a.toneMappingExposure = 0.88, a.domElement.setAttribute("aria-hidden", "true"), e.appendChild(a.domElement);
  const o = new bl(), l = new kt(36, 1, 0.1, 70), c = new P(5.95, 5.55, 10.8), h = new P(0, 3, 0);
  l.position.copy(c);
  const d = new $p(l, a.domElement);
  d.target.copy(h), s && (l.position.fromArray(s.position), d.target.fromArray(s.target), d.update()), d.enableDamping = !0, d.enablePan = !1, d.minDistance = 4, d.maxDistance = 20, d.minPolarAngle = Math.PI * 0.22, d.maxPolarAngle = Math.PI * 0.445;
  const u = new va(a), f = new hm(), _ = u.fromScene(f, 0.04);
  o.environment = _.texture, f.dispose();
  const M = new ud("#eef3ff", "#939dad", 1.1);
  o.add(M);
  const m = new ea("#ffe0ae", 1.5);
  m.position.set(-6, 7.5, 4), m.target.position.set(0, 3, 0), o.add(m.target), m.castShadow = !0, m.shadow.mapSize.set(2048, 2048), Object.assign(m.shadow.camera, {
    left: -6,
    right: 6,
    top: 8,
    bottom: -5
  }), m.shadow.bias = -3e-4, m.shadow.normalBias = 0.012, m.shadow.radius = 2, o.add(m);
  const p = new ea("#a7c3ef", 0.55);
  p.position.set(4, 3, -4), o.add(p);
  const T = new Ro("#ffdfad", 0, 24, 0.55, 0.8, 2);
  T.position.set(-5.5, 5.8, 5.5), T.target.position.set(0, 2.1, 0), T.castShadow = !0, T.shadow.mapSize.set(1024, 1024), T.shadow.bias = -2e-4, T.shadow.normalBias = 0.015, o.add(T, T.target);
  const S = new ea("#fff1d6", 0);
  S.position.set(-4, 5, -5), S.target.position.set(0, 3, 0), o.add(S, S.target);
  const v = [], A = [];
  for (let L = 0; L < 3; L++) {
    const W = L * Math.PI * 2 / 3 + 0.4, re = Math.sin(W) * 0.75, K = Math.cos(W) * 0.75, Se = new lc("#ffbb68", 0, 8, 2);
    Se.position.set(re, 5.26, K), o.add(Se), v.push(Se);
    const _e = new Ro("#ffc17a", 0, 7, 0.56, 0.92, 1.5);
    _e.position.set(re, 5.22, K), _e.target.position.set(re * 1.35, 0.75, K * 1.35), _e.castShadow = L === 0, _e.shadow.mapSize.set(1024, 1024), _e.shadow.bias = -1e-3, o.add(_e, _e.target), A.push(_e);
  }
  const w = new ri();
  o.add(w);
  const C = /* @__PURE__ */ new Set(), g = (L, W = 0.65) => new ci({
    color: L,
    roughness: W,
    metalness: 0.03
  }), E = g("#f2e7c9"), F = g("#b35142"), R = g("#648dae"), V = g("#79914f"), Z = g("#d3a846"), G = new ci({
    color: "#bc9446",
    roughness: 0.34,
    metalness: 0.68
  }), X = [
    F,
    R,
    V,
    Z
  ];
  function H(L, W, re = w, K = 0, Se = 0, _e = 0) {
    const st = new St(L, W);
    return st.position.set(K, Se, _e), st.castShadow = !0, st.receiveShadow = !0, re.add(st), st;
  }
  function B(L, W, re = 0.025, K = G) {
    const Se = H(new tc(L, re, 8, 96), K, w, 0, W);
    return Se.rotation.x = Math.PI / 2, Se;
  }
  const ae = new hd();
  let ie = !0, oe = 0, de = -1, Re = !1, rt = 0, We = s?.night ? 1 : 0, J = s?.night ? 1 : 0, ue = s?.spinning ?? !1, Me = !1;
  function me(L) {
    const W = ae.load(L, () => {
    }, void 0, () => {
      ie && i("有一处装饰暂时没加载出来，请刷新重试。");
    });
    return W.colorSpace = Kt, W.anisotropy = a.capabilities.getMaxAnisotropy(), C.add(W), W;
  }
  const Oe = me("/carousel-panels.png"), ze = me("/carousel-column.png"), Ne = me("/carousel-base.png");
  function qe(L, W = Oe, re = 0, K = 1) {
    const Se = W.clone();
    return Se.wrapS = cs, Se.repeat.set(L, K), Se.offset.y = re, C.add(Se), new ci({
      map: Se,
      color: "#ffffff",
      roughness: 0.63,
      metalness: 0.035
    });
  }
  const Q = new ci({
    color: "#b68a26",
    roughness: 0.34,
    metalness: 0.72
  });
  H(new Ft(1.42, 1.36, 0.16, 96), R, w, 0, 0.12), H(new Ft(1.43, 1.43, 0.38, 96), qe(2, Ne, 0, 0.56), w, 0, 0.39), H(new Ft(1.5, 1.46, 0.1, 96), qe(2, Ne, 0.56, 0.44), w, 0, 0.63), H(new Ft(1.4, 1.46, 0.07, 96), Q, w, 0, 0.71), B(1.43, 0.2, 0.025), B(1.44, 0.58, 0.025), B(1.47, 0.7, 0.022);
  for (let L = 0; L < 3; L++) {
    const W = L * Math.PI * 2 / 3;
    H(new Bn(0.13, 16, 12), R, w, Math.sin(W) * 1.08, 0.045, Math.cos(W) * 1.08).scale.set(1, 0.48, 1);
  }
  [
    {
      y: 1.17,
      h: 0.86,
      r1: 0.34,
      r2: 0.48
    },
    {
      y: 2.1,
      h: 1,
      r1: 0.28,
      r2: 0.34
    },
    {
      y: 3.14,
      h: 1,
      r1: 0.32,
      r2: 0.28
    },
    {
      y: 4.15,
      h: 1,
      r1: 0.44,
      r2: 0.32
    }
  ].forEach((L, W) => {
    const re = qe(1, ze, [
      0,
      0.23,
      0.48,
      0.23
    ][W], [
      0.23,
      0.25,
      0.255,
      0.25
    ][W]);
    W === 3 && re.color.set("#a9cfff"), H(new Ft(L.r1, L.r2, L.h, 48), re, w, 0, L.y), B(L.r2 + 0.02, L.y - L.h / 2, 0.035, X[W]), B(L.r1 + 0.025, L.y + L.h / 2, 0.027, G);
  }), H(new Ft(0.53, 0.44, 0.52, 64), qe(1, ze, 0.735, 0.265), w, 0, 4.91), B(0.53, 5.17, 0.033, G), H(new Ft(0.24, 0.38, 0.92, 48), E, w, 0, 5.61), H(new Ft(0.24, 0.24, 0.12, 48), G, w, 0, 6.1);
  const le = new ci({
    color: "#e0bd75",
    emissive: "#ffae4b",
    emissiveIntensity: 0,
    roughness: 0.45
  }), pe = B(0.75, 5.28, 0.042, le);
  pe.castShadow = !1;
  for (let L = 0; L < 6; L++) {
    const W = L * Math.PI * 2 / 6, re = new P(0, 5.98, 0), K = new P(Math.sin(W) * 1.83, 5.4, Math.cos(W) * 1.83), Se = K.clone().sub(re), _e = H(new Ft(0.012, 0.012, Se.length(), 8), G);
    _e.position.copy(re).add(K).multiplyScalar(0.5), _e.quaternion.setFromUnitVectors(new P(0, 1, 0), Se.normalize());
  }
  const Ee = [
    new ee(0.08, 6.22),
    new ee(0.22, 6.1),
    new ee(0.55, 5.93),
    new ee(1.04, 5.68),
    new ee(1.58, 5.46),
    new ee(2.13, 5.33)
  ], Te = [
    g("#678fae"),
    g("#eee0bd"),
    g("#829ab1"),
    g("#eddfbd")
  ];
  for (let L = 0; L < 16; L++) {
    const W = H(new yo(Ee, 10, L * Math.PI / 8, Math.PI / 8 + 1e-3), Te[L % 4]);
    W.material.side = 2;
  }
  const De = new ci({
    color: "#fff0ca",
    emissive: "#ffc276",
    emissiveIntensity: 0.15,
    roughness: 0.85,
    side: 2
  }), Ue = H(new yo(Ee.map((L) => new ee(L.x * 0.985, L.y - 0.028)), 96), De, w);
  Ue.castShadow = !1;
  const Xe = new Ft(2.15, 2.15, 0.62, 224, 1, !0), Ze = Xe.attributes.position;
  for (let L = 0; L <= 224; L++) {
    const W = L / 224 * 14 % 1;
    Ze.setY(L, 0.31 + Math.sin(W * Math.PI) * 0.15);
  }
  Ze.needsUpdate = !0, Xe.computeVertexNormals();
  const I = qe(2, Oe, 0.14, 0.68);
  I.side = 2, H(Xe, I, w, 0, 5.3), B(2.15, 4.99, 0.035, F);
  for (let L = 0; L < 14; L++) {
    const W = L * Math.PI * 2 / 14;
    H(new Bn(0.045, 12, 8), X[L % 4], w, Math.sin(W) * 2.15, 5.49, Math.cos(W) * 2.15);
  }
  H(new Bn(0.13, 20, 16), F, w, 0, 6.33), B(0.18, 6.18, 0.03, G);
  function mt() {
    const L = document.createElement("canvas");
    L.width = L.height = 128;
    const W = L.getContext("2d"), re = W.createRadialGradient(64, 64, 0, 64, 64, 64);
    re.addColorStop(0, "rgba(255,213,149,.7)"), re.addColorStop(0.4, "rgba(255,186,110,.2)"), re.addColorStop(1, "rgba(255,178,105,0)"), W.fillStyle = re, W.fillRect(0, 0, 128, 128);
    const K = new uo(L);
    return C.add(K), K;
  }
  const it = mt(), et = new da({
    map: it,
    transparent: !0,
    opacity: 0,
    depthWrite: !1,
    blending: 2
  }), b = new eo(et);
  b.position.set(0, 5.26, 0), b.scale.set(2.5, 1.3, 1), w.add(b);
  const y = new da({
    map: it,
    transparent: !0,
    opacity: 0,
    depthWrite: !1,
    blending: 2,
    toneMapped: !1
  });
  for (let L = 0; L < 16; L++) {
    const W = L * Math.PI * 2 / 16, re = new eo(y);
    re.position.set(Math.sin(W) * 2.1, 5.1, Math.cos(W) * 2.1), re.scale.set(0.65, 0.3, 1), w.add(re);
  }
  const D = new si({
    transparent: !0,
    depthWrite: !1,
    side: 2,
    blending: 2,
    uniforms: {
      strength: { value: 0 },
      tint: { value: new $e("#ffd098") }
    },
    vertexShader: `varying vec2 beamUV;varying vec3 viewNormal;varying vec3 viewPosition;
      void main(){beamUV=uv;viewNormal=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.0);viewPosition=-p.xyz;gl_Position=projectionMatrix*p;}`,
    fragmentShader: `uniform float strength;uniform vec3 tint;varying vec2 beamUV;varying vec3 viewNormal;varying vec3 viewPosition;
      void main(){float facing=pow(abs(dot(normalize(viewNormal),normalize(viewPosition))),1.4);
      float ends=smoothstep(0.0,0.26,beamUV.y)*(1.0-smoothstep(0.85,1.0,beamUV.y));
      float taper=mix(0.12,0.75,beamUV.y);gl_FragColor=vec4(tint,strength*ends*taper*facing);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`
  });
  for (let L = 0; L < 3; L++) {
    const W = L * Math.PI * 2 / 3 + 0.4, re = H(new Ft(0.18, 0.88, 3.7, 48, 1, !0), D, w, Math.sin(W) * 0.86, 3.3, Math.cos(W) * 0.86);
    re.castShadow = !1, re.receiveShadow = !1, re.renderOrder = 2;
  }
  const Y = [], j = new ri();
  j.name = "rotating-carousel-assembly", w.add(j);
  const ce = um();
  ce.restore(s?.angle ?? 0), ce.play(ue), B(0.96, 5.7, 0.014, G), B(0.96, 0.765, 0.012, G);
  for (let L = 0; L < 3; L++) {
    const W = 0.3 + L * Math.PI * 2 / 3, re = Math.sin(W) * 0.96, K = Math.cos(W) * 0.96, Se = pm(L);
    Se.position.set(re, 1.4, K), Se.rotation.y = W, Se.scale.setScalar(1.05), j.add(Se), Y.push(Se), gm(j, re, K, 5.7);
  }
  mm(w);
  const ge = [], N = [], he = [], be = Array(16).fill(0), Le = g("#fff9e8"), se = [];
  function Ie(L, W) {
    L.fillStyle = "#fff9ed", L.fillRect(0, 560, 512, 80), L.fillStyle = "#856d5a", L.font = "22px sans-serif", L.textAlign = "center", L.fillText(String(W + 1).padStart(2, "0") + "   /   dear memory", 256, 601);
  }
  function Fe(L, W) {
    const re = document.createElement("canvas");
    re.width = 512, re.height = 640;
    const K = re.getContext("2d");
    if (K.fillStyle = "#fff9ed", K.fillRect(0, 0, 512, 640), W) {
      const _e = Math.max(440 / W.width, 520 / W.height);
      K.save(), K.beginPath(), K.rect(36, 30, 440, 520), K.clip(), K.drawImage(W, 36 + (440 - W.width * _e) / 2, 30 + (520 - W.height * _e) / 2, W.width * _e, W.height * _e), K.restore();
    } else
      K.fillStyle = "#e7dfd2", K.fillRect(36, 30, 440, 520);
    Ie(K, L);
    const Se = new uo(re);
    return Se.colorSpace = Kt, Se.anisotropy = a.capabilities.getMaxAnisotropy(), C.add(Se), Se;
  }
  function Ye(L, W) {
    H(new Ft(8e-3, 8e-3, W, 6), G, L, 0, -W / 2);
  }
  function nt(L, W, re, K = 0.046) {
    const Se = new So({
      color: [
        "#b5cbdf",
        "#e6b5ae",
        "#e5d3a3",
        "#b7caab"
      ][re % 4],
      roughness: 0.16,
      metalness: 0.1,
      transmission: 0.25,
      transparent: !0,
      opacity: 0.9
    });
    H(new Wu(K, 1), Se, L, 0, W);
  }
  const U = new Wl();
  for (let L = 0; L < 10; L++) {
    const W = L * Math.PI / 5 + Math.PI / 2, re = L % 2 ? 0.045 : 0.1, K = Math.cos(W) * re, Se = Math.sin(W) * re;
    L === 0 ? U.moveTo(K, Se) : U.lineTo(K, Se);
  }
  U.closePath();
  const $ = new Gu(U, {
    depth: 0.018,
    bevelEnabled: !0,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 6e-3,
    bevelThickness: 6e-3
  }), ne = new So({
    color: "#e8d7b4",
    roughness: 0.2,
    metalness: 0.25,
    iridescence: 1,
    clearcoat: 1,
    transparent: !0,
    opacity: 0.88
  });
  for (let L = 0; L < 12; L++) {
    const W = L * Math.PI * 2 / 12 + 0.15, re = new ri();
    re.position.set(Math.sin(W) * 2.04, 5.12, Math.cos(W) * 2.04), re.rotation.y = W, re.userData.phase = L * 1.37, re.userData.sway = {
      x: 0,
      z: 0,
      vx: 0,
      vz: 0
    }, j.add(re), ge.push(re);
    const K = 0.8 + L % 4 * 0.31, Se = [
      1,
      4,
      7,
      10
    ].includes(L), _e = K + 0.87 + (Se ? 1.1 : 0);
    Ye(re, _e), nt(re, -0.24, L), nt(re, -0.52, L + 1, 0.032);
    for (let st = 0; st < (Se ? 2 : 1); st++) {
      const yt = N.length, Lt = new ri();
      Lt.position.y = -K - 0.42 - st * 1.1, Lt.rotation.z = Math.sin(L * 4.1 + st) * 0.07, re.add(Lt);
      const ii = H(new kn(0.63, 0.8, 0.027), Le.clone(), Lt);
      ii.userData.photo = yt, he.push(ii), se.push(ii);
      const at = H(new _s(0.62, 0.79), new ci({
        map: Fe(yt),
        roughness: 0.83,
        side: 2
      }), Lt, 0, 0, 0.017);
      at.userData.photo = yt, N.push(at), he.push(at);
      const vt = H(new _s(0.62, 0.79), at.material, Lt, 0, 0, -0.017);
      vt.rotation.y = Math.PI, vt.userData.photo = yt, he.push(vt), H(new kn(0.048, 0.14, 0.07), X[yt % 4], Lt, 0, 0.42, 0.04);
    }
    if (L % 3 === 1 && H($, ne, re, 0, -_e - 0.12), nt(re, -_e, L + 2, 0.075), nt(re, -_e + 0.18, L + 1, 0.035), L % 3 === 0) {
      const st = H(new hu(0.07, 0.1, 16, 1, !0), G, re, 0, -_e - 0.14);
      st.rotation.z = Math.PI;
    }
  }
  const we = dm(o, a.getPixelRatio()), Ae = Array(16).fill(!1), te = new P(), ye = new P(), Ve = l.position.clone(), wt = d.target.clone();
  let ct = "", Wt = 0, Xt = !1;
  function jt() {
    de < 0 && !Me && (Ve.copy(l.position), wt.copy(d.target));
    const L = {
      night: J === 1,
      spinning: ue,
      position: Ve.toArray(),
      target: wt.toArray(),
      angle: j.rotation.y
    }, W = JSON.stringify(L);
    if (W !== ct)
      try {
        Kp(L), ct = W, Xt = !1, r(!0);
      } catch {
        r(!1), Xt || i("当前浏览器无法保存视角和模式，请检查网站存储设置。"), Xt = !0;
      }
  }
  const qn = () => {
    document.visibilityState === "hidden" && jt();
  };
  d.addEventListener("end", jt), window.addEventListener("pagehide", jt), document.addEventListener("visibilitychange", qn);
  function Li(L) {
    if (!Number.isInteger(L) || L < 0 || L >= N.length) return;
    jt(), de = L, t(L);
    const W = N[L];
    W.updateWorldMatrix(!0, !1), W.getWorldPosition(ye);
    const re = new P(0, 0, 1).transformDirection(W.matrixWorld);
    te.copy(ye).addScaledVector(re, 2.15), te.y += 0.04, Me = !0, d.enabled = !1, an();
  }
  function br() {
    Ve.copy(c), wt.copy(h), de = -1, t(-1), ye.copy(h), te.copy(c), Me = !0, d.enabled = !1, an();
  }
  function an() {
    se.forEach((L, W) => {
      const re = L.material;
      re.color.set(W === de ? "#f5c665" : Re ? "#9bc8e7" : "#fff9e8"), re.emissive.set(Re || W === de ? "#568bb7" : "#000"), re.emissiveIntensity = Re ? 0.28 : 0.08;
    });
  }
  async function Tr(L, W) {
    const re = ++be[L], K = W ? await _m(W) : void 0;
    if (!ie || re !== be[L]) return;
    const Se = N[L].material, _e = Se.map;
    Se.map = Fe(L, K), Se.emissiveMap = Se.map, Se.emissive.set("#fff5e4"), Ae[L] = !!K, Se.needsUpdate = !0, _e && (C.delete(_e), _e.dispose());
  }
  const di = new Rd(), on = new ee();
  let Wi = 0, Xi = 0, _t = null, xi = !1, Gt = -1, ei = !1, Ii = !1;
  const ti = document.createElement("div");
  ti.className = "photo-drag-ghost", ti.hidden = !0;
  const fi = document.createElement("canvas");
  fi.width = 440, fi.height = 560;
  const ln = document.createElement("span");
  ln.setAttribute("role", "status"), ti.appendChild(fi), ti.appendChild(ln), document.body.appendChild(ti);
  const Yt = new au(new bt().setFromPoints([
    new P(-0.34, -0.425, 0.03),
    new P(0.34, -0.425, 0.03),
    new P(0.34, 0.425, 0.03),
    new P(-0.34, 0.425, 0.03)
  ]), new Il({ color: "#fff1b9" }));
  Yt.matrixAutoUpdate = !1, Yt.material.depthTest = !1, Yt.renderOrder = 1e3, Yt.visible = !1, o.add(Yt);
  function x(L) {
    const W = a.domElement.getBoundingClientRect();
    if (!(L.clientX < W.left || L.clientX > W.right || L.clientY < W.top || L.clientY > W.bottom))
      return on.set((L.clientX - W.left) / W.width * 2 - 1, -(L.clientY - W.top) / W.height * 2 + 1), di.setFromCamera(on, l), di.intersectObjects(he, !1)[0];
  }
  function O() {
    _t?.timer && clearTimeout(_t.timer), _t = null, xi = !1, Gt = -1, ti.hidden = !0, Yt.visible = !1, d.enabled = de < 0 && !Me && !ei, a.domElement.style.cursor = "grab";
  }
  function q(L, W) {
    ti.style.left = `${L}px`, ti.style.top = `${W}px`;
  }
  const k = (L) => {
    if (_t) {
      Ii = !0, O();
      return;
    }
    if (!L.isPrimary || L.button !== 0 || ei) return;
    Ii = !1, Wi = L.clientX, Xi = L.clientY;
    const W = x(L);
    if (!W || de >= 0 || Me) return;
    const re = W.object.userData.photo;
    Ae[re] && (_t = {
      id: L.pointerId,
      slot: re,
      timer: null
    }, _t.timer = setTimeout(() => {
      if (!_t || !ie) return;
      xi = !0, Ii = !0, d.enabled = !1;
      const K = N[re].material.map?.image, Se = fi.getContext("2d");
      Se?.clearRect(0, 0, fi.width, fi.height), K && Se?.drawImage(K, 0, 0, fi.width, fi.height), ln.textContent = "拖到另一张相片上交换", q(Wi, Xi), ti.hidden = !1, a.domElement.style.cursor = "grabbing";
    }, 450));
  }, z = (L) => {
    if (!(_t && L.pointerId !== _t.id)) {
      if (_t && !xi && Math.hypot(L.clientX - Wi, L.clientY - Xi) > 8 && O(), xi && _t) {
        q(L.clientX, L.clientY);
        const W = x(L);
        Gt = W ? W.object.userData.photo : -1, Gt === _t.slot && (Gt = -1), Yt.visible = Gt >= 0, Gt >= 0 && Yt.matrix.copy(se[Gt].matrixWorld), ln.textContent = Gt >= 0 ? `松手交换到 ${String(Gt + 1).padStart(2, "0")} 号` : "拖到另一张相片上交换";
        return;
      }
      a.domElement.style.cursor = x(L) ? "pointer" : "grab";
    }
  }, fe = (L) => {
    if (_t && _t.id !== L.pointerId) return;
    if (xi && _t) {
      const re = _t.slot, K = x(L), Se = K ? K.object.userData.photo : -1;
      ei = Se >= 0 && Se !== re, O(), ei && n(re, Se).catch((_e) => {
        ie && i(_e instanceof Error ? _e.message : "交换没有成功，请重试。");
      }).finally(() => {
        ei = !1, ie && (d.enabled = de < 0 && !Me);
      });
      return;
    }
    if (O(), Ii || !L.isPrimary || L.button !== 0 || ei || Math.hypot(L.clientX - Wi, L.clientY - Xi) > 6) return;
    const W = x(L);
    W && Li(W.object.userData.photo);
  }, ve = () => O(), Ce = (L) => {
    L.key === "Escape" && _t && (Ii = !0, L.preventDefault(), O());
  };
  a.domElement.addEventListener("pointerdown", k), a.domElement.addEventListener("pointerup", fe), a.domElement.addEventListener("pointermove", z), a.domElement.addEventListener("pointercancel", ve), a.domElement.addEventListener("lostpointercapture", ve), window.addEventListener("blur", ve), window.addEventListener("keydown", Ce);
  const Pe = () => {
    const L = e.clientWidth, W = e.clientHeight;
    a.setSize(L, W), l.aspect = L / W, l.fov = Qi.radToDeg(2 * Math.atan(Math.tan(Qi.degToRad(36) / 2) * Math.max(1, 0.85 / (L / W)))), l.clearViewOffset(), l.updateProjectionMatrix();
  }, He = new ResizeObserver(Pe);
  He.observe(e), Pe();
  const Ke = new vd(), Je = matchMedia("(prefers-reduced-motion: reduce)").matches;
  Ke.connect(document);
  function Be() {
    oe = requestAnimationFrame(Be), Ke.update();
    const L = Math.min(Ke.getDelta(), 0.04), W = Ke.getElapsed();
    rt = Math.max(0, rt - L * 0.15), We = Qi.lerp(We, J, Je ? 1 : 1 - Math.exp(-L * 3)), v.forEach((K) => {
      K.intensity = We * 4.8;
    }), A.forEach((K) => {
      K.intensity = We * 22;
    }), le.emissiveIntensity = We * 2.2, De.emissiveIntensity = We * 0.68, M.intensity = 0.4 - We * 0.18, m.intensity = 3.1 - We * 2.98, m.color.setRGB(1, 0.745, 0.423).lerp(new $e("#fff0dc"), We), T.intensity = 105 * (1 - We), S.intensity = 0.85 * (1 - We), p.intensity = 0.55 - We * 0.2, et.opacity = We * 0.36, y.opacity = We * 0.72, D.uniforms.strength.value = We * 0.19, a.toneMappingExposure = 0.94 + We * 0.04, o.environmentIntensity = 0.28 - We * 0.1;
    const re = ce.update(L, de >= 0 || Re || _t !== null || ei, Je);
    if (ge.forEach((K, Se) => {
      if (de >= 0 || Re || _t || ei) return;
      const _e = K.userData.sway, st = re.speed / (Math.PI * 2 / 28), yt = Je ? 0 : 0.012 + rt * 0.11, Lt = Je ? 0 : -0.045 * st * st + Math.sin(W * (1.1 + Se * 0.017) + Se) * (yt * 0.55 + Math.abs(st) * 0.026), ii = Je ? 0 : -st * 0.04 + Math.sin(W * (1.35 + Se * 0.023) + Se * 1.7) * (yt + Math.abs(st) * 0.04), at = 7 + Se % 4 * 1.1;
      _e.vx += ((Lt - _e.x) * at - _e.vx * 2.2) * L, _e.vz += ((ii - _e.z) * at - _e.vz * 2.2) * L, _e.x += _e.vx * L, _e.z += _e.vz * L, K.rotation.x = _e.x, K.rotation.z = _e.z;
    }), j.rotation.y = re.angle, Y.forEach((K, Se) => {
      K.position.y = re.heights[Se];
    }), Me) {
      const K = Je ? 1 : 1 - Math.exp(-L * 4);
      l.position.lerp(te, K), d.target.lerp(ye, K), l.position.distanceTo(te) < 8e-3 && (Me = !1, d.enabled = de < 0);
    }
    N.forEach((K, Se) => {
      K.material.emissiveIntensity = Ae[Se] ? We * 0.33 : 0;
    }), we.update(We, W, Je, rt, re.angle), !xi && !ei && d.update(), a.render(o, l), W - Wt >= 0.3 && (jt(), Wt = W);
  }
  Be();
  const ht = (L) => {
    L.defaultPrevented || L.target.closest('input,button,[role="dialog"]') || (L.key === "Escape" && br(), de >= 0 && L.key === "ArrowRight" && Li((de + 1) % 16), de >= 0 && L.key === "ArrowLeft" && Li((de + 16 - 1) % 16));
  };
  window.addEventListener("keydown", ht);
  const gt = (L) => {
    L.preventDefault(), i("画面暂时中断，请刷新页面重新打开。");
  };
  return a.domElement.addEventListener("webglcontextlost", gt), {
    ready: Promise.resolve(),
    focus: Li,
    reset: br,
    rotate(L) {
      ue = L, ce.play(L), jt();
    },
    wind() {
      rt = 1;
    },
    light(L) {
      J = L ? 1 : 0, jt();
    },
    selectMode(L) {
      Re = L, an();
    },
    setPhoto: Tr,
    swapPhotos(L, W) {
      be[L]++, be[W]++;
      const re = N[L].material, K = N[W].material;
      [re.map, K.map] = [K.map, re.map], re.emissiveMap = re.map, K.emissiveMap = K.map;
      for (const [Se, _e] of [[re, L], [K, W]]) {
        const st = Se.map, yt = st?.image;
        st && yt && (Ie(yt.getContext("2d"), _e), st.needsUpdate = !0);
      }
      re.needsUpdate = K.needsUpdate = !0, [Ae[L], Ae[W]] = [Ae[W], Ae[L]];
    },
    dispose() {
      jt(), d.removeEventListener("end", jt), window.removeEventListener("pagehide", jt), document.removeEventListener("visibilitychange", qn), ie = !1, O(), ti.remove(), o.remove(Yt), Yt.geometry.dispose(), Yt.material.dispose(), a.domElement.removeEventListener("pointercancel", ve), a.domElement.removeEventListener("lostpointercapture", ve), window.removeEventListener("blur", ve), window.removeEventListener("keydown", Ce), Ke.dispose(), cancelAnimationFrame(oe), He.disconnect(), d.dispose(), window.removeEventListener("keydown", ht), a.domElement.removeEventListener("pointerdown", k), a.domElement.removeEventListener("pointerup", fe), a.domElement.removeEventListener("pointermove", z), a.domElement.removeEventListener("webglcontextlost", gt), we.dispose(), T.shadow.dispose(), m.shadow.dispose(), o.traverse((L) => {
        L instanceof St && (L.geometry.dispose(), (Array.isArray(L.material) ? L.material : [L.material]).forEach((W) => W.dispose()));
      }), C.forEach((L) => L.dispose()), et.dispose(), y.dispose(), _.dispose(), u.dispose(), a.dispose(), a.domElement.remove();
    }
  };
}
function yc() {
  return new Promise((e, t) => {
    const i = indexedDB.open("carousel-lamp-photos", 1);
    i.onupgradeneeded = () => i.result.createObjectStore("photos", { keyPath: "slot" }), i.onsuccess = () => e(i.result), i.onerror = () => t(/* @__PURE__ */ new Error("无法打开本机相片存储，请检查浏览器的网站存储设置。")), i.onblocked = () => t(/* @__PURE__ */ new Error("相片存储暂时被其他页面占用，请关闭其他页面后重试。"));
  });
}
async function wm() {
  const e = await yc();
  try {
    return await new Promise((t, i) => {
      const n = e.transaction("photos", "readonly"), r = n.objectStore("photos").getAll();
      n.oncomplete = () => t(r.result), n.onerror = n.onabort = () => i(/* @__PURE__ */ new Error("未能读取本机保存的相片，请刷新重试。"));
    });
  } finally {
    e.close();
  }
}
async function Am(e) {
  return Mm([e]);
}
async function Mm(e) {
  const t = await yc();
  try {
    await new Promise((i, n) => {
      const r = t.transaction("photos", "readwrite", { durability: "strict" });
      try {
        for (const s of e) r.objectStore("photos").put(s);
      } catch {
        r.abort(), n(/* @__PURE__ */ new Error("相片未能保存，位置没有改变。"));
      }
      r.oncomplete = () => i(), r.onerror = r.onabort = () => n(/* @__PURE__ */ new Error("相片未能保存到本机，可能存储空间不足。请释放空间后重试。"));
    });
  } finally {
    t.close();
  }
}
var Rm = class {
  constructor() {
    this.context = null, this.master = null, this.muted = !1;
  }
  setMuted(e) {
    this.muted = e, this.context && this.master && this.master.gain.setTargetAtTime(e ? 0 : 0.7, this.context.currentTime, 0.025);
  }
  play(e) {
    if (!this.muted)
      try {
        this.context ??= new AudioContext();
        const t = this.context;
        this.master || (this.master = t.createGain(), this.master.gain.value = 0.7, this.master.connect(t.destination)), t.resume();
        const i = t.currentTime;
        if ((e === "wind" ? [
          1046.5,
          1568,
          1318.5,
          2093,
          1174.7,
          1568
        ] : e === "hang" ? [784, 1046.5] : e === "light" ? [523.25, 1046.5] : [1318.5]).forEach((n, r) => {
          const s = i + r * (e === "wind" ? 0.27 : 0.08), a = e === "wind" ? 1.9 : e === "select" ? 0.2 : 0.5;
          [1, 2.76].forEach((o, l) => {
            const c = t.createOscillator(), h = t.createGain();
            c.frequency.value = n * o, h.gain.setValueAtTime(0, s), h.gain.linearRampToValueAtTime((e === "select" ? 0.015 : 0.035) / (l * 5 + 1), s + 6e-3), h.gain.exponentialRampToValueAtTime(1e-4, s + a), c.connect(h).connect(this.master), c.start(s), c.stop(s + a + 0.02), c.onended = () => {
              c.disconnect(), h.disconnect();
            };
          });
        }), e === "wind" || e === "light" || e === "hang") {
          const n = e === "wind" ? 2.4 : 0.065, r = t.createBuffer(1, Math.ceil(t.sampleRate * n), t.sampleRate), s = r.getChannelData(0);
          for (let c = 0; c < s.length; c++) s[c] = Math.random() * 2 - 1;
          const a = t.createBufferSource(), o = t.createBiquadFilter(), l = t.createGain();
          a.buffer = r, o.type = "lowpass", o.frequency.value = e === "wind" ? 550 : 1600, l.gain.setValueAtTime(0, i), l.gain.linearRampToValueAtTime(e === "wind" ? 0.09 : 0.025, i + (e === "wind" ? 0.4 : 5e-3)), l.gain.exponentialRampToValueAtTime(1e-4, i + n), a.connect(o).connect(l).connect(this.master), a.start(), a.onended = () => {
            a.disconnect(), o.disconnect(), l.disconnect();
          };
        }
      } catch {
      }
  }
  dispose() {
    this.context?.close(), this.context = null, this.master = null;
  }
};
function ym(e) {
  return new Worker("./carousel-heic.worker.js", { name: e?.name });
}
var Cm = (e) => /\.(heic|heif)$/i.test(e.name) || /^image\/hei[cf](?:-sequence)?$/i.test(e.type);
function Pm(e, t) {
  return new Promise((i, n) => {
    if (t.aborted) {
      n(new DOMException("Cancelled", "AbortError"));
      return;
    }
    const r = new ym(), s = (l, c) => {
      clearTimeout(o), t.removeEventListener("abort", a), r.terminate(), c ? n(c) : i(l);
    }, a = () => s(void 0, new DOMException("Cancelled", "AbortError")), o = setTimeout(() => s(void 0, /* @__PURE__ */ new Error("相片处理时间较长，请换一张较小的相片，或导出为 JPG 后重试。")), 9e4);
    t.addEventListener("abort", a, { once: !0 }), r.onmessage = (l) => {
      l.data.blob instanceof Blob ? s(l.data.blob) : s(void 0, new Error(l.data.error || "相片转换失败，请重试。"));
    }, r.onerror = () => s(void 0, /* @__PURE__ */ new Error("无法启动 HEIC 转换，请刷新页面或换一个浏览器重试。")), r.postMessage(e);
  });
}
export {
  Rm as ChimeAudio,
  Sm as PHOTO_COUNT,
  Pm as convertHeic,
  Tm as createCarousel,
  bm as drawCrop,
  Em as initialCrop,
  Cm as isHeicFile,
  _m as loadPhoto,
  wm as readSavedPhotos,
  Zp as readSavedView,
  Am as savePhotoLocally,
  Mm as savePhotosLocally,
  Kp as saveView
};
