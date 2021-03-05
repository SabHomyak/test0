import * as React from 'react';
// components
import Link from 'next/link';

const Logo = () => (
  <Link href='/products' passHref>
    <a>
      <img src='/static/logos/Prod-Logo.svg' alt='rpod-logo' />
    </a>
  </Link>
);

export { Logo };
