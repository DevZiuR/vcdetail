'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Animation variants for different effects
export const fadeInUp = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
});

export const fadeIn = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
});

export const slideInLeft = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
});

export const slideInRight = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
});

export const scaleIn = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'scale(1)' : 'scale(0.95)',
  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
});