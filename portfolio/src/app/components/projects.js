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
    <div className="bg-black text-white min-h-screen px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-16">
          <span className="text-green-500 font-mono text-xl mr-4">03.</span>
          <h2 className="text-4xl font-semibold text-white mr-8">Some stuff I&apos;ve built</h2>
          <div className="flex-1 h-px bg-green-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300 flex flex-col h-full"
            >
              {/* Header with icons */}
              <div className="flex justify-between items-start mb-4">
                <Folder className="text-green-500 w-8 h-8" />
                <div className="flex gap-3">
                    {project.showGithub && showGithubLinks && (
                        <a
                        href={project.githubLink}
                        className="text-gray-400 hover:text-green-500 transition-colors"
                        >
                        <Github className="w-5 h-5" />
                        </a>
                    )}

                    {project.showExternal && showExternalLinks && (
                        <a
                        href={project.externalLink}
                        className="text-gray-400 hover:text-green-500 transition-colors"
                        >
                        <ExternalLink className="w-5 h-5" />
                        </a>
                    )}

                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.featured && (
                    <span className="text-green-500">{project.title}</span>
                )}

                {!project.featured && project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                    <span
                    key={techIndex}
                    className="text-gray-400 text-xs font-mono">
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

