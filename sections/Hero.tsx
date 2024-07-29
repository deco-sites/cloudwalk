import { HTMLWidget, ImageWidget, VideoWidget } from "apps/admin/widgets.ts";

export interface ImageMedia {
  image?: ImageWidget;
}
export interface VideoMedia {
  video?: VideoWidget;
}

export interface Props {
  desktopMedia?: ImageMedia | VideoMedia;
  mobileMedia?: ImageMedia | VideoMedia;
  title?: HTMLWidget;
}

export default function Hero({
  desktopMedia = {
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/727feb44-7a76-4bf8-91ac-1001a4d67377",
  },
  mobileMedia = {
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/7d3453df-2c0a-4f03-ab11-716d52a8eccb",
  },
  title = "The interplanetary payment network.",
}: Props) {
  const isVideo = (media: ImageMedia | VideoMedia): media is VideoMedia => {
    return "video" in media;
  };

  return (
    <div class="relative w-full h-screen z-10">
      <style>
        {`
          ${
          !isVideo(desktopMedia) && `
            .hero-background {
              background-image: url(${desktopMedia.image});
              background-position: 50%;
            }
          `
        }
          
          ${
          !isVideo(mobileMedia) && `
            @media screen and (max-width: 991px) {
              .hero-background {
                background-image: url(${mobileMedia.image});
                background-position: 100% 100%;
              }
            }  
          `
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
      `}
      </style>
      {isVideo(desktopMedia) && (
        <video
          src={desktopMedia.video}
          class="absolute top-0 left-0 w-full h-full hidden lg:block object-cover"
          muted
          playsInline
          loop
          autoPlay
          controls={false}
        />
      )}
      {isVideo(mobileMedia) && (
        <video
          src={mobileMedia.video}
          class="absolute top-0 left-0 w-full h-full block lg:hidden object-cover"
          muted
          playsInline
          loop
          autoPlay
          controls={false}
        />
      )}
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
