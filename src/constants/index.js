import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Linux Proficient",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
     {
      title: "TechCommerce Innovators",
      company_name: "E-Commerce Express",
      icon: starbucks,
       iconBg: "#383E56",
       date: "2020",
      points: [
         "Leveraging HTML, CSS, and JavaScript, our team took on the challenge of creating an intuitive and visually appealing user interface.",
         "These collaborative efforts improved our coding practices, optimized website performance, and ensured seamless cross-browser compatibility.",
         "Delved into responsive design principles. Emphasizing user-centric design, we utilized CSS frameworks and media queries to adapt the interface for various screen sizes.",
       ],
     },
     {
       title: "CampusLink Tech Society",
       company_name: "Campus Connect",
       icon: shopify,
       iconBg: "#383E56",
       date: "2021",
       points: [
         "Leveraging React for the front end and Node.js with MongoDB for the backend, I actively contributed to creating a dynamic and feature-rich social networking platform.",
         "Responsibilities included designing user profiles, news feeds, and real-time chat functionalities.",
         "Collaborated with team members to gather insights from user interactions.",
         "Allowed me to understand the value of data analytics in enhancing user engagement.",
       ],
     },
     {
       title: "LearnHub Collaborators",
       company_name: "EduLink",
       icon: meta,
       iconBg: "#E6DEDD",
       date: "2022",
       points: [
         "Significant role in harnessing the power of the MERN (MongoDB, Express.js, React, and Node.js) stack.",
         "Leveraging Express.js with Node.js and MongoDB, I gained a deep understanding of creating scalable APIs and handling data efficiently.",
         "Implementing responsive design and ensuring cross-browser compatibility.",
         "Took part in collaborative problem-solving sessions to address technical challenges and improve the overall user experience.",
       ],
     },
    {
      title: "Tech",
      company_name: "Nordstrom",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2023 - Present",
      points: [
        "Proficient in data analytics, utilizing SQL to extract valuable insights and inform data-driven decisions.",
        "Implemented robust security and access controls to safeguard sensitive company data and ensure compliance with industry standards.",
        "Proficiently designing and executing complex SQL queries, contributing to improved inventory tracking and streamlined company operations.",
        "Participating in code reviews and providing constructive feedback to other team members.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "In our class, Gaurav consistently demonstrated a strong understanding of the subject matter and a commitment to excellence, and his work stood out. I have no doubt that he will continue to achieve great things in his future endeavors.",
      name: "Liviu Oniciuc",
      designation: "Professor",
      company: "- (Course: C#)",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        " Not only did Gaurav excel in grasping complex concepts, but he also proved to be a remarkably fast learner. His dedication and swift progress were truly impressive!",
      name: "Tim Lin",
      designation: "Professor",
      company: "- (Course: Software Engineering)",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "Gaurav joined our team and quickly adapted to the complexities of our environment. Learning the systems and processes to the degree of becoming proficient at an outstanding pace. He is always eager to learn and push himself into new areas of expertise.",
      name: "Christopher Stoliker",
      designation: "Senior Tech",
      company: "- (Nordstrom)",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Social Media Memic",
      description:
        "My latest project aims to recreate the essence of popular social media platforms. Experience a dynamic space where users can create, comment, and interact seamlessly.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "MERN",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Gauravbennywal/MERN_CRUD_Project.git",
    },
    {
      name: "Portfolio",
      description:
        "Welcome to my 3D portfolio, where I've brought my creative work to life in an immersive experience. Explore my porfolio in a captivating visual journey that blends artistry and technology.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Gauravbennywal/gaurav-portfolio.git",
    },
    {
      name: "Job IT",
      description:
        "Meticulously crafted a SQL database for training purposes, designed to sharpen skills and deepen understanding of database management, SQL queries, and data manipulation techniques.",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        // {
        //   name: "restapi",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: jobit,
      source_code_link: "https://github.com/Gauravbennywal",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };