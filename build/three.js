/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '148.1';
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const TwoPassDoubleSide = 3;
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const NoToneMapping = 0;
const UVMapping = 300;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const RGBAFormat = 1023;
const LinearEncoding = 3000;
const sRGBEncoding = 3001;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1;
const SRGBColorSpace = 'srgb';
const LinearSRGBColorSpace = 'srgb-linear';
const KeepStencilOp = 7680;
const AlwaysStencilFunc = 519;
const StaticDrawUsage = 35044;
const GLSL3 = '300 es';
const _SRGBAFormat = 1035;

const _lut = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff'];
const DEG2RAD = Math.PI / 180;
function generateUUID() {
	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' + _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' + _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] + _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff];
	return uuid.toLowerCase();
}
function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
}
function degToRad(degrees) {
	return degrees * DEG2RAD;
}
function isPowerOfTwo(value) {
	return (value & value - 1) === 0 && value !== 0;
}
function floorPowerOfTwo(value) {
	return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
}

var MathUtils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	DEG2RAD: DEG2RAD,
	generateUUID: generateUUID,
	clamp: clamp,
	degToRad: degToRad,
	isPowerOfTwo: isPowerOfTwo,
	floorPowerOfTwo: floorPowerOfTwo
});

class Vector3 {
	constructor(x = 0, y = 0, z = 0) {
		Vector3.prototype.isVector3 = true;
		this.x = x;
		this.y = y;
		this.z = z;
	}
	set(x, y, z) {
		if (z === undefined) z = this.z;
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(v) {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		return this;
	}
	add(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		return this;
	}
	addVectors(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		return this;
	}
	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		return this;
	}
	subVectors(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		return this;
	}
	multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}
	applyMatrix3(m) {
		const x = this.x,
			y = this.y,
			z = this.z;
		const e = m.elements;
		this.x = e[0] * x + e[3] * y + e[6] * z;
		this.y = e[1] * x + e[4] * y + e[7] * z;
		this.z = e[2] * x + e[5] * y + e[8] * z;
		return this;
	}
	applyNormalMatrix(m) {
		return this.applyMatrix3(m).normalize();
	}
	applyMatrix4(m) {
		const x = this.x,
			y = this.y,
			z = this.z;
		const e = m.elements;
		const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
		this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
		this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
		this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
		return this;
	}
	unproject(camera) {
		return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
	}
	transformDirection(m) {
		const x = this.x,
			y = this.y,
			z = this.z;
		const e = m.elements;
		this.x = e[0] * x + e[4] * y + e[8] * z;
		this.y = e[1] * x + e[5] * y + e[9] * z;
		this.z = e[2] * x + e[6] * y + e[10] * z;
		return this.normalize();
	}
	divideScalar(scalar) {
		return this.multiplyScalar(1 / scalar);
	}
	min(v) {
		this.x = Math.min(this.x, v.x);
		this.y = Math.min(this.y, v.y);
		this.z = Math.min(this.z, v.z);
		return this;
	}
	max(v) {
		this.x = Math.max(this.x, v.x);
		this.y = Math.max(this.y, v.y);
		this.z = Math.max(this.z, v.z);
		return this;
	}
	dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	cross(v) {
		return this.crossVectors(this, v);
	}
	crossVectors(a, b) {
		const ax = a.x,
			ay = a.y,
			az = a.z;
		const bx = b.x,
			by = b.y,
			bz = b.z;
		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;
		return this;
	}
	distanceTo(v) {
		return Math.sqrt(this.distanceToSquared(v));
	}
	distanceToSquared(v) {
		const dx = this.x - v.x,
			dy = this.y - v.y,
			dz = this.z - v.z;
		return dx * dx + dy * dy + dz * dz;
	}
	setFromMatrixPosition(m) {
		const e = m.elements;
		this.x = e[12];
		this.y = e[13];
		this.z = e[14];
		return this;
	}
	toArray(array = [], offset = 0) {
		array[offset] = this.x;
		array[offset + 1] = this.y;
		array[offset + 2] = this.z;
		return array;
	}
	fromBufferAttribute(attribute, index) {
		this.x = attribute.getX(index);
		this.y = attribute.getY(index);
		this.z = attribute.getZ(index);
		return this;
	}
	*[Symbol.iterator]() {
		yield this.x;
		yield this.y;
		yield this.z;
	}
}

class Sphere {
	constructor(center = new Vector3(), radius = -1) {
		this.center = center;
		this.radius = radius;
	}
	copy(sphere) {
		this.center.copy(sphere.center);
		this.radius = sphere.radius;
		return this;
	}
	applyMatrix4(matrix) {
		this.center.applyMatrix4(matrix);
		this.radius = this.radius * matrix.getMaxScaleOnAxis();
		return this;
	}
}

class Plane {
	constructor(normal = new Vector3(1, 0, 0), constant = 0) {
		this.normal = normal;
		this.constant = constant;
	}
	setComponents(x, y, z, w) {
		this.normal.set(x, y, z);
		this.constant = w;
		return this;
	}
	normalize() {
		const inverseNormalLength = 1.0 / this.normal.length();
		this.normal.multiplyScalar(inverseNormalLength);
		this.constant *= inverseNormalLength;
		return this;
	}
	distanceToPoint(point) {
		return this.normal.dot(point) + this.constant;
	}
}

const _sphere$1 = /*@__PURE__*/new Sphere();


class Frustum {
	constructor(p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane()) {
		this.planes = [p0, p1, p2, p3, p4, p5];
	}
	setFromProjectionMatrix(m) {
		const planes = this.planes;
		const me = m.elements;
		const me0 = me[0],
			me1 = me[1],
			me2 = me[2],
			me3 = me[3];
		const me4 = me[4],
			me5 = me[5],
			me6 = me[6],
			me7 = me[7];
		const me8 = me[8],
			me9 = me[9],
			me10 = me[10],
			me11 = me[11];
		const me12 = me[12],
			me13 = me[13],
			me14 = me[14],
			me15 = me[15];
		planes[0].setComponents(me3 - me0, me7 - me4, me11 - me8, me15 - me12).normalize();
		planes[1].setComponents(me3 + me0, me7 + me4, me11 + me8, me15 + me12).normalize();
		planes[2].setComponents(me3 + me1, me7 + me5, me11 + me9, me15 + me13).normalize();
		planes[3].setComponents(me3 - me1, me7 - me5, me11 - me9, me15 - me13).normalize();
		planes[4].setComponents(me3 - me2, me7 - me6, me11 - me10, me15 - me14).normalize();
		planes[5].setComponents(me3 + me2, me7 + me6, me11 + me10, me15 + me14).normalize();
		return this;
	}
	intersectsObject(object) {
		const geometry = object.geometry;
		if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
		_sphere$1.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld);
		return this.intersectsSphere(_sphere$1);
	}
	intersectsSphere(sphere) {
		const planes = this.planes;
		const center = sphere.center;
		const negRadius = -sphere.radius;
		for (let i = 0; i < 6; i++) {
			const distance = planes[i].distanceToPoint(center);
			if (distance < negRadius) {
				return false;
			}
		}
		return true;
	}
}

class Matrix4 {
	constructor() {
		Matrix4.prototype.isMatrix4 = true;
		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	}
	set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
		const te = this.elements;
		te[0] = n11;
		te[4] = n12;
		te[8] = n13;
		te[12] = n14;
		te[1] = n21;
		te[5] = n22;
		te[9] = n23;
		te[13] = n24;
		te[2] = n31;
		te[6] = n32;
		te[10] = n33;
		te[14] = n34;
		te[3] = n41;
		te[7] = n42;
		te[11] = n43;
		te[15] = n44;
		return this;
	}
	copy(m) {
		const te = this.elements;
		const me = m.elements;
		te[0] = me[0];
		te[1] = me[1];
		te[2] = me[2];
		te[3] = me[3];
		te[4] = me[4];
		te[5] = me[5];
		te[6] = me[6];
		te[7] = me[7];
		te[8] = me[8];
		te[9] = me[9];
		te[10] = me[10];
		te[11] = me[11];
		te[12] = me[12];
		te[13] = me[13];
		te[14] = me[14];
		te[15] = me[15];
		return this;
	}
	makeRotationFromQuaternion(q) {
		return this.compose(_zero, q, _one);
	}
	lookAt(eye, target, up) {
		const te = this.elements;
		_z.subVectors(eye, target);
		if (_z.lengthSq() === 0) {
			_z.z = 1;
		}
		_z.normalize();
		_x.crossVectors(up, _z);
		if (_x.lengthSq() === 0) {
			if (Math.abs(up.z) === 1) {
				_z.x += 0.0001;
			} else {
				_z.z += 0.0001;
			}
			_z.normalize();
			_x.crossVectors(up, _z);
		}
		_x.normalize();
		_y.crossVectors(_z, _x);
		te[0] = _x.x;
		te[4] = _y.x;
		te[8] = _z.x;
		te[1] = _x.y;
		te[5] = _y.y;
		te[9] = _z.y;
		te[2] = _x.z;
		te[6] = _y.z;
		te[10] = _z.z;
		return this;
	}
	multiply(m) {
		return this.multiplyMatrices(this, m);
	}
	multiplyMatrices(a, b) {
		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;
		const a11 = ae[0],
			a12 = ae[4],
			a13 = ae[8],
			a14 = ae[12];
		const a21 = ae[1],
			a22 = ae[5],
			a23 = ae[9],
			a24 = ae[13];
		const a31 = ae[2],
			a32 = ae[6],
			a33 = ae[10],
			a34 = ae[14];
		const a41 = ae[3],
			a42 = ae[7],
			a43 = ae[11],
			a44 = ae[15];
		const b11 = be[0],
			b12 = be[4],
			b13 = be[8],
			b14 = be[12];
		const b21 = be[1],
			b22 = be[5],
			b23 = be[9],
			b24 = be[13];
		const b31 = be[2],
			b32 = be[6],
			b33 = be[10],
			b34 = be[14];
		const b41 = be[3],
			b42 = be[7],
			b43 = be[11],
			b44 = be[15];
		te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
		te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
		te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
		te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
		return this;
	}
	multiplyScalar(s) {
		const te = this.elements;
		te[0] *= s;
		te[4] *= s;
		te[8] *= s;
		te[12] *= s;
		te[1] *= s;
		te[5] *= s;
		te[9] *= s;
		te[13] *= s;
		te[2] *= s;
		te[6] *= s;
		te[10] *= s;
		te[14] *= s;
		te[3] *= s;
		te[7] *= s;
		te[11] *= s;
		te[15] *= s;
		return this;
	}
	determinant() {
		const te = this.elements;
		const n11 = te[0],
			n12 = te[4],
			n13 = te[8],
			n14 = te[12];
		const n21 = te[1],
			n22 = te[5],
			n23 = te[9],
			n24 = te[13];
		const n31 = te[2],
			n32 = te[6],
			n33 = te[10],
			n34 = te[14];
		const n41 = te[3],
			n42 = te[7],
			n43 = te[11],
			n44 = te[15];
		return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
	}
	invert() {
		const te = this.elements,
			n11 = te[0],
			n21 = te[1],
			n31 = te[2],
			n41 = te[3],
			n12 = te[4],
			n22 = te[5],
			n32 = te[6],
			n42 = te[7],
			n13 = te[8],
			n23 = te[9],
			n33 = te[10],
			n43 = te[11],
			n14 = te[12],
			n24 = te[13],
			n34 = te[14],
			n44 = te[15],
			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
		if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		const detInv = 1 / det;
		te[0] = t11 * detInv;
		te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
		te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
		te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
		te[4] = t12 * detInv;
		te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
		te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
		te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
		te[8] = t13 * detInv;
		te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
		te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
		te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
		te[12] = t14 * detInv;
		te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
		te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
		te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
		return this;
	}
	getMaxScaleOnAxis() {
		const te = this.elements;
		const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
		const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
		const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
		return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
	}
	makeTranslation(x, y, z) {
		this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
		return this;
	}
	compose(position, quaternion, scale) {
		const te = this.elements;
		const x = quaternion._x,
			y = quaternion._y,
			z = quaternion._z,
			w = quaternion._w;
		const x2 = x + x,
			y2 = y + y,
			z2 = z + z;
		const xx = x * x2,
			xy = x * y2,
			xz = x * z2;
		const yy = y * y2,
			yz = y * z2,
			zz = z * z2;
		const wx = w * x2,
			wy = w * y2,
			wz = w * z2;
		const sx = scale.x,
			sy = scale.y,
			sz = scale.z;
		te[0] = (1 - (yy + zz)) * sx;
		te[1] = (xy + wz) * sx;
		te[2] = (xz - wy) * sx;
		te[3] = 0;
		te[4] = (xy - wz) * sy;
		te[5] = (1 - (xx + zz)) * sy;
		te[6] = (yz + wx) * sy;
		te[7] = 0;
		te[8] = (xz + wy) * sz;
		te[9] = (yz - wx) * sz;
		te[10] = (1 - (xx + yy)) * sz;
		te[11] = 0;
		te[12] = position.x;
		te[13] = position.y;
		te[14] = position.z;
		te[15] = 1;
		return this;
	}
	makePerspective(left, right, top, bottom, near, far) {
		const te = this.elements;
		const x = 2 * near / (right - left);
		const y = 2 * near / (top - bottom);
		const a = (right + left) / (right - left);
		const b = (top + bottom) / (top - bottom);
		const c = -(far + near) / (far - near);
		const d = -2 * far * near / (far - near);
		te[0] = x;
		te[4] = 0;
		te[8] = a;
		te[12] = 0;
		te[1] = 0;
		te[5] = y;
		te[9] = b;
		te[13] = 0;
		te[2] = 0;
		te[6] = 0;
		te[10] = c;
		te[14] = d;
		te[3] = 0;
		te[7] = 0;
		te[11] = -1;
		te[15] = 0;
		return this;
	}
	makeOrthographic(left, right, top, bottom, near, far) {
		const te = this.elements;
		const w = 1.0 / (right - left);
		const h = 1.0 / (top - bottom);
		const p = 1.0 / (far - near);
		const x = (right + left) * w;
		const y = (top + bottom) * h;
		const z = (far + near) * p;
		te[0] = 2 * w;
		te[4] = 0;
		te[8] = 0;
		te[12] = -x;
		te[1] = 0;
		te[5] = 2 * h;
		te[9] = 0;
		te[13] = -y;
		te[2] = 0;
		te[6] = 0;
		te[10] = -2 * p;
		te[14] = -z;
		te[3] = 0;
		te[7] = 0;
		te[11] = 0;
		te[15] = 1;
		return this;
	}
	toArray(array = [], offset = 0) {
		const te = this.elements;
		array[offset] = te[0];
		array[offset + 1] = te[1];
		array[offset + 2] = te[2];
		array[offset + 3] = te[3];
		array[offset + 4] = te[4];
		array[offset + 5] = te[5];
		array[offset + 6] = te[6];
		array[offset + 7] = te[7];
		array[offset + 8] = te[8];
		array[offset + 9] = te[9];
		array[offset + 10] = te[10];
		array[offset + 11] = te[11];
		array[offset + 12] = te[12];
		array[offset + 13] = te[13];
		array[offset + 14] = te[14];
		array[offset + 15] = te[15];
		return array;
	}
}



const _zero = /*@__PURE__*/new Vector3(0, 0, 0);
const _one = /*@__PURE__*/new Vector3(1, 1, 1);
const _x = /*@__PURE__*/new Vector3();
const _y = /*@__PURE__*/new Vector3();
const _z = /*@__PURE__*/new Vector3();

class Vector2 {
	constructor(x = 0, y = 0) {
		Vector2.prototype.isVector2 = true;
		this.x = x;
		this.y = y;
	}
	set width(value) {
		this.x = value;
	}
	set height(value) {
		this.y = value;
	}
	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(v) {
		this.x = v.x;
		this.y = v.y;
		return this;
	}
	addScaledVector(v, s) {
		this.x += v.x * s;
		this.y += v.y * s;
		return this;
	}
	multiply(v) {
		this.x *= v.x;
		this.y *= v.y;
		return this;
	}
	fromBufferAttribute(attribute, index) {
		this.x = attribute.getX(index);
		this.y = attribute.getY(index);
		return this;
	}
	*[Symbol.iterator]() {
		yield this.x;
		yield this.y;
	}
}

class Vector4 {
	constructor(x = 0, y = 0, z = 0, w = 1) {
		Vector4.prototype.isVector4 = true;
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
	set(x, y, z, w) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		return this;
	}
	copy(v) {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = v.w !== undefined ? v.w : 1;
		return this;
	}
	multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;
		return this;
	}
	floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.z = Math.floor(this.z);
		this.w = Math.floor(this.w);
		return this;
	}
	equals(v) {
		return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
	}
	fromArray(array, offset = 0) {
		this.x = array[offset];
		this.y = array[offset + 1];
		this.z = array[offset + 2];
		this.w = array[offset + 3];
		return this;
	}
	*[Symbol.iterator]() {
		yield this.x;
		yield this.y;
		yield this.z;
		yield this.w;
	}
}

function WebGLAttributes(gl, capabilities) {
	const isWebGL2 = capabilities.isWebGL2;
	const buffers = new WeakMap();
	function createBuffer(attribute, bufferType) {
		const array = attribute.array;
		const usage = attribute.usage;
		const buffer = gl.createBuffer();
		gl.bindBuffer(bufferType, buffer);
		gl.bufferData(bufferType, array, usage);
		attribute.onUploadCallback();
		let type;
		if (array instanceof Float32Array) {
			type = gl.FLOAT;
		} else if (array instanceof Uint16Array) {
			if (attribute.isFloat16BufferAttribute) {
				if (isWebGL2) {
					type = gl.HALF_FLOAT;
				} else {
					throw new Error('THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.');
				}
			} else {
				type = gl.UNSIGNED_SHORT;
			}
		} else if (array instanceof Int16Array) {
			type = gl.SHORT;
		} else if (array instanceof Uint32Array) {
			type = gl.UNSIGNED_INT;
		} else if (array instanceof Int32Array) {
			type = gl.INT;
		} else if (array instanceof Int8Array) {
			type = gl.BYTE;
		} else if (array instanceof Uint8Array) {
			type = gl.UNSIGNED_BYTE;
		} else if (array instanceof Uint8ClampedArray) {
			type = gl.UNSIGNED_BYTE;
		} else {
			throw new Error('THREE.WebGLAttributes: Unsupported buffer data format: ' + array);
		}
		return {
			buffer: buffer,
			type: type,
			bytesPerElement: array.BYTES_PER_ELEMENT,
			version: attribute.version
		};
	}
	function updateBuffer(buffer, attribute, bufferType) {
		const array = attribute.array;
		const updateRange = attribute.updateRange;
		gl.bindBuffer(bufferType, buffer);
		if (updateRange.count === -1) {
			gl.bufferSubData(bufferType, 0, array);
		} else {
			if (isWebGL2) {
				gl.bufferSubData(bufferType, updateRange.offset * array.BYTES_PER_ELEMENT, array, updateRange.offset, updateRange.count);
			} else {
				gl.bufferSubData(bufferType, updateRange.offset * array.BYTES_PER_ELEMENT, array.subarray(updateRange.offset, updateRange.offset + updateRange.count));
			}
			updateRange.count = -1;
		}
		attribute.onUploadCallback();
	}
	function get(attribute) {
		if (attribute.isInterleavedBufferAttribute) attribute = attribute.data;
		return buffers.get(attribute);
	}
	function remove(attribute) {
		if (attribute.isInterleavedBufferAttribute) attribute = attribute.data;
		const data = buffers.get(attribute);
		if (data) {
			gl.deleteBuffer(data.buffer);
			buffers.delete(attribute);
		}
	}
	function update(attribute, bufferType) {
		if (attribute.isGLBufferAttribute) {
			const cached = buffers.get(attribute);
			if (!cached || cached.version < attribute.version) {
				buffers.set(attribute, {
					buffer: attribute.buffer,
					type: attribute.type,
					bytesPerElement: attribute.elementSize,
					version: attribute.version
				});
			}
			return;
		}
		if (attribute.isInterleavedBufferAttribute) attribute = attribute.data;
		const data = buffers.get(attribute);
		if (data === undefined) {
			buffers.set(attribute, createBuffer(attribute, bufferType));
		} else if (data.version < attribute.version) {
			updateBuffer(data.buffer, attribute, bufferType);
			data.version = attribute.version;
		}
	}
	return {
		get: get,
		remove: remove,
		update: update
	};
}

function WebGLBindingStates(gl, extensions, attributes, capabilities) {
	const maxVertexAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
	const extension = capabilities.isWebGL2 ? null : extensions.get('OES_vertex_array_object');
	const vaoAvailable = capabilities.isWebGL2 || extension !== null;
	const bindingStates = {};
	const defaultState = createBindingState(null);
	let currentState = defaultState;
	let forceUpdate = false;
	function setup(object, material, program, geometry, index) {
		let updateBuffers = false;
		if (vaoAvailable) {
			const state = getBindingState(geometry, program, material);
			if (currentState !== state) {
				currentState = state;
				bindVertexArrayObject(currentState.object);
			}
			updateBuffers = needsUpdate(object, geometry, program, index);
			if (updateBuffers) saveCache(object, geometry, program, index);
		} else {
			const wireframe = material.wireframe === true;
			if (currentState.geometry !== geometry.id || currentState.program !== program.id || currentState.wireframe !== wireframe) {
				currentState.geometry = geometry.id;
				currentState.program = program.id;
				currentState.wireframe = wireframe;
				updateBuffers = true;
			}
		}
		if (index !== null) {
			attributes.update(index, gl.ELEMENT_ARRAY_BUFFER);
		}
		if (updateBuffers || forceUpdate) {
			forceUpdate = false;
			setupVertexAttributes(object, material, program, geometry);
			if (index !== null) {
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, attributes.get(index).buffer);
			}
		}
	}
	function createVertexArrayObject() {
		if (capabilities.isWebGL2) return gl.createVertexArray();
		return extension.createVertexArrayOES();
	}
	function bindVertexArrayObject(vao) {
		if (capabilities.isWebGL2) return gl.bindVertexArray(vao);
		return extension.bindVertexArrayOES(vao);
	}
	function deleteVertexArrayObject(vao) {
		if (capabilities.isWebGL2) return gl.deleteVertexArray(vao);
		return extension.deleteVertexArrayOES(vao);
	}
	function getBindingState(geometry, program, material) {
		const wireframe = material.wireframe === true;
		let programMap = bindingStates[geometry.id];
		if (programMap === undefined) {
			programMap = {};
			bindingStates[geometry.id] = programMap;
		}
		let stateMap = programMap[program.id];
		if (stateMap === undefined) {
			stateMap = {};
			programMap[program.id] = stateMap;
		}
		let state = stateMap[wireframe];
		if (state === undefined) {
			state = createBindingState(createVertexArrayObject());
			stateMap[wireframe] = state;
		}
		return state;
	}
	function createBindingState(vao) {
		const newAttributes = [];
		const enabledAttributes = [];
		const attributeDivisors = [];
		for (let i = 0; i < maxVertexAttributes; i++) {
			newAttributes[i] = 0;
			enabledAttributes[i] = 0;
			attributeDivisors[i] = 0;
		}
		return {
			geometry: null,
			program: null,
			wireframe: false,
			newAttributes: newAttributes,
			enabledAttributes: enabledAttributes,
			attributeDivisors: attributeDivisors,
			object: vao,
			attributes: {},
			index: null
		};
	}
	function needsUpdate(object, geometry, program, index) {
		const cachedAttributes = currentState.attributes;
		const geometryAttributes = geometry.attributes;
		let attributesNum = 0;
		const programAttributes = program.getAttributes();
		for (const name in programAttributes) {
			const programAttribute = programAttributes[name];
			if (programAttribute.location >= 0) {
				const cachedAttribute = cachedAttributes[name];
				let geometryAttribute = geometryAttributes[name];
				if (geometryAttribute === undefined) {
					if (name === 'instanceMatrix' && object.instanceMatrix) geometryAttribute = object.instanceMatrix;
					if (name === 'instanceColor' && object.instanceColor) geometryAttribute = object.instanceColor;
				}
				if (cachedAttribute === undefined) return true;
				if (cachedAttribute.attribute !== geometryAttribute) return true;
				if (geometryAttribute && cachedAttribute.data !== geometryAttribute.data) return true;
				attributesNum++;
			}
		}
		if (currentState.attributesNum !== attributesNum) return true;
		if (currentState.index !== index) return true;
		return false;
	}
	function saveCache(object, geometry, program, index) {
		const cache = {};
		const attributes = geometry.attributes;
		let attributesNum = 0;
		const programAttributes = program.getAttributes();
		for (const name in programAttributes) {
			const programAttribute = programAttributes[name];
			if (programAttribute.location >= 0) {
				let attribute = attributes[name];
				if (attribute === undefined) {
					if (name === 'instanceMatrix' && object.instanceMatrix) attribute = object.instanceMatrix;
					if (name === 'instanceColor' && object.instanceColor) attribute = object.instanceColor;
				}
				const data = {};
				data.attribute = attribute;
				if (attribute && attribute.data) {
					data.data = attribute.data;
				}
				cache[name] = data;
				attributesNum++;
			}
		}
		currentState.attributes = cache;
		currentState.attributesNum = attributesNum;
		currentState.index = index;
	}
	function initAttributes() {
		const newAttributes = currentState.newAttributes;
		for (let i = 0, il = newAttributes.length; i < il; i++) {
			newAttributes[i] = 0;
		}
	}
	function enableAttribute(attribute) {
		enableAttributeAndDivisor(attribute, 0);
	}
	function enableAttributeAndDivisor(attribute, meshPerAttribute) {
		const newAttributes = currentState.newAttributes;
		const enabledAttributes = currentState.enabledAttributes;
		const attributeDivisors = currentState.attributeDivisors;
		newAttributes[attribute] = 1;
		if (enabledAttributes[attribute] === 0) {
			gl.enableVertexAttribArray(attribute);
			enabledAttributes[attribute] = 1;
		}
		if (attributeDivisors[attribute] !== meshPerAttribute) {
			const extension = capabilities.isWebGL2 ? gl : extensions.get('ANGLE_instanced_arrays');
			extension[capabilities.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'](attribute, meshPerAttribute);
			attributeDivisors[attribute] = meshPerAttribute;
		}
	}
	function disableUnusedAttributes() {
		const newAttributes = currentState.newAttributes;
		const enabledAttributes = currentState.enabledAttributes;
		for (let i = 0, il = enabledAttributes.length; i < il; i++) {
			if (enabledAttributes[i] !== newAttributes[i]) {
				gl.disableVertexAttribArray(i);
				enabledAttributes[i] = 0;
			}
		}
	}
	function vertexAttribPointer(index, size, type, normalized, stride, offset) {
		if (capabilities.isWebGL2 === true && (type === gl.INT || type === gl.UNSIGNED_INT)) {
			gl.vertexAttribIPointer(index, size, type, stride, offset);
		} else {
			gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
		}
	}
	function setupVertexAttributes(object, material, program, geometry) {
		if (capabilities.isWebGL2 === false && (object.isInstancedMesh || geometry.isInstancedBufferGeometry)) {
			if (extensions.get('ANGLE_instanced_arrays') === null) return;
		}
		initAttributes();
		const geometryAttributes = geometry.attributes;
		const programAttributes = program.getAttributes();
		const materialDefaultAttributeValues = material.defaultAttributeValues;
		for (const name in programAttributes) {
			const programAttribute = programAttributes[name];
			if (programAttribute.location >= 0) {
				let geometryAttribute = geometryAttributes[name];
				if (geometryAttribute === undefined) {
					if (name === 'instanceMatrix' && object.instanceMatrix) geometryAttribute = object.instanceMatrix;
					if (name === 'instanceColor' && object.instanceColor) geometryAttribute = object.instanceColor;
				}
				if (geometryAttribute !== undefined) {
					const normalized = geometryAttribute.normalized;
					const size = geometryAttribute.itemSize;
					const attribute = attributes.get(geometryAttribute);
					if (attribute === undefined) continue;
					const buffer = attribute.buffer;
					const type = attribute.type;
					const bytesPerElement = attribute.bytesPerElement;
					if (geometryAttribute.isInterleavedBufferAttribute) {
						const data = geometryAttribute.data;
						const stride = data.stride;
						const offset = geometryAttribute.offset;
						if (data.isInstancedInterleavedBuffer) {
							for (let i = 0; i < programAttribute.locationSize; i++) {
								enableAttributeAndDivisor(programAttribute.location + i, data.meshPerAttribute);
							}
							if (object.isInstancedMesh !== true && geometry._maxInstanceCount === undefined) {
								geometry._maxInstanceCount = data.meshPerAttribute * data.count;
							}
						} else {
							for (let i = 0; i < programAttribute.locationSize; i++) {
								enableAttribute(programAttribute.location + i);
							}
						}
						gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
						for (let i = 0; i < programAttribute.locationSize; i++) {
							vertexAttribPointer(programAttribute.location + i, size / programAttribute.locationSize, type, normalized, stride * bytesPerElement, (offset + size / programAttribute.locationSize * i) * bytesPerElement);
						}
					} else {
						if (geometryAttribute.isInstancedBufferAttribute) {
							for (let i = 0; i < programAttribute.locationSize; i++) {
								enableAttributeAndDivisor(programAttribute.location + i, geometryAttribute.meshPerAttribute);
							}
							if (object.isInstancedMesh !== true && geometry._maxInstanceCount === undefined) {
								geometry._maxInstanceCount = geometryAttribute.meshPerAttribute * geometryAttribute.count;
							}
						} else {
							for (let i = 0; i < programAttribute.locationSize; i++) {
								enableAttribute(programAttribute.location + i);
							}
						}
						gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
						for (let i = 0; i < programAttribute.locationSize; i++) {
							vertexAttribPointer(programAttribute.location + i, size / programAttribute.locationSize, type, normalized, size * bytesPerElement, size / programAttribute.locationSize * i * bytesPerElement);
						}
					}
				} else if (materialDefaultAttributeValues !== undefined) {
					const value = materialDefaultAttributeValues[name];
					if (value !== undefined) {
						switch (value.length) {
							case 2:
								gl.vertexAttrib2fv(programAttribute.location, value);
								break;
							case 3:
								gl.vertexAttrib3fv(programAttribute.location, value);
								break;
							case 4:
								gl.vertexAttrib4fv(programAttribute.location, value);
								break;
							default:
								gl.vertexAttrib1fv(programAttribute.location, value);
						}
					}
				}
			}
		}
		disableUnusedAttributes();
	}
	function dispose() {
		reset();
		for (const geometryId in bindingStates) {
			const programMap = bindingStates[geometryId];
			for (const programId in programMap) {
				const stateMap = programMap[programId];
				for (const wireframe in stateMap) {
					deleteVertexArrayObject(stateMap[wireframe].object);
					delete stateMap[wireframe];
				}
				delete programMap[programId];
			}
			delete bindingStates[geometryId];
		}
	}
	function releaseStatesOfGeometry(geometry) {
		if (bindingStates[geometry.id] === undefined) return;
		const programMap = bindingStates[geometry.id];
		for (const programId in programMap) {
			const stateMap = programMap[programId];
			for (const wireframe in stateMap) {
				deleteVertexArrayObject(stateMap[wireframe].object);
				delete stateMap[wireframe];
			}
			delete programMap[programId];
		}
		delete bindingStates[geometry.id];
	}
	function releaseStatesOfProgram(program) {
		for (const geometryId in bindingStates) {
			const programMap = bindingStates[geometryId];
			if (programMap[program.id] === undefined) continue;
			const stateMap = programMap[program.id];
			for (const wireframe in stateMap) {
				deleteVertexArrayObject(stateMap[wireframe].object);
				delete stateMap[wireframe];
			}
			delete programMap[program.id];
		}
	}
	function reset() {
		resetDefaultState();
		forceUpdate = true;
		if (currentState === defaultState) return;
		currentState = defaultState;
		bindVertexArrayObject(currentState.object);
	}
	function resetDefaultState() {
		defaultState.geometry = null;
		defaultState.program = null;
		defaultState.wireframe = false;
	}
	return {
		setup: setup,
		reset: reset,
		resetDefaultState: resetDefaultState,
		dispose: dispose,
		releaseStatesOfGeometry: releaseStatesOfGeometry,
		releaseStatesOfProgram: releaseStatesOfProgram
	};
}

function WebGLBufferRenderer(gl, extensions, info, capabilities) {
	const isWebGL2 = capabilities.isWebGL2;
	let mode;
	function setMode(value) {
		mode = value;
	}
	function render(start, count) {
		gl.drawArrays(mode, start, count);
		info.update(count, mode, 1);
	}
	function renderInstances(start, count, primcount) {
		if (primcount === 0) return;
		let extension, methodName;
		if (isWebGL2) {
			extension = gl;
			methodName = 'drawArraysInstanced';
		} else {
			extension = extensions.get('ANGLE_instanced_arrays');
			methodName = 'drawArraysInstancedANGLE';
			if (extension === null) {
				console.error('THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
				return;
			}
		}
		extension[methodName](mode, start, count, primcount);
		info.update(count, mode, primcount);
	}
	this.setMode = setMode;
	this.render = render;
	this.renderInstances = renderInstances;
}

function WebGLCapabilities(gl, extensions, parameters) {
	let maxAnisotropy;
	function getMaxAnisotropy() {
		if (maxAnisotropy !== undefined) return maxAnisotropy;
		if (extensions.has('EXT_texture_filter_anisotropic') === true) {
			const extension = extensions.get('EXT_texture_filter_anisotropic');
			maxAnisotropy = gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else {
			maxAnisotropy = 0;
		}
		return maxAnisotropy;
	}
	function getMaxPrecision(precision) {
		if (precision === 'highp') {
			if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0) {
				return 'highp';
			}
			precision = 'mediump';
		}
		if (precision === 'mediump') {
			if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision > 0) {
				return 'mediump';
			}
		}
		return 'lowp';
	}
	const isWebGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext !== 'undefined' && gl instanceof WebGL2ComputeRenderingContext;
	let precision = parameters.precision !== undefined ? parameters.precision : 'highp';
	const maxPrecision = getMaxPrecision(precision);
	if (maxPrecision !== precision) {
		console.warn('THREE.WebGLRenderer:', precision, 'not supported, using', maxPrecision, 'instead.');
		precision = maxPrecision;
	}
	const drawBuffers = isWebGL2 || extensions.has('WEBGL_draw_buffers');
	const logarithmicDepthBuffer = parameters.logarithmicDepthBuffer === true;
	const maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
	const maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
	const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
	const maxCubemapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
	const maxAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
	const maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
	const maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
	const maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
	const vertexTextures = maxVertexTextures > 0;
	const floatFragmentTextures = isWebGL2 || extensions.has('OES_texture_float');
	const floatVertexTextures = vertexTextures && floatFragmentTextures;
	const maxSamples = isWebGL2 ? gl.getParameter(gl.MAX_SAMPLES) : 0;
	return {
		isWebGL2: isWebGL2,
		drawBuffers: drawBuffers,
		getMaxAnisotropy: getMaxAnisotropy,
		getMaxPrecision: getMaxPrecision,
		precision: precision,
		logarithmicDepthBuffer: logarithmicDepthBuffer,
		maxTextures: maxTextures,
		maxVertexTextures: maxVertexTextures,
		maxTextureSize: maxTextureSize,
		maxCubemapSize: maxCubemapSize,
		maxAttributes: maxAttributes,
		maxVertexUniforms: maxVertexUniforms,
		maxVaryings: maxVaryings,
		maxFragmentUniforms: maxFragmentUniforms,
		vertexTextures: vertexTextures,
		floatFragmentTextures: floatFragmentTextures,
		floatVertexTextures: floatVertexTextures,
		maxSamples: maxSamples
	};
}

