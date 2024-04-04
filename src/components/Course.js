import { Header } from "../ui/Header";

export function Course() {
  return `<div>
        ${Header({
          title: "Course Management Hub",
          img: { src: "/icons/course.png", alt: "Stat Icon" },
        })}
    </div>
    `;
}
