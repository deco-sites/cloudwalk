import { useRef, useEffect } from "preact/hooks";

import { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  text: HTMLWidget;
}

export default function ScrollText({ text }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    // set element ref visible ratio
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const elementHeight = globalThis.innerHeight + rect.height;
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      const elementVisible =
        elementTop < globalThis.innerHeight && elementBottom >= 0;

      const elementRatio = elementVisible
        ? Math.max(
            0,
            Math.min(1, (globalThis.innerHeight - elementTop) / elementHeight)
          )
        : 0;

      const initialValue = 50;
      const endValue = 25;

      ref.current.style.transform = `translateX(${
        endValue - elementRatio * initialValue
      }vw)`;
    }
  };

  useEffect(() => {
    onScroll();
    globalThis.addEventListener("scroll", onScroll);
    return () => {
      globalThis.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div
      ref={ref}
      class="relative uppercase text-[4em] leading-[1] ss:text-[7em] md:text-[9em] desk:text-[10em] text-[#111] opacity-[.72] whitespace-nowrap font-medium"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
