function toggleProjects() {
  const projects = document.getElementById("projects");
  if (projects.style.display === "flex") {
    projects.style.display = "none";
  } else {
    projects.style.display = "flex";
  }
}