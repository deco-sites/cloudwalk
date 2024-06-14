import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

declare global {
  let Lenis: any;
  let gsap: any;
  let ScrollTrigger: any;
}

const snippet = () => {
  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);

  document.addEventListener("DOMContentLoaded", () => {
    // const sections = gsap.utils.toArray(".parallax-section");
    // sections.forEach((section: any) => {
    //   gsap.to(section, {
    //     yPercent: 100,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: section,
    //       start: "bottom bottom",
    //       end: "bottom top",
    //       scrub: true,
    //       anticipatePin: 1,
    //     },
    //   });
    // });
    // // setup parallax sections
    // gsap.utils.toArray(".parallax-section").forEach((section: any) => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: section,
    //       scrub: 0.5,
    //       start: "top top",
    //       end: "bottom top",
    //       pin: true,
    //       anticipatePin: 1,
    //     },
    //   });
    //   tl.fromTo(section, { y: 0 }, { y: -section.offsetHeight });
    // });
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

        <script src="https://unpkg.com/lenis@1.1.2/dist/lenis.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

        <script defer dangerouslySetInnerHTML={{ __html: `(${snippet})();` }} />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
