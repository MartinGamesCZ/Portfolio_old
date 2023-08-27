"use client";

import useBlockyBackground from "@/hooks/useBlockyBackground";
import BlockyBackground from "../BlockyBackground/BlockyBackground";
import useWindowSize from "@/hooks/useWindowSize";

export default function Heading() {
  const windowSize = useWindowSize();

  const canFitX = Math.floor(windowSize.innerWidth / 50) + 1;
  const canFitY = Math.floor(windowSize.innerHeight / 50) + 1;

  const blocky = useBlockyBackground({
    numberX: canFitX,
    numberY: canFitY,
    startColor: "#4CE0B3",
    endColor: "#30BCED",
  });

  return <BlockyBackground data={blocky} />;
}
