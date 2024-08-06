import { exportToCSV } from "@utils/export-to-csv";
import { PiArrowLineUpBold } from "react-icons/pi";
import cn from "@utils/class-names";
import { ReactNode } from "react";
import { Button } from "rizzui";

type ExportButtonProps = {
  data: unknown[];
  header: string;
  fileName: string;
  className?: string;
  icon?: ReactNode;
  content?: ReactNode;
};

export default function ExportButton({
  data,
  header,
  fileName,
  className,
  icon,
  content,
}: ExportButtonProps) {
  return (
    <Button
      variant="outline"
      onClick={() => exportToCSV(data, header, fileName)}
      className={cn("w-full @lg:w-auto", className)}
    >
      {icon ?? <PiArrowLineUpBold className="me-1.5 h-[17px] w-[17px]" />}
      {content ?? "Export"}
    </Button>
  );
}