function WebGLExtensions(gl) {
	const extensions = {};
	function getExtension(name) {
		if (extensions[name] !== undefined) {
			return extensions[name];
		}
		let extension;
		switch (name) {
			case 'WEBGL_depth_texture':
				extension = gl.getExtension('WEBGL_depth_texture') || gl.getExtension('MOZ_WEBGL_depth_texture') || gl.getExtension('WEBKIT_WEBGL_depth_texture');
				break;
			case 'EXT_texture_filter_anisotropic':
				extension = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
				break;
			case 'WEBGL_compressed_texture_s3tc':
				extension = gl.getExtension('WEBGL_compressed_texture_s3tc') || gl.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
				break;
			case 'WEBGL_compressed_texture_pvrtc':
				extension = gl.getExtension('WEBGL_compressed_texture_pvrtc') || gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
				break;
			default:
				extension = gl.getExtension(name);
		}
		extensions[name] = extension;
		return extension;
	}
	return {
		has: function (name) {
			return getExtension(name) !== null;
		},
		init: function (capabilities) {
			if (capabilities.isWebGL2) {
				getExtension('EXT_color_buffer_float');
			} else {
				getExtension('WEBGL_depth_texture');
				getExtension('OES_texture_float');
				getExtension('OES_texture_half_float');
				getExtension('OES_texture_half_float_linear');
				getExtension('OES_standard_derivatives');
				getExtension('OES_element_index_uint');
				getExtension('OES_vertex_array_object');
				getExtension('ANGLE_instanced_arrays');
			}
			getExtension('OES_texture_float_linear');
			getExtension('EXT_color_buffer_half_float');
			getExtension('WEBGL_multisampled_render_to_texture');
		},
		get: function (name) {
			const extension = getExtension(name);
			if (extension === null) {
				console.warn('THREE.WebGLRenderer: ' + name + ' extension not supported.');
			}
			return extension;
		}
	};
}

const _vector$4 = /*@__PURE__*/new Vector3();


class BufferAttribute {
	constructor(array, itemSize, normalized = false) {
		if (Array.isArray(array)) {
			throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');
		}
		this.name = '';
		this.array = array;
		this.itemSize = itemSize;
		this.count = array !== undefined ? array.length / itemSize : 0;
		this.normalized = normalized;
		this.usage = StaticDrawUsage;
		this.updateRange = {
			offset: 0,
			count: -1
		};
		this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(value) {
		if (value === true) this.version++;
	}
	setUsage(value) {
		this.usage = value;
		return this;
	}
	applyMatrix4(m) {
		for (let i = 0, l = this.count; i < l; i++) {
			_vector$4.fromBufferAttribute(this, i);
			_vector$4.applyMatrix4(m);
			this.setXYZ(i, _vector$4.x, _vector$4.y, _vector$4.z);
		}
		return this;
	}
	applyNormalMatrix(m) {
		for (let i = 0, l = this.count; i < l; i++) {
			_vector$4.fromBufferAttribute(this, i);
			_vector$4.applyNormalMatrix(m);
			this.setXYZ(i, _vector$4.x, _vector$4.y, _vector$4.z);
		}
		return this;
	}
	getX(index) {
		let x = this.array[index * this.itemSize];
		if (this.normalized) x = denormalize(x, this.array);
		return x;
	}
	setX(index, x) {
		if (this.normalized) x = normalize(x, this.array);
		this.array[index * this.itemSize] = x;
		return this;
	}
	getY(index) {
		let y = this.array[index * this.itemSize + 1];
		if (this.normalized) y = denormalize(y, this.array);
		return y;
	}
	setY(index, y) {
		if (this.normalized) y = normalize(y, this.array);
		this.array[index * this.itemSize + 1] = y;
		return this;
	}
	getZ(index) {
		let z = this.array[index * this.itemSize + 2];
		if (this.normalized) z = denormalize(z, this.array);
		return z;
	}
	setZ(index, z) {
		if (this.normalized) z = normalize(z, this.array);
		this.array[index * this.itemSize + 2] = z;
		return this;
	}
	setXY(index, x, y) {
		index *= this.itemSize;
		if (this.normalized) {
			x = normalize(x, this.array);
			y = normalize(y, this.array);
		}
		this.array[index + 0] = x;
		this.array[index + 1] = y;
		return this;
	}
	setXYZ(index, x, y, z) {
		index *= this.itemSize;
		if (this.normalized) {
			x = normalize(x, this.array);
			y = normalize(y, this.array);
			z = normalize(z, this.array);
		}
		this.array[index + 0] = x;
		this.array[index + 1] = y;
		this.array[index + 2] = z;
		return this;
	}
}
class Uint16BufferAttribute extends BufferAttribute {
	constructor(array, itemSize, normalized) {
		super(new Uint16Array(array), itemSize, normalized);
	}
}
class Uint32BufferAttribute extends BufferAttribute {
	constructor(array, itemSize, normalized) {
		super(new Uint32Array(array), itemSize, normalized);
	}
}
class Float32BufferAttribute extends BufferAttribute {
	constructor(array, itemSize, normalized) {
		super(new Float32Array(array), itemSize, normalized);
	}
}

function arrayNeedsUint32(array) {
	for (let i = array.length - 1; i >= 0; --i) {
		if (array[i] >= 65535) return true;
	}
	return false;
}
function createElementNS(name) {
	return document.createElementNS('http://www.w3.org/1999/xhtml', name);
}

function WebGLGeometries(gl, attributes, info, bindingStates) {
	const geometries = {};
	const wireframeAttributes = new WeakMap();
	function onGeometryDispose(event) {
		const geometry = event.target;
		if (geometry.index !== null) {
			attributes.remove(geometry.index);
		}
		for (const name in geometry.attributes) {
			attributes.remove(geometry.attributes[name]);
		}
		geometry.removeEventListener('dispose', onGeometryDispose);
		delete geometries[geometry.id];
		const attribute = wireframeAttributes.get(geometry);
		if (attribute) {
			attributes.remove(attribute);
			wireframeAttributes.delete(geometry);
		}
		bindingStates.releaseStatesOfGeometry(geometry);
		if (geometry.isInstancedBufferGeometry === true) {
			delete geometry._maxInstanceCount;
		}
		info.memory.geometries--;
	}
	function get(object, geometry) {
		if (geometries[geometry.id] === true) return geometry;
		geometry.addEventListener('dispose', onGeometryDispose);
		geometries[geometry.id] = true;
		info.memory.geometries++;
		return geometry;
	}
	function update(geometry) {
		const geometryAttributes = geometry.attributes;
		for (const name in geometryAttributes) {
			attributes.update(geometryAttributes[name], gl.ARRAY_BUFFER);
		}
	}
	function updateWireframeAttribute(geometry) {
		const indices = [];
		const geometryIndex = geometry.index;
		const geometryPosition = geometry.attributes.position;
		let version = 0;
		if (geometryIndex !== null) {
			const array = geometryIndex.array;
			version = geometryIndex.version;
			for (let i = 0, l = array.length; i < l; i += 3) {
				const a = array[i + 0];
				const b = array[i + 1];
				const c = array[i + 2];
				indices.push(a, b, b, c, c, a);
			}
		} else {
			const array = geometryPosition.array;
			version = geometryPosition.version;
			for (let i = 0, l = array.length / 3 - 1; i < l; i += 3) {
				const a = i + 0;
				const b = i + 1;
				const c = i + 2;
				indices.push(a, b, b, c, c, a);
			}
		}
		const attribute = new (arrayNeedsUint32(indices) ? Uint32BufferAttribute : Uint16BufferAttribute)(indices, 1);
		attribute.version = version;
		const previousAttribute = wireframeAttributes.get(geometry);
		if (previousAttribute) attributes.remove(previousAttribute);
		wireframeAttributes.set(geometry, attribute);
	}
	function getWireframeAttribute(geometry) {
		const currentAttribute = wireframeAttributes.get(geometry);
		if (currentAttribute) {
			const geometryIndex = geometry.index;
			if (geometryIndex !== null) {
				if (currentAttribute.version < geometryIndex.version) {
					updateWireframeAttribute(geometry);
				}
			}
		} else {
			updateWireframeAttribute(geometry);
		}
		return wireframeAttributes.get(geometry);
	}
	return {
		get: get,
		update: update,
		getWireframeAttribute: getWireframeAttribute
	};
}

function WebGLIndexedBufferRenderer(gl, extensions, info, capabilities) {
	const isWebGL2 = capabilities.isWebGL2;
	let mode;
	function setMode(value) {
		mode = value;
	}
	let type, bytesPerElement;
	function setIndex(value) {
		type = value.type;
		bytesPerElement = value.bytesPerElement;
	}
	function render(start, count) {
		gl.drawElements(mode, count, type, start * bytesPerElement);
		info.update(count, mode, 1);
	}
	function renderInstances(start, count, primcount) {
		if (primcount === 0) return;
		let extension, methodName;
		if (isWebGL2) {
			extension = gl;
			methodName = 'drawElementsInstanced';
		} else {
			extension = extensions.get('ANGLE_instanced_arrays');
			methodName = 'drawElementsInstancedANGLE';
			if (extension === null) {
				console.error('THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
				return;
			}
		}
		extension[methodName](mode, count, type, start * bytesPerElement, primcount);
		info.update(count, mode, primcount);
	}
	this.setMode = setMode;
	this.setIndex = setIndex;
	this.render = render;
	this.renderInstances = renderInstances;
}

function WebGLInfo(gl) {
	const memory = {
		geometries: 0,
		textures: 0
	};
	const render = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function update(count, mode, instanceCount) {
		render.calls++;
		switch (mode) {
			case gl.TRIANGLES:
				render.triangles += instanceCount * (count / 3);
				break;
			case gl.LINES:
				render.lines += instanceCount * (count / 2);
				break;
			case gl.LINE_STRIP:
				render.lines += instanceCount * (count - 1);
				break;
			case gl.LINE_LOOP:
				render.lines += instanceCount * count;
				break;
			case gl.POINTS:
				render.points += instanceCount * count;
				break;
			default:
				console.error('THREE.WebGLInfo: Unknown draw mode:', mode);
				break;
		}
	}
	function reset() {
		render.frame++;
		render.calls = 0;
		render.triangles = 0;
		render.points = 0;
		render.lines = 0;
	}
	return {
		memory: memory,
		render: render,
		programs: null,
		autoReset: true,
		reset: reset,
		update: update
	};
}

function WebGLObjects(gl, geometries, attributes, info) {
	let updateMap = new WeakMap();
	function update(object) {
		const frame = info.render.frame;
		const geometry = object.geometry;
		const buffergeometry = geometries.get(object, geometry);
		if (updateMap.get(buffergeometry) !== frame) {
			geometries.update(buffergeometry);
			updateMap.set(buffergeometry, frame);
		}
		if (object.isInstancedMesh) {
			if (object.hasEventListener('dispose', onInstancedMeshDispose) === false) {
				object.addEventListener('dispose', onInstancedMeshDispose);
			}
			attributes.update(object.instanceMatrix, gl.ARRAY_BUFFER);
			if (object.instanceColor !== null) {
				attributes.update(object.instanceColor, gl.ARRAY_BUFFER);
			}
		}
		return buffergeometry;
	}
	function dispose() {
		updateMap = new WeakMap();
	}
	function onInstancedMeshDispose(event) {
		const instancedMesh = event.target;
		instancedMesh.removeEventListener('dispose', onInstancedMeshDispose);
		attributes.remove(instancedMesh.instanceMatrix);
		if (instancedMesh.instanceColor !== null) attributes.remove(instancedMesh.instanceColor);
	}
	return {
		update: update,
		dispose: dispose
	};
}

class Layers {
	constructor() {
		this.mask = 1 | 0;
	}
	enable(channel) {
		this.mask |= 1 << channel | 0;
	}
	disableAll() {
		this.mask = 0;
	}
	test(layers) {
		return (this.mask & layers.mask) !== 0;
	}
}

class EventDispatcher {
	addEventListener(type, listener) {
		if (this._listeners === undefined) this._listeners = {};
		const listeners = this._listeners;
		if (listeners[type] === undefined) {
			listeners[type] = [];
		}
		if (listeners[type].indexOf(listener) === -1) {
			listeners[type].push(listener);
		}
	}
	hasEventListener(type, listener) {
		if (this._listeners === undefined) return false;
		const listeners = this._listeners;
		return listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1;
	}
	removeEventListener(type, listener) {
		if (this._listeners === undefined) return;
		const listeners = this._listeners;
		const listenerArray = listeners[type];
		if (listenerArray !== undefined) {
			const index = listenerArray.indexOf(listener);
			if (index !== -1) {
				listenerArray.splice(index, 1);
			}
		}
	}
	dispatchEvent(event) {
		if (this._listeners === undefined) return;
		const listeners = this._listeners;
		const listenerArray = listeners[event.type];
		if (listenerArray !== undefined) {
			event.target = this;
			const array = listenerArray.slice(0);
			for (let i = 0, l = array.length; i < l; i++) {
				array[i].call(this, event);
			}
			event.target = null;
		}
	}
}

class Matrix3 {
	constructor() {
		Matrix3.prototype.isMatrix3 = true;
		this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
	}
	set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
		const te = this.elements;
		te[0] = n11;
		te[1] = n21;
		te[2] = n31;
		te[3] = n12;
		te[4] = n22;
		te[5] = n32;
		te[6] = n13;
		te[7] = n23;
		te[8] = n33;
		return this;
	}
	copy(m) {
		const te = this.elements;
		const me = m.elements;
		te[0] = me[0];
		te[1] = me[1];
		te[2] = me[2];
		te[3] = me[3];
		te[4] = me[4];
		te[5] = me[5];
		te[6] = me[6];
		te[7] = me[7];
		te[8] = me[8];
		return this;
	}
	setFromMatrix4(m) {
		const me = m.elements;
		this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);
		return this;
	}
	invert() {
		const te = this.elements,
			n11 = te[0],
			n21 = te[1],
			n31 = te[2],
			n12 = te[3],
			n22 = te[4],
			n32 = te[5],
			n13 = te[6],
			n23 = te[7],
			n33 = te[8],
			t11 = n33 * n22 - n32 * n23,
			t12 = n32 * n13 - n33 * n12,
			t13 = n23 * n12 - n22 * n13,
			det = n11 * t11 + n21 * t12 + n31 * t13;
		if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		const detInv = 1 / det;
		te[0] = t11 * detInv;
		te[1] = (n31 * n23 - n33 * n21) * detInv;
		te[2] = (n32 * n21 - n31 * n22) * detInv;
		te[3] = t12 * detInv;
		te[4] = (n33 * n11 - n31 * n13) * detInv;
		te[5] = (n31 * n12 - n32 * n11) * detInv;
		te[6] = t13 * detInv;
		te[7] = (n21 * n13 - n23 * n11) * detInv;
		te[8] = (n22 * n11 - n21 * n12) * detInv;
		return this;
	}
	transpose() {
		let tmp;
		const m = this.elements;
		tmp = m[1];
		m[1] = m[3];
		m[3] = tmp;
		tmp = m[2];
		m[2] = m[6];
		m[6] = tmp;
		tmp = m[5];
		m[5] = m[7];
		m[7] = tmp;
		return this;
	}
	getNormalMatrix(matrix4) {
		return this.setFromMatrix4(matrix4).invert().transpose();
	}
	setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
		const c = Math.cos(rotation);
		const s = Math.sin(rotation);
		this.set(sx * c, sx * s, -sx * (c * cx + s * cy) + cx + tx, -sy * s, sy * c, -sy * (-s * cx + c * cy) + cy + ty, 0, 0, 1);
		return this;
	}
	fromArray(array, offset = 0) {
		for (let i = 0; i < 9; i++) {
			this.elements[i] = array[i + offset];
		}
		return this;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}

class Source {
	constructor(data = null) {
		this.uuid = generateUUID();
		this.data = data;
		this.version = 0;
	}
	set needsUpdate(value) {
		if (value === true) this.version++;
	}
}

let textureId = 0;
class Texture extends EventDispatcher {
	constructor(image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, encoding = LinearEncoding) {
		super();
		this.isTexture = true;
		Object.defineProperty(this, 'id', {
			value: textureId++
		});
		this.uuid = generateUUID();
		this.name = '';
		this.source = new Source(image);
		this.mipmaps = [];
		this.mapping = mapping;
		this.wrapS = wrapS;
		this.wrapT = wrapT;
		this.magFilter = magFilter;
		this.minFilter = minFilter;
		this.anisotropy = anisotropy;
		this.format = format;
		this.internalFormat = null;
		this.type = type;
		this.offset = new Vector2(0, 0);
		this.repeat = new Vector2(1, 1);
		this.center = new Vector2(0, 0);
		this.rotation = 0;
		this.matrixAutoUpdate = true;
		this.matrix = new Matrix3();
		this.generateMipmaps = true;
		this.premultiplyAlpha = false;
		this.flipY = true;
		this.unpackAlignment = 4;
		this.encoding = encoding;
		this.userData = {};
		this.version = 0;
		this.onUpdate = null;
		this.isRenderTargetTexture = false;
	}
	get image() {
		return this.source.data;
	}
	set image(value) {
		this.source.data = value;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	dispose() {
		this.dispatchEvent({
			type: 'dispose'
		});
	}
	set needsUpdate(value) {
		if (value === true) {
			this.version++;
			this.source.needsUpdate = true;
		}
	}
}
Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;

class DataArrayTexture extends Texture {
	constructor(data = null, width = 1, height = 1, depth = 1) {
		super(null);
		this.isDataArrayTexture = true;
		this.image = {
			data,
			width,
			height,
			depth
		};
		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;
		this.wrapR = ClampToEdgeWrapping;
		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;
	}
}

class Data3DTexture extends Texture {
	constructor(data = null, width = 1, height = 1, depth = 1) {
		super(null);
		this.isData3DTexture = true;
		this.image = {
			data,
			width,
			height,
			depth
		};
		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;
		this.wrapR = ClampToEdgeWrapping;
		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;
	}
}

const emptyTexture = /*@__PURE__*/new Texture();
const emptyArrayTexture = /*@__PURE__*/new DataArrayTexture();
const empty3dTexture = /*@__PURE__*/new Data3DTexture();

const arrayCacheF32 = [];
const arrayCacheI32 = [];
const mat4array = new Float32Array(16);
const mat3array = new Float32Array(9);
const mat2array = new Float32Array(4);
function flatten(array, nBlocks, blockSize) {
	const firstElem = array[0];
	if (firstElem <= 0 || firstElem > 0) return array;
	const n = nBlocks * blockSize;
	let r = arrayCacheF32[n];
	if (r === undefined) {
		r = new Float32Array(n);
		arrayCacheF32[n] = r;
	}
	if (nBlocks !== 0) {
		firstElem.toArray(r, 0);
		for (let i = 1, offset = 0; i !== nBlocks; ++i) {
			offset += blockSize;
			array[i].toArray(r, offset);
		}
	}
	return r;
}
function arraysEqual(a, b) {
	if (a.length !== b.length) return false;
	for (let i = 0, l = a.length; i < l; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}
function copyArray(a, b) {
	for (let i = 0, l = b.length; i < l; i++) {
		a[i] = b[i];
	}
}
function allocTexUnits(textures, n) {
	let r = arrayCacheI32[n];
	if (r === undefined) {
		r = new Int32Array(n);
		arrayCacheI32[n] = r;
	}
	for (let i = 0; i !== n; ++i) {
		r[i] = textures.allocateTextureUnit();
	}
	return r;
}
function setValueV1f(gl, v) {
	const cache = this.cache;
	if (cache[0] === v) return;
	gl.uniform1f(this.addr, v);
	cache[0] = v;
}
function setValueV2f(gl, v) {
	const cache = this.cache;
	if (v.x !== undefined) {
		if (cache[0] !== v.x || cache[1] !== v.y) {
			gl.uniform2f(this.addr, v.x, v.y);
			cache[0] = v.x;
			cache[1] = v.y;
		}
	} else {
		if (arraysEqual(cache, v)) return;
		gl.uniform2fv(this.addr, v);
		copyArray(cache, v);
	}
}
function setValueV3f(gl, v) {
	const cache = this.cache;
	if (v.x !== undefined) {
		if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z) {
			gl.uniform3f(this.addr, v.x, v.y, v.z);
			cache[0] = v.x;
			cache[1] = v.y;
			cache[2] = v.z;
		}
	} else if (v.r !== undefined) {
		if (cache[0] !== v.r || cache[1] !== v.g || cache[2] !== v.b) {
			gl.uniform3f(this.addr, v.r, v.g, v.b);
			cache[0] = v.r;
			cache[1] = v.g;
			cache[2] = v.b;
		}
	} else {
		if (arraysEqual(cache, v)) return;
		gl.uniform3fv(this.addr, v);
		copyArray(cache, v);
	}
}
function setValueV4f(gl, v) {
	const cache = this.cache;
	if (v.x !== undefined) {
		if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z || cache[3] !== v.w) {
			gl.uniform4f(this.addr, v.x, v.y, v.z, v.w);
			cache[0] = v.x;
			cache[1] = v.y;
			cache[2] = v.z;
			cache[3] = v.w;
		}
	} else {
		if (arraysEqual(cache, v)) return;
		gl.uniform4fv(this.addr, v);
		copyArray(cache, v);
	}
}
function setValueM2(gl, v) {
	const cache = this.cache;
	const elements = v.elements;
	if (elements === undefined) {
		if (arraysEqual(cache, v)) return;
		gl.uniformMatrix2fv(this.addr, false, v);
		copyArray(cache, v);
	} else {
		if (arraysEqual(cache, elements)) return;
		mat2array.set(elements);
		gl.uniformMatrix2fv(this.addr, false, mat2array);
		copyArray(cache, elements);
	}
}
function setValueM3(gl, v) {
	const cache = this.cache;
	const elements = v.elements;
	if (elements === undefined) {
		if (arraysEqual(cache, v)) return;
		gl.uniformMatrix3fv(this.addr, false, v);
		copyArray(cache, v);
	} else {
		if (arraysEqual(cache, elements)) return;
		mat3array.set(elements);
		gl.uniformMatrix3fv(this.addr, false, mat3array);
		copyArray(cache, elements);
	}
}
function setValueM4(gl, v) {
	const cache = this.cache;
	const elements = v.elements;
	if (elements === undefined) {
		if (arraysEqual(cache, v)) return;
		gl.uniformMatrix4fv(this.addr, false, v);
		copyArray(cache, v);
	} else {
		if (arraysEqual(cache, elements)) return;
		mat4array.set(elements);
		gl.uniformMatrix4fv(this.addr, false, mat4array);
		copyArray(cache, elements);
	}
}
function setValueV1i(gl, v) {
	const cache = this.cache;
	if (cache[0] === v) return;
	gl.uniform1i(this.addr, v);
	cache[0] = v;
}
function setValueV2i(gl, v) {
	const cache = this.cache;
	if (v.x !== undefined) {
		if (cache[0] !== v.x || cache[1] !== v.y) {
			gl.uniform2i(this.addr, v.x, v.y);
			cache[0] = v.x;
			cache[1] = v.y;
		}
	} else {
		if (arraysEqual(cache, v)) return;
		gl.uniform2iv(this.addr, v);
		copyArray(cache, v);
	}
}
function setValueV3i(gl, v) {
	const cache = this.cache;
	if (v.x !== undefined) {
		if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z) {
			gl.uniform3i(this.addr, v.x, v.y, v.z);
			cache[0] = v.x;
			cache[1] = v.y;
			cache[2] = v.z;
		}
	} else {
		if (arraysEqual(cache, v)) return;
		gl.uniform3iv(this.addr, v);
		copyArray(cache, v);
	}
}
function setValueV4i(gl, v) {
	const cache = this.cache;
	if (v.x !== undefined) {
		if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z || cache[3] !== v.w) {
			gl.uniform4i(this.addr, v.x, v.y, v.z, v.w);
			cache[0] = v.x;
			cache[1] = v.y;
			cache[2] = v.z;
			cache[3] = v.w;
		}
	} else {
		if (arraysEqual(cache, v)) return;
		gl.uniform4iv(this.addr, v);
		copyArray(cache, v);
	}
}
function setValueV1ui(gl, v) {
	const cache = this.cache;
	if (cache[0] === v) return;
	gl.uniform1ui(this.addr, v);
	cache[0] = v;
}
function setValueV2ui(gl, v) {
	const cache = this.cache;
	if (v.x !== undefined) {
		if (cache[0] !== v.x || cache[1] !== v.y) {
			gl.uniform2ui(this.addr, v.x, v.y);
			cache[0] = v.x;
			cache[1] = v.y;
		}
	} else {
		if (arraysEqual(cache, v)) return;
		gl.uniform2uiv(this.addr, v);
		copyArray(cache, v);
	}
}
function setValueV3ui(gl, v) {
	const cache = this.cache;
	if (v.x !== undefined) {
		if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z) {
			gl.uniform3ui(this.addr, v.x, v.y, v.z);
			cache[0] = v.x;
			cache[1] = v.y;
			cache[2] = v.z;
		}
	} else {
		if (arraysEqual(cache, v)) return;
		gl.uniform3uiv(this.addr, v);
		copyArray(cache, v);
	}
}
function setValueV4ui(gl, v) {
	const cache = this.cache;
	if (v.x !== undefined) {
		if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z || cache[3] !== v.w) {
			gl.uniform4ui(this.addr, v.x, v.y, v.z, v.w);
			cache[0] = v.x;
			cache[1] = v.y;
			cache[2] = v.z;
			cache[3] = v.w;
		}
	} else {
		if (arraysEqual(cache, v)) return;
		gl.uniform4uiv(this.addr, v);
		copyArray(cache, v);
	}
}
function setValueT1(gl, v, textures) {
	const cache = this.cache;
	const unit = textures.allocateTextureUnit();
	if (cache[0] !== unit) {
		gl.uniform1i(this.addr, unit);
		cache[0] = unit;
	}
	textures.setTexture2D(v || emptyTexture, unit);
}
function setValueT3D1(gl, v, textures) {
	const cache = this.cache;
	const unit = textures.allocateTextureUnit();
	if (cache[0] !== unit) {
		gl.uniform1i(this.addr, unit);
		cache[0] = unit;
	}
	textures.setTexture3D(v || empty3dTexture, unit);
}
function getSingularSetter(type) {
	switch (type) {
		case 0x1406:
			return setValueV1f;
		case 0x8b50:
			return setValueV2f;
		case 0x8b51:
			return setValueV3f;
		case 0x8b52:
			return setValueV4f;
		case 0x8b5a:
			return setValueM2;
		case 0x8b5b:
			return setValueM3;
		case 0x8b5c:
			return setValueM4;
		case 0x1404:
		case 0x8b56:
			return setValueV1i;
		case 0x8b53:
		case 0x8b57:
			return setValueV2i;
		case 0x8b54:
		case 0x8b58:
			return setValueV3i;
		case 0x8b55:
		case 0x8b59:
			return setValueV4i;
		case 0x1405:
			return setValueV1ui;
		case 0x8dc6:
			return setValueV2ui;
		case 0x8dc7:
			return setValueV3ui;
		case 0x8dc8:
			return setValueV4ui;
		case 0x8b5e:
		case 0x8d66:
		case 0x8dca:
		case 0x8dd2:
		case 0x8b62:
			return setValueT1;
		case 0x8b5f:
		case 0x8dcb:
		case 0x8dd3:
			return setValueT3D1;
	}
}
function setValueV1fArray(gl, v) {
	gl.uniform1fv(this.addr, v);
}
function setValueV2fArray(gl, v) {
	const data = flatten(v, this.size, 2);
	gl.uniform2fv(this.addr, data);
}
function setValueV3fArray(gl, v) {
	const data = flatten(v, this.size, 3);
	gl.uniform3fv(this.addr, data);
}
function setValueV4fArray(gl, v) {
	const data = flatten(v, this.size, 4);
	gl.uniform4fv(this.addr, data);
}
function setValueM2Array(gl, v) {
	const data = flatten(v, this.size, 4);
	gl.uniformMatrix2fv(this.addr, false, data);
}
function setValueM3Array(gl, v) {
	const data = flatten(v, this.size, 9);
	gl.uniformMatrix3fv(this.addr, false, data);
}
function setValueM4Array(gl, v) {
	const data = flatten(v, this.size, 16);
	gl.uniformMatrix4fv(this.addr, false, data);
}
function setValueV1iArray(gl, v) {
	gl.uniform1iv(this.addr, v);
}
function setValueV2iArray(gl, v) {
	gl.uniform2iv(this.addr, v);
}
function setValueV3iArray(gl, v) {
	gl.uniform3iv(this.addr, v);
}
function setValueV4iArray(gl, v) {
	gl.uniform4iv(this.addr, v);
}
function setValueV1uiArray(gl, v) {
	gl.uniform1uiv(this.addr, v);
}
function setValueV2uiArray(gl, v) {
	gl.uniform2uiv(this.addr, v);
}
function setValueV3uiArray(gl, v) {
	gl.uniform3uiv(this.addr, v);
}
function setValueV4uiArray(gl, v) {
	gl.uniform4uiv(this.addr, v);
}
function setValueT1Array(gl, v, textures) {
	const cache = this.cache;
	const n = v.length;
	const units = allocTexUnits(textures, n);
	if (!arraysEqual(cache, units)) {
		gl.uniform1iv(this.addr, units);
		copyArray(cache, units);
	}
	for (let i = 0; i !== n; ++i) {
		textures.setTexture2D(v[i] || emptyTexture, units[i]);
	}
}
function setValueT3DArray(gl, v, textures) {
	const cache = this.cache;
	const n = v.length;
	const units = allocTexUnits(textures, n);
	if (!arraysEqual(cache, units)) {
		gl.uniform1iv(this.addr, units);
		copyArray(cache, units);
	}
	for (let i = 0; i !== n; ++i) {
		textures.setTexture3D(v[i] || empty3dTexture, units[i]);
	}
}
function setValueT2DArrayArray(gl, v, textures) {
	const cache = this.cache;
	const n = v.length;
	const units = allocTexUnits(textures, n);
	if (!arraysEqual(cache, units)) {
		gl.uniform1iv(this.addr, units);
		copyArray(cache, units);
	}
	for (let i = 0; i !== n; ++i) {
		textures.setTexture2DArray(v[i] || emptyArrayTexture, units[i]);
	}
}
function getPureArraySetter(type) {
	switch (type) {
		case 0x1406:
			return setValueV1fArray;
		case 0x8b50:
			return setValueV2fArray;
		case 0x8b51:
			return setValueV3fArray;
		case 0x8b52:
			return setValueV4fArray;
		case 0x8b5a:
			return setValueM2Array;
		case 0x8b5b:
			return setValueM3Array;
		case 0x8b5c:
			return setValueM4Array;
		case 0x1404:
		case 0x8b56:
			return setValueV1iArray;
		case 0x8b53:
		case 0x8b57:
			return setValueV2iArray;
		case 0x8b54:
		case 0x8b58:
			return setValueV3iArray;
		case 0x8b55:
		case 0x8b59:
			return setValueV4iArray;
		case 0x1405:
			return setValueV1uiArray;
		case 0x8dc6:
			return setValueV2uiArray;
		case 0x8dc7:
			return setValueV3uiArray;
		case 0x8dc8:
			return setValueV4uiArray;
		case 0x8b5e:
		case 0x8d66:
		case 0x8dca:
		case 0x8dd2:
		case 0x8b62:
			return setValueT1Array;
		case 0x8b5f:
		case 0x8dcb:
		case 0x8dd3:
			return setValueT3DArray;
		case 0x8dc1:
		case 0x8dcf:
		case 0x8dd7:
		case 0x8dc4:
			return setValueT2DArrayArray;
	}
}
class SingleUniform {
	constructor(id, activeInfo, addr) {
		this.id = id;
		this.addr = addr;
		this.cache = [];
		this.setValue = getSingularSetter(activeInfo.type);
	}
}
class PureArrayUniform {
	constructor(id, activeInfo, addr) {
		this.id = id;
		this.addr = addr;
		this.cache = [];
		this.size = activeInfo.size;
		this.setValue = getPureArraySetter(activeInfo.type);
	}
}
class StructuredUniform {
	constructor(id) {
		this.id = id;
		this.seq = [];
		this.map = {};
	}
	setValue(gl, value, textures) {
		const seq = this.seq;
		for (let i = 0, n = seq.length; i !== n; ++i) {
			const u = seq[i];
			u.setValue(gl, value[u.id], textures);
		}
	}
}
const RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(container, uniformObject) {
	container.seq.push(uniformObject);
	container.map[uniformObject.id] = uniformObject;
}
function parseUniform(activeInfo, addr, container) {
	const path = activeInfo.name,
		pathLength = path.length;
	RePathPart.lastIndex = 0;
	while (true) {
		const match = RePathPart.exec(path),
			matchEnd = RePathPart.lastIndex;
		let id = match[1];
		const idIsIndex = match[2] === ']',
			subscript = match[3];
		if (idIsIndex) id = id | 0;
		if (subscript === undefined || subscript === '[' && matchEnd + 2 === pathLength) {
			addUniform(container, subscript === undefined ? new SingleUniform(id, activeInfo, addr) : new PureArrayUniform(id, activeInfo, addr));
			break;
		} else {
			const map = container.map;
			let next = map[id];
			if (next === undefined) {
				next = new StructuredUniform(id);
				addUniform(container, next);
			}
			container = next;
		}
	}
}
class WebGLUniforms {
	constructor(gl, program) {
		this.seq = [];
		this.map = {};
		const n = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
		for (let i = 0; i < n; ++i) {
			const info = gl.getActiveUniform(program, i),
				addr = gl.getUniformLocation(program, info.name);
			parseUniform(info, addr, this);
		}
	}
	setValue(gl, name, value, textures) {
		const u = this.map[name];
		if (u !== undefined) u.setValue(gl, value, textures);
	}
	static upload(gl, seq, values, textures) {
		for (let i = 0, n = seq.length; i !== n; ++i) {
			const u = seq[i],
				v = values[u.id];
			if (v.needsUpdate !== false) {
				u.setValue(gl, v.value, textures);
			}
		}
	}
	static seqWithValue(seq, values) {
		const r = [];
		for (let i = 0, n = seq.length; i !== n; ++i) {
			const u = seq[i];
			if (u.id in values) r.push(u);
		}
		return r;
	}
}

function WebGLShader(gl, type, string) {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, string);
	gl.compileShader(shader);
	return shader;
}

var begin_vertex = "vec3 transformed = vec3( position );";

var beginnormal_vertex = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif";

var bsdfs = "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n";

var color_fragment = "";

var color_pars_fragment = "";

var color_pars_vertex = "";

var color_vertex = "";

var common = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}";

var defaultnormal_vertex = "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif";

var lights_pars_begin = "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n";

var lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;";

var lights_phong_pars_fragment = "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong";

var lights_fragment_begin = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n#endif\n";

var lights_fragment_maps = "";

var lights_fragment_end = "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n";

var logdepthbuf_fragment = "";

var logdepthbuf_pars_fragment = "";

var logdepthbuf_pars_vertex = "";

var logdepthbuf_vertex = "";

var map_fragment = "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif";

var map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif";

var normal_fragment_begin = "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;";

var normal_fragment_maps = "#ifdef OBJECTSPACE_NORMALMAP\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#endif";

var normal_pars_fragment = "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif";

var normal_pars_vertex = "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif";

var normal_vertex = "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif";

var normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif";

var output_fragment = "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );";

var packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}";

var project_vertex = "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;";

var shadowmap_pars_fragment = "\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n#endif";

var shadowmap_pars_vertex = "\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n#endif";

var shadowmap_vertex = "#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif";

var shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}";

var specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif";

var specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif";

var uv_pars_fragment = "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif";

var uv_pars_vertex = "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif";

var uv_vertex = "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif";

var uv2_pars_fragment = "";

var uv2_pars_vertex = "";

var uv2_vertex = "";

var worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif";

const vertex$2 = "#include <common>\n#include <uv_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}";
const fragment$2 = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}";

const vertex$1 = "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <color_pars_vertex>\n#include <normal_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}";
const fragment$1 = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <output_fragment>\n}";

const vertex = "#include <common>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}";
const fragment = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n}";

