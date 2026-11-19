// hooks/useInView.ts
import { useEffect, useRef, useState } from 'react';

export const useInView = (options?: IntersectionObserverInit, id?: string) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Keep options in a ref so callers can pass inline objects
  // (e.g. { threshold: 0.4 }) without re-creating the observer every render.
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting && id) {
        document.dispatchEvent(
          new CustomEvent('sectionVisible', { detail: id })
        );
      }
    }, optionsRef.current);

    observer.observe(element);

    return () => observer.disconnect();
  }, [id]);

  return { ref, isInView };
};
