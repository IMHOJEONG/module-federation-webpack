import PiStar from "react-icons/pi/PiStar";
import PiStarFill from "react-icons/pi/PiStarFill";
import { ActionIcon } from "rizzui";
import { useState } from "react";

export default function Favorite() {
  const [favorite, setFavorite] = useState(false);
  return (
    <ActionIcon
      variant="text"
      title={"Favorite"}
      onClick={() => setFavorite((prevFav) => !prevFav)}
    >
      {favorite ? (
        <PiStarFill className="h-5 w-5 fill-orange text-orange" />
      ) : (
        <PiStar className="h-5 w-5 text-gray-500" />
      )}
    </ActionIcon>
  );
}
