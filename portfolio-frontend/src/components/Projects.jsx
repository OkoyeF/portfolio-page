import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Database, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const handleProjectClick = (projectName) => {
    toast({
      title: "🚧 Project Details Coming Soon!",
      description: `${projectName} details will be available soon. Stay tuned for updates!`,
      duration: 3000,
    });
  };

  const handleGithubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projects = [
    {
      id: 1,
      title: "Task Tracker Application",
      summary: "A comprehensive task management application built with Node.js, Express, and PostgreSQL, containerized with Docker and automated with GitHub Actions.",
      technologies: ["Backend: Node.js, Express Database: PostgreSQL", "Frontend: EJS templates, Bootstrap, jQuery", "Containerization: Docker, Docker Compose", "CI/CD: GitHub Actions", "Monitoring: Prometheus", "Version Control: Git, GitHub"],
      icon: Zap,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      githubUrl: "https://github.com/OkoyeF/task-trackeer.git"
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner Flashcards Practice",
      summary: "It displays flashcards with AWS-related questions and answers, designed for learners preparing for the AWS Cloud Practitioner Certification.",
      technologies: ["HTML, CSS, and JavaScript, GitHub Actions, Docker"],
      icon: Database,
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      siteUrl: "https://cloudpractitionerflashcards.dataocelot.com/"
    },
    {
      id: 3,
      title: "Secure DevOps Infrastructure",
      summary: "Established enterprise-grade CI/CD pipelines with automated security scanning, infrastructure as code, and zero-downtime deployments. Reduced deployment time by 80%.",
      technologies: ["AWS CodePipeline", "CloudFormation", "ECS", "ECR", "IAM"],
      icon: Shield,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      title: "AI-Powered Content Platform",
      summary: "Created an intelligent content management system using AWS AI services. Features automatic content categorization, sentiment analysis, and personalized recommendations.",
      technologies: ["AWS Rekognition", "Comprehend", "SageMaker", "Lambda", "S3"],
      icon: Server,
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 5,
      title: "Global CDN & Monitoring",
      summary: "Implemented worldwide content delivery network with advanced monitoring and alerting. Achieved 40% faster load times globally with comprehensive performance analytics.",
      technologies: ["CloudFront", "Route 53", "CloudWatch", "WAF", "Lambda@Edge"],
      icon: Globe,
      gradient: "from-indigo-400 to-blue-500",
      bgGradient: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore my latest AWS cloud solutions and infrastructure projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} mb-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-white/80 mb-4 leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={`${project.id}-${techIndex}`}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.siteUrl && (
                    <Button
                      onClick={() => window.open(project.siteUrl, '_blank', 'noopener,noreferrer')}
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button
                      onClick={() => handleGithubClick(project.githubUrl)}
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  
                  {!project.siteUrl && !project.githubUrl && (
                    <Button
                      onClick={() => handleProjectClick(project.title)}
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
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