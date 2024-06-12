import Image from "apps/website/components/Image.tsx";
import { Props } from "site/sections/Header.tsx";

export default function DesktopHeader({ logo, navLinks }: Required<Props>) {
  return (
    <>
      <div class="max-w-[1480px] pl-6 pr-3 py-4 mx-auto sm:px-8 sm:py-[30px] flex justify-between items-center">
        <div class="flex">
          {navLinks.slice(0, 3).map((link) => (
            <div className="w-auto overflow-hidden h-[20px] group flex flex-col whitespace-nowrap">
              <a
                href={link.href}
                className="block text-white uppercase text-sm font-medium px-3 transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]"
              >
                {link.label}
              </a>
              <a
                href={link.href}
                className="block text-white uppercase text-sm font-medium px-3 transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
        {logo && (
          <a href="/" aria-label="home" aria-current="page">
            <Image
              src={logo}
              alt="Cloudwalk logo"
              class="w-[100px] h-[25px] md:w-[138px] md:h-[35px]"
              width={138}
              height={35}
            />
          </a>
        )}
        <div class="flex">
          {navLinks.slice(-3).map((link) => (
            <div className="w-auto overflow-hidden h-[20px] group flex flex-col whitespace-nowrap">
              <a
                href={link.href}
                className="block text-white uppercase text-sm font-medium px-3 transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]"
              >
                {link.label}
              </a>
              <a
                href={link.href}
                className="block text-white uppercase text-sm font-medium px-3 transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
