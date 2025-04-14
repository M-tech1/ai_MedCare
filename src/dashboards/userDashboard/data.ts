import { CardProps } from "@/components/ui/cards/card";
import { FaHeartbeat } from "react-icons/fa";
import { FcBearish, FcBiohazard } from "react-icons/fc";

export const cardData: CardProps[] = [
  {
    title: "Heart Conditions",
    icon: FaHeartbeat,
    color: "#e5f8fa",
    description: "testing content",
  },

  {
    title: "Health Stats",
    icon: FcBearish,
    color: "#eae0fc",
    description: "testing card 2",
  },
  {
    title: "Card 2",
    icon: FcBiohazard,
    description: "testing card 3",
    color: "#fcf8e0",
  },
];
