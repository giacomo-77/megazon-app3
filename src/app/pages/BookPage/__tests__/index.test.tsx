import * as React from 'react';
import { render } from '@testing-library/react';

import { BookPage } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<BookPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BookPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
