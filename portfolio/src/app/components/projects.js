import React, { useState } from 'react';
import { Folder, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  // state for show or hide links
  const [showGithubLinks, setShowGithubLinks] = useState(true);
  const [showExternalLinks, setShowExternalLinks] = useState(true);

  const projects = [
    {
      title: "bhAIya",
      description: "bhAIya is an AI app, built with Python and Llama, Mistral, and Llava-phi Vision models, to help Indian shopkeepers. It gives personalized recommendations and allows smart search (by text or image), even offering instant product info from a photo. The system learns from store databases for efficient searching. Beyond retail, its smart search and recommendation features are adaptable for various fields, improving how users find information.",
      technologies: ["Python", "Hugging Face", "PyTorch", "Ollama", "FastAPI", "JSON", "Redis", "MongoDB","HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Exterminator11/newBhaiya",
      showGithub: true,
      externalLink: "#",
      showExternal: false
    },
    {
      title: "Analyz - The DSA ChatBot",
      description: "This VS Code extension helps you master Data Structures and Algorithms. It's powered by the Mistral 7B Instruct and OpenAI GPT-3 models, providing in-depth time and space complexity analysis. You can also generate flowcharts from natural language and translate code across 74 languages for wider accessibility.",
      technologies: ["Python", "HuggingFace", "LangChain", "Streamlit", "Mermaid JS", "Typescript"],
      githubLink: "https://github.com/srujan-landeri/Analyz-VSCode-Extension-Demo",
      showGithub: true,
      externalLink: "#",
      showExternal: false
    },
    {
      title: "AI Zero-day attack detection software",
      description: "With an 80% real-world accuracy, this system actively detects and alerts users to potential cyber-attacks. It employs a sophisticated two-layer machine learning strategy, leveraging XGBoost, Local Outlier Factor, and Isolation Forest models. Upon detection, the system's firewall adapts and blocks attacks in real time.",
      technologies: ["Python", "Electron JS", "Kali Linux", "Node Js", "Machine Learning"],
      githubLink: "https://github.com/Exterminator11/Artemis",
      showGithub: true,
      externalLink: "#",
      showExternal: false
    },
    {
      title: "N.O.V.A.S",
      description: "This system uses custom scrapers and OCR for detailed web text extraction. Its XGBClassifier machine learning model accurately (95%) detects new 'dark patterns' as they appear. A URL overlay silently cross-references a crowdsourced database to highlight these patterns on search results in real time. An integrated chatbot also enhances Browse by providing personalized responses from webpage content.",
      technologies: ["Python", "Javascript", "HTML", "CSS", "Chromium", "MongoDB", "FastAPI", "OCR", "Machine learning", "Javascript"],
      githubLink: "https://github.com/srujan-landeri/N.O.V.A.S",
      showGithub: true,
      externalLink: "#",
      showExternal: false
    },
    {
      title: "InHouse LLM",
      description: "An application that harnesses Large Language Models (LLMs) for powerful summarization and question-answering, all without an internet connection. This app uses a Knowledge Graph (Graph Augmented Generation - GAG) approach for highly efficient and cost-effective Q&A, keeping responses concise. It's also optimized for large datasets and uses quantized models to save memory, enabling smooth on-device computing.",
      technologies: ["Python","Streamlit","Transformers","HuggingFace","Pytorch","Graph Augumented Generation(GAG)","Retrieval Augumented Generation(RAG)"],
      githubLink: "https://github.com/Exterminator11/InhouseLLM",
      showGithub: true,
      externalLink: "#",
      showExternal: false
    },
    {
        title: "Kaggle notebooks",
      description: "Finetuned and trained various models on Kaggle datasets, including image classification, text generation, recommendation systems and more.",
      technologies: ["Python","Machine Learning", "Deep Learning"],
      githubLink: "#",
      showGithub: false,
      externalLink: "https://www.kaggle.com/exterminator11",
      showExternal: true
    }
  ];

  return (
    <div className="section bg-background">
      <div className="container">
        <div className="flex items-center mb-8 md:mb-12">
          <span className="text-green-500 font-mono text-lg md:text-xl mr-4">03.</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mr-4 md:mr-8">Some stuff I&apos;ve built</h2>
          <div className="flex-1 h-px bg-green-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card-background p-4 md:p-6 rounded-lg hover:bg-hover-background transition-all duration-300 flex flex-col h-full border border-border-color hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 hover:border-green-500/50"
            >
              {/* Header with icons */}
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <Folder className="text-green-500 w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex gap-2 md:gap-3">
                    {project.showGithub && showGithubLinks && (
                        <a
                        href={project.githubLink}
                        className="text-muted-foreground hover:text-green-500 transition-colors transform hover:scale-110 duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    )}

                    {project.showExternal && showExternalLinks && (
                        <a
                        href={project.externalLink}
                        className="text-muted-foreground hover:text-green-500 transition-colors transform hover:scale-110 duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground group-hover:text-green-500 transition-colors duration-300">
                {project.featured && (
                    <span className="text-green-500">{project.title}</span>
                )}
                {!project.featured && project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                    <span
                    key={techIndex}
                    className="text-muted-foreground text-xs md:text-sm font-mono group-hover:text-foreground transition-colors duration-300">
                    {tech}
                    </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

