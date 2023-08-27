import BlockyBackgroundConfig from "@/types/BlockyBackground";
import useColorGradient from "./useColorGradient";

export default function useBlockyBackground(config: BlockyBackgroundConfig) {
  const gradient = useColorGradient(
    config.startColor,
    config.endColor,
    config.numberX + config.numberY
  );

  const map: {
    [key: string]: {
      [key: string]: {
        x: number;
        y: number;
        color: string;
      };
    };
  } = {};

  for (let y = 0; y < config.numberX; y++) {
    map[y] = {};
    for (let x = 0; x < config.numberY; x++) {
      map[y][x] = {
        x,
        y,
        color: gradient[x + y],
      };
    }
  }

  return {
    config: config,
    map: map,
  };
}
