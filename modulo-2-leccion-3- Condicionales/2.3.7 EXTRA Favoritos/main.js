const teachers = document.querySelectorAll(".teacher");

teachers.forEach(teacher => {
  teacher.addEventListener("click", () => {
    teacher.classList.toggle("teacher--selected");

    const favorite = teacher.querySelector(".favorite");

    if (favorite.textContent === "Añadir") {
      favorite.textContent = "Quitar";
    } else {
      favorite.textContent === "Añadir";
    }
  });
});