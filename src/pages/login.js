const passwordEle = document.getElementById("password");
const passwordEyeIcon = document.getElementById("password-eye");

passwordEyeIcon.innerHTML = `<img src='/icons/hide.png' class='size-6' alt="hide icon"/>`;

passwordEyeIcon.addEventListener("click", () => {
  const isPasswordSeen = passwordEle.getAttribute("type") === "text";

  if (isPasswordSeen) {
    passwordEle.setAttribute("type", "password");
    passwordEyeIcon.innerHTML = `<img src='/icons/view.png' class='size-6' alt="hide icon"/>`;
  } else {
    passwordEle.setAttribute("type", "text");
    passwordEyeIcon.innerHTML = `<img src='/icons/hide.png' class='size-6' alt="hide icon"/>`;
  }
});
