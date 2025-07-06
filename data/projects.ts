export type Project = {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link?: string;
    github: string;
  };
  
  const projects: Project[] = [
    {
      title: "Football Club Manager",
      description: "A PHP + MySQL system for managing teams, matches, and player data with admin CRUD controls.",
      tech: ["PHP", "MySQL", "HTML", "Bootstrap"],
      image: "image.png",
      link:"https://mohitsai3579.github.io/foot-ball-website/",
      github: "https://github.com/Mohitsai3579/foot-ball-website"
    },
    {
      title: "Portfolio Website",
      description: "This very website! Built using Next.js and Tailwind CSS, with dynamic sections and animations.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "port.png",
      link:"https://mohit-portfolio-git-main-jonnadula-mohit-sais-projects.vercel.app/",
      github: "https://github.com/Mohitsai3579/mohit-portfolio"
    },
    
    {
      title: "Cleo-Acaemy",
      description: "A full-stack Academy platform with real-time Courses Learning and notifications.",
      tech: ["React.js", "Tailwind CSS", "MongoDB", "Socket.IO"],
      image: "hello.png",
      link: "mohitsai3579.github.io/Cleo-Academy/",
      github: "https://github.com/Mohitsai3579/Cleo-Academy"
    },
    {
      title: "Sense-Hackathon",
      description: "A full-stack Academy platform with real-time Courses Learning and notifications.",
      tech: ["React.js", "Tailwind CSS", "MongoDB", "Socket.IO"],
      image: "sense.png",
      link: "https://mohitsai3579.github.io/Sense-hackathon/",
      github: "https://github.com/Mohitsai3579/Sense-hackathon"
    },
    {
      title: "PostIt - Social Media App",
      description: "A full-stack social media platform with real-time chat, posts, likes, and notifications.",
      tech: ["React.js", "Tailwind CSS", "MongoDB", "Socket.IO"],
      image: "postIt.png",
      link: "https://mohitsai3579.github.io/social-media/",
      github: "https://github.com/Mohitsai3579/social-media"
    },
    
  ];
  
  export default projects;
  