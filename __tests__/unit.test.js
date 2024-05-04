// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// =========================PHONE NUMBERS=========================

// valid number
test('testing valid number (format 1)', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
})
// valid number
test('testing valid number (format 2)', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
})
// too short
test('testing invalid number (format 1)', () => {
  expect(isPhoneNumber('456789')).toBe(false);
})
// too long
test('testing invalid number (format 2)', () => {
expect(isPhoneNumber('12345678901')).toBe(false);
})

// =========================EMAILS=========================
// valid email
test('testing valid email (format 1)', () => {
  expect(isEmail('yvora@ucsd.edu')).toBe(true);
})

// valid email
test('testing valid email (format 2)', () => {
  expect(isEmail('johndoe123@gmail.com')).toBe(true);
})
// missing @
test('testing invalid email (format 1)', () => {
  expect(isEmail('yvora.ucsd.edu')).toBe(false);
})
// domain too long
test('testing invalid email (format 1)', () => {
  expect(isEmail('123@gmail.comcom')).toBe(false);
})


// =========================PASWORDS=========================
// strong password
test('testing strong password (format 1)', () => {
  expect(isStrongPassword('Abc_1234')).toBe(true);
})

// strong password
test('testing strong password (format 2)', () => {
  expect(isStrongPassword('PaSsw0rd')).toBe(true);
})

// weak password
test('testing weak password (format 1)', () => {
  expect(isStrongPassword('123456789')).toBe(false);
})

// weak password
test('testing weak password (format 2)', () => {
  expect(isStrongPassword('abc@d')).toBe(false);
})

// =========================DATES=========================
// valid date
test('testing valid date (format 1)', () => {
  expect(isDate('12/01/2004')).toBe(true);
})

// valid date
test('testing valid date (format 2)', () => {
  expect(isDate('01/12/1998')).toBe(true);
})

// invalid date used - instead of /
test('testing invalid date (format 1)', () => {
  expect(isDate('12-01-2004')).toBe(false);
})

// invalid date- year is not XXXX
test('testing invalid date (format 2)', () => {
  expect(isDate('12/01/04')).toBe(false);
})

// =========================HEX COLORS=========================
// valid hex color
test('testing valid hex color (format 1)', () => {
  expect(isHexColor('#FF0000')).toBe(true);
})
// valid hex color
test('testing valid hex color (format 2)', () => {
  expect(isHexColor('ff0101')).toBe(true);
})

// invalid hex color- # at the wrong place
test('testing invalid hex color (format 1)', () => {
  expect(isHexColor('FFFFFF#')).toBe(false);
})
// invalid hex color- too few characters
test('testing invalid hex color (format 2)', () => {
  expect(isHexColor('#ff00')).toBe(false);
})