import { useState, useEffect, useRef } from "preact/hooks";

interface AnimatedImageProps {
  src: string;
  alt?: string;
  loading: "lazy" | "eager";
  fit?: "contain" | "cover";
}

const AnimatedImage: preact.FunctionComponent<AnimatedImageProps> = ({
  src,
  alt,
  loading = "lazy",
  fit = "cover",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div class="relative overflow-hidden bg-[#181818]" ref={ref}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        class={`animated-image ${isVisible ? "visible" : ""} object-${fit}`}
      />
    </div>
  );
};

export default AnimatedImage;
