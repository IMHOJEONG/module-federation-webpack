import PiTShirtFill from "react-icons/pi/PiTShirtFill";
import PiBowlFoodFill from "react-icons/pi/PiBowlFoodFill";
import PiAirplaneTakeoffFill from "react-icons/pi/PiAirplaneTakeoffFill";
import PiBasketballFill from "react-icons/pi/PiBasketballFill";
import PiBuildingsFill from "react-icons/pi/PiBuildingsFill";
import PiTruckFill from "react-icons/pi/PiTruckFill";
import PiBasketFill from "react-icons/pi/PiBasketFill";

export const transactions = [
  {
    id: 1,
    icon: <PiTShirtFill className="h-5 w-5" />,
    name: "Clothes",
    color: "text-[#00a76f]",
    fill: "bg-[#00a76f]/10",
    transactions: 32,
    price: "$127",
  },
  {
    id: 2,
    icon: <PiBowlFoodFill className="h-5 w-5" />,
    name: "Food",
    color: "text-[#00b8d9]",
    fill: "bg-[#00b8d9]/10",
    transactions: 24,
    price: "$237",
  },
  {
    id: 3,
    icon: <PiAirplaneTakeoffFill className="h-5 w-5" />,
    name: "Travel",
    color: "text-[#ff5630]",
    fill: "bg-[#ff5630]/10",
    transactions: 28,
    price: "$1723",
  },
  {
    id: 4,
    icon: <PiBasketballFill className="h-5 w-5" />,
    name: "Sports",
    color: "text-[#00a76f]",
    fill: "bg-[#00a76f]/10",
    transactions: 22,
    price: "$95",
  },
  {
    id: 5,
    icon: <PiBuildingsFill className="h-5 w-5" />,
    name: "Restaurants",
    color: "text-[#00b8d9]",
    fill: "bg-[#00b8d9]/10",
    transactions: 18,
    price: "$395",
  },
  {
    id: 6,
    icon: <PiTruckFill className="h-5 w-5" />,
    name: "Transport",
    color: "text-[#ff5630]",
    fill: "bg-[#ff5630]/10",
    transactions: 28,
    price: "$1256",
  },
  {
    id: 7,
    icon: <PiBasketFill className="h-5 w-5" />,
    name: "Groceries",
    color: "text-[#00a76f]",
    fill: "bg-[#00a76f]/10",
    transactions: 15,
    price: "$563",
  },
];
