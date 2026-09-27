"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  count: number;
  label: string;
  duration?: number;
  delay?: number;
}

export default function Counter({ count, label, duration = 2000, delay = 0 }: CounterProps) {
  const [displayCount, setDisplayCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    const element = document.querySelector(`[data-counter="${count}"]`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [count]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let start = 0;
      const increment = count / (duration / 16);
      const animate = () => {
        start += increment;
        if (start >= count) {
          setDisplayCount(count);
          return;
        }
        setDisplayCount(Math.floor(start));
        requestAnimationFrame(animate);
      };
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, count, duration, delay]);

  return (
    <div data-counter={count} className="counter-item">
      <p className="text-4xl font-bold text-primary">{displayCount.toLocaleString()}</p>
      <p className="mt-2 text-sm font-medium text-text-light">{label}</p>
    </div>
  );
}