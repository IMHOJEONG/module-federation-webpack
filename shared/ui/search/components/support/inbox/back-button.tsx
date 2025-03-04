import PiArrowLeft from "react-icons/pi/PiArrowLeft";
// import { useRouter } from "next/navigation";
import { Button } from "rizzui";

export default function BackButton() {
  // const router = useRouter();
  return (
    <Button
      size="sm"
      variant="outline"
      // onClick={() => router.back()}
      className="flex items-center gap-2"
    >
      <PiArrowLeft />
      Back
    </Button>
  );
}
