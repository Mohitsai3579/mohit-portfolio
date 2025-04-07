export type Skill = {
    name: string;
    icon: string; // Use icon class names (e.g. devicon, lucide, or custom)
  };
  
  const skills: Skill[] = [
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-original colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
  ];
  
  export default skills;
  