
fetch("/api/projects")
.then(response => response.json())
.then(({ projects }) => {
    /*
    let javaProjects = projects.filter(project => project.category === "Java" );
    let nodeProjects = projects.filter(project => project.category === "Node.js");
    console.log(javaProjects);
    console.log(nodeProjects);*/

    const projectsWrapperDiv = document.getElementById("projects-wrapper");

    projects.map(project => {
        const projectDiv = document.createElement("div");

        projectDiv.innerHTML = `
            <h3>${escapeHTML(project.name)}</h3>
            <p>Category: ${escapeHTML(project.category)}</p>
            <p>Technologies: ${escapeHTML(project.technologies.join(", "))}</p>
            <p>Links: ....</p>
        `;

        projectsWrapperDiv.appendChild(projectDiv);
    });
});