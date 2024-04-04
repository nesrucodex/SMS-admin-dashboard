import { Header } from "../ui/Header";

export function Student() {
  return `<div>
        ${Header({
          title: "Student Management Hub",
          img: { src: "/icons/student.png", alt: "Student Icon" },
        })}
    </div>
    `;
}