const ShaderChunk = {
	begin_vertex: begin_vertex,
	beginnormal_vertex: beginnormal_vertex,
	bsdfs: bsdfs,
	color_fragment: color_fragment,
	color_pars_fragment: color_pars_fragment,
	color_pars_vertex: color_pars_vertex,
	color_vertex: color_vertex,
	common: common,
	defaultnormal_vertex: defaultnormal_vertex,
	lights_pars_begin: lights_pars_begin,
	lights_phong_fragment: lights_phong_fragment,
	lights_phong_pars_fragment: lights_phong_pars_fragment,
	lights_fragment_begin: lights_fragment_begin,
	lights_fragment_maps: lights_fragment_maps,
	lights_fragment_end: lights_fragment_end,
	logdepthbuf_fragment: logdepthbuf_fragment,
	logdepthbuf_pars_fragment: logdepthbuf_pars_fragment,
	logdepthbuf_pars_vertex: logdepthbuf_pars_vertex,
	logdepthbuf_vertex: logdepthbuf_vertex,
	map_fragment: map_fragment,
	map_pars_fragment: map_pars_fragment,
	normal_fragment_begin: normal_fragment_begin,
	normal_fragment_maps: normal_fragment_maps,
	normal_pars_fragment: normal_pars_fragment,
	normal_pars_vertex: normal_pars_vertex,
	normal_vertex: normal_vertex,
	normalmap_pars_fragment: normalmap_pars_fragment,
	output_fragment: output_fragment,
	packing: packing,
	project_vertex: project_vertex,
	shadowmap_pars_fragment: shadowmap_pars_fragment,
	shadowmap_pars_vertex: shadowmap_pars_vertex,
	shadowmap_vertex: shadowmap_vertex,
	shadowmask_pars_fragment: shadowmask_pars_fragment,
	specularmap_fragment: specularmap_fragment,
	specularmap_pars_fragment: specularmap_pars_fragment,
	uv_pars_fragment: uv_pars_fragment,
	uv_pars_vertex: uv_pars_vertex,
	uv_vertex: uv_vertex,
	uv2_pars_fragment: uv2_pars_fragment,
	uv2_pars_vertex: uv2_pars_vertex,
	uv2_vertex: uv2_vertex,
	worldpos_vertex: worldpos_vertex,
	depth_vert: vertex$2,
	depth_frag: fragment$2,
	meshphong_vert: vertex$1,
	meshphong_frag: fragment$1,
	shadow_vert: vertex,
	shadow_frag: fragment
};

let programIdCount = 0;
function handleSource(string, errorLine) {
	const lines = string.split('\n');
	const lines2 = [];
	const from = Math.max(errorLine - 6, 0);
	const to = Math.min(errorLine + 6, lines.length);
	for (let i = from; i < to; i++) {
		const line = i + 1;
		lines2.push(`${line === errorLine ? '>' : ' '} ${line}: ${lines[i]}`);
	}
	return lines2.join('\n');
}
function getShaderErrors(gl, shader, type) {
	const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	const errors = gl.getShaderInfoLog(shader).trim();
	if (status && errors === '') return '';
	const errorMatches = /ERROR: 0:(\d+)/.exec(errors);
	if (errorMatches) {
		const errorLine = parseInt(errorMatches[1]);
		return type.toUpperCase() + '\n\n' + errors + '\n\n' + handleSource(gl.getShaderSource(shader), errorLine);
	} else {
		return errors;
	}
}
function generateExtensions(parameters) {
	const chunks = [parameters.extensionDerivatives || !!parameters.envMapCubeUVHeight || parameters.bumpMap || parameters.tangentSpaceNormalMap || parameters.clearcoatNormalMap || parameters.flatShading || parameters.shaderID === 'physical' ? '#extension GL_OES_standard_derivatives : enable' : '', (parameters.extensionFragDepth || parameters.logarithmicDepthBuffer) && parameters.rendererExtensionFragDepth ? '#extension GL_EXT_frag_depth : enable' : '', parameters.extensionDrawBuffers && parameters.rendererExtensionDrawBuffers ? '#extension GL_EXT_draw_buffers : require' : '', (parameters.extensionShaderTextureLOD || parameters.envMap || parameters.transmission) && parameters.rendererExtensionShaderTextureLod ? '#extension GL_EXT_shader_texture_lod : enable' : ''];
	return chunks.filter(filterEmptyLine).join('\n');
}
function generateDefines(defines) {
	const chunks = [];
	for (const name in defines) {
		const value = defines[name];
		if (value === false) continue;
		chunks.push('#define ' + name + ' ' + value);
	}
	return chunks.join('\n');
}
function fetchAttributeLocations(gl, program) {
	const attributes = {};
	const n = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < n; i++) {
		const info = gl.getActiveAttrib(program, i);
		const name = info.name;
		let locationSize = 1;
		if (info.type === gl.FLOAT_MAT2) locationSize = 2;
		if (info.type === gl.FLOAT_MAT3) locationSize = 3;
		if (info.type === gl.FLOAT_MAT4) locationSize = 4;
		attributes[name] = {
			type: info.type,
			location: gl.getAttribLocation(program, name),
			locationSize: locationSize
		};
	}
	return attributes;
}
function filterEmptyLine(string) {
	return string !== '';
}
function replaceLightNums(string, parameters) {
	const numSpotLightCoords = parameters.numSpotLightShadows + parameters.numSpotLightMaps - parameters.numSpotLightShadowsWithMaps;
	return string.replace(/NUM_DIR_LIGHTS/g, parameters.numDirLights).replace(/NUM_SPOT_LIGHTS/g, parameters.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, parameters.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, numSpotLightCoords).replace(/NUM_RECT_AREA_LIGHTS/g, parameters.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, parameters.numPointLights).replace(/NUM_HEMI_LIGHTS/g, parameters.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, parameters.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, parameters.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, parameters.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, parameters.numPointLightShadows);
}
const includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(string) {
	return string.replace(includePattern, includeReplacer);
}
function includeReplacer(match, include) {
	const string = ShaderChunk[include];
	if (string === undefined) {
		throw new Error('Can not resolve #include <' + include + '>');
	}
	return resolveIncludes(string);
}
const unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(string) {
	return string.replace(unrollLoopPattern, loopReplacer);
}
function loopReplacer(match, start, end, snippet) {
	let string = '';
	for (let i = parseInt(start); i < parseInt(end); i++) {
		string += snippet.replace(/\[\s*i\s*\]/g, '[ ' + i + ' ]').replace(/UNROLLED_LOOP_INDEX/g, i);
	}
	return string;
}
function generatePrecision(parameters) {
	let precisionstring = 'precision ' + parameters.precision + ' float;\nprecision ' + parameters.precision + ' int;';
	if (parameters.precision === 'highp') {
		precisionstring += '\n#define HIGH_PRECISION';
	} else if (parameters.precision === 'mediump') {
		precisionstring += '\n#define MEDIUM_PRECISION';
	} else if (parameters.precision === 'lowp') {
		precisionstring += '\n#define LOW_PRECISION';
	}
	return precisionstring;
}
function generateShadowMapTypeDefine(parameters) {
	let shadowMapTypeDefine = 'SHADOWMAP_TYPE_BASIC';
	if (parameters.shadowMapType === PCFShadowMap) {
		shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF';
	} else if (parameters.shadowMapType === PCFSoftShadowMap) {
		shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF_SOFT';
	} else if (parameters.shadowMapType === VSMShadowMap) {
		shadowMapTypeDefine = 'SHADOWMAP_TYPE_VSM';
	}
	return shadowMapTypeDefine;
}
function WebGLProgram(renderer, cacheKey, parameters, bindingStates) {
	const gl = renderer.getContext();
	const defines = parameters.defines;
	let vertexShader = parameters.vertexShader;
	let fragmentShader = parameters.fragmentShader;
	const shadowMapTypeDefine = generateShadowMapTypeDefine(parameters);
	const customExtensions = parameters.isWebGL2 ? '' : generateExtensions(parameters);
	const customDefines = generateDefines(defines);
	const program = gl.createProgram();
	let prefixVertex, prefixFragment;
	let versionString = parameters.glslVersion ? '#version ' + parameters.glslVersion + '\n' : '';
	if (parameters.isRawShaderMaterial) {
		prefixVertex = [customDefines].filter(filterEmptyLine).join('\n');
		if (prefixVertex.length > 0) {
			prefixVertex += '\n';
		}
		prefixFragment = [customExtensions, customDefines].filter(filterEmptyLine).join('\n');
		if (prefixFragment.length > 0) {
			prefixFragment += '\n';
		}
	} else {
		prefixVertex = [generatePrecision(parameters), '#define SHADER_NAME ' + parameters.shaderName, customDefines, parameters.instancing ? '#define USE_INSTANCING' : '', parameters.instancingColor ? '#define USE_INSTANCING_COLOR' : '', parameters.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '', parameters.useFog && parameters.fog ? '#define USE_FOG' : '', parameters.useFog && parameters.fogExp2 ? '#define FOG_EXP2' : '', parameters.map ? '#define USE_MAP' : '', parameters.lightMap ? '#define USE_LIGHTMAP' : '', parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '', parameters.normalMap ? '#define USE_NORMALMAP' : '', parameters.normalMap && parameters.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '', parameters.normalMap && parameters.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '', parameters.specularMap ? '#define USE_SPECULARMAP' : '', parameters.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '', parameters.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '', parameters.vertexTangents ? '#define USE_TANGENT' : '', parameters.vertexColors ? '#define USE_COLOR' : '', parameters.vertexAlphas ? '#define USE_COLOR_ALPHA' : '', parameters.vertexUvs ? '#define USE_UV' : '', parameters.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '', parameters.flatShading ? '#define FLAT_SHADED' : '', parameters.skinning ? '#define USE_SKINNING' : '', parameters.doubleSided ? '#define DOUBLE_SIDED' : '', parameters.flipSided ? '#define FLIP_SIDED' : '', parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '', parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '', parameters.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '', parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '', 'uniform mat4 modelMatrix;', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform mat4 viewMatrix;', 'uniform mat3 normalMatrix;', 'uniform vec3 cameraPosition;', 'uniform bool isOrthographic;', '#ifdef USE_INSTANCING', '	attribute mat4 instanceMatrix;', '#endif', '#ifdef USE_INSTANCING_COLOR', '	attribute vec3 instanceColor;', '#endif', 'attribute vec3 position;', 'attribute vec3 normal;', 'attribute vec2 uv;', '#ifdef USE_TANGENT', '	attribute vec4 tangent;', '#endif', '#if defined( USE_COLOR_ALPHA )', '	attribute vec4 color;', '#elif defined( USE_COLOR )', '	attribute vec3 color;', '#endif', '#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )', '	attribute vec3 morphTarget0;', '	attribute vec3 morphTarget1;', '	attribute vec3 morphTarget2;', '	attribute vec3 morphTarget3;', '	#ifdef USE_MORPHNORMALS', '		attribute vec3 morphNormal0;', '		attribute vec3 morphNormal1;', '		attribute vec3 morphNormal2;', '		attribute vec3 morphNormal3;', '	#else', '		attribute vec3 morphTarget4;', '		attribute vec3 morphTarget5;', '		attribute vec3 morphTarget6;', '		attribute vec3 morphTarget7;', '	#endif', '#endif', '#ifdef USE_SKINNING', '	attribute vec4 skinIndex;', '	attribute vec4 skinWeight;', '#endif', '\n'].filter(filterEmptyLine).join('\n');
		prefixFragment = [customExtensions, generatePrecision(parameters), '#define SHADER_NAME ' + parameters.shaderName, customDefines, parameters.useFog && parameters.fog ? '#define USE_FOG' : '', parameters.useFog && parameters.fogExp2 ? '#define FOG_EXP2' : '', parameters.map ? '#define USE_MAP' : '', parameters.lightMap ? '#define USE_LIGHTMAP' : '', parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '', parameters.normalMap ? '#define USE_NORMALMAP' : '', parameters.normalMap && parameters.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '', parameters.normalMap && parameters.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '', parameters.specularMap ? '#define USE_SPECULARMAP' : '', parameters.specularIntensityMap ? '#define USE_SPECULARINTENSITYMAP' : '', parameters.specularColorMap ? '#define USE_SPECULARCOLORMAP' : '', parameters.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '', parameters.vertexTangents ? '#define USE_TANGENT' : '', parameters.vertexColors || parameters.instancingColor ? '#define USE_COLOR' : '', parameters.vertexAlphas ? '#define USE_COLOR_ALPHA' : '', parameters.vertexUvs ? '#define USE_UV' : '', parameters.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '', parameters.gradientMap ? '#define USE_GRADIENTMAP' : '', parameters.flatShading ? '#define FLAT_SHADED' : '', parameters.doubleSided ? '#define DOUBLE_SIDED' : '', parameters.flipSided ? '#define FLIP_SIDED' : '', parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '', parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '', parameters.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '', parameters.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '', parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ? '#define USE_LOGDEPTHBUF_EXT' : '', 'uniform mat4 viewMatrix;', 'uniform vec3 cameraPosition;', 'uniform bool isOrthographic;', parameters.dithering ? '#define DITHERING' : '', parameters.opaque ? '#define OPAQUE' : '', parameters.useDepthPacking ? '#define DEPTH_PACKING ' + parameters.depthPacking : '', '\n'].filter(filterEmptyLine).join('\n');
	}
	vertexShader = resolveIncludes(vertexShader);
	vertexShader = replaceLightNums(vertexShader, parameters);
	fragmentShader = resolveIncludes(fragmentShader);
	fragmentShader = replaceLightNums(fragmentShader, parameters);
	vertexShader = unrollLoops(vertexShader);
	fragmentShader = unrollLoops(fragmentShader);
	if (parameters.isWebGL2 && parameters.isRawShaderMaterial !== true) {
		versionString = '#version 300 es\n';
		prefixVertex = ['precision mediump sampler2DArray;', '#define attribute in', '#define varying out', '#define texture2D texture'].join('\n') + '\n' + prefixVertex;
		prefixFragment = ['#define varying in', parameters.glslVersion === GLSL3 ? '' : 'layout(location = 0) out highp vec4 pc_fragColor;', parameters.glslVersion === GLSL3 ? '' : '#define gl_FragColor pc_fragColor', '#define gl_FragDepthEXT gl_FragDepth', '#define texture2D texture', '#define textureCube texture', '#define texture2DProj textureProj', '#define texture2DLodEXT textureLod', '#define texture2DProjLodEXT textureProjLod', '#define textureCubeLodEXT textureLod', '#define texture2DGradEXT textureGrad', '#define texture2DProjGradEXT textureProjGrad', '#define textureCubeGradEXT textureGrad'].join('\n') + '\n' + prefixFragment;
	}
	const vertexGlsl = versionString + prefixVertex + vertexShader;
	const fragmentGlsl = versionString + prefixFragment + fragmentShader;
	const glVertexShader = WebGLShader(gl, gl.VERTEX_SHADER, vertexGlsl);
	const glFragmentShader = WebGLShader(gl, gl.FRAGMENT_SHADER, fragmentGlsl);
	gl.attachShader(program, glVertexShader);
	gl.attachShader(program, glFragmentShader);
	if (parameters.index0AttributeName !== undefined) {
		gl.bindAttribLocation(program, 0, parameters.index0AttributeName);
	}
	gl.linkProgram(program);
	if (renderer.debug.checkShaderErrors) {
		const programLog = gl.getProgramInfoLog(program).trim();
		const vertexLog = gl.getShaderInfoLog(glVertexShader).trim();
		const fragmentLog = gl.getShaderInfoLog(glFragmentShader).trim();
		let runnable = true;
		let haveDiagnostics = true;
		if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
			runnable = false;
			const vertexErrors = getShaderErrors(gl, glVertexShader, 'vertex');
			const fragmentErrors = getShaderErrors(gl, glFragmentShader, 'fragment');
			console.error('THREE.WebGLProgram: Shader Error ' + gl.getError() + ' - ' + 'VALIDATE_STATUS ' + gl.getProgramParameter(program, gl.VALIDATE_STATUS) + '\n\n' + 'Program Info Log: ' + programLog + '\n' + vertexErrors + '\n' + fragmentErrors);
		} else if (programLog !== '') {
			console.warn('THREE.WebGLProgram: Program Info Log:', programLog);
		} else if (vertexLog === '' || fragmentLog === '') {
			haveDiagnostics = false;
		}
		if (haveDiagnostics) {
			this.diagnostics = {
				runnable: runnable,
				programLog: programLog,
				vertexShader: {
					log: vertexLog,
					prefix: prefixVertex
				},
				fragmentShader: {
					log: fragmentLog,
					prefix: prefixFragment
				}
			};
		}
	}
	gl.deleteShader(glVertexShader);
	gl.deleteShader(glFragmentShader);
	let cachedUniforms;
	this.getUniforms = function () {
		if (cachedUniforms === undefined) {
			cachedUniforms = new WebGLUniforms(gl, program);
		}
		return cachedUniforms;
	};
	let cachedAttributes;
	this.getAttributes = function () {
		if (cachedAttributes === undefined) {
			cachedAttributes = fetchAttributeLocations(gl, program);
		}
		return cachedAttributes;
	};
	this.destroy = function () {
		bindingStates.releaseStatesOfProgram(this);
		gl.deleteProgram(program);
		this.program = undefined;
	};
	this.name = parameters.shaderName;
	this.id = programIdCount++;
	this.cacheKey = cacheKey;
	this.usedTimes = 1;
	this.program = program;
	this.vertexShader = glVertexShader;
	this.fragmentShader = glFragmentShader;
	return this;
}

let _id$1 = 0;
class WebGLShaderCache {
	constructor() {
		this.shaderCache = new Map();
		this.materialCache = new Map();
	}
	update(material) {
		const vertexShader = material.vertexShader;
		const fragmentShader = material.fragmentShader;
		const vertexShaderStage = this._getShaderStage(vertexShader);
		const fragmentShaderStage = this._getShaderStage(fragmentShader);
		const materialShaders = this._getShaderCacheForMaterial(material);
		if (materialShaders.has(vertexShaderStage) === false) {
			materialShaders.add(vertexShaderStage);
			vertexShaderStage.usedTimes++;
		}
		if (materialShaders.has(fragmentShaderStage) === false) {
			materialShaders.add(fragmentShaderStage);
			fragmentShaderStage.usedTimes++;
		}
		return this;
	}
	remove(material) {
		const materialShaders = this.materialCache.get(material);
		for (const shaderStage of materialShaders) {
			shaderStage.usedTimes--;
			if (shaderStage.usedTimes === 0) this.shaderCache.delete(shaderStage.code);
		}
		this.materialCache.delete(material);
		return this;
	}
	getVertexShaderID(material) {
		return this._getShaderStage(material.vertexShader).id;
	}
	getFragmentShaderID(material) {
		return this._getShaderStage(material.fragmentShader).id;
	}
	dispose() {
		this.shaderCache.clear();
		this.materialCache.clear();
	}
	_getShaderCacheForMaterial(material) {
		const cache = this.materialCache;
		let set = cache.get(material);
		if (set === undefined) {
			set = new Set();
			cache.set(material, set);
		}
		return set;
	}
	_getShaderStage(code) {
		const cache = this.shaderCache;
		let stage = cache.get(code);
		if (stage === undefined) {
			stage = new WebGLShaderStage(code);
			cache.set(code, stage);
		}
		return stage;
	}
}
class WebGLShaderStage {
	constructor(code) {
		this.id = _id$1++;
		this.code = code;
		this.usedTimes = 0;
	}
}

function cloneUniforms(src) {
	const dst = {};
	for (const u in src) {
		dst[u] = {};
		for (const p in src[u]) {
			const property = src[u][p];
			if (property && (property.isColor || property.isMatrix3 || property.isMatrix4 || property.isVector2 || property.isVector3 || property.isVector4 || property.isTexture || property.isQuaternion)) {
				dst[u][p] = property.clone();
			} else if (Array.isArray(property)) {
				dst[u][p] = property.slice();
			} else {
				dst[u][p] = property;
			}
		}
	}
	return dst;
}
function mergeUniforms(uniforms) {
	const merged = {};
	for (let u = 0; u < uniforms.length; u++) {
		const tmp = cloneUniforms(uniforms[u]);
		for (const p in tmp) {
			merged[p] = tmp[p];
		}
	}
	return merged;
}
const UniformsUtils = {
	clone: cloneUniforms,
	merge: mergeUniforms
};

function SRGBToLinear(c) {
	return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(c) {
	return c < 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
}
const FN = {
	[SRGBColorSpace]: {
		[LinearSRGBColorSpace]: SRGBToLinear
	},
	[LinearSRGBColorSpace]: {
		[SRGBColorSpace]: LinearToSRGB
	}
};
const ColorManagement = {
	legacyMode: true,
	get workingColorSpace() {
		return LinearSRGBColorSpace;
	},
	set workingColorSpace(colorSpace) {
		console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
	},
	convert: function (color, sourceColorSpace, targetColorSpace) {
		if (this.legacyMode || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
			return color;
		}
		if (FN[sourceColorSpace] && FN[sourceColorSpace][targetColorSpace] !== undefined) {
			const fn = FN[sourceColorSpace][targetColorSpace];
			color.r = fn(color.r);
			color.g = fn(color.g);
			color.b = fn(color.b);
			return color;
		}
		throw new Error('Unsupported color space conversion.');
	},
	fromWorkingColorSpace: function (color, targetColorSpace) {
		return this.convert(color, this.workingColorSpace, targetColorSpace);
	},
	toWorkingColorSpace: function (color, sourceColorSpace) {
		return this.convert(color, sourceColorSpace, this.workingColorSpace);
	}
};

const _colorKeywords = {
	'aliceblue': 0xF0F8FF,
	'antiquewhite': 0xFAEBD7,
	'aqua': 0x00FFFF,
	'aquamarine': 0x7FFFD4,
	'azure': 0xF0FFFF,
	'beige': 0xF5F5DC,
	'bisque': 0xFFE4C4,
	'black': 0x000000,
	'blanchedalmond': 0xFFEBCD,
	'blue': 0x0000FF,
	'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A,
	'burlywood': 0xDEB887,
	'cadetblue': 0x5F9EA0,
	'chartreuse': 0x7FFF00,
	'chocolate': 0xD2691E,
	'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED,
	'cornsilk': 0xFFF8DC,
	'crimson': 0xDC143C,
	'cyan': 0x00FFFF,
	'darkblue': 0x00008B,
	'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B,
	'darkgray': 0xA9A9A9,
	'darkgreen': 0x006400,
	'darkgrey': 0xA9A9A9,
	'darkkhaki': 0xBDB76B,
	'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F,
	'darkorange': 0xFF8C00,
	'darkorchid': 0x9932CC,
	'darkred': 0x8B0000,
	'darksalmon': 0xE9967A,
	'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B,
	'darkslategray': 0x2F4F4F,
	'darkslategrey': 0x2F4F4F,
	'darkturquoise': 0x00CED1,
	'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493,
	'deepskyblue': 0x00BFFF,
	'dimgray': 0x696969,
	'dimgrey': 0x696969,
	'dodgerblue': 0x1E90FF,
	'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0,
	'forestgreen': 0x228B22,
	'fuchsia': 0xFF00FF,
	'gainsboro': 0xDCDCDC,
	'ghostwhite': 0xF8F8FF,
	'gold': 0xFFD700,
	'goldenrod': 0xDAA520,
	'gray': 0x808080,
	'green': 0x008000,
	'greenyellow': 0xADFF2F,
	'grey': 0x808080,
	'honeydew': 0xF0FFF0,
	'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C,
	'indigo': 0x4B0082,
	'ivory': 0xFFFFF0,
	'khaki': 0xF0E68C,
	'lavender': 0xE6E6FA,
	'lavenderblush': 0xFFF0F5,
	'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD,
	'lightblue': 0xADD8E6,
	'lightcoral': 0xF08080,
	'lightcyan': 0xE0FFFF,
	'lightgoldenrodyellow': 0xFAFAD2,
	'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90,
	'lightgrey': 0xD3D3D3,
	'lightpink': 0xFFB6C1,
	'lightsalmon': 0xFFA07A,
	'lightseagreen': 0x20B2AA,
	'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899,
	'lightslategrey': 0x778899,
	'lightsteelblue': 0xB0C4DE,
	'lightyellow': 0xFFFFE0,
	'lime': 0x00FF00,
	'limegreen': 0x32CD32,
	'linen': 0xFAF0E6,
	'magenta': 0xFF00FF,
	'maroon': 0x800000,
	'mediumaquamarine': 0x66CDAA,
	'mediumblue': 0x0000CD,
	'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB,
	'mediumseagreen': 0x3CB371,
	'mediumslateblue': 0x7B68EE,
	'mediumspringgreen': 0x00FA9A,
	'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585,
	'midnightblue': 0x191970,
	'mintcream': 0xF5FFFA,
	'mistyrose': 0xFFE4E1,
	'moccasin': 0xFFE4B5,
	'navajowhite': 0xFFDEAD,
	'navy': 0x000080,
	'oldlace': 0xFDF5E6,
	'olive': 0x808000,
	'olivedrab': 0x6B8E23,
	'orange': 0xFFA500,
	'orangered': 0xFF4500,
	'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA,
	'palegreen': 0x98FB98,
	'paleturquoise': 0xAFEEEE,
	'palevioletred': 0xDB7093,
	'papayawhip': 0xFFEFD5,
	'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F,
	'pink': 0xFFC0CB,
	'plum': 0xDDA0DD,
	'powderblue': 0xB0E0E6,
	'purple': 0x800080,
	'rebeccapurple': 0x663399,
	'red': 0xFF0000,
	'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1,
	'saddlebrown': 0x8B4513,
	'salmon': 0xFA8072,
	'sandybrown': 0xF4A460,
	'seagreen': 0x2E8B57,
	'seashell': 0xFFF5EE,
	'sienna': 0xA0522D,
	'silver': 0xC0C0C0,
	'skyblue': 0x87CEEB,
	'slateblue': 0x6A5ACD,
	'slategray': 0x708090,
	'slategrey': 0x708090,
	'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F,
	'steelblue': 0x4682B4,
	'tan': 0xD2B48C,
	'teal': 0x008080,
	'thistle': 0xD8BFD8,
	'tomato': 0xFF6347,
	'turquoise': 0x40E0D0,
	'violet': 0xEE82EE,
	'wheat': 0xF5DEB3,
	'white': 0xFFFFFF,
	'whitesmoke': 0xF5F5F5,
	'yellow': 0xFFFF00,
	'yellowgreen': 0x9ACD32
};
const _rgb = {
	r: 0,
	g: 0,
	b: 0
};
function toComponents(source, target) {
	target.r = source.r;
	target.g = source.g;
	target.b = source.b;
	return target;
}
class Color {
	constructor(r, g, b) {
		this.isColor = true;
		this.r = 1;
		this.g = 1;
		this.b = 1;
		if (g === undefined && b === undefined) {
			return this.set(r);
		}
		return this.setRGB(r, g, b);
	}
	set(value) {
		if (value && value.isColor) {
			this.copy(value);
		} else if (typeof value === 'number') {
			this.setHex(value);
		} else if (typeof value === 'string') {
			this.setStyle(value);
		}
		return this;
	}
	setHex(hex, colorSpace = SRGBColorSpace) {
		hex = Math.floor(hex);
		this.r = (hex >> 16 & 255) / 255;
		this.g = (hex >> 8 & 255) / 255;
		this.b = (hex & 255) / 255;
		ColorManagement.toWorkingColorSpace(this, colorSpace);
		return this;
	}
	setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
		this.r = r;
		this.g = g;
		this.b = b;
		ColorManagement.toWorkingColorSpace(this, colorSpace);
		return this;
	}
	setStyle(style, colorSpace = SRGBColorSpace) {
		function handleAlpha(string) {
			if (string === undefined) return;
			if (parseFloat(string) < 1) {
				console.warn('THREE.Color: Alpha component of ' + style + ' will be ignored.');
			}
		}
		let m;
		if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(style)) {
			let color;
			const name = m[1];
			const components = m[2];
			switch (name) {
				case 'rgb':
				case 'rgba':
					if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
						this.r = Math.min(255, parseInt(color[1], 10)) / 255;
						this.g = Math.min(255, parseInt(color[2], 10)) / 255;
						this.b = Math.min(255, parseInt(color[3], 10)) / 255;
						ColorManagement.toWorkingColorSpace(this, colorSpace);
						handleAlpha(color[4]);
						return this;
					}
					if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
						this.r = Math.min(100, parseInt(color[1], 10)) / 100;
						this.g = Math.min(100, parseInt(color[2], 10)) / 100;
						this.b = Math.min(100, parseInt(color[3], 10)) / 100;
						ColorManagement.toWorkingColorSpace(this, colorSpace);
						handleAlpha(color[4]);
						return this;
					}
					break;
			}
		} else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
			const hex = m[1];
			const size = hex.length;
			if (size === 3) {
				this.r = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
				this.g = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
				this.b = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;
				ColorManagement.toWorkingColorSpace(this, colorSpace);
				return this;
			} else if (size === 6) {
				this.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
				this.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
				this.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;
				ColorManagement.toWorkingColorSpace(this, colorSpace);
				return this;
			}
		}
		if (style && style.length > 0) {
			return this.setColorName(style, colorSpace);
		}
		return this;
	}
	setColorName(style, colorSpace = SRGBColorSpace) {
		const hex = _colorKeywords[style.toLowerCase()];
		if (hex !== undefined) {
			this.setHex(hex, colorSpace);
		} else {
			console.warn('THREE.Color: Unknown color ' + style);
		}
		return this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(color) {
		this.r = color.r;
		this.g = color.g;
		this.b = color.b;
		return this;
	}
	getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
		target.r = _rgb.r;
		target.g = _rgb.g;
		target.b = _rgb.b;
		return target;
	}
	add(color) {
		this.r += color.r;
		this.g += color.g;
		this.b += color.b;
		return this;
	}
	sub(color) {
		this.r = Math.max(0, this.r - color.r);
		this.g = Math.max(0, this.g - color.g);
		this.b = Math.max(0, this.b - color.b);
		return this;
	}
	multiply(color) {
		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;
		return this;
	}
	multiplyScalar(s) {
		this.r *= s;
		this.g *= s;
		this.b *= s;
		return this;
	}
	equals(c) {
		return c.r === this.r && c.g === this.g && c.b === this.b;
	}
	fromBufferAttribute(attribute, index) {
		this.r = attribute.getX(index);
		this.g = attribute.getY(index);
		this.b = attribute.getZ(index);
		return this;
	}
	*[Symbol.iterator]() {
		yield this.r;
		yield this.g;
		yield this.b;
	}
}
Color.NAMES = _colorKeywords;

const UniformsLib = {
	common: {
		diffuse: {
			value: /*@__PURE__*/new Color(0xffffff)
		},
		opacity: {
			value: 1.0
		},
		map: {
			value: null
		},
		uvTransform: {
			value: /*@__PURE__*/new Matrix3()
		},
		uv2Transform: {
			value: /*@__PURE__*/new Matrix3()
		}
	},
	specularmap: {
		specularMap: {
			value: null
		}
	},
	emissivemap: {
		emissiveMap: {
			value: null
		}
	},
	normalmap: {
		normalMap: {
			value: null
		},
		normalScale: {
			value: /*@__PURE__*/new Vector2(1, 1)
		}
	},
	
	lights: {
		ambientLightColor: {
			value: []
		},
		lightProbe: {
			value: []
		},
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
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMap: {
			value: []
		},
		directionalShadowMatrix: {
			value: []
		},
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
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: {
			value: []
		},
		spotShadowMap: {
			value: []
		},
		spotLightMatrix: {
			value: []
		},
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
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMap: {
			value: []
		},
		pointShadowMatrix: {
			value: []
		},
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
		ltc_1: {
			value: null
		},
		ltc_2: {
			value: null
		}
	},
	points: {
		diffuse: {
			value: /*@__PURE__*/new Color(0xffffff)
		},
		opacity: {
			value: 1.0
		},
		size: {
			value: 1.0
		},
		scale: {
			value: 1.0
		},
		map: {
			value: null
		},
		alphaMap: {
			value: null
		},
		alphaTest: {
			value: 0
		},
		uvTransform: {
			value: /*@__PURE__*/new Matrix3()
		}
	},
	sprite: {
		diffuse: {
			value: /*@__PURE__*/new Color(0xffffff)
		},
		opacity: {
			value: 1.0
		},
		center: {
			value: /*@__PURE__*/new Vector2(0.5, 0.5)
		},
		rotation: {
			value: 0.0
		},
		map: {
			value: null
		},
		alphaMap: {
			value: null
		},
		alphaTest: {
			value: 0
		},
		uvTransform: {
			value: /*@__PURE__*/new Matrix3()
		}
	}
};

const ShaderLib = {
	basic: {
		uniforms: /*@__PURE__*/mergeUniforms([UniformsLib.common, UniformsLib.specularmap, UniformsLib.envmap, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.fog]),
		vertexShader: ShaderChunk.meshbasic_vert,
		fragmentShader: ShaderChunk.meshbasic_frag
	},
	
	
	phong: {
		uniforms: /*@__PURE__*/mergeUniforms([UniformsLib.common, UniformsLib.specularmap, UniformsLib.emissivemap, UniformsLib.normalmap, UniformsLib.lights, {
			emissive: {
				value: /*@__PURE__*/new Color(0x000000)
			},
			specular: {
				value: /*@__PURE__*/new Color(0x111111)
			},
			shininess: {
				value: 30
			}
		}]),
		vertexShader: ShaderChunk.meshphong_vert,
		fragmentShader: ShaderChunk.meshphong_frag
	},
	
	
	
	
	
	
	
	depth: {
		uniforms: /*@__PURE__*/mergeUniforms([UniformsLib.common]),
		vertexShader: ShaderChunk.depth_vert,
		fragmentShader: ShaderChunk.depth_frag
	},
	
	
	
	
	
	shadow: {
		uniforms: /*@__PURE__*/mergeUniforms([UniformsLib.lights, UniformsLib.fog, {
			color: {
				value: /*@__PURE__*/new Color(0x00000)
			},
			opacity: {
				value: 1.0
			}
		}]),
		vertexShader: ShaderChunk.shadow_vert,
		fragmentShader: ShaderChunk.shadow_frag
	}
};

