import { useEffect, useRef } from "react";

export default function BlockyBackground({ data }: any) {
  return Object.keys(data.map).map((row) => {
    return Object.keys(data.map[row]).map((column) => {
      return (
        <Block
          map={data.map}
          row={row}
          config={data.config}
          column={column}
          key={`${row}-${column}`}
        />
      );
    });
  });
}

function Block(data: any) {
  return (
    <div
      key={`${data.row}-${data.column}`}
      className={"blocky-background"}
      style={{
        position: "absolute",
        top: `${data.map[data.row][data.column].x * 50}px`,
        left: `${data.map[data.row][data.column].y * 50}px`,
        width: "50px",
        height: "50px",
        backgroundColor: data.map[data.row][data.column].color,
        opacity: 0.5,
        transform: "scale(0.05)",
        borderRadius: "50%",
        animation: "blockyLoad 5s linear forwards",
        animationDelay:
          (Math.abs(
            data.map[data.row][data.column].x - (data.config.numberY - 1) / 2
          ) +
            Math.abs(
              data.map[data.row][data.column].y - (data.config.numberX - 1) / 2
            )) /
            10 +
          (data.config.delay ?? 0) +
          "s",
      }}
    />
  );
}
