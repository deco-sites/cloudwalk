import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  desktopImage?: ImageWidget;
  mobileImage?: ImageWidget;
  title?: HTMLWidget;
}

export default function Hero({
  desktopImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/727feb44-7a76-4bf8-91ac-1001a4d67377",
  mobileImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/7d3453df-2c0a-4f03-ab11-716d52a8eccb",
  title = "The interplanetary payment network.",
}: Props) {
  return (
    <div class="relative w-full h-screen z-10">
      <style>{`
        .hero-background {
            background-image: url(${desktopImage});
            background-position: 50%;
          }

          @media screen and (max-width: 991px) {
            .hero-background {
              background-image: url(${mobileImage});
              background-position: 100% 100%;
            }
          }

          @media screen and (max-width: 767px) {
            .hero-background {
              background-position: 86% 100%;
            }
          }

          @media screen and (max-width: 479px) {
            .hero-background {
              background-position: 107svw 100%;
            }
          }
      `}</style>
      <div class="absolute top-0 left-0 w-full h-full bg-cover hero-background">
        <div class="w-full max-w-[1480px] mx-auto pt-[12vh] md:pt-[20vh] pb-12 md:pb-[22vh] h-full">
          <h1
            class="px-6 md:px-[60px] pt-[8vh] md:pt-[12vh] text-[2.6rem] md:text-7xl font-medium text-white max-w-[50%] leading-[1.1] -tracking-[.02em]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </div>
    </div>
  );
}
