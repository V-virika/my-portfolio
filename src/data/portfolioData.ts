import { Project, SkillCategory, Achievement, Publication } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'Virika Olivia Soans',
  title: 'AI/ML & Data Science Specialist',
  subheadline:
    'AI/ML-focused technology enthusiast with expertise in Python, SQL, data analytics, and software development. Skilled in building predictive models, applying statistical techniques, and leveraging ML algorithms to uncover insights and optimize performance.',
  degree: 'B.Tech in Computer Science & Engineering (Data Science)',
  university: 'Dayananda Sagar University',
  cgpa: '9.42 / 10',
  location: 'Bengaluru, India',
  email: 'virika06@gmail.com',
  phone: '+91 99863 02506',
  github: 'https://github.com/V-virika',
  linkedin: 'https://linkedin.com/in/virika-olivia-soans-3727122b8',
  avatar: '/images/profile_avatar.jpg',
  resumePdf: '/resume.pdf',
  bio: 'AI/ML-focused technology enthusiast with expertise in Python, SQL, data analytics, and software development. Skilled in designing and implementing efficient solutions, analyzing complex datasets, and developing applications that drive informed decision-making. Experienced in data processing, database management, and software engineering principles, with a strong foundation in problem-solving, algorithmic thinking, and delivering quality technical solutions. Well-versed in artificial intelligence and machine learning, with hands-on experience in building predictive models, applying statistical techniques, and leveraging ML algorithms to uncover insights and optimize performance.',
  stats: [
    { label: 'Engineering Projects', value: '7+' },
    { label: 'AI Accuracy Peak', value: '96.4%' },
    { label: 'Expo Award', value: '1st Place' },
    { label: 'Research Papers', value: '3 Published' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'prostate-cancer-classification',
    title: 'Deep Learning-Based Prostate Cancer Classification',
    subtitle: 'Vision Transformers, Explainable AI',
    description:
      'Engineered a Swin Transformer pipeline with CLAHE preprocessing, achieving 96.4% classification accuracy and 0.90 ROC-AUC on histopathological images — outperforming CNN baselines by ~8%.',
    fullDescription:
      'Engineered a Swin Transformer deep learning pipeline with CLAHE preprocessing for histopathological image classification. Integrated Gradio-based explainable AI visualization to highlight diagnostic decision regions, enabling clinician trust and supporting scalable hospital deployment.',
    tags: ['Deep Learning', 'Vision Transformers', 'Explainable AI', 'PyTorch', 'Python', 'Gradio'],
    category: 'AI & ML',
    githubUrl: 'https://github.com/V-virika/Deep-Learning-Based-Classification-of-Prostate-Cancer-from-Histopathological-Images',
    image: '/images/project_cancer_swin.png',
    metrics: { label: 'Accuracy', value: '96.4%' },
    highlights: [
      'Engineered Swin Transformer pipeline with CLAHE preprocessing (96.4% accuracy, 0.90 ROC-AUC)',
      'Outperformed traditional CNN baselines by ~8% on diagnostic accuracy',
      'Integrated Gradio explainable AI visualization for clinician decision support',
    ],
    featured: true,
  },
  {
    id: 'finova-ai',
    title: 'Finova AI – Financial Stability & Scheme Recommendation Platform',
    subtitle: 'React, Node.js, PostgreSQL, Firebase, AI-based Risk Analysis',
    description:
      'Developed an AI-driven platform to detect early debt risk and map users to relevant government schemes (PMJDY, Mudra, SHG, MSME), enabling financial inclusion for underserved communities.',
    fullDescription:
      'Built a responsive React frontend with seamless API integration to a Node.js backend, enabling real-time financial analysis, risk scoring, and personalized guidance for vulnerable demographics.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Firebase', 'AI Risk Analysis', 'Python'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/V-virika/finova-ai',
    image: '/images/project_finova_ai.png',
    metrics: { label: 'Targeting', value: 'PMJDY, Mudra, MSME' },
    highlights: [
      'Developed AI debt risk scoring algorithms for financial distress detection',
      'Automated scheme matching system connecting users with PMJDY, Mudra, SHG, & MSME grants',
      'Built responsive React UI with Node.js backend REST APIs',
    ],
    featured: true,
  },
  {
    id: 'imprints-blood-group-id',
    title: 'IMPRINTS — Fingerprint-Based Blood Group Identification',
    subtitle: 'EfficientNet, Web App',
    description:
      'Built a non-invasive blood group prediction system using EfficientNet, achieving 85.84% accuracy — deployed as a real-time web app for emergency and rural healthcare settings.',
    fullDescription:
      'Designed for scalability in resource-constrained environments, reducing reliance on lab tests in underserved communities by predicting blood groups from dermatoglyphic fingerprint features.',
    tags: ['EfficientNet', 'Deep Learning', 'Web App', 'Healthcare', 'OpenCV', 'Flask'],
    category: 'Healthcare',
    githubUrl: 'https://github.com/V-virika/IMPRINTS',
    image: '/images/project_imprints.png',
    metrics: { label: 'Accuracy', value: '85.84%' },
    highlights: [
      'Trained EfficientNet CNN model achieving 85.84% blood group prediction accuracy',
      'Deployed real-time web app interface for emergency rural healthcare clinics',
      'Eliminates chemical reagent reliance for non-invasive blood group triage',
    ],
    featured: true,
  },
  {
    id: 'aegis-ai',
    title: 'AEGIS.AI — Secure AI Prompt Firewall & Data Protection Platform',
    subtitle: 'Prompt Firewall, DLP & Sensitive Data Detection, Prompt Injection, Risk Scoring, Data Masking, RBAC',
    description:
      'Developed a real-time AI prompt firewall to detect sensitive data, malicious prompts, and policy violations before requests reach LLMs.',
    fullDescription:
      'Developed a real-time AI prompt firewall to detect sensitive data, malicious prompts, and policy violations before requests reach LLMs. Built an integrated security platform with RBAC, STEGOShield secure communication, risk analysis, data masking, and centralized audit monitoring.',
    tags: ['Prompt Firewall', 'DLP', 'Prompt Injection', 'Risk Scoring', 'Data Masking', 'RBAC', 'Python', 'AI Security'],
    category: 'AI & ML',
    githubUrl: 'https://github.com/V-virika/AEGIS.AI',
    image: '/images/project_finova_ai.png',
    metrics: { label: 'Protection', value: 'Real-Time AI DLP' },
    highlights: [
      'Developed real-time AI prompt firewall detecting sensitive data, malicious prompts, and policy violations',
      'Built integrated security platform with RBAC, STEGOShield secure communication, risk analysis, and data masking',
      'Implemented centralized audit monitoring for continuous compliance and threat detection',
    ],
    featured: true,
  },
  {
    id: 'smart-agriculture-iot',
    title: 'Smart Agriculture IoT System',
    subtitle: 'NodeMCU, IoT, Real-Time Analytics | 1st Place, University Expo 2024',
    description:
      'Deployed IoT sensor network + automated irrigation system with real-time soil moisture analytics via Blynk, reducing manual oversight and optimizing water usage.',
    fullDescription:
      'Deployed IoT sensor network + automated irrigation system with real-time soil moisture analytics via Blynk, reducing manual oversight and optimizing water usage. Won 1st place at Dayananda Sagar University project expo (2024).',
    tags: ['NodeMCU', 'IoT', 'Real-Time Analytics', 'Blynk', 'Sensors', 'Python'],
    category: 'Web & IoT',
    githubUrl: 'https://github.com/V-virika',
    image: '/images/project_agri_iot.png',
    metrics: { label: 'Recognition', value: '1st Place Expo 2024' },
    highlights: [
      'Won 1st Place at Dayananda Sagar University Project Expo 2024',
      'Deployed automated soil irrigation network with real-time Blynk analytics',
      'Reduced manual agricultural oversight and optimized water utilization',
    ],
    featured: true,
  },
  {
    id: 'hybrid-piezo-solar-ev-charging',
    title: 'Hybrid Piezo-Solar Smart Road for Sustainable EV Charging',
    subtitle: 'ESP32, IoT, Wireless Power Transfer, Renewable Energy | Academic Project',
    description:
      'Deployed IoT sensor network + automated irrigation system with real-time soil moisture analytics via Blynk, reducing manual oversight and optimizing water usage.',
    fullDescription:
      'Designed an innovative sustainable energy ecosystem combining piezoelectric pressure harvesting and solar PV panels integrated with a smart charging pad. Won 1st place at Dayananda Sagar University project expo (2026). Published research paper: “Hybrid Piezo-Solar pad with wheel embedded receiver for sustainable EV charging” (2026).',
    tags: ['ESP32', 'IoT', 'Wireless Power Transfer', 'Renewable Energy', 'Academic Project'],
    category: 'Web & IoT',
    githubUrl:
      'https://github.com/V-virika/HYBRID-PIEZO-SOLAR-SMART-PAD-WITH-WHEEL-EMBEDDED-RECEIVER-FOR-SUSTAINABLE-EV-CHARGING',
    image: '/images/project_piezo_ev.png',
    metrics: { label: 'Recognition', value: '1st Place Expo 2026' },
    highlights: [
      'Won 1st Place at Dayananda Sagar University Project Expo 2026',
      'Designed hybrid piezoelectric & solar energy harvesting matrix',
      'Published research paper on dynamic wireless power transfer for sustainable EV charging',
    ],
    featured: true,
  },
  {
    id: 'adaptive-audio-steganography',
    title: 'Adaptive Audio Steganography (STC + GOAS)',
    subtitle: '2nd Place, University Expo 2025',
    description:
      'Designed a high-fidelity steganography system using Syndrome-Trellis Codes and Hamming coding, embedding encrypted messages in audio with robust imperceptibility metrics.',
    fullDescription:
      'Engineered an adaptive audio steganography framework combining STC embedding and Generalized Optimal Distortion Assignment (GOAS) to hide encrypted data within digital audio signals without perceptual distortion.',
    tags: ['Steganography', 'Syndrome-Trellis Codes', 'Information Hiding', 'Python', 'Cryptography'],
    category: 'Research',
    githubUrl: 'https://github.com/V-virika/Adaptive-Audio-Steganography',
    image: '/images/project_steganography.png',
    metrics: { label: 'Award', value: '2nd Place Expo 2025' },
    highlights: [
      'Won 2nd Place at Dayananda Sagar University Project Expo 2025',
      'Implemented Syndrome-Trellis Codes (STC) for optimal distortion assignment',
      'Achieved robust imperceptibility & encryption security metrics on audio covers',
    ],
    featured: true,
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title:
      'Multimodal Machine Learning Approaches for Early Detection and Classification of Breast Cancer Using Imaging and Genomic Data',
    journalYear: 'Published 2025',
  },
  {
    title:
      'Automated License Plate Recognition Using Deep Learning for Smart Mobility',
    journalYear: 'Published 2026',
  },
  {
    title:
      'Hybrid Piezo-Solar pad with wheel embedded receiver for sustainable EV charging',
    journalYear: 'Published 2026',
  },
];

