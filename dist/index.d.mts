/**
 * Convert an Instagram ID to a URL segment
 * @param instagramId - The Instagram ID to convert
 * @returns The URL segment
 * @example
 * instagramIdToUrlSegment('1004431492801324156') // '3wdR75o2R8'
 */
declare const instagramIdToUrlSegment: (instagramId: string) => string;
/**
 * Convert a URL segment to an Instagram ID
 * @param urlSegment - The URL segment to convert
 * @returns The Instagram ID
 * @example
 * urlSegmentToInstagramId('3wdR75o2R8') // '1004431492801324156'
 */
declare const urlSegmentToInstagramId: (urlSegment: string) => string;

export { instagramIdToUrlSegment, urlSegmentToInstagramId };