function WebGLPrograms(renderer, cubemaps, cubeuvmaps, extensions, capabilities, bindingStates, clipping) {
	const _programLayers = new Layers();
	const _customShaders = new WebGLShaderCache();
	const programs = [];
	const isWebGL2 = capabilities.isWebGL2;
	const logarithmicDepthBuffer = capabilities.logarithmicDepthBuffer;
	const vertexTextures = capabilities.vertexTextures;
	let precision = capabilities.precision;
	const shaderIDs = {
		MeshDepthMaterial: 'depth',
		MeshDistanceMaterial: 'distanceRGBA',
		MeshNormalMaterial: 'normal',
		MeshBasicMaterial: 'basic',
		MeshLambertMaterial: 'lambert',
		MeshPhongMaterial: 'phong',
		MeshToonMaterial: 'toon',
		MeshStandardMaterial: 'physical',
		MeshPhysicalMaterial: 'physical',
		MeshMatcapMaterial: 'matcap',
		LineBasicMaterial: 'basic',
		LineDashedMaterial: 'dashed',
		PointsMaterial: 'points',
		ShadowMaterial: 'shadow',
		SpriteMaterial: 'sprite'
	};
	function getParameters(material, lights, shadows, scene, object) {
		const geometry = object.geometry;
		const shaderID = shaderIDs[material.type];
		if (material.precision !== null) {
			precision = capabilities.getMaxPrecision(material.precision);
			if (precision !== material.precision) {
				console.warn('THREE.WebGLProgram.getParameters:', material.precision, 'not supported, using', precision, 'instead.');
			}
		}
		let vertexShader, fragmentShader;
		let customVertexShaderID, customFragmentShaderID;
		if (shaderID) {
			const shader = ShaderLib[shaderID];
			vertexShader = shader.vertexShader;
			fragmentShader = shader.fragmentShader;
		} else {
			vertexShader = material.vertexShader;
			fragmentShader = material.fragmentShader;
			_customShaders.update(material);
			customVertexShaderID = _customShaders.getVertexShaderID(material);
			customFragmentShaderID = _customShaders.getFragmentShaderID(material);
		}
		const currentRenderTarget = renderer.getRenderTarget();
		const parameters = {
			isWebGL2: isWebGL2,
			shaderID: shaderID,
			shaderName: material.type,
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			defines: material.defines,
			customVertexShaderID: customVertexShaderID,
			customFragmentShaderID: customFragmentShaderID,
			isRawShaderMaterial: material.isRawShaderMaterial === true,
			glslVersion: material.glslVersion,
			precision: precision,
			instancing: object.isInstancedMesh === true,
			supportsVertexTextures: vertexTextures,
			outputEncoding: currentRenderTarget === null ? renderer.outputEncoding : currentRenderTarget.isXRRenderTarget === true ? currentRenderTarget.texture.encoding : LinearEncoding,
			map: !!material.map,
			matcap: !!material.matcap,
			lightMap: !!material.lightMap,
			normalMap: !!material.normalMap,
			objectSpaceNormalMap: material.normalMapType === ObjectSpaceNormalMap,
			tangentSpaceNormalMap: material.normalMapType === TangentSpaceNormalMap,
			decodeVideoTexture: !!material.map && material.map.isVideoTexture === true && material.map.encoding === sRGBEncoding,
			specularMap: !!material.specularMap,
			specularIntensityMap: !!material.specularIntensityMap,
			specularColorMap: !!material.specularColorMap,
			opaque: material.transparent === false && material.blending === NormalBlending,
			gradientMap: !!material.gradientMap,
			combine: material.combine,
			vertexTangents: !!material.normalMap && !!geometry.attributes.tangent,
			vertexColors: material.vertexColors,
			vertexAlphas: material.vertexColors === true && !!geometry.attributes.color && geometry.attributes.color.itemSize === 4,
			vertexUvs: !!material.map || !!material.bumpMap || !!material.normalMap || !!material.specularMap || !!material.alphaMap || !!material.emissiveMap || !!material.roughnessMap || !!material.metalnessMap || !!material.clearcoatMap || !!material.clearcoatRoughnessMap || !!material.clearcoatNormalMap || !!material.iridescenceMap || !!material.iridescenceThicknessMap || !!material.displacementMap || !!material.transmissionMap || !!material.thicknessMap || !!material.specularIntensityMap || !!material.specularColorMap || !!material.sheenColorMap || !!material.sheenRoughnessMap,
			uvsVertexOnly: !(!!material.map || !!material.bumpMap || !!material.normalMap || !!material.specularMap || !!material.alphaMap || !!material.emissiveMap || !!material.roughnessMap || !!material.metalnessMap || !!material.clearcoatNormalMap || !!material.iridescenceMap || !!material.iridescenceThicknessMap || material.transmission > 0 || !!material.transmissionMap || !!material.thicknessMap || !!material.specularIntensityMap || !!material.specularColorMap || material.sheen > 0 || !!material.sheenColorMap || !!material.sheenRoughnessMap) && !!material.displacementMap,
			flatShading: !!material.flatShading,
			sizeAttenuation: material.sizeAttenuation,
			logarithmicDepthBuffer: logarithmicDepthBuffer,
			numDirLights: lights.directional.length,
			numPointLights: lights.point.length,
			numSpotLights: lights.spot.length,
			numSpotLightMaps: lights.spotLightMap.length,
			numRectAreaLights: lights.rectArea.length,
			numHemiLights: lights.hemi.length,
			numDirLightShadows: lights.directionalShadowMap.length,
			numPointLightShadows: lights.pointShadowMap.length,
			numSpotLightShadows: lights.spotShadowMap.length,
			numSpotLightShadowsWithMaps: lights.numSpotLightShadowsWithMaps,
			dithering: material.dithering,
			shadowMapEnabled: renderer.shadowMap.enabled && shadows.length > 0,
			shadowMapType: renderer.shadowMap.type,
			physicallyCorrectLights: renderer.physicallyCorrectLights,
			premultipliedAlpha: material.premultipliedAlpha,
			doubleSided: material.side === DoubleSide,
			flipSided: material.side === BackSide,
			useDepthPacking: !!material.depthPacking,
			depthPacking: material.depthPacking || 0,
			index0AttributeName: material.index0AttributeName,
			extensionDerivatives: material.extensions && material.extensions.derivatives,
			extensionFragDepth: material.extensions && material.extensions.fragDepth,
			extensionDrawBuffers: material.extensions && material.extensions.drawBuffers,
			extensionShaderTextureLOD: material.extensions && material.extensions.shaderTextureLOD,
			rendererExtensionFragDepth: isWebGL2 || extensions.has('EXT_frag_depth'),
			rendererExtensionDrawBuffers: isWebGL2 || extensions.has('WEBGL_draw_buffers'),
			rendererExtensionShaderTextureLod: isWebGL2 || extensions.has('EXT_shader_texture_lod'),
			customProgramCacheKey: material.customProgramCacheKey()
		};
		return parameters;
	}
	function getProgramCacheKey(parameters) {
		const array = [];
		if (parameters.shaderID) {
			array.push(parameters.shaderID);
		} else {
			array.push(parameters.customVertexShaderID);
			array.push(parameters.customFragmentShaderID);
		}
		if (parameters.defines !== undefined) {
			for (const name in parameters.defines) {
				array.push(name);
				array.push(parameters.defines[name]);
			}
		}
		if (parameters.isRawShaderMaterial === false) {
			getProgramCacheKeyParameters(array, parameters);
			getProgramCacheKeyBooleans(array, parameters);
			array.push(renderer.outputEncoding);
		}
		array.push(parameters.customProgramCacheKey);
		return array.join();
	}
	function getProgramCacheKeyParameters(array, parameters) {
		array.push(parameters.precision);
		array.push(parameters.outputEncoding);
		array.push(parameters.combine);
		array.push(parameters.vertexUvs);
		array.push(parameters.sizeAttenuation);
		array.push(parameters.numDirLights);
		array.push(parameters.numPointLights);
		array.push(parameters.numSpotLights);
		array.push(parameters.numSpotLightMaps);
		array.push(parameters.numHemiLights);
		array.push(parameters.numRectAreaLights);
		array.push(parameters.numDirLightShadows);
		array.push(parameters.numPointLightShadows);
		array.push(parameters.numSpotLightShadows);
		array.push(parameters.numSpotLightShadowsWithMaps);
		array.push(parameters.shadowMapType);
		array.push(parameters.depthPacking);
	}
	function getProgramCacheKeyBooleans(array, parameters) {
		_programLayers.disableAll();
		if (parameters.isWebGL2) _programLayers.enable(0);
		if (parameters.supportsVertexTextures) _programLayers.enable(1);
		if (parameters.instancing) _programLayers.enable(2);
		if (parameters.map) _programLayers.enable(4);
		if (parameters.lightMap) _programLayers.enable(7);
		if (parameters.emissiveMap) _programLayers.enable(9);
		if (parameters.normalMap) _programLayers.enable(11);
		if (parameters.objectSpaceNormalMap) _programLayers.enable(12);
		if (parameters.tangentSpaceNormalMap) _programLayers.enable(13);
		if (parameters.specularMap) _programLayers.enable(22);
		if (parameters.vertexColors) _programLayers.enable(28);
		if (parameters.vertexAlphas) _programLayers.enable(29);
		if (parameters.vertexUvs) _programLayers.enable(30);
		if (parameters.vertexTangents) _programLayers.enable(31);
		if (parameters.uvsVertexOnly) _programLayers.enable(32);
		array.push(_programLayers.mask);
		_programLayers.disableAll();
		if (parameters.flatShading) _programLayers.enable(2);
		if (parameters.logarithmicDepthBuffer) _programLayers.enable(3);
		if (parameters.premultipliedAlpha) _programLayers.enable(8);
		if (parameters.shadowMapEnabled) _programLayers.enable(9);
		if (parameters.physicallyCorrectLights) _programLayers.enable(10);
		if (parameters.doubleSided) _programLayers.enable(11);
		if (parameters.flipSided) _programLayers.enable(12);
		if (parameters.useDepthPacking) _programLayers.enable(13);
		if (parameters.dithering) _programLayers.enable(14);
		if (parameters.specularIntensityMap) _programLayers.enable(15);
		if (parameters.specularColorMap) _programLayers.enable(16);
		if (parameters.decodeVideoTexture) _programLayers.enable(23);
		if (parameters.opaque) _programLayers.enable(24);
		array.push(_programLayers.mask);
	}
	function getUniforms(material) {
		const shaderID = shaderIDs[material.type];
		let uniforms;
		if (shaderID) {
			const shader = ShaderLib[shaderID];
			uniforms = UniformsUtils.clone(shader.uniforms);
		} else {
			uniforms = material.uniforms;
		}
		return uniforms;
	}
	function acquireProgram(parameters, cacheKey) {
		let program;
		for (let p = 0, pl = programs.length; p < pl; p++) {
			const preexistingProgram = programs[p];
			if (preexistingProgram.cacheKey === cacheKey) {
				program = preexistingProgram;
				++program.usedTimes;
				break;
			}
		}
		if (program === undefined) {
			program = new WebGLProgram(renderer, cacheKey, parameters, bindingStates);
			programs.push(program);
		}
		return program;
	}
	function releaseProgram(program) {
		if (--program.usedTimes === 0) {
			const i = programs.indexOf(program);
			programs[i] = programs[programs.length - 1];
			programs.pop();
			program.destroy();
		}
	}
	function releaseShaderCache(material) {
		_customShaders.remove(material);
	}
	function dispose() {
		_customShaders.dispose();
	}
	return {
		getParameters: getParameters,
		getProgramCacheKey: getProgramCacheKey,
		getUniforms: getUniforms,
		acquireProgram: acquireProgram,
		releaseProgram: releaseProgram,
		releaseShaderCache: releaseShaderCache,
		programs: programs,
		dispose: dispose
	};
}

function WebGLProperties() {
	let properties = new WeakMap();
	function get(object) {
		let map = properties.get(object);
		if (map === undefined) {
			map = {};
			properties.set(object, map);
		}
		return map;
	}
	function remove(object) {
		properties.delete(object);
	}
	function update(object, key, value) {
		properties.get(object)[key] = value;
	}
	function dispose() {
		properties = new WeakMap();
	}
	return {
		get: get,
		remove: remove,
		update: update,
		dispose: dispose
	};
}

function painterSortStable(a, b) {
	if (a.groupOrder !== b.groupOrder) {
		return a.groupOrder - b.groupOrder;
	} else if (a.renderOrder !== b.renderOrder) {
		return a.renderOrder - b.renderOrder;
	} else if (a.material.id !== b.material.id) {
		return a.material.id - b.material.id;
	} else if (a.z !== b.z) {
		return a.z - b.z;
	} else {
		return a.id - b.id;
	}
}
function reversePainterSortStable(a, b) {
	if (a.groupOrder !== b.groupOrder) {
		return a.groupOrder - b.groupOrder;
	} else if (a.renderOrder !== b.renderOrder) {
		return a.renderOrder - b.renderOrder;
	} else if (a.z !== b.z) {
		return b.z - a.z;
	} else {
		return a.id - b.id;
	}
}
function WebGLRenderList() {
	const renderItems = [];
	let renderItemsIndex = 0;
	const opaque = [];
	const transmissive = [];
	const transparent = [];
	function init() {
		renderItemsIndex = 0;
		opaque.length = 0;
		transmissive.length = 0;
		transparent.length = 0;
	}
	function getNextRenderItem(object, geometry, material, groupOrder, z, group) {
		let renderItem = renderItems[renderItemsIndex];
		if (renderItem === undefined) {
			renderItem = {
				id: object.id,
				object: object,
				geometry: geometry,
				material: material,
				groupOrder: groupOrder,
				renderOrder: object.renderOrder,
				z: z,
				group: group
			};
			renderItems[renderItemsIndex] = renderItem;
		} else {
			renderItem.id = object.id;
			renderItem.object = object;
			renderItem.geometry = geometry;
			renderItem.material = material;
			renderItem.groupOrder = groupOrder;
			renderItem.renderOrder = object.renderOrder;
			renderItem.z = z;
			renderItem.group = group;
		}
		renderItemsIndex++;
		return renderItem;
	}
	function push(object, geometry, material, groupOrder, z, group) {
		const renderItem = getNextRenderItem(object, geometry, material, groupOrder, z, group);
		if (material.transmission > 0.0) {
			transmissive.push(renderItem);
		} else if (material.transparent === true) {
			transparent.push(renderItem);
		} else {
			opaque.push(renderItem);
		}
	}
	function unshift(object, geometry, material, groupOrder, z, group) {
		const renderItem = getNextRenderItem(object, geometry, material, groupOrder, z, group);
		if (material.transmission > 0.0) {
			transmissive.unshift(renderItem);
		} else if (material.transparent === true) {
			transparent.unshift(renderItem);
		} else {
			opaque.unshift(renderItem);
		}
	}
	function sort(customOpaqueSort, customTransparentSort) {
		if (opaque.length > 1) opaque.sort(customOpaqueSort || painterSortStable);
		if (transmissive.length > 1) transmissive.sort(customTransparentSort || reversePainterSortStable);
		if (transparent.length > 1) transparent.sort(customTransparentSort || reversePainterSortStable);
	}
	function finish() {
		for (let i = renderItemsIndex, il = renderItems.length; i < il; i++) {
			const renderItem = renderItems[i];
			if (renderItem.id === null) break;
			renderItem.id = null;
			renderItem.object = null;
			renderItem.geometry = null;
			renderItem.material = null;
			renderItem.group = null;
		}
	}
	return {
		opaque: opaque,
		transmissive: transmissive,
		transparent: transparent,
		init: init,
		push: push,
		unshift: unshift,
		finish: finish,
		sort: sort
	};
}
function WebGLRenderLists() {
	let lists = new WeakMap();
	function get(scene, renderCallDepth) {
		const listArray = lists.get(scene);
		let list;
		if (listArray === undefined) {
			list = new WebGLRenderList();
			lists.set(scene, [list]);
		} else {
			if (renderCallDepth >= listArray.length) {
				list = new WebGLRenderList();
				listArray.push(list);
			} else {
				list = listArray[renderCallDepth];
			}
		}
		return list;
	}
	function dispose() {
		lists = new WeakMap();
	}
	return {
		get: get,
		dispose: dispose
	};
}

