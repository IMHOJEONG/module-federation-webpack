import { Method } from 'axios';

export const FETCH_TYPES = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] as const;

export type FetchType = (typeof FETCH_TYPES)[number] & Method;

export const CONTENT_TYPES = [
  'application/json',
  'application/x-www-form-urlencoded',
  'text/plain',
  'text/csv',
  'application/atom+xml',
] as const;

export type ContentType = (typeof CONTENT_TYPES)[number];
