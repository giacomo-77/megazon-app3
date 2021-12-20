/**
 *
 * Asynchronously loads the component for BookPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BookPage = lazyLoad(
  () => import('./index'),
  module => module.BookPage,
);
