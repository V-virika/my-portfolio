'use client';

import { useState, useEffect } from 'react';

const words = [
  'Data Science & Software Engineer.',
  'Vision Transformers & Deep Learning.',
  'Financial AI & Risk Analytics.',
  'Dayananda Sagar University • 9.42 CGPA.',
];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="inline-block font-bold text-[#1e3a8a] min-h-[1.4em]">
      {words[index].substring(0, subIndex)}
      <span className="inline-block w-1.5 h-6 ml-1 bg-[#1e3a8a] animate-pulse align-middle" />
    </span>
  );
}
