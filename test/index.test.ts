import { describe, it, expect } from 'vitest';
import { instagramIdToUrlSegment, urlSegmentToInstagramId } from '../src';
import { testData } from './data';


describe('instagramIdToUrlSegment', () => {
  it.each(testData)('should convert an instagram id to a url segment and back', ({ id, urlSegment }) => {
    expect(instagramIdToUrlSegment(id)).toBe(urlSegment);
	expect(urlSegmentToInstagramId(urlSegment)).toBe(id);
  });
});

