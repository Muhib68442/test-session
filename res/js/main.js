console.log("JS Connected from res/js/main.js");


document.addEventListener('DOMContentLoaded', function () {
    // Function to open the project popup
    // Updated openProjectPopup function
     // Updated openProjectPopup function
     window.openProjectPopup = function (title, logoSrc, createdWith, description, imageSrc, liveLink) {
        // Update popup content

        var popupContainer = document.querySelector('.project-popup .popup-container');
        var popupImage = popupContainer.querySelector('.proj-img');
        var logoImage = popupContainer.querySelector('.proj-logo');
        var projectName = popupContainer.querySelector('.proj-name');
        var createdWithText = popupContainer.querySelector('.proj-created');
        var descriptionText = popupContainer.querySelector('.proj-desc');
        var projectLink = popupContainer.querySelector('.proj-link-btn');
        var projLinkText = popupContainer.querySelector('.proj-link-text');
        // Set the content with the data
        popupImage.src = imageSrc;
        logoImage.src = logoSrc;
        projectName.textContent = title;
        createdWithText.textContent = "Created with " + createdWith;
        descriptionText.textContent = description;
        projLinkText.textContent = liveLink;
        projectLink.href = liveLink;
        
        // Show the project popup and center it
        var projectPopup = document.querySelector('.project-popup');
        projectPopup.style.display = 'block';
        projectPopup.style.top = '50%';
        projectPopup.style.left = '50%';
        projectPopup.style.transform = 'translate(-50%, -50%)';
    };

    


    // Function to close the project popup
    window.closeProjectPopup = function () {
        document.querySelector('.project-popup').style.display = 'none';
    };
    




    // Your JSON array of projects
    var projectsData = [
        {
            "title": "SPI Navigation",
            "logoSrc": "data/proj-thumb/proj-logo/spinav.png",
            "createdWith" : "React, JS",
            "description": "Navigation of SPI Campus",
            "imageSrc": "data/proj-thumb/spinav.jpg",
            "liveLink": "https://spinav.netlify.app"
          },
          {
              "title": "To Do",
              "logoSrc": "data/proj-thumb/proj-logo/to_do.png",
              "createdWith" : "PHP, MySQL",
              "description": "A ToDo Web-App",
              "imageSrc": "data/proj-thumb/todo.jpg",
              "liveLink": "http://todomuhib.42web.io"
          },
          {
              "title": "Muhib Photography",
              "logoSrc": "data/proj-thumb/proj-logo/muhib-photography.png",
              "createdWith" : "HTML, CSS, JS",
              "description": "Photography gallery of Muhib's Click",
              "imageSrc": "data/proj-thumb/muhib-photography.jpg",
              "liveLink": "https://muhib68442.github.io/Muhib-Photography"
          },
          {
              "title": "LAB IMS",
              "logoSrc": "data/proj-thumb/proj-logo/ims.png",
              "createdWith" : "HTML, CSS, JS, PHP, MySQL",
              "description": "Inventory Management System of a Laboratory in easy now !",
              "imageSrc": "data/proj-thumb/lab_ims.jpg",
              "liveLink": "https://muhib68442.github.io/IMS-Showcase/pages/project-details.html?project=0"
          },
          {
              "title": "UKiit",
              "logoSrc": "data/proj-thumb/proj-logo/ukiit.png",
              "createdWith" : "HTML, CSS, JS",
              "description": "Utility Toolkit. Make your PC Optimized, Faster and Best In Performance.",
              "imageSrc": "data/proj-thumb/ukiit.jpg",
              "liveLink": "https://ukiit.netlify.app"
          }

    ];

    // Function to dynamically create project cards
    function createProjectCards() {
        var projectsContainer = document.getElementById('projectsContainer');

        projectsData.forEach(function (project, index) {
            var projectCard = document.createElement('a');
            projectCard.href = "#";
            projectCard.classList.add('project');
            projectCard.dataset.project = index; // Use the index as a unique identifier

            projectCard.innerHTML = `
                <img class="project-img" src="${project.imageSrc}" alt="project-thumb">
                <div class="project-text-container">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;

            projectCard.addEventListener('click', function (event) {
                event.preventDefault();
                openProjectPopup(project.title, project.logoSrc, project.createdWith, project.description, project.imageSrc, project.liveLink);
            });

            projectsContainer.appendChild(projectCard);
        });
    }

    // Call the function to create project cards
    createProjectCards();
});
