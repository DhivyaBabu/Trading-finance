document.addEventListener("DOMContentLoaded", () => {
  const menubutton = document.querySelector("#menu-btn");
  const closebutton = document.querySelector("#close-btn");
  const sidebar = document.querySelector("aside");

  menubutton.addEventListener("click", () => {
    sidebar.style.display = "block";
  });

  closebutton.addEventListener("click", () => {
    sidebar.style.display="none";
  })
});

document.addEventListener("DOMContentLoaded", () => {
  const menubutton = document.querySelector("#login");
  const closebutton = document.querySelector("#formclose-btn");
  const form = document.querySelector(".form-container");

  menubutton.addEventListener("click", (event) => {
     event.preventDefault();
    form.style.display = "block";
  });

  closebutton.addEventListener("click", (event) => {
     event.preventDefault();
    form.style.display = "none";
  });
});

function changeSelection(clickedElement,event)
{
  event.preventDefault();
 var navLinks=document.querySelectorAll('.link');
 navLinks.forEach(function(li) {
  li.classList.remove('active');
 })
 clickedElement.classList.add('active');
}
