import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

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
        
        <script defer>
          {`
            const lenis = new Lenis()

            function raf(time) {
              lenis.raf(time)
              requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
          `}
        </script>
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