export const EDUCATION_LIST = [
  {
    institution: 'Dayananda Sagar University',
    degree: 'B.Tech — Computer Science & Engineering (Data Science)',
    year: '2026',
    score: 'CGPA: 9.42 / 10',
  },
  {
    institution: 'Christ Academy Junior College',
    degree: 'Class XII (PCMB)',
    year: '2022',
    score: '89.3%',
  },
  {
    institution: 'De Sales Academy',
    degree: 'Class X (ICSE)',
    year: '2020',
    score: '92%',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Analytics & Machine Learning',
    description: 'Building predictive models, deep learning pipelines, and explainable AI systems.',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Predictive Modelling', level: 92, tag: 'ML' },
      { name: 'Statistical Analysis', level: 90, tag: 'Stats' },
      { name: 'Data Visualization', level: 88, tag: 'BI' },
      { name: 'Deep Learning', level: 90, tag: 'PyTorch/TF' },
      { name: 'Explainable AI', level: 88, tag: 'XAI' },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Databases, visualization dashboards, and deployment platforms.',
    iconName: 'Cpu',
    skills: [
      { name: 'Python', level: 95, tag: 'Core Lang' },
      { name: 'SQL (MySQL)', level: 90, tag: 'Database' },
      { name: 'Power BI', level: 88, tag: 'Dashboards' },
      { name: 'Jupyter', level: 92, tag: 'Dev Tools' },
      { name: 'GitHub', level: 92, tag: 'Version Control' },
      { name: 'Cloud Platforms', level: 82, tag: 'Cloud' },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    description: 'Production-ready toolkits for data science and AI development.',
    iconName: 'Code2',
    skills: [
      { name: 'Pandas', level: 95, tag: 'Data Prep' },
      { name: 'NumPy', level: 95, tag: 'Math' },
      { name: 'Scikit-learn', level: 92, tag: 'ML Engine' },
      { name: 'TensorFlow', level: 88, tag: 'Deep Learning' },
      { name: 'PyTorch', level: 88, tag: 'Deep Learning' },
      { name: 'OpenCV', level: 85, tag: 'Computer Vision' },
      { name: 'Gradio', level: 85, tag: 'Web Interface' },
      { name: 'Flask', level: 85, tag: 'Web API' },
    ],
  },
  {
    title: 'Other & Web Technologies',
    description: 'Frontend structural design, styling, and modern web application development.',
    iconName: 'Layout',
    skills: [
      { name: 'HTML', level: 95, tag: 'Markup' },
      { name: 'CSS', level: 92, tag: 'Styling' },
      { name: 'Frontend Development', level: 88, tag: 'Web App' },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '1st Place — Project Expo',
    event: 'Smart Agriculture IoT System, Dayananda Sagar University',
    date: '2024',
    description: 'Awarded 1st place for the Smart Agriculture IoT System.',
  },
  {
    title: 'Global Nominee — NASA Space Apps Challenge 2024',
    event: "('Leveraging Earth Observation Data for Informed Agricultural Decision-Making')",
    date: '2024',
    description: "Selected as Global Nominee for 'Leveraging Earth Observation Data for Informed Agricultural Decision-Making'.",
  },
  {
    title: '2nd Place — Project Expo',
    event: 'Adaptive Audio Steganography, Dayananda Sagar University',
    date: '2025',
    description: 'Awarded 2nd place for high-fidelity Adaptive Audio Steganography system.',
  },
  {
    title: 'Best SDG Innovation',
    event: '36 Hours Hackathon-CodeSangram, Alliance University',
    date: '2026',
    description: 'Won Best SDG Innovation at 36 Hours Hackathon-CodeSangram.',
  },
];

