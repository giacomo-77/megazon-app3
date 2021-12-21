import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
      <li>
        <ul>
          <Link to={'/books/2'}>Books</Link>
        </ul>
        <ul>
          <Link to={'/counters'}>Counters</Link>
        </ul>
      </li>
    </>
  );
}
