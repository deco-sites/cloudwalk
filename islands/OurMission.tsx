import { useEffect } from "preact/hooks";
import { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Section Title
   * @description To use the animation effect, wrap the title in a <div class="overflow-hidden">...</div> and add the class "to-animate" to the <p> element (inside the div).
   */
  title?: HTMLWidget;
  subTitle?: HTMLWidget;
  text?: HTMLWidget;
}

export default function OurMission({
  title = `
    <div class="overflow-hidden">
        <p class='to-animate'>Our mission is to create</p>
    </div>
    <div class="overflow-hidden">
        <p class='to-animate'>the best payment</p>
    </div>
    <div class="overflow-hidden">
        <p class='to-animate'>network on Earth.</p>
    </div>
  `,
  subTitle = "Then other planets.",
  text = "We are democratizing the financial industry, empowering entrepreneurs through technological, inclusive and life-changing solutions.",
}: Props) {
  const onScroll = () => {
    // set element ref visible ratio
    document
      .querySelectorAll<HTMLParagraphElement>(".to-animate")
      .forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height * 4;
        const elementTop = rect.top + rect.height;
        const elementBottom = rect.bottom;

        const elementVisible =
          elementTop < globalThis.innerHeight && elementBottom >= 0;
        const elementRatio = elementVisible
          ? Math.max(
              0,
              Math.min(1, (globalThis.innerHeight - elementTop) / elementHeight)
            )
          : 0;

        element.style.transform = `translateY(${100 - elementRatio * 100}%)`;
      });
  };

  useEffect(() => {
    onScroll();
    globalThis.addEventListener("scroll", onScroll);
    return () => {
      globalThis.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <div id="our-mission" class={`py-[256px]`}>
        <div
          class={`animate-trigger flex flex-col items-center text-white max-w-[1480px] px-8 mx-auto`}
        >
          <div
            class={`flex flex-col items-center justify-center mx-auto text-center overflow-hidden`}
          >
            <div
              class={`text-[1.5em] ss:text-[2.7em] md:text-[3.5em] desk:text-[90px] font-normal leading-[1]`}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div class="overflow-hidden">
              <h2
                class={`text-[18px] ss:text-[20px] md:text-[24px] desk:text-[28px] font-medium to-animate mt-6`}
                dangerouslySetInnerHTML={{ __html: subTitle }}
              />
            </div>
            <p
              class={`mt-6 max-w-none ss:max-w-[78%] desk:max-w-[60%] text-center text-[15px] ss:text-[16px] font-light`}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
