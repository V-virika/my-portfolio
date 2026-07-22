'use client';

import { useState, useEffect } from 'react';

export default function TypewriterText() {
  const phrases = [
    'Data Science & Analytics Engineer.',
    'Vision Transformers & Deep Learning.',
    'Full-Stack Web App Developer.',
    'B.Tech CSE (Data Science).',
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typewriter typing logic
  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 1800);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]);

  return (
    <span className="inline-flex items-center">
      <span>{phrases[index].substring(0, subIndex)}</span>
      <span
        className={`ml-1 inline-block w-0.5 h-7 sm:h-9 bg-[#b45309] ${
          blink ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
      />
    </span>
  );
}
