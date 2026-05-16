'use client';

import { useEffect, useRef, useState } from 'react';

import { DELETE_SPEED, TYPING_PAUSE, TYPING_SPEED } from '@/lib/constants';
import { skills } from '@/lib/skills-list';

const Typewriter = () => {
  const charIdxRef = useRef(0);
  const wordIdxRef = useRef(0);
  const isDeleteRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [text, setText] = useState('');

  useEffect(() => {
    const tick = () => {
      const sentence = skills[wordIdxRef.current];
      if (!sentence) return;

      if (!isDeleteRef.current) {
        charIdxRef.current += 1;

        const next = charIdxRef.current;

        if (next <= sentence.length) {
          setText(sentence.slice(0, next));
        } else {
          pauseTimerRef.current = setTimeout(() => {
            isDeleteRef.current = true;
            timerRef.current = setTimeout(tick, DELETE_SPEED);
          }, TYPING_PAUSE);

          return;
        }
      } else {
        const prev = (charIdxRef.current -= 1);

        if (prev > 0) {
          setText(sentence.slice(0, prev));
        } else {
          setText('');

          wordIdxRef.current = (wordIdxRef.current + 1) % skills.length;
          isDeleteRef.current = false;
        }
      }

      timerRef.current = setTimeout(tick, isDeleteRef.current ? DELETE_SPEED : TYPING_SPEED);
    };

    tick();

    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(pauseTimerRef.current);
    };
  }, []);

  return (
    <>
      <span className="text-gold-middle-accent">{text}</span>
      <span className="ml-1 animate-cursor text-gold-middle-accent">|</span>
    </>
  );
};

export default Typewriter;