function UniformsCache() {
	const lights = {};
	return {
		get: function (light) {
			if (lights[light.id] !== undefined) {
				return lights[light.id];
			}
			let uniforms;
			switch (light.type) {
				case 'DirectionalLight':
					uniforms = {
						direction: new Vector3(),
						color: new Color()
					};
					break;
			}
			lights[light.id] = uniforms;
			return uniforms;
		}
	};
}
function ShadowUniformsCache() {
	const lights = {};
	return {
		get: function (light) {
			if (lights[light.id] !== undefined) {
				return lights[light.id];
			}
			let uniforms;
			switch (light.type) {
				case 'DirectionalLight':
					uniforms = {
						shadowBias: 0,
						shadowNormalBias: 0,
						shadowRadius: 1,
						shadowMapSize: new Vector2()
					};
					break;
			}
			lights[light.id] = uniforms;
			return uniforms;
		}
	};
}
let nextVersion = 0;
function shadowCastingAndTexturingLightsFirst(lightA, lightB) {
	return (lightB.castShadow ? 2 : 0) - (lightA.castShadow ? 2 : 0) + (lightB.map ? 1 : 0) - (lightA.map ? 1 : 0);
}
function WebGLLights(extensions, capabilities) {
	const cache = new UniformsCache();
	const shadowCache = ShadowUniformsCache();
	const state = {
		version: 0,
		hash: {
			directionalLength: -1,
			numDirectionalShadows: -1
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
		numSpotLightShadowsWithMaps: 0
	};
	for (let i = 0; i < 9; i++) state.probe.push(new Vector3());
	const vector3 = new Vector3();
	function setup(lights, physicallyCorrectLights) {
		let r = 0,
			g = 0,
			b = 0;
		for (let i = 0; i < 9; i++) state.probe[i].set(0, 0, 0);
		let directionalLength = 0;
		let numDirectionalShadows = 0;
		lights.sort(shadowCastingAndTexturingLightsFirst);
		const scaleFactor = physicallyCorrectLights !== true ? Math.PI : 1;
		for (let i = 0, l = lights.length; i < l; i++) {
			const light = lights[i];
			const color = light.color;
			const intensity = light.intensity;
			const shadowMap = light.shadow && light.shadow.map ? light.shadow.map.texture : null;
			if (light.isAmbientLight) {
				r += color.r * intensity * scaleFactor;
				g += color.g * intensity * scaleFactor;
				b += color.b * intensity * scaleFactor;
			} else if (light.isLightProbe) {
				for (let j = 0; j < 9; j++) {
					state.probe[j].addScaledVector(light.sh.coefficients[j], intensity);
				}
			} else if (light.isDirectionalLight) {
				const uniforms = cache.get(light);
				uniforms.color.copy(light.color).multiplyScalar(light.intensity * scaleFactor);
				if (light.castShadow) {
					const shadow = light.shadow;
					const shadowUniforms = shadowCache.get(light);
					shadowUniforms.shadowBias = shadow.bias;
					shadowUniforms.shadowNormalBias = shadow.normalBias;
					shadowUniforms.shadowRadius = shadow.radius;
					shadowUniforms.shadowMapSize = shadow.mapSize;
					state.directionalShadow[directionalLength] = shadowUniforms;
					state.directionalShadowMap[directionalLength] = shadowMap;
					state.directionalShadowMatrix[directionalLength] = light.shadow.matrix;
					numDirectionalShadows++;
				}
				state.directional[directionalLength] = uniforms;
				directionalLength++;
			}
		}
		state.ambient[0] = r;
		state.ambient[1] = g;
		state.ambient[2] = b;
		const hash = state.hash;
		if (hash.directionalLength !== directionalLength || hash.numDirectionalShadows !== numDirectionalShadows) {
			state.directional.length = directionalLength;
			state.directionalShadow.length = numDirectionalShadows;
			state.directionalShadowMap.length = numDirectionalShadows;
			state.directionalShadowMatrix.length = numDirectionalShadows;
			hash.directionalLength = directionalLength;
			hash.numDirectionalShadows = numDirectionalShadows;
			state.version = nextVersion++;
		}
	}
	function setupView(lights, camera) {
		let directionalLength = 0;
		const viewMatrix = camera.matrixWorldInverse;
		for (let i = 0, l = lights.length; i < l; i++) {
			const light = lights[i];
			if (light.isDirectionalLight) {
				const uniforms = state.directional[directionalLength];
				uniforms.direction.setFromMatrixPosition(light.matrixWorld);
				vector3.setFromMatrixPosition(light.target.matrixWorld);
				uniforms.direction.sub(vector3);
				uniforms.direction.transformDirection(viewMatrix);
				directionalLength++;
			}
		}
	}
	return {
		setup: setup,
		setupView: setupView,
		state: state
	};
}

function WebGLRenderState(extensions, capabilities) {
	const lights = new WebGLLights();
	const lightsArray = [];
	const shadowsArray = [];
	function init() {
		lightsArray.length = 0;
		shadowsArray.length = 0;
	}
	function pushLight(light) {
		lightsArray.push(light);
	}
	function pushShadow(shadowLight) {
		shadowsArray.push(shadowLight);
	}
	function setupLights(physicallyCorrectLights) {
		lights.setup(lightsArray, physicallyCorrectLights);
	}
	function setupLightsView(camera) {
		lights.setupView(lightsArray, camera);
	}
	const state = {
		lightsArray: lightsArray,
		shadowsArray: shadowsArray,
		lights: lights
	};
	return {
		init: init,
		state: state,
		setupLights: setupLights,
		setupLightsView: setupLightsView,
		pushLight: pushLight,
		pushShadow: pushShadow
	};
}
function WebGLRenderStates(extensions, capabilities) {
	let renderStates = new WeakMap();
	function get(scene, renderCallDepth = 0) {
		const renderStateArray = renderStates.get(scene);
		let renderState;
		if (renderStateArray === undefined) {
			renderState = new WebGLRenderState();
			renderStates.set(scene, [renderState]);
		} else {
			if (renderCallDepth >= renderStateArray.length) {
				renderState = new WebGLRenderState();
				renderStateArray.push(renderState);
			} else {
				renderState = renderStateArray[renderCallDepth];
			}
		}
		return renderState;
	}
	function dispose() {
		renderStates = new WeakMap();
	}
	return {
		get: get,
		dispose: dispose
	};
}

class WebGLRenderTarget extends EventDispatcher {
	constructor(width = 1, height = 1, options = {}) {
		super();
		this.isWebGLRenderTarget = true;
		this.width = width;
		this.height = height;
		this.depth = 1;
		this.scissor = new Vector4(0, 0, width, height);
		this.scissorTest = false;
		this.viewport = new Vector4(0, 0, width, height);
		const image = {
			width: width,
			height: height,
			depth: 1
		};
		this.texture = new Texture(image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding);
		this.texture.isRenderTargetTexture = true;
		this.texture.flipY = false;
		this.texture.generateMipmaps = options.generateMipmaps !== undefined ? options.generateMipmaps : false;
		this.texture.internalFormat = options.internalFormat !== undefined ? options.internalFormat : null;
		this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : LinearFilter;
		this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
		this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : false;
		this.depthTexture = options.depthTexture !== undefined ? options.depthTexture : null;
		this.samples = options.samples !== undefined ? options.samples : 0;
	}
	dispose() {
		this.dispatchEvent({
			type: 'dispose'
		});
	}
}

let materialId = 0;
class Material extends EventDispatcher {
	constructor() {
		super();
		Object.defineProperty(this, 'id', {
			value: materialId++
		});
		this.uuid = generateUUID();
		this.name = '';
		this.type = 'Material';
		this.blending = NormalBlending;
		this.side = FrontSide;
		this.vertexColors = false;
		this.opacity = 1;
		this.transparent = false;
		this.blendSrc = SrcAlphaFactor;
		this.blendDst = OneMinusSrcAlphaFactor;
		this.blendEquation = AddEquation;
		this.blendSrcAlpha = null;
		this.blendDstAlpha = null;
		this.blendEquationAlpha = null;
		this.depthFunc = LessEqualDepth;
		this.depthTest = true;
		this.depthWrite = true;
		this.stencilWriteMask = 0xff;
		this.stencilFunc = AlwaysStencilFunc;
		this.stencilRef = 0;
		this.stencilFuncMask = 0xff;
		this.stencilFail = KeepStencilOp;
		this.stencilZFail = KeepStencilOp;
		this.stencilZPass = KeepStencilOp;
		this.stencilWrite = false;
		this.shadowSide = null;
		this.colorWrite = true;
		this.precision = null;
		this.polygonOffset = false;
		this.polygonOffsetFactor = 0;
		this.polygonOffsetUnits = 0;
		this.dithering = false;
		this.alphaToCoverage = false;
		this.premultipliedAlpha = false;
		this.visible = true;
		this.toneMapped = true;
		this.userData = {};
		this.version = 0;
	}
	onBuild() {}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(values) {
		if (values === undefined) return;
		for (const key in values) {
			const newValue = values[key];
			if (newValue === undefined) {
				console.warn('THREE.Material: \'' + key + '\' is undefined');
				continue;
			}
			const currentValue = this[key];
			if (currentValue === undefined) {
				console.warn('THREE.' + this.type + ': \'' + key + '\' is not a property');
				continue;
			}
			if (currentValue && currentValue.isColor) {
				currentValue.set(newValue);
			} else if (currentValue && currentValue.isVector3 && newValue && newValue.isVector3) {
				currentValue.copy(newValue);
			} else {
				this[key] = newValue;
			}
		}
	}
	dispose() {
		this.dispatchEvent({
			type: 'dispose'
		});
	}
	set needsUpdate(value) {
		if (value === true) this.version++;
	}
}

class MeshDepthMaterial extends Material {
	constructor(parameters) {
		super();
		this.isMeshDepthMaterial = true;
		this.type = 'MeshDepthMaterial';
		this.depthPacking = BasicDepthPacking;
		this.map = null;
		this.wireframe = false;
		this.wireframeLinewidth = 1;
		this.setValues(parameters);
	}
}

class MeshDistanceMaterial extends Material {
	constructor(parameters) {
		super();
		this.isMeshDistanceMaterial = true;
		this.type = 'MeshDistanceMaterial';
		this.referencePosition = new Vector3();
		this.nearDistance = 1;
		this.farDistance = 1000;
		this.map = null;
		this.setValues(parameters);
	}
}

class Box3 {
	constructor(min = new Vector3(+Infinity, +Infinity, +Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
		this.min = min;
		this.max = max;
	}
	setFromBufferAttribute(attribute) {
		let minX = +Infinity;
		let minY = +Infinity;
		let minZ = +Infinity;
		let maxX = -Infinity;
		let maxY = -Infinity;
		let maxZ = -Infinity;
		for (let i = 0, l = attribute.count; i < l; i++) {
			const x = attribute.getX(i);
			const y = attribute.getY(i);
			const z = attribute.getZ(i);
			if (x < minX) minX = x;
			if (y < minY) minY = y;
			if (z < minZ) minZ = z;
			if (x > maxX) maxX = x;
			if (y > maxY) maxY = y;
			if (z > maxZ) maxZ = z;
		}
		this.min.set(minX, minY, minZ);
		this.max.set(maxX, maxY, maxZ);
		return this;
	}
	setFromPoints(points) {
		this.makeEmpty();
		for (let i = 0, il = points.length; i < il; i++) {
			this.expandByPoint(points[i]);
		}
		return this;
	}
	setFromObject(object, precise = false) {
		this.makeEmpty();
		return this.expandByObject(object, precise);
	}
	copy(box) {
		this.min.copy(box.min);
		this.max.copy(box.max);
		return this;
	}
	makeEmpty() {
		this.min.x = this.min.y = this.min.z = +Infinity;
		this.max.x = this.max.y = this.max.z = -Infinity;
		return this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(target) {
		return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
	}
	getSize(target) {
		return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
	}
	expandByPoint(point) {
		this.min.min(point);
		this.max.max(point);
		return this;
	}
	expandByObject(object, precise = false) {
		object.updateWorldMatrix(false, false);
		const geometry = object.geometry;
		if (geometry !== undefined) {
			if (precise && geometry.attributes != undefined && geometry.attributes.position !== undefined) {
				const position = geometry.attributes.position;
				for (let i = 0, l = position.count; i < l; i++) {
					_vector$3.fromBufferAttribute(position, i).applyMatrix4(object.matrixWorld);
					this.expandByPoint(_vector$3);
				}
			} else {
				if (geometry.boundingBox === null) {
					geometry.computeBoundingBox();
				}
				_box$2.copy(geometry.boundingBox);
				_box$2.applyMatrix4(object.matrixWorld);
				this.union(_box$2);
			}
		}
		const children = object.children;
		for (let i = 0, l = children.length; i < l; i++) {
			this.expandByObject(children[i], precise);
		}
		return this;
	}
	union(box) {
		this.min.min(box.min);
		this.max.max(box.max);
		return this;
	}
	applyMatrix4(matrix) {
		if (this.isEmpty()) return this;
		_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
		_points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
		_points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
		_points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
		_points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
		_points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
		_points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
		_points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
		this.setFromPoints(_points);
		return this;
	}
}
const _points = [/*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3()];
const _vector$3 = /*@__PURE__*/new Vector3();
const _box$2 = /*@__PURE__*/new Box3();

let _id = 0;
const _m1$1 = /*@__PURE__*/new Matrix4();


const _box$1 = /*@__PURE__*/new Box3();

const _vector$2 = /*@__PURE__*/new Vector3();
class BufferGeometry extends EventDispatcher {
	constructor() {
		super();
		Object.defineProperty(this, 'id', {
			value: _id++
		});
		this.uuid = generateUUID();
		this.name = '';
		this.type = 'BufferGeometry';
		this.index = null;
		this.attributes = {};
		this.groups = [];
		this.boundingBox = null;
		this.boundingSphere = null;
		this.drawRange = {
			start: 0,
			count: Infinity
		};
		this.userData = {};
	}
	setIndex(index) {
		if (Array.isArray(index)) {
			this.index = new (arrayNeedsUint32(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
		} else {
			this.index = index;
		}
		return this;
	}
	getAttribute(name) {
		return this.attributes[name];
	}
	setAttribute(name, attribute) {
		this.attributes[name] = attribute;
		return this;
	}
	addGroup(start, count, materialIndex = 0) {
		this.groups.push({
			start: start,
			count: count,
			materialIndex: materialIndex
		});
	}
	clearGroups() {
		this.groups = [];
	}
	applyMatrix4(matrix) {
		const position = this.attributes.position;
		if (position !== undefined) {
			position.applyMatrix4(matrix);
			position.needsUpdate = true;
		}
		const normal = this.attributes.normal;
		if (normal !== undefined) {
			const normalMatrix = new Matrix3().getNormalMatrix(matrix);
			normal.applyNormalMatrix(normalMatrix);
			normal.needsUpdate = true;
		}
		const tangent = this.attributes.tangent;
		if (tangent !== undefined) {
			tangent.transformDirection(matrix);
			tangent.needsUpdate = true;
		}
		if (this.boundingBox !== null) {
			this.computeBoundingBox();
		}
		if (this.boundingSphere !== null) {
			this.computeBoundingSphere();
		}
		return this;
	}
	translate(x, y, z) {
		_m1$1.makeTranslation(x, y, z);
		this.applyMatrix4(_m1$1);
		return this;
	}
	computeBoundingBox() {
		if (this.boundingBox === null) {
			this.boundingBox = new Box3();
		}
		const position = this.attributes.position;
		if (position && position.isGLBufferAttribute) {
			console.error('computeBoundingBox()', this);
			this.boundingBox.set(new Vector3(-Infinity, -Infinity, -Infinity), new Vector3(+Infinity, +Infinity, +Infinity));
			return;
		}
		if (position !== undefined) {
			this.boundingBox.setFromBufferAttribute(position);
		} else {
			this.boundingBox.makeEmpty();
		}
		if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
			console.error('computeBoundingBox()', this);
		}
	}
	computeBoundingSphere() {
		if (this.boundingSphere === null) {
			this.boundingSphere = new Sphere();
		}
		const position = this.attributes.position;
		if (position && position.isGLBufferAttribute) {
			console.error('computeBoundingSphere()', this);
			this.boundingSphere.set(new Vector3(), Infinity);
			return;
		}
		if (position) {
			const center = this.boundingSphere.center;
			_box$1.setFromBufferAttribute(position);
			_box$1.getCenter(center);
			let maxRadiusSq = 0;
			for (let i = 0, il = position.count; i < il; i++) {
				_vector$2.fromBufferAttribute(position, i);
				maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$2));
			}
			this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
			if (isNaN(this.boundingSphere.radius)) {
				console.error('computeBoundingSphere()', this);
			}
		}
	}
	computeVertexNormals() {
		const index = this.index;
		const positionAttribute = this.getAttribute('position');
		if (positionAttribute !== undefined) {
			let normalAttribute = this.getAttribute('normal');
			if (normalAttribute === undefined) {
				normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
				this.setAttribute('normal', normalAttribute);
			} else {
				for (let i = 0, il = normalAttribute.count; i < il; i++) {
					normalAttribute.setXYZ(i, 0, 0, 0);
				}
			}
			const pA = new Vector3(),
				pB = new Vector3(),
				pC = new Vector3();
			const nA = new Vector3(),
				nB = new Vector3(),
				nC = new Vector3();
			const cb = new Vector3(),
				ab = new Vector3();
			if (index) {
				for (let i = 0, il = index.count; i < il; i += 3) {
					const vA = index.getX(i + 0);
					const vB = index.getX(i + 1);
					const vC = index.getX(i + 2);
					pA.fromBufferAttribute(positionAttribute, vA);
					pB.fromBufferAttribute(positionAttribute, vB);
					pC.fromBufferAttribute(positionAttribute, vC);
					cb.subVectors(pC, pB);
					ab.subVectors(pA, pB);
					cb.cross(ab);
					nA.fromBufferAttribute(normalAttribute, vA);
					nB.fromBufferAttribute(normalAttribute, vB);
					nC.fromBufferAttribute(normalAttribute, vC);
					nA.add(cb);
					nB.add(cb);
					nC.add(cb);
					normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
					normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
					normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
				}
			} else {
				for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
					pA.fromBufferAttribute(positionAttribute, i + 0);
					pB.fromBufferAttribute(positionAttribute, i + 1);
					pC.fromBufferAttribute(positionAttribute, i + 2);
					cb.subVectors(pC, pB);
					ab.subVectors(pA, pB);
					cb.cross(ab);
					normalAttribute.setXYZ(i + 0, cb.x, cb.y, cb.z);
					normalAttribute.setXYZ(i + 1, cb.x, cb.y, cb.z);
					normalAttribute.setXYZ(i + 2, cb.x, cb.y, cb.z);
				}
			}
			this.normalizeNormals();
			normalAttribute.needsUpdate = true;
		}
	}
	normalizeNormals() {
		const normals = this.attributes.normal;
		for (let i = 0, il = normals.count; i < il; i++) {
			_vector$2.fromBufferAttribute(normals, i);
			_vector$2.normalize();
			normals.setXYZ(i, _vector$2.x, _vector$2.y, _vector$2.z);
		}
	}
	dispose() {
		this.dispatchEvent({
			type: 'dispose'
		});
	}
}

function WebGLShadowMap(_renderer, _objects, _capabilities) {
	let _frustum = new Frustum();
	const _shadowMapSize = new Vector2(),
		_viewportSize = new Vector2(),
		_viewport = new Vector4(),
		_depthMaterial = new MeshDepthMaterial({
			depthPacking: RGBADepthPacking
		}),
		_distanceMaterial = new MeshDistanceMaterial(),
		_maxTextureSize = _capabilities.maxTextureSize;
	const shadowSide = {
		0: BackSide,
		1: FrontSide,
		2: DoubleSide
	};
	const fullScreenTri = new BufferGeometry();
	fullScreenTri.setAttribute('position', new BufferAttribute(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
	const scope = this;
	this.enabled = false;
	this.autoUpdate = true;
	this.needsUpdate = false;
	this.type = PCFShadowMap;
	this.render = function (lights, scene, camera) {
		if (scope.enabled === false) return;
		if (scope.autoUpdate === false && scope.needsUpdate === false) return;
		if (lights.length === 0) return;
		const currentRenderTarget = _renderer.getRenderTarget();
		const activeCubeFace = _renderer.getActiveCubeFace();
		const activeMipmapLevel = _renderer.getActiveMipmapLevel();
		const _state = _renderer.state;
		_state.setBlending(NoBlending);
		_state.buffers.color.setClear(1, 1, 1, 1);
		_state.buffers.depth.setTest(true);
		_state.setScissorTest(false);
		for (let i = 0, il = lights.length; i < il; i++) {
			const light = lights[i];
			const shadow = light.shadow;
			if (shadow === undefined) {
				console.warn('THREE.WebGLShadowMap:', light, 'has no shadow.');
				continue;
			}
			if (shadow.autoUpdate === false && shadow.needsUpdate === false) continue;
			_shadowMapSize.copy(shadow.mapSize);
			const shadowFrameExtents = shadow.getFrameExtents();
			_shadowMapSize.multiply(shadowFrameExtents);
			_viewportSize.copy(shadow.mapSize);
			if (_shadowMapSize.x > _maxTextureSize || _shadowMapSize.y > _maxTextureSize) {
				if (_shadowMapSize.x > _maxTextureSize) {
					_viewportSize.x = Math.floor(_maxTextureSize / shadowFrameExtents.x);
					_shadowMapSize.x = _viewportSize.x * shadowFrameExtents.x;
					shadow.mapSize.x = _viewportSize.x;
				}
				if (_shadowMapSize.y > _maxTextureSize) {
					_viewportSize.y = Math.floor(_maxTextureSize / shadowFrameExtents.y);
					_shadowMapSize.y = _viewportSize.y * shadowFrameExtents.y;
					shadow.mapSize.y = _viewportSize.y;
				}
			}
			if (shadow.map === null) {
				const pars = this.type !== VSMShadowMap ? {
					minFilter: NearestFilter,
					magFilter: NearestFilter
				} : {};
				shadow.map = new WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y, pars);
				shadow.map.texture.name = light.name + '.shadowMap';
				shadow.camera.updateProjectionMatrix();
			}
			_renderer.setRenderTarget(shadow.map);
			_renderer.clear();
			const viewportCount = shadow.getViewportCount();
			for (let vp = 0; vp < viewportCount; vp++) {
				const viewport = shadow.getViewport(vp);
				_viewport.set(_viewportSize.x * viewport.x, _viewportSize.y * viewport.y, _viewportSize.x * viewport.z, _viewportSize.y * viewport.w);
				_state.viewport(_viewport);
				shadow.updateMatrices(light, vp);
				_frustum = shadow.getFrustum();
				renderObject(scene, camera, shadow.camera, light, this.type);
			}
			shadow.needsUpdate = false;
		}
		scope.needsUpdate = false;
		_renderer.setRenderTarget(currentRenderTarget, activeCubeFace, activeMipmapLevel);
	};
	function getDepthMaterial(object, material, light, shadowCameraNear, shadowCameraFar, type) {
		let result = null;
		const customMaterial = light.isPointLight === true ? object.customDistanceMaterial : object.customDepthMaterial;
		if (customMaterial !== undefined) {
			result = customMaterial;
		} else {
			result = light.isPointLight === true ? _distanceMaterial : _depthMaterial;
		}
		result.visible = material.visible;
		result.wireframe = material.wireframe;
		if (type === VSMShadowMap) ; else {
			result.side = material.shadowSide !== null ? material.shadowSide : shadowSide[material.side];
		}
		result.map = material.map;
		result.wireframeLinewidth = material.wireframeLinewidth;
		result.linewidth = material.linewidth;
		return result;
	}
	function renderObject(object, camera, shadowCamera, light, type) {
		if (object.visible === false) return;
		const visible = object.layers.test(camera.layers);
		if (visible && (object.isMesh || object.isLine || object.isPoints)) {
			if ((object.castShadow || object.receiveShadow && type === VSMShadowMap) && (!object.frustumCulled || _frustum.intersectsObject(object))) {
				object.modelViewMatrix.multiplyMatrices(shadowCamera.matrixWorldInverse, object.matrixWorld);
				const geometry = _objects.update(object);
				const material = object.material;
				if (Array.isArray(material)) {
					const groups = geometry.groups;
					for (let k = 0, kl = groups.length; k < kl; k++) {
						const group = groups[k];
						const groupMaterial = material[group.materialIndex];
						if (groupMaterial && groupMaterial.visible) {
							const depthMaterial = getDepthMaterial(object, groupMaterial, light, shadowCamera.near, shadowCamera.far, type);
							_renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, group);
						}
					}
				} else if (material.visible) {
					const depthMaterial = getDepthMaterial(object, material, light, shadowCamera.near, shadowCamera.far, type);
					_renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, null);
				}
			}
		}
		const children = object.children;
		for (let i = 0, l = children.length; i < l; i++) {
			renderObject(children[i], camera, shadowCamera, light, type);
		}
	}
}

function WebGLState(gl, extensions, capabilities) {
	const isWebGL2 = capabilities.isWebGL2;
	function ColorBuffer() {
		let locked = false;
		const color = new Vector4();
		let currentColorMask = null;
		const currentColorClear = new Vector4(0, 0, 0, 0);
		return {
			setMask: function (colorMask) {
				if (currentColorMask !== colorMask && !locked) {
					gl.colorMask(colorMask, colorMask, colorMask, colorMask);
					currentColorMask = colorMask;
				}
			},
			setLocked: function (lock) {
				locked = lock;
			},
			setClear: function (r, g, b, a, premultipliedAlpha) {
				if (premultipliedAlpha === true) {
					r *= a;
					g *= a;
					b *= a;
				}
				color.set(r, g, b, a);
				if (currentColorClear.equals(color) === false) {
					gl.clearColor(r, g, b, a);
					currentColorClear.copy(color);
				}
			},
			reset: function () {
				locked = false;
				currentColorMask = null;
				currentColorClear.set(-1, 0, 0, 0);
			}
		};
	}
	function DepthBuffer() {
		let locked = false;
		let currentDepthMask = null;
		let currentDepthFunc = null;
		let currentDepthClear = null;
		return {
			setTest: function (depthTest) {
				if (depthTest) {
					enable(gl.DEPTH_TEST);
				} else {
					disable(gl.DEPTH_TEST);
				}
			},
			setMask: function (depthMask) {
				if (currentDepthMask !== depthMask && !locked) {
					gl.depthMask(depthMask);
					currentDepthMask = depthMask;
				}
			},
			setFunc: function (depthFunc) {
				if (currentDepthFunc !== depthFunc) {
					switch (depthFunc) {
						case NeverDepth:
							gl.depthFunc(gl.NEVER);
							break;
						case AlwaysDepth:
							gl.depthFunc(gl.ALWAYS);
							break;
						case LessDepth:
							gl.depthFunc(gl.LESS);
							break;
						case LessEqualDepth:
							gl.depthFunc(gl.LEQUAL);
							break;
						case EqualDepth:
							gl.depthFunc(gl.EQUAL);
							break;
						case GreaterEqualDepth:
							gl.depthFunc(gl.GEQUAL);
							break;
						case GreaterDepth:
							gl.depthFunc(gl.GREATER);
							break;
						case NotEqualDepth:
							gl.depthFunc(gl.NOTEQUAL);
							break;
						default:
							gl.depthFunc(gl.LEQUAL);
					}
					currentDepthFunc = depthFunc;
				}
			},
			setLocked: function (lock) {
				locked = lock;
			},
			setClear: function (depth) {
				if (currentDepthClear !== depth) {
					gl.clearDepth(depth);
					currentDepthClear = depth;
				}
			},
			reset: function () {
				locked = false;
				currentDepthMask = null;
				currentDepthFunc = null;
				currentDepthClear = null;
			}
		};
	}
	function StencilBuffer() {
		let locked = false;
		let currentStencilMask = null;
		let currentStencilFunc = null;
		let currentStencilRef = null;
		let currentStencilFuncMask = null;
		let currentStencilFail = null;
		let currentStencilZFail = null;
		let currentStencilZPass = null;
		let currentStencilClear = null;
		return {
			setTest: function (stencilTest) {
				if (!locked) {
					if (stencilTest) {
						enable(gl.STENCIL_TEST);
					} else {
						disable(gl.STENCIL_TEST);
					}
				}
			},
			setMask: function (stencilMask) {
				if (currentStencilMask !== stencilMask && !locked) {
					gl.stencilMask(stencilMask);
					currentStencilMask = stencilMask;
				}
			},
			setFunc: function (stencilFunc, stencilRef, stencilMask) {
				if (currentStencilFunc !== stencilFunc || currentStencilRef !== stencilRef || currentStencilFuncMask !== stencilMask) {
					gl.stencilFunc(stencilFunc, stencilRef, stencilMask);
					currentStencilFunc = stencilFunc;
					currentStencilRef = stencilRef;
					currentStencilFuncMask = stencilMask;
				}
			},
			setOp: function (stencilFail, stencilZFail, stencilZPass) {
				if (currentStencilFail !== stencilFail || currentStencilZFail !== stencilZFail || currentStencilZPass !== stencilZPass) {
					gl.stencilOp(stencilFail, stencilZFail, stencilZPass);
					currentStencilFail = stencilFail;
					currentStencilZFail = stencilZFail;
					currentStencilZPass = stencilZPass;
				}
			},
			setLocked: function (lock) {
				locked = lock;
			},
			setClear: function (stencil) {
				if (currentStencilClear !== stencil) {
					gl.clearStencil(stencil);
					currentStencilClear = stencil;
				}
			},
			reset: function () {
				locked = false;
				currentStencilMask = null;
				currentStencilFunc = null;
				currentStencilRef = null;
				currentStencilFuncMask = null;
				currentStencilFail = null;
				currentStencilZFail = null;
				currentStencilZPass = null;
				currentStencilClear = null;
			}
		};
	}
	const colorBuffer = new ColorBuffer();
	const depthBuffer = new DepthBuffer();
	const stencilBuffer = new StencilBuffer();
	const uboBindings = new WeakMap();
	const uboProgramMap = new WeakMap();
	let enabledCapabilities = {};
	let currentBoundFramebuffers = {};
	let currentDrawbuffers = new WeakMap();
	let defaultDrawbuffers = [];
	let currentProgram = null;
	let currentBlendingEnabled = false;
	let currentBlending = null;
	let currentBlendEquation = null;
	let currentBlendSrc = null;
	let currentBlendDst = null;
	let currentBlendEquationAlpha = null;
	let currentBlendSrcAlpha = null;
	let currentBlendDstAlpha = null;
	let currentPremultipledAlpha = false;
	let currentFlipSided = null;
	let currentCullFace = null;
	let currentLineWidth = null;
	let currentPolygonOffsetFactor = null;
	let currentPolygonOffsetUnits = null;
	const maxTextures = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
	let lineWidthAvailable = false;
	let version = 0;
	const glVersion = gl.getParameter(gl.VERSION);
	if (glVersion.indexOf('WebGL') !== -1) {
		version = parseFloat(/^WebGL (\d)/.exec(glVersion)[1]);
		lineWidthAvailable = version >= 1.0;
	} else if (glVersion.indexOf('OpenGL ES') !== -1) {
		version = parseFloat(/^OpenGL ES (\d)/.exec(glVersion)[1]);
		lineWidthAvailable = version >= 2.0;
	}
	let currentTextureSlot = null;
	let currentBoundTextures = {};
	const scissorParam = gl.getParameter(gl.SCISSOR_BOX);
	const viewportParam = gl.getParameter(gl.VIEWPORT);
	const currentScissor = new Vector4().fromArray(scissorParam);
	const currentViewport = new Vector4().fromArray(viewportParam);
	function createTexture(type, target, count) {
		const data = new Uint8Array(4);
		const texture = gl.createTexture();
		gl.bindTexture(type, texture);
		gl.texParameteri(type, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(type, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		for (let i = 0; i < count; i++) {
			gl.texImage2D(target + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
		}
		return texture;
	}
	const emptyTextures = {};
	emptyTextures[gl.TEXTURE_2D] = createTexture(gl.TEXTURE_2D, gl.TEXTURE_2D, 1);
	emptyTextures[gl.TEXTURE_CUBE_MAP] = createTexture(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_CUBE_MAP_POSITIVE_X, 6);
	colorBuffer.setClear(0, 0, 0, 1);
	depthBuffer.setClear(1);
	stencilBuffer.setClear(0);
	enable(gl.DEPTH_TEST);
	depthBuffer.setFunc(LessEqualDepth);
	setFlipSided(false);
	setCullFace(CullFaceBack);
	enable(gl.CULL_FACE);
	setBlending(NoBlending);
	function enable(id) {
		if (enabledCapabilities[id] !== true) {
			gl.enable(id);
			enabledCapabilities[id] = true;
		}
	}
	function disable(id) {
		if (enabledCapabilities[id] !== false) {
			gl.disable(id);
			enabledCapabilities[id] = false;
		}
	}
	function bindFramebuffer(target, framebuffer) {
		if (currentBoundFramebuffers[target] !== framebuffer) {
			gl.bindFramebuffer(target, framebuffer);
			currentBoundFramebuffers[target] = framebuffer;
			if (isWebGL2) {
				if (target === gl.DRAW_FRAMEBUFFER) {
					currentBoundFramebuffers[gl.FRAMEBUFFER] = framebuffer;
				}
				if (target === gl.FRAMEBUFFER) {
					currentBoundFramebuffers[gl.DRAW_FRAMEBUFFER] = framebuffer;
				}
			}
			return true;
		}
		return false;
	}
	function drawBuffers(renderTarget, framebuffer) {
		let drawBuffers = defaultDrawbuffers;
		let needsUpdate = false;
		if (renderTarget) {
			drawBuffers = currentDrawbuffers.get(framebuffer);
			if (drawBuffers === undefined) {
				drawBuffers = [];
				currentDrawbuffers.set(framebuffer, drawBuffers);
			}
			if (renderTarget.isWebGLMultipleRenderTargets) {
				const textures = renderTarget.texture;
				if (drawBuffers.length !== textures.length || drawBuffers[0] !== gl.COLOR_ATTACHMENT0) {
					for (let i = 0, il = textures.length; i < il; i++) {
						drawBuffers[i] = gl.COLOR_ATTACHMENT0 + i;
					}
					drawBuffers.length = textures.length;
					needsUpdate = true;
				}
			} else {
				if (drawBuffers[0] !== gl.COLOR_ATTACHMENT0) {
					drawBuffers[0] = gl.COLOR_ATTACHMENT0;
					needsUpdate = true;
				}
			}
		} else {
			if (drawBuffers[0] !== gl.BACK) {
				drawBuffers[0] = gl.BACK;
				needsUpdate = true;
			}
		}
		if (needsUpdate) {
			if (capabilities.isWebGL2) {
				gl.drawBuffers(drawBuffers);
			} else {
				extensions.get('WEBGL_draw_buffers').drawBuffersWEBGL(drawBuffers);
			}
		}
	}
	function useProgram(program) {
		if (currentProgram !== program) {
			gl.useProgram(program);
			currentProgram = program;
			return true;
		}
		return false;
	}
	const equationToGL = {
		[AddEquation]: gl.FUNC_ADD,
		[SubtractEquation]: gl.FUNC_SUBTRACT,
		[ReverseSubtractEquation]: gl.FUNC_REVERSE_SUBTRACT
	};
	if (isWebGL2) {
		equationToGL[MinEquation] = gl.MIN;
		equationToGL[MaxEquation] = gl.MAX;
	} else {
		const extension = extensions.get('EXT_blend_minmax');
		if (extension !== null) {
			equationToGL[MinEquation] = extension.MIN_EXT;
			equationToGL[MaxEquation] = extension.MAX_EXT;
		}
	}
	const factorToGL = {
		[ZeroFactor]: gl.ZERO,
		[OneFactor]: gl.ONE,
		[SrcColorFactor]: gl.SRC_COLOR,
		[SrcAlphaFactor]: gl.SRC_ALPHA,
		[SrcAlphaSaturateFactor]: gl.SRC_ALPHA_SATURATE,
		[DstColorFactor]: gl.DST_COLOR,
		[DstAlphaFactor]: gl.DST_ALPHA,
		[OneMinusSrcColorFactor]: gl.ONE_MINUS_SRC_COLOR,
		[OneMinusSrcAlphaFactor]: gl.ONE_MINUS_SRC_ALPHA,
		[OneMinusDstColorFactor]: gl.ONE_MINUS_DST_COLOR,
		[OneMinusDstAlphaFactor]: gl.ONE_MINUS_DST_ALPHA
	};
	function setBlending(blending, blendEquation, blendSrc, blendDst, blendEquationAlpha, blendSrcAlpha, blendDstAlpha, premultipliedAlpha) {
		if (blending === NoBlending) {
			if (currentBlendingEnabled === true) {
				disable(gl.BLEND);
				currentBlendingEnabled = false;
			}
			return;
		}
		if (currentBlendingEnabled === false) {
			enable(gl.BLEND);
			currentBlendingEnabled = true;
		}
		if (blending !== CustomBlending) {
			if (blending !== currentBlending || premultipliedAlpha !== currentPremultipledAlpha) {
				if (currentBlendEquation !== AddEquation || currentBlendEquationAlpha !== AddEquation) {
					gl.blendEquation(gl.FUNC_ADD);
					currentBlendEquation = AddEquation;
					currentBlendEquationAlpha = AddEquation;
				}
				if (premultipliedAlpha) {
					switch (blending) {
						case NormalBlending:
							gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
							break;
						case AdditiveBlending:
							gl.blendFunc(gl.ONE, gl.ONE);
							break;
						case SubtractiveBlending:
							gl.blendFuncSeparate(gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
							break;
						case MultiplyBlending:
							gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA);
							break;
						default:
							console.error('THREE.WebGLState: Invalid blending: ', blending);
							break;
					}
				} else {
					switch (blending) {
						case NormalBlending:
							gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
							break;
						case AdditiveBlending:
							gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
							break;
						case SubtractiveBlending:
							gl.blendFuncSeparate(gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
							break;
						case MultiplyBlending:
							gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
							break;
						default:
							console.error('THREE.WebGLState: Invalid blending: ', blending);
							break;
					}
				}
				currentBlendSrc = null;
				currentBlendDst = null;
				currentBlendSrcAlpha = null;
				currentBlendDstAlpha = null;
				currentBlending = blending;
				currentPremultipledAlpha = premultipliedAlpha;
			}
			return;
		}
		blendEquationAlpha = blendEquationAlpha || blendEquation;
		blendSrcAlpha = blendSrcAlpha || blendSrc;
		blendDstAlpha = blendDstAlpha || blendDst;
		if (blendEquation !== currentBlendEquation || blendEquationAlpha !== currentBlendEquationAlpha) {
			gl.blendEquationSeparate(equationToGL[blendEquation], equationToGL[blendEquationAlpha]);
			currentBlendEquation = blendEquation;
			currentBlendEquationAlpha = blendEquationAlpha;
		}
		if (blendSrc !== currentBlendSrc || blendDst !== currentBlendDst || blendSrcAlpha !== currentBlendSrcAlpha || blendDstAlpha !== currentBlendDstAlpha) {
			gl.blendFuncSeparate(factorToGL[blendSrc], factorToGL[blendDst], factorToGL[blendSrcAlpha], factorToGL[blendDstAlpha]);
			currentBlendSrc = blendSrc;
			currentBlendDst = blendDst;
			currentBlendSrcAlpha = blendSrcAlpha;
			currentBlendDstAlpha = blendDstAlpha;
		}
		currentBlending = blending;
		currentPremultipledAlpha = false;
	}
	function setMaterial(material, frontFaceCW) {
		material.side === DoubleSide ? disable(gl.CULL_FACE) : enable(gl.CULL_FACE);
		let flipSided = material.side === BackSide;
		if (frontFaceCW) flipSided = !flipSided;
		setFlipSided(flipSided);
		material.blending === NormalBlending && material.transparent === false ? setBlending(NoBlending) : setBlending(material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha, material.premultipliedAlpha);
		depthBuffer.setFunc(material.depthFunc);
		depthBuffer.setTest(material.depthTest);
		depthBuffer.setMask(material.depthWrite);
		colorBuffer.setMask(material.colorWrite);
		const stencilWrite = material.stencilWrite;
		stencilBuffer.setTest(stencilWrite);
		if (stencilWrite) {
			stencilBuffer.setMask(material.stencilWriteMask);
			stencilBuffer.setFunc(material.stencilFunc, material.stencilRef, material.stencilFuncMask);
			stencilBuffer.setOp(material.stencilFail, material.stencilZFail, material.stencilZPass);
		}
		setPolygonOffset(material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits);
		material.alphaToCoverage === true ? enable(gl.SAMPLE_ALPHA_TO_COVERAGE) : disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function setFlipSided(flipSided) {
		if (currentFlipSided !== flipSided) {
			if (flipSided) {
				gl.frontFace(gl.CW);
			} else {
				gl.frontFace(gl.CCW);
			}
			currentFlipSided = flipSided;
		}
	}
	function setCullFace(cullFace) {
		if (cullFace !== CullFaceNone) {
			enable(gl.CULL_FACE);
			if (cullFace !== currentCullFace) {
				if (cullFace === CullFaceBack) {
					gl.cullFace(gl.BACK);
				} else if (cullFace === CullFaceFront) {
					gl.cullFace(gl.FRONT);
				} else {
					gl.cullFace(gl.FRONT_AND_BACK);
				}
			}
		} else {
			disable(gl.CULL_FACE);
		}
		currentCullFace = cullFace;
	}
	function setLineWidth(width) {
		if (width !== currentLineWidth) {
			if (lineWidthAvailable) gl.lineWidth(width);
			currentLineWidth = width;
		}
	}
	function setPolygonOffset(polygonOffset, factor, units) {
		if (polygonOffset) {
			enable(gl.POLYGON_OFFSET_FILL);
			if (currentPolygonOffsetFactor !== factor || currentPolygonOffsetUnits !== units) {
				gl.polygonOffset(factor, units);
				currentPolygonOffsetFactor = factor;
				currentPolygonOffsetUnits = units;
			}
		} else {
			disable(gl.POLYGON_OFFSET_FILL);
		}
	}
	function setScissorTest(scissorTest) {
		if (scissorTest) {
			enable(gl.SCISSOR_TEST);
		} else {
			disable(gl.SCISSOR_TEST);
		}
	}
	function activeTexture(webglSlot) {
		if (webglSlot === undefined) webglSlot = gl.TEXTURE0 + maxTextures - 1;
		if (currentTextureSlot !== webglSlot) {
			gl.activeTexture(webglSlot);
			currentTextureSlot = webglSlot;
		}
	}
	function bindTexture(webglType, webglTexture, webglSlot) {
		if (webglSlot === undefined) {
			if (currentTextureSlot === null) {
				webglSlot = gl.TEXTURE0 + maxTextures - 1;
			} else {
				webglSlot = currentTextureSlot;
			}
		}
		let boundTexture = currentBoundTextures[webglSlot];
		if (boundTexture === undefined) {
			boundTexture = {
				type: undefined,
				texture: undefined
			};
			currentBoundTextures[webglSlot] = boundTexture;
		}
		if (boundTexture.type !== webglType || boundTexture.texture !== webglTexture) {
			if (currentTextureSlot !== webglSlot) {
				gl.activeTexture(webglSlot);
				currentTextureSlot = webglSlot;
			}
			gl.bindTexture(webglType, webglTexture || emptyTextures[webglType]);
			boundTexture.type = webglType;
			boundTexture.texture = webglTexture;
		}
	}
	function unbindTexture() {
		const boundTexture = currentBoundTextures[currentTextureSlot];
		if (boundTexture !== undefined && boundTexture.type !== undefined) {
			gl.bindTexture(boundTexture.type, null);
			boundTexture.type = undefined;
			boundTexture.texture = undefined;
		}
	}
	function compressedTexImage2D() {
		try {
			gl.compressedTexImage2D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function compressedTexImage3D() {
		try {
			gl.compressedTexImage3D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function texSubImage2D() {
		try {
			gl.texSubImage2D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function texSubImage3D() {
		try {
			gl.texSubImage3D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function compressedTexSubImage2D() {
		try {
			gl.compressedTexSubImage2D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function compressedTexSubImage3D() {
		try {
			gl.compressedTexSubImage3D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function texStorage2D() {
		try {
			gl.texStorage2D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function texStorage3D() {
		try {
			gl.texStorage3D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function texImage2D() {
		try {
			gl.texImage2D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function texImage3D() {
		try {
			gl.texImage3D.apply(gl, arguments);
		} catch (error) {
			console.error('THREE.WebGLState:', error);
		}
	}
	function scissor(scissor) {
		if (currentScissor.equals(scissor) === false) {
			gl.scissor(scissor.x, scissor.y, scissor.z, scissor.w);
			currentScissor.copy(scissor);
		}
	}
	function viewport(viewport) {
		if (currentViewport.equals(viewport) === false) {
			gl.viewport(viewport.x, viewport.y, viewport.z, viewport.w);
			currentViewport.copy(viewport);
		}
	}
	function uniformBlockBinding(uniformsGroup, program) {
		const mapping = uboProgramMap.get(program);
		const blockIndex = mapping.get(uniformsGroup);
		if (uboBindings.get(program) !== blockIndex) {
			gl.uniformBlockBinding(program, blockIndex, uniformsGroup.__bindingPointIndex);
			uboBindings.set(program, blockIndex);
		}
	}
	function reset() {
		gl.disable(gl.BLEND);
		gl.disable(gl.CULL_FACE);
		gl.disable(gl.DEPTH_TEST);
		gl.disable(gl.POLYGON_OFFSET_FILL);
		gl.disable(gl.SCISSOR_TEST);
		gl.disable(gl.STENCIL_TEST);
		gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
		gl.blendEquation(gl.FUNC_ADD);
		gl.blendFunc(gl.ONE, gl.ZERO);
		gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ONE, gl.ZERO);
		gl.colorMask(true, true, true, true);
		gl.clearColor(0, 0, 0, 0);
		gl.depthMask(true);
		gl.depthFunc(gl.LESS);
		gl.clearDepth(1);
		gl.stencilMask(0xffffffff);
		gl.stencilFunc(gl.ALWAYS, 0, 0xffffffff);
		gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
		gl.clearStencil(0);
		gl.cullFace(gl.BACK);
		gl.frontFace(gl.CCW);
		gl.polygonOffset(0, 0);
		gl.activeTexture(gl.TEXTURE0);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		if (isWebGL2 === true) {
			gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
			gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
		}
		gl.useProgram(null);
		gl.lineWidth(1);
		gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
		enabledCapabilities = {};
		currentTextureSlot = null;
		currentBoundTextures = {};
		currentBoundFramebuffers = {};
		currentDrawbuffers = new WeakMap();
		defaultDrawbuffers = [];
		currentProgram = null;
		currentBlendingEnabled = false;
		currentBlending = null;
		currentBlendEquation = null;
		currentBlendSrc = null;
		currentBlendDst = null;
		currentBlendEquationAlpha = null;
		currentBlendSrcAlpha = null;
		currentBlendDstAlpha = null;
		currentPremultipledAlpha = false;
		currentFlipSided = null;
		currentCullFace = null;
		currentLineWidth = null;
		currentPolygonOffsetFactor = null;
		currentPolygonOffsetUnits = null;
		currentScissor.set(0, 0, gl.canvas.width, gl.canvas.height);
		currentViewport.set(0, 0, gl.canvas.width, gl.canvas.height);
		colorBuffer.reset();
		depthBuffer.reset();
		stencilBuffer.reset();
	}
	return {
		buffers: {
			color: colorBuffer,
			depth: depthBuffer,
			stencil: stencilBuffer
		},
		enable: enable,
		disable: disable,
		bindFramebuffer: bindFramebuffer,
		drawBuffers: drawBuffers,
		useProgram: useProgram,
		setBlending: setBlending,
		setMaterial: setMaterial,
		setLineWidth: setLineWidth,
		setPolygonOffset: setPolygonOffset,
		setScissorTest: setScissorTest,
		activeTexture: activeTexture,
		bindTexture: bindTexture,
		unbindTexture: unbindTexture,
		compressedTexImage2D: compressedTexImage2D,
		compressedTexImage3D: compressedTexImage3D,
		texImage2D: texImage2D,
		texImage3D: texImage3D,
		uniformBlockBinding: uniformBlockBinding,
		texStorage2D: texStorage2D,
		texStorage3D: texStorage3D,
		texSubImage2D: texSubImage2D,
		texSubImage3D: texSubImage3D,
		compressedTexSubImage2D: compressedTexSubImage2D,
		compressedTexSubImage3D: compressedTexSubImage3D,
		scissor: scissor,
		viewport: viewport,
		reset: reset
	};
}

function WebGLTextures(_gl, extensions, state, properties, capabilities, utils, info) {
	const isWebGL2 = capabilities.isWebGL2;
	const maxTextures = capabilities.maxTextures;
	const maxTextureSize = capabilities.maxTextureSize;
	const maxSamples = capabilities.maxSamples;
	const multisampledRTTExt = extensions.has('WEBGL_multisampled_render_to_texture') ? extensions.get('WEBGL_multisampled_render_to_texture') : null;
	typeof navigator === 'undefined' ? false : /OculusBrowser/g.test(navigator.userAgent);
	const _videoTextures = new WeakMap();
	let _canvas;
	const _sources = new WeakMap();
	let useOffscreenCanvas = false;
	try {
		useOffscreenCanvas = typeof OffscreenCanvas !== 'undefined' && new OffscreenCanvas(1, 1).getContext('2d') !== null;
	} catch (err) {}
	function createCanvas(width, height) {
		return useOffscreenCanvas ? new OffscreenCanvas(width, height) : createElementNS('canvas');
	}
	function resizeImage(image, needsPowerOfTwo, needsNewCanvas, maxSize) {
		let scale = 1;
		if (image.width > maxSize || image.height > maxSize) {
			scale = maxSize / Math.max(image.width, image.height);
		}
		if (scale < 1 || needsPowerOfTwo === true) {
			if (typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement || typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap) {
				const floor = needsPowerOfTwo ? floorPowerOfTwo : Math.floor;
				const width = floor(scale * image.width);
				const height = floor(scale * image.height);
				if (_canvas === undefined) _canvas = createCanvas(width, height);
				const canvas = needsNewCanvas ? createCanvas(width, height) : _canvas;
				canvas.width = width;
				canvas.height = height;
				const context = canvas.getContext('2d');
				context.drawImage(image, 0, 0, width, height);
				console.warn('THREE.WebGLRenderer: Texture has been resized from (' + image.width + 'x' + image.height + ') to (' + width + 'x' + height + ').');
				return canvas;
			} else {
				if ('data' in image) {
					console.warn('THREE.WebGLRenderer: Image in DataTexture is too big (' + image.width + 'x' + image.height + ').');
				}
				return image;
			}
		}
		return image;
	}
	function isPowerOfTwo$1(image) {
		return isPowerOfTwo(image.width) && isPowerOfTwo(image.height);
	}
	function textureNeedsPowerOfTwo(texture) {
		if (isWebGL2) return false;
		return texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping || texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter;
	}
	function textureNeedsGenerateMipmaps(texture, supportsMips) {
		return texture.generateMipmaps && supportsMips && texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter;
	}
	function generateMipmap(target) {
		_gl.generateMipmap(target);
	}
	function getInternalFormat(internalFormatName, glFormat, glType, encoding, forceLinearEncoding = false) {
		if (isWebGL2 === false) return glFormat;
		if (internalFormatName !== null) {
			if (_gl[internalFormatName] !== undefined) return _gl[internalFormatName];
			console.warn('THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format \'' + internalFormatName + '\'');
		}
		let internalFormat = glFormat;
		if (glFormat === _gl.RGBA) {
			if (glType === _gl.FLOAT) internalFormat = _gl.RGBA32F;
			if (glType === _gl.HALF_FLOAT) internalFormat = _gl.RGBA16F;
			if (glType === _gl.UNSIGNED_BYTE) internalFormat = encoding === sRGBEncoding && forceLinearEncoding === false ? _gl.SRGB8_ALPHA8 : _gl.RGBA8;
			if (glType === _gl.UNSIGNED_SHORT_4_4_4_4) internalFormat = _gl.RGBA4;
			if (glType === _gl.UNSIGNED_SHORT_5_5_5_1) internalFormat = _gl.RGB5_A1;
		}
		return internalFormat;
	}
	function getMipLevels(texture, image, supportsMips) {
		if (textureNeedsGenerateMipmaps(texture, supportsMips) === true || texture.isFramebufferTexture && texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter) {
			return Math.log2(Math.max(image.width, image.height)) + 1;
		} else if (texture.mipmaps !== undefined && texture.mipmaps.length > 0) {
			return texture.mipmaps.length;
		} else if (texture.isCompressedTexture && Array.isArray(texture.image)) {
			return image.mipmaps.length;
		} else {
			return 1;
		}
	}
	function filterFallback(f) {
		if (f === NearestFilter || f === NearestMipmapNearestFilter || f === NearestMipmapLinearFilter) {
			return _gl.NEAREST;
		}
		return _gl.LINEAR;
	}
	function onTextureDispose(event) {
		const texture = event.target;
		texture.removeEventListener('dispose', onTextureDispose);
		deallocateTexture(texture);
		if (texture.isVideoTexture) {
			_videoTextures.delete(texture);
		}
	}
	function onRenderTargetDispose(event) {
		const renderTarget = event.target;
		renderTarget.removeEventListener('dispose', onRenderTargetDispose);
		deallocateRenderTarget(renderTarget);
	}
	function deallocateTexture(texture) {
		const textureProperties = properties.get(texture);
		if (textureProperties.__webglInit === undefined) return;
		const source = texture.source;
		const webglTextures = _sources.get(source);
		if (webglTextures) {
			const webglTexture = webglTextures[textureProperties.__cacheKey];
			webglTexture.usedTimes--;
			if (webglTexture.usedTimes === 0) {
				deleteTexture(texture);
			}
			if (Object.keys(webglTextures).length === 0) {
				_sources.delete(source);
			}
		}
		properties.remove(texture);
	}
	function deleteTexture(texture) {
		const textureProperties = properties.get(texture);
		_gl.deleteTexture(textureProperties.__webglTexture);
		const source = texture.source;
		const webglTextures = _sources.get(source);
		delete webglTextures[textureProperties.__cacheKey];
		info.memory.textures--;
	}
	function deallocateRenderTarget(renderTarget) {
		const texture = renderTarget.texture;
		const renderTargetProperties = properties.get(renderTarget);
		const textureProperties = properties.get(texture);
		if (textureProperties.__webglTexture !== undefined) {
			_gl.deleteTexture(textureProperties.__webglTexture);
			info.memory.textures--;
		}
		if (renderTarget.depthTexture) {
			renderTarget.depthTexture.dispose();
		}
		if (renderTarget.isWebGLCubeRenderTarget) {
			for (let i = 0; i < 6; i++) {
				_gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer[i]);
				if (renderTargetProperties.__webglDepthbuffer) _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer[i]);
			}
		} else {
			_gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer);
			if (renderTargetProperties.__webglDepthbuffer) _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer);
			if (renderTargetProperties.__webglMultisampledFramebuffer) _gl.deleteFramebuffer(renderTargetProperties.__webglMultisampledFramebuffer);
			if (renderTargetProperties.__webglColorRenderbuffer) {
				for (let i = 0; i < renderTargetProperties.__webglColorRenderbuffer.length; i++) {
					if (renderTargetProperties.__webglColorRenderbuffer[i]) _gl.deleteRenderbuffer(renderTargetProperties.__webglColorRenderbuffer[i]);
				}
			}
			if (renderTargetProperties.__webglDepthRenderbuffer) _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthRenderbuffer);
		}
		if (renderTarget.isWebGLMultipleRenderTargets) {
			for (let i = 0, il = texture.length; i < il; i++) {
				const attachmentProperties = properties.get(texture[i]);
				if (attachmentProperties.__webglTexture) {
					_gl.deleteTexture(attachmentProperties.__webglTexture);
					info.memory.textures--;
				}
				properties.remove(texture[i]);
			}
		}
		properties.remove(texture);
		properties.remove(renderTarget);
	}
	let textureUnits = 0;
	function resetTextureUnits() {
		textureUnits = 0;
	}
	function allocateTextureUnit() {
		const textureUnit = textureUnits;
		if (textureUnit >= maxTextures) {
			console.warn('THREE.WebGLTextures: Trying to use ' + textureUnit + ' texture units while this GPU supports only ' + maxTextures);
		}
		textureUnits += 1;
		return textureUnit;
	}
	function getTextureCacheKey(texture) {
		const array = [];
		array.push(texture.wrapS);
		array.push(texture.wrapT);
		array.push(texture.wrapR || 0);
		array.push(texture.magFilter);
		array.push(texture.minFilter);
		array.push(texture.anisotropy);
		array.push(texture.internalFormat);
		array.push(texture.format);
		array.push(texture.type);
		array.push(texture.generateMipmaps);
		array.push(texture.premultiplyAlpha);
		array.push(texture.flipY);
		array.push(texture.unpackAlignment);
		array.push(texture.encoding);
		return array.join();
	}
	function setTexture2D(texture, slot) {
		const textureProperties = properties.get(texture);
		if (texture.isRenderTargetTexture === false && texture.version > 0 && textureProperties.__version !== texture.version) {
			const image = texture.image;
			if (image === null) {
				console.warn('THREE.WebGLRenderer: Texture marked for update but no image data found.');
			} else if (image.complete === false) {
				console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete');
			} else {
				uploadTexture(textureProperties, texture, slot);
				return;
			}
		}
		state.bindTexture(_gl.TEXTURE_2D, textureProperties.__webglTexture, _gl.TEXTURE0 + slot);
	}
	function setTexture2DArray(texture, slot) {
		const textureProperties = properties.get(texture);
		if (texture.version > 0 && textureProperties.__version !== texture.version) {
			uploadTexture(textureProperties, texture, slot);
			return;
		}
		state.bindTexture(_gl.TEXTURE_2D_ARRAY, textureProperties.__webglTexture, _gl.TEXTURE0 + slot);
	}
	const wrappingToGL = {
		[RepeatWrapping]: _gl.REPEAT,
		[ClampToEdgeWrapping]: _gl.CLAMP_TO_EDGE,
		[MirroredRepeatWrapping]: _gl.MIRRORED_REPEAT
	};
	const filterToGL = {
		[NearestFilter]: _gl.NEAREST,
		[NearestMipmapNearestFilter]: _gl.NEAREST_MIPMAP_NEAREST,
		[NearestMipmapLinearFilter]: _gl.NEAREST_MIPMAP_LINEAR,
		[LinearFilter]: _gl.LINEAR,
		[LinearMipmapNearestFilter]: _gl.LINEAR_MIPMAP_NEAREST,
		[LinearMipmapLinearFilter]: _gl.LINEAR_MIPMAP_LINEAR
	};
	function setTextureParameters(textureType, texture, supportsMips) {
		if (supportsMips) {
			_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, wrappingToGL[texture.wrapS]);
			_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, wrappingToGL[texture.wrapT]);
			if (textureType === _gl.TEXTURE_3D || textureType === _gl.TEXTURE_2D_ARRAY) {
				_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_R, wrappingToGL[texture.wrapR]);
			}
			_gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, filterToGL[texture.magFilter]);
			_gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, filterToGL[texture.minFilter]);
		} else {
			_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE);
			_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE);
			if (textureType === _gl.TEXTURE_3D || textureType === _gl.TEXTURE_2D_ARRAY) {
				_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_R, _gl.CLAMP_TO_EDGE);
			}
			if (texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping) {
				console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.');
			}
			_gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, filterFallback(texture.magFilter));
			_gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, filterFallback(texture.minFilter));
			if (texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter) {
				console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.');
			}
		}
		if (extensions.has('EXT_texture_filter_anisotropic') === true) {
			const extension = extensions.get('EXT_texture_filter_anisotropic');
			if (texture.magFilter === NearestFilter) return;
			if (texture.minFilter !== NearestMipmapLinearFilter && texture.minFilter !== LinearMipmapLinearFilter) return;
			if (texture.type === FloatType && extensions.has('OES_texture_float_linear') === false) return;
			if (isWebGL2 === false && texture.type === HalfFloatType && extensions.has('OES_texture_half_float_linear') === false) return;
			if (texture.anisotropy > 1 || properties.get(texture).__currentAnisotropy) {
				_gl.texParameterf(textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(texture.anisotropy, capabilities.getMaxAnisotropy()));
				properties.get(texture).__currentAnisotropy = texture.anisotropy;
			}
		}
	}
	function initTexture(textureProperties, texture) {
		let forceUpload = false;
		if (textureProperties.__webglInit === undefined) {
			textureProperties.__webglInit = true;
			texture.addEventListener('dispose', onTextureDispose);
		}
		const source = texture.source;
		let webglTextures = _sources.get(source);
		if (webglTextures === undefined) {
			webglTextures = {};
			_sources.set(source, webglTextures);
		}
		const textureCacheKey = getTextureCacheKey(texture);
		if (textureCacheKey !== textureProperties.__cacheKey) {
			if (webglTextures[textureCacheKey] === undefined) {
				webglTextures[textureCacheKey] = {
					texture: _gl.createTexture(),
					usedTimes: 0
				};
				info.memory.textures++;
				forceUpload = true;
			}
			webglTextures[textureCacheKey].usedTimes++;
			const webglTexture = webglTextures[textureProperties.__cacheKey];
			if (webglTexture !== undefined) {
				webglTextures[textureProperties.__cacheKey].usedTimes--;
				if (webglTexture.usedTimes === 0) {
					deleteTexture(texture);
				}
			}
			textureProperties.__cacheKey = textureCacheKey;
			textureProperties.__webglTexture = webglTextures[textureCacheKey].texture;
		}
		return forceUpload;
	}
	function uploadTexture(textureProperties, texture, slot) {
		let textureType = _gl.TEXTURE_2D;
		if (texture.isDataArrayTexture || texture.isCompressedArrayTexture) textureType = _gl.TEXTURE_2D_ARRAY;
		if (texture.isData3DTexture) textureType = _gl.TEXTURE_3D;
		const forceUpload = initTexture(textureProperties, texture);
		const source = texture.source;
		state.bindTexture(textureType, textureProperties.__webglTexture, _gl.TEXTURE0 + slot);
		const sourceProperties = properties.get(source);
		if (source.version !== sourceProperties.__version || forceUpload === true) {
			state.activeTexture(_gl.TEXTURE0 + slot);
			_gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);
			_gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha);
			_gl.pixelStorei(_gl.UNPACK_ALIGNMENT, texture.unpackAlignment);
			_gl.pixelStorei(_gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, _gl.NONE);
			const needsPowerOfTwo = textureNeedsPowerOfTwo(texture) && isPowerOfTwo$1(texture.image) === false;
			let image = resizeImage(texture.image, needsPowerOfTwo, false, maxTextureSize);
			image = verifyColorSpace(texture, image);
			const supportsMips = isPowerOfTwo$1(image) || isWebGL2,
				glFormat = utils.convert(texture.format, texture.encoding);
			let glType = utils.convert(texture.type),
				glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding, texture.isVideoTexture);
			setTextureParameters(textureType, texture, supportsMips);
			let mipmap;
			const mipmaps = texture.mipmaps;
			const useTexStorage = isWebGL2 && texture.isVideoTexture !== true;
			const allocateMemory = sourceProperties.__version === undefined || forceUpload === true;
			const levels = getMipLevels(texture, image, supportsMips);
			if (texture.isDepthTexture) ; else {
				if (mipmaps.length > 0 && supportsMips) {
					if (useTexStorage && allocateMemory) {
						state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
					}
					for (let i = 0, il = mipmaps.length; i < il; i++) {
						mipmap = mipmaps[i];
						if (useTexStorage) {
							state.texSubImage2D(_gl.TEXTURE_2D, i, 0, 0, glFormat, glType, mipmap);
						} else {
							state.texImage2D(_gl.TEXTURE_2D, i, glInternalFormat, glFormat, glType, mipmap);
						}
					}
					texture.generateMipmaps = false;
				} else {
					if (useTexStorage) {
						if (allocateMemory) {
							state.texStorage2D(_gl.TEXTURE_2D, levels, glInternalFormat, image.width, image.height);
						}
						state.texSubImage2D(_gl.TEXTURE_2D, 0, 0, 0, glFormat, glType, image);
					} else {
						state.texImage2D(_gl.TEXTURE_2D, 0, glInternalFormat, glFormat, glType, image);
					}
				}
			}
			if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
				generateMipmap(textureType);
			}
			sourceProperties.__version = source.version;
			if (texture.onUpdate) texture.onUpdate(texture);
		}
		textureProperties.__version = texture.version;
	}
	function setupFrameBufferTexture(framebuffer, renderTarget, texture, attachment, textureTarget) {
		const glFormat = utils.convert(texture.format, texture.encoding);
		const glType = utils.convert(texture.type);
		const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
		const renderTargetProperties = properties.get(renderTarget);
		if (!renderTargetProperties.__hasExternalTextures) {
			if (textureTarget === _gl.TEXTURE_3D || textureTarget === _gl.TEXTURE_2D_ARRAY) {
				state.texImage3D(textureTarget, 0, glInternalFormat, renderTarget.width, renderTarget.height, renderTarget.depth, 0, glFormat, glType, null);
			} else {
				state.texImage2D(textureTarget, 0, glInternalFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null);
			}
		}
		state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
		if (useMultisampledRTT(renderTarget)) {
			multisampledRTTExt.framebufferTexture2DMultisampleEXT(_gl.FRAMEBUFFER, attachment, textureTarget, properties.get(texture).__webglTexture, 0, getRenderTargetSamples(renderTarget));
		} else if (textureTarget === _gl.TEXTURE_2D || textureTarget >= _gl.TEXTURE_CUBE_MAP_POSITIVE_X && textureTarget <= _gl.TEXTURE_CUBE_MAP_NEGATIVE_Z) {
			_gl.framebufferTexture2D(_gl.FRAMEBUFFER, attachment, textureTarget, properties.get(texture).__webglTexture, 0);
		}
		state.bindFramebuffer(_gl.FRAMEBUFFER, null);
	}
	function setupRenderBufferStorage(renderbuffer, renderTarget, isMultisample) {
		_gl.bindRenderbuffer(_gl.RENDERBUFFER, renderbuffer);
		if (renderTarget.depthBuffer && !renderTarget.stencilBuffer) {
			let glInternalFormat = _gl.DEPTH_COMPONENT16;
			if (isMultisample || useMultisampledRTT(renderTarget)) {
				const depthTexture = renderTarget.depthTexture;
				if (depthTexture && depthTexture.isDepthTexture) {
					if (depthTexture.type === FloatType) {
						glInternalFormat = _gl.DEPTH_COMPONENT32F;
					} else if (depthTexture.type === UnsignedIntType) {
						glInternalFormat = _gl.DEPTH_COMPONENT24;
					}
				}
				const samples = getRenderTargetSamples(renderTarget);
				if (useMultisampledRTT(renderTarget)) {
					multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
				} else {
					_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
				}
			} else {
				_gl.renderbufferStorage(_gl.RENDERBUFFER, glInternalFormat, renderTarget.width, renderTarget.height);
			}
			_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);
		} else if (renderTarget.depthBuffer && renderTarget.stencilBuffer) {
			const samples = getRenderTargetSamples(renderTarget);
			if (isMultisample && useMultisampledRTT(renderTarget) === false) {
				_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, _gl.DEPTH24_STENCIL8, renderTarget.width, renderTarget.height);
			} else if (useMultisampledRTT(renderTarget)) {
				multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER, samples, _gl.DEPTH24_STENCIL8, renderTarget.width, renderTarget.height);
			} else {
				_gl.renderbufferStorage(_gl.RENDERBUFFER, _gl.DEPTH_STENCIL, renderTarget.width, renderTarget.height);
			}
			_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);
		} else {
			const textures = renderTarget.isWebGLMultipleRenderTargets === true ? renderTarget.texture : [renderTarget.texture];
			for (let i = 0; i < textures.length; i++) {
				const texture = textures[i];
				const glFormat = utils.convert(texture.format, texture.encoding);
				const glType = utils.convert(texture.type);
				const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
				const samples = getRenderTargetSamples(renderTarget);
				if (isMultisample && useMultisampledRTT(renderTarget) === false) {
					_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
				} else if (useMultisampledRTT(renderTarget)) {
					multisampledRTTExt.renderbufferStorageMultisampleEXT(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
				} else {
					_gl.renderbufferStorage(_gl.RENDERBUFFER, glInternalFormat, renderTarget.width, renderTarget.height);
				}
			}
		}
		_gl.bindRenderbuffer(_gl.RENDERBUFFER, null);
	}
	function setupDepthRenderbuffer(renderTarget) {
		const renderTargetProperties = properties.get(renderTarget);
		const isCube = renderTarget.isWebGLCubeRenderTarget === true;
		if (renderTarget.depthTexture && !renderTargetProperties.__autoAllocateDepthBuffer) ; else {
			if (isCube) {
				renderTargetProperties.__webglDepthbuffer = [];
				for (let i = 0; i < 6; i++) {
					state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer[i]);
					renderTargetProperties.__webglDepthbuffer[i] = _gl.createRenderbuffer();
					setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer[i], renderTarget, false);
				}
			} else {
				state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer);
				renderTargetProperties.__webglDepthbuffer = _gl.createRenderbuffer();
				setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer, renderTarget, false);
			}
		}
		state.bindFramebuffer(_gl.FRAMEBUFFER, null);
	}
	function rebindTextures(renderTarget, colorTexture, depthTexture) {
		const renderTargetProperties = properties.get(renderTarget);
		if (colorTexture !== undefined) {
			setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, renderTarget.texture, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_2D);
		}
		if (depthTexture !== undefined) {
			setupDepthRenderbuffer(renderTarget);
		}
	}
	function setupRenderTarget(renderTarget) {
		const texture = renderTarget.texture;
		const renderTargetProperties = properties.get(renderTarget);
		const textureProperties = properties.get(texture);
		renderTarget.addEventListener('dispose', onRenderTargetDispose);
		if (renderTarget.isWebGLMultipleRenderTargets !== true) {
			if (textureProperties.__webglTexture === undefined) {
				textureProperties.__webglTexture = _gl.createTexture();
			}
			textureProperties.__version = texture.version;
			info.memory.textures++;
		}
		const isCube = renderTarget.isWebGLCubeRenderTarget === true;
		const isMultipleRenderTargets = renderTarget.isWebGLMultipleRenderTargets === true;
		const supportsMips = isPowerOfTwo$1(renderTarget) || isWebGL2;
		if (isCube) ; else {
			renderTargetProperties.__webglFramebuffer = _gl.createFramebuffer();
			if (isMultipleRenderTargets) {
				if (capabilities.drawBuffers) {
					const textures = renderTarget.texture;
					for (let i = 0, il = textures.length; i < il; i++) {
						const attachmentProperties = properties.get(textures[i]);
						if (attachmentProperties.__webglTexture === undefined) {
							attachmentProperties.__webglTexture = _gl.createTexture();
							info.memory.textures++;
						}
					}
				} else {
					console.warn('THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.');
				}
			}
			if (isWebGL2 && renderTarget.samples > 0 && useMultisampledRTT(renderTarget) === false) {
				const textures = isMultipleRenderTargets ? texture : [texture];
				renderTargetProperties.__webglMultisampledFramebuffer = _gl.createFramebuffer();
				renderTargetProperties.__webglColorRenderbuffer = [];
				state.bindFramebuffer(_gl.FRAMEBUFFER, renderTargetProperties.__webglMultisampledFramebuffer);
				for (let i = 0; i < textures.length; i++) {
					const texture = textures[i];
					renderTargetProperties.__webglColorRenderbuffer[i] = _gl.createRenderbuffer();
					_gl.bindRenderbuffer(_gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer[i]);
					const glFormat = utils.convert(texture.format, texture.encoding);
					const glType = utils.convert(texture.type);
					const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding, renderTarget.isXRRenderTarget === true);
					const samples = getRenderTargetSamples(renderTarget);
					_gl.renderbufferStorageMultisample(_gl.RENDERBUFFER, samples, glInternalFormat, renderTarget.width, renderTarget.height);
					_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0 + i, _gl.RENDERBUFFER, renderTargetProperties.__webglColorRenderbuffer[i]);
				}
				_gl.bindRenderbuffer(_gl.RENDERBUFFER, null);
				if (renderTarget.depthBuffer) {
					renderTargetProperties.__webglDepthRenderbuffer = _gl.createRenderbuffer();
					setupRenderBufferStorage(renderTargetProperties.__webglDepthRenderbuffer, renderTarget, true);
				}
				state.bindFramebuffer(_gl.FRAMEBUFFER, null);
			}
		}
		if (isCube) ; else if (isMultipleRenderTargets) {
			const textures = renderTarget.texture;
			for (let i = 0, il = textures.length; i < il; i++) {
				const attachment = textures[i];
				const attachmentProperties = properties.get(attachment);
				state.bindTexture(_gl.TEXTURE_2D, attachmentProperties.__webglTexture);
				setTextureParameters(_gl.TEXTURE_2D, attachment, supportsMips);
				setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, attachment, _gl.COLOR_ATTACHMENT0 + i, _gl.TEXTURE_2D);
				if (textureNeedsGenerateMipmaps(attachment, supportsMips)) {
					generateMipmap(_gl.TEXTURE_2D);
				}
			}
			state.unbindTexture();
		} else {
			let glTextureType = _gl.TEXTURE_2D;
			if (renderTarget.isWebGL3DRenderTarget || renderTarget.isWebGLArrayRenderTarget) {
				if (isWebGL2) {
					glTextureType = renderTarget.isWebGL3DRenderTarget ? _gl.TEXTURE_3D : _gl.TEXTURE_2D_ARRAY;
				} else {
					console.error('THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.');
				}
			}
			state.bindTexture(glTextureType, textureProperties.__webglTexture);
			setTextureParameters(glTextureType, texture, supportsMips);
			setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, texture, _gl.COLOR_ATTACHMENT0, glTextureType);
			if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
				generateMipmap(glTextureType);
			}
			state.unbindTexture();
		}
		if (renderTarget.depthBuffer) {
			setupDepthRenderbuffer(renderTarget);
		}
	}
	function getRenderTargetSamples(renderTarget) {
		return Math.min(maxSamples, renderTarget.samples);
	}
	function useMultisampledRTT(renderTarget) {
		const renderTargetProperties = properties.get(renderTarget);
		return isWebGL2 && renderTarget.samples > 0 && extensions.has('WEBGL_multisampled_render_to_texture') === true && renderTargetProperties.__useRenderToTexture !== false;
	}
	function verifyColorSpace(texture, image) {
		if (texture.isCompressedTexture === true || texture.isVideoTexture === true || texture.format === _SRGBAFormat) return image;
		return image;
	}
	this.allocateTextureUnit = allocateTextureUnit;
	this.resetTextureUnits = resetTextureUnits;
	this.setTexture2D = setTexture2D;
	this.setTexture2DArray = setTexture2DArray;
	this.rebindTextures = rebindTextures;
	this.setupRenderTarget = setupRenderTarget;
	this.useMultisampledRTT = useMultisampledRTT;
}

