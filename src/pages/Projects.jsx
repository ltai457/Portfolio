// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import '../styles/project.css';
import posterImage from '../assets/Poster.png'
import posterimage1 from'../assets/PosterMusic'

const Projects = () => {
  const projects = [
    {
      title: "Internship COMPSCI 778",
      description: "Image recognition and Visual search of Pharmacy Product MediMate",
      role: "Frontend Developer",
      technologies: ["SwiftUI", "ReactJS", "TailwindCSS"],
      image: posterImage
    },
    {
      title: "Musichat",
      description: "A website that allow user to listen music and chat",
      role: "Full Stack Developer",
      technologies: ["ReactJS", "Node.js", "MongoDB","SpotifyAPI","Express"],
      image: posterimage1
    }
  ];

  return (
    <section className="project-section">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="project-card"
           >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">🎯 {project.role}</p>
                <p className="project-description">{project.description}</p>
                <div className="tech-container">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;