import { Course } from "../components/Course";
import { Department } from "../components/Department";
import { Instractor } from "../components/Instractor";
import { Statistic } from "../components/Statistic";
import { Student } from "../components/Student";

const workingArea = document.getElementById("working-area");

// Button Selection
const statBtn = document.getElementById("statistic");
const deptBtn = document.getElementById("department");
const instratorBtn = document.getElementById("instractor");
const studBtn = document.getElementById("student");
const courseBtn = document.getElementById("course");
const logoutBtn = document.getElementById("logout");

// TODO:
const Actions = [
  { btn: statBtn, element: Statistic() },
  { btn: deptBtn, element: Department() },
  { btn: instratorBtn, element: Instractor() },
  { btn: studBtn, element: Student() },
  { btn: courseBtn, element: Course() },
];

// Initial conditions
// setActiveBtn(statBtn)
// workingArea.innerHTML = Statistic()

// ! Demo
setActiveBtn(studBtn);
workingArea.innerHTML = Student();

// Functions
function setActiveBtn(active) {
  active.classList.add("bg-stone-200/60");
  active.classList.add("ml-2");

  Actions.map((action) => action.btn).forEach((btn) => {
    if (btn !== active) {
      btn.classList.remove("bg-stone-200/60");
      btn.classList.remove("ml-2");
    }
  });
}

function btnAction(btn, element) {
  setActiveBtn(btn);
  workingArea.innerHTML = element;
}

// Registering actions for buttons
Actions.forEach((action) => {
  action.btn.addEventListener("click", () => {
    btnAction(action.btn, action.element);
  });
});

// Logout action
logoutBtn?.addEventListener("click", () => {
  setActiveBtn(logoutBtn);

  // move to login page
  const link = document.createElement("a");
  link.href = "/login.html";
  document.body.appendChild(link);
  link.click();
});
