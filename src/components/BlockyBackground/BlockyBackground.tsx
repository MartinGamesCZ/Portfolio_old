import { useEffect, useRef } from "react";

export default function BlockyBackground({ data }: any) {
  return Object.keys(data.map).map((row) => {
    return Object.keys(data.map[row]).map((column) => {
      return (
        <Block
          map={data.map}
          row={row}
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
        animation: "blockyLoad 0.5s ease-in-out forwards",
        animationDelay:
          (data.map[data.row][data.column].x +
            data.map[data.row][data.column].y) /
            10 +
          "s",
      }}
    />
  );
}
