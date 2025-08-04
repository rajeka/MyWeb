import React, { useState, useEffect } from 'react';

export default function useScrollHeader() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    // disregard small scroll amounts to avoid flicker
    const SCROLL_THRESHOLD = 10;
    // start the actions only after passing initial header hight.
    const INITIAL_HEADER_OFFSET = 100;

    const handleScroll = () => {
      const currentPosY = window.pageYOffset;

      if (Math.abs(currentPosY - lastY) < SCROLL_THRESHOLD) {
        //ignore avoid small scrolls.
        return;
      }
      // 70
      if (currentPosY > lastY && currentPosY > INITIAL_HEADER_OFFSET) {
        setScrollDirection('down');
      } else if (currentPosY < lastY) {
        setScrollDirection('up');
      }
      setLastY(currentPosY > 0 ? currentPosY : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastY]);
  return scrollDirection;
}
