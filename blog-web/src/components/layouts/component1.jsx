import { useContext } from "react";
import { FirstContext } from "@/utils/context";

export const Text = () => {
  const value = useContext(FirstContext);
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
