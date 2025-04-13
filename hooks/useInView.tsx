// hooks/useInView.ts
import { useEffect, useRef, useState } from 'react';

export const useInView = (options?: IntersectionObserverInit, id?: string) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting && id) {
        document.dispatchEvent(
          new CustomEvent('sectionVisible', { detail: id })
        );
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options, id])

  return { ref, isInView };
};