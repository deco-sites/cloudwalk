import { useEffect, useRef } from "preact/hooks";

import Image from "apps/website/components/Image.tsx";

interface Props {
  src: string;
  alt?: string;
  width: number;
  height?: number;
  loading?: "lazy" | "eager";
  fit?: "contain" | "cover";
  blur?: number;
  y?: number;
  className?: string;
}

export default function BluredImage({
  className = "",
  src,
  alt,
  width,
  height,
  loading,
  fit,
  blur = 15,
  y = 6,
}: Props) {
  const ref = useRef<HTMLImageElement>(null);

  const onScroll = () => {
    // set element ref visible ratio
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const elementHeight = rect.height * 2;
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

      const transformRatio = Math.max(
        0,
        Math.min(
          1,
          (globalThis.innerHeight - elementTop + elementHeight) /
            elementHeight /
            2
        )
      );

      if (globalThis.innerWidth >= 480) {
        const transformCalc = 50 + -Math.min(50, transformRatio * y);
        const transform = `translate(-50%, -${transformCalc}%)`;
        ref.current.style.transform = transform;
      } else {
        ref.current.style.transform = "unset";
      }

      ref.current.style.filter = `blur(${blur - elementRatio * blur}px)`;
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
    <Image
      ref={ref}
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      fit={fit}
      class={className}
    />
  );
}