function WebGLUtils(gl, extensions, capabilities) {
	function convert(p, encoding = null) {
		if (p === UnsignedByteType) return gl.UNSIGNED_BYTE;
		if (p === UnsignedShort4444Type) return gl.UNSIGNED_SHORT_4_4_4_4;
		if (p === UnsignedShort5551Type) return gl.UNSIGNED_SHORT_5_5_5_1;
		if (p === ByteType) return gl.BYTE;
		if (p === ShortType) return gl.SHORT;
		if (p === UnsignedShortType) return gl.UNSIGNED_SHORT;
		if (p === IntType) return gl.INT;
		if (p === UnsignedIntType) return gl.UNSIGNED_INT;
		if (p === FloatType) return gl.FLOAT;
		if (p === RGBAFormat) return gl.RGBA;
		return gl[p] !== undefined ? gl[p] : null;
	}
	return {
		convert: convert
	};
}

function WebGLMaterials(renderer, properties) {
	function refreshMaterialUniforms(uniforms, material, pixelRatio, height, transmissionRenderTarget) {
		if (material.isMeshBasicMaterial) {
			refreshUniformsCommon(uniforms, material);
		} else if (material.isMeshPhongMaterial) {
			refreshUniformsCommon(uniforms, material);
			refreshUniformsPhong(uniforms, material);
		} else if (material.isMeshDepthMaterial) {
			refreshUniformsCommon(uniforms, material);
		} else if (material.isShadowMaterial) {
			uniforms.color.value.copy(material.color);
			uniforms.opacity.value = material.opacity;
		} else if (material.isShaderMaterial) {
			material.uniformsNeedUpdate = false;
		}
	}
	function refreshUniformsCommon(uniforms, material) {
		uniforms.opacity.value = material.opacity;
		if (material.color) {
			uniforms.diffuse.value.copy(material.color);
		}
		if (material.emissive) {
			uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity);
		}
		if (material.map) {
			uniforms.map.value = material.map;
		}
		if (material.emissiveMap) {
			uniforms.emissiveMap.value = material.emissiveMap;
		}
		if (material.normalMap) {
			uniforms.normalMap.value = material.normalMap;
			uniforms.normalScale.value.copy(material.normalScale);
			if (material.side === BackSide) uniforms.normalScale.value.negate();
		}
		if (material.specularMap) {
			uniforms.specularMap.value = material.specularMap;
		}
		let uvScaleMap;
		if (material.map) {
			uvScaleMap = material.map;
		} else if (material.specularMap) {
			uvScaleMap = material.specularMap;
		} else if (material.normalMap) {
			uvScaleMap = material.normalMap;
		} else if (material.emissiveMap) {
			uvScaleMap = material.emissiveMap;
		} else if (material.specularIntensityMap) {
			uvScaleMap = material.specularIntensityMap;
		} else if (material.specularColorMap) {
			uvScaleMap = material.specularColorMap;
		}
		if (uvScaleMap !== undefined) {
			if (uvScaleMap.isWebGLRenderTarget) {
				uvScaleMap = uvScaleMap.texture;
			}
			if (uvScaleMap.matrixAutoUpdate === true) {
				uvScaleMap.updateMatrix();
			}
			uniforms.uvTransform.value.copy(uvScaleMap.matrix);
		}
	}
	function refreshUniformsPhong(uniforms, material) {
		uniforms.specular.value.copy(material.specular);
		uniforms.shininess.value = Math.max(material.shininess, 1e-4);
	}
	return {
		refreshMaterialUniforms: refreshMaterialUniforms
	};
}

function createCanvasElement() {
	const canvas = createElementNS('canvas');
	canvas.style.display = 'block';
	return canvas;
}
function WebGLRenderer(parameters = {}) {
	const _canvas = parameters.canvas !== undefined ? parameters.canvas : createCanvasElement(),
		_context = parameters.context !== undefined ? parameters.context : null,
		_depth = parameters.depth !== undefined ? parameters.depth : true,
		_stencil = parameters.stencil !== undefined ? parameters.stencil : true,
		_antialias = parameters.antialias !== undefined ? parameters.antialias : false,
		_premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true,
		_preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : false,
		_powerPreference = parameters.powerPreference !== undefined ? parameters.powerPreference : 'default',
		_failIfMajorPerformanceCaveat = parameters.failIfMajorPerformanceCaveat !== undefined ? parameters.failIfMajorPerformanceCaveat : false;
	let currentRenderList = null;
	let currentRenderState = null;
	const renderListStack = [];
	const renderStateStack = [];
	this.domElement = _canvas;
	this.debug = {
		checkShaderErrors: true
	};
	this.sortObjects = true;
	this.outputEncoding = LinearEncoding;
	this.physicallyCorrectLights = false;
	this.toneMapping = NoToneMapping;
	this.toneMappingExposure = 1.0;
	const _this = this;
	let _isContextLost = false;
	let _currentActiveCubeFace = 0;
	let _currentActiveMipmapLevel = 0;
	let _currentRenderTarget = null;
	let _currentMaterialId = -1;
	let _currentCamera = null;
	const _currentViewport = new Vector4();
	const _currentScissor = new Vector4();
	let _currentScissorTest = null;
	let _width = _canvas.width;
	let _height = _canvas.height;
	let _pixelRatio = 1;
	let _opaqueSort = null;
	let _transparentSort = null;
	const _viewport = new Vector4(0, 0, _width, _height);
	const _scissor = new Vector4(0, 0, _width, _height);
	let _scissorTest = false;
	const _frustum = new Frustum();
	let _transmissionRenderTarget = null;
	const _projScreenMatrix = new Matrix4();
	const _vector2 = new Vector2();
	const _vector3 = new Vector3();
	const _emptyScene = {
		background: null,
		fog: null,
		environment: null,
		overrideMaterial: null,
		isScene: true
	};
	function getTargetPixelRatio() {
		return _currentRenderTarget === null ? _pixelRatio : 1;
	}
	let _gl = _context;
	function getContext(contextNames, contextAttributes) {
		for (let i = 0; i < contextNames.length; i++) {
			const contextName = contextNames[i];
			const context = _canvas.getContext(contextName, contextAttributes);
			if (context !== null) return context;
		}
		return null;
	}
	try {
		const contextAttributes = {
			alpha: true,
			depth: _depth,
			stencil: _stencil,
			antialias: _antialias,
			premultipliedAlpha: _premultipliedAlpha,
			preserveDrawingBuffer: _preserveDrawingBuffer,
			powerPreference: _powerPreference,
			failIfMajorPerformanceCaveat: _failIfMajorPerformanceCaveat
		};
		if ('setAttribute' in _canvas) _canvas.setAttribute('data-engine', `three.js r${REVISION}`);
		_canvas.addEventListener('webglcontextlost', onContextLost, false);
		_canvas.addEventListener('webglcontextrestored', onContextRestore, false);
		_canvas.addEventListener('webglcontextcreationerror', onContextCreationError, false);
		if (_gl === null) {
			const contextNames = ['webgl2', 'webgl', 'experimental-webgl'];
			if (_this.isWebGL1Renderer === true) {
				contextNames.shift();
			}
			_gl = getContext(contextNames, contextAttributes);
			if (_gl === null) {
				if (getContext(contextNames)) {
					throw new Error('Error creating WebGL context with your selected attributes.');
				} else {
					throw new Error('Error creating WebGL context.');
				}
			}
		}
		if (_gl.getShaderPrecisionFormat === undefined) {
			_gl.getShaderPrecisionFormat = function () {
				return {
					'rangeMin': 1,
					'rangeMax': 1,
					'precision': 1
				};
			};
		}
	} catch (error) {
		console.error('THREE.WebGLRenderer: ' + error.message);
		throw error;
	}
	let extensions, capabilities, state, info;
	let properties, textures, cubemaps, cubeuvmaps, attributes, geometries, objects;
	let programCache, materials, renderLists, renderStates, shadowMap;
	let background, bufferRenderer, indexedBufferRenderer;
	let utils, bindingStates;
	function initGLContext() {
		extensions = new WebGLExtensions(_gl);
		capabilities = new WebGLCapabilities(_gl, extensions, parameters);
		extensions.init(capabilities);
		utils = new WebGLUtils(_gl);
		state = new WebGLState(_gl, extensions, capabilities);
		info = new WebGLInfo(_gl);
		properties = new WebGLProperties();
		textures = new WebGLTextures(_gl, extensions, state, properties, capabilities, utils, info);
		attributes = new WebGLAttributes(_gl, capabilities);
		bindingStates = new WebGLBindingStates(_gl, extensions, attributes, capabilities);
		geometries = new WebGLGeometries(_gl, attributes, info, bindingStates);
		objects = new WebGLObjects(_gl, geometries, attributes, info);
		programCache = new WebGLPrograms(_this, cubemaps, cubeuvmaps, extensions, capabilities, bindingStates);
		materials = new WebGLMaterials();
		renderLists = new WebGLRenderLists();
		renderStates = new WebGLRenderStates();
		shadowMap = new WebGLShadowMap(_this, objects, capabilities);
		bufferRenderer = new WebGLBufferRenderer(_gl, extensions, info, capabilities);
		indexedBufferRenderer = new WebGLIndexedBufferRenderer(_gl, extensions, info, capabilities);
		info.programs = programCache.programs;
		_this.capabilities = capabilities;
		_this.extensions = extensions;
		_this.properties = properties;
		_this.renderLists = renderLists;
		_this.shadowMap = shadowMap;
		_this.state = state;
		_this.info = info;
	}
	initGLContext();
	this.getContext = function () {
		return _gl;
	};
	this.getContextAttributes = function () {
		return _gl.getContextAttributes();
	};
	this.setPixelRatio = function (value) {
		if (value === undefined) return;
		_pixelRatio = value;
		this.setSize(_width, _height, false);
	};
	this.getSize = function (target) {
		return target.set(_width, _height);
	};
	this.setSize = function (width, height, updateStyle) {
		_width = width;
		_height = height;
		_canvas.width = Math.floor(width * _pixelRatio);
		_canvas.height = Math.floor(height * _pixelRatio);
		if (updateStyle !== false) {
			_canvas.style.width = width + 'px';
			_canvas.style.height = height + 'px';
		}
		this.setViewport(0, 0, width, height);
	};
	this.getDrawingBufferSize = function (target) {
		return target.set(_width * _pixelRatio, _height * _pixelRatio).floor();
	};
	this.getViewport = function (target) {
		return target.copy(_viewport);
	};
	this.setViewport = function (x, y, width, height) {
		if (x.isVector4) {
			_viewport.set(x.x, x.y, x.z, x.w);
		} else {
			_viewport.set(x, y, width, height);
		}
		state.viewport(_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).floor());
	};
	this.setScissorTest = function (boolean) {
		state.setScissorTest(_scissorTest = boolean);
	};
	this.getClearColor = function (target) {
		return target.copy(background.getClearColor());
	};
	this.setClearColor = function () {};
	this.clear = function (color = true, depth = true, stencil = true) {
		let bits = 0;
		if (color) bits |= _gl.COLOR_BUFFER_BIT;
		if (depth) bits |= _gl.DEPTH_BUFFER_BIT;
		if (stencil) bits |= _gl.STENCIL_BUFFER_BIT;
		_gl.clear(bits);
	};
	this.clearColor = function () {
		this.clear(true, false, false);
	};
	this.clearDepth = function () {
		this.clear(false, true, false);
	};
	this.clearStencil = function () {
		this.clear(false, false, true);
	};
	this.dispose = function () {
		_canvas.removeEventListener('webglcontextlost', onContextLost, false);
		_canvas.removeEventListener('webglcontextrestored', onContextRestore, false);
		_canvas.removeEventListener('webglcontextcreationerror', onContextCreationError, false);
		renderLists.dispose();
		renderStates.dispose();
		properties.dispose();
		objects.dispose();
		bindingStates.dispose();
		programCache.dispose();
		if (_transmissionRenderTarget) {
			_transmissionRenderTarget.dispose();
			_transmissionRenderTarget = null;
		}
	};
	function onContextLost(event) {
		event.preventDefault();
		console.log('THREE.WebGLRenderer: Context Lost.');
		_isContextLost = true;
	}
	function onContextRestore() {
		console.log('THREE.WebGLRenderer: Context Restored.');
		_isContextLost = false;
		const infoAutoReset = info.autoReset;
		const shadowMapEnabled = shadowMap.enabled;
		const shadowMapAutoUpdate = shadowMap.autoUpdate;
		const shadowMapNeedsUpdate = shadowMap.needsUpdate;
		const shadowMapType = shadowMap.type;
		initGLContext();
		info.autoReset = infoAutoReset;
		shadowMap.enabled = shadowMapEnabled;
		shadowMap.autoUpdate = shadowMapAutoUpdate;
		shadowMap.needsUpdate = shadowMapNeedsUpdate;
		shadowMap.type = shadowMapType;
	}
	function onContextCreationError(event) {
		console.error('THREE.WebGLRenderer: A WebGL context could not be created. Reason: ', event.statusMessage);
	}
	function onMaterialDispose(event) {
		const material = event.target;
		material.removeEventListener('dispose', onMaterialDispose);
		deallocateMaterial(material);
	}
	function deallocateMaterial(material) {
		releaseMaterialProgramReferences(material);
		properties.remove(material);
	}
	function releaseMaterialProgramReferences(material) {
		const programs = properties.get(material).programs;
		if (programs !== undefined) {
			programs.forEach(function (program) {
				programCache.releaseProgram(program);
			});
			if (material.isShaderMaterial) {
				programCache.releaseShaderCache(material);
			}
		}
	}
	this.renderBufferDirect = function (camera, scene, geometry, material, object, group) {
		if (scene === null) scene = _emptyScene;
		const frontFaceCW = object.isMesh && object.matrixWorld.determinant() < 0;
		const program = setProgram(camera, scene, geometry, material, object);
		state.setMaterial(material, frontFaceCW);
		let index = geometry.index;
		let rangeFactor = 1;
		if (material.wireframe === true) {
			index = geometries.getWireframeAttribute(geometry);
			rangeFactor = 2;
		}
		const drawRange = geometry.drawRange;
		const position = geometry.attributes.position;
		let drawStart = drawRange.start * rangeFactor;
		let drawEnd = (drawRange.start + drawRange.count) * rangeFactor;
		if (group !== null) {
			drawStart = Math.max(drawStart, group.start * rangeFactor);
			drawEnd = Math.min(drawEnd, (group.start + group.count) * rangeFactor);
		}
		if (index !== null) {
			drawStart = Math.max(drawStart, 0);
			drawEnd = Math.min(drawEnd, index.count);
		} else if (position !== undefined && position !== null) {
			drawStart = Math.max(drawStart, 0);
			drawEnd = Math.min(drawEnd, position.count);
		}
		const drawCount = drawEnd - drawStart;
		if (drawCount < 0 || drawCount === Infinity) return;
		bindingStates.setup(object, material, program, geometry, index);
		let attribute;
		let renderer = bufferRenderer;
		if (index !== null) {
			attribute = attributes.get(index);
			renderer = indexedBufferRenderer;
			renderer.setIndex(attribute);
		}
		if (object.isMesh) {
			if (material.wireframe === true) {
				state.setLineWidth(material.wireframeLinewidth * getTargetPixelRatio());
				renderer.setMode(_gl.LINES);
			} else {
				renderer.setMode(_gl.TRIANGLES);
			}
		} else if (object.isLine) {
			let lineWidth = material.linewidth;
			if (lineWidth === undefined) lineWidth = 1;
			state.setLineWidth(lineWidth * getTargetPixelRatio());
			if (object.isLineSegments) {
				renderer.setMode(_gl.LINES);
			} else if (object.isLineLoop) {
				renderer.setMode(_gl.LINE_LOOP);
			} else {
				renderer.setMode(_gl.LINE_STRIP);
			}
		} else if (object.isPoints) {
			renderer.setMode(_gl.POINTS);
		}
		if (object.isInstancedMesh) {
			renderer.renderInstances(drawStart, drawCount, object.count);
		} else {
			renderer.render(drawStart, drawCount);
		}
	};
	this.render = function (scene, camera) {
		if (camera !== undefined && camera.isCamera !== true) {
			console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
			return;
		}
		if (_isContextLost === true) return;
		if (scene.matrixWorldAutoUpdate === true) scene.updateMatrixWorld();
		if (camera.parent === null && camera.matrixWorldAutoUpdate === true) camera.updateMatrixWorld();
		if (scene.isScene === true) scene.onBeforeRender(_this, scene, camera, _currentRenderTarget);
		currentRenderState = renderStates.get(scene, renderStateStack.length);
		currentRenderState.init();
		renderStateStack.push(currentRenderState);
		_projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
		_frustum.setFromProjectionMatrix(_projScreenMatrix);
		currentRenderList = renderLists.get(scene, renderListStack.length);
		currentRenderList.init();
		renderListStack.push(currentRenderList);
		projectObject(scene, camera, 0, _this.sortObjects);
		currentRenderList.finish();
		if (_this.sortObjects === true) {
			currentRenderList.sort(_opaqueSort, _transparentSort);
		}
		const shadowsArray = currentRenderState.state.shadowsArray;
		shadowMap.render(shadowsArray, scene, camera);
		if (this.info.autoReset === true) this.info.reset();
		currentRenderState.setupLights(_this.physicallyCorrectLights);
		if (camera.isArrayCamera) {
			const cameras = camera.cameras;
			for (let i = 0, l = cameras.length; i < l; i++) {
				const camera2 = cameras[i];
				renderScene(currentRenderList, scene, camera2, camera2.viewport);
			}
		} else {
			renderScene(currentRenderList, scene, camera);
		}
		if (_currentRenderTarget !== null) {
			textures.updateMultisampleRenderTarget(_currentRenderTarget);
			textures.updateRenderTargetMipmap(_currentRenderTarget);
		}
		if (scene.isScene === true) scene.onAfterRender(_this, scene, camera);
		bindingStates.resetDefaultState();
		_currentMaterialId = -1;
		_currentCamera = null;
		renderStateStack.pop();
		if (renderStateStack.length > 0) {
			currentRenderState = renderStateStack[renderStateStack.length - 1];
		} else {
			currentRenderState = null;
		}
		renderListStack.pop();
		if (renderListStack.length > 0) {
			currentRenderList = renderListStack[renderListStack.length - 1];
		} else {
			currentRenderList = null;
		}
	};
	function projectObject(object, camera, groupOrder, sortObjects) {
		if (object.visible === false) return;
		const visible = object.layers.test(camera.layers);
		if (visible) {
			if (object.isGroup) {
				groupOrder = object.renderOrder;
			} else if (object.isLOD) {
				if (object.autoUpdate === true) object.update(camera);
			} else if (object.isLight) {
				currentRenderState.pushLight(object);
				if (object.castShadow) {
					currentRenderState.pushShadow(object);
				}
			} else if (object.isSprite) {
				if (!object.frustumCulled || _frustum.intersectsSprite(object)) {
					if (sortObjects) {
						_vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix);
					}
					const geometry = objects.update(object);
					const material = object.material;
					if (material.visible) {
						currentRenderList.push(object, geometry, material, groupOrder, _vector3.z, null);
					}
				}
			} else if (object.isMesh || object.isLine || object.isPoints) {
				if (!object.frustumCulled || _frustum.intersectsObject(object)) {
					if (sortObjects) {
						_vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix);
					}
					const geometry = objects.update(object);
					const material = object.material;
					if (Array.isArray(material)) {
						const groups = geometry.groups;
						for (let i = 0, l = groups.length; i < l; i++) {
							const group = groups[i];
							const groupMaterial = material[group.materialIndex];
							if (groupMaterial && groupMaterial.visible) {
								currentRenderList.push(object, geometry, groupMaterial, groupOrder, _vector3.z, group);
							}
						}
					} else if (material.visible) {
						currentRenderList.push(object, geometry, material, groupOrder, _vector3.z, null);
					}
				}
			}
		}
		const children = object.children;
		for (let i = 0, l = children.length; i < l; i++) {
			projectObject(children[i], camera, groupOrder, sortObjects);
		}
	}
	function renderScene(currentRenderList, scene, camera, viewport) {
		const opaqueObjects = currentRenderList.opaque;
		const transmissiveObjects = currentRenderList.transmissive;
		const transparentObjects = currentRenderList.transparent;
		currentRenderState.setupLightsView(camera);
		if (transmissiveObjects.length > 0) renderTransmissionPass(opaqueObjects, scene, camera);
		if (viewport) state.viewport(_currentViewport.copy(viewport));
		if (opaqueObjects.length > 0) renderObjects(opaqueObjects, scene, camera);
		if (transmissiveObjects.length > 0) renderObjects(transmissiveObjects, scene, camera);
		if (transparentObjects.length > 0) renderObjects(transparentObjects, scene, camera);
		state.buffers.depth.setTest(true);
		state.buffers.depth.setMask(true);
		state.buffers.color.setMask(true);
		state.setPolygonOffset(false);
	}
	function renderTransmissionPass(opaqueObjects, scene, camera) {
		const isWebGL2 = capabilities.isWebGL2;
		if (_transmissionRenderTarget === null) {
			_transmissionRenderTarget = new WebGLRenderTarget(1, 1, {
				generateMipmaps: true,
				type: extensions.has('EXT_color_buffer_half_float') ? HalfFloatType : UnsignedByteType,
				minFilter: LinearMipmapLinearFilter,
				samples: isWebGL2 && _antialias === true ? 4 : 0
			});
		}
		_this.getDrawingBufferSize(_vector2);
		if (isWebGL2) {
			_transmissionRenderTarget.setSize(_vector2.x, _vector2.y);
		} else {
			_transmissionRenderTarget.setSize(floorPowerOfTwo(_vector2.x), floorPowerOfTwo(_vector2.y));
		}
		const currentRenderTarget = _this.getRenderTarget();
		_this.setRenderTarget(_transmissionRenderTarget);
		_this.clear();
		const currentToneMapping = _this.toneMapping;
		_this.toneMapping = NoToneMapping;
		renderObjects(opaqueObjects, scene, camera);
		_this.toneMapping = currentToneMapping;
		textures.updateMultisampleRenderTarget(_transmissionRenderTarget);
		textures.updateRenderTargetMipmap(_transmissionRenderTarget);
		_this.setRenderTarget(currentRenderTarget);
	}
	function renderObjects(renderList, scene, camera) {
		const overrideMaterial = scene.isScene === true ? scene.overrideMaterial : null;
		for (let i = 0, l = renderList.length; i < l; i++) {
			const renderItem = renderList[i];
			const object = renderItem.object;
			const geometry = renderItem.geometry;
			const material = overrideMaterial === null ? renderItem.material : overrideMaterial;
			const group = renderItem.group;
			if (object.layers.test(camera.layers)) {
				renderObject(object, scene, camera, geometry, material, group);
			}
		}
	}
	function renderObject(object, scene, camera, geometry, material, group) {
		object.onBeforeRender(_this, scene, camera, geometry, material, group);
		object.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);
		object.normalMatrix.getNormalMatrix(object.modelViewMatrix);
		material.onBeforeRender(_this, scene, camera, geometry, object, group);
		if (material.transparent === true && material.side === TwoPassDoubleSide) {
			material.side = BackSide;
			material.needsUpdate = true;
			_this.renderBufferDirect(camera, scene, geometry, material, object, group);
			material.side = FrontSide;
			material.needsUpdate = true;
			_this.renderBufferDirect(camera, scene, geometry, material, object, group);
			material.side = TwoPassDoubleSide;
		} else {
			_this.renderBufferDirect(camera, scene, geometry, material, object, group);
		}
		object.onAfterRender(_this, scene, camera, geometry, material, group);
	}
	function getProgram(material, scene, object) {
		if (scene.isScene !== true) scene = _emptyScene;
		const materialProperties = properties.get(material);
		const lights = currentRenderState.state.lights;
		const shadowsArray = currentRenderState.state.shadowsArray;
		const lightsStateVersion = lights.state.version;
		const parameters = programCache.getParameters(material, lights.state, shadowsArray, scene, object);
		const programCacheKey = programCache.getProgramCacheKey(parameters);
		let programs = materialProperties.programs;
		if (programs === undefined) {
			material.addEventListener('dispose', onMaterialDispose);
			programs = new Map();
			materialProperties.programs = programs;
		}
		let program = programs.get(programCacheKey);
		if (program !== undefined) {
			if (materialProperties.currentProgram === program && materialProperties.lightsStateVersion === lightsStateVersion) {
				updateCommonMaterialProperties(material, parameters);
				return program;
			}
		} else {
			parameters.uniforms = programCache.getUniforms(material);
			material.onBuild(object, parameters, _this);
			material.onBeforeCompile(parameters, _this);
			program = programCache.acquireProgram(parameters, programCacheKey);
			programs.set(programCacheKey, program);
			materialProperties.uniforms = parameters.uniforms;
		}
		const uniforms = materialProperties.uniforms;
		updateCommonMaterialProperties(material, parameters);
		materialProperties.needsLights = materialNeedsLights(material);
		materialProperties.lightsStateVersion = lightsStateVersion;
		if (materialProperties.needsLights) {
			uniforms.ambientLightColor.value = lights.state.ambient;
			uniforms.lightProbe.value = lights.state.probe;
			uniforms.directionalLights.value = lights.state.directional;
			uniforms.directionalLightShadows.value = lights.state.directionalShadow;
			uniforms.spotLights.value = lights.state.spot;
			uniforms.spotLightShadows.value = lights.state.spotShadow;
			uniforms.rectAreaLights.value = lights.state.rectArea;
			uniforms.ltc_1.value = lights.state.rectAreaLTC1;
			uniforms.ltc_2.value = lights.state.rectAreaLTC2;
			uniforms.pointLights.value = lights.state.point;
			uniforms.pointLightShadows.value = lights.state.pointShadow;
			uniforms.hemisphereLights.value = lights.state.hemi;
			uniforms.directionalShadowMap.value = lights.state.directionalShadowMap;
			uniforms.directionalShadowMatrix.value = lights.state.directionalShadowMatrix;
			uniforms.spotShadowMap.value = lights.state.spotShadowMap;
			uniforms.spotLightMatrix.value = lights.state.spotLightMatrix;
			uniforms.spotLightMap.value = lights.state.spotLightMap;
			uniforms.pointShadowMap.value = lights.state.pointShadowMap;
			uniforms.pointShadowMatrix.value = lights.state.pointShadowMatrix;
		}
		const progUniforms = program.getUniforms();
		const uniformsList = WebGLUniforms.seqWithValue(progUniforms.seq, uniforms);
		materialProperties.currentProgram = program;
		materialProperties.uniformsList = uniformsList;
		return program;
	}
	function updateCommonMaterialProperties(material, parameters) {
		const materialProperties = properties.get(material);
		materialProperties.instancing = parameters.instancing;
		materialProperties.numIntersection = parameters.numClipIntersection;
		materialProperties.vertexAlphas = parameters.vertexAlphas;
		materialProperties.vertexTangents = parameters.vertexTangents;
	}
	function setProgram(camera, scene, geometry, material, object) {
		if (scene.isScene !== true) scene = _emptyScene;
		textures.resetTextureUnits();
		const vertexAlphas = material.vertexColors === true && !!geometry.attributes.color && geometry.attributes.color.itemSize === 4;
		const vertexTangents = !!material.normalMap && !!geometry.attributes.tangent;
		const materialProperties = properties.get(material);
		const lights = currentRenderState.state.lights;
		let needsProgramChange = false;
		if (material.version === materialProperties.__version) {
			if (materialProperties.needsLights && materialProperties.lightsStateVersion !== lights.state.version) {
				needsProgramChange = true;
			} else if (object.isInstancedMesh && materialProperties.instancing === false) {
				needsProgramChange = true;
			} else if (!object.isInstancedMesh && materialProperties.instancing === true) {
				needsProgramChange = true;
			} else if (materialProperties.vertexAlphas !== vertexAlphas) {
				needsProgramChange = true;
			} else if (materialProperties.vertexTangents !== vertexTangents) {
				needsProgramChange = true;
			}
		} else {
			needsProgramChange = true;
			materialProperties.__version = material.version;
		}
		let program = materialProperties.currentProgram;
		if (needsProgramChange === true) {
			program = getProgram(material, scene, object);
		}
		let refreshProgram = false;
		let refreshMaterial = false;
		let refreshLights = false;
		const p_uniforms = program.getUniforms(),
			m_uniforms = materialProperties.uniforms;
		if (state.useProgram(program.program)) {
			refreshProgram = true;
			refreshMaterial = true;
			refreshLights = true;
		}
		if (material.id !== _currentMaterialId) {
			_currentMaterialId = material.id;
			refreshMaterial = true;
		}
		if (refreshProgram || _currentCamera !== camera) {
			p_uniforms.setValue(_gl, 'projectionMatrix', camera.projectionMatrix);
			if (capabilities.logarithmicDepthBuffer) {
				p_uniforms.setValue(_gl, 'logDepthBufFC', 2.0 / (Math.log(camera.far + 1.0) / Math.LN2));
			}
			if (_currentCamera !== camera) {
				_currentCamera = camera;
				refreshMaterial = true;
				refreshLights = true;
			}
			if (material.isMeshPhongMaterial || material.isShaderMaterial || material.envMap) {
				const uCamPos = p_uniforms.map.cameraPosition;
				if (uCamPos !== undefined) {
					uCamPos.setValue(_gl, _vector3.setFromMatrixPosition(camera.matrixWorld));
				}
			}
			if (material.isMeshPhongMaterial || material.isMeshBasicMaterial || material.isShaderMaterial || material.isMeshBasicMaterial) {
				p_uniforms.setValue(_gl, 'isOrthographic', camera.isOrthographicCamera === true);
			}
			if (material.isMeshPhongMaterial || material.isMeshBasicMaterial || material.isShaderMaterial || material.isShadowMaterial) {
				p_uniforms.setValue(_gl, 'viewMatrix', camera.matrixWorldInverse);
			}
		}
		if (refreshMaterial || materialProperties.receiveShadow !== object.receiveShadow) {
			materialProperties.receiveShadow = object.receiveShadow;
			p_uniforms.setValue(_gl, 'receiveShadow', object.receiveShadow);
		}
		if (refreshMaterial) {
			p_uniforms.setValue(_gl, 'toneMappingExposure', _this.toneMappingExposure);
			if (materialProperties.needsLights) {
				markUniformsLightsNeedsUpdate(m_uniforms, refreshLights);
			}
			materials.refreshMaterialUniforms(m_uniforms, material, _pixelRatio, _height, _transmissionRenderTarget);
			WebGLUniforms.upload(_gl, materialProperties.uniformsList, m_uniforms, textures);
		}
		if (material.isShaderMaterial && material.uniformsNeedUpdate === true) {
			WebGLUniforms.upload(_gl, materialProperties.uniformsList, m_uniforms, textures);
			material.uniformsNeedUpdate = false;
		}
		p_uniforms.setValue(_gl, 'modelViewMatrix', object.modelViewMatrix);
		p_uniforms.setValue(_gl, 'normalMatrix', object.normalMatrix);
		p_uniforms.setValue(_gl, 'modelMatrix', object.matrixWorld);
		return program;
	}
	function markUniformsLightsNeedsUpdate(uniforms, value) {
		uniforms.ambientLightColor.needsUpdate = value;
		uniforms.lightProbe.needsUpdate = value;
		uniforms.directionalLights.needsUpdate = value;
		uniforms.directionalLightShadows.needsUpdate = value;
		uniforms.pointLights.needsUpdate = value;
		uniforms.pointLightShadows.needsUpdate = value;
		uniforms.spotLights.needsUpdate = value;
		uniforms.spotLightShadows.needsUpdate = value;
		uniforms.rectAreaLights.needsUpdate = value;
		uniforms.hemisphereLights.needsUpdate = value;
	}
	function materialNeedsLights(material) {
		return material.isMeshLambertMaterial || material.isMeshToonMaterial || material.isMeshPhongMaterial || material.isMeshStandardMaterial || material.isShadowMaterial || material.isShaderMaterial && material.lights === true;
	}
	this.getActiveCubeFace = function () {
		return _currentActiveCubeFace;
	};
	this.getActiveMipmapLevel = function () {
		return _currentActiveMipmapLevel;
	};
	this.getRenderTarget = function () {
		return _currentRenderTarget;
	};
	this.setRenderTarget = function (renderTarget, activeCubeFace = 0, activeMipmapLevel = 0) {
		_currentRenderTarget = renderTarget;
		_currentActiveCubeFace = activeCubeFace;
		_currentActiveMipmapLevel = activeMipmapLevel;
		let useDefaultFramebuffer = true;
		let framebuffer = null;
		let isCube = false;
		let isRenderTarget3D = false;
		if (renderTarget) {
			const renderTargetProperties = properties.get(renderTarget);
			if (renderTargetProperties.__useDefaultFramebuffer !== undefined) {
				state.bindFramebuffer(_gl.FRAMEBUFFER, null);
				useDefaultFramebuffer = false;
			} else if (renderTargetProperties.__webglFramebuffer === undefined) {
				textures.setupRenderTarget(renderTarget);
			} else if (renderTargetProperties.__hasExternalTextures) {
				textures.rebindTextures(renderTarget, properties.get(renderTarget.texture).__webglTexture, properties.get(renderTarget.depthTexture).__webglTexture);
			}
			const texture = renderTarget.texture;
			if (texture.isData3DTexture || texture.isDataArrayTexture || texture.isCompressedArrayTexture) {
				isRenderTarget3D = true;
			}
			const __webglFramebuffer = properties.get(renderTarget).__webglFramebuffer;
			if (renderTarget.isWebGLCubeRenderTarget) {
				framebuffer = __webglFramebuffer[activeCubeFace];
				isCube = true;
			} else if (capabilities.isWebGL2 && renderTarget.samples > 0 && textures.useMultisampledRTT(renderTarget) === false) {
				framebuffer = properties.get(renderTarget).__webglMultisampledFramebuffer;
			} else {
				framebuffer = __webglFramebuffer;
			}
			_currentViewport.copy(renderTarget.viewport);
			_currentScissor.copy(renderTarget.scissor);
			_currentScissorTest = renderTarget.scissorTest;
		} else {
			_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).floor();
			_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio).floor();
			_currentScissorTest = _scissorTest;
		}
		const framebufferBound = state.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
		if (framebufferBound && capabilities.drawBuffers && useDefaultFramebuffer) {
			state.drawBuffers(renderTarget, framebuffer);
		}
		state.viewport(_currentViewport);
		state.scissor(_currentScissor);
		state.setScissorTest(_currentScissorTest);
		if (isCube) {
			const textureProperties = properties.get(renderTarget.texture);
			_gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + activeCubeFace, textureProperties.__webglTexture, activeMipmapLevel);
		} else if (isRenderTarget3D) {
			const textureProperties = properties.get(renderTarget.texture);
			const layer = activeCubeFace || 0;
			_gl.framebufferTextureLayer(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, textureProperties.__webglTexture, activeMipmapLevel || 0, layer);
		}
		_currentMaterialId = -1;
	};
}

