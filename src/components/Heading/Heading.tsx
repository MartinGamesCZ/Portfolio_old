"use client";

import useBlockyBackground from "@/hooks/useBlockyBackground";
import BlockyBackground from "../BlockyBackground/BlockyBackground";
import useWindowSize from "@/hooks/useWindowSize";

export default function Heading() {
  const windowSize = useWindowSize();

  const canFitX = Math.floor(windowSize.innerWidth / 50);
  const canFitY = Math.floor(windowSize.innerHeight / 50);

  const blocky = useBlockyBackground({
    numberX: canFitX,
    numberY: canFitY,
    startColor: "#4CE0B3",
    endColor: "#30BCED",
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          zoom: 1.075,
        }}
      >
        <BlockyBackground data={blocky} />
      </div>
    </div>
  );
}
