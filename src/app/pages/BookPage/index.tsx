/**
 *
 * BookPage
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Link } from 'react-router-dom';

interface Props {}

export function BookPage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      Hello Books. <Link to={'/'}>Home Page</Link>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
}

const Div = styled.div``;
