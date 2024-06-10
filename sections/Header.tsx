import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  logo?: ImageWidget;
}

export default function Header({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10679/8dc68656-2cdc-48e3-929d-7c7dd7cb0e32",
}: Props) {
  return (
    <header class="bg-transparent">
      <div class="max-w-[1480px] pl-6 pr-3 py-4 mx-auto sm:px-8 sm:py-[30px] grid gric-cols-2">
        {logo && (
          <Image
            src={logo}
            alt="Cloudwalk logo"
            class="w-[100px] h-[25px] md:w-[138px] md:h-[35px]"
            width={138}
            height={35}
          />
        )}
        {/* The button to open modal */}
        <label htmlFor="mobile_menu_modal" className="btn">
          <Icon id="MenuBars" width={30} height={60} />
        </label>
      </div>

      <input type="checkbox" id="mobile_menu_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor="mobile_menu_modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
