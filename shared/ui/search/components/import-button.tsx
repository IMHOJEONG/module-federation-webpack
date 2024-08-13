import { useModal } from "@/components/modal-views/use-modal";
// import { PiArrowLineDownBold } from "react-icons/pi/";
import PiArrowLineDownBold from "react-icons/pi/PiArrowLineDownBold";
import cn from "@utils/class-names";
// import dynamic from "next/dynamic";
import { Button } from "rizzui";
// const FileUpload = dynamic(() => import("@/components/file-upload"), {
//   ssr: false,
// });

type ImportButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
};

export default function ImportButton({
  title,
  modalBtnLabel = "Import File",
  className,
  buttonLabel = "Import",
}: React.PropsWithChildren<ImportButtonProps>) {
  const { openModal } = useModal();

  return (
    <Button
      onClick={() =>
        openModal({
          view: (
            // <FileUpload
            //   label={title}
            //   accept="csv"
            //   multiple={false}
            //   btnLabel={modalBtnLabel}
            // />
            <div>a</div>
          ),
          customSize: "480px",
        })
      }
      className={cn("w-full @lg:w-auto", className)}
    >
      <PiArrowLineDownBold className="me-1.5 h-[17px] w-[17px]" />
      {buttonLabel}
    </Button>
  );
}
