import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Investor {
  label: string;
  image: ImageWidget;
}

export interface Props {
  title?: string;
  investors?: Investor[];
}

export default function OurInvestors({
  title = "Our investors",
  investors = [
    {
      label: "Coatue",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/adbc1729-c6e9-4d5f-8c20-44a201566b36",
    },
    {
      label: "DST Global",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/057f4f4e-678a-4917-b3e8-2369546f500d",
    },
    {
      label: "PlugAndPlay",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/a6a05b18-8ccf-465c-b730-119ac2fb76f1",
    },
    {
      label: "Light Capital Group",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/40f9e341-24ba-4ce9-a9fd-f2e8467935cc",
    },
    {
      label: "Valor Capital Group",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/2d149f04-d497-4f05-8e07-c1d8cab4a6a3",
    },
  ],
}: Props) {
  return (
    <div
      id="investors"
      class="flex flex-col items-center justify-center min-h-[60svh] px-6 py-[60px]"
    >
      <div class="text-[24px] leading-[1.2] md:text-[42px] text-[#c4c4c4] font-normal">
        {title}
      </div>
      <div class="w-full flex flex-col items-center justify-center flex-nowrap ss:flex-row ss:flex-wrap gap-[45px] ss:gap-[64px] pt-[56px]">
        {investors.map(({ label, image }) => (
          <Image
            class="w-fit h-8 ss:h-10"
            alt={label}
            src={image}
            width={264}
            height={40}
          />
        ))}
      </div>
    </div>
  );
}
