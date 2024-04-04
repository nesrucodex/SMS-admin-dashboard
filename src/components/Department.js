import { Header } from "../ui/Header";

export function Department() {
  return `<div>
        ${Header({
          title: "Department Management Hub",
          img: { src: "/icons/department.png", alt: "Stat Icon" },
        })}
    </div>
    `;
}
