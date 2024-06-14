import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import AnimatedImage from "site/islands/AnimatedImage.tsx";

export interface CTA {
  label: string;
  url: string;
}

export interface Product {
  label: string;
  coverImage?: ImageWidget;
  logoImage?: ImageWidget;
  title?: HTMLWidget;
  text?: HTMLWidget;
  cta?: CTA;
}

export interface Props {
  products?: Product[];
}

export default function OurProducts({
  products = [
    {
      label: "infinitepay",
      coverImage:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/5b7906b9-1e95-4f24-b0ce-e562debeeca4",
      logoImage:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/0f777919-b229-4fab-9727-e8081df6436d",
      title: "A powerful movement for Brazilian businesses.",
      text: `
        <p class="secondary-paragraph margin-bottom-medium"><strong>InfinitePay</strong> is a powerful financial platform democratizing access to world-class payment products and software, currently serving millions of clients in Brazil. Launched in 2019, it represented the most disruptive wave of innovation in the Brazilian payments industry.</p>
      `,
      cta: {
        label: "Discover infinitepay",
        url: "https://www.infinitepay.io/",
      },
    },
    {
      label: "JIM",
      coverImage:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/8b689a69-f127-4a0b-ad15-cad37f401bef",
      logoImage:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/7fa82fb5-a2cc-4235-ba17-30f625e30720",
      title: "Instant payment meets AI magic.",
      text: `
       <p class="secondary-paragraph margin-bottom-medium"><strong><em>JIM</em></strong> is bringing the power of instant payments for everyone in the US. Combining cutting edge technology with unparalleled design, <strong><em>JIM</em></strong> enables sellers to accept payments, receive the money instantly, and have access to a next generation AI assistant.</p>
      `,
      cta: {
        label: "Discover Jim",
        url: "https://www.jim.com/",
      },
    },
  ],
}: Props) {
  return (
    <div id="our-products" class="flex flex-col bg-base-200">
      {products.map(
        ({ label, coverImage, logoImage, title, text, cta }, index) => (
          <div
            class={`flex flex-col ${
              index % 2 === 0 ? "desk:flex-row" : "desk:flex-row-reverse"
            }`}
          >
            <div class="desk:w-[50%]">
              {coverImage && (
                <AnimatedImage loading="lazy" src={coverImage} fit="cover" />
              )}
            </div>
            <div class="flex flex-col py-8 px-6 ss:p-8 md:p-16 text-white desk:py-24 desk:px-20 desk:max-w-[740px]">
              <div class="w-fit bg-[rgba(124,124,124,.12)] rounded-sm text-[rgba(255,255,255,.6)] uppercase py-1 px-2 text-[12px] md:text-[14px] mb-6">
                Our Products
              </div>
              {logoImage && (
                <img
                  class="block w-fit h-[22px] ss:h-[24px] md:h-[30px] mb-4"
                  src={logoImage}
                  loading="lazy"
                />
              )}
              {title && (
                <div
                  class="text-[32px] font-medium leading-[1.1] md:text-[42px] desk:text-[45px] mb-6 ss:mb-8"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
              {text && (
                <div
                  class="text-[16px] font-light leading-[1.4] mb-12 ss:mb-16"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
              {cta && (
                <a
                  href={cta.url}
                  class="border-none outline-none cursor-pointer font-medium w-fit bg-[#ebebeb] rounded-[100px] py-3 px-8 text-[.8em] uppercase text-[#050505] mb-6 ss:mb-8 group"
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
        )
      )}
    </div>
  );
}
