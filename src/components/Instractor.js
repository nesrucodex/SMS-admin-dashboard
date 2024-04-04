import { Header } from "../ui/Header";

export function Instractor() {
  return `<div>
        ${Header({
          title: "Instractor Management Hub",
          img: { src: "/icons/instractor.png", alt: "Stat Icon" },
        })}
    </div>
    `;
}
