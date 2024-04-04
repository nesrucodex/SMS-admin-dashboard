import { Header } from "../ui/Header";

export function Statistic() {
  return `<div>
        ${Header({
          title: "Statistical Visualization Hub",
          img: { src: "/icons/stat.png", alt: "Stat Icon" },
        })}
    </div>
    `;
}
