import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

const snippet = () => {
  // Primeiro estado de carregamento
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DomContentLoaded.");
  });

  document.addEventListener("readystatechange", (event) => {
    console.log("document readyState", document.readyState);
  });

  // Ultimo estado de carregamento
  globalThis.addEventListener("load", (event) => {
    console.log("Page loaded.");
    const loaderBarWrapper = document.querySelector(
      ".loader-bar-wrapper"
    ) as HTMLDivElement;
    const loaderBar = document.querySelector(".loader-bar") as HTMLDivElement;

    if (loaderBar) {
      loaderBar.style.transform = "translateX(100%)";
    }

    if (loaderBarWrapper) {
      loaderBarWrapper.style.opacity = "0";

      setTimeout(() => {
        const maskLoaderTop = document.querySelector(
          ".mask-loader-top"
        ) as HTMLDivElement;
        const maskLoaderBottom = document.querySelector(
          ".mask-loader-bottom"
        ) as HTMLDivElement;

        if (maskLoaderTop && maskLoaderBottom) {
          maskLoaderTop.style.transform =
            "translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";

          setTimeout(() => {
            maskLoaderBottom.style.transform =
              "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
          }, 150);
        }
      }, 500);
    }
  });
};

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

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

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