class Quaternion {
	constructor(x = 0, y = 0, z = 0, w = 1) {
		this.isQuaternion = true;
		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;
	}
	get x() {
		return this._x;
	}
	get y() {
		return this._y;
	}
	get z() {
		return this._z;
	}
	get w() {
		return this._w;
	}
	copy(quaternion) {
		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;
		this._onChangeCallback();
		return this;
	}
	setFromEuler(euler, update) {
		const x = euler._x,
			y = euler._y,
			z = euler._z,
			order = euler._order;
		const cos = Math.cos;
		const sin = Math.sin;
		const c1 = cos(x / 2);
		const c2 = cos(y / 2);
		const c3 = cos(z / 2);
		const s1 = sin(x / 2);
		const s2 = sin(y / 2);
		const s3 = sin(z / 2);
		switch (order) {
			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;
			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;
			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;
			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;
			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;
			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;
			default:
				console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order);
		}
		if (update !== false) this._onChangeCallback();
		return this;
	}
	setFromAxisAngle(axis, angle) {
		const halfAngle = angle / 2,
			s = Math.sin(halfAngle);
		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos(halfAngle);
		this._onChangeCallback();
		return this;
	}
	setFromRotationMatrix(m) {
		const te = m.elements,
			m11 = te[0],
			m12 = te[4],
			m13 = te[8],
			m21 = te[1],
			m22 = te[5],
			m23 = te[9],
			m31 = te[2],
			m32 = te[6],
			m33 = te[10],
			trace = m11 + m22 + m33;
		if (trace > 0) {
			const s = 0.5 / Math.sqrt(trace + 1.0);
			this._w = 0.25 / s;
			this._x = (m32 - m23) * s;
			this._y = (m13 - m31) * s;
			this._z = (m21 - m12) * s;
		} else if (m11 > m22 && m11 > m33) {
			const s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			this._w = (m32 - m23) / s;
			this._x = 0.25 * s;
			this._y = (m12 + m21) / s;
			this._z = (m13 + m31) / s;
		} else if (m22 > m33) {
			const s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			this._w = (m13 - m31) / s;
			this._x = (m12 + m21) / s;
			this._y = 0.25 * s;
			this._z = (m23 + m32) / s;
		} else {
			const s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			this._w = (m21 - m12) / s;
			this._x = (m13 + m31) / s;
			this._y = (m23 + m32) / s;
			this._z = 0.25 * s;
		}
		this._onChangeCallback();
		return this;
	}
	multiply(q) {
		return this.multiplyQuaternions(this, q);
	}
	multiplyQuaternions(a, b) {
		const qax = a._x,
			qay = a._y,
			qaz = a._z,
			qaw = a._w;
		const qbx = b._x,
			qby = b._y,
			qbz = b._z,
			qbw = b._w;
		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
		this._onChangeCallback();
		return this;
	}
	_onChange(callback) {
		this._onChangeCallback = callback;
		return this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;
	}
}

const _matrix = /*@__PURE__*/new Matrix4();


class Euler {
	constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {
		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;
	}
	set y(value) {
		this._y = value;
		this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(value) {
		this._order = value;
		this._onChangeCallback();
	}
	set(x, y, z, order = this._order) {
		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;
		this._onChangeCallback();
		return this;
	}
	setFromRotationMatrix(m, order = this._order, update = true) {
		const te = m.elements;
		const m11 = te[0],
			m12 = te[4],
			m13 = te[8];
		const m21 = te[1],
			m22 = te[5],
			m23 = te[9];
		const m31 = te[2],
			m32 = te[6],
			m33 = te[10];
		switch (order) {
			case 'XYZ':
				this._y = Math.asin(clamp(m13, -1, 1));
				if (Math.abs(m13) < 0.9999999) {
					this._x = Math.atan2(-m23, m33);
					this._z = Math.atan2(-m12, m11);
				} else {
					this._x = Math.atan2(m32, m22);
					this._z = 0;
				}
				break;
			case 'YXZ':
				this._x = Math.asin(-clamp(m23, -1, 1));
				if (Math.abs(m23) < 0.9999999) {
					this._y = Math.atan2(m13, m33);
					this._z = Math.atan2(m21, m22);
				} else {
					this._y = Math.atan2(-m31, m11);
					this._z = 0;
				}
				break;
			case 'ZXY':
				this._x = Math.asin(clamp(m32, -1, 1));
				if (Math.abs(m32) < 0.9999999) {
					this._y = Math.atan2(-m31, m33);
					this._z = Math.atan2(-m12, m22);
				} else {
					this._y = 0;
					this._z = Math.atan2(m21, m11);
				}
				break;
			case 'ZYX':
				this._y = Math.asin(-clamp(m31, -1, 1));
				if (Math.abs(m31) < 0.9999999) {
					this._x = Math.atan2(m32, m33);
					this._z = Math.atan2(m21, m11);
				} else {
					this._x = 0;
					this._z = Math.atan2(-m12, m22);
				}
				break;
			case 'YZX':
				this._z = Math.asin(clamp(m21, -1, 1));
				if (Math.abs(m21) < 0.9999999) {
					this._x = Math.atan2(-m23, m22);
					this._y = Math.atan2(-m31, m11);
				} else {
					this._x = 0;
					this._y = Math.atan2(m13, m33);
				}
				break;
			case 'XZY':
				this._z = Math.asin(-clamp(m12, -1, 1));
				if (Math.abs(m12) < 0.9999999) {
					this._x = Math.atan2(m32, m22);
					this._y = Math.atan2(m13, m11);
				} else {
					this._x = Math.atan2(-m23, m33);
					this._y = 0;
				}
				break;
			default:
				console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order);
		}
		this._order = order;
		if (update === true) this._onChangeCallback();
		return this;
	}
	setFromQuaternion(q, order, update) {
		_matrix.makeRotationFromQuaternion(q);
		return this.setFromRotationMatrix(_matrix, order, update);
	}
	_onChange(callback) {
		this._onChangeCallback = callback;
		return this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;
	}
}
Euler.DefaultOrder = 'XYZ';
Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];

let _object3DId = 0;


const _q1 = /*@__PURE__*/new Quaternion();
const _m1 = /*@__PURE__*/new Matrix4();
const _target = /*@__PURE__*/new Vector3();
const _position = /*@__PURE__*/new Vector3();



const _xAxis = /*@__PURE__*/new Vector3(1, 0, 0);

const _zAxis = /*@__PURE__*/new Vector3(0, 0, 1);
const _addedEvent = {
	type: 'added'
};
const _removedEvent = {
	type: 'removed'
};
class Object3D extends EventDispatcher {
	constructor() {
		super();
		this.isObject3D = true;
		Object.defineProperty(this, 'id', {
			value: _object3DId++
		});
		this.uuid = generateUUID();
		this.name = '';
		this.type = 'Object3D';
		this.parent = null;
		this.children = [];
		this.up = Object3D.DefaultUp.clone();
		const position = new Vector3();
		const rotation = new Euler();
		const quaternion = new Quaternion();
		const scale = new Vector3(1, 1, 1);
		function onRotationChange() {
			quaternion.setFromEuler(rotation, false);
		}
		function onQuaternionChange() {
			rotation.setFromQuaternion(quaternion, undefined, false);
		}
		rotation._onChange(onRotationChange);
		quaternion._onChange(onQuaternionChange);
		Object.defineProperties(this, {
			position: {
				configurable: true,
				enumerable: true,
				value: position
			},
			rotation: {
				configurable: true,
				enumerable: true,
				value: rotation
			},
			quaternion: {
				configurable: true,
				enumerable: true,
				value: quaternion
			},
			scale: {
				configurable: true,
				enumerable: true,
				value: scale
			},
			modelViewMatrix: {
				value: new Matrix4()
			},
			normalMatrix: {
				value: new Matrix3()
			}
		});
		this.matrix = new Matrix4();
		this.matrixWorld = new Matrix4();
		this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate;
		this.matrixWorldNeedsUpdate = false;
		this.matrixWorldAutoUpdate = Object3D.DefaultMatrixWorldAutoUpdate;
		this.layers = new Layers();
		this.visible = true;
		this.castShadow = false;
		this.receiveShadow = false;
		this.frustumCulled = true;
		this.renderOrder = 0;
		this.userData = {};
	}
	onBeforeRender() {}
	onAfterRender() {}
	rotateOnAxis(axis, angle) {
		_q1.setFromAxisAngle(axis, angle);
		this.quaternion.multiply(_q1);
		return this;
	}
	rotateX(angle) {
		return this.rotateOnAxis(_xAxis, angle);
	}
	rotateZ(angle) {
		return this.rotateOnAxis(_zAxis, angle);
	}
	worldToLocal(vector) {
		this.updateWorldMatrix(true, false);
		return vector.applyMatrix4(_m1.copy(this.matrixWorld).invert());
	}
	lookAt(x, y, z) {
		if (x.isVector3) {
			_target.copy(x);
		} else {
			_target.set(x, y, z);
		}
		const parent = this.parent;
		this.updateWorldMatrix(true, false);
		_position.setFromMatrixPosition(this.matrixWorld);
		if (this.isCamera || this.isLight) {
			_m1.lookAt(_position, _target, this.up);
		} else {
			_m1.lookAt(_target, _position, this.up);
		}
		this.quaternion.setFromRotationMatrix(_m1);
		if (parent) {
			_m1.extractRotation(parent.matrixWorld);
			_q1.setFromRotationMatrix(_m1);
			this.quaternion.premultiply(_q1.invert());
		}
	}
	add(object) {
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) {
				this.add(arguments[i]);
			}
			return this;
		}
		if (object === this) {
			console.error('THREE.Object3D.add: object can\'t be added as a child of itself.', object);
			return this;
		}
		if (object && object.isObject3D) {
			if (object.parent !== null) {
				object.parent.remove(object);
			}
			object.parent = this;
			this.children.push(object);
			object.dispatchEvent(_addedEvent);
		} else {
			console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.', object);
		}
		return this;
	}
	remove(object) {
		if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) {
				this.remove(arguments[i]);
			}
			return this;
		}
		const index = this.children.indexOf(object);
		if (index !== -1) {
			object.parent = null;
			this.children.splice(index, 1);
			object.dispatchEvent(_removedEvent);
		}
		return this;
	}
	raycast() {}
	traverse(callback) {
		callback(this);
		const children = this.children;
		for (let i = 0, l = children.length; i < l; i++) {
			children[i].traverse(callback);
		}
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		this.matrixWorldNeedsUpdate = true;
	}
	updateMatrixWorld(force) {
		if (this.matrixAutoUpdate) this.updateMatrix();
		if (this.matrixWorldNeedsUpdate || force) {
			if (this.parent === null) {
				this.matrixWorld.copy(this.matrix);
			} else {
				this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
			}
			this.matrixWorldNeedsUpdate = false;
			force = true;
		}
		const children = this.children;
		for (let i = 0, l = children.length; i < l; i++) {
			const child = children[i];
			if (child.matrixWorldAutoUpdate === true || force === true) {
				child.updateMatrixWorld(force);
			}
		}
	}
	updateWorldMatrix(updateParents, updateChildren) {
		const parent = this.parent;
		if (updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true) {
			parent.updateWorldMatrix(true, false);
		}
		if (this.matrixAutoUpdate) this.updateMatrix();
		if (this.parent === null) {
			this.matrixWorld.copy(this.matrix);
		} else {
			this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
		}
		if (updateChildren === true) {
			const children = this.children;
			for (let i = 0, l = children.length; i < l; i++) {
				const child = children[i];
				if (child.matrixWorldAutoUpdate === true) {
					child.updateWorldMatrix(false, true);
				}
			}
		}
	}
	clone(recursive) {
		return new this.constructor().copy(this, recursive);
	}
	copy(source, recursive = true) {
		this.name = source.name;
		this.up.copy(source.up);
		this.position.copy(source.position);
		this.rotation.order = source.rotation.order;
		this.quaternion.copy(source.quaternion);
		this.scale.copy(source.scale);
		this.matrix.copy(source.matrix);
		this.matrixWorld.copy(source.matrixWorld);
		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
		this.layers.mask = source.layers.mask;
		this.visible = source.visible;
		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;
		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;
		if (recursive === true) {
			for (let i = 0; i < source.children.length; i++) {
				const child = source.children[i];
				this.add(child.clone());
			}
		}
		return this;
	}
}
Object3D.DefaultUp = /*@__PURE__*/new Vector3(0, 1, 0);
Object3D.DefaultMatrixAutoUpdate = true;
Object3D.DefaultMatrixWorldAutoUpdate = true;

class Scene extends Object3D {
	constructor() {
		super();
		this.isScene = true;
		this.type = 'Scene';
		this.overrideMaterial = null;
	}
}

const _vector$1 = /*@__PURE__*/new Vector3();


const _diff = /*@__PURE__*/new Vector3();
const _edge1 = /*@__PURE__*/new Vector3();
const _edge2 = /*@__PURE__*/new Vector3();
const _normal = /*@__PURE__*/new Vector3();
class Ray {
	constructor(origin = new Vector3(), direction = new Vector3(0, 0, -1)) {
		this.origin = origin;
		this.direction = direction;
	}
	set(origin, direction) {
		this.origin.copy(origin);
		this.direction.copy(direction);
		return this;
	}
	copy(ray) {
		this.origin.copy(ray.origin);
		this.direction.copy(ray.direction);
		return this;
	}
	at(t, target) {
		return target.copy(this.direction).multiplyScalar(t).add(this.origin);
	}
	lookAt(v) {
		this.direction.copy(v).sub(this.origin).normalize();
		return this;
	}
	distanceSqToPoint(point) {
		const directionDistance = _vector$1.subVectors(point, this.origin).dot(this.direction);
		if (directionDistance < 0) {
			return this.origin.distanceToSquared(point);
		}
		_vector$1.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
		return _vector$1.distanceToSquared(point);
	}
	intersectsSphere(sphere) {
		return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
	}
	distanceToPlane(plane) {
		const denominator = plane.normal.dot(this.direction);
		if (denominator === 0) {
			if (plane.distanceToPoint(this.origin) === 0) {
				return 0;
			}
			return null;
		}
		const t = -(this.origin.dot(plane.normal) + plane.constant) / denominator;
		return t >= 0 ? t : null;
	}
	intersectPlane(plane, target) {
		const t = this.distanceToPlane(plane);
		if (t === null) {
			return null;
		}
		return this.at(t, target);
	}
	intersectBox(box, target) {
		let tmin, tmax, tymin, tymax, tzmin, tzmax;
		const invdirx = 1 / this.direction.x,
			invdiry = 1 / this.direction.y,
			invdirz = 1 / this.direction.z;
		const origin = this.origin;
		if (invdirx >= 0) {
			tmin = (box.min.x - origin.x) * invdirx;
			tmax = (box.max.x - origin.x) * invdirx;
		} else {
			tmin = (box.max.x - origin.x) * invdirx;
			tmax = (box.min.x - origin.x) * invdirx;
		}
		if (invdiry >= 0) {
			tymin = (box.min.y - origin.y) * invdiry;
			tymax = (box.max.y - origin.y) * invdiry;
		} else {
			tymin = (box.max.y - origin.y) * invdiry;
			tymax = (box.min.y - origin.y) * invdiry;
		}
		if (tmin > tymax || tymin > tmax) return null;
		if (tymin > tmin || isNaN(tmin)) tmin = tymin;
		if (tymax < tmax || isNaN(tmax)) tmax = tymax;
		if (invdirz >= 0) {
			tzmin = (box.min.z - origin.z) * invdirz;
			tzmax = (box.max.z - origin.z) * invdirz;
		} else {
			tzmin = (box.max.z - origin.z) * invdirz;
			tzmax = (box.min.z - origin.z) * invdirz;
		}
		if (tmin > tzmax || tzmin > tmax) return null;
		if (tzmin > tmin || tmin !== tmin) tmin = tzmin;
		if (tzmax < tmax || tmax !== tmax) tmax = tzmax;
		if (tmax < 0) return null;
		return this.at(tmin >= 0 ? tmin : tmax, target);
	}
	intersectsBox(box) {
		return this.intersectBox(box, _vector$1) !== null;
	}
	intersectTriangle(a, b, c, backfaceCulling, target) {
		_edge1.subVectors(b, a);
		_edge2.subVectors(c, a);
		_normal.crossVectors(_edge1, _edge2);
		let DdN = this.direction.dot(_normal);
		let sign;
		if (DdN > 0) {
			if (backfaceCulling) return null;
			sign = 1;
		} else if (DdN < 0) {
			sign = -1;
			DdN = -DdN;
		} else {
			return null;
		}
		_diff.subVectors(this.origin, a);
		const DdQxE2 = sign * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
		if (DdQxE2 < 0) {
			return null;
		}
		const DdE1xQ = sign * this.direction.dot(_edge1.cross(_diff));
		if (DdE1xQ < 0) {
			return null;
		}
		if (DdQxE2 + DdE1xQ > DdN) {
			return null;
		}
		const QdN = -sign * _diff.dot(_normal);
		if (QdN < 0) {
			return null;
		}
		return this.at(QdN / DdN, target);
	}
	applyMatrix4(matrix4) {
		this.origin.applyMatrix4(matrix4);
		this.direction.transformDirection(matrix4);
		return this;
	}
	equals(ray) {
		return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}

const _v0 = /*@__PURE__*/new Vector3();
const _v1 = /*@__PURE__*/new Vector3();
const _v2 = /*@__PURE__*/new Vector3();
const _v3 = /*@__PURE__*/new Vector3();








class Triangle {
	constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
		this.a = a;
		this.b = b;
		this.c = c;
	}
	static getNormal(a, b, c, target) {
		target.subVectors(c, b);
		_v0.subVectors(a, b);
		target.cross(_v0);
		const targetLengthSq = target.lengthSq();
		if (targetLengthSq > 0) {
			return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
		}
		return target.set(0, 0, 0);
	}
	static getBarycoord(point, a, b, c, target) {
		_v0.subVectors(c, a);
		_v1.subVectors(b, a);
		_v2.subVectors(point, a);
		const dot00 = _v0.dot(_v0);
		const dot01 = _v0.dot(_v1);
		const dot02 = _v0.dot(_v2);
		const dot11 = _v1.dot(_v1);
		const dot12 = _v1.dot(_v2);
		const denom = dot00 * dot11 - dot01 * dot01;
		if (denom === 0) {
			return target.set(-2, -1, -1);
		}
		const invDenom = 1 / denom;
		const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		return target.set(1 - u - v, v, u);
	}
	static getUV(point, p1, p2, p3, uv1, uv2, uv3, target) {
		this.getBarycoord(point, p1, p2, p3, _v3);
		target.set(0, 0);
		target.addScaledVector(uv1, _v3.x);
		target.addScaledVector(uv2, _v3.y);
		target.addScaledVector(uv3, _v3.z);
		return target;
	}
}

class MeshPhongMaterial extends Material {
	constructor(parameters) {
		super();
		this.isMeshPhongMaterial = true;
		this.type = 'MeshPhongMaterial';
		this.color = new Color(0xffffff);
		this.specular = new Color(0x111111);
		this.shininess = 30;
		this.map = null;
		this.emissive = new Color(0x000000);
		this.emissiveIntensity = 1.0;
		this.emissiveMap = null;
		this.normalMap = null;
		this.normalMapType = TangentSpaceNormalMap;
		this.normalScale = new Vector2(1, 1);
		this.specularMap = null;
		this.combine = MultiplyOperation;
		this.reflectivity = 1;
		this.refractionRatio = 0.98;
		this.wireframe = false;
		this.wireframeLinewidth = 1;
		this.wireframeLinecap = 'round';
		this.wireframeLinejoin = 'round';
		this.flatShading = false;
		this.setValues(parameters);
	}
}

const _inverseMatrix = /*@__PURE__*/new Matrix4();
const _ray = /*@__PURE__*/new Ray();
const _sphere = /*@__PURE__*/new Sphere();
const _vA = /*@__PURE__*/new Vector3();
const _vB = /*@__PURE__*/new Vector3();
const _vC = /*@__PURE__*/new Vector3();




