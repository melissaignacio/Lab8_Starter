// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber
//true
test('000-555-8888', () => {
    expect(functions.isPhoneNumber('000-555-8888')).toBe(true);
});

test('222-333-4444', () => {
    expect(functions.isPhoneNumber('222-333-4444')).toBe(true);
});

//false
test('1112227777', () => {
    expect(functions.isPhoneNumber('1112227777')).toBe(false);
});

test('hel-4lo-8888', () => {
    expect(functions.isPhoneNumber('hel-4lo-8888')).toBe(false);
});

//isEmail
//true
test('cat@gmail.com', () => {
    expect(functions.isEmail('cat@gmail.com')).toBe(true);
});

test('hello@yahoo.com', () => {
    expect(functions.isEmail('hello@yahoo.com')).toBe(true);
});

//false
test('', () => {
    expect(functions.isEmail('')).toBe(false);
});

test('@.com', () => {
    expect(functions.isEmail('@.com')).toBe(false);
});

//isStrongPassword
//true
test('h545cat', () => {
    expect(functions.isStrongPassword('h545cat')).toBe(true);
});

test('pcat_223334', () => {
    expect(functions.isStrongPassword('pcat_223334')).toBe(true);
});

//false
test('23rr5', () => {
    expect(functions.isStrongPassword('23rr5')).toBe(false);
});

test('@444422d', () => {
    expect(functions.isStrongPassword('@444422d')).toBe(false);
});

//isDate
//true
test('1/2/2222', () => {
    expect(functions.isDate('1/2/2222')).toBe(true);
});

test('11/45/3900', () => {
    expect(functions.isDate('11/45/3900')).toBe(true);
});

//false
test('2222/222/22', () => {
    expect(functions.isDate('2222/222/22')).toBe(false);
});

test('1/3/23', () => {
    expect(functions.isDate('1/3/23')).toBe(false);
});

//isHexColor
//true
test('#Af0', () => {
    expect(functions.isHexColor('#Af0')).toBe(true);
});

test('#f0Faf0', () => {
    expect(functions.isHexColor('#f0Faf0')).toBe(true);
});

//false
test('wdew', () => {
    expect(functions.isHexColor('wdew')).toBe(false);
});

test('#2222', () => {
    expect(functions.isHexColor('#2222')).toBe(false);
});