import { HTMLWidget } from "apps/admin/widgets.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface FooterItems {
  title?: string;
  text?: {
    content?: HTMLWidget;
  }[];
}
interface Props {
  contactUs: {
    title?: string;
    text?: HTMLWidget[];
  };
  footerBottom: {
    logo?: ImageWidget;
    logoUrl?: string;
    copyright?: string;
    footerColumns?: FooterItems[];
  };
}

function Footer({ contactUs, footerBottom }: Props) {
  return (
    <>
      <div id="contact" class="overflow-hidden bg-base-200">
        <div class="px-6 ss:px-8 min-h-[50svh] flex items-center max-w-[1480px] mx-auto">
          <div class="py-[60px] text-base-300 md:flex md:justify-between md:w-full md:gap-[40px]">
            <h2 class="mb-10 text-[32px] lg:text-[45px] font-medium md:flex md:items-center lg:w-[50%]">
              {contactUs.title}
            </h2>
            <div class="flex flex-col lg:w-[50%]">
              {contactUs.text?.map((item) => (
                <span
                  class="block mb-4"
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-300">
        <div class="pt-[54px] pb-9 bg-base-300 px-6 ss:px-8 flex flex-col md:flex-row md:items-center max-w-[1480px] mx-auto text-base-content gap-10">
          <div class="flex flex-col md:w-[50%]">
            {footerBottom.logo && (
              <a href={footerBottom.logoUrl}>
                <Image
                  src={footerBottom.logo}
                  alt="Cloudwalk logo"
                  class="w-[120px] h-[30px] ss:w-[140px] ss:h-[35px]"
                  width={140}
                  height={35}
                />
              </a>
            )}
            <p class="text-sm font-light mt-2">{footerBottom.copyright}</p>
          </div>
          <div class="flex md:w-[50%]">
            {footerBottom.footerColumns?.map((cols) => (
              <div class="flex flex-col gap-2 w-full">
                <h3 class="font-medium">{cols.title}</h3>
                <ul>
                  {cols.text?.map((item) => (
                    <li
                      class="py-[2px] font-light"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
