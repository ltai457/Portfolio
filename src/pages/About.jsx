// src/pages/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4 md:px-8 max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-gray-600">
            [Your background and journey in tech/design]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillCard title="Frontend" skills={["React", "TypeScript", "Tailwind"]} />
            <SkillCard title="Backend" skills={["Node.js", "Python", "SQL"]} />
            <SkillCard title="Tools" skills={["Git", "Docker", "AWS"]} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="text-gray-600">
            [Your education details]
          </p>
        </section>
      </div>
    </motion.div>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="p-4 rounded-lg bg-white shadow-md">
    <h3 className="font-semibold mb-2">{title}</h3>
    <ul className="space-y-1">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600">{skill}</li>
      ))}
    </ul>
  </div>
);

export default About;