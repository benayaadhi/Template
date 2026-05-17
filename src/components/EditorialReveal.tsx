"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
}

export default function EditorialReveal({ children, as = "div", delay = 0, className = "", ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  const Tag = as as keyof React.JSX.IntrinsicElements;
  return React.createElement(
    Tag,
    {
      ref: ref as React.Ref<HTMLElement>,
      className: `reveal ${shown ? "reveal--shown" : ""} ${className}`.trim(),
      ...rest,
    },
    children
  );
}
