import React from "react";

export default function AboutMeTile({
  icons,
  text,
}: {
  icons: React.ReactNode[];
  text: string;
}) {
  return (
    <div className="bg-box p-4 flex flex-row w-sm items-center justify-between rounded-lg">
      {icons[0] &&
        React.isValidElement(icons[0]) &&
        React.cloneElement(icons[0] as React.ReactElement, {
          className: `${icons[0].props.className ?? ""} text-7xl`,
        })}
      <div className="text-lg">{text}</div>
      {icons[1] &&
        React.isValidElement(icons[1]) &&
        React.cloneElement(icons[1] as React.ReactElement, {
          className: `${icons[1].props.className ?? ""} text-7xl`,
        })}
    </div>
  );
}
