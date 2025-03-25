'use client';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface LatexProps {
  math: string;
  block?: boolean;
}

export default function Latex({ math, block = false }: LatexProps) {
  if (block) {
    return <BlockMath math={math} />;
  }
  return <InlineMath math={math} />;
} 