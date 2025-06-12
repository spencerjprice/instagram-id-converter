import BigNumber from 'bignumber.js';
import { CHARS_MAP } from './chars';


BigNumber.set({
	ALPHABET: Object.keys(CHARS_MAP).join('')
});

const REVERSE_CHARS_MAP = Object.fromEntries(Object.entries(CHARS_MAP).map(([key, value]) => [value, key]));

/**
 * Convert an Instagram ID to a URL segment
 * @param instagramId - The Instagram ID to convert
 * @returns The URL segment
 * @example
 * instagramIdToUrlSegment('1004431492801324156') // '3wdR75o2R8'
 */
export const instagramIdToUrlSegment = (instagramId: string) => {
  const id = (new BigNumber(instagramId)).toString(64);
  return id.split('').map(char => CHARS_MAP[char]).join('');
};      

/**
 * Convert a URL segment to an Instagram ID
 * @param urlSegment - The URL segment to convert
 * @returns The Instagram ID
 * @example
 * urlSegmentToInstagramId('3wdR75o2R8') // '1004431492801324156'
 */
export const urlSegmentToInstagramId = (urlSegment: string) => {
  return new BigNumber(urlSegment.split('').map(char => REVERSE_CHARS_MAP[char]).join(''), 64).toString(10);
};
