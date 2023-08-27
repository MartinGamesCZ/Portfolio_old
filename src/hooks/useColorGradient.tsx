export default function useColorGradient(
  start: string,
  end: string,
  steps: number
) {
  const gradient = [];
  const startRGB = hexToRgb(start);
  const endRGB = hexToRgb(end);

  for (let i = 0; i < steps; i++) {
    const newColor = interpolateColor(startRGB, endRGB, steps, i);
    gradient.push(newColor);
  }

  return gradient;
}

function interpolateColor(start: any, end: any, steps: any, count: any) {
  const stepFactor = count / (steps - 1);
  const interpolatedColor = {
    r: start.r + stepFactor * (end.r - start.r),
    g: start.g + stepFactor * (end.g - start.g),
    b: start.b + stepFactor * (end.b - start.b),
  };

  return rgbToHex(interpolatedColor);
}

function hexToRgb(hex: any) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex(rgb: any) {
  const toHex = (number: any) => {
    let hex = Math.round(number).toString(16);

    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  };

  return "#" + toHex(rgb.r) + toHex(rgb.g) + toHex(rgb.b);
}
