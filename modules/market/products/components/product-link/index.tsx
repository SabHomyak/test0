import Link from 'next/link';
import * as React from 'react';

interface Props {
  prodId: string
}

const ProductLink: React.FC<Props> = ({ prodId, children }) => (
  <Link href='/products/[id]' as={`/products/${prodId}`}>
    <a>{children}</a>
  </Link>
);
export { ProductLink };