import { test, expect } from '@jest/globals';
import { stringIsNotAPalindromeCandidate, mapIsNotAPalidromeCandidate, toCharacterFrequencyMap, characterFrequencyMapToPalindrome, makePalindromeFrom} from '../src/services/palindrome-service';


test('null string is not a palindrome candidate', () => {
    expect( stringIsNotAPalindromeCandidate( null ) ).toBeTruthy();
});

test('empty string is not a palindrome candidate', () => {
    expect( stringIsNotAPalindromeCandidate( '' ) ).toBeTruthy();
});

test('string with invalid characters is not a palindrome candidate', () => {
    expect( stringIsNotAPalindromeCandidate( '123' ) ).toBeTruthy();
    expect( stringIsNotAPalindromeCandidate( 'ab c' ) ).toBeTruthy();
    expect( stringIsNotAPalindromeCandidate( 'ab2c' ) ).toBeTruthy();
    expect( stringIsNotAPalindromeCandidate( 'ab.c' ) ).toBeTruthy();
});

test('string with valid characters is a palindrome candidate', () => {
    expect( stringIsNotAPalindromeCandidate( 'abc' ) ).toBeFalsy();
});


test('string with more than one character is converted to a character frequency map', () => {
    const expectedResult = new Map<string,number>([['a',1],['b',2],['c',3]]);
    expect ( toCharacterFrequencyMap( 'abbccc' ) ).toEqual(expectedResult); 
});

test('string with one character is converted to a character frequency map', () => {
    const expectedResult = new Map<string,number>([['a',1]]);
    expect ( toCharacterFrequencyMap( 'a' ) ).toEqual(expectedResult); 
});

test('empty string is converted to an empty character frequency map', () => {
    const expectedResult = new Map<string,number>();
    expect ( toCharacterFrequencyMap( '' ) ).toEqual(expectedResult); 
});

test('null string is converted to an empty character frequency map', () => {
    const expectedResult = new Map<string,number>();
    expect ( toCharacterFrequencyMap( null ) ).toEqual(expectedResult); 
});

test('null map is not a palindrome candidate', () => {
    expect( mapIsNotAPalidromeCandidate( null ) ).toBeTruthy();
});

test('empty map is not a palindrome candidate', () => {
    expect( mapIsNotAPalidromeCandidate( new Map<string,number>() ) ).toBeTruthy();
});

test('map with more than one unpaired character is not a palindrome candidate', () => {
    const map = new Map<string,number>([['a',2],['b',3],['c',3]]);
    expect( mapIsNotAPalidromeCandidate( map ) ).toBeTruthy();
});

test('map with no unpaired characters is a palindrome candidate', () => {
    const map = new Map<string,number>([['a',2],['b',4]]);
    expect( mapIsNotAPalidromeCandidate( map ) ).toBeFalsy();

    const map2 = new Map<string,number>([['a',2]]);
    expect( mapIsNotAPalidromeCandidate( map2 ) ).toBeFalsy();
});

test('map with one unpaired character is a palindrome candidate', () => {
    const map = new Map<string,number>([['a',2],['b',3]]);
    expect( mapIsNotAPalidromeCandidate( map ) ).toBeFalsy();

    const map2 = new Map<string,number>([['a',1]]);
    expect( mapIsNotAPalidromeCandidate( map2 ) ).toBeFalsy();
});


test('valid character frequency map will return a palindrome', () => {
    expect(characterFrequencyMapToPalindrome(new Map<string,number>([['a',1]]))).toBe('a');
    expect(characterFrequencyMapToPalindrome(new Map<string,number>([['a',2]]))).toBe('aa');
    expect(characterFrequencyMapToPalindrome(new Map<string,number>([['a',3]]))).toBe('aaa');
    expect(characterFrequencyMapToPalindrome(new Map<string,number>([['a',2],['b',1]]))).toBe('aba');
    expect(characterFrequencyMapToPalindrome(new Map<string,number>([['a',1],['b',2]]))).toBe('bab');
    expect(characterFrequencyMapToPalindrome(new Map<string,number>([['a',2],['b',3]]))).toBe('abbba');
    expect(characterFrequencyMapToPalindrome(new Map<string,number>([['a',2],['b',3],['c',4]]))).toBe('abccbccba');
    expect(characterFrequencyMapToPalindrome(new Map<string,number>([['a',3],['b',4],['c',2]]))).toBe('abbcacbba');

});


test('palindrome candidate will return a palindrome', () => {
    expect(makePalindromeFrom('a')).toBe('a');
    expect(makePalindromeFrom('aa')).toBe('aa');
    expect(makePalindromeFrom('aaa')).toBe('aaa');
    expect(makePalindromeFrom('aab')).toBe('aba');
    expect(makePalindromeFrom('abb')).toBe('bab');
    expect(makePalindromeFrom('aabbb')).toBe('abbba');
    expect(makePalindromeFrom('aabbbcccc')).toBe('abccbccba');
    expect(makePalindromeFrom('aaabbbbcc')).toBe('abbcacbba');
});


test('non-palindrome candidate will return undefined', () => {
    expect(makePalindromeFrom(null)).toBeUndefined();
    expect(makePalindromeFrom('')).toBeUndefined();
    expect(makePalindromeFrom('ab')).toBeUndefined();
    expect(makePalindromeFrom('abc')).toBeUndefined();
    expect(makePalindromeFrom('aab2')).toBeUndefined();
    expect(makePalindromeFrom('123')).toBeUndefined();
    expect(makePalindromeFrom('..--')).toBeUndefined();
});

