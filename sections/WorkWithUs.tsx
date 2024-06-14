import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import AnimatedImage from "site/islands/AnimatedImage.tsx";

export interface CTA {
  label: string;
  url: string;
}

export interface Props {
  image?: ImageWidget;
  title?: HTMLWidget;
  text?: HTMLWidget;
  cta?: CTA;
}

export default function WorkWithUs({
  title = "Work with us.",
  text = `
    <p class="main-paragraph margin-bottom-medium">We encourage a customer-centric, fast-paced, execution-focused and global mindset among our teams.<br><br>If you want to join the revolution of the payments industry and impact the lives of billions, we invite you to be a key part of the <strong>global transformation of small and medium businesses</strong> at interplanetary scale.</p>
  `,
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/8fc76df7-f913-4215-bdd6-4c4931049598",
  cta = {
    label: "See open positions",
    url: "#",
  },
}: Props) {
  return (
    <div
      id="work-with-us"
      class="flex flex-col px-6 py-[60px] ss:p-8 md:py-16 md:px-8 gap-3 ss:gap-6 text-[18px] desk:flex-row max-w-[1480px] mx-auto"
    >
      <div class="desk:w-1/2">
        <AnimatedImage
          src={image}
          loading="lazy"
          imageClass="max-h-[64svh] desk:max-h-none w-full h-full"
        />
      </div>
      <div class="bg-[#181818] text-white flex flex-col p-8 gap-10 desk:w-1/2 desk:p-16 desk:justify-between">
        <div
          class="leading-[1.1] font-medium text-[32px] md:text-[42px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div class="flex flex-col">
          <div class="text-[16px]" dangerouslySetInnerHTML={{ __html: text }} />
          {cta && (
            <a
              href={cta.url}
              class="block w-fit bg-[#ebebeb] text-[#050505] text-[.8em] font-medium py-3 px-8 rounded-[100px] mt-12 uppercase group"
            >
              <div class="overflow-hidden h-[1.4rem]">
                <div class="transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]">
                  {cta.label}
                </div>
                <div class="transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]">
                  {cta.label}
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
