import styled from 'styled-components/macro';
/*GIA: otteniamo un componente <a> per i link esterni alla nostra applicazione: dalla pagina non devono partire chiamate http se non attraverso fetch;
  tutto il resto deve passare attraverso il router, ovvero putilizzando il componente <Link>*/
export const A = styled.a`
  color: ${p => p.theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
