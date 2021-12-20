/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import styled from 'styled-components/macro';
/* LoadingWrapper è uno styled component (un React component) che è un div con un certo stile */
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
/*Il jsx di HomePage viene costruito andando a chiamarelazyLoad che fa un import di './index'; lazyload ci restituisce una functioncomponent;
  quando passo una funzione come argomento non la sto eseguendo!
  fallback è ciò che accade nell'attesa del caricamento di HomePage */
export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);
