import EditProfileForm from "@/components/logistics/customer-profile/edit-profile/edit-profile-form";
import { useModal } from "@/components/modal-views/use-modal";
import { PiNotePencil } from "react-icons/pi";
import cn from "@utils/class-names";
import { Button } from "rizzui";

interface EditProfileProps {
  className?: string;
}

export default function EditProfileButton({ className }: EditProfileProps) {
  const { openModal } = useModal();
  return (
    <Button
      variant="outline"
      className={cn("gap-2", className)}
      onClick={() =>
        openModal({
          view: <EditProfileForm />,
          customSize: "850px",
        })
      }
    >
      <PiNotePencil className="h-5 w-5" /> Edit Profile
    </Button>
  );
}
