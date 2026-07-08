/* ==========================================
   STUDENT PORTFOLIO JAVASCRIPT
   Author: Elizabeth N. Obibuogu
========================================== */


/* ==========================================
   ACADEMIC PLANNER
========================================== */

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

if(taskInput && taskList){

    function updateCounter(){

        if(taskCount){

            taskCount.textContent = totalTasks;

        }

    }

    function addTask(){

        const task = taskInput.value.trim();

        if(task === ""){

            alert("Please enter a task.");

            return;

        }

        const li = document.createElement("li");

        const span = document.createElement("span");

        span.textContent = task;

        const buttonGroup = document.createElement("div");

        const completeButton = document.createElement("button");

        completeButton.textContent = "✓";

        completeButton.classList.add("complete-btn");

        completeButton.onclick = function(){

            li.classList.toggle("completed");

        };

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "✕";

        deleteButton.classList.add("delete-btn");

        deleteButton.onclick = function(){

            li.remove();

            totalTasks--;

            updateCounter();

        };

        buttonGroup.appendChild(completeButton);

        buttonGroup.appendChild(deleteButton);

        li.appendChild(span);

        li.appendChild(buttonGroup);

        taskList.appendChild(li);

        totalTasks++;

        updateCounter();

        taskInput.value = "";

    }

    window.addTask = addTask;

}



/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(event){

        event.preventDefault();

        const name =
        document.getElementById("name").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const phone =
        document.getElementById("phone").value.trim();

        const message =
        document.getElementById("message").value.trim();

        if(name === "" ||
           email === "" ||
           phone === "" ||
           message === ""){

            alert("Please complete all fields.");

            return;

        }

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){

            alert("Please enter a valid email address.");

            return;

        }

        const phonePattern =
        /^[0-9+\-\s]{7,15}$/;

        if(!phonePattern.test(phone)){

            alert("Please enter a valid phone number.");

            return;

        }

        alert("Your message has been sent successfully!");

        contactForm.reset();

    });

}



/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(function(link){

    if(link.getAttribute("href") === currentPage){

        link.style.color = "#38BDF8";

        link.style.fontWeight = "700";

    }

});



/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/* ==========================================
   FADE-IN ANIMATION
========================================== */

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(function(section){

    section.classList.add("hidden");

    observer.observe(section);

});



/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuButton =
document.getElementById("menu-btn");

const navigation =
document.querySelector("nav");

if(menuButton && navigation){

    menuButton.addEventListener("click",function(){

        navigation.classList.toggle("active");

    });

}



/* ==========================================
   CURRENT YEAR
========================================== */

const year =
document.getElementById("year");

if(year){

    year.textContent =
    new Date().getFullYear();

}