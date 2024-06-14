import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

interface ParallaxSection {
  tag?: string;
  title: HTMLWidget;
  description?: HTMLWidget;
  image?: ImageWidget;
  /**
   * @format color-input
   */
  backgroundColor?: string;
}

export interface Props {
  id?: string;
  sections?: ParallaxSection[];
}

export default function ParallaxSection({
  sections = [
    {
      tag: "Our Pillars",
      title: "Best<br/>Product",
      description:
        "We deliver our services with the highest technological standards, featuring AI and Blockchain, compounded with top-notch user experience.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/bde80457-df25-4c0c-9160-f87cf025a805",
      backgroundColor: "#ecebe9",
    },
    {
      tag: "Our Pillars",
      title: "Customer<br/>Engagement",
      description:
        "Our customers play a vital role in everything we do. They are our best sales promoters and also withhold the ability to change the product and the business at any time.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/bde80457-df25-4c0c-9160-f87cf025a805",
      backgroundColor: "#ffffff",
    },
    {
      tag: "Our Pillars",
      title: "Disruptive<br/>Economics",
      description:
        "We aim to grant the best price for our customers to help them unlock purchasing power. We designed our business model to transform how merchants sell and profit.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/bde80457-df25-4c0c-9160-f87cf025a805",
      backgroundColor: "#ecebe9",
    },
  ],
  id = "our-pillars",
}: Props) {
  return (
    <div id={id} class="relative">
      {sections?.map(({ tag, title, description, image, backgroundColor }) => (
        <div
          style={{
            backgroundColor: backgroundColor,
          }}
          class={`sticky top-0 min-h-screen px-3 ss:px-[25px] flex justify-center items-center`}
        >
          <div class="flex flex-col items-center justify-center">
            <span
              class="leading-[1.1] text-[2.8em] ss:text[4.5em] md:text-[5em] desk:text-[9.4em] font-thin text-center"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
