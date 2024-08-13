import { useApiAddModalStore } from "@/store/playground/api-add-modal.store";
import ApiPlaygroundRequestKeyPair from "../request.keypair";
import MdClear from "react-icons/md/MdClear";
import { Button, Modal, Text } from "rizzui";

export default function RequestAddModal() {
  // input props
  const { open, title, closeModal } = useApiAddModalStore();

  return (
    <div>
      <Modal onClose={closeModal} isOpen={open}>
        <div className="m-auto p-4">
          <div className="flex justify-between mb-4 border-b">
            <Text>{title}</Text>
            <div className="flex gap-2">
              <MdClear />
            </div>
          </div>

          <ApiPlaygroundRequestKeyPair
            keyValue="test"
            value="test"
            onValueChange={() => {}}
          />

          <div className="flex justify-end mt-4 gap-2">
            <Button variant="flat" size="sm" className="flex">
              Cancel
            </Button>
            <Button variant="flat" size="sm" className="flex">
              OK
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
