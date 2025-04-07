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
      title: "SocialHub - Social Media App",
      description: "A full-stack social media platform with real-time chat, posts, likes, and notifications.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Socket.IO"],
      image: "/projects/socialhub.png",
      link: "https://socialhub-demo.vercel.app",
      github: "https://github.com/john/socialhub"
    },
    {
      title: "Football Club Manager",
      description: "A PHP + MySQL system for managing teams, matches, and player data with admin CRUD controls.",
      tech: ["PHP", "MySQL", "HTML", "Bootstrap"],
      image: "/projects/football-manager.png",
      github: "https://github.com/john/football-club-manager"
    },
    {
      title: "Portfolio Website",
      description: "This very website! Built using Next.js and Tailwind CSS, with dynamic sections and animations.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/projects/portfolio.png",
      github: "https://github.com/john/portfolio"
    }
  ];
  
  export default projects;
  