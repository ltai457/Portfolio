import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Lykheang Taing</h1>
        <p className="text-xl text-gray-600">Full Stack Developer</p>
      </div>
    </motion.div>
  );
};

export default Home;