import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import AnimatedImage from "site/islands/AnimatedImage.tsx";

export interface Props {
  title?: HTMLWidget;
  text?: HTMLWidget;
  image?: ImageWidget;
}

export default function TextAndImageFade({
  title = "<span class='font-thin'>The planet Earth payments industry and</span> <span class='font-medium'>why price matters.</span> ",
  text = `
    The payment industry is evolving. But sellers are not reaping the benefits of price wars between big banks and acquirers. In the end, "new" measures and solutions rarely benefit <strong>the sellers, who often suffer the most, damaging the economy.<br>&zwj;</strong><strong><br>It's time to change.</strong><br>Our mission is to outsmart the system by building a new one that is fair for all players.
`,
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/035b9199-b933-4908-8448-ce592c176b5f",
}: Props) {
  return (
    <>
      <div class="flex flex-col desk:flex-row-reverse pb-[40px] ss:pb-[148px] px-6 ss:px-8 text-white max-w-[1480px] mx-auto items-center">
        <div class="mb-6 md:mb-[96px] desk:ml-[96px] desk:mb-0">
          <AnimatedImage fit="cover" loading="lazy" src={image} />
        </div>
        <div class="py-[60px] ss:py-8 md:ss-[64px] flex flex-col gap-4">
          <h3
            class="text-2xl md:text-[42px] leading-[1.2]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            class="text-[15px] ss:text-[16px] ss:max-w-[80%]"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </>
  );
}
