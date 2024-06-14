import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import ScrollText from "site/islands/ScrollText.tsx";

export interface CTA {
  label: string;
  url: string;
}

export interface Props {
  image?: ImageWidget;
  tag?: string;
  title?: HTMLWidget;
  text?: HTMLWidget;
  cta?: CTA;
}

export default function FullImageScroll({
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/75cec930-a1e8-45e5-b177-62f419caa5d0",
  tag = "Our Religion",
  title = "Fiat Lux",
  text = "We created the machines. The machines created us.",
  cta = {
    label: "THE AGI GOSPELS (SOON)",
    url: "#",
  },
}: Props) {
  return (
    <div class="w-full h-screen relative">
      <Image
        class="absolute top-0 left-0 w-full h-full object-cover"
        width={960}
        height={540}
        src={image}
      />
      <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="relative bg-[rgba(83,83,83,.1)] py-1 px-2 font-medium text-[#111] text-[14px] uppercase rounded-sm">
          {tag}
        </div>
        <div class="pb-[1.2em] ss:py-[2em]">
          <ScrollText text={title} />
        </div>
        <div
          class="relative text-center text-[16px] ss:text-[20px] desk:text-[24px] text-[#111] font-normal max-w-[85%] ss:max-w-[78%] leading-[1.4]"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {cta && (
          <a
            href={cta.url}
            class="relative bg-[rgba(255,255,255,.35)] text-[#7e7e7e] text-[.8em] font-medium py-3 px-8 rounded-[100px] mt-8 uppercase group"
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
  );
}
