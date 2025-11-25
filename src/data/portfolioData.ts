export interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  contact: Contact;
  bio: string;
  resumeLink: string;
}

export interface Skills {
  llm_ops: string[];
  languages_tools: string[];
  infrastructure: string[];
  frontend_backend: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education;
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Mansi Rawat",
    role: "AI Engineer",
    location: "Tokyo, Japan",
    contact: {
      email: "officialmansi12@gmail.com",
      github: "github.com/manc1811",
      linkedin: "linkedin.com/in/mansi-rawat"
    },
    bio: "AI Engineer specializing in fine-tuning open-source LLMs, building autonomous AI Agents, and optimizing inference on multi-node GPU clusters.",
    resumeLink: "https://drive.google.com/file/d/1ILhNuAeuNXhv4jpyy6mPPBaT5GMXALKn/view?usp=sharing"
  },
  skills: {
    llm_ops: [
      "Fine-tuning (Axolotl, LLaMA-Factory)",
      "RLHF (DPO, PPO, ORPO)",
      "vLLM & Model Serving",
      "DeepEval & LangFuse",
      "Model Evaluation & Optimization",
      "Hugging Face Transformers",
      "LangChain / LangGraph",
      "Multi-Agent Systems",
      "RAG Pipelines"
    ],
    languages_tools: [
      "Python",
      "C++",
      "SQL",
      "Git & GitHub",
      "Docker",
      "Bash Scripting"
    ],
    infrastructure: [
      "Linux Systems",
      "Distributed Systems",
      "Scalable Model Deployment",
      "Multi-node GPU Clusters (H100/A6000)",
      "CI/CD Pipelines",
      "Data Structures & Algorithms"
    ],
    frontend_backend: [
      "FastAPI",
      "PostgreSQL",
      "Elasticsearch",
      "React",
      "Node.js",
      "TypeScript",
      "Tool Use & Function Calling"
    ]
  },
  experience: [
    {
      company: "Otsuka Shokai",
      role: "AI Engineer",
      location: "Tokyo, Japan",
      period: "Oct 2023 - Present",
      highlights: [
        "Fine-tuned open-source LLMs on Japanese domain corpus using Axolotl (SFT, LoRA, QLoRA, DPO, PPO, ORPO), delivering domain-adapted assistants serving 3,000+ employees with improved QA precision.",
        "Deployed and maintained 20+ models on multi-node H100/A6000 clusters via vLLM, optimizing tensor parallelism, KV-cache, and quantization for production-scale inference.",
        "Automated evaluation workflows for MT-Bench-JA, TruthfulQA, and internal QA using DeepEval and LangFuse, enabling consistent weekly regression reviews.",
        "Built RAG chatbots using LangChain and PostgreSQL, and contributed to real-time bilingual voice translation integrating Whisper, LLM translation, and OpenVoice TTS."
      ]
    },
    {
      company: "CrawlQ.ai",
      role: "Software Intern",
      location: "Netherlands (Remote)",
      period: "Oct 2022 - Jan 2023",
      highlights: [
        "Researched and tested generative AI technologies such as DALL-E, Stable Diffusion, and Midjourney to create brand-specific advertising assets.",
        "Created and refined prompt engineering strategies; collaborated with the team to build tailored image generation pipelines for multiple brands."
      ]
    },
    {
      company: "Otsuka Shokai",
      role: "AI Research Intern",
      location: "Tokyo, Japan",
      period: "June 2022 - July 2022",
      highlights: [
        "Developed a sales-focused NLP chatbot from scratch, implementing Intent Classification, Named Entity Recognition (NER), and Semantic Similarity Search using Transformers and BERT.",
        "Trained and evaluated models on proprietary product data to improve accuracy and coverage, applying precision, recall, and F1-score metrics for iterative refinement."
      ]
    }
  ],
  projects: [
    {
      title: "Data-Augmentor Toolkit",
      tech: ["Python", "LLMs", "Docker", "Azure", "Streamlit"],
      description: "Developed a Python toolkit to transform Markdown notes into SFT/RLHF datasets using LLM-based validation and intelligent chunking. Architected a concurrent pipeline with specialized agents for QA Generation and ORPO data creation.",
      link: "https://github.com/manc1811/data-augmentation-pipeline"
    },
    {
      title: "ModelMesh — Adaptive LLM Routing",
      tech: ["Python", "System Design", "LLMs", "Orchestration"],
      description: "Built an intelligent query routing system that dynamically selects between high-capability and lightweight LLMs based on query complexity to optimize cost and latency.",
      link: "https://github.com/manc1811/ModelMesh"
    }
  ],
  education: {
    institution: "Indian Institute of Technology Goa",
    degree: "B.Tech, Mechanical Engineering",
    period: "2019 - 2023"
  }
};
