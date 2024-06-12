import Image from "apps/website/components/Image.tsx";
import { Props } from "site/sections/Header.tsx";

export default function HeaderMobile({ logo, navLinks }: Required<Props>) {
  return (
    <>
      <style>
        {`
          #mobile_menu_modal:checked + .mob-menu-modal + .btn-modal .modal-btn {
            transform: translate3d(0px, -50%, 0px);
          }
        `}
      </style>
      <div class="max-w-[1480px] pl-6 pr-3 py-4 mx-auto sm:px-8 sm:py-[30px] flex justify-between relative">
        {logo && (
          <Image
            src={logo}
            alt="Cloudwalk logo"
            class="w-[100px] h-[25px] md:w-[138px] md:h-[35px]"
            width={138}
            height={35}
          />
        )}
        <div class="block">
          <input
            type="checkbox"
            id="mobile_menu_modal"
            className="modal-toggle peer"
          />
          <div
            className="mob-menu-modal hidden peer-checked:flex absolute top-full w-full left-0 h-screen bg-black"
            role="dialog"
          >
            <div class="fixed top-0 left-0 w-full h-screen bg-black -z-10 pointer-events-none"></div>
            <nav class="p-8">
              <ul class="flex flex-col">
                {navLinks.map((link) => (
                  <li class="py-4 px-6">
                    <a
                      href={link.href}
                      class="text-white uppercase text-2xl font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* The button to open modal */}
          <label htmlFor="mobile_menu_modal" className="btn-modal">
            <div class="block overflow-hidden h-[30px]">
              <img
                style={{
                  transformStyle: "preserve-3d",
                }}
                class="transition-transform duration-300 modal-btn"
                loading="lazy"
                src="/menu-icon.svg"
                width={30}
                height={60}
                alt="Menu Icon"
              />
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
