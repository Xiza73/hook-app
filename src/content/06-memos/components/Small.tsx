import { memo } from "react";

export interface SmallProps {
  value: number;
}

export const Small: React.FC<SmallProps> = memo(({ value }) => {
  console.log("I was rendered :(");

  return <small>{value}</small>;
});
