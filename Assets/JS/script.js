/* Expertise*/
const expertiseList = document.getElementById('expertise-list');

const expertise = [
    {
        icon: '<i class="bi bi-code-slash"></i>',
        title: 'Development',
        desc: 'Full-stack development with modern frameworks and best practices',
        tags: ['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL']
    },
    {
        icon: '<i class="bi bi-palette"></i>',
        title: 'Design',
        desc: 'User-centered design that combines aesthetics with functionality',
        tags: ['Figma', 'Adobe Creative', 'Prototyping', 'Design Systems']
    },
    {
        icon: '<i class="bi bi-bar-chart"></i>',
        title: 'Analytics',
        desc: 'Data-driven insights to guide product decisions and growth',
        tags: ['Python', 'SQL', 'Tableau', 'Google Analytics', 'A/B Testing']
    },
    {
        icon: '<i class="bi bi-binoculars"></i>',
        title: 'Strategy',
        desc: 'Crafting product strategies that align with business goals',
        tags: ['Market Research', 'Competitive Analysis', 'User Personas']
    },
    {
        icon: '<i class="bi bi-people"></i>',
        title: 'Collaboration',
        desc: 'Fostering teamwork and communication across all levels',
        tags: ['Agile', 'Scrum', 'Remote Work', 'Team Building']
    },
    {
        icon: '<i class="bi bi-lightbulb"></i>',
        title: 'Innovation',
        desc: 'Crafting innovative solutions that drive business growth',
        tags: ['Design Thinking', 'Prototyping', 'User Testing']
    },



];


expertise.forEach(item => {
    expertiseList.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="expertise-card h-100">
                    <div class="expertise-icon mb-3">${item.icon}</div>
                    <h4 class="expertise-title">${item.title}</h4>
                    <p class="expertise-desc">${item.desc}</p>
                    <div class="expertise-tags">
                        ${item.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
});



/* Team Members */
let teamMembersRow = document.getElementById("team-members");

let values = [
    {
        name: "Alex Chen",
        role: "Full-Stack Developer",
        img: "https://i.postimg.cc/QtLTRbnn/image.png",
        desc: "Passionate about creating scalable web applications with modern technologies. Loves solving complex problems and mentoring junior developers.",
        tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
        social: ["bi-github", "bi-linkedin", "bi-twitter"],
        animation: "fade-up-right",
        dataAosDuration: "",
        dataAosDelay: ""
    },

    {
        name: "Maria Garcia",
        role: "UI/UX Designer",
        img: "https://i.postimg.cc/8kftxKXN/image.png",
        desc: "Creative designer with a focus on user-centered design. Enjoys crafting intuitive interfaces and enhancing user experiences.",
        tags: ["Figma", "Adobe XD", "Sketch", "Usability"],
        social: ["bi-dribbble", "bi-behance", "bi-linkedin"],
        animation: "fade-down",
        dataAosDuration: "",
        dataAosDelay: ""
    },

    {
        name: "John Doe",
        role: "Front-End Developer",
        img: "https://i.postimg.cc/vTx9jKGj/image.png",
        desc: "Skilled in building responsive and interactive web applications. Enjoys working with the latest front-end technologies.",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        social: ["bi-github", "bi-behance", "bi-linkedin"],
        animation: "fade-up-left",
        dataAosDuration: "",
        dataAosDelay: ""
    },
];


values.forEach(function (item) {
    teamMembersRow.innerHTML += `
        <div class="col-md-4 mb-4" data-aos="${item.animation}" data-aos-duration="${item.dataAosDuration}" data-aos-delay="${item.dataAosDelay}">
            <div class="profile-card">
                <img src="${item.img}" class="profile-img" alt="${item.name}">
                <h5 class="profile-name">${item.name}</h5>
                <div class="profile-role">${item.role}</div>
                <p class="profile-desc">${item.desc}</p>
                <div class="profile-tags">
                    <span>${item.tags[0]}</span>
                    <span>${item.tags[1]}</span>
                    <span>${item.tags[2]}</span>
                    <span>${item.tags[3]}</span>
                </div>
                <div class="profile-social">
                    <i class="bi ${item.social[0]}"></i>
                    <i class="bi ${item.social[1]}"></i>
                    <i class="bi ${item.social[2]}"></i>
                </div>
            </div>
        </div>
    `;
});



/* core values */
let coreValuesRow = document.getElementById("core-values");
const coreValuesData = [
    {
        icon: '<i class="bi bi-heart"></i>',
        title: 'Passion-Driven',
        desc: 'We pour our hearts into every project, bringing genuine enthusiasm and creativity to solve complex challenges with innovative solutions.'
    },
    {
        icon: '<i class="bi bi-bullseye"></i>',
        title: 'Quality-Focused',
        desc: "Excellence isn't negotiable. We maintain the highest standards in code quality, design precision, and user experience delivery."
    },
    {
        icon: '<i class="bi bi-people"></i>',
        title: 'Collaborative Spirit',
        desc: 'Great things happen when brilliant minds work together. We foster open communication, knowledge sharing, and collective growth.'
    },
    {
        icon: '<i class="bi bi-arrow-up-right-circle"></i>',
        title: 'Future-Ready',
        desc: 'We stay ahead of technology curves, continuously learning and adapting to deliver cutting-edge solutions that stand the test of time.'
    }
];



coreValuesData.forEach(item => {
    coreValuesRow.innerHTML += `
            <div class="col-md-6 mb-4">
                <div class="core-value-card d-flex align-items-center h-100">
                    <div class="core-value-icon me-4">${item.icon}</div>
                    <div>
                        <h5 class="core-value-title mb-2">${item.title}</h5>
                        <p class="core-value-desc mb-0">${item.desc}</p>
                    </div>
                </div>
            </div>
        `;
});

