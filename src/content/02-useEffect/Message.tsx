import { Subtitle } from "@/components";
import { useEffect, useState } from "react";

export const Message: React.FC = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  // calls on component mount (first render)
  // and on component unmount(disappears from the DOM maybe because of a route change or conditional rendering)
  useEffect(() => {
    console.log("Message mounted!");

    const handleMouseMove = ({ x, y }: { x: number; y: number }) => {
      setCoords({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      console.log("Message unmounted!");
      // we need to remove the event listener to avoid memory leaks
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Subtitle>
      x: {coords.x} y: {coords.y}
    </Subtitle>
  );
};
