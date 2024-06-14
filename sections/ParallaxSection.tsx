import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import BluredImage from "site/islands/BluredImage.tsx";

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
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/3661c9ae-f5a7-41b0-b44a-58ab8b2b4046",
      backgroundColor: "#ffffff",
    },
    {
      tag: "Our Pillars",
      title: "Disruptive<br/>Economics",
      description:
        "We aim to grant the best price for our customers to help them unlock purchasing power. We designed our business model to transform how merchants sell and profit.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/01e97504-7508-4e3a-a6e1-e8e6eb4c2600",
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
          <div class="absolute rounded-sm top-[3vh] md:top-[6vh] left-1/2 -translate-x-1/2 bg-[rgba(124,124,124,.12)] py-1 px-2 font-medium uppercase text-[12px] md:text-[14px]">
            {tag}
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="relative text-center">
              <span
                class="leading-[1.1] text-[2.8em] ss:text-[4.5em] md:text-[5em] desk:text-[9.4em] font-thin text-center"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              {image && (
                <BluredImage
                  loading="lazy"
                  width={270}
                  height={270}
                  src={image}
                  className="mx-auto static ss:absolute top-1/2 left-1/2 w-[180px] h-[180px] ss:w-[130px] ss:h-[130px] md:w-[150px] md:h-[150px] desk:w-[270px] desk:h-[270px]"
                />
              )}
            </div>
            {description && (
              <div
                class="font-light leading-[1.5] text-[16px] mt-6 text-center max-w-none ss:max-w-[78%] desk:max-w-[60%] px-4 ss:px-0"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