const _uvA = /*@__PURE__*/new Vector2();
const _uvB = /*@__PURE__*/new Vector2();
const _uvC = /*@__PURE__*/new Vector2();
const _intersectionPoint = /*@__PURE__*/new Vector3();
const _intersectionPointWorld = /*@__PURE__*/new Vector3();
class Mesh extends Object3D {
	constructor(geometry = new BufferGeometry(), material = new MeshPhongMaterial()) {
		super();
		this.isMesh = true;
		this.type = 'Mesh';
		this.geometry = geometry;
		this.material = material;
	}
	copy(source, recursive) {
		super.copy(source, recursive);
		this.material = source.material;
		this.geometry = source.geometry;
		return this;
	}
	getVertexPosition(vert, target) {
		const geometry = this.geometry;
		const position = geometry.attributes.position;
		target.fromBufferAttribute(position, vert);
		return target;
	}
	raycast(raycaster, intersects) {
		const geometry = this.geometry;
		const material = this.material;
		const matrixWorld = this.matrixWorld;
		if (material === undefined) return;
		if (geometry.boundingSphere === null) geometry.computeBoundingSphere();
		_sphere.copy(geometry.boundingSphere);
		_sphere.applyMatrix4(matrixWorld);
		if (raycaster.ray.intersectsSphere(_sphere) === false) return;
		_inverseMatrix.copy(matrixWorld).invert();
		_ray.copy(raycaster.ray).applyMatrix4(_inverseMatrix);
		if (geometry.boundingBox !== null) {
			if (_ray.intersectsBox(geometry.boundingBox) === false) return;
		}
		let intersection;
		const index = geometry.index;
		geometry.attributes.position;
		const uv = geometry.attributes.uv;
		const uv2 = geometry.attributes.uv2;
		const groups = geometry.groups;
		const drawRange = geometry.drawRange;
		if (index !== null) {
			if (Array.isArray(material)) {
				for (let i = 0, il = groups.length; i < il; i++) {
					const group = groups[i];
					const groupMaterial = material[group.materialIndex];
					const start = Math.max(group.start, drawRange.start);
					const end = Math.min(index.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
					for (let j = start, jl = end; j < jl; j += 3) {
						const a = index.getX(j);
						const b = index.getX(j + 1);
						const c = index.getX(j + 2);
						intersection = checkBufferGeometryIntersection(this, groupMaterial, raycaster, _ray, uv, uv2, a, b, c);
						if (intersection) {
							intersection.faceIndex = Math.floor(j / 3);
							intersection.face.materialIndex = group.materialIndex;
							intersects.push(intersection);
						}
					}
				}
			} else {
				const start = Math.max(0, drawRange.start);
				const end = Math.min(index.count, drawRange.start + drawRange.count);
				for (let i = start, il = end; i < il; i += 3) {
					const a = index.getX(i);
					const b = index.getX(i + 1);
					const c = index.getX(i + 2);
					intersection = checkBufferGeometryIntersection(this, material, raycaster, _ray, uv, uv2, a, b, c);
					if (intersection) {
						intersection.faceIndex = Math.floor(i / 3);
						intersects.push(intersection);
					}
				}
			}
		}
	}
}
function checkIntersection(object, material, raycaster, ray, pA, pB, pC, point) {
	let intersect;
	if (material.side === BackSide) {
		intersect = ray.intersectTriangle(pC, pB, pA, true, point);
	} else {
		intersect = ray.intersectTriangle(pA, pB, pC, material.side === FrontSide, point);
	}
	if (intersect === null) return null;
	_intersectionPointWorld.copy(point);
	_intersectionPointWorld.applyMatrix4(object.matrixWorld);
	const distance = raycaster.ray.origin.distanceTo(_intersectionPointWorld);
	if (distance < raycaster.near || distance > raycaster.far) return null;
	return {
		distance: distance,
		point: _intersectionPointWorld.clone(),
		object: object
	};
}
function checkBufferGeometryIntersection(object, material, raycaster, ray, uv, uv2, a, b, c) {
	object.getVertexPosition(a, _vA);
	object.getVertexPosition(b, _vB);
	object.getVertexPosition(c, _vC);
	const intersection = checkIntersection(object, material, raycaster, ray, _vA, _vB, _vC, _intersectionPoint);
	if (intersection) {
		if (uv) {
			_uvA.fromBufferAttribute(uv, a);
			_uvB.fromBufferAttribute(uv, b);
			_uvC.fromBufferAttribute(uv, c);
			intersection.uv = Triangle.getUV(_intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2());
		}
		if (uv2) {
			_uvA.fromBufferAttribute(uv2, a);
			_uvB.fromBufferAttribute(uv2, b);
			_uvC.fromBufferAttribute(uv2, c);
			intersection.uv2 = Triangle.getUV(_intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2());
		}
		const face = {
			a: a,
			b: b,
			c: c,
			normal: new Vector3(),
			materialIndex: 0
		};
		Triangle.getNormal(_vA, _vB, _vC, face.normal);
		intersection.face = face;
	}
	return intersection;
}

class InstancedBufferAttribute extends BufferAttribute {
	constructor(array, itemSize, normalized, meshPerAttribute = 1) {
		super(array, itemSize, normalized);
		this.isInstancedBufferAttribute = true;
		this.meshPerAttribute = meshPerAttribute;
	}
	copy(source) {
		super.copy(source);
		this.meshPerAttribute = source.meshPerAttribute;
		return this;
	}
	toJSON() {
		const data = super.toJSON();
		data.meshPerAttribute = this.meshPerAttribute;
		data.isInstancedBufferAttribute = true;
		return data;
	}
}

const _instanceLocalMatrix = /*@__PURE__*/new Matrix4();
const _instanceWorldMatrix = /*@__PURE__*/new Matrix4();
const _instanceIntersects = [];
const _identity = /*@__PURE__*/new Matrix4();
const _mesh = /*@__PURE__*/new Mesh();
class InstancedMesh extends Mesh {
	constructor(geometry, material, count) {
		super(geometry, material);
		this.isInstancedMesh = true;
		this.instanceMatrix = new InstancedBufferAttribute(new Float32Array(count * 16), 16);
		this.instanceColor = null;
		this.count = count;
		this.frustumCulled = false;
		for (let i = 0; i < count; i++) {
			this.setMatrixAt(i, _identity);
		}
	}
	copy(source, recursive) {
		super.copy(source, recursive);
		this.instanceMatrix.copy(source.instanceMatrix);
		if (source.instanceColor !== null) this.instanceColor = source.instanceColor.clone();
		this.count = source.count;
		return this;
	}
	getMatrixAt(index, matrix) {
		matrix.fromArray(this.instanceMatrix.array, index * 16);
	}
	raycast(raycaster, intersects) {
		const matrixWorld = this.matrixWorld;
		const raycastTimes = this.count;
		_mesh.geometry = this.geometry;
		_mesh.material = this.material;
		if (_mesh.material === undefined) return;
		for (let instanceId = 0; instanceId < raycastTimes; instanceId++) {
			this.getMatrixAt(instanceId, _instanceLocalMatrix);
			_instanceWorldMatrix.multiplyMatrices(matrixWorld, _instanceLocalMatrix);
			_mesh.matrixWorld = _instanceWorldMatrix;
			_mesh.raycast(raycaster, _instanceIntersects);
			for (let i = 0, l = _instanceIntersects.length; i < l; i++) {
				const intersect = _instanceIntersects[i];
				intersect.instanceId = instanceId;
				intersect.object = this;
				intersects.push(intersect);
			}
			_instanceIntersects.length = 0;
		}
	}
	setMatrixAt(index, matrix) {
		matrix.toArray(this.instanceMatrix.array, index * 16);
	}
	updateMorphTargets() {}
	dispose() {
		this.dispatchEvent({
			type: 'dispose'
		});
	}
}

class Group extends Object3D {
	constructor() {
		super();
		this.isGroup = true;
		this.type = 'Group';
	}
}

class CanvasTexture extends Texture {
	constructor(canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
		super(canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
		this.isCanvasTexture = true;
		this.needsUpdate = true;
	}
}

class BoxGeometry extends BufferGeometry {
	constructor(width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
		super();
		this.type = 'BoxGeometry';
		this.parameters = {
			width: width,
			height: height,
			depth: depth,
			widthSegments: widthSegments,
			heightSegments: heightSegments,
			depthSegments: depthSegments
		};
		const scope = this;
		widthSegments = Math.floor(widthSegments);
		heightSegments = Math.floor(heightSegments);
		depthSegments = Math.floor(depthSegments);
		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];
		let numberOfVertices = 0;
		let groupStart = 0;
		buildPlane('z', 'y', 'x', -1, -1, depth, height, width, depthSegments, heightSegments, 0);
		buildPlane('z', 'y', 'x', 1, -1, depth, height, -width, depthSegments, heightSegments, 1);
		buildPlane('x', 'z', 'y', 1, 1, width, depth, height, widthSegments, depthSegments, 2);
		buildPlane('x', 'z', 'y', 1, -1, width, depth, -height, widthSegments, depthSegments, 3);
		buildPlane('x', 'y', 'z', 1, -1, width, height, depth, widthSegments, heightSegments, 4);
		buildPlane('x', 'y', 'z', -1, -1, width, height, -depth, widthSegments, heightSegments, 5);
		this.setIndex(indices);
		this.setAttribute('position', new Float32BufferAttribute(vertices, 3));
		this.setAttribute('normal', new Float32BufferAttribute(normals, 3));
		this.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
		function buildPlane(u, v, w, udir, vdir, width, height, depth, gridX, gridY, materialIndex) {
			const segmentWidth = width / gridX;
			const segmentHeight = height / gridY;
			const widthHalf = width / 2;
			const heightHalf = height / 2;
			const depthHalf = depth / 2;
			const gridX1 = gridX + 1;
			const gridY1 = gridY + 1;
			let vertexCounter = 0;
			let groupCount = 0;
			const vector = new Vector3();
			for (let iy = 0; iy < gridY1; iy++) {
				const y = iy * segmentHeight - heightHalf;
				for (let ix = 0; ix < gridX1; ix++) {
					const x = ix * segmentWidth - widthHalf;
					vector[u] = x * udir;
					vector[v] = y * vdir;
					vector[w] = depthHalf;
					vertices.push(vector.x, vector.y, vector.z);
					vector[u] = 0;
					vector[v] = 0;
					vector[w] = depth > 0 ? 1 : -1;
					normals.push(vector.x, vector.y, vector.z);
					uvs.push(ix / gridX);
					uvs.push(1 - iy / gridY);
					vertexCounter += 1;
				}
			}
			for (let iy = 0; iy < gridY; iy++) {
				for (let ix = 0; ix < gridX; ix++) {
					const a = numberOfVertices + ix + gridX1 * iy;
					const b = numberOfVertices + ix + gridX1 * (iy + 1);
					const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
					const d = numberOfVertices + (ix + 1) + gridX1 * iy;
					indices.push(a, b, d);
					indices.push(b, c, d);
					groupCount += 6;
				}
			}
			scope.addGroup(groupStart, groupCount, materialIndex);
			groupStart += groupCount;
			numberOfVertices += vertexCounter;
		}
	}
}

class PlaneGeometry extends BufferGeometry {
	constructor(width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
		super();
		this.type = 'PlaneGeometry';
		this.parameters = {
			width: width,
			height: height,
			widthSegments: widthSegments,
			heightSegments: heightSegments
		};
		const width_half = width / 2;
		const height_half = height / 2;
		const gridX = Math.floor(widthSegments);
		const gridY = Math.floor(heightSegments);
		const gridX1 = gridX + 1;
		const gridY1 = gridY + 1;
		const segment_width = width / gridX;
		const segment_height = height / gridY;
		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];
		for (let iy = 0; iy < gridY1; iy++) {
			const y = iy * segment_height - height_half;
			for (let ix = 0; ix < gridX1; ix++) {
				const x = ix * segment_width - width_half;
				vertices.push(x, -y, 0);
				normals.push(0, 0, 1);
				uvs.push(ix / gridX);
				uvs.push(1 - iy / gridY);
			}
		}
		for (let iy = 0; iy < gridY; iy++) {
			for (let ix = 0; ix < gridX; ix++) {
				const a = ix + gridX1 * iy;
				const b = ix + gridX1 * (iy + 1);
				const c = ix + 1 + gridX1 * (iy + 1);
				const d = ix + 1 + gridX1 * iy;
				indices.push(a, b, d);
				indices.push(b, c, d);
			}
		}
		this.setIndex(indices);
		this.setAttribute('position', new Float32BufferAttribute(vertices, 3));
		this.setAttribute('normal', new Float32BufferAttribute(normals, 3));
		this.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
	}
}

class TorusGeometry extends BufferGeometry {
	constructor(radius = 1, tube = 0.4, radialSegments = 12, tubularSegments = 48, arc = Math.PI * 2) {
		super();
		this.type = 'TorusGeometry';
		this.parameters = {
			radius: radius,
			tube: tube,
			radialSegments: radialSegments,
			tubularSegments: tubularSegments,
			arc: arc
		};
		radialSegments = Math.floor(radialSegments);
		tubularSegments = Math.floor(tubularSegments);
		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];
		const center = new Vector3();
		const vertex = new Vector3();
		const normal = new Vector3();
		for (let j = 0; j <= radialSegments; j++) {
			for (let i = 0; i <= tubularSegments; i++) {
				const u = i / tubularSegments * arc;
				const v = j / radialSegments * Math.PI * 2;
				vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
				vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
				vertex.z = tube * Math.sin(v);
				vertices.push(vertex.x, vertex.y, vertex.z);
				center.x = radius * Math.cos(u);
				center.y = radius * Math.sin(u);
				normal.subVectors(vertex, center).normalize();
				normals.push(normal.x, normal.y, normal.z);
				uvs.push(i / tubularSegments);
				uvs.push(j / radialSegments);
			}
		}
		for (let j = 1; j <= radialSegments; j++) {
			for (let i = 1; i <= tubularSegments; i++) {
				const a = (tubularSegments + 1) * j + i - 1;
				const b = (tubularSegments + 1) * (j - 1) + i - 1;
				const c = (tubularSegments + 1) * (j - 1) + i;
				const d = (tubularSegments + 1) * j + i;
				indices.push(a, b, d);
				indices.push(b, c, d);
			}
		}
		this.setIndex(indices);
		this.setAttribute('position', new Float32BufferAttribute(vertices, 3));
		this.setAttribute('normal', new Float32BufferAttribute(normals, 3));
		this.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
	}
}

class ShadowMaterial extends Material {
	constructor(parameters) {
		super();
		this.isShadowMaterial = true;
		this.type = 'ShadowMaterial';
		this.color = new Color(0x000000);
		this.transparent = true;
		this.fog = true;
		this.setValues(parameters);
	}
}

var default_vertex = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";

var default_fragment = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";

class ShaderMaterial extends Material {
	constructor(parameters) {
		super();
		this.isShaderMaterial = true;
		this.type = 'ShaderMaterial';
		this.defines = {};
		this.uniforms = {};
		this.uniformsGroups = [];
		this.vertexShader = default_vertex;
		this.fragmentShader = default_fragment;
		this.linewidth = 1;
		this.wireframe = false;
		this.wireframeLinewidth = 1;
		this.fog = false;
		this.lights = false;
		this.clipping = false;
		this.extensions = {
			derivatives: false,
			fragDepth: false,
			drawBuffers: false,
			shaderTextureLOD: false
		};
		this.defaultAttributeValues = {
			'color': [1, 1, 1],
			'uv': [0, 0],
			'uv2': [0, 0]
		};
		this.index0AttributeName = undefined;
		this.uniformsNeedUpdate = false;
		this.glslVersion = null;
		if (parameters !== undefined) {
			this.setValues(parameters);
		}
	}
}

const Cache = {
	enabled: false,
	files: {},
	add: function (key, file) {
		if (this.enabled === false) return;
		this.files[key] = file;
	},
	get: function (key) {
		if (this.enabled === false) return;
		return this.files[key];
	},
	remove: function (key) {
		delete this.files[key];
	},
	clear: function () {
		this.files = {};
	}
};

class LoadingManager {
	constructor(onLoad, onProgress, onError) {
		const scope = this;
		let isLoading = false;
		let itemsLoaded = 0;
		let itemsTotal = 0;
		this.onStart = undefined;
		this.onLoad = onLoad;
		this.onProgress = onProgress;
		this.onError = onError;
		this.itemStart = function (url) {
			itemsTotal++;
			if (isLoading === false) {
				if (scope.onStart !== undefined) {
					scope.onStart(url, itemsLoaded, itemsTotal);
				}
			}
			isLoading = true;
		};
		this.itemEnd = function (url) {
			itemsLoaded++;
			if (scope.onProgress !== undefined) {
				scope.onProgress(url, itemsLoaded, itemsTotal);
			}
			if (itemsLoaded === itemsTotal) {
				isLoading = false;
				if (scope.onLoad !== undefined) {
					scope.onLoad();
				}
			}
		};
		this.itemError = function (url) {
			if (scope.onError !== undefined) {
				scope.onError(url);
			}
		};
		this.resolveURL = function (url) {
			return url;
		};
	}
}
const DefaultLoadingManager = /*@__PURE__*/new LoadingManager();

class Loader {
	constructor(manager) {
		this.manager = manager !== undefined ? manager : DefaultLoadingManager;
		this.crossOrigin = 'anonymous';
		this.path = '';
	}
	load() {}
	parse() {}
	setCrossOrigin(crossOrigin) {
		this.crossOrigin = crossOrigin;
		return this;
	}
	setPath(path) {
		this.path = path;
		return this;
	}
}

class ImageLoader extends Loader {
	constructor(manager) {
		super(manager);
	}
	load(url, onLoad, onProgress, onError) {
		if (this.path !== undefined) url = this.path + url;
		url = this.manager.resolveURL(url);
		const scope = this;
		const cached = Cache.get(url);
		if (cached !== undefined) {
			scope.manager.itemStart(url);
			setTimeout(function () {
				if (onLoad) onLoad(cached);
				scope.manager.itemEnd(url);
			}, 0);
			return cached;
		}
		const image = createElementNS('img');
		function onImageLoad() {
			removeEventListeners();
			Cache.add(url, this);
			if (onLoad) onLoad(this);
			scope.manager.itemEnd(url);
		}
		function onImageError(event) {
			removeEventListeners();
			if (onError) onError(event);
			scope.manager.itemError(url);
			scope.manager.itemEnd(url);
		}
		function removeEventListeners() {
			image.removeEventListener('load', onImageLoad, false);
			image.removeEventListener('error', onImageError, false);
		}
		image.addEventListener('load', onImageLoad, false);
		image.addEventListener('error', onImageError, false);
		if (url.slice(0, 5) !== 'data:') {
			if (this.crossOrigin !== undefined) image.crossOrigin = this.crossOrigin;
		}
		scope.manager.itemStart(url);
		image.src = url;
		return image;
	}
}

class TextureLoader extends Loader {
	constructor(manager) {
		super(manager);
	}
	load(url, onLoad, onProgress, onError) {
		const texture = new Texture();
		const loader = new ImageLoader(this.manager);
		loader.setCrossOrigin(this.crossOrigin);
		loader.setPath(this.path);
		loader.load(url, function (image) {
			texture.image = image;
			texture.needsUpdate = true;
			if (onLoad !== undefined) {
				onLoad(texture);
			}
		}, onProgress, onError);
		return texture;
	}
}

class Light extends Object3D {
	constructor(color, intensity = 1) {
		super();
		this.isLight = true;
		this.type = 'Light';
		this.color = new Color(color);
		this.intensity = intensity;
	}
	dispose() {}
}

const _projScreenMatrix = /*@__PURE__*/new Matrix4();
const _lightPositionWorld = /*@__PURE__*/new Vector3();
const _lookTarget = /*@__PURE__*/new Vector3();
class LightShadow {
	constructor(camera) {
		this.camera = camera;
		this.bias = 0;
		this.normalBias = 0;
		this.radius = 1;
		this.mapSize = new Vector2(512, 512);
		this.map = null;
		this.mapPass = null;
		this.matrix = new Matrix4();
		this.autoUpdate = true;
		this.needsUpdate = false;
		this._frustum = new Frustum();
		this._frameExtents = new Vector2(1, 1);
		this._viewportCount = 1;
		this._viewports = [new Vector4(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(light) {
		const shadowCamera = this.camera;
		const shadowMatrix = this.matrix;
		_lightPositionWorld.setFromMatrixPosition(light.matrixWorld);
		shadowCamera.position.copy(_lightPositionWorld);
		_lookTarget.setFromMatrixPosition(light.target.matrixWorld);
		shadowCamera.lookAt(_lookTarget);
		shadowCamera.updateMatrixWorld();
		_projScreenMatrix.multiplyMatrices(shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse);
		this._frustum.setFromProjectionMatrix(_projScreenMatrix);
		shadowMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);
		shadowMatrix.multiply(_projScreenMatrix);
	}
	getViewport(viewportIndex) {
		return this._viewports[viewportIndex];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		if (this.map) {
			this.map.dispose();
		}
		if (this.mapPass) {
			this.mapPass.dispose();
		}
	}
}

class Camera extends Object3D {
	constructor() {
		super();
		this.isCamera = true;
		this.type = 'Camera';
		this.matrixWorldInverse = new Matrix4();
		this.projectionMatrix = new Matrix4();
		this.projectionMatrixInverse = new Matrix4();
	}
	updateMatrixWorld(force) {
		super.updateMatrixWorld(force);
		this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
	updateWorldMatrix(updateParents, updateChildren) {
		super.updateWorldMatrix(updateParents, updateChildren);
		this.matrixWorldInverse.copy(this.matrixWorld).invert();
	}
}

class OrthographicCamera extends Camera {
	constructor(left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2000) {
		super();
		this.isOrthographicCamera = true;
		this.type = 'OrthographicCamera';
		this.zoom = 1;
		this.view = null;
		this.left = left;
		this.right = right;
		this.top = top;
		this.bottom = bottom;
		this.near = near;
		this.far = far;
		this.updateProjectionMatrix();
	}
	copy(source, recursive) {
		super.copy(source, recursive);
		this.left = source.left;
		this.right = source.right;
		this.top = source.top;
		this.bottom = source.bottom;
		this.near = source.near;
		this.far = source.far;
		this.zoom = source.zoom;
		this.view = source.view === null ? null : Object.assign({}, source.view);
		return this;
	}
	updateProjectionMatrix() {
		const dx = (this.right - this.left) / (2 * this.zoom);
		const dy = (this.top - this.bottom) / (2 * this.zoom);
		const cx = (this.right + this.left) / 2;
		const cy = (this.top + this.bottom) / 2;
		let left = cx - dx;
		let right = cx + dx;
		let top = cy + dy;
		let bottom = cy - dy;
		if (this.view !== null && this.view.enabled) {
			const scaleW = (this.right - this.left) / this.view.fullWidth / this.zoom;
			const scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			left += scaleW * this.view.offsetX;
			right = left + scaleW * this.view.width;
			top -= scaleH * this.view.offsetY;
			bottom = top - scaleH * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far);
		this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
}

class DirectionalLightShadow extends LightShadow {
	constructor() {
		super(new OrthographicCamera(-5, 5, 5, -5, 0.5, 500));
	}
}

class DirectionalLight extends Light {
	constructor(color, intensity) {
		super(color, intensity);
		this.isDirectionalLight = true;
		this.type = 'DirectionalLight';
		this.position.copy(Object3D.DefaultUp);
		this.updateMatrix();
		this.target = new Object3D();
		this.shadow = new DirectionalLightShadow();
	}
	dispose() {
		this.shadow.dispose();
	}
}

class AmbientLight extends Light {
	constructor(color, intensity) {
		super(color, intensity);
		this.isAmbientLight = true;
		this.type = 'AmbientLight';
	}
}

class PerspectiveCamera extends Camera {
	constructor(fov = 50, aspect = 1, near = 0.1, far = 2000) {
		super();
		this.isPerspectiveCamera = true;
		this.type = 'PerspectiveCamera';
		this.fov = fov;
		this.zoom = 1;
		this.near = near;
		this.far = far;
		this.focus = 10;
		this.aspect = aspect;
		this.view = null;
		this.filmGauge = 35;
		this.filmOffset = 0;
		this.updateProjectionMatrix();
	}
	copy(source, recursive) {
		super.copy(source, recursive);
		this.fov = source.fov;
		this.zoom = source.zoom;
		this.near = source.near;
		this.far = source.far;
		this.focus = source.focus;
		this.aspect = source.aspect;
		this.view = source.view === null ? null : Object.assign({}, source.view);
		this.filmGauge = source.filmGauge;
		this.filmOffset = source.filmOffset;
		return this;
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	updateProjectionMatrix() {
		const near = this.near;
		let top = near * Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom;
		let height = 2 * top;
		let width = this.aspect * height;
		let left = -0.5 * width;
		const view = this.view;
		if (this.view !== null && this.view.enabled) {
			const fullWidth = view.fullWidth,
				fullHeight = view.fullHeight;
			left += view.offsetX * width / fullWidth;
			top -= view.offsetY * height / fullHeight;
			width *= view.width / fullWidth;
			height *= view.height / fullHeight;
		}
		const skew = this.filmOffset;
		if (skew !== 0) left += near * skew / this.getFilmWidth();
		this.projectionMatrix.makePerspective(left, left + width, top, top - height, near, this.far);
		this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
}

class Raycaster {
	constructor(origin, direction, near = 0, far = Infinity) {
		this.ray = new Ray(origin, direction);
		this.near = near;
		this.far = far;
		this.camera = null;
		this.layers = new Layers();
	}
	set(origin, direction) {
		this.ray.set(origin, direction);
	}
	setFromCamera(coords, camera) {
		if (camera.isPerspectiveCamera) {
			this.ray.origin.setFromMatrixPosition(camera.matrixWorld);
			this.ray.direction.set(coords.x, coords.y, 0.5).unproject(camera).sub(this.ray.origin).normalize();
			this.camera = camera;
		} else if (camera.isOrthographicCamera) {
			this.ray.origin.set(coords.x, coords.y, (camera.near + camera.far) / (camera.near - camera.far)).unproject(camera);
			this.ray.direction.set(0, 0, -1).transformDirection(camera.matrixWorld);
			this.camera = camera;
		} else {
			console.error('THREE.Raycaster: Unsupported camera type: ' + camera.type);
		}
	}
	intersectObjects(objects, recursive = true, intersects = []) {
		for (let i = 0, l = objects.length; i < l; i++) {
			intersectObject(objects[i], this, intersects, recursive);
		}
		intersects.sort(ascSort);
		return intersects;
	}
}
function ascSort(a, b) {
	return a.distance - b.distance;
}
function intersectObject(object, raycaster, intersects, recursive) {
	if (object.layers.test(raycaster.layers)) {
		object.raycast(raycaster, intersects);
	}
	if (recursive === true) {
		const children = object.children;
		for (let i = 0, l = children.length; i < l; i++) {
			intersectObject(children[i], raycaster, intersects, true);
		}
	}
}

class Line extends Object3D {
	constructor(geometry = new BufferGeometry(), material = new MeshPhongMaterial()) {
		super();
		this.isLine = true;
		this.type = 'Line';
		this.geometry = geometry;
		this.material = material;
	}
}

class LineSegments extends Line {
	constructor(geometry, material) {
		super(geometry, material);
		this.isLineSegments = true;
		this.type = 'LineSegments';
	}
}

const _vector = /*@__PURE__*/new Vector3();
const _camera = /*@__PURE__*/new Camera();
class CameraHelper extends LineSegments {
	constructor(camera) {
		const geometry = new BufferGeometry();
		const material = new MeshPhongMaterial({
			color: 0xffffff,
			vertexColors: true,
			toneMapped: false
		});
		const vertices = [];
		const colors = [];
		const pointMap = {};
		addLine('n1', 'n2');
		addLine('n2', 'n4');
		addLine('n4', 'n3');
		addLine('n3', 'n1');
		addLine('f1', 'f2');
		addLine('f2', 'f4');
		addLine('f4', 'f3');
		addLine('f3', 'f1');
		addLine('n1', 'f1');
		addLine('n2', 'f2');
		addLine('n3', 'f3');
		addLine('n4', 'f4');
		addLine('p', 'n1');
		addLine('p', 'n2');
		addLine('p', 'n3');
		addLine('p', 'n4');
		addLine('u1', 'u2');
		addLine('u2', 'u3');
		addLine('u3', 'u1');
		addLine('c', 't');
		addLine('p', 'c');
		addLine('cn1', 'cn2');
		addLine('cn3', 'cn4');
		addLine('cf1', 'cf2');
		addLine('cf3', 'cf4');
		function addLine(a, b) {
			addPoint(a);
			addPoint(b);
		}
		function addPoint(id) {
			vertices.push(0, 0, 0);
			colors.push(0, 0, 0);
			if (pointMap[id] === undefined) {
				pointMap[id] = [];
			}
			pointMap[id].push(vertices.length / 3 - 1);
		}
		geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
		geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
		super(geometry, material);
		this.type = 'CameraHelper';
		this.camera = camera;
		if (this.camera.updateProjectionMatrix) this.camera.updateProjectionMatrix();
		this.matrix = camera.matrixWorld;
		this.matrixAutoUpdate = false;
		this.pointMap = pointMap;
		this.update();
		const colorFrustum = new Color(0xffaa00);
		const colorCone = new Color(0xff0000);
		const colorUp = new Color(0x00aaff);
		const colorTarget = new Color(0xffffff);
		const colorCross = new Color(0x333333);
		this.setColors(colorFrustum, colorCone, colorUp, colorTarget, colorCross);
	}
	setColors(frustum, cone, up, target, cross) {
		const geometry = this.geometry;
		const colorAttribute = geometry.getAttribute('color');
		colorAttribute.setXYZ(0, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(1, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(2, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(3, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(4, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(5, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(6, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(7, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(8, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(9, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(10, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(11, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(12, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(13, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(14, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(15, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(16, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(17, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(18, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(19, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(20, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(21, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(22, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(23, frustum.r, frustum.g, frustum.b);
		colorAttribute.setXYZ(24, cone.r, cone.g, cone.b);
		colorAttribute.setXYZ(25, cone.r, cone.g, cone.b);
		colorAttribute.setXYZ(26, cone.r, cone.g, cone.b);
		colorAttribute.setXYZ(27, cone.r, cone.g, cone.b);
		colorAttribute.setXYZ(28, cone.r, cone.g, cone.b);
		colorAttribute.setXYZ(29, cone.r, cone.g, cone.b);
		colorAttribute.setXYZ(30, cone.r, cone.g, cone.b);
		colorAttribute.setXYZ(31, cone.r, cone.g, cone.b);
		colorAttribute.setXYZ(32, up.r, up.g, up.b);
		colorAttribute.setXYZ(33, up.r, up.g, up.b);
		colorAttribute.setXYZ(34, up.r, up.g, up.b);
		colorAttribute.setXYZ(35, up.r, up.g, up.b);
		colorAttribute.setXYZ(36, up.r, up.g, up.b);
		colorAttribute.setXYZ(37, up.r, up.g, up.b);
		colorAttribute.setXYZ(38, target.r, target.g, target.b);
		colorAttribute.setXYZ(39, target.r, target.g, target.b);
		colorAttribute.setXYZ(40, cross.r, cross.g, cross.b);
		colorAttribute.setXYZ(41, cross.r, cross.g, cross.b);
		colorAttribute.setXYZ(42, cross.r, cross.g, cross.b);
		colorAttribute.setXYZ(43, cross.r, cross.g, cross.b);
		colorAttribute.setXYZ(44, cross.r, cross.g, cross.b);
		colorAttribute.setXYZ(45, cross.r, cross.g, cross.b);
		colorAttribute.setXYZ(46, cross.r, cross.g, cross.b);
		colorAttribute.setXYZ(47, cross.r, cross.g, cross.b);
		colorAttribute.setXYZ(48, cross.r, cross.g, cross.b);
		colorAttribute.setXYZ(49, cross.r, cross.g, cross.b);
		colorAttribute.needsUpdate = true;
	}
	update() {
		const geometry = this.geometry;
		const pointMap = this.pointMap;
		const w = 1,
			h = 1;
		_camera.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
		setPoint('c', pointMap, geometry, _camera, 0, 0, -1);
		setPoint('t', pointMap, geometry, _camera, 0, 0, 1);
		setPoint('n1', pointMap, geometry, _camera, -w, -h, -1);
		setPoint('n2', pointMap, geometry, _camera, w, -h, -1);
		setPoint('n3', pointMap, geometry, _camera, -w, h, -1);
		setPoint('n4', pointMap, geometry, _camera, w, h, -1);
		setPoint('f1', pointMap, geometry, _camera, -w, -h, 1);
		setPoint('f2', pointMap, geometry, _camera, w, -h, 1);
		setPoint('f3', pointMap, geometry, _camera, -w, h, 1);
		setPoint('f4', pointMap, geometry, _camera, w, h, 1);
		setPoint('u1', pointMap, geometry, _camera, w * 0.7, h * 1.1, -1);
		setPoint('u2', pointMap, geometry, _camera, -w * 0.7, h * 1.1, -1);
		setPoint('u3', pointMap, geometry, _camera, 0, h * 2, -1);
		setPoint('cf1', pointMap, geometry, _camera, -w, 0, 1);
		setPoint('cf2', pointMap, geometry, _camera, w, 0, 1);
		setPoint('cf3', pointMap, geometry, _camera, 0, -h, 1);
		setPoint('cf4', pointMap, geometry, _camera, 0, h, 1);
		setPoint('cn1', pointMap, geometry, _camera, -w, 0, -1);
		setPoint('cn2', pointMap, geometry, _camera, w, 0, -1);
		setPoint('cn3', pointMap, geometry, _camera, 0, -h, -1);
		setPoint('cn4', pointMap, geometry, _camera, 0, h, -1);
		geometry.getAttribute('position').needsUpdate = true;
	}
	dispose() {
		this.geometry.dispose();
		this.material.dispose();
	}
}
function setPoint(point, pointMap, geometry, camera, x, y, z) {
	_vector.set(x, y, z).unproject(camera);
	const points = pointMap[point];
	if (points !== undefined) {
		const position = geometry.getAttribute('position');
		for (let i = 0, l = points.length; i < l; i++) {
			position.setXYZ(points[i], _vector.x, _vector.y, _vector.z);
		}
	}
}

const _box = /*@__PURE__*/new Box3();
class BoxHelper extends LineSegments {
	constructor(object, color = 0xffff00) {
		const indices = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
		const positions = new Float32Array(8 * 3);
		const geometry = new BufferGeometry();
		geometry.setIndex(new BufferAttribute(indices, 1));
		geometry.setAttribute('position', new BufferAttribute(positions, 3));
		super(geometry, new MeshPhongMaterial({
			color: color,
			toneMapped: false
		}));
		this.object = object;
		this.type = 'BoxHelper';
		this.matrixAutoUpdate = false;
		this.update();
	}
	update() {
		if (this.object !== undefined) {
			_box.setFromObject(this.object);
		}
		if (_box.isEmpty()) return;
		const min = _box.min;
		const max = _box.max;
		const position = this.geometry.attributes.position;
		const array = position.array;
		array[0] = max.x;
		array[1] = max.y;
		array[2] = max.z;
		array[3] = min.x;
		array[4] = max.y;
		array[5] = max.z;
		array[6] = min.x;
		array[7] = min.y;
		array[8] = max.z;
		array[9] = max.x;
		array[10] = min.y;
		array[11] = max.z;
		array[12] = max.x;
		array[13] = max.y;
		array[14] = min.z;
		array[15] = min.x;
		array[16] = max.y;
		array[17] = min.z;
		array[18] = min.x;
		array[19] = min.y;
		array[20] = min.z;
		array[21] = max.x;
		array[22] = min.y;
		array[23] = min.z;
		position.needsUpdate = true;
		this.geometry.computeBoundingSphere();
	}
	dispose() {
		this.geometry.dispose();
		this.material.dispose();
	}
}

class Curve {
	constructor() {}
	getPoint() {}
	getPoints(divisions = 5) {
		const points = [];
		for (let d = 0; d <= divisions; d++) {
			points.push(this.getPoint(d / divisions));
		}
		return points;
	}
}

function CubicBezierP0(t, p) {
	const k = 1 - t;
	return k * k * k * p;
}
function CubicBezierP1(t, p) {
	const k = 1 - t;
	return 3 * k * k * t * p;
}
function CubicBezierP2(t, p) {
	return 3 * (1 - t) * t * t * p;
}
function CubicBezierP3(t, p) {
	return t * t * t * p;
}
function CubicBezier(t, p0, p1, p2, p3) {
	return CubicBezierP0(t, p0) + CubicBezierP1(t, p1) + CubicBezierP2(t, p2) + CubicBezierP3(t, p3);
}

class CubicBezierCurve3 extends Curve {
	constructor(v0 = new Vector3(), v1 = new Vector3(), v2 = new Vector3(), v3 = new Vector3()) {
		super();
		this.type = 'CubicBezierCurve3';
		this.v0 = v0;
		this.v1 = v1;
		this.v2 = v2;
		this.v3 = v3;
	}
	getPoint(t, optionalTarget = new Vector3()) {
		const point = optionalTarget;
		const v0 = this.v0,
			v1 = this.v1,
			v2 = this.v2,
			v3 = this.v3;
		point.set(CubicBezier(t, v0.x, v1.x, v2.x, v3.x), CubicBezier(t, v0.y, v1.y, v2.y, v3.y), CubicBezier(t, v0.z, v1.z, v2.z, v3.z));
		return point;
	}
}

if (typeof window !== 'undefined') {
	if (window.__THREE__) {
		console.warn('WARNING: Multiple instances of Three.js being imported.');
	} else {
		window.__THREE__ = REVISION;
	}
}

export { AddEquation, AdditiveBlending, AlwaysDepth, AlwaysStencilFunc, AmbientLight, BackSide, BasicDepthPacking, Box3, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, ByteType, CameraHelper, CanvasTexture, ClampToEdgeWrapping, Color, CubicBezierCurve3, CullFaceBack, CullFaceFront, CullFaceNone, CustomBlending, DirectionalLight, DoubleSide, DstAlphaFactor, DstColorFactor, EqualDepth, Float32BufferAttribute, FloatType, FrontSide, GLSL3, GreaterDepth, GreaterEqualDepth, Group, HalfFloatType, InstancedMesh, IntType, KeepStencilOp, LessDepth, LessEqualDepth, LinearEncoding, LinearFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearSRGBColorSpace, Material, MathUtils, Matrix4, MaxEquation, Mesh, MeshDepthMaterial, MeshPhongMaterial, MinEquation, MirroredRepeatWrapping, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NoBlending, NoToneMapping, NormalBlending, NotEqualDepth, Object3D, ObjectSpaceNormalMap, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, PCFShadowMap, PCFSoftShadowMap, PerspectiveCamera, Plane, PlaneGeometry, REVISION, RGBADepthPacking, RGBAFormat, Raycaster, RepeatWrapping, ReverseSubtractEquation, SRGBColorSpace, Scene, ShaderLib, ShaderMaterial, ShadowMaterial, ShortType, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticDrawUsage, SubtractEquation, SubtractiveBlending, TangentSpaceNormalMap, Texture, TextureLoader, TorusGeometry, TwoPassDoubleSide, UVMapping, Uint16BufferAttribute, Uint32BufferAttribute, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, WebGLRenderer, ZeroFactor, _SRGBAFormat, sRGBEncoding };
