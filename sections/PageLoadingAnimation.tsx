import { SectionProps } from "deco/mod.ts";

const snippet = () => {
  const setTransform = (element: HTMLElement, transformValue: string) => {
    if (element) element.style.transform = transformValue;
  };

  const setOpacity = (element: HTMLElement, opacityValue: string) => {
    if (element) element.style.opacity = opacityValue;
  };

  const hideElement = (element: HTMLElement) => {
    if (element) element.style.display = "none";
  };

  globalThis.addEventListener("load", () => {
    const loaderBarWrapper = document.querySelector(
      ".loader-bar-wrapper"
    ) as HTMLDivElement;
    const loaderBar = document.querySelector(".loader-bar") as HTMLDivElement;

    setTransform(loaderBar, "translateX(100%)");
    setOpacity(loaderBarWrapper, "0");

    setTimeout(() => {
      const maskLoaderTop = document.querySelector(
        ".mask-loader-top"
      ) as HTMLDivElement;
      const maskLoaderBottom = document.querySelector(
        ".mask-loader-bottom"
      ) as HTMLDivElement;

      setTransform(maskLoaderTop, "translate3d(0px, -100%, 0px)");

      setTimeout(() => {
        setTransform(maskLoaderBottom, "translate3d(0px, 100%, 0px)");

        setTimeout(() => {
          const loader = document.querySelector(".loader") as HTMLDivElement;
          hideElement(loader);
        }, 500);
      }, 150);
    }, 500);
  });
};

export default function PageLoadingAnimation({isAdmin} : SectionProps<typeof loader>) {
  if(isAdmin) return <></>;
  return (
    <>
      <div class="loader flex flex-col z-50 fixed top-0 left-0 w-full h-full overflow-hidden bottom-auto right-auto">
        <div
          class="bg-[#111] flex-1 mask-loader-top transition-transform duration-500"
          style={{
            transform:
              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        ></div>
        <div class="loader-bar-wrapper duration-500 transition-opacity h-[2px] w-full bg-[#142e29]">
          <div
            class="loader-bar transition-transform bg-[rgba(255,255,255,.5)] w-full h-[2px] duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateX(-100%)",
            }}
          ></div>
        </div>
        <div
          class="bg-[#111] flex-1 mask-loader-bottom transition-transform duration-500"
          style={{
            transform:
              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        ></div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `(${snippet})();`,
        }}
      ></script>
    </>
  );
}

export const loader = (_props: unknown, req: Request) => {

  return{
    isAdmin: req.url.includes("/preview")
  }
}