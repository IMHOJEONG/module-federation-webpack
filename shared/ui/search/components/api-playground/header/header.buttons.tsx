import { useApiValidateStore } from "@/store/playground/api-validate.store";
import ApiPlaygroundHeaderButton from "./header.button";
import { MdOutlineHelp, MdClear } from "react-icons/md";
import { FaGear } from "react-icons/fa6";

export default function ApiPlaygroundHeaderButtons() {
  const { setSelectedItem } = useApiValidateStore();

  return (
    <div className="flex gap-2 w-full justify-end pl-10">
      <ApiPlaygroundHeaderButton
        className="mr-auto"
        Icon={<MdClear className="scale-125" />}
        onClick={() => setSelectedItem(undefined)}
        tooltip="초기화"
      />
      <ApiPlaygroundHeaderButton
        Icon={<FaGear />}
        onClick={() => {}}
        tooltip="설정"
      />
      <ApiPlaygroundHeaderButton
        Icon={<MdOutlineHelp className="scale-125" />}
        onClick={() => {}}
        tooltip="도움말"
      />
    </div>
  );
}
